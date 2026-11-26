# Changed — Bundle Modifications Report (Part 048 / 115)

- **Updated at**: `2026-11-27T00:54 JST`
- **Part**: `48 / 115` (**379** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 047](part-047.md) · [Part 049 →](part-049.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/88.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/88.js` (4618 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46)

#### 603. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L4900` → after: `L4900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R4900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L4900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L4900) · [Before (L4900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L4900)

```diff
-           if (this.heldItemCls.checkTargetedBlockCanBePlacedOver() && (UU = this.QA, XU = this.targetBlock), UU) return this.tryPutDownFluid(UU, XU, yU)
+           if (this.heldItemCls.checkTargetedBlockCanBePlacedOver() && (HH = this.hh, BH = this.targetBlock), HH) return this.tryPutDownFluid(HH, BH, rH)
```

#### 604. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L4904-L4908` → after: `L4904-L4908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R4904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L4904-L4908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L4904-L4908) · [Before (L4904-L4908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L4904-L4908)

```diff
-         if (!this.jB) return;
-         if ("Bowl" !== this.jB.name && (!this.jB.name.includes("Bowl of Cranberries") || "Bowl of Cranberries" === this.jB.name)) return;
-         if (this.targetBlock !== (0, DU.j)("Cranberries_stage2")) return;
-         if (!this.bloxd.playerCanChangePos(this.WN.pM, ...this.QA)) return;
-         const UU = (0, DU.j)("Cranberries_stage1");
+         if (!this.pU) return;
+         if ("Bowl" !== this.pU.name && (!this.pU.name.includes("Bowl of Cranberries") || "Bowl of Cranberries" === this.pU.name)) return;
+         if (this.targetBlock !== (0, CH.h)("Cranberries_stage2")) return;
+         if (!this.bloxd.playerCanChangePos(this.bG.lF, ...this.hh)) return;
+         const HH = (0, CH.h)("Cranberries_stage1");
```

#### 605. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L4910-L4918` → after: `L4910-L4918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R4910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L4910-L4918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L4910-L4918) · [Before (L4910-L4918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L4910-L4918)

```diff
-         if ("Bowl" === this.jB.name && this.jB.amount > 1 && (XU = this.inven.getFreeInventoryPosition(), null === XU)) return;
-         this.bloxd.Jw(...this.QA, UU);
-         const zU = this.bloxd.getBowlItemName("Bowl of Cranberries", this.bloxd.getNumItemsInBowl(this.jB.name) + 1),
-           cU = this.bloxd.client.inventoryPrediction.predict(OU.e.fillContainer(this.selectedSlot, this.jB.name, zU, XU));
-         return (0, GU.sendColyMessage)(BU.Kg, {
-           jE: this.QA,
-           ZA: UU,
-           RA: XU,
-           IA: cU
+         if ("Bowl" === this.pU.name && this.pU.amount > 1 && (BH = this.inven.getFreeInventoryPosition(), null === BH)) return;
+         this.bloxd.oq(...this.hh, HH);
+         const LH = this.bloxd.getBowlItemName("Bowl of Cranberries", this.bloxd.getNumItemsInBowl(this.pU.name) + 1),
+           AH = this.bloxd.client.inventoryPrediction.predict(lH.b.fillContainer(this.selectedSlot, this.pU.name, LH, BH));
+         return (0, vH.sendColyMessage)(PH.oh, {
+           SE: this.hh,
+           Ph: HH,
+           lt: BH,
+           Yh: AH
```

#### 606. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L4927-L4928` → after: `L4927-L4928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R4927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L4927-L4928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L4927-L4928) · [Before (L4927-L4928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L4927-L4928)

```diff
-         const zU = null === (UU = this.WN.xG.qzU(this.hitEId)) || void 0 === UU ? void 0 : UU.lifeformType,
-           cU = (0, aU.A)(null === (XU = this.jB) || void 0 === XU ? void 0 : XU.name, zU, this.distanceTravelled);
+         const LH = null === (HH = this.bG.pT.ZLH(this.hitEId)) || void 0 === HH ? void 0 : HH.lifeformType,
+           AH = (0, QH.D)(null === (BH = this.pU) || void 0 === BH ? void 0 : BH.name, LH, this.distanceTravelled);
```

#### 607. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L4931` → after: `L4931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R4931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L4931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L4931) · [Before (L4931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L4931)

```diff
-           if (this.jB.amount > 1 && (UU = this.inven.getFreeInventoryPosition(), null === UU)) return {
+           if (this.pU.amount > 1 && (HH = this.inven.getFreeInventoryPosition(), null === HH)) return {
```

#### 608. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L4935-L4939` → after: `L4935-L4939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R4935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L4935-L4939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L4935-L4939) · [Before (L4935-L4939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L4935-L4939)

```diff
-           const XU = this.bloxd.client.inventoryPrediction.predict(OU.e.fillContainer(this.selectedSlot, "Empty Bottle", "Milk Potion", UU));
-           return (0, GU.sendColyMessage)(BU.Hg, {
-             AA: this.hitEId,
-             RA: UU,
-             IA: XU
+           const BH = this.bloxd.client.inventoryPrediction.predict(lH.b.fillContainer(this.selectedSlot, "Empty Bottle", "Milk Potion", HH));
+           return (0, vH.sendColyMessage)(PH.lh, {
+             zh: this.hitEId,
+             lt: HH,
+             Yh: BH
```

#### 609. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L4945-L4948` → after: `L4945-L4948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R4945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L4945-L4948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L4945-L4948) · [Before (L4945-L4948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L4945-L4948)

```diff
-         return "Shear" === cU ? ((0, GU.sendColyMessage)(BU.Hg, {
-           AA: this.hitEId,
-           RA: null,
-           IA: this.bloxd.client.inventoryPrediction.predict(null)
+         return "Shear" === AH ? ((0, vH.sendColyMessage)(PH.lh, {
+           zh: this.hitEId,
+           lt: null,
+           Yh: this.bloxd.client.inventoryPrediction.predict(null)
```

#### 610. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L4957-L4960` → after: `L4957-L4960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R4957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L4957-L4960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L4957-L4960) · [Before (L4957-L4960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L4957-L4960)

```diff
-         const zU = null === (UU = this.WN.xG.qzU(this.hitEId)) || void 0 === UU ? void 0 : UU.lifeformType;
-         if (!FU.o.includes(zU)) return;
-         this.sendAltAction(BU.yf), this.sendAltAction(BU.zf);
-         const cU = (0, aU.m)(zU, null === (XU = this.jB) || void 0 === XU ? void 0 : XU.name);
+         const LH = null === (HH = this.bG.pT.ZLH(this.hitEId)) || void 0 === HH ? void 0 : HH.lifeformType;
+         if (!tH.q.includes(LH)) return;
+         this.sendAltAction(PH.Yf), this.sendAltAction(PH._f);
+         const AH = (0, QH.m)(LH, null === (BH = this.pU) || void 0 === BH ? void 0 : BH.name);
```

#### 611. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L4968` → after: `L4968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R4968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L4968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L4968) · [Before (L4968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L4968)

```diff
-         if ("Name Tag" === (null === (UU = this.jB) || void 0 === UU ? void 0 : UU.name)) {
+         if ("Name Tag" === (null === (HH = this.pU) || void 0 === HH ? void 0 : HH.name)) {
```

#### 612. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L4971-L4972` → after: `L4971-L4972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R4971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L4971-L4972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L4971-L4972) · [Before (L4971-L4972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L4971-L4972)

```diff
-             const UU = null === (zU = this.WN.xG.qzU(this.hitEId)) || void 0 === zU ? void 0 : zU.lifeformType;
-             if (FU.o.includes(UU)) return
+             const HH = null === (LH = this.bG.pT.ZLH(this.hitEId)) || void 0 === LH ? void 0 : LH.lifeformType;
+             if (tH.q.includes(HH)) return
```

#### 613. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L4974` → after: `L4974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R4974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L4974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L4974) · [Before (L4974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L4974)

```diff
-           return PU.k.UY("EditNameTag", null !== (XU = this.jB.attributes.customAttributes.text) && void 0 !== XU ? XU : ""), {
+           return VH.k.AX("EditNameTag", null !== (BH = this.pU.attributes.customAttributes.text) && void 0 !== BH ? BH : ""), {
```

#### 614. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L4982-L4985` → after: `L4982-L4985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R4982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L4982-L4985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L4982-L4985) · [Before (L4982-L4985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L4982-L4985)

```diff
-         if ("Book" === (null === (UU = this.jB) || void 0 === UU ? void 0 : UU.name)) return PU.k.UY("EditBook", {
-           pages: (0, yU.N)(this.jB.attributes.customAttributes.pages),
-           title: null !== (XU = this.jB.attributes.customDisplayName) && void 0 !== XU ? XU : "Title",
-           isPublished: !!this.jB.attributes.customDescription
+         if ("Book" === (null === (HH = this.pU) || void 0 === HH ? void 0 : HH.name)) return VH.k.AX("EditBook", {
+           pages: (0, rH.N)(this.pU.attributes.customAttributes.pages),
+           title: null !== (BH = this.pU.attributes.customDisplayName) && void 0 !== BH ? BH : "Title",
+           isPublished: !!this.pU.attributes.customDescription
```

#### 615. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L4993` → after: `L4993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R4993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L4993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L4993) · [Before (L4993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L4993)

```diff
-         const XU = (0, oU.zb)(null === (UU = this.jB) || void 0 === UU ? void 0 : UU.name);
+         const BH = (0, zH.wb)(null === (HH = this.pU) || void 0 === HH ? void 0 : HH.name);
```

#### 616. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L4995-L4997` → after: `L4995-L4997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R4995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L4995-L4997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L4995-L4997) · [Before (L4995-L4997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L4995-L4997)

```diff
-         const zU = (0, oU.yb)(XU),
-           cU = this.WN.xG.kzU(this.WN.pM);
-         return mU.c.swapPosClient(cU, zU, this.selectedSlot), {
+         const LH = (0, zH.vb)(BH),
+           AH = this.bG.pT.KLH(this.bG.lF);
+         return wH.e.swapPosClient(AH, LH, this.selectedSlot), {
```

#### 617. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5006-L5008` → after: `L5006-L5008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5006-L5008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5006-L5008) · [Before (L5006-L5008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5006-L5008)

```diff
-           cU = this.bloxd.getItemStat(this.WN.pM, null === (UU = this.jB) || void 0 === UU ? void 0 : UU.name, "harvests");
-         if (this.bloxd.playerCanChangePos(this.WN.pM, ...this.QA)) {
-           if ("wood" === cU && oU.be.includes(zU)) return this.sendAltAction(BU.wf), (0, tU.b)().Jw(...this.QA, (0, DU.j)(`Barkless ${zU}`)), {
+           AH = this.bloxd.getItemStat(this.bG.lF, null === (HH = this.pU) || void 0 === HH ? void 0 : HH.name, "harvests");
+         if (this.bloxd.playerCanChangePos(this.bG.lF, ...this.hh)) {
+           if ("wood" === AH && zH.Zd.includes(LH)) return this.sendAltAction(PH.Xf), (0, WH.b)().oq(...this.hh, (0, CH.h)(`Barkless ${LH}`)), {
```

#### 618. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5012-L5014` → after: `L5012-L5014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5012-L5014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5012-L5014) · [Before (L5012-L5014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5012-L5014)

```diff
-           if ("Shears" === (null === (XU = this.jB) || void 0 === XU ? void 0 : XU.name)) {
-             const UU = oU.qe.get(zU);
-             if (void 0 !== UU) return this.sendAltAction(BU.wf), (0, tU.b)().Jw(...this.QA, (0, DU.j)(UU)), {
+           if ("Shears" === (null === (BH = this.pU) || void 0 === BH ? void 0 : BH.name)) {
+             const HH = zH.oe.get(LH);
+             if (void 0 !== HH) return this.sendAltAction(PH.Xf), (0, WH.b)().oq(...this.hh, (0, CH.h)(HH)), {
```

#### 619. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5019` → after: `L5019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5019) · [Before (L5019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5019)

```diff
-           return "cuttable" === cU && oU.uc.includes((0, DU.f)(this.targetBlock)) ? (this.sendAltAction(BU.wf), (0, tU.b)().Jw(...this.QA, (0, DU.j)("Tilled Soil")), {
+           return "cuttable" === AH && zH.vc.includes((0, CH.d)(this.targetBlock)) ? (this.sendAltAction(PH.Xf), (0, WH.b)().oq(...this.hh, (0, CH.h)("Tilled Soil")), {
```

#### 620. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5027-L5028` → after: `L5027-L5028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5027-L5028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5027-L5028) · [Before (L5027-L5028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5027-L5028)

```diff
-         if (!qU.includes(null === (UU = this.jB) || void 0 === UU ? void 0 : UU.name)) return;
-         return (null === (XU = null === (zU = uU[this.jB.name]) || void 0 === zU ? void 0 : zU.call(uU, this.WN)) || void 0 === XU || XU) && this.sendConsumableAltAction(this.WN.mG.creative ? null : OU.e.remove(this.selectedSlot, 1, this.jB.name)), {
+         if (!fH.includes(null === (HH = this.pU) || void 0 === HH ? void 0 : HH.name)) return;
+         return (null === (BH = null === (LH = eH[this.pU.name]) || void 0 === LH ? void 0 : LH.call(eH, this.bG)) || void 0 === BH || BH) && this.sendConsumableAltAction(this.bG.wT.creative ? null : lH.b.remove(this.selectedSlot, 1, this.pU.name)), {
```

#### 621. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5036-L5037` → after: `L5036-L5037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5036-L5037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5036-L5037) · [Before (L5036-L5037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5036-L5037)

```diff
-         const XU = null === (UU = this.WN.xG.DzU(this.hitEId)) || void 0 === UU ? void 0 : UU.mesh;
-         return (void 0 !== (null === XU || void 0 === XU ? void 0 : XU.name) && iU.z.some((UU => XU.name.includes(UU))) || this.isThinVehicle(this.hitEId)) && this.distanceTravelled < 3 ? (this.sendAltAction(BU.yf), {
+         const BH = null === (HH = this.bG.pT.VLH(this.hitEId)) || void 0 === HH ? void 0 : HH.mesh;
+         return (void 0 !== (null === BH || void 0 === BH ? void 0 : BH.name) && gH.w.some((HH => BH.name.includes(HH))) || this.isThinVehicle(this.hitEId)) && this.distanceTravelled < 3 ? (this.sendAltAction(PH.Yf), {
```

#### 622. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5044` → after: `L5044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5044) · [Before (L5044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5044)

```diff
-         if ("number" !== typeof(null === (XU = this.WN.xG.DzU(UU)) || void 0 === XU ? void 0 : XU.YH)) return !1;
+         if ("number" !== typeof(null === (BH = this.bG.pT.VLH(HH)) || void 0 === BH ? void 0 : BH.kR)) return !1;
```

#### 623. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5047` → after: `L5047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5047) · [Before (L5047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5047)

```diff
-         return "BloxdBlock" === (null === cU || void 0 === cU ? void 0 : cU.type) && iU.z.includes(cU.opts.blockName)
+         return "BloxdBlock" === (null === AH || void 0 === AH ? void 0 : AH.type) && gH.w.includes(AH.opts.blockName)
```

#### 624. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5050` → after: `L5050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5050) · [Before (L5050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5050)

```diff
-         if ((0, pU.g)(this.hitEId)) return this.sendAltAction(BU.zf), {
+         if ((0, uH.c)(this.hitEId)) return this.sendAltAction(PH._f), {
```

#### 625. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5059-L5061` → after: `L5059-L5061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5059-L5061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5059-L5061) · [Before (L5059-L5061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5059-L5061)

```diff
-         const XU = this.WN.xG.Bx(this.WN.pM),
-           zU = this.WN.xG.KXU(this.WN.pM);
-         if ((0, aU.j)(zU, null === (UU = this.jB) || void 0 === UU ? void 0 : UU.name)) {
+         const BH = this.bG.pT.xJ(this.bG.lF),
+           LH = this.bG.pT.ELH(this.bG.lF);
+         if ((0, QH.i)(LH, null === (HH = this.pU) || void 0 === HH ? void 0 : HH.name)) {
```

#### 626. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5066` → after: `L5066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5066) · [Before (L5066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5066)

```diff
-           const UU = (0, fU.f)(this.inven);
+           const HH = (0, qH.d)(this.inven);
```

#### 627. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5069-L5071` → after: `L5069-L5071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5069-L5071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5069-L5071) · [Before (L5069-L5071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5069-L5071)

```diff
-             const yU = this.bloxd.client.inventoryPrediction.predict(this.bloxd.getClientPredictedOption(this.WN.pM, "creative") ? null : OU.e.remove(UU, 1, this.inven.getItemAtIdx(UU).name)),
-               QU = null !== (cU = this.WN.uXU) && void 0 !== cU ? cU : this.WN.camera.R_();
-             this.bloxd.useGliderFuel(this.WN.pM, QU, oU.f.getFirecrackerBoostMultiplier(this.jB)), this.bloxd.startGliderFuelCooldown(this.WN.pM, zU, oU.f.getFirecrackerCooldownMultiplier(this.jB));
+             const rH = this.bloxd.client.inventoryPrediction.predict(this.bloxd.getClientPredictedOption(this.bG.lF, "creative") ? null : lH.b.remove(HH, 1, this.inven.getItemAtIdx(HH).name)),
+               SH = null !== (AH = this.bG.pBH) && void 0 !== AH ? AH : this.bG.camera.T_();
+             this.bloxd.useGliderFuel(this.bG.lF, SH, zH.f.getFirecrackerBoostMultiplier(this.pU)), this.bloxd.startGliderFuelCooldown(this.bG.lF, LH, zH.f.getFirecrackerCooldownMultiplier(this.pU));
```

#### 628. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5073-L5078` → after: `L5073-L5078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5073-L5078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5073-L5078) · [Before (L5073-L5078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5073-L5078)

```diff
-               FU = this.bloxd.getLifeformEyePos(this.WN.pM, !0);
-             FU[1] += 2, kU().gp(AU, FU, QU, 6), (0, GU.sendColyMessage)(BU.tj, {
-               QE: AU,
-               AE: UU,
-               FA: QU,
-               IA: yU
+               tH = this.bloxd.getLifeformEyePos(this.bG.lF, !0);
+             tH[1] += 2, xH().nY(hH, tH, SH, 6), (0, vH.sendColyMessage)(PH.Vj, {
+               nE: hH,
+               FE: HH,
+               Ch: SH,
+               Yh: rH
```

#### 629. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5080` → after: `L5080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5080) · [Before (L5080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5080)

```diff
-             const DU = 8 * kU().len(XU.Et);
+             const CH = 8 * xH().len(BH.EW);
```

#### 630. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5084` → after: `L5084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5084) · [Before (L5084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5084)

```diff
-             this.bloxd.client.meshCreator.newSingleBurstParticleSystem(UX), ZU.e.play((0, RU.f)("bow"), 1).rate(.6 + .2 * Math.random())
+             this.bloxd.client.meshCreator.newSingleBurstParticleSystem(HB), TH.c.play((0, UH.h)("bow"), 1).rate(.6 + .2 * Math.random())
```

#### 631. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5096` → after: `L5096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5096) · [Before (L5096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5096)

```diff
-           zU = this.bloxd.playerCanChangePos(this.WN.pM, ...this.QA);
+           LH = this.bloxd.playerCanChangePos(this.bG.lF, ...this.hh);
```

#### 632. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5098-L5099` → after: `L5098-L5099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5098-L5099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5098-L5099) · [Before (L5098-L5099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5098-L5099)

```diff
-         if ("Board" === XU && zU && !IU.singleLineBoardActions.has(null === (yU = this.bloxd.blockDataOwner.getBlockData(...this.QA)) || void 0 === yU ? void 0 : yU.persisted.shared.text.split("\n")[0].toLowerCase())) return PU.k.UY("EditBoard", {
-           pos: this.QA
+         if ("Board" === BH && LH && !YH.singleLineBoardActions.has(null === (rH = this.bloxd.blockDataOwner.getBlockData(...this.hh)) || void 0 === rH ? void 0 : rH.persisted.shared.text.split("\n")[0].toLowerCase())) return VH.k.AX("EditBoard", {
+           pos: this.hh
```

#### 633. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5105-L5106` → after: `L5105-L5106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5105-L5106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5105-L5106) · [Before (L5105-L5106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5105-L5106)

```diff
-         if ((0, EU.i)(this.targetBlock) && zU && !YU.e.includes(null === (UU = this.jB) || void 0 === UU ? void 0 : UU.name) && !this.WN.xG.azU(this.WN.pM).crouching) return PU.k.UY("EditBoard", {
-           pos: this.QA
+         if ((0, EH.e)(this.targetBlock) && LH && !XH.j.includes(null === (HH = this.pU) || void 0 === HH ? void 0 : HH.name) && !this.bG.pT.ILH(this.bG.lF).crouching) return VH.k.AX("EditBoard", {
+           pos: this.hh
```

#### 634. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5113-L5115` → after: `L5113-L5115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5113-L5115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5113-L5115) · [Before (L5113-L5115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5113-L5115)

```diff
-           const UU = this.WN.mG.canEditCode && zU;
-           return UU || this.WN.xG.azU(this.WN.pM).crouching ? (PU.k.UY("EditCodeBlock", {
-             pos: this.QA,
+           const HH = this.bG.wT.canEditCode && LH;
+           return HH || this.bG.pT.ILH(this.bG.lF).crouching ? (VH.k.AX("EditCodeBlock", {
+             pos: this.hh,
```

#### 635. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5126-L5127` → after: `L5126-L5127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5126-L5127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5126-L5127) · [Before (L5126-L5127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5126-L5127)

```diff
-         if ("Custom Lobby Block" === XU && zU) return PU.k.UY("EditCustomLobbyBlock", {
-           pos: this.QA
+         if ("Custom Lobby Block" === BH && LH) return VH.k.AX("EditCustomLobbyBlock", {
+           pos: this.hh
```

#### 636. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5133-L5134` → after: `L5133-L5134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5133-L5134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5133-L5134) · [Before (L5133-L5134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5133-L5134)

```diff
-         if ((0, aU.I)(XU, zU)) return PU.k.UY("OpenIronChest", {
-           pos: this.QA
+         if ((0, QH.G)(BH, LH)) return VH.k.AX("OpenIronChest", {
+           pos: this.hh
```

#### 637. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5140-L5143` → after: `L5140-L5143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5140-L5143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5140-L5143) · [Before (L5140-L5143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5140-L5143)

```diff
-         const QU = (0, HU.g)(XU);
-         if (QU) return this.WN.mG.canCraft ? (PU.k.UY("toggleMenu", `inventory|${QU.name}`), "Enchanting Table" === QU.name && PU.k.UY("enchantingTable", {
-           yF: this.targetBlock,
-           position: this.QA
+         const SH = (0, NH.h)(BH);
+         if (SH) return this.bG.wT.canCraft ? (VH.k.AX("toggleMenu", `inventory|${SH.name}`), "Enchanting Table" === SH.name && VH.k.AX("enchantingTable", {
+           ph: this.targetBlock,
+           position: this.hh
```

#### 638. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5152` → after: `L5152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5152) · [Before (L5152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5152)

```diff
-         if ((0, aU.o)(XU)) return this.sendAltAction(BU.mf), {
+         if ((0, QH.o)(BH)) return this.sendAltAction(PH.If), {
```

#### 639. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5157` → after: `L5157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5157) · [Before (L5157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5157)

```diff
-         if (MU.b.beds.includes(XU)) return this.sendAltAction(BU.zf), {
+         if (RH.d.beds.includes(BH)) return this.sendAltAction(PH._f), {
```

#### 640. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5162` → after: `L5162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5162) · [Before (L5162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5162)

```diff
-         if (("Vending Machine" === XU || "_Vending Machine Top" === XU) && this.bloxd.getItemStat(this.WN.pM, this.targetBlock, "altActionable")) return this.sendAltAction(BU.zf), {
+         if (("Vending Machine" === BH || "_Vending Machine Top" === BH) && this.bloxd.getItemStat(this.bG.lF, this.targetBlock, "altActionable")) return this.sendAltAction(PH._f), {
```

#### 641. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5167` → after: `L5167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5167) · [Before (L5167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5167)

```diff
-         if ((0, vU.f)(XU) && this.bloxd.getItemStat(this.WN.pM, this.targetBlock, "altActionable")) return this.sendAltAction(BU.zf), {
+         if ((0, jH.e)(BH) && this.bloxd.getItemStat(this.bG.lF, this.targetBlock, "altActionable")) return this.sendAltAction(PH._f), {
```

#### 642. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5172` → after: `L5172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5172) · [Before (L5172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5172)

```diff
-         if ((0, DU.p)((0, DU.f)(this.targetBlock))) {
+         if ((0, CH.p)((0, CH.d)(this.targetBlock))) {
```

#### 643. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5175-L5176` → after: `L5175-L5176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5175-L5176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5175-L5176) · [Before (L5175-L5176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5175-L5176)

```diff
-           } = (0, tU.b)().swapDoorTypeOpenClosed(this.WN.pM, ...this.QA, this.targetBlock);
-           return UU || console.error("swapDoorTypeOpenClosed did not succeed but should always succeed on client"), this.sendAltAction(BU.pf), {
+           } = (0, WH.b)().swapDoorTypeOpenClosed(this.bG.lF, ...this.hh, this.targetBlock);
+           return HH || console.error("swapDoorTypeOpenClosed did not succeed but should always succeed on client"), this.sendAltAction(PH.Pf), {
```

#### 644. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5185-L5186` → after: `L5185-L5186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5185-L5186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5185-L5186) · [Before (L5185-L5186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5185-L5186)

```diff
-           if (null !== UU && UU < cU.f.bookshelfBookCount && "Book" === (null === (AU = this.jB) || void 0 === AU ? void 0 : AU.name)) {
-             this.WN.xG.gzU(this.WN.pM).setItemSlot(this.selectedSlot, "Air", null)
+           if (null !== HH && HH < AH.g.bookshelfBookCount && "Book" === (null === (hH = this.pU) || void 0 === hH ? void 0 : hH.name)) {
+             this.bG.pT.lLH(this.bG.lF).setItemSlot(this.selectedSlot, "Air", null)
```

#### 645. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5188` → after: `L5188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5188) · [Before (L5188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5188)

```diff
-           return this.sendAltAction(BU.if), {
+           return this.sendAltAction(PH.Ff), {
```

#### 646. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5195-L5197` → after: `L5195-L5197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5195-L5197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5195-L5197) · [Before (L5195-L5197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5195-L5197)

```diff
-           const UU = null === (FU = this.bloxd.blockDataOwner.getBlockData(...this.QA)) || void 0 === FU || null === (oU = FU.persisted) || void 0 === oU ? void 0 : oU.mail;
-           if (void 0 !== UU && UU < cU.f.mailboxBookCount && "Book" === (null === (NU = this.jB) || void 0 === NU ? void 0 : NU.name)) {
-             this.WN.xG.gzU(this.WN.pM).setItemSlot(this.selectedSlot, "Air", null)
+           const HH = null === (tH = this.bloxd.blockDataOwner.getBlockData(...this.hh)) || void 0 === tH || null === (zH = tH.persisted) || void 0 === zH ? void 0 : zH.mail;
+           if (void 0 !== HH && HH < AH.g.mailboxBookCount && "Book" === (null === (GH = this.pU) || void 0 === GH ? void 0 : GH.name)) {
+             this.bG.pT.lLH(this.bG.lF).setItemSlot(this.selectedSlot, "Air", null)
```

#### 647. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5199` → after: `L5199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5199) · [Before (L5199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5199)

```diff
-           return this.sendAltAction(BU.if), {
+           return this.sendAltAction(PH.Ff), {
```

#### 648. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5208` → after: `L5208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5208) · [Before (L5208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5208)

```diff
-         return "Cranberries_stage2" === UU ? (this.bloxd.Jw(...this.QA, (0, DU.j)("Cranberries_stage1")), this.sendAltAction(BU.tf), {
+         return "Cranberries_stage2" === HH ? (this.bloxd.oq(...this.hh, (0, CH.h)("Cranberries_stage1")), this.sendAltAction(PH.Vf), {
```

#### 649. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5211` → after: `L5211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5211) · [Before (L5211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5211)

```diff
-         }) : "Cotton_stage3" === UU ? (this.bloxd.Jw(...this.QA, (0, DU.j)("Cotton_stage2")), this.sendAltAction(BU.tf), {
+         }) : "Cotton_stage3" === HH ? (this.bloxd.oq(...this.hh, (0, CH.h)("Cotton_stage2")), this.sendAltAction(PH.Vf), {
```

#### 650. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5214` → after: `L5214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5214) · [Before (L5214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5214)

```diff
-         }) : this.targetBlock === (0, DU.j)("Chili Pepper Plant|FreshlyGrown") ? (this.bloxd.Jw(...this.QA, (0, DU.j)("Chili Pepper Plant_stage2")), this.sendAltAction(BU.tf), {
+         }) : this.targetBlock === (0, CH.h)("Chili Pepper Plant|FreshlyGrown") ? (this.bloxd.oq(...this.hh, (0, CH.h)("Chili Pepper Plant_stage2")), this.sendAltAction(PH.Vf), {
```

#### 651. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5217` → after: `L5217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5217) · [Before (L5217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5217)

```diff
-         }) : this.targetBlock === (0, DU.j)("Chili Pepper Plant|Lava|FreshlyGrown") ? (this.bloxd.Jw(...this.QA, (0, DU.j)("Chili Pepper Plant_stage2|Lava")), this.sendAltAction(BU.tf), {
+         }) : this.targetBlock === (0, CH.h)("Chili Pepper Plant|Lava|FreshlyGrown") ? (this.bloxd.oq(...this.hh, (0, CH.h)("Chili Pepper Plant_stage2|Lava")), this.sendAltAction(PH.Vf), {
```

#### 652. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5220` → after: `L5220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5220) · [Before (L5220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5220)

```diff
-         }) : this.targetBlock === (0, DU.j)("Corn Plant|FreshlyGrown") ? (this.bloxd.Jw(...this.QA, (0, DU.j)("Corn Plant_stage3")), this.sendAltAction(BU.tf), {
+         }) : this.targetBlock === (0, CH.h)("Corn Plant|FreshlyGrown") ? (this.bloxd.oq(...this.hh, (0, CH.h)("Corn Plant_stage3")), this.sendAltAction(PH.Vf), {
```

#### 653. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5227` → after: `L5227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5227) · [Before (L5227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5227)

```diff
-         if (this.jB) return AU.g.includes(this.jB.name) ? (this.sendConsumableAltAction(null), {
+         if (this.pU) return hH.i.includes(this.pU.name) ? (this.sendConsumableAltAction(null), {
```

#### 654. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5230` → after: `L5230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5230) · [Before (L5230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5230)

```diff
-         }) : null !== (UU = this.jB) && void 0 !== UU && UU.name.includes("Crossbow Charged") ? (this.sendConsumableAltAction(OU.e.replace(this.selectedSlot, this.jB.name, this.jB.name.split(" Charged")[0])), {
+         }) : null !== (HH = this.pU) && void 0 !== HH && HH.name.includes("Crossbow Charged") ? (this.sendConsumableAltAction(lH.b.replace(this.selectedSlot, this.pU.name, this.pU.name.split(" Charged")[0])), {
```

#### 655. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5236-L5237` → after: `L5236-L5237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5236-L5237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5236-L5237) · [Before (L5236-L5237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5236-L5237)

```diff
-         if (!this.jB) return;
-         const UU = (0, iU.d)(this.jB.name);
+         if (!this.pU) return;
+         const HH = (0, gH.b)(this.pU.name);
```

#### 656. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5240` → after: `L5240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5240) · [Before (L5240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5240)

```diff
-           return this.WN.xG.KXU(this.WN.pM).physicsState.type !== UU.physicsState.type && (this.bloxd.useConsumableVehicle(this.jB.name), XU = OU.e.remove(this.selectedSlot, 1, this.jB.name)), this.sendConsumableAltAction(XU), {
+           return this.bG.pT.ELH(this.bG.lF).physicsState.type !== HH.physicsState.type && (this.bloxd.useConsumableVehicle(this.pU.name), BH = lH.b.remove(this.selectedSlot, 1, this.pU.name)), this.sendConsumableAltAction(BH), {
```

#### 657. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5247` → after: `L5247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5247) · [Before (L5247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5247)

```diff
-         if (this.targetBlock) return (0, tU.b)().getItemStat(this.WN.pM, this.targetBlock, "altActionable") ? (this.sendAltAction(BU.zf), {
+         if (this.targetBlock) return (0, WH.b)().getItemStat(this.bG.lF, this.targetBlock, "altActionable") ? (this.sendAltAction(PH._f), {
```

#### 658. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5254` → after: `L5254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5254) · [Before (L5254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5254)

```diff
-         (0, GU.sendColyMessage)(BU.nf, {
+         (0, vH.sendColyMessage)(PH.Mf, {
```

#### 659. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5256` → after: `L5256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5256) · [Before (L5256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5256)

```diff
-           IA: XU
+           Yh: BH
```

#### 660. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5260` → after: `L5260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5260) · [Before (L5260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5260)

```diff
-         (0, GU.sendColyMessage)(UU, this.altActionPayload()), UU === BU.zf && this.triggerClientsideGameCallback()
+         (0, vH.sendColyMessage)(HH, this.altActionPayload()), HH === PH._f && this.triggerClientsideGameCallback()
```

#### 661. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5265` → after: `L5265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5265) · [Before (L5265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5265)

```diff
-           AU = null !== (UU = null !== (XU = null !== (zU = null !== VU.o && void 0 !== VU.o ? VU.o : sU.b) && void 0 !== zU ? zU : QU) && void 0 !== XU ? XU : nU.currentUrl.c) && void 0 !== UU ? UU : "0";
+           hH = null !== (HH = null !== (BH = null !== (LH = null !== nH.m && void 0 !== nH.m ? nH.m : FH.b) && void 0 !== LH ? LH : SH) && void 0 !== BH ? BH : DH.currentUrl.c) && void 0 !== HH ? HH : "0";
```

#### 662. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5267-L5271` → after: `L5267-L5271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5267-L5271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5267-L5271) · [Before (L5267-L5271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5267-L5271)

```diff
-           QA: null !== (cU = this.QA) && void 0 !== cU ? cU : null,
-           AA: this.hitEId,
-           FA: null !== (yU = this.WN.uXU) && void 0 !== yU ? yU : this.WN.camera.R_(),
-           oA: zX(this.bloxd, this.jB),
-           DA: AU
+           hh: null !== (AH = this.hh) && void 0 !== AH ? AH : null,
+           zh: this.hitEId,
+           Ch: null !== (rH = this.bG.pBH) && void 0 !== rH ? rH : this.bG.camera.T_(),
+           Eh: LB(this.bloxd, this.pU),
+           Xh: hH
```

#### 663. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5276` → after: `L5276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5276) · [Before (L5276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5276)

```diff
-         this.bloxd.client.triggerGameCallback("onPlayerAltAction", this.WN.pM, null === (UU = this.QA) || void 0 === UU ? void 0 : UU[0], null === (XU = this.QA) || void 0 === XU ? void 0 : XU[1], null === (zU = this.QA) || void 0 === zU ? void 0 : zU[2], this.targetBlock ? (0, D … [truncated]
+         this.bloxd.client.triggerGameCallback("onPlayerAltAction", this.bG.lF, null === (HH = this.hh) || void 0 === HH ? void 0 : HH[0], null === (BH = this.hh) || void 0 === BH ? void 0 : BH[1], null === (LH = this.hh) || void 0 === LH ? void 0 : LH[2], this.targetBlock ? (0, C … [truncated]
```

#### 664. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5280` → after: `L5280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5280) · [Before (L5280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5280)

```diff
-     const cX = ["length", 0, 44, 4, 61, "e", 1, "a", 2, 3, 199, 233, 6, null, 5, 7, "b", 60, "=", ";", 39, 42, 222, 19, 110];
+     const AB = ["length", 0, 1, 2, 3, 8, 16, "gNEhnz", 512, "a", "012345", "d", "c", 15, 186, 100, 4, "b", 46, 6, "e", 1023, 63, 128, 12, 255, 196, 32, 5, 24, 7, 18, 10, 19, 64, 65535, 53, 172, 192, 125, null, 180, "f", 9, "k", 79, 60, "/", !1];
```

#### 665. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5287-L5300` → after: `L5287-L5325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5287-L5325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5287-L5325) · [Before (L5287-L5300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5287-L5300)

```diff
-     "BYcfXF" in yX && function(...UU) {
-       UU[cX[0]] = cX[1]
-     }(), ((...UU) => {
-       QX(UU[cX[0]] = cX[1], UU[-cX[21]] = cX[1], zX = (...XU) => {
-         if (QX(XU[cX[0]] = cX[8], XU[cX[8]] = XU[cX[1]].getItemId(XU[cX[6]] === cX[13] || void 0 === XU[cX[6]] ? void 0 : XU[cX[6]].name), XU[cX[8]] = XU[cX[8]] << cX[9]), (0, GU.isInitSendColyMessage)(GU.sendColyMessage)) {
-           function zU(...UU) {
-             QX(UU[cX[0]] = cX[1], UU[cX[16]] = function(...XU) {
-               return QX(XU[cX[0]] = cX[8], XU[cX[10]] = [], XU[cX[9]] = XU[cX[1]].length, XU[cX[1]].sort(((UU, XU) => UU - XU)), UU[cX[11]](XU[cX[10]], [], cX[1], XU[cX[9]], XU[cX[1]], XU[cX[6]])), XU[cX[10]]
-             }, UU[cX[11]] = function(...XU) {
-               if (QX(XU[cX[0]] = cX[12], XU[cX[12]] = cX[13]), !(XU[cX[14]] < cX[1])) {
-                 if (XU[cX[14]] === cX[1]) return XU[cX[1]].push(XU[cX[6]]);
-                 for (XU[cX[15]] = XU[cX[8]]; XU[cX[15]] < XU[cX[9]] && !(XU[cX[3]][XU[cX[15]]] > XU[cX[14]]); XU[cX[15]]++) XU[cX[15]] > XU[cX[8]] && XU[cX[3]][XU[cX[15]]] === XU[cX[3]][XU[cX[15]] - cX[6]] || QX(XU[cX[12]] = Array.from(XU[cX[6]]), XU[cX[12]].push(XU[cX[3]][XU[cX[ … [truncated]
-               }
-             }, console.log(UU[cX[16]]))
+     "P500vK" in rB && function(...HH) {
+       SB(HH[AB[0]] = AB[1], HH[AB[37]] = function(...HH) {
+         function BH(...HH) {
+           return HH[AB[0]] = AB[2], tH(SH(EH(HH[AB[1]])))
+         }
+ 
+         function LH(...HH) {
+           return HH[AB[0]] = AB[3], tH(hH(EH(HH[AB[1]]), EH(HH[AB[2]])))
+         }
+ 
+         function AH(...HH) {
+           return HH[AB[0]] = AB[3], zH(hH(EH(HH[AB[1]]), EH(HH[AB[2]])))
+         }
+ 
+         function rH(...HH) {
+           return HH[AB[0]] = AB[4], CH(hH(EH(HH[AB[1]]), EH(HH[AB[2]])), HH[AB[3]])
+ ... (23 more added lines; see GitHub link above)
```

#### 666. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5302-L5304` → after: `L5327-L5435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5327-L5435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5327-L5435) · [Before (L5302-L5304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5302-L5304)

```diff
-           if ("iPkD96s" in yX && zU(), WU.g) {
-             function cU(...UU) {
-               UU[cX[0]] = cX[1]
+           for (SB(BH[AB[2]] = HH[AB[9]] ? AB[10] + "6789ABCDEF" : AB[10] + "6789abcdef", BH[AB[3]] = "", BH[AB[12]] = void 0), BH[AB[11]] = AB[1]; BH[AB[11]] < BH[AB[1]].length; BH[AB[11]]++) SB(BH[AB[12]] = BH[AB[1]].charCodeAt(BH[AB[11]]), BH[AB[3]] += BH[AB[2]].charAt(BH[AB[12 … [truncated]
+           return BH[AB[3]]
+         }
+ 
+         function zH(...BH) {
+           BH[AB[0]] = AB[2];
+           try {
+             HH[AB[2]]
+           } catch (LH) {
+             HH[AB[2]] = ""
+           }
+           for (SB(BH[AB[2]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+" + AB[47], BH[AB[17]] = "", BH[-AB[14]] = BH[AB[1]].length), BH[AB[11]] = AB[1]; BH[AB[11]] < BH[-AB[14]]; BH[AB[11]] += AB[4])
+             for (BH[AB[18]] = BH[AB[1]].charCodeAt(BH[AB[11]]) << AB[6] | (BH[AB[11]] + AB[2] < BH[-AB[14]] ? BH[AB[1]].charCodeAt(BH[AB[11]] + AB[2]) << AB[5] : AB[1]) | (BH[AB[11]] + AB[3] < BH[-AB[14]] ? BH[AB[1]].charCodeAt(BH[AB[11]] + AB[3]) : AB[1]), BH[AB[15]] = AB[1]; BH … [truncated]
+           return BH[AB[17]]
+         }
+ 
+ ... (93 more added lines; see GitHub link above)
```

#### 667. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5306-L5318` → after: `L5437-L5449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5437-L5449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5437-L5449) · [Before (L5306-L5318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5306-L5318)

```diff
-             "MlzXVy" in yX && cU(), XU[cX[8]] = XU[cX[8]] | cX[3]
-           } else if (GU.butto) XU[cX[8]] = XU[cX[8]] | cX[14];
-           else if (UU[-cX[21]]++ === cX[3]) QX(UU[-cX[21]] = cX[1], XU[cX[8]] = XU[cX[8]] | cX[8]);
-           else {
-             function yU(...UU) {
-               QX(UU[cX[0]] = cX[1], UU[cX[21]] = function(...XU) {
-                 return QX(XU[cX[0]] = cX[8], XU[cX[22]] = [], XU[cX[9]] = XU[cX[1]].length, XU[cX[1]].sort(((UU, XU) => UU - XU)), UU[cX[23]](XU[cX[22]], [], cX[1], XU[cX[9]], XU[cX[1]], XU[cX[6]])), XU[cX[22]]
-               }, UU[cX[23]] = function(...XU) {
-                 if (QX(XU[cX[0]] = cX[12], XU[cX[12]] = cX[13]), !(XU[cX[14]] < cX[1])) {
-                   if (XU[cX[14]] === cX[1]) return XU[cX[1]].push(XU[cX[6]]);
-                   for (XU[cX[24]] = XU[cX[8]]; XU[cX[24]] < XU[cX[9]] && !(XU[cX[3]][XU[cX[24]]] > XU[cX[14]]); XU[cX[24]]++) XU[cX[24]] > XU[cX[8]] && XU[cX[3]][XU[cX[24]]] === XU[cX[3]][XU[cX[24]] - cX[6]] || QX(XU[cX[12]] = Array.from(XU[cX[6]]), XU[cX[12]].push(XU[cX[3]][XU[c … [truncated]
-                 }
-               }, console.log(UU[cX[21]]))
+           }, console.log(HH[AB[39]]))
+         }();
+         let AH = BH.getItemId(LH === AB[40] || void 0 === LH ? void 0 : LH.name);
+         if (AH <<= AB[4], (0, vH.isInitSendColyMessage)(vH.sendColyMessage))
+           if (OH[AB[11]]) {
+             function rH() {
+               console.log((function(...HH) {
+                 if (SB(HH[AB[0]] = AB[2], HH[-AB[41]] = HH[AB[1]].length), HH[-AB[41]] < AB[3]) return AB[1];
+                 if (SB(HH[AB[3]] = Math.max(...HH[AB[1]]), HH[AB[12]] = Math.min(...HH[AB[1]])), HH[AB[3]] === HH[AB[12]]) return AB[1];
+                 for (SB(HH[AB[16]] = Array(HH[-AB[41]] - AB[2]).fill(Number.MAX_SAFE_INTEGER), HH[AB[20]] = Array(HH[-AB[41]] - AB[2]).fill(Number.MIN_SAFE_INTEGER), HH[AB[42]] = Math.ceil((HH[AB[3]] - HH[AB[12]]) / (HH[-AB[41]] - AB[2])), HH[AB[30]] = AB[1]), HH[AB[5]] = AB[1];  … [truncated]
+                 for (SB(HH[AB[43]] = Number.MIN_SAFE_INTEGER, HH[AB[45]] = HH[AB[12]]), HH[AB[44]] = AB[1]; HH[AB[44]] < HH[-AB[41]] - AB[2]; HH[AB[44]]++) HH[AB[16]][HH[AB[44]]] === Number.MAX_SAFE_INTEGER && HH[AB[20]][HH[AB[44]]] === Number.MIN_SAFE_INTEGER || SB(HH[AB[43]] =  … [truncated]
+                 return HH[AB[43]] = Math.max(HH[AB[43]], HH[AB[3]] - HH[AB[45]]), HH[AB[43]]
+               }))
```

#### 668. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5320` → after: `L5451-L5455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5451-L5455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5451-L5455) · [Before (L5320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5320)

```diff
-             "jPc4XZ" in yX && yU(), XU[cX[8]] = XU[cX[8]] | cX[9]
+             "G6pJJ6" in rB && rH(), AH |= AB[16]
+           } else if (vH.butto) AH |= AB[28];
+         else if (HH[-AB[38]]++ === AB[16]) {
+           function SH(...HH) {
+             HH[AB[0]] = AB[1]
```

#### 669. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5322-L5323` → after: `L5457-L5470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5457-L5470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5457-L5470) · [Before (L5322-L5323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5322-L5323)

```diff
-         } else XU[cX[8]] = XU[cX[8]] | cX[6];
-         return XU[cX[8]]
+           "KFa02Z9" in rB && SH(), SB(HH[-AB[38]] = AB[1], AH |= AB[3])
+         } else {
+           "lv7I_r" in rB && (module.exports = async (HH = () => {
+             throw new Error("No redacted path provided")
+           }) => {
+             const BH = new Set(process.argv.slice(AB[3]));
+             if (!BH.has("--version")) {
+               if (BH.size !== AB[2]) return AB[48];
+               if (!BH.has("-v")) return AB[48]
+             }
+             return await (async () => void 0 === await HH() ? " (local)" : "")(), !0
+           }), AH |= AB[4]
+         } else AH |= AB[2];
+         return AH
```

#### 670. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5327` → after: `L5474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5474) · [Before (L5327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5327)

```diff
-   38767: (UU, XU, zU) => {
+   38891: (HH, BH, LH) => {
```

#### 671. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5329` → after: `L5476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5476) · [Before (L5329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5329)

```diff
-       e: () => cU
+       c: () => AH
```

#### 672. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5335` → after: `L5482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5482) · [Before (L5335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5335)

```diff
-   38760: (UU, XU, zU) => {
+   38886: (HH, BH, LH) => {
```

#### 673. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5337` → after: `L5484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5484) · [Before (L5337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5337)

```diff
-       b: () => GU
+       e: () => MH
```

#### 674. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5339` → after: `L5486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5486) · [Before (L5339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5339)

```diff
-     var cU = zU(352),
+     var AH = LH(330),
```

#### 675. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5341-L5351` → after: `L5488-L5496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5488-L5496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5488-L5496) · [Before (L5341-L5351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5341-L5351)

```diff
-       QU = zU(38767),
-       AU = zU(3043),
-       FU = zU(4063),
-       oU = zU(38339),
-       DU = zU(4139),
-       EU = zU(212),
-       YU = zU(37919),
-       NU = zU(37814),
-       IU = zU(37915),
-       pU = zU(38775),
-       aU = zU(38647);
+       SH = LH(38891),
+       hH = LH(3038),
+       tH = (LH(4061), LH(38453)),
+       zH = (LH(4113), LH(176)),
+       CH = LH(38071),
+       EH = LH(37961),
+       XH = LH(38067),
+       GH = LH(38900),
+       YH = LH(38785);
```

#### 676. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5357` → after: `L5502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5502) · [Before (L5357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5357)

```diff
-         this.WN = void 0, this._playerEId = void 0, this.entityRayStart = [0, 0, 0], this.entityRayOrigin = new NU.Sp, this.entityRayDirection = new NU.Sp, this.entityRay = new IU.f(this.entityRayOrigin, this.entityRayDirection), this.entityHitEId = null, this.WN = UU, this._play … [truncated]
+         this.bG = void 0, this._playerEId = void 0, this.entityRayStart = [0, 0, 0], this.entityRayOrigin = new EH.lu, this.entityRayDirection = new EH.lu, this.entityRay = new XH.g(this.entityRayOrigin, this.entityRayDirection), this.entityHitEId = null, this.bG = HH, this._play … [truncated]
```

#### 677. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5361-L5362` → after: `L5506-L5507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5506-L5507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5506-L5507) · [Before (L5361-L5362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5361-L5362)

```diff
-         const zU = this.doPickAction(null !== (XU = this.WN.uXU) && void 0 !== XU ? XU : this.WN.camera.R_(), UU);
-         return this._attackWasBlocked(zU) && zU.localHitPosition && zU.JV ? {
+         const LH = this.doPickAction(null !== (BH = this.bG.pBH) && void 0 !== BH ? BH : this.bG.camera.T_(), HH);
+         return this._attackWasBlocked(LH) && LH.localHitPosition && LH.Kw ? {
```

#### 678. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5364` → after: `L5509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5509) · [Before (L5364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5364)

```diff
-           normal: zU.JV
+           normal: LH.Kw
```

#### 679. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5370` → after: `L5515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5515) · [Before (L5370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5370)

```diff
-           QU = cU.FzU(cU.getLifeformEyePos(this._playerEId, !1)),
+           SH = AH.TLH(AH.getLifeformEyePos(this._playerEId, !1)),
```

#### 680. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5374` → after: `L5519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5519) · [Before (L5374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5374)

```diff
-           const zU = this._tryDoPick(oU, UU, XU, FU ? tU : null),
+           const LH = this._tryDoPick(zH, HH, BH, tH ? uH : null),
```

#### 681. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5377` → after: `L5522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5522) · [Before (L5377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5377)

```diff
-           zU.localHitPosition ? AU = zU.localHitPosition : (yU().normalize(UU, UU), AU = yU().create(), yU().gp(AU, oU, UU, 1e3)), yU().subtract(cU, AU, QU), yU().normalize(cU, cU);
+           LH.localHitPosition ? hH = LH.localHitPosition : (rH().normalize(HH, HH), hH = rH().create(), rH().nY(hH, zH, HH, 1e3)), rH().subtract(AH, hH, SH), rH().normalize(AH, AH);
```

#### 682. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5379` → after: `L5524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5524) · [Before (L5379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5379)

```diff
-             ...this._tryDoPick(QU, cU, XU, FU ? gU : null),
+             ...this._tryDoPick(SH, AH, BH, tH ? QH : null),
```

#### 683. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5383` → after: `L5528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5528) · [Before (L5383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5383)

```diff
-         return this._tryDoPick(QU, UU, XU, FU ? gU : null)
+         return this._tryDoPick(SH, HH, BH, tH ? QH : null)
```

#### 684. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5387` → after: `L5532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5532) · [Before (L5387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5387)

```diff
-           cU = zU.FzU(zU.getLifeformEyePos(this._playerEId, !1)),
+           AH = LH.TLH(LH.getLifeformEyePos(this._playerEId, !1)),
```

#### 685. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5389-L5392` → after: `L5534-L5537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5534-L5537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5534-L5537) · [Before (L5389-L5392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5389-L5392)

```diff
-           oU = null !== FU && void 0 !== FU ? FU : cU,
-           DU = this._tryDoPick(oU, UU, XU + (FU ? yU().OD(FU, cU) : 0));
-         if (DU.hitResult !== QU.e.HIT_ENTITY) return null;
-         const EU = yU().OD(DU.localHitPosition, cU);
+           zH = null !== tH && void 0 !== tH ? tH : AH,
+           CH = this._tryDoPick(zH, HH, BH + (tH ? rH().Ot(tH, AH) : 0));
+         if (CH.hitResult !== SH.c.HIT_ENTITY) return null;
+         const EH = rH().Ot(CH.localHitPosition, AH);
```

#### 686. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5400-L5402` → after: `L5545-L5547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5545-L5547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5545-L5547) · [Before (L5400-L5402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5400-L5402)

```diff
-         if (this._playerEId !== this.WN.pM || 0 === this.WN.camera.pT) return null;
-         const zU = null !== (UU = null === (XU = this.WN.WY.LcU()) || void 0 === XU ? void 0 : XU.eye) && void 0 !== UU ? UU : this.WN.WY.camera.globalPosition.cyU();
-         return yU().pp(zU[0], zU[1], zU[2])
+         if (this._playerEId !== this.bG.lF || 0 === this.bG.camera.O4) return null;
+         const LH = null !== (HH = null === (BH = this.bG.mX.FAH()) || void 0 === BH ? void 0 : BH.eye) && void 0 !== HH ? HH : this.bG.mX.camera.globalPosition.xrH();
+         return rH().nX(LH[0], LH[1], LH[2])
```

#### 687. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5413` → after: `L5558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5558) · [Before (L5413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5413)

```diff
-               ...this._tryDoPick(UU.localOrigin, XU, zU, !0 === cU.visualiseRaycasts ? gU : null), localRayOrigin: UU.localOrigin, globalRayOrigin: UU.globalOrigin
+               ...this._tryDoPick(HH.localOrigin, BH, LH, !0 === AH.visualiseRaycasts ? QH : null), localRayOrigin: HH.localOrigin, globalRayOrigin: HH.globalOrigin
```

#### 688. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5418-L5421` → after: `L5563-L5566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5563-L5566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5563-L5566) · [Before (L5418-L5421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5418-L5421)

```diff
-         if (this._playerEId === this.WN.pM && this.WN.camera.XT < .01) return this.getDefaultWeaponRay();
-         if (!this.WN.xG.VFU(this._playerEId)) return null;
-         const UU = this.WN.xG.DzU(this._playerEId),
-           XU = null === UU || void 0 === UU ? void 0 : UU.YH;
+         if (this._playerEId === this.bG.lF && this.bG.camera.W4 < .01) return this.getDefaultWeaponRay();
+         if (!this.bG.pT.LzH(this._playerEId)) return null;
+         const HH = this.bG.pT.VLH(this._playerEId),
+           BH = null === HH || void 0 === HH ? void 0 : HH.kR;
```

#### 689. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5423` → after: `L5568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5568) · [Before (L5423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5423)

```diff
-         const zU = this.WN.WY.DH;
+         const LH = this.bG.mX.bR;
```

#### 690. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5429` → after: `L5574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5574) · [Before (L5429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5429)

```diff
-           FU = NU.Sp.TransformNormal(new NU.Sp(0, 0, 1), QU);
+           tH = EH.lu.TransformNormal(new EH.lu(0, 0, 1), SH);
```

#### 691. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5434` → after: `L5579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5579) · [Before (L5434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5434)

```diff
-         return this.WN.N_(oU, DU), {
+         return this.bG.M_(zH, CH), {
```

#### 692. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5445` → after: `L5590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5590) · [Before (L5445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5445)

```diff
-             return null !== (XU = this.getHeadRay()) && void 0 !== XU ? XU : this.getDefaultWeaponRay();
+             return null !== (BH = this.getHeadRay()) && void 0 !== BH ? BH : this.getDefaultWeaponRay();
```

#### 693. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5454` → after: `L5599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5599) · [Before (L5454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5454)

```diff
-           localOrigin: UU.FzU(XU),
+           localOrigin: HH.TLH(BH),
```

#### 694. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5456` → after: `L5601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5601) · [Before (L5456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5456)

```diff
-           direction: oU.e.copyAimDirection(this.WN, [0, 0, 0]),
+           direction: tH.b.copyAimDirection(this.bG, [0, 0, 0]),
```

#### 695. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5466` → after: `L5611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5611) · [Before (L5466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5466)

```diff
-           JV: AU,
+           Kw: hH,
```

#### 696. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5468-L5469` → after: `L5613-L5614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5613-L5614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5613-L5614) · [Before (L5468-L5469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5468-L5469)

```diff
-         } = this.doPickAction(UU, EU.f.entityInteractReach);
-         return XU === QU.e.HIT_ENTITY ? zU : null
+         } = this.doPickAction(HH, zH.g.entityInteractReach);
+         return BH === SH.c.HIT_ENTITY ? LH : null
```

#### 697. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5473-L5474` → after: `L5618-L5619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5618-L5619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5618-L5619) · [Before (L5473-L5474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5473-L5474)

```diff
-         const QU = null !== (cU = null === (yU = this.WN.xG.azU(this._playerEId)) || void 0 === yU ? void 0 : yU.ridingVehicleEId) && void 0 !== cU ? cU : null,
-           AU = this.WN.FzU(UU, null, this.entityRayStart);
+         const SH = null !== (AH = null === (rH = this.bG.pT.ILH(this._playerEId)) || void 0 === rH ? void 0 : rH.ridingVehicleEId) && void 0 !== AH ? AH : null,
+           hH = this.bG.TLH(HH, null, this.entityRayStart);
```

#### 698. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5495` → after: `L5640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5640) · [Before (L5495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5495)

```diff
-         const yU = (0, pU.e)(this.WN.WY, this.entityRay),
+         const rH = (0, GH.b)(this.bG.mX, this.entityRay),
```

#### 699. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5497` → after: `L5642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5642) · [Before (L5497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5497)

```diff
-           AU = this.WN.WY.DH.DI(this.entityRayOrigin, this.entityRayDirection, null !== QU && void 0 !== QU ? QU : UU);
+           hH = this.bG.mX.bR.XY(this.entityRayOrigin, this.entityRayDirection, null !== SH && void 0 !== SH ? SH : HH);
```

#### 700. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5499` → after: `L5644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5644) · [Before (L5499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5499)

```diff
-         const FU = null !== (XU = null === yU || void 0 === yU || null === (zU = yU.pickedMesh) || void 0 === zU || null === (cU = zU.metadata) || void 0 === cU ? void 0 : cU.eId) && void 0 !== XU ? XU : null;
+         const tH = null !== (BH = null === rH || void 0 === rH || null === (LH = rH.pickedMesh) || void 0 === LH || null === (AH = LH.metadata) || void 0 === AH ? void 0 : AH.eId) && void 0 !== BH ? BH : null;
```

#### 701. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5518-L5519` → after: `L5663-L5664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5663-L5664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5663-L5664) · [Before (L5518-L5519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5518-L5519)

```diff
-         const zU = null !== (UU = null === (XU = this.WN.xG.DzU(this._playerEId)) || void 0 === XU ? void 0 : XU.YH) && void 0 !== UU ? UU : null,
-           cU = this.WN.WY.DH;
+         const LH = null !== (HH = null === (BH = this.bG.pT.VLH(this._playerEId)) || void 0 === BH ? void 0 : BH.kR) && void 0 !== HH ? HH : null,
+           AH = this.bG.mX.bR;
```

#### 702. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5523` → after: `L5668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5668) · [Before (L5523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5523)

```diff
-         null !== UU && this.WN.WY.DH.setPickable(UU, !0)
+         null !== HH && this.bG.mX.bR.setPickable(HH, !0)
```

#### 703. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5527` → after: `L5672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5672) · [Before (L5527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5527)

```diff
-           AU = cU ? yU().OD(UU, cU.JXU) : zU,
+           hH = AH ? rH().Ot(HH, AH.zLH) : LH,
```

#### 704. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5533` → after: `L5678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5678) · [Before (L5533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5533)

```diff
-           EU = null !== oU ? yU().pp(FU.pickedPoint.x, FU.pickedPoint.y, FU.pickedPoint.z) : null,
+           EH = null !== zH ? rH().nX(tH.pickedPoint.x, tH.pickedPoint.y, tH.pickedPoint.z) : null,
```

#### 705. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5535` → after: `L5680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5680) · [Before (L5535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5535)

```diff
-         null !== EU && DU.WN.N_(EU, YU);
+         null !== EH && CH.bG.M_(EH, XH);
```

#### 706. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5538` → after: `L5683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5683) · [Before (L5538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5538)

```diff
-           const UU = yU().pp(FU.pickedPoint.x, FU.pickedPoint.y, FU.pickedPoint.z),
+           const HH = rH().nX(tH.pickedPoint.x, tH.pickedPoint.y, tH.pickedPoint.z),
```

#### 707. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5540` → after: `L5685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5685) · [Before (L5540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5540)

```diff
-           DU.WN.N_(UU, zU);
+           CH.bG.M_(HH, LH);
```

#### 708. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5543` → after: `L5688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5688) · [Before (L5543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5543)

```diff
-             hitResult: QU.e.HIT_ENTITY,
+             hitResult: SH.c.HIT_ENTITY,
```

#### 709. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5547` → after: `L5692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5692) · [Before (L5547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5547)

```diff
-             JV: cU,
+             Kw: AH,
```

#### 710. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5553` → after: `L5698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5698) · [Before (L5553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5553)

```diff
-           yU().copy(XU, cU.JXU);
+           rH().copy(BH, AH.zLH);
```

#### 711. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5558-L5559` → after: `L5703-L5704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5703-L5704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5703-L5704) · [Before (L5558-L5559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5558-L5559)

```diff
-             hitResult: QU.e.HIT_BLOCK,
-             distanceTravelled: yU().OD(UU, cU.JXU),
+             hitResult: SH.c.HIT_BLOCK,
+             distanceTravelled: rH().Ot(HH, AH.zLH),
```

#### 712. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5562` → after: `L5707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5707) · [Before (L5562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5562)

```diff
-             JV: AU,
+             Kw: hH,
```

#### 713. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5567` → after: `L5712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5712) · [Before (L5567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5567)

```diff
-           hitResult: QU.e.HIT_NOTHING,
+           hitResult: SH.c.HIT_NOTHING,
```

#### 714. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5571` → after: `L5716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5716) · [Before (L5571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5571)

```diff
-           JV: null,
+           Kw: null,
```

#### 715. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5578-L5583` → after: `L5723-L5728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5723-L5728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5723-L5728) · [Before (L5578-L5583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5578-L5583)

```diff
-         const FU = new NU.Sp(UU[0], UU[1], UU[2]),
-           oU = new NU.Sp(XU[0], XU[1], XU[2]),
-           DU = new IU.f(FU, oU, zU),
-           EU = (0, pU.e)(this.WN.WY, DU),
-           YU = null !== (cU = null === (yU = EU.pickedMesh) || void 0 === yU || null === (QU = yU.metadata) || void 0 === QU ? void 0 : QU.eId) && void 0 !== cU ? cU : null,
-           aU = this.WN.WY.DH.DI(FU, oU, null !== (AU = null !== EU && void 0 !== EU && EU.hit ? EU.distance : null) && void 0 !== AU ? AU : zU);
+         const tH = new EH.lu(HH[0], HH[1], HH[2]),
+           zH = new EH.lu(BH[0], BH[1], BH[2]),
+           CH = new XH.g(tH, zH, LH),
+           YH = (0, GH.b)(this.bG.mX, CH),
+           uH = null !== (AH = null === (rH = YH.pickedMesh) || void 0 === rH || null === (SH = rH.metadata) || void 0 === SH ? void 0 : SH.eId) && void 0 !== AH ? AH : null,
+           QH = this.bG.mX.bR.XY(tH, zH, null !== (hH = null !== YH && void 0 !== YH && YH.hit ? YH.distance : null) && void 0 !== hH ? hH : LH);
```

#### 716. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5590-L5591` → after: `L5735-L5736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5735-L5736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5735-L5736) · [Before (L5590-L5591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5590-L5591)

```diff
-         const cU = this.WN.qY;
-         return this.WN.Ix(UU, XU, zU, ((UU, XU, zU, yU) => cU.mJ(XU, zU, yU)))
+         const AH = this.bG.cX;
+         return this.bG.MJ(HH, BH, LH, ((HH, BH, LH, rH) => AH.Ay(BH, LH, rH)))
```

#### 717. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5598-L5599` → after: `L5743-L5744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5743-L5744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5743-L5744) · [Before (L5598-L5599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5598-L5599)

```diff
-         const yU = new NU.Sp(UU[0], UU[1], UU[2]),
-           QU = new NU.Sp(XU[0], XU[1], XU[2]);
+         const rH = new EH.lu(HH[0], HH[1], HH[2]),
+           SH = new EH.lu(BH[0], BH[1], BH[2]);
```

#### 718. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5603-L5604` → after: `L5748-L5749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5748-L5749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5748-L5749) · [Before (L5603-L5604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5603-L5604)

```diff
-           FU = (0, aU.h)(this.WN.WY, "gunRaycastTrace_" + kU++, {
-             positions: [...yU.cyU(), ...AU.cyU()],
+           tH = (0, YH.h)(this.bG.mX, "gunRaycastTrace_" + WH++, {
+             positions: [...rH.xrH(), ...hH.xrH()],
```

#### 719. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5607-L5608` → after: `L5752-L5753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5752-L5753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5752-L5753) · [Before (L5607-L5608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5607-L5608)

```diff
-         FU.color = cU, FU.Op = !0, FU.ma = !1, this.WN.WY.xa(FU, !1, this.WN.VN), setTimeout((() => {
-           FU.oR() || FU.dispose()
+         tH.color = AH, tH.fu = !0, tH.jQ = !1, this.bG.mX.FQ(tH, !1, this.bG.DG), setTimeout((() => {
+           tH.mV() || tH.dispose()
```

#### 720. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5613` → after: `L5758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5758) · [Before (L5613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5613)

```diff
-     const wU = [2, 0, 1, 8, 3, 150, 95, 7, 5, 6, 4, 255, "length", 60, 178, "a", "undefined", 188, 63, "fromCodePoint", 12, "push", 191, 138, 67, "h", "i", "g", 91, 121, 8191, 88, 13, 14, !1, !0, "c", 227, 130, 244, 129, 238, null, 10];
+     const mH = ["b", 0, 1, "h", 3, 159, 9, "g", "e", 6, "d", 8, 255, "length", "c", 141, 121, 4, "undefined", "a", void 0, 97, 39, 63, "fromCodePoint", 7, 12, "push", 91, 8191, 88, 13, 14, 33554432, 67108864, 2, 79, "f"];
```

#### 721. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5616-L5619` → after: `L5761-L5764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5761-L5764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5761-L5764) · [Before (L5616-L5619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5616-L5619)

```diff
-       return UU[wU[12]] = wU[2], typeof BU[UU[wU[1]]] === wU[16] ? BU[UU[wU[1]]] = function(...UU) {
-         for (rU(UU[wU[12]] = wU[2], UU[wU[5]] = 'CzeF_H0X9&g?PnfS!k(N~8W:]bu,l={.>1wO%iQYJE`^aLA;/@xyV"3s*o+)|[d4p}Rh$67#2<KvT5GmjMcqtrIBZUD', UU[wU[0]] = "" + (UU[wU[1]] || ""), UU[wU[4]] = UU[wU[0]].length, UU[wU[10]] = [], UU[wU[8]] = wU[1], UU[wU[9]] = wU[1], UU[wU[7]] = -wU[ … [truncated]
-           if (UU[-wU[6]] = UU[wU[5]].indexOf(UU[wU[0]][UU[wU[3]]]), UU[-wU[6]] !== -wU[2])
-             if (UU[wU[7]] < wU[1]) UU[wU[7]] = UU[-wU[6]];
+       return HH[mH[13]] = mH[2], typeof xH[HH[mH[1]]] === mH[18] ? xH[HH[mH[1]]] = function(...HH) {
+         for (lH(HH[mH[13]] = mH[2], HH[mH[5]] = ')tHrMnGDKfUqekFbC]c8mxBIL.h"y3w{PsjQ4`z&+>[@|ap0To%96WYRSl(7=J*EVgZui_~^?A1}N:$dO<5X2/#!;v,', HH[mH[0]] = "" + (HH[mH[1]] || ""), HH[mH[4]] = HH[mH[0]].length, HH[mH[10]] = [], HH[mH[8]] = mH[1], HH[mH[9]] = mH[1], HH[mH[7]] = -mH[ … [truncated]
+           if (HH[mH[6]] = HH[mH[5]].indexOf(HH[mH[0]][HH[mH[3]]]), HH[mH[6]] !== -mH[2])
+             if (HH[mH[7]] < mH[1]) HH[mH[7]] = HH[mH[6]];
```

#### 722. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5621` → after: `L5766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5766) · [Before (L5621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5621)

```diff
-               rU(UU[wU[7]] += UU[-wU[6]] * wU[28], UU[wU[8]] |= UU[wU[7]] << UU[wU[9]], UU[wU[9]] += (UU[wU[7]] & wU[30]) > wU[31] ? wU[32] : wU[33]);
+               lH(HH[mH[7]] += HH[mH[6]] * mH[28], HH[mH[8]] |= HH[mH[7]] << HH[mH[9]], HH[mH[9]] += (HH[mH[7]] & mH[29]) > mH[30] ? mH[31] : mH[32]);
```

#### 723. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5623-L5624` → after: `L5768-L5769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5768-L5769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5768-L5769) · [Before (L5623-L5624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5623-L5624)

```diff
-                 rU(UU[wU[10]].push(UU[wU[8]] & wU[11]), UU[wU[8]] >>= wU[3], UU[wU[9]] -= wU[3])
-               } while (UU[wU[9]] > wU[7]);
+                 lH(HH[mH[10]].push(HH[mH[8]] & mH[12]), HH[mH[8]] >>= mH[11], HH[mH[9]] -= mH[11])
+               } while (HH[mH[9]] > mH[25]);
```

#### 724. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5626` → after: `L5771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5771) · [Before (L5626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5626)

```diff
-             } return UU[wU[7]] > -wU[2] && UU[wU[10]].push((UU[wU[8]] | UU[wU[7]] << UU[wU[9]]) & wU[11]), OU(UU[wU[10]])
+             } return HH[mH[7]] > -mH[2] && HH[mH[10]].push((HH[mH[8]] | HH[mH[7]] << HH[mH[9]]) & mH[12]), IH(HH[mH[10]])
```

#### 725. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5630-L5631` → after: `L5775-L5776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5775-L5776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5775-L5776) · [Before (L5630-L5631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5630-L5631)

```diff
-     function OU(UU) {
-       return typeof PU !== wU[16] && PU ? (new PU).decode(new WU(UU)) : typeof dU !== wU[16] && dU ? dU.from(UU).toString("utf-8") : CU(UU)
+     function IH(...HH) {
+       return HH[mH[13]] = mH[2], typeof TH !== mH[18] && TH ? (new TH).decode(new UH(HH[mH[1]])) : typeof VH !== mH[18] && VH ? VH.from(HH[mH[1]]).toString("utf-8") : kH(HH[mH[1]])
```

#### 726. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5639-L5640` → after: `L5784-L5785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5784-L5785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5784-L5785) · [Before (L5639-L5640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5639-L5640)

```diff
-     rU(BU = {}, ZU = ["Tkk{*AuVJn1d2S?~Q$s&{;NM?}$_o_", 'lJ9{<m_{G"2WOe,`r7.&3+>]G9"bt;ju*F0T(', "1J!0AjC", 'e(2&$"|A/"b,6]&b2i5.1VepL)+>M2J(rbc9UoPp}SD5Z/#(c/q9', '$ly5!s#ETd2|Tqgb~3"sV7ueH+,mP)s=EPO=AiM=X', 'fS>0qG6ohNA<|/;,+$THMd?"5)p(IMmY=SHxyAJ{,kim:u^N6dRy["Kwod".z', "n#uv2 … [truncated]
-       rU(UU[wU[12]] = wU[1], UU[wU[15]] = [function() {
+     lH(xH = {}, vH = ['CbH9H1nk:Wcjm"H]|+F6.l|p;]DY=ri`S)', "]GYD1=6w!Vqw,<i{L^3M", "!*|3sYwc%l{{kCvQUpt", "i[U}IN{}]Efgjo6y~9${,a;*+mdomr,ynb@?=:)", "M1ihAT2+%=NWbHM]cGm3E=<lD", "?gzN!s]8.]X3wn^cU@wR<sK4U]*7!Fu`(hAG", "[*]?<N]06llA$z&.<9*N;0gt>FL", "3+{63/X>M", "|`gG(=h4:cj]3Tph … [truncated]
+       lH(HH[mH[13]] = mH[1], HH[-mH[16]] = [function() {
```

#### 727. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5648` → after: `L5793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5793) · [Before (L5648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5648)

```diff
-       }], UU[wU[13]] = void 0, UU[-wU[14]] = []);
+       }], HH[mH[14]] = mH[20], HH[-mH[15]] = []);
```

#### 728. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5650` → after: `L5795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5795) · [Before (L5650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5650)

```diff
-         rU(UU[wU[13]] = Object, UU[-wU[14]][wU[21]]("".__proto__.constructor.name))
+         lH(HH[mH[14]] = Object, HH[-mH[15]][mH[27]]("".__proto__.constructor.name))
```

#### 729. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5652-L5655` → after: `L5797-L5800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5797-L5800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5797-L5800) · [Before (L5652-L5655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5652-L5655)

```diff
-       UU: for (UU[wU[4]] = wU[1]; UU[wU[4]] < UU[wU[15]][wU[12]]; UU[wU[4]]++) try {
-         for (UU[wU[13]] = UU[wU[15]][UU[wU[4]]](), UU[wU[10]] = wU[1]; UU[wU[10]] < UU[-wU[14]][wU[12]]; UU[wU[10]]++)
-           if (typeof UU[wU[13]][UU[-wU[14]][UU[wU[10]]]] === wU[16]) continue UU;
-         return UU[wU[13]]
+       HH: for (HH[mH[4]] = mH[1]; HH[mH[4]] < HH[-mH[16]][mH[13]]; HH[mH[4]]++) try {
+         for (HH[mH[14]] = HH[-mH[16]][HH[mH[4]]](), HH[mH[17]] = mH[1]; HH[mH[17]] < HH[-mH[15]][mH[13]]; HH[mH[17]]++)
+           if (typeof HH[mH[14]][HH[-mH[15]][HH[mH[17]]]] === mH[18]) continue HH;
+         return HH[mH[14]]
```

#### 730. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5657-L5663` → after: `L5802-L5807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5802-L5807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5802-L5807) · [Before (L5657-L5663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5657-L5663)

```diff
-       return UU[wU[13]] || this
-     }() || {}, PU = RU.TextDecoder, WU = RU.Uint8Array, dU = RU.XY, LU = RU.String || String, eU = RU.Array || Array, CU = function(...UU) {
-       return rU(UU[wU[12]] = wU[1], UU[-wU[22]] = new eU(128), UU[-wU[23]] = LU[wU[19]] || LU.fromCharCode, UU[-wU[17]] = []),
-         function(XU) {
-           var zU, cU, yU, QU;
-           for (rU(cU = void 0, yU = XU[wU[12]], UU[-wU[17]][wU[12]] = wU[1]), QU = wU[1]; QU < yU;) rU(cU = XU[QU++], cU <= 127 ? zU = cU : cU <= 223 ? zU = (31 & cU) << wU[9] | XU[QU++] & wU[18] : cU <= 239 ? zU = (15 & cU) << wU[20] | (XU[QU++] & wU[18]) << wU[9] | XU[QU++] & w … [truncated]
-           return UU[-wU[17]].join("")
+       return HH[mH[14]] || this
+     }() || {}, TH = PH.TextDecoder, UH = PH.Uint8Array, VH = PH.rX, OH = PH.String || String, bH = PH.Array || Array, kH = function(...HH) {
+       return lH(HH[mH[13]] = mH[1], HH[mH[19]] = new bH(128), HH[mH[0]] = OH[mH[24]] || OH.fromCharCode, HH[mH[21]] = []),
+         function(...BH) {
+           for (lH(BH[mH[13]] = mH[2], BH[mH[19]] = mH[20], BH[mH[0]] = mH[20], BH[mH[22]] = BH[mH[1]][mH[13]], HH[mH[21]][mH[13]] = mH[1]), BH[mH[10]] = mH[1]; BH[mH[10]] < BH[mH[22]];) lH(BH[mH[0]] = BH[mH[1]][BH[mH[10]]++], BH[mH[0]] <= 127 ? BH[mH[19]] = BH[mH[0]] : BH[mH[0]]  … [truncated]
+           return HH[mH[21]].join("")
```

#### 731. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5665-L5669` → after: `L5809-L5815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5809-L5815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5809-L5815) · [Before (L5665-L5669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5665-L5669)

```diff
-     }()), qU(82) in SU && function(...UU) {
-       function XU(...UU) {
-         for (rU(UU[wU[12]] = wU[2], UU[wU[2]] = 'y.ifA{`oO47%9YT,tQ3p/B@+XKv<c1[8bnlNg]VH(Uhm~!uLaG$RCwx?jz>#J:0_^Mqs"2rkDZ5Wd6SeIP*E}&)=F|;', UU[-wU[24]] = "" + (UU[wU[1]] || ""), UU[wU[4]] = UU[-wU[24]].length, UU[wU[10]] = [], UU[-wU[29]] = wU[1], UU[wU[9]] = wU[1], UU[wU[27]] … [truncated]
-           if (UU[wU[26]] = UU[wU[2]].indexOf(UU[-wU[24]][UU[wU[25]]]), UU[wU[26]] !== -wU[2])
-             if (UU[wU[27]] < wU[1]) UU[wU[27]] = UU[wU[26]];
+     }()), oH(120) in fH && function(...HH) {
+       function BH(HH) {
+         var BH, LH, AH, rH, SH, hH, tH, zH = 'rm^9"|76_z/,+)FE<.nC?Pg@2jq(f5}V!KulIeYy;O8BZ[b:v{h=%A`xta*Dw1LsdJNGM0o]XQS~$i>kTR4&cpHWU3#';
+         for (lH(BH = "" + (HH || ""), LH = BH.length, AH = [], rH = mH[1], SH = mH[1], hH = -mH[2]), tH = mH[1]; tH < LH; tH++) {
+           var CH = zH.indexOf(BH[tH]);
+           if (CH !== -mH[2])
+             if (hH < mH[1]) hH = CH;
```

#### 732. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5671` → after: `L5817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5817) · [Before (L5671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5671)

```diff
-               rU(UU[wU[27]] += UU[wU[26]] * wU[28], UU[-wU[29]] |= UU[wU[27]] << UU[wU[9]], UU[wU[9]] += (UU[wU[27]] & wU[30]) > wU[31] ? wU[32] : wU[33]);
+               lH(hH += CH * mH[28], rH |= hH << SH, SH += (hH & mH[29]) > mH[30] ? mH[31] : mH[32]);
```

#### 733. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5673-L5676` → after: `L5819-L5824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5819-L5824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5819-L5824) · [Before (L5673-L5676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5673-L5676)

```diff
-                 rU(UU[wU[10]].push(UU[-wU[29]] & wU[11]), UU[-wU[29]] >>= wU[3], UU[wU[9]] -= wU[3])
-               } while (UU[wU[9]] > wU[7]);
-               UU[wU[27]] = -wU[2]
-             } return UU[wU[27]] > -wU[2] && UU[wU[10]].push((UU[-wU[29]] | UU[wU[27]] << UU[wU[9]]) & wU[11]), OU(UU[wU[10]])
+                 lH(AH.push(rH & mH[12]), rH >>= mH[11], SH -= mH[11])
+               } while (SH > mH[25]);
+               hH = -mH[2]
+             }
+         }
+         return hH > -mH[2] && AH.push((rH | hH << SH) & mH[12]), IH(AH)
```

#### 734. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5680` → after: `L5828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5828) · [Before (L5680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5680)

```diff
-         return UU[wU[12]] = wU[2], typeof BU[UU[wU[1]]] === wU[16] ? BU[UU[wU[1]]] = XU(ZU[UU[wU[1]]]) : BU[UU[wU[1]]]
+         return HH[mH[13]] = mH[2], typeof xH[HH[mH[1]]] === mH[18] ? xH[HH[mH[1]]] = BH(vH[HH[mH[1]]]) : xH[HH[mH[1]]]
```

#### 735. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5683-L5687` → after: `L5867-L5869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5867-L5869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5867-L5869) · [Before (L5683-L5687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5683-L5687)

```diff
-       function cU(UU) {
-         const XU = {};
-         for (let zU of UU.replace(/[^w]/g, "").toLowerCase()) XU[zU] = XU[zU] + wU[2] || wU[2];
-         return XU
-       }
+     function tH(HH) {
+       return AH.d.includes(HH)
+     }
```

#### 736. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5689-L5696` → after: `L5871-L5873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5871-L5873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5871-L5873) · [Before (L5689-L5696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5689-L5696)

```diff
-       function yU(...UU) {
-         UU[wU[12]] = wU[0];
-         const XU = buildCharMap(UU[wU[1]]),
-           zU = buildCharMap(UU[wU[2]]);
-         for (let cU in XU)
-           if (XU[cU] !== zU[cU]) return wU[34];
-         return Object.keys(XU).length !== Object.keys(zU).length ? wU[34] : wU[35]
-       }
+     function zH(HH, BH) {
+       return "Iron Chest" === HH && BH
+     }
```

#### 737. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5698-L5818` → after: `L5875-L5877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5875-L5877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5875-L5877) · [Before (L5698-L5818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5698-L5818)

```diff
-       function QU(...UU) {
-         UU[wU[12]] = wU[2];
-         return AU(UU[wU[1]]) !== 1 / 0
-       }
- 
-       function AU(...UU) {
-         if (UU[wU[12]] = wU[2], !UU[wU[1]]) return -wU[2];
-         const XU = AU(UU[wU[1]].left),
-           zU = AU(UU[wU[1]].right),
-           cU = Math.abs(XU - zU);
-         if (XU === 1 / 0 || zU === 1 / 0 || cU > wU[2]) return 1 / 0;
-         return Math.max(XU, zU) + wU[2]
-       }
-       UU[wU[12]] = wU[1], window[zU(83) + zU(84) + zU(85) + "_"] = {
-         buildCharacterMap: cU,
-         isAnagrams: yU,
- ... (105 more removed lines; see GitHub link above)
+     function CH(HH) {
+       return !0 === (null === HH || void 0 === HH ? void 0 : HH.includes("Hang Glider"))
+     }
```

#### 738. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5821` → after: `L5880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5880) · [Before (L5821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5821)

```diff
-       return UU.physicsState.type === yU.o.GLIDER && UU.movementType === yU.l.GLIDING && DU(XU)
+       return HH.physicsState.type === rH.o.GLIDER && HH.movementType === rH.m.GLIDING && CH(BH)
```

#### 739. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5830-L5832` → after: `L5889-L5891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5889-L5891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5889-L5891) · [Before (L5830-L5832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5830-L5832)

```diff
-       const zU = UU.xG.tzU(UU.pM),
-         cU = UU.xG.KXU(UU.pM);
-       return UU.mG.canAltAction && void 0 !== zU && void 0 !== cU && EU(cU, null === (XU = zU.selectedItem) || void 0 === XU ? void 0 : XU.name) ? (0, QU.d)(zU.inventory) : 0
+       const LH = HH.pT.fLH(HH.lF),
+         AH = HH.pT.ELH(HH.lF);
+       return HH.wT.canAltAction && void 0 !== LH && void 0 !== AH && EH(AH, null === (BH = LH.selectedItem) || void 0 === BH ? void 0 : BH.name) ? (0, SH.c)(LH.inventory) : 0
```

#### 740. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5838` → after: `L5897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5897) · [Before (L5838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5838)

```diff
-     const pU = new Map(Object.entries(AU.i).map((UU => {
+     const uH = new Map(Object.entries(hH.g).map((HH => {
```

#### 741. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5848` → after: `L5907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5907) · [Before (L5848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5848)

```diff
-       } = zU, EU = (null !== FU && void 0 !== FU ? FU : []).map((UU => {
+       } = LH, EH = (null !== tH && void 0 !== tH ? tH : []).map((HH => {
```

#### 742. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5856` → after: `L5915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5915) · [Before (L5856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5856)

```diff
-         food: new Set([...null !== yU && void 0 !== yU ? yU : [], ...null !== QU && void 0 !== QU ? QU : [], ...null !== AU && void 0 !== AU ? AU : [], ...EU]),
+         food: new Set([...null !== rH && void 0 !== rH ? rH : [], ...null !== SH && void 0 !== SH ? SH : [], ...null !== hH && void 0 !== hH ? hH : [], ...EH]),
```

#### 743. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5858` → after: `L5917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5917) · [Before (L5858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5858)

```diff
-         saddle: oU ? null !== DU && void 0 !== DU ? DU : "Saddle" : null
+         saddle: zH ? null !== CH && void 0 !== CH ? CH : "Saddle" : null
```

#### 744. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5888` → after: `L5947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5947) · [Before (L5888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5888)

```diff
-   38534: (UU, XU, zU) => {
+   38646: (HH, BH, LH) => {
```

#### 745. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5892` → after: `L5950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5950) · [Before (L5892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5892)

```diff
-       e: () => tX,
+       f: () => iB,
```

#### 746. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5894-L5896` → after: `L5952-L5953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5952-L5953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5952-L5953) · [Before (L5894-L5896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5894-L5896)

```diff
-       k: () => gX,
-       m: () => PX,
-       p: () => Xz,
+       l: () => UB,
+       n: () => MB,
```

#### 747. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5902` → after: `L5957-L5961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5957-L5961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5957-L5961) · [Before (L5902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5902)

```diff
-       x: () => WX
+       x: () => LL,
+       z: () => TB,
+       C: () => hL,
+       E: () => nB,
+       G: () => OB
```

#### 748. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5904-L5907` → after: `L5963-L5966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5963-L5966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5963-L5966) · [Before (L5904-L5907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5904-L5907)

```diff
-     var cU = zU(9782),
-       yU = zU(38557);
-     const QU = cU.h.Water.id,
-       AU = cU.h.Ice.id,
+     var AH = LH(9940),
+       rH = LH(38667);
+     const SH = AH.g.Water.id,
+       hH = AH.g.Ice.id,
```

#### 749. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5918-L5926` → after: `L5977-L5986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5977-L5986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5977-L5986) · [Before (L5918-L5926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5918-L5926)

```diff
-       return (null === (XU = cU.h[UU]) || void 0 === XU ? void 0 : XU.meta.rootId) === QU
-     }
-     var DU = zU(38733),
-       EU = zU(212),
-       YU = zU(38739),
-       NU = zU(38752),
-       IU = zU(344),
-       pU = zU(1236),
-       aU = zU(37756),
+       return (null === (BH = AH.g[HH]) || void 0 === BH ? void 0 : BH.meta.rootId) === SH
+     }
+     var CH = LH(38865),
+       EH = LH(176),
+       XH = LH(38867),
+       GH = LH(38876),
+       YH = LH(317),
+       uH = LH(1168),
+       QH = LH(37912),
+       WH = LH(4868),
```

#### 750. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5928-L5934` → after: `L5988-L5993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5988-L5993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5988-L5993) · [Before (L5928-L5934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5928-L5934)

```diff
-       gU = zU(4929),
-       kU = zU(3519),
-       GU = zU(38537),
-       BU = zU(38601),
-       ZU = zU(38543),
-       RU = zU(38603),
-       PU = zU(352),
+       xH = LH(3503),
+       vH = LH(38654),
+       PH = LH(38717),
+       TH = LH(38656),
+       UH = LH(38726),
+       VH = LH(330),
```

#### 751. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5936-L5953` → after: `L5995-L6012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R5995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L5995-L6012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L5995-L6012) · [Before (L5936-L5953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5936-L5953)

```diff
-       dU = zU(4063),
-       LU = zU(38610),
-       eU = zU(37480),
-       CU = zU(37478),
-       wU = zU(38614),
-       qU = zU(4139),
-       OU = zU(31),
-       SU = zU(38620),
-       rU = zU(38624),
-       uU = zU(38019),
-       fU = zU(38661),
-       iU = zU(3526),
-       HU = zU(1203),
-       MU = zU(38667),
-       vU = zU(38680),
-       VU = zU(38034),
- ... (2 more removed lines; see GitHub link above)
+       bH = LH(4061),
+       kH = LH(38729),
+       mH = LH(37617),
+       oH = LH(37608),
+       IH = LH(38736),
+       fH = LH(4113),
+       lH = LH(18),
+       KH = LH(38744),
+       cH = LH(38753),
+       eH = LH(38157),
+       qH = LH(38800),
+       gH = LH(3508),
+       NH = LH(1131),
+       RH = LH(38806),
+       jH = LH(38817),
+       nH = LH(38176),
+ ... (2 more added lines; see GitHub link above)
```

#### 752. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5956-L5977` → after: `L6015-L6036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6015-L6036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6015-L6036) · [Before (L5956-L5977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5956-L5977)

```diff
-     var xU = zU(37970),
-       JU = zU(37968),
-       jU = zU(38675),
-       KU = zU(37908),
-       bU = zU(38356),
-       TU = zU(38236);
-     var hU = zU(38700),
-       UX = zU(37915),
-       XX = zU(38647),
-       zX = zU(38083),
-       cX = zU(38232),
-       yX = zU(37977),
-       QX = zU(38090),
-       AX = zU(38004),
-       FX = zU(38254),
-       oX = zU(3043),
- ... (6 more removed lines; see GitHub link above)
+     var dH = LH(38109),
+       aH = LH(38100),
+       sH = LH(38809),
+       JH = LH(38062),
+       iH = LH(38464),
+       pH = LH(38339);
+     var yH = LH(38833),
+       HB = LH(38067),
+       BB = LH(38785),
+       LB = LH(38222),
+       AB = LH(38331),
+       rB = LH(38118),
+       SB = LH(38229),
+       hB = LH(38135),
+       tB = LH(38370),
+       zB = LH(3038),
+ ... (6 more added lines; see GitHub link above)
```

#### 753. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5979-L5983` → after: `L6038-L6042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6038-L6042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6038-L6042) · [Before (L5979-L5983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5979-L5983)

```diff
-         Helmet: zU(38708),
-         Chestplate: zU(38714),
-         Leggings: zU(38721),
-         Boots: zU(38725),
-         Gauntlets: zU(38728)
+         Helmet: LH(38841),
+         Chestplate: LH(38846),
+         Leggings: LH(38853),
+         Boots: LH(38857),
+         Gauntlets: LH(38861)
```

#### 754. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5988` → after: `L6047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6047) · [Before (L5988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5988)

```diff
-       OU.k.UY("localBlockMined");
+       lH.k.AX("localBlockMined");
```

#### 755. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5990` → after: `L6049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6049) · [Before (L5990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5990)

```diff
-         DU = zU.pG(UU[0], UU[1], UU[2]);
+         CH = LH.Fv(HH[0], HH[1], HH[2]);
```

#### 756. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L5993-L5996` → after: `L6052-L6055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6052-L6055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6052-L6055) · [Before (L5993-L5996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L5993-L5996)

```diff
-         YU = null === (XU = cU.h[EU].solid) || void 0 === XU || XU,
-         NU = fU.c.getUniqueColoursForParticleSystem(UU);
-       fU.g.emit(50, {
-         ...(0, YX.c)(UU, cU.h[DU].Ft, .05, .95),
+         XH = null === (BH = AH.g[EH].solid) || void 0 === BH || BH,
+         GH = qH.d.getUniqueColoursForParticleSystem(HH);
+       qH.h.emit(50, {
+         ...(0, XB.b)(HH, AH.g[CH].hW, .05, .95),
```

#### 757. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6003-L6005` → after: `L6062-L6064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6062-L6064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6062-L6064) · [Before (L6003-L6005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6003-L6005)

```diff
-       const IU = zU.getClientPredictedOption((0, oX.e)().pM, "fillBrokenBlocksWithWater") ? function(UU, XU, zU, DU, EU) {
-           const YU = cU.h[EU];
-           if (0 === EU || YU.BI || EU in yU.c) return 0;
+       const YH = LH.getClientPredictedOption((0, zB.c)().lF, "fillBrokenBlocksWithWater") ? function(HH, BH, LH, CH, EH) {
+           const XH = AH.g[EH];
+           if (0 === EH || XH.UY || EH in rH.c) return 0;
```

#### 758. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6011` → after: `L6070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6070) · [Before (L6011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6011)

```diff
-           return NU || IU ? QU : 0
+           return GH || YH ? SH : 0
```

#### 759. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6015-L6022` → after: `L6074-L6081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6074-L6081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6074-L6081) · [Before (L6015-L6022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6015-L6022)

```diff
-           return (0, dU.sendColyMessage)(qU.If, {
-             ZA: 0,
-             dA: WU().copy([], UU),
-             LA: gX(),
-             eA: !1,
-             CA: !1,
-             wA: XU,
-             IA: zU
+           return (0, bH.sendColyMessage)(fH.lg, {
+             Ph: 0,
+             xh: OH().copy([], HH),
+             Th: MB(),
+             Uh: !1,
+             Vh: !1,
+             Oh: BH,
+             Yh: LH
```

#### 760. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6026-L6027` → after: `L6085-L6086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6085-L6086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6085-L6086) · [Before (L6026-L6027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6026-L6027)

```diff
-           pM: aU
-         } = (0, oX.e)();
+           lF: QH
+         } = (0, zB.c)();
```

#### 761. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6030` → after: `L6089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6089) · [Before (L6030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6030)

```diff
-         const XU = zU.getBlockBreakDrop(aU, DU, null !== (tU = null === (gU = zU.getInvenHeldItem(aU)) || void 0 === gU ? void 0 : gU.name) && void 0 !== tU ? tU : null);
+         const BH = LH.getBlockBreakDrop(QH, CH, null !== (WH = null === (MH = LH.getInvenHeldItem(QH)) || void 0 === MH ? void 0 : MH.name) && void 0 !== WH ? WH : null);
```

#### 762. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6033` → after: `L6092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6092) · [Before (L6033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6033)

```diff
-       zU.Jw(UU[0], UU[1], UU[2], IU), (0, NX.j)(UU[0], UU[1], UU[2]), zU.client.triggerGameCallback("onPlayerChangeBlock", (0, oX.e)().pM, UU[0], UU[1], UU[2], (0, cU.f)(DU), "Air")
+       LH.oq(HH[0], HH[1], HH[2], YH), (0, GB.g)(HH[0], HH[1], HH[2]), LH.client.triggerGameCallback("onPlayerChangeBlock", (0, zB.c)().lF, HH[0], HH[1], HH[2], (0, AH.d)(CH), "Air")
```

#### 763. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6036` → after: `L6095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6095) · [Before (L6036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6036)

```diff
-     const kX = [0, "d", 133, 206, 1, 5, "c", "length", 4, 134, 147, 2, 3, 189, "b", 43, !1, "a", !0, 122, 239, 116, 218];
+     const xB = ["length", 0, 1, !1, "_", 33554432, 2, 67108864, 148, 87, 212, 70, 223, 92];
```

#### 764. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6045-L6116` → after: `L6104-L6109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6104-L6109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6104-L6109) · [Before (L6045-L6116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6045-L6116)

```diff
-       const zU = (0, eU.f)((0, DU.c)(UU, XU));
-       CU.e.play(zU, 1)
-     }
-     "nKK47x" in GX && function() {
-       var UU = function(...UU) {
-         for (BX(UU[kX[7]] = kX[4], UU[kX[2]] = UU[kX[0]].length, UU[-kX[3]] = [], UU[kX[6]] = kX[0]), UU[kX[1]] = kX[0]; UU[kX[1]] < UU[kX[2]]; UU[kX[1]]++) UU[-kX[3]].push(UU[kX[1]] !== kX[0] && UU[kX[0]][UU[kX[1]]] > UU[kX[0]][UU[kX[1]] - kX[4]] ? UU[-kX[3]][UU[kX[1]] - kX[4]]  … [truncated]
-         for (UU[kX[5]] = UU[kX[2]] - kX[4]; UU[kX[5]] >= kX[0]; UU[kX[5]]--) UU[kX[5]] !== UU[kX[2]] - kX[4] && UU[kX[0]][UU[kX[5]]] > UU[kX[0]][UU[kX[5]] + kX[4]] && (UU[-kX[3]][UU[kX[5]]] = Math.max(UU[-kX[3]][UU[kX[5]]], UU[-kX[3]][UU[kX[5]] + kX[4]] + kX[4])), UU[kX[6]] += UU … [truncated]
-         return UU[kX[6]]
-       };
-       console.log(UU)
-     }(), ((...UU) => {
-       UU[kX[7]] = kX[0], "cB8k2UI" in GX && function(...UU) {
-         UU[kX[7]] = kX[0]
-       }(), BX(UU[kX[20]] = kX[0], gX = (...XU) => {
-         if (XU[kX[7]] = kX[0], "y2d6qg_" in GX && function(...UU) {
-             UU[kX[7]] = kX[0];
- ... (56 more removed lines; see GitHub link above)
+       const LH = (0, mH.h)((0, CH.c)(HH, BH));
+       oH.c.play(LH, 1)
+     }((...HH) => {
+       PB(HH[xB[0]] = xB[1], HH[-xB[13]] = xB[1], MB = (...BH) => (BH[xB[0]] = xB[1], "YUmxpy" in vB && function(...HH) {
+         function BH(...HH) {
+           return HH[xB[0]] = xB[2], HH[xB[1]][xB[2]] * xB[7] + (HH[xB[1]][xB[1]] < xB[1] ? xB[5] | HH[xB[1]][xB[1]] : HH[xB[1]][xB[1]])
```

#### 765. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6118-L6119` → after: `L6111-L6125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6111-L6125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6111-L6125) · [Before (L6118-L6119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6118-L6119)

```diff
-         return wU.f
-       })
+ 
+         function LH(HH) {
+           switch (((HH & xB[5]) !== xB[1]) * xB[2] + (HH < xB[1]) * xB[6]) {
+             case xB[1]:
+               return [HH % xB[5], Math.trunc(HH / xB[7])];
+             case xB[2]:
+               return [HH % xB[5] - xB[5], Math.trunc(HH / xB[7]) + xB[2]];
+             case xB[6]:
+               return [((HH + xB[5]) % xB[5] + xB[5]) % xB[5], Math.round(HH / xB[7])];
+             case 3:
+               return [HH % xB[5], Math.trunc(HH / xB[7])]
+           }
+         }
+         HH[xB[0]] = xB[1], PB(HH[-xB[8]] = BH([xB[6], 4]), HH[xB[2]] = BH([xB[2], xB[6]]), HH[xB[9]] = HH[-xB[8]] + HH[xB[2]], HH[-xB[10]] = HH[xB[9]] - HH[xB[2]], HH[-xB[11]] = HH[-xB[10]] * xB[6], HH[xB[12]] = HH[-xB[11]] / xB[6], console.log(LH(HH[xB[9]])), console.log(LH(HH[- … [truncated]
+       }(), HH[-xB[13]]++, 5 === HH[-xB[13]] ? (HH[-xB[13]] = xB[1], "es") : IH.e))
```

#### 766. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6126` → after: `L6132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6132) · [Before (L6126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6126)

```diff
-         uX: FU = !1,
+         QL: tH = !1,
```

#### 767. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6134-L6135` → after: `L6140-L6141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6140-L6141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6140-L6141) · [Before (L6134-L6135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6134-L6135)

```diff
-       } = EU.f;
-       if (XU ??= String(UU.xG.bK([])), UU.xG.add([zU[0], zU[1], zU[2]], tU, tU, null, null, void 0 !== DU, !1, XU), UU.xG.sH(XU, "autoRemoveMesh"), UU.xG.sH(XU, "itemState", {
+       } = EH.g;
+       if (BH ??= String(HH.pT.Q0([])), HH.pT.add([LH[0], LH[1], LH[2]], WH, WH, null, null, void 0 !== CH, !1, BH), HH.pT.yR(BH, "autoRemoveMesh"), HH.pT.yR(BH, "itemState", {
```

#### 768. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6139-L6141` → after: `L6145-L6147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6145-L6147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6145-L6147) · [Before (L6139-L6141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6139-L6141)

```diff
-           attributes: (0, YU.g)(aU, AU),
-           uX: FU,
-           creationTime: null !== IU && void 0 !== IU ? IU : Date.now(),
+           attributes: (0, XH.l)(QH, hH),
+           QL: tH,
+           creationTime: null !== YH && void 0 !== YH ? YH : Date.now(),
```

#### 769. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6144-L6146` → after: `L6150-L6152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6150-L6152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6150-L6152) · [Before (L6144-L6146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6144-L6146)

```diff
-         const zU = UU.xG.Bx(XU);
-         (0, NU.e)(zU), zU.applyImpulse(DU)
-       } else UU.xG.sH(XU, "smoothToServerPos", {
+         const LH = HH.pT.xJ(BH);
+         (0, GH.b)(LH), LH.applyImpulse(CH)
+       } else HH.pT.yR(BH, "smoothToServerPos", {
```

#### 770. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6154-L6155` → after: `L6160-L6161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6160-L6161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6160-L6161) · [Before (L6154-L6155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6154-L6155)

```diff
-       const yU = null === (zU = UU.xG.getState(XU, "autoRotate")) || void 0 === zU ? void 0 : zU.heading,
-         QU = null === (cU = UU.xG.DzU(XU)) || void 0 === cU ? void 0 : cU.offset;
+       const rH = null === (LH = HH.pT.getState(BH, "autoRotate")) || void 0 === LH ? void 0 : LH.heading,
+         SH = null === (AH = HH.pT.VLH(BH)) || void 0 === AH ? void 0 : AH.offset;
```

#### 771. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6168` → after: `L6174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6174) · [Before (L6168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6168)

```diff
-       } = UU.xG.getState(XU, "itemState"), DU = (0, SU.d)() * oU, YU = AU.droppedMeshTypeScale * DU;
+       } = HH.pT.getState(BH, "itemState"), CH = (0, KH.e)() * zH, XH = hH.droppedMeshTypeScale * CH;
```

#### 772. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6170` → after: `L6176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6176) · [Before (L6170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6170)

```diff
-       UU.xG.sH(XU, "hidingMeshManager", {
+       HH.pT.yR(BH, "hidingMeshManager", {
```

#### 773. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6176` → after: `L6182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6182) · [Before (L6176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6176)

```diff
-             const FU = UU.WY.DH;
+             const tH = HH.mX.bR;
```

#### 774. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6178` → after: `L6184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6184) · [Before (L6178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6178)

```diff
-             FU.setEntityId(cU, XU), FU.setScale(cU, YU, YU, YU), FU.YC(cU, !0);
+             tH.setEntityId(AH, BH), tH.setScale(AH, XH, XH, XH), tH.vI(AH, !0);
```

#### 775. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6180` → after: `L6186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6186) · [Before (L6180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6180)

```diff
-               xG: oU
+               pT: zH
```

#### 776. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6182-L6186` → after: `L6188-L6192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6188-L6192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6188-L6192) · [Before (L6182-L6186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6182-L6186)

```diff
-             oU.sH(XU, oU.names.mesh, {
-               YH: cU,
-               RcU: FU.icU(cU, 0),
-               offset: WU().pp(0, null !== (QU = null === zU || void 0 === zU ? void 0 : zU.yOffset) && void 0 !== QU ? QU : AU.droppedMeshOffset * DU + .05 * Math.random(), 0)
-             }), oU.sH(XU, "autoRotate"), zU && (oU.getState(XU, "autoRotate").heading = zU.heading)
+             zH.yR(BH, zH.names.mesh, {
+               kR: AH,
+               NAH: tH.yAH(AH, 0),
+               offset: OH().nX(0, null !== (SH = null === LH || void 0 === LH ? void 0 : LH.yOffset) && void 0 !== SH ? SH : hH.droppedMeshOffset * CH + .05 * Math.random(), 0)
+             }), zH.yR(BH, "autoRotate"), LH && (zH.getState(BH, "autoRotate").heading = LH.heading)
```

#### 777. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6192` → after: `L6198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6198) · [Before (L6192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6192)

```diff
-             xG: zU
+             pT: LH
```

#### 778. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6194` → after: `L6200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6200) · [Before (L6194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6194)

```diff
-           zU.nH(XU, zU.names.mesh), zU.nH(XU, "autoRotate")
+           LH.fn(BH, LH.names.mesh), LH.fn(BH, "autoRotate")
```

#### 779. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6197-L6198` → after: `L6203-L6204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6203-L6204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6203-L6204) · [Before (L6197-L6198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6197-L6198)

```diff
-         shadowSize: EU.f.droppedBlockSize,
-         canSee: !1 !== (null === (yU = UU.YM[UU.pM]) || void 0 === yU || null === (QU = yU[XU]) || void 0 === QU ? void 0 : QU.canSee),
+         shadowSize: EH.g.droppedBlockSize,
+         canSee: !1 !== (null === (rH = HH.mF[HH.lF]) || void 0 === rH || null === (SH = rH[BH]) || void 0 === SH ? void 0 : SH.canSee),
```

#### 780. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6204` → after: `L6210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6210) · [Before (L6204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6204)

```diff
-       (0, oX.e)().Fp && (UU.jH("aShaderPackItem", 4), UU.XM.aShaderPackItem = EX.Vector4.FromArray(XU))
+       (0, zB.c)().Cu && (HH.uF("aShaderPackItem", 4), HH.kF.aShaderPackItem = EB.Vector4.FromArray(BH))
```

#### 781. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6216` → after: `L6222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6222) · [Before (L6216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6216)

```diff
-         ...ZU.b,
+         ...TH.d,
```

#### 782. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6221` → after: `L6227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6227) · [Before (L6221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6221)

```diff
-         uD: !1,
+         LX: !1,
```

#### 783. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6227-L6230` → after: `L6233-L6236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6233-L6236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6233-L6236) · [Before (L6227-L6230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6227-L6230)

```diff
-       const yU = (0, oX.e)();
-       zU && (XU.sideOrientation = UX.d.ClockWiseSideOrientation);
-       const QU = yU.WY.DH,
-         AU = yU.Fp ? {
+       const rH = (0, zB.c)();
+       LH && (BH.sideOrientation = HB.c.ClockWiseSideOrientation);
+       const SH = rH.mX.bR,
+         hH = rH.Cu ? {
```

#### 784. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6234` → after: `L6240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6240) · [Before (L6234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6234)

```diff
-         xY: 16,
+         aX: 16,
```

#### 785. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6241` → after: `L6247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6247) · [Before (L6241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6241)

```diff
-       }), QU.setPickableForType(UU, !1), yU.WY.WH(XU), UU
+       }), SH.setPickableForType(HH, !1), rH.mX.jR(BH), HH
```

#### 786. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6255` → after: `L6261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6261) · [Before (L6255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6255)

```diff
-       return yU && (AU.color = (0, KU.q)(QU.positions.length / 3, KU.e)), (0, XX.m)((0, oX.e)().WY, UU, {
+       return rH && (hH.color = (0, JH.j)(SH.positions.length / 3, JH.b)), (0, BB.n)((0, zB.c)().mX, HH, {
```

#### 787. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6263` → after: `L6269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6269) · [Before (L6263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6263)

```diff
-       }, (() => new EX.Vector4(0, 1 - BU.c, 1, BU.c)));
+       }, (() => new EB.Vector4(0, 1 - PH.b, 1, PH.b)));
```

#### 788. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6266` → after: `L6272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6272) · [Before (L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6266)

```diff
-       return !UU || "object" !== typeof UU || Array.isArray(UU) ? null : "animTextures" in UU ? UU : null
+       return !HH || "object" !== typeof HH || Array.isArray(HH) ? null : "animTextures" in HH ? HH : null
```

#### 789. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6271-L6274` → after: `L6277-L6280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6277-L6280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6277-L6280) · [Before (L6271-L6274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6271-L6274)

```diff
-       const cU = `cuboidBlock|${zU.name}|${XU.key}|${(0,bU.f)(UU)}`;
-       if ((0, oX.e)().WY.DH.hasType(cU)) return cU;
-       const yU = SX(cU, XU, uX, (0, IX.t)(XU, rX));
-       return yU.material = zU, (0, MU.h)(yU), yU.YC(!1), yU.ma = !1, iX.set(cU, yU), qX(cU, yU, UU, OX)
+       const AH = `cuboidBlock|${LH.name}|${BH.key}|${(0,iH.k)(HH)}`;
+       if ((0, zB.c)().mX.bR.hasType(AH)) return AH;
+       const rH = KB(AH, BH, eB, (0, YB.p)(BH, cB));
+       return rH.material = LH, (0, RH.i)(rH), rH.vI(!1), rH.jQ = !1, gB.set(AH, rH), fB(AH, rH, HH, lB)
```

#### 790. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6279-L6282` → after: `L6285-L6288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6285-L6288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6285-L6288) · [Before (L6279-L6282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6279-L6282)

```diff
-       if (UU.WY.Ua || !(0, BU.g)()) return !0;
-       const XU = GU.b.getBlockAtlasMaterial(UU.WY.nS(), !1, !1),
-         zU = iX.get(HX(!1, IX.b, XU));
-       return !(zU && !(0, zX.e)(zU)) || function(UU) {
+       if (HH.mX.yu || !(0, PH.e)()) return !0;
+       const BH = vH.b.getBlockAtlasMaterial(HH.mX.yN(), !1, !1),
+         LH = gB.get(NB(!1, YB.c, BH));
+       return !(LH && !(0, LB.f)(LH)) || function(HH) {
```

#### 791. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6284` → after: `L6290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6290) · [Before (L6284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6284)

```diff
-         if (!XU || UU.oR()) return !1;
+         if (!BH || HH.mV()) return !1;
```

#### 792. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6299-L6300` → after: `L6305-L6306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6305-L6306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6305-L6306) · [Before (L6299-L6300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6299-L6300)

```diff
-         UU.once("LY", (() => {
-           const cU = UU.WY.nS().onAfterRenderObservable;
+         HH.once("IX", (() => {
+           const AH = HH.mX.yN().onAfterRenderObservable;
```

#### 793. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6320` → after: `L6326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6326) · [Before (L6320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6320)

```diff
-       return Array.isArray(UU) ? EX.Sp.FromArray(UU) : new EX.Sp(UU, UU, UU)
+       return Array.isArray(HH) ? EB.lu.FromArray(HH) : new EB.lu(HH, HH, HH)
```

#### 794. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6325-L6326` → after: `L6331-L6332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6331-L6332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6331-L6332) · [Before (L6325-L6326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6325-L6326)

```diff
-         this.bakeInScaling = void 0, this.name = void 0, this.sa = void 0, this.weight = void 0, this.heldItemScale = void 0, this.heldItemGlb = void 0, this.stackable = void 0, this.textureInfo = void 0, this.itemTexture = void 0, this.solid = void 0, this.droppedMeshOffset = vo … [truncated]
-         const FU = (0, oX.b)().EY.metadatas[UU];
+         this.bakeInScaling = void 0, this.name = void 0, this.NQ = void 0, this.weight = void 0, this.heldItemScale = void 0, this.heldItemGlb = void 0, this.stackable = void 0, this.textureInfo = void 0, this.itemTexture = void 0, this.solid = void 0, this.droppedMeshOffset = vo … [truncated]
+         const tH = (0, zB.b)().YX.metadatas[HH];
```

#### 795. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6328` → after: `L6334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6334) · [Before (L6328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6328)

```diff
-         this.bakeInScaling = 1, this.name = UU, this.sa = XU, this.weight = null !== (zU = FU.weight) && void 0 !== zU ? zU : 1, this.heldItemScale = null !== (cU = FU.heldItemScale) && void 0 !== cU ? cU : 1, this.stackable = null === (yU = FU.stackable) || void 0 === yU || yU,  … [truncated]
+         this.bakeInScaling = 1, this.name = HH, this.NQ = BH, this.weight = null !== (LH = tH.weight) && void 0 !== LH ? LH : 1, this.heldItemScale = null !== (AH = tH.heldItemScale) && void 0 !== AH ? AH : 1, this.stackable = null === (rH = tH.stackable) || void 0 === rH || rH,  … [truncated]
```

#### 796. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6330-L6331` → after: `L6336-L6337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6336-L6337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6336-L6337) · [Before (L6330-L6331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6330-L6331)

```diff
-           type: iU.f.ITEM
-         }, this.modelSource = kU.c.getModel(this.modelDefault.name, iU.f.ITEM), this.displayName = UU
+           type: gH.g.ITEM
+         }, this.modelSource = xH.b.getModel(this.modelDefault.name, gH.g.ITEM), this.displayName = HH
```

#### 797. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6354` → after: `L6360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6360) · [Before (L6354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6354)

```diff
-         return (0, bU.f)(UU.flippedWinding)
+         return (0, iH.k)(HH.flippedWinding)
```

#### 798. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6358-L6360` → after: `L6364-L6366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6364-L6366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6364-L6366) · [Before (L6358-L6360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6358-L6360)

```diff
-           const QU = `item|${UU}|${XU}|${zU.uniqueId}`;
-           zU.material || console.error(`${UU} thin base has no material`);
-           const AU = zU.clone(`${UU}ThinBase|${XU}`, null);
+           const SH = `item|${HH}|${BH}|${LH.uniqueId}`;
+           LH.material || console.error(`${HH} thin base has no material`);
+           const hH = LH.clone(`${HH}ThinBase|${BH}`, null);
```

#### 799. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6367` → after: `L6373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6373) · [Before (L6367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6367)

```diff
-         const cU = (0, oX.e)().WY.DH,
+         const AH = (0, zB.c)().mX.bR,
```

#### 800. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6369-L6370` → after: `L6375-L6376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6375-L6376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6375-L6376) · [Before (L6369-L6370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6369-L6370)

```diff
-         if (cU.set(yU, "aLightLevels", cX.c), cU.set(yU, "aOpacity", 1), (0, oX.e)().Fp) {
-           const zU = UU.uD ? hU.e.uD : UU.dropped ? hU.e.dropped : 0;
+         if (AH.set(rH, "aLightLevels", AB.c), AH.set(rH, "aOpacity", 1), (0, zB.c)().Cu) {
+           const LH = HH.LX ? yH.d.LX : HH.dropped ? yH.d.dropped : 0;
```

#### 801. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6379` → after: `L6385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6385) · [Before (L6379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6379)

```diff
-         return [(0, hU.p)(this.qS() | UU, (0, RU.d)(XU)), ...this.shaderPackLocalFrame()]
+         return [(0, yH.p)(this.iN() | HH, (0, UH.e)(BH)), ...this.shaderPackLocalFrame()]
```

#### 802. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6382-L6383` → after: `L6388-L6389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6388-L6389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6388-L6389) · [Before (L6382-L6383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6382-L6383)

```diff
-         const UU = cU.h[this.name];
-         if (null === UU || void 0 === UU || !UU.blockModelItem) return [rU.d / this.bakeInScaling, 0, 0];
+         const HH = AH.g[this.name];
+         if (null === HH || void 0 === HH || !HH.blockModelItem) return [cH.b / this.bakeInScaling, 0, 0];
```

#### 803. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6389` → after: `L6395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6395) · [Before (L6389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6389)

```diff
-         } = (0, rU.k)((0, rU.p)(UU));
+         } = (0, cH.i)((0, cH.l)(HH));
```

#### 804. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6393` → after: `L6399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6399) · [Before (L6393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6393)

```diff
-         (0, oX.e)().Fp && (UU.XM.aShaderPackItem = EX.Vector4.FromArray(this.shaderPackItem(XU, zU)))
+         (0, zB.c)().Cu && (HH.kF.aShaderPackItem = EB.Vector4.FromArray(this.shaderPackItem(BH, LH)))
```

#### 805. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6402` → after: `L6408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6408) · [Before (L6402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6402)

```diff
-         const XU = cU.h[this.name],
+         const BH = AH.g[this.name],
```

#### 806. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6404` → after: `L6410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6410) · [Before (L6404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6404)

```diff
-         return zU && XU.blockModelItem ? zU * this.bakeInScaling / (0, rU.g)(XU) : 0
+         return LH && BH.blockModelItem ? LH * this.bakeInScaling / (0, cH.e)(BH) : 0
```

#### 807. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6411-L6413` → after: `L6417-L6419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6417-L6419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6417-L6419) · [Before (L6411-L6413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6411-L6413)

```diff
-         const QU = (0, oX.e)().WY.DH,
-           AU = null !== (cU = LU.m[XU]) && void 0 !== cU ? cU : LU.m.None;
-         QU.set(UU, "aEnchantmentColour", AU.r, AU.g, AU.b), QU.set(UU, "aEnchantmentSpeed", null !== (yU = IU.mb[XU]) && void 0 !== yU ? yU : IU.mb.None)
+         const SH = (0, zB.c)().mX.bR,
+           hH = null !== (AH = kH.m[BH]) && void 0 !== AH ? AH : kH.m.None;
+         SH.set(HH, "aEnchantmentColour", hH.r, hH.g, hH.b), SH.set(HH, "aEnchantmentSpeed", null !== (rH = YH.jb[BH]) && void 0 !== rH ? rH : YH.jb.None)
```

#### 808. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6421` → after: `L6427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6427) · [Before (L6421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6421)

```diff
-           zU.XM.aEnchantmentColour = null !== (cU = LU.m[UU]) && void 0 !== cU ? cU : LU.m.None, zU.XM.aEnchantmentSpeed = null !== (yU = IU.mb[UU]) && void 0 !== yU ? yU : IU.mb.None, this._markForShaderPack(zU, pX, UU)
+           LH.kF.aEnchantmentColour = null !== (AH = kH.m[HH]) && void 0 !== AH ? AH : kH.m.None, LH.kF.aEnchantmentSpeed = null !== (rH = YH.jb[HH]) && void 0 !== rH ? rH : YH.jb.None, this._markForShaderPack(LH, uB, HH)
```

#### 809. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6431-L6432` → after: `L6437-L6438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6437-L6438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6437-L6438) · [Before (L6431-L6432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6431-L6432)

```diff
-           const zU = (0, XX.q)((0, oX.e)().WY, `${this.name}AbstractMeshParent${this._meshCounter++}`);
-           return zU.RY = nX(UU), this._attachNewMeshInstanceToParent(zU, XU), zU
+           const LH = (0, BB.q)((0, zB.c)().mX, `${this.name}AbstractMeshParent${this._meshCounter++}`);
+           return LH.bX = DB(HH), this._attachNewMeshInstanceToParent(LH, BH), LH
```

#### 810. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6435-L6436` → after: `L6441-L6442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6441-L6442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6441-L6442) · [Before (L6435-L6436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6435-L6436)

```diff
-           const zU = (0, XX.q)((0, oX.e)().WY, `earlyLoaded${this.name}AbstractMeshParent${this._meshParents.length}`);
-           return zU.RY = nX(UU), this._sourceMeshLoadFailed || this._meshParents.push({
+           const LH = (0, BB.q)((0, zB.c)().mX, `earlyLoaded${this.name}AbstractMeshParent${this._meshParents.length}`);
+           return LH.bX = DB(HH), this._sourceMeshLoadFailed || this._meshParents.push({
```

#### 811. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6443` → after: `L6449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6449) · [Before (L6443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6443)

```diff
-         UU.jH("aEnchantmentColour", 3), UU.jH("aEnchantmentSpeed", 1), UU.XM.aEnchantmentColour = (0, LU.i)(0, 0, 0), UU.XM.aEnchantmentSpeed = 0, (0, MU.h)(UU), (0, vU.d)(UU), dX(UU, this.shaderPackItem(0, void 0))
+         HH.uF("aEnchantmentColour", 3), HH.uF("aEnchantmentSpeed", 1), HH.kF.aEnchantmentColour = (0, kH.e)(0, 0, 0), HH.kF.aEnchantmentSpeed = 0, (0, RH.i)(HH), (0, jH.c)(HH), bB(HH, this.shaderPackItem(0, void 0))
```

#### 812. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6451` → after: `L6457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6457) · [Before (L6451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6451)

```diff
-           const yU = cU === iU.k.BASE64;
+           const rH = AH === gH.l.BASE64;
```

#### 813. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6453` → after: `L6459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6459) · [Before (L6453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6453)

```diff
-             source: yU ? zU : "",
+             source: rH ? LH : "",
```

#### 814. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6467` → after: `L6473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6473) · [Before (L6467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6467)

```diff
-             return UU && kU.c.getModelOverride(UU.name) ? XU(kU.c.getModel(UU.name, UU.type, !0)) : null
+             return HH && xH.b.getModelOverride(HH.name) ? BH(xH.b.getModel(HH.name, HH.type, !0)) : null
```

#### 815. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6476` → after: `L6482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6482) · [Before (L6476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6476)

```diff
-         } = this.modelGlbLoad(XU), QU = (await (0, uU.c)(zU, UU, cU, yU)).meshes.filter((UU => UU.getTotalVertices() > 0));
+         } = this.modelGlbLoad(BH), SH = (await (0, eH.e)(LH, HH, AH, rH)).meshes.filter((HH => HH.getTotalVertices() > 0));
```

#### 816. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6481` → after: `L6487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6487) · [Before (L6481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6481)

```diff
-         return AU.name = `${this.name}GlbModel`, AU.ma = !1, (0, KU.l)(AU, this.bakeInScaling), AU
+         return hH.name = `${this.name}GlbModel`, hH.jQ = !1, (0, JH.e)(hH, this.bakeInScaling), hH
```

#### 817. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6486` → after: `L6492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6492) · [Before (L6486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6486)

```diff
-         this.loadModel(this.sa, !!XU).then((UU => {
+         this.loadModel(this.NQ, !!BH).then((HH => {
```

#### 818. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6489` → after: `L6495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6495) · [Before (L6489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6489)

```diff
-             for (const XU of UU.material.HUU) XU.name = `${this.name}ItemMat`;
+             for (const BH of HH.material.BBH) BH.name = `${this.name}ItemMat`;
```

#### 819. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6491-L6492` → after: `L6497-L6498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6497-L6498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6497-L6498) · [Before (L6491-L6492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6491-L6492)

```diff
-             (0, yX.G)((0, yX.V)(UU)), (0, xU.d)(UU, (() => {
-               (0, yX.r)((0, yX.V)(UU), sU.e)
+             (0, rB.H)((0, rB.V)(HH)), (0, dH.d)(HH, (() => {
+               (0, rB.p)((0, rB.V)(HH), FH.h)
```

#### 820. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6494` → after: `L6500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6500) · [Before (L6494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6494)

```diff
-           })), UU.YC(!1), this._registerSourceMeshBuffers(UU), (0, jU.c)(UU.material, xU.g), this._sourceMesh = UU;
+           })), HH.vI(!1), this._registerSourceMeshBuffers(HH), (0, sH.c)(HH.material, dH.f), this._sourceMesh = HH;
```

#### 821. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6499` → after: `L6505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6505) · [Before (L6499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6499)

```diff
-             of this._meshParents) XU.oR() || this._attachNewMeshInstanceToParent(XU, cU);
+             of this._meshParents) BH.mV() || this._attachNewMeshInstanceToParent(BH, AH);
```

#### 822. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6520-L6522` → after: `L6526-L6528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6526-L6528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6526-L6528) · [Before (L6520-L6522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6520-L6522)

```diff
-           WY: cU
-         } = (0, oX.e)();
-         cU.xa(zU, !1), (0, QX.q)(zU, 0, 0, 0), null === XU || void 0 === XU || XU(UU, zU)
+           mX: AH
+         } = (0, zB.c)();
+         AH.FQ(LH, !1), (0, SB.p)(LH, 0, 0, 0), null === BH || void 0 === BH || BH(HH, LH)
```

#### 823. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6528` → after: `L6534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6534) · [Before (L6528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6528)

```diff
-               cU = zU.EY.metadatas;
+               AH = LH.YX.metadatas;
```

#### 824. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6531` → after: `L6537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6537) · [Before (L6531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6531)

```diff
-               for (const XU in (0, pU.P)(aU.t)) {
+               for (const BH in (0, uH.Z)(QH.s)) {
```

#### 825. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6541` → after: `L6547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6547) · [Before (L6541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6541)

```diff
-             return null !== (XU = lX.byRoot.get(UU)) && void 0 !== XU ? XU : xX
+             return null !== (BH = ZB.byRoot.get(HH)) && void 0 !== BH ? BH : dB
```

#### 826. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6553` → after: `L6559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6559) · [Before (L6553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6553)

```diff
-         const zU = (0, oX.b)().EY.metadatas[UU];
+         const LH = (0, zB.b)().YX.metadatas[HH];
```

#### 827. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6558` → after: `L6564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6564) · [Before (L6558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6558)

```diff
-         return null !== (UU = (0, oX.e)().EY.I9(this.id)) && void 0 !== UU ? UU : 0
+         return null !== (HH = (0, zB.c)().YX.BHH(this.id)) && void 0 !== HH ? HH : 0
```

#### 828. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6563-L6564` → after: `L6569-L6570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6569-L6570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6569-L6570) · [Before (L6563-L6564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6563-L6564)

```diff
-         super(UU, XU), this.cuboidShape = IX.b, this.harvestLevel = void 0, this.meshMaterial = void 0, this._sourceMeshGrowing = void 0, this.transTex = void 0, this.texturePerSide = void 0, this.model = void 0, this._shareThinBase = null, this._heldSourceMesh = null;
-         const zU = cU.h[UU];
+         super(HH, BH), this.cuboidShape = YB.c, this.harvestLevel = void 0, this.meshMaterial = void 0, this._sourceMeshGrowing = void 0, this.transTex = void 0, this.texturePerSide = void 0, this.model = void 0, this._shareThinBase = null, this._heldSourceMesh = null;
+         const LH = AH.g[HH];
```

#### 829. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6584-L6585` → after: `L6590-L6591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6590-L6591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6590-L6591) · [Before (L6584-L6585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6584-L6585)

```diff
-             name: `${XU}BlockMaterial`,
-             sa: UU,
+             name: `${BH}BlockMaterial`,
+             NQ: HH,
```

#### 830. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6591` → after: `L6597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6597) · [Before (L6591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6591)

```diff
-                 transparencyMode: yX.n.alphaTest,
+                 transparencyMode: rB.o.alphaTest,
```

#### 831. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6597` → after: `L6603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6603) · [Before (L6597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6597)

```diff
-               (0, VU.c)(UU, !0), (0, yX.G)(UU)
+               (0, nH.c)(HH, !0), (0, rB.H)(HH)
```

#### 832. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6612` → after: `L6618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6618) · [Before (L6612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6612)

```diff
-           uD: !0
+           LX: !0
```

#### 833. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6617` → after: `L6623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6623) · [Before (L6617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6617)

```diff
-         return this._needsHeldBase(UU) ? `${XU}|held` : XU
+         return this._needsHeldBase(HH) ? `${BH}|held` : BH
```

#### 834. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6620` → after: `L6626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6626) · [Before (L6620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6620)

```diff
-         if (!UU.uD || this._canShareThinBase()) return !1;
+         if (!HH.LX || this._canShareThinBase()) return !1;
```

#### 835. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6630` → after: `L6636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6636) · [Before (L6630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6630)

```diff
-         return this._shareThinBase ??= this.usesBlockAtlasMaterial() && (0, BU.g)() && null !== (UU = null === (XU = this._perFaceAtlasIdx(!1)) || void 0 === XU ? void 0 : XU.every(Number.isFinite)) && void 0 !== UU && UU, this._shareThinBase
+         return this._shareThinBase ??= this.usesBlockAtlasMaterial() && (0, PH.e)() && null !== (HH = null === (BH = this._perFaceAtlasIdx(!1)) || void 0 === BH ? void 0 : BH.every(Number.isFinite)) && void 0 !== HH && HH, this._shareThinBase
```

#### 836. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6637-L6638` → after: `L6643-L6644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6643-L6644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6643-L6644) · [Before (L6637-L6638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6637-L6638)

```diff
-         const cU = this._perFaceAtlasIdx(zU.uD),
-           yU = (0, oX.e)().WY.DH;
+         const AH = this._perFaceAtlasIdx(LH.LX),
+           rH = (0, zB.c)().mX.bR;
```

#### 837. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6642` → after: `L6648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6648) · [Before (L6642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6642)

```diff
-         const XU = UU ? lU : mU,
+         const BH = HH ? ZH : wH,
```

#### 838. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6649` → after: `L6655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6655) · [Before (L6649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6649)

```diff
-           return XU.map((UU => cU.x[(0, tU.i)(zU[yU[UU]])]))
+           return BH.map((HH => AH.x[(0, WH.k)(LH[rH[HH]])]))
```

#### 839. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6651` → after: `L6657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6657) · [Before (L6651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6651)

```diff
-         const QU = "string" === typeof zU ? zU : fX(zU);
+         const SH = "string" === typeof LH ? LH : qB(LH);
```

#### 840. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6653` → after: `L6659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6659) · [Before (L6653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6653)

```diff
-           const UU = cU.x[(0, tU.i)(QU)];
+           const HH = AH.x[(0, WH.k)(SH)];
```

#### 841. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6669-L6671` → after: `L6675-L6677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6675-L6677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6675-L6677) · [Before (L6669-L6671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6669-L6671)

```diff
-             WY: yU
-           } = (0, oX.e)();
-         yU.xa(cU, !1);
+             mX: rH
+           } = (0, zB.c)();
+         rH.FQ(AH, !1);
```

#### 842. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6673` → after: `L6679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6679) · [Before (L6673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6673)

```diff
-         return (0, QX.q)(cU, 0, 0, 0), cU.RY.set(QU.x, QU.y, QU.z), cU.XM.aLightLevels === (null === (UU = this._sourceMesh.XM) || void 0 === UU ? void 0 : UU.aLightLevels) && (cU.XM.aLightLevels = (0, cX.o)()), null === zU || void 0 === zU || zU(cU, cU), cU
+         return (0, SB.p)(AH, 0, 0, 0), AH.bX.set(SH.x, SH.y, SH.z), AH.kF.aLightLevels === (null === (HH = this._sourceMesh.kF) || void 0 === HH ? void 0 : HH.aLightLevels) && (AH.kF.aLightLevels = (0, AB.m)()), null === LH || void 0 === LH || LH(AH, AH), AH
```

#### 843. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6679` → after: `L6685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6685) · [Before (L6679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6679)

```diff
-           const XU = (0, oX.e)().WY.nS();
+           const BH = (0, zB.c)().mX.yN();
```

#### 844. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6686-L6688` → after: `L6692-L6694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6692-L6694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6692-L6694) · [Before (L6686-L6688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6686-L6688)

```diff
-             WY: zU
-           } = (0, oX.e)();
-         return zU.xa(XU, !1), (0, QX.q)(XU, 0, 0, 0), XU
+             mX: LH
+           } = (0, zB.c)();
+         return LH.FQ(BH, !1), (0, SB.p)(BH, 0, 0, 0), BH
```

#### 845. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6693` → after: `L6699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6699) · [Before (L6693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6693)

```diff
-           uD: zU = !1,
+           LX: LH = !1,
```

#### 846. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6696` → after: `L6702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6702) · [Before (L6696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6696)

```diff
-         } = null !== UU && void 0 !== UU ? UU : {}, QU = [], AU = (0, BU.g)(), FU = this._perFaceAtlasIdx(zU);
+         } = null !== HH && void 0 !== HH ? HH : {}, SH = [], hH = (0, PH.e)(), tH = this._perFaceAtlasIdx(LH);
```

#### 847. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6700-L6701` → after: `L6706-L6707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6706-L6707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6706-L6707) · [Before (L6700-L6701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6700-L6701)

```diff
-               XU = (0, BU.e)(UU, 0, AU),
-               zU = (0, BU.e)(UU, 1, AU);
+               BH = (0, PH.d)(HH, 0, hH),
+               LH = (0, PH.d)(HH, 1, hH);
```

#### 848. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6705-L6707` → after: `L6711-L6713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6711-L6713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6711-L6713) · [Before (L6705-L6707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6705-L6707)

```diff
-         const oU = FU ? (0, IX.t)(cU, FU) : void 0,
-           DU = SX(`${this.name}${zU?"Held":""}Block`, cU, QU, oU, yU);
-         return DU.material = null !== XU && void 0 !== XU ? XU : this.meshMaterial, XU || ((0, MU.h)(DU), (0, vU.d)(DU), dX(DU, this.shaderPackItem(0, void 0))), DU.YC(!1), DU.ma = !1, DU
+         const zH = tH ? (0, YB.p)(AH, tH) : void 0,
+           CH = KB(`${this.name}${LH?"Held":""}Block`, AH, SH, zH, rH);
+         return CH.material = null !== BH && void 0 !== BH ? BH : this.meshMaterial, BH || ((0, RH.i)(CH), (0, jH.c)(CH), bB(CH, this.shaderPackItem(0, void 0))), CH.vI(!1), CH.jQ = !1, CH
```

#### 849. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6717` → after: `L6723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6723) · [Before (L6717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6717)

```diff
-         super(UU, XU), this.type = "StairsBlock", this.cuboidShape = IX.h
+         super(HH, BH), this.type = "StairsBlock", this.cuboidShape = YB.g
```

#### 850. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6723-L6725` → after: `L6729-L6731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6729-L6731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6729-L6731) · [Before (L6723-L6725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6723-L6725)

```diff
-         super(UU, XU), this.droppedMeshTypeScale = .8 * EU.f.droppedBlockSize, this.droppedMeshOffset = 1.3 * EU.f.droppedBlockSize, this.bakeInScaling = 1 / 4 * (null !== (zU = this.heldItemScale) && void 0 !== zU ? zU : 1);
-         const yU = cU.h[UU];
-         yU.blockModelItem && (console.assert(void 0 !== yU.blockModel, `If blockModelItem is true blockModel must be defined: Failed for ${UU}`), this.modelDefault = {
+         super(HH, BH), this.droppedMeshTypeScale = .8 * EH.g.droppedBlockSize, this.droppedMeshOffset = 1.3 * EH.g.droppedBlockSize, this.bakeInScaling = 1 / 4 * (null !== (LH = this.heldItemScale) && void 0 !== LH ? LH : 1);
+         const rH = AH.g[HH];
+         rH.blockModelItem && (console.assert(void 0 !== rH.blockModel, `If blockModelItem is true blockModel must be defined: Failed for ${HH}`), this.modelDefault = {
```

#### 851. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6727-L6728` → after: `L6733-L6734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6733-L6734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6733-L6734) · [Before (L6727-L6728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6727-L6728)

```diff
-           type: iU.f.BLOCK
-         }, this.modelSource = kU.c.getModel(this.modelDefault.name, iU.f.BLOCK)), this.type = "TwoDBlock"
+           type: gH.g.BLOCK
+         }, this.modelSource = xH.b.getModel(this.modelDefault.name, gH.g.BLOCK)), this.type = "TwoDBlock"
```

#### 852. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6734` → after: `L6740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6740) · [Before (L6734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6734)

```diff
-         super(UU, XU), this.droppedMeshTypeScale = .8 * EU.f.droppedBlockSize, this.droppedMeshOffset = 1.3 * EU.f.droppedBlockSize, this.bakeInScaling = 1 / 4 * (null !== (zU = this.heldItemScale) && void 0 !== zU ? zU : 1), this.type = "TwoDItem"
+         super(HH, BH), this.droppedMeshTypeScale = .8 * EH.g.droppedBlockSize, this.droppedMeshOffset = 1.3 * EH.g.droppedBlockSize, this.bakeInScaling = 1 / 4 * (null !== (LH = this.heldItemScale) && void 0 !== LH ? LH : 1), this.type = "TwoDItem"
```

#### 853. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6739` → after: `L6745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6745) · [Before (L6739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6739)

```diff
-         super(UU, XU), this.armourReduction = void 0, this.type = "TwoDArmour", this.armourReduction = aU.n[UU].armourReduction
+         super(HH, BH), this.armourReduction = void 0, this.type = "TwoDArmour", this.armourReduction = QH.m[HH].armourReduction
```

#### 854. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6744` → after: `L6750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6750) · [Before (L6744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6744)

```diff
-       (0, SU.i)(), oX.f.itemsClient = zz, oX.f.blocksClient = cz, oX.f.nonBlocksClient = yz
+       (0, KH.k)(), zB.f.itemsClient = LL, zB.f.blocksClient = AL, zB.f.nonBlocksClient = rL
```

#### 855. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6753-L6755` → after: `L6759-L6761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6759-L6761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6759-L6761) · [Before (L6753-L6755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6753-L6755)

```diff
-             super(UU, XU), this.gunType = void 0, this.fireRate = void 0, this.fireRateWithHeldTouch = void 0, this.equipDelay = void 0, this.shotPelletCount = void 0, this.msPerRound = void 0, this.cadenceMs = void 0, this.reloadTime = void 0, this.clipSize = void 0, this.reload … [truncated]
-             const oU = aU.n[UU];
-             this.gunType = oU.gunType, this.scopeType = oU.scopeType, this.fireRate = oU.fireRate, this.fireRateWithHeldTouch = oU.fireRateWithHeldTouch, this.equipDelay = oU.equipDelay, this.damage = oU.damage, this.shotPelletCount = oU.shotPelletCount, this.msPerRound = oU.msPe … [truncated]
+             super(HH, BH), this.gunType = void 0, this.fireRate = void 0, this.fireRateWithHeldTouch = void 0, this.equipDelay = void 0, this.shotPelletCount = void 0, this.msPerRound = void 0, this.cadenceMs = void 0, this.reloadTime = void 0, this.clipSize = void 0, this.reload … [truncated]
+             const zH = QH.m[HH];
+             this.gunType = zH.gunType, this.scopeType = zH.scopeType, this.fireRate = zH.fireRate, this.fireRateWithHeldTouch = zH.fireRateWithHeldTouch, this.equipDelay = zH.equipDelay, this.damage = zH.damage, this.shotPelletCount = zH.shotPelletCount, this.msPerRound = zH.msPe … [truncated]
```

#### 856. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6757-L6758` → after: `L6763-L6764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6763-L6764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6763-L6764) · [Before (L6757-L6758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6757-L6758)

```diff
-                 name: `${UU}BulletMeshMaterial`,
-                 sa: XU,
+                 name: `${HH}BulletMeshMaterial`,
+                 NQ: BH,
```

#### 857. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6767-L6769` → after: `L6773-L6775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6773-L6775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6773-L6775) · [Before (L6767-L6769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6767-L6769)

```diff
-                 WY: EU
-               } = (0, oX.e)();
-             this.bulletCasingMesh = (0, XX.m)(EU, `${this.name}BulletCasingMesh`, (0, FX.b)({
+                 mX: EH
+               } = (0, zB.c)();
+             this.bulletCasingMesh = (0, BB.n)(EH, `${this.name}BulletCasingMesh`, (0, tB.d)({
```

#### 858. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6773` → after: `L6779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6779) · [Before (L6773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6773)

```diff
-             })), this.bulletCasingMesh.material = DU, this.bulletCasingMesh.ma = !1;
+             })), this.bulletCasingMesh.material = CH, this.bulletCasingMesh.jQ = !1;
```

#### 859. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6775-L6776` → after: `L6781-L6782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6781-L6782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6781-L6782) · [Before (L6775-L6776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6775-L6776)

```diff
-               name: `${UU}BulletHitBillboard`,
-               sa: XU,
+               name: `${HH}BulletHitBillboard`,
+               NQ: BH,
```

#### 860. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6783` → after: `L6789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6789) · [Before (L6783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6783)

```diff
-             this.bulletHitBillboardPlane = (0, XX.m)(EU, `${this.name}BulletHitBillboardPlane`, (0, FX.g)({
+             this.bulletHitBillboardPlane = (0, BB.n)(EH, `${this.name}BulletHitBillboardPlane`, (0, tB.j)({
```

#### 861. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6786` → after: `L6792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6792) · [Before (L6786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6786)

```diff
-             })), this.bulletHitBillboardPlane.ma = !1, this.bulletHitBillboardPlane.material = YU;
+             })), this.bulletHitBillboardPlane.jQ = !1, this.bulletHitBillboardPlane.material = XH;
```

#### 862. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6788-L6789` → after: `L6794-L6795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6794-L6795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6794-L6795) · [Before (L6788-L6789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6788-L6789)

```diff
-               name: `${UU}BulletMeshMaterial`,
-               sa: XU,
+               name: `${HH}BulletMeshMaterial`,
+               NQ: BH,
```

#### 863. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6798` → after: `L6804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6804) · [Before (L6798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6798)

```diff
-             this.movingBulletMesh = (0, XX.m)(EU, `${this.name}MovingBulletMesh`, (0, FX.b)({
+             this.movingBulletMesh = (0, BB.n)(EH, `${this.name}MovingBulletMesh`, (0, tB.d)({
```

#### 864. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6802` → after: `L6808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6808) · [Before (L6802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6802)

```diff
-             })), this.movingBulletMesh.material = NU, this.movingBulletMesh.ma = !1, this.bakeInScaling = .19 * this.heldItemScale, this.droppedMeshTypeScale = .1, this.droppedMeshOffset = .5
+             })), this.movingBulletMesh.material = GH, this.movingBulletMesh.jQ = !1, this.bakeInScaling = .19 * this.heldItemScale, this.droppedMeshTypeScale = .1, this.droppedMeshOffset = .5
```

#### 865. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6821` → after: `L6827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6827) · [Before (L6821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6821)

```diff
-             super(UU, XU), this.harvests = void 0, this.multiplier = void 0, this.level = void 0, this.type = "TwoDTool", this.harvests = aU.n[UU].harvests, this.multiplier = aU.n[UU].multiplier, this.level = aU.n[UU].level
+             super(HH, BH), this.harvests = void 0, this.multiplier = void 0, this.level = void 0, this.type = "TwoDTool", this.harvests = QH.m[HH].harvests, this.multiplier = QH.m[HH].multiplier, this.level = QH.m[HH].level
```

#### 866. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6828-L6829` → after: `L6834-L6835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6834-L6835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6834-L6835) · [Before (L6828-L6829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6828-L6829)

```diff
-             super(UU, XU), this._armourTint = void 0, this.type = "GrayscaleTwoDArmour", this._armourTint = null !== (zU = (0, gU.i)(UU)) && void 0 !== zU ? zU : [255, 255, 255];
-             const cU = `Wood ${(0,IU.zb)(UU)}`;
+             super(HH, BH), this._armourTint = void 0, this.type = "GrayscaleTwoDArmour", this._armourTint = null !== (LH = (0, MH.g)(HH)) && void 0 !== LH ? LH : [255, 255, 255];
+             const AH = `Wood ${(0,YH.wb)(HH)}`;
```

#### 867. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6831-L6832` → after: `L6837-L6838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6837-L6838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6837-L6838) · [Before (L6831-L6832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6831-L6832)

```diff
-               type: iU.k.HTTP,
-               url: this.isCustom ? `${HU.clientSideServerUrls.staticUrl}/models/${(0,IU.Tb)((0,DX.b)().gameNameWithVariation)}/${cU}.glb` : `${HU.clientSideServerUrls.staticUrl}/models/${cU}.glb`
+               type: gH.l.HTTP,
+               url: this.isCustom ? `${NH.clientSideServerUrls.staticUrl}/models/${(0,YH.Wb)((0,CB.c)().gameNameWithVariation)}/${AH}.glb` : `${NH.clientSideServerUrls.staticUrl}/models/${AH}.glb`
```

#### 868. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6838` → after: `L6844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6844) · [Before (L6838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6838)

```diff
-               sa: XU
+               NQ: BH
```

#### 869. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6842` → after: `L6848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6848) · [Before (L6842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6842)

```diff
-             } = ZU.b;
+             } = TH.d;
```

#### 870. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6845` → after: `L6851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6851) · [Before (L6845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6845)

```diff
-               sa: XU,
+               NQ: BH,
```

#### 871. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6849` → after: `L6855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6855) · [Before (L6849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6849)

```diff
-                   url: aX[(0, IU.zb)(UU)],
+                   url: QB[(0, YH.wb)(HH)],
```

#### 872. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6863` → after: `L6869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6869) · [Before (L6863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6863)

```diff
-                 (0, yX.r)(UU, nU.e, {
+                 (0, rB.p)(HH, DH.e, {
```

#### 873. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6870` → after: `L6876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6876) · [Before (L6870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6870)

```diff
-             super._registerSourceMeshBuffers(UU), UU.jH("aArmourTint", 4), UU.jH("aAtlasIdx1", 1), UU.XM.aArmourTint = (0, LU.l)(...this._armourTint, 0), UU.XM.aAtlasIdx1 = 0
+             super._registerSourceMeshBuffers(HH), HH.uF("aArmourTint", 4), HH.uF("aAtlasIdx1", 1), HH.kF.aArmourTint = (0, kH.j)(...this._armourTint, 0), HH.kF.aAtlasIdx1 = 0
```

#### 874. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6881` → after: `L6887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6887) · [Before (L6881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6881)

```diff
-             const cU = (0, oX.e)().WY.DH,
+             const AH = (0, zB.c)().mX.bR,
```

#### 875. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6902` → after: `L6908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6908) · [Before (L6902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6902)

```diff
-       if (UU in cU.h) {
+       if (HH in AH.g) {
```

#### 876. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6904-L6905` → after: `L6910-L6911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6910-L6911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6910-L6911) · [Before (L6904-L6905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6904-L6905)

```diff
-         const yU = null === (AU = cU.h[UU].model) || void 0 === AU ? void 0 : AU.split("|")[0];
-         QU = cU.h[UU].model || cU.h[UU].twoDBlockItem ? Qz[yU] ? new Qz[yU](UU, zU) : new TX(UU, zU) : new jX(UU, zU), cz[UU] = QU, cz[XU] = QU
+         const rH = null === (hH = AH.g[HH].model) || void 0 === hH ? void 0 : hH.split("|")[0];
+         SH = AH.g[HH].model || AH.g[HH].twoDBlockItem ? SL[rH] ? new SL[rH](HH, LH) : new pB(HH, LH) : new sB(HH, LH), AL[HH] = SH, AL[BH] = SH
```

#### 877. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6910` → after: `L6916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6916) · [Before (L6910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6910)

```diff
-   38901: (UU, XU, zU) => {
+   39026: (HH, BH, LH) => {
```

#### 878. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6912` → after: `L6918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6918) · [Before (L6912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6912)

```diff
-       c: () => kU,
+       b: () => xH,
```

#### 879. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6914` → after: `L6920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6920) · [Before (L6914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6914)

```diff
-       e: () => gU
+       h: () => MH
```

#### 880. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6916-L6920` → after: `L6922-L6926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6922-L6926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6922-L6926) · [Before (L6916-L6920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6916-L6920)

```diff
-     var cU = zU(37814),
-       yU = zU(38083),
-       QU = zU(38647),
-       AU = zU(38236),
-       FU = zU(37908);
+     var AH = LH(37961),
+       rH = LH(38222),
+       SH = LH(38785),
+       hH = LH(38339),
+       tH = LH(38062);
```

#### 881. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6923` → after: `L6929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6929) · [Before (L6923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6923)

```diff
-         this.modelUrl = UU, this.container = XU, this.adoptedNodes = zU, this.sa = cU
+         this.modelUrl = HH, this.container = BH, this.adoptedNodes = LH, this.NQ = AH
```

#### 882. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6928` → after: `L6934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6934) · [Before (L6928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6928)

```diff
-         if (!yU) throw new Error(`Could not find root node in model: ${cU}`);
+         if (!rH) throw new Error(`Could not find root node in model: ${AH}`);
```

#### 883. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6930` → after: `L6936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6936) · [Before (L6930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6930)

```diff
-         yU.RY.set(-yU.RY.x, yU.RY.y, yU.RY.z), YU(yU, QU);
+         rH.bX.set(-rH.bX.x, rH.bX.y, rH.bX.z), XH(rH, SH);
```

#### 884. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6940` → after: `L6946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6946) · [Before (L6940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6940)

```diff
-         return QU.RY.set(-QU.RY.x, QU.RY.y, QU.RY.z), {
+         return SH.bX.set(-SH.bX.x, SH.bX.y, SH.bX.z), {
```

#### 885. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6951` → after: `L6957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6957) · [Before (L6951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6951)

```diff
-         if (0 === cU.length) return void console.warn(`Mesh "${zU}" not found in model: ${this.modelUrl}`);
+         if (0 === AH.length) return void console.warn(`Mesh "${LH}" not found in model: ${this.modelUrl}`);
```

#### 886. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6953` → after: `L6959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6959) · [Before (L6953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6953)

```diff
-         if (!yU) throw new Error(`Could not merge the meshes named ${zU} in model: ${this.modelUrl}`);
+         if (!rH) throw new Error(`Could not merge the meshes named ${LH} in model: ${this.modelUrl}`);
```

#### 887. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6967` → after: `L6973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6973) · [Before (L6967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6967)

```diff
-             const UU = NU(zU, QU, this.sa),
+             const HH = GH(LH, SH, this.NQ),
```

#### 888. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6972` → after: `L6978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6978) · [Before (L6972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6972)

```diff
-         else console.warn(`Node "${zU}" not found in model: ${this.modelUrl}`)
+         else console.warn(`Node "${LH}" not found in model: ${this.modelUrl}`)
```

#### 889. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6982` → after: `L6988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6988) · [Before (L6982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6982)

```diff
-             const UU = "string" === typeof FU ? FU : FU.nodeName;
+             const HH = "string" === typeof tH ? tH : tH.nodeName;
```

#### 890. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L6988` → after: `L6994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R6994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L6994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L6994) · [Before (L6988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L6988)

```diff
-         if (0 === DU.length) return void console.warn(`No descendant meshes under "${cU}" to merge in model: ${this.modelUrl}`);
+         if (0 === CH.length) return void console.warn(`No descendant meshes under "${AH}" to merge in model: ${this.modelUrl}`);
```

#### 891. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7002` → after: `L7008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7008) · [Before (L7002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7002)

```diff
-         if (!aU) return void console.warn(`Merge failed for "${cU}" in model: ${this.modelUrl}`);
+         if (!QH) return void console.warn(`Merge failed for "${AH}" in model: ${this.modelUrl}`);
```

#### 892. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7008-L7009` → after: `L7014-L7015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7014-L7015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7014-L7015) · [Before (L7008-L7009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7008-L7009)

```diff
-           of NU) null === IU || IU.oR() || (IU.computeWorldMatrix(!0), pU(FU, IU), EU(FU, tU.multiply(IU.getWorldMatrix().clone().invert())));
-         aU.name = yU, (0, FU.x)(aU, (() => {
+           of GH) null === YH || YH.mV() || (YH.computeWorldMatrix(!0), uH(tH, YH), EH(tH, WH.multiply(YH.getWorldMatrix().clone().invert())));
+         QH.name = rH, (0, tH.o)(QH, (() => {
```

#### 893. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7018` → after: `L7024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7024) · [Before (L7018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7018)

```diff
-         return null !== (XU = null !== (zU = this.container.transformNodes.find((XU => XU.name === UU))) && void 0 !== zU ? zU : this.container.meshes.find((XU => XU.name === UU))) && void 0 !== XU ? XU : null
+         return null !== (BH = null !== (LH = this.container.transformNodes.find((BH => BH.name === HH))) && void 0 !== LH ? LH : this.container.meshes.find((BH => BH.name === HH))) && void 0 !== BH ? BH : null
```

#### 894. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7027` → after: `L7033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7033) · [Before (L7027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7027)

```diff
-         for (const XU of [...UU]) XU.oR() || this.adoptedNodes.has(XU) || XU.dispose()
+         for (const BH of [...HH]) BH.mV() || this.adoptedNodes.has(BH) || BH.dispose()
```

#### 895. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7036` → after: `L7042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7042) · [Before (L7036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7036)

```diff
-       const zU = new cU.Sp,
+       const LH = new AH.lu,
```

#### 896. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7038-L7039` → after: `L7044-L7045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7044-L7045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7044-L7045) · [Before (L7038-L7039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7038-L7039)

```diff
-         QU = new cU.Sp;
-       XU.decompose(QU, yU, zU), UU.position = zU, UU.rotationQuaternion = yU, UU.RY = QU
+         SH = new AH.lu;
+       BH.decompose(SH, rH, LH), HH.position = LH, HH.rotationQuaternion = rH, HH.bX = SH
```

#### 897. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7044` → after: `L7050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7050) · [Before (L7044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7044)

```diff
-       XU.position = UU.position.clone(), zU ? XU.rotationQuaternion = new cU.Quaternion(zU.x, zU.y, zU.z, zU.w) : XU.rotation = UU.rotation.clone(), XU.RY = UU.RY.clone()
+       BH.position = HH.position.clone(), LH ? BH.rotationQuaternion = new AH.Quaternion(LH.x, LH.y, LH.z, LH.w) : BH.rotation = HH.rotation.clone(), BH.bX = HH.bX.clone()
```

#### 898. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7048` → after: `L7054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7054) · [Before (L7048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7048)

```diff
-       return (0, yU.e)(XU) ? (0, QU.q)(XU.WY, UU) : new((0, AU.c)().TransformNode)(UU, zU)
+       return (0, rH.f)(BH) ? (0, SH.q)(BH.mX, HH) : new((0, hH.c)().TransformNode)(HH, LH)
```

#### 899. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7052` → after: `L7058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7058) · [Before (L7052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7052)

```diff
-       return (0, yU.e)(UU[0]) ? (0, QU.k)(UU, !1) : (0, FU.B)(UU)
+       return (0, rH.f)(HH[0]) ? (0, SH.k)(HH, !1) : (0, tH.q)(HH)
```

#### 900. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7060` → after: `L7066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7066) · [Before (L7060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7060)

```diff
-       return ["Mesh", "LiteMesh"].includes(UU.getClassName()) && UU.getTotalVertices() > 0 ? UU : null
+       return ["Mesh", "LiteMesh"].includes(HH.getClassName()) && HH.getTotalVertices() > 0 ? HH : null
```

#### 901. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7080` → after: `L7086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7086) · [Before (L7080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7080)

```diff
-   38661: (UU, XU, zU) => {
+   38800: (HH, BH, LH) => {
```

#### 902. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7082` → after: `L7088-L7089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7088-L7089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7088-L7089) · [Before (L7082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7082)

```diff
-       c: () => RU,
+       C: () => OH,
+       d: () => UH,
```

#### 903. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7086-L7089` → after: `L7092-L7094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7092-L7094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7092-L7094) · [Before (L7086-L7089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7086-L7089)

```diff
-       k: () => HU,
-       l: () => LU,
-       p: () => uU,
-       s: () => fU,
+       j: () => KH,
+       m: () => NH,
+       q: () => kH,
```

#### 904. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7091` → after: `L7096-L7097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7096-L7097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7096-L7097) · [Before (L7091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7091)

```diff
-       v: () => WU
+       w: () => qH,
+       z: () => fH
```

#### 905. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7093-L7099` → after: `L7099-L7105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7099-L7105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7099-L7105) · [Before (L7093-L7099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7093-L7099)

```diff
-     var cU = zU(4608),
-       yU = zU(9782),
-       QU = zU(212),
-       AU = zU(1258),
-       FU = zU(1974),
-       oU = zU(3519),
-       DU = zU(352),
+     var AH = LH(4617),
+       rH = LH(9940),
+       SH = LH(176),
+       hH = LH(1182),
+       tH = LH(1962),
+       zH = LH(3503),
+       CH = LH(330),
```

#### 906. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7101-L7106` → after: `L7107-L7112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7107-L7112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7107-L7112) · [Before (L7101-L7106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7101-L7106)

```diff
-       YU = zU(3043),
-       NU = zU(38610),
-       IU = zU(38004),
-       pU = zU(37814),
-       aU = zU(646),
-       tU = zU(38663);
+       XH = LH(3038),
+       GH = LH(38729),
+       YH = LH(38135),
+       uH = LH(37961),
+       QH = LH(619),
+       WH = LH(38802);
```

#### 907. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7110` → after: `L7116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7116) · [Before (L7110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7110)

```diff
-       BU = (0, oU.e)("square_particle"),
+       PH = (0, zH.f)("square_particle"),
```

#### 908. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7114-L7116` → after: `L7120-L7122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7120-L7122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7120-L7122) · [Before (L7114-L7116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7114-L7116)

```diff
-         this.pSystem = void 0, this.startedSystem = !1, this.WN = void 0, this.boxWidth = .8, this.currentRampColoursBlockId = void 0, this.WN = UU;
-         const XU = UU.WY.lH("breakingParticles", 430);
-         this.pSystem = XU, XU.texture = (0, IU.q)(UU.WY.nS(), BU), XU.blendMode = cU.f.Standard, this.pSystem.addColorGradient(1, (0, NU.l)(255, 255, 255, ZU), (0, NU.l)(255, 255, 255, 1)), this.pSystem.useRampGradients = !0, this.pSystem.addColorRemapGradient(0, ZU, 1), this.pSy … [truncated]
+         this.pSystem = void 0, this.startedSystem = !1, this.bG = void 0, this.boxWidth = .8, this.currentRampColoursBlockId = void 0, this.bG = HH;
+         const BH = HH.mX.XF("breakingParticles", 430);
+         this.pSystem = BH, BH.texture = (0, YH.o)(HH.mX.yN(), PH), BH.blendMode = AH.f.Standard, this.pSystem.addColorGradient(1, (0, GH.j)(255, 255, 255, TH), (0, GH.j)(255, 255, 255, 1)), this.pSystem.useRampGradients = !0, this.pSystem.addColorRemapGradient(0, TH, 1), this.pSy … [truncated]
```

#### 909. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7119-L7120` → after: `L7125-L7126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7125-L7126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7125-L7126) · [Before (L7119-L7120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7119-L7120)

```diff
-         if (!UU || null === this.WN.ZXU) return void(this.startedSystem && (this.pSystem.stop(), this.startedSystem = !1));
-         const XU = this.WN.ZXU,
+         if (!HH || null === this.bG.NBH) return void(this.startedSystem && (this.pSystem.stop(), this.startedSystem = !1));
+         const BH = this.bG.NBH,
```

#### 910. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7124` → after: `L7130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7130) · [Before (L7124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7124)

```diff
-           } = (0, tU.c)(XU.position, yU.h[XU.O4].Ft, 0, this.boxWidth);
+           } = (0, WH.b)(BH.position, rH.g[BH.y5].hW, 0, this.boxWidth);
```

#### 911. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7128` → after: `L7134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7134) · [Before (L7128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7128)

```diff
-         QU.x = this.WN.ZXU.normal[0] + 1, QU.y = this.WN.ZXU.normal[1] + 1, QU.z = this.WN.ZXU.normal[2] + 1, AU.x = this.WN.ZXU.normal[0] - 1, AU.y = this.WN.ZXU.normal[1] - 1, AU.z = this.WN.ZXU.normal[2] - 1, 0 !== this.WN.ZXU.normal[0] ? (QU.x = this.WN.ZXU.normal[0], AU.x =  … [truncated]
+         SH.x = this.bG.NBH.normal[0] + 1, SH.y = this.bG.NBH.normal[1] + 1, SH.z = this.bG.NBH.normal[2] + 1, hH.x = this.bG.NBH.normal[0] - 1, hH.y = this.bG.NBH.normal[1] - 1, hH.z = this.bG.NBH.normal[2] - 1, 0 !== this.bG.NBH.normal[0] ? (SH.x = this.bG.NBH.normal[0], hH.x =  … [truncated]
```

#### 912. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7131` → after: `L7137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7137) · [Before (L7131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7131)

```diff
-         const UU = this.WN.pG(this.WN.ZXU.position);
+         const HH = this.bG.Fv(this.bG.NBH.position);
```

#### 913. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7133` → after: `L7139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7139) · [Before (L7133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7133)

```diff
-         const XU = RU.getUniqueColoursForParticleSystem(this.WN.ZXU.position);
+         const BH = UH.getUniqueColoursForParticleSystem(this.bG.NBH.position);
```

#### 914. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7143` → after: `L7149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7149) · [Before (L7143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7143)

```diff
-         UU.addRampGradient(0, (0, NU.e)(cU));
+         HH.addRampGradient(0, (0, GH.d)(AH));
```

#### 915. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7147` → after: `L7153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7153) · [Before (L7147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7147)

```diff
-           UU.addRampGradient(QU / XU.length - 1e-4, (0, NU.e)(zU)), UU.addRampGradient(QU / XU.length, (0, NU.e)(cU))
+           HH.addRampGradient(SH / BH.length - 1e-4, (0, GH.d)(LH)), HH.addRampGradient(SH / BH.length, (0, GH.d)(AH))
```

#### 916. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7150` → after: `L7156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7156) · [Before (L7150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7150)

```diff
-         UU.addRampGradient(1, (0, NU.e)(yU))
+         HH.addRampGradient(1, (0, GH.d)(rH))
```

#### 917. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7153-L7155` → after: `L7159-L7161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7159-L7161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7159-L7161) · [Before (L7153-L7155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7153-L7155)

```diff
-         const XU = (0, YU.e)().pG(UU);
-         if (0 !== XU) return oU.c.getAverageColours((0, YU.b)().getMetaInfo(XU).rootName);
-         console.error(new Error(`getPosColourForParticleSystem called on air block ${JSON.stringify(UU)}`).stack)
+         const BH = (0, XH.c)().Fv(HH);
+         if (0 !== BH) return zH.b.getAverageColours((0, XH.b)().getMetaInfo(BH).rootName);
+         console.error(new Error(`getPosColourForParticleSystem called on air block ${JSON.stringify(HH)}`).stack)
```

#### 918. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7158` → after: `L7164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7164) · [Before (L7158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7158)

```diff
-     const PU = (0, oU.e)("generic_2");
+     const VH = (0, zH.f)("generic_2");
```

#### 919. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7160` → after: `L7166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7166) · [Before (L7160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7160)

```diff
-     const dU = (0, oU.e)("critical_hit");
+     const bH = (0, zH.f)("critical_hit");
```

#### 920. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7164-L7169` → after: `L7170-L7175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7170-L7175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7170-L7175) · [Before (L7164-L7169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7164-L7169)

```diff
-       const XU = UU.WY.lH("sprintParticles", 50);
-       XU.texture = (0, IU.q)(UU.WY.nS(), PU), XU.blendMode = cU.f.Standard, XU.addColorGradient(0, (0, NU.l)(213, 237, 255, 1), (0, NU.l)(109, 170, 238, 1)), XU.addColorGradient(.2, (0, NU.l)(213, 237, 255, 1), (0, NU.l)(109, 170, 238, 1)), XU.addColorGradient(1, (0, NU.l)(213, 2 … [truncated]
-       XU.minLifeTime = .2, XU.maxLifeTime = .4, XU.minEmitPower = 30, XU.maxEmitPower = 50, XU.emitRate = 5, XU.gravity = new pU.Sp(0, -100, 0), XU.minSize = .15, XU.maxSize = .3, XU.addVelocityGradient(0, .075, .15), XU.addVelocityGradient(1, .075, .15), (0, NU.s)(UU, XU), XU.cr … [truncated]
-       const zU = UU.WY.lH("MU", 50);
-       zU.texture = (0, IU.q)(UU.WY.nS(), dU), zU.blendMode = cU.f.Standard, zU.addColorGradient(0, (0, NU.l)(255, 167, 0, 1), (0, NU.l)(255, 103, 0, 1)), zU.addColorGradient(.2, (0, NU.l)(255, 167, 0, 1), (0, NU.l)(255, 103, 0, 1)), zU.addColorGradient(1, (0, NU.l)(255, 167, 0, 0 … [truncated]
-       zU.minLifeTime = .15, zU.maxLifeTime = .3, zU.minEmitPower = 30, zU.maxEmitPower = 50, zU.emitRate = 5, zU.gravity = new pU.Sp(0, -100, 0), zU.minSize = .15, zU.maxSize = .3, zU.addVelocityGradient(0, .075, .15), zU.addVelocityGradient(1, .075, .15), (0, NU.s)(UU, zU), zU.c … [truncated]
+       const BH = HH.mX.XF("sprintParticles", 50);
+       BH.texture = (0, YH.o)(HH.mX.yN(), VH), BH.blendMode = AH.f.Standard, BH.addColorGradient(0, (0, GH.j)(213, 237, 255, 1), (0, GH.j)(109, 170, 238, 1)), BH.addColorGradient(.2, (0, GH.j)(213, 237, 255, 1), (0, GH.j)(109, 170, 238, 1)), BH.addColorGradient(1, (0, GH.j)(213, 2 … [truncated]
+       BH.minLifeTime = .2, BH.maxLifeTime = .4, BH.minEmitPower = 30, BH.maxEmitPower = 50, BH.emitRate = 5, BH.gravity = new uH.lu(0, -100, 0), BH.minSize = .15, BH.maxSize = .3, BH.addVelocityGradient(0, .075, .15), BH.addVelocityGradient(1, .075, .15), (0, GH.r)(HH, BH), BH.cr … [truncated]
+       const LH = HH.mX.XF("MA", 50);
+       LH.texture = (0, YH.o)(HH.mX.yN(), bH), LH.blendMode = AH.f.Standard, LH.addColorGradient(0, (0, GH.j)(255, 167, 0, 1), (0, GH.j)(255, 103, 0, 1)), LH.addColorGradient(.2, (0, GH.j)(255, 167, 0, 1), (0, GH.j)(255, 103, 0, 1)), LH.addColorGradient(1, (0, GH.j)(255, 167, 0, 0 … [truncated]
+       LH.minLifeTime = .15, LH.maxLifeTime = .3, LH.minEmitPower = 30, LH.maxEmitPower = 50, LH.emitRate = 5, LH.gravity = new uH.lu(0, -100, 0), LH.minSize = .15, LH.maxSize = .3, LH.addVelocityGradient(0, .075, .15), LH.addVelocityGradient(1, .075, .15), (0, GH.r)(HH, LH), LH.c … [truncated]
```

#### 921. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7270` → after: `L7276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7276) · [Before (L7270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7270)

```diff
-         this.pSystem = UU, this.maxLifetimeSecs = XU, this.stopTimeout = null, this.started = !1, this.stopAt = 0, this.kp = !1, UU.manualEmitCount = 0
+         this.pSystem = HH, this.maxLifetimeSecs = BH, this.stopTimeout = null, this.started = !1, this.stopAt = 0, this.Mu = !1, HH.manualEmitCount = 0
```

#### 922. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7273` → after: `L7279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7279) · [Before (L7273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7273)

```diff
-         this.kp || (this.pSystem.manualEmitCount = UU, this.started || (this.pSystem.start(), this.started = !0), this.stopAt = performance.now() + 1e3 * this.maxLifetimeSecs, null === this.stopTimeout && this.scheduleStop(1e3 * this.maxLifetimeSecs))
+         this.Mu || (this.pSystem.manualEmitCount = HH, this.started || (this.pSystem.start(), this.started = !0), this.stopAt = performance.now() + 1e3 * this.maxLifetimeSecs, null === this.stopTimeout && this.scheduleStop(1e3 * this.maxLifetimeSecs))
```

#### 923. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7276` → after: `L7282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7282) · [Before (L7276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7276)

```diff
-         this.kp = !0, null !== this.stopTimeout && (clearTimeout(this.stopTimeout), this.stopTimeout = null), this.pSystem.dispose()
+         this.Mu = !0, null !== this.stopTimeout && (clearTimeout(this.stopTimeout), this.stopTimeout = null), this.pSystem.dispose()
```

#### 924. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7288` → after: `L7294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7294) · [Before (L7288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7288)

```diff
-       (0, NU.s)(UU, XU.pSystem), (0, NU.r)(XU.pSystem, zU), XU.emitAmount(cU)
+       (0, GH.r)(HH, BH.pSystem), (0, GH.p)(BH.pSystem, LH), BH.emitAmount(AH)
```

#### 925. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7290` → after: `L7296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7296) · [Before (L7290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7290)

```diff
-     const rU = (0, yU.j)("Fat Brown Mushroom");
+     const cH = (0, rH.h)("Fat Brown Mushroom");
```

#### 926. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7294` → after: `L7300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7300) · [Before (L7294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7294)

```diff
-       fU(UU, XU === rU ? AU.c.BounceBrownMushroom : AU.c.BounceRedMushroom, zU)
+       qH(HH, BH === cH ? hH.f.BounceBrownMushroom : hH.f.BounceRedMushroom, LH)
```

#### 927. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7298` → after: `L7304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7304) · [Before (L7298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7298)

```diff
-       const cU = XU === AU.c.Bunnyhop || XU === AU.c.JumpPad;
+       const AH = BH === hH.f.Bunnyhop || BH === hH.f.JumpPad;
```

#### 928. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7300-L7301` → after: `L7306-L7307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7306-L7307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7306-L7307) · [Before (L7300-L7301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7300-L7301)

```diff
-       XU === AU.c.Bunnyhop ? (yU = [213, 237, 255], FU = [109, 170, 238]) : XU === AU.c.BounceRedMushroom ? (yU = [196, 63, 63], FU = [148, 53, 53]) : XU === AU.c.BounceBrownMushroom ? (yU = [186, 132, 91], FU = [153, 107, 72]) : XU === AU.c.BunnyhopBounce ? (yU = [217, 170, 2],  … [truncated]
-       const oU = UU.xG.wG(UU.pM);
+       BH === hH.f.Bunnyhop ? (rH = [213, 237, 255], tH = [109, 170, 238]) : BH === hH.f.BounceRedMushroom ? (rH = [196, 63, 63], tH = [148, 53, 53]) : BH === hH.f.BounceBrownMushroom ? (rH = [186, 132, 91], tH = [153, 107, 72]) : BH === hH.f.BunnyhopBounce ? (rH = [217, 170, 2],  … [truncated]
+       const zH = HH.pT.hT(HH.lF);
```

#### 929. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7304` → after: `L7310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7310) · [Before (L7304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7304)

```diff
-         const UU = 1 === zU[1] ? QU.f.cg - .4 : 0;
+         const HH = 1 === LH[1] ? SH.g.iW - .4 : 0;
```

#### 930. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7312` → after: `L7318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7318) · [Before (L7312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7312)

```diff
-       const YU = cU ? CU : wU;
+       const XH = AH ? oH : IH;
```

#### 931. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7333` → after: `L7339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7339) · [Before (L7333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7333)

```diff
-         this.WN = UU, this.cfg = zU, this.pool = [], this.currentIndex = 0;
+         this.bG = HH, this.cfg = LH, this.pool = [], this.currentIndex = 0;
```

#### 932. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7344` → after: `L7350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7350) · [Before (L7344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7344)

```diff
-         const pU = this.WN.camera.wG();
+         const uH = this.bG.camera.hT();
```

#### 933. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7346` → after: `L7352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7352) · [Before (L7346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7346)

```diff
-         const aU = null !== (zU = XU.hideDist) && void 0 !== zU ? zU : this.cfg.hideDist;
+         const QH = null !== (LH = BH.hideDist) && void 0 !== LH ? LH : this.cfg.hideDist;
```

#### 934. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7351` → after: `L7357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7357) · [Before (L7351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7351)

```diff
-         (0, NU.o)(BU, kU, GU), BU.minEmitPower = null !== (cU = XU.minEmitPower) && void 0 !== cU ? cU : BU.minEmitPower, BU.maxEmitPower = null !== (yU = XU.maxEmitPower) && void 0 !== yU ? yU : BU.maxEmitPower, BU.minSize = null !== (QU = XU.minSize) && void 0 !== QU ? QU : BU. … [truncated]
+         (0, GH.o)(PH, xH, vH), PH.minEmitPower = null !== (AH = BH.minEmitPower) && void 0 !== AH ? AH : PH.minEmitPower, PH.maxEmitPower = null !== (rH = BH.maxEmitPower) && void 0 !== rH ? rH : PH.maxEmitPower, PH.minSize = null !== (SH = BH.minSize) && void 0 !== SH ? SH : PH. … [truncated]
```

#### 935. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7355-L7357` → after: `L7361-L7363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7361-L7363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7361-L7363) · [Before (L7355-L7357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7355-L7357)

```diff
-           zU = this.WN.WY.lH(`particlePool_${UU}`, 50),
-           cU = XU.texture.includes("/") ? XU.texture : (0, oU.e)(XU.texture);
-         zU.texture = (0, IU.q)(this.WN.WY.nS(), cU), zU.blendMode = XU.blendMode, zU.minLifeTime = XU.minLifeTime, zU.maxLifeTime = XU.maxLifeTime, zU.minEmitPower = XU.minEmitPower, zU.maxEmitPower = XU.maxEmitPower, zU.minSize = XU.minSize, zU.maxSize = XU.maxSize, zU.gravity = … [truncated]
+           LH = this.bG.mX.XF(`particlePool_${HH}`, 50),
+           AH = BH.texture.includes("/") ? BH.texture : (0, zH.f)(BH.texture);
+         LH.texture = (0, YH.o)(this.bG.mX.yN(), AH), LH.blendMode = BH.blendMode, LH.minLifeTime = BH.minLifeTime, LH.maxLifeTime = BH.maxLifeTime, LH.minEmitPower = BH.minEmitPower, LH.maxEmitPower = BH.maxEmitPower, LH.minSize = BH.minSize, LH.maxSize = BH.maxSize, LH.gravity = … [truncated]
```

#### 936. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7359` → after: `L7365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7365) · [Before (L7359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7359)

```diff
-         this.applyColorGradients(zU, XU.colorGradients), (0, NU.s)(this.WN, zU), zU.createBoxEmitter(new pU.Sp(Math.min(XU.dir1[0], XU.dir2[0]), Math.min(XU.dir1[1], XU.dir2[1]), Math.min(XU.dir1[2], XU.dir2[2])), new pU.Sp(Math.max(XU.dir1[0], XU.dir2[0]), Math.max(XU.dir1[1], X … [truncated]
+         this.applyColorGradients(LH, BH.colorGradients), (0, GH.r)(this.bG, LH), LH.createBoxEmitter(new uH.lu(Math.min(BH.dir1[0], BH.dir2[0]), Math.min(BH.dir1[1], BH.dir2[1]), Math.min(BH.dir1[2], BH.dir2[2])), new uH.lu(Math.max(BH.dir1[0], BH.dir2[0]), Math.max(BH.dir1[1], B … [truncated]
```

#### 937. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7369` → after: `L7375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7375) · [Before (L7369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7369)

```diff
-             const XU = (0, NU.l)(QU.color[0], QU.color[1], QU.color[2], 1);
+             const BH = (0, GH.j)(SH.color[0], SH.color[1], SH.color[2], 1);
```

#### 938. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7373-L7374` → after: `L7379-L7380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7379-L7380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7379-L7380) · [Before (L7373-L7374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7373-L7374)

```diff
-             const XU = (0, NU.l)(QU.minColor[0], QU.minColor[1], QU.minColor[2], null !== (cU = QU.minColor[3]) && void 0 !== cU ? cU : 1),
-               zU = (0, NU.l)(QU.maxColor[0], QU.maxColor[1], QU.maxColor[2], null !== (yU = QU.maxColor[3]) && void 0 !== yU ? yU : 1);
+             const BH = (0, GH.j)(SH.minColor[0], SH.minColor[1], SH.minColor[2], null !== (AH = SH.minColor[3]) && void 0 !== AH ? AH : 1),
+               LH = (0, GH.j)(SH.maxColor[0], SH.maxColor[1], SH.maxColor[2], null !== (rH = SH.maxColor[3]) && void 0 !== rH ? rH : 1);
```

#### 939. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7381` → after: `L7387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7387) · [Before (L7381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7381)

```diff
-       if (!(0, aU.P)(XU.hideDist)) {
+       if (!(0, QH.M)(BH.hideDist)) {
```

#### 940. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7383-L7384` → after: `L7389-L7390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7389-L7390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7389-L7390) · [Before (L7383-L7384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7383-L7384)

```diff
-         for (let UU = 0; UU < 3; UU++) zU.push((0, FU.y)(XU.pos1[UU], XU.pos2[UU], .5));
-         const cU = UU.xG.wG(UU.pM),
+         for (let HH = 0; HH < 3; HH++) LH.push((0, tH.p)(BH.pos1[HH], BH.pos2[HH], .5));
+         const AH = HH.pT.hT(HH.lF),
```

#### 941. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7391` → after: `L7397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7397) · [Before (L7391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7391)

```diff
-   38537: (UU, XU, zU) => {
+   38654: (HH, BH, LH) => {
```

#### 942. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7395-L7407` → after: `L7401-L7413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7401-L7413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7401-L7413) · [Before (L7395-L7407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7395-L7407)

```diff
-     var cU = zU(37977),
-       yU = zU(38560),
-       QU = zU(38592),
-       AU = zU(38053),
-       FU = zU(38573),
-       oU = zU(38597),
-       DU = zU(3519),
-       EU = zU(38549),
-       YU = zU(38543),
-       NU = zU(38034),
-       IU = zU(37968),
-       pU = zU(38007),
-       aU = zU(3043);
+     var AH = LH(38118),
+       rH = LH(38675),
+       SH = LH(38705),
+       hH = LH(38192),
+       tH = LH(38687),
+       zH = LH(38713),
+       CH = LH(3503),
+       EH = LH(38658),
+       XH = LH(38656),
+       GH = LH(38176),
+       YH = LH(38100),
+       uH = LH(38141),
+       QH = LH(3038);
```

#### 943. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7418-L7419` → after: `L7424-L7425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7424-L7425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7424-L7425) · [Before (L7418-L7419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7418-L7419)

```diff
-           ambientLevel: YU.b.ambient,
-           diffuseLevel: YU.b.diffuse
+           ambientLevel: XH.d.ambient,
+           diffuseLevel: XH.d.diffuse
```

#### 944. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7440` → after: `L7446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7446) · [Before (L7440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7440)

```diff
-           alpha: EU.e
+           alpha: EH.i
```

#### 945. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7458-L7459` → after: `L7464-L7465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7464-L7465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7464-L7465) · [Before (L7458-L7459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7458-L7459)

```diff
-           name: `${RU}${YU}`,
-           sa: XU,
+           name: `${UH}${XH}`,
+           NQ: BH,
```

#### 946. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7462-L7463` → after: `L7468-L7469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7468-L7469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7468-L7469) · [Before (L7462-L7463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7462-L7463)

```diff
-         tU && (0, cU.G)(PU);
-         const dU = DU.c.getBlockAtlasArr().map((UU => (0, yU.g)(UU, XU, zU)));
+         WH && (0, AH.H)(VH);
+         const bH = CH.b.getBlockAtlasArr().map((HH => (0, rH.d)(HH, BH, LH)));
```

#### 947. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7466` → after: `L7472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7472) · [Before (L7466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7466)

```diff
-               transparencyMode: cU.n.alphaTest,
+               transparencyMode: AH.o.alphaTest,
```

#### 948. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7480` → after: `L7486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7486) · [Before (L7480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7480)

```diff
-               transparencyMode: cU.n.alphaBlend
+               transparencyMode: AH.o.alphaBlend
```

#### 949. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7482` → after: `L7488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7488) · [Before (L7482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7482)

```diff
-           }), gU && (0, AU.c)(PU, (0, aU.e)().WY), kU && (0, NU.c)(PU, !0), dU.length > 0) {
+           }), MH && (0, hH.d)(VH, (0, QH.c)().mX), xH && (0, GH.c)(VH, !0), bH.length > 0) {
```

#### 950. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7484-L7486` → after: `L7490-L7492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7490-L7492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7490-L7492) · [Before (L7484-L7486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7484-L7486)

```diff
-             urls: DU.c.getBlockAtlasArr(),
-             pixels: DU.c.getBlockAtlasPixels(),
-             layerWidth: DU.c.getBlockAtlasWidth()
+             urls: CH.b.getBlockAtlasArr(),
+             pixels: CH.b.getBlockAtlasPixels(),
+             layerWidth: CH.b.getBlockAtlasWidth()
```

#### 951. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7488` → after: `L7494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7494) · [Before (L7488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7488)

```diff
-           (0, cU.r)(PU, FU.j, (0, QU.g)(UU, dU, void 0, this.Aa(), !1))
+           (0, AH.p)(VH, tH.g, (0, SH.j)(HH, bH, void 0, this.SQ(), !1))
```

#### 952. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7490` → after: `L7496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7496) · [Before (L7490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7490)

```diff
-         return (0, pU.k)(WU), UU[RU] = WU, WU
+         return (0, uH.j)(OH), HH[UH] = OH, OH
```

#### 953. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7499` → after: `L7505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7505) · [Before (L7499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7499)

```diff
-     (0, oU.k)(tU);
+     (0, zH.n)(WH);
```

#### 954. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7502` → after: `L7508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7508) · [Before (L7502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7502)

```diff
-   38826: (UU, XU, zU) => {
+   38950: (HH, BH, LH) => {
```

#### 955. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7504-L7505` → after: `L7510-L7511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7510-L7511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7510-L7511) · [Before (L7504-L7505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7504-L7505)

```diff
-       b: () => iU,
-       d: () => MU
+       c: () => gH,
+       g: () => RH
```

#### 956. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7507` → after: `L7513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7513) · [Before (L7507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7507)

```diff
-     var cU = zU(38313);
+     var AH = LH(38431);
```

#### 957. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7528` → after: `L7534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7534) · [Before (L7528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7528)

```diff
-     var AU = zU(37865);
+     var hH = LH(38017);
```

#### 958. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7556-L7557` → after: `L7562-L7563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7562-L7563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7562-L7563) · [Before (L7556-L7557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7556-L7557)

```diff
-             cU = Number.isNaN(cU) ? UU : cU, XU += this.childWeights[yU], zU += this.childWeights[yU] * UU
-           } return XU > 0 ? zU / XU : Number.isNaN(cU) ? 0 : cU
+             AH = Number.isNaN(AH) ? HH : AH, BH += this.childWeights[rH], LH += this.childWeights[rH] * HH
+           } return BH > 0 ? LH / BH : Number.isNaN(AH) ? 0 : AH
```

#### 959. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7569` → after: `L7575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7575) · [Before (L7569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7569)

```diff
-         cU = zU > 0 ? cU / zU : 1 / yU;
+         AH = LH > 0 ? AH / LH : 1 / rH;
```

#### 960. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7584` → after: `L7590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7590) · [Before (L7584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7584)

```diff
-           const UU = this.gaitPhase + this.restGap() * (0, AU.m)(8 * zU, XU);
+           const HH = this.gaitPhase + this.restGap() * (0, hH.o)(8 * LH, BH);
```

#### 961. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7601` → after: `L7607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7607) · [Before (L7601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7601)

```diff
-         AU !== (null !== (cU = null === (yU = this.current) || void 0 === yU ? void 0 : yU.state) && void 0 !== cU ? cU : null) && (this.current = null === AU ? null : this.enter(AU, QU)), this.updateWeights(XU, zU)
+         hH !== (null !== (AH = null === (rH = this.current) || void 0 === rH ? void 0 : rH.state) && void 0 !== AH ? AH : null) && (this.current = null === hH ? null : this.enter(hH, SH)), this.updateWeights(BH, LH)
```

#### 962. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7616` → after: `L7622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7622) · [Before (L7616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7616)

```diff
-           const UU = this.instances.reduce(((UU, XU) => XU !== cU && (UU === cU || XU.weight < UU.weight) ? XU : UU));
+           const HH = this.instances.reduce(((HH, BH) => BH !== AH && (HH === AH || BH.weight < HH.weight) ? BH : HH));
```

#### 963. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7631` → after: `L7637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7637) · [Before (L7631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7631)

```diff
-         for (const YU of this.instances) YU.weight = YU === cU ? AU : YU.weight * DU, (YU === cU || YU.weight > FU) && (this.instances[EU++] = YU);
+         for (const XH of this.instances) XH.weight = XH === AH ? hH : XH.weight * CH, (XH === AH || XH.weight > tH) && (this.instances[EH++] = XH);
```

#### 964. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7638` → after: `L7644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7644) · [Before (L7638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7638)

```diff
-         this.inputs = new Float64Array(cU.j.Count), this.states = [], this.sleptSeconds = 0
+         this.inputs = new Float64Array(AH.d.Count), this.states = [], this.sleptSeconds = 0
```

#### 965. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7641` → after: `L7647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7647) · [Before (L7641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7641)

```diff
-         for (let zU = 0; zU < cU.j.Count; zU++) this.inputs[zU] = UU[zU];
+         for (let LH = 0; LH < AH.d.Count; LH++) this.inputs[LH] = HH[LH];
```

#### 966. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7686-L7687` → after: `L7692-L7693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7692-L7693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7692-L7693) · [Before (L7686-L7687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7686-L7687)

```diff
-     var tU = zU(38266),
-       gU = zU(38321);
+     var WH = LH(38383),
+       MH = LH(38433);
```

#### 967. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7705` → after: `L7711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7711) · [Before (L7705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7705)

```diff
-         return null !== (XU = this.indexByLowerName.get(UU.toLowerCase())) && void 0 !== XU ? XU : -1
+         return null !== (BH = this.indexByLowerName.get(HH.toLowerCase())) && void 0 !== BH ? BH : -1
```

#### 968. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7708-L7709` → after: `L7714-L7715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7714-L7715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7714-L7715) · [Before (L7708-L7709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7708-L7709)

```diff
-     var BU = zU(38277),
-       ZU = zU(38292);
+     var PH = LH(38396),
+       TH = LH(38408);
```

#### 969. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7722` → after: `L7728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7728) · [Before (L7722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7722)

```diff
-         return UU === ZU.g.Once && (zU > 0 ? this.elapsed >= cU : this.elapsed > cU)
+         return HH === TH.j.Once && (LH > 0 ? this.elapsed >= AH : this.elapsed > AH)
```

#### 970. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7753` → after: `L7759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7759) · [Before (L7753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7753)

```diff
-           zU.elapsed < XU.startDelaySeconds || (zU.weight = zU.fadeInSeconds > 0 ? Math.min(1, zU.weight + UU / zU.fadeInSeconds) : 1, XU.loop === ZU.g.Once && zU.weight >= 1 && zU.elapsed >= XU.startDelaySeconds + XU.lengthSeconds - zU.fadeOutSeconds * zU.speed && (zU.stopping = … [truncated]
+           LH.elapsed < BH.startDelaySeconds || (LH.weight = LH.fadeInSeconds > 0 ? Math.min(1, LH.weight + HH / LH.fadeInSeconds) : 1, BH.loop === TH.j.Once && LH.weight >= 1 && LH.elapsed >= BH.startDelaySeconds + BH.lengthSeconds - LH.fadeOutSeconds * LH.speed && (LH.stopping = … [truncated]
```

#### 971. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7765-L7768` → after: `L7771-L7774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7771-L7774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7771-L7774) · [Before (L7765-L7768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7765-L7768)

```diff
-     var WU = zU(38302),
-       dU = zU(38326),
-       LU = zU(37880),
-       eU = zU(38294);
+     var OH = LH(38420),
+       bH = LH(38439),
+       kH = LH(38032),
+       mH = LH(38413);
```

#### 972. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7775-L7776` → after: `L7781-L7782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7781-L7782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7781-L7782) · [Before (L7775-L7776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7775-L7776)

```diff
-         this.pose = new LU.g(zU), this.accumulator = new LU.d(zU), this.inputs = new Float64Array(cU.j.Count + XU.filters.length), this.layers = XU.layers.map(((XU, zU) => new DU(XU, UU.layerMasks[zU]))), this.runtimes = XU.pools.map((UU => ({
-           queries: new Float64Array(eU.i.Count),
+         this.pose = new kH.g(LH), this.accumulator = new kH.c(LH), this.inputs = new Float64Array(AH.d.Count + BH.filters.length), this.layers = BH.layers.map(((BH, LH) => new CH(BH, HH.layerMasks[LH]))), this.runtimes = BH.pools.map((HH => ({
+           queries: new Float64Array(mH.h.Count),
```

#### 973. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7780` → after: `L7786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7786) · [Before (L7780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7780)

```diff
-           return null !== (zU = UU.variables.slots.get(XU.name)) && void 0 !== zU ? zU : -1
+           return null !== (LH = HH.variables.slots.get(BH.name)) && void 0 !== LH ? LH : -1
```

#### 974. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7796` → after: `L7802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7802) · [Before (L7796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7796)

```diff
-         this.inputs[UU] = Number.isFinite(XU) ? XU : 0
+         this.inputs[HH] = Number.isFinite(BH) ? BH : 0
```

#### 975. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7823` → after: `L7829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7829) · [Before (L7823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7823)

```diff
-           FU = (0, WU.f)(this.rigged.binding.pools, UU);
+           tH = (0, OH.j)(this.rigged.binding.pools, HH);
```

#### 976. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7828` → after: `L7834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7834) · [Before (L7828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7828)

```diff
-         } = FU, EU = SU(zU, 0, 1), YU = (EU > 0 || 0 === AU ? oU.startDelaySeconds + EU * oU.lengthSeconds : 0) + SU(yU, 0, OU) * AU, NU = new RU(CU + oU.id, oU, DU, BU.g.Add, null, QU, QU, AU, YU);
+         } = tH, EH = KH(LH, 0, 1), XH = (EH > 0 || 0 === hH ? zH.startDelaySeconds + EH * zH.lengthSeconds : 0) + KH(rH, 0, lH) * hH, GH = new UH(oH + zH.id, zH, CH, PH.i.Add, null, SH, SH, hH, XH);
```

#### 977. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7832` → after: `L7838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7838) · [Before (L7832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7832)

```diff
-         const XU = (0, WU.f)(this.rigged.binding.pools, UU);
+         const BH = (0, OH.j)(this.rigged.binding.pools, HH);
```

#### 978. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7836` → after: `L7842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7842) · [Before (L7836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7836)

```diff
-         const XU = (0, WU.f)(this.rigged.binding.pools, UU);
+         const BH = (0, OH.j)(this.rigged.binding.pools, HH);
```

#### 979. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7847` → after: `L7853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7853) · [Before (L7847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7847)

```diff
-         const zU = Math.max(0, Number.isFinite(UU) ? UU : 0);
+         const LH = Math.max(0, Number.isFinite(HH) ? HH : 0);
```

#### 980. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7854` → after: `L7860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7860) · [Before (L7854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7854)

```diff
-         const QU = this.travelBacklog * (0, AU.m)(20, zU);
+         const SH = this.travelBacklog * (0, hH.o)(20, LH);
```

#### 981. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L7862` → after: `L7868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R7868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L7868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/88.js#L7868) · [Before (L7862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/88.js#L7862)

```diff
-               for (let zU = 0; zU < UU.length; zU++) XU[cU.j.Count + zU] = (0, cU.k)(UU[zU], XU)
+               for (let LH = 0; LH < HH.length; LH++) BH[AH.d.Count + LH] = (0, AH.f)(HH[LH], BH)
```
