# Changed — Bundle Modifications Report (Part 079 / 142)

- **Updated at**: `2026-11-25T16:44 JST`
- **Part**: `79 / 142` (**379** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 078](part-078.md) · [Part 080 →](part-080.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/77.js` (dz8ef.98c5e741 → wp3j0a.a13381cf · continued)

- **File**: `bundles/bloxd.io/chunks/js/77.js` (4717 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45)

#### 602. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4452-L4456` → after: `L4452-L4456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4452-L4456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4452-L4456) · [Before (L4452-L4456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4452-L4456)

```diff
-           const Eu = this.bloxd.client.inventoryPrediction.predict(mu.b.fillContainer(this.selectedSlot, "Empty Bottle", "Milk Potion", uu));
-           return (0, gu.sendColyMessage)(Mu.lh, {
-             qX: this.hitEId,
-             ol: uu,
-             xX: Eu
+           const bG = this.bloxd.client.inventoryPrediction.predict(vG.e.fillContainer(this.selectedSlot, "Empty Bottle", "Milk Potion", GG));
+           return (0, rG.sendColyMessage)(zG.Qg, {
+             Gy: this.hitEId,
+             ak: GG,
+             Ty: bG
```

#### 603. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4462-L4465` → after: `L4462-L4465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4462-L4465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4462-L4465) · [Before (L4462-L4465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4462-L4465)

```diff
-         return "Shear" === su ? ((0, gu.sendColyMessage)(Mu.lh, {
-           qX: this.hitEId,
-           ol: null,
-           xX: this.bloxd.client.inventoryPrediction.predict(null)
+         return "Shear" === wG ? ((0, rG.sendColyMessage)(zG.Qg, {
+           Gy: this.hitEId,
+           ak: null,
+           Ty: this.bloxd.client.inventoryPrediction.predict(null)
```

#### 604. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4474-L4477` → after: `L4474-L4477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4474-L4477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4474-L4477) · [Before (L4474-L4477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4474-L4477)

```diff
-         const ju = null === (uu = this.Uc.YG.LEu(this.hitEId)) || void 0 === uu ? void 0 : uu.lifeformType;
-         if (!lu.l.includes(ju)) return;
-         this.sendAltAction(Mu.hg), this.sendAltAction(Mu.kg);
-         const su = (0, Ou.j)(ju, null === (Eu = this.nG) || void 0 === Eu ? void 0 : Eu.name);
+         const ZG = null === (GG = this.wf.Hr.ZZG(this.hitEId)) || void 0 === GG ? void 0 : GG.lifeformType;
+         if (!kG.o.includes(ZG)) return;
+         this.sendAltAction(zG.Df), this.sendAltAction(zG.Gf);
+         const wG = (0, KG.h)(ZG, null === (bG = this.qE) || void 0 === bG ? void 0 : bG.name);
```

#### 605. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4485` → after: `L4485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4485) · [Before (L4485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4485)

```diff
-         if ("Name Tag" === (null === (uu = this.nG) || void 0 === uu ? void 0 : uu.name)) {
+         if ("Name Tag" === (null === (GG = this.qE) || void 0 === GG ? void 0 : GG.name)) {
```

#### 606. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4488-L4489` → after: `L4488-L4489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4488-L4489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4488-L4489) · [Before (L4488-L4489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4488-L4489)

```diff
-             const uu = null === (ju = this.Uc.YG.LEu(this.hitEId)) || void 0 === ju ? void 0 : ju.lifeformType;
-             if (lu.l.includes(uu)) return
+             const GG = null === (ZG = this.wf.Hr.ZZG(this.hitEId)) || void 0 === ZG ? void 0 : ZG.lifeformType;
+             if (kG.o.includes(GG)) return
```

#### 607. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4491` → after: `L4491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4491) · [Before (L4491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4491)

```diff
-           return pu.h.TY("EditNameTag", null !== (Eu = this.nG.attributes.customAttributes.text) && void 0 !== Eu ? Eu : ""), {
+           return XG.l.xh("EditNameTag", null !== (bG = this.qE.attributes.customAttributes.text) && void 0 !== bG ? bG : ""), {
```

#### 608. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4499-L4502` → after: `L4499-L4502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4499-L4502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4499-L4502) · [Before (L4499-L4502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4499-L4502)

```diff
-         if ("Book" === (null === (uu = this.nG) || void 0 === uu ? void 0 : uu.name)) return pu.h.TY("EditBook", {
-           pages: (0, Uu.N)(this.nG.attributes.customAttributes.pages),
-           title: null !== (Eu = this.nG.attributes.customDisplayName) && void 0 !== Eu ? Eu : "Title",
-           isPublished: !!this.nG.attributes.customDescription
+         if ("Book" === (null === (GG = this.qE) || void 0 === GG ? void 0 : GG.name)) return XG.l.xh("EditBook", {
+           pages: (0, SG.R)(this.qE.attributes.customAttributes.pages),
+           title: null !== (bG = this.qE.attributes.customDisplayName) && void 0 !== bG ? bG : "Title",
+           isPublished: !!this.qE.attributes.customDescription
```

#### 609. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4510` → after: `L4510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4510) · [Before (L4510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4510)

```diff
-         const Eu = (0, qu.zb)(null === (uu = this.nG) || void 0 === uu ? void 0 : uu.name);
+         const bG = (0, UG.Hb)(null === (GG = this.qE) || void 0 === GG ? void 0 : GG.name);
```

#### 610. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4512-L4514` → after: `L4512-L4514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4512-L4514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4512-L4514) · [Before (L4512-L4514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4512-L4514)

```diff
-         const ju = (0, qu.xb)(Eu),
-           su = this.Uc.YG.mEu(this.Uc.FQ);
-         return Lu.e.swapPosClient(su, ju, this.selectedSlot), {
+         const ZG = (0, UG.Fb)(bG),
+           wG = this.wf.Hr.ebG(this.wf.sA);
+         return eG.d.swapPosClient(wG, ZG, this.selectedSlot), {
```

#### 611. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4523-L4525` → after: `L4523-L4525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4523-L4525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4523-L4525) · [Before (L4523-L4525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4523-L4525)

```diff
-           su = this.bloxd.getItemStat(this.Uc.FQ, null === (uu = this.nG) || void 0 === uu ? void 0 : uu.name, "harvests");
-         if (this.bloxd.playerCanChangePos(this.Uc.FQ, ...this.lX)) {
-           if ("wood" === su && qu.Xd.includes(ju)) return this.sendAltAction(Mu.gg), (0, Yu.b)().lK(...this.lX, (0, fu.g)(`Barkless ${ju}`)), {
+           wG = this.bloxd.getItemStat(this.wf.sA, null === (GG = this.qE) || void 0 === GG ? void 0 : GG.name, "harvests");
+         if (this.bloxd.playerCanChangePos(this.wf.sA, ...this.BL)) {
+           if ("wood" === wG && UG.ne.includes(ZG)) return this.sendAltAction(zG.Bf), (0, hG.e)().HI(...this.BL, (0, YG.p)(`Barkless ${ZG}`)), {
```

#### 612. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4529-L4531` → after: `L4529-L4531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4529-L4531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4529-L4531) · [Before (L4529-L4531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4529-L4531)

```diff
-           if ("Shears" === (null === (Eu = this.nG) || void 0 === Eu ? void 0 : Eu.name)) {
-             const uu = qu.ie.get(ju);
-             if (void 0 !== uu) return this.sendAltAction(Mu.gg), (0, Yu.b)().lK(...this.lX, (0, fu.g)(uu)), {
+           if ("Shears" === (null === (bG = this.qE) || void 0 === bG ? void 0 : bG.name)) {
+             const GG = UG.Ce.get(ZG);
+             if (void 0 !== GG) return this.sendAltAction(zG.Bf), (0, hG.e)().HI(...this.BL, (0, YG.p)(GG)), {
```

#### 613. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4536` → after: `L4536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4536) · [Before (L4536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4536)

```diff
-           return "cuttable" === su && qu.sc.includes((0, fu.e)(this.targetBlock)) ? (this.sendAltAction(Mu.gg), (0, Yu.b)().lK(...this.lX, (0, fu.g)("Tilled Soil")), {
+           return "cuttable" === wG && UG.yc.includes((0, YG.i)(this.targetBlock)) ? (this.sendAltAction(zG.Bf), (0, hG.e)().HI(...this.BL, (0, YG.p)("Tilled Soil")), {
```

#### 614. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4544-L4545` → after: `L4544-L4545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4544-L4545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4544-L4545) · [Before (L4544-L4545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4544-L4545)

```diff
-         if (!ku.includes(null === (uu = this.nG) || void 0 === uu ? void 0 : uu.name)) return;
-         return (null === (Eu = null === (ju = Vu[this.nG.name]) || void 0 === ju ? void 0 : ju.call(Vu, this.Uc)) || void 0 === Eu || Eu) && this.sendConsumableAltAction(this.Uc.sG.creative ? null : mu.b.remove(this.selectedSlot, 1, this.nG.name)), {
+         if (!FG.includes(null === (GG = this.qE) || void 0 === GG ? void 0 : GG.name)) return;
+         return (null === (bG = null === (ZG = lG[this.qE.name]) || void 0 === ZG ? void 0 : ZG.call(lG, this.wf)) || void 0 === bG || bG) && this.sendConsumableAltAction(this.wf.Qr.creative ? null : vG.e.remove(this.selectedSlot, 1, this.qE.name)), {
```

#### 615. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4553-L4554` → after: `L4553-L4554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4553-L4554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4553-L4554) · [Before (L4553-L4554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4553-L4554)

```diff
-         const Eu = null === (uu = this.Uc.YG.GEu(this.hitEId)) || void 0 === uu ? void 0 : uu.mesh;
-         return (void 0 !== (null === Eu || void 0 === Eu ? void 0 : Eu.name) && Qu.v.some((uu => Eu.name.includes(uu))) || this.isThinVehicle(this.hitEId)) && this.distanceTravelled < 3 ? (this.sendAltAction(Mu.hg), {
+         const bG = null === (GG = this.wf.Hr.lbG(this.hitEId)) || void 0 === GG ? void 0 : GG.mesh;
+         return (void 0 !== (null === bG || void 0 === bG ? void 0 : bG.name) && PG.y.some((GG => bG.name.includes(GG))) || this.isThinVehicle(this.hitEId)) && this.distanceTravelled < 3 ? (this.sendAltAction(zG.Df), {
```

#### 616. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4561-L4564` → after: `L4561-L4564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4561-L4564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4561-L4564) · [Before (L4561-L4564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4561-L4564)

```diff
-         if ("number" !== typeof(null === (Eu = this.Uc.YG.GEu(uu)) || void 0 === Eu ? void 0 : Eu.mV)) return !1;
-         const ju = (0, Yu.b)().client.getColyseusEntity(uu),
-           su = "BloxdBlock" === (null === ju || void 0 === ju ? void 0 : ju.meshKind) ? (0, Zu.i)(ju) : null;
-         return "BloxdBlock" === (null === su || void 0 === su ? void 0 : su.type) && Qu.v.includes(su.opts.blockName)
+         if ("number" !== typeof(null === (bG = this.wf.Hr.lbG(GG)) || void 0 === bG ? void 0 : bG.Ql)) return !1;
+         const ZG = (0, hG.e)().client.getColyseusEntity(GG),
+           wG = "BloxdBlock" === (null === ZG || void 0 === ZG ? void 0 : ZG.meshKind) ? (0, LG.e)(ZG) : null;
+         return "BloxdBlock" === (null === wG || void 0 === wG ? void 0 : wG.type) && PG.y.includes(wG.opts.blockName)
```

#### 617. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4567` → after: `L4567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4567) · [Before (L4567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4567)

```diff
-         if ((0, Nu.d)(this.hitEId)) return this.sendAltAction(Mu.kg), {
+         if ((0, QG.g)(this.hitEId)) return this.sendAltAction(zG.Gf), {
```

#### 618. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4576-L4579` → after: `L4576-L4579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4576-L4579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4576-L4579) · [Before (L4576-L4579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4576-L4579)

```diff
-         const Eu = this.Uc.YG.SF(this.Uc.FQ),
-           ju = this.Uc.YG.qEu(this.Uc.FQ);
-         if ((0, Ou.h)(ju, null === (uu = this.nG) || void 0 === uu ? void 0 : uu.name)) {
-           if ((0, Ou.g)(ju) > 0) return {
+         const bG = this.wf.Hr.qT(this.wf.sA),
+           ZG = this.wf.Hr.EbG(this.wf.sA);
+         if ((0, KG.g)(ZG, null === (GG = this.qE) || void 0 === GG ? void 0 : GG.name)) {
+           if ((0, KG.f)(ZG) > 0) return {
```

#### 619. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4583` → after: `L4583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4583) · [Before (L4583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4583)

```diff
-           const uu = (0, ru.g)(this.inven);
+           const GG = (0, jG.f)(this.inven);
```

#### 620. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4586-L4588` → after: `L4586-L4588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4586-L4588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4586-L4588) · [Before (L4586-L4588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4586-L4588)

```diff
-             const Uu = this.bloxd.client.inventoryPrediction.predict(this.bloxd.getClientPredictedOption(this.Uc.FQ, "creative") ? null : mu.b.remove(uu, 1, this.inven.getItemAtIdx(uu).name)),
-               Zu = null !== (su = this.Uc.nuu) && void 0 !== su ? su : this.Uc.camera.Gy();
-             this.bloxd.useGliderFuel(this.Uc.FQ, Zu, qu.f.getFirecrackerBoostMultiplier(this.nG)), this.bloxd.startGliderFuelCooldown(this.Uc.FQ, ju, qu.f.getFirecrackerCooldownMultiplier(this.nG));
+             const SG = this.bloxd.client.inventoryPrediction.predict(this.bloxd.getClientPredictedOption(this.wf.sA, "creative") ? null : vG.e.remove(GG, 1, this.inven.getItemAtIdx(GG).name)),
+               LG = null !== (wG = this.wf.UbG) && void 0 !== wG ? wG : this.wf.camera.zB();
+             this.bloxd.useGliderFuel(this.wf.sA, LG, UG.g.getFirecrackerBoostMultiplier(this.qE)), this.bloxd.startGliderFuelCooldown(this.wf.sA, ZG, UG.g.getFirecrackerCooldownMultiplier(this.qE));
```

#### 621. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4590-L4595` → after: `L4590-L4595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4590-L4595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4590-L4595) · [Before (L4590-L4595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4590-L4595)

```diff
-               lu = this.bloxd.getLifeformEyePos(this.Uc.FQ, !0);
-             lu[1] += 2, Du().du(Xu, lu, Zu, 6), (0, gu.sendColyMessage)(Mu.Vj, {
-               pC: Xu,
-               wC: uu,
-               fX: Zu,
-               xX: Uu
+               kG = this.bloxd.getLifeformEyePos(this.wf.sA, !0);
+             kG[1] += 2, JG().nZ(yG, kG, LG, 6), (0, rG.sendColyMessage)(zG.Aj, {
+               zV: yG,
+               EV: GG,
+               Zy: LG,
+               Ty: SG
```

#### 622. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4597` → after: `L4597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4597) · [Before (L4597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4597)

```diff
-             const fu = 8 * Du().len(Eu.RY);
+             const YG = 8 * JG().len(bG.Sd);
```

#### 623. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4601` → after: `L4601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4601) · [Before (L4601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4601)

```diff
-             this.bloxd.client.meshCreator.newSingleBurstParticleSystem(jE), eu.e.play((0, Gu.e)("bow"), 1).rate(.6 + .2 * Math.random())
+             this.bloxd.client.meshCreator.newSingleBurstParticleSystem(Zb), EG.c.play((0, oG.g)("bow"), 1).rate(.6 + .2 * Math.random())
```

#### 624. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4613` → after: `L4613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4613) · [Before (L4613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4613)

```diff
-           ju = this.bloxd.playerCanChangePos(this.Uc.FQ, ...this.lX);
+           ZG = this.bloxd.playerCanChangePos(this.wf.sA, ...this.BL);
```

#### 625. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4615-L4616` → after: `L4615-L4616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4615-L4616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4615-L4616) · [Before (L4615-L4616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4615-L4616)

```diff
-         if ("Board" === Eu && ju && !cu.singleLineBoardActions.has(null === (Uu = this.bloxd.blockDataOwner.getBlockData(...this.lX)) || void 0 === Uu ? void 0 : Uu.persisted.shared.text.split("\n")[0].toLowerCase())) return pu.h.TY("EditBoard", {
-           pos: this.lX
+         if ("Board" === bG && ZG && !fG.singleLineBoardActions.has(null === (SG = this.bloxd.blockDataOwner.getBlockData(...this.BL)) || void 0 === SG ? void 0 : SG.persisted.shared.text.split("\n")[0].toLowerCase())) return XG.l.xh("EditBoard", {
+           pos: this.BL
```

#### 626. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4622-L4623` → after: `L4622-L4623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4622-L4623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4622-L4623) · [Before (L4622-L4623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4622-L4623)

```diff
-         if ((0, Cu.h)(this.targetBlock) && ju && !bu.h.includes(null === (uu = this.nG) || void 0 === uu ? void 0 : uu.name) && !this.Uc.YG.PEu(this.Uc.FQ).crouching) return pu.h.TY("EditBoard", {
-           pos: this.lX
+         if ((0, VG.f)(this.targetBlock) && ZG && !pG.g.includes(null === (GG = this.qE) || void 0 === GG ? void 0 : GG.name) && !this.wf.Hr.qbG(this.wf.sA).crouching) return XG.l.xh("EditBoard", {
+           pos: this.BL
```

#### 627. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4630-L4632` → after: `L4630-L4632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4630-L4632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4630-L4632) · [Before (L4630-L4632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4630-L4632)

```diff
-           const uu = this.Uc.sG.canEditCode && ju;
-           return uu || this.Uc.YG.PEu(this.Uc.FQ).crouching ? (pu.h.TY("EditCodeBlock", {
-             pos: this.lX,
+           const GG = this.wf.Qr.canEditCode && ZG;
+           return GG || this.wf.Hr.qbG(this.wf.sA).crouching ? (XG.l.xh("EditCodeBlock", {
+             pos: this.BL,
```

#### 628. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4643-L4644` → after: `L4643-L4644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4643-L4644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4643-L4644) · [Before (L4643-L4644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4643-L4644)

```diff
-         if ("Custom Lobby Block" === Eu && ju) return pu.h.TY("EditCustomLobbyBlock", {
-           pos: this.lX
+         if ("Custom Lobby Block" === bG && ZG) return XG.l.xh("EditCustomLobbyBlock", {
+           pos: this.BL
```

#### 629. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4650-L4651` → after: `L4650-L4651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4650-L4651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4650-L4651) · [Before (L4650-L4651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4650-L4651)

```diff
-         if ((0, Ou.C)(Eu, ju)) return pu.h.TY("OpenIronChest", {
-           pos: this.lX
+         if ((0, KG.B)(bG, ZG)) return XG.l.xh("OpenIronChest", {
+           pos: this.BL
```

#### 630. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4658-L4660` → after: `L4658-L4660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4658-L4660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4658-L4660) · [Before (L4658-L4660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4658-L4660)

```diff
-         if (Zu) return this.Uc.sG.canCraft ? (pu.h.TY("toggleMenu", `inventory|${Zu.name}`), "Enchanting Table" === Zu.name && pu.h.TY("enchantingTable", {
-           ul: this.targetBlock,
-           position: this.lX
+         if (LG) return this.wf.Qr.canCraft ? (XG.l.xh("toggleMenu", `inventory|${LG.name}`), "Enchanting Table" === LG.name && XG.l.xh("enchantingTable", {
+           Gk: this.targetBlock,
+           position: this.BL
```

#### 631. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4669` → after: `L4669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4669) · [Before (L4669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4669)

```diff
-         if ((0, Ou.l)(Eu)) return this.sendAltAction(Mu.Xf), {
+         if ((0, KG.i)(bG)) return this.sendAltAction(zG.rf), {
```

#### 632. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4674` → after: `L4674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4674) · [Before (L4674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4674)

```diff
-         if (Wu.b.beds.includes(Eu)) return this.sendAltAction(Mu.kg), {
+         if (AG.c.beds.includes(bG)) return this.sendAltAction(zG.Gf), {
```

#### 633. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4679` → after: `L4679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4679) · [Before (L4679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4679)

```diff
-         if (("Vending Machine" === Eu || "_Vending Machine Top" === Eu) && this.bloxd.getItemStat(this.Uc.FQ, this.targetBlock, "altActionable")) return this.sendAltAction(Mu.kg), {
+         if (("Vending Machine" === bG || "_Vending Machine Top" === bG) && this.bloxd.getItemStat(this.wf.sA, this.targetBlock, "altActionable")) return this.sendAltAction(zG.Gf), {
```

#### 634. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4684` → after: `L4684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4684) · [Before (L4684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4684)

```diff
-         if ((0, Su.d)(Eu) && this.bloxd.getItemStat(this.Uc.FQ, this.targetBlock, "altActionable")) return this.sendAltAction(Mu.kg), {
+         if ((0, sG.g)(bG) && this.bloxd.getItemStat(this.wf.sA, this.targetBlock, "altActionable")) return this.sendAltAction(zG.Gf), {
```

#### 635. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4689` → after: `L4689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4689) · [Before (L4689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4689)

```diff
-         if ((0, fu.n)((0, fu.e)(this.targetBlock))) {
+         if ((0, YG.v)((0, YG.i)(this.targetBlock))) {
```

#### 636. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4692-L4693` → after: `L4692-L4693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4692-L4693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4692-L4693) · [Before (L4692-L4693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4692-L4693)

```diff
-           } = (0, Yu.b)().swapDoorTypeOpenClosed(this.Uc.FQ, ...this.lX, this.targetBlock);
-           return uu || console.error("swapDoorTypeOpenClosed did not succeed but should always succeed on client"), this.sendAltAction(Mu.$f), {
+           } = (0, hG.e)().swapDoorTypeOpenClosed(this.wf.sA, ...this.BL, this.targetBlock);
+           return GG || console.error("swapDoorTypeOpenClosed did not succeed but should always succeed on client"), this.sendAltAction(zG.wf), {
```

#### 637. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4702-L4703` → after: `L4702-L4703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4702-L4703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4702-L4703) · [Before (L4702-L4703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4702-L4703)

```diff
-           if (null !== uu && uu < su.e.bookshelfBookCount && "Book" === (null === (Xu = this.nG) || void 0 === Xu ? void 0 : Xu.name)) {
-             this.Uc.YG.kEu(this.Uc.FQ).setItemSlot(this.selectedSlot, "Air", null)
+           if (null !== GG && GG < wG.d.bookshelfBookCount && "Book" === (null === (yG = this.qE) || void 0 === yG ? void 0 : yG.name)) {
+             this.wf.Hr.gbG(this.wf.sA).setItemSlot(this.selectedSlot, "Air", null)
```

#### 638. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4705` → after: `L4705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4705) · [Before (L4705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4705)

```diff
-           return this.sendAltAction(Mu.Uf), {
+           return this.sendAltAction(zG.pf), {
```

#### 639. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4712-L4714` → after: `L4712-L4714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4712-L4714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4712-L4714) · [Before (L4712-L4714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4712-L4714)

```diff
-           const uu = null === (lu = this.bloxd.blockDataOwner.getBlockData(...this.lX)) || void 0 === lu || null === (qu = lu.persisted) || void 0 === qu ? void 0 : qu.mail;
-           if (void 0 !== uu && uu < su.e.mailboxBookCount && "Book" === (null === (Nu = this.nG) || void 0 === Nu ? void 0 : Nu.name)) {
-             this.Uc.YG.kEu(this.Uc.FQ).setItemSlot(this.selectedSlot, "Air", null)
+           const GG = null === (kG = this.bloxd.blockDataOwner.getBlockData(...this.BL)) || void 0 === kG || null === (UG = kG.persisted) || void 0 === UG ? void 0 : UG.mail;
+           if (void 0 !== GG && GG < wG.d.mailboxBookCount && "Book" === (null === (QG = this.qE) || void 0 === QG ? void 0 : QG.name)) {
+             this.wf.Hr.gbG(this.wf.sA).setItemSlot(this.selectedSlot, "Air", null)
```

#### 640. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4716` → after: `L4716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4716) · [Before (L4716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4716)

```diff
-           return this.sendAltAction(Mu.Uf), {
+           return this.sendAltAction(zG.pf), {
```

#### 641. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4725` → after: `L4725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4725) · [Before (L4725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4725)

```diff
-         return "Cranberries_stage2" === uu ? (this.bloxd.lK(...this.lX, (0, fu.g)("Cranberries_stage1")), this.sendAltAction(Mu.eg), {
+         return "Cranberries_stage2" === GG ? (this.bloxd.HI(...this.BL, (0, YG.p)("Cranberries_stage1")), this.sendAltAction(zG.Af), {
```

#### 642. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4728` → after: `L4728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4728) · [Before (L4728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4728)

```diff
-         }) : "Cotton_stage3" === uu ? (this.bloxd.lK(...this.lX, (0, fu.g)("Cotton_stage2")), this.sendAltAction(Mu.eg), {
+         }) : "Cotton_stage3" === GG ? (this.bloxd.HI(...this.BL, (0, YG.p)("Cotton_stage2")), this.sendAltAction(zG.Af), {
```

#### 643. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4731` → after: `L4731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4731) · [Before (L4731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4731)

```diff
-         }) : this.targetBlock === (0, fu.g)("Chili Pepper Plant|FreshlyGrown") ? (this.bloxd.lK(...this.lX, (0, fu.g)("Chili Pepper Plant_stage2")), this.sendAltAction(Mu.eg), {
+         }) : this.targetBlock === (0, YG.p)("Chili Pepper Plant|FreshlyGrown") ? (this.bloxd.HI(...this.BL, (0, YG.p)("Chili Pepper Plant_stage2")), this.sendAltAction(zG.Af), {
```

#### 644. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4734` → after: `L4734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4734) · [Before (L4734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4734)

```diff
-         }) : this.targetBlock === (0, fu.g)("Chili Pepper Plant|Lava|FreshlyGrown") ? (this.bloxd.lK(...this.lX, (0, fu.g)("Chili Pepper Plant_stage2|Lava")), this.sendAltAction(Mu.eg), {
+         }) : this.targetBlock === (0, YG.p)("Chili Pepper Plant|Lava|FreshlyGrown") ? (this.bloxd.HI(...this.BL, (0, YG.p)("Chili Pepper Plant_stage2|Lava")), this.sendAltAction(zG.Af), {
```

#### 645. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4737` → after: `L4737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4737) · [Before (L4737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4737)

```diff
-         }) : this.targetBlock === (0, fu.g)("Corn Plant|FreshlyGrown") ? (this.bloxd.lK(...this.lX, (0, fu.g)("Corn Plant_stage3")), this.sendAltAction(Mu.eg), {
+         }) : this.targetBlock === (0, YG.p)("Corn Plant|FreshlyGrown") ? (this.bloxd.HI(...this.BL, (0, YG.p)("Corn Plant_stage3")), this.sendAltAction(zG.Af), {
```

#### 646. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4744` → after: `L4744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4744) · [Before (L4744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4744)

```diff
-         if (this.nG) return Xu.l.includes(this.nG.name) ? (this.sendConsumableAltAction(null), {
+         if (this.qE) return yG.k.includes(this.qE.name) ? (this.sendConsumableAltAction(null), {
```

#### 647. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4747` → after: `L4747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4747) · [Before (L4747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4747)

```diff
-         }) : null !== (uu = this.nG) && void 0 !== uu && uu.name.includes("Crossbow Charged") ? (this.sendConsumableAltAction(mu.b.replace(this.selectedSlot, this.nG.name, this.nG.name.split(" Charged")[0])), {
+         }) : null !== (GG = this.qE) && void 0 !== GG && GG.name.includes("Crossbow Charged") ? (this.sendConsumableAltAction(vG.e.replace(this.selectedSlot, this.qE.name, this.qE.name.split(" Charged")[0])), {
```

#### 648. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4753-L4754` → after: `L4753-L4754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4753-L4754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4753-L4754) · [Before (L4753-L4754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4753-L4754)

```diff
-         if (!this.nG) return;
-         const uu = (0, Qu.c)(this.nG.name);
+         if (!this.qE) return;
+         const GG = (0, PG.c)(this.qE.name);
```

#### 649. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4757` → after: `L4757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4757) · [Before (L4757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4757)

```diff
-           return this.Uc.YG.qEu(this.Uc.FQ).physicsState.type !== uu.physicsState.type && (this.bloxd.useConsumableVehicle(this.nG.name), Eu = mu.b.remove(this.selectedSlot, 1, this.nG.name)), this.sendConsumableAltAction(Eu), {
+           return this.wf.Hr.EbG(this.wf.sA).physicsState.type !== GG.physicsState.type && (this.bloxd.useConsumableVehicle(this.qE.name), bG = vG.e.remove(this.selectedSlot, 1, this.qE.name)), this.sendConsumableAltAction(bG), {
```

#### 650. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4764` → after: `L4764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4764) · [Before (L4764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4764)

```diff
-         if (this.targetBlock) return (0, Yu.b)().getItemStat(this.Uc.FQ, this.targetBlock, "altActionable") ? (this.sendAltAction(Mu.kg), {
+         if (this.targetBlock) return (0, hG.e)().getItemStat(this.wf.sA, this.targetBlock, "altActionable") ? (this.sendAltAction(zG.Gf), {
```

#### 651. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4771` → after: `L4771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4771) · [Before (L4771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4771)

```diff
-         (0, gu.sendColyMessage)(Mu.Yf, {
+         (0, rG.sendColyMessage)(zG.uf, {
```

#### 652. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4773` → after: `L4773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4773) · [Before (L4773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4773)

```diff
-           xX: Eu
+           Ty: bG
```

#### 653. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4777` → after: `L4777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4777) · [Before (L4777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4777)

```diff
-         (0, gu.sendColyMessage)(uu, this.altActionPayload()), uu === Mu.kg && this.triggerClientsideGameCallback()
+         (0, rG.sendColyMessage)(GG, this.altActionPayload()), GG === zG.Gf && this.triggerClientsideGameCallback()
```

#### 654. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4782` → after: `L4782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4782) · [Before (L4782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4782)

```diff
-           Xu = null !== (uu = null !== (Eu = null !== (ju = null !== Iu.l && void 0 !== Iu.l ? Iu.l : Fu.b) && void 0 !== ju ? ju : Zu) && void 0 !== Eu ? Eu : Bu.currentUrl.c) && void 0 !== uu ? uu : "0";
+           yG = null !== (GG = null !== (bG = null !== (ZG = null !== qG.p && void 0 !== qG.p ? qG.p : nG.b) && void 0 !== ZG ? ZG : LG) && void 0 !== bG ? bG : gG.currentUrl.c) && void 0 !== GG ? GG : "0";
```

#### 655. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4784-L4788` → after: `L4784-L4788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4784-L4788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4784-L4788) · [Before (L4784-L4788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4784-L4788)

```diff
-           lX: null !== (su = this.lX) && void 0 !== su ? su : null,
-           qX: this.hitEId,
-           fX: null !== (Uu = this.Uc.nuu) && void 0 !== Uu ? Uu : this.Uc.camera.Gy(),
-           CX: UE(this.bloxd, this.nG),
-           bX: Xu
+           BL: null !== (wG = this.BL) && void 0 !== wG ? wG : null,
+           Gy: this.hitEId,
+           Zy: null !== (SG = this.wf.UbG) && void 0 !== SG ? SG : this.wf.camera.zB(),
+           wy: Sb(this.bloxd, this.qE),
+           Sy: yG
```

#### 656. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4793` → after: `L4793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4793) · [Before (L4793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4793)

```diff
-         this.bloxd.client.triggerGameCallback("onPlayerAltAction", this.Uc.FQ, null === (uu = this.lX) || void 0 === uu ? void 0 : uu[0], null === (Eu = this.lX) || void 0 === Eu ? void 0 : Eu[1], null === (ju = this.lX) || void 0 === ju ? void 0 : ju[2], this.targetBlock ? (0, f … [truncated]
+         this.bloxd.client.triggerGameCallback("onPlayerAltAction", this.wf.sA, null === (GG = this.BL) || void 0 === GG ? void 0 : GG[0], null === (bG = this.BL) || void 0 === bG ? void 0 : bG[1], null === (ZG = this.BL) || void 0 === ZG ? void 0 : ZG[2], this.targetBlock ? (0, Y … [truncated]
```

#### 657. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4797` → after: `L4797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4797) · [Before (L4797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4797)

```diff
-     const ZE = ["length", 1, 0, "a", 4, 3, 167, 2, 55, !1, "b", "e", 8, "g", 222, 134, "k", "i", 65, 16, "pK89EO", "8", 512, "012345", 15, 17, "c", 235, 123, 6, 127, 96, "d", 1023, 63, 128, 12, 31, 255, 231, 196, 56, 241, 5, 32, 24, 7, 18, 10, 19, 64, 132, 65535, 208];
+     const Lb = ["length", "a", 0, 192, 6, 123, "c", 13, 1, 3, "e", 2, 7, null, 5, 10, 71, "b", !1, 4, 208, 110, void 0, 217, 96, "d", 66];
```

#### 658. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4804-L4823` → after: `L4804-L4808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4804-L4808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4804-L4808) · [Before (L4804-L4823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4804-L4823)

```diff
-     "lhJoBp" in XE && function() {
-       var uu, Eu, ju, su = function(...Eu) {
-         return lE(Eu[ZE[0]] = ZE[1], Eu[ZE[3]] = []), (Eu[ZE[2]] === ZE[1] || Eu[ZE[2]] >= ZE[4]) && uu(Eu[ZE[3]], [], Eu[ZE[2]], ZE[2]), Eu[ZE[3]]
-       };
-       lE(uu = function(...su) {
-         for (su[ZE[0]] = ZE[4], su[ZE[6]] = su[ZE[5]]; su[ZE[6]] < su[ZE[7]]; su[ZE[6]]++) {
-           if (su[ZE[1]].length !== su[ZE[6]]) return;
-           for (su[ZE[8]] = ZE[2]; su[ZE[8]] < su[ZE[7]]; su[ZE[8]]++) ju(su[ZE[1]], [su[ZE[6]], su[ZE[8]]]) && (lE(su[ZE[1]].push([su[ZE[6]], su[ZE[8]]]), uu(su[ZE[2]], su[ZE[1]], su[ZE[7]], su[ZE[6]] + ZE[1])), su[ZE[1]].length === su[ZE[7]] && su[ZE[2]].push(Eu(su[ZE[1]])), su[ … [truncated]
-         }
-       }, Eu = function(uu) {
-         var Eu, ju, su = [];
-         for (Eu = uu.length, ju = ZE[2]; ju < Eu; ju++) {
-           var Uu;
-           for (su[ju] = "", Uu = ZE[2]; Uu < Eu; Uu++) su[ju] += uu[ju][ZE[1]] === Uu ? "Q" : "."
-         }
-         return su
- ... (4 more removed lines; see GitHub link above)
+     "z173qRk" in yb && function(...GG) {
+       kb(GG[Lb[0]] = Lb[2], GG[Lb[1]] = function(...GG) {
+         for (kb(GG[Lb[0]] = Lb[8], GG[Lb[1]] = Lb[2], GG[Lb[5]] = {}, GG[Lb[6]] = Lb[2], GG[Lb[7]] = Lb[2], GG[Lb[10]] = Lb[2], GG[Lb[4]] = GG[Lb[2]].length), GG[-Lb[3]] = Lb[2]; GG[-Lb[3]] < GG[Lb[4]]; GG[-Lb[3]]++) {
+           for (kb(GG[Lb[5]] = {}, GG[Lb[6]] = Lb[2], GG[Lb[7]] = Lb[8]), GG[-Lb[9]] = GG[-Lb[3]] + Lb[8]; GG[-Lb[9]] < GG[Lb[4]]; GG[-Lb[9]]++) GG[Lb[2]][GG[-Lb[3]]].x !== GG[Lb[2]][GG[-Lb[9]]].x || GG[Lb[2]][GG[-Lb[3]]].y !== GG[Lb[2]][GG[-Lb[9]]].y ? (GG[Lb[2]][GG[-Lb[3]]].y == … [truncated]
+           kb(GG[Lb[6]] += GG[Lb[7]], GG[Lb[1]] = Math.max(GG[Lb[1]], GG[Lb[6]]))
```

#### 659. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4825-L4826` → after: `L4810-L4811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4810-L4811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4810-L4811) · [Before (L4825-L4826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4825-L4826)

```diff
-         return !0
-       }, console.log(su))
+         return GG[Lb[1]]
+       }, console.log(GG[Lb[1]]))
```

#### 660. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4828-L4832` → after: `L4813-L4839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4813-L4839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4813-L4839) · [Before (L4828-L4832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4828-L4832)

```diff
-       lE(uu[ZE[0]] = ZE[2], uu[-ZE[53]] = ZE[2], UE = (Eu, ju) => {
-         let su = Eu.getItemId(null === ju || void 0 === ju ? void 0 : ju.name);
-         if (su <<= ZE[5], (0, gu.isInitSendColyMessage)(gu.sendColyMessage))
-           if (wu[ZE[11]]) su |= ZE[4];
-           else {
+       GG[Lb[0]] = Lb[2], "WmUVYd" + Lb[1] in yb && function(...GG) {
+         function bG() {}
+         GG[Lb[0]] = Lb[2], kb(GG[-Lb[16]] = function(...GG) {
+           for (kb(GG[Lb[0]] = Lb[11], GG[Lb[11]] = Lb[2], GG[Lb[9]] = Lb[2], GG[Lb[6]] = new bG(Lb[2]), GG[Lb[14]] = GG[Lb[6]], GG[Lb[10]] = GG[Lb[2]], GG[Lb[12]] = GG[Lb[8]]); GG[Lb[10]] !== Lb[13] || GG[Lb[12]] !== Lb[13];) kb(GG[Lb[9]] = (GG[Lb[10]] ? GG[Lb[10]].val : Lb[2]) + … [truncated]
+           return GG[Lb[11]] && (GG[Lb[14]].next = new bG(GG[Lb[11]])), GG[Lb[6]].next
+         }, console.log(GG[-Lb[16]]))
+       }(), kb(GG[-Lb[26]] = Lb[2], Sb = (...bG) => {
+         if (bG[Lb[0]] = Lb[11], "M9Yqz71" in yb && function(...GG) {
+             kb(GG[Lb[0]] = Lb[2], GG[Lb[20]] = function(...bG) {
+               return kb(bG[Lb[0]] = Lb[9], bG[Lb[1]] = {}), bG[Lb[11]].length !== bG[Lb[2]].length + bG[Lb[8]].length ? Lb[18] : GG[Lb[17]](bG[Lb[2]], bG[Lb[8]], bG[Lb[11]], Lb[2], Lb[2], Lb[2], bG[Lb[1]])
+             }, GG[Lb[17]] = function(...bG) {
+               return kb(bG[Lb[0]] = Lb[12], bG[Lb[1]] = Lb[18]), bG[Lb[14]] >= bG[Lb[11]].length || (bG[Lb[4]]["" + bG[Lb[9]] + bG[Lb[19]] + bG[Lb[14]]] !== Lb[22] ? bG[Lb[4]]["" + bG[Lb[9]] + bG[Lb[19]] + bG[Lb[14]]] : (bG[Lb[11]][bG[Lb[14]]] === bG[Lb[2]][bG[Lb[9]]] && bG[Lb[11 … [truncated]
+             }, console.log(GG[Lb[20]]))
+           }(), kb(bG[Lb[21]] = bG[Lb[2]].getItemId(bG[Lb[8]] === Lb[13] || void 0 === bG[Lb[8]] ? void 0 : bG[Lb[8]].name), bG[Lb[21]] = bG[Lb[21]] << Lb[9]), (0, rG.isInitSendColyMessage)(rG.sendColyMessage))
+           if (uG.f) {
+             function ZG(...GG) {
+ ... (11 more added lines; see GitHub link above)
```

#### 661. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4834-L4840` → after: `L4841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4841) · [Before (L4834-L4840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4834-L4840)

```diff
-               lE(uu[ZE[0]] = ZE[2], uu[ZE[3]] = function(...uu) {
-                 if (lE(uu[ZE[0]] = ZE[1], uu[ZE[1]] = uu[ZE[2]].length), uu[ZE[1]] < ZE[7]) return ZE[2];
-                 if (lE(uu[ZE[10]] = Math.max(...uu[ZE[2]]), uu[ZE[5]] = Math.min(...uu[ZE[2]])), uu[ZE[10]] === uu[ZE[5]]) return ZE[2];
-                 for (lE(uu[-ZE[15]] = Array(uu[ZE[1]] - ZE[1]).fill(Number.MAX_SAFE_INTEGER), uu[ZE[11]] = Array(uu[ZE[1]] - ZE[1]).fill(Number.MIN_SAFE_INTEGER), uu[ZE[14]] = Math.ceil((uu[ZE[10]] - uu[ZE[5]]) / (uu[ZE[1]] - ZE[1])), uu[ZE[13]] = ZE[2]), uu[ZE[12]] = ZE[2]; uu[Z … [truncated]
-                 for (lE(uu[ZE[17]] = Number.MIN_SAFE_INTEGER, uu[-ZE[18]] = uu[ZE[5]]), uu[ZE[16]] = ZE[2]; uu[ZE[16]] < uu[ZE[1]] - ZE[1]; uu[ZE[16]]++) uu[-ZE[15]][uu[ZE[16]]] === Number.MAX_SAFE_INTEGER && uu[ZE[11]][uu[ZE[16]]] === Number.MIN_SAFE_INTEGER || lE(uu[ZE[17]] = M … [truncated]
-                 return uu[ZE[17]] = Math.max(uu[ZE[17]], uu[ZE[10]] - uu[-ZE[18]]), uu[ZE[17]]
-               }, console.log(uu[ZE[3]]))
+               GG[Lb[0]] = Lb[2]
```

#### 662. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4842` → after: `L4843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4843) · [Before (L4842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4842)

```diff
-             if ("IWGRdt" in XE && Uu(), gu.butto) su |= ZE[43];
+             if ("TAIBwH" in yb && wG(), rG.butto) bG[Lb[21]] = bG[Lb[21]] | Lb[14];
```

#### 663. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4845-L4967` → after: `L4846-L4853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4846-L4853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4846-L4853) · [Before (L4845-L4967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4845-L4967)

```diff
-                 lE(uu[ZE[0]] = ZE[2], uu[ZE[10]] = function() {
-                   var uu, Eu, ju = ZE[2];
- 
-                   function su(...Eu) {
-                     return Eu[ZE[0]] = ZE[7],
-                       function(...Eu) {
-                         Eu[ZE[0]] = ZE[1];
-                         for (lE(Eu[-ZE[15]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Eu[ZE[7]] = "", Eu[ZE[26]] = Eu[ZE[2]].length), Eu[-ZE[25]] = ZE[2]; Eu[-ZE[25]] < Eu[ZE[26]]; Eu[-ZE[25]] += ZE[5])
-                           for (Eu[-ZE[28]] = Eu[ZE[2]].charCodeAt(Eu[-ZE[25]]) << ZE[19] | (Eu[-ZE[25]] + ZE[1] < Eu[ZE[26]] ? Eu[ZE[2]].charCodeAt(Eu[-ZE[25]] + ZE[1]) << ZE[12] : ZE[2]) | (Eu[-ZE[25]] + ZE[7] < Eu[ZE[26]] ? Eu[ZE[2]].charCodeAt(Eu[-ZE[25]] + ZE[7]) : ZE[2]), Eu … [truncated]
-                         return Eu[ZE[7]]
-                       }(Zu(lu(Eu[ZE[2]]), lu(Eu[ZE[1]])))
-                   }
- 
-                   function Uu(...uu) {
-                     return uu[ZE[0]] = ZE[5],
-                       function(...uu) {
- ... (107 more removed lines; see GitHub link above)
+                 kb(GG[Lb[0]] = Lb[2], GG[Lb[17]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", GG[Lb[24]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", GG[Lb[25]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d( … [truncated]
+               }
+               if ("iOehnnG" in yb && SG(), GG[-Lb[26]]++ === Lb[19]) kb(GG[-Lb[26]] = Lb[2], bG[Lb[21]] = bG[Lb[21]] | Lb[11]);
+               else {
+                 function LG(...GG) {
+                   GG[Lb[0]] = Lb[2]
+                 }
+                 "CfCD3L" in yb && LG(), bG[Lb[21]] = bG[Lb[21]] | Lb[9]
```

#### 664. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4972-L4973` → after: `L4857-L4858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4857-L4858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4857-L4858) · [Before (L4972-L4973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4972-L4973)

```diff
-         else su |= ZE[1];
-         return su
+         else bG[Lb[21]] = bG[Lb[21]] | Lb[8];
+         return bG[Lb[21]]
```

#### 665. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4977` → after: `L4862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4862) · [Before (L4977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4977)

```diff
-   38400: (uu, Eu, ju) => {
+   38427: (GG, bG, ZG) => {
```

#### 666. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4985` → after: `L4870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4870) · [Before (L4985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4985)

```diff
-   38395: (uu, Eu, ju) => {
+   38425: (GG, bG, ZG) => {
```

#### 667. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4987` → after: `L4872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4872) · [Before (L4987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4987)

```diff
-       b: () => Mu
+       e: () => zG
```

#### 668. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4989` → after: `L4874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4874) · [Before (L4989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4989)

```diff
-     var su = ju(366),
+     var wG = ZG(364),
```

#### 669. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L4991-L5001` → after: `L4876-L4886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4876-L4886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4876-L4886) · [Before (L4991-L5001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L4991-L5001)

```diff
-       Zu = ju(38400),
-       Xu = ju(2893),
-       lu = ju(3879),
-       qu = ju(37803),
-       fu = ju(3946),
-       Cu = ju(202),
-       bu = ju(37671),
-       cu = ju(37488),
-       Nu = ju(37664),
-       Ou = ju(38405),
-       Yu = ju(38298);
+       LG = ZG(38427),
+       yG = ZG(2751),
+       kG = ZG(3683),
+       UG = ZG(37763),
+       YG = ZG(3766),
+       VG = ZG(188),
+       pG = ZG(37618),
+       fG = ZG(37432),
+       QG = ZG(37613),
+       KG = ZG(38436),
+       hG = ZG(38304);
```

#### 670. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5007` → after: `L4892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4892) · [Before (L5007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5007)

```diff
-         this.Uc = void 0, this._playerEId = void 0, this.entityRayStart = [0, 0, 0], this.entityRayOrigin = new cu.dO, this.entityRayDirection = new cu.dO, this.entityRay = new Nu.e(this.entityRayOrigin, this.entityRayDirection), this.entityHitEId = null, this.Uc = uu, this._play … [truncated]
+         this.wf = void 0, this._playerEId = void 0, this.entityRayStart = [0, 0, 0], this.entityRayOrigin = new fG.mK, this.entityRayDirection = new fG.mK, this.entityRay = new QG.h(this.entityRayOrigin, this.entityRayDirection), this.entityHitEId = null, this.wf = GG, this._play … [truncated]
```

#### 671. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5011-L5012` → after: `L4896-L4897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4896-L4897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4896-L4897) · [Before (L5011-L5012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5011-L5012)

```diff
-         const ju = this.doPickAction(null !== (Eu = this.Uc.nuu) && void 0 !== Eu ? Eu : this.Uc.camera.Gy(), uu);
-         return this._attackWasBlocked(ju) && ju.localHitPosition && ju.mI ? {
+         const ZG = this.doPickAction(null !== (bG = this.wf.UbG) && void 0 !== bG ? bG : this.wf.camera.zB(), GG);
+         return this._attackWasBlocked(ZG) && ZG.localHitPosition && ZG.kR ? {
```

#### 672. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5014` → after: `L4899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4899) · [Before (L5014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5014)

```diff
-           normal: ju.mI
+           normal: ZG.kR
```

#### 673. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5019-L5020` → after: `L4904-L4905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4904-L4905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4904-L4905) · [Before (L5019-L5020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5019-L5020)

```diff
-         const su = (0, Xu.b)(),
-           Zu = su.MEu(su.getLifeformEyePos(this._playerEId, !1)),
+         const wG = (0, yG.e)(),
+           LG = wG.abG(wG.getLifeformEyePos(this._playerEId, !1)),
```

#### 674. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5024` → after: `L4909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4909) · [Before (L5024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5024)

```diff
-           const ju = this._tryDoPick(qu, uu, Eu, lu ? hu : null),
+           const ZG = this._tryDoPick(UG, GG, bG, kG ? dG : null),
```

#### 675. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5027` → after: `L4912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4912) · [Before (L5027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5027)

```diff
-           ju.localHitPosition ? Xu = ju.localHitPosition : (Uu().normalize(uu, uu), Xu = Uu().create(), Uu().du(Xu, qu, uu, 1e3)), Uu().subtract(su, Xu, Zu), Uu().normalize(su, su);
+           ZG.localHitPosition ? yG = ZG.localHitPosition : (SG().normalize(GG, GG), yG = SG().create(), SG().nZ(yG, UG, GG, 1e3)), SG().subtract(wG, yG, LG), SG().normalize(wG, wG);
```

#### 676. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5029` → after: `L4914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4914) · [Before (L5029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5029)

```diff
-             ...this._tryDoPick(Zu, su, Eu, lu ? Du : null),
+             ...this._tryDoPick(LG, wG, bG, kG ? JG : null),
```

#### 677. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5033` → after: `L4918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4918) · [Before (L5033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5033)

```diff
-         return this._tryDoPick(Zu, uu, Eu, lu ? Du : null)
+         return this._tryDoPick(LG, GG, bG, kG ? JG : null)
```

#### 678. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5036-L5037` → after: `L4921-L4922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4921-L4922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4921-L4922) · [Before (L5036-L5037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5036-L5037)

```diff
-         const ju = (0, Xu.b)(),
-           su = ju.MEu(ju.getLifeformEyePos(this._playerEId, !1)),
+         const ZG = (0, yG.e)(),
+           wG = ZG.abG(ZG.getLifeformEyePos(this._playerEId, !1)),
```

#### 679. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5039-L5040` → after: `L4924-L4925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4924-L4925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4924-L4925) · [Before (L5039-L5040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5039-L5040)

```diff
-           qu = null !== lu && void 0 !== lu ? lu : su,
-           fu = this._tryDoPick(qu, uu, Eu + (lu ? Uu().LX(lu, su) : 0));
+           UG = null !== kG && void 0 !== kG ? kG : wG,
+           YG = this._tryDoPick(UG, GG, bG + (kG ? SG().ey(kG, wG) : 0));
```

#### 680. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5042` → after: `L4927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4927) · [Before (L5042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5042)

```diff
-         const Cu = Uu().LX(fu.localHitPosition, su);
+         const VG = SG().ey(YG.localHitPosition, wG);
```

#### 681. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5050-L5052` → after: `L4935-L4937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4935-L4937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4935-L4937) · [Before (L5050-L5052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5050-L5052)

```diff
-         if (this._playerEId !== this.Uc.FQ || 0 === this.Uc.camera.uH) return null;
-         const ju = null !== (uu = null === (Eu = this.Uc.tO.Sju()) || void 0 === Eu ? void 0 : Eu.eye) && void 0 !== uu ? uu : this.Uc.tO.camera.globalPosition.Osu();
-         return Uu().bu(ju[0], ju[1], ju[2])
+         if (this._playerEId !== this.wf.sA || 0 === this.wf.camera.hN) return null;
+         const ZG = null !== (GG = null === (bG = this.wf.HK.GwG()) || void 0 === bG ? void 0 : bG.eye) && void 0 !== GG ? GG : this.wf.HK.camera.globalPosition.mwG();
+         return SG().wb(ZG[0], ZG[1], ZG[2])
```

#### 682. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5063` → after: `L4948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4948) · [Before (L5063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5063)

```diff
-               ...this._tryDoPick(uu.localOrigin, Eu, ju, !0 === su.visualiseRaycasts ? Du : null), localRayOrigin: uu.localOrigin, globalRayOrigin: uu.globalOrigin
+               ...this._tryDoPick(GG.localOrigin, bG, ZG, !0 === wG.visualiseRaycasts ? JG : null), localRayOrigin: GG.localOrigin, globalRayOrigin: GG.globalOrigin
```

#### 683. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5068-L5071` → after: `L4953-L4956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4953-L4956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4953-L4956) · [Before (L5068-L5071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5068-L5071)

```diff
-         if (this._playerEId === this.Uc.FQ && this.Uc.camera.aT < .01) return this.getDefaultWeaponRay();
-         if (!this.Uc.YG.yXu(this._playerEId)) return null;
-         const uu = this.Uc.YG.GEu(this._playerEId),
-           Eu = null === uu || void 0 === uu ? void 0 : uu.mV;
+         if (this._playerEId === this.wf.sA && this.wf.camera.pN < .01) return this.getDefaultWeaponRay();
+         if (!this.wf.Hr.pkG(this._playerEId)) return null;
+         const GG = this.wf.Hr.lbG(this._playerEId),
+           bG = null === GG || void 0 === GG ? void 0 : GG.Ql;
```

#### 684. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5073` → after: `L4958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4958) · [Before (L5073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5073)

```diff
-         const ju = this.Uc.tO.oV;
+         const ZG = this.wf.HK.Vl;
```

#### 685. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5079` → after: `L4964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4964) · [Before (L5079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5079)

```diff
-           lu = cu.dO.TransformNormal(new cu.dO(0, 0, 1), Zu);
+           kG = fG.mK.TransformNormal(new fG.mK(0, 0, 1), LG);
```

#### 686. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5084` → after: `L4969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4969) · [Before (L5084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5084)

```diff
-         return this.Uc.HA(qu, fu), {
+         return this.wf.Bx(UG, YG), {
```

#### 687. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5095` → after: `L4980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4980) · [Before (L5095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5095)

```diff
-             return null !== (Eu = this.getHeadRay()) && void 0 !== Eu ? Eu : this.getDefaultWeaponRay();
+             return null !== (bG = this.getHeadRay()) && void 0 !== bG ? bG : this.getDefaultWeaponRay();
```

#### 688. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5101` → after: `L4986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4986) · [Before (L5101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5101)

```diff
-         const uu = (0, Xu.b)(),
+         const GG = (0, yG.e)(),
```

#### 689. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5104` → after: `L4989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4989) · [Before (L5104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5104)

```diff
-           localOrigin: uu.MEu(Eu),
+           localOrigin: GG.abG(bG),
```

#### 690. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5106` → after: `L4991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R4991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L4991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L4991) · [Before (L5106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5106)

```diff
-           direction: qu.d.copyAimDirection(this.Uc, [0, 0, 0]),
+           direction: UG.d.copyAimDirection(this.wf, [0, 0, 0]),
```

#### 691. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5116` → after: `L5001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5001) · [Before (L5116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5116)

```diff
-           mI: Xu,
+           kR: yG,
```

#### 692. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5118-L5119` → after: `L5003-L5004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5003-L5004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5003-L5004) · [Before (L5118-L5119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5118-L5119)

```diff
-         } = this.doPickAction(uu, Cu.e.entityInteractReach);
-         return Eu === Zu.b.HIT_ENTITY ? ju : null
+         } = this.doPickAction(GG, VG.d.entityInteractReach);
+         return bG === LG.b.HIT_ENTITY ? ZG : null
```

#### 693. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5123-L5124` → after: `L5008-L5009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5008-L5009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5008-L5009) · [Before (L5123-L5124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5123-L5124)

```diff
-         const Zu = null !== (su = null === (Uu = this.Uc.YG.PEu(this._playerEId)) || void 0 === Uu ? void 0 : Uu.ridingVehicleEId) && void 0 !== su ? su : null,
-           Xu = this.Uc.MEu(uu, null, this.entityRayStart);
+         const LG = null !== (wG = null === (SG = this.wf.Hr.qbG(this._playerEId)) || void 0 === SG ? void 0 : SG.ridingVehicleEId) && void 0 !== wG ? wG : null,
+           yG = this.wf.abG(GG, null, this.entityRayStart);
```

#### 694. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5145` → after: `L5030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5030) · [Before (L5145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5145)

```diff
-         const Uu = (0, Ou.b)(this.Uc.tO, this.entityRay),
+         const SG = (0, KG.d)(this.wf.HK, this.entityRay),
```

#### 695. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5147` → after: `L5032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5032) · [Before (L5147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5147)

```diff
-           Xu = this.Uc.tO.oV.Hc(this.entityRayOrigin, this.entityRayDirection, null !== Zu && void 0 !== Zu ? Zu : uu);
+           yG = this.wf.HK.Vl.Df(this.entityRayOrigin, this.entityRayDirection, null !== LG && void 0 !== LG ? LG : GG);
```

#### 696. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5149` → after: `L5034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5034) · [Before (L5149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5149)

```diff
-         const lu = null !== (Eu = null === Uu || void 0 === Uu || null === (ju = Uu.pickedMesh) || void 0 === ju || null === (su = ju.metadata) || void 0 === su ? void 0 : su.eId) && void 0 !== Eu ? Eu : null;
+         const kG = null !== (bG = null === SG || void 0 === SG || null === (ZG = SG.pickedMesh) || void 0 === ZG || null === (wG = ZG.metadata) || void 0 === wG ? void 0 : wG.eId) && void 0 !== bG ? bG : null;
```

#### 697. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5168-L5169` → after: `L5053-L5054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5053-L5054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5053-L5054) · [Before (L5168-L5169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5168-L5169)

```diff
-         const ju = null !== (uu = null === (Eu = this.Uc.YG.GEu(this._playerEId)) || void 0 === Eu ? void 0 : Eu.mV) && void 0 !== uu ? uu : null,
-           su = this.Uc.tO.oV;
+         const ZG = null !== (GG = null === (bG = this.wf.Hr.lbG(this._playerEId)) || void 0 === bG ? void 0 : bG.Ql) && void 0 !== GG ? GG : null,
+           wG = this.wf.HK.Vl;
```

#### 698. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5173` → after: `L5058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5058) · [Before (L5173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5173)

```diff
-         null !== uu && this.Uc.tO.oV.setPickable(uu, !0)
+         null !== GG && this.wf.HK.Vl.setPickable(GG, !0)
```

#### 699. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5177` → after: `L5062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5062) · [Before (L5177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5177)

```diff
-           Xu = su ? Uu().LX(uu, su.XEu) : ju,
+           yG = wG ? SG().ey(GG, wG.rbG) : ZG,
```

#### 700. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5183` → after: `L5068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5068) · [Before (L5183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5183)

```diff
-           Cu = null !== qu ? Uu().bu(lu.pickedPoint.x, lu.pickedPoint.y, lu.pickedPoint.z) : null,
+           VG = null !== UG ? SG().wb(kG.pickedPoint.x, kG.pickedPoint.y, kG.pickedPoint.z) : null,
```

#### 701. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5185` → after: `L5070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5070) · [Before (L5185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5185)

```diff
-         null !== Cu && fu.Uc.HA(Cu, bu);
+         null !== VG && YG.wf.Bx(VG, pG);
```

#### 702. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5188` → after: `L5073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5073) · [Before (L5188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5188)

```diff
-           const uu = Uu().bu(lu.pickedPoint.x, lu.pickedPoint.y, lu.pickedPoint.z),
+           const GG = SG().wb(kG.pickedPoint.x, kG.pickedPoint.y, kG.pickedPoint.z),
```

#### 703. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5190` → after: `L5075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5075) · [Before (L5190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5190)

```diff
-           fu.Uc.HA(uu, ju);
+           YG.wf.Bx(GG, ZG);
```

#### 704. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5197` → after: `L5082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5082) · [Before (L5197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5197)

```diff
-             mI: su,
+             kR: wG,
```

#### 705. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5203` → after: `L5088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5088) · [Before (L5203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5203)

```diff
-           Uu().copy(Eu, su.XEu);
+           SG().copy(bG, wG.rbG);
```

#### 706. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5209` → after: `L5094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5094) · [Before (L5209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5209)

```diff
-             distanceTravelled: Uu().LX(uu, su.XEu),
+             distanceTravelled: SG().ey(GG, wG.rbG),
```

#### 707. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5212` → after: `L5097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5097) · [Before (L5212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5212)

```diff
-             mI: Xu,
+             kR: yG,
```

#### 708. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5221` → after: `L5106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5106) · [Before (L5221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5221)

```diff
-           mI: null,
+           kR: null,
```

#### 709. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5228-L5233` → after: `L5113-L5118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5113-L5118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5113-L5118) · [Before (L5228-L5233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5228-L5233)

```diff
-         const lu = new cu.dO(uu[0], uu[1], uu[2]),
-           qu = new cu.dO(Eu[0], Eu[1], Eu[2]),
-           fu = new Nu.e(lu, qu, ju),
-           Cu = (0, Ou.b)(this.Uc.tO, fu),
-           bu = null !== (su = null === (Uu = Cu.pickedMesh) || void 0 === Uu || null === (Zu = Uu.metadata) || void 0 === Zu ? void 0 : Zu.eId) && void 0 !== su ? su : null,
-           Yu = this.Uc.tO.oV.Hc(lu, qu, null !== (Xu = null !== Cu && void 0 !== Cu && Cu.hit ? Cu.distance : null) && void 0 !== Xu ? Xu : ju);
+         const kG = new fG.mK(GG[0], GG[1], GG[2]),
+           UG = new fG.mK(bG[0], bG[1], bG[2]),
+           YG = new QG.h(kG, UG, ZG),
+           VG = (0, KG.d)(this.wf.HK, YG),
+           pG = null !== (wG = null === (SG = VG.pickedMesh) || void 0 === SG || null === (LG = SG.metadata) || void 0 === LG ? void 0 : LG.eId) && void 0 !== wG ? wG : null,
+           hG = this.wf.HK.Vl.Df(kG, UG, null !== (yG = null !== VG && void 0 !== VG && VG.hit ? VG.distance : null) && void 0 !== yG ? yG : ZG);
```

#### 710. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5240-L5241` → after: `L5125-L5126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5125-L5126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5125-L5126) · [Before (L5240-L5241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5240-L5241)

```diff
-         const su = this.Uc.zb;
-         return this.Uc.KF(uu, Eu, ju, ((uu, Eu, ju, Uu) => su.tL(Eu, ju, Uu)))
+         const wG = this.wf.Op;
+         return this.wf.jT(GG, bG, ZG, ((GG, bG, ZG, SG) => wG.dD(bG, ZG, SG)))
```

#### 711. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5248-L5249` → after: `L5133-L5134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5133-L5134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5133-L5134) · [Before (L5248-L5249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5248-L5249)

```diff
-         const Uu = new cu.dO(uu[0], uu[1], uu[2]),
-           Zu = new cu.dO(Eu[0], Eu[1], Eu[2]);
+         const SG = new fG.mK(GG[0], GG[1], GG[2]),
+           LG = new fG.mK(bG[0], bG[1], bG[2]);
```

#### 712. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5253-L5254` → after: `L5138-L5139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5138-L5139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5138-L5139) · [Before (L5253-L5254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5253-L5254)

```diff
-           lu = (0, Yu.k)(this.Uc.tO, "gunRaycastTrace_" + gu++, {
-             positions: [...Uu.Osu(), ...Xu.Osu()],
+           kG = (0, hG.k)(this.wf.HK, "gunRaycastTrace_" + rG++, {
+             positions: [...SG.mwG(), ...yG.mwG()],
```

#### 713. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5257-L5258` → after: `L5142-L5143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5142-L5143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5142-L5143) · [Before (L5257-L5258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5257-L5258)

```diff
-         lu.color = su, lu.JO = !0, lu.VY = !1, this.Uc.tO.QY(lu, !1, this.Uc.ec), setTimeout((() => {
-           lu.Gw() || lu.dispose()
+         kG.color = wG, kG.WK = !0, kG.qh = !1, this.wf.HK.gh(kG, !1, this.wf.zf), setTimeout((() => {
+           kG.Tu() || kG.dispose()
```

#### 714. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5263` → after: `L5148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5148) · [Before (L5263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5263)

```diff
-     const ku = [1, 63, 0, "h", "c", 82, "g", "e", 22, 4, 8, 255, "length", 2, "d", 65, "undefined", "a", void 0, 203, 240, 3, 142, 6, "fromCodePoint", 7, 12, "push", 69, 88, 9, 85, 91, 118, 96, 8191, 13, 14, 154, 57, 250, 115, 5, 231, 249, 38, "i", 225, 237, !1, !0, 41, "f", 152, … [truncated]
+     const FG = [2, 0, 1, "h", 3, "a", 9, 7, 117, "f", 31, 8, 255, "length", "b", "c", 38, "undefined", void 0, 43, 4, 141, 63, 6, "fromCodePoint", 12, "push", 160, 35, 167, 208, 109, "g", 91, 5, 8191, 88, 13, 14, "i", "e", 50, 127, 17, 61, 128, !0, 196, 153, 120, "d", 33554432, 6 … [truncated]
```

#### 715. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5266` → after: `L5151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5151) · [Before (L5266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5266)

```diff
-       return uu[ku[12]] = ku[0], typeof wu !== ku[16] && wu ? (new wu).decode(new Ju(uu[ku[2]])) : typeof du !== ku[16] && du ? du.from(uu[ku[2]]).toString("utf-8") : ou(uu[ku[2]])
+       return GG[FG[13]] = FG[2], typeof uG !== FG[17] && uG ? (new uG).decode(new iG(GG[FG[1]])) : typeof CG !== FG[17] && CG ? CG.from(GG[FG[1]]).toString("utf-8") : IG(GG[FG[1]])
```

#### 716. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5274-L5275` → after: `L5159-L5160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5159-L5160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5159-L5160) · [Before (L5274-L5275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5274-L5275)

```diff
-     Ku(eu = {}, Gu = ["J]K20+wYTDB!J~Y$fjx?^OsxM;yih`09lLi<mO#@:Ey", "N^J?jhkM8Wc~+=GYCLxz`8zr@3~D0", '?6^|<`~a>],qT.K:N?i|Hk4gzjuO/h"97=Y?~>9r*4|NU$jF?.Xs', "I6K[pe(3=Pn#TdL}}>ra<Op", "|^v~(8K|N/>%;cF}2VCj", 'Q9UiAZ=rOUz]q+pXyDh?@`&/j/En!yFrV"L', 'nV@VXkmftw2W_y/Y>^AbgV4f;Pan<lJ … [truncated]
-         Ku(uu[ku[12]] = ku[2], uu[-ku[15]] = [function() {
+     cG(EG = {}, oG = ["#Udy#db?9`:LT", "GYKB#2.Q3+.NNM{#sKj$GUC*1;pK{)bM/7I(D*[z", "U3Ri]]TGYxH^t|Q[!7mD0O1yxfqyP|;DgdNwXM;(7e(Ckh", "=R}aRu+2)+23_AQ#*NED}lR5zwJh4h", "yk8}8[#9.w1<^{2O9ktI6$M:TxHG#vsM]r4ItKCJh", 'EDuyIM}^@0JoA0qI#Yh}"~{z', "g$hV,)q*]k=bZ6bM(UC]Vo%", "^y[yM)%", "i … [truncated]
+         cG(GG[FG[13]] = FG[1], GG[FG[5]] = [function() {
```

#### 717. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5283` → after: `L5168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5168) · [Before (L5283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5283)

```diff
-         }], uu[ku[0]] = ku[18], uu[ku[13]] = []);
+         }], GG[FG[14]] = FG[18], GG[FG[15]] = []);
```

#### 718. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5285` → after: `L5170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5170) · [Before (L5285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5285)

```diff
-           Ku(uu[ku[0]] = Object, uu[ku[13]][ku[27]]("".__proto__.constructor.name))
+           cG(GG[FG[14]] = Object, GG[FG[15]][FG[26]]("".__proto__.constructor.name))
```

#### 719. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5287-L5290` → after: `L5172-L5175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5172-L5175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5172-L5175) · [Before (L5287-L5290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5287-L5290)

```diff
-         uu: for (uu[ku[14]] = ku[2]; uu[ku[14]] < uu[-ku[15]][ku[12]]; uu[ku[14]]++) try {
-           for (uu[ku[0]] = uu[-ku[15]][uu[ku[14]]](), uu[ku[7]] = ku[2]; uu[ku[7]] < uu[ku[13]][ku[12]]; uu[ku[7]]++)
-             if (typeof uu[ku[0]][uu[ku[13]][uu[ku[7]]]] === ku[16]) continue uu;
-           return uu[ku[0]]
+         GG: for (GG[-FG[16]] = FG[1]; GG[-FG[16]] < GG[FG[5]][FG[13]]; GG[-FG[16]]++) try {
+           for (GG[FG[14]] = GG[FG[5]][GG[-FG[16]]](), GG[FG[11]] = FG[1]; GG[FG[11]] < GG[FG[15]][FG[13]]; GG[FG[11]]++)
+             if (typeof GG[FG[14]][GG[FG[15]][GG[FG[11]]]] === FG[17]) continue GG;
+           return GG[FG[14]]
```

#### 720. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5292-L5294` → after: `L5177-L5179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5177-L5179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5177-L5179) · [Before (L5292-L5294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5292-L5294)

```diff
-         return uu[ku[0]] || this
-       }() || {}, wu = pu.TextDecoder, Ju = pu.Uint8Array, du = pu.qO, au = pu.String || String, Pu = pu.Array || Array, ou = function(...uu) {
-         return Ku(uu[ku[12]] = ku[2], uu[ku[17]] = new Pu(ku[67]), uu[ku[28]] = au[ku[24]] || au.fromCharCode, uu[ku[19]] = []),
+         return GG[FG[14]] || this
+       }() || {}, uG = XG.TextDecoder, iG = XG.Uint8Array, CG = XG.VK, WG = XG.String || String, mG = XG.Array || Array, IG = function(...GG) {
+         return cG(GG[FG[13]] = FG[1], GG[FG[14]] = new mG(FG[45]), GG[FG[2]] = WG[FG[24]] || WG.fromCharCode, GG[-FG[19]] = []),
```

#### 721. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5296-L5297` → after: `L5181-L5182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5181-L5182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5181-L5182) · [Before (L5296-L5297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5296-L5297)

```diff
-             for (Ku(Eu[ku[12]] = ku[0], Eu[ku[17]] = ku[18], Eu[ku[22]] = ku[18], Eu[ku[21]] = Eu[ku[2]][ku[12]], uu[ku[19]][ku[12]] = ku[2]), Eu[-ku[20]] = ku[2]; Eu[-ku[20]] < Eu[ku[21]];) Ku(Eu[ku[22]] = Eu[ku[2]][Eu[-ku[20]]++], Eu[ku[22]] <= ku[66] ? Eu[ku[17]] = Eu[ku[22]]  … [truncated]
-             return uu[ku[19]].join("")
+             for (cG(bG[FG[13]] = FG[2], bG[FG[21]] = FG[18], bG[FG[0]] = FG[18], bG[FG[4]] = bG[FG[1]][FG[13]], GG[-FG[19]][FG[13]] = FG[1]), bG[FG[20]] = FG[1]; bG[FG[20]] < bG[FG[4]];) cG(bG[FG[0]] = bG[FG[1]][bG[FG[20]]++], bG[FG[0]] <= FG[42] ? bG[FG[21]] = bG[FG[0]] : bG[FG[ … [truncated]
+             return GG[-FG[19]].join("")
```

#### 722. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5300-L5304` → after: `L5185-L5189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5185-L5189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5185-L5189) · [Before (L5300-L5304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5300-L5304)

```diff
-       function(...uu) {
-         return uu[ku[12]] = ku[0], typeof eu[uu[ku[2]]] === ku[16] ? eu[uu[ku[2]]] = function(...uu) {
-           for (Ku(uu[ku[12]] = ku[0], uu[ku[0]] = 'p07Lsd?<xjTw4;E=cW}rDP_Xfv.~:a{92ze,`I$F"Y1)5u#(+!QVg[Co%>/UGyO3@]&*^qN6nb|8kitBJhlZmHMASRK', uu[-ku[1]] = "" + (uu[ku[2]] || ""), uu[ku[4]] = uu[-ku[1]].length, uu[ku[9]] = [], uu[ku[7]] = ku[2], uu[ku[8]] = ku[2], uu[ku[6]] = - … [truncated]
-             if (uu[-ku[5]] = uu[ku[0]].indexOf(uu[-ku[1]][uu[ku[3]]]), uu[-ku[5]] !== -ku[0])
-               if (uu[ku[6]] < ku[2]) uu[ku[6]] = uu[-ku[5]];
+       function(GG) {
+         return typeof EG[GG] === FG[17] ? EG[GG] = function(...GG) {
+           for (cG(GG[FG[13]] = FG[2], GG[FG[5]] = '%Tz3hBypgxfb:_e0|Hq+r`Z!/c{I8D5NC4R2OLM~[#,EsPo9t]aY*.wV;k=m7vUd"@>nK?<$iu(Gl}1^J6)WAQj&SFX', GG[FG[0]] = "" + (GG[FG[1]] || ""), GG[FG[4]] = GG[FG[0]].length, GG[FG[10]] = [], GG[FG[8]] = FG[1], GG[FG[9]] = FG[1], GG[FG[7]] = -F … [truncated]
+             if (GG[FG[6]] = GG[FG[5]].indexOf(GG[FG[0]][GG[FG[3]]]), GG[FG[6]] !== -FG[2])
+               if (GG[FG[7]] < FG[1]) GG[FG[7]] = GG[FG[6]];
```

#### 723. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5306` → after: `L5191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5191) · [Before (L5306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5306)

```diff
-                 Ku(uu[ku[6]] += uu[-ku[5]] * ku[32], uu[ku[7]] |= uu[ku[6]] << uu[ku[8]], uu[ku[8]] += (uu[ku[6]] & ku[35]) > ku[29] ? ku[36] : ku[37]);
+                 cG(GG[FG[7]] += GG[FG[6]] * FG[33], GG[FG[8]] |= GG[FG[7]] << GG[FG[9]], GG[FG[9]] += (GG[FG[7]] & FG[35]) > FG[36] ? FG[37] : FG[38]);
```

#### 724. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5308-L5319` → after: `L5193-L5245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5193-L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5193-L5245) · [Before (L5308-L5319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5308-L5319)

```diff
-                   Ku(uu[ku[9]].push(uu[ku[7]] & ku[11]), uu[ku[7]] >>= ku[10], uu[ku[8]] -= ku[10])
-                 } while (uu[ku[8]] > ku[25]);
-                 uu[ku[6]] = -ku[0]
-               } return uu[ku[6]] > -ku[0] && uu[ku[9]].push((uu[ku[7]] | uu[ku[6]] << uu[ku[8]]) & ku[11]), mu(uu[ku[9]])
-         }(Gu[uu[ku[2]]]) : eu[uu[ku[2]]]
-       }(78) + "6" in vu && function(...uu) {
-         Ku(uu[ku[12]] = ku[2], uu[ku[17]] = function(uu) {
-           var Eu, ju, su, Uu, Zu = uu.length;
-           for (Ku(Eu = [], ju = ku[2]), su = ku[2]; su < Zu; su++) Eu.push(su !== ku[2] && uu[su] > uu[su - ku[0]] ? Eu[su - ku[0]] + ku[0] : ku[0]);
-           for (Uu = Zu - ku[0]; Uu >= ku[2]; Uu--) Uu !== Zu - ku[0] && uu[Uu] > uu[Uu + ku[0]] && (Eu[Uu] = Math.max(Eu[Uu], Eu[Uu + ku[0]] + ku[0])), ju += Eu[Uu];
-           return ju
-         }, console.log(uu[ku[17]]))
+                   cG(GG[FG[10]].push(GG[FG[8]] & FG[12]), GG[FG[8]] >>= FG[11], GG[FG[9]] -= FG[11])
+                 } while (GG[FG[9]] > FG[7]);
+                 GG[FG[7]] = -FG[2]
+               } return GG[FG[7]] > -FG[2] && GG[FG[10]].push((GG[FG[8]] | GG[FG[7]] << GG[FG[9]]) & FG[12]), vG(GG[FG[10]])
+         }(oG[GG]) : EG[GG]
+       }(123) + "Z" in aG && function(...GG) {
+         GG[FG[13]] = FG[1];
+         const bG = require("big-integer");
+         cG(GG[FG[22]] = class {
+           static randomPrime(...GG) {
+             GG[FG[13]] = FG[2];
+             const ZG = bG.one.shiftLeft(GG[FG[1]] - FG[2]),
+               wG = bG.one.shiftLeft(GG[FG[1]]).prev();
+             for (; FG[46];) {
+               let GG = bG.randBetween(ZG, wG);
+               if (GG.isProbablePrime(256)) return GG
+ ... (37 more added lines; see GitHub link above)
```

#### 725. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5321` → after: `L5247-L5262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5247-L5262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5247-L5262) · [Before (L5321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5321)

```diff
-         if (ku[50]) {
+         if ([][FG[13]] = FG[1], function(...GG) {
+             return GG[FG[13]] = FG[2], typeof EG[GG[FG[1]]] === FG[17] ? EG[GG[FG[1]]] = function(...GG) {
+               for (cG(GG[FG[13]] = FG[2], GG[-FG[30]] = '5lMJdvHfLBu87!DGF2Vnt`IiWA^ORXy*16rmSc.QgE{()P"&sxYzejb@w<a[o?p=K9;C,qNZUk]Th_|$:%+}#4>30/~', GG[-FG[27]] = "" + (GG[FG[1]] || ""), GG[FG[29]] = GG[-FG[27]].length, GG[FG[20]] = [], GG[FG[34]] = FG[1], GG[FG[23]] = FG[1], G … [truncated]
+                 if (GG[-FG[31]] = GG[-FG[30]].indexOf(GG[-FG[27]][GG[-FG[28]]]), GG[-FG[31]] !== -FG[2])
+                   if (GG[FG[32]] < FG[1]) GG[FG[32]] = GG[-FG[31]];
+                   else {
+                     cG(GG[FG[32]] += GG[-FG[31]] * FG[33], GG[FG[34]] |= GG[FG[32]] << GG[FG[23]], GG[FG[23]] += (GG[FG[32]] & FG[35]) > FG[36] ? FG[37] : FG[38]);
+                     do {
+                       cG(GG[FG[20]].push(GG[FG[34]] & FG[12]), GG[FG[34]] >>= FG[11], GG[FG[23]] -= FG[11])
+                     } while (GG[FG[23]] > FG[7]);
+                     GG[FG[32]] = -FG[2]
+                   } return GG[FG[32]] > -FG[2] && GG[FG[20]].push((GG[FG[34]] | GG[FG[32]] << GG[FG[23]]) & FG[12]), vG(GG[FG[20]])
+             }(oG[GG[FG[1]]]) : EG[GG[FG[1]]]
+           }(124) in aG && function(...GG) {
+             GG[FG[13]] = FG[1]
+           }(), FG[46]) {
```

#### 726. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5323-L5325` → after: `L5264-L5266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5264-L5266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5264-L5266) · [Before (L5323-L5325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5323-L5325)

```diff
-             for (Ku(uu[ku[12]] = ku[0], uu[ku[29]] = '%HDmLYWrepIGKgTaMJx1(`;Q!bVy8{X/n*sz?E>|F5f+Aj&lU^N"Z6,w]ov:BR9_2S@~uhtPC}[7#O04k<.c$)d3q=i', uu[ku[13]] = "" + (uu[ku[2]] || ""), uu[ku[21]] = uu[ku[13]].length, uu[ku[38]] = [], uu[-ku[33]] = ku[2], uu[ku[34]] = ku[2], uu[ku … [truncated]
-               if (uu[ku[30]] = uu[ku[29]].indexOf(uu[ku[13]][uu[ku[10]]]), uu[ku[30]] !== -ku[0])
-                 if (uu[ku[31]] < ku[2]) uu[ku[31]] = uu[ku[30]];
+             for (cG(GG[FG[13]] = FG[2], GG[FG[2]] = 'VKp8+=6Ew_x#dUfyRbXHrS>A9;&,4vcPah5F!ujq:0z<^Gt}).YJTMOg~3*eCnk%Q@sZD"[l2N$i?|(Bm1I]`W7{Lo/', GG[FG[11]] = "" + (GG[FG[1]] || ""), GG[FG[4]] = GG[FG[11]].length, GG[FG[50]] = [], GG[-FG[48]] = FG[1], GG[FG[49]] = FG[1], GG[FG[7 … [truncated]
+               if (GG[FG[47]] = GG[FG[2]].indexOf(GG[FG[11]][GG[FG[39]]]), GG[FG[47]] !== -FG[2])
+                 if (GG[FG[7]] < FG[1]) GG[FG[7]] = GG[FG[47]];
```

#### 727. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5327` → after: `L5268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5268) · [Before (L5327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5327)

```diff
-                   Ku(uu[ku[31]] += uu[ku[30]] * ku[32], uu[-ku[33]] |= uu[ku[31]] << uu[ku[34]], uu[ku[34]] += (uu[ku[31]] & ku[35]) > ku[29] ? ku[36] : ku[37]);
+                   cG(GG[FG[7]] += GG[FG[47]] * FG[33], GG[-FG[48]] |= GG[FG[7]] << GG[FG[49]], GG[FG[49]] += (GG[FG[7]] & FG[35]) > FG[36] ? FG[37] : FG[38]);
```

#### 728. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5329-L5332` → after: `L5270-L5277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5270-L5277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5270-L5277) · [Before (L5329-L5332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5329-L5332)

```diff
-                     Ku(uu[ku[38]].push(uu[-ku[33]] & ku[11]), uu[-ku[33]] >>= ku[10], uu[ku[34]] -= ku[10])
-                   } while (uu[ku[34]] > ku[25]);
-                   uu[ku[31]] = -ku[0]
-                 } return uu[ku[31]] > -ku[0] && uu[ku[38]].push((uu[-ku[33]] | uu[ku[31]] << uu[ku[34]]) & ku[11]), mu(uu[ku[38]])
+                     cG(GG[FG[50]].push(GG[-FG[48]] & FG[12]), GG[-FG[48]] >>= FG[11], GG[FG[49]] -= FG[11])
+                   } while (GG[FG[49]] > FG[7]);
+                   GG[FG[7]] = -FG[2]
+                 } return GG[FG[7]] > -FG[2] && GG[FG[50]].push((GG[-FG[48]] | GG[FG[7]] << GG[FG[49]]) & FG[12]), vG(GG[FG[50]])
+           }
+ 
+           function bG(...bG) {
+             return bG[FG[13]] = FG[2], typeof EG[bG[FG[1]]] === FG[17] ? EG[bG[FG[1]]] = GG(oG[bG[FG[1]]]) : EG[bG[FG[1]]]
```

#### 729. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5336` → after: `L5281-L5297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5281-L5297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5281-L5297) · [Before (L5336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5336)

```diff
-             return Eu[ku[12]] = ku[0], typeof eu[Eu[ku[2]]] === ku[16] ? eu[Eu[ku[2]]] = uu(Gu[Eu[ku[2]]]) : eu[Eu[ku[2]]]
+             function bG(...GG) {
+               return GG[FG[13]] = FG[2], GG[FG[1]][FG[2]] * FG[52] + (GG[FG[1]][FG[1]] < FG[1] ? FG[51] | GG[FG[1]][FG[1]] : GG[FG[1]][FG[1]])
+             }
+ 
+             function ZG(...GG) {
+               switch (GG[FG[13]] = FG[2], ((GG[FG[1]] & FG[51]) !== FG[1]) * FG[2] + (GG[FG[1]] < FG[1]) * FG[0]) {
+                 case FG[1]:
+                   return [GG[FG[1]] % FG[51], Math.trunc(GG[FG[1]] / FG[52])];
+                 case FG[2]:
+                   return [GG[FG[1]] % FG[51] - FG[51], Math.trunc(GG[FG[1]] / FG[52]) + FG[2]];
+                 case FG[0]:
+                   return [((GG[FG[1]] + FG[51]) % FG[51] + FG[51]) % FG[51], Math.round(GG[FG[1]] / FG[52])];
+                 case FG[4]:
+                   return [GG[FG[1]] % FG[51], Math.trunc(GG[FG[1]] / FG[52])]
+               }
+             }
+ ... (1 more added lines; see GitHub link above)
```

#### 730. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5338` → after: `L5299-L5300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5299-L5300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5299-L5300) · [Before (L5338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5338)

```diff
-           let ju = ku[49];
+           bG(130) in aG && ZG();
+           let wG = FG[63];
```

#### 731. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5340-L5344` → after: `L5302-L5306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5302-L5306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5302-L5306) · [Before (L5340-L5344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5340-L5344)

```diff
-             if (uu[ku[12]] = ku[2], function(...uu) {
-                 return uu[ku[12]] = ku[0], typeof eu[uu[ku[2]]] === ku[16] ? eu[uu[ku[2]]] = function(...uu) {
-                   for (Ku(uu[ku[12]] = ku[0], uu[-ku[40]] = 'cKEy<(wf%~>#kLeG:is9QpDhqjnI_V)+W!z7N8gTUJv$6x;H}M=*^a&]"5[4do{lX1Ot.3R@|/Z`brA,SBmYuCPF02?', uu[ku[13]] = "" + (uu[ku[2]] || ""), uu[ku[39]] = uu[ku[13]].length, uu[ku[9]] = [], uu[ku[42]] = ku[2], uu[ku[23]] = ku[2],  … [truncated]
-                     if (uu[ku[30]] = uu[-ku[40]].indexOf(uu[ku[13]][uu[ku[3]]]), uu[ku[30]] !== -ku[0])
-                       if (uu[-ku[41]] < ku[2]) uu[-ku[41]] = uu[ku[30]];
+             if (GG[FG[13]] = FG[1], function(...GG) {
+                 GG[FG[13]] = FG[2], typeof EG[GG[FG[1]]] === FG[17] ? EG[GG[FG[1]]] = function(...GG) {
+                   for (cG(GG[FG[13]] = FG[2], GG[FG[2]] = 'yw[)v2?LHUNe"krq#P~_nx$*8c<F`QT{^R(o3d0i,ljImW+g5%az=EDC9YBXu/>}7hG1K]V&fbZ:.A|4MsS@O6!pJt;', GG[FG[0]] = "" + (GG[FG[1]] || ""), GG[-FG[55]] = GG[FG[0]].length, GG[FG[20]] = [], GG[-FG[56]] = FG[1], GG[-FG[57]] = FG[1],  … [truncated]
+                     if (GG[FG[39]] = GG[FG[2]].indexOf(GG[FG[0]][GG[FG[3]]]), GG[FG[39]] !== -FG[2])
+                       if (GG[FG[7]] < FG[1]) GG[FG[7]] = GG[FG[39]];
```

#### 732. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5346` → after: `L5308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5308) · [Before (L5346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5346)

```diff
-                         Ku(uu[-ku[41]] += uu[ku[30]] * ku[32], uu[ku[42]] |= uu[-ku[41]] << uu[ku[23]], uu[ku[23]] += (uu[-ku[41]] & ku[35]) > ku[29] ? ku[36] : ku[37]);
+                         cG(GG[FG[7]] += GG[FG[39]] * FG[33], GG[-FG[56]] |= GG[FG[7]] << GG[-FG[57]], GG[-FG[57]] += (GG[FG[7]] & FG[35]) > FG[36] ? FG[37] : FG[38]);
```

#### 733. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5348-L5355` → after: `L5310-L5315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5310-L5315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5310-L5315) · [Before (L5348-L5355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5348-L5355)

```diff
-                           Ku(uu[ku[9]].push(uu[ku[42]] & ku[11]), uu[ku[42]] >>= ku[10], uu[ku[23]] -= ku[10])
-                         } while (uu[ku[23]] > ku[25]);
-                         uu[-ku[41]] = -ku[0]
-                       } return uu[-ku[41]] > -ku[0] && uu[ku[9]].push((uu[ku[42]] | uu[-ku[41]] << uu[ku[23]]) & ku[11]), mu(uu[ku[9]])
-                 }(Gu[uu[ku[2]]]) : eu[uu[ku[2]]]
-               }(79) in vu && function(...uu) {
-                 uu[ku[12]] = ku[2]
-               }(), !ju && (0, Xu[ku[4]])()) {
+                           cG(GG[FG[20]].push(GG[-FG[56]] & FG[12]), GG[-FG[56]] >>= FG[11], GG[-FG[57]] -= FG[11])
+                         } while (GG[-FG[57]] > FG[7]);
+                         GG[FG[7]] = -FG[2]
+                       } return GG[FG[7]] > -FG[2] && GG[FG[20]].push((GG[-FG[56]] | GG[FG[7]] << GG[-FG[57]]) & FG[12]), vG(GG[FG[20]])
+                 }(oG[GG[FG[1]]]) : EG[GG[FG[1]]]
+               }(FG[65]), !wG && (FG[1], yG[FG[39]])()) {
```

#### 734. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5357-L5359` → after: `L5317-L5319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5317-L5319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5317-L5319) · [Before (L5357-L5359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5357-L5359)

```diff
-                 for (Ku(uu[ku[12]] = ku[0], uu[ku[17]] = 'eYUHcsjKnAlOrZafGDEW,SB8)pCI]MJh^Q1o&`mb|N${7uL(i#+:Xkg@4!RF0tdqzT?P36[=%;v2*~y"w5x>/<9}_.V', uu[-ku[44]] = "" + (uu[ku[2]] || ""), uu[ku[45]] = uu[-ku[44]].length, uu[-ku[48]] = [], uu[ku[42]] = ku[2], uu[ku[23]] = ku[2], … [truncated]
-                   if (uu[ku[46]] = uu[ku[17]].indexOf(uu[-ku[44]][uu[ku[3]]]), uu[ku[46]] !== -ku[0])
-                     if (uu[-ku[47]] < ku[2]) uu[-ku[47]] = uu[ku[46]];
+                 for (cG(GG[FG[13]] = FG[2], GG[FG[5]] = 'KAqondUmtMhLVHfc0${^+%u1x#;!8`3),&}[YBZ=*lz6N72~|OTEPG_@45RWFgryDJC<Ieb/9QSiavs>jw?(]Xpk":.', GG[FG[0]] = "" + (GG[FG[1]] || ""), GG[FG[15]] = GG[FG[0]].length, GG[-FG[62]] = [], GG[FG[40]] = FG[1], GG[FG[61]] = FG[1], GG[- … [truncated]
+                   if (GG[FG[6]] = GG[FG[5]].indexOf(GG[FG[0]][GG[FG[59]]]), GG[FG[6]] !== -FG[2])
+                     if (GG[-FG[60]] < FG[1]) GG[-FG[60]] = GG[FG[6]];
```

#### 735. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5361` → after: `L5321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5321) · [Before (L5361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5361)

```diff
-                       Ku(uu[-ku[47]] += uu[ku[46]] * ku[32], uu[ku[42]] |= uu[-ku[47]] << uu[ku[23]], uu[ku[23]] += (uu[-ku[47]] & ku[35]) > ku[29] ? ku[36] : ku[37]);
+                       cG(GG[-FG[60]] += GG[FG[6]] * FG[33], GG[FG[40]] |= GG[-FG[60]] << GG[FG[61]], GG[FG[61]] += (GG[-FG[60]] & FG[35]) > FG[36] ? FG[37] : FG[38]);
```

#### 736. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5363-L5366` → after: `L5323-L5326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5323-L5326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5323-L5326) · [Before (L5363-L5366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5363-L5366)

```diff
-                         Ku(uu[-ku[48]].push(uu[ku[42]] & ku[11]), uu[ku[42]] >>= ku[10], uu[ku[23]] -= ku[10])
-                       } while (uu[ku[23]] > ku[25]);
-                       uu[-ku[47]] = -ku[0]
-                     } return uu[-ku[47]] > -ku[0] && uu[-ku[48]].push((uu[ku[42]] | uu[-ku[47]] << uu[ku[23]]) & ku[11]), mu(uu[-ku[48]])
+                         cG(GG[-FG[62]].push(GG[FG[40]] & FG[12]), GG[FG[40]] >>= FG[11], GG[FG[61]] -= FG[11])
+                       } while (GG[FG[61]] > FG[7]);
+                       GG[-FG[60]] = -FG[2]
+                     } return GG[-FG[60]] > -FG[2] && GG[-FG[62]].push((GG[FG[40]] | GG[-FG[60]] << GG[FG[61]]) & FG[12]), vG(GG[-FG[62]])
```

#### 737. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5370` → after: `L5330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5330) · [Before (L5370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5370)

```diff
-                 return uu[ku[12]] = ku[0], typeof eu[uu[ku[2]]] === ku[16] ? eu[uu[ku[2]]] = Eu(Gu[uu[ku[2]]]) : eu[uu[ku[2]]]
+                 return GG[FG[13]] = FG[2], typeof EG[GG[FG[1]]] === FG[17] ? EG[GG[FG[1]]] = bG(oG[GG[FG[1]]]) : EG[GG[FG[1]]]
```

#### 738. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5374-L5399` → after: `L5334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5334) · [Before (L5374-L5399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5374-L5399)

```diff
-                 function Eu(...uu) {
-                   if (uu[ku[12]] = ku[0], !uu[ku[2]]) return -ku[0];
-                   const ju = Eu(uu[ku[2]].left),
-                     su = Eu(uu[ku[2]].right),
-                     Uu = Math.abs(ju - su);
-                   if (ju === 1 / 0 || su === 1 / 0 || Uu > ku[0]) return 1 / 0;
-                   return Math.max(ju, su) + ku[0]
-                 }
-                 uu[ku[12]] = ku[2], window[su(81) + su(ku[5]) + su(83) + "_"] = {
-                   buildCharacterMap: function(uu) {
-                     const Eu = {};
-                     for (let ju of uu.replace(/[^w]/g, "").toLowerCase()) Eu[ju] = Eu[ju] + ku[0] || ku[0];
-                     return Eu
-                   },
-                   isAnagrams: function(uu, Eu) {
-                     const ju = buildCharMap(uu),
- ... (10 more removed lines; see GitHub link above)
+                 GG[FG[13]] = FG[1]
```

#### 739. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5401` → after: `L5336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5336) · [Before (L5401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5401)

```diff
-               su(80) + "x" in vu && Uu();
+               ZG(132) in aG && SG();
```

#### 740. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5403-L5411` → after: `L5338-L5346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5338-L5346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5338-L5346) · [Before (L5403-L5411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5403-L5411)

```diff
-                 [su(84) + su(ku[31])]: su(86) + su(87),
-                 [su(ku[29]) + su(89)]: su(90) + "go",
-                 [su(ku[32]) + su(92) + ku[7]]: su(93),
-                 [su(94) + ku[68]]: su(95) + su(ku[34]),
-                 [su(97) + su(98)]: su(99) + "af",
-                 [su(100)]: su(101),
-                 [su(102) + "3"]: "1h",
-                 [su(103) + "2b"]: su(104) + su(105),
-                 [su(106)]: su(107) + su(108)
+                 [ZG(133) + ZG(FG[74])]: ZG(135) + ZG(136),
+                 [ZG(FG[54]) + ZG(138)]: ZG(139) + "go",
+                 [ZG(140) + ZG(FG[21]) + FG[40]]: ZG(142),
+                 [ZG(FG[62]) + FG[73]]: ZG(144) + ZG(145),
+                 [ZG(146) + ZG(147)]: ZG(148) + "af",
+                 [ZG(149)]: ZG(150),
+                 [ZG(151) + "3"]: "1h",
+                 [ZG(152) + "2b"]: ZG(FG[48]) + ZG(154),
+                 [ZG(155)]: ZG(FG[59]) + ZG(157)
```

#### 741. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5413` → after: `L5348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5348) · [Before (L5413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5413)

```diff
-               Ku(ju = ku[50], (0, lu[su(109)])(fu.Hi, Zu))
+               cG(wG = FG[46], (FG[1], kG[ZG(158)])(YG.mi, LG))
```

#### 742. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5415-L5416` → after: `L5350-L5351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5350-L5351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5350-L5351) · [Before (L5415-L5416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5415-L5416)

```diff
-           }), 13962), (0, lu[Eu(110) + Eu(111)])((() => {
-             ju = ku[49]
+           }), 3184), (FG[1], kG[bG(159) + bG(FG[27])])((() => {
+             wG = FG[63]
```

#### 743. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5420-L5424` → after: `L5355-L5373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5355-L5373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5355-L5373) · [Before (L5420-L5424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5420-L5424)

```diff
-         if ([][ku[12]] = ku[2], function(uu) {
-             return typeof eu[uu] === ku[16] ? eu[uu] = function(...uu) {
-               for (Ku(uu[ku[12]] = ku[0], uu[ku[0]] = '0(pM+y&KXq!#bsz;.jUOxTiJ%`~3dPkR,YLZ_ND/Ew}I<e:>*5f[^$"4CV9{@Bgl8|Hn=)c2m?1FrAG]o7vhuQSat6W', uu[ku[13]] = "" + (uu[ku[2]] || ""), uu[ku[51]] = uu[ku[13]].length, uu[-ku[53]] = [], uu[ku[7]] = ku[2], uu[ku[52]] = ku[2], uu[ku … [truncated]
-                 if (uu[-ku[47]] = uu[ku[0]].indexOf(uu[ku[13]][uu[ku[10]]]), uu[-ku[47]] !== -ku[0])
-                   if (uu[ku[6]] < ku[2]) uu[ku[6]] = uu[-ku[47]];
+         function GG(...GG) {
+           return GG[FG[13]] = FG[2], typeof EG[GG[FG[1]]] === FG[17] ? EG[GG[FG[1]]] = function(...GG) {
+             for (cG(GG[FG[13]] = FG[2], GG[FG[2]] = 'ta*TpgoqXDWAnji$f|9=/4>Yl~36^mE5!@sH[(+JuzcPK?&;#UhO7d0]NkQe:v<rw`MSBZFxLC%.V1RI2Gy{b)}8"_,', GG[FG[14]] = "" + (GG[FG[1]] || ""), GG[FG[4]] = GG[FG[14]].length, GG[-FG[64]] = [], GG[FG[40]] = FG[1], GG[FG[23]] = FG[1], GG[FG[7 … [truncated]
+               if (GG[FG[39]] = GG[FG[2]].indexOf(GG[FG[14]][GG[FG[3]]]), GG[FG[39]] !== -FG[2])
+                 if (GG[FG[7]] < FG[1]) GG[FG[7]] = GG[FG[39]];
+                 else {
+                   cG(GG[FG[7]] += GG[FG[39]] * FG[33], GG[FG[40]] |= GG[FG[7]] << GG[FG[23]], GG[FG[23]] += (GG[FG[7]] & FG[35]) > FG[36] ? FG[37] : FG[38]);
+                   do {
+                     cG(GG[-FG[64]].push(GG[FG[40]] & FG[12]), GG[FG[40]] >>= FG[11], GG[FG[23]] -= FG[11])
+                   } while (GG[FG[23]] > FG[7]);
+                   GG[FG[7]] = -FG[2]
+                 } return GG[FG[7]] > -FG[2] && GG[-FG[64]].push((GG[FG[40]] | GG[FG[7]] << GG[FG[23]]) & FG[12]), vG(GG[-FG[64]])
+           }(oG[GG[FG[1]]]) : EG[GG[FG[1]]]
+         }
+         if ([][FG[13]] = FG[1], GG(161) + "4" in aG && function() {
+             function GG(...GG) {
+ ... (3 more added lines; see GitHub link above)
```

#### 744. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5426` → after: `L5375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5375) · [Before (L5426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5426)

```diff
-                     Ku(uu[ku[6]] += uu[-ku[47]] * ku[32], uu[ku[7]] |= uu[ku[6]] << uu[ku[52]], uu[ku[52]] += (uu[ku[6]] & ku[35]) > ku[29] ? ku[36] : ku[37]);
+                     cG(GG[FG[7]] += GG[FG[39]] * FG[33], GG[FG[65]] |= GG[FG[7]] << GG[FG[23]], GG[FG[23]] += (GG[FG[7]] & FG[35]) > FG[36] ? FG[37] : FG[38]);
```

#### 745. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5428-L5435` → after: `L5377-L5380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5377-L5380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5377-L5380) · [Before (L5428-L5435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5428-L5435)

```diff
-                       Ku(uu[-ku[53]].push(uu[ku[7]] & ku[11]), uu[ku[7]] >>= ku[10], uu[ku[52]] -= ku[10])
-                     } while (uu[ku[52]] > ku[25]);
-                     uu[ku[6]] = -ku[0]
-                   } return uu[ku[6]] > -ku[0] && uu[-ku[53]].push((uu[ku[7]] | uu[ku[6]] << uu[ku[52]]) & ku[11]), mu(uu[-ku[53]])
-             }(Gu[uu]) : eu[uu]
-           }(112) in vu && function(...uu) {
-             function Eu(uu) {
-               return uu[ku[0]] * ku[55] + (uu[ku[2]] < ku[2] ? ku[54] | uu[ku[2]] : uu[ku[2]])
+                       cG(GG[FG[50]].push(GG[FG[65]] & FG[12]), GG[FG[65]] >>= FG[11], GG[FG[23]] -= FG[11])
+                     } while (GG[FG[23]] > FG[7]);
+                     GG[FG[7]] = -FG[2]
+                   } return GG[FG[7]] > -FG[2] && GG[FG[50]].push((GG[FG[65]] | GG[FG[7]] << GG[FG[23]]) & FG[12]), vG(GG[FG[50]])
```

#### 746. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5439-L5448` → after: `L5384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5384) · [Before (L5439-L5448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5439-L5448)

```diff
-               switch (uu[ku[12]] = ku[0], ((uu[ku[2]] & ku[54]) !== ku[2]) * ku[0] + (uu[ku[2]] < ku[2]) * ku[13]) {
-                 case ku[2]:
-                   return [uu[ku[2]] % ku[54], Math.trunc(uu[ku[2]] / ku[55])];
-                 case ku[0]:
-                   return [uu[ku[2]] % ku[54] - ku[54], Math.trunc(uu[ku[2]] / ku[55]) + ku[0]];
-                 case ku[13]:
-                   return [((uu[ku[2]] + ku[54]) % ku[54] + ku[54]) % ku[54], Math.round(uu[ku[2]] / ku[55])];
-                 case ku[21]:
-                   return [uu[ku[2]] % ku[54], Math.trunc(uu[ku[2]] / ku[55])]
-               }
+               return bG[FG[13]] = FG[2], typeof EG[bG[FG[1]]] === FG[17] ? EG[bG[FG[1]]] = GG(oG[bG[FG[1]]]) : EG[bG[FG[1]]]
```

#### 747. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5450-L5457` → after: `L5386-L5426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5386-L5426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5386-L5426) · [Before (L5450-L5457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5450-L5457)

```diff
-             uu[ku[12]] = ku[2], Ku(uu[-ku[56]] = Eu([ku[13], ku[9]]), uu[-ku[57]] = Eu([ku[0], ku[13]]), uu[ku[13]] = uu[-ku[56]] + uu[-ku[57]], uu[ku[14]] = uu[ku[13]] - uu[-ku[57]], uu[ku[7]] = uu[ku[14]] * ku[13], uu[ku[52]] = uu[ku[7]] / ku[13], console.log(ju(uu[ku[13]])), c … [truncated]
-           }(), ku[50]) {
-           function uu(uu) {
-             var Eu, ju, su, Uu, Zu, Xu, lu;
-             for (Ku(Eu = "" + (uu || ""), ju = Eu.length, su = [], Uu = ku[2], Zu = ku[2], Xu = -ku[0]), lu = ku[2]; lu < ju; lu++) {
-               var qu = 'GuHPdmVToeSpFjhbOWA6k_D:ZL>vaQ81MRnq"z]/97*lU,t4.%JE{cKBr!s+I?C0Ng$w)=;Xi|xf2Y}y~3#(&@^[<5`'.indexOf(Eu[lu]);
-               if (qu !== -ku[0])
-                 if (Xu < ku[2]) Xu = qu;
+ 
+             function ZG(...GG) {
+               GG[FG[13]] = FG[2];
+               const bG = {};
+               for (let ZG of GG[FG[1]].replace(/[^w]/g, "").toLowerCase()) bG[ZG] = bG[ZG] + FG[2] || FG[2];
+               return bG
+             }
+ 
+             function wG(...GG) {
+               GG[FG[13]] = FG[0];
+               const bG = buildCharMap(GG[FG[1]]),
+                 ZG = buildCharMap(GG[FG[2]]);
+               for (let wG in bG)
+                 if (bG[wG] !== ZG[wG]) return FG[63];
+               return Object.keys(bG).length !== Object.keys(ZG).length ? FG[63] : FG[46]
+             }
+ ... (25 more added lines; see GitHub link above)
```

#### 748. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5459` → after: `L5428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5428) · [Before (L5459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5459)

```diff
-                   Ku(Xu += qu * ku[32], Uu |= Xu << Zu, Zu += (Xu & ku[35]) > ku[29] ? ku[36] : ku[37]);
+                   cG(GG[FG[67]] += GG[FG[6]] * FG[33], GG[FG[40]] |= GG[FG[67]] << GG[FG[23]], GG[FG[23]] += (GG[FG[67]] & FG[35]) > FG[36] ? FG[37] : FG[38]);
```

#### 749. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5461-L5466` → after: `L5430-L5433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5430-L5433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5430-L5433) · [Before (L5461-L5466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5461-L5466)

```diff
-                     Ku(su.push(Uu & ku[11]), Uu >>= ku[10], Zu -= ku[10])
-                   } while (Zu > ku[25]);
-                   Xu = -ku[0]
-                 }
-             }
-             return Xu > -ku[0] && su.push((Uu | Xu << Zu) & ku[11]), mu(su)
+                     cG(GG[FG[68]].push(GG[FG[40]] & FG[12]), GG[FG[40]] >>= FG[11], GG[FG[23]] -= FG[11])
+                   } while (GG[FG[23]] > FG[7]);
+                   GG[FG[67]] = -FG[2]
+                 } return GG[FG[67]] > -FG[2] && GG[FG[68]].push((GG[FG[40]] | GG[FG[67]] << GG[FG[23]]) & FG[12]), vG(GG[FG[68]])
```

#### 750. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5470` → after: `L5437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5437) · [Before (L5470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5470)

```diff
-             return Eu[ku[12]] = ku[0], typeof eu[Eu[ku[2]]] === ku[16] ? eu[Eu[ku[2]]] = uu(Gu[Eu[ku[2]]]) : eu[Eu[ku[2]]]
+             return GG[FG[13]] = FG[2], typeof EG[GG[FG[1]]] === FG[17] ? EG[GG[FG[1]]] = bG(oG[GG[FG[1]]]) : EG[GG[FG[1]]]
```

#### 751. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5474-L5477` → after: `L5441-L5449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5441-L5449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5441-L5449) · [Before (L5474-L5477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5474-L5477)

```diff
-             uu[ku[12]] = ku[2]
-           }
-           Eu(113) in vu && ju();
-           let su = ku[49];
+             cG(GG[FG[13]] = FG[1], GG[FG[5]] = function(...bG) {
+               return cG(bG[FG[13]] = FG[4], bG[FG[4]] = {}), bG[FG[0]].length !== bG[FG[1]].length + bG[FG[2]].length ? FG[63] : GG[-FG[64]](bG[FG[1]], bG[FG[2]], bG[FG[0]], FG[1], FG[1], FG[1], bG[FG[4]])
+             }, GG[-FG[64]] = function(bG, ZG, wG, SG, LG, yG, kG) {
+               var UG = FG[63];
+               return yG >= wG.length ? FG[46] : kG["" + SG + LG + yG] !== FG[18] ? kG["" + SG + LG + yG] : (wG[yG] === bG[SG] && wG[yG] === ZG[LG] ? UG = GG[-FG[64]](bG, ZG, wG, SG + FG[2], LG, yG + FG[2], kG) || GG[-FG[64]](bG, ZG, wG, SG, LG + FG[2], yG + FG[2], kG) : wG[yG] == … [truncated]
+             }, console.log(GG[FG[5]]))
+           }
+           GG(165) in aG && wG();
+           let SG = FG[63];
```

#### 752. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5479` → after: `L5451-L5477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5451-L5477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5451-L5477) · [Before (L5479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5479)

```diff
-             if (!su && (0, Xu[ku[4]])()) {
+             if (function(GG) {
+                 return typeof EG[GG] === FG[17] ? EG[GG] = function(...GG) {
+                   for (cG(GG[FG[13]] = FG[2], GG[FG[5]] = '=PKdrlQpfU1GX6,Muhv$ARL)+Bg2!}[3/VjF4io|eHE:YS7T?*_y9C]qI^&(D#%WJ.@{O8wax>z;5N~0Znbkc`<tms"', GG[-FG[69]] = "" + (GG[FG[1]] || ""), GG[-FG[56]] = GG[-FG[69]].length, GG[FG[20]] = [], GG[FG[40]] = FG[1], GG[FG[9]] = FG[1], … [truncated]
+                     if (GG[FG[39]] = GG[FG[5]].indexOf(GG[-FG[69]][GG[FG[11]]]), GG[FG[39]] !== -FG[2])
+                       if (GG[FG[7]] < FG[1]) GG[FG[7]] = GG[FG[39]];
+                       else {
+                         cG(GG[FG[7]] += GG[FG[39]] * FG[33], GG[FG[40]] |= GG[FG[7]] << GG[FG[9]], GG[FG[9]] += (GG[FG[7]] & FG[35]) > FG[36] ? FG[37] : FG[38]);
+                         do {
+                           cG(GG[FG[20]].push(GG[FG[40]] & FG[12]), GG[FG[40]] >>= FG[11], GG[FG[9]] -= FG[11])
+                         } while (GG[FG[9]] > FG[7]);
+                         GG[FG[7]] = -FG[2]
+                       } return GG[FG[7]] > -FG[2] && GG[FG[20]].push((GG[FG[40]] | GG[FG[7]] << GG[FG[9]]) & FG[12]), vG(GG[FG[20]])
+                 }(oG[GG]) : EG[GG]
+               }(166) in aG && function(...GG) {
+                 cG(GG[FG[13]] = FG[1], GG[FG[5]] = function(...bG) {
+                   return bG[FG[13]] = FG[0], GG[FG[43]]({}, bG[FG[1]], bG[FG[2]])
+ ... (11 more added lines; see GitHub link above)
```

#### 753. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5481-L5483` → after: `L5479-L5481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5479-L5481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5479-L5481) · [Before (L5481-L5483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5481-L5483)

```diff
-                 for (Ku(uu[ku[12]] = ku[0], uu[ku[0]] = '91]*06"![#}A73y_?WKOf82Vu/LH{%:BlNSdFXZiT+jCI=Dx@Pn|5.&cQpMo~rR(><kvJ$whqtYEb)`aG4Uez;m,s^g', uu[ku[58]] = "" + (uu[ku[2]] || ""), uu[ku[21]] = uu[ku[58]].length, uu[-ku[62]] = [], uu[-ku[63]] = ku[2], uu[ku[23]] = ku[2], u … [truncated]
-                   if (uu[-ku[8]] = uu[ku[0]].indexOf(uu[ku[58]][uu[-ku[34]]]), uu[-ku[8]] !== -ku[0])
-                     if (uu[ku[25]] < ku[2]) uu[ku[25]] = uu[-ku[8]];
+                 for (cG(GG[FG[13]] = FG[2], GG[FG[5]] = '0DGcUMlTbSak}s2z8!{>^+L.q31Z,IVXigy]CJWtEYr%@u|eP7Ovw;Hf$n[x4=BQjAR(d<N*#:/9&mo"h`)_?5p~6KF', GG[FG[14]] = "" + (GG[FG[1]] || ""), GG[FG[15]] = GG[FG[14]].length, GG[-FG[57]] = [], GG[FG[72]] = FG[1], GG[FG[9]] = FG[1], GG[ … [truncated]
+                   if (GG[-FG[71]] = GG[FG[5]].indexOf(GG[FG[14]][GG[-FG[70]]]), GG[-FG[71]] !== -FG[2])
+                     if (GG[FG[32]] < FG[1]) GG[FG[32]] = GG[-FG[71]];
```

#### 754. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5485` → after: `L5483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5483) · [Before (L5485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5485)

```diff
-                       Ku(uu[ku[25]] += uu[-ku[8]] * ku[32], uu[-ku[63]] |= uu[ku[25]] << uu[ku[23]], uu[ku[23]] += (uu[ku[25]] & ku[35]) > ku[29] ? ku[36] : ku[37]);
+                       cG(GG[FG[32]] += GG[-FG[71]] * FG[33], GG[FG[72]] |= GG[FG[32]] << GG[FG[9]], GG[FG[9]] += (GG[FG[32]] & FG[35]) > FG[36] ? FG[37] : FG[38]);
```

#### 755. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5487-L5490` → after: `L5485-L5488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5485-L5488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5485-L5488) · [Before (L5487-L5490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5487-L5490)

```diff
-                         Ku(uu[-ku[62]].push(uu[-ku[63]] & ku[11]), uu[-ku[63]] >>= ku[10], uu[ku[23]] -= ku[10])
-                       } while (uu[ku[23]] > ku[25]);
-                       uu[ku[25]] = -ku[0]
-                     } return uu[ku[25]] > -ku[0] && uu[-ku[62]].push((uu[-ku[63]] | uu[ku[25]] << uu[ku[23]]) & ku[11]), mu(uu[-ku[62]])
+                         cG(GG[-FG[57]].push(GG[FG[72]] & FG[12]), GG[FG[72]] >>= FG[11], GG[FG[9]] -= FG[11])
+                       } while (GG[FG[9]] > FG[7]);
+                       GG[FG[32]] = -FG[2]
+                     } return GG[FG[32]] > -FG[2] && GG[-FG[57]].push((GG[FG[72]] | GG[FG[32]] << GG[FG[9]]) & FG[12]), vG(GG[-FG[57]])
```

#### 756. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5494` → after: `L5492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5492) · [Before (L5494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5494)

```diff
-                 return Eu[ku[12]] = ku[0], typeof eu[Eu[ku[2]]] === ku[16] ? eu[Eu[ku[2]]] = uu(Gu[Eu[ku[2]]]) : eu[Eu[ku[2]]]
+                 return bG[FG[13]] = FG[2], typeof EG[bG[FG[1]]] === FG[17] ? EG[bG[FG[1]]] = GG(oG[bG[FG[1]]]) : EG[bG[FG[1]]]
```

#### 757. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5497-L5514` → after: `L5495-L5501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5495-L5501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5495-L5501) · [Before (L5497-L5514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5497-L5514)

```diff
-               function ju(...uu) {
-                 function Eu(...uu) {
-                   return uu[ku[12]] = ku[0], uu[ku[2]][ku[0]] * ku[55] + (uu[ku[2]][ku[2]] < ku[2] ? ku[54] | uu[ku[2]][ku[2]] : uu[ku[2]][ku[2]])
-                 }
- 
-                 function ju(...uu) {
-                   switch (uu[ku[12]] = ku[0], ((uu[ku[2]] & ku[54]) !== ku[2]) * ku[0] + (uu[ku[2]] < ku[2]) * ku[13]) {
-                     case ku[2]:
-                       return [uu[ku[2]] % ku[54], Math.trunc(uu[ku[2]] / ku[55])];
-                     case ku[0]:
-                       return [uu[ku[2]] % ku[54] - ku[54], Math.trunc(uu[ku[2]] / ku[55]) + ku[0]];
-                     case ku[13]:
-                       return [((uu[ku[2]] + ku[54]) % ku[54] + ku[54]) % ku[54], Math.round(uu[ku[2]] / ku[55])];
-                     case ku[21]:
-                       return [uu[ku[2]] % ku[54], Math.trunc(uu[ku[2]] / ku[55])]
-                   }
- ... (2 more removed lines; see GitHub link above)
+               function ZG() {
+                 var GG;
+                 cG(GG = function(...bG) {
+                   return cG(bG[FG[13]] = FG[7], bG[FG[7]] = FG[63]), bG[FG[34]] >= bG[FG[0]].length ? FG[46] : bG[FG[23]]["" + bG[FG[4]] + bG[FG[20]] + bG[FG[34]]] !== FG[18] ? bG[FG[23]]["" + bG[FG[4]] + bG[FG[20]] + bG[FG[34]]] : (bG[FG[0]][bG[FG[34]]] === bG[FG[1]][bG[FG[4]]]  … [truncated]
+                 }, console.log((function(...bG) {
+                   return cG(bG[FG[13]] = FG[4], bG[-FG[33]] = {}), bG[FG[0]].length !== bG[FG[1]].length + bG[FG[2]].length ? FG[63] : GG(bG[FG[1]], bG[FG[2]], bG[FG[0]], FG[1], FG[1], FG[1], bG[-FG[33]])
+                 })))
```

#### 758. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5516` → after: `L5503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5503) · [Before (L5516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5516)

```diff
-               Eu(116) in vu && ju();
+               bG(FG[29]) in aG && ZG();
```

#### 759. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5518-L5525` → after: `L5505-L5512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5505-L5512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5505-L5512) · [Before (L5518-L5525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5518-L5525)

```diff
-                 [Eu(117) + Eu(ku[33])]: Eu(119) + Eu(120),
-                 [Eu(121) + Eu(122) + ku[46]]: Eu(123) + Eu(124) + ku[58],
-                 [Eu(125)]: Eu(126) + Eu(ku[66]),
-                 [Eu(ku[67]) + Eu(129)]: Eu(130) + Eu(131),
-                 [Eu(132) + Eu(133)]: Eu(134) + "0k",
-                 [Eu(135)]: Eu(136) + "er",
-                 [Eu(137) + Eu(138)]: Eu(139) + Eu(ku[60]) + ku[68],
-                 [Eu(141)]: Eu(ku[22])
+                 [bG(168) + bG(169)]: bG(170) + bG(171),
+                 [bG(172) + bG(173) + FG[39]]: bG(174) + bG(175) + FG[14],
+                 [bG(176)]: bG(177) + bG(178),
+                 [bG(179) + bG(FG[55])]: bG(181) + bG(182),
+                 [bG(183) + bG(184)]: bG(185) + "0k",
+                 [bG(186)]: bG(187) + "er",
+                 [bG(188) + bG(189)]: bG(190) + bG(FG[56]) + FG[73],
+                 [bG(192)]: bG(193)
```

#### 760. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5527` → after: `L5514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5514) · [Before (L5527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5527)

```diff
-               Ku(su = ku[50], (0, lu[Eu(143)])(fu.Ki, Uu))
+               cG(SG = FG[46], (FG[1], kG[bG(194)])(YG.pi, wG))
```

#### 761. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5529-L5530` → after: `L5516-L5533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5516-L5533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5516-L5533) · [Before (L5529-L5530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5529-L5530)

```diff
-           }), 11574), (0, lu[Eu(144) + Eu(145)])((() => {
-             su = ku[49]
+           }), 9611), (FG[1], kG[ZG(195) + ZG(FG[47])])(((...GG) => {
+             GG[FG[13]] = FG[1],
+               function(GG) {
+                 return typeof EG[GG] === FG[17] ? EG[GG] = function(...GG) {
+                   for (cG(GG[FG[13]] = FG[2], GG[FG[5]] = '8=[41z+u?#7{30Q%]<&GnqIL6>kCb_o!BYNx(P5pX9DTWg`cV})Uy^2*EvHi,Fr$atfwhse|S~MZA;J/jO.:"RKdm@l', GG[FG[0]] = "" + (GG[FG[1]] || ""), GG[FG[15]] = GG[FG[0]].length, GG[FG[30]] = [], GG[FG[34]] = FG[1], GG[-FG[77]] = FG[1], GG … [truncated]
+                     if (GG[-FG[75]] = GG[FG[5]].indexOf(GG[FG[0]][GG[FG[74]]]), GG[-FG[75]] !== -FG[2])
+                       if (GG[-FG[76]] < FG[1]) GG[-FG[76]] = GG[-FG[75]];
+                       else {
+                         cG(GG[-FG[76]] += GG[-FG[75]] * FG[33], GG[FG[34]] |= GG[-FG[76]] << GG[-FG[77]], GG[-FG[77]] += (GG[-FG[76]] & FG[35]) > FG[36] ? FG[37] : FG[38]);
+                         do {
+                           cG(GG[FG[30]].push(GG[FG[34]] & FG[12]), GG[FG[34]] >>= FG[11], GG[-FG[77]] -= FG[11])
+                         } while (GG[-FG[77]] > FG[7]);
+                         GG[-FG[76]] = -FG[2]
+                       } return GG[-FG[76]] > -FG[2] && GG[FG[30]].push((GG[FG[34]] | GG[-FG[76]] << GG[-FG[77]]) & FG[12]), vG(GG[FG[30]])
+                 }(oG[GG]) : EG[GG]
+               }(FG[78]) + "L" in aG && function(...GG) {
+ ... (2 more added lines; see GitHub link above)
```

#### 762. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5535` → after: `L5538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5538) · [Before (L5535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5535)

```diff
-   38530: (uu, Eu, ju) => {
+   38593: (GG, bG, ZG) => {
```

#### 763. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5538-L5539` → after: `L5541-L5542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5541-L5542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5541-L5542) · [Before (L5538-L5539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5538-L5539)

```diff
-       C: () => qu,
-       d: () => cu,
+       e: () => fG,
+       f: () => pG,
```

#### 764. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5542` → after: `L5545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5545) · [Before (L5542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5542)

```diff
-       j: () => Yu,
+       i: () => kG,
```

#### 765. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5544` → after: `L5547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5547) · [Before (L5544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5544)

```diff
-       o: () => fu,
+       n: () => zG,
```

#### 766. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5550-L5553` → after: `L5553-L5556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5553-L5556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5553-L5556) · [Before (L5550-L5553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5550-L5553)

```diff
-     var su = ju(38533),
-       Uu = ju(6677),
-       Zu = ju(38536),
-       Xu = ju(4420);
+     var wG = ZG(38602),
+       SG = ZG(6488),
+       LG = ZG(38604),
+       yG = ZG(4253);
```

#### 767. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5556` → after: `L5559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5559) · [Before (L5556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5556)

```diff
-       return su.b.includes(uu)
+       return wG.c.includes(GG)
```

#### 768. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5568` → after: `L5571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5571) · [Before (L5568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5568)

```diff
-       return uu.physicsState.type === Uu.v.GLIDER && uu.movementType === Uu.r.GLIDING && fu(Eu)
+       return GG.physicsState.type === SG.q.GLIDER && GG.movementType === SG.o.GLIDING && YG(bG)
```

#### 769. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5577-L5579` → after: `L5580-L5582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5580-L5582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5580-L5582) · [Before (L5577-L5579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5577-L5579)

```diff
-       const ju = uu.YG.oEu(uu.FQ),
-         su = uu.YG.qEu(uu.FQ);
-       return uu.sG.canAltAction && void 0 !== ju && void 0 !== su && Cu(su, null === (Eu = ju.selectedItem) || void 0 === Eu ? void 0 : Eu.name) ? (0, Zu.e)(ju.inventory) : 0
+       const ZG = GG.Hr.nbG(GG.sA),
+         wG = GG.Hr.EbG(GG.sA);
+       return GG.Qr.canAltAction && void 0 !== ZG && void 0 !== wG && VG(wG, null === (bG = ZG.selectedItem) || void 0 === bG ? void 0 : bG.name) ? (0, LG.d)(ZG.inventory) : 0
```

#### 770. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5585` → after: `L5588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5588) · [Before (L5585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5585)

```diff
-     const Ou = new Map(Object.entries(Xu.c).map((uu => {
+     const KG = new Map(Object.entries(yG.f).map((GG => {
```

#### 771. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5595` → after: `L5598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5598) · [Before (L5595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5595)

```diff
-       } = ju, Cu = (null !== lu && void 0 !== lu ? lu : []).map((uu => {
+       } = ZG, VG = (null !== kG && void 0 !== kG ? kG : []).map((GG => {
```

#### 772. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5603` → after: `L5606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5606) · [Before (L5603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5603)

```diff
-         food: new Set([...null !== Uu && void 0 !== Uu ? Uu : [], ...null !== Zu && void 0 !== Zu ? Zu : [], ...null !== Xu && void 0 !== Xu ? Xu : [], ...Cu]),
+         food: new Set([...null !== SG && void 0 !== SG ? SG : [], ...null !== LG && void 0 !== LG ? LG : [], ...null !== yG && void 0 !== yG ? yG : [], ...VG]),
```

#### 773. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5605` → after: `L5608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5608) · [Before (L5605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5605)

```diff
-         saddle: qu ? null !== fu && void 0 !== fu ? fu : "Saddle" : null
+         saddle: UG ? null !== YG && void 0 !== YG ? YG : "Saddle" : null
```

#### 774. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5635` → after: `L5638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5638) · [Before (L5635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5635)

```diff
-   38178: (uu, Eu, ju) => {
+   38192: (GG, bG, ZG) => {
```

#### 775. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5638` → after: `L5641-L5642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5641-L5642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5641-L5642) · [Before (L5638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5638)

```diff
-       g: () => yE,
+       f: () => Ob,
+       h: () => db,
```

#### 776. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5641-L5642` → after: `L5645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5645) · [Before (L5641-L5642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5641-L5642)

```diff
-       o: () => DE,
-       q: () => wE,
+       p: () => ub,
```

#### 777. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5644-L5646` → after: `L5647-L5649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5647-L5649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5647-L5649) · [Before (L5644-L5646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5644-L5646)

```diff
-       u: () => BE,
-       y: () => jj,
-       C: () => GE,
+       v: () => gb,
+       z: () => ZZ,
+       D: () => ob,
```

#### 778. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5648-L5649` → after: `L5651-L5652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5651-L5652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5651-L5652) · [Before (L5648-L5649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5648-L5649)

```diff
-       F: () => FE,
-       G: () => JE
+       H: () => nb,
+       K: () => ib
```

#### 779. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5651-L5654` → after: `L5654-L5657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5654-L5657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5654-L5657) · [Before (L5651-L5654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5651-L5654)

```diff
-     var su = ju(9409),
-       Uu = ju(38200);
-     const Zu = su.f.Water.id,
-       Xu = su.f.Ice.id,
+     var wG = ZG(9249),
+       SG = ZG(38207);
+     const LG = wG.l.Water.id,
+       yG = wG.l.Ice.id,
```

#### 780. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5665-L5681` → after: `L5668-L5684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5668-L5684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5668-L5684) · [Before (L5665-L5681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5665-L5681)

```diff
-       return (null === (Eu = su.f[uu]) || void 0 === Eu ? void 0 : Eu.meta.rootId) === Zu
-     }
-     var fu = ju(38368),
-       Cu = ju(202),
-       bu = ju(38375),
-       cu = ju(38382),
-       Nu = ju(349),
-       Ou = ju(1278),
-       Yu = ju(37428),
-       hu = ju(4643),
-       Du = ju(4679),
-       gu = ju(3336),
-       Mu = ju(38183),
-       eu = ju(38243),
-       Gu = ju(38191),
-       pu = ju(38249),
- ... (1 more removed lines; see GitHub link above)
+       return (null === (bG = wG.l[GG]) || void 0 === bG ? void 0 : bG.meta.rootId) === LG
+     }
+     var YG = ZG(38399),
+       VG = ZG(188),
+       pG = ZG(38402),
+       fG = ZG(38413),
+       QG = ZG(352),
+       KG = ZG(1177),
+       hG = ZG(37396),
+       dG = ZG(4479),
+       JG = ZG(4508),
+       rG = ZG(3135),
+       zG = ZG(38198),
+       EG = ZG(38258),
+       oG = ZG(38201),
+       XG = ZG(38261),
+ ... (1 more added lines; see GitHub link above)
```

#### 781. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5683` → after: `L5686-L5701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5686-L5701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5686-L5701) · [Before (L5683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5683)

```diff
-       du = ju(3879),
+       CG = ZG(3683),
+       WG = ZG(38265),
+       mG = ZG(37105),
+       IG = ZG(37102),
+       FG = ZG(38271),
+       vG = ZG(3766),
+       aG = ZG(19),
+       cG = ZG(38280),
+       lG = ZG(38289),
+       jG = ZG(37672),
+       PG = ZG(38323),
+       MG = ZG(3137),
+       AG = ZG(1163),
+       sG = ZG(38333),
+       qG = ZG(38345),
+       nG = ZG(37518),
```

#### 782. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5685-L5700` → after: `L5703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5703) · [Before (L5685-L5700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5685-L5700)

```diff
-       Pu = ju(37151),
-       ou = ju(37145),
-       ku = ju(38263),
-       mu = ju(3946),
-       vu = ju(24),
-       Ku = ju(38266),
-       Vu = ju(38273),
-       ru = ju(37723),
-       Qu = ju(38308),
-       iu = ju(3340),
-       Wu = ju(1255),
-       Su = ju(38314),
-       Iu = ju(38324),
-       Fu = ju(37571),
-       Bu = ju(38236),
-       Lu = ju(38386);
+       eG = ZG(38416);
```

#### 783. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5703-L5716` → after: `L5706-L5719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5706-L5719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5706-L5719) · [Before (L5703-L5716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5703-L5716)

```diff
-     var Tu = ju(37698),
-       Hu = ju(37693),
-       Au = ju(38322),
-       nu = ju(37655),
-       yu = ju(38009),
-       zu = ju(37969);
-     var Ru = ju(38344),
-       uE = ju(37664),
-       EE = ju(38298),
-       jE = ju(37837),
-       sE = ju(37809),
-       UE = ju(37603),
-       ZE = ju(37841),
-       XE = ju(37630),
+     var HG = ZG(37644),
+       tG = ZG(37639),
+       DG = ZG(38336),
+       NG = ZG(37605),
+       OG = ZG(38011),
+       xG = ZG(37962);
+     var BG = ZG(38363),
+       Gb = ZG(37613),
+       bb = ZG(38304),
+       Zb = ZG(37808),
+       wb = ZG(37777),
+       Sb = ZG(37550),
+       Lb = ZG(37816),
+       yb = ZG(37567),
```

#### 784. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5718-L5724` → after: `L5721-L5727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5721-L5727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5721-L5727) · [Before (L5718-L5724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5718-L5724)

```diff
-       qE = ju(2893),
-       fE = ju(1369),
-       CE = ju(37488),
-       bE = ju(38310),
-       cE = ju(38333),
-       NE = ju(38342);
-     const OE = Ru.c.dl | Ru.h,
+       Ub = ZG(2751),
+       Yb = ZG(1287),
+       Vb = ZG(37432),
+       pb = ZG(38327),
+       fb = ZG(38347),
+       Qb = ZG(38354);
+     const Kb = BG.c.Ik | BG.j,
```

#### 785. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5726-L5730` → after: `L5729-L5733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5729-L5733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5729-L5733) · [Before (L5726-L5730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5726-L5730)

```diff
-         Helmet: ju(38347),
-         Chestplate: ju(38352),
-         Leggings: ju(38357),
-         Boots: ju(38361),
-         Gauntlets: ju(38365)
+         Helmet: ZG(38369),
+         Chestplate: ZG(38375),
+         Leggings: ZG(38379),
+         Boots: ZG(38388),
+         Gauntlets: ZG(38392)
```

#### 786. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5735-L5737` → after: `L5738-L5740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5738-L5740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5738-L5740) · [Before (L5735-L5737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5735-L5737)

```diff
-       vu.h.TY("localBlockMined");
-       const ju = (0, qE.b)(),
-         fu = ju.zD(uu[0], uu[1], uu[2]);
+       aG.l.xh("localBlockMined");
+       const ZG = (0, Ub.e)(),
+         YG = ZG.qJ(GG[0], GG[1], GG[2]);
```

#### 787. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5740-L5743` → after: `L5743-L5746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5743-L5746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5743-L5746) · [Before (L5740-L5743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5740-L5743)

```diff
-         bu = null === (Eu = su.f[Cu].solid) || void 0 === Eu || Eu,
-         cu = Qu.e.getUniqueColoursForParticleSystem(uu);
-       Qu.j.emit(50, {
-         ...(0, bE.b)(uu, su.f[fu].nY, .05, .95),
+         pG = null === (bG = wG.l[VG].solid) || void 0 === bG || bG,
+         fG = PG.b.getUniqueColoursForParticleSystem(GG);
+       PG.g.emit(50, {
+         ...(0, pb.e)(GG, wG.l[YG].bd, .05, .95),
```

#### 788. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5750-L5752` → after: `L5753-L5755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5753-L5755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5753-L5755) · [Before (L5750-L5752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5750-L5752)

```diff
-       const Nu = ju.getClientPredictedOption((0, qE.c)().FQ, "fillBrokenBlocksWithWater") ? function(uu, Eu, ju, fu, Cu) {
-           const bu = su.f[Cu];
-           if (0 === Cu || bu.XN || Cu in Uu.c) return 0;
+       const QG = ZG.getClientPredictedOption((0, Ub.i)().sA, "fillBrokenBlocksWithWater") ? function(GG, bG, ZG, YG, VG) {
+           const pG = wG.l[VG];
+           if (0 === VG || pG.UQ || VG in SG.e) return 0;
```

#### 789. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5758` → after: `L5761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5761) · [Before (L5758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5758)

```diff
-           return cu || Nu ? Zu : 0
+           return fG || QG ? LG : 0
```

#### 790. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5761-L5769` → after: `L5764-L5772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5764-L5772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5764-L5772) · [Before (L5761-L5769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5761-L5769)

```diff
-           const ju = (0, qE.b)().client.inventoryPrediction.record(null);
-           return (0, du.sendColyMessage)(mu.ug, {
-             Pl: 0,
-             cC: Ju().copy([], uu),
-             NC: DE(),
-             OC: !1,
-             YC: !1,
-             hC: Eu,
-             xX: ju
+           const ZG = (0, Ub.e)().client.inventoryPrediction.record(null);
+           return (0, CG.sendColyMessage)(vG.Sf, {
+             vk: 0,
+             VV: iG().copy([], GG),
+             pV: Jb(),
+             fV: !1,
+             QV: !1,
+             KV: bG,
+             Ty: ZG
```

#### 791. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5773-L5774` → after: `L5776-L5777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5776-L5777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5776-L5777) · [Before (L5773-L5774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5773-L5774)

```diff
-           FQ: Yu
-         } = (0, qE.c)();
+           sA: hG
+         } = (0, Ub.i)();
```

#### 792. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5777` → after: `L5780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5780) · [Before (L5777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5777)

```diff
-         const Eu = ju.getBlockBreakDrop(Yu, fu, null !== (hu = null === (Du = ju.getInvenHeldItem(Yu)) || void 0 === Du ? void 0 : Du.name) && void 0 !== hu ? hu : null);
+         const bG = ZG.getBlockBreakDrop(hG, YG, null !== (dG = null === (JG = ZG.getInvenHeldItem(hG)) || void 0 === JG ? void 0 : JG.name) && void 0 !== dG ? dG : null);
```

#### 793. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5780` → after: `L5783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5783) · [Before (L5780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5780)

```diff
-       ju.lK(uu[0], uu[1], uu[2], Nu), (0, cE.g)(uu[0], uu[1], uu[2]), ju.client.triggerGameCallback("onPlayerChangeBlock", (0, qE.c)().FQ, uu[0], uu[1], uu[2], (0, su.e)(fu), "Air")
+       ZG.HI(GG[0], GG[1], GG[2], QG), (0, fb.f)(GG[0], GG[1], GG[2]), ZG.client.triggerGameCallback("onPlayerChangeBlock", (0, Ub.i)().sA, GG[0], GG[1], GG[2], (0, wG.i)(YG), "Air")
```

#### 794. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5783` → after: `L5786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5786) · [Before (L5783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5783)

```diff
-     const gE = ["length", 0, 1, 33554432, 67108864, 2, "b", 5, 3, "f", 77, 220, "a", 60, 196];
+     const rb = ["length", 0, 1, 2, void 0, "c", "d", 5, "a", 1023, 44, 65536, 160, 10, 55296, 56320, 6, 12, 63, 128, 114, 208, 14, 3, 68, 124, 192, "Invalid byte index", 255, 224, 4, 31, "Invalid continuation byte", 240, 15, 7, 18, "b", !1, 234, 16, 8, 131, "qyVzRD", 512, "012345 … [truncated]
```

#### 795. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5792-L5793` → after: `L5795-L5796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5795-L5796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5795-L5796) · [Before (L5792-L5793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5792-L5793)

```diff
-       const ju = (0, Pu.e)((0, fu.e)(uu, Eu));
-       ou.e.play(ju, 1)
+       const ZG = (0, mG.g)((0, YG.d)(GG, bG));
+       IG.c.play(ZG, 1)
```

#### 796. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5795-L5796` → after: `L5798-L5848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5798-L5848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5798-L5848) · [Before (L5795-L5796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5795-L5796)

```diff
-       eE(uu[gE[0]] = gE[1], uu[-gE[11]] = gE[1], DE = () => {
-         if (uu[-gE[11]]++, uu[-gE[11]] === gE[7]) {
+       GG[rb[0]] = rb[1], "j93b0t" in zb && function() {
+         ! function(...GG) {
+           function bG(...GG) {
+             for (Eb(GG[rb[0]] = rb[2], GG[rb[8]] = [], GG[rb[3]] = rb[1], GG[rb[5]] = GG[rb[1]].length, GG[rb[6]] = rb[4], GG[rb[7]] = rb[4]); GG[rb[3]] < GG[rb[5]];) Eb(GG[rb[6]] = GG[rb[1]].charCodeAt(GG[rb[3]]++), GG[rb[6]] >= rb[14] && GG[rb[6]] <= rb[53] && GG[rb[3]] < GG[rb … [truncated]
+             return GG[rb[8]]
+           }
+ 
+           function ZG(...bG) {
+             for (Eb(bG[rb[0]] = rb[2], bG[rb[2]] = bG[rb[1]].length, bG[rb[3]] = -rb[2], bG[-rb[10]] = rb[4], bG[rb[6]] = ""); ++bG[rb[3]] < bG[rb[2]];) bG[-rb[10]] = bG[rb[1]][bG[rb[3]]], bG[-rb[10]] > rb[56] && Eb(bG[-rb[10]] -= rb[11], bG[rb[6]] += GG[rb[12]](bG[-rb[10]] >>> r … [truncated]
+             return bG[rb[6]]
+           }
+ 
+           function wG(GG) {
+             if (GG >= rb[14] && GG <= rb[54]) throw Error("Lone surrogate U+" + GG.toString(rb[40]).toUpperCase() + " is not a scalar valu" + rb[48])
+           }
+ 
+ ... (35 more added lines; see GitHub link above)
```

#### 797. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5798` → after: `L5850-L5987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5850-L5987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5850-L5987) · [Before (L5798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5798)

```diff
-             uu[gE[0]] = gE[1]
+             for (Eb(wG[rb[0]] = rb[2], GG[rb[6]] = bG(wG[rb[1]]), GG[rb[23]] = GG[rb[6]].length, GG[rb[24]] = rb[1], wG[-rb[39]] = [], wG[rb[37]] = rb[4]);
+               (wG[rb[37]] = UG()) !== rb[38];) wG[-rb[39]].push(wG[rb[37]]);
+             return ZG(wG[-rb[39]])
+           }
+           Eb(GG[rb[0]] = rb[2], GG[rb[12]] = String.fromCharCode), Eb(GG[rb[6]] = rb[4], GG[rb[23]] = rb[4], GG[rb[24]] = rb[4]), Eb(GG[rb[1]].version = "3.0.0", GG[rb[1]].encode = yG, GG[rb[1]].decode = YG)
+         }("undefined" === typeof exports ? this.utf8 = {} : exports)
+       }(), Eb(GG[rb[8]] = rb[1], Jb = () => {
+         if (GG[rb[8]]++, GG[rb[8]] === rb[7]) {
+           function bG(...GG) {
+             Eb(GG[rb[0]] = rb[1], GG[rb[68]] = function(...GG) {
+               function bG(...GG) {
+                 return GG[rb[0]] = rb[3], LG(wG(yG(GG[rb[1]]), yG(GG[rb[2]])))
+               }
+ 
+               function ZG(...GG) {
+                 return GG[rb[0]] = rb[23],
+ ... (122 more added lines; see GitHub link above)
```

#### 798. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5800` → after: `L5989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5989) · [Before (L5800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5800)

```diff
-           return "aV8SK0" in ME && Eu(), uu[-gE[11]] = gE[1], "es"
+           return "YF3rnj" + rb[5] in zb && bG(), GG[rb[8]] = rb[1], "es"
```

#### 799. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5802` → after: `L5991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5991) · [Before (L5802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5802)

```diff
-         return ku[gE[9]]
+         return FG.f
```

#### 800. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5810` → after: `L5999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R5999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L5999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L5999) · [Before (L5810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5810)

```diff
-         SU: lu = !1,
+         FS: kG = !1,
```

#### 801. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5818-L5819` → after: `L6007-L6008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6007-L6008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6007-L6008) · [Before (L5818-L5819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5818-L5819)

```diff
-       } = Cu.e;
-       if (Eu ??= String(uu.YG.pT([])), uu.YG.add([ju[0], ju[1], ju[2]], hu, hu, null, null, void 0 !== fu, !1, Eu), uu.YG.yV(Eu, "autoRemoveMesh"), uu.YG.yV(Eu, "itemState", {
+       } = VG.d;
+       if (bG ??= String(GG.Hr.yN([])), GG.Hr.add([ZG[0], ZG[1], ZG[2]], dG, dG, null, null, void 0 !== YG, !1, bG), GG.Hr.bM(bG, "autoRemoveMesh"), GG.Hr.bM(bG, "itemState", {
```

#### 802. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5824-L5825` → after: `L6013-L6014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6013-L6014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6013-L6014) · [Before (L5824-L5825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5824-L5825)

```diff
-           SU: lu,
-           creationTime: null !== Nu && void 0 !== Nu ? Nu : Date.now(),
+           FS: kG,
+           creationTime: null !== QG && void 0 !== QG ? QG : Date.now(),
```

#### 803. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5828-L5830` → after: `L6017-L6019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6017-L6019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6017-L6019) · [Before (L5828-L5830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5828-L5830)

```diff
-         const ju = uu.YG.SF(Eu);
-         (0, cu.e)(ju), ju.applyImpulse(fu)
-       } else uu.YG.yV(Eu, "smoothToServerPos", {
+         const ZG = GG.Hr.qT(bG);
+         (0, fG.d)(ZG), ZG.applyImpulse(YG)
+       } else GG.Hr.bM(bG, "smoothToServerPos", {
```

#### 804. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5838-L5839` → after: `L6027-L6028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6027-L6028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6027-L6028) · [Before (L5838-L5839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5838-L5839)

```diff
-       const Uu = null === (ju = uu.YG.getState(Eu, "autoRotate")) || void 0 === ju ? void 0 : ju.heading,
-         Zu = null === (su = uu.YG.GEu(Eu)) || void 0 === su ? void 0 : su.offset;
+       const SG = null === (ZG = GG.Hr.getState(bG, "autoRotate")) || void 0 === ZG ? void 0 : ZG.heading,
+         LG = null === (wG = GG.Hr.lbG(bG)) || void 0 === wG ? void 0 : wG.offset;
```

#### 805. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5852` → after: `L6041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6041) · [Before (L5852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5852)

```diff
-       } = uu.YG.getState(Eu, "itemState"), fu = (0, Ku.e)() * qu, bu = Xu.droppedMeshTypeScale * fu;
+       } = GG.Hr.getState(bG, "itemState"), YG = (0, cG.e)() * UG, pG = yG.droppedMeshTypeScale * YG;
```

#### 806. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5854` → after: `L6043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6043) · [Before (L5854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5854)

```diff
-       uu.YG.yV(Eu, "hidingMeshManager", {
+       GG.Hr.bM(bG, "hidingMeshManager", {
```

#### 807. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5860` → after: `L6049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6049) · [Before (L5860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5860)

```diff
-             const lu = uu.tO.oV;
+             const kG = GG.HK.Vl;
```

#### 808. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5862` → after: `L6051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6051) · [Before (L5862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5862)

```diff
-             lu.setEntityId(su, Eu), lu.setScale(su, bu, bu, bu), lu.Wk(su, !0);
+             kG.setEntityId(wG, bG), kG.setScale(wG, pG, pG, pG), kG.DW(wG, !0);
```

#### 809. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5864` → after: `L6053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6053) · [Before (L5864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5864)

```diff
-               YG: qu
+               Hr: UG
```

#### 810. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5866-L5870` → after: `L6055-L6059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6055-L6059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6055-L6059) · [Before (L5866-L5870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5866-L5870)

```diff
-             qu.yV(Eu, qu.names.mesh, {
-               mV: su,
-               rju: lu.csu(su, 0),
-               offset: Ju().bu(0, null !== (Zu = null === ju || void 0 === ju ? void 0 : ju.yOffset) && void 0 !== Zu ? Zu : Xu.droppedMeshOffset * fu + .05 * Math.random(), 0)
-             }), qu.yV(Eu, "autoRotate"), ju && (qu.getState(Eu, "autoRotate").heading = ju.heading)
+             UG.bM(bG, UG.names.mesh, {
+               Ql: wG,
+               DZG: kG.CwG(wG, 0),
+               offset: iG().wb(0, null !== (LG = null === ZG || void 0 === ZG ? void 0 : ZG.yOffset) && void 0 !== LG ? LG : yG.droppedMeshOffset * YG + .05 * Math.random(), 0)
+             }), UG.bM(bG, "autoRotate"), ZG && (UG.getState(bG, "autoRotate").heading = ZG.heading)
```

#### 811. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5876` → after: `L6065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6065) · [Before (L5876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5876)

```diff
-             YG: ju
+             Hr: ZG
```

#### 812. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5878` → after: `L6067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6067) · [Before (L5878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5878)

```diff
-           ju.zV(Eu, ju.names.mesh), ju.zV(Eu, "autoRotate")
+           ZG.YM(bG, ZG.names.mesh), ZG.YM(bG, "autoRotate")
```

#### 813. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5881-L5882` → after: `L6070-L6071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6070-L6071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6070-L6071) · [Before (L5881-L5882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5881-L5882)

```diff
-         shadowSize: Cu.e.droppedBlockSize,
-         canSee: !1 !== (null === (Uu = uu.EQ[uu.FQ]) || void 0 === Uu || null === (Zu = Uu[Eu]) || void 0 === Zu ? void 0 : Zu.canSee),
+         shadowSize: VG.d.droppedBlockSize,
+         canSee: !1 !== (null === (SG = GG.JA[GG.sA]) || void 0 === SG || null === (LG = SG[bG]) || void 0 === LG ? void 0 : LG.canSee),
```

#### 814. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5888` → after: `L6077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6077) · [Before (L5888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5888)

```diff
-       (0, qE.c)().AN && (uu.Qr("aShaderPackItem", 4), uu.Hr.aShaderPackItem = CE.Vector4.FromArray(Eu))
+       (0, Ub.i)().OQ && (GG.gM("aShaderPackItem", 4), GG.hA.aShaderPackItem = Vb.Vector4.FromArray(bG))
```

#### 815. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5900` → after: `L6089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6089) · [Before (L5900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5900)

```diff
-         ...Gu.d,
+         ...oG.e,
```

#### 816. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5905` → after: `L6094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6094) · [Before (L5905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5905)

```diff
-         dl: !1,
+         Ik: !1,
```

#### 817. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5911-L5914` → after: `L6100-L6103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6100-L6103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6100-L6103) · [Before (L5911-L5914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5911-L5914)

```diff
-       const Uu = (0, qE.c)();
-       ju && (Eu.sideOrientation = uE.b.ClockWiseSideOrientation);
-       const Zu = Uu.tO.oV,
-         Xu = Uu.AN ? {
+       const SG = (0, Ub.i)();
+       ZG && (bG.sideOrientation = Gb.e.ClockWiseSideOrientation);
+       const LG = SG.HK.Vl,
+         yG = SG.OQ ? {
```

#### 818. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5918` → after: `L6107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6107) · [Before (L5918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5918)

```diff
-         Mb: 16,
+         rp: 16,
```

#### 819. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5925` → after: `L6114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6114) · [Before (L5925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5925)

```diff
-       }), Zu.setPickableForType(uu, !1), Uu.tO.tV(Eu), uu
+       }), LG.setPickableForType(GG, !1), SG.HK.Tl(bG), GG
```

#### 820. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5935` → after: `L6124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6124) · [Before (L5935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5935)

```diff
-       const Zu = (0, NE.h)(Eu, ju),
+       const LG = (0, Qb.k)(bG, ZG),
```

#### 821. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5939` → after: `L6128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6128) · [Before (L5939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5939)

```diff
-       return Uu && (Xu.color = (0, nu.o)(Zu.positions.length / 3, nu.e)), (0, EE.o)((0, qE.c)().tO, uu, {
+       return SG && (yG.color = (0, NG.s)(LG.positions.length / 3, NG.e)), (0, bb.q)((0, Ub.i)().HK, GG, {
```

#### 822. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5947` → after: `L6136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6136) · [Before (L5947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5947)

```diff
-       }, (() => new CE.Vector4(0, 1 - eu.b, 1, eu.b)));
+       }, (() => new Vb.Vector4(0, 1 - EG.d, 1, EG.d)));
```

#### 823. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5950` → after: `L6139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6139) · [Before (L5950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5950)

```diff
-       return !uu || "object" !== typeof uu || Array.isArray(uu) ? null : "animTextures" in uu ? uu : null
+       return !GG || "object" !== typeof GG || Array.isArray(GG) ? null : "animTextures" in GG ? GG : null
```

#### 824. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5955-L5958` → after: `L6144-L6147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6144-L6147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6144-L6147) · [Before (L5955-L5958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5955-L5958)

```diff
-       const su = `cuboidBlock|${ju.name}|${Eu.key}|${(0,yu.i)(uu)}`;
-       if ((0, qE.c)().tO.oV.hasType(su)) return su;
-       const Uu = KE(su, Eu, rE, (0, NE.r)(Eu, VE));
-       return Uu.material = ju, (0, Su.f)(Uu), Uu.Wk(!1), Uu.VY = !1, iE.set(su, Uu), mE(su, Uu, uu, vE)
+       const wG = `cuboidBlock|${ZG.name}|${bG.key}|${(0,OG.h)(GG)}`;
+       if ((0, Ub.i)().HK.Vl.hasType(wG)) return wG;
+       const SG = cb(wG, bG, jb, (0, Qb.t)(bG, lb));
+       return SG.material = ZG, (0, sG.i)(SG), SG.DW(!1), SG.qh = !1, Mb.set(wG, SG), vb(wG, SG, GG, ab)
```

#### 825. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5963-L5966` → after: `L6152-L6155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6152-L6155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6152-L6155) · [Before (L5963-L5966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5963-L5966)

```diff
-       if (uu.tO.xO || !(0, eu.e)()) return !0;
-       const Eu = Mu.e.getBlockAtlasMaterial(uu.tO.hV(), !1, !1),
-         ju = iE.get(WE(!1, NE.c, Eu));
-       return !(ju && !(0, jE.g)(ju)) || function(uu) {
+       if (GG.HK.tK || !(0, EG.g)()) return !0;
+       const bG = zG.b.getBlockAtlasMaterial(GG.HK.Dv(), !1, !1),
+         ZG = Mb.get(Ab(!1, Qb.b, bG));
+       return !(ZG && !(0, Zb.e)(ZG)) || function(GG) {
```

#### 826. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5968` → after: `L6157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6157) · [Before (L5968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5968)

```diff
-         if (!Eu || uu.Gw()) return !1;
+         if (!bG || GG.Tu()) return !1;
```

#### 827. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L5983-L5984` → after: `L6172-L6173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6172-L6173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6172-L6173) · [Before (L5983-L5984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L5983-L5984)

```diff
-         uu.once("Tb", (() => {
-           const su = uu.tO.hV().onAfterRenderObservable;
+         GG.once("Tp", (() => {
+           const wG = GG.HK.Dv().onAfterRenderObservable;
```

#### 828. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6004` → after: `L6193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6193) · [Before (L6004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6004)

```diff
-       return Array.isArray(uu) ? CE.dO.FromArray(uu) : new CE.dO(uu, uu, uu)
+       return Array.isArray(GG) ? Vb.mK.FromArray(GG) : new Vb.mK(GG, GG, GG)
```

#### 829. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6009-L6010` → after: `L6198-L6199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6198-L6199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6198-L6199) · [Before (L6009-L6010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6009-L6010)

```diff
-         this.bakeInScaling = void 0, this.name = void 0, this.vY = void 0, this.weight = void 0, this.heldItemScale = void 0, this.heldItemGlb = void 0, this.stackable = void 0, this.textureInfo = void 0, this.itemTexture = void 0, this.solid = void 0, this.droppedMeshOffset = vo … [truncated]
-         const lu = (0, qE.b)().sN.metadatas[uu];
+         this.bakeInScaling = void 0, this.name = void 0, this.Ah = void 0, this.weight = void 0, this.heldItemScale = void 0, this.heldItemGlb = void 0, this.stackable = void 0, this.textureInfo = void 0, this.itemTexture = void 0, this.solid = void 0, this.droppedMeshOffset = vo … [truncated]
+         const kG = (0, Ub.e)().LQ.metadatas[GG];
```

#### 830. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6012` → after: `L6201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6201) · [Before (L6012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6012)

```diff
-         this.bakeInScaling = 1, this.name = uu, this.vY = Eu, this.weight = null !== (ju = lu.weight) && void 0 !== ju ? ju : 1, this.heldItemScale = null !== (su = lu.heldItemScale) && void 0 !== su ? su : 1, this.stackable = null === (Uu = lu.stackable) || void 0 === Uu || Uu,  … [truncated]
+         this.bakeInScaling = 1, this.name = GG, this.Ah = bG, this.weight = null !== (ZG = kG.weight) && void 0 !== ZG ? ZG : 1, this.heldItemScale = null !== (wG = kG.heldItemScale) && void 0 !== wG ? wG : 1, this.stackable = null === (SG = kG.stackable) || void 0 === SG || SG,  … [truncated]
```

#### 831. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6014-L6015` → after: `L6203-L6204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6203-L6204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6203-L6204) · [Before (L6014-L6015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6014-L6015)

```diff
-           type: iu.f.ITEM
-         }, this.modelSource = gu.d.getModel(this.modelDefault.name, iu.f.ITEM), this.displayName = uu
+           type: MG.h.ITEM
+         }, this.modelSource = rG.e.getModel(this.modelDefault.name, MG.h.ITEM), this.displayName = GG
```

#### 832. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6038` → after: `L6227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6227) · [Before (L6038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6038)

```diff
-         return (0, yu.i)(uu.flippedWinding)
+         return (0, OG.h)(GG.flippedWinding)
```

#### 833. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6042-L6044` → after: `L6231-L6233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6231-L6233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6231-L6233) · [Before (L6042-L6044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6042-L6044)

```diff
-           const Zu = `item|${uu}|${Eu}|${ju.uniqueId}`;
-           ju.material || console.error(`${uu} thin base has no material`);
-           const Xu = ju.clone(`${uu}ThinBase|${Eu}`, null);
+           const LG = `item|${GG}|${bG}|${ZG.uniqueId}`;
+           ZG.material || console.error(`${GG} thin base has no material`);
+           const yG = ZG.clone(`${GG}ThinBase|${bG}`, null);
```

#### 834. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6051` → after: `L6240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6240) · [Before (L6051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6051)

```diff
-         const su = (0, qE.c)().tO.oV,
+         const wG = (0, Ub.i)().HK.Vl,
```

#### 835. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6053-L6054` → after: `L6242-L6243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6242-L6243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6242-L6243) · [Before (L6053-L6054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6053-L6054)

```diff
-         if (su.set(Uu, "aLightLevels", sE.e), su.set(Uu, "aOpacity", 1), (0, qE.c)().AN) {
-           const ju = uu.dl ? Ru.c.dl : uu.dropped ? Ru.c.dropped : 0;
+         if (wG.set(SG, "aLightLevels", wb.b), wG.set(SG, "aOpacity", 1), (0, Ub.i)().OQ) {
+           const ZG = GG.Ik ? BG.c.Ik : GG.dropped ? BG.c.dropped : 0;
```

#### 836. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6063` → after: `L6252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6252) · [Before (L6063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6063)

```diff
-         return [(0, Ru.n)(this.YV() | uu, (0, pu.e)(Eu)), ...this.shaderPackLocalFrame()]
+         return [(0, BG.n)(this.Av() | GG, (0, XG.d)(bG)), ...this.shaderPackLocalFrame()]
```

#### 837. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6066-L6067` → after: `L6255-L6256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6255-L6256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6255-L6256) · [Before (L6066-L6067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6066-L6067)

```diff
-         const uu = su.f[this.name];
-         if (null === uu || void 0 === uu || !uu.blockModelItem) return [Vu.b / this.bakeInScaling, 0, 0];
+         const GG = wG.l[this.name];
+         if (null === GG || void 0 === GG || !GG.blockModelItem) return [lG.e / this.bakeInScaling, 0, 0];
```

#### 838. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6073-L6074` → after: `L6262-L6263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6262-L6263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6262-L6263) · [Before (L6073-L6074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6073-L6074)

```diff
-         } = (0, Vu.e)((0, Vu.l)(uu));
-         return [Eu / this.bakeInScaling, ju, (0, Ru.k)(Uu, Zu)]
+         } = (0, lG.i)((0, lG.m)(GG));
+         return [bG / this.bakeInScaling, ZG, (0, BG.m)(SG, LG)]
```

#### 839. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6077` → after: `L6266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6266) · [Before (L6077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6077)

```diff
-         (0, qE.c)().AN && (uu.Hr.aShaderPackItem = CE.Vector4.FromArray(this.shaderPackItem(Eu, ju)))
+         (0, Ub.i)().OQ && (GG.hA.aShaderPackItem = Vb.Vector4.FromArray(this.shaderPackItem(bG, ZG)))
```

#### 840. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6086` → after: `L6275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6275) · [Before (L6086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6086)

```diff
-         const Eu = su.f[this.name],
+         const bG = wG.l[this.name],
```

#### 841. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6088` → after: `L6277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6277) · [Before (L6088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6088)

```diff
-         return ju && Eu.blockModelItem ? ju * this.bakeInScaling / (0, Vu.c)(Eu) : 0
+         return ZG && bG.blockModelItem ? ZG * this.bakeInScaling / (0, lG.f)(bG) : 0
```

#### 842. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6095-L6097` → after: `L6284-L6286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6284-L6286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6284-L6286) · [Before (L6095-L6097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6095-L6097)

```diff
-         const Zu = (0, qE.c)().tO.oV,
-           Xu = null !== (su = au.l[Eu]) && void 0 !== su ? su : au.l.None;
-         Zu.set(uu, "aEnchantmentColour", Xu.r, Xu.g, Xu.b), Zu.set(uu, "aEnchantmentSpeed", null !== (Uu = Nu.fb[Eu]) && void 0 !== Uu ? Uu : Nu.fb.None)
+         const LG = (0, Ub.i)().HK.Vl,
+           yG = null !== (wG = WG.r[bG]) && void 0 !== wG ? wG : WG.r.None;
+         LG.set(GG, "aEnchantmentColour", yG.r, yG.g, yG.b), LG.set(GG, "aEnchantmentSpeed", null !== (SG = QG.tb[bG]) && void 0 !== SG ? SG : QG.tb.None)
```

#### 843. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6105` → after: `L6294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6294) · [Before (L6105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6105)

```diff
-           ju.Hr.aEnchantmentColour = null !== (su = au.l[uu]) && void 0 !== su ? su : au.l.None, ju.Hr.aEnchantmentSpeed = null !== (Uu = Nu.fb[uu]) && void 0 !== Uu ? Uu : Nu.fb.None, this._markForShaderPack(ju, OE, uu)
+           ZG.hA.aEnchantmentColour = null !== (wG = WG.r[GG]) && void 0 !== wG ? wG : WG.r.None, ZG.hA.aEnchantmentSpeed = null !== (SG = QG.tb[GG]) && void 0 !== SG ? SG : QG.tb.None, this._markForShaderPack(ZG, Kb, GG)
```

#### 844. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6115-L6116` → after: `L6304-L6305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6304-L6305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6304-L6305) · [Before (L6115-L6116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6115-L6116)

```diff
-           const ju = (0, EE.q)((0, qE.c)().tO, `${this.name}AbstractMeshParent${this._meshCounter++}`);
-           return ju.Of = LE(uu), this._attachNewMeshInstanceToParent(ju, Eu), ju
+           const ZG = (0, bb.u)((0, Ub.i)().HK, `${this.name}AbstractMeshParent${this._meshCounter++}`);
+           return ZG.nY = eb(GG), this._attachNewMeshInstanceToParent(ZG, bG), ZG
```

#### 845. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6119-L6120` → after: `L6308-L6309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6308-L6309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6308-L6309) · [Before (L6119-L6120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6119-L6120)

```diff
-           const ju = (0, EE.q)((0, qE.c)().tO, `earlyLoaded${this.name}AbstractMeshParent${this._meshParents.length}`);
-           return ju.Of = LE(uu), this._sourceMeshLoadFailed || this._meshParents.push({
+           const ZG = (0, bb.u)((0, Ub.i)().HK, `earlyLoaded${this.name}AbstractMeshParent${this._meshParents.length}`);
+           return ZG.nY = eb(GG), this._sourceMeshLoadFailed || this._meshParents.push({
```

#### 846. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6127` → after: `L6316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6316) · [Before (L6127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6127)

```diff
-         uu.Qr("aEnchantmentColour", 3), uu.Qr("aEnchantmentSpeed", 1), uu.Hr.aEnchantmentColour = (0, au.e)(0, 0, 0), uu.Hr.aEnchantmentSpeed = 0, (0, Su.f)(uu), (0, Iu.d)(uu), dE(uu, this.shaderPackItem(0, void 0))
+         GG.gM("aEnchantmentColour", 3), GG.gM("aEnchantmentSpeed", 1), GG.hA.aEnchantmentColour = (0, WG.g)(0, 0, 0), GG.hA.aEnchantmentSpeed = 0, (0, sG.i)(GG), (0, qG.c)(GG), Cb(GG, this.shaderPackItem(0, void 0))
```

#### 847. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6135` → after: `L6324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6324) · [Before (L6135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6135)

```diff
-           const Uu = su === iu.l.BASE64;
+           const SG = wG === MG.j.BASE64;
```

#### 848. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6137` → after: `L6326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6326) · [Before (L6137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6137)

```diff
-             source: Uu ? ju : "",
+             source: SG ? ZG : "",
```

#### 849. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6151` → after: `L6340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6340) · [Before (L6151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6151)

```diff
-             return uu && gu.d.getModelOverride(uu.name) ? Eu(gu.d.getModel(uu.name, uu.type, !0)) : null
+             return GG && rG.e.getModelOverride(GG.name) ? bG(rG.e.getModel(GG.name, GG.type, !0)) : null
```

#### 850. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6160` → after: `L6349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6349) · [Before (L6160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6160)

```diff
-         } = this.modelGlbLoad(Eu), Zu = (await (0, ru.c)(ju, uu, su, Uu)).meshes.filter((uu => uu.getTotalVertices() > 0));
+         } = this.modelGlbLoad(bG), LG = (await (0, jG.e)(ZG, GG, wG, SG)).meshes.filter((GG => GG.getTotalVertices() > 0));
```

#### 851. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6164-L6165` → after: `L6353-L6354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6353-L6354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6353-L6354) · [Before (L6164-L6165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6164-L6165)

```diff
-         const Xu = (0, EE.n)(Zu, !Eu, !1);
-         return Xu.name = `${this.name}GlbModel`, Xu.VY = !1, (0, nu.l)(Xu, this.bakeInScaling), Xu
+         const yG = (0, bb.o)(LG, !bG, !1);
+         return yG.name = `${this.name}GlbModel`, yG.qh = !1, (0, NG.m)(yG, this.bakeInScaling), yG
```

#### 852. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6170` → after: `L6359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6359) · [Before (L6170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6170)

```diff
-         this.loadModel(this.vY, !!Eu).then((uu => {
+         this.loadModel(this.Ah, !!bG).then((GG => {
```

#### 853. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6173` → after: `L6362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6362) · [Before (L6173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6173)

```diff
-             for (const Eu of uu.material.M6) Eu.name = `${this.name}ItemMat`;
+             for (const bG of GG.material.UGG) bG.name = `${this.name}ItemMat`;
```

#### 854. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6175-L6176` → after: `L6364-L6365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6364-L6365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6364-L6365) · [Before (L6175-L6176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6175-L6176)

```diff
-             (0, UE.M)((0, UE.$)(uu)), (0, Tu.c)(uu, (() => {
-               (0, UE.u)((0, UE.$)(uu), Bu.f)
+             (0, Sb.L)((0, Sb.eb)(GG)), (0, HG.d)(GG, (() => {
+               (0, Sb.u)((0, Sb.eb)(GG), gG.h)
```

#### 855. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6178` → after: `L6367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6367) · [Before (L6178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6178)

```diff
-           })), uu.Wk(!1), this._registerSourceMeshBuffers(uu), (0, Au.d)(uu.material, Tu.f), this._sourceMesh = uu;
+           })), GG.DW(!1), this._registerSourceMeshBuffers(GG), (0, DG.d)(GG.material, HG.f), this._sourceMesh = GG;
```

#### 856. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6183` → after: `L6372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6372) · [Before (L6183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6183)

```diff
-             of this._meshParents) Eu.Gw() || this._attachNewMeshInstanceToParent(Eu, su);
+             of this._meshParents) bG.Tu() || this._attachNewMeshInstanceToParent(bG, wG);
```

#### 857. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6204-L6206` → after: `L6393-L6395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6393-L6395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6393-L6395) · [Before (L6204-L6206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6204-L6206)

```diff
-           tO: su
-         } = (0, qE.c)();
-         su.QY(ju, !1), (0, ZE.o)(ju, 0, 0, 0), null === Eu || void 0 === Eu || Eu(uu, ju)
+           HK: wG
+         } = (0, Ub.i)();
+         wG.gh(ZG, !1), (0, Lb.v)(ZG, 0, 0, 0), null === bG || void 0 === bG || bG(GG, ZG)
```

#### 858. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6211-L6212` → after: `L6400-L6401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6400-L6401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6400-L6401) · [Before (L6211-L6212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6211-L6212)

```diff
-             const ju = (0, qE.b)(),
-               su = ju.sN.metadatas;
+             const ZG = (0, Ub.e)(),
+               wG = ZG.LQ.metadatas;
```

#### 859. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6215` → after: `L6404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6404) · [Before (L6215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6215)

```diff
-               for (const Eu in (0, Ou.Z)(Yu.q)) {
+               for (const bG in (0, KG.V)(hG.q)) {
```

#### 860. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6225` → after: `L6414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6414) · [Before (L6225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6225)

```diff
-             return null !== (Eu = xE.byRoot.get(uu)) && void 0 !== Eu ? Eu : TE
+             return null !== (bG = Tb.byRoot.get(GG)) && void 0 !== bG ? bG : Hb
```

#### 861. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6237` → after: `L6426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6426) · [Before (L6237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6237)

```diff
-         const ju = (0, qE.b)().sN.metadatas[uu];
+         const ZG = (0, Ub.e)().LQ.metadatas[GG];
```

#### 862. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6242` → after: `L6431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6431) · [Before (L6242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6242)

```diff
-         return null !== (uu = (0, qE.c)().sN.o4(this.id)) && void 0 !== uu ? uu : 0
+         return null !== (GG = (0, Ub.i)().LQ.f_(this.id)) && void 0 !== GG ? GG : 0
```

#### 863. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6247-L6248` → after: `L6436-L6437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6436-L6437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6436-L6437) · [Before (L6247-L6248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6247-L6248)

```diff
-         super(uu, Eu), this.cuboidShape = NE.c, this.harvestLevel = void 0, this.meshMaterial = void 0, this._sourceMeshGrowing = void 0, this.transTex = void 0, this.texturePerSide = void 0, this.model = void 0, this._shareThinBase = null, this._heldSourceMesh = null;
-         const ju = su.f[uu];
+         super(GG, bG), this.cuboidShape = Qb.b, this.harvestLevel = void 0, this.meshMaterial = void 0, this._sourceMeshGrowing = void 0, this.transTex = void 0, this.texturePerSide = void 0, this.model = void 0, this._shareThinBase = null, this._heldSourceMesh = null;
+         const ZG = wG.l[GG];
```

#### 864. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6264` → after: `L6453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6453) · [Before (L6264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6264)

```diff
-         if (this.usesBlockAtlasMaterial()) su = Mu.e.getBlockAtlasMaterial(uu, this.transTex, null !== (Uu = this.unlitStandaloneMesh) && void 0 !== Uu && Uu);
+         if (this.usesBlockAtlasMaterial()) wG = zG.b.getBlockAtlasMaterial(GG, this.transTex, null !== (SG = this.unlitStandaloneMesh) && void 0 !== SG && SG);
```

#### 865. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6267-L6269` → after: `L6456-L6458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6456-L6458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6456-L6458) · [Before (L6267-L6269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6267-L6269)

```diff
-           su = (0, Hu.d)({
-             name: `${Eu}BlockMaterial`,
-             vY: uu,
+           wG = (0, tG.e)({
+             name: `${bG}BlockMaterial`,
+             Ah: GG,
```

#### 866. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6281` → after: `L6470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6470) · [Before (L6281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6281)

```diff
-               (0, Fu.d)(uu, !0), (0, UE.M)(uu)
+               (0, nG.c)(GG, !0), (0, Sb.L)(GG)
```

#### 867. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6296` → after: `L6485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6485) · [Before (L6296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6296)

```diff
-           dl: !0
+           Ik: !0
```

#### 868. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6301` → after: `L6490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6490) · [Before (L6301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6301)

```diff
-         return this._needsHeldBase(uu) ? `${Eu}|held` : Eu
+         return this._needsHeldBase(GG) ? `${bG}|held` : bG
```

#### 869. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6304` → after: `L6493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6493) · [Before (L6304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6304)

```diff
-         if (!uu.dl || this._canShareThinBase()) return !1;
+         if (!GG.Ik || this._canShareThinBase()) return !1;
```

#### 870. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6314` → after: `L6503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6503) · [Before (L6314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6314)

```diff
-         return this._shareThinBase ??= this.usesBlockAtlasMaterial() && (0, eu.e)() && null !== (uu = null === (Eu = this._perFaceAtlasIdx(!1)) || void 0 === Eu ? void 0 : Eu.every(Number.isFinite)) && void 0 !== uu && uu, this._shareThinBase
+         return this._shareThinBase ??= this.usesBlockAtlasMaterial() && (0, EG.g)() && null !== (GG = null === (bG = this._perFaceAtlasIdx(!1)) || void 0 === bG ? void 0 : bG.every(Number.isFinite)) && void 0 !== GG && GG, this._shareThinBase
```

#### 871. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6321-L6322` → after: `L6510-L6511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6510-L6511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6510-L6511) · [Before (L6321-L6322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6321-L6322)

```diff
-         const su = this._perFaceAtlasIdx(ju.dl),
-           Uu = (0, qE.c)().tO.oV;
+         const wG = this._perFaceAtlasIdx(ZG.Ik),
+           SG = (0, Ub.i)().HK.Vl;
```

#### 872. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6326` → after: `L6515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6515) · [Before (L6326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6326)

```diff
-         const Eu = uu ? xu : tu,
+         const bG = GG ? TG : RG,
```

#### 873. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6333` → after: `L6522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6522) · [Before (L6333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6333)

```diff
-           return Eu.map((uu => su.u[(0, hu.o)(ju[Uu[uu]])]))
+           return bG.map((GG => wG.B[(0, dG.k)(ZG[SG[GG]])]))
```

#### 874. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6335` → after: `L6524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6524) · [Before (L6335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6335)

```diff
-         const Zu = "string" === typeof ju ? ju : QE(ju);
+         const LG = "string" === typeof ZG ? ZG : Pb(ZG);
```

#### 875. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6337` → after: `L6526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6526) · [Before (L6337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6337)

```diff
-           const uu = su.u[(0, hu.o)(Zu)];
+           const GG = wG.B[(0, dG.k)(LG)];
```

#### 876. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6353-L6355` → after: `L6542-L6544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6542-L6544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6542-L6544) · [Before (L6353-L6355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6353-L6355)

```diff
-             tO: Uu
-           } = (0, qE.c)();
-         Uu.QY(su, !1);
+             HK: SG
+           } = (0, Ub.i)();
+         SG.gh(wG, !1);
```

#### 877. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6357` → after: `L6546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6546) · [Before (L6357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6357)

```diff
-         return (0, ZE.o)(su, 0, 0, 0), su.Of.set(Zu.x, Zu.y, Zu.z), su.Hr.aLightLevels === (null === (uu = this._sourceMesh.Hr) || void 0 === uu ? void 0 : uu.aLightLevels) && (su.Hr.aLightLevels = (0, sE.l)()), null === ju || void 0 === ju || ju(su, su), su
+         return (0, Lb.v)(wG, 0, 0, 0), wG.nY.set(LG.x, LG.y, LG.z), wG.hA.aLightLevels === (null === (GG = this._sourceMesh.hA) || void 0 === GG ? void 0 : GG.aLightLevels) && (wG.hA.aLightLevels = (0, wb.j)()), null === ZG || void 0 === ZG || ZG(wG, wG), wG
```

#### 878. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6363` → after: `L6552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6552) · [Before (L6363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6363)

```diff
-           const Eu = (0, qE.c)().tO.hV();
+           const bG = (0, Ub.i)().HK.Dv();
```

#### 879. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6365` → after: `L6554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6554) · [Before (L6365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6365)

```diff
-             materialOverride: Mu.e.getBlockAtlasMaterialForGrowing(Eu, this.transTex, null !== (uu = this.unlitStandaloneMesh) && void 0 !== uu && uu)
+             materialOverride: zG.b.getBlockAtlasMaterialForGrowing(bG, this.transTex, null !== (GG = this.unlitStandaloneMesh) && void 0 !== GG && GG)
```

#### 880. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6370-L6372` → after: `L6559-L6561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6559-L6561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6559-L6561) · [Before (L6370-L6372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6370-L6372)

```diff
-             tO: ju
-           } = (0, qE.c)();
-         return ju.QY(Eu, !1), (0, ZE.o)(Eu, 0, 0, 0), Eu
+             HK: ZG
+           } = (0, Ub.i)();
+         return ZG.gh(bG, !1), (0, Lb.v)(bG, 0, 0, 0), bG
```

#### 881. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6377` → after: `L6566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6566) · [Before (L6377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6377)

```diff
-           dl: ju = !1,
+           Ik: ZG = !1,
```

#### 882. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6380` → after: `L6569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6569) · [Before (L6380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6380)

```diff
-         } = null !== uu && void 0 !== uu ? uu : {}, Zu = [], Xu = (0, eu.e)(), lu = this._perFaceAtlasIdx(ju);
+         } = null !== GG && void 0 !== GG ? GG : {}, LG = [], yG = (0, EG.g)(), kG = this._perFaceAtlasIdx(ZG);
```

#### 883. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6384-L6385` → after: `L6573-L6574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6573-L6574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6573-L6574) · [Before (L6384-L6385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6384-L6385)

```diff
-               Eu = (0, eu.c)(uu, 0, Xu),
-               ju = (0, eu.c)(uu, 1, Xu);
+               bG = (0, EG.e)(GG, 0, yG),
+               ZG = (0, EG.e)(GG, 1, yG);
```

#### 884. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6389-L6391` → after: `L6578-L6580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6578-L6580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6578-L6580) · [Before (L6389-L6391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6389-L6391)

```diff
-         const qu = lu ? (0, NE.r)(su, lu) : void 0,
-           fu = KE(`${this.name}${ju?"Held":""}Block`, su, Zu, qu, Uu);
-         return fu.material = null !== Eu && void 0 !== Eu ? Eu : this.meshMaterial, Eu || ((0, Su.f)(fu), (0, Iu.d)(fu), dE(fu, this.shaderPackItem(0, void 0))), fu.Wk(!1), fu.VY = !1, fu
+         const UG = kG ? (0, Qb.t)(wG, kG) : void 0,
+           YG = cb(`${this.name}${ZG?"Held":""}Block`, wG, LG, UG, SG);
+         return YG.material = null !== bG && void 0 !== bG ? bG : this.meshMaterial, bG || ((0, sG.i)(YG), (0, qG.c)(YG), Cb(YG, this.shaderPackItem(0, void 0))), YG.DW(!1), YG.qh = !1, YG
```

#### 885. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6396` → after: `L6585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6585) · [Before (L6396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6396)

```diff
-         super(uu, Eu), this.type = "SlabBlock", this.cuboidShape = NE.e
+         super(GG, bG), this.type = "SlabBlock", this.cuboidShape = Qb.f
```

#### 886. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6401` → after: `L6590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6590) · [Before (L6401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6401)

```diff
-         super(uu, Eu), this.type = "StairsBlock", this.cuboidShape = NE.g
+         super(GG, bG), this.type = "StairsBlock", this.cuboidShape = Qb.h
```

#### 887. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6407-L6409` → after: `L6596-L6598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6596-L6598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6596-L6598) · [Before (L6407-L6409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6407-L6409)

```diff
-         super(uu, Eu), this.droppedMeshTypeScale = .8 * Cu.e.droppedBlockSize, this.droppedMeshOffset = 1.3 * Cu.e.droppedBlockSize, this.bakeInScaling = 1 / 4 * (null !== (ju = this.heldItemScale) && void 0 !== ju ? ju : 1);
-         const Uu = su.f[uu];
-         Uu.blockModelItem && (console.assert(void 0 !== Uu.blockModel, `If blockModelItem is true blockModel must be defined: Failed for ${uu}`), this.modelDefault = {
+         super(GG, bG), this.droppedMeshTypeScale = .8 * VG.d.droppedBlockSize, this.droppedMeshOffset = 1.3 * VG.d.droppedBlockSize, this.bakeInScaling = 1 / 4 * (null !== (ZG = this.heldItemScale) && void 0 !== ZG ? ZG : 1);
+         const SG = wG.l[GG];
+         SG.blockModelItem && (console.assert(void 0 !== SG.blockModel, `If blockModelItem is true blockModel must be defined: Failed for ${GG}`), this.modelDefault = {
```

#### 888. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6411-L6412` → after: `L6600-L6601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6600-L6601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6600-L6601) · [Before (L6411-L6412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6411-L6412)

```diff
-           type: iu.f.BLOCK
-         }, this.modelSource = gu.d.getModel(this.modelDefault.name, iu.f.BLOCK)), this.type = "TwoDBlock"
+           type: MG.h.BLOCK
+         }, this.modelSource = rG.e.getModel(this.modelDefault.name, MG.h.BLOCK)), this.type = "TwoDBlock"
```

#### 889. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6418` → after: `L6607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6607) · [Before (L6418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6418)

```diff
-         super(uu, Eu), this.droppedMeshTypeScale = .8 * Cu.e.droppedBlockSize, this.droppedMeshOffset = 1.3 * Cu.e.droppedBlockSize, this.bakeInScaling = 1 / 4 * (null !== (ju = this.heldItemScale) && void 0 !== ju ? ju : 1), this.type = "TwoDItem"
+         super(GG, bG), this.droppedMeshTypeScale = .8 * VG.d.droppedBlockSize, this.droppedMeshOffset = 1.3 * VG.d.droppedBlockSize, this.bakeInScaling = 1 / 4 * (null !== (ZG = this.heldItemScale) && void 0 !== ZG ? ZG : 1), this.type = "TwoDItem"
```

#### 890. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6428` → after: `L6617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6617) · [Before (L6428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6428)

```diff
-       (0, Ku.i)(), qE.e.itemsClient = jj, qE.e.blocksClient = sj, qE.e.nonBlocksClient = Uj
+       (0, cG.l)(), Ub.m.itemsClient = ZZ, Ub.m.blocksClient = wZ, Ub.m.nonBlocksClient = SZ
```

#### 891. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6437` → after: `L6626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6626) · [Before (L6437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6437)

```diff
-             super(uu, Eu), this.gunType = void 0, this.fireRate = void 0, this.fireRateWithHeldTouch = void 0, this.equipDelay = void 0, this.shotPelletCount = void 0, this.msPerRound = void 0, this.cadenceMs = void 0, this.reloadTime = void 0, this.clipSize = void 0, this.reload … [truncated]
+             super(GG, bG), this.gunType = void 0, this.fireRate = void 0, this.fireRateWithHeldTouch = void 0, this.equipDelay = void 0, this.shotPelletCount = void 0, this.msPerRound = void 0, this.cadenceMs = void 0, this.reloadTime = void 0, this.clipSize = void 0, this.reload … [truncated]
```

#### 892. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6439-L6442` → after: `L6628-L6631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6628-L6631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6628-L6631) · [Before (L6439-L6442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6439-L6442)

```diff
-             this.gunType = qu.gunType, this.scopeType = qu.scopeType, this.fireRate = qu.fireRate, this.fireRateWithHeldTouch = qu.fireRateWithHeldTouch, this.equipDelay = qu.equipDelay, this.damage = qu.damage, this.shotPelletCount = qu.shotPelletCount, this.msPerRound = qu.msPe … [truncated]
-             const fu = (0, Hu.d)({
-                 name: `${uu}BulletMeshMaterial`,
-                 vY: Eu,
+             this.gunType = UG.gunType, this.scopeType = UG.scopeType, this.fireRate = UG.fireRate, this.fireRateWithHeldTouch = UG.fireRateWithHeldTouch, this.equipDelay = UG.equipDelay, this.damage = UG.damage, this.shotPelletCount = UG.shotPelletCount, this.msPerRound = UG.msPe … [truncated]
+             const YG = (0, tG.e)({
+                 name: `${GG}BulletMeshMaterial`,
+                 Ah: bG,
```

#### 893. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6451-L6453` → after: `L6640-L6642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6640-L6642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6640-L6642) · [Before (L6451-L6453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6451-L6453)

```diff
-                 tO: Cu
-               } = (0, qE.c)();
-             this.bulletCasingMesh = (0, EE.o)(Cu, `${this.name}BulletCasingMesh`, (0, lE.b)({
+                 HK: VG
+               } = (0, Ub.i)();
+             this.bulletCasingMesh = (0, bb.q)(VG, `${this.name}BulletCasingMesh`, (0, kb.b)({
```

#### 894. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6457-L6460` → after: `L6646-L6649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6646-L6649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6646-L6649) · [Before (L6457-L6460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6457-L6460)

```diff
-             })), this.bulletCasingMesh.material = fu, this.bulletCasingMesh.VY = !1;
-             const bu = (0, Hu.d)({
-               name: `${uu}BulletHitBillboard`,
-               vY: Eu,
+             })), this.bulletCasingMesh.material = YG, this.bulletCasingMesh.qh = !1;
+             const pG = (0, tG.e)({
+               name: `${GG}BulletHitBillboard`,
+               Ah: bG,
```

#### 895. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6467` → after: `L6656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6656) · [Before (L6467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6467)

```diff
-             this.bulletHitBillboardPlane = (0, EE.o)(Cu, `${this.name}BulletHitBillboardPlane`, (0, lE.d)({
+             this.bulletHitBillboardPlane = (0, bb.q)(VG, `${this.name}BulletHitBillboardPlane`, (0, kb.i)({
```

#### 896. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6470-L6473` → after: `L6659-L6662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6659-L6662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6659-L6662) · [Before (L6470-L6473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6470-L6473)

```diff
-             })), this.bulletHitBillboardPlane.VY = !1, this.bulletHitBillboardPlane.material = bu;
-             const cu = (0, Hu.d)({
-               name: `${uu}BulletMeshMaterial`,
-               vY: Eu,
+             })), this.bulletHitBillboardPlane.qh = !1, this.bulletHitBillboardPlane.material = pG;
+             const fG = (0, tG.e)({
+               name: `${GG}BulletMeshMaterial`,
+               Ah: bG,
```

#### 897. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6482` → after: `L6671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6671) · [Before (L6482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6482)

```diff
-             this.movingBulletMesh = (0, EE.o)(Cu, `${this.name}MovingBulletMesh`, (0, lE.b)({
+             this.movingBulletMesh = (0, bb.q)(VG, `${this.name}MovingBulletMesh`, (0, kb.b)({
```

#### 898. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6486` → after: `L6675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6675) · [Before (L6486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6486)

```diff
-             })), this.movingBulletMesh.material = cu, this.movingBulletMesh.VY = !1, this.bakeInScaling = .19 * this.heldItemScale, this.droppedMeshTypeScale = .1, this.droppedMeshOffset = .5
+             })), this.movingBulletMesh.material = fG, this.movingBulletMesh.qh = !1, this.bakeInScaling = .19 * this.heldItemScale, this.droppedMeshTypeScale = .1, this.droppedMeshOffset = .5
```

#### 899. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6512-L6513` → after: `L6701-L6702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6701-L6702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6701-L6702) · [Before (L6512-L6513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6512-L6513)

```diff
-             super(uu, Eu), this._armourTint = void 0, this.type = "GrayscaleTwoDArmour", this._armourTint = null !== (ju = (0, Du.g)(uu)) && void 0 !== ju ? ju : [255, 255, 255];
-             const su = `Wood ${(0,Nu.zb)(uu)}`;
+             super(GG, bG), this._armourTint = void 0, this.type = "GrayscaleTwoDArmour", this._armourTint = null !== (ZG = (0, JG.d)(GG)) && void 0 !== ZG ? ZG : [255, 255, 255];
+             const wG = `Wood ${(0,QG.Hb)(GG)}`;
```

#### 900. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6515-L6516` → after: `L6704-L6705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6704-L6705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6704-L6705) · [Before (L6515-L6516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6515-L6516)

```diff
-               type: iu.l.HTTP,
-               url: this.isCustom ? `${Wu.clientSideServerUrls.staticUrl}/models/${(0,Nu.Vb)((0,fE.b)().gameNameWithVariation)}/${su}.glb` : `${Wu.clientSideServerUrls.staticUrl}/models/${su}.glb`
+               type: MG.j.HTTP,
+               url: this.isCustom ? `${AG.clientSideServerUrls.staticUrl}/models/${(0,QG.Yb)((0,Yb.d)().gameNameWithVariation)}/${wG}.glb` : `${AG.clientSideServerUrls.staticUrl}/models/${wG}.glb`
```

#### 901. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6522` → after: `L6711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6711) · [Before (L6522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6522)

```diff
-               vY: Eu
+               Ah: bG
```

#### 902. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6526-L6527` → after: `L6715-L6716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6715-L6716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6715-L6716) · [Before (L6526-L6527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6526-L6527)

```diff
-             } = Gu.d;
-             return (0, Hu.d)({
+             } = oG.e;
+             return (0, tG.e)({
```

#### 903. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6529` → after: `L6718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6718) · [Before (L6529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6529)

```diff
-               vY: Eu,
+               Ah: bG,
```

#### 904. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6533` → after: `L6722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6722) · [Before (L6533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6533)

```diff
-                   url: YE[(0, Nu.zb)(uu)],
+                   url: hb[(0, QG.Hb)(GG)],
```

#### 905. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6536` → after: `L6725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6725) · [Before (L6536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6536)

```diff
-                   samplingMode: XE.i.nearestNearestMipLinear,
+                   samplingMode: yb.g.nearestNearestMipLinear,
```

#### 906. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6538-L6539` → after: `L6727-L6728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6727-L6728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6727-L6728) · [Before (L6538-L6539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6538-L6539)

```diff
-                     wrapU: XE.e.clamp,
-                     wrapV: XE.e.clamp
+                     wrapU: yb.c.clamp,
+                     wrapV: yb.c.clamp
```

#### 907. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6547` → after: `L6736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6736) · [Before (L6547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6547)

```diff
-                 (0, UE.u)(uu, Lu.e, {
+                 (0, Sb.u)(GG, eG.b, {
```

#### 908. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6554` → after: `L6743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6743) · [Before (L6554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6554)

```diff
-             super._registerSourceMeshBuffers(uu), uu.Qr("aArmourTint", 4), uu.Qr("aAtlasIdx1", 1), uu.Hr.aArmourTint = (0, au.j)(...this._armourTint, 0), uu.Hr.aAtlasIdx1 = 0
+             super._registerSourceMeshBuffers(GG), GG.gM("aArmourTint", 4), GG.gM("aAtlasIdx1", 1), GG.hA.aArmourTint = (0, WG.o)(...this._armourTint, 0), GG.hA.aAtlasIdx1 = 0
```

#### 909. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6565` → after: `L6754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6754) · [Before (L6565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6565)

```diff
-             const su = (0, qE.c)().tO.oV,
+             const wG = (0, Ub.i)().HK.Vl,
```

#### 910. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6586` → after: `L6775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6775) · [Before (L6586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6586)

```diff
-       if (uu in su.f) {
+       if (GG in wG.l) {
```

#### 911. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6588-L6589` → after: `L6777-L6778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6777-L6778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6777-L6778) · [Before (L6588-L6589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6588-L6589)

```diff
-         const Uu = null === (Xu = su.f[uu].model) || void 0 === Xu ? void 0 : Xu.split("|")[0];
-         Zu = su.f[uu].model || su.f[uu].twoDBlockItem ? Zj[Uu] ? new Zj[Uu](uu, ju) : new zE(uu, ju) : new AE(uu, ju), sj[uu] = Zu, sj[Eu] = Zu
+         const SG = null === (yG = wG.l[GG].model) || void 0 === yG ? void 0 : yG.split("|")[0];
+         LG = wG.l[GG].model || wG.l[GG].twoDBlockItem ? LZ[SG] ? new LZ[SG](GG, ZG) : new xb(GG, ZG) : new Db(GG, ZG), wZ[GG] = LG, wZ[bG] = LG
```

#### 912. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6594` → after: `L6783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6783) · [Before (L6594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6594)

```diff
-   38501: (uu, Eu, ju) => {
+   38563: (GG, bG, ZG) => {
```

#### 913. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6596` → after: `L6785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6785) · [Before (L6596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6596)

```diff
-       d: () => gu,
+       c: () => rG,
```

#### 914. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6598` → after: `L6787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6787) · [Before (L6598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6598)

```diff
-       i: () => Du
+       g: () => JG
```

#### 915. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6600-L6604` → after: `L6789-L6793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6789-L6793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6789-L6793) · [Before (L6600-L6604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6600-L6604)

```diff
-     var su = ju(37488),
-       Uu = ju(37837),
-       Zu = ju(38298),
-       Xu = ju(37969),
-       lu = ju(37655);
+     var wG = ZG(37432),
+       SG = ZG(37808),
+       LG = ZG(38304),
+       yG = ZG(37962),
+       kG = ZG(37605);
```

#### 916. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6607` → after: `L6796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6796) · [Before (L6607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6607)

```diff
-         this.modelUrl = uu, this.container = Eu, this.adoptedNodes = ju, this.vY = su
+         this.modelUrl = GG, this.container = bG, this.adoptedNodes = ZG, this.Ah = wG
```

#### 917. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6612` → after: `L6801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6801) · [Before (L6612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6612)

```diff
-         if (!Uu) throw new Error(`Could not find root node in model: ${su}`);
+         if (!SG) throw new Error(`Could not find root node in model: ${wG}`);
```

#### 918. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6614` → after: `L6803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6803) · [Before (L6614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6614)

```diff
-         Uu.Of.set(-Uu.Of.x, Uu.Of.y, Uu.Of.z), bu(Uu, Zu);
+         SG.nY.set(-SG.nY.x, SG.nY.y, SG.nY.z), pG(SG, LG);
```

#### 919. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6624` → after: `L6813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6813) · [Before (L6624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6624)

```diff
-         return Zu.Of.set(-Zu.Of.x, Zu.Of.y, Zu.Of.z), {
+         return LG.nY.set(-LG.nY.x, LG.nY.y, LG.nY.z), {
```

#### 920. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6635` → after: `L6824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6824) · [Before (L6635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6635)

```diff
-         if (0 === su.length) return void console.warn(`Mesh "${ju}" not found in model: ${this.modelUrl}`);
+         if (0 === wG.length) return void console.warn(`Mesh "${ZG}" not found in model: ${this.modelUrl}`);
```

#### 921. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6637` → after: `L6826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6826) · [Before (L6637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6637)

```diff
-         if (!Uu) throw new Error(`Could not merge the meshes named ${ju} in model: ${this.modelUrl}`);
+         if (!SG) throw new Error(`Could not merge the meshes named ${ZG} in model: ${this.modelUrl}`);
```

#### 922. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6651` → after: `L6840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6840) · [Before (L6651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6651)

```diff
-             const uu = cu(ju, Zu, this.vY),
+             const GG = fG(ZG, LG, this.Ah),
```

#### 923. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6656` → after: `L6845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6845) · [Before (L6656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6656)

```diff
-         else console.warn(`Node "${ju}" not found in model: ${this.modelUrl}`)
+         else console.warn(`Node "${ZG}" not found in model: ${this.modelUrl}`)
```

#### 924. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6666` → after: `L6855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6855) · [Before (L6666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6666)

```diff
-             const uu = "string" === typeof lu ? lu : lu.nodeName;
+             const GG = "string" === typeof kG ? kG : kG.nodeName;
```

#### 925. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6672` → after: `L6861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6861) · [Before (L6672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6672)

```diff
-         if (0 === fu.length) return void console.warn(`No descendant meshes under "${su}" to merge in model: ${this.modelUrl}`);
+         if (0 === YG.length) return void console.warn(`No descendant meshes under "${wG}" to merge in model: ${this.modelUrl}`);
```

#### 926. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6686` → after: `L6875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6875) · [Before (L6686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6686)

```diff
-         if (!Yu) return void console.warn(`Merge failed for "${su}" in model: ${this.modelUrl}`);
+         if (!hG) return void console.warn(`Merge failed for "${wG}" in model: ${this.modelUrl}`);
```

#### 927. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6692-L6693` → after: `L6881-L6882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6881-L6882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6881-L6882) · [Before (L6692-L6693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6692-L6693)

```diff
-           of cu) null === Nu || Nu.Gw() || (Nu.computeWorldMatrix(!0), Ou(lu, Nu), Cu(lu, hu.multiply(Nu.getWorldMatrix().clone().invert())));
-         Yu.name = Uu, (0, lu.x)(Yu, (() => {
+           of fG) null === QG || QG.Tu() || (QG.computeWorldMatrix(!0), KG(kG, QG), VG(kG, dG.multiply(QG.getWorldMatrix().clone().invert())));
+         hG.name = SG, (0, kG.w)(hG, (() => {
```

#### 928. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6702` → after: `L6891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6891) · [Before (L6702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6702)

```diff
-         return null !== (Eu = null !== (ju = this.container.transformNodes.find((Eu => Eu.name === uu))) && void 0 !== ju ? ju : this.container.meshes.find((Eu => Eu.name === uu))) && void 0 !== Eu ? Eu : null
+         return null !== (bG = null !== (ZG = this.container.transformNodes.find((bG => bG.name === GG))) && void 0 !== ZG ? ZG : this.container.meshes.find((bG => bG.name === GG))) && void 0 !== bG ? bG : null
```

#### 929. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6711` → after: `L6900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6900) · [Before (L6711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6711)

```diff
-         for (const Eu of [...uu]) Eu.Gw() || this.adoptedNodes.has(Eu) || Eu.dispose()
+         for (const bG of [...GG]) bG.Tu() || this.adoptedNodes.has(bG) || bG.dispose()
```

#### 930. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6720` → after: `L6909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6909) · [Before (L6720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6720)

```diff
-       const ju = new su.dO,
+       const ZG = new wG.mK,
```

#### 931. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6722-L6723` → after: `L6911-L6912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6911-L6912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6911-L6912) · [Before (L6722-L6723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6722-L6723)

```diff
-         Zu = new su.dO;
-       Eu.decompose(Zu, Uu, ju), uu.position = ju, uu.rotationQuaternion = Uu, uu.Of = Zu
+         LG = new wG.mK;
+       bG.decompose(LG, SG, ZG), GG.position = ZG, GG.rotationQuaternion = SG, GG.nY = LG
```

#### 932. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6728` → after: `L6917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6917) · [Before (L6728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6728)

```diff
-       Eu.position = uu.position.clone(), ju ? Eu.rotationQuaternion = new su.Quaternion(ju.x, ju.y, ju.z, ju.w) : Eu.rotation = uu.rotation.clone(), Eu.Of = uu.Of.clone()
+       bG.position = GG.position.clone(), ZG ? bG.rotationQuaternion = new wG.Quaternion(ZG.x, ZG.y, ZG.z, ZG.w) : bG.rotation = GG.rotation.clone(), bG.nY = GG.nY.clone()
```

#### 933. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6732` → after: `L6921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6921) · [Before (L6732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6732)

```diff
-       return (0, Uu.g)(Eu) ? (0, Zu.q)(Eu.tO, uu) : new((0, Xu.c)().TransformNode)(uu, ju)
+       return (0, SG.e)(bG) ? (0, LG.u)(bG.HK, GG) : new((0, yG.c)().TransformNode)(GG, ZG)
```

#### 934. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6736` → after: `L6925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6925) · [Before (L6736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6736)

```diff
-       return (0, Uu.g)(uu[0]) ? (0, Zu.n)(uu, !1) : (0, lu.y)(uu)
+       return (0, SG.e)(GG[0]) ? (0, LG.o)(GG, !1) : (0, kG.x)(GG)
```

#### 935. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6744` → after: `L6933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6933) · [Before (L6744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6744)

```diff
-       return ["Mesh", "LiteMesh"].includes(uu.getClassName()) && uu.getTotalVertices() > 0 ? uu : null
+       return ["Mesh", "LiteMesh"].includes(GG.getClassName()) && GG.getTotalVertices() > 0 ? GG : null
```

#### 936. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6764` → after: `L6953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6953) · [Before (L6764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6764)

```diff
-   38308: (uu, Eu, ju) => {
+   38323: (GG, bG, ZG) => {
```

#### 937. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6766-L6768` → after: `L6955-L6958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6955-L6958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6955-L6958) · [Before (L6766-L6768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6766-L6768)

```diff
-       B: () => mu,
-       F: () => Ju,
-       e: () => pu,
+       b: () => XG,
+       f: () => aG,
+       g: () => mG,
+       h: () => cG,
```

#### 938. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6771-L6775` → after: `L6961-L6964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6961-L6964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6961-L6964) · [Before (L6771-L6775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6771-L6775)

```diff
-       m: () => Ku,
-       p: () => Wu,
-       t: () => au,
-       w: () => ru,
-       z: () => Qu
+       n: () => jG,
+       o: () => PG,
+       s: () => vG,
+       u: () => iG
```

#### 939. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6777-L6783` → after: `L6966-L6972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6966-L6972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6966-L6972) · [Before (L6777-L6783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6777-L6783)

```diff
-     var su = ju(4427),
-       Uu = ju(9409),
-       Zu = ju(202),
-       Xu = ju(1298),
-       lu = ju(1955),
-       qu = ju(3336),
-       fu = ju(366),
+     var wG = ZG(4255),
+       SG = ZG(9249),
+       LG = ZG(188),
+       yG = ZG(1198),
+       kG = ZG(1873),
+       UG = ZG(3135),
+       YG = ZG(364),
```

#### 940. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6785-L6790` → after: `L6974-L6979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6974-L6979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6974-L6979) · [Before (L6785-L6790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6785-L6790)

```diff
-       bu = ju(2893),
-       cu = ju(38256),
-       Nu = ju(37630),
-       Ou = ju(37488),
-       Yu = ju(649),
-       hu = ju(38310);
+       pG = ZG(2751),
+       fG = ZG(38265),
+       QG = ZG(37567),
+       KG = ZG(37432),
+       hG = ZG(604),
+       dG = ZG(38327);
```

#### 941. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6794` → after: `L6983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6983) · [Before (L6794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6794)

```diff
-       eu = (0, qu.h)("square_particle"),
+       EG = (0, UG.i)("square_particle"),
```

#### 942. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6798-L6800` → after: `L6987-L6989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6987-L6989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6987-L6989) · [Before (L6798-L6800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6798-L6800)

```diff
-         this.pSystem = void 0, this.startedSystem = !1, this.Uc = void 0, this.boxWidth = .8, this.currentRampColoursBlockId = void 0, this.Uc = uu;
-         const Eu = uu.tO.Kr("breakingParticles", 430);
-         this.pSystem = Eu, Eu.texture = (0, Nu.t)(uu.tO.hV(), eu), Eu.blendMode = su.e.Standard, this.pSystem.addColorGradient(1, (0, cu.j)(255, 255, 255, Gu), (0, cu.j)(255, 255, 255, 1)), this.pSystem.useRampGradients = !0, this.pSystem.addColorRemapGradient(0, Gu, 1), this.pSy … [truncated]
+         this.pSystem = void 0, this.startedSystem = !1, this.wf = void 0, this.boxWidth = .8, this.currentRampColoursBlockId = void 0, this.wf = GG;
+         const bG = GG.HK.rM("breakingParticles", 430);
+         this.pSystem = bG, bG.texture = (0, QG.q)(GG.HK.Dv(), EG), bG.blendMode = wG.c.Standard, this.pSystem.addColorGradient(1, (0, fG.o)(255, 255, 255, oG), (0, fG.o)(255, 255, 255, 1)), this.pSystem.useRampGradients = !0, this.pSystem.addColorRemapGradient(0, oG, 1), this.pSy … [truncated]
```

#### 943. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6803-L6804` → after: `L6992-L6993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6992-L6993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6992-L6993) · [Before (L6803-L6804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6803-L6804)

```diff
-         if (!uu || null === this.Uc.ruu) return void(this.startedSystem && (this.pSystem.stop(), this.startedSystem = !1));
-         const Eu = this.Uc.ruu,
+         if (!GG || null === this.wf.DGG) return void(this.startedSystem && (this.pSystem.stop(), this.startedSystem = !1));
+         const bG = this.wf.DGG,
```

#### 944. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6808-L6809` → after: `L6997-L6998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R6997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L6997-L6998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L6997-L6998) · [Before (L6808-L6809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6808-L6809)

```diff
-           } = (0, hu.b)(Eu.position, Uu.f[Eu.I3].nY, 0, this.boxWidth);
-         (0, cu.p)(this.pSystem, ju, su), this.updateParticleSystemColour();
+           } = (0, dG.e)(bG.position, SG.l[bG.K9].bd, 0, this.boxWidth);
+         (0, fG.s)(this.pSystem, ZG, wG), this.updateParticleSystemColour();
```

#### 945. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6812` → after: `L7001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L7001) · [Before (L6812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6812)

```diff
-         Zu.x = this.Uc.ruu.normal[0] + 1, Zu.y = this.Uc.ruu.normal[1] + 1, Zu.z = this.Uc.ruu.normal[2] + 1, Xu.x = this.Uc.ruu.normal[0] - 1, Xu.y = this.Uc.ruu.normal[1] - 1, Xu.z = this.Uc.ruu.normal[2] - 1, 0 !== this.Uc.ruu.normal[0] ? (Zu.x = this.Uc.ruu.normal[0], Xu.x =  … [truncated]
+         LG.x = this.wf.DGG.normal[0] + 1, LG.y = this.wf.DGG.normal[1] + 1, LG.z = this.wf.DGG.normal[2] + 1, yG.x = this.wf.DGG.normal[0] - 1, yG.y = this.wf.DGG.normal[1] - 1, yG.z = this.wf.DGG.normal[2] - 1, 0 !== this.wf.DGG.normal[0] ? (LG.x = this.wf.DGG.normal[0], yG.x =  … [truncated]
```

#### 946. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6815` → after: `L7004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L7004) · [Before (L6815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6815)

```diff
-         const uu = this.Uc.zD(this.Uc.ruu.position);
+         const GG = this.wf.qJ(this.wf.DGG.position);
```

#### 947. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6817` → after: `L7006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L7006) · [Before (L6817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6817)

```diff
-         const Eu = pu.getUniqueColoursForParticleSystem(this.Uc.ruu.position);
+         const bG = XG.getUniqueColoursForParticleSystem(this.wf.DGG.position);
```

#### 948. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6827` → after: `L7016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L7016) · [Before (L6827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6827)

```diff
-         uu.addRampGradient(0, (0, cu.c)(su));
+         GG.addRampGradient(0, (0, fG.f)(wG));
```

#### 949. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6831` → after: `L7020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L7020) · [Before (L6831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6831)

```diff
-           uu.addRampGradient(Zu / Eu.length - 1e-4, (0, cu.c)(ju)), uu.addRampGradient(Zu / Eu.length, (0, cu.c)(su))
+           GG.addRampGradient(LG / bG.length - 1e-4, (0, fG.f)(ZG)), GG.addRampGradient(LG / bG.length, (0, fG.f)(wG))
```

#### 950. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6834` → after: `L7023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L7023) · [Before (L6834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6834)

```diff
-         uu.addRampGradient(1, (0, cu.c)(Uu))
+         GG.addRampGradient(1, (0, fG.f)(SG))
```

#### 951. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6837-L6839` → after: `L7026-L7028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7026-L7028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L7026-L7028) · [Before (L6837-L6839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6837-L6839)

```diff
-         const Eu = (0, bu.c)().zD(uu);
-         if (0 !== Eu) return qu.d.getAverageColours((0, bu.b)().getMetaInfo(Eu).rootName);
-         console.error(new Error(`getPosColourForParticleSystem called on air block ${JSON.stringify(uu)}`).stack)
+         const bG = (0, pG.i)().qJ(GG);
+         if (0 !== bG) return UG.e.getAverageColours((0, pG.e)().getMetaInfo(bG).rootName);
+         console.error(new Error(`getPosColourForParticleSystem called on air block ${JSON.stringify(GG)}`).stack)
```

#### 952. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6842` → after: `L7031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L7031) · [Before (L6842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6842)

```diff
-     const wu = (0, qu.h)("generic_2");
+     const uG = (0, UG.i)("generic_2");
```

#### 953. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6844` → after: `L7033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L7033) · [Before (L6844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6844)

```diff
-     const du = (0, qu.h)("critical_hit");
+     const CG = (0, UG.i)("critical_hit");
```

#### 954. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6848-L6853` → after: `L7037-L7042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7037-L7042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L7037-L7042) · [Before (L6848-L6853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6848-L6853)

```diff
-       const Eu = uu.tO.Kr("sprintParticles", 50);
-       Eu.texture = (0, Nu.t)(uu.tO.hV(), wu), Eu.blendMode = su.e.Standard, Eu.addColorGradient(0, (0, cu.j)(213, 237, 255, 1), (0, cu.j)(109, 170, 238, 1)), Eu.addColorGradient(.2, (0, cu.j)(213, 237, 255, 1), (0, cu.j)(109, 170, 238, 1)), Eu.addColorGradient(1, (0, cu.j)(213, 2 … [truncated]
-       Eu.minLifeTime = .2, Eu.maxLifeTime = .4, Eu.minEmitPower = 30, Eu.maxEmitPower = 50, Eu.emitRate = 5, Eu.gravity = new Ou.dO(0, -100, 0), Eu.minSize = .15, Eu.maxSize = .3, Eu.addVelocityGradient(0, .075, .15), Eu.addVelocityGradient(1, .075, .15), (0, cu.u)(uu, Eu), Eu.cr … [truncated]
-       const ju = uu.tO.Kr("vu", 50);
-       ju.texture = (0, Nu.t)(uu.tO.hV(), du), ju.blendMode = su.e.Standard, ju.addColorGradient(0, (0, cu.j)(255, 167, 0, 1), (0, cu.j)(255, 103, 0, 1)), ju.addColorGradient(.2, (0, cu.j)(255, 167, 0, 1), (0, cu.j)(255, 103, 0, 1)), ju.addColorGradient(1, (0, cu.j)(255, 167, 0, 0 … [truncated]
-       ju.minLifeTime = .15, ju.maxLifeTime = .3, ju.minEmitPower = 30, ju.maxEmitPower = 50, ju.emitRate = 5, ju.gravity = new Ou.dO(0, -100, 0), ju.minSize = .15, ju.maxSize = .3, ju.addVelocityGradient(0, .075, .15), ju.addVelocityGradient(1, .075, .15), (0, cu.u)(uu, ju), ju.c … [truncated]
+       const bG = GG.HK.rM("sprintParticles", 50);
+       bG.texture = (0, QG.q)(GG.HK.Dv(), uG), bG.blendMode = wG.c.Standard, bG.addColorGradient(0, (0, fG.o)(213, 237, 255, 1), (0, fG.o)(109, 170, 238, 1)), bG.addColorGradient(.2, (0, fG.o)(213, 237, 255, 1), (0, fG.o)(109, 170, 238, 1)), bG.addColorGradient(1, (0, fG.o)(213, 2 … [truncated]
+       bG.minLifeTime = .2, bG.maxLifeTime = .4, bG.minEmitPower = 30, bG.maxEmitPower = 50, bG.emitRate = 5, bG.gravity = new KG.mK(0, -100, 0), bG.minSize = .15, bG.maxSize = .3, bG.addVelocityGradient(0, .075, .15), bG.addVelocityGradient(1, .075, .15), (0, fG.w)(GG, bG), bG.cr … [truncated]
+       const ZG = GG.HK.rM("IG", 50);
+       ZG.texture = (0, QG.q)(GG.HK.Dv(), CG), ZG.blendMode = wG.c.Standard, ZG.addColorGradient(0, (0, fG.o)(255, 167, 0, 1), (0, fG.o)(255, 103, 0, 1)), ZG.addColorGradient(.2, (0, fG.o)(255, 167, 0, 1), (0, fG.o)(255, 103, 0, 1)), ZG.addColorGradient(1, (0, fG.o)(255, 167, 0, 0 … [truncated]
+       ZG.minLifeTime = .15, ZG.maxLifeTime = .3, ZG.minEmitPower = 30, ZG.maxEmitPower = 50, ZG.emitRate = 5, ZG.gravity = new KG.mK(0, -100, 0), ZG.minSize = .15, ZG.maxSize = .3, ZG.addVelocityGradient(0, .075, .15), ZG.addVelocityGradient(1, .075, .15), (0, fG.w)(GG, ZG), ZG.c … [truncated]
```

#### 955. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6875` → after: `L7064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L7064) · [Before (L6875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6875)

```diff
-         blendMode: su.e.Standard
+         blendMode: wG.c.Standard
```

#### 956. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6912` → after: `L7101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L7101) · [Before (L6912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6912)

```diff
-         blendMode: su.e.Standard
+         blendMode: wG.c.Standard
```

#### 957. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6949` → after: `L7138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L7138) · [Before (L6949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6949)

```diff
-         blendMode: su.e.Standard
+         blendMode: wG.c.Standard
```

#### 958. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6954` → after: `L7143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L7143) · [Before (L6954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6954)

```diff
-         this.pSystem = uu, this.maxLifetimeSecs = Eu, this.stopTimeout = null, this.started = !1, this.stopAt = 0, this.fO = !1, uu.manualEmitCount = 0
+         this.pSystem = GG, this.maxLifetimeSecs = bG, this.stopTimeout = null, this.started = !1, this.stopAt = 0, this.pK = !1, GG.manualEmitCount = 0
```

#### 959. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6957` → after: `L7146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L7146) · [Before (L6957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6957)

```diff
-         this.fO || (this.pSystem.manualEmitCount = uu, this.started || (this.pSystem.start(), this.started = !0), this.stopAt = performance.now() + 1e3 * this.maxLifetimeSecs, null === this.stopTimeout && this.scheduleStop(1e3 * this.maxLifetimeSecs))
+         this.pK || (this.pSystem.manualEmitCount = GG, this.started || (this.pSystem.start(), this.started = !0), this.stopAt = performance.now() + 1e3 * this.maxLifetimeSecs, null === this.stopTimeout && this.scheduleStop(1e3 * this.maxLifetimeSecs))
```

#### 960. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6960` → after: `L7149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L7149) · [Before (L6960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6960)

```diff
-         this.fO = !0, null !== this.stopTimeout && (clearTimeout(this.stopTimeout), this.stopTimeout = null), this.pSystem.dispose()
+         this.pK = !0, null !== this.stopTimeout && (clearTimeout(this.stopTimeout), this.stopTimeout = null), this.pSystem.dispose()
```

#### 961. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6972` → after: `L7161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L7161) · [Before (L6972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6972)

```diff
-       (0, cu.u)(uu, Eu.pSystem), (0, cu.s)(Eu.pSystem, ju), Eu.emitAmount(su)
+       (0, fG.w)(GG, bG.pSystem), (0, fG.u)(bG.pSystem, ZG), bG.emitAmount(wG)
```

#### 962. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6974` → after: `L7163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L7163) · [Before (L6974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6974)

```diff
-     const Vu = (0, Uu.g)("Fat Brown Mushroom");
+     const lG = (0, SG.p)("Fat Brown Mushroom");
```

#### 963. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6978` → after: `L7167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L7167) · [Before (L6978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6978)

```diff
-       Qu(uu, Eu === Vu ? Xu.d.BounceBrownMushroom : Xu.d.BounceRedMushroom, ju)
+       PG(GG, bG === lG ? yG.g.BounceBrownMushroom : yG.g.BounceRedMushroom, ZG)
```

#### 964. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6982` → after: `L7171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L7171) · [Before (L6982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6982)

```diff
-       const su = Eu === Xu.d.Bunnyhop || Eu === Xu.d.JumpPad;
+       const wG = bG === yG.g.Bunnyhop || bG === yG.g.JumpPad;
```

#### 965. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6984-L6985` → after: `L7173-L7174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7173-L7174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L7173-L7174) · [Before (L6984-L6985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6984-L6985)

```diff
-       Eu === Xu.d.Bunnyhop ? (Uu = [213, 237, 255], lu = [109, 170, 238]) : Eu === Xu.d.BounceRedMushroom ? (Uu = [196, 63, 63], lu = [148, 53, 53]) : Eu === Xu.d.BounceBrownMushroom ? (Uu = [186, 132, 91], lu = [153, 107, 72]) : Eu === Xu.d.BunnyhopBounce ? (Uu = [217, 170, 2],  … [truncated]
-       const qu = uu.YG.bM(uu.FQ);
+       bG === yG.g.Bunnyhop ? (SG = [213, 237, 255], kG = [109, 170, 238]) : bG === yG.g.BounceRedMushroom ? (SG = [196, 63, 63], kG = [148, 53, 53]) : bG === yG.g.BounceBrownMushroom ? (SG = [186, 132, 91], kG = [153, 107, 72]) : bG === yG.g.BunnyhopBounce ? (SG = [217, 170, 2],  … [truncated]
+       const UG = GG.Hr.HJ(GG.sA);
```

#### 966. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6988` → after: `L7177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L7177) · [Before (L6988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6988)

```diff
-         const uu = 1 === ju[1] ? Zu.e.Ih - .4 : 0;
+         const GG = 1 === ZG[1] ? LG.d.td - .4 : 0;
```

#### 967. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L6996` → after: `L7185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L7185) · [Before (L6996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L6996)

```diff
-       const bu = su ? ou : ku;
+       const pG = wG ? IG : FG;
```

#### 968. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7017` → after: `L7206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L7206) · [Before (L7017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L7017)

```diff
-         this.Uc = uu, this.cfg = ju, this.pool = [], this.currentIndex = 0;
+         this.wf = GG, this.cfg = ZG, this.pool = [], this.currentIndex = 0;
```

#### 969. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7028` → after: `L7217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L7217) · [Before (L7028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L7028)

```diff
-         const Ou = this.Uc.camera.bM();
+         const KG = this.wf.camera.HJ();
```

#### 970. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7030` → after: `L7219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L7219) · [Before (L7030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L7030)

```diff
-         const Yu = null !== (ju = Eu.hideDist) && void 0 !== ju ? ju : this.cfg.hideDist;
+         const hG = null !== (ZG = bG.hideDist) && void 0 !== ZG ? ZG : this.cfg.hideDist;
```

#### 971. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7035` → after: `L7224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L7224) · [Before (L7035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L7035)

```diff
-         (0, cu.p)(eu, gu, Mu), eu.minEmitPower = null !== (su = Eu.minEmitPower) && void 0 !== su ? su : eu.minEmitPower, eu.maxEmitPower = null !== (Uu = Eu.maxEmitPower) && void 0 !== Uu ? Uu : eu.maxEmitPower, eu.minSize = null !== (Zu = Eu.minSize) && void 0 !== Zu ? Zu : eu. … [truncated]
+         (0, fG.s)(EG, rG, zG), EG.minEmitPower = null !== (wG = bG.minEmitPower) && void 0 !== wG ? wG : EG.minEmitPower, EG.maxEmitPower = null !== (SG = bG.maxEmitPower) && void 0 !== SG ? SG : EG.maxEmitPower, EG.minSize = null !== (LG = bG.minSize) && void 0 !== LG ? LG : EG. … [truncated]
```

#### 972. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7039-L7041` → after: `L7228-L7230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7228-L7230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L7228-L7230) · [Before (L7039-L7041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L7039-L7041)

```diff
-           ju = this.Uc.tO.Kr(`particlePool_${uu}`, 50),
-           su = Eu.texture.includes("/") ? Eu.texture : (0, qu.h)(Eu.texture);
-         ju.texture = (0, Nu.t)(this.Uc.tO.hV(), su), ju.blendMode = Eu.blendMode, ju.minLifeTime = Eu.minLifeTime, ju.maxLifeTime = Eu.maxLifeTime, ju.minEmitPower = Eu.minEmitPower, ju.maxEmitPower = Eu.maxEmitPower, ju.minSize = Eu.minSize, ju.maxSize = Eu.maxSize, ju.gravity = … [truncated]
+           ZG = this.wf.HK.rM(`particlePool_${GG}`, 50),
+           wG = bG.texture.includes("/") ? bG.texture : (0, UG.i)(bG.texture);
+         ZG.texture = (0, QG.q)(this.wf.HK.Dv(), wG), ZG.blendMode = bG.blendMode, ZG.minLifeTime = bG.minLifeTime, ZG.maxLifeTime = bG.maxLifeTime, ZG.minEmitPower = bG.minEmitPower, ZG.maxEmitPower = bG.maxEmitPower, ZG.minSize = bG.minSize, ZG.maxSize = bG.maxSize, ZG.gravity = … [truncated]
```

#### 973. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7043` → after: `L7232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L7232) · [Before (L7043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L7043)

```diff
-         this.applyColorGradients(ju, Eu.colorGradients), (0, cu.u)(this.Uc, ju), ju.createBoxEmitter(new Ou.dO(Math.min(Eu.dir1[0], Eu.dir2[0]), Math.min(Eu.dir1[1], Eu.dir2[1]), Math.min(Eu.dir1[2], Eu.dir2[2])), new Ou.dO(Math.max(Eu.dir1[0], Eu.dir2[0]), Math.max(Eu.dir1[1], E … [truncated]
+         this.applyColorGradients(ZG, bG.colorGradients), (0, fG.w)(this.wf, ZG), ZG.createBoxEmitter(new KG.mK(Math.min(bG.dir1[0], bG.dir2[0]), Math.min(bG.dir1[1], bG.dir2[1]), Math.min(bG.dir1[2], bG.dir2[2])), new KG.mK(Math.max(bG.dir1[0], bG.dir2[0]), Math.max(bG.dir1[1], b … [truncated]
```

#### 974. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7053` → after: `L7242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L7242) · [Before (L7053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L7053)

```diff
-             const Eu = (0, cu.j)(Zu.color[0], Zu.color[1], Zu.color[2], 1);
+             const bG = (0, fG.o)(LG.color[0], LG.color[1], LG.color[2], 1);
```

#### 975. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7057-L7058` → after: `L7246-L7247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7246-L7247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L7246-L7247) · [Before (L7057-L7058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L7057-L7058)

```diff
-             const Eu = (0, cu.j)(Zu.minColor[0], Zu.minColor[1], Zu.minColor[2], null !== (su = Zu.minColor[3]) && void 0 !== su ? su : 1),
-               ju = (0, cu.j)(Zu.maxColor[0], Zu.maxColor[1], Zu.maxColor[2], null !== (Uu = Zu.maxColor[3]) && void 0 !== Uu ? Uu : 1);
+             const bG = (0, fG.o)(LG.minColor[0], LG.minColor[1], LG.minColor[2], null !== (wG = LG.minColor[3]) && void 0 !== wG ? wG : 1),
+               ZG = (0, fG.o)(LG.maxColor[0], LG.maxColor[1], LG.maxColor[2], null !== (SG = LG.maxColor[3]) && void 0 !== SG ? SG : 1);
```

#### 976. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7065` → after: `L7254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L7254) · [Before (L7065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L7065)

```diff
-       if (!(0, Yu.H)(Eu.hideDist)) {
+       if (!(0, hG.L)(bG.hideDist)) {
```

#### 977. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7067-L7068` → after: `L7256-L7257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7256-L7257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L7256-L7257) · [Before (L7067-L7068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L7067-L7068)

```diff
-         for (let uu = 0; uu < 3; uu++) ju.push((0, lu.u)(Eu.pos1[uu], Eu.pos2[uu], .5));
-         const su = uu.YG.bM(uu.FQ),
+         for (let GG = 0; GG < 3; GG++) ZG.push((0, kG.x)(bG.pos1[GG], bG.pos2[GG], .5));
+         const wG = GG.Hr.HJ(GG.sA),
```

#### 978. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7075` → after: `L7264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L7264) · [Before (L7075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L7075)

```diff
-   38183: (uu, Eu, ju) => {
+   38198: (GG, bG, ZG) => {
```

#### 979. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7077` → after: `L7266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L7266) · [Before (L7077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L7077)

```diff
-       e: () => Du
+       b: () => JG
```

#### 980. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L7079-L7091` → after: `L7268-L7280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R7268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L7268-L7280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/77.js#L7268-L7280) · [Before (L7079-L7091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/77.js#L7079-L7091)

```diff
-     var su = ju(37603),
-       Uu = ju(38206),
-       Zu = ju(38232),
-       Xu = ju(37811),
-       lu = ju(38218),
-       qu = ju(38236),
-       fu = ju(3336),
-       Cu = ju(38197),
-       bu = ju(38191),
-       cu = ju(37571),
-       Nu = ju(37693),
-       Ou = ju(37704),
-       Yu = ju(2893);
+     var wG = ZG(37550),
+       SG = ZG(38214),
+       LG = ZG(38248),
+       yG = ZG(37782),
+       kG = ZG(38234),
+       UG = ZG(38256),
+       YG = ZG(3135),
+       VG = ZG(38205),
+       pG = ZG(38201),
+       fG = ZG(37518),
+       QG = ZG(37639),
+       KG = ZG(37647),
+       hG = ZG(2751);
```
