# Changed — Bundle Modifications Report (Part 030 / 116)

- **Updated at**: `2026-11-27T00:59 JST`
- **Part**: `30 / 116` (**290** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 029](part-029.md) · [Part 031 →](part-031.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/266.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/bloxd.io/chunks/js/266.js` (35 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e)

#### 20. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2441-L2448` → after: `L71-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L71-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/266.js#L71-L105) · [Before (L2441-L2448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/266.js#L2441-L2448)

```diff
-       handleBaseRenderHeadingChange(VV, eV) {
-         const xV = this.iv.sF.getState(VV, "meshRotation");
-         xV && (xV.baseRenderRotation[1] = eV);
-         for (const JV of (0, hx.b)().getFollowingEntities(VV)) {
-           const VV = this.iv.sF.getState(JV, "meshRotation"),
-             xV = this.iv.sF.zJV(JV);
-           VV && xV.GJV && (VV.baseRenderRotation[1] = eV)
-         }
+       normalize() {
+         const HH = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
+         let BH = 0;
+         return 0 !== HH && (BH = 1 / HH), this.normal.x *= BH, this.normal.y *= BH, this.normal.z *= BH, this.d *= BH, this
+       }
+       transform(HH) {
+         const BH = rH._TmpMatrix;
+         HH.invertToRef(BH);
+         const LH = BH.m,
+           AH = this.normal.x,
+           SH = this.normal.y,
+           hH = this.normal.z,
+           tH = this.d,
+           zH = AH * LH[0] + SH * LH[1] + hH * LH[2] + tH * LH[3],
+           CH = AH * LH[4] + SH * LH[5] + hH * LH[6] + tH * LH[7],
+           EH = AH * LH[8] + SH * LH[9] + hH * LH[10] + tH * LH[11],
+ ... (19 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2450-L2455` → after: `L107-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/266.js#L107-L108) · [Before (L2450-L2455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/266.js#L2450-L2455)

```diff
-       handleFollowingOffsetChange(VV, eV) {
-         const xV = this.iv.sF.zJV((0, ax.c)(VV));
-         if (xV && xV.offset) {
-           const VV = eV ? Array.from(eV) : Mx().ZERO;
-           xV.offset[0] = VV[0], xV.offset[1] = VV[1], xV.offset[2] = VV[2]
-         }
+       isFrontFacingTo(HH, BH) {
+         return AH.o.Dot(this.normal, HH) <= BH
```

#### 22. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2457-L2459` → after: `L110-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L110-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/266.js#L110-L111) · [Before (L2457-L2459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/266.js#L2457-L2459)

```diff
-       handleShouldMatchFollowingEntityRotationChange(VV, eV) {
-         const xV = this.iv.sF.zJV((0, ax.c)(VV));
-         xV && (xV.GJV = null === eV || void 0 === eV || eV)
+       signedDistanceTo(HH) {
+         return AH.o.Dot(HH, this.normal) + this.d
```

#### 23. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2461-L2465` → after: `L113-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/266.js#L113-L114) · [Before (L2461-L2465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/266.js#L2461-L2465)

```diff
-       handlePositionChange(VV, eV, xV) {
-         if (this.iv.sF.wxV(VV, "smoothToServerPos")) {
-           const JV = this.iv.sF.getState(VV, "smoothToServerPos");
-           (0, mx.setServerPositionAxis)(JV, Ix[eV], xV)
-         }
+       static FromArray(HH) {
+         return new rH(HH[0], HH[1], HH[2], HH[3])
```

#### 24. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2467-L2482` → after: `L116-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L116-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/266.js#L116-L118) · [Before (L2467-L2482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/266.js#L2467-L2482)

```diff
-       setupItemHandlers() {
-         this.roomStateCallbacks.items.uF(((VV, eV) => {
-           this.allItems[eV] = VV, (0, cx.n)(this.iv, eV, [VV.x, VV.y, VV.z], VV.id, {
-             amount: VV.amount,
-             attributes: JSON.parse(VV.attributes),
-             Xx: (0, Oe.c)(this.iv).cantPickUpItem(eV),
-             size: VV.size,
-             predictedAt: (0, hx.b)().client.itemDropPrediction.onServerItemAdded(eV)
-           });
-           const xV = this.createStateCallbacks(VV);
-           for (const JV of Zx(yx)) this.onItemFieldChange(eV, JV, VV[JV]), this.addDetacher(eV, this.listenForFutureChanges(xV, JV, (VV => {
-             this.onItemFieldChange(eV, JV, VV)
-           })))
-         })), this.roomStateCallbacks.items.bR(((VV, eV) => {
-           delete this.allItems[eV], this.detach(eV), (0, hx.b)().client.itemDropPrediction.onServerItemRemoved(eV), this.iv.sF.wxV(eV, this.iv.sF.names.itemState) && this.iv.sF.deleteEntity(eV), (0, Oe.c)(this.iv).disposeEntity(eV)
-         }))
+       static FromPoints(HH, BH, LH) {
+         const AH = new rH(0, 0, 0, 0);
+         return AH.copyFromPoints(HH, BH, LH), AH
```

#### 25. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2484-L2713` → after: `L120-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L120-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/266.js#L120-L122) · [Before (L2484-L2713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/266.js#L2484-L2713)

```diff
-       onItemFieldChange(VV, eV, xV) {
-         if (eV in Ix) {
-           if (this.iv.sF.wxV(VV, "itemState")) {
-             const JV = this.iv.sF.getState(VV, "smoothToServerPos");
-             (0, mx.setServerPositionAxis)(JV, Ix[eV], xV), (0, hx.b)().client.itemDropPrediction.onServerItemMoved(VV)
-           }
-           return
-         }
-         if (!this.iv.sF.wxV(VV, "itemState")) return;
-         const JV = this.iv.sF.getState(VV, "itemState");
-         "amount" === eV && xV !== JV.amount && (JV.creationTime = Date.now()), JV[eV] = "attributes" === eV ? JSON.parse(xV) : xV
-       }
-       dispose() {
-         if (!this.ik) {
-           this.ik = !0, this.iv.off("beforeInputs", this.onFrame), this.iv.off("iZ", this.Iq), this.queuedSetups.clear(), this.promotedSetups.clear();
-           for (const VV of this.deferredSetups.values()) de.h.unsubscribe(VV);
- ... (214 more removed lines; see GitHub link above)
+       static FromPositionAndNormal(HH, BH) {
+         const LH = new rH(0, 0, 0, 0);
+         return this.FromPositionAndNormalToRef(HH, BH, LH)
```

#### 26. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2715-L2726` → after: `L124-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L124-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/266.js#L124-L125) · [Before (L2715-L2726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/266.js#L2715-L2726)

```diff
-       noteEdit(VV, eV, xV) {
-         const UV = (0, JV.V)(VV),
-           yV = (0, JV.V)(eV),
-           pV = (0, JV.V)(xV),
-           QV = this.now();
-         if (UV !== this.lastChunkX || yV !== this.lastChunkY || pV !== this.lastChunkZ) {
-           this.lastChunkX = UV, this.lastChunkY = yV, this.lastChunkZ = pV, this.lastChunkId = (0, YV.d)(UV, yV, pV), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, QV);
-           for (const [VV, eV] of this.editedAt) {
-             if (eV >= QV - 3e5) break;
-             this.editedAt.delete(VV)
-           }
-         } else this.editedAt.set(this.lastChunkId, QV)
+       static FromPositionAndNormalToRef(HH, BH, LH) {
+         return LH.normal.Tm(BH), LH.normal.normalize(), LH.d = -HH.dot(LH.normal), LH
```

#### 27. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2728-L2731` → after: `L127-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L127-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/266.js#L127-L129) · [Before (L2728-L2731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/266.js#L2728-L2731)

```diff
-       chunksEditedSince(VV) {
-         const eV = [];
-         for (const [xV, JV] of this.editedAt) JV >= VV && eV.push(xV);
-         return eV
+       static SignedDistanceToPlaneFromPositionAndNormal(HH, BH, LH) {
+         const rH = -(BH.x * HH.x + BH.y * HH.y + BH.z * HH.z);
+         return AH.o.Dot(LH, BH) + rH
```

#### 28. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2735` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/266.js#L134) · [Before (L2735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/266.js#L2735)

```diff
-   40273: (VV, eV, xV) => {
+   39588: (HH, BH, LH) => {
```

#### 29. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2737-L2740` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/266.js#L136) · [Before (L2737-L2740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/266.js#L2737-L2740)

```diff
-       c: () => re,
-       e: () => le,
-       i: () => Re,
-       j: () => Le
+       d: () => SH
```

#### 30. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2742-L2786` → after: `L138-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L138-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/266.js#L138-L141) · [Before (L2742-L2786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/266.js#L2742-L2786)

```diff
-     var JV = xV(4098),
-       YV = xV(9396),
-       UV = xV(37840),
-       yV = xV(1530),
-       pV = xV(37925),
-       QV = xV(40167),
-       nV = xV(40154),
-       wV = xV(4163),
-       ZV = xV(39020),
-       vV = xV(40276),
-       rV = xV(1269),
-       kV = xV(364),
-       bV = xV(32),
-       EV = xV(2080),
-       BV = xV(99),
-       jV = xV(40),
- ... (29 more removed lines; see GitHub link above)
+     var AH = LH(39595);
+     const rH = (HH, BH, LH) => HH ? HH.getClassName && "Mesh" === HH.getClassName() ? null : !HH.getClassName || "SubMesh" !== HH.getClassName() && "PhysicsBody" !== HH.getClassName() ? HH.clone ? HH.clone() : Array.isArray(HH) ? HH.slice() : LH && "object" === typeof HH ? {
+       ...HH
+     } : null : HH.clone(BH) : null;
```

#### 31. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L2788-L3631` → after: `L143-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L143-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/266.js#L143-L171) · [Before (L2788-L3631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/266.js#L2788-L3631)

```diff
-       constructor(VV) {
-         this.storeForMs = VV, this.clickDownDurations = new FV.d
-       }
-       registerClickDownDuration(VV) {
-         this.clickDownDurations.enqueue({
-           dur: VV,
-           atTime: Date.now()
-         });
-         const eV = Date.now() - this.storeForMs;
-         for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < eV;) this.clickDownDurations.dequeue()
-       }
-       clickDownDurationsCheck(VV) {
-         if (VV > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
-         let eV = 0,
-           xV = 0;
-         return this.clickDownDurations.forEach((JV => {
- ... (828 more removed lines; see GitHub link above)
+       static DeepCopy(HH, BH, LH, SH) {
+         let hH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const tH = function(HH) {
+           const BH = [];
+           do {
+             const LH = Object.getOwnPropertyNames(HH);
+             for (const HH of LH) - 1 === BH.indexOf(HH) && BH.push(HH)
+           } while (HH = Object.getPrototypeOf(HH));
+           return BH
+         }(HH);
+         for (const CH of tH) {
+           if ("_" === CH[0] && (!SH || -1 === SH.indexOf(CH))) continue;
+           if (CH.endsWith("Observable")) continue;
+           if (LH && -1 !== LH.indexOf(CH)) continue;
+           const tH = HH[CH],
+             EH = typeof tH;
+ ... (13 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L3832-L3839` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/266.js#L177) · [Before (L3832-L3839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/266.js#L3832-L3839)

```diff
-   40293: (VV, eV, xV) => {
-     xV.d(eV, {
-       b: () => UV,
-       c: () => yV
-     });
-     var JV = xV(39579);
-     let YV = !1;
- 
+   38790: (HH, BH, LH) => {
```

#### 33. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L3841-L3850` → after: `L179-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L179-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/266.js#L179-L182) · [Before (L3841-L3850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/266.js#L3841-L3850)

```diff
-       return YV
-     }
- 
-     function yV(VV) {
-       YV = VV, VV ? JV.d.setMultiplierType("emoteWheel", 0) : JV.d.removeMultiplier("emoteWheel")
-     }
-   },
-   40307: (VV, eV, xV) => {
-     function JV(VV) {
-       return Boolean(VV.mF.useInventory && VV.mF.useFullInventory && VV.sF.IxV(VV.bD))
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (HH => {
+         const BH = 16 * Math.random() | 0;
+         return ("x" === HH ? BH : 3 & BH | 8).toString(16)
+       }))
```

#### 34. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L3856-L4143` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/266.js#L188) · [Before (L3856-L4143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/266.js#L3856-L4143)

```diff
-   40188: (VV, eV, xV) => {
-     xV.d(eV, {
-       d: () => UV,
-       g: () => YV
-     });
-     var JV = xV(38328);
- 
-     function YV(VV, eV) {
-       return {
-         replayedClipName: VV,
-         replayedClipAgeSeconds: eV
-       }
-     }
- 
-     function UV(VV, eV, xV, YV, UV) {
-       const yV = function(VV) {
- ... (272 more removed lines; see GitHub link above)
+   39595: (HH, BH, LH) => {
```

#### 35. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L4309-L4379` → after: `L193-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L193-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/266.js#L193-L257) · [Before (L4309-L4379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/266.js#L4309-L4379)

```diff
-       constructor() {
-         this.members = new Map
-       }
-       apply(VV) {
-         const eV = {
-           added: [],
-           removed: [],
-           settingChanges: []
-         };
-         for (const JV of VV.VV) {
-           let VV = this.members.get(JV.eV);
-           if (VV || (VV = {
-               name: null,
-               settings: {}
-             }, this.members.set(JV.eV, VV), eV.added.push(JV.eV)), null !== JV.xV && (VV.name = JV.xV), null !== JV.JV || JV.YV.length > 0) {
-             const xV = null === JV.JV ? {} : JSON.parse(JV.JV);
- ... (55 more removed lines; see GitHub link above)
+       static _CheckLimit(HH, BH) {
+         let LH = AH._LogLimitOutputs[HH];
+         return LH ? LH.current++ : (LH = {
+           limit: BH,
+           current: 1
+         }, AH._LogLimitOutputs[HH] = LH), LH.current <= LH.limit
+       }
+       static _GenerateLimitMessage(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const LH = AH._LogLimitOutputs[HH];
+         if (!LH || !AH.MessageLimitReached) return;
+         const rH = this._Levels[BH];
+         LH.current === LH.limit && AH[rH.name](AH.MessageLimitReached.replace(/%LIMIT%/g, "" + LH.limit).replace(/%TYPE%/g, rH.name ?? ""))
+       }
+       static _AddLogEntry(HH) {
+         AH._LogCache = HH + AH._LogCache, AH.OnNewCacheEntry && AH.OnNewCacheEntry(HH)
+ ... (49 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/267.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/267.js` (26 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8)

#### 1. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/267.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/267.js#L2)

```diff
- export const ids = [267];
+ export const ids = [266, 267];
```

#### 2. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L4` → after: `L4-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L4-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/267.js#L4-L16) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/267.js#L4)

```diff
-   39659: (VV, eV, xV) => {
+   64100: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       RegisterShaderMaterial: () => AH.e,
+       ShaderMaterial: () => AH.r,
+       ShaderMaterialCreateFromSnippetAsync: () => AH.f,
+       ShaderMaterialParse: () => AH.q,
+       ShaderMaterialParseFromFileAsync: () => AH.j,
+       ShaderMaterialParseFromSnippetAsync: () => AH.n
+     });
+     var AH = LH(41769);
+     (0, AH.e)()
+   },
+   38610: (HH, BH, LH) => {
```

#### 3. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L8-L9` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/267.js#L20) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/267.js#L8-L9)

```diff
-     var JV = xV(39662);
-     const YV = [0, 0, 0];
+     var AH = LH(38619);
```

#### 4. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L11-L18` → after: `L22-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/267.js#L22-L25) · [Before (L11-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/267.js#L11-L18)

```diff
-       constructor(VV) {
-         let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YV;
-         this.pool = VV, this.origin = eV, this.count = 0, this.free = []
-       }
-       take() {
-         var VV;
-         const eV = null !== (VV = this.free.pop()) && void 0 !== VV ? VV : this.count++;
-         return eV >= this.pool.Jv && this.pool.grow(Math.max(2 * this.pool.Jv, eV + 1)), this.hide(eV), eV
+       static GetPlanes(HH) {
+         const BH = [];
+         for (let LH = 0; LH < 6; LH++) BH.push(new AH.d(0, 0, 0, 0));
+         return rH.GetPlanesToRef(HH, BH), BH
```

#### 5. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L20-L21` → after: `L27-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L27-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/267.js#L27-L29) · [Before (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/267.js#L20-L21)

```diff
-       release(VV) {
-         this.hide(VV), this.free.push(VV)
+       static GetNearPlaneToRef(HH, BH) {
+         const LH = HH.m;
+         BH.normal.x = LH[3] + LH[2], BH.normal.y = LH[7] + LH[6], BH.normal.z = LH[11] + LH[10], BH.d = LH[15] + LH[14], BH.normalize()
```

#### 6. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L23-L29` → after: `L31-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L31-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/267.js#L31-L33) · [Before (L23-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/267.js#L23-L29)

```diff
-       write(VV, eV, xV, YV) {
-         const {
-           records: UV
-         } = this.pool, {
-           origin: yV
-         } = this, pV = VV * JV.e;
-         UV[pV] = eV - yV[0], UV[pV + 1] = xV - yV[1], UV[pV + 2] = YV - yV[2], UV[pV + JV.g] = 0, this.pool.markDirty(VV)
+       static GetFarPlaneToRef(HH, BH) {
+         const LH = HH.m;
+         BH.normal.x = LH[3] - LH[2], BH.normal.y = LH[7] - LH[6], BH.normal.z = LH[11] - LH[10], BH.d = LH[15] - LH[14], BH.normalize()
```

#### 7. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L31-L32` → after: `L35-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L35-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/267.js#L35-L37) · [Before (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/267.js#L31-L32)

```diff
-       hide(VV) {
-         this.pool.records[VV * JV.e + JV.g] = 1, this.pool.markDirty(VV)
+       static GetLeftPlaneToRef(HH, BH) {
+         const LH = HH.m;
+         BH.normal.x = LH[3] + LH[0], BH.normal.y = LH[7] + LH[4], BH.normal.z = LH[11] + LH[8], BH.d = LH[15] + LH[12], BH.normalize()
```

#### 8. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L34-L35` → after: `L39-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L39-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/267.js#L39-L41) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/267.js#L34-L35)

```diff
-       commit() {
-         this.pool.commit(this.count)
+       static GetRightPlaneToRef(HH, BH) {
+         const LH = HH.m;
+         BH.normal.x = LH[3] - LH[0], BH.normal.y = LH[7] - LH[4], BH.normal.z = LH[11] - LH[8], BH.d = LH[15] - LH[12], BH.normalize()
```

#### 9. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L37-L38` → after: `L43-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L43-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/267.js#L43-L45) · [Before (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/267.js#L37-L38)

```diff
-       dispose() {
-         this.pool.dispose()
+       static GetTopPlaneToRef(HH, BH) {
+         const LH = HH.m;
+         BH.normal.x = LH[3] - LH[1], BH.normal.y = LH[7] - LH[5], BH.normal.z = LH[11] - LH[9], BH.d = LH[15] - LH[13], BH.normalize()
```

#### 10. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L40-L43` → after: `L47-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/267.js#L47-L49) · [Before (L40-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/267.js#L40-L43)

```diff
-     }
-     class yV {
-       constructor(VV, eV, xV) {
-         this.api = VV, this.model = eV, this.initialCapacity = xV, this.kinds = new Map, this.origin = [0, 0, 0]
+       static GetBottomPlaneToRef(HH, BH) {
+         const LH = HH.m;
+         BH.normal.x = LH[3] + LH[1], BH.normal.y = LH[7] + LH[5], BH.normal.z = LH[11] + LH[9], BH.d = LH[15] + LH[13], BH.normalize()
```

#### 11. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L45-L54` → after: `L51-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/267.js#L51-L52) · [Before (L45-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/267.js#L45-L54)

```diff
-       kindOf(VV) {
-         let eV = this.kinds.get(VV);
-         if (void 0 === eV) {
-           const xV = this.api.createInstancePool({
-             ...this.model,
-             item: VV
-           }, this.initialCapacity);
-           null === xV || void 0 === xV || xV.setOrigin(this.origin[0], this.origin[1], this.origin[2]), eV = xV && new UV(xV, this.origin), this.kinds.set(VV, eV)
-         }
-         return eV
+       static GetPlanesToRef(HH, BH) {
+         rH.GetNearPlaneToRef(HH, BH[0]), rH.GetFarPlaneToRef(HH, BH[1]), rH.GetLeftPlaneToRef(HH, BH[2]), rH.GetRightPlaneToRef(HH, BH[3]), rH.GetTopPlaneToRef(HH, BH[4]), rH.GetBottomPlaneToRef(HH, BH[5])
```

#### 12. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L56-L62` → after: `L54-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L54-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/267.js#L54-L56) · [Before (L56-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/267.js#L56-L62)

```diff
-       follow(VV) {
-         const {
-           origin: eV
-         } = this;
-         if (Math.abs(VV[0] - eV[0]) <= 512 && Math.abs(VV[1] - eV[1]) <= 512 && Math.abs(VV[2] - eV[2]) <= 512) return !1;
-         eV[0] = Math.floor(VV[0]), eV[1] = Math.floor(VV[1]), eV[2] = Math.floor(VV[2]);
-         for (const xV of this.kinds.values()) null === xV || void 0 === xV || xV.pool.setOrigin(eV[0], eV[1], eV[2]);
+       static IsPointInFrustum(HH, BH) {
+         for (let LH = 0; LH < 6; LH++)
+           if (BH[LH].dotCoordinate(HH) < 0) return !1;
```

#### 13. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L74` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/267.js#L61) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/267.js#L74)

```diff
-   39669: (VV, eV, xV) => {
+   38619: (HH, BH, LH) => {
```

#### 14. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L76-L120` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/267.js#L63) · [Before (L76-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/267.js#L76-L120)

```diff
-       d: () => yV,
-       f: () => pV,
-       g: () => QV
-     });
-     const JV = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
-       YV = [0, 1, 2, 0, 2, 3],
-       UV = [4, 5];
- 
-     function yV(VV, eV, xV, JV, YV) {
-       for (let yV = 0; yV < 6; yV++) UV.includes(yV) === YV && nV(VV, eV, xV, JV, yV)
-     }
- 
-     function pV(VV, eV, xV, JV) {
-       for (let YV = 0; YV < 6; YV++) nV(VV, eV, xV, JV, YV)
-     }
- 
- ... (29 more removed lines; see GitHub link above)
+       d: () => rH
```

#### 15. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L122-L730` → after: `L65-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L65-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/267.js#L65-L68) · [Before (L122-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/267.js#L122-L730)

```diff
-     var JV = xV(62);
-     const YV = [{
-         nameKey: "tierBurner",
-         cost: [],
-         islandRadius: 11.5,
-         machineAllowance: 16,
-         beltAllowance: 64,
-         newDeposits: [],
-         unlocks: [],
-         reward: null
-       }, {
-         nameKey: "tierCurrent",
-         cost: [{
-           item: "Iron Bar",
-           amount: 40
-         }, {
- ... (593 more removed lines; see GitHub link above)
+     var AH = LH(37963);
+     class rH {
+       constructor(HH, BH, LH, rH) {
+         this.normal = new AH.o(HH, BH, LH), this.d = rH
```

#### 16. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L732-L734` → after: `L70-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L70-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/267.js#L70-L71) · [Before (L732-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/267.js#L732-L734)

```diff
-       if (VV.endsWith(lV)) {
-         const eV = VV.slice(0, -14);
-         return void 0 !== CV[eV] ? eV : null
+       xrH() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
```

#### 17. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L736-L800` → after: `L73-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L73-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/267.js#L73-L74) · [Before (L736-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/267.js#L736-L800)

```diff
-       return null
-     }
- 
-     function mV(VV) {
-       return !0 === VV.mobFarm
-     }
- 
-     function KV(VV, eV) {
-       return oV[CV[eV]] * VV.opMs / 1e3
-     }
-     const HV = new Map;
-     const uV = "baf2islands",
-       sV = "baf2islandnew";
- 
-     function SV(VV) {
-       const eV = YV.findIndex((eV => eV.unlocks.includes(VV)));
- ... (49 more removed lines; see GitHub link above)
+       clone() {
+         return new rH(this.normal.x, this.normal.y, this.normal.z, this.d)
```

#### 18. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L802-L881` → after: `L76-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/267.js#L76-L77) · [Before (L802-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/267.js#L802-L881)

```diff
-     }
- 
-     function pe(VV, eV) {
-       const xV = "number" === typeof VV ? VV : "one" === VV ? 1 : "stack" === VV ? 99 : eV;
-       return Math.min(eV, xV)
-     }
- 
-     function Qe(VV, eV) {
-       const xV = VV => "number" === typeof VV ? VV : "one" === VV ? 1 : 99;
-       return "fill" === VV || "fill" === eV ? "fill" : xV(VV) + xV(eV)
-     }
- 
-     function ne(VV, eV) {
-       const xV = ye(VV),
-         JV = ye(eV),
-         YV = xV && JV ? function(VV, eV) {
- ... (64 more removed lines; see GitHub link above)
+       getClassName() {
+         return "Plane"
```

#### 19. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L883-L1143` → after: `L79-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L79-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/267.js#L79-L81) · [Before (L883-L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/267.js#L883-L1143)

```diff
-     }
-     const Xe = "baf2synth",
-       Me = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthe … [truncated]
-       ze = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
-       Ge = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
-       We = function(VV, eV) {
-         return {
-           input: VV,
-           inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
-           output: eV,
-           outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
-           bonus: arguments.length > 4 ? arguments[4] : void 0
-         }
-       },
-       Re = function(VV, eV) {
-         return {
- ... (245 more removed lines; see GitHub link above)
+       getHashCode() {
+         let HH = this.normal.getHashCode();
+         return HH = 397 * HH ^ this.d, HH
```

#### 20. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L1145-L1294` → after: `L83-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L83-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/267.js#L83-L162) · [Before (L1145-L1294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/267.js#L1145-L1294)

```diff
-       return JV
-     }
-     const fe = new Map;
-     const me = new Map;
- 
-     function Ke(VV, eV) {
-       if (null === eV || (xV = eV, !Ae.includes(xV))) return VV;
-       var xV;
-       let JV = me.get(eV);
-       return JV || (JV = {
-         ...VV,
-         recipes: [Ne(eV)]
-       }, me.set(eV, JV)), JV
-     }
- 
-     function He(VV) {
- ... (134 more removed lines; see GitHub link above)
+       normalize() {
+         const HH = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
+         let BH = 0;
+         return 0 !== HH && (BH = 1 / HH), this.normal.x *= BH, this.normal.y *= BH, this.normal.z *= BH, this.d *= BH, this
+       }
+       transform(HH) {
+         const BH = rH._TmpMatrix;
+         HH.invertToRef(BH);
+         const LH = BH.m,
+           AH = this.normal.x,
+           SH = this.normal.y,
+           hH = this.normal.z,
+           tH = this.d,
+           zH = AH * LH[0] + SH * LH[1] + hH * LH[2] + tH * LH[3],
+           CH = AH * LH[4] + SH * LH[5] + hH * LH[6] + tH * LH[7],
+           EH = AH * LH[8] + SH * LH[9] + hH * LH[10] + tH * LH[11],
+ ... (64 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L1710-L1835` → after: `L165-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L165-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/267.js#L165-L184) · [Before (L1710-L1835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/267.js#L1710-L1835)

```diff
-       if (!VV.isBlock(eV) || !yV && !QV && null === nV) return null;
-       const wV = null !== (xV = gJ[eV]) && void 0 !== xV ? xV : (0, DV.Sb)(eV, null !== (JV = VV.displayName(UV)) && void 0 !== JV ? JV : VV.displayName(eV));
-       if (null !== nV) return {
-         name: wV,
-         detail: `${MJ}${nV}`,
-         detailItem: null
-       };
-       const ZV = null !== (YV = WJ[eV]) && void 0 !== YV ? YV : pV() ? RJ[eV] : void 0;
-       if (QV && void 0 !== ZV) return {
-         name: wV,
-         detail: `${MJ}${ZV}`,
-         detailItem: null
-       };
-       const vV = yx[eV];
-       if (void 0 !== vV) return {
-         name: wV,
- ... (110 more removed lines; see GitHub link above)
+         for (const CH of tH) {
+           if ("_" === CH[0] && (!SH || -1 === SH.indexOf(CH))) continue;
+           if (CH.endsWith("Observable")) continue;
+           if (LH && -1 !== LH.indexOf(CH)) continue;
+           const tH = HH[CH],
+             EH = typeof tH;
+           if ("function" !== EH) try {
+             if ("object" === EH)
+               if (tH instanceof Uint8Array) BH[CH] = Uint8Array.from(tH);
+               else if (tH instanceof Array) {
+               if (BH[CH] = [], tH.length > 0)
+                 if ("object" == typeof tH[0])
+                   for (let HH = 0; HH < tH.length; HH++) {
+                     const LH = rH(tH[HH], BH, hH); - 1 === BH[CH].indexOf(LH) && BH[CH].push(LH)
+                   } else BH[CH] = tH.slice(0)
+             } else BH[CH] = rH(tH, BH, hH);
+ ... (4 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L1858-L1949` → after: `L188-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L188-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/267.js#L188-L194) · [Before (L1858-L1949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/267.js#L1858-L1949)

```diff
-     const eY = ["running", "noFuel", "noInput", "outputFull", "noDeposit", "badInput", "noPower", "powerFull", "notTaught", "noTree", "treeGrowing", "noSky", "noCrops", "cropsGrowing", "fluidFull", "noWater", "noSpring", "allVoided", "noOutlet"];
-     const xY = ["running", "slowed", "noPower", "noInput", "outputFull", "noLasers", "blocked", "hold"];
- 
-     function JY(VV) {
-       return [0, 1, 2, 3].map((eV => 0 !== (VV & 1 << eV)))
-     }
- 
-     function YY(VV) {
-       const eV = [];
-       for (let xV = 8; xV + 2 < VV.length; xV += 3) eV.push([VV[xV], VV[xV + 1], VV[xV + 2]]);
-       return {
-         focus: [VV[0], VV[1], VV[2]],
-         lasers: JY(VV[3]),
-         open: JY(VV[4]),
-         live: JY(VV[5]),
-         on: 1 === VV[6],
- ... (76 more removed lines; see GitHub link above)
+   },
+   38790: (HH, BH, LH) => {
+     function AH() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (HH => {
+         const BH = 16 * Math.random() | 0;
+         return ("x" === HH ? BH : 3 & BH | 8).toString(16)
+       }))
```

#### 23. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L1951-L1961` → after: `L196-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L196-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/267.js#L196-L203) · [Before (L1951-L1961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/267.js#L1951-L1961)

```diff
-     var AY = xV(1220),
-       NY = xV(1414),
-       XY = xV(2039),
-       MY = xV(2021),
-       zY = xV(1480),
-       GY = xV(38017),
-       WY = xV(32),
-       RY = xV(38012);
-     const gY = "baf2QuestView",
-       DY = "baf2PlayerY",
-       iY = new Set(["stepGoHomeFirst", "stepCometOwedFalling"]);
+     LH.d(BH, {
+       e: () => AH
+     })
+   },
+   39595: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => AH
+     });
```

#### 24. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L1963-L2111` → after: `L205-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L205-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/267.js#L205-L253) · [Before (L1963-L2111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/267.js#L1963-L2111)

```diff
-       constructor() {
-         let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
-         this.requestBook = VV, this.view = {
-           name: null,
-           rows: [],
-           reward: null,
-           goal: null,
-           pulse: 0,
-           itemNames: {},
-           side: null,
-           sideCameUpAt: 0,
-           tier: null,
-           core: null,
-           chapters: null,
-           also: [],
-           depth: null,
- ... (133 more removed lines; see GitHub link above)
+       static _CheckLimit(HH, BH) {
+         let LH = AH._LogLimitOutputs[HH];
+         return LH ? LH.current++ : (LH = {
+           limit: BH,
+           current: 1
+         }, AH._LogLimitOutputs[HH] = LH), LH.current <= LH.limit
+       }
+       static _GenerateLimitMessage(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const LH = AH._LogLimitOutputs[HH];
+         if (!LH || !AH.MessageLimitReached) return;
+         const rH = this._Levels[BH];
+         LH.current === LH.limit && AH[rH.name](AH.MessageLimitReached.replace(/%LIMIT%/g, "" + LH.limit).replace(/%TYPE%/g, rH.name ?? ""))
+       }
+       static _AddLogEntry(HH) {
+         AH._LogCache = HH + AH._LogCache, AH.OnNewCacheEntry && AH.OnNewCacheEntry(HH)
+ ... (33 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L2139-L2236` → after: `L257-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L257-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/267.js#L257-L260) · [Before (L2139-L2236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/267.js#L2139-L2236)

```diff
-     const KY = "baf2QuestItems",
-       HY = new Set;
-     let uY = new Set,
-       sY = null;
- 
-     function SY(VV) {
-       const eV = gV(VV.tutorial),
-         xV = eV ? LY(VV, !0) : HY;
-       "inventory" === BY.b.get("openInGameMenuName") ? (sY = null, (0, RY.t)(xV)) : sY = xV;
-       const JV = eV ? LY(VV, !1) : HY;
-       (0, GY.b)(JV, uY) || (uY = JV, WY.h.QZ(KY, uY))
-     }
- 
-     function IY() {
-       return (0, zY.c)(KY, (() => uY))
-     }
- ... (82 more removed lines; see GitHub link above)
+     AH.NoneLogLevel = 0, AH.MessageLogLevel = 1, AH.WarningLogLevel = 2, AH.ErrorLogLevel = 4, AH.AllLogLevel = 7, AH.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", AH._LogCache = "", AH._LogLimitOutputs = {}, AH._Levels =  … [truncated]
+       color: "white",
+       logFunc: console.log,
+       name: "Log"
```

#### 26. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L2238-L17827` → after: `L262-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L262-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/267.js#L262-L269) · [Before (L2238-L17827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/267.js#L2238-L17827)

```diff
-       item: "Raw Voltite",
-       amount: 2,
-       weight: 10,
-       fromTier: 3,
-       later: {
-         tier: 4,
-         weight: 3
-       }
-     }, {
-       item: "Machine Hull",
-       amount: 1,
-       weight: 4,
-       fromTier: 3
-     }, {
-       item: "Diamond",
-       amount: 1,
- ... (15574 more removed lines; see GitHub link above)
+       color: "orange",
+       logFunc: console.warn,
+       name: "Warn"
+     }, {}, {
+       color: "red",
+       logFunc: console.error,
+       name: "Error"
+     }], AH.errorsCount = 0, AH.Log = AH._LogEnabled.bind(AH, AH.MessageLogLevel), AH.Warn = AH._LogEnabled.bind(AH, AH.WarningLogLevel), AH.Error = AH._LogEnabled.bind(AH, AH.ErrorLogLevel)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/268.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/268.js` (50 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658)

#### 1. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L4-L906` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L4) · [Before (L4-L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L4-L906)

```diff
-   44497: (VV, eV, xV) => {
-     xV.d(eV, {
-       d: () => UV
-     });
-     var JV = xV(41353),
-       YV = xV(44503);
-     class UV {
-       constructor(VV, eV) {
-         let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
-         this.maxDepth = xV, this.KYV = [], this._maxBlockCapacity = eV || 64, this._selectionContent = new JV.c(1024), this._creationFunc = VV
-       }
-       update(VV, eV, xV) {
-         YV.c._CreateBlocks(VV, eV, xV, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
-       }
-       gYV(VV) {
-         for (let eV = 0; eV < this.blocks.length; eV++) {
- ... (887 more removed lines; see GitHub link above)
+   38667: (HH, BH, LH) => {
```

#### 2. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L909-L1003` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L7) · [Before (L909-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L909-L1003)

```diff
-       d: () => UV,
-       h: () => yV,
-       i: () => pV
-     });
-     var JV = xV(38389);
-     class YV {
-       constructor(VV, eV, xV) {
-         this.gradient = VV, this.color1 = eV, this.color2 = xV
-       }
-       getColorToRef(VV) {
-         this.color2 ? JV.h.LerpToRef(this.color1, this.color2, Math.random(), VV) : VV.iG(this.color1)
-       }
-     }
-     class UV {
-       constructor(VV, eV) {
-         this.gradient = VV, this.color = eV
- ... (79 more removed lines; see GitHub link above)
+       e: () => hH
```

#### 3. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L1005-L3397` → after: `L9-L3222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L9-L3222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L9-L3222) · [Before (L1005-L3397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L1005-L3397)

```diff
-     var JV = xV(38269),
-       YV = xV(38303),
-       UV = xV(39867);
-     class yV {
-       constructor() {
-         let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
-           eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
-           xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
-           YV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-         this.radius = VV, this.height = eV, this.radiusRange = xV, this.directionRandomizer = YV, this._tempVector = JV.o.Zero()
-       }
-       startDirectionFunction(VV, eV, xV, UV, yV) {
-         xV.position.subtractToRef(VV.getTranslation(), this._tempVector), this._tempVector.normalize(), JV.o.TransformNormalToRef(this._tempVector, yV, this._tempVector);
-         const pV = (0, YV.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
-         let QV = Math.atan2(this._tempVector.x, this._tempVector.z);
-         QV += (0, YV.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = pV, this._tempVector.x = Math.sin(QV), this._tempVector.z = Math.cos(QV), this._tempVector.normalize(), UV ? eV.iG(this._tempVector) : JV.o.TransformNormalFromFloatsToRef … [truncated]
- ... (2377 more removed lines; see GitHub link above)
+     var AH = LH(9955),
+       rH = LH(9940),
+       SH = LH(317);
+     const hH = {
+       "Maple Door": {
+         positions: [{
+           block: "Maple Door",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Maple Door Top",
+           x: 0,
+           y: 1,
+           z: 0
+         }]
+ ... (3198 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3437-L3481` → after: `L3225-L3259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3225-L3259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L3225-L3259) · [Before (L3437-L3481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L3437-L3481)

```diff
-         if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
-           const VV = this._vertexBuffer.createVertexBuffer("direction", xV, 3, this._vertexBufferSize, this._useInstancing);
-           this._vertexBuffers.direction = VV, xV += 3
-         }
-         if (this._useRampGradients) {
-           const VV = this._vertexBuffer.createVertexBuffer("remapData", xV, 4, this._vertexBufferSize, this._useInstancing);
-           this._vertexBuffers.remapData = VV, xV += 4
-         }
-         let QV;
-         if (this._useInstancing) {
-           const eV = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
-           this._spriteBuffer = new yV.d(VV, eV, !1, 2), QV = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
-         } else QV = this._vertexBuffer.createVertexBuffer("offset", xV, 2, this._vertexBufferSize, this._useInstancing);
-         this._vertexBuffers.offset = QV, this.resetDrawCache()
-       }
-       _createIndexBuffer() {
- ... (29 more removed lines; see GitHub link above)
+       }(),
+       ... function() {
+         const HH = {
+             1: HH => ({
+               x: 0,
+               z: HH
+             }),
+             2: HH => ({
+               x: HH,
+               z: 0
+             }),
+             3: HH => ({
+               x: 0,
+               z: -HH
+             }),
+             4: HH => ({
+ ... (19 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3599-L3629` → after: `L3264-L3288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3264-L3288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L3264-L3288) · [Before (L3599-L3629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L3599-L3629)

```diff
-       }
-       _bindGeometryRendering(VV) {
-         const eV = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
-           xV = We.d.GetConfiguration(eV);
-         if (!xV?._defines) return;
-         VV.setFloat("objectId", 0), VV.setInt("meshBlendTag", 0);
-         const JV = this._scene?.activeCamera;
-         if (VV.setFloat2("cameraInfo", JV?.minZ ?? 0, JV?.maxZ ?? 1), this.isLocal && void 0 !== xV.defines.PREPASS_LOCAL_POSITION_INDEX) {
-           VV.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
-           const eV = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || UV.o.ZeroReadOnly, UV.l.Ik[0]);
-           VV.setVector3("geometryWorldOffset", eV)
-         }
-       }
-       animate() {
-         let VV, eV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         if (this._started && !this.paused) {
- ... (15 more removed lines; see GitHub link above)
+       }(),
+       ... function() {
+         const HH = {};
+         for (let BH = 1; BH <= AH.l; BH++) {
+           const LH = (0, AH.Zb)(BH),
+             rH = AH.p[BH - 1],
+             SH = [{
+               block: LH,
+               x: 0,
+               y: 0,
+               z: 0
+             }];
+           for (const HH of AH.h)
+             for (let BH = 1; BH <= rH; BH++) {
+               if ("southwest" === HH && 1 === BH) continue;
+               const {
+ ... (9 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3631-L3655` → after: `L3290-L3292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3290-L3292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L3290-L3292) · [Before (L3631-L3655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L3631-L3655)

```diff
-             if (this._vertexBuffer)
-               if (this._useFixedCapacityForSnapshot) {
-                 const VV = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
-                   eV = this._particles.length;
-                 eV < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, eV * VV, this._fixedCapacityHighWaterMark * VV), this._fixedCapacityHighWaterMark = eV, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
-               } else this._vertexBuffer.updateDirectly(this._vertexData, 0, this._particles.length)
-           }
-           0 === this.manualEmitCount && this.disposeOnStop && this.stop()
-         }
-       }
-       _initFixedCapacitySnapshotData() {
-         return !this._useFixedCapacityForSnapshot && (this._useFixedCapacityForSnapshot = !0, this._vertexData.fill(0), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer?.updateDirectly(this._vertexData, 0, this._capacity), !0)
-       }
-       _clearFixedCapacitySnapshotData() {
-         if (!this._useFixedCapacityForSnapshot || !this._vertexBuffer || 0 === this._fixedCapacityHighWaterMark) return;
-         const VV = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
- ... (9 more removed lines; see GitHub link above)
+           HH[LH] = {
+             positions: SH
+           }
```

#### 7. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3659-L3675` → after: `L3406-L3564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3406-L3564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L3406-L3564) · [Before (L3659-L3675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L3659-L3675)

```diff
-       _appendParticleVertices(VV, eV) {
-         this._appendParticleVertex(VV++, eV, 0, 0), this._useInstancing || (this._appendParticleVertex(VV++, eV, 1, 0), this._appendParticleVertex(VV++, eV, 1, 1), this._appendParticleVertex(VV, eV, 0, 1))
-       }
-       rebuild() {
-         this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
-       }
-       async _initShaderSourceAsync() {
-         this._engine.isWebGPU && !Re.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([xV.e(655).then((() => xV(64331))), xV.e(649).then((() => xV(64335)))])) : await Promise.all([xV.e(638).then((() => xV(64343))), Promise.all([xV.e(631), xV.e(664)]).then((() => xV(64349) … [truncated]
-       }
-       isReady() {
-         if (!this._shadersLoaded) return !1;
-         if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
-         if (this.blendMode !== TV.BLENDMODE_MULTIPLYADD) {
-           if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
-         } else {
-           if (!this._getWrapper(TV.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
- ... (1 more removed lines; see GitHub link above)
+     };
+ 
+     function tH(HH) {
+       return {
+         [`${HH} Banner`]: {
+           positions: [{
+             block: `${HH} Banner`,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: `_${HH} Banner Flag|meta|rot1|bot`,
+             x: 0,
+             y: 1,
+             z: 0
+           }]
+ ... (143 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3679-L3693` → after: `L3567-L3662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3567-L3662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L3567-L3662) · [Before (L3679-L3693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L3679-L3693)

```diff
-       _render(VV) {
-         const eV = this._getWrapper(VV),
-           xV = eV.effect,
-           JV = this._engine;
-         JV.enableEffect(eV);
-         const YV = this.defaultViewMatrix ?? this._scene.getViewMatrix();
-         xV.setTexture("diffuseSampler", this.particleTexture), xV.setMatrix("view", YV);
-         const yV = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
-         if (xV.setMatrix("projection", yV), this._isAnimationSheetEnabled && this.particleTexture) {
-           const VV = this.particleTexture.getBaseSize();
-           xV.setFloat3("particlesInfos", this.spriteCellWidth / VV.width, this.spriteCellHeight / VV.height, this.spriteCellWidth / VV.width)
-         }
-         if (xV.setVector2("translationPivot", this.translationPivot), xV.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
-           const VV = this._scene.activeCamera;
-           xV.setVector3("eyePosition", VV.globalPosition)
+     }
+ 
+     function zH(HH) {
+       const BH = (0, SH.$b)(HH);
+       return {
+         [BH]: {
+           positions: [{
+             block: BH,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: `_${BH} Top Left`,
+             x: 0,
+             y: 1,
+             z: 0
+ ... (80 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3695-L3702` → after: `L3664-L3741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3664-L3741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L3664-L3741) · [Before (L3695-L3702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L3695-L3702)

```diff
-         this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), xV.setTexture("rampSampler", this._rampGradientsTexture));
-         const pV = xV.defines;
-         this._scene && ((0, LV.g)(xV, this, this._scene), this.applyFog && (0, fV.g)(this._scene, void 0, xV)), pV.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (YV.invertToRef(UV.l.Matrix[0]), xV.setMatrix("invView", UV.l.Matrix[0])), xV._multiTarget && this._bindGeometryRenderin … [truncated]
-         let QV = !1;
-         try {
-           We.d._BindAttachmentsForEffect(JV, xV) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(xV), this._useInstancing ? this._scene?.forceWireframe ? JV.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._cap … [truncated]
-         } finally {
-           We.d._RestoreAttachments(JV)
+       }
+     }
+ 
+     function CH(HH) {
+       const BH = `_${HH} Back`,
+         LH = `_${HH} Dish`;
+       return {
+         [HH]: {
+           positions: [{
+             block: HH,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: BH,
+             x: 0,
+ ... (62 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3706-L3710` → after: `L3744-L3766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3744-L3766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L3744-L3766) · [Before (L3706-L3710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L3706-L3710)

```diff
-       render() {
-         if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
-         const VV = this._engine;
-         let eV;
-         return VV.setState && (VV.setState(!1), this.forceDepthWrite && VV.setDepthWrite(!0)), eV = this.blendMode === TV.BLENDMODE_MULTIPLYADD ? this._render(TV.BLENDMODE_MULTIPLY) + this._render(TV.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttrib … [truncated]
+     }
+ 
+     function EH(HH) {
+       const BH = `Small ${HH} Pod`;
+       return {
+         [BH]: {
+           positions: [{
+             block: BH,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: `_Small ${HH} Pod Mid`,
+             x: 0,
+             y: 1,
+             z: 0
+ ... (7 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3712-L3719` → after: `L3768-L3780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3768-L3780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L3768-L3780) · [Before (L3712-L3719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L3712-L3719)

```diff
-       _onDispose() {}
-       dispose() {
-         let VV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
-           eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), … [truncated]
-           const VV = this._scene.lT.indexOf(this);
-           VV > -1 && this._scene.lT.splice(VV, 1), this._scene._activeParticleSystems.dispose()
+     }
+     for (const GH in hH) {
+       for (const HH of hH[GH].positions)
+         if (HH.id = rH.g[HH.block].id, GH === HH.block && (0 !== HH.x || 0 !== HH.y || 0 !== HH.z)) throw new Error(`Multiblock "${GH}" has main block "${HH.block}" at non-origin position (${HH.x}, ${HH.y}, ${HH.z}) - if you need to do something like this, you'll need to rethink  … [truncated]
+       hH[rH.g[GH].id] = hH[GH]
+     }
+     const XH = {};
+     for (const GH in hH)
+       for (const {
+           block: HH,
+           x: BH,
+           y: LH,
+           z: AH
```

#### 12. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3721` → after: `L3782-L3789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3782-L3789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L3782-L3789) · [Before (L3721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L3721)

```diff
-         this.eC.notifyObservers(this), this.eC.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
+         of hH[GH].positions) {
+         const SH = {
+           mainMultiblock: GH,
+           compX: BH,
+           compY: LH,
+           compZ: AH
+         };
+         XH[HH] = SH, XH[rH.g[HH].id] = SH
```

#### 13. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3731-L3734` → after: `L3814-L3835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3814-L3835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L3814-L3835) · [Before (L3731-L3734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L3731-L3734)

```diff
-         if (this.particleSystem = VV, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !VV.emitter || !VV.emitter.dispose) {
-           const eV = (0, De.c)("BABYLON.AbstractMesh");
-           VV.emitter = new eV("SubemitterSystemEmitter", VV.dD()), VV._disposeEmitterOnDispose = !0
-         }
+         this.model = HH, this.reshapeOffsets = [...hH, [0, -1, 0]]
+       }
+       handles(HH) {
+         const BH = AH.g[HH];
+         return (null === BH || void 0 === BH ? void 0 : BH.model) === this.model && void 0 !== BH.attachedTop
+       }
+       affects(HH) {
+         return this.handles(HH) || tH(HH) || (0, SH.r)(AH.g[HH])
+       }
+       shape(HH, BH, LH, hH, zH) {
+         let CH = this.handles(HH(BH, LH + 1, hH)) ? rH.j : 0;
+         return rH.x.forEach(((zH, EH) => {
+           let {
+             dx: XH,
+             dz: GH
+           } = zH;
+ ... (6 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3736-L3741` → after: `L3837-L3851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3837-L3851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L3837-L3851) · [Before (L3736-L3741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L3736-L3741)

```diff
-       clone() {
-         let VV = this.particleSystem.emitter;
-         if (VV) {
-           if (VV instanceof UV.o) VV = VV.clone();
-           else if (-1 !== VV.getClassName().indexOf("Mesh")) {
-             VV = new((0, De.c)("BABYLON.Mesh"))("", VV.dD()), VV.isVisible = !1
+     }
+   },
+   38871: (HH, BH, LH) => {
+     function AH(HH, BH) {
+       var LH;
+       BH || (BH = {});
+       const AH = null !== (LH = BH.customAttributes) && void 0 !== LH ? LH : {};
+       var rH, SH, hH;
+       "Gun" === (null === HH || void 0 === HH ? void 0 : HH.type) && (AH.shotsLeft = null !== (rH = null !== (SH = AH.shotsLeft) && void 0 !== SH ? SH : null === (hH = AH.gunStats) || void 0 === hH ? void 0 : hH.clipSize) && void 0 !== rH ? rH : HH.clipSize);
+       if (AH.enchantmentTier && (AH.enchantmentTier = AH.enchantmentTier.toString()), AH.enchantments)
+         for (const XH in AH.enchantments) {
+           const HH = AH.enchantments[XH];
+           if ("number" !== typeof HH) {
+             const BH = parseInt(HH);
+             isNaN(BH) || BH < 0 ? AH.enchantments[XH] = void 0 : AH.enchantments[XH] = BH > 1e9 ? 1e9 : BH
```

#### 15. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3743-L3762` → after: `L3853-L3868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3853-L3868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L3853-L3868) · [Before (L3743-L3762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L3743-L3762)

```diff
-         } else VV = new UV.o;
-         const eV = new ie(this.particleSystem.clone(this.particleSystem.name, VV));
-         return eV.particleSystem.name += "Clone", eV.type = this.type, eV.inheritDirection = this.inheritDirection, eV.inheritedVelocityAmount = this.inheritedVelocityAmount, eV.particleSystem._disposeEmitterOnDispose = !0, eV.particleSystem.disposeOnStop = !0, eV
-       }
-       serialize() {
-         let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         const eV = {};
-         return eV.type = this.type, eV.inheritDirection = this.inheritDirection, eV.inheritedVelocityAmount = this.inheritedVelocityAmount, eV.particleSystem = this.particleSystem.serialize(VV), eV
-       }
-       static _ParseParticleSystem(VV, eV, xV) {
-         throw (0, CV.n)("ParseParticle")
-       }
-       static Parse(VV, eV, xV) {
-         const JV = VV.particleSystem,
-           YV = new ie(ie._ParseParticleSystem(JV, eV, xV, !0));
-         return YV.type = VV.type, YV.inheritDirection = VV.inheritDirection, YV.inheritedVelocityAmount = VV.inheritedVelocityAmount, YV.particleSystem._isSubEmitter = !0, YV
- ... (4 more removed lines; see GitHub link above)
+         }
+       if (AH.enchantmentData)
+         for (const XH in AH.enchantmentData) {
+           const HH = AH.enchantmentData[XH];
+           if (!HH) continue;
+           if ("object" !== typeof HH) {
+             AH.enchantmentData[XH] = void 0;
+             continue
+           }
+           const BH = HH.icon,
+             LH = HH.description;
+           var tH, zH, CH, EH;
+           if ("string" !== typeof BH) AH.enchantmentData[XH].icon = null !== (tH = null === BH || void 0 === BH || null === (zH = BH.toString) || void 0 === zH ? void 0 : zH.call(BH)) && void 0 !== tH ? tH : void 0;
+           if ("string" !== typeof LH) AH.enchantmentData[XH].description = null !== (CH = null === LH || void 0 === LH || null === (EH = LH.toString) || void 0 === EH ? void 0 : EH.call(LH)) && void 0 !== CH ? CH : void 0
+         }
+       return BH.customAttributes = AH, BH
```

#### 16. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3764-L3803` → after: `L3870-L3889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3870-L3889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L3870-L3889) · [Before (L3764-L3803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L3764-L3803)

```diff
-     var Ce = xV(41150),
-       ae = xV(41279);
-     const oe = () => {};
-     class ce {
-       constructor() {
-         this.particlePositionGenerator = oe, this.particleDestinationGenerator = oe, this.particleDirectionGenerator = oe
-       }
-       startDirectionFunction(VV, eV, xV, JV) {
-         const YV = UV.l.Ik[0];
-         if (this.particleDirectionGenerator && this.particleDirectionGenerator !== oe) this.particleDirectionGenerator(-1, xV, YV);
-         else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== oe) {
-           this.particleDestinationGenerator(-1, xV, YV);
-           const VV = UV.l.Ik[1];
-           YV.subtractToRef(xV.position, VV), VV.scaleToRef(1 / xV.lifeTime, YV)
-         } else YV.set(0, 0, 0);
-         JV ? eV.iG(YV) : UV.o.TransformNormalToRef(YV, VV, eV)
- ... (24 more removed lines; see GitHub link above)
+     LH.d(BH, {
+       d: () => AH
+     })
+   },
+   39105: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => VH,
+       d: () => MH,
+       e: () => zH,
+       g: () => XH,
+       h: () => OH
+     });
+     var AH = LH(9940),
+       rH = LH(9965),
+       SH = LH(39111);
+     const hH = (0, AH.h)("Noticeboard"),
+ ... (4 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3805-L3817` → after: `L3891-L3933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3891-L3933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L3891-L3933) · [Before (L3805-L3817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L3805-L3817)

```diff
-     const he = UV.o.Zero(),
-       le = UV.o.Zero(),
-       Le = UV.o.Zero();
-     class fe {
-       constructor() {
-         this.strength = 0, this.position = UV.o.Zero()
-       }
-       _processParticle(VV, eV) {
-         this.position.subtractToRef(VV.position, he);
-         const xV = he.lengthSquared() + 1;
-         he.normalize().scaleToRef(this.strength / xV, le), le.scaleToRef(eV._tempScaledUpdateSpeed, Le), VV.direction.addInPlace(Le)
-       }
-       serialize() {
+     const CH = new Uint8Array(tH - hH + 1);
+     for (let bH = hH; bH <= tH; bH++) CH[bH - hH] = (0, rH.q)(AH.g[bH].meta.metaStr);
+     const EH = 64,
+       XH = EH * EH,
+       [GH, YH, uH, QH] = [0, 1, 2, 3];
+ 
+     function WH(HH) {
+       var BH, LH;
+       return "string" === typeof(null === HH || void 0 === HH || null === (BH = HH.persisted) || void 0 === BH || null === (LH = BH.shared) || void 0 === LH ? void 0 : LH.text)
+     }
+ 
+     function MH(HH) {
+       return WH(HH) && "" !== HH.persisted.shared.text.trim()
+     }
+ 
+     function xH(HH, BH) {
+ ... (27 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3819-L3820` → after: `L3935-L3936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3935-L3936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L3935-L3936) · [Before (L3819-L3820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L3819-L3820)

```diff
-           position: this.position.WYV(),
-           strength: this.strength
+           end: AH,
+           cells: rH
```

#### 19. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3824-L3834` → after: `L3951-L3984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3951-L3984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L3951-L3984) · [Before (L3824-L3834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L3824-L3834)

```diff
-     const me = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationC … [truncated]
-     class Ke extends Re {
-       constructor() {
-         super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metad … [truncated]
-           if (!this._subEmitters || 0 === this._subEmitters.length) return;
-           const eV = Math.floor(Math.random() * this._subEmitters.length);
-           for (const xV of this._subEmitters[eV])
-             if (1 === xV.type) {
-               const eV = xV.clone();
-               VV._inheritParticleInfoToSubEmitter(eV), eV.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(eV.particleSystem), eV.particleSystem.start()
-             }
+ 
+     function UH(HH, BH) {
+       for (const LH of function(HH) {
+           let {
+             anchor: BH,
+             rot: LH,
+             width: AH,
+             height: SH
+           } = HH;
+           const [hH, , tH] = rH.s[LH][YH], zH = [];
+           for (let rH = 0; rH < SH; rH++)
+             for (let HH = 0; HH < AH; HH++) zH.push([BH[0] + hH * HH, BH[1] - rH, BH[2] + tH * HH]);
+           return zH
+         }(HH))
+         if (WH(BH(LH[0], LH[1], LH[2]))) return LH;
+       return null
+ ... (18 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3836-L3879` → after: `L3986-L3988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3986-L3988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L3986-L3988) · [Before (L3836-L3879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L3836-L3879)

```diff
-       }
-       get source() {
-         return this._source
-       }
-       get isNodeGenerated() {
-         return null !== this._source
-       }
-       get flowMap() {
-         return this._flowMap
-       }
-       set flowMap(VV) {
-         this._flowMap !== VV && (this._flowMap = VV, this._flowMapUpdate && (Ge(this._flowMapUpdate), this._flowMapUpdate = null), VV && (this._flowMapUpdate = {
-           process: VV => {
-             const eV = this.dD()?.getTransformMatrix();
-             this._flowMap._processParticle(VV, this.flowMapStrength * this._tempScaledUpdateSpeed, eV)
-           },
- ... (28 more removed lines; see GitHub link above)
+         for (let BH = 0; BH < 4 && EH.length < XH; BH++) {
+           const AH = PH(HH, LH, BH, tH, CH);
+           AH && !GH.has(AH.join()) && (GH.add(AH.join()), EH.push(AH))
```

#### 21. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3882-L3884` → after: `L3991-L3995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3991-L3995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L3991-L3995) · [Before (L3882-L3884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L3882-L3884)

```diff
-       _removeFromRoot() {
-         if (!this._rootParticleSystem) return;
-         const VV = this._rootParticleSystem.activeSubSystems.indexOf(this); - 1 !== VV && this._rootParticleSystem.activeSubSystems.splice(VV, 1), this._rootParticleSystem = null
+       return uH ??= TH(HH, YH[0], YH[1], YH[2]), {
+         cells: EH,
+         topLeft: YH,
+         rect: uH,
+         textCell: UH(uH, BH)
```

#### 22. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3886-L3900` → after: `L3997-L4010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R3997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L3997-L4010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L3997-L4010) · [Before (L3886-L3900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L3886-L3900)

```diff
-       _preStart() {
-         this._prepareSubEmitterInternalArray(), this._subEmitters && 0 != this._subEmitters.length && (this.activeSubSystems = [])
-       }
-       _postStop(VV) {
-         VV && this._stopSubEmitters()
-       }
-       _prepareParticle(VV) {
-         if (this._subEmitters && this._subEmitters.length > 0) {
-           const eV = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
-           VV._properties.attachedSubEmitters = [];
-           for (const xV of eV)
-             if (0 === xV.type) {
-               const eV = xV.clone();
-               VV._properties.attachedSubEmitters.push(eV), eV.particleSystem.start()
-             }
+     }
+ 
+     function OH(HH, BH, LH, hH, tH) {
+       if (null !== LH && zH(LH)) {
+         const {
+           rootName: HH,
+           rot: BH
+         } = AH.g[LH].meta;
+         if (rH.s[BH].some((HH => {
+             let [BH, LH, AH] = HH;
+             return BH === hH[0] && LH === hH[1] && AH === hH[2]
+           }))) return {
+           root: HH,
+           rot: BH
```

#### 23. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3903-L3917` → after: `L4013-L4016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R4013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L4013-L4016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L4013-L4016) · [Before (L3903-L3917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L3903-L3917)

```diff
-       _onDispose() {
-         let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), VV && this.particles)
-           for (const xV of this.particles)
-             if (xV._properties.attachedSubEmitters)
-               for (let VV = xV._properties.attachedSubEmitters.length - 1; VV >= 0; VV -= 1) xV._properties.attachedSubEmitters[VV].dispose();
-         if (eV && this.activeSubSystems)
-           for (let xV = this.activeSubSystems.length - 1; xV >= 0; xV -= 1) this.activeSubSystems[xV].dispose();
-         if (this._subEmitters && this._subEmitters.length) {
-           for (let VV = 0; VV < this._subEmitters.length; VV++)
-             for (const eV of this._subEmitters[VV]) eV.dispose();
-           this._subEmitters = [], this.subEmitters = []
-         }
-         this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
+       const [CH, EH] = rH.n[tH], XH = HH(BH[0] - CH, BH[1], BH[2] - EH);
+       return {
+         root: (0, SH.c)(XH) ? rH.x : rH.w,
+         rot: tH
```

#### 24. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3919-L3929` → after: `L4018-L4184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R4018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L4018-L4184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L4018-L4184) · [Before (L3919-L3929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L3919-L3929)

```diff
-       static _Parse(VV, eV, xV, JV) {
-         let YV;
-         YV = xV instanceof Ce.d ? null : xV;
-         const yV = (0, De.c)("BABYLON.Texture");
-         if (yV && YV)
-           if (VV.texture) eV.particleTexture = yV.Parse(VV.texture, YV, JV);
-           else if (VV.textureName) {
-           const xV = VV.textureSettings;
-           if (eV.particleTexture = new yV(JV + VV.textureName, YV, !1, void 0 === VV.invertY || VV.invertY, xV ? xV.samplingMode : void 0), eV.particleTexture.name = VV.textureName, xV) {
-             const VV = eV.particleTexture;
-             for (const eV of me) void 0 !== xV[eV] && (VV[eV] = xV[eV])
+     }
+   },
+   39096: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => MH,
+       c: () => PH,
+       d: () => VH,
+       h: () => OH,
+       l: () => uH,
+       o: () => XH,
+       p: () => YH,
+       s: () => bH,
+       v: () => kH,
+       w: () => GH
+     });
+     var AH = LH(7007),
+ ... (151 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3931-L3936` → after: `L4186-L4192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R4186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L4186-L4192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L4186-L4192) · [Before (L3931-L3936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L3931-L3936)

```diff
-         }
-         if (VV.emitterId || 0 === VV.emitterId || void 0 !== VV.emitter ? (VV.emitterId || 0 === VV.emitterId) && YV ? (eV.emitter = YV.getLastMeshById(VV.emitterId), eV.emitter || (eV.emitter = UV.o.Zero())) : eV.emitter = UV.o.FromArray(VV.emitter) : eV.emitter = UV.o.Zero(), e … [truncated]
-           for (let xV = 0; xV < VV.animations.length; xV++) {
-             const JV = VV.animations[xV],
-               YV = (0, De.c)("BABYLON.Animation");
-             YV && eV.animations.push(YV.Parse(JV))
+         },
+         "Iron Mining Drill": {
+           ...EH,
+           meshItemName: "INTERNAL_MESH_Iron Mining Drill",
+           physicsState: {
+             type: AH.o.CAR,
+             tier: AH.h.IRON_MINING_DRILL
```

#### 26. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3938-L3966` → after: `L4194-L4236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R4194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L4194-L4236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L4194-L4236) · [Before (L3938-L3966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L3938-L3966)

```diff
-           eV.beginAnimationOnStart = VV.beginAnimationOnStart, eV.beginAnimationFrom = VV.beginAnimationFrom, eV.beginAnimationTo = VV.beginAnimationTo, eV.beginAnimationLoop = VV.beginAnimationLoop
-         }
-         if (VV.autoAnimate && YV && YV.beginAnimation(eV, VV.autoAnimateFrom, VV.autoAnimateTo, VV.autoAnimateLoop, VV.autoAnimateSpeed || 1), eV.startDelay = 0 | VV.startDelay, eV.minAngularSpeed = VV.minAngularSpeed, eV.maxAngularSpeed = VV.maxAngularSpeed, eV.minSize = VV.minS … [truncated]
-           for (const UV of VV.colorGradients) eV.addColorGradient(UV.gradient, wV.h.FromArray(UV.color1), UV.color2 ? wV.h.FromArray(UV.color2) : void 0);
-         if (VV.rampGradients) {
-           for (const xV of VV.rampGradients) eV.addRampGradient(xV.gradient, wV.d.FromArray(xV.color));
-           eV.useRampGradients = VV.useRampGradients
-         }
-         if (VV.colorRemapGradients)
-           for (const UV of VV.colorRemapGradients) eV.addColorRemapGradient(UV.gradient, void 0 !== UV.factor1 ? UV.factor1 : UV.factor, UV.factor2);
-         if (VV.alphaRemapGradients)
-           for (const UV of VV.alphaRemapGradients) eV.addAlphaRemapGradient(UV.gradient, void 0 !== UV.factor1 ? UV.factor1 : UV.factor, UV.factor2);
-         if (VV.sizeGradients)
-           for (const UV of VV.sizeGradients) eV.addSizeGradient(UV.gradient, void 0 !== UV.factor1 ? UV.factor1 : UV.factor, UV.factor2);
-         if (VV.angularSpeedGradients)
-           for (const UV of VV.angularSpeedGradients) eV.addAngularSpeedGradient(UV.gradient, void 0 !== UV.factor1 ? UV.factor1 : UV.factor, UV.factor2);
- ... (13 more removed lines; see GitHub link above)
+         },
+         "Diamond Mining Drill": {
+           ...EH,
+           meshItemName: "INTERNAL_MESH_Diamond Mining Drill",
+           physicsState: {
+             type: AH.o.CAR,
+             tier: AH.h.DIAMOND_MINING_DRILL
+           }
+         },
+         "Moonstone Mining Drill": {
+           ...EH,
+           meshItemName: "INTERNAL_MESH_Moonstone Mining Drill",
+           physicsState: {
+             type: AH.o.CAR,
+             tier: AH.h.MOONSTONE_MINING_DRILL
+           }
+ ... (27 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3968-L3970` → after: `L4238-L4259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R4238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L4238-L4259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L4238-L4259) · [Before (L3968-L3970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L3968-L3970)

```diff
-         if (VV.noiseTexture && YV) {
-           const xV = (0, De.c)("BABYLON.ProceduralTexture");
-           eV.noiseTexture = xV.Parse(VV.noiseTexture, YV, JV)
+       },
+       GH = Object.values(XH).map((HH => HH.meshItemName));
+ 
+     function YH(HH) {
+       for (const BH of rH.c)
+         if (XH[BH].meshItemName === HH) return BH;
+       return null
+     }
+ 
+     function uH(HH, BH) {
+       const LH = HH.validBlockIds;
+       if (Array.isArray(LH)) return LH.includes(BH);
+       if (BH === zH) return !1;
+       if ("solidBlocks" === LH) return !0 !== SH.g[BH].UY;
+       if ("solidBlocksOrFluid" === LH) return !0;
+       throw new Error(`Unsupported validBlockIds for ${BH}: ${JSON.stringify(LH)}`)
+ ... (6 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L3972-L4007` → after: `L4261-L4267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R4261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L4261-L4267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L4261-L4267) · [Before (L3972-L4007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L3972-L4007)

```diff
-         let pV;
-         if (VV.particleEmitterType) {
-           switch (VV.particleEmitterType.type) {
-             case "SphereParticleEmitter":
-               pV = new EV;
-               break;
-             case "SphereDirectedParticleEmitter":
-               pV = new BV;
-               break;
-             case "ConeEmitter":
-             case "ConeParticleEmitter":
-               pV = new qV;
-               break;
-             case "ConeDirectedParticleEmitter":
-               pV = new tV;
-               break;
- ... (20 more removed lines; see GitHub link above)
+       },
+       WH = {
+         "Yellow Balloon": {
+           ...QH,
+           physicsState: {
+             type: AH.o.BALLOON,
+             tier: AH.d.YELLOW
```

#### 29. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L4009-L4030` → after: `L4269-L4274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R4269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L4269-L4274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L4269-L4274) · [Before (L4009-L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L4009-L4030)

```diff
-           pV.parse(VV.particleEmitterType, YV)
-         } else pV = new ZV.d, pV.parse(VV, YV);
-         eV.particleEmitterType = pV, eV.startSpriteCellID = VV.startSpriteCellID, eV.endSpriteCellID = VV.endSpriteCellID, eV.spriteCellLoop = VV.spriteCellLoop ?? !0, eV.spriteCellWidth = VV.spriteCellWidth, eV.spriteCellHeight = VV.spriteCellHeight, eV.spriteCellChangeSpeed = V … [truncated]
-       }
-       static Parse(VV, eV, xV) {
-         let JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-           YV = arguments.length > 4 ? arguments[4] : void 0;
-         const yV = VV.name;
-         let pV, QV, nV = null,
-           ZV = null;
-         if (eV instanceof Ce.d ? pV = eV : (QV = eV, pV = QV.sk()), VV.customShader && (0, CV.e)(pV.createEffectForParticles)) {
-           ZV = VV.customShader;
-           const eV = ZV.shaderOptions.defines.length > 0 ? ZV.shaderOptions.defines.join("\n") : "";
-           nV = pV.createEffectForParticles(ZV.shaderPath.fragmentElement, ZV.shaderOptions.uniforms, ZV.shaderOptions.samplers, eV)
-         }
-         const vV = new Ke(yV, YV || VV.Jv, eV, nV, VV.isAnimationSheetEnabled);
- ... (6 more removed lines; see GitHub link above)
+         },
+         "White Balloon": {
+           ...QH,
+           physicsState: {
+             type: AH.o.BALLOON,
+             tier: AH.d.WHITE
```

#### 30. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L4032-L4036` → after: `L4276-L4281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R4276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L4276-L4281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L4276-L4281) · [Before (L4032-L4036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L4032-L4036)

```diff
-         }
-         if (VV.attractors)
-           for (const wV of VV.attractors) {
-             const VV = new fe;
-             VV.position = UV.o.FromArray(wV.position), VV.strength = wV.strength, vV.addAttractor(VV)
+         },
+         "Red Balloon": {
+           ...QH,
+           physicsState: {
+             type: AH.o.BALLOON,
+             tier: AH.d.RED
```

#### 31. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L4038-L4048` → after: `L4283-L4288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R4283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L4283-L4288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L4283-L4288) · [Before (L4038-L4048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L4038-L4048)

```diff
-         return Ke._Parse(VV, vV, eV, xV), VV.textureMask && (vV.textureMask = wV.h.FromArray(VV.textureMask)), VV.worldOffset && (vV.worldOffset = UV.o.FromArray(VV.worldOffset)), VV.preventAutoStart && (vV.preventAutoStart = VV.preventAutoStart), VV.metadata && (vV.metadata = VV … [truncated]
-       }
-       serialize() {
-         let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         const eV = {};
-         if (Ke._Serialize(eV, this, VV), eV.textureMask = this.textureMask.WYV(), eV.customShader = this.customShader, eV.preventAutoStart = this.preventAutoStart, eV.worldOffset = this.worldOffset.WYV(), this.metadata && (eV.metadata = this.metadata), this.subEmitters) {
-           eV.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
-           for (const xV of this._subEmitters) {
-             const JV = [];
-             for (const eV of xV) eV.particleSystem.doNotSerialize || JV.push(eV.serialize(VV));
-             eV.subEmitters.push(JV)
+         },
+         "Purple Balloon": {
+           ...QH,
+           physicsState: {
+             type: AH.o.BALLOON,
+             tier: AH.d.PURPLE
```

#### 32. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L4050-L4082` → after: `L4290-L4295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R4290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L4290-L4295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L4290-L4295) · [Before (L4050-L4082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L4050-L4082)

```diff
-         }
-         if (this._attractors && this._attractors.length) {
-           eV.attractors = [];
-           for (const VV of this._attractors) eV.attractors.push(VV.serialize())
-         }
-         return eV
-       }
-       static _Serialize(VV, eV, xV) {
-         if (VV.name = eV.name, VV.id = eV.id, VV.Jv = eV.getCapacity(), VV.disposeOnStop = eV.disposeOnStop, VV.manualEmitCount = eV.manualEmitCount, eV.emitter.position) {
-           const xV = eV.emitter;
-           VV.emitterId = xV.id
-         } else {
-           const xV = eV.emitter;
-           VV.emitter = xV.WYV()
-         }
-         if (eV.particleEmitterType && (VV.particleEmitterType = eV.particleEmitterType.serialize()), eV.particleTexture)
- ... (17 more removed lines; see GitHub link above)
+         },
+         "Pink Balloon": {
+           ...QH,
+           physicsState: {
+             type: AH.o.BALLOON,
+             tier: AH.d.PINK
```

#### 33. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L4084-L4093` → after: `L4297-L4302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R4297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L4297-L4302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L4297-L4302) · [Before (L4084-L4093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L4084-L4093)

```diff
-         }
-         const YV = eV.getRampGradients();
-         if (YV) {
-           VV.rampGradients = [];
-           for (const eV of YV) {
-             const xV = {
-               gradient: eV.gradient,
-               color: eV.color.WYV()
-             };
-             VV.rampGradients.push(xV)
+         },
+         "Orange Balloon": {
+           ...QH,
+           physicsState: {
+             type: AH.o.BALLOON,
+             tier: AH.d.ORANGE
```

#### 34. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L4095-L4105` → after: `L4304-L4309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R4304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L4304-L4309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L4304-L4309) · [Before (L4095-L4105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L4095-L4105)

```diff
-           VV.useRampGradients = eV.useRampGradients
-         }
-         const UV = eV.getColorRemapGradients();
-         if (UV) {
-           VV.colorRemapGradients = [];
-           for (const eV of UV) {
-             const xV = {
-               gradient: eV.gradient,
-               factor1: eV.factor1
-             };
-             void 0 !== eV.factor2 ? xV.factor2 = eV.factor2 : xV.factor2 = eV.factor1, VV.colorRemapGradients.push(xV)
+         },
+         "Magenta Balloon": {
+           ...QH,
+           physicsState: {
+             type: AH.o.BALLOON,
+             tier: AH.d.MAGENTA
```

#### 35. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L4107-L4116` → after: `L4311-L4316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R4311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L4311-L4316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L4311-L4316) · [Before (L4107-L4116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L4107-L4116)

```diff
-         }
-         const yV = eV.getAlphaRemapGradients();
-         if (yV) {
-           VV.alphaRemapGradients = [];
-           for (const eV of yV) {
-             const xV = {
-               gradient: eV.gradient,
-               factor1: eV.factor1
-             };
-             void 0 !== eV.factor2 ? xV.factor2 = eV.factor2 : xV.factor2 = eV.factor1, VV.alphaRemapGradients.push(xV)
+         },
+         "Lime Balloon": {
+           ...QH,
+           physicsState: {
+             type: AH.o.BALLOON,
+             tier: AH.d.LIME
```

#### 36. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L4118-L4127` → after: `L4318-L4323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R4318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L4318-L4323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L4318-L4323) · [Before (L4118-L4127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L4118-L4127)

```diff
-         }
-         const pV = eV.getSizeGradients();
-         if (pV) {
-           VV.sizeGradients = [];
-           for (const eV of pV) {
-             const xV = {
-               gradient: eV.gradient,
-               factor1: eV.factor1
-             };
-             void 0 !== eV.factor2 ? xV.factor2 = eV.factor2 : xV.factor2 = eV.factor1, VV.sizeGradients.push(xV)
+         },
+         "Light Gray Balloon": {
+           ...QH,
+           physicsState: {
+             type: AH.o.BALLOON,
+             tier: AH.d.LIGHT_GRAY
```

#### 37. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L4129-L4138` → after: `L4325-L4330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R4325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L4325-L4330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L4325-L4330) · [Before (L4129-L4138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L4129-L4138)

```diff
-         }
-         const QV = eV.getAngularSpeedGradients();
-         if (QV) {
-           VV.angularSpeedGradients = [];
-           for (const eV of QV) {
-             const xV = {
-               gradient: eV.gradient,
-               factor1: eV.factor1
-             };
-             void 0 !== eV.factor2 ? xV.factor2 = eV.factor2 : xV.factor2 = eV.factor1, VV.angularSpeedGradients.push(xV)
+         },
+         "Light Blue Balloon": {
+           ...QH,
+           physicsState: {
+             type: AH.o.BALLOON,
+             tier: AH.d.LIGHT_BLUE
```

#### 38. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L4140-L4149` → after: `L4332-L4337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R4332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L4332-L4337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L4332-L4337) · [Before (L4140-L4149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L4140-L4149)

```diff
-         }
-         const nV = eV.getVelocityGradients();
-         if (nV) {
-           VV.velocityGradients = [];
-           for (const eV of nV) {
-             const xV = {
-               gradient: eV.gradient,
-               factor1: eV.factor1
-             };
-             void 0 !== eV.factor2 ? xV.factor2 = eV.factor2 : xV.factor2 = eV.factor1, VV.velocityGradients.push(xV)
+         },
+         "Green Balloon": {
+           ...QH,
+           physicsState: {
+             type: AH.o.BALLOON,
+             tier: AH.d.GREEN
```

#### 39. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L4151-L4160` → after: `L4339-L4344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R4339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L4339-L4344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L4339-L4344) · [Before (L4151-L4160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L4151-L4160)

```diff
-         }
-         const wV = eV.getDragGradients();
-         if (wV) {
-           VV.dragGradients = [];
-           for (const eV of wV) {
-             const xV = {
-               gradient: eV.gradient,
-               factor1: eV.factor1
-             };
-             void 0 !== eV.factor2 ? xV.factor2 = eV.factor2 : xV.factor2 = eV.factor1, VV.dragGradients.push(xV)
+         },
+         "Gray Balloon": {
+           ...QH,
+           physicsState: {
+             type: AH.o.BALLOON,
+             tier: AH.d.GRAY
```

#### 40. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L4162-L4171` → after: `L4346-L4351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R4346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L4346-L4351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L4346-L4351) · [Before (L4162-L4171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L4162-L4171)

```diff
-         }
-         const ZV = eV.getEmitRateGradients();
-         if (ZV) {
-           VV.emitRateGradients = [];
-           for (const eV of ZV) {
-             const xV = {
-               gradient: eV.gradient,
-               factor1: eV.factor1
-             };
-             void 0 !== eV.factor2 ? xV.factor2 = eV.factor2 : xV.factor2 = eV.factor1, VV.emitRateGradients.push(xV)
+         },
+         "Cyan Balloon": {
+           ...QH,
+           physicsState: {
+             type: AH.o.BALLOON,
+             tier: AH.d.CYAN
```

#### 41. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L4173-L4182` → after: `L4353-L4358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R4353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L4353-L4358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L4353-L4358) · [Before (L4173-L4182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L4173-L4182)

```diff
-         }
-         const vV = eV.getStartSizeGradients();
-         if (vV) {
-           VV.startSizeGradients = [];
-           for (const eV of vV) {
-             const xV = {
-               gradient: eV.gradient,
-               factor1: eV.factor1
-             };
-             void 0 !== eV.factor2 ? xV.factor2 = eV.factor2 : xV.factor2 = eV.factor1, VV.startSizeGradients.push(xV)
+         },
+         "Brown Balloon": {
+           ...QH,
+           physicsState: {
+             type: AH.o.BALLOON,
+             tier: AH.d.BROWN
```

#### 42. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L4184-L4193` → after: `L4360-L4365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R4360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L4360-L4365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L4360-L4365) · [Before (L4184-L4193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L4184-L4193)

```diff
-         }
-         const rV = eV.getLifeTimeGradients();
-         if (rV) {
-           VV.lifeTimeGradients = [];
-           for (const eV of rV) {
-             const xV = {
-               gradient: eV.gradient,
-               factor1: eV.factor1
-             };
-             void 0 !== eV.factor2 ? xV.factor2 = eV.factor2 : xV.factor2 = eV.factor1, VV.lifeTimeGradients.push(xV)
+         },
+         "Blue Balloon": {
+           ...QH,
+           physicsState: {
+             type: AH.o.BALLOON,
+             tier: AH.d.BLUE
```

#### 43. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L4195-L4204` → after: `L4367-L4372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R4367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L4367-L4372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L4367-L4372) · [Before (L4195-L4204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L4195-L4204)

```diff
-         }
-         const kV = eV.getLimitVelocityGradients();
-         if (kV) {
-           VV.limitVelocityGradients = [];
-           for (const eV of kV) {
-             const xV = {
-               gradient: eV.gradient,
-               factor1: eV.factor1
-             };
-             void 0 !== eV.factor2 ? xV.factor2 = eV.factor2 : xV.factor2 = eV.factor1, VV.limitVelocityGradients.push(xV)
+         },
+         "Black Balloon": {
+           ...QH,
+           physicsState: {
+             type: AH.o.BALLOON,
+             tier: AH.d.BLACK
```

#### 44. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L4223-L4257` → after: `L4375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R4375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L4375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L4375) · [Before (L4223-L4257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L4223-L4257)

```diff
-         const yV = this.serialize(xV),
-           pV = !1 === xV && this.particleTexture ? this.particleTexture.clone() : null;
-         pV && (yV.textureName = void 0);
-         const QV = Ke.Parse(yV, this._scene || this._engine, this._rootUrl);
-         return QV.name = VV, QV.customShader = YV, QV._customWrappers = JV, pV && (QV.particleTexture = pV), void 0 === eV && (eV = this.emitter), this.noiseTexture && (QV.noiseTexture = this.noiseTexture.clone()), QV.emitter = eV, this.preventAutoStart || QV.start(), QV
-       }
-     }
-     Ke.BILLBOARDMODE_Y = 2, Ke.BILLBOARDMODE_ALL = 7, Ke.BILLBOARDMODE_STRETCHED = 8, Ke.BILLBOARDMODE_STRETCHED_LOCAL = 9;
-     let He = !1;
-     He || (He = !0, ie._ParseParticleSystem = Ke.Parse)
-   },
-   44538: (VV, eV, xV) => {
-     xV.r(eV), xV.d(eV, {
-       SkyMaterial: () => qV,
-       _MaxColorValueForRenderTarget: () => jV
-     });
- ... (19 more removed lines; see GitHub link above)
+       };
```

#### 45. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L4271-L4313` → after: `L4379-L4385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R4379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L4379-L4385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L4379-L4385) · [Before (L4271-L4313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L4271-L4313)

```diff
-       let eV, pV, nV, vV, qV, tV, FV, TV, PV, AV, NV, XV, MV, zV, GV, WV = QV.e,
-         RV = [],
-         gV = [],
-         DV = [],
-         iV = [],
-         CV = [],
-         aV = [],
-         oV = [],
-         cV = [],
-         hV = [],
-         lV = [],
-         LV = [],
-         fV = [],
-         mV = [],
-         KV = [],
-         HV = [],
- ... (27 more removed lines; see GitHub link above)
+       return null === HH || void 0 === HH ? null : null !== (BH = WH[HH]) && void 0 !== BH ? BH : null
+     }
+     const xH = {
+         meshAttachment: {
+           size: 3,
+           offset: [0, .72, .3],
+           rotation: [-Math.PI / 2, Math.PI, Math.PI]
```

#### 46. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L4315-L4343` → after: `L4387-L4393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R4387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L4387-L4393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L4387-L4393) · [Before (L4315-L4343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L4315-L4343)

```diff
-         isReadyForSubMesh(eV, xV) {
-           const JV = xV._drawWrapper;
-           if (this.isFrozen && JV.effect && JV._wasPreviouslyReady) return !0;
-           xV.materialDefines || (xV.materialDefines = new BV);
-           const YV = xV.materialDefines,
-             UV = this.dD();
-           if (this._isReadyForSubMesh(xV)) return !0;
-           if ((0, EV.$)(eV, UV, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, YV, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, EV.P)(eV, YV, !0, !1), YV.IMAGEPROCESSINGPOSTPROCESS !== UV.imageProcessingConfiguration.applyByPostProcess && YV.mark … [truncated]
-             YV.markAsProcessed(), UV.resetCachedMaterial();
-             const eV = new kV.d;
-             YV.FOG && eV.addFallback(1, "FOG"), YV.IMAGEPROCESSINGPOSTPROCESS = UV.imageProcessingConfiguration.applyByPostProcess, YV.DITHER = this.dithering, YV.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
-             const JV = [wV.c.PositionKind];
-             YV.VERTEXCOLOR && JV.push(wV.c.ColorKind);
-             const yV = "sky",
-               pV = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue … [truncated]
-             (0, bV.c)(pV);
- ... (13 more removed lines; see GitHub link above)
+       },
+       vH = {
+         "Wood Hang Glider": {
+           ...xH,
+           physicsState: {
+             type: AH.o.GLIDER,
+             tier: AH.i.WOOD
```

#### 47. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L4345-L4357` → after: `L4395-L4400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R4395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L4395-L4400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L4395-L4400) · [Before (L4345-L4357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L4345-L4357)

```diff
-           return !(!xV.effect || !xV.effect.isReady()) && (YV._renderId = UV.getRenderId(), JV._wasPreviouslyReady = !0, !0)
-         }
-         bindForSubMesh(VV, eV, xV) {
-           const JV = this.dD(),
-             YV = xV.materialDefines;
-           if (!YV) return;
-           const UV = xV.effect;
-           if (!UV) return;
-           this._activeEffect = UV, this.bindOnlyWorldMatrix(VV), this._activeEffect.setMatrix("viewProjection", JV.getTransformMatrix()), this._mustRebind(JV, UV, xV) && ((0, bV.g)(UV, this, JV), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._ … [truncated]
-           const pV = JV.activeCamera;
-           if (pV) {
-             const VV = pV.getWorldMatrix();
-             this._cameraPosition.x = VV.m[12], this._cameraPosition.y = VV.m[13], this._cameraPosition.z = VV.m[14], this._activeEffect.setVector3("cameraPosition", yV.TmpVectors.Ik[0].iG(this._cameraPosition).IYV(JV.floatingOriginOffset))
+         },
+         "Iron Hang Glider": {
+           ...xH,
+           physicsState: {
+             type: AH.o.GLIDER,
+             tier: AH.i.IRON
```

#### 48. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L4359-L4361` → after: `L4402-L4407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R4402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L4402-L4407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L4402-L4407) · [Before (L4359-L4361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L4359-L4361)

```diff
-           if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbi … [truncated]
-             const VV = JV.sk()._currentRenderTarget;
-             this._activeEffect.setFloat("maxColorValue", jV(VV?.texture?.type))
+         },
+         "Gold Hang Glider": {
+           ...xH,
+           physicsState: {
+             type: AH.o.GLIDER,
+             tier: AH.i.GOLD
```

#### 49. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L4363-L4366` → after: `L4409-L4414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R4409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L4409-L4414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L4409-L4414) · [Before (L4363-L4366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L4363-L4366)

```diff
-           if (!this.useSunPosition) {
-             const VV = Math.PI * (this.inclination - .5),
-               eV = 2 * Math.PI * (this.azimuth - .5);
-             this.sunPosition.x = this.distance * Math.cos(eV) * Math.cos(VV), this.sunPosition.y = this.distance * Math.sin(-VV), this.sunPosition.z = this.distance * Math.sin(eV) * Math.cos(VV), yV.Quaternion.FromUnitVectorsToRef(yV.Ik.UpReadOnly, this.up, this._skyOrientation), … [truncated]
+         },
+         "Diamond Hang Glider": {
+           ...xH,
+           physicsState: {
+             type: AH.o.GLIDER,
+             tier: AH.i.DIAMOND
```

#### 50. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L4389-L4594` → after: `L4417-L4465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R4417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L4417-L4465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/268.js#L4417-L4465) · [Before (L4389-L4594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/268.js#L4389-L4594)

```diff
-       }, (() => {
-         const xV = "function" === typeof Symbol && Symbol.metadata ? Object.create(WV[Symbol.metadata] ?? null) : void 0;
-         eV = [(0, YV.J)()], pV = [(0, YV.J)()], nV = [(0, YV.J)()], vV = [(0, YV.J)()], qV = [(0, YV.J)()], tV = [(0, YV.J)()], FV = [(0, YV.J)()], TV = [(0, YV.J)()], PV = [(0, YV.I)()], AV = [(0, YV.J)()], NV = [(0, YV.I)()], XV = [(0, YV.I)()], MV = [(0, YV.J)()], zV = [(0, YV … [truncated]
-           kind: "field",
-           name: "luminance",
-           static: !1,
-           private: !1,
-           access: {
-             has: VV => "luminance" in VV,
-             get: VV => VV.luminance,
-             set: (VV, eV) => {
-               VV.luminance = eV
-             }
-           },
-           metadata: xV
-         }, RV, gV), (0, JV.i)(null, null, pV, {
- ... (190 more removed lines; see GitHub link above)
+       };
+ 
+     function PH(HH) {
+       var BH;
+       return null === HH || void 0 === HH ? null : null !== (BH = vH[HH]) && void 0 !== BH ? BH : null
+     }
+     const TH = new Set(Object.values(WH).map((HH => HH.physicsState.type))),
+       UH = new Set(Object.values(vH).map((HH => HH.physicsState.type)));
+ 
+     function VH(HH) {
+       return TH.has(HH)
+     }
+ 
+     function OH(HH) {
+       return UH.has(HH)
+     }
+ ... (33 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/269.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/269.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b)

#### 1. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/269.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/269.js#L4)

```diff
-   42426: (VV, eV, xV) => {
+   38935: (HH, BH, LH) => {
```

#### 2. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L6-L8` → after: `L6-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L6-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/269.js#L6-L11) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/269.js#L6-L8)

```diff
-       e: () => yV,
-       f: () => wV,
-       j: () => nV
+       c: () => CH,
+       d: () => AH,
+       g: () => tH,
+       i: () => rH,
+       l: () => hH,
+       m: () => SH
```

#### 3. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L10-L24` → after: `L13-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L13-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/269.js#L13-L164) · [Before (L10-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/269.js#L10-L24)

```diff
-     var JV, YV = xV(38303),
-       UV = xV(38269);
-     ! function(VV) {
-       VV[VV.CW = 0] = "CW", VV[VV.CCW = 1] = "CCW"
-     }(JV || (JV = {}));
-     class yV {
-       static Interpolate(VV, eV, xV, JV, YV) {
-         if (0 === VV) return 0;
-         const UV = 1 - 3 * JV + 3 * eV,
-           yV = 3 * JV - 6 * eV,
-           pV = 3 * eV;
-         let QV = VV;
-         for (let nV = 0; nV < 5; nV++) {
-           const eV = QV * QV;
-           QV -= (UV * (eV * QV) + yV * eV + pV * QV - VV) * (1 / (3 * UV * eV + 2 * yV * QV + pV)), QV = Math.min(1, Math.max(0, QV))
+     const AH = 1.001,
+       rH = .501,
+       SH = .025,
+       hH = .75,
+       tH = .08,
+       zH = 4;
+ 
+     function CH() {
+       const HH = rH,
+         BH = SH,
+         LH = HH - BH / 2,
+         AH = (2 * HH - 2 * BH) / (2 * zH - 1),
+         hH = [];
+       for (const rH of [-LH, LH])
+         for (const SH of [-LH, LH])
+           for (let LH = 0; LH < zH; LH++) {
+ ... (136 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L26-L97` → after: `L166-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L166-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/269.js#L166-L306) · [Before (L26-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/269.js#L26-L97)

```diff
-         return 3 * Math.pow(1 - QV, 2) * QV * xV + 3 * (1 - QV) * Math.pow(QV, 2) * YV + Math.pow(QV, 3)
-       }
-     }
-     class pV {
-       constructor(VV) {
-         this._radians = VV, this._radians < 0 && (this._radians += 2 * Math.PI)
-       }
-       degrees() {
-         return 180 * this._radians / Math.PI
-       }
-       radians() {
-         return this._radians
-       }
-       static BetweenTwoPoints(VV, eV) {
-         const xV = eV.subtract(VV),
-           JV = Math.atan2(xV.y, xV.x);
- ... (56 more removed lines; see GitHub link above)
+       };
+ 
+     function PH(HH, BH) {
+       return 1e3 * (null !== BH && void 0 !== BH ? BH : 0) / HH.opMs
+     }
+ 
+     function TH(HH) {
+       let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+       const LH = PH(vH["Coolant Mixer"], XH) * BH;
+       return HH <= 0 ? 0 : Math.ceil(HH / LH - 1e-9)
+     }
+     const UH = "baf2Water",
+       VH = "baf2waterclose",
+       OH = "baf2wateropen"
+   },
+   39279: (HH, BH, LH) => {
+ ... (125 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L99-L110` → after: `L308-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L308-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/269.js#L308-L327) · [Before (L99-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/269.js#L99-L110)

```diff
-         return this
-       }
-       addQuadraticCurveTo(VV, eV, xV, JV) {
-         let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
-         if (this.closed) return this;
-         const UV = (VV, eV, xV, JV) => (1 - VV) * (1 - VV) * eV + 2 * VV * (1 - VV) * xV + VV * VV * JV,
-           yV = this._points[this._points.length - 1];
-         for (let pV = 0; pV <= YV; pV++) {
-           const QV = pV / YV,
-             nV = UV(QV, yV.x, VV, xV),
-             wV = UV(QV, yV.y, eV, JV);
-           this.addLineTo(nV, wV)
+       }
+       stairsAt(HH, BH, LH, AH) {
+         const rH = HH(BH, LH, AH);
+         return this.handles(rH) ? this.stairsOf(rH) : null
+       }
+       cornerAt(HH, BH, LH, AH, rH) {
+         let {
+           rot: SH,
+           half: hH
+         } = rH;
+         const tH = CH[SH],
+           zH = rH => {
+             let [tH, zH] = rH;
+             const CH = this.stairsAt(HH, BH + tH, LH, AH + zH);
+             return null !== CH && CH.rot === SH && CH.half === hH
+           },
+ ... (4 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L112-L123` → after: `L329-L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L329-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/269.js#L329-L332) · [Before (L112-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/269.js#L112-L123)

```diff
-         return this
-       }
-       addBezierCurveTo(VV, eV, xV, JV, YV, UV) {
-         let yV = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
-         if (this.closed) return this;
-         const pV = (VV, eV, xV, JV, YV) => (1 - VV) * (1 - VV) * (1 - VV) * eV + 3 * VV * (1 - VV) * (1 - VV) * xV + 3 * VV * VV * (1 - VV) * JV + VV * VV * VV * YV,
-           QV = this._points[this._points.length - 1];
-         for (let nV = 0; nV <= yV; nV++) {
-           const wV = nV / yV,
-             ZV = pV(wV, QV.x, VV, xV, YV),
-             vV = pV(wV, QV.y, eV, JV, UV);
-           this.addLineTo(ZV, vV)
+         const uH = this.stairsAt(HH, BH - tH[0], LH, AH - tH[1]);
+         if (null !== uH && uH.half === hH) {
+           const HH = CH[uH.rot];
+           if (GH(tH, HH) && !zH(HH)) return XH(HH, EH(tH)) ? "innerLeft" : "innerRight"
```

#### 7. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L125-L146` → after: `L334-L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L334-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/269.js#L334-L386) · [Before (L125-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/269.js#L125-L146)

```diff
-         return this
-       }
-       isPointInside(VV) {
-         let eV = !1;
-         const xV = this._points.length;
-         for (let JV = xV - 1, YV = 0; YV < xV; JV = YV++) {
-           let xV = this._points[JV],
-             UV = this._points[YV],
-             yV = UV.x - xV.x,
-             pV = UV.y - xV.y;
-           if (Math.abs(pV) > Number.EPSILON) {
-             if (pV < 0 && (xV = this._points[YV], yV = -yV, UV = this._points[JV], pV = -pV), VV.y < xV.y || VV.y > UV.y) continue;
-             if (VV.y === xV.y && VV.x === xV.x) return !0;
-             {
-               const JV = pV * (VV.x - xV.x) - yV * (VV.y - xV.y);
-               if (0 === JV) return !0;
- ... (6 more removed lines; see GitHub link above)
+         return null
+       }
+     }, new class {
+       constructor() {
+         this.reshapeOffsets = SH, this.rootIds = new Set(rH.j.map((HH => (0, AH.h)(HH))))
+       }
+       handles(HH) {
+         var BH;
+         const LH = null === (BH = AH.g[HH]) || void 0 === BH ? void 0 : BH.meta;
+         return void 0 !== LH && this.rootIds.has(LH.rootId)
+       }
+       affects(HH) {
+         return this.handles(HH)
+       }
+       placedBy(HH) {
+         return AH.g[HH].meta.rootName === rH.o ? null : rH.o
+ ... (37 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L149-L158` → after: `L440-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L440-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/269.js#L440-L446) · [Before (L149-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/269.js#L149-L158)

```diff
-         return eV
-       }
-       close() {
-         return this.closed = !0, this
-       }
-       length() {
-         let VV = this._length;
-         if (this.closed) {
-           const eV = this._points[this._points.length - 1];
-           VV += this._points[0].subtract(eV).length()
+         return null
+       }
+       reshapedHalf(HH, BH, LH, AH, rH) {
+         if (null !== rH.half && IH(HH, BH, LH, AH, rH)) return rH.half;
+         for (const SH of ["right", "left"]) {
+           const [hH, tH] = (0, bH.o)(rH.rot, SH), zH = oH(HH, BH + hH, LH, AH + tH);
+           if (null !== zH && zH.rot === rH.rot && zH.half === bH.t[SH]) return SH
```

#### 9. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L160-L293` → after: `L448-L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L448-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/269.js#L448-L464) · [Before (L160-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/269.js#L160-L293)

```diff
-         return VV
-       }
-       area() {
-         const VV = this._points.length;
-         let eV = 0;
-         for (let xV = VV - 1, JV = 0; JV < VV; xV = JV++) eV += this._points[xV].x * this._points[JV].y - this._points[JV].x * this._points[xV].y;
-         return .5 * eV
-       }
-       getPoints() {
-         return this._points
-       }
-       getPointAtLengthPosition(VV) {
-         if (VV < 0 || VV > 1) return UV.n.Zero();
-         const eV = VV * this.length();
-         let xV = 0;
-         for (let JV = 0; JV < this._points.length; JV++) {
- ... (118 more removed lines; see GitHub link above)
+         return null
+       }
+     }, new fH.b];
+ 
+     function KH(HH, BH, LH, AH, rH) {
+       let SH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       for (const hH of lH)
+         if (hH.handles(rH)) return hH.shape(HH, BH, LH, AH, rH, SH);
+       return rH
+     }
+ 
+     function cH(HH) {
+       for (const AH of lH) {
+         var BH, LH;
+         if (AH.handles(HH)) return null !== (BH = null === (LH = AH.placedBy) || void 0 === LH ? void 0 : LH.call(AH, HH)) && void 0 !== BH ? BH : null
+       }
+ ... (1 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L296` → after: `L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/269.js#L467) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/269.js#L296)

```diff
-   39867: (VV, eV, xV) => {
+   39288: (HH, BH, LH) => {
```

#### 11. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L300-L303` → after: `L473-L574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L473-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/269.js#L473-L574) · [Before (L300-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/269.js#L300-L303)

```diff
-     var JV = xV(39870);
-     const YV = (VV, eV, xV) => VV ? VV.getClassName && "Mesh" === VV.getClassName() ? null : !VV.getClassName || "SubMesh" !== VV.getClassName() && "PhysicsBody" !== VV.getClassName() ? VV.clone ? VV.clone() : Array.isArray(VV) ? VV.slice() : xV && "object" === typeof VV ? {
-       ...VV
-     } : null : VV.clone(eV) : null;
+     var AH = LH(9940),
+       rH = LH(9955),
+       SH = LH(10015),
+       hH = LH(39297),
+       tH = LH(10009);
+     const zH = (0, hH.L)("pipe"),
+       CH = (0, hH.L)("tank"),
+       EH = (0, hH.L)("port"),
+       XH = "Reactor Port";
+ 
+     function GH(HH, BH, LH) {
+       const AH = new Set([SH.c, SH.b, XH, ...BH, ...LH, ...HH ? [hH.m] : []]);
+       return {
+         makers: new Set(BH),
+         roots: AH
+       }
+ ... (86 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L305-L335` → after: `L576-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L576-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/269.js#L576-L613) · [Before (L305-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/269.js#L305-L335)

```diff
-       static DeepCopy(VV, eV, xV, UV) {
-         let yV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const pV = function(VV) {
-           const eV = [];
-           do {
-             const xV = Object.getOwnPropertyNames(VV);
-             for (const VV of xV) - 1 === eV.indexOf(VV) && eV.push(VV)
-           } while (VV = Object.getPrototypeOf(VV));
-           return eV
-         }(VV);
-         for (const nV of pV) {
-           if ("_" === nV[0] && (!UV || -1 === UV.indexOf(nV))) continue;
-           if (nV.endsWith("Observable")) continue;
-           if (xV && -1 !== xV.indexOf(nV)) continue;
-           const pV = VV[nV],
-             wV = typeof pV;
- ... (15 more removed lines; see GitHub link above)
+       constructor() {
+         this.reshapeOffsets = WH
+       }
+       handles(HH) {
+         return null !== PH(HH)
+       }
+       affects(HH) {
+         var BH, LH;
+         return uH.has(null !== (BH = null === (LH = AH.g[HH]) || void 0 === LH ? void 0 : LH.meta.rootName) && void 0 !== BH ? BH : "")
+       }
+       placedBy(HH) {
+         var BH;
+         return (null === (BH = AH.g[HH]) || void 0 === BH ? void 0 : BH.meta.rootName) === SH.b ? SH.c : null
+       }
+       shape(HH, BH, LH, rH, tH, CH) {
+         var EH, XH, GH;
+ ... (22 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L339` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/269.js#L617) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/269.js#L339)

```diff
-   39870: (VV, eV, xV) => {
+   39058: (HH, BH, LH) => {
```

#### 14. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L341` → after: `L619-L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L619-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/269.js#L619-L620) · [Before (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/269.js#L341)

```diff
-       b: () => JV
+       d: () => AH,
+       h: () => SH
```

#### 15. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L343-L408` → after: `L622-L645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L622-L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/269.js#L622-L645) · [Before (L343-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/269.js#L343-L408)

```diff
-     class JV {
-       static _CheckLimit(VV, eV) {
-         let xV = JV._LogLimitOutputs[VV];
-         return xV ? xV.current++ : (xV = {
-           limit: eV,
-           current: 1
-         }, JV._LogLimitOutputs[VV] = xV), xV.current <= xV.limit
-       }
-       static _GenerateLimitMessage(VV) {
-         let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         const xV = JV._LogLimitOutputs[VV];
-         if (!xV || !JV.MessageLimitReached) return;
-         const YV = this._Levels[eV];
-         xV.current === xV.limit && JV[YV.name](JV.MessageLimitReached.replace(/%LIMIT%/g, "" + xV.limit).replace(/%TYPE%/g, YV.name ?? ""))
-       }
-       static _AddLogEntry(VV) {
- ... (50 more removed lines; see GitHub link above)
+     const AH = ["Chest", "Loot Chest", "Moonstone Chest"],
+       rH = [{
+         name: "Workbench",
+         exactMatch: !0
+       }, {
+         name: "Furnace",
+         exactMatch: !0
+       }, {
+         name: "Artisan Bench",
+         exactMatch: !0
+       }, {
+         name: "Potion Table",
+         exactMatch: !0
+       }, {
+         name: "Salvaging Table",
+         exactMatch: !0
+ ... (8 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/270.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/270.js` (83 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3)

#### 1. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L4-L30` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L4) · [Before (L4-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L4-L30)

```diff
-   40373: (VV, eV, xV) => {
-     function JV(VV) {
-       return void 0 === VV ? void 0 : [VV[0], VV[1], VV[2]]
-     }
- 
-     function YV(VV) {
-       const eV = VV.particles;
-       return {
-         opts: {
-           texture: eV.texture,
-           Jv: eV.Jv,
-           minLifeTime: eV.minLifeTime,
-           maxLifeTime: eV.maxLifeTime,
-           minSize: eV.minSize,
-           maxSize: eV.maxSize,
-           minEmitPower: eV.minEmitPower,
- ... (11 more removed lines; see GitHub link above)
+   39383: (HH, BH, LH) => {
```

#### 2. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L66-L73` → after: `L11-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L11-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L11-L13) · [Before (L66-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L66-L73)

```diff
-       constructor() {
-         this.pose = {
-           pos: [0, 0, 0],
-           yaw: 0,
-           mode: "flying",
-           seated: !1,
-           clip: void 0
-         }, this.ME = [0, 0, 0], this.lastFeet = [0, 0, 0], this.target = [0, 0, 0], this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0
+       constructor(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rH;
+         this.pool = HH, this.origin = BH, this.count = 0, this.free = []
```

#### 3. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L75` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L15) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L75)

```diff
-       step(VV) {
+       take() {
```

#### 4. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L78-L102` → after: `L25-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L25-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L25-L52) · [Before (L78-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L78-L102)

```diff
-           feet: xV,
-           heading: JV,
-           tuning: yV
-         } = VV, pV = Math.min(Math.max(VV.dt, 0), .1), {
-           pose: QV,
-           ME: nV,
-           target: wV
-         } = this;
-         if (this.started && pV > 0) {
-           const VV = Math.hypot(xV[0] - this.lastFeet[0], xV[1] - this.lastFeet[1], xV[2] - this.lastFeet[2]);
-           this.speed += (VV / pV - this.speed) * Math.min(pV / .15, 1)
-         }
-         this.lastFeet[0] = xV[0], this.lastFeet[1] = xV[1], this.lastFeet[2] = xV[2], this.stillS = this.speed > .3 ? 0 : this.stillS + pV;
-         const ZV = this.stillS >= .6 ? "perched" : "flying";
-         "flying" === ZV && "perched" === QV.mode && (this.sinceTakeOffS = 0, this.perchLocked = !1), this.sinceTakeOffS += pV, QV.mode = ZV;
-         const vV = Math.sin(JV),
- ... (9 more removed lines; see GitHub link above)
+           records: SH
+         } = this.pool, {
+           origin: hH
+         } = this, tH = HH * AH.d;
+         SH[tH] = BH - hH[0], SH[tH + 1] = LH - hH[1], SH[tH + 2] = rH - hH[2], SH[tH + AH.g] = 0, this.pool.markDirty(HH)
+       }
+       hide(HH) {
+         this.pool.records[HH * AH.d + AH.g] = 1, this.pool.markDirty(HH)
+       }
+       commit() {
+         this.pool.commit(this.count)
+       }
+       dispose() {
+         this.pool.dispose()
+       }
+     }
+ ... (12 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L104-L106` → after: `L54-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L54-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L54-L63) · [Before (L104-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L104-L106)

```diff
-         const EV = JV + yV.yawOffset;
-         var BV;
-         return this.started ? QV.yaw += ((BV = EV - QV.yaw) - 2 * Math.PI * Math.round(BV / (2 * Math.PI))) * Math.min(8 * pV, 1) : QV.yaw = EV, this.started = !0, QV.seated = "perched" === ZV && this.perchLocked, QV.clip = null === (eV = yV.clips) || void 0 === eV ? void 0 : eV[ … [truncated]
+         return BH
+       }
+       follow(HH) {
+         const {
+           origin: BH
+         } = this;
+         if (Math.abs(HH[0] - BH[0]) <= 512 && Math.abs(HH[1] - BH[1]) <= 512 && Math.abs(HH[2] - BH[2]) <= 512) return !1;
+         BH[0] = Math.floor(HH[0]), BH[1] = Math.floor(HH[1]), BH[2] = Math.floor(HH[2]);
+         for (const LH of this.kinds.values()) null === LH || void 0 === LH || LH.pool.setOrigin(BH[0], BH[1], BH[2]);
+         return !0
```

#### 6. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L108-L109` → after: `L65-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L65-L66) · [Before (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L108-L109)

```diff
-       reset() {
-         this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0, this.pose.mode = "flying", this.pose.seated = !1
+       commit() {
+         for (const HH of this.kinds.values()) null === HH || void 0 === HH || HH.commit()
```

#### 7. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L111-L112` → after: `L68-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L68-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L68-L70) · [Before (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L111-L112)

```diff
-       tY(VV) {
-         return "perched" === VV ? this.perchLocked ? "perch" : "land" : this.sinceTakeOffS < .4 ? "takeOff" : "fly"
+       dispose() {
+         for (const HH of this.kinds.values()) null === HH || void 0 === HH || HH.dispose();
+         this.kinds.clear()
```

#### 8. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L116-L117` → after: `L88-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L88-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L88-L108) · [Before (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L116-L117)

```diff
-     function YV(VV, eV) {
-       return VV.bobAmplitude * Math.sin(2 * Math.PI * VV.bobHz * eV)
+     function tH(HH, BH, LH, AH) {
+       for (let rH = 0; rH < 6; rH++) CH(HH, BH, LH, AH, rH)
+     }
+ 
+     function zH(HH, BH, LH, SH, hH) {
+       for (let tH = 0; tH < 6; tH++)
+         for (const zH of [0, 1]) {
+           const [CH, EH, XH] = [zH + 2, zH + 1, (zH + 3) % 4], GH = HH.length / 3;
+           for (const [BH, rH] of [
+               [zH, EH],
+               [CH, EH],
+               [CH, XH],
+               [zH, XH]
+             ])
+             for (let zH = 0; zH < 3; zH++) {
+               const CH = AH[3 * (4 * tH + BH) + zH],
+ ... (5 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L121-L122` → after: `L112-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L112-L115) · [Before (L121-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L121-L122)

```diff
-       const [UV, yV, pV] = xV;
-       VV[0] = eV[0] + UV * YV + pV * JV, VV[1] = eV[1] + yV, VV[2] = eV[2] - UV * JV + pV * YV
+       let [tH, zH, CH] = LH, [EH, XH, GH] = SH;
+       const YH = HH.length / 3;
+       for (let rH = 4 * hH; rH < 4 * hH + 4; rH++) HH.push(AH[3 * rH] * EH / 2 + tH, AH[3 * rH + 1] * XH / 2 + zH, AH[3 * rH + 2] * GH / 2 + CH);
+       for (const AH of rH) BH.push(YH + AH)
```

#### 10. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L125-L127` → after: `L118-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L118-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L118-L120) · [Before (L125-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L125-L127)

```diff
-   40350: (VV, eV, xV) => {
-     xV.d(eV, {
-       b: () => UV
+   39354: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       default: () => Cx
```

#### 11. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L129-L130` → after: `L122-L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L122-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L122-L605) · [Before (L129-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L129-L130)

```diff
-     var JV = xV(38263),
-       YV = xV(39013);
+     var AH = LH(45);
+     const rH = [{
+         nameKey: "tierBurner",
+         cost: [],
+         islandRadius: 11.5,
+         machineAllowance: 16,
+         beltAllowance: 64,
+         newDeposits: [],
+         unlocks: [],
+         reward: null
+       }, {
+         nameKey: "tierCurrent",
+         cost: [{
+           item: "Iron Bar",
+           amount: 40
+         }, {
+ ... (468 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L133-L137` → after: `L608-L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L608-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L608-L623) · [Before (L133-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L133-L137)

```diff
-       var xV;
-       VV.blendMode = eV.blendMode, VV.minLifeTime = eV.minLifeTime, VV.maxLifeTime = eV.maxLifeTime, VV.minSize = eV.minSize, VV.maxSize = eV.maxSize, VV.minEmitPower = eV.minEmitPower, VV.maxEmitPower = eV.maxEmitPower;
-       const UV = null !== (xV = eV.gravity) && void 0 !== xV ? xV : [0, 0, 0];
-       VV.gravity = new JV.Ik(UV[0], UV[1], UV[2]);
-       for (const JV of eV.colorGradients) VV.addColorGradient(JV.timeFraction, (0, YV.j)(JV.minColor), JV.maxColor ? (0, YV.j)(JV.maxColor) : void 0)
+       let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : XH(HH) > 0;
+       return LH && !hH ? "hidden" : HH <= BH ? "open" : LH ? BH < 5 ? "hidden" : BH < SH ? "teaser" : "locked" : "locked"
+     }
+ 
+     function YH(HH, BH) {
+       let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+       const {
+         kind: AH,
+         n: rH
+       } = WH(HH);
+       return {
+         key: BH[AH],
+         params: {
+           [AH]: LH ? String(rH) : rH
+         }
+       }
```

#### 13. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L164-L165` → after: `L626-L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L626-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L626-L628) · [Before (L164-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L164-L165)

```diff
-       no_adapter: "start_no_adapter",
-       device: "device_failed"
+       tier: "coreTierName",
+       stage: "coreStageName",
+       atomic: "coreAtomicName"
```

#### 14. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L169-L219` → after: `L636-L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L636-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L636-L652) · [Before (L169-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L169-L219)

```diff
-       var eV;
-       const xV = null !== (eV = wV.currentUrl.getSearchParam(VV)) && void 0 !== eV ? eV : kV.m.getItem(VV);
-       return null === xV || void 0 === xV || "" === xV ? null : "0" !== xV && "false" !== xV && !1 !== xV && 0 !== xV
-     }
-     async function qV(VV, eV) {
-       (0, UV.B)(null);
-       const xV = (0, yV.i)((0, yV.h)(eV.useWebGpu, !0));
-       (0, vV.setWebGpuRequested)("lite" === xV.requested && (0, vV.getWebGpuSupported)());
-       const pV = (0, yV.f)(xV.source);
-       null !== pV && console.info(`Renderer: ${xV.requested} from ${pV}`), null !== xV.fallbackReason && console.warn(`Renderer: ${xV.fallbackReason}`);
-       let wV = xV.fallbackReason;
-       if ("webgl2" !== xV.choice) {
-         const pV = await async function(VV, eV, xV, yV) {
-           const pV = await (0, vV.probeWebGpuAdapter)();
-           if ("usable" !== pV) return (0, vV.setWebGpuFallbackReason)(pV), console.info("No usable WebGPU adapter, rendering with WebGL."), "no usable WebGPU adapter";
-           if (xV && !0 === kV.m.getItem(EV.G) && !0 !== kV.m.getItem(JV.jc)) return (0, vV.setWebGpuFallbackReason)("old_intel_driver"), console.info("The WebGPU adapter is an Intel GPU whose driver is too old for Lite (no shader-f16), rendering with WebGL."), EV.b;
- ... (35 more removed lines; see GitHub link above)
+       const BH = XH(HH);
+       if (BH > 0) return {
+         kind: "atomic",
+         n: BH,
+         short: `A${BH}`
+       };
+       const LH = function(HH) {
+         return HH >= 6 && HH <= 10 ? HH - 6 + 1 : 0
+       }(HH);
+       return LH > 0 ? {
+         kind: "stage",
+         n: LH,
+         short: `S${LH}`
+       } : {
+         kind: "tier",
+         n: HH,
+ ... (1 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L223-L224` → after: `L656-L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L656-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L656-L657) · [Before (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L223-L224)

```diff
-     function tV() {
-       return Promise.all([xV.e(279), xV.e(280), xV.e(277), xV.e(287), xV.e(281), xV.e(286), xV.e(284), xV.e(276), xV.e(289), xV.e(302), xV.e(288), xV.e(282), xV.e(283), xV.e(268), xV.e(0)]).then((() => xV(44455)))
+     function MH(HH) {
+       return rH[Math.max(1, Math.min(HH, rH.length)) - 1]
```

#### 16. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L226-L227` → after: `L659-L664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L659-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L659-L664) · [Before (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L226-L227)

```diff
-     async function FV() {
-       return (await tV()).createSceneParticleSystem
+ 
+     function xH(HH, BH) {
+       return HH < BH ? function(HH) {
+         var BH;
+         return null !== (BH = rH[HH]) && void 0 !== BH ? BH : null
+       }(HH) : null
```

#### 17. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L229-L234` → after: `L666-L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L666-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L666-L673) · [Before (L229-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L229-L234)

```diff
-     async function TV() {
-       Promise.all([xV.e(279), xV.e(612)]).then((() => xV(44520))).then((VV => {
-         VV.installImageBitmapTextureLoader()
-       })).catch((() => {}));
-       const [VV, eV] = await Promise.all([tV(), Promise.all([xV.e(279), xV.e(280), xV.e(277), xV.e(287), xV.e(281), xV.e(286), xV.e(284), xV.e(276), xV.e(289), xV.e(302), xV.e(288), xV.e(282), xV.e(283), xV.e(268), xV.e(0)]).then((() => xV(44538))), Promise.all([xV.e(279), xV.e(2 … [truncated]
-       return (0, pV.e)(eV.SkyMaterial), VV.default
+     const vH = "baf2coresubmit",
+       PH = "baf2corebankpause",
+       TH = "baf2coredeposit",
+       UH = "baf2corechargepause";
+ 
+     function VH(HH) {
+       var BH;
+       return null !== (BH = HH.baf2CoreOpen) && void 0 !== BH ? BH : SH
```

#### 18. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L238` → after: `L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L678) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L238)

```diff
-       return "lite" === (0, yV.i)((0, yV.h)(VV, !1)).choice && (0, vV.getWebGpuSupported)() && !kV.m.getItem(EV.u)
+       return OH.includes(HH)
```

#### 19. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L242-L244` → after: `L685-L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L685-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L685-L686) · [Before (L242-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L242-L244)

```diff
-       PV(VV) || TV().catch((VV => {
-         console.warn("Failed to prefetch noa's Babylon backend.", VV)
-       }))
+       var BH;
+       return null !== (BH = mH[HH]) && void 0 !== BH ? BH : ["Workbench"]
```

#### 20. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L248-L252` → after: `L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L690) · [Before (L248-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L248-L252)

```diff
-       (0, bV.d)((() => {
-         PV(VV) ? (0, UV.p)().load().catch((VV => {
-           console.warn("Failed to prefetch the Lite renderer.", VV)
-         })) : AV(VV)
-       }))
+       return oH(HH)[0]
```

#### 21. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L254-L262` → after: `L692-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L692-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L692-L694) · [Before (L254-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L254-L262)

```diff
-   },
-   39934: (VV, eV, xV) => {
-     xV.d(eV, {
-       c: () => pV,
-       f: () => yV
-     });
-     var JV = xV(27),
-       YV = xV(35251),
-       UV = xV(3239);
+     rH.slice(1).map(((HH, BH) => `Core Tier ${BH+2}`));
+     var fH = LH(9940);
+     const lH = ["on", "hud", "off"];
```

#### 22. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L265-L266` → after: `L697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L697) · [Before (L265-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L265-L266)

```diff
-       var eV;
-       return null !== (eV = VV.parentElement) && void 0 !== eV ? eV : VV
+       return "on" === HH
```

#### 23. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L269-L273` → after: `L722-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L722-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L722-L723) · [Before (L269-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L269-L273)

```diff
-     function pV(VV, eV) {
-       if (VV.clientWidth <= 0 || VV.clientHeight <= 0 || YV.e.isHeld()) return null;
-       const xV = (0, UV.n)(),
-         [yV, pV] = eV.size(xV);
-       return (0, UV.t)(yV, pV, xV, JV.b.get("clientEscMenuOptions").pixelScale)
+     function FH(HH) {
+       return `lifeform:${(0,cH.Fe)(HH)}`
```

#### 24. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L275-L301` → after: `L725-L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L725-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L725-L730) · [Before (L275-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L275-L301)

```diff
-   },
-   42518: (VV, eV, xV) => {
-     xV.r(eV), xV.d(eV, {
-       openCharacterPreview: () => ne
-     });
-     var JV = xV(39243),
-       YV = xV(3093),
-       UV = xV(642),
-       yV = xV(38340),
-       pV = xV(2388),
-       QV = xV(38328),
-       nV = xV(41071),
-       wV = xV(41331),
-       ZV = xV(42419),
-       vV = xV(38263),
-       rV = xV(41510),
- ... (11 more removed lines; see GitHub link above)
+ 
+     function DH(HH) {
+       if (!HH) return null;
+       if (HH.startsWith(jH)) {
+         const BH = HH.slice(6);
+         return gH.includes(BH) ? BH : null
```

#### 25. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L303-L304` → after: `L732-L734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L732-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L732-L734) · [Before (L303-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L303-L304)

```diff
-       write(VV) {
-         this.pose.pose(VV), (0, FV.n)(this.pose, this.nodes)
+       if (HH.endsWith(nH)) {
+         const BH = HH.slice(0, -14);
+         return void 0 !== qH[BH] ? BH : null
```

#### 26. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L309-L327` → after: `L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L740) · [Before (L309-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L309-L327)

```diff
-       VV.unfreezeWorldMatrix();
-       for (const eV of VV.getChildren()) PV(eV)
-     }
-     async function AV(VV, eV, xV, JV) {
-       let {
-         keepTransforms: YV,
-         backFaceCulling: UV
-       } = JV;
-       const yV = await (0, tV.g)(eV, VV),
-         pV = (0, tV.d)(null !== xV && void 0 !== xV ? xV : eV, VV, void 0, UV);
-       (0, tV.k)(yV, pV, {
-         keepTransforms: YV,
-         backFaceCulling: UV,
-         onProcessedMesh: eV => {
-           VV.gYV(eV, !1), eV.isVisible = !1
-         }
- ... (3 more removed lines; see GitHub link above)
+       return !0 === HH.mobFarm
```

#### 27. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L331-L440` → after: `L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L744) · [Before (L331-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L331-L440)

```diff
-       VV.isVisible = eV;
-       for (const xV of VV.getChildMeshes()) xV.isVisible = eV
-     }
-     class XV {
-       constructor(VV, eV, xV) {
-         this.yE = VV, this.thinInstMgr = eV, this.pC = xV, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
-       }
-       loadModel(VV, eV, xV) {
-         const JV = (0, tV.e)(VV, eV);
-         return JV in this.modelCache || (this.modelCache[JV] = (async () => {
-           try {
-             const JV = await AV(this.yE, VV, eV, {
-                 keepTransforms: void 0 !== xV,
-                 backFaceCulling: !1
-               }),
-               YV = new Map;
- ... (94 more removed lines; see GitHub link above)
+       return NH[qH[BH]] * HH.opMs / 1e3
```

#### 28. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L444-L445` → after: `L751-L752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L751-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L751-L752) · [Before (L444-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L444-L445)

```diff
-       let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-       return new vV.Ik(VV[0] * eV, VV[1] * eV, VV[2] * eV)
+       const BH = rH.findIndex((BH => BH.unlocks.includes(HH)));
+       return BH < 0 ? 1 : BH + 1
```

#### 29. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L447-L561` → after: `L754-L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L754-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L754-L756) · [Before (L447-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L447-L561)

```diff
-     class cV {
-       constructor(VV, eV) {
-         this.yE = VV, this.scale = eV, this.petNodes = new Map, this.particleTextures = new Map, this.petName = "pet_none", this.shownPet = null, this.petIsolated = !1, this.auraSeq = 0, this.aura = null, this.auraName = "aura_none", this.auraTuning = null, this.auraDrawn = Promi … [truncated]
-       }
-       async setPet(VV) {
-         var eV;
-         this.petName = VV, null === (eV = this.shownPet) || void 0 === eV || eV.node.pW(!1), this.shownPet = null;
-         const xV = (0, WV.h)(VV);
-         if (!xV) return;
-         let JV;
-         try {
-           JV = await this.petNode(xV.model)
-         } catch {
-           return
-         }
-         this.petName === VV && (JV.node.pW(!0), this.shownPet = JV)
- ... (99 more removed lines; see GitHub link above)
+ 
+     function iH(HH) {
+       return Math.floor(HH).toLocaleString("en-US")
```

#### 30. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L563-L564` → after: `L758-L761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L758-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L758-L761) · [Before (L563-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L563-L564)

```diff
-     ee.classList.add("CharCustomisationPreviewCanvas");
-     const Je = {};
+     var pH = LH(39297);
+     const yH = "baf2terminaltake",
+       HB = "baf2terminalput",
+       BB = ["one", "stack", "fill"];
```

#### 31. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L566-L578` → after: `L763-L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L763-L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L763-L764) · [Before (L566-L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L566-L578)

```diff
-     function Ye(VV, eV) {
-       if (!HV) return;
-       const yV = (0, YV.d)();
-       if (yV.fW(!1), JV.e.Player.meshApi.updatePlayerCosmetic(yV.bD, SV, VV, eV, !0), "cape" === VV)
-         if (eV === UV.i) uV.pW(!1);
-         else {
-           uV.pW(!0);
-           uV.material.diffuseTexture = new EV.b(xV(39993)(`./cape_${eV}.png`), uV.dD(), {
-             invertY: !1,
-             samplingMode: EV.b.NEAREST_NEAREST_MIPLINEAR
-           })
-         }
-       "pet" === VV ? Je.pet = OV.setPet(eV) : "aura" === VV ? Je.aura = OV.setAura(eV) : Je[VV] = dV.update(VV, eV)
+     function LB(HH, BH, LH) {
+       return `${yH} ${HH} ${BH} ${LH}`
```

#### 32. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L581-L583` → after: `L767-L768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L767-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L767-L768) · [Before (L581-L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L581-L583)

```diff
-     function Ue(VV, eV) {
-       const [xV, JV] = (0, LV.d)(VV, eV, window.devicePixelRatio);
-       fV.setSize(Math.max(xV, Math.floor(VV)), Math.max(JV, Math.floor(eV)))
+     function AB(HH, BH, LH) {
+       return `${HB} ${HH} ${BH} ${LH}`
```

#### 33. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L585-L655` → after: `L770-L772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L770-L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L770-L772) · [Before (L585-L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L585-L655)

```diff
-     let ye = 0;
-     class pe {
-       constructor(VV, eV) {
-         this.framing = eV, this.ready = Ve, this.dev = {
-           canvas: () => ee,
-           isolateHead(VV) {
-             const eV = sV.getNodeNames(SV);
-             for (let xV = 0; xV < eV.length; xV++) "HeadMesh" !== eV[xV] && "__root__" !== eV[xV] && "TorsoNode" !== eV[xV] && sV.setNodeEnabled(SV, xV, !1);
-             if (VV) {
-               const VV = sV.getNamedNode(SV, "HeadMesh");
-               sV.setNodeDisableColorWrite(SV, VV, !0, (VV => {
-                 const eV = new bV.StandardMaterial(`${VV.name}_depthOnly`, VV.dD());
-                 return eV.disableColorWrite = !0, eV
-               }))
-             }
-             sV.setPosition(SV, 0, -12, 0), Ye("pet", "pet_none"), Ye("aura", "aura_none")
- ... (55 more removed lines; see GitHub link above)
+ 
+     function rB(HH) {
+       return `${HB} ${HH}`
```

#### 34. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L659-L665` → after: `L780-L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L780-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L780-L801) · [Before (L659-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L659-L665)

```diff
-       let {
-         yaw: eV,
-         pitch: xV,
-         radius: JV,
-         target: YV
-       } = VV;
-       mV.alpha = eV, mV.beta = xV, JV && (mV.radius = JV), YV && mV.target.set(YV[0], YV[1], YV[2])
+       const BH = SB.find((BH => {
+         let [LH] = BH;
+         return HH.startsWith(LH)
+       }));
+       if (!BH) return null;
+       const [LH, AH] = BH, [rH, SH, ...hH] = HH.slice(LH.length).trim().split(" "), tH = Number(rH);
+       if (!Number.isSafeInteger(tH) || tH <= 0) return null;
+       if ("put" === AH && void 0 === SH) return {
+         kind: "putAll",
+         seq: tH
+       };
+       const zH = function(HH) {
+         if (BB.includes(HH)) return HH;
+         const BH = Number(HH);
+         return /^\d+$/.test(HH) && Number.isSafeInteger(BH) && BH > 0 ? BH : null
+       }(null !== SH && void 0 !== SH ? SH : "");
+ ... (6 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L669-L695` → after: `L805-L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L805-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L805-L806) · [Before (L669-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L669-L695)

```diff
-       return VV.appendChild(ee), fV || function() {
-         fV = new nV.c(ee, !0, {
-           preserveDrawingBuffer: !0
-         });
-         const VV = (0, YV.d)();
-         fV.zYV = VV.gZ.engine.zYV, KV = new wV.c(fV), KV.clearColor = new kV.c(0, 0, 0, 0), KV.ambientColor = new kV.Color3(1, 1, 1), mV = new ZV.c("JB", 0, 0, 1, vV.Ik.Zero(), KV), mV.attachControl(ee, !0), mV.panningSensibility = 0, Ve = (0, JV.u)("Player", KV, !0).then((eV =>  … [truncated]
-           HV = eV.meshApi, uV = eV.capeMesh, sV = VV.gZ.YC;
-           const xV = 8.33;
-           SV = (0, JV.n)("Player", xV, !0, !0), sV.setPosition(SV, 0, -8.33, 0);
-           const YV = sV.getNamedNode(SV, "BodyMesh");
-           sV.attachTransformNode(uV, SV, YV), sV.set(SV, "aOpacity", 1), sV.RL(SV, "aOpacity", 1), dV = new XV(KV, sV, SV), OV = new cV(KV, xV), IV = new BV.AnimatorState, IV.iv = VV, IV.thinInstMgr = sV, IV.pC = SV, IV.VYV = sV.rD(SV, 0), IV.modelLifeformType = "Player", IV.node … [truncated]
-           const UV = uV.qL().boundingBox;
-           uV.position.y = ((24 - UV.maximum.y + UV.minimum.y) / 2 - 1 / 32) / xV, uV.position.z = -1 / xV, uV.rotationQuaternion = null;
-           const yV = Math.PI / 18,
-             pV = UV.maximum.y / xV;
-           uV.rotation.x = yV;
- ... (11 more removed lines; see GitHub link above)
+       const LH = "number" === typeof HH ? HH : "one" === HH ? 1 : "stack" === HH ? 99 : BH;
+       return Math.min(BH, LH)
```

#### 36. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L708-L719` → after: `L809-L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L809-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L809-L811) · [Before (L708-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L708-L719)

```diff
-     function QV(VV) {
-       return `\n\t\t\t\t${(0,pV.z)(VV,"mat2","rotate",[{name:"ang",type:"float"}],`\
-       n\ t\ t\ t\ t\ t$ {
-         (0, pV.F)(VV, "float", "s", "sin(ang)")
-       }\
-       n\ t\ t\ t\ t\ t$ {
-         (0, pV.F)(VV, "float", "c", "cos(ang)")
-       }\
-       n\ t\ t\ t\ t\ treturn $ {
-         (0, pV.p)(VV, "mat2", "c", "s", "-s", "c")
-       };\
-       n\ t\ t\ t\ t`)}\n\t\t\t`
+     function zB(HH, BH) {
+       const LH = HH => "number" === typeof HH ? HH : "one" === HH ? 1 : 99;
+       return "fill" === HH || "fill" === BH ? "fill" : LH(HH) + LH(BH)
```

#### 37. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L723-L726` → after: `L815-L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L815-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L815-L830) · [Before (L723-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L723-L726)

```diff
-       let xV = (0, pV.Gb)(VV, "skele" + (eV - 1));
-       for (let YV = eV - 2; YV >= 0; YV--) xV = (0, pV.sb)(VV, `boneIdx == ${YV}`, (0, pV.Gb)(VV, `skele${YV}`), xV);
-       const JV = "bone.yz + rotate(bone.x) * pivot - pivot";
-       return `\n\t\t\t\t${(0,pV.F)(VV,"int","boneIdx",(0,pV.Ab)(VV,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,pV.F)(VV,"vec3","bone",xV)}\n\t\t\t\t${(0,pV.F)(VV,"vec2","pivot",(0,pV.p)(VV,"vec2","0.0",`${(0,pV.Kb)(VV,"position")}.z`))}\n\t\t\t\t${(0,pV.db)(VV)?`posit … [truncated]
+       const LH = hB(HH),
+         AH = hB(BH),
+         rH = LH && AH ? function(HH, BH) {
+           return "take" === HH.kind || "take" === BH.kind ? "take" === HH.kind && "take" === BH.kind && HH.item === BH.item ? {
+             ...BH,
+             mode: zB(HH.mode, BH.mode)
+           } : null : "putAll" === HH.kind || "putAll" === BH.kind ? {
+             kind: "putAll",
+             seq: BH.seq
+           } : HH.item === BH.item ? {
+             ...BH,
+             mode: zB(HH.mode, BH.mode)
+           } : null
+         }(LH, AH) : null;
+       return rH ? "putAll" === (SH = rH).kind ? rB(SH.seq) : "put" === SH.kind ? AB(SH.seq, SH.mode, SH.item) : LB(SH.seq, SH.mode, SH.item) : null;
+       var SH
```

#### 38. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L730` → after: `L877-L882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L877-L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L877-L882) · [Before (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L730)

```diff
-       return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,pV.p)(VV,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
+       return {
+         input: VB,
+         inputAmount: 1,
+         output: HH,
+         outputAmount: 1
+       }
```

#### 39. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L732-L737` → after: `L884-L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L884-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L884-L894) · [Before (L732-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L732-L737)

```diff
-     const ZV = {
-         x: 0,
-         y: 0,
-         z: 0,
-         wZ(VV, eV) {
-           return this.x = VV[eV], this.y = VV[eV + 1], this.z = VV[eV + 2], this
+     const kB = "baf2synth",
+       mB = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthe … [truncated]
+       oB = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
+       IB = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
+       fB = function(HH, BH) {
+         return {
+           input: HH,
+           inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
+           output: BH,
+           outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
+           bonus: arguments.length > 4 ? arguments[4] : void 0
```

#### 40. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L741-L757` → after: `L905-L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L905-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L905-L1065) · [Before (L741-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L741-L757)

```diff
-         name: "Cape",
-         className: "CapeMaterialPlugin",
-         priority: 200,
-         defines: (VV, eV) => ({
-           ...(0, JV.d)("CAPE"),
-           BLOXD_CAPE_BONES: `${VV}`,
-           BLOXD_CAPE_MAX_Y: (0, YV.ob)(eV)
-         }),
-         getUniforms(VV) {
-           return (0, UV.d)(function(VV) {
-             const eV = [];
-             for (let xV = 0; xV < VV; xV++) eV.push({
-               name: `skele${xV}`,
-               type: "highp vec3"
-             });
-             return eV
- ... (1 more removed lines; see GitHub link above)
+         "Burner Drill": {
+           kind: "Burner Drill",
+           opMs: 4e3,
+           inputSlot: null,
+           fuelSlot: 0,
+           outputSlots: [1, 2, 3],
+           recipes: []
+         },
+         Crusher: {
+           kind: "Crusher",
+           opMs: 4e3,
+           inputSlot: 0,
+           fuelSlot: 1,
+           outputSlots: [2, 3, 4],
+           recipes: [fB("Raw Iron", "Iron Grit", 2, 1, {
+             item: "Gold Grit",
+ ... (145 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L759-L760` → after: `L1067-L1075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1067-L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L1067-L1075) · [Before (L759-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L759-L760)

```diff
-         bind(VV) {
-           for (let eV = 0; eV < this.skeleLen; eV++) VV.updateVector3(`skele${eV}`, ZV.wZ(this.skele, 3 * eV))
+         "Crop Harvester": {
+           kind: "Crop Harvester",
+           opMs: 2e3,
+           inputSlot: 0,
+           fuelSlot: null,
+           outputSlots: [1, 2, 3],
+           recipes: [],
+           powerPerOp: 16,
+           field: !0
```

#### 42. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L762-L763` → after: `L1077-L1085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1077-L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L1077-L1085) · [Before (L762-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L762-L763)

```diff
-         uniformsVersion() {
-           return this.bonesVersion
+         "Mob Farm": {
+           kind: "Mob Farm",
+           opMs: 12e3,
+           inputSlot: 0,
+           fuelSlot: null,
+           outputSlots: [1, 2, 3, 4, 5, 6],
+           recipes: [],
+           powerPerOp: 240,
+           mobFarm: !0
```

#### 43. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L765-L769` → after: `L1087-L1171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1087-L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L1087-L1171) · [Before (L765-L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L765-L769)

```diff
-         getCustomCode(VV, eV) {
-           return "vertex" !== VV ? null : {
-             CUSTOM_VERTEX_DEFINITIONS: QV(eV),
-             CUSTOM_VERTEX_UPDATE_POSITION: nV(eV, this.skeleLen),
-             CUSTOM_VERTEX_UPDATE_NORMAL: wV(eV)
+         ...pH.i
+       },
+       eB = {
+         Crusher: [fB("Spent Pellet", "Glow Dust"), fB("Wheat Seeds", "Biomass"), fB("Wheat", "Biomass"), fB("Dead Bush", "Biomass"), fB("Dusk Moss", "Biomass"), fB("Rotten Flesh", "Biomass"), fB("Bone", "Biomass", 2)],
+         "Shatter Mill": [fB("Spent Pellet", "Glow Dust"), fB("Wheat Seeds", "Biomass"), fB("Wheat", "Biomass"), fB("Dead Bush", "Biomass"), fB("Dusk Moss", "Biomass"), fB("Rotten Flesh", "Biomass"), fB("Bone", "Biomass", 2), ...cH.bd.map((HH => fB(HH, "Biomass")))],
+         Smelter: [fB("Biomass", "Fertiliser", 2)],
+         Press: [fB("Coal", "Graphite", 1, 4)]
+       },
+       qB = "Power Coupler",
+       gB = "Advanced Coupler",
+       NB = "Nova Coupler",
+       RB = [{
+         item: qB,
+         level: 1,
+         divisor: 2,
+         powerPerS: 8
+ ... (69 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L771` → after: `L1173-L1345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1173-L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L1173-L1345) · [Before (L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L771)

```diff
-         }
+         }))
+       }),
+       sB = Object.fromEntries([aB("Conveyor Belt", 4, 1, [
+         ["Iron Bar", 2]
+       ]), aB("Motor", 1, 2, [
+         ["Iron Plate", 2],
+         ["Copper Wire", 6],
+         ["Iron Bar", 1]
+       ]), aB("Splitter", 2, 2, [
+         ["Conveyor Belt", 2],
+         ["Iron Plate", 1]
+       ]), aB("Logic Board", 1, 3, [
+         ["Gold Plate", 1],
+         ["Copper Wire", 6],
+         ["Glass", 1]
+       ]), aB("Machine Hull", 1, 3, [
+ ... (157 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L773-L789` → after: `L1347-L1368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1347-L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L1347-L1368) · [Before (L773-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L773-L789)

```diff
-     (0, yV.m)(vV)
-   },
-   39880: (VV, eV, xV) => {
-     xV.d(eV, {
-       e: () => wV,
-       g: () => ZV
-     });
-     var JV = xV(38397),
-       YV = xV(38517),
-       UV = xV(38399),
-       yV = xV(38408);
-     const pV = "bloxdTextLodBias",
-       QV = [{
-         name: pV,
-         type: "float"
-       }],
- ... (1 more removed lines; see GitHub link above)
+ 
+     function zL(HH) {
+       var BH;
+       return null !== (BH = Object.keys(hL).find((BH => hL[BH] === HH))) && void 0 !== BH ? BH : null
+     }
+ 
+     function CL(HH) {
+       return mB.includes(HH)
+     }
+ 
+     function EL(HH) {
+       return !0 !== HH.nuclear || tH()
+     }
+     var XL = LH(304);
+     var GL = LH(10009),
+       YL = LH(9946),
+ ... (6 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L791-L792` → after: `L1370-L1372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1370-L1372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L1370-L1372) · [Before (L791-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L791-L792)

```diff
-         planes: -.5,
-         boards: -.5
+         fuel: ML,
+         water: "Reactor Port|meta|rot1|Water",
+         waste: "Reactor Port|meta|rot1|Waste"
```

#### 47. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L795-L813` → after: `L1375-L1387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1375-L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L1375-L1387) · [Before (L795-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L795-L813)

```diff
-         name: "TextSampler",
-         className: "TextSamplerMaterialPlugin",
-         priority: 60,
-         defines: () => (0, JV.d)("TEXT_SAMPLER"),
-         getUniforms: VV => (0, YV.d)(QV, "fragment", VV),
-         bind(VV) {
-           VV.updateFloat(pV, this.lodBias)
-         },
-         uniformsVersion: () => 0,
-         getCustomCode(VV, eV) {
-           if ("fragment" !== VV) return null;
-           const xV = (0, UV.P)(eV, `vec4 ${nV}(sampler2D s, vec2 uv, float bias)`, `fn ${nV}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
-             JV = (0, UV.P)(eV, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
-             YV = `${(0,UV.X)(eV,"vDiffuseUV")} + uvOffset`,
-             yV = (0, UV.P)(eV, `${nV}(diffuseSampler, ${YV}, ${(0,UV.Gb)(eV,pV)})`, `${nV}(diffuseSampler, diffuseSamplerSampler, ${YV}, ${(0,UV.Gb)(eV,pV)})`);
-           return {
- ... (3 more removed lines; see GitHub link above)
+         1: [0, 0, 1],
+         2: [1, 0, 0],
+         3: [0, 0, -1],
+         4: [-1, 0, 0]
+       },
+       UL = {
+         reactor: {
+           min: 4,
+           max: 12
+         },
+         battery: {
+           min: 2,
+           max: 12
```

#### 48. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L816-L837` → after: `L1695-L16956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R1695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L1695-L16956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L1695-L16956) · [Before (L816-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L816-L837)

```diff
-     (0, yV.m)(ZV)
-   },
-   42450: (VV, eV, xV) => {
-     xV.r(eV), xV.d(eV, {
-       CapeMaterialPlugin: () => tV,
-       HueTintMaterialPlugin: () => FV,
-       LifeformMaterialPlugin: () => TV,
-       OverlayMaterialPlugin: () => PV
-     });
-     var JV = xV(42457),
-       YV = xV(39173);
-     class UV extends((0, JV.h)(YV.b)) {}(0, JV.l)(YV.b, UV);
-     var yV = xV(38479);
-     class pV extends((0, JV.h)(yV.d)) {}(0, JV.l)(yV.d, pV);
-     var QV = xV(39003);
-     class nV extends((0, JV.h)(QV.g)) {}(0, JV.l)(QV.g, nV);
- ... (6 more removed lines; see GitHub link above)
+ 
+     function cA(HH, BH) {
+       var LH, AH, rH;
+       let SH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BH;
+       if ("Solar Panel" === VA(BH)) return {
+         name: (0, cH.Pe)(HH.displayName("Solar Panel")),
+         detail: OA,
+         detailItem: null
+       };
+       const hH = BH.endsWith(" Ore"),
+         zH = (oA ??= new Set([...Object.keys((0, YL.j)()), ...Object.keys((0, uL.p)())].map((HH => HH.split("|")[0]))), oA).has(BH),
+         CH = hH || zH ? null : function(HH) {
+           var BH;
+           return HH.endsWith(" Log") && !HH.startsWith("Barkless ") ? "lookLog" : HH.endsWith(" Sapling") ? "lookSapling" : HH.startsWith("Wheat_stage") ? "lookWheatGrowing" : null !== (BH = IA[HH]) && void 0 !== BH ? BH : null
+         }(BH);
+       if (!HH.isBlock(BH) || !hH && !zH && null === CH) return null;
+ ... (15246 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L839-L840` → after: `L16958-L16969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R16958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L16958-L16969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L16958-L16969) · [Before (L839-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L839-L840)

```diff
-       dispose(VV) {
-         (0, wV.h)(this._material), super.dispose(VV)
+       extentOf(HH) {
+         let BH = this.em,
+           LH = !1;
+         for (let AH = 0; AH < HH.children.length; AH++) {
+           const rH = HH.children[AH],
+             SH = rH.classList.contains("DirectionArrowLabel");
+           LH ||= SH, (SH || rH.classList.contains("DirectionArrowDistance")) && (BH = Math.max(BH, this.halfWidthOf(rH)))
+         }
+         return {
+           halfWidth: BH,
+           labelled: LH
+         }
```

#### 50. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L842-L866` → after: `L16971-L16994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R16971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L16971-L16994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L16971-L16994) · [Before (L842-L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L842-L866)

```diff
-     }(0, JV.l)(vV.g, rV), (0, vV.k)({
-       disableUnusedSpecularTerm: JV.e,
-       isLightingDisabled: VV => VV instanceof ZV.StandardMaterial && VV.disableLighting
-     });
-     var kV = xV(39880);
-     class bV extends((0, JV.h)(kV.g)) {}(0, JV.l)(kV.g, bV);
-     var EV = xV(39984),
-       BV = xV(38395),
-       jV = xV(39277),
-       qV = xV(38493);
-     class tV extends((0, JV.h)(EV.b)) {}(0, JV.l)(EV.b, tV);
-     class FV extends((0, JV.h)(BV.e)) {}(0, JV.l)(BV.e, FV);
-     class TV extends((0, JV.h)(jV.q)) {}(0, JV.l)(jV.q, TV);
-     class PV extends((0, JV.h)(qV.e)) {}(0, JV.l)(qV.e, PV)
-   },
-   39931: (VV, eV, xV) => {
- ... (9 more removed lines; see GitHub link above)
+       halfWidthOf(HH) {
+         let BH = this.halfWidths.get(HH);
+         return void 0 === BH && (BH = HH.offsetWidth / 2, this.halfWidths.set(HH, BH), this.sizes.observe(HH), this.labels.add(HH)), BH
+       }
+       forgetGoneLabels() {
+         for (const HH of this.labels) HH.isConnected || (this.sizes.unobserve(HH), this.halfWidths.delete(HH), this.labels.delete(HH))
+       }
+       anchorOf(HH) {
+         const BH = HH.style.translate,
+           LH = this.anchors.get(HH);
+         if (LH && LH.translate === BH && LH.innerWidth === this.innerWidth && LH.innerHeight === this.innerHeight) return LH;
+         const AH = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(BH);
+         if (!AH) return null;
+         const rH = {
+           translate: BH,
+           x: parseFloat(AH[1]) / 100 * this.innerWidth,
+ ... (8 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L868-L869` → after: `L16996-L16998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R16996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L16996-L16998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L16996-L16998) · [Before (L868-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L868-L869)

```diff
-     function pV(VV) {
-       yV = VV
+     function wM(HH, BH) {
+       const LH = HH.rows.find((HH => HH.current));
+       return KH(HH.tutorial) && null !== LH && void 0 !== LH && LH.item && nr(LH) && oH(LH.item).includes(BH) ? LH.item : null
```

#### 52. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L873-L874` → after: `L17030-L17034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R17030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L17030-L17034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L17030-L17034) · [Before (L873-L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L873-L874)

```diff
-       if (!yV) throw new Error("No SkyMaterial: WebGL2's backend installs it");
-       return new yV("sky", VV)
+       return BH => {
+         let LH = 0;
+         for (const AH of HH.getInventoryItems())(null === AH || void 0 === AH ? void 0 : AH.name) === BH && (LH += null === AH.amount ? 1 : Math.max(AH.amount, 0));
+         return LH
+       }
```

#### 53. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L877-L885` → after: `L17037-L17038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R17037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L17037-L17038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L17037-L17038) · [Before (L877-L885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L877-L885)

```diff
-     function nV(VV, eV, xV) {
-       if (!(0, JV.f)(VV)) return void VV.material.forceCompilation(VV, eV);
-       const yV = () => {
-         if (VV.iN()) return void UV.delete(VV);
-         const JV = (0, YV.eb)(VV.material);
-         if (![null === JV || void 0 === JV ? void 0 : JV.diffuseTexture, null === JV || void 0 === JV ? void 0 : JV.opacityTexture, null === JV || void 0 === JV ? void 0 : JV.emissiveTexture, null === JV || void 0 === JV ? void 0 : JV.reflectionTexture].every((VV => !VV || xV.pre … [truncated]
-         UV.delete(VV), eV()
-       };
-       yV()
+     function aM(HH, BH, LH, AH) {
+       HH.getClientOption(BH, "canCraft") && "inventory" !== Mr.c.get("openInGameMenuName") && (ZM.open(LH, AH.get(), dM(HH)), fr.k.AX("toggleMenu", `inventory|${LH}`))
```

#### 54. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L887-L893` → after: `L17040-L17041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R17040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L17040-L17041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L17040-L17041) · [Before (L887-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L887-L893)

```diff
-   },
-   42527: (VV, eV, xV) => {
-     xV.d(eV, {
-       d: () => UV
-     });
-     const JV = 4e5,
-       YV = 2;
+     let sM = null,
+       JM = !1;
```

#### 55. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L895-L898` → after: `L17043-L17056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R17043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L17043-L17056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L17043-L17056) · [Before (L895-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L895-L898)

```diff
-     function UV(VV, eV, xV) {
-       let [UV, yV] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [VV, eV], pV = Math.min(Number.isFinite(xV) && xV > 0 ? xV : 1, YV);
-       const QV = Math.max(0, UV, VV) * Math.max(0, yV, eV) * pV * pV;
-       return QV > JV && (pV *= Math.sqrt(JV / QV)), [Math.max(1, Math.floor(Math.max(0, VV) * pV)), Math.max(1, Math.floor(Math.max(0, eV) * pV))]
+     function iM(HH) {
+       const BH = xS();
+       HH === sM && BH === JM || (sM = HH, JM = BH, (0, lr.n)(function(HH, BH) {
+         const LH = new Map;
+         for (let AH = HH + 1; AH <= rH.length; AH++) {
+           const rH = RS(AH, HH, BH);
+           if (rH)
+             for (const BH of MH(AH).unlocks) LH.set(BH, {
+               ...rH,
+               stepsAway: AH - HH
+             })
+         }
+         return LH
+       }(HH, BH)))
```

#### 56. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L922-L927` → after: `L17059-L17063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R17059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L17059-L17063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L17059-L17063) · [Before (L922-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L922-L927)

```diff
-     function BV(VV, eV) {
-       return Object.assign((function(VV, xV, JV, YV) {
-         return eV(this.featureState, VV, xV, JV, YV)
-       }), {
-         bZ: VV
-       })
+     function pM() {
+       return HH = () => {
+         null !== sM && iM(sM)
+       }, (0, WS.e)(MS, HH);
+       var HH
```

#### 57. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L930-L955` → after: `L17066-L17068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R17066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L17066-L17068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L17066-L17068) · [Before (L930-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L930-L955)

```diff
-     function jV(VV) {
-       const eV = class extends rV.c {
-           constructor(eV, xV) {
-             const JV = (0, bV.eb)(eV),
-               YV = JV && (0, bV.v)(JV, VV.name);
-             for (var UV = arguments.length, yV = new Array(UV > 2 ? UV - 2 : 0), pV = 2; pV < UV; pV++) yV[pV - 2] = arguments[pV];
-             super(eV, VV.name, VV.priority, YV ? YV.defines : VV.defines(...yV), !1), this.featureState = void 0, this.featureState = xV, this._pluginManager._addPlugin(this), this._enable(!0), (0, bV.z)(this._material, VV, this.featureState, this._pluginDefineNames)
-           }
-           getClassName() {
-             return VV.className
-           }
-           isCompatible(VV) {
-             return VV === EV.d.GLSL || VV === EV.d.WGSL
-           }
-         },
-         xV = (0, kV.j)(VV);
- ... (10 more removed lines; see GitHub link above)
+     function yM() {
+       return (0, lr.r)(NS(Object.keys(mH), KS)), () => {
+         (0, lr.r)([])
```

#### 58. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L965-L993` → after: `L17073-L17083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R17073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L17073-L17083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L17073-L17083) · [Before (L965-L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L965-L993)

```diff
-       return (0, TV.g)(xV, eV.urls, (() => async function(VV, eV, xV) {
-         const {
-           width: JV
-         } = VV[0].getSize(), YV = VV.map(((VV, xV) => {
-           var YV;
-           const UV = Math.round(VV.getSize().height / JV),
-             yV = null === eV || void 0 === eV ? void 0 : eV[xV];
-           return {
-             pixels: yV && yV.byteLength === JV * JV * UV * 4 ? yV : null !== (YV = AV.get(VV.getInternalTexture())) && void 0 !== YV ? YV : VV._readPixelsSync(),
-             layers: UV
-           }
-         })), UV = xV.sk().getCaps().texture2DArrayMaxLayerCount, pV = (0, TV.e)(YV, JV, UV).map((VV => {
-           let {
-             pixels: eV,
-             layers: YV
-           } = VV;
- ... (13 more removed lines; see GitHub link above)
+       var AH, rH;
+       const SH = HH.getTargetedBlock();
+       if (!SH || ! function(HH, BH, LH) {
+           if ("Chest" !== BH) return !1;
+           const AH = HH.split("|")[0];
+           if (!CL(AH) || 0 === cB[AH].outputSlots.length) return !1;
+           const rH = WW(HH);
+           return LH[0] === rH[0] && LH[1] === rH[1] && LH[2] === rH[2]
+         }(LH, null === (AH = HH.yLH(BH)) || void 0 === AH ? void 0 : AH.name, SH.normal)) return !1;
+       const [hH, tH, zH] = SH.AW, CH = HH.getBlockId(hH, tH, zH);
+       return 0 === CH || !0 === (null === (rH = fH.g[CH]) || void 0 === rH ? void 0 : rH.canBePlacedOver)
```

#### 59. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L995-L1031` → after: `L17085-L17089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R17085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L17085-L17089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L17085-L17089) · [Before (L995-L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L995-L1031)

```diff
-     const AV = new WeakMap;
-     var NV = xV(38994);
-     class XV extends(jV(QV.h)) {
-       constructor(VV, eV) {
-         super(VV, eV), this.loaded = new Set, this.mirrors = void 0, this.mirrors = eV.textures.map((VV => VV.mirror)), this.mirrors.forEach(((VV, eV) => {
-           VV.onLoadObservable.add((VV => {
-             this.setTextureArrayData(VV, eV).catch((VV => {
-               console.error(`Failed to build the texture arrays, at atlas ${eV}`, VV)
-             }))
-           }))
-         })), (0, NV.f)(eV, VV.shaderLanguage)
-       }
-       async setTextureArrayData(VV, eV) {
-         const xV = this.featureState,
-           {
-             width: JV,
- ... (21 more removed lines; see GitHub link above)
+     var Bx = LH(37617);
+     const Lx = new Set(QL.c);
+     class Ax {
+       constructor(HH) {
+         this.toasts = HH, this.lastAt = -1 / 0
```

#### 60. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1033-L1035` → after: `L17091-L17109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R17091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L17091-L17109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L17091-L17109) · [Before (L1033-L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L1033-L1035)

```diff
-       _rebuild() {}
-       restore() {
-         super._rebuild()
+       onAltAction(HH, BH, LH) {
+         const AH = HH.getTargetedBlock();
+         if (!AH || function(HH) {
+             const BH = HH.split("|")[0];
+             return CL(BH) || null !== VA(BH) || bH(BH) || QL.c.includes(BH)
+           }(LH) && !Lx.has(LH.split("|")[0])) return;
+         const rH = HH.yLH(BH);
+         if (!rH || !Lx.has(rH.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
+         const SH = rH.typeObj.id,
+           [hH, tH, zH] = AH.AW,
+           CH = HH.getBlockId(hH, tH, zH),
+           EH = fH.g[CH];
+         (0 === CH || null !== EH && void 0 !== EH && EH.UY || null !== EH && void 0 !== EH && EH.canBePlacedOver) && HH.isSolidToPlayerBlockId(SH) && HH.canModifyBlockAt(hH, tH, zH) && HH.PLH(hH, tH, zH, SH) && !HH.PLH(hH, tH, zH, SH, BH) && (this.lastAt = Date.now(), this.toasts … [truncated]
+           baf2ToastText: [(0, cH.fe)({
+             translationKey: "buildAFactory2Game:beltStepBack"
+           }, cH.K.whiteUiText)],
+ ... (3 more added lines; see GitHub link above)
```

#### 61. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1038-L1062` → after: `L17112-L17114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R17112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L17112-L17114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L17112-L17114) · [Before (L1038-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L1038-L1062)

```diff
-     const oV = {
-       Mesh: WV.e,
-       TransformNode: DV.d,
-       nZ: MV.b,
-       VertexBuffer: MV.c,
-       BoundingInfo: zV.b,
-       Ik: GV.Ik,
-       ArenaBuffer: aV,
-       SubMesh: gV.c,
-       VertexData: RV.c,
-       MirroredGeometry: CV.b,
-       meshFromArrays: CV.c,
-       plainMeshFromArrays: CV.d
-     };
-     (0, iV.h)(oV);
-     var cV = xV(38502);
- ... (9 more removed lines; see GitHub link above)
+     class rx {
+       constructor(HH) {
+         this.show = HH, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
```

#### 62. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1064-L1065` → after: `L17116-L17131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R17116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L17116-L17131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L17116-L17131) · [Before (L1064-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L1064-L1065)

```diff
-       dispose(VV) {
-         (0, cV.h)(this._material), super.dispose(VV)
+       onMining(HH, BH, LH) {
+         var AH;
+         if (!BH) return this.started = null, void this.gatedThisHold.clear();
+         if (!HH) return void(this.started = null);
+         const rH = `${HH.x},${HH.y},${HH.z},${HH.LX}`;
+         if (rH === this.started) return;
+         this.started = rH;
+         const SH = eA(HH.y) ? pW(HH.block, HH.LX, HH.level) : null;
+         if (null === SH || this.gatedThisHold.has(rH)) return;
+         this.gatedThisHold.add(rH);
+         const hH = HH.block.split("|")[0];
+         LH - (null !== (AH = this.hintedAt.get(hH)) && void 0 !== AH ? AH : -1 / 0) < 5e3 || (this.hintedAt.set(hH, LH), this.show({
+           baf2ToastText: yW(SH, HH.block),
+           baf2ToastMs: 2500,
+           baf2ToastStyle: "baf2ToastWarn"
+         }))
```

#### 63. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1070-L1109` → after: `L17137-L17152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R17137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L17137-L17152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L17137-L17152) · [Before (L1070-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L1070-L1109)

```diff
-       if (!(eV instanceof JV.StandardMaterial) || eV.specularTexture) return;
-       const {
-         r: xV,
-         g: YV,
-         b: UV
-       } = eV.specularColor;
-       0 === xV && 0 === YV && 0 === UV && (VV.SPECULARTERM = !1)
-     }(0, wV.g)({
-       disableUnusedSpecularTerm: lV
-     });
-     var LV = xV(38445),
-       fV = xV(38673);
-     const mV = new RegExp(`^#define ${nV.e}\\s*$`, "m");
-     class KV extends(jV(nV.l)) {
-       constructor(VV, eV) {
-         super(VV, eV), this.ik = !1, eV.ditherOnlyWhileFading && (fV.e.add(VV), this.prewarmDitherTwins(VV))
- ... (24 more removed lines; see GitHub link above)
+       const LH = [...HH.baf2CoreBankPaused];
+       for (const [rH] of HH.baf2CoreBanked) LH.push(rH);
+       for (const hH of rH) {
+         for (const {
+             item: HH
+           }
+           of hH.cost) LH.push(HH);
+         for (const HH of hH.newDeposits) LH.push(HH.block);
+         for (const HH of hH.unlocks) LH.push(HH, IH(HH));
+         hH.reward && LH.push(hH.reward);
+         for (const {
+             item: HH
+           }
+           of null !== (AH = null === (SH = hH.charge) || void 0 === SH ? void 0 : SH.items) && void 0 !== AH ? AH : []) {
+           var AH, SH;
+           LH.push(HH)
```

#### 64. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1113-L1114` → after: `L17155-L17157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R17155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L17155-L17157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L17155-L17157) · [Before (L1113-L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L1113-L1114)

```diff
-       dispose(VV) {
-         this.ik = !0, super.dispose(VV)
+       return {
+         message: HH,
+         itemNames: BH([...new Set(LH)])
```

#### 65. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1118-L1151` → after: `L17162-L17260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R17162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L17162-L17260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L17162-L17260) · [Before (L1118-L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L1118-L1151)

```diff
- 
-     function uV(VV, eV) {
-       HV.set(VV, eV)
-     }
-     uV(pV.b, qV), uV(QV.h, XV), uV(nV.l, KV), uV(wV.j, hV), (0, ZV.e)({
-       create: (VV, eV) => {
-         const xV = new JV.StandardMaterial(VV.name, eV);
-         return (0, LV.m)(VV, xV), xV.detailMap._pluginDefineNames
-       },
-       write: (VV, eV, xV) => {
-         (0, LV.I)(VV.mirror, eV, xV)
-       },
-       addFeature: (VV, eV, xV) => {
-         const JV = HV.get(eV.feature);
-         if (!JV) throw new Error(`${eV.feature.name} has no plugin class (registerPluginClass)`);
-         new JV(VV.mirror, eV.state, ...xV)
- ... (18 more removed lines; see GitHub link above)
+     const Cx = function(HH, BH, LH, rH) {
+       let {
+         localPlayerId: SH
+       } = rH;
+       const hH = new Et,
+         tH = new yG,
+         CH = new hY,
+         EH = new rY(CH),
+         XH = (HH, BH) => {
+           BH ? EH.observe(HH) : EH.unobserve(HH)
+         },
+         GH = new AY,
+         YH = new zY(XH),
+         uH = HH => YH.covers(HH),
+         QH = new mY;
+       let WH;
+ ... (83 more added lines; see GitHub link above)
```

#### 66. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1153-L1223` → after: `L17262-L17294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R17262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L17262-L17294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L17262-L17294) · [Before (L1153-L1223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L1153-L1223)

```diff
-           })),
-           {
-             mimeType: rV,
-             bytes: kV,
-             label: bV
-           } = QV,
-           EV = {
-             noMipmap: YV,
-             invertY: !1,
-             samplingMode: pV,
-             ...wV,
-             mimeType: rV,
-             loaderOptions: void 0,
-             useSRGBBuffer: !1
-           },
-           BV = new yV.b(null, eV, EV);
- ... (55 more removed lines; see GitHub link above)
+           }(WH, mH, BH) : LB.line(HH, BH),
+           version: () => LB.version() + mH.version()
+         }, (HH => Ru(qH.all(), HH, (HH => ou(WH, HH)))), (() => PH.get().tier)),
+         rB = new mQ,
+         SB = new UM,
+         hB = new oM,
+         tB = oM.blade(),
+         zB = new gM,
+         CB = new aY,
+         EB = new FM,
+         GB = new KM,
+         YB = new lM;
+       let uB = -1 / 0,
+         QB = 0,
+         WB = -1 / 0,
+         MB = -1 / 0;
+ ... (17 more added lines; see GitHub link above)
```

#### 67. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1225-L1227` → after: `L17296-L17298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R17296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L17296-L17298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L17296-L17298) · [Before (L1225-L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L1225-L1227)

```diff
-       link(VV) {
-         var eV;
-         (0, nV.m)(VV), this.model = VV, null === (eV = this.onLinked) || void 0 === eV || eV.call(this, VV)
+ 
+       function TB() {
+         (0, Wr.g)(), PB(null)
```

#### 68. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1229-L1233` → after: `L17300-L17628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R17300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L17300-L17628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L17300-L17628) · [Before (L1229-L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L1229-L1233)

```diff
-       relink() {
-         this.release();
-         const VV = [];
-         for (const YV of Object.values(this._vertexBuffers))
-           if (!YV.getIsInstanced()) {
+       let UB = new Set,
+         VB = !1;
+       const OB = {
+         onCreate: HH => {
+           WH = HH, WH.setGroundArrowStyle({
+             width: .6,
+             alpha: .5,
+             endAtSolidFace: !0
+           });
+           for (const BH of mB) {
+             const HH = cB[BH].inputSlots ? bt(hH) : Ut(BH, hH, IH, MH);
+             vB.push((0, ur.f)(BH, HH))
+           }
+           vB.push((0, Wr.v)((0, AH.createElement)(AH.Fragment, null, (0, AH.createElement)(XY, {
+             controller: YH
+           }), (0, AH.createElement)(Au, {
+ ... (313 more added lines; see GitHub link above)
```

#### 69. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1235-L1238` → after: `L17630-L17631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R17630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L17630-L17631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L17630-L17631) · [Before (L1235-L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L1235-L1238)

```diff
-               byteOffset: eV,
-               byteStride: xV,
-               type: JV,
-               normalized: UV
+               baf2WrenchPos: HH,
+               baf2WrenchBlock: LH
```

#### 70. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1240-L1271` → after: `L17633-L17656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R17633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L17633-L17656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L17633-L17656) · [Before (L1240-L1271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L1240-L1271)

```diff
-             VV.push({
-               kind: YV.getKind(),
-               data: YV.getData(),
-               offset: eV,
-               stride: xV,
-               components: YV.getSize(),
-               glType: JV,
-               isNormalized: UV
-             })
-           } const eV = this._indices.length ? this._indices : null,
-           {
-             minimum: xV,
-             maximum: JV
-           } = this.extend;
-         this.link(new nV.e(VV, eV, this.getTotalVertices(), new Float64Array(xV.WYV()), new Float64Array(JV.WYV())))
-       }
- ... (16 more removed lines; see GitHub link above)
+             WH.oq(HH[0], HH[1], HH[2], LH)
+           } else if ("baf2Toast" === HH) {
+             const HH = BH;
+             nH.heard(performance.now(), HH.baf2ToastMs), TH.show(HH)
+           } else if ("baf2Area" === HH) VH.arrive(BH, null !== tH.get());
+           else if ("baf2Quest" === HH) {
+             const HH = BH;
+             zH(!0 === HH.baf2QuestNuclear), PH.set(HH, function(HH, BH) {
+               var LH, AH, rH, SH, hH;
+               const tH = [];
+               for (const [, , EH, , , , , , XH, GH] of HH.baf2QuestSteps) null !== EH && tH.push(EH), tH.push(...null !== XH && void 0 !== XH ? XH : [], ...null !== GH && void 0 !== GH ? GH : []);
+               HH.baf2QuestReward && tH.push(HH.baf2QuestReward);
+               const zH = null === (LH = HH.baf2QuestSide) || void 0 === LH ? void 0 : LH[2][2];
+               zH && tH.push(zH), tH.push(...null !== (AH = null === (rH = HH.baf2QuestSide) || void 0 === rH ? void 0 : rH[2][8]) && void 0 !== AH ? AH : [], ...null !== (SH = null === (hH = HH.baf2QuestSide) || void 0 === hH ? void 0 : hH[2][9]) && void 0 !== SH ? SH : []);
+               for (const [EH] of null !== (CH = HH.baf2QuestAlso) && void 0 !== CH ? CH : []) {
+                 var CH;
+ ... (8 more added lines; see GitHub link above)
```

#### 71. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1273-L1295` → after: `L17658-L17718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R17658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L17658-L17718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L17658-L17718) · [Before (L1273-L1295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L1273-L1295)

```diff
-           yV ||= VV.isUpdatable();
-           const vV = VV.getIsInstanced() ? (xV instanceof Array ? 4 * xV.length : xV.byteLength) / wV : this.getTotalVertices(),
-             rV = (0, YV.q)(xV, pV, QV, nV, wV, vV, !0),
-             kV = {
-               updatable: VV.isUpdatable(),
-               stride: pV,
-               type: QV,
-               normalized: ZV,
-               takeBufferOwnership: !0,
-               instanced: VV.getIsInstanced()
-             };
-           eV.setVerticesBuffer(new JV.c(this.sk(), rV, UV, kV), vV)
-         }
-         return eV._updatable = yV, eV._boundingInfo = new UV.b(this.extend.minimum, this.extend.maximum), eV.relink(), eV
-       }
-       static mergeMeshes(VV, eV, xV, JV, YV, UV) {
- ... (7 more removed lines; see GitHub link above)
+             0 !== LH.length && AH ? HH.setRouteChevrons({
+               cells: LH.map(((HH, BH) => {
+                 const [rH, , SH] = function(HH, BH, LH) {
+                   const AH = LH + 1 < HH.length ? HH[LH + 1] : BH;
+                   return [AH[0] - HH[LH][0], 0, AH[2] - HH[LH][2]]
+                 }(LH, AH, BH);
+                 return {
+                   pos: HH,
+                   way: [rH, SH]
+                 }
+               })),
+               colour: "#ffd640",
+               alpha: .8
+             }) : HH.setRouteChevrons(null)
+           }(WH, BH);
+           else if ("baf2QuestBook" === HH) PH.setBook(BH);
+ ... (45 more added lines; see GitHub link above)
```

#### 72. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1297-L1311` → after: `L17720-L17721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R17720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L17720-L17721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L17720-L17721) · [Before (L1297-L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L1297-L1311)

```diff
-         return ZV.relink(), nV
-       }
-       removeVerticesData(VV) {
-         this.releaseUnlessInstanced(VV), super.removeVerticesData(VV)
-       }
-       dispose() {
-         this.release(), super.dispose()
-       }
-       releaseUnlessInstanced(VV) {
-         var eV;
-         VV && null !== (eV = this.getVertexBuffer(VV)) && void 0 !== eV && eV.getIsInstanced() || this.release()
-       }
-       release() {
-         this.model && ((0, nV.u)(this.model), this.model = null)
-       }
+       };
+       return OB
```

#### 73. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1314-L1332` → after: `L17733-L17735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R17733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L17733-L17735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L17733-L17735) · [Before (L1314-L1332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L1314-L1332)

```diff
-     function ZV(VV, eV, xV) {
-       let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new pV.e(VV, xV);
-       const YV = (0, nV.i)(eV),
-         {
-           positions: UV,
-           normals: ZV,
-           uvs: vV,
-           indices: rV,
-           named: kV = {}
-         } = eV,
-         bV = new QV.c;
-       bV.positions = UV, bV.normals = null !== ZV && void 0 !== ZV ? ZV : null, bV.uvs = null !== vV && void 0 !== vV ? vV : null, bV.indices = rV;
-       const EV = new wV(yV.c.RandomId(), xV, bV, !1, JV);
-       for (const {
-           kind: yV,
-           components: pV
- ... (3 more removed lines; see GitHub link above)
+     function hH(HH) {
+       const BH = (0, SH.e)(HH);
+       return (0, AH.Yb)(HH, void 0 === BH ? void 0 : (0, rH.displayNameOf)(BH))
```

#### 74. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1335-L1349` → after: `L17738-L17739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R17738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L17738-L17739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L17738-L17739) · [Before (L1335-L1349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L1335-L1349)

```diff
-     function vV(VV, eV, xV) {
-       let JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       const YV = new pV.e(VV, xV),
-         {
-           positions: UV,
-           normals: yV,
-           uvs: nV,
-           indices: wV
-         } = eV;
-       return Object.assign(new QV.c, {
-         positions: UV,
-         normals: yV,
-         uvs: nV,
-         indices: wV
-       }).applyToMesh(YV, JV), YV
+     function tH(HH, BH) {
+       return HH(hH(BH))
```

#### 75. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1352` → after: `L17742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R17742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L17742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L17742) · [Before (L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L1352)

```diff
-   42490: (VV, eV, xV) => {
+   39388: (HH, BH, LH) => {
```

#### 76. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1354-L1373` → after: `L17744-L17774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R17744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L17744-L17774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L17744-L17774) · [Before (L1354-L1373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L1354-L1373)

```diff
-       const JV = eV * eV * 4,
-         YV = VV[0].layers,
-         UV = YV * (VV.length - 1) + VV[VV.length - 1].layers,
-         yV = new Uint8Array(UV * JV);
-       VV.forEach(((eV, xV) => {
-         const UV = xV + 1 < VV.length ? Math.min(eV.layers, YV) : eV.layers;
-         yV.set(new Uint8Array(eV.pixels.buffer, eV.pixels.byteOffset, UV * JV), xV * YV * JV)
-       }));
-       const pV = Math.max(1, Math.min(UV, xV || UV));
-       if (pV === UV) return [{
-         pixels: yV,
-         layers: UV
-       }];
-       const QV = [];
-       for (let nV = 0; nV < UV; nV += pV) {
-         const VV = Math.min(UV, nV + pV);
- ... (4 more removed lines; see GitHub link above)
+       const AH = new Set,
+         rH = new ResizeObserver(LH),
+         SH = () => {
+           const BH = new Set(document.querySelectorAll(HH));
+           let SH = !1;
+           for (const HH of AH) BH.has(HH) || (rH.unobserve(HH), AH.delete(HH), SH = !0);
+           for (const HH of BH) AH.has(HH) || (rH.observe(HH), hH.observe(HH, {
+             attributes: !0,
+             attributeFilter: ["class", "style"]
+           }), AH.add(HH));
+           SH && LH()
+         },
+         hH = new MutationObserver((BH => {
+           BH.some((HH => "attributes" === HH.type)) && LH(), BH.some((BH => function(HH, BH, LH) {
+             if ("childList" !== HH.type) return !1;
+             for (const AH of HH.addedNodes)
+ ... (15 more added lines; see GitHub link above)
```

#### 77. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1378-L1379` → after: `L17778-L17783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R17778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L17778-L17783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L17778-L17783) · [Before (L1378-L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L1378-L1379)

```diff
-       e: () => JV,
-       g: () => UV
+       c: () => AH
+     })
+   },
+   39374: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => tH
```

#### 78. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1381-L1393` → after: `L17785-L17791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R17785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L17785-L17791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L17785-L17791) · [Before (L1381-L1393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L1381-L1393)

```diff
-     const YV = new WeakMap;
- 
-     function UV(VV, eV, xV) {
-       var JV, UV;
-       const yV = null !== (JV = YV.get(VV)) && void 0 !== JV ? JV : new Map;
-       YV.set(VV, yV);
-       const pV = null !== (UV = yV.get(eV[0])) && void 0 !== UV ? UV : [];
-       yV.set(eV[0], pV);
-       const QV = pV.find((VV => VV.urls.length === eV.length && VV.urls.every(((VV, xV) => VV === eV[xV]))));
-       if (QV) return QV.built;
-       const nV = {
-         urls: [...eV],
-         built: xV()
+     var AH = LH(39370);
+     const rH = 5,
+       SH = [0, 0, 0],
+       hH = {
+         x: 0,
+         y: 0,
+         distSq: 0
```

#### 79. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1395-L1397` → after: `L17793-L17800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R17793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L17793-L17800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L17793-L17800) · [Before (L1395-L1397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L1395-L1397)

```diff
-       return pV.push(nV), nV.built.catch((() => {
-         pV.splice(pV.indexOf(nV), 1)
-       })), nV.built
+ 
+     function tH(HH, BH, LH, tH, zH, CH) {
+       let [EH, XH, GH] = tH;
+       const YH = (EH + .5 - LH[0]) ** 2 + (XH - LH[1]) ** 2 + (GH + .5 - LH[2]) ** 2;
+       let uH = null;
+       YH <= CH ** 2 && (SH[0] = EH + .5, SH[1] = XH + zH, SH[2] = GH + .5, uH = BH.projectWorldPosToViewport(SH));
+       const QH = null !== uH && uH.x > -rH && uH.x < 100 + rH && uH.y > -rH && uH.y < 100 + rH;
+       return (0, AH.e)(HH, !QH), QH ? (hH.x = uH.x, hH.y = uH.y, hH.distSq = YH, hH) : null
```

#### 80. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1400-L1405` → after: `L17803-L17808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R17803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L17803-L17808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L17803-L17808) · [Before (L1400-L1405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L1400-L1405)

```diff
-   39943: (VV, eV, xV) => {
-     function JV(VV, eV) {
-       return "object" === typeof VV && null !== VV ? Object.assign(VV, {
-         startStep: eV
-       }) : VV
-     }
+   39370: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => hH,
+       e: () => SH
+     });
+     const AH = new WeakMap;
```

#### 81. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1408` → after: `L17811-L17816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R17811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L17811-L17816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L17811-L17816) · [Before (L1408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L1408)

```diff
-       return "object" === typeof VV && null !== VV && "startStep" in VV ? VV.startStep : null
+       let BH = AH.get(HH);
+       return BH || (BH = {
+         hidden: HH.hidden,
+         x: NaN,
+         y: NaN
+       }, AH.set(HH, BH)), BH
```

#### 82. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1430-L1432` → after: `L17819-L17821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R17819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L17819-L17821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L17819-L17821) · [Before (L1430-L1432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L1430-L1432)

```diff
-     function YV(VV) {
-       var eV = UV(VV);
-       return xV(eV)
+     function SH(HH, BH) {
+       const LH = rH(HH);
+       LH.hidden !== BH && (LH.hidden = BH, HH.hidden = BH)
```

#### 83. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L1435-L1440` → after: `L17824-L17826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R17824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L17824-L17826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/270.js#L17824-L17826) · [Before (L1435-L1440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/270.js#L1435-L1440)

```diff
-     function UV(VV) {
-       if (!xV.o(JV, VV)) {
-         var eV = new Error("Cannot find module '" + VV + "'");
-         throw eV.code = "MODULE_NOT_FOUND", eV
-       }
-       return JV[VV]
+     function hH(HH, BH, LH) {
+       const AH = rH(HH);
+       AH.x === BH && AH.y === LH || (AH.x = BH, AH.y = LH, HH.style.translate = `${BH}vw ${LH}vh`)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/271.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/271.js` (46 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c)

#### 1. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L4-L8` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L4-L6) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L4-L8)

```diff
-   42411: (VV, eV, xV) => {
-     xV.r(eV), xV.d(eV, {
-       openMobLineupPreview: () => hV,
-       openMobPreview: () => cV,
-       openPetPreview: () => lV
+   45083: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => SH
```

#### 2. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L10-L161` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L8-L9) · [Before (L10-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L10-L161)

```diff
-     var JV = xV(41071),
-       YV = xV(41331),
-       UV = xV(42419),
-       yV = xV(38387),
-       pV = xV(38263),
-       QV = xV(41510),
-       nV = xV(42439),
-       wV = xV(39624),
-       ZV = xV(38358),
-       vV = xV(38328),
-       rV = xV(38256),
-       kV = xV(39518),
-       bV = xV(39516),
-       EV = xV(39243),
-       BV = xV(39289),
-       jV = xV(39266),
- ... (136 more removed lines; see GitHub link above)
+     var AH = LH(41398),
+       rH = LH(45086);
```

#### 3. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L164-L172` → after: `L12-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L12-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L12-L13) · [Before (L164-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L164-L172)

```diff
-         this.place = eV, this.remove = null;
-         const {
-           engine: xV,
-           yE: JV,
-           canvas: YV
-         } = WV();
-         VV.appendChild(YV), xV.resize(), xV.runRenderLoop((() => {
-           JV.render()
-         }))
+         let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
+         this.maxDepth = LH, this.lrH = [], this._maxBlockCapacity = BH || 64, this._selectionContent = new AH.e(1024), this._creationFunc = HH
```

#### 4. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L174-L176` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L15-L16) · [Before (L174-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L174-L176)

```diff
-       show(VV) {
-         var eV;
-         null === (eV = this.remove) || void 0 === eV || eV.call(this), this.remove = this.place(VV)
+       update(HH, BH, LH) {
+         rH.d._CreateBlocks(HH, BH, LH, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
```

#### 5. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L178-L183` → after: `L18-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L18-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L18-L21) · [Before (L178-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L178-L183)

```diff
-       resize(VV, eV) {
-         const {
-           engine: xV,
-           canvas: JV
-         } = WV();
-         JV.width = VV, JV.height = eV, xV.resize()
+       QrH(HH) {
+         for (let BH = 0; BH < this.blocks.length; BH++) {
+           this.blocks[BH].addEntry(HH)
+         }
```

#### 6. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L185-L187` → after: `L23-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L23-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L23-L26) · [Before (L185-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L185-L187)

```diff
-       close() {
-         var VV;
-         WV().engine.stopRenderLoop(), null === (VV = this.remove) || void 0 === VV || VV.call(this), this.remove = null
+       gR(HH) {
+         for (let BH = 0; BH < this.blocks.length; BH++) {
+           this.blocks[BH].removeEntry(HH)
+         }
```

#### 7. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L189-L233` → after: `L28-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L28-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L28-L33) · [Before (L189-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L189-L233)

```diff
-     }
-     class oV {
-       constructor(VV) {
-         this.preview = void 0, this.view = {
-           figures: [],
-           shown: []
-         }, this.aspect = 1, this.placed = [], this.preview = new aV(VV, (() => () => {}))
-       }
-       show(VV) {
-         VV.figures !== this.view.figures && this.preload(VV.figures), this.view = VV, this.place()
-       }
-       resize(VV, eV) {
-         this.preview.resize(VV, eV), this.aspect = VV / eV, this.place()
-       }
-       close() {
-         this.preview.close();
- ... (29 more removed lines; see GitHub link above)
+       select(HH, BH) {
+         this._selectionContent.reset();
+         for (let LH = 0; LH < this.blocks.length; LH++) {
+           this.blocks[LH].select(HH, this._selectionContent, BH)
+         }
+         return BH ? this._selectionContent.concat(this.lrH) : this._selectionContent.concatWithNoDuplicate(this.lrH), this._selectionContent
```

#### 8. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L235-L288` → after: `L35-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L35-L38) · [Before (L235-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L235-L288)

```diff
-     }
- 
-     function cV(VV) {
-       return new aV(VV, DV)
-     }
- 
-     function hV(VV) {
-       return new oV(VV)
-     }
- 
-     function lV(VV) {
-       return new aV(VV, CV)
-     }
-   },
-   39984: (VV, eV, xV) => {
-     xV.d(eV, {
- ... (38 more removed lines; see GitHub link above)
+       intersects(HH, BH, LH) {
+         this._selectionContent.reset();
+         for (let AH = 0; AH < this.blocks.length; AH++) {
+           this.blocks[AH].intersects(HH, BH, this._selectionContent, LH)
```

#### 9. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L290-L321` → after: `L40-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L40-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L40-L45) · [Before (L290-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L290-L321)

```diff
-       },
-       vV = {
-         name: "Cape",
-         className: "CapeMaterialPlugin",
-         priority: 200,
-         defines: (VV, eV) => ({
-           ...(0, JV.d)("CAPE"),
-           BLOXD_CAPE_BONES: `${VV}`,
-           BLOXD_CAPE_MAX_Y: (0, YV.ob)(eV)
-         }),
-         getUniforms(VV) {
-           return (0, UV.d)(function(VV) {
-             const eV = [];
-             for (let xV = 0; xV < VV; xV++) eV.push({
-               name: `skele${xV}`,
-               type: "highp vec3"
- ... (16 more removed lines; see GitHub link above)
+         return LH ? this._selectionContent.concat(this.lrH) : this._selectionContent.concatWithNoDuplicate(this.lrH), this._selectionContent
+       }
+       intersectsRay(HH) {
+         this._selectionContent.reset();
+         for (let BH = 0; BH < this.blocks.length; BH++) {
+           this.blocks[BH].intersectsRay(HH, this._selectionContent)
```

#### 10. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L323-L324` → after: `L47-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L47-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L47-L55) · [Before (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L323-L324)

```diff
-       };
-     (0, yV.m)(vV)
+         return this._selectionContent.concatWithNoDuplicate(this.lrH), this._selectionContent
+       }
+     }
+     SH.CreationFuncForMeshes = (HH, BH) => {
+       const LH = HH.jF();
+       !HH.isBlocked && LH.boundingBox.intersectsMinMax(BH.OrH, BH.VrH) && BH.entries.push(HH)
+     }, SH.CreationFuncForSubMeshes = (HH, BH) => {
+       HH.jF().boundingBox.intersectsMinMax(BH.OrH, BH.VrH) && BH.entries.push(HH)
+     }
```

#### 11. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L326` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L57) · [Before (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L326)

```diff
-   39880: (VV, eV, xV) => {
+   45086: (HH, BH, LH) => {
```

#### 12. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L328-L329` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L59) · [Before (L328-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L328-L329)

```diff
-       e: () => wV,
-       g: () => ZV
+       d: () => SH
```

#### 13. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L331-L363` → after: `L61-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L61-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L61-L85) · [Before (L331-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L331-L363)

```diff
-     var JV = xV(38397),
-       YV = xV(38517),
-       UV = xV(38399),
-       yV = xV(38408);
-     const pV = "bloxdTextLodBias",
-       QV = [{
-         name: pV,
-         type: "float"
-       }],
-       nV = "bloxdTextSample",
-       wV = {
-         planes: -.5,
-         boards: -.5
-       },
-       ZV = {
-         name: "TextSampler",
- ... (17 more removed lines; see GitHub link above)
+     var AH = LH(37963),
+       rH = LH(41595);
+     class SH {
+       constructor(HH, BH, LH, AH, rH, SH) {
+         this.entries = [], this.KrH = new Array, this._capacity = LH, this._depth = AH, this._maxDepth = rH, this._creationFunc = SH, this._minPoint = HH, this._maxPoint = BH, this.KrH.push(HH.clone()), this.KrH.push(BH.clone()), this.KrH.push(HH.clone()), this.KrH[2].x = BH.x, t … [truncated]
+       }
+       get aX() {
+         return this._capacity
+       }
+       get OrH() {
+         return this._minPoint
+       }
+       get VrH() {
+         return this._maxPoint
+       }
+       addEntry(HH) {
+ ... (9 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L366-L388` → after: `L89-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L89-L90) · [Before (L366-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L366-L388)

```diff
-       };
-     (0, yV.m)(ZV)
-   },
-   42450: (VV, eV, xV) => {
-     xV.r(eV), xV.d(eV, {
-       CapeMaterialPlugin: () => tV,
-       HueTintMaterialPlugin: () => FV,
-       LifeformMaterialPlugin: () => TV,
-       OverlayMaterialPlugin: () => PV
-     });
-     var JV = xV(42457),
-       YV = xV(39173);
-     class UV extends((0, JV.h)(YV.b)) {}(0, JV.l)(YV.b, UV);
-     var yV = xV(38479);
-     class pV extends((0, JV.h)(yV.d)) {}(0, JV.l)(yV.d, pV);
-     var QV = xV(39003);
- ... (7 more removed lines; see GitHub link above)
+         const BH = this.entries.indexOf(HH);
+         BH > -1 && this.entries.splice(BH, 1)
```

#### 15. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L390-L391` → after: `L92-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L92-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L92-L96) · [Before (L390-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L390-L391)

```diff
-       dispose(VV) {
-         (0, wV.h)(this._material), super.dispose(VV)
+       addEntries(HH) {
+         for (let BH = 0; BH < HH.length; BH++) {
+           const LH = HH[BH];
+           this.addEntry(LH)
+         }
```

#### 16. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L393-L449` → after: `L98-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L98-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L98-L104) · [Before (L393-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L393-L449)

```diff
-     }(0, JV.l)(vV.g, rV), (0, vV.k)({
-       disableUnusedSpecularTerm: JV.e,
-       isLightingDisabled: VV => VV instanceof ZV.StandardMaterial && VV.disableLighting
-     });
-     var kV = xV(39880);
-     class bV extends((0, JV.h)(kV.g)) {}(0, JV.l)(kV.g, bV);
-     var EV = xV(39984),
-       BV = xV(38395),
-       jV = xV(39277),
-       qV = xV(38493);
-     class tV extends((0, JV.h)(EV.b)) {}(0, JV.l)(EV.b, tV);
-     class FV extends((0, JV.h)(BV.e)) {}(0, JV.l)(BV.e, FV);
-     class TV extends((0, JV.h)(jV.q)) {}(0, JV.l)(jV.q, TV);
-     class PV extends((0, JV.h)(qV.e)) {}(0, JV.l)(qV.e, PV)
-   },
-   42457: (VV, eV, xV) => {
- ... (41 more removed lines; see GitHub link above)
+       select(HH, BH, LH) {
+         if (rH.b.IsInFrustum(this.KrH, HH)) {
+           if (this.blocks) {
+             for (let AH = 0; AH < this.blocks.length; AH++) {
+               this.blocks[AH].select(HH, BH, LH)
+             }
+             return
```

#### 17. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L451-L461` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L106) · [Before (L451-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L451-L461)

```diff
-         },
-         xV = (0, kV.j)(VV);
-       for (const [JV, YV] of Object.entries(kV.c)) {
-         const UV = VV[JV];
-         if (UV) {
-           const VV = xV[JV];
-           Object.defineProperty(eV.prototype, YV, {
-             value: BV(UV, VV),
-             writable: !0,
-             configurable: !0
-           })
+           LH ? BH.concat(this.entries) : BH.concatWithNoDuplicate(this.entries)
```

#### 18. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L464-L490` → after: `L109-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L109-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L109-L115) · [Before (L464-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L464-L490)

```diff
-       return eV
-     }
-     class qV extends(jV(pV.b)) {}
-     var tV = xV(41071),
-       FV = xV(42487),
-       TV = xV(42490);
- 
-     function PV(VV, eV, xV) {
-       return (0, TV.g)(xV, eV.urls, (() => async function(VV, eV, xV) {
-         const {
-           width: JV
-         } = VV[0].getSize(), YV = VV.map(((VV, xV) => {
-           var YV;
-           const UV = Math.round(VV.getSize().height / JV),
-             yV = null === eV || void 0 === eV ? void 0 : eV[xV];
-           return {
- ... (11 more removed lines; see GitHub link above)
+       intersects(HH, BH, LH, AH) {
+         if (rH.b.IntersectsSphere(this._minPoint, this._maxPoint, HH, BH)) {
+           if (this.blocks) {
+             for (let rH = 0; rH < this.blocks.length; rH++) {
+               this.blocks[rH].intersects(HH, BH, LH, AH)
+             }
+             return
```

#### 19. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L492-L538` → after: `L117-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L117-L118) · [Before (L492-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L492-L538)

```diff
-         }));
-         return VV.forEach(((VV, eV) => {
-           const JV = VV.getInternalTexture();
-           AV.has(JV) || (! function(VV, eV) {
-             const xV = eV.createRawTexture(new Uint8Array(4), 1, 1, tV.c.TEXTUREFORMAT_RGBA, !1, !1, yV.b.NEAREST_SAMPLINGMODE);
-             VV._hardwareTexture.release(), eV.unbindAllTextures(), xV._swapAndDie(VV, !1)
-           }(JV, xV.sk()), AV.set(JV, YV[eV].pixels))
-         })), pV
-       }(VV, eV.pixels, xV)))
-     }
-     const AV = new WeakMap;
-     var NV = xV(38994);
-     class XV extends(jV(QV.h)) {
-       constructor(VV, eV) {
-         super(VV, eV), this.loaded = new Set, this.mirrors = void 0, this.mirrors = eV.textures.map((VV => VV.mirror)), this.mirrors.forEach(((VV, eV) => {
-           VV.onLoadObservable.add((VV => {
- ... (31 more removed lines; see GitHub link above)
+           AH ? LH.concat(this.entries) : LH.concatWithNoDuplicate(this.entries)
+         }
```

#### 20. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L540-L542` → after: `L120-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L120-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L120-L129) · [Before (L540-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L540-L542)

```diff
-       _rebuild() {}
-       restore() {
-         super._rebuild()
+       intersectsRay(HH, BH) {
+         if (HH.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
+           if (this.blocks) {
+             for (let LH = 0; LH < this.blocks.length; LH++) {
+               this.blocks[LH].intersectsRay(HH, BH)
+             }
+             return
+           }
+           BH.concatWithNoDuplicate(this.entries)
+         }
```

#### 21. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L544-L569` → after: `L131-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L131-L132) · [Before (L544-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L544-L569)

```diff
-     }
-     const oV = {
-       Mesh: WV.e,
-       TransformNode: DV.d,
-       nZ: MV.b,
-       VertexBuffer: MV.c,
-       BoundingInfo: zV.b,
-       Ik: GV.Ik,
-       ArenaBuffer: aV,
-       SubMesh: gV.c,
-       VertexData: RV.c,
-       MirroredGeometry: CV.b,
-       meshFromArrays: CV.c,
-       plainMeshFromArrays: CV.d
-     };
-     (0, iV.h)(oV);
- ... (10 more removed lines; see GitHub link above)
+       createInnerBlocks() {
+         SH._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
```

#### 22. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L571-L572` → after: `L134-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L134-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L134-L144) · [Before (L571-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L571-L572)

```diff
-       dispose(VV) {
-         (0, cV.h)(this._material), super.dispose(VV)
+       static _CreateBlocks(HH, BH, LH, rH, hH, tH, zH, CH) {
+         zH.blocks = new Array;
+         const EH = new AH.o((BH.x - HH.x) / 2, (BH.y - HH.y) / 2, (BH.z - HH.z) / 2);
+         for (let AH = 0; AH < 2; AH++)
+           for (let BH = 0; BH < 2; BH++)
+             for (let XH = 0; XH < 2; XH++) {
+               const GH = HH.add(EH.multiplyByFloats(AH, BH, XH)),
+                 YH = HH.add(EH.multiplyByFloats(AH + 1, BH + 1, XH + 1)),
+                 uH = new SH(GH, YH, rH, hH + 1, tH, CH);
+               uH.addEntries(LH), zH.blocks.push(uH)
+             }
```

#### 23. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L575-L585` → after: `L147-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L147-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L147-L150) · [Before (L575-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L575-L585)

```diff
- 
-     function lV(VV, eV) {
-       if (!(eV instanceof JV.StandardMaterial) || eV.specularTexture) return;
-       const {
-         r: xV,
-         g: YV,
-         b: UV
-       } = eV.specularColor;
-       0 === xV && 0 === YV && 0 === UV && (VV.SPECULARTERM = !1)
-     }(0, wV.g)({
-       disableUnusedSpecularTerm: lV
+   },
+   45095: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => EH
```

#### 24. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L587-L606` → after: `L152-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L152-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L152-L171) · [Before (L587-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L587-L606)

```diff
-     var LV = xV(38445),
-       fV = xV(38673);
-     const mV = new RegExp(`^#define ${nV.e}\\s*$`, "m");
-     class KV extends(jV(nV.l)) {
-       constructor(VV, eV) {
-         super(VV, eV), this.ik = !1, eV.ditherOnlyWhileFading && (fV.e.add(VV), this.prewarmDitherTwins(VV))
-       }
-       prewarmDitherTwins(VV) {
-         const eV = new WeakSet;
-         VV.onEffectCreatedObservable.add((xV => {
-           let {
-             effect: JV,
-             subMesh: YV
-           } = xV;
-           if (this.featureState.prewarmingDither || eV.has(JV)) return;
-           eV.add(JV);
- ... (4 more removed lines; see GitHub link above)
+     var AH = LH(41383),
+       rH = LH(37963),
+       SH = LH(41730),
+       hH = LH(45036),
+       tH = LH(41456),
+       zH = LH(37989),
+       CH = LH(45083);
+     class EH {
+       constructor(HH) {
+         this.name = tH.b.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new hH.E(rH.o.Zero(), new rH.o(1, 1, 1)), (HH = HH || zH.d.LastCreatedScene) && (this.NQ = HH, this.NQ.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.NQ.getActiveSubMeshCandidat … [truncated]
+       }
+       register() {
+         this.NQ.onMeshRemovedObservable.add((HH => {
+           const BH = this.NQ.selectionOctree;
+           if (void 0 !== BH && null !== BH) {
+             const LH = BH.lrH.indexOf(HH); - 1 !== LH && BH.lrH.splice(LH, 1)
+ ... (4 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L609-L616` → after: `L174-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L174-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L174-L179) · [Before (L609-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L609-L616)

```diff
-       prewarmDither(VV) {
-         if (this.ik || VV.iN()) return !1;
-         const eV = new gV.c(0, 0, 0, 0, 0, VV, void 0, !1, !1);
-         this.featureState.prewarmingDither = !0;
-         try {
-           this._material.isReadyForSubMesh(VV, eV)
-         } finally {
-           this.featureState.prewarmingDither = !1
+       getActiveMeshCandidates() {
+         return this.NQ.RrH?.select(this.NQ.frustumPlanes) || this.NQ._getDefaultMeshCandidates()
+       }
+       getActiveSubMeshCandidates(HH) {
+         if (HH._submeshesOctree && HH.useOctreeForRenderingSelection) {
+           return HH._submeshesOctree.select(this.NQ.frustumPlanes)
```

#### 26. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L618` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L181) · [Before (L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L618)

```diff
-         return null !== eV.effect
+         return this.NQ._getDefaultSubMeshCandidates(HH)
```

#### 27. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L620-L621` → after: `L183-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L183-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L183-L188) · [Before (L620-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L620-L621)

```diff
-       dispose(VV) {
-         this.ik = !0, super.dispose(VV)
+       getIntersectingSubMeshCandidates(HH, BH) {
+         if (HH._submeshesOctree && HH.useOctreeForPicking) {
+           hH.E.TransformToRef(BH, HH.getWorldMatrix(), this._tempRay);
+           return HH._submeshesOctree.intersectsRay(this._tempRay)
+         }
+         return this.NQ._getDefaultSubMeshCandidates(HH)
```

#### 28. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L624-L635` → after: `L200-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L200-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L200-L210) · [Before (L624-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L624-L635)

```diff
-     const HV = new Map;
- 
-     function uV(VV, eV) {
-       HV.set(VV, eV)
-     }
-     uV(pV.b, qV), uV(QV.h, XV), uV(nV.l, KV), uV(wV.j, hV), (0, ZV.e)({
-       create: (VV, eV) => {
-         const xV = new JV.StandardMaterial(VV.name, eV);
-         return (0, LV.m)(VV, xV), xV.detailMap._pluginDefineNames
-       },
-       write: (VV, eV, xV) => {
-         (0, LV.I)(VV.mirror, eV, xV)
+     let XH = !1;
+     XH || (XH = !0, AH.d.prototype.createOrUpdateSelectionOctree = function() {
+       let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
+         BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
+         LH = this._getComponent(tH.b.NAME_OCTREE);
+       LH || (LH = new EH(this), this.SrH(LH)), this.RrH || (this.RrH = new CH.d(CH.d.CreationFuncForMeshes, HH, BH));
+       const AH = this.getWorldExtends();
+       return this.RrH.update(AH.min, AH.max, this.meshes), this.RrH
+     }, Object.defineProperty(AH.d.prototype, "selectionOctree", {
+       get: function() {
+         return this.RrH
```

#### 29. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L637-L710` → after: `L212-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L212-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L212-L221) · [Before (L637-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L637-L710)

```diff
-       addFeature: (VV, eV, xV) => {
-         const JV = HV.get(eV.feature);
-         if (!JV) throw new Error(`${eV.feature.name} has no plugin class (registerPluginClass)`);
-         new JV(VV.mirror, eV.state, ...xV)
-       },
-       texture: (VV, eV, xV) => {
-         let {
-           url: JV,
-           noMipmap: YV,
-           invertY: UV,
-           samplingMode: pV,
-           data: QV,
-           sets: nV
-         } = xV;
-         if (!QV) {
-           const xV = new yV.b(JV, eV, YV, UV, pV);
- ... (58 more removed lines; see GitHub link above)
+       enumerable: !0,
+       configurable: !0
+     }), SH.c.prototype.createOrUpdateSubmeshesOctree = function() {
+       let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
+         BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
+       const LH = this.yN();
+       let AH = LH._getComponent(tH.b.NAME_OCTREE);
+       AH || (AH = new EH(LH), LH.SrH(AH)), this._submeshesOctree || (this._submeshesOctree = new CH.d(CH.d.CreationFuncForSubMeshes, HH, BH)), this.computeWorldMatrix(!0);
+       const rH = this.jF().boundingBox;
+       return this._submeshesOctree.update(rH.minimumWorld, rH.maximumWorld, this.jU), this._submeshesOctree
```

#### 30. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L713` → after: `L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L224) · [Before (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L713)

```diff
-   42506: (VV, eV, xV) => {
+   45036: (HH, BH, LH) => {
```

#### 31. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L715` → after: `L226-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L226-L227) · [Before (L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L715)

```diff
-       b: () => wV,
+       A: () => OH,
+       E: () => XH,
```

#### 32. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L717` → after: `L229-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L229-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L229-L235) · [Before (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L717)

```diff
-       d: () => vV
+       g: () => QH,
+       i: () => uH,
+       k: () => YH,
+       n: () => mH,
+       r: () => kH,
+       t: () => VH,
+       x: () => bH
```

#### 33. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L719-L730` → after: `L237-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L237-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L237-L251) · [Before (L719-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L719-L730)

```diff
-     var JV = xV(42496),
-       YV = xV(41318),
-       UV = xV(41566),
-       yV = xV(41677),
-       pV = xV(42498),
-       QV = xV(41674),
-       nV = xV(38547);
-     class wV extends yV.c {
-       constructor() {
-         super(...arguments), this.model = null, this.onGeometryUpdated = (VV, eV) => {
-           this.releaseUnlessInstanced(eV)
-         }, this.onLinked = null
+     var AH = LH(37972),
+       rH = LH(37963),
+       SH = LH(37974),
+       hH = LH(41585),
+       tH = LH(41420),
+       zH = LH(37989),
+       CH = LH(41470);
+     const EH = {
+       internalPickerForMesh: void 0
+     };
+     class XH {
+       constructor(HH, BH) {
+         let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
+           rH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : AH.d;
+         this.origin = HH, this.direction = BH, this.length = LH, this.epsilon = rH
```

#### 34. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L732-L734` → after: `L253-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L253-L254) · [Before (L732-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L732-L734)

```diff
-       link(VV) {
-         var eV;
-         (0, nV.m)(VV), this.model = VV, null === (eV = this.onLinked) || void 0 === eV || eV.call(this, VV)
+       clone() {
+         return new XH(this.origin.clone(), this.direction.clone(), this.length)
```

#### 35. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L736-L791` → after: `L256-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L256-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L256-L315) · [Before (L736-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L736-L791)

```diff
-       relink() {
-         this.release();
-         const VV = [];
-         for (const YV of Object.values(this._vertexBuffers))
-           if (!YV.getIsInstanced()) {
-             const {
-               byteOffset: eV,
-               byteStride: xV,
-               type: JV,
-               normalized: UV
-             } = YV;
-             VV.push({
-               kind: YV.getKind(),
-               data: YV.getData(),
-               offset: eV,
-               stride: xV,
- ... (40 more removed lines; see GitHub link above)
+       intersectsBoxMinMax(HH, BH) {
+         let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         const AH = XH._TmpVector3[0].SBH(HH.x - LH, HH.y - LH, HH.z - LH),
+           rH = XH._TmpVector3[1].SBH(BH.x + LH, BH.y + LH, BH.z + LH);
+         let SH, hH, tH, zH, CH = 0,
+           EH = Number.MAX_VALUE;
+         if (Math.abs(this.direction.x) < 1e-7) {
+           if (this.origin.x < AH.x || this.origin.x > rH.x) return !1
+         } else if (SH = 1 / this.direction.x, hH = (AH.x - this.origin.x) * SH, tH = (rH.x - this.origin.x) * SH, tH === -1 / 0 && (tH = 1 / 0), hH > tH && (zH = hH, hH = tH, tH = zH), CH = Math.max(hH, CH), EH = Math.min(tH, EH), CH > EH) return !1;
+         if (Math.abs(this.direction.y) < 1e-7) {
+           if (this.origin.y < AH.y || this.origin.y > rH.y) return !1
+         } else if (SH = 1 / this.direction.y, hH = (AH.y - this.origin.y) * SH, tH = (rH.y - this.origin.y) * SH, tH === -1 / 0 && (tH = 1 / 0), hH > tH && (zH = hH, hH = tH, tH = zH), CH = Math.max(hH, CH), EH = Math.min(tH, EH), CH > EH) return !1;
+         if (Math.abs(this.direction.z) < 1e-7) {
+           if (this.origin.z < AH.z || this.origin.z > rH.z) return !1
+         } else if (SH = 1 / this.direction.z, hH = (AH.z - this.origin.z) * SH, tH = (rH.z - this.origin.z) * SH, tH === -1 / 0 && (tH = 1 / 0), hH > tH && (zH = hH, hH = tH, tH = zH), CH = Math.max(hH, CH), EH = Math.min(tH, EH), CH > EH) return !1;
+         return !0
+ ... (44 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L795-L802` → after: `L318-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L318-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L318-L334) · [Before (L795-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L795-L802)

```diff
-       static mergeMeshes(VV, eV, xV, JV, YV, UV) {
-         const QV = VV[0].dD(),
-           nV = new pV.e(VV[0].name + "_merged", QV),
-           ZV = new wV(yV.c.RandomId(), QV, void 0, !1, nV);
-         try {
-           if (!pV.e.MergeMeshes(VV, eV, xV, nV, YV, UV)) return nV.dispose(), null
-         } catch (vV) {
-           throw nV.dispose(), vV
+       intersectsAxis(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         switch (HH) {
+           case "y": {
+             const HH = (this.origin.y - BH) / this.direction.y;
+             return HH > 0 ? null : new rH.o(this.origin.x + this.direction.x * -HH, BH, this.origin.z + this.direction.z * -HH)
+           }
+           case "x": {
+             const HH = (this.origin.x - BH) / this.direction.x;
+             return HH > 0 ? null : new rH.o(BH, this.origin.y + this.direction.y * -HH, this.origin.z + this.direction.z * -HH)
+           }
+           case "z": {
+             const HH = (this.origin.z - BH) / this.direction.z;
+             return HH > 0 ? null : new rH.o(this.origin.x + this.direction.x * -HH, this.origin.y + this.direction.y * -HH, BH)
+           }
+           default:
+ ... (1 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L806-L807` → after: `L337-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L337-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L337-L342) · [Before (L806-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L806-L807)

```diff
-       removeVerticesData(VV) {
-         this.releaseUnlessInstanced(VV), super.removeVerticesData(VV)
+       rSH(HH, BH, LH) {
+         let AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+           SH = arguments.length > 4 ? arguments[4] : void 0,
+           hH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+         const tH = rH.l.Matrix[0];
+         return HH.getWorldMatrix().invertToRef(tH), this._tmpRay ? XH.TransformToRef(this, tH, this._tmpRay) : this._tmpRay = XH.Transform(this, tH), HH.intersects(this._tmpRay, BH, LH, AH, SH, hH)
```

#### 38. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L809-L810` → after: `L344-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L344-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L344-L350) · [Before (L809-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L809-L810)

```diff
-       dispose() {
-         this.release(), super.dispose()
+       intersectsMeshes(HH, BH, LH) {
+         LH ? LH.length = 0 : LH = [];
+         for (let AH = 0; AH < HH.length; AH++) {
+           const rH = this.rSH(HH[AH], BH);
+           rH.hit && LH.push(rH)
+         }
+         return LH.sort(this._comparePickingInfo), LH
```

#### 39. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L812-L814` → after: `L352-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L352-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L352-L409) · [Before (L812-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L812-L814)

```diff
-       releaseUnlessInstanced(VV) {
-         var eV;
-         VV && null !== (eV = this.getVertexBuffer(VV)) && void 0 !== eV && eV.getIsInstanced() || this.release()
+       _comparePickingInfo(HH, BH) {
+         return HH.distance < BH.distance ? -1 : HH.distance > BH.distance ? 1 : 0
+       }
+       intersectionSegment(HH, BH, LH) {
+         const AH = this.origin,
+           SH = rH.l.lu[0],
+           hH = rH.l.lu[1],
+           tH = rH.l.lu[2],
+           zH = rH.l.lu[3];
+         BH.subtractToRef(HH, SH), this.direction.scaleToRef(XH._Rayl, tH), AH.addToRef(tH, hH), HH.subtractToRef(AH, zH);
+         const CH = rH.o.Dot(SH, SH),
+           EH = rH.o.Dot(SH, tH),
+           GH = rH.o.Dot(tH, tH),
+           YH = rH.o.Dot(SH, zH),
+           uH = rH.o.Dot(tH, zH),
+           QH = CH * GH - EH * EH;
+ ... (42 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L816-L817` → after: `L411-L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L411-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L411-L430) · [Before (L816-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L816-L817)

```diff
-       release() {
-         this.model && ((0, nV.u)(this.model), this.model = null)
+       static TransformToRef(HH, BH, LH) {
+         rH.o.TransformCoordinatesToRef(HH.origin, BH, LH.origin), rH.o.TransformNormalToRef(HH.direction, BH, LH.direction), LH.length = HH.length, LH.epsilon = HH.epsilon;
+         const AH = LH.direction,
+           SH = AH.length();
+         if (0 !== SH && 1 !== SH) {
+           const HH = 1 / SH;
+           AH.x *= HH, AH.y *= HH, AH.z *= HH, LH.length *= SH
+         }
+         return LH
+       }
+       unprojectRayToRef(HH, BH, LH, AH, SH, hH, tH) {
+         const CH = rH.l.Matrix[0];
+         SH.multiplyToRef(hH, CH), CH.multiplyToRef(tH, CH), CH.invert();
+         const EH = zH.d.LastCreatedEngine,
+           XH = rH.l.lu[0];
+         XH.x = HH / LH * 2 - 1, XH.y = -(BH / AH * 2 - 1), XH.z = EH?.WrH ? 1 : EH?.isNDCHalfZRange ? 0 : -1;
+ ... (4 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L821-L823` → after: `L434-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L434-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L434-L446) · [Before (L821-L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L821-L823)

```diff
-     function ZV(VV, eV, xV) {
-       let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new pV.e(VV, xV);
-       const YV = (0, nV.i)(eV),
+     function GH(HH, BH, LH, AH, rH) {
+       let SH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       const hH = XH.Zero();
+       return YH(HH, BH, LH, AH, hH, rH, SH), hH
+     }
+ 
+     function YH(HH, BH, LH, AH, SH, hH) {
+       let tH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         zH = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
+       const CH = HH.Iu();
+       if (!hH && !(hH = HH.activeCamera) && !(hH = HH.cameraToUseForPointers)) return HH;
+       const EH = hH.viewport,
+         XH = CH.getRenderHeight(),
```

#### 42. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L825-L844` → after: `L448-L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L448-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L448-L467) · [Before (L825-L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L825-L844)

```diff
-           positions: UV,
-           normals: ZV,
-           uvs: vV,
-           indices: rV,
-           named: kV = {}
-         } = eV,
-         bV = new QV.c;
-       bV.positions = UV, bV.normals = null !== ZV && void 0 !== ZV ? ZV : null, bV.uvs = null !== vV && void 0 !== vV ? vV : null, bV.indices = rV;
-       const EV = new wV(yV.c.RandomId(), xV, bV, !1, JV);
-       for (const {
-           kind: yV,
-           components: pV
-         }
-         of YV.vertexAttributes) yV in kV && JV.setVerticesData(yV, kV[yV], !1, pV);
-       return EV.link(YV), JV
-     }
- ... (4 more removed lines; see GitHub link above)
+           x: GH,
+           y: YH,
+           width: uH,
+           height: QH
+         } = EH.toGlobal(CH.getRenderWidth(), XH),
+         WH = 1 / CH.getHardwareScalingLevel();
+       return BH = BH * WH - GH, LH = LH * WH - (XH - YH - QH), SH.update(BH, LH, uH, QH, AH || rH.e.IdentityReadOnly, tH ? rH.e.IdentityReadOnly : hH.getViewMatrix(), hH.getProjectionMatrix(), zH), HH
+     }
+ 
+     function uH(HH, BH, LH, AH) {
+       const rH = XH.Zero();
+       return QH(HH, BH, LH, rH, AH), rH
+     }
+ 
+     function QH(HH, BH, LH, AH, SH) {
+       if (!tH.b) return HH;
+ ... (4 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L846-L856` → after: `L469-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L469-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L469-L476) · [Before (L846-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L846-L856)

```diff
-           positions: UV,
-           normals: yV,
-           uvs: nV,
-           indices: wV
-         } = eV;
-       return Object.assign(new QV.c, {
-         positions: UV,
-         normals: yV,
-         uvs: nV,
-         indices: wV
-       }).applyToMesh(YV, JV), YV
+           x: EH,
+           y: XH,
+           width: GH,
+           height: YH
+         } = zH.toGlobal(hH.getRenderWidth(), CH),
+         uH = rH.e.Identity(),
+         QH = 1 / hH.getHardwareScalingLevel();
+       return BH = BH * QH - EH, LH = LH * QH - (CH - XH - YH), AH.update(BH, LH, GH, YH, uH, uH, SH.getProjectionMatrix()), HH
```

#### 44. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L858-L880` → after: `L478-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L478-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L478-L590) · [Before (L858-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L858-L880)

```diff
-   },
-   42490: (VV, eV, xV) => {
-     function JV(VV, eV, xV) {
-       const JV = eV * eV * 4,
-         YV = VV[0].layers,
-         UV = YV * (VV.length - 1) + VV[VV.length - 1].layers,
-         yV = new Uint8Array(UV * JV);
-       VV.forEach(((eV, xV) => {
-         const UV = xV + 1 < VV.length ? Math.min(eV.layers, YV) : eV.layers;
-         yV.set(new Uint8Array(eV.pixels.buffer, eV.pixels.byteOffset, UV * JV), xV * YV * JV)
-       }));
-       const pV = Math.max(1, Math.min(UV, xV || UV));
-       if (pV === UV) return [{
-         pixels: yV,
-         layers: UV
-       }];
- ... (7 more removed lines; see GitHub link above)
+ 
+     function WH(HH, BH, LH, AH, rH, SH, hH, tH) {
+       return MH(HH, LH, AH, BH(AH, LH.enableDistantPicking), rH, SH, hH, tH)
+     }
+ 
+     function MH(HH, BH, LH, AH, rH, SH, hH, tH) {
+       const zH = BH.intersects(AH, rH, hH, SH, LH, tH);
+       return zH && zH.hit ? !rH && null != HH && zH.distance >= HH.distance ? null : zH : null
+     }
+ 
+     function xH(HH, BH) {
+       return "InstancedLinesMesh" === HH || "LinesMesh" === HH ? BH.intersectionThreshold : 0
+     }
+ 
+     function vH(HH) {
+       const BH = HH.getClassName();
+ ... (97 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L885-L886` → after: `L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L646) · [Before (L885-L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L885-L886)

```diff
-       e: () => JV,
-       g: () => UV
+       e: () => SH.E
```

#### 46. `bundles/bloxd.io/chunks/js/271.js` (Changed code · before: `L888-L905` → after: `L648-L4594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020cR648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1a5b76c6cc63359b4795ea24010aa48b2a7e2b5952490553b256f3c4d5f8020c) · [After (L648-L4594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/271.js#L648-L4594) · [Before (L888-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/271.js#L888-L905)

```diff
-     const YV = new WeakMap;
- 
-     function UV(VV, eV, xV) {
-       var JV, UV;
-       const yV = null !== (JV = YV.get(VV)) && void 0 !== JV ? JV : new Map;
-       YV.set(VV, yV);
-       const pV = null !== (UV = yV.get(eV[0])) && void 0 !== UV ? UV : [];
-       yV.set(eV[0], pV);
-       const QV = pV.find((VV => VV.urls.length === eV.length && VV.urls.every(((VV, xV) => VV === eV[xV]))));
-       if (QV) return QV.built;
-       const nV = {
-         urls: [...eV],
-         built: xV()
-       };
-       return pV.push(nV), nV.built.catch((() => {
-         pV.splice(pV.indexOf(nV), 1)
- ... (2 more removed lines; see GitHub link above)
+     var AH = LH(41383),
+       rH = LH(41489),
+       SH = LH(45036);
+     let hH = !1;
+     hH || (hH = !0, (0, SH.c)(AH.d, rH.d), AH.d.prototype.createPickingRayToRef = function(HH, BH, LH, AH, rH) {
+       let hH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         tH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
+       return (0, SH.k)(this, HH, BH, LH, AH, rH, hH, tH)
+     }, AH.d.prototype.createPickingRayInCameraSpace = function(HH, BH, LH) {
+       return (0, SH.i)(this, HH, BH, LH)
+     }, AH.d.prototype.createPickingRayInCameraSpaceToRef = function(HH, BH, LH, AH) {
+       return (0, SH.g)(this, HH, BH, LH, AH)
+     }, AH.d.prototype.pickWithBoundingInfo = function(HH, BH, LH, AH, rH) {
+       return (0, SH.t)(this, HH, BH, LH, AH, rH)
+     }, AH.d.prototype.XY = function(HH, BH, LH, AH, rH, hH) {
+       let tH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
+ ... (3931 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/272.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/272.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf)

#### 1. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/272.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/272.js#L4)

```diff
-   42344: (VV, eV, xV) => {
+   42396: (HH, BH, LH) => {
```

#### 2. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L7` → after: `L7-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/272.js#L7-L8) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/272.js#L7)

```diff
-       f: () => yV
+       c: () => EH,
+       e: () => CH
```

#### 3. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L9-L17` → after: `L10-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L10-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/272.js#L10-L293) · [Before (L9-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/272.js#L9-L17)

```diff
-     var JV = xV(2066);
-     let YV = !1;
- 
-     function UV() {
-       YV = !0
-     }
- 
-     function yV() {
-       YV && (YV = !1, (0, JV.d)())
+     var AH, rH = LH(38002),
+       SH = LH(37963);
+     ! function(HH) {
+       HH[HH.CW = 0] = "CW", HH[HH.CCW = 1] = "CCW"
+     }(AH || (AH = {}));
+     class hH {
+       static Interpolate(HH, BH, LH, AH, rH) {
+         if (0 === HH) return 0;
+         const SH = 1 - 3 * AH + 3 * BH,
+           hH = 3 * AH - 6 * BH,
+           tH = 3 * BH;
+         let zH = HH;
+         for (let CH = 0; CH < 5; CH++) {
+           const BH = zH * zH;
+           zH -= (SH * (BH * zH) + hH * BH + tH * zH - HH) * (1 / (3 * SH * BH + 2 * hH * zH + tH)), zH = Math.min(1, Math.max(0, zH))
+         }
+ ... (268 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L20-L154` → after: `L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/272.js#L296) · [Before (L20-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/272.js#L20-L154)

```diff
-   42341: (VV, eV, xV) => {
-     xV.d(eV, {
-       c: () => yV,
-       f: () => UV,
-       g: () => pV
-     });
-     var JV = xV(41852),
-       YV = xV(41861);
- 
-     function UV(VV) {
-       if (VV.queries.drawCensus() < JV.xb.BYTES) return null;
-       const eV = VV.memoryData(VV.scratch(), JV.xb.BYTES, 4, "the draw census");
-       return null === eV ? null : {
-         terrainOpaque: JV.xb.terrainOpaque(eV, 0),
-         terrainTransparent: JV.xb.terrainTransparent(eV, 0),
-         terrainPack: JV.xb.terrainPack(eV, 0),
- ... (119 more removed lines; see GitHub link above)
+   39588: (HH, BH, LH) => {
```

#### 5. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L158-L192` → after: `L300-L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L300-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/272.js#L300-L337) · [Before (L158-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/272.js#L158-L192)

```diff
-     var JV = xV(5301),
-       YV = xV(5297),
-       UV = xV(41893),
-       yV = xV(41909);
-     const pV = new Set(JV.W),
-       QV = JV.W.map((VV => (new TextEncoder).encode(VV))),
-       nV = new Map;
- 
-     function wV(VV, eV) {
-       var xV;
-       return null === (xV = nV.get(VV)) || void 0 === xV ? void 0 : xV[eV]
-     }(0, yV.l)(JV.mc.NewOtherEntitySettings, (VV => {
-       VV.payloadKind === YV.sc.Msgpack && QV.some((eV => function(VV, eV) {
-         const xV = eV[0];
-         for (let JV = VV.indexOf(xV); - 1 !== JV && JV + eV.length <= VV.length; JV = VV.indexOf(xV, JV + 1)) {
-           let xV = 1;
- ... (19 more removed lines; see GitHub link above)
+     var AH = LH(39595);
+     const rH = (HH, BH, LH) => HH ? HH.getClassName && "Mesh" === HH.getClassName() ? null : !HH.getClassName || "SubMesh" !== HH.getClassName() && "PhysicsBody" !== HH.getClassName() ? HH.clone ? HH.clone() : Array.isArray(HH) ? HH.slice() : LH && "object" === typeof HH ? {
+       ...HH
+     } : null : HH.clone(BH) : null;
+     class SH {
+       static DeepCopy(HH, BH, LH, SH) {
+         let hH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const tH = function(HH) {
+           const BH = [];
+           do {
+             const LH = Object.getOwnPropertyNames(HH);
+             for (const HH of LH) - 1 === BH.indexOf(HH) && BH.push(HH)
+           } while (HH = Object.getPrototypeOf(HH));
+           return BH
+         }(HH);
+         for (const CH of tH) {
+ ... (22 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L194` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/272.js#L339) · [Before (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/272.js#L194)

```diff
-   42314: (VV, eV, xV) => {
+   39595: (HH, BH, LH) => {
```

#### 7. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L196-L198` → after: `L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/272.js#L341) · [Before (L196-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/272.js#L196-L198)

```diff
-       d: () => rV,
-       e: () => nV,
-       f: () => ZV
+       e: () => AH
```

#### 8. `bundles/bloxd.io/chunks/js/272.js` (Changed code · before: `L200-L504` → after: `L343-L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cfR343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fb0bc6bb354a41e2ce2e31b44d113e183770a071cc159addd416a170227e74cf) · [After (L343-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/272.js#L343-L408) · [Before (L200-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/272.js#L200-L504)

```diff
-     var JV = xV(40197),
-       YV = xV(2059),
-       UV = xV(1339),
-       yV = xV(41880),
-       pV = xV(41885),
-       QV = xV(41909);
-     const nV = new JV.d;
-     let wV = {};
- 
-     function ZV(VV) {
-       return wV[VV]
-     }
-     const vV = new UV.c;
- 
-     function rV(VV) {
-       return vV.add(VV)
- ... (289 more removed lines; see GitHub link above)
+     class AH {
+       static _CheckLimit(HH, BH) {
+         let LH = AH._LogLimitOutputs[HH];
+         return LH ? LH.current++ : (LH = {
+           limit: BH,
+           current: 1
+         }, AH._LogLimitOutputs[HH] = LH), LH.current <= LH.limit
+       }
+       static _GenerateLimitMessage(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const LH = AH._LogLimitOutputs[HH];
+         if (!LH || !AH.MessageLimitReached) return;
+         const rH = this._Levels[BH];
+         LH.current === LH.limit && AH[rH.name](AH.MessageLimitReached.replace(/%LIMIT%/g, "" + LH.limit).replace(/%TYPE%/g, rH.name ?? ""))
+       }
+       static _AddLogEntry(HH) {
+ ... (50 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/273.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/273.js` (72 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325)

#### 1. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L4)

```diff
-   40659: (VV, eV, xV) => {
+   42416: (HH, BH, LH) => {
```

#### 2. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L7-L8` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L8-L10) · [Before (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L7-L8)

```diff
-       i: () => YV,
-       l: () => UV
+       h: () => XH,
+       k: () => EH,
+       m: () => GH
```

#### 3. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L10-L13` → after: `L12-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L12-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L12-L22) · [Before (L10-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L10-L13)

```diff
-     var JV = xV(62);
- 
-     function YV(VV) {
-       return pV(VV, QV)
+     var AH = LH(1168),
+       rH = LH(2339),
+       SH = LH(38041),
+       hH = LH(38378);
+     class tH {
+       constructor(HH, BH) {
+         this.pose = HH, this.nodes = void 0, this.nodes = HH.boneNames.map((HH => BH.get(HH)))
+       }
+       write(HH) {
+         this.pose.pose(HH), (0, hH.l)(this.pose, this.nodes)
+       }
```

#### 4. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L17` → after: `L26-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L26-L27) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L17)

```diff
-       return pV(VV, nV)
+       HH.unfreezeWorldMatrix();
+       for (const BH of HH.getChildren()) zH(BH)
```

#### 5. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L19-L21` → after: `L29-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L29-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L29-L44) · [Before (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L19-L21)

```diff
- 
-     function yV(VV) {
-       return `${Math.floor(VV/60)}:${String(VV%60).padStart(2,"0")}`
+     async function CH(HH, BH, LH, AH) {
+       let {
+         keepTransforms: rH,
+         backFaceCulling: hH
+       } = AH;
+       const tH = await (0, SH.i)(BH, HH),
+         CH = (0, SH.f)(null !== LH && void 0 !== LH ? LH : BH, HH, void 0, hH);
+       (0, SH.l)(tH, CH, {
+         keepTransforms: rH,
+         backFaceCulling: hH,
+         onProcessedMesh: BH => {
+           HH.QrH(BH, !1), BH.isVisible = !1
+         }
+       });
+       for (const SH of tH.rootNodes) zH(SH);
+       return tH
```

#### 6. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L25-L38` → after: `L48-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L48-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L48-L49) · [Before (L25-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L25-L38)

```diff
-       const [, xV] = (0, JV.useState)(null);
-       return (0, JV.useEffect)((() => {
-         if (0 === VV) return;
-         const JV = window.setInterval((() => {
-           const JV = eV(VV);
-           xV((eV => (null === eV || void 0 === eV ? void 0 : eV.endsAt) === VV && eV.value === JV ? eV : {
-             endsAt: VV,
-             value: JV
-           }))
-         }), 250);
-         return () => {
-           window.clearInterval(JV)
-         }
-       }), [VV, eV]), eV(VV)
+       HH.isVisible = BH;
+       for (const LH of HH.getChildMeshes()) LH.isVisible = BH
```

#### 7. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L42` → after: `L53-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L53-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L53-L55) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L42)

```diff
-       return (VV - performance.now()) / 1e3
+       const BH = new Map;
+       for (const LH of HH.getNodes()) BH.set(LH.name, LH);
+       return BH
```

#### 8. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L45-L58` → after: `L58-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L58-L59) · [Before (L45-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L45-L58)

```diff
-     function nV(VV) {
-       return Math.max(0, Math.ceil(QV(VV)))
-     }
-   },
-   40685: (VV, eV, xV) => {
-     xV.d(eV, {
-       b: () => YV
-     });
-     var JV = xV(40692);
-     async function YV() {
-       const {
-         averageColors: VV
-       } = await xV.e(231).then((() => xV(35423)));
-       return new JV.b(VV)
+     function GH(HH, BH, LH, AH) {
+       EH(HH, !0), (0, SH.o)(HH, BH.overlayColour), LH.attachTransformNode(HH, AH, LH.getNamedNode(AH, BH.destNode))
```

#### 9. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L71-L79` → after: `L62-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L62-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L62-L82) · [Before (L71-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L71-L79)

```diff
-       constructor(VV, eV) {
-         var xV;
-         this.classes = VV, this.distanceKey = eV, this.markers = new Map, this.refs = new Map, this.viewport = {
-           width: window.innerWidth,
-           height: window.innerHeight
-         }, this.render = null, this.ik = !1, this.hq = () => {
-           this.viewport = {
-             width: window.innerWidth,
-             height: window.innerHeight
+       constructor(HH, BH, LH) {
+         this.NQ = HH, this.thinInstMgr = BH, this.kR = LH, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
+       }
+       loadModel(HH, BH, LH) {
+         const AH = (0, SH.g)(HH, BH);
+         return AH in this.modelCache || (this.modelCache[AH] = (async () => {
+           try {
+             const AH = XH(await CH(this.NQ, HH, BH, {
+                 keepTransforms: void 0 !== LH,
+                 backFaceCulling: !1
+               })),
+               rH = void 0 === LH ? null : (0, hH.j)(LH, (HH => {
+                 const BH = AH.get(HH);
+                 return BH ? (0, hH.i)(BH) : null
+               }));
+             return {
+ ... (5 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L81` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L84) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L81)

```diff
-         }, window.addEventListener("resize", this.hq), null === (xV = window.visualViewport) || void 0 === xV || xV.addEventListener("resize", this.hq)
+         })()), this.modelCache[AH]
```

#### 11. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L83-L102` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L86) · [Before (L83-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L83-L102)

```diff
-       bindMarker(VV) {
-         const eV = this.refs.get(VV);
-         if (eV) return eV;
-         const xV = eV => {
-           var JV;
-           null === (JV = this.markers.get(VV)) || void 0 === JV || JV.stopObserving(), this.markers.delete(VV), eV && !this.ik ? (this.markers.set(VV, this.mount(eV)), this.refs.set(VV, xV)) : this.refs.delete(VV)
-         };
-         return this.refs.set(VV, xV), xV
-       }
-       hasMarkers() {
-         return this.markers.size > 0
-       }
-       setRender(VV) {
-         this.render = VV
-       }
-       update(VV, eV, xV, JV, YV) {
- ... (4 more removed lines; see GitHub link above)
+       async update(HH, BH) {
```

#### 12. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L110-L111` → after: `L89-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L89-L90) · [Before (L110-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L110-L111)

```diff
-           render: eV,
-           viewport: xV
+           thinInstMgr: SH,
+           kR: hH
```

#### 13. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L113-L134` → after: `L92-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L92-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L92-L122) · [Before (L113-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L113-L134)

```diff
-         if (!eV || !VV.target) return;
-         const JV = (50 - eV.screenBandPct.y) / 100 * xV.height,
-           YV = {
-             x: VV.halfSize.width + 8,
-             top: VV.halfSize.height + 8,
-             bottom: VV.halfSize.height + VV.labelsBelow + JV
-           },
-           UV = eV.projectWorldPosToViewport(VV.target),
-           QV = null !== UV && void 0 !== UV ? UV : eV.projectWorldPosToScreenPos(VV.target),
-           nV = (0, pV.c)({
-             x: QV.x,
-             y: QV.y,
-             text: UV
-           }, YV, xV);
-         (0, yV.b)(VV.root, Math.round(100 * nV.x) / 100, Math.round(100 * nV.y) / 100)
-       }
- ... (6 more removed lines; see GitHub link above)
+         this.cosmeticNames[HH] = BH;
+         const tH = this.attachmentsByType[HH];
+         if (tH)
+           for (const {
+               mesh: rH,
+               destNode: CH,
+               bones: XH
+             }
+             of tH) {
+             null !== XH && (0, AH.kb)(this.shownBones, XH), EH(rH, !1);
+             const HH = SH.getNamedNode(hH, CH);
+             SH.detachTransformNodeIfFound(rH, hH, HH)
+           }
+         this.attachmentsByType[HH] = [];
+         const zH = (0, rH.h)(HH, BH);
+         if (null !== zH && void 0 !== zH && null !== (LH = zH.attachments) && void 0 !== LH && LH.length)
+ ... (15 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L136-L163` → after: `L124-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L124-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L124-L125) · [Before (L136-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L136-L163)

```diff
-       mount(VV) {
-         const eV = {
-             root: VV,
-             distance: VV.querySelector(`.${this.classes.distance}`),
-             halfSize: {
-               width: 0,
-               height: 0
-             },
-             labelsBelow: 0,
-             target: null,
-             metres: null,
-             metresShownAt: 0,
-             stopObserving: () => {}
-           },
-           xV = VV.querySelector(`.${this.classes.labels}`),
-           JV = new ResizeObserver((() => {
- ... (12 more removed lines; see GitHub link above)
+       writePoses(HH) {
+         for (const BH of this.shownBones) BH.write(HH)
```

#### 15. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L167` → after: `L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L129) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L167)

```diff
-   40673: (VV, eV, xV) => {
+   42386: (HH, BH, LH) => {
```

#### 16. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L169` → after: `L131-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L131-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L131-L133) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L169)

```diff
-       default: () => sY
+       openMobLineupPreview: () => ZH,
+       openMobPreview: () => wH,
+       openPetPreview: () => dH
```

#### 17. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L171-L281` → after: `L135-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L135-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L135-L153) · [Before (L171-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L171-L281)

```diff
-     const JV = "ore sell",
-       YV = "lumber ",
-       UV = "farm ",
-       yV = ["market", "demolition", "mining", "woodcutting", "farming"];
-     var pV = xV(62),
-       QV = xV(32),
-       nV = xV(39728),
-       wV = xV(37762);
-     const ZV = "greenvilleBackpackView";
-     class vV {
-       constructor(VV) {
-         this.QZ = VV, this.view = null, this.arrivalToken = 0, this.showToken = 0
-       }
-       getView() {
-         return this.view
-       }
- ... (95 more removed lines; see GitHub link above)
+     var AH = LH(41106),
+       rH = LH(41374),
+       SH = LH(42390),
+       hH = LH(38071),
+       tH = LH(37961),
+       zH = LH(41525),
+       CH = LH(42414),
+       EH = LH(39342),
+       XH = LH(38035),
+       GH = LH(38020),
+       YH = LH(37952),
+       uH = LH(39248),
+       QH = LH(39246),
+       WH = LH(38970),
+       MH = LH(38041),
+       xH = LH(3038),
+ ... (3 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L283-L289` → after: `L155-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L155-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L155-L163) · [Before (L283-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L283-L289)

```diff
-     function AV() {
-       const VV = new Image;
-       VV.src = FV, VV.decode().catch((VV => {
-         console.error("[greenville] backpack art failed to load", VV)
-       }))
-     }
-     const NV = (0, pV.memo)((function(VV) {
+     function UH(HH, BH) {
+       const LH = function(HH) {
+         return HH.flatMap((HH => {
+           var BH;
+           let [LH, AH] = HH;
+           const rH = void 0 === AH || null === (BH = (0, PH.h)(LH, AH)) || void 0 === BH ? void 0 : BH.attachments;
+           return null !== rH && void 0 !== rH ? rH : []
+         }))
+       }(BH).map((BH => function(HH, BH) {
```

#### 19. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L291-L293` → after: `L165-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L165-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L165-L167) · [Before (L291-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L291-L293)

```diff
-           item: eV,
-           below: xV,
-           share: JV
+           modelGlb: LH,
+           texture: AH,
+           animation: rH
```

#### 20. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L295-L342` → after: `L169-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L169-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L169-L196) · [Before (L295-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L295-L342)

```diff
-         return (0, TV.jsx)("div", {
-           className: "GreenvilleBackpackOre",
-           style: {
-             bottom: `calc(var(--rise) * ${xV})`,
-             height: `calc(var(--rise) * ${JV} + var(--slant))`
-           },
-           children: Array.from({
-             length: 18
-           }, ((VV, xV) => (0, TV.jsx)("div", {
-             className: "GreenvilleBackpackOreTile",
-             children: (0, TV.jsx)(BV.e, {
-               itemName: eV,
-               amount: 0
-             })
-           }, xV)))
-         })
- ... (32 more removed lines; see GitHub link above)
+         const SH = void 0 !== rH,
+           hH = `${(0,MH.g)(LH,AH)}|${SH}`;
+         let tH = TH.get(hH);
+         return tH || (tH = (0, vH.e)(HH, LH, AH, {
+           keepTransforms: SH,
+           backFaceCulling: !1
+         }).then(vH.h, (HH => {
+           throw TH.delete(hH), HH
+         })), TH.set(hH, tH)), tH
+       }(HH, BH).then((HH => ({
+         attachment: BH,
+         nodes: HH
+       })), (HH => (console.error(`Mob preview: could not load ${BH.modelGlb}`, HH), null)))));
+       return Promise.all(LH).then((HH => HH.filter((HH => null !== HH))))
+     }
+     var VH = LH(39035),
+ ... (12 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L344-L471` → after: `L198-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L198-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L198-L215) · [Before (L344-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L344-L471)

```diff
-     function WV(VV) {
-       let {
-         view: eV
-       } = VV;
-       const {
-         t: xV
-       } = (0, tV.A)(), {
-         isTouchScreen: JV
-       } = (0, bV.l)(["isTouchScreen"]), [YV, UV] = (0, pV.useState)([]), yV = (0, pV.useRef)(null), QV = (0, pV.useRef)(null), nV = (0, pV.useRef)([]), wV = (0, pV.useRef)({
-         arrival: eV.arrival,
-         showToken: eV.showToken
-       }), {
-         arrival: ZV,
-         showToken: vV
-       } = eV;
-       (0, pV.useLayoutEffect)((() => {
- ... (112 more removed lines; see GitHub link above)
+     function qH() {
+       if (null !== KH) return KH;
+       const HH = document.createElement("canvas");
+       HH.classList.add("MobPreviewCanvas");
+       const BH = new AH.b(HH, !0, {
+         preserveDrawingBuffer: !0
+       });
+       BH.WrH = (0, xH.c)().mX.engine.WrH;
+       const LH = new rH.e(BH);
+       LH.clearColor = new hH.d(0, 0, 0, 0), LH.ambientColor = new hH.Color3(1, 1, 1);
+       const CH = new SH.e("wW", Math.PI / 2, Math.PI / 2, mH, tH.lu.Zero(), LH),
+         EH = new zH.d("light", new tH.lu(-.1, 1, -.3), LH);
+       return EH.diffuse = new hH.Color3(1, 1, 1), EH.specular = new hH.Color3(1, 1, 1), EH.groundColor = new hH.Color3(.5, .5, .5), KH = {
+         engine: BH,
+         NQ: LH,
+         canvas: HH,
+ ... (2 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L475-L488` → after: `L219-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L219-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L219-L221) · [Before (L475-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L475-L488)

```diff
-       let {
-         shards: eV,
-         shardsPerItem: xV
-       } = VV;
-       return (0, TV.jsx)("div", {
-         className: "GreenvilleBackpackShards",
-         children: Array.from({
-           length: xV
-         }, ((VV, xV) => (0, TV.jsx)("span", {
-           className: kV()("GreenvilleBackpackShard", {
-             Filled: xV < eV
-           })
-         }, xV)))
-       })
+       return cH[HH] ??= (0, WH.u)(HH, qH().NQ, !0).catch((BH => {
+         throw delete cH[HH], BH
+       })), cH[HH]
```

#### 23. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L492-L531` → after: `L225-L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L225-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L225-L228) · [Before (L492-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L492-L531)

```diff
-       let {
-         drop: eV,
-         onLanded: xV
-       } = VV;
-       const JV = (0, pV.useRef)(null);
-       return (0, pV.useLayoutEffect)((() => {
-         const {
-           driftEm: VV,
-           spinDeg: YV
-         } = eV, UV = JV.current.animate([{
-           transform: `translate(${VV}em, -3.2em) rotate(${YV}deg) scale(1.2)`,
-           opacity: 0
-         }, {
-           transform: `translate(${.7*VV}em, -2.4em) rotate(${.7*YV}deg) scale(1.1)`,
-           opacity: 1,
-           offset: .25
- ... (24 more removed lines; see GitHub link above)
+       let BH = eH.get(HH);
+       return BH || (BH = bH.x[HH].loadModel(qH().NQ, !1).then((HH => (HH.vI(!1), HH)), (BH => {
+         throw eH.delete(HH), BH
+       })), eH.set(HH, BH)), BH
```

#### 24. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L557` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L232) · [Before (L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L557)

```diff
-       var eV;
+       var BH, LH, AH;
```

#### 25. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L559-L565` → after: `L234-L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L234-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L234-L292) · [Before (L559-L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L559-L565)

```diff
-         sounds: xV
-       } = VV;
-       const JV = null === (eV = (0, CV.j)("currencyAmounts")) || void 0 === eV ? void 0 : eV.gold;
-       return !JV || JV.hidden ? null : (0, TV.jsx)(fV, {
-         gold: JV.amount,
-         sounds: xV
-       })
+         mobType: rH,
+         variation: SH,
+         animation: hH
+       } = HH, zH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, PH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+       const TH = null !== (BH = null === zH || void 0 === zH ? void 0 : zH.size) && void 0 !== BH ? BH : 1,
+         mH = null !== (LH = null === zH || void 0 === zH ? void 0 : zH.cosmetics) && void 0 !== LH ? LH : [],
+         fH = null !== (AH = null === zH || void 0 === zH ? void 0 : zH.pU) && void 0 !== AH ? AH : null;
+       let lH = !1,
+         KH = null,
+         cH = null;
+       const {
+         engine: eH,
+         NQ: RH
+       } = qH(), jH = RH.onBeforeRenderObservable.add((() => {
+         var HH;
+         null === (HH = cH) || void 0 === HH || HH.render(eH.getDeltaTime())
+ ... (43 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L568-L651` → after: `L295-L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L295-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L295-L300) · [Before (L568-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L568-L651)

```diff
-     function fV(VV) {
-       let {
-         gold: eV,
-         sounds: xV
-       } = VV;
-       const JV = (0, aV.b)(),
-         [YV, UV] = (0, pV.useState)([]),
-         yV = (0, pV.useRef)(null),
-         QV = (0, pV.useRef)(null),
-         nV = (0, pV.useRef)(null),
-         wV = (0, pV.useRef)(eV);
-       (0, pV.useLayoutEffect)((() => {
-         const VV = eV - wV.current;
-         if (wV.current = eV, !(VV <= 0) && (xV.onGain(), !JV && !window.matchMedia("(prefers-reduced-motion: reduce)").matches)) {
-           const eV = function(VV) {
-             const eV = Math.max(1, Math.min(8, Math.floor(VV))),
- ... (68 more removed lines; see GitHub link above)
+     function jH(HH, BH) {
+       return RH({
+         mobType: "NPC",
+         variation: null,
+         animation: HH.animation
+       }, HH, BH)
```

#### 27. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L656-L757` → after: `L305-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L305-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L305-L329) · [Before (L656-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L656-L757)

```diff
-         coin: eV,
-         target: xV,
-         onLanded: JV
-       } = VV;
-       const YV = (0, pV.useRef)(null);
-       return (0, pV.useEffect)((() => {
-         var VV;
-         const UV = (null !== (VV = lV) && void 0 !== VV ? VV : xV.current).getBoundingClientRect(),
-           {
-             burst: yV
-           } = eV,
-           pV = window.innerWidth / 2,
-           QV = window.innerHeight / 2,
-           nV = UV.left + UV.width / 2,
-           wV = UV.top + UV.height / 2,
-           ZV = YV.current.animate([{
- ... (86 more removed lines; see GitHub link above)
+         mobType: BH,
+         variation: LH,
+         metaInfo: AH,
+         tamed: rH
+       } = HH, SH = !1, hH = null, tH = 0;
+       const zH = (0, xH.c)(),
+         CH = zH.mX.bR,
+         EH = HH => {
+           tH += lH * (HH / 1e3) % (2 * Math.PI), CH.setRotationEulerY(hH, tH)
+         };
+       return gH(BH).then((HH => {
+         if (SH) return;
+         hH = (0, WH.m)(BH, fH, !0, !0), CH.setPosition(hH, 0, -fH, 0), HH.meshApi.updateVariation(hH, BH, LH);
+         const tH = {
+           wool: "Sheared" !== AH,
+           saddle: "Saddled" === AH,
+ ... (9 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L761-L768` → after: `L333-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L333-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L333-L342) · [Before (L761-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L761-L768)

```diff
-       constructor(VV, eV, xV, JV) {
-         this.confirmed = VV, this.picks = void 0, this.picks = new KV(eV, xV, JV)
-       }
-       confirm(VV) {
-         this.confirmed = VV
-       }
-       getLastPending() {
-         return this.picks.getLastPending()
+       constructor(HH, BH) {
+         this.place = BH, this.remove = null;
+         const {
+           engine: LH,
+           NQ: AH,
+           canvas: rH
+         } = qH();
+         HH.appendChild(rH), LH.resize(), LH.runRenderLoop((() => {
+           AH.render()
+         }))
```

#### 29. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L770` → after: `L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L344) · [Before (L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L770)

```diff
-       getLatest() {
+       show(HH) {
```

#### 30. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L772` → after: `L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L346) · [Before (L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L772)

```diff
-         return null !== (VV = this.getLastPending()) && void 0 !== VV ? VV : this.confirmed
+         null === (BH = this.remove) || void 0 === BH || BH.call(this), this.remove = this.place(HH)
```

#### 31. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L774-L775` → after: `L348-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L348-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L348-L353) · [Before (L774-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L774-L775)

```diff
-       XZ() {
-         return this.picks.XZ()
+       resize(HH, BH) {
+         const {
+           engine: LH,
+           canvas: AH
+         } = qH();
+         AH.width = HH, AH.height = BH, LH.resize()
```

#### 32. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L777` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L355) · [Before (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L777)

```diff
-       pushLatest(VV) {
+       close() {
```

#### 33. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L779-L786` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L357) · [Before (L779-L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L779-L786)

```diff
-         const xV = null !== (eV = this.picks.getLastSent()) && void 0 !== eV ? eV : this.confirmed;
-         this.picks.dropWaiting() && VV === xV || this.picks.push(VV)
-       }
-       takeAnswer() {
-         this.picks.takeAnswer()
-       }
-       clear() {
-         this.picks.clear()
+         qH().engine.stopRenderLoop(), null === (HH = this.remove) || void 0 === HH || HH.call(this), this.remove = null
```

#### 34. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L790-L798` → after: `L361-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L361-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L361-L365) · [Before (L790-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L790-L798)

```diff
-       constructor(VV, eV, xV) {
-         this.closed = VV, this.QZ = eV, this.menu = xV, this.view = void 0, this.dismiss = () => {
-           this.closePanel() && this.menu.dismiss()
-         }, this.onMenuClosed = () => {
-           this.closePanel()
-         }, this.view = VV
-       }
-       getView() {
-         return this.view
+       constructor(HH) {
+         this.preview = void 0, this.view = {
+           figures: [],
+           shown: []
+         }, this.aspect = 1, this.placed = [], this.preview = new FH(HH, (() => () => {}))
```

#### 35. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L801-L804` → after: `L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L368) · [Before (L801-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L801-L804)

```diff
-         this.set(VV), this.menu.open(this)
-       }
-       close() {
-         this.closePanel() && this.menu.close()
+         HH.figures !== this.view.figures && this.preload(HH.figures), this.view = HH, this.place()
```

#### 36. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L806-L807` → after: `L370-L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L370-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L370-L371) · [Before (L806-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L806-L807)

```diff
-       set(VV) {
-         this.view = VV, this.QZ(VV)
+       resize(HH, BH) {
+         this.preview.resize(HH, BH), this.aspect = HH / BH, this.place()
```

#### 37. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L809-L842` → after: `L373-L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L373-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L373-L385) · [Before (L809-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L809-L842)

```diff
-       closePanel() {
-         return !!this.view.open && (this.dropPresses(), this.set(this.closed), !0)
-       }
-     }
-     const sV = "greenvilleDepotView",
-       SV = {
-         open: !1,
-         explosives: [],
-         picked: 0,
-         selected: 0,
-         level: 1,
-         line: "demolitionDepotIntro"
-       };
-     class IV extends uV {
-       constructor(VV, eV, xV, JV) {
-         super(SV, VV, eV), this.picks = void 0, this.select = VV => {
- ... (18 more removed lines; see GitHub link above)
+       close() {
+         this.preview.close();
+         for (const HH of this.placed) null === HH || void 0 === HH || HH.remove();
+         this.placed = []
+       }
+       preload(HH) {
+         const BH = () => {};
+         gH("NPC").catch(BH);
+         for (const {
+             pU: LH,
+             cosmetics: AH
+           }
+           of HH) null !== LH && NH(LH).catch(BH), UH(qH().NQ, AH).catch(BH)
```

#### 38. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L844-L859` → after: `L387-L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L387-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L387-L400) · [Before (L844-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L844-L859)

```diff
-       RZ(VV) {
-         if ("openDepot" === VV[0]) {
-           const eV = VV[4];
-           eV && this.picks.takeAnswer();
-           const xV = this.getView();
-           if (eV && !xV.open) return;
-           this.picks.confirm(VV[2]);
-           const JV = this.picks.getLatest(),
-             YV = !xV.open;
-           this.show({
-             open: !0,
-             explosives: VV[1],
-             picked: JV,
-             selected: YV ? JV : xV.selected,
-             level: VV[3],
-             line: YV ? "demolitionDepotIntro" : xV.line
+       place() {
+         const {
+           figures: HH,
+           shown: BH
+         } = this.view, LH = HH.map(((LH, AH) => {
+           var rH;
+           const SH = null !== (rH = this.placed[AH]) && void 0 !== rH ? rH : null;
+           if (!BH[AH]) return null === SH || void 0 === SH || SH.remove(), null;
+           const hH = (tH = (AH + .5) / HH.length, zH = this.aspect, (.5 - tH) * (2 * mH * Math.tan(qH().camera.fov / 2)) * zH);
+           var tH, zH;
+           return null !== SH && SH.figure === LH && SH.x === hH ? SH : (null === SH || void 0 === SH || SH.remove(), {
+             figure: LH,
+             x: hH,
+             remove: jH(LH, hH)
```

#### 39. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L861-L864` → after: `L402-L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L402-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L402-L404) · [Before (L861-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L861-L864)

```diff
-         } else "closeDepot" !== VV[0] && "hide" !== VV[0] || this.close()
-       }
-       dropPresses() {
-         this.picks.clear()
+         }));
+         for (const AH of this.placed.slice(HH.length)) null === AH || void 0 === AH || AH.remove();
+         this.placed = LH
```

#### 40. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L875-L883` → after: `L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L409) · [Before (L875-L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L875-L883)

```diff
-       var eV;
-       let {
-         item: xV,
-         className: JV
-       } = VV;
-       return (0, TV.jsx)(xe.b, {
-         className: JV,
-         text: null !== (eV = (0, Ve.displayNameOf)((0, ee.d)(xV))) && void 0 !== eV ? eV : xV
-       })
+       return new FH(HH, RH)
```

#### 41. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L887-L893` → after: `L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L413) · [Before (L887-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L887-L893)

```diff
-       let {
-         item: eV
-       } = VV;
-       return (0, TV.jsx)(BV.e, {
-         itemName: eV,
-         amount: 0
-       })
+       return new DH(HH)
```

#### 42. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L897-L939` → after: `L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L417) · [Before (L897-L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L897-L939)

```diff
-       let {
-         open: eV,
-         onDismiss: xV,
-         title: JV,
-         className: YV,
-         headerExtra: UV,
-         tabs: yV,
-         status: pV,
-         children: QV
-       } = VV;
-       const nV = `${YV}Title`;
-       return (0, TV.jsx)(Je.e, {
-         show: eV,
-         close: xV,
-         togglePointerLock: !1,
-         ignorePressesAsShown: !0,
- ... (27 more removed lines; see GitHub link above)
+       return new FH(HH, nH)
```

#### 43. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L941-L967` → after: `L419-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L419-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L419-L441) · [Before (L941-L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L941-L967)

```diff
- 
-     function pe(VV) {
-       let {
-         tabs: eV,
-         selected: xV,
-         onSelect: JV
-       } = VV;
-       return (0, TV.jsx)("nav", {
-         className: "GreenvilleBoardTabs",
-         "data-pad-tabs": "1",
-         children: eV.map((VV => {
-           const eV = VV.id === xV;
-           return (0, TV.jsxs)("button", {
-             type: "button",
-             className: kV()("GreenvilleBoardTab", {
-               Selected: eV
- ... (11 more removed lines; see GitHub link above)
+   },
+   39726: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => GH
+     });
+     var AH = LH(38084),
+       rH = LH(38183),
+       SH = LH(38213),
+       hH = LH(38098),
+       tH = LH(38086);
+ 
+     function zH(HH) {
+       return `\n\t\t\t\t${(0,tH.x)(HH,"mat2","rotate",[{name:"ang",type:"float"}],`\
+       n\ t\ t\ t\ t\ t$ {
+         (0, tH.C)(HH, "float", "s", "sin(ang)")
+       }\
+ ... (7 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L970-L986` → after: `L444-L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L444-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L444-L448) · [Before (L970-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L970-L986)

```diff
-     function Qe(VV) {
-       let {
-         className: eV,
-         roomy: xV = !1,
-         children: JV
-       } = VV;
-       return (0, TV.jsx)("div", {
-         className: kV()("GreenvilleBoardTiles", eV, {
-           Roomy: xV
-         }),
-         style: xV ? {
-           "--tile-columns": (YV = pV.Children.count(JV), YV <= 3 ? YV : Math.min(4, Math.ceil(YV / 2)))
-         } : void 0,
-         "data-pad-select-on-focus": !0,
-         children: JV
-       });
- ... (1 more removed lines; see GitHub link above)
+     function CH(HH, BH) {
+       let LH = (0, tH.Cb)(HH, "skele" + (BH - 1));
+       for (let rH = BH - 2; rH >= 0; rH--) LH = (0, tH.pb)(HH, `boneIdx == ${rH}`, (0, tH.Cb)(HH, `skele${rH}`), LH);
+       const AH = "bone.yz + rotate(bone.x) * pivot - pivot";
+       return `\n\t\t\t\t${(0,tH.C)(HH,"int","boneIdx",(0,tH.ub)(HH,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,tH.C)(HH,"vec3","bone",LH)}\n\t\t\t\t${(0,tH.C)(HH,"vec2","pivot",(0,tH.l)(HH,"vec2","0.0",`${(0,tH.Lb)(HH,"position")}.z`))}\n\t\t\t\t${(0,tH.$)(HH)?`positi … [truncated]
```

#### 45. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L990-L1015` → after: `L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L452) · [Before (L990-L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L990-L1015)

```diff
-       let {
-         icon: eV,
-         name: xV,
-         selected: JV,
-         locked: YV = !1,
-         className: UV,
-         onSelect: yV,
-         children: pV
-       } = VV;
-       return (0, TV.jsxs)("button", {
-         type: "button",
-         className: kV()("GreenvilleBoardTile", UV, {
-           Selected: JV,
-           Locked: YV
-         }),
-         "aria-pressed": JV,
- ... (10 more removed lines; see GitHub link above)
+       return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,tH.l)(HH,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
```

#### 46. `bundles/bloxd.io/chunks/js/273.js` (Changed code · before: `L1017-L1020` → after: `L454-L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325R454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8143f3622ffb04b52efdc0dfb9f8652e0d3cf5d832aae90ef8b72ec5d7159325) · [After (L454-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/273.js#L454-L507) · [Before (L1017-L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/273.js#L1017-L1020)

```diff
- 
-     function we(VV) {
-       let {
-         icon: eV,
+     const XH = {
+         x: 0,
+         y: 0,
+         z: 0,
+         SX(HH, BH) {
+           return this.x = HH[BH], this.y = HH[BH + 1], this.z = HH[BH + 2], this
+         }
+       },
+       GH = {
+         name: "Cape",
+         className: "CapeMaterialPlugin",
+         priority: 200,
+         defines: (HH, BH) => ({
+           ...(0, AH.e)("CAPE"),
+           BLOXD_CAPE_BONES: `${HH}`,
+           BLOXD_CAPE_MAX_Y: (0, rH.zb)(BH)
+ ... (38 more added lines; see GitHub link above)
```
