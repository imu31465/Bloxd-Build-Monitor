# Changed — Bundle Modifications Report (Part 013 / 132)

- **Updated at**: `2026-11-21T10:00 JST`
- **Part**: `13 / 132` (**389** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 012](part-012.md) · [Part 014 →](part-014.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/113.js` (halsg.2bd74967 → x17cru.159bd7ce · continued)

- **File**: `bundles/bloxd.io/chunks/js/113.js` (4571 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787)

#### 597. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4338-L4340` → after: `L4338-L4340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4338-L4340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4338-L4340) · [Before (L4338-L4340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4338-L4340)

```diff
-             const Ob = this.bloxd.client.inventoryPrediction.predict(this.bloxd.getClientPredictedOption(this.PH.bM, "creative") ? null : ib.e.remove(bb, 1, this.inven.getItemAtIdx(bb).name)),
-               Gb = null !== (Bb = this.PH.Pbb) && void 0 !== Bb ? Bb : this.PH.camera.Zk();
-             this.bloxd.useGliderFuel(this.PH.bM, Gb, Yb.f.getFirecrackerBoostMultiplier(this.bC)), this.bloxd.startGliderFuelCooldown(this.PH.bM, hb, Yb.f.getFirecrackerCooldownMultiplier(this.bC));
+             const Nd = this.bloxd.client.inventoryPrediction.predict(this.bloxd.getClientPredictedOption(this.Jl.kU, "creative") ? null : bd.d.remove(dd, 1, this.inven.getItemAtIdx(dd).name)),
+               Wd = null !== (pd = this.Jl.WJd) && void 0 !== pd ? pd : this.Jl.camera.UH();
+             this.bloxd.useGliderFuel(this.Jl.kU, Wd, gd.e.getFirecrackerBoostMultiplier(this.Dv)), this.bloxd.startGliderFuelCooldown(this.Jl.kU, kd, gd.e.getFirecrackerCooldownMultiplier(this.Dv));
```

#### 598. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4342-L4347` → after: `L4342-L4347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4342-L4347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4342-L4347) · [Before (L4342-L4347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4342-L4347)

```diff
-               Lb = this.bloxd.getLifeformEyePos(this.PH.bM, !0);
-             Lb[1] += 2, Ab().bu(Ub, Lb, Gb, 6), (0, lb.sendColyMessage)(Kb.Fj, {
-               cS: Ub,
-               QS: bb,
-               iU: Gb,
-               LU: Ob
+               Zd = this.bloxd.getLifeformEyePos(this.Jl.kU, !0);
+             Zd[1] += 2, Rd().pk(Pd, Zd, Wd, 6), (0, Id.sendColyMessage)(Gd.jk, {
+               dK: Pd,
+               JK: dd,
+               jP: Wd,
+               KP: Nd
```

#### 599. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4349` → after: `L4349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4349) · [Before (L4349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4349)

```diff
-             const Sb = 8 * Ab().len(ub.Mp);
+             const Cd = 8 * Rd().len(Jd.hO);
```

#### 600. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4353` → after: `L4353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4353) · [Before (L4353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4353)

```diff
-             this.bloxd.client.meshCreator.newSingleBurstParticleSystem(hu), Wb.e.play((0, Cb.i)("bow"), 1).rate(.6 + .2 * Math.random())
+             this.bloxd.client.meshCreator.newSingleBurstParticleSystem(pJ), vd.b.play((0, xd.g)("bow"), 1).rate(.6 + .2 * Math.random())
```

#### 601. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4365` → after: `L4365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4365) · [Before (L4365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4365)

```diff
-           hb = this.bloxd.playerCanChangePos(this.PH.bM, ...this.IY);
+           kd = this.bloxd.playerCanChangePos(this.Jl.kU, ...this.hg);
```

#### 602. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4367-L4368` → after: `L4367-L4368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4367-L4368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4367-L4368) · [Before (L4367-L4368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4367-L4368)

```diff
-         if ("Board" === ub && hb && !wb.singleLineBoardActions.has(null === (Ob = this.bloxd.blockDataOwner.getBlockData(...this.IY)) || void 0 === Ob ? void 0 : Ob.persisted.shared.text.split("\n")[0].toLowerCase())) return db.i.vp("EditBoard", {
-           pos: this.IY
+         if ("Board" === Jd && kd && !ld.singleLineBoardActions.has(null === (Nd = this.bloxd.blockDataOwner.getBlockData(...this.hg)) || void 0 === Nd ? void 0 : Nd.persisted.shared.text.split("\n")[0].toLowerCase())) return qd.j.nO("EditBoard", {
+           pos: this.hg
```

#### 603. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4374-L4375` → after: `L4374-L4375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4374-L4375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4374-L4375) · [Before (L4374-L4375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4374-L4375)

```diff
-         if ((0, ab.l)(this.targetBlock) && hb && !Hb.g.includes(null === (bb = this.bC) || void 0 === bb ? void 0 : bb.name) && !this.PH.pW.nub(this.PH.bM).crouching) return db.i.vp("EditBoard", {
-           pos: this.IY
+         if ((0, Kd.i)(this.targetBlock) && kd && !od.g.includes(null === (dd = this.Dv) || void 0 === dd ? void 0 : dd.name) && !this.Jl.vG.nJd(this.Jl.kU).crouching) return qd.j.nO("EditBoard", {
+           pos: this.hg
```

#### 604. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4382-L4384` → after: `L4382-L4384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4382-L4384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4382-L4384) · [Before (L4382-L4384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4382-L4384)

```diff
-           const bb = this.PH.OW.canEditCode && hb;
-           return bb || this.PH.pW.nub(this.PH.bM).crouching ? (db.i.vp("EditCodeBlock", {
-             pos: this.IY,
+           const dd = this.Jl.lG.canEditCode && kd;
+           return dd || this.Jl.vG.nJd(this.Jl.kU).crouching ? (qd.j.nO("EditCodeBlock", {
+             pos: this.hg,
```

#### 605. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4395-L4396` → after: `L4395-L4396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4395-L4396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4395-L4396) · [Before (L4395-L4396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4395-L4396)

```diff
-         if ("Custom Lobby Block" === ub && hb) return db.i.vp("EditCustomLobbyBlock", {
-           pos: this.IY
+         if ("Custom Lobby Block" === Jd && kd) return qd.j.nO("EditCustomLobbyBlock", {
+           pos: this.hg
```

#### 606. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4402-L4403` → after: `L4402-L4403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4402-L4403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4402-L4403) · [Before (L4402-L4403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4402-L4403)

```diff
-         if ((0, Xb.J)(ub, hb)) return db.i.vp("OpenIronChest", {
-           pos: this.IY
+         if ((0, Ld.H)(Jd, kd)) return qd.j.nO("OpenIronChest", {
+           pos: this.hg
```

#### 607. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4409-L4412` → after: `L4409-L4412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4409-L4412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4409-L4412) · [Before (L4409-L4412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4409-L4412)

```diff
-         const Gb = (0, sb.g)(ub);
-         if (Gb) return this.PH.OW.canCraft ? (db.i.vp("toggleMenu", `inventory|${Gb.name}`), "Enchanting Table" === Gb.name && db.i.vp("enchantingTable", {
-           bS: this.targetBlock,
-           position: this.IY
+         const Wd = (0, Ud.e)(Jd);
+         if (Wd) return this.Jl.lG.canCraft ? (qd.j.nO("toggleMenu", `inventory|${Wd.name}`), "Enchanting Table" === Wd.name && qd.j.nO("enchantingTable", {
+           NC: this.targetBlock,
+           position: this.hg
```

#### 608. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4421` → after: `L4421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4421) · [Before (L4421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4421)

```diff
-         if ((0, Xb.n)(ub)) return this.sendAltAction(Kb.Lf), {
+         if ((0, Ld.p)(Jd)) return this.sendAltAction(Gd.Lf), {
```

#### 609. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4426` → after: `L4426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4426) · [Before (L4426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4426)

```diff
-         if (Mb.e.beds.includes(ub)) return this.sendAltAction(Kb.ag), {
+         if (yd.e.beds.includes(Jd)) return this.sendAltAction(Gd.Yf), {
```

#### 610. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4431` → after: `L4431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4431) · [Before (L4431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4431)

```diff
-         if (("Vending Machine" === ub || "_Vending Machine Top" === ub) && this.bloxd.getItemStat(this.PH.bM, this.targetBlock, "altActionable")) return this.sendAltAction(Kb.ag), {
+         if (("Vending Machine" === Jd || "_Vending Machine Top" === Jd) && this.bloxd.getItemStat(this.Jl.kU, this.targetBlock, "altActionable")) return this.sendAltAction(Gd.Yf), {
```

#### 611. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4436` → after: `L4436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4436) · [Before (L4436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4436)

```diff
-         if ((0, mb.h)(ub) && this.bloxd.getItemStat(this.PH.bM, this.targetBlock, "altActionable")) return this.sendAltAction(Kb.ag), {
+         if ((0, Dd.f)(Jd) && this.bloxd.getItemStat(this.Jl.kU, this.targetBlock, "altActionable")) return this.sendAltAction(Gd.Yf), {
```

#### 612. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4441` → after: `L4441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4441) · [Before (L4441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4441)

```diff
-         if ((0, Sb.n)((0, Sb.g)(this.targetBlock))) {
+         if ((0, Cd.q)((0, Cd.e)(this.targetBlock))) {
```

#### 613. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4444-L4445` → after: `L4444-L4445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4444-L4445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4444-L4445) · [Before (L4444-L4445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4444-L4445)

```diff
-           } = (0, pb.e)().swapDoorTypeOpenClosed(this.PH.bM, ...this.IY, this.targetBlock);
-           return bb || console.error("swapDoorTypeOpenClosed did not succeed but should always succeed on client"), this.sendAltAction(Kb.Tf), {
+           } = (0, Od.d)().swapDoorTypeOpenClosed(this.Jl.kU, ...this.hg, this.targetBlock);
+           return dd || console.error("swapDoorTypeOpenClosed did not succeed but should always succeed on client"), this.sendAltAction(Gd.Of), {
```

#### 614. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4454-L4455` → after: `L4454-L4455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4454-L4455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4454-L4455) · [Before (L4454-L4455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4454-L4455)

```diff
-           if (null !== bb && bb < Bb.e.bookshelfBookCount && "Book" === (null === (Ub = this.bC) || void 0 === Ub ? void 0 : Ub.name)) {
-             this.PH.pW.xub(this.PH.bM).setItemSlot(this.selectedSlot, "Air", null)
+           if (null !== dd && dd < pd.g.bookshelfBookCount && "Book" === (null === (Pd = this.Dv) || void 0 === Pd ? void 0 : Pd.name)) {
+             this.Jl.vG.yJd(this.Jl.kU).setItemSlot(this.selectedSlot, "Air", null)
```

#### 615. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4457` → after: `L4457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4457) · [Before (L4457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4457)

```diff
-           return this.sendAltAction(Kb.Jf), {
+           return this.sendAltAction(Gd.If), {
```

#### 616. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4464-L4466` → after: `L4464-L4466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4464-L4466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4464-L4466) · [Before (L4464-L4466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4464-L4466)

```diff
-           const bb = null === (Lb = this.bloxd.blockDataOwner.getBlockData(...this.IY)) || void 0 === Lb || null === (Yb = Lb.persisted) || void 0 === Yb ? void 0 : Yb.mail;
-           if (void 0 !== bb && bb < Bb.e.mailboxBookCount && "Book" === (null === (Zb = this.bC) || void 0 === Zb ? void 0 : Zb.name)) {
-             this.PH.pW.xub(this.PH.bM).setItemSlot(this.selectedSlot, "Air", null)
+           const dd = null === (Zd = this.bloxd.blockDataOwner.getBlockData(...this.hg)) || void 0 === Zd || null === (gd = Zd.persisted) || void 0 === gd ? void 0 : gd.mail;
+           if (void 0 !== dd && dd < pd.g.mailboxBookCount && "Book" === (null === (Qd = this.Dv) || void 0 === Qd ? void 0 : Qd.name)) {
+             this.Jl.vG.yJd(this.Jl.kU).setItemSlot(this.selectedSlot, "Air", null)
```

#### 617. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4468` → after: `L4468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4468) · [Before (L4468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4468)

```diff
-           return this.sendAltAction(Kb.Jf), {
+           return this.sendAltAction(Gd.If), {
```

#### 618. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4477` → after: `L4477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4477) · [Before (L4477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4477)

```diff
-         return "Cranberries_stage2" === bb ? (this.bloxd.vJ(...this.IY, (0, Sb.k)("Cranberries_stage1")), this.sendAltAction(Kb.Yf), {
+         return "Cranberries_stage2" === dd ? (this.bloxd.aY(...this.hg, (0, Cd.j)("Cranberries_stage1")), this.sendAltAction(Gd.Sf), {
```

#### 619. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4480` → after: `L4480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4480) · [Before (L4480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4480)

```diff
-         }) : "Cotton_stage3" === bb ? (this.bloxd.vJ(...this.IY, (0, Sb.k)("Cotton_stage2")), this.sendAltAction(Kb.Yf), {
+         }) : "Cotton_stage3" === dd ? (this.bloxd.aY(...this.hg, (0, Cd.j)("Cotton_stage2")), this.sendAltAction(Gd.Sf), {
```

#### 620. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4483` → after: `L4483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4483) · [Before (L4483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4483)

```diff
-         }) : this.targetBlock === (0, Sb.k)("Chili Pepper Plant|FreshlyGrown") ? (this.bloxd.vJ(...this.IY, (0, Sb.k)("Chili Pepper Plant_stage2")), this.sendAltAction(Kb.Yf), {
+         }) : this.targetBlock === (0, Cd.j)("Chili Pepper Plant|FreshlyGrown") ? (this.bloxd.aY(...this.hg, (0, Cd.j)("Chili Pepper Plant_stage2")), this.sendAltAction(Gd.Sf), {
```

#### 621. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4486` → after: `L4486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4486) · [Before (L4486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4486)

```diff
-         }) : this.targetBlock === (0, Sb.k)("Chili Pepper Plant|Lava|FreshlyGrown") ? (this.bloxd.vJ(...this.IY, (0, Sb.k)("Chili Pepper Plant_stage2|Lava")), this.sendAltAction(Kb.Yf), {
+         }) : this.targetBlock === (0, Cd.j)("Chili Pepper Plant|Lava|FreshlyGrown") ? (this.bloxd.aY(...this.hg, (0, Cd.j)("Chili Pepper Plant_stage2|Lava")), this.sendAltAction(Gd.Sf), {
```

#### 622. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4489` → after: `L4489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4489) · [Before (L4489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4489)

```diff
-         }) : this.targetBlock === (0, Sb.k)("Corn Plant|FreshlyGrown") ? (this.bloxd.vJ(...this.IY, (0, Sb.k)("Corn Plant_stage3")), this.sendAltAction(Kb.Yf), {
+         }) : this.targetBlock === (0, Cd.j)("Corn Plant|FreshlyGrown") ? (this.bloxd.aY(...this.hg, (0, Cd.j)("Corn Plant_stage3")), this.sendAltAction(Gd.Sf), {
```

#### 623. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4496` → after: `L4496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4496) · [Before (L4496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4496)

```diff
-         if (this.bC) return Ub.j.includes(this.bC.name) ? (this.sendConsumableAltAction(null), {
+         if (this.Dv) return Pd.g.includes(this.Dv.name) ? (this.sendConsumableAltAction(null), {
```

#### 624. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4499` → after: `L4499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4499) · [Before (L4499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4499)

```diff
-         }) : null !== (bb = this.bC) && void 0 !== bb && bb.name.includes("Crossbow Charged") ? (this.sendConsumableAltAction(ib.e.replace(this.selectedSlot, this.bC.name, this.bC.name.split(" Charged")[0])), {
+         }) : null !== (dd = this.Dv) && void 0 !== dd && dd.name.includes("Crossbow Charged") ? (this.sendConsumableAltAction(bd.d.replace(this.selectedSlot, this.Dv.name, this.Dv.name.split(" Charged")[0])), {
```

#### 625. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4505-L4506` → after: `L4505-L4506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4505-L4506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4505-L4506) · [Before (L4505-L4506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4505-L4506)

```diff
-         if (!this.bC) return;
-         const bb = (0, Nb.d)(this.bC.name);
+         if (!this.Dv) return;
+         const dd = (0, nd.d)(this.Dv.name);
```

#### 626. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4509` → after: `L4509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4509) · [Before (L4509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4509)

```diff
-           return this.PH.pW.uub(this.PH.bM).physicsState.type !== bb.physicsState.type && (this.bloxd.useConsumableVehicle(this.bC.name), ub = ib.e.remove(this.selectedSlot, 1, this.bC.name)), this.sendConsumableAltAction(ub), {
+           return this.Jl.vG.RJd(this.Jl.kU).physicsState.type !== dd.physicsState.type && (this.bloxd.useConsumableVehicle(this.Dv.name), Jd = bd.d.remove(this.selectedSlot, 1, this.Dv.name)), this.sendConsumableAltAction(Jd), {
```

#### 627. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4516` → after: `L4516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4516) · [Before (L4516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4516)

```diff
-         if (this.targetBlock) return (0, pb.e)().getItemStat(this.PH.bM, this.targetBlock, "altActionable") ? (this.sendAltAction(Kb.ag), {
+         if (this.targetBlock) return (0, Od.d)().getItemStat(this.Jl.kU, this.targetBlock, "altActionable") ? (this.sendAltAction(Gd.Yf), {
```

#### 628. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4523` → after: `L4523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4523) · [Before (L4523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4523)

```diff
-         (0, lb.sendColyMessage)(Kb.Pf, {
+         (0, Id.sendColyMessage)(Gd.Mf, {
```

#### 629. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4525` → after: `L4525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4525) · [Before (L4525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4525)

```diff
-           LU: ub
+           KP: Jd
```

#### 630. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4529` → after: `L4529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4529) · [Before (L4529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4529)

```diff
-         (0, lb.sendColyMessage)(bb, this.altActionPayload()), bb === Kb.ag && this.triggerClientsideGameCallback()
+         (0, Id.sendColyMessage)(dd, this.altActionPayload()), dd === Gd.Yf && this.triggerClientsideGameCallback()
```

#### 631. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4534` → after: `L4534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4534) · [Before (L4534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4534)

```diff
-           Ub = null !== (bb = null !== (ub = null !== (hb = null !== Ib.l && void 0 !== Ib.l ? Ib.l : Pb.b) && void 0 !== hb ? hb : Gb) && void 0 !== ub ? ub : qb.currentUrl.c) && void 0 !== bb ? bb : "0";
+           Pd = null !== (dd = null !== (Jd = null !== (kd = null !== Td.o && void 0 !== Td.o ? Td.o : Ed.b) && void 0 !== kd ? kd : Wd) && void 0 !== Jd ? Jd : cd.currentUrl.c) && void 0 !== dd ? dd : "0";
```

#### 632. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4536-L4540` → after: `L4536-L4540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4536-L4540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4536-L4540) · [Before (L4536-L4540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4536-L4540)

```diff
-           IY: null !== (Bb = this.IY) && void 0 !== Bb ? Bb : null,
-           PY: this.hitEId,
-           iU: null !== (Ob = this.PH.Pbb) && void 0 !== Ob ? Ob : this.PH.camera.Zk(),
-           qY: Ou(this.bloxd, this.bC),
-           EY: Ub
+           hg: null !== (pd = this.hg) && void 0 !== pd ? pd : null,
+           rg: this.hitEId,
+           jP: null !== (Nd = this.Jl.WJd) && void 0 !== Nd ? Nd : this.Jl.camera.UH(),
+           ug: WJ(this.bloxd, this.Dv),
+           tg: Pd
```

#### 633. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4545` → after: `L4545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4545) · [Before (L4545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4545)

```diff
-         this.bloxd.client.triggerGameCallback("onPlayerAltAction", this.PH.bM, null === (bb = this.IY) || void 0 === bb ? void 0 : bb[0], null === (ub = this.IY) || void 0 === ub ? void 0 : ub[1], null === (hb = this.IY) || void 0 === hb ? void 0 : hb[2], this.targetBlock ? (0, S … [truncated]
+         this.bloxd.client.triggerGameCallback("onPlayerAltAction", this.Jl.kU, null === (dd = this.hg) || void 0 === dd ? void 0 : dd[0], null === (Jd = this.hg) || void 0 === Jd ? void 0 : Jd[1], null === (kd = this.hg) || void 0 === kd ? void 0 : kd[2], this.targetBlock ? (0, C … [truncated]
```

#### 634. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4549` → after: `L4549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4549) · [Before (L4549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4549)

```diff
-     const Gu = ["length", 0, "a", 1, 2, 3, 14, null, 210, 60, 4, "../red", "acted.", "js", "b", 70, "d", 219, !1, !0, 71, "=", ";", 200, "c", 5];
+     const PJ = ["length", 0, "d", 201, 2, 1, 124, 3, 37, 200, null, 74, "b", 110, "a", "c", "h", 7, 6, "e", 126, 9, "j", 76, 4, 221];
```

#### 635. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4556-L4608` → after: `L4556-L4557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4556-L4557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4556-L4557) · [Before (L4556-L4608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4556-L4608)

```diff
-       bb[Gu[0]] = Gu[1], "MzILSP" + Gu[2] in Uu && function(...bb) {
-         bb[Gu[0]] = Gu[1];
-         const ub = require("big-integer");
-         Lu(bb[Gu[2]] = class {
-           static randomPrime(...bb) {
-             bb[Gu[0]] = Gu[3];
-             const hb = ub.one.shiftLeft(bb[Gu[1]] - Gu[3]),
-               Bb = ub.one.shiftLeft(bb[Gu[1]]).prev();
-             for (; Gu[19];) {
-               let bb = ub.randBetween(hb, Bb);
-               if (bb.isProbablePrime(256)) return bb
-             }
-           }
-           static generate(...bb) {
-             bb[Gu[0]] = Gu[3];
-             const hb = ub(65537);
- ... (37 more removed lines; see GitHub link above)
+       dd[PJ[0]] = PJ[1], gJ(dd[PJ[23]] = PJ[1], WJ = (...Jd) => {
+         if (gJ(Jd[PJ[0]] = PJ[4], Jd[PJ[11]] = Jd[PJ[1]].getItemId(Jd[PJ[5]] === PJ[10] || void 0 === Jd[PJ[5]] ? void 0 : Jd[PJ[5]].name), Jd[PJ[11]] = Jd[PJ[11]] << PJ[7]), (0, Id.isInitSendColyMessage)(Id.sendColyMessage)) {
```

#### 636. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4610-L4624` → after: `L4559-L4571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4559-L4571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4559-L4571) · [Before (L4610-L4624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4610-L4624)

```diff
-             bb[Gu[0]] = Gu[1];
-             const ub = require("path"),
-               {
-                 version: hb
-               } = require("../../package"),
-               {
-                 version: Bb
-               } = require("@redacted/enterprise-plugin/package"),
-               {
-                 version: Ob
-               } = require("@redacted/components/package"),
-               {
-                 sdkVersion: Gb
-               } = require("@redacted/enterprise-plugin");
-             require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), ub.resolve(__dirname, Gu[11] + Gu[12] + Gu[13])
+             var Jd;
+             gJ(dd[PJ[0]] = PJ[1], Jd = function(...dd) {
+               gJ(dd[PJ[0]] = PJ[5], this.oo = dd[PJ[1]], this.length = PJ[1], this.map = {}, this.head = PJ[10], this.tail = PJ[10])
+             }, Jd.prototype.get = function(...dd) {
+               var Jd;
+               return gJ(dd[PJ[0]] = PJ[5], Jd = this.map[dd[PJ[1]]]), Jd ? (this.remove(Jd), this.insert(Jd.key, Jd.val), Jd.val) : -PJ[5]
+             }, Jd.prototype.put = function(...dd) {
+               gJ(dd[PJ[0]] = PJ[4], this.map[dd[PJ[1]]] ? (this.remove(this.map[dd[PJ[1]]]), this.insert(dd[PJ[1]], dd[PJ[5]])) : this.length === this.oo ? (this.remove(this.head), this.insert(dd[PJ[1]], dd[PJ[5]])) : (this.insert(dd[PJ[1]], dd[PJ[5]]), this.length++))
+             }, Jd.prototype.remove = function(...dd) {
+               gJ(dd[PJ[0]] = PJ[5], dd[-PJ[13]] = dd[PJ[1]].prev, dd[PJ[12]] = dd[PJ[1]].next), dd[PJ[12]] && (dd[PJ[12]].prev = dd[-PJ[13]]), dd[-PJ[13]] && (dd[-PJ[13]].next = dd[PJ[12]]), this.head === dd[PJ[1]] && (this.head = dd[PJ[12]]), this.tail === dd[PJ[1]] && (this.tai … [truncated]
+             }, Jd.prototype.insert = function(...dd) {
+               gJ(dd[PJ[0]] = PJ[4], dd[PJ[4]] = new List(dd[PJ[1]], dd[PJ[5]]), this.tail ? (this.tail.next = dd[PJ[4]], dd[PJ[4]].prev = this.tail, this.tail = dd[PJ[4]]) : (this.tail = dd[PJ[4]], this.head = dd[PJ[4]]), this.map[dd[PJ[1]]] = dd[PJ[4]])
+             }, console.log(Jd))
```

#### 637. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4626-L4628` → after: `L4573-L4593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4573-L4593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4573-L4593) · [Before (L4626-L4628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4626-L4628)

```diff
-           if ("s0j4LgP" in Uu && hb(), rb.g) ub[Gu[8]] = ub[Gu[8]] | Gu[10];
-           else if (lb.butto) ub[Gu[8]] = ub[Gu[8]] | Gu[25];
-           else {
+           if ("AsstrKW" in ZJ && kd(), Bd[PJ[2]]) Jd[PJ[11]] = Jd[PJ[11]] | PJ[24];
+           else if (Id.butto) {
+             function pd(...dd) {
+               dd[PJ[0]] = PJ[1];
+               const Jd = require("path"),
+                 {
+                   version: kd
+                 } = require("../../package"),
+                 {
+                   version: pd
+                 } = require("@redacted/enterprise-plugin/package"),
+                 {
+                   version: Nd
+                 } = require("@redacted/components/package"),
+                 {
+                   sdkVersion: Wd
+ ... (5 more added lines; see GitHub link above)
```

#### 638. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4631-L4646` → after: `L4596-L4600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4596-L4600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4596-L4600) · [Before (L4631-L4646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4631-L4646)

```diff
-                 return Lu(ub[Gu[0]] = Gu[3], ub[Gu[3]] = []), (ub[Gu[1]] === Gu[3] || ub[Gu[1]] >= Gu[10]) && bb[Gu[3]](ub[Gu[3]], [], ub[Gu[1]], Gu[1]), ub[Gu[3]]
-               }, bb[Gu[3]] = function(...ub) {
-                 for (ub[Gu[0]] = Gu[10], ub[Gu[2]] = ub[Gu[5]]; ub[Gu[2]] < ub[Gu[4]]; ub[Gu[2]]++) {
-                   if (ub[Gu[3]].length !== ub[Gu[2]]) return;
-                   for (ub[Gu[14]] = Gu[1]; ub[Gu[14]] < ub[Gu[4]]; ub[Gu[14]]++) bb[Gu[4]](ub[Gu[3]], [ub[Gu[2]], ub[Gu[14]]]) && (Lu(ub[Gu[3]].push([ub[Gu[2]], ub[Gu[14]]]), bb[Gu[3]](ub[Gu[1]], ub[Gu[3]], ub[Gu[4]], ub[Gu[2]] + Gu[3])), ub[Gu[3]].length === ub[Gu[4]] && ub[Gu[1 … [truncated]
-                 }
-               }, bb[Gu[5]] = function(...bb) {
-                 for (Lu(bb[Gu[0]] = Gu[3], bb[-Gu[15]] = [], bb[Gu[4]] = bb[Gu[1]].length), bb[Gu[5]] = Gu[1]; bb[Gu[5]] < bb[Gu[4]]; bb[Gu[5]]++)
-                   for (bb[-Gu[15]][bb[Gu[5]]] = "", bb[Gu[16]] = Gu[1]; bb[Gu[16]] < bb[Gu[4]]; bb[Gu[16]]++) bb[-Gu[15]][bb[Gu[5]]] += bb[Gu[1]][bb[Gu[5]]][Gu[3]] === bb[Gu[16]] ? "Q" : ".";
-                 return bb[-Gu[15]]
-               }, bb[Gu[4]] = function(...bb) {
-                 for (Lu(bb[Gu[0]] = Gu[4], bb[Gu[2]] = bb[Gu[1]].length), bb[Gu[17]] = Gu[1]; bb[Gu[17]] < bb[Gu[2]]; bb[Gu[17]]++) {
-                   if (bb[Gu[1]][bb[Gu[17]]][Gu[1]] === bb[Gu[3]][Gu[1]] || bb[Gu[1]][bb[Gu[17]]][Gu[3]] === bb[Gu[3]][Gu[3]]) return Gu[18];
-                   if (Math.abs((bb[Gu[1]][bb[Gu[17]]][Gu[1]] - bb[Gu[3]][Gu[1]]) / (bb[Gu[1]][bb[Gu[17]]][Gu[3]] - bb[Gu[3]][Gu[3]])) === Gu[3]) return Gu[18]
-                 }
-                 return Gu[19]
+                 if (gJ(dd[PJ[0]] = PJ[5], dd[PJ[14]] = dd[PJ[1]].length), dd[PJ[14]] < PJ[4]) return PJ[1];
+                 if (gJ(dd[PJ[4]] = Math.max(...dd[PJ[1]]), dd[PJ[15]] = Math.min(...dd[PJ[1]])), dd[PJ[4]] === dd[PJ[15]]) return PJ[1];
+                 for (gJ(dd[PJ[2]] = Array(dd[PJ[14]] - PJ[5]).fill(Number.MAX_SAFE_INTEGER), dd[PJ[19]] = Array(dd[PJ[14]] - PJ[5]).fill(Number.MIN_SAFE_INTEGER), dd[PJ[18]] = Math.ceil((dd[PJ[4]] - dd[PJ[15]]) / (dd[PJ[14]] - PJ[5])), dd[PJ[17]] = PJ[1]), dd[PJ[16]] = PJ[1]; dd[ … [truncated]
+                 for (gJ(dd[PJ[21]] = Number.MIN_SAFE_INTEGER, dd[PJ[22]] = dd[PJ[15]]), dd[-PJ[20]] = PJ[1]; dd[-PJ[20]] < dd[PJ[14]] - PJ[5]; dd[-PJ[20]]++) dd[PJ[2]][dd[-PJ[20]]] === Number.MAX_SAFE_INTEGER && dd[PJ[19]][dd[-PJ[20]]] === Number.MIN_SAFE_INTEGER || gJ(dd[PJ[21]] … [truncated]
+                 return dd[PJ[21]] = Math.max(dd[PJ[21]], dd[PJ[4]] - dd[PJ[22]]), dd[PJ[21]]
```

#### 639. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4649` → after: `L4603-L4612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4603-L4612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4603-L4612) · [Before (L4649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4649)

```diff
-             if ("PNJrot" in Uu && Bb(), bb[-Gu[20]]++ === Gu[10]) {
+             if ("bMP2bL" in ZJ && Nd(), dd[PJ[23]]++ === PJ[24]) {
+               function Wd(...dd) {
+                 gJ(dd[PJ[0]] = PJ[1], dd[PJ[25]] = function(...dd) {
+                   for (gJ(dd[PJ[0]] = PJ[5], dd[PJ[14]] = dd[PJ[1]].length, dd[PJ[4]] = [], dd[PJ[15]] = PJ[1]), dd[PJ[24]] = PJ[1]; dd[PJ[24]] < dd[PJ[14]]; dd[PJ[24]]++) dd[PJ[4]].push(dd[PJ[24]] !== PJ[1] && dd[PJ[1]][dd[PJ[24]]] > dd[PJ[1]][dd[PJ[24]] - PJ[5]] ? dd[PJ[4]][dd[ … [truncated]
+                   for (dd[PJ[19]] = dd[PJ[14]] - PJ[5]; dd[PJ[19]] >= PJ[1]; dd[PJ[19]]--) dd[PJ[19]] !== dd[PJ[14]] - PJ[5] && dd[PJ[1]][dd[PJ[19]]] > dd[PJ[1]][dd[PJ[19]] + PJ[5]] && (dd[PJ[4]][dd[PJ[19]]] = Math.max(dd[PJ[4]][dd[PJ[19]]], dd[PJ[4]][dd[PJ[19]] + PJ[5]] + PJ[5]) … [truncated]
+                   return dd[PJ[15]]
+                 }, console.log(dd[PJ[25]]))
+               }
+               "TMrR6e" in ZJ && Wd(), gJ(dd[PJ[23]] = PJ[1], Jd[PJ[11]] = Jd[PJ[11]] | PJ[4])
+             } else {
```

#### 640. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4653-L4658` → after: `L4616-L4617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4616-L4617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4616-L4617) · [Before (L4653-L4658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4653-L4658)

```diff
-               "P_PXfD" in Uu && Ob(), Lu(bb[-Gu[20]] = Gu[1], ub[Gu[8]] = ub[Gu[8]] | Gu[4])
-             } else ub[Gu[8]] = ub[Gu[8]] | Gu[5]
-           }
-         } else {
-           function Gb(...bb) {
-             bb[Gu[0]] = Gu[1]
+               "dkyRNzr" in ZJ && Pd(), Jd[PJ[11]] = Jd[PJ[11]] | PJ[7]
+             }
```

#### 641. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4660-L4662` → after: `L4619-L4620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4619-L4620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4619-L4620) · [Before (L4660-L4662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4660-L4662)

```diff
-           "tNEaDvm" in Uu && Gb(), ub[Gu[8]] = ub[Gu[8]] | Gu[3]
-         }
-         return ub[Gu[8]]
+         } else Jd[PJ[11]] = Jd[PJ[11]] | PJ[5];
+         return Jd[PJ[11]]
```

#### 642. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4666` → after: `L4624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4624) · [Before (L4666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4666)

```diff
-   37619: (bb, ub, hb) => {
+   38215: (dd, Jd, kd) => {
```

#### 643. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4674` → after: `L4632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4632) · [Before (L4674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4674)

```diff
-   37610: (bb, ub, hb) => {
+   38211: (dd, Jd, kd) => {
```

#### 644. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4676` → after: `L4634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4634) · [Before (L4676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4676)

```diff
-       c: () => Kb
+       d: () => Gd
```

#### 645. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4678` → after: `L4636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4636) · [Before (L4678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4678)

```diff
-     var Bb = hb(324),
+     var pd = kd(325),
```

#### 646. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4680-L4690` → after: `L4638-L4648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4638-L4648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4638-L4648) · [Before (L4680-L4690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4680-L4690)

```diff
-       Gb = hb(37619),
-       Ub = hb(2560),
-       Lb = hb(3463),
-       Yb = hb(37027),
-       Sb = hb(3516),
-       ab = hb(191),
-       Hb = hb(36889),
-       wb = hb(36720),
-       Zb = hb(36883),
-       Xb = hb(37623),
-       pb = hb(37501);
+       Wd = kd(38215),
+       Pd = kd(2634),
+       Zd = kd(3566),
+       gd = kd(37588),
+       Cd = kd(3624),
+       Kd = kd(193),
+       od = kd(37438),
+       ld = kd(37245),
+       Qd = kd(37431),
+       Ld = kd(38218),
+       Od = kd(38097);
```

#### 647. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4696` → after: `L4654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4654) · [Before (L4696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4696)

```diff
-         this.PH = void 0, this._playerEId = void 0, this.entityRayStart = [0, 0, 0], this.entityRayOrigin = new wb.YX, this.entityRayDirection = new wb.YX, this.entityRay = new Zb.c(this.entityRayOrigin, this.entityRayDirection), this.entityHitEId = null, this.PH = bb, this._play … [truncated]
+         this.Jl = void 0, this._playerEId = void 0, this.entityRayStart = [0, 0, 0], this.entityRayOrigin = new ld.IL, this.entityRayDirection = new ld.IL, this.entityRay = new Qd.g(this.entityRayOrigin, this.entityRayDirection), this.entityHitEId = null, this.Jl = dd, this._play … [truncated]
```

#### 648. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4700-L4701` → after: `L4658-L4659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4658-L4659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4658-L4659) · [Before (L4700-L4701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4700-L4701)

```diff
-         const hb = this.doPickAction(null !== (ub = this.PH.Pbb) && void 0 !== ub ? ub : this.PH.camera.Zk(), bb);
-         return this._attackWasBlocked(hb) && hb.localHitPosition && hb.qI ? {
+         const kd = this.doPickAction(null !== (Jd = this.Jl.WJd) && void 0 !== Jd ? Jd : this.Jl.camera.UH(), dd);
+         return this._attackWasBlocked(kd) && kd.localHitPosition && kd.PD ? {
```

#### 649. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4703` → after: `L4661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4661) · [Before (L4703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4703)

```diff
-           normal: hb.qI
+           normal: kd.PD
```

#### 650. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4708-L4709` → after: `L4666-L4667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4666-L4667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4666-L4667) · [Before (L4708-L4709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4708-L4709)

```diff
-         const Bb = (0, Ub.e)(),
-           Gb = Bb.oub(Bb.getLifeformEyePos(this._playerEId, !1)),
+         const pd = (0, Pd.d)(),
+           Wd = pd.FJd(pd.getLifeformEyePos(this._playerEId, !1)),
```

#### 651. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4713` → after: `L4671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4671) · [Before (L4713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4713)

```diff
-           const hb = this._tryDoPick(Yb, bb, ub, Lb ? ob : null),
+           const kd = this._tryDoPick(gd, dd, Jd, Zd ? ed : null),
```

#### 652. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4716` → after: `L4674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4674) · [Before (L4716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4716)

```diff
-           hb.localHitPosition ? Ub = hb.localHitPosition : (Ob().normalize(bb, bb), Ub = Ob().create(), Ob().bu(Ub, Yb, bb, 1e3)), Ob().subtract(Bb, Ub, Gb), Ob().normalize(Bb, Bb);
+           kd.localHitPosition ? Pd = kd.localHitPosition : (Nd().normalize(dd, dd), Pd = Nd().create(), Nd().pk(Pd, gd, dd, 1e3)), Nd().subtract(pd, Pd, Wd), Nd().normalize(pd, pd);
```

#### 653. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4718` → after: `L4676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4676) · [Before (L4718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4718)

```diff
-             ...this._tryDoPick(Gb, Bb, ub, Lb ? Ab : null),
+             ...this._tryDoPick(Wd, pd, Jd, Zd ? Rd : null),
```

#### 654. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4722` → after: `L4680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4680) · [Before (L4722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4722)

```diff
-         return this._tryDoPick(Gb, bb, ub, Lb ? Ab : null)
+         return this._tryDoPick(Wd, dd, Jd, Zd ? Rd : null)
```

#### 655. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4725-L4726` → after: `L4683-L4684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4683-L4684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4683-L4684) · [Before (L4725-L4726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4725-L4726)

```diff
-         const hb = (0, Ub.e)(),
-           Bb = hb.oub(hb.getLifeformEyePos(this._playerEId, !1)),
+         const kd = (0, Pd.d)(),
+           pd = kd.FJd(kd.getLifeformEyePos(this._playerEId, !1)),
```

#### 656. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4728-L4729` → after: `L4686-L4687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4686-L4687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4686-L4687) · [Before (L4728-L4729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4728-L4729)

```diff
-           Yb = null !== Lb && void 0 !== Lb ? Lb : Bb,
-           Sb = this._tryDoPick(Yb, bb, ub + (Lb ? Ob().GU(Lb, Bb) : 0));
+           gd = null !== Zd && void 0 !== Zd ? Zd : pd,
+           Cd = this._tryDoPick(gd, dd, Jd + (Zd ? Nd().gP(Zd, pd) : 0));
```

#### 657. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4731` → after: `L4689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4689) · [Before (L4731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4731)

```diff
-         const ab = Ob().GU(Sb.localHitPosition, Bb);
+         const Kd = Nd().gP(Cd.localHitPosition, pd);
```

#### 658. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4739-L4741` → after: `L4697-L4699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4697-L4699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4697-L4699) · [Before (L4739-L4741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4739-L4741)

```diff
-         if (this._playerEId !== this.PH.bM || 0 === this.PH.camera.mV) return null;
-         const hb = null !== (bb = null === (ub = this.PH.xX.Ihb()) || void 0 === ub ? void 0 : ub.eye) && void 0 !== bb ? bb : this.PH.xX.camera.globalPosition.ZBb();
-         return Ob().wb(hb[0], hb[1], hb[2])
+         if (this._playerEId !== this.Jl.kU || 0 === this.Jl.camera.fV) return null;
+         const kd = null !== (dd = null === (Jd = this.Jl.UL.zkd()) || void 0 === Jd ? void 0 : Jd.eye) && void 0 !== dd ? dd : this.Jl.UL.camera.globalPosition.spd();
+         return Nd().gd(kd[0], kd[1], kd[2])
```

#### 659. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4752` → after: `L4710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4710) · [Before (L4752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4752)

```diff
-               ...this._tryDoPick(bb.localOrigin, ub, hb, !0 === Bb.visualiseRaycasts ? Ab : null), localRayOrigin: bb.localOrigin, globalRayOrigin: bb.globalOrigin
+               ...this._tryDoPick(dd.localOrigin, Jd, kd, !0 === pd.visualiseRaycasts ? Rd : null), localRayOrigin: dd.localOrigin, globalRayOrigin: dd.globalOrigin
```

#### 660. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4757-L4760` → after: `L4715-L4718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4715-L4718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4715-L4718) · [Before (L4757-L4760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4757-L4760)

```diff
-         if (this._playerEId === this.PH.bM && this.PH.camera.sV < .01) return this.getDefaultWeaponRay();
-         if (!this.PH.pW.VUb(this._playerEId)) return null;
-         const bb = this.PH.pW.lub(this._playerEId),
-           ub = null === bb || void 0 === bb ? void 0 : bb.lN;
+         if (this._playerEId === this.Jl.kU && this.Jl.camera.XV < .01) return this.getDefaultWeaponRay();
+         if (!this.Jl.vG.NZd(this._playerEId)) return null;
+         const dd = this.Jl.vG.mJd(this._playerEId),
+           Jd = null === dd || void 0 === dd ? void 0 : dd.Rm;
```

#### 661. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4762` → after: `L4720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4720) · [Before (L4762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4762)

```diff
-         const hb = this.PH.xX.oN;
+         const kd = this.Jl.UL.Qm;
```

#### 662. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4768` → after: `L4726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4726) · [Before (L4768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4768)

```diff
-           Lb = wb.YX.TransformNormal(new wb.YX(0, 0, 1), Gb);
+           Zd = ld.IL.TransformNormal(new ld.IL(0, 0, 1), Wd);
```

#### 663. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4773` → after: `L4731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4731) · [Before (L4773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4773)

```diff
-         return this.PH.kF(Yb, Sb), {
+         return this.Jl.YH(gd, Cd), {
```

#### 664. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4784` → after: `L4742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4742) · [Before (L4784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4784)

```diff
-             return null !== (ub = this.getHeadRay()) && void 0 !== ub ? ub : this.getDefaultWeaponRay();
+             return null !== (Jd = this.getHeadRay()) && void 0 !== Jd ? Jd : this.getDefaultWeaponRay();
```

#### 665. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4790` → after: `L4748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4748) · [Before (L4790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4790)

```diff
-         const bb = (0, Ub.e)(),
+         const dd = (0, Pd.d)(),
```

#### 666. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4793` → after: `L4751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4751) · [Before (L4793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4793)

```diff
-           localOrigin: bb.oub(ub),
+           localOrigin: dd.FJd(Jd),
```

#### 667. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4795` → after: `L4753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4753) · [Before (L4795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4795)

```diff
-           direction: Yb.c.copyAimDirection(this.PH, [0, 0, 0]),
+           direction: gd.c.copyAimDirection(this.Jl, [0, 0, 0]),
```

#### 668. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4805` → after: `L4763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4763) · [Before (L4805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4805)

```diff
-           qI: Ub,
+           PD: Pd,
```

#### 669. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4807-L4808` → after: `L4765-L4766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4765-L4766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4765-L4766) · [Before (L4807-L4808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4807-L4808)

```diff
-         } = this.doPickAction(bb, ab.e.entityInteractReach);
-         return ub === Gb.c.HIT_ENTITY ? hb : null
+         } = this.doPickAction(dd, Kd.g.entityInteractReach);
+         return Jd === Wd.c.HIT_ENTITY ? kd : null
```

#### 670. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4812-L4813` → after: `L4770-L4771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4770-L4771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4770-L4771) · [Before (L4812-L4813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4812-L4813)

```diff
-         const Gb = null !== (Bb = null === (Ob = this.PH.pW.nub(this._playerEId)) || void 0 === Ob ? void 0 : Ob.ridingVehicleEId) && void 0 !== Bb ? Bb : null,
-           Ub = this.PH.oub(bb, null, this.entityRayStart);
+         const Wd = null !== (pd = null === (Nd = this.Jl.vG.nJd(this._playerEId)) || void 0 === Nd ? void 0 : Nd.ridingVehicleEId) && void 0 !== pd ? pd : null,
+           Pd = this.Jl.FJd(dd, null, this.entityRayStart);
```

#### 671. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4834` → after: `L4792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4792) · [Before (L4834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4834)

```diff
-         const Ob = (0, Xb.e)(this.PH.xX, this.entityRay),
+         const Nd = (0, Ld.b)(this.Jl.UL, this.entityRay),
```

#### 672. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4836` → after: `L4794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4794) · [Before (L4836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4836)

```diff
-           Ub = this.PH.xX.oN.xw(this.entityRayOrigin, this.entityRayDirection, null !== Gb && void 0 !== Gb ? Gb : bb);
+           Pd = this.Jl.UL.Qm.Tl(this.entityRayOrigin, this.entityRayDirection, null !== Wd && void 0 !== Wd ? Wd : dd);
```

#### 673. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4838` → after: `L4796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4796) · [Before (L4838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4838)

```diff
-         const Lb = null !== (ub = null === Ob || void 0 === Ob || null === (hb = Ob.pickedMesh) || void 0 === hb || null === (Bb = hb.metadata) || void 0 === Bb ? void 0 : Bb.eId) && void 0 !== ub ? ub : null;
+         const Zd = null !== (Jd = null === Nd || void 0 === Nd || null === (kd = Nd.pickedMesh) || void 0 === kd || null === (pd = kd.metadata) || void 0 === pd ? void 0 : pd.eId) && void 0 !== Jd ? Jd : null;
```

#### 674. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4857-L4858` → after: `L4815-L4816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4815-L4816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4815-L4816) · [Before (L4857-L4858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4857-L4858)

```diff
-         const hb = null !== (bb = null === (ub = this.PH.pW.lub(this._playerEId)) || void 0 === ub ? void 0 : ub.lN) && void 0 !== bb ? bb : null,
-           Bb = this.PH.xX.oN;
+         const kd = null !== (dd = null === (Jd = this.Jl.vG.mJd(this._playerEId)) || void 0 === Jd ? void 0 : Jd.Rm) && void 0 !== dd ? dd : null,
+           pd = this.Jl.UL.Qm;
```

#### 675. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4862` → after: `L4820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4820) · [Before (L4862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4862)

```diff
-         null !== bb && this.PH.xX.oN.setPickable(bb, !0)
+         null !== dd && this.Jl.UL.Qm.setPickable(dd, !0)
```

#### 676. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4866` → after: `L4824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4824) · [Before (L4866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4866)

```diff
-           Ub = Bb ? Ob().GU(bb, Bb.Rbb) : hb,
+           Pd = pd ? Nd().gP(dd, pd.OJd) : kd,
```

#### 677. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4872` → after: `L4830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4830) · [Before (L4872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4872)

```diff
-           ab = null !== Yb ? Ob().wb(Lb.pickedPoint.x, Lb.pickedPoint.y, Lb.pickedPoint.z) : null,
+           Kd = null !== gd ? Nd().gd(Zd.pickedPoint.x, Zd.pickedPoint.y, Zd.pickedPoint.z) : null,
```

#### 678. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4874` → after: `L4832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4832) · [Before (L4874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4874)

```diff
-         null !== ab && Sb.PH.kF(ab, Hb);
+         null !== Kd && Cd.Jl.YH(Kd, od);
```

#### 679. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4877` → after: `L4835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4835) · [Before (L4877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4877)

```diff
-           const bb = Ob().wb(Lb.pickedPoint.x, Lb.pickedPoint.y, Lb.pickedPoint.z),
+           const dd = Nd().gd(Zd.pickedPoint.x, Zd.pickedPoint.y, Zd.pickedPoint.z),
```

#### 680. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4879` → after: `L4837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4837) · [Before (L4879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4879)

```diff
-           Sb.PH.kF(bb, hb);
+           Cd.Jl.YH(dd, kd);
```

#### 681. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4886` → after: `L4844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4844) · [Before (L4886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4886)

```diff
-             qI: Bb,
+             PD: pd,
```

#### 682. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4892` → after: `L4850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4850) · [Before (L4892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4892)

```diff
-           Ob().copy(ub, Bb.Rbb);
+           Nd().copy(Jd, pd.OJd);
```

#### 683. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4898` → after: `L4856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4856) · [Before (L4898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4898)

```diff
-             distanceTravelled: Ob().GU(bb, Bb.Rbb),
+             distanceTravelled: Nd().gP(dd, pd.OJd),
```

#### 684. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4901` → after: `L4859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4859) · [Before (L4901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4901)

```diff
-             qI: Ub,
+             PD: Pd,
```

#### 685. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4910` → after: `L4868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4868) · [Before (L4910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4910)

```diff
-           qI: null,
+           PD: null,
```

#### 686. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4917-L4922` → after: `L4875-L4880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4875-L4880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4875-L4880) · [Before (L4917-L4922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4917-L4922)

```diff
-         const Lb = new wb.YX(bb[0], bb[1], bb[2]),
-           Yb = new wb.YX(ub[0], ub[1], ub[2]),
-           Sb = new Zb.c(Lb, Yb, hb),
-           ab = (0, Xb.e)(this.PH.xX, Sb),
-           Hb = null !== (Bb = null === (Ob = ab.pickedMesh) || void 0 === Ob || null === (Gb = Ob.metadata) || void 0 === Gb ? void 0 : Gb.eId) && void 0 !== Bb ? Bb : null,
-           pb = this.PH.xX.oN.xw(Lb, Yb, null !== (Ub = null !== ab && void 0 !== ab && ab.hit ? ab.distance : null) && void 0 !== Ub ? Ub : hb);
+         const Zd = new ld.IL(dd[0], dd[1], dd[2]),
+           gd = new ld.IL(Jd[0], Jd[1], Jd[2]),
+           Cd = new Qd.g(Zd, gd, kd),
+           Kd = (0, Ld.b)(this.Jl.UL, Cd),
+           od = null !== (pd = null === (Nd = Kd.pickedMesh) || void 0 === Nd || null === (Wd = Nd.metadata) || void 0 === Wd ? void 0 : Wd.eId) && void 0 !== pd ? pd : null,
+           Od = this.Jl.UL.Qm.Tl(Zd, gd, null !== (Pd = null !== Kd && void 0 !== Kd && Kd.hit ? Kd.distance : null) && void 0 !== Pd ? Pd : kd);
```

#### 687. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4929-L4930` → after: `L4887-L4888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4887-L4888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4887-L4888) · [Before (L4929-L4930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4929-L4930)

```diff
-         const Bb = this.PH.eH;
-         return this.PH.Fq(bb, ub, hb, ((bb, ub, hb, Ob) => Bb.bV(ub, hb, Ob)))
+         const pd = this.Jl.Vo;
+         return this.Jl.eT(dd, Jd, kd, ((dd, Jd, kd, Nd) => pd.Xu(Jd, kd, Nd)))
```

#### 688. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4937-L4938` → after: `L4895-L4896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4895-L4896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4895-L4896) · [Before (L4937-L4938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4937-L4938)

```diff
-         const Ob = new wb.YX(bb[0], bb[1], bb[2]),
-           Gb = new wb.YX(ub[0], ub[1], ub[2]);
+         const Nd = new ld.IL(dd[0], dd[1], dd[2]),
+           Wd = new ld.IL(Jd[0], Jd[1], Jd[2]);
```

#### 689. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4942-L4943` → after: `L4900-L4901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4900-L4901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4900-L4901) · [Before (L4942-L4943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4942-L4943)

```diff
-           Lb = (0, pb.i)(this.PH.xX, "gunRaycastTrace_" + lb++, {
-             positions: [...Ob.ZBb(), ...Ub.ZBb()],
+           Zd = (0, Od.m)(this.Jl.UL, "gunRaycastTrace_" + Id++, {
+             positions: [...Nd.spd(), ...Pd.spd()],
```

#### 690. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4946-L4947` → after: `L4904-L4905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4904-L4905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4904-L4905) · [Before (L4946-L4947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4946-L4947)

```diff
-         Lb.color = Bb, Lb.LX = !0, Lb.lp = !1, this.PH.xX.Wp(Lb, !1, this.PH.Ow), setTimeout((() => {
-           Lb.tC() || Lb.dispose()
+         Zd.color = pd, Zd.RL = !0, Zd.iO = !1, this.Jl.UL.MO(Zd, !1, this.Jl.Rl), setTimeout((() => {
+           Zd.lq() || Zd.dispose()
```

#### 691. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4952` → after: `L4910-L4929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4910-L4929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4910-L4929) · [Before (L4952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4952)

```diff
-     const gb = [1, 238, 0, "h", "c", 239, "g", 5, 218, "d", 8, 255, "length", "b", 3, "a", "e", "undefined", void 0, 63, 6, "fromCodePoint", 7, 12, "push", 27, 4, 51, null, 130, 10, 232, 2, 91, 59, 8191, 88, 13, 14, 187, 195, !0, 136, 87, 231, 113, "f", !1, 127, 128, 41, 171, 9,  … [truncated]
+     const md = ["b", 0, 1, 38, 3, "a", "i", 20, 5, 6, "d", 8, 255, "length", 2, 152, "e", "undefined", void 0, "c", 213, 163, 63, "fromCodePoint", 7, 12, "push", 212, 91, 117, 121, 69, "f", 8191, 88, 13, 14, 37, 168, 138, 167, 16, 51, 127, 512, 18, "g", 4, 128, 174, 90, 15, 119,  … [truncated]
+ 
+     function bd(...dd) {
+       return dd[md[13]] = md[2], typeof vd[dd[md[1]]] === md[17] ? vd[dd[md[1]]] = function(...dd) {
+         for (fd(dd[md[13]] = md[2], dd[md[5]] = 'ubGkHQjTBCRWEc=1_M8[)$|@>42?<zipqVDJf*I53Pv{`0}dXL]/,^s(eSK&Nt+A7%"a;UYrOg:Z~mywh!.#9lxn6oF', dd[md[0]] = "" + (dd[md[1]] || ""), dd[md[4]] = dd[md[0]].length, dd[md[10]] = [], dd[md[8]] = md[1], dd[md[9]] = md[1], dd[-md[7]] = -md … [truncated]
+           if (dd[md[6]] = dd[md[5]].indexOf(dd[md[0]][dd[md[3]]]), dd[md[6]] !== -md[2])
+             if (dd[-md[7]] < md[1]) dd[-md[7]] = dd[md[6]];
+             else {
+               fd(dd[-md[7]] += dd[md[6]] * md[28], dd[md[8]] |= dd[-md[7]] << dd[md[9]], dd[md[9]] += (dd[-md[7]] & md[33]) > md[34] ? md[35] : md[36]);
+               do {
+                 fd(dd[md[10]].push(dd[md[8]] & md[12]), dd[md[8]] >>= md[11], dd[md[9]] -= md[11])
+               } while (dd[md[9]] > md[24]);
+               dd[-md[7]] = -md[2]
+             } return dd[-md[7]] > -md[2] && dd[md[10]].push((dd[md[8]] | dd[-md[7]] << dd[md[9]]) & md[12]), Sd(dd[md[10]])
+       }(xd[dd[md[1]]]) : vd[dd[md[1]]]
+     }
+ ... (4 more added lines; see GitHub link above)
```

#### 692. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4955` → after: `L4932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4932) · [Before (L4955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4955)

```diff
-       return bb[gb[12]] = gb[0], typeof rb !== gb[17] && rb ? (new rb).decode(new jb(bb[gb[2]])) : typeof nb !== gb[17] && nb ? nb.from(bb[gb[2]]).toString("utf-8") : zb(bb[gb[2]])
+       if (dd[md[13]] = md[4], dd[md[1]] === bd(md[30])) return dd[md[2]] + dd[md[14]]
```

#### 693. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L4963-L5015` → after: `L4940-L4991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4940-L4991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4940-L4991) · [Before (L4963-L5015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L4963-L5015)

```diff
-     tb(Wb = {}, Cb = ["$<6(QEku`%;{dl]j3e_uM`g*>F7b_n#{i_HuscsOAaUdRng_6RNe$.xQ6", "P_0!2/B*y^cbtZF]vrG2i_G]>FM)AUCakoBc[gl&AFTZnY+@3wn(G$^%6", "S`(E9_l%mfqG4dRPep", "N{.cGA/lFHDu?hhU!Bw}B)W]wHI!1d9tkGD{DCQ]f]", '"y!epJerdj0fyYr9iMPE3N7i?a7$_[PYd+', "{xW`rRVMA`Fr9I~8zMT.0;H&3*]ZC … [truncated]
-         tb(bb[gb[12]] = gb[2], bb[gb[15]] = [function() {
-           return globalThis
-         }, function() {
-           return global
-         }, function() {
-           return window
-         }, function() {
-           return new Function("return this")()
-         }], bb[gb[13]] = gb[18], bb[gb[4]] = []);
-         try {
-           tb(bb[gb[13]] = Object, bb[gb[4]][gb[24]]("".__proto__.constructor.name))
-         } catch (Cb) {}
-         bb: for (bb[gb[14]] = gb[2]; bb[gb[14]] < bb[gb[15]][gb[12]]; bb[gb[14]]++) try {
-           for (bb[gb[13]] = bb[gb[15]][bb[gb[14]]](), bb[gb[16]] = gb[2]; bb[gb[16]] < bb[gb[4]][gb[12]]; bb[gb[16]]++)
-             if (typeof bb[gb[13]][bb[gb[4]][bb[gb[16]]]] === gb[17]) continue bb;
- ... (37 more removed lines; see GitHub link above)
+     fd(vd = {}, xd = ["*:Rq^mK>1N%e=!P4@/oB9rbZsKoz:4Az_rN(Q!Hvd$D%/=4<l06j", "hWj~E:dT;S94bNw?(%0T|rjK}8", 'P3HRtNYKc+"gxYE5cHU]V&9h^c3<DLZ5.j)RS}AUqN]', "0;e/nI|fw^AWQ_fIFu", "g%)(HxJ[][$~Tk(3is7sw]jBdADUG]/?&rm].0{A2=*gI4R)jHk", "0/3sR!~}4=*TgXf8?;GQ", "{S>Z<rh}+&Gd~?4JR;QTE:+ … [truncated]
+       fd(dd[md[13]] = md[1], dd[-md[15]] = [function() {
+         return globalThis
+       }, function() {
+         return global
+       }, function() {
+         return window
+       }, function() {
+         return new Function("return this")()
+       }], dd[md[0]] = md[18], dd[md[14]] = []);
+       try {
+         fd(dd[md[0]] = Object, dd[md[14]][md[26]]("".__proto__.constructor.name))
+       } catch (xd) {}
+       dd: for (dd[md[10]] = md[1]; dd[md[10]] < dd[-md[15]][md[13]]; dd[md[10]]++) try {
+         for (dd[md[0]] = dd[-md[15]][dd[md[10]]](), dd[md[16]] = md[1]; dd[md[16]] < dd[md[14]][md[13]]; dd[md[16]]++)
+           if (typeof dd[md[0]][dd[md[14]][dd[md[16]]]] === md[17]) continue dd;
+ ... (36 more added lines; see GitHub link above)
```

#### 694. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5017` → after: `L4993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4993) · [Before (L5017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5017)

```diff
-                   tb(Ub += Yb * gb[33], Ob |= Ub << Gb, Gb += (Ub & gb[35]) > gb[36] ? gb[37] : gb[38]);
+                   fd(dd[md[24]] += dd[md[6]] * md[28], dd[md[16]] |= dd[md[24]] << dd[md[39]], dd[md[39]] += (dd[md[24]] & md[33]) > md[34] ? md[35] : md[36]);
```

#### 695. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5019-L5024` → after: `L4995-L4998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R4995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L4995-L4998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L4995-L4998) · [Before (L5019-L5024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5019-L5024)

```diff
-                     tb(Bb.push(Ob & gb[11]), Ob >>= gb[10], Gb -= gb[10])
-                   } while (Gb > gb[22]);
-                   Ub = -gb[0]
-                 }
-             }
-             return Ub > -gb[0] && Bb.push((Ob | Ub << Gb) & gb[11]), ib(Bb)
+                     fd(dd[md[40]].push(dd[md[16]] & md[12]), dd[md[16]] >>= md[11], dd[md[39]] -= md[11])
+                   } while (dd[md[39]] > md[24]);
+                   dd[md[24]] = -md[2]
+                 } return dd[md[24]] > -md[2] && dd[md[40]].push((dd[md[16]] | dd[md[24]] << dd[md[39]]) & md[12]), Sd(dd[md[40]])
```

#### 696. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5028` → after: `L5002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R5002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L5002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L5002) · [Before (L5028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5028)

```diff
-             return ub[gb[12]] = gb[0], typeof Wb[ub[gb[2]]] === gb[17] ? Wb[ub[gb[2]]] = bb(Cb[ub[gb[2]]]) : Wb[ub[gb[2]]]
+             return dd[md[13]] = md[2], typeof vd[dd[md[1]]] === md[17] ? vd[dd[md[1]]] = Jd(xd[dd[md[1]]]) : vd[dd[md[1]]]
```

#### 697. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5031-L5074` → after: `L5011-L5022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R5011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L5011-L5022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L5011-L5022) · [Before (L5031-L5074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5031-L5074)

```diff
-           function hb() {
-             module.exports = async (bb = () => {
-               throw new Error(ub(124))
-             }) => {
-               const hb = new Set(process.argv.slice(gb[32]));
-               if (!hb.has(function(...bb) {
-                   return bb[gb[12]] = gb[0], typeof Wb[bb[gb[2]]] === gb[17] ? Wb[bb[gb[2]]] = function(...bb) {
-                     for (tb(bb[gb[12]] = gb[0], bb[gb[43]] = 'b/ojIKm3;P`[!)F0ife@^19+Z*8uTvNJErMk5Gp,D7CQ|B<{>HL=(V:RWn4XlgO2#?"w&AcaUyzdS$%q~s_6th]x.}Y', bb[-gb[42]] = "" + (bb[gb[2]] || ""), bb[gb[14]] = bb[-gb[42]].length, bb[gb[9]] = [], bb[gb[7]] = gb[2], bb[gb[46]] = gb[2] … [truncated]
-                       if (bb[gb[44]] = bb[gb[43]].indexOf(bb[-gb[42]][bb[gb[10]]]), bb[gb[44]] !== -gb[0])
-                         if (bb[-gb[45]] < gb[2]) bb[-gb[45]] = bb[gb[44]];
-                         else {
-                           tb(bb[-gb[45]] += bb[gb[44]] * gb[33], bb[gb[7]] |= bb[-gb[45]] << bb[gb[46]], bb[gb[46]] += (bb[-gb[45]] & gb[35]) > gb[36] ? gb[37] : gb[38]);
-                           do {
-                             tb(bb[gb[9]].push(bb[gb[7]] & gb[11]), bb[gb[7]] >>= gb[10], bb[gb[46]] -= gb[10])
-                           } while (bb[gb[46]] > gb[22]);
-                           bb[-gb[45]] = -gb[0]
- ... (28 more removed lines; see GitHub link above)
+         function Zd(...Jd) {
+           function kd(...dd) {
+             for (fd(dd[md[13]] = md[2], dd[md[5]] = '1PYtOAaz*?fMBV!HT<4ui>U7)n#L{_$kWRSg6/8v|`F3b9J~DcXywxdm(K,2E]}:.sCQrG0=I+phN@el;%j[oZ^"&5q', dd[md[0]] = "" + (dd[md[1]] || ""), dd[md[19]] = dd[md[0]].length, dd[md[47]] = [], dd[md[8]] = md[1], dd[md[32]] = md[1], dd[md[46]] … [truncated]
+               if (dd[-md[45]] = dd[md[5]].indexOf(dd[md[0]][dd[md[11]]]), dd[-md[45]] !== -md[2])
+                 if (dd[md[46]] < md[1]) dd[md[46]] = dd[-md[45]];
+                 else {
+                   fd(dd[md[46]] += dd[-md[45]] * md[28], dd[md[8]] |= dd[md[46]] << dd[md[32]], dd[md[32]] += (dd[md[46]] & md[33]) > md[34] ? md[35] : md[36]);
+                   do {
+                     fd(dd[md[47]].push(dd[md[8]] & md[12]), dd[md[8]] >>= md[11], dd[md[32]] -= md[11])
+                   } while (dd[md[32]] > md[24]);
+                   dd[md[46]] = -md[2]
+                 } return dd[md[46]] > -md[2] && dd[md[47]].push((dd[md[8]] | dd[md[46]] << dd[md[32]]) & md[12]), Sd(dd[md[47]])
```

#### 698. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5124-L5156` → after: `L5025-L5035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R5025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L5025-L5035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L5025-L5035) · [Before (L5124-L5156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5124-L5156)

```diff
-               function hb(...bb) {
-                 return bb[gb[12]] = gb[0], typeof Wb[bb[gb[2]]] === gb[17] ? Wb[bb[gb[2]]] = ub(Cb[bb[gb[2]]]) : Wb[bb[gb[2]]]
-               }
- 
-               function Ob(...bb) {
-                 tb(bb[gb[12]] = gb[2], bb[gb[65]] = function(...ub) {
-                   return ub[gb[12]] = gb[32], bb[gb[0]]({}, ub[gb[2]], ub[gb[0]])
-                 }, bb[gb[0]] = function(...ub) {
-                   if (tb(ub[gb[12]] = gb[14], ub[gb[64]] = {}), ub[gb[2]][ub[gb[0]] + ub[gb[32]]] !== gb[18]) return ub[gb[2]][ub[gb[0]] + ub[gb[32]]];
-                   if (ub[gb[0]] === ub[gb[32]]) return gb[41];
-                   for (ub[gb[13]] = gb[2]; ub[gb[13]] < ub[gb[0]].length; ub[gb[13]]++) ub[gb[64]][ub[gb[0]][ub[gb[13]]]] === gb[18] && (ub[gb[64]][ub[gb[0]][ub[gb[13]]]] = gb[2]), ub[gb[64]][ub[gb[32]][ub[gb[13]]]] === gb[18] && (ub[gb[64]][ub[gb[32]][ub[gb[13]]]] = gb[2]), tb(u … [truncated]
-                   for (ub[gb[4]] in ub[gb[64]])
-                     if (ub[gb[64]][ub[gb[4]]] !== gb[2]) return ub[gb[2]][ub[gb[0]] + ub[gb[32]]] = gb[47], gb[47];
-                   for (ub[gb[20]] = gb[0]; ub[gb[20]] < ub[gb[0]].length; ub[gb[20]]++)
-                     if (bb[gb[0]](ub[gb[2]], ub[gb[0]].substr(gb[2], ub[gb[20]]), ub[gb[32]].substr(gb[2], ub[gb[20]])) && bb[gb[0]](ub[gb[2]], ub[gb[0]].substr(ub[gb[20]]), ub[gb[32]].substr(ub[gb[20]])) || bb[gb[0]](ub[gb[2]], ub[gb[0]].substr(gb[2], ub[gb[20]]), ub[gb[32]].sub … [truncated]
-                   return ub[gb[2]][ub[gb[0]] + ub[gb[32]]] = gb[47], gb[47]
- ... (17 more removed lines; see GitHub link above)
+           function pd(...dd) {
+             return dd[md[13]] = md[2], typeof vd[dd[md[1]]] === md[17] ? vd[dd[md[1]]] = kd(xd[dd[md[1]]]) : vd[dd[md[1]]]
+           }
+           Jd[md[13]] = md[2];
+           try {
+             dd[md[5]]
+           } catch (Nd) {
+             dd[md[5]] = md[1]
+           }
+           for (fd(Jd[md[2]] = dd[md[5]] ? pd(md[48]) + pd(md[203]) + pd(md[65]) : pd(md[48]) + pd(md[76]) + pd(132), Jd[md[50]] = "", Jd[md[49]] = md[18]), Jd[md[47]] = md[1]; Jd[md[47]] < Jd[md[1]].length; Jd[md[47]]++) fd(Jd[md[49]] = Jd[md[1]].charCodeAt(Jd[md[47]]), Jd[md[50] … [truncated]
+           return Jd[md[50]]
```

#### 699. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5158-L5159` → after: `L5037-L5038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R5037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L5037-L5038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L5037-L5038) · [Before (L5158-L5159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5158-L5159)

```diff
-       })(), (() => {
-         if (gb[41]) {
+ 
+         function gd(...Jd) {
```

#### 700. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5161-L5163` → after: `L5040-L5042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R5040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L5040-L5042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L5040-L5042) · [Before (L5161-L5163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5161-L5163)

```diff
-             for (tb(bb[gb[12]] = gb[0], bb[gb[0]] = 'jn5KW/lDIH{^_UC2uJ1RT&$Zp:eh3sVg#z|,F.b)%;ro4QBL>vMPwXO}Y(Am!Na?x~"iSE[d9c+fkytG]*60=@`87q<', bb[-gb[30]] = "" + (bb[gb[2]] || ""), bb[gb[31]] = bb[-gb[30]].length, bb[gb[67]] = [], bb[gb[66]] = gb[2], bb[gb[46]] = gb[2], bb[gb … [truncated]
-               if (bb[gb[52]] = bb[gb[0]].indexOf(bb[-gb[30]][bb[gb[50]]]), bb[gb[52]] !== -gb[0])
-                 if (bb[gb[6]] < gb[2]) bb[gb[6]] = bb[gb[52]];
+             for (fd(dd[md[13]] = md[2], dd[md[5]] = ';LWsNrtQJ~Tan/[pViS:e4j}A=<`_g7^B]1u9$O0XmPZ,IcCDv.dRHlwGx(2"bEz{|#3oyYk8!5>KU)+M%?@F*6fqh&', dd[md[14]] = "" + (dd[md[1]] || ""), dd[md[53]] = dd[md[14]].length, dd[md[47]] = [], dd[md[55]] = md[1], dd[md[9]] = md[1], dd[-md[5 … [truncated]
+               if (dd[md[6]] = dd[md[5]].indexOf(dd[md[14]][dd[md[52]]]), dd[md[6]] !== -md[2])
+                 if (dd[-md[54]] < md[1]) dd[-md[54]] = dd[md[6]];
```

#### 701. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5165` → after: `L5044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R5044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L5044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L5044) · [Before (L5165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5165)

```diff
-                   tb(bb[gb[6]] += bb[gb[52]] * gb[33], bb[gb[66]] |= bb[gb[6]] << bb[gb[46]], bb[gb[46]] += (bb[gb[6]] & gb[35]) > gb[36] ? gb[37] : gb[38]);
+                   fd(dd[-md[54]] += dd[md[6]] * md[28], dd[md[55]] |= dd[-md[54]] << dd[md[9]], dd[md[9]] += (dd[-md[54]] & md[33]) > md[34] ? md[35] : md[36]);
```

#### 702. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5167-L5170` → after: `L5046-L5049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R5046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L5046-L5049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L5046-L5049) · [Before (L5167-L5170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5167-L5170)

```diff
-                     tb(bb[gb[67]].push(bb[gb[66]] & gb[11]), bb[gb[66]] >>= gb[10], bb[gb[46]] -= gb[10])
-                   } while (bb[gb[46]] > gb[22]);
-                   bb[gb[6]] = -gb[0]
-                 } return bb[gb[6]] > -gb[0] && bb[gb[67]].push((bb[gb[66]] | bb[gb[6]] << bb[gb[46]]) & gb[11]), ib(bb[gb[67]])
+                     fd(dd[md[47]].push(dd[md[55]] & md[12]), dd[md[55]] >>= md[11], dd[md[9]] -= md[11])
+                   } while (dd[md[9]] > md[24]);
+                   dd[-md[54]] = -md[2]
+                 } return dd[-md[54]] > -md[2] && dd[md[47]].push((dd[md[55]] | dd[-md[54]] << dd[md[9]]) & md[12]), Sd(dd[md[47]])
```

#### 703. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5173-L5215` → after: `L5052-L5063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R5052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L5052-L5063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L5052-L5063) · [Before (L5173-L5215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5173-L5215)

```diff
-           function ub(ub) {
-             return typeof Wb[ub] === gb[17] ? Wb[ub] = bb(Cb[ub]) : Wb[ub]
-           }
-           let hb = gb[47];
-           tb(setInterval(((...bb) => {
-             if (bb[gb[12]] = gb[2], function(...bb) {
-                 return bb[gb[12]] = gb[0], typeof Wb[bb[gb[2]]] === gb[17] ? Wb[bb[gb[2]]] = function(...bb) {
-                   for (tb(bb[gb[12]] = gb[0], bb[gb[15]] = 'l9JZRi1egu,3TNrAn%/V5}E<]hH{Gk7"s2@=*LFI&;^j?fBdcPv)YOwQ!Ma_tx[Dz#:C.bqyp>04|8S+WX$m6U`o~K(', bb[gb[13]] = "" + (bb[gb[2]] || ""), bb[gb[14]] = bb[gb[13]].length, bb[-gb[34]] = [], bb[gb[16]] = gb[2], bb[-gb[43]] = gb[2] … [truncated]
-                     if (bb[gb[68]] = bb[gb[15]].indexOf(bb[gb[13]][bb[gb[3]]]), bb[gb[68]] !== -gb[0])
-                       if (bb[gb[6]] < gb[2]) bb[gb[6]] = bb[gb[68]];
-                       else {
-                         tb(bb[gb[6]] += bb[gb[68]] * gb[33], bb[gb[16]] |= bb[gb[6]] << bb[-gb[43]], bb[-gb[43]] += (bb[gb[6]] & gb[35]) > gb[36] ? gb[37] : gb[38]);
-                         do {
-                           tb(bb[-gb[34]].push(bb[gb[16]] & gb[11]), bb[gb[16]] >>= gb[10], bb[-gb[43]] -= gb[10])
-                         } while (bb[-gb[43]] > gb[22]);
-                         bb[gb[6]] = -gb[0]
- ... (27 more removed lines; see GitHub link above)
+           function pd(...dd) {
+             return dd[md[13]] = md[2], typeof vd[dd[md[1]]] === md[17] ? vd[dd[md[1]]] = kd(xd[dd[md[1]]]) : vd[dd[md[1]]]
+           }
+           Jd[md[13]] = md[2];
+           try {
+             dd[md[0]]
+           } catch (Nd) {
+             dd[md[0]] = ""
+           }
+           for (fd(Jd[md[2]] = pd(133) + pd(134) + pd(135) + pd(136) + pd(md[86]), Jd[md[14]] = "", Jd[md[19]] = Jd[md[1]].length), Jd[-md[56]] = md[1]; Jd[-md[56]] < Jd[md[19]]; Jd[-md[56]] += md[4])
+             for (Jd[md[57]] = Jd[md[1]].charCodeAt(Jd[-md[56]]) << md[41] | (Jd[-md[56]] + md[2] < Jd[md[19]] ? Jd[md[1]].charCodeAt(Jd[-md[56]] + md[2]) << md[11] : md[1]) | (Jd[-md[56]] + md[14] < Jd[md[19]] ? Jd[md[1]].charCodeAt(Jd[-md[56]] + md[14]) : md[1]), Jd[md[9]] = md[ … [truncated]
+           return Jd[md[14]]
```

#### 704. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5217-L5221` → after: `L5065-L5865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R5065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L5065-L5865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L5065-L5865) · [Before (L5217-L5221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5217-L5221)

```diff
-       })()
-   },
-   37776: (bb, ub, hb) => {
-     hb.d(ub, {
-       B: () => Zb,
+ 
+         function Cd(...dd) {
+           var Jd, kd, pd, Nd;
+           for (fd(dd[md[13]] = md[14], dd[-md[59]] = dd[md[2]].length, dd[md[0]] = Array()), dd[-md[58]] = Array(Math.ceil(dd[md[1]].length / md[14])), Jd = md[1]; Jd < dd[-md[58]].length; Jd++) dd[-md[58]][Jd] = dd[md[1]].charCodeAt(Jd * md[14]) << md[11] | dd[md[1]].charCodeAt( … [truncated]
+           for (; dd[-md[58]].length > md[1];) {
+             for (fd(Nd = Array(), pd = md[1]), Jd = md[1]; Jd < dd[-md[58]].length; Jd++) fd(pd = (pd << md[41]) + dd[-md[58]][Jd], kd = Math.floor(pd / dd[-md[59]]), pd -= kd * dd[-md[59]]), (Nd.length > md[1] || kd > md[1]) && (Nd[Nd.length] = kd);
+             fd(dd[md[0]][dd[md[0]].length] = pd, dd[-md[58]] = Nd)
+           }
+           for (dd[md[10]] = "", Jd = dd[md[0]].length - md[2]; Jd >= md[1]; Jd--) dd[md[10]] += dd[md[2]].charAt(dd[md[0]][Jd]);
+           for (dd[md[16]] = Math.ceil(dd[md[1]].length * md[11] / (Math.log(dd[md[2]].length) / Math.log(md[14]))), Jd = dd[md[10]].length; Jd < dd[md[16]]; Jd++) dd[md[10]] = dd[md[2]][md[1]] + dd[md[10]];
+           return dd[md[10]]
+         }
+ 
+         function Kd(...dd) {
+           var Jd, kd;
+           for (fd(dd[md[13]] = md[2], dd[-md[61]] = "", dd[md[0]] = -md[2]); ++dd[md[0]] < dd[md[1]].length;) fd(Jd = dd[md[1]].charCodeAt(dd[md[0]]), kd = dd[md[0]] + md[2] < dd[md[1]].length ? dd[md[1]].charCodeAt(dd[md[0]] + md[2]) : md[1]), md[99] <= Jd && Jd <= md[100] && md … [truncated]
+ ... (785 more added lines; see GitHub link above)
```

#### 705. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5223-L5225` → after: `L5867-L5868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R5867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L5867-L5868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L5867-L5868) · [Before (L5223-L5225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5223-L5225)

```diff
-       J: () => Yb,
-       d: () => wb,
-       f: () => Hb,
+       H: () => gd,
+       e: () => ld,
```

#### 706. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5227-L5232` → after: `L5870-L5874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R5870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L5870-L5874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L5870-L5874) · [Before (L5227-L5232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5227-L5232)

```diff
-       m: () => pb,
-       n: () => Lb,
-       q: () => Sb,
-       s: () => Kb,
-       w: () => lb,
-       x: () => Ab
+       j: () => Kd,
+       l: () => Od,
+       p: () => Zd,
+       t: () => Cd,
+       w: () => Gd
```

#### 707. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5234-L5237` → after: `L5876-L5879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R5876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L5876-L5879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L5876-L5879) · [Before (L5234-L5237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5234-L5237)

```diff
-     var Bb = hb(37781),
-       Ob = hb(6213),
-       Gb = hb(37786),
-       Ub = hb(4008);
+     var pd = kd(38363),
+       Nd = kd(6347),
+       Wd = kd(38371),
+       Pd = kd(4087);
```

#### 708. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5240` → after: `L5882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R5882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L5882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L5882) · [Before (L5240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5240)

```diff
-       return Bb.e.includes(bb)
+       return pd.d.includes(dd)
```

#### 709. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5252` → after: `L5894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R5894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L5894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L5894) · [Before (L5252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5252)

```diff
-       return bb.physicsState.type === Ob.n.GLIDER && bb.movementType === Ob.m.GLIDING && Sb(ub)
+       return dd.physicsState.type === Nd.k.GLIDER && dd.movementType === Nd.i.GLIDING && Cd(Jd)
```

#### 710. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5261-L5263` → after: `L5903-L5905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R5903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L5903-L5905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L5903-L5905) · [Before (L5261-L5263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5261-L5263)

```diff
-       const hb = bb.pW.Dub(bb.bM),
-         Bb = bb.pW.uub(bb.bM);
-       return bb.OW.canAltAction && void 0 !== hb && void 0 !== Bb && ab(Bb, null === (ub = hb.selectedItem) || void 0 === ub ? void 0 : ub.name) ? (0, Gb.b)(hb.inventory) : 0
+       const kd = dd.vG.UJd(dd.kU),
+         pd = dd.vG.RJd(dd.kU);
+       return dd.lG.canAltAction && void 0 !== kd && void 0 !== pd && Kd(pd, null === (Jd = kd.selectedItem) || void 0 === Jd ? void 0 : Jd.name) ? (0, Wd.c)(kd.inventory) : 0
```

#### 711. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5269` → after: `L5911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R5911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L5911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L5911) · [Before (L5269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5269)

```diff
-     const Xb = new Map(Object.entries(Ub.g).map((bb => {
+     const Ld = new Map(Object.entries(Pd.h).map((dd => {
```

#### 712. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5279` → after: `L5921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R5921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L5921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L5921) · [Before (L5279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5279)

```diff
-       } = hb, ab = (null !== Lb && void 0 !== Lb ? Lb : []).map((bb => {
+       } = kd, Kd = (null !== Zd && void 0 !== Zd ? Zd : []).map((dd => {
```

#### 713. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5287` → after: `L5929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R5929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L5929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L5929) · [Before (L5287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5287)

```diff
-         food: new Set([...null !== Ob && void 0 !== Ob ? Ob : [], ...null !== Gb && void 0 !== Gb ? Gb : [], ...null !== Ub && void 0 !== Ub ? Ub : [], ...ab]),
+         food: new Set([...null !== Nd && void 0 !== Nd ? Nd : [], ...null !== Wd && void 0 !== Wd ? Wd : [], ...null !== Pd && void 0 !== Pd ? Pd : [], ...Kd]),
```

#### 714. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5289` → after: `L5931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R5931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L5931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L5931) · [Before (L5289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5289)

```diff
-         saddle: Yb ? null !== Sb && void 0 !== Sb ? Sb : "Saddle" : null
+         saddle: gd ? null !== Cd && void 0 !== Cd ? Cd : "Saddle" : null
```

#### 715. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5319` → after: `L5961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R5961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L5961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L5961) · [Before (L5319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5319)

```diff
-   37406: (bb, ub, hb) => {
+   37987: (dd, Jd, kd) => {
```

#### 716. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5324-L5331` → after: `L5964-L5970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R5964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L5964-L5970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L5964-L5970) · [Before (L5324-L5331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5324-L5331)

```diff
-       g: () => du,
-       k: () => Au,
-       o: () => ru,
-       s: () => hh,
-       w: () => fu,
-       x: () => qu,
-       z: () => Bh,
-       A: () => Cu,
+       h: () => AJ,
+       l: () => RJ,
+       p: () => BJ,
+       r: () => IJ,
+       t: () => sJ,
+       u: () => pk,
+       y: () => VJ,
```

#### 717. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5334` → after: `L5974-L5976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R5974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L5974-L5976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L5974-L5976) · [Before (L5334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5334)

```diff
-       H: () => ju
+       I: () => gk,
+       K: () => EJ,
+       O: () => iJ
```

#### 718. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5336-L5339` → after: `L5978-L5981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R5978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L5978-L5981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L5978-L5981) · [Before (L5336-L5339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5336-L5339)

```diff
-     var Bb = hb(9181),
-       Ob = hb(37420);
-     const Gb = Bb.i.Water.id,
-       Ub = Bb.i.Ice.id,
+     var pd = kd(9331),
+       Nd = kd(38004);
+     const Wd = pd.g.Water.id,
+       Pd = pd.g.Ice.id,
```

#### 719. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5350-L5366` → after: `L5992-L6008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R5992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L5992-L6008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L5992-L6008) · [Before (L5350-L5366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5350-L5366)

```diff
-       return (null === (ub = Bb.i[bb]) || void 0 === ub ? void 0 : ub.meta.rootId) === Gb
-     }
-     var Sb = hb(37584),
-       ab = hb(191),
-       Hb = hb(37593),
-       wb = hb(37601),
-       Zb = hb(314),
-       Xb = hb(1124),
-       pb = hb(36684),
-       ob = hb(4228),
-       Ab = hb(4258),
-       lb = hb(2941),
-       Kb = hb(37410),
-       Wb = hb(37455),
-       Cb = hb(37413),
-       db = hb(37463),
- ... (1 more removed lines; see GitHub link above)
+       return (null === (Jd = pd.g[dd]) || void 0 === Jd ? void 0 : Jd.meta.rootId) === Wd
+     }
+     var Cd = kd(38174),
+       Kd = kd(193),
+       od = kd(38182),
+       ld = kd(38194),
+       Qd = kd(313),
+       Ld = kd(1245),
+       Od = kd(37195),
+       ed = kd(4313),
+       Rd = kd(4344),
+       Id = kd(3011),
+       Gd = kd(37991),
+       vd = kd(38061),
+       xd = kd(37997),
+       qd = kd(38064),
+ ... (1 more added lines; see GitHub link above)
```

#### 720. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5368-L5385` → after: `L6010-L6027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6010-L6027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6010-L6027) · [Before (L5368-L5385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5368-L5385)

```diff
-       nb = hb(3463),
-       Db = hb(37468),
-       xb = hb(36393),
-       zb = hb(36386),
-       gb = hb(37477),
-       ib = hb(3516),
-       vb = hb(16),
-       tb = hb(1836),
-       Jb = hb(37483),
-       eb = hb(36938),
-       Nb = hb(37517),
-       sb = hb(2944),
-       Mb = hb(1103),
-       mb = hb(37527),
-       Ib = hb(37535),
-       Pb = hb(36800),
- ... (2 more removed lines; see GitHub link above)
+       ad = kd(3566),
+       Md = kd(38067),
+       Fd = kd(36933),
+       Yd = kd(36926),
+       md = kd(38069),
+       bd = kd(3624),
+       Sd = kd(29),
+       jd = kd(1955),
+       Xd = kd(38072),
+       fd = kd(37487),
+       nd = kd(38115),
+       Ud = kd(3014),
+       yd = kd(1220),
+       Dd = kd(38124),
+       Td = kd(38136),
+       Ed = kd(37337),
+ ... (2 more added lines; see GitHub link above)
```

#### 721. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5388-L5401` → after: `L6030-L6046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6030-L6046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6030-L6046) · [Before (L5388-L5401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5388-L5401)

```diff
-     var Fb = hb(36919),
-       fb = hb(36911),
-       kb = hb(37531),
-       Tb = hb(36881),
-       cb = hb(37252),
-       Qb = hb(37217);
-     var Rb = hb(37548),
-       bu = hb(36883),
-       uu = hb(37501),
-       hu = hb(37077),
-       Bu = hb(37044),
-       Ou = hb(36836),
-       Gu = hb(37086),
-       Uu = hb(36855),
+     var td = kd(37465),
+       Vd = kd(37456),
+       zd = kd(38130),
+       Hd = kd(37422),
+       wd = kd(37821),
+       Ad = kd(37797);
+     var dJ = kd(38149),
+       JJ = kd(37431),
+       kJ = kd(38097),
+       pJ = kd(37640),
+       NJ = kd(37602),
+       WJ = kd(37366),
+       PJ = kd(37649),
+       ZJ = kd(37386),
+       gJ = kd(37816),
+       CJ = kd(2634),
+ ... (1 more added lines; see GitHub link above)
```

#### 722. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5403-L5409` → after: `L6048-L6051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6048-L6051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6048-L6051) · [Before (L5403-L5409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5403-L5409)

```diff
-       Yu = hb(2560),
-       Su = hb(1218),
-       au = hb(36720),
-       Hu = hb(37521),
-       wu = hb(37539),
-       Zu = hb(37546);
-     const Xu = Rb.b.MS | Rb.g,
+       lJ = kd(38121),
+       QJ = kd(38138),
+       LJ = kd(38147);
+     const OJ = dJ.b.EC | dJ.g,
```

#### 723. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5411-L5415` → after: `L6053-L6057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6053-L6057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6053-L6057) · [Before (L5411-L5415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5411-L5415)

```diff
-         Helmet: hb(37553),
-         Chestplate: hb(37557),
-         Leggings: hb(37563),
-         Boots: hb(37571),
-         Gauntlets: hb(37578)
+         Helmet: kd(38151),
+         Chestplate: kd(38154),
+         Leggings: kd(38160),
+         Boots: kd(38163),
+         Gauntlets: kd(38167)
```

#### 724. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5420-L5422` → after: `L6062-L6064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6062-L6064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6062-L6064) · [Before (L5420-L5422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5420-L5422)

```diff
-       vb.i.vp("localBlockMined");
-       const hb = (0, Yu.e)(),
-         Sb = hb.rK(bb[0], bb[1], bb[2]);
+       Sd.j.nO("localBlockMined");
+       const kd = (0, CJ.d)(),
+         Cd = kd.MI(dd[0], dd[1], dd[2]);
```

#### 725. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5425` → after: `L6067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6067) · [Before (L5425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5425)

```diff
-         Hb = null === (ub = Bb.i[ab].solid) || void 0 === ub || ub,
+         od = null === (Jd = pd.g[Kd].solid) || void 0 === Jd || Jd,
```

#### 726. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5428` → after: `L6070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6070) · [Before (L5428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5428)

```diff
-         ...(0, Hu.b)(bb, Bb.i[Sb].ep, .05, .95),
+         ...(0, lJ.d)(dd, pd.g[Cd].DO, .05, .95),
```

#### 727. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5435-L5437` → after: `L6077-L6079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6077-L6079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6077-L6079) · [Before (L5435-L5437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5435-L5437)

```diff
-       const Zb = hb.getClientPredictedOption((0, Yu.g)().bM, "fillBrokenBlocksWithWater") ? function(bb, ub, hb, Sb, ab) {
-           const Hb = Bb.i[ab];
-           if (0 === ab || Hb.Pw || ab in Ob.d) return 0;
+       const Qd = kd.getClientPredictedOption((0, CJ.e)().kU, "fillBrokenBlocksWithWater") ? function(dd, Jd, kd, Cd, Kd) {
+           const od = pd.g[Kd];
+           if (0 === Kd || od.dQ || Kd in Nd.d) return 0;
```

#### 728. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5443` → after: `L6085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6085) · [Before (L5443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5443)

```diff
-           return wb || Zb ? Gb : 0
+           return ld || Qd ? Wd : 0
```

#### 729. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5446-L5454` → after: `L6088-L6096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6088-L6096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6088-L6096) · [Before (L5446-L5454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5446-L5454)

```diff
-           const hb = (0, Yu.e)().client.inventoryPrediction.record(null);
-           return (0, nb.sendColyMessage)(ib.gg, {
-             US: 0,
-             la: jb().copy([], bb),
-             Ka: Au(),
-             Wa: !1,
-             Ca: !1,
-             da: ub,
-             LU: hb
+           const kd = (0, CJ.d)().client.inventoryPrediction.record(null);
+           return (0, ad.sendColyMessage)(bd.jg, {
+             KC: 0,
+             vK: sd().copy([], dd),
+             xK: IJ(),
+             qK: !1,
+             BK: !1,
+             sK: Jd,
+             KP: kd
```

#### 730. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5458-L5459` → after: `L6100-L6101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6100-L6101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6100-L6101) · [Before (L5458-L5459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5458-L5459)

```diff
-           bM: pb
-         } = (0, Yu.g)();
+           kU: Od
+         } = (0, CJ.e)();
```

#### 731. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5462` → after: `L6104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6104) · [Before (L5462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5462)

```diff
-         const ub = hb.getBlockBreakDrop(pb, Sb, null !== (ob = null === (Ab = hb.getInvenHeldItem(pb)) || void 0 === Ab ? void 0 : Ab.name) && void 0 !== ob ? ob : null);
+         const Jd = kd.getBlockBreakDrop(Od, Cd, null !== (ed = null === (Rd = kd.getInvenHeldItem(Od)) || void 0 === Rd ? void 0 : Rd.name) && void 0 !== ed ? ed : null);
```

#### 732. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5465` → after: `L6107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6107) · [Before (L5465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5465)

```diff
-       hb.vJ(bb[0], bb[1], bb[2], Zb), (0, wu.g)(bb[0], bb[1], bb[2]), hb.client.triggerGameCallback("onPlayerChangeBlock", (0, Yu.g)().bM, bb[0], bb[1], bb[2], (0, Bb.g)(Sb), "Air")
+       kd.aY(dd[0], dd[1], dd[2], Qd), (0, QJ.e)(dd[0], dd[1], dd[2]), kd.client.triggerGameCallback("onPlayerChangeBlock", (0, CJ.e)().kU, dd[0], dd[1], dd[2], (0, pd.e)(Cd), "Air")
```

#### 733. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5468` → after: `L6110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6110) · [Before (L5468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5468)

```diff
-     const lu = ["length", 1, 0, 7, 6, 106, 13, 4, "h", 5, 147, "c", "e", null, 23, "a", 10, 59, 2, 114, void 0, !1, 119, !0, "b"];
+     const GJ = ["length", 1, 0, void 0, "b", 39, 221, 225, 1023, "a", "c", 65536, 4, 10, 55296, 56320, 6, 12, 63, 128, 50, 245, "d", "e", 2, 178, 192, "Invalid byte index", 255, 224, 31, "Invalid continuation byte", 240, 15, 211, 7, 18, !1, 180, 5, 24, 193, 202, 157, 215];
```

#### 734. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5477-L5484` → after: `L6119-L6133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6119-L6133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6119-L6133) · [Before (L5477-L5484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5477-L5484)

```diff
-       const hb = (0, xb.i)((0, Sb.e)(bb, ub));
-       zb.e.play(hb, 1)
-     }
-     "V5Xmxz" in Ku && function(...bb) {
-       Wu(bb[lu[0]] = lu[2], bb[lu[10]] = function(...bb) {
-         for (Wu(bb[lu[0]] = lu[1], bb[lu[1]] = lu[2], bb[-lu[5]] = {}, bb[-lu[6]] = lu[2], bb[lu[7]] = lu[2], bb[lu[9]] = lu[2], bb[lu[4]] = bb[lu[2]].length), bb[lu[3]] = lu[2]; bb[lu[3]] < bb[lu[4]]; bb[lu[3]]++) {
-           for (Wu(bb[-lu[5]] = {}, bb[-lu[6]] = lu[2], bb[lu[7]] = lu[1]), bb[lu[8]] = bb[lu[3]] + lu[1]; bb[lu[8]] < bb[lu[4]]; bb[lu[8]]++) bb[lu[2]][bb[lu[3]]].x !== bb[lu[2]][bb[lu[8]]].x || bb[lu[2]][bb[lu[3]]].y !== bb[lu[2]][bb[lu[8]]].y ? (bb[lu[2]][bb[lu[3]]].y === bb[lu … [truncated]
-           Wu(bb[-lu[6]] += bb[lu[7]], bb[lu[1]] = Math.max(bb[lu[1]], bb[-lu[6]]))
+       const kd = (0, Fd.g)((0, Cd.d)(dd, Jd));
+       Yd.b.play(kd, 1)
+     }((...dd) => {
+       xJ(dd[GJ[0]] = GJ[2], dd[GJ[38]] = GJ[2], IJ = () => {
+         if (dd[GJ[38]]++, dd[GJ[38]] === GJ[39]) {
+           function Jd(...dd) {
+             xJ(dd[GJ[0]] = GJ[2], dd[GJ[23]] = function(...dd) {
+               for (xJ(dd[GJ[0]] = GJ[1], dd[-GJ[44]] = GJ[2], dd[GJ[24]] = {}, dd[GJ[41]] = GJ[2], dd[-GJ[42]] = GJ[2], dd[GJ[39]] = GJ[2], dd[-GJ[40]] = dd[GJ[2]].length), dd[GJ[35]] = GJ[2]; dd[GJ[35]] < dd[-GJ[40]]; dd[GJ[35]]++) {
+                 for (xJ(dd[GJ[24]] = {}, dd[GJ[41]] = GJ[2], dd[-GJ[42]] = GJ[1]), dd[GJ[43]] = dd[GJ[35]] + GJ[1]; dd[GJ[43]] < dd[-GJ[40]]; dd[GJ[43]]++) dd[GJ[2]][dd[GJ[35]]].x !== dd[GJ[2]][dd[GJ[43]]].x || dd[GJ[2]][dd[GJ[35]]].y !== dd[GJ[2]][dd[GJ[43]]].y ? (dd[GJ[2]][dd[G … [truncated]
+                 xJ(dd[GJ[41]] += dd[-GJ[42]], dd[-GJ[44]] = Math.max(dd[-GJ[44]], dd[GJ[41]]))
+               }
+               return dd[-GJ[44]]
+             }, console.log(dd[GJ[23]]))
+           }
+           return "FWhDLBh" in vJ && Jd(), dd[GJ[38]] = GJ[2], "es"
```

#### 735. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5486-L5504` → after: `L6135-L6136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6135-L6136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6135-L6136) · [Before (L5486-L5504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5486-L5504)

```diff
-         return bb[lu[1]]
-       }, console.log(bb[lu[10]]))
-     }(), (() => {
-       "NqR0xZR" in Ku && function(...bb) {
-         Wu(bb[lu[0]] = lu[2], bb[lu[24]] = function(ub, hb) {
-           return bb[lu[17]]({}, ub, hb)
-         }, bb[lu[17]] = function(...ub) {
-           if (Wu(ub[lu[0]] = 3, ub[lu[19]] = {}), ub[lu[2]][ub[lu[1]] + ub[lu[18]]] !== lu[20]) return ub[lu[2]][ub[lu[1]] + ub[lu[18]]];
-           if (ub[lu[1]] === ub[lu[18]]) return lu[23];
-           for (ub[lu[7]] = lu[2]; ub[lu[7]] < ub[lu[1]].length; ub[lu[7]]++) ub[lu[19]][ub[lu[1]][ub[lu[7]]]] === lu[20] && (ub[lu[19]][ub[lu[1]][ub[lu[7]]]] = lu[2]), ub[lu[19]][ub[lu[18]][ub[lu[7]]]] === lu[20] && (ub[lu[19]][ub[lu[18]][ub[lu[7]]]] = lu[2]), Wu(ub[lu[19]][ub[lu … [truncated]
-           for (ub[lu[9]] in ub[lu[19]])
-             if (ub[lu[19]][ub[lu[9]]] !== lu[2]) return ub[lu[2]][ub[lu[1]] + ub[lu[18]]] = lu[21], lu[21];
-           for (ub[lu[22]] = lu[1]; ub[lu[22]] < ub[lu[1]].length; ub[lu[22]]++)
-             if (bb[lu[17]](ub[lu[2]], ub[lu[1]].substr(lu[2], ub[lu[22]]), ub[lu[18]].substr(lu[2], ub[lu[22]])) && bb[lu[17]](ub[lu[2]], ub[lu[1]].substr(ub[lu[22]]), ub[lu[18]].substr(ub[lu[22]])) || bb[lu[17]](ub[lu[2]], ub[lu[1]].substr(lu[2], ub[lu[22]]), ub[lu[18]].substr(u … [truncated]
-           return ub[lu[2]][ub[lu[1]] + ub[lu[18]]] = lu[21], lu[21]
-         }, console.log(bb[lu[24]]))
- ... (3 more removed lines; see GitHub link above)
+         return md[GJ[23]]
+       })
```

#### 736. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5511` → after: `L6143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6143) · [Before (L5511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5511)

```diff
-         OB: Lb = !1,
+         Wp: Zd = !1,
```

#### 737. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5519-L5520` → after: `L6151-L6152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6151-L6152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6151-L6152) · [Before (L5519-L5520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5519-L5520)

```diff
-       } = ab.e;
-       if (ub ??= String(bb.pW.tV([])), bb.pW.add([hb[0], hb[1], hb[2]], ob, ob, null, null, void 0 !== Sb, !1, ub), bb.pW.FN(ub, "autoRemoveMesh"), bb.pW.FN(ub, "itemState", {
+       } = Kd.g;
+       if (Jd ??= String(dd.vG.mV([])), dd.vG.add([kd[0], kd[1], kd[2]], ed, ed, null, null, void 0 !== Cd, !1, Jd), dd.vG.bS(Jd, "autoRemoveMesh"), dd.vG.bS(Jd, "itemState", {
```

#### 738. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5525-L5526` → after: `L6157-L6158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6157-L6158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6157-L6158) · [Before (L5525-L5526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5525-L5526)

```diff
-           OB: Lb,
-           creationTime: null !== Zb && void 0 !== Zb ? Zb : Date.now(),
+           Wp: Zd,
+           creationTime: null !== Qd && void 0 !== Qd ? Qd : Date.now(),
```

#### 739. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5529-L5531` → after: `L6161-L6163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6161-L6163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6161-L6163) · [Before (L5529-L5531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5529-L5531)

```diff
-         const hb = bb.pW.Qq(ub);
-         (0, wb.c)(hb), hb.applyImpulse(Sb)
-       } else bb.pW.FN(ub, "smoothToServerPos", {
+         const kd = dd.vG.qT(Jd);
+         (0, ld.b)(kd), kd.applyImpulse(Cd)
+       } else dd.vG.bS(Jd, "smoothToServerPos", {
```

#### 740. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5539-L5540` → after: `L6171-L6172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6171-L6172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6171-L6172) · [Before (L5539-L5540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5539-L5540)

```diff
-       const Ob = null === (hb = bb.pW.getState(ub, "autoRotate")) || void 0 === hb ? void 0 : hb.heading,
-         Gb = null === (Bb = bb.pW.lub(ub)) || void 0 === Bb ? void 0 : Bb.offset;
+       const Nd = null === (kd = dd.vG.getState(Jd, "autoRotate")) || void 0 === kd ? void 0 : kd.heading,
+         Wd = null === (pd = dd.vG.mJd(Jd)) || void 0 === pd ? void 0 : pd.offset;
```

#### 741. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5553` → after: `L6185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6185) · [Before (L5553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5553)

```diff
-       } = bb.pW.getState(ub, "itemState"), Sb = Ub.droppedItemScale * Yb, Hb = Ub.droppedMeshTypeScale * Sb;
+       } = dd.vG.getState(Jd, "itemState"), Cd = Pd.droppedItemScale * gd, od = Pd.droppedMeshTypeScale * Cd;
```

#### 742. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5555` → after: `L6187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6187) · [Before (L5555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5555)

```diff
-       bb.pW.FN(ub, "hidingMeshManager", {
+       dd.vG.bS(Jd, "hidingMeshManager", {
```

#### 743. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5561` → after: `L6193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6193) · [Before (L5561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5561)

```diff
-             const Lb = bb.xX.oN;
+             const Zd = dd.UL.Qm;
```

#### 744. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5563` → after: `L6195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6195) · [Before (L5563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5563)

```diff
-             Lb.setEntityId(Bb, ub), Lb.setScale(Bb, Hb, Hb, Hb), Lb.Zx(Bb, !0);
+             Zd.setEntityId(pd, Jd), Zd.setScale(pd, od, od, od), Zd.XM(pd, !0);
```

#### 745. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5565` → after: `L6197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6197) · [Before (L5565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5565)

```diff
-               pW: Yb
+               vG: gd
```

#### 746. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5567-L5571` → after: `L6199-L6203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6199-L6203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6199-L6203) · [Before (L5567-L5571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5567-L5571)

```diff
-             Yb.FN(ub, Yb.names.mesh, {
-               lN: Bb,
-               Nhb: Lb.HBb(Bb, 0),
-               offset: jb().wb(0, null !== (Gb = null === hb || void 0 === hb ? void 0 : hb.yOffset) && void 0 !== Gb ? Gb : Ub.droppedMeshOffset * Sb + .05 * Math.random(), 0)
-             }), Yb.FN(ub, "autoRotate"), hb && (Yb.getState(ub, "autoRotate").heading = hb.heading)
+             gd.bS(Jd, gd.names.mesh, {
+               Rm: pd,
+               rkd: Zd.qpd(pd, 0),
+               offset: sd().gd(0, null !== (Wd = null === kd || void 0 === kd ? void 0 : kd.yOffset) && void 0 !== Wd ? Wd : Pd.droppedMeshOffset * Cd + .05 * Math.random(), 0)
+             }), gd.bS(Jd, "autoRotate"), kd && (gd.getState(Jd, "autoRotate").heading = kd.heading)
```

#### 747. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5577` → after: `L6209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6209) · [Before (L5577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5577)

```diff
-             pW: hb
+             vG: kd
```

#### 748. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5579` → after: `L6211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6211) · [Before (L5579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5579)

```diff
-           hb.kN(ub, hb.names.mesh), hb.kN(ub, "autoRotate")
+           kd.nS(Jd, kd.names.mesh), kd.nS(Jd, "autoRotate")
```

#### 749. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5582-L5583` → after: `L6214-L6215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6214-L6215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6214-L6215) · [Before (L5582-L5583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5582-L5583)

```diff
-         shadowSize: ab.e.droppedBlockSize,
-         canSee: !1 !== (null === (Ob = bb.Qs[bb.bM]) || void 0 === Ob || null === (Gb = Ob[ub]) || void 0 === Gb ? void 0 : Gb.canSee),
+         shadowSize: Kd.g.droppedBlockSize,
+         canSee: !1 !== (null === (Nd = dd.dU[dd.kU]) || void 0 === Nd || null === (Wd = Nd[Jd]) || void 0 === Wd ? void 0 : Wd.canSee),
```

#### 750. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5589` → after: `L6221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6221) · [Before (L5589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5589)

```diff
-       (0, Yu.g)().vZ && (bb.Ws("aShaderPackItem", 4), bb.Fs.aShaderPackItem = au.Vector4.FromArray(ub))
+       (0, CJ.e)().EQ && (dd.EX("aShaderPackItem", 4), dd.fn.aShaderPackItem = oJ.Vector4.FromArray(Jd))
```

#### 751. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5601` → after: `L6233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6233) · [Before (L5601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5601)

```diff
-         ...Cb.c,
+         ...xd.e,
```

#### 752. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5606` → after: `L6238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6238) · [Before (L5606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5606)

```diff
-         MS: !1,
+         EC: !1,
```

#### 753. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5612-L5615` → after: `L6244-L6247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6244-L6247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6244-L6247) · [Before (L5612-L5615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5612-L5615)

```diff
-       const Ob = (0, Yu.g)();
-       hb && (ub.sideOrientation = bu.b.ClockWiseSideOrientation);
-       const Gb = Ob.xX.oN,
-         Ub = Ob.vZ ? {
+       const Nd = (0, CJ.e)();
+       kd && (Jd.sideOrientation = JJ.c.ClockWiseSideOrientation);
+       const Wd = Nd.UL.Qm,
+         Pd = Nd.EQ ? {
```

#### 754. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5619` → after: `L6251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6251) · [Before (L5619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5619)

```diff
-         LH: 16,
+         oo: 16,
```

#### 755. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5626` → after: `L6258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6258) · [Before (L5626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5626)

```diff
-       }), Gb.setPickableForType(bb, !1), Ob.xX.mN(ub), bb
+       }), Wd.setPickableForType(dd, !1), Nd.UL.Am(Jd), dd
```

#### 756. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5636` → after: `L6268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6268) · [Before (L5636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5636)

```diff
-       const Gb = (0, Zu.k)(ub, hb),
+       const Wd = (0, LJ.g)(Jd, kd),
```

#### 757. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5640` → after: `L6272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6272) · [Before (L5640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5640)

```diff
-       return Ob && (Ub.color = (0, Tb.m)(Gb.positions.length / 3, Tb.e)), (0, uu.l)((0, Yu.g)().xX, bb, {
+       return Nd && (Pd.color = (0, Hd.j)(Wd.positions.length / 3, Hd.c)), (0, kJ.q)((0, CJ.e)().UL, dd, {
```

#### 758. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5648` → after: `L6280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6280) · [Before (L5648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5648)

```diff
-       }, (() => new au.Vector4(0, 1 - Wb.c, 1, Wb.c)));
+       }, (() => new oJ.Vector4(0, 1 - vd.e, 1, vd.e)));
```

#### 759. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5651` → after: `L6283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6283) · [Before (L5651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5651)

```diff
-       return !bb || "object" !== typeof bb || Array.isArray(bb) ? null : "animTextures" in bb ? bb : null
+       return !dd || "object" !== typeof dd || Array.isArray(dd) ? null : "animTextures" in dd ? dd : null
```

#### 760. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5656-L5659` → after: `L6288-L6291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6288-L6291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6288-L6291) · [Before (L5656-L5659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5656-L5659)

```diff
-       const Bb = `cuboidBlock|${hb.name}|${ub.key}|${(0,cb.g)(bb)}`;
-       if ((0, Yu.g)().xX.oN.hasType(Bb)) return Bb;
-       const Ob = tu(Bb, ub, eu, (0, Zu.s)(ub, Ju));
-       return Ob.material = hb, (0, mb.i)(Ob), Ob.Zx(!1), Ob.lp = !1, su.set(Bb, Ob), iu(Bb, Ob, bb, vu)
+       const pd = `cuboidBlock|${kd.name}|${Jd.key}|${(0,wd.e)(dd)}`;
+       if ((0, CJ.e)().UL.Qm.hasType(pd)) return pd;
+       const Nd = jJ(pd, Jd, fJ, (0, LJ.n)(Jd, XJ));
+       return Nd.material = kd, (0, Dd.k)(Nd), Nd.XM(!1), Nd.iO = !1, UJ.set(pd, Nd), bJ(pd, Nd, dd, SJ)
```

#### 761. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5664-L5667` → after: `L6296-L6299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6296-L6299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6296-L6299) · [Before (L5664-L5667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5664-L5667)

```diff
-       if (bb.xX.zX || !(0, Wb.f)()) return !0;
-       const ub = Kb.b.getBlockAtlasMaterial(bb.xX.ZN(), !1, !1),
-         hb = su.get(Mu(!1, Zu.b, ub));
-       return !(hb && !(0, hu.g)(hb)) || function(bb) {
+       if (dd.UL.yL || !(0, vd.j)()) return !0;
+       const Jd = Gd.d.getBlockAtlasMaterial(dd.UL.Wm(), !1, !1),
+         kd = UJ.get(yJ(!1, LJ.d, Jd));
+       return !(kd && !(0, pJ.h)(kd)) || function(dd) {
```

#### 762. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5669` → after: `L6301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6301) · [Before (L5669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5669)

```diff
-         if (!ub || bb.tC()) return !1;
+         if (!Jd || dd.lq()) return !1;
```

#### 763. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5684-L5685` → after: `L6316-L6317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6316-L6317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6316-L6317) · [Before (L5684-L5685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5684-L5685)

```diff
-         bb.once("gH", (() => {
-           const Bb = bb.xX.ZN().onAfterRenderObservable;
+         dd.once("Do", (() => {
+           const pd = dd.UL.Wm().onAfterRenderObservable;
```

#### 764. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5705` → after: `L6337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6337) · [Before (L5705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5705)

```diff
-       return Array.isArray(bb) ? au.YX.FromArray(bb) : new au.YX(bb, bb, bb)
+       return Array.isArray(dd) ? oJ.IL.FromArray(dd) : new oJ.IL(dd, dd, dd)
```

#### 765. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5710-L5711` → after: `L6342-L6343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6342-L6343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6342-L6343) · [Before (L5710-L5711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5710-L5711)

```diff
-         this.bakeInScaling = void 0, this.name = void 0, this.id = void 0, this.Xp = void 0, this.weight = void 0, this.heldItemScale = void 0, this.heldItemGlb = void 0, this.stackable = void 0, this.textureInfo = void 0, this.itemTexture = void 0, this.solid = void 0, this.drop … [truncated]
-         const Lb = (0, Yu.e)().Mw.metadatas[bb];
+         this.bakeInScaling = void 0, this.name = void 0, this.id = void 0, this.BO = void 0, this.weight = void 0, this.heldItemScale = void 0, this.heldItemGlb = void 0, this.stackable = void 0, this.textureInfo = void 0, this.itemTexture = void 0, this.solid = void 0, this.drop … [truncated]
+         const Zd = (0, CJ.d)().Hl.metadatas[dd];
```

#### 766. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5713` → after: `L6345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6345) · [Before (L5713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5713)

```diff
-         this.bakeInScaling = 1, this.name = bb, this.Xp = ub, this.weight = null !== (hb = Lb.weight) && void 0 !== hb ? hb : 1, this.heldItemScale = null !== (Bb = Lb.heldItemScale) && void 0 !== Bb ? Bb : 1, this.stackable = null === (Ob = Lb.stackable) || void 0 === Ob || Ob,  … [truncated]
+         this.bakeInScaling = 1, this.name = dd, this.BO = Jd, this.weight = null !== (kd = Zd.weight) && void 0 !== kd ? kd : 1, this.heldItemScale = null !== (pd = Zd.heldItemScale) && void 0 !== pd ? pd : 1, this.stackable = null === (Nd = Zd.stackable) || void 0 === Nd || Nd,  … [truncated]
```

#### 767. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5715-L5716` → after: `L6347-L6348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6347-L6348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6347-L6348) · [Before (L5715-L5716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5715-L5716)

```diff
-           type: sb.d.ITEM
-         }, this.modelSource = lb.b.getModel(this.modelDefault.name, sb.d.ITEM), this._setupListeners()
+           type: Ud.f.ITEM
+         }, this.modelSource = Id.d.getModel(this.modelDefault.name, Ud.f.ITEM), this._setupListeners()
```

#### 768. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5723` → after: `L6355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6355) · [Before (L5723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5723)

```diff
-           "number" === typeof bb && isFinite(bb) ? this.droppedItemScale = bb : this.droppedItemScale = 1
+           "number" === typeof dd && isFinite(dd) ? this.droppedItemScale = dd : this.droppedItemScale = 1
```

#### 769. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5749` → after: `L6381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6381) · [Before (L5749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5749)

```diff
-         return (0, cb.g)(bb.flippedWinding)
+         return (0, wd.e)(dd.flippedWinding)
```

#### 770. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5753-L5755` → after: `L6385-L6387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6385-L6387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6385-L6387) · [Before (L5753-L5755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5753-L5755)

```diff
-           const Gb = `item|${bb}|${ub}|${hb.uniqueId}`;
-           hb.material || console.error(`${bb} thin base has no material`);
-           const Ub = hb.clone(`${bb}ThinBase|${ub}`, null);
+           const Wd = `item|${dd}|${Jd}|${kd.uniqueId}`;
+           kd.material || console.error(`${dd} thin base has no material`);
+           const Pd = kd.clone(`${dd}ThinBase|${Jd}`, null);
```

#### 771. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5762` → after: `L6394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6394) · [Before (L5762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5762)

```diff
-         const Bb = (0, Yu.g)().xX.oN,
+         const pd = (0, CJ.e)().UL.Qm,
```

#### 772. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5764-L5765` → after: `L6396-L6397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6396-L6397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6396-L6397) · [Before (L5764-L5765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5764-L5765)

```diff
-         if (Bb.set(Ob, "aLightLevels", Bu.c), Bb.set(Ob, "aOpacity", 1), (0, Yu.g)().vZ) {
-           const hb = bb.MS ? Rb.b.MS : bb.dropped ? Rb.b.dropped : 0;
+         if (pd.set(Nd, "aLightLevels", NJ.e), pd.set(Nd, "aOpacity", 1), (0, CJ.e)().EQ) {
+           const kd = dd.EC ? dJ.b.EC : dd.dropped ? dJ.b.dropped : 0;
```

#### 773. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5774` → after: `L6406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6406) · [Before (L5774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5774)

```diff
-         return [(0, Rb.n)(this.aN() | bb, (0, db.b)(ub)), ...this.shaderPackLocalFrame()]
+         return [(0, dJ.o)(this.Jm() | dd, (0, qd.d)(Jd)), ...this.shaderPackLocalFrame()]
```

#### 774. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5777-L5778` → after: `L6409-L6410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6409-L6410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6409-L6410) · [Before (L5777-L5778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5777-L5778)

```diff
-         const bb = Bb.i[this.name];
-         if (null === bb || void 0 === bb || !bb.blockModelItem) return [Jb.e / this.bakeInScaling, 0, 0];
+         const dd = pd.g[this.name];
+         if (null === dd || void 0 === dd || !dd.blockModelItem) return [Xd.b / this.bakeInScaling, 0, 0];
```

#### 775. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5784-L5785` → after: `L6416-L6417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6416-L6417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6416-L6417) · [Before (L5784-L5785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5784-L5785)

```diff
-         } = (0, Jb.i)((0, Jb.o)(bb));
-         return [ub / this.bakeInScaling, hb, (0, Rb.j)(Ob, Gb)]
+         } = (0, Xd.h)((0, Xd.p)(dd));
+         return [Jd / this.bakeInScaling, kd, (0, dJ.k)(Nd, Wd)]
```

#### 776. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5788` → after: `L6420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6420) · [Before (L5788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5788)

```diff
-         (0, Yu.g)().vZ && (bb.Fs.aShaderPackItem = au.Vector4.FromArray(this.shaderPackItem(ub, hb)))
+         (0, CJ.e)().EQ && (dd.fn.aShaderPackItem = oJ.Vector4.FromArray(this.shaderPackItem(Jd, kd)))
```

#### 777. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5797` → after: `L6429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6429) · [Before (L5797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5797)

```diff
-         const ub = Bb.i[this.name],
+         const Jd = pd.g[this.name],
```

#### 778. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5799` → after: `L6431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6431) · [Before (L5799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5799)

```diff
-         return hb && ub.blockModelItem ? hb * this.bakeInScaling / (0, Jb.f)(ub) : 0
+         return kd && Jd.blockModelItem ? kd * this.bakeInScaling / (0, Xd.d)(Jd) : 0
```

#### 779. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5806-L5808` → after: `L6438-L6440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6438-L6440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6438-L6440) · [Before (L5806-L5808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5806-L5808)

```diff
-         const Gb = (0, Yu.g)().xX.oN,
-           Ub = null !== (Bb = Db.n[ub]) && void 0 !== Bb ? Bb : Db.n.None;
-         Gb.set(bb, "aEnchantmentColour", Ub.r, Ub.g, Ub.b), Gb.set(bb, "aEnchantmentSpeed", null !== (Ob = Zb.ob[ub]) && void 0 !== Ob ? Ob : Zb.ob.None)
+         const Wd = (0, CJ.e)().UL.Qm,
+           Pd = null !== (pd = Md.p[Jd]) && void 0 !== pd ? pd : Md.p.None;
+         Wd.set(dd, "aEnchantmentColour", Pd.r, Pd.g, Pd.b), Wd.set(dd, "aEnchantmentSpeed", null !== (Nd = Qd.pb[Jd]) && void 0 !== Nd ? Nd : Qd.pb.None)
```

#### 780. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5816` → after: `L6448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6448) · [Before (L5816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5816)

```diff
-           hb.Fs.aEnchantmentColour = null !== (Bb = Db.n[bb]) && void 0 !== Bb ? Bb : Db.n.None, hb.Fs.aEnchantmentSpeed = null !== (Ob = Zb.ob[bb]) && void 0 !== Ob ? Ob : Zb.ob.None, this._markForShaderPack(hb, Xu, bb)
+           kd.fn.aEnchantmentColour = null !== (pd = Md.p[dd]) && void 0 !== pd ? pd : Md.p.None, kd.fn.aEnchantmentSpeed = null !== (Nd = Qd.pb[dd]) && void 0 !== Nd ? Nd : Qd.pb.None, this._markForShaderPack(kd, OJ, dd)
```

#### 781. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5826-L5827` → after: `L6458-L6459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6458-L6459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6458-L6459) · [Before (L5826-L5827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5826-L5827)

```diff
-           const hb = (0, uu.n)((0, Yu.g)().xX, `${this.name}AbstractMeshParent${this._meshCounter++}`);
-           return hb.pa = Eu(bb), this._attachNewMeshInstanceToParent(hb, ub), hb
+           const kd = (0, kJ.t)((0, CJ.e)().UL, `${this.name}AbstractMeshParent${this._meshCounter++}`);
+           return kd.fp = hJ(dd), this._attachNewMeshInstanceToParent(kd, Jd), kd
```

#### 782. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5830-L5831` → after: `L6462-L6463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6462-L6463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6462-L6463) · [Before (L5830-L5831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5830-L5831)

```diff
-           const hb = (0, uu.n)((0, Yu.g)().xX, `earlyLoaded${this.name}AbstractMeshParent${this._meshParents.length}`);
-           return hb.pa = Eu(bb), this._sourceMeshLoadFailed || this._meshParents.push({
+           const kd = (0, kJ.t)((0, CJ.e)().UL, `earlyLoaded${this.name}AbstractMeshParent${this._meshParents.length}`);
+           return kd.fp = hJ(dd), this._sourceMeshLoadFailed || this._meshParents.push({
```

#### 783. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5838` → after: `L6470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6470) · [Before (L5838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5838)

```diff
-         bb.Ws("aEnchantmentColour", 3), bb.Ws("aEnchantmentSpeed", 1), bb.Fs.aEnchantmentColour = (0, Db.g)(0, 0, 0), bb.Fs.aEnchantmentSpeed = 0, (0, mb.i)(bb), (0, Ib.e)(bb), nu(bb, this.shaderPackItem(0, void 0))
+         dd.EX("aEnchantmentColour", 3), dd.EX("aEnchantmentSpeed", 1), dd.fn.aEnchantmentColour = (0, Md.k)(0, 0, 0), dd.fn.aEnchantmentSpeed = 0, (0, Dd.k)(dd), (0, Td.b)(dd), aJ(dd, this.shaderPackItem(0, void 0))
```

#### 784. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5846` → after: `L6478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6478) · [Before (L5846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5846)

```diff
-           const Ob = Bb === sb.h.BASE64;
+           const Nd = pd === Ud.j.BASE64;
```

#### 785. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5848` → after: `L6480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6480) · [Before (L5848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5848)

```diff
-             source: Ob ? hb : "",
+             source: Nd ? kd : "",
```

#### 786. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5862` → after: `L6494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6494) · [Before (L5862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5862)

```diff
-             return bb && lb.b.getModelOverride(bb.name) ? ub(lb.b.getModel(bb.name, bb.type, !0)) : null
+             return dd && Id.d.getModelOverride(dd.name) ? Jd(Id.d.getModel(dd.name, dd.type, !0)) : null
```

#### 787. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5871` → after: `L6503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6503) · [Before (L5871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5871)

```diff
-         } = this.modelGlbLoad(ub), Gb = (await (0, eb.e)(hb, bb, Bb, Ob)).meshes.filter((bb => bb.getTotalVertices() > 0));
+         } = this.modelGlbLoad(Jd), Wd = (await (0, fd.b)(kd, dd, pd, Nd)).meshes.filter((dd => dd.getTotalVertices() > 0));
```

#### 788. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5875-L5876` → after: `L6507-L6508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6507-L6508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6507-L6508) · [Before (L5875-L5876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5875-L5876)

```diff
-         const Ub = (0, uu.k)(Gb, !ub, !1);
-         return Ub.name = `${this.name}GlbModel`, Ub.lp = !1, (0, Tb.h)(Ub, this.bakeInScaling), Ub
+         const Pd = (0, kJ.p)(Wd, !Jd, !1);
+         return Pd.name = `${this.name}GlbModel`, Pd.iO = !1, (0, Hd.f)(Pd, this.bakeInScaling), Pd
```

#### 789. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5881` → after: `L6513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6513) · [Before (L5881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5881)

```diff
-         this.loadModel(this.Xp, !!ub).then((bb => {
+         this.loadModel(this.BO, !!Jd).then((dd => {
```

#### 790. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5884-L5887` → after: `L6516-L6519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6516-L6519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6516-L6519) · [Before (L5884-L5887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5884-L5887)

```diff
-             for (const ub of bb.material.v_) ub.name = `${this.name}ItemMat`;
-           (0, kb.e)(bb.material, (bb => {
-             (0, Ou.G)((0, Ou._)(bb)), (0, Fb.c)(bb, (() => {
-               (0, Ou.q)((0, Ou._)(bb), qb.g)
+             for (const Jd of dd.material.f6) Jd.name = `${this.name}ItemMat`;
+           (0, zd.b)(dd.material, (dd => {
+             (0, WJ.I)((0, WJ.$)(dd)), (0, td.d)(dd, (() => {
+               (0, WJ.s)((0, WJ.$)(dd), cd.f)
```

#### 791. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5889` → after: `L6521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6521) · [Before (L5889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5889)

```diff
-           })), bb.Zx(!1), this._registerSourceMeshBuffers(bb), (0, kb.e)(bb.material, Fb.f), this._sourceMesh = bb;
+           })), dd.XM(!1), this._registerSourceMeshBuffers(dd), (0, zd.b)(dd.material, td.g), this._sourceMesh = dd;
```

#### 792. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5894` → after: `L6526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6526) · [Before (L5894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5894)

```diff
-             of this._meshParents) ub.tC() || this._attachNewMeshInstanceToParent(ub, Bb);
+             of this._meshParents) Jd.lq() || this._attachNewMeshInstanceToParent(Jd, pd);
```

#### 793. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5915-L5917` → after: `L6547-L6549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6547-L6549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6547-L6549) · [Before (L5915-L5917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5915-L5917)

```diff
-           xX: Bb
-         } = (0, Yu.g)();
-         Bb.Wp(hb, !1), (0, Gu.p)(hb, 0, 0, 0), null === ub || void 0 === ub || ub(bb, hb)
+           UL: pd
+         } = (0, CJ.e)();
+         pd.MO(kd, !1), (0, PJ.p)(kd, 0, 0, 0), null === Jd || void 0 === Jd || Jd(dd, kd)
```

#### 794. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5922-L5923` → after: `L6554-L6555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6554-L6555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6554-L6555) · [Before (L5922-L5923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5922-L5923)

```diff
-             const hb = (0, Yu.e)(),
-               Bb = hb.Mw.metadatas;
+             const kd = (0, CJ.d)(),
+               pd = kd.Hl.metadatas;
```

#### 795. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5926` → after: `L6558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6558) · [Before (L5926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5926)

```diff
-               for (const ub in (0, Xb.hb)(pb.m)) {
+               for (const Jd in (0, Ld.X)(Od.p)) {
```

#### 796. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5936` → after: `L6568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6568) · [Before (L5936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5936)

```diff
-             return null !== (ub = Vu.byRoot.get(bb)) && void 0 !== ub ? ub : Fu
+             return null !== (Jd = uJ.byRoot.get(dd)) && void 0 !== Jd ? Jd : tJ
```

#### 797. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5948-L5949` → after: `L6580-L6581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6580-L6581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6580-L6581) · [Before (L5948-L5949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5948-L5949)

```diff
-         super(bb, ub), this.harvestType = void 0, this.ttb = void 0, this.drops = void 0, this.modelScale = void 0, this.averageColour = void 0, this.Pw = void 0, this.specialToolDrop = void 0, this.stoodOnSpeedMultiplier = void 0, this.soundType = void 0, this.customPlanesInfo = … [truncated]
-         const hb = (0, Yu.e)().Mw.metadatas[bb];
+         super(dd, Jd), this.harvestType = void 0, this.ttb = void 0, this.drops = void 0, this.modelScale = void 0, this.averageColour = void 0, this.dQ = void 0, this.specialToolDrop = void 0, this.stoodOnSpeedMultiplier = void 0, this.soundType = void 0, this.customPlanesInfo = … [truncated]
+         const kd = (0, CJ.d)().Hl.metadatas[dd];
```

#### 798. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5964` → after: `L6596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6596) · [Before (L5964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5964)

```diff
-         })), vb.i.subscribe("ttbEffectMultiplier", (bb => {
+         })), Sd.j.subscribe("ttbEffectMultiplier", (dd => {
```

#### 799. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5972` → after: `L6604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6604) · [Before (L5972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5972)

```diff
-         return null !== (bb = (0, Yu.g)().Mw.U1(this.id)) && void 0 !== bb ? bb : 0
+         return null !== (dd = (0, CJ.e)().Hl.e_(this.id)) && void 0 !== dd ? dd : 0
```

#### 800. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5977-L5978` → after: `L6609-L6610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6609-L6610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6609-L6610) · [Before (L5977-L5978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5977-L5978)

```diff
-         super(bb, ub), this.cuboidShape = Zu.b, this.harvestLevel = void 0, this.meshMaterial = void 0, this._sourceMeshGrowing = void 0, this.transTex = void 0, this.texturePerSide = void 0, this.model = void 0, this._shareThinBase = null, this._heldSourceMesh = null;
-         const hb = Bb.i[bb];
+         super(dd, Jd), this.cuboidShape = LJ.d, this.harvestLevel = void 0, this.meshMaterial = void 0, this._sourceMeshGrowing = void 0, this.transTex = void 0, this.texturePerSide = void 0, this.model = void 0, this._shareThinBase = null, this._heldSourceMesh = null;
+         const kd = pd.g[dd];
```

#### 801. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5994` → after: `L6626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6626) · [Before (L5994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5994)

```diff
-         if (this.usesBlockAtlasMaterial()) Bb = Kb.b.getBlockAtlasMaterial(bb, this.transTex, null !== (Ob = this.unlitStandaloneMesh) && void 0 !== Ob && Ob);
+         if (this.usesBlockAtlasMaterial()) pd = Gd.d.getBlockAtlasMaterial(dd, this.transTex, null !== (Nd = this.unlitStandaloneMesh) && void 0 !== Nd && Nd);
```

#### 802. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L5997-L5999` → after: `L6629-L6631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6629-L6631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6629-L6631) · [Before (L5997-L5999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L5997-L5999)

```diff
-           Bb = (0, fb.b)({
-             name: `${ub}BlockMaterial`,
-             Xp: bb,
+           pd = (0, Vd.e)({
+             name: `${Jd}BlockMaterial`,
+             BO: dd,
```

#### 803. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6005` → after: `L6637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6637) · [Before (L6005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6005)

```diff
-                 transparencyMode: Ou.p.alphaTest,
+                 transparencyMode: WJ.r.alphaTest,
```

#### 804. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6011` → after: `L6643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6643) · [Before (L6011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6011)

```diff
-               (0, Pb.b)(bb, !0), (0, Ou.G)(bb)
+               (0, Ed.d)(dd, !0), (0, WJ.I)(dd)
```

#### 805. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6026` → after: `L6658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6658) · [Before (L6026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6026)

```diff
-           MS: !0
+           EC: !0
```

#### 806. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6031` → after: `L6663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6663) · [Before (L6031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6031)

```diff
-         return this._needsHeldBase(bb) ? `${ub}|held` : ub
+         return this._needsHeldBase(dd) ? `${Jd}|held` : Jd
```

#### 807. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6034` → after: `L6666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6666) · [Before (L6034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6034)

```diff
-         if (!bb.MS || this._canShareThinBase()) return !1;
+         if (!dd.EC || this._canShareThinBase()) return !1;
```

#### 808. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6044` → after: `L6676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6676) · [Before (L6044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6044)

```diff
-         return this._shareThinBase ??= this.usesBlockAtlasMaterial() && (0, Wb.f)() && null !== (bb = null === (ub = this._perFaceAtlasIdx(!1)) || void 0 === ub ? void 0 : ub.every(Number.isFinite)) && void 0 !== bb && bb, this._shareThinBase
+         return this._shareThinBase ??= this.usesBlockAtlasMaterial() && (0, vd.j)() && null !== (dd = null === (Jd = this._perFaceAtlasIdx(!1)) || void 0 === Jd ? void 0 : Jd.every(Number.isFinite)) && void 0 !== dd && dd, this._shareThinBase
```

#### 809. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6051-L6052` → after: `L6683-L6684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6683-L6684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6683-L6684) · [Before (L6051-L6052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6051-L6052)

```diff
-         const Bb = this._perFaceAtlasIdx(hb.MS),
-           Ob = (0, Yu.g)().xX.oN;
+         const pd = this._perFaceAtlasIdx(kd.EC),
+           Nd = (0, CJ.e)().UL.Qm;
```

#### 810. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6056` → after: `L6688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6688) · [Before (L6056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6056)

```diff
-         const ub = bb ? Vb : yb,
+         const Jd = dd ? ud : rd,
```

#### 811. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6063` → after: `L6695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6695) · [Before (L6063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6063)

```diff
-           return ub.map((bb => Bb.v[(0, ob.m)(hb[Ob[bb]])]))
+           return Jd.map((dd => pd.z[(0, ed.n)(kd[Nd[dd]])]))
```

#### 812. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6065` → after: `L6697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6697) · [Before (L6065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6065)

```diff
-         const Gb = "string" === typeof hb ? hb : Nu(hb);
+         const Wd = "string" === typeof kd ? kd : nJ(kd);
```

#### 813. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6067` → after: `L6699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6699) · [Before (L6067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6067)

```diff
-           const bb = Bb.v[(0, ob.m)(Gb)];
+           const dd = pd.z[(0, ed.n)(Wd)];
```

#### 814. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6083-L6085` → after: `L6715-L6717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6715-L6717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6715-L6717) · [Before (L6083-L6085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6083-L6085)

```diff
-             xX: Ob
-           } = (0, Yu.g)();
-         Ob.Wp(Bb, !1);
+             UL: Nd
+           } = (0, CJ.e)();
+         Nd.MO(pd, !1);
```

#### 815. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6087` → after: `L6719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6719) · [Before (L6087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6087)

```diff
-         return (0, Gu.p)(Bb, 0, 0, 0), Bb.pa.set(Gb.x, Gb.y, Gb.z), Bb.Fs.aLightLevels === (null === (bb = this._sourceMesh.Fs) || void 0 === bb ? void 0 : bb.aLightLevels) && (Bb.Fs.aLightLevels = (0, Bu.r)()), null === hb || void 0 === hb || hb(Bb, Bb), Bb
+         return (0, PJ.p)(pd, 0, 0, 0), pd.fp.set(Wd.x, Wd.y, Wd.z), pd.fn.aLightLevels === (null === (dd = this._sourceMesh.fn) || void 0 === dd ? void 0 : dd.aLightLevels) && (pd.fn.aLightLevels = (0, NJ.o)()), null === kd || void 0 === kd || kd(pd, pd), pd
```

#### 816. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6093` → after: `L6725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6725) · [Before (L6093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6093)

```diff
-           const ub = (0, Yu.g)().xX.ZN();
+           const Jd = (0, CJ.e)().UL.Wm();
```

#### 817. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6095` → after: `L6727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6727) · [Before (L6095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6095)

```diff
-             materialOverride: Kb.b.getBlockAtlasMaterialForGrowing(ub, this.transTex, null !== (bb = this.unlitStandaloneMesh) && void 0 !== bb && bb)
+             materialOverride: Gd.d.getBlockAtlasMaterialForGrowing(Jd, this.transTex, null !== (dd = this.unlitStandaloneMesh) && void 0 !== dd && dd)
```

#### 818. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6100-L6102` → after: `L6732-L6734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6732-L6734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6732-L6734) · [Before (L6100-L6102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6100-L6102)

```diff
-             xX: hb
-           } = (0, Yu.g)();
-         return hb.Wp(ub, !1), (0, Gu.p)(ub, 0, 0, 0), ub
+             UL: kd
+           } = (0, CJ.e)();
+         return kd.MO(Jd, !1), (0, PJ.p)(Jd, 0, 0, 0), Jd
```

#### 819. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6107` → after: `L6739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6739) · [Before (L6107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6107)

```diff
-           MS: hb = !1,
+           EC: kd = !1,
```

#### 820. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6110` → after: `L6742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6742) · [Before (L6110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6110)

```diff
-         } = null !== bb && void 0 !== bb ? bb : {}, Gb = [], Ub = (0, Wb.f)(), Lb = this._perFaceAtlasIdx(hb);
+         } = null !== dd && void 0 !== dd ? dd : {}, Wd = [], Pd = (0, vd.j)(), Zd = this._perFaceAtlasIdx(kd);
```

#### 821. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6114-L6115` → after: `L6746-L6747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6746-L6747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6746-L6747) · [Before (L6114-L6115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6114-L6115)

```diff
-               ub = (0, Wb.e)(bb, 0, Ub),
-               hb = (0, Wb.e)(bb, 1, Ub);
+               Jd = (0, vd.g)(dd, 0, Pd),
+               kd = (0, vd.g)(dd, 1, Pd);
```

#### 822. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6119-L6121` → after: `L6751-L6753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6751-L6753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6751-L6753) · [Before (L6119-L6121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6119-L6121)

```diff
-         const Yb = Lb ? (0, Zu.s)(Bb, Lb) : void 0,
-           Sb = tu(`${this.name}${hb?"Held":""}Block`, Bb, Gb, Yb, Ob);
-         return Sb.material = null !== ub && void 0 !== ub ? ub : this.meshMaterial, ub || ((0, mb.i)(Sb), (0, Ib.e)(Sb), nu(Sb, this.shaderPackItem(0, void 0))), Sb.Zx(!1), Sb.lp = !1, Sb
+         const gd = Zd ? (0, LJ.n)(pd, Zd) : void 0,
+           Cd = jJ(`${this.name}${kd?"Held":""}Block`, pd, Wd, gd, Nd);
+         return Cd.material = null !== Jd && void 0 !== Jd ? Jd : this.meshMaterial, Jd || ((0, Dd.k)(Cd), (0, Td.b)(Cd), aJ(Cd, this.shaderPackItem(0, void 0))), Cd.XM(!1), Cd.iO = !1, Cd
```

#### 823. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6131` → after: `L6763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6763) · [Before (L6131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6131)

```diff
-         super(bb, ub), this.type = "StairsBlock", this.cuboidShape = Zu.h
+         super(dd, Jd), this.type = "StairsBlock", this.cuboidShape = LJ.f
```

#### 824. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6137-L6139` → after: `L6769-L6771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6769-L6771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6769-L6771) · [Before (L6137-L6139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6137-L6139)

```diff
-         super(bb, ub), this.droppedMeshTypeScale = .8 * ab.e.droppedBlockSize, this.droppedMeshOffset = 1.3 * ab.e.droppedBlockSize, this.bakeInScaling = 1 / 4 * (null !== (hb = this.heldItemScale) && void 0 !== hb ? hb : 1);
-         const Ob = Bb.i[bb];
-         Ob.blockModelItem && (console.assert(void 0 !== Ob.blockModel, `If blockModelItem is true blockModel must be defined: Failed for ${bb}`), this.modelDefault = {
+         super(dd, Jd), this.droppedMeshTypeScale = .8 * Kd.g.droppedBlockSize, this.droppedMeshOffset = 1.3 * Kd.g.droppedBlockSize, this.bakeInScaling = 1 / 4 * (null !== (kd = this.heldItemScale) && void 0 !== kd ? kd : 1);
+         const Nd = pd.g[dd];
+         Nd.blockModelItem && (console.assert(void 0 !== Nd.blockModel, `If blockModelItem is true blockModel must be defined: Failed for ${dd}`), this.modelDefault = {
```

#### 825. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6141-L6142` → after: `L6773-L6774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6773-L6774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6773-L6774) · [Before (L6141-L6142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6141-L6142)

```diff
-           type: sb.d.BLOCK
-         }, this.modelSource = lb.b.getModel(this.modelDefault.name, sb.d.BLOCK)), this.type = "TwoDBlock"
+           type: Ud.f.BLOCK
+         }, this.modelSource = Id.d.getModel(this.modelDefault.name, Ud.f.BLOCK)), this.type = "TwoDBlock"
```

#### 826. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6148` → after: `L6780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6780) · [Before (L6148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6148)

```diff
-         super(bb, ub), this.droppedMeshTypeScale = .8 * ab.e.droppedBlockSize, this.droppedMeshOffset = 1.3 * ab.e.droppedBlockSize, this.bakeInScaling = 1 / 4 * (null !== (hb = this.heldItemScale) && void 0 !== hb ? hb : 1), this.type = "TwoDItem"
+         super(dd, Jd), this.droppedMeshTypeScale = .8 * Kd.g.droppedBlockSize, this.droppedMeshOffset = 1.3 * Kd.g.droppedBlockSize, this.bakeInScaling = 1 / 4 * (null !== (kd = this.heldItemScale) && void 0 !== kd ? kd : 1), this.type = "TwoDItem"
```

#### 827. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6153` → after: `L6785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6785) · [Before (L6153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6153)

```diff
-         super(bb, ub), this.armourReduction = void 0, this.type = "TwoDArmour", this.armourReduction = pb.j[bb].armourReduction
+         super(dd, Jd), this.armourReduction = void 0, this.type = "TwoDArmour", this.armourReduction = Od.n[dd].armourReduction
```

#### 828. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6158` → after: `L6790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6790) · [Before (L6158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6158)

```diff
-       Yu.i.itemsClient = Bh, Yu.i.blocksClient = Oh, Yu.i.nonBlocksClient = Gh
+       CJ.f.itemsClient = Nk, CJ.f.blocksClient = Wk, CJ.f.nonBlocksClient = Pk
```

#### 829. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6167-L6172` → after: `L6799-L6804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6799-L6804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6799-L6804) · [Before (L6167-L6172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6167-L6172)

```diff
-             super(bb, ub), this.gunType = void 0, this.fireRate = void 0, this.fireRateWithHeldTouch = void 0, this.equipDelay = void 0, this.shotPelletCount = void 0, this.msPerRound = void 0, this.cadenceMs = void 0, this.reloadTime = void 0, this.clipSize = void 0, this.reload … [truncated]
-             const Yb = pb.j[bb];
-             this.gunType = Yb.gunType, this.scopeType = Yb.scopeType, this.fireRate = Yb.fireRate, this.fireRateWithHeldTouch = Yb.fireRateWithHeldTouch, this.equipDelay = Yb.equipDelay, this.damage = Yb.damage, this.shotPelletCount = Yb.shotPelletCount, this.msPerRound = Yb.msPe … [truncated]
-             const Sb = (0, fb.b)({
-                 name: `${bb}BulletMeshMaterial`,
-                 Xp: ub,
+             super(dd, Jd), this.gunType = void 0, this.fireRate = void 0, this.fireRateWithHeldTouch = void 0, this.equipDelay = void 0, this.shotPelletCount = void 0, this.msPerRound = void 0, this.cadenceMs = void 0, this.reloadTime = void 0, this.clipSize = void 0, this.reload … [truncated]
+             const gd = Od.n[dd];
+             this.gunType = gd.gunType, this.scopeType = gd.scopeType, this.fireRate = gd.fireRate, this.fireRateWithHeldTouch = gd.fireRateWithHeldTouch, this.equipDelay = gd.equipDelay, this.damage = gd.damage, this.shotPelletCount = gd.shotPelletCount, this.msPerRound = gd.msPe … [truncated]
+             const Cd = (0, Vd.e)({
+                 name: `${dd}BulletMeshMaterial`,
+                 BO: Jd,
```

#### 830. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6181-L6183` → after: `L6813-L6815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6813-L6815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6813-L6815) · [Before (L6181-L6183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6181-L6183)

```diff
-                 xX: ab
-               } = (0, Yu.g)();
-             this.bulletCasingMesh = (0, uu.l)(ab, `${this.name}BulletCasingMesh`, (0, Lu.c)({
+                 UL: Kd
+               } = (0, CJ.e)();
+             this.bulletCasingMesh = (0, kJ.q)(Kd, `${this.name}BulletCasingMesh`, (0, gJ.e)({
```

#### 831. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6187-L6190` → after: `L6819-L6822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6819-L6822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6819-L6822) · [Before (L6187-L6190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6187-L6190)

```diff
-             })), this.bulletCasingMesh.material = Sb, this.bulletCasingMesh.lp = !1;
-             const Hb = (0, fb.b)({
-               name: `${bb}BulletHitBillboard`,
-               Xp: ub,
+             })), this.bulletCasingMesh.material = Cd, this.bulletCasingMesh.iO = !1;
+             const od = (0, Vd.e)({
+               name: `${dd}BulletHitBillboard`,
+               BO: Jd,
```

#### 832. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6197` → after: `L6829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6829) · [Before (L6197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6197)

```diff
-             this.bulletHitBillboardPlane = (0, uu.l)(ab, `${this.name}BulletHitBillboardPlane`, (0, Lu.h)({
+             this.bulletHitBillboardPlane = (0, kJ.q)(Kd, `${this.name}BulletHitBillboardPlane`, (0, gJ.k)({
```

#### 833. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6200-L6203` → after: `L6832-L6835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6832-L6835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6832-L6835) · [Before (L6200-L6203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6200-L6203)

```diff
-             })), this.bulletHitBillboardPlane.lp = !1, this.bulletHitBillboardPlane.material = Hb;
-             const wb = (0, fb.b)({
-               name: `${bb}BulletMeshMaterial`,
-               Xp: ub,
+             })), this.bulletHitBillboardPlane.iO = !1, this.bulletHitBillboardPlane.material = od;
+             const ld = (0, Vd.e)({
+               name: `${dd}BulletMeshMaterial`,
+               BO: Jd,
```

#### 834. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6212` → after: `L6844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6844) · [Before (L6212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6212)

```diff
-             this.movingBulletMesh = (0, uu.l)(ab, `${this.name}MovingBulletMesh`, (0, Lu.c)({
+             this.movingBulletMesh = (0, kJ.q)(Kd, `${this.name}MovingBulletMesh`, (0, gJ.e)({
```

#### 835. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6216` → after: `L6848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6848) · [Before (L6216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6216)

```diff
-             })), this.movingBulletMesh.material = wb, this.movingBulletMesh.lp = !1, this.bakeInScaling = .19 * this.heldItemScale, this.droppedMeshTypeScale = .1, this.droppedMeshOffset = .5
+             })), this.movingBulletMesh.material = ld, this.movingBulletMesh.iO = !1, this.bakeInScaling = .19 * this.heldItemScale, this.droppedMeshTypeScale = .1, this.droppedMeshOffset = .5
```

#### 836. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6235` → after: `L6867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6867) · [Before (L6235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6235)

```diff
-             super(bb, ub), this.harvests = void 0, this.multiplier = void 0, this.level = void 0, this.type = "TwoDTool", this.harvests = pb.j[bb].harvests, this.multiplier = pb.j[bb].multiplier, this.level = pb.j[bb].level
+             super(dd, Jd), this.harvests = void 0, this.multiplier = void 0, this.level = void 0, this.type = "TwoDTool", this.harvests = Od.n[dd].harvests, this.multiplier = Od.n[dd].multiplier, this.level = Od.n[dd].level
```

#### 837. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6242-L6243` → after: `L6874-L6875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6874-L6875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6874-L6875) · [Before (L6242-L6243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6242-L6243)

```diff
-             super(bb, ub), this._armourTint = void 0, this.type = "GrayscaleTwoDArmour", this._armourTint = null !== (hb = (0, Ab.g)(bb)) && void 0 !== hb ? hb : [255, 255, 255];
-             const Bb = `Wood ${(0,Zb.Eb)(bb)}`;
+             super(dd, Jd), this._armourTint = void 0, this.type = "GrayscaleTwoDArmour", this._armourTint = null !== (kd = (0, Rd.d)(dd)) && void 0 !== kd ? kd : [255, 255, 255];
+             const pd = `Wood ${(0,Qd.Eb)(dd)}`;
```

#### 838. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6245-L6246` → after: `L6877-L6878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6877-L6878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6877-L6878) · [Before (L6245-L6246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6245-L6246)

```diff
-               type: sb.h.HTTP,
-               url: this.isCustom ? `${Mb.clientSideServerUrls.staticUrl}/models/${(0,Zb.Xb)((0,Su.b)().gameNameWithVariation)}/${Bb}.glb` : `${Mb.clientSideServerUrls.staticUrl}/models/${Bb}.glb`
+               type: Ud.j.HTTP,
+               url: this.isCustom ? `${yd.clientSideServerUrls.staticUrl}/models/${(0,Qd._b)((0,KJ.d)().gameNameWithVariation)}/${pd}.glb` : `${yd.clientSideServerUrls.staticUrl}/models/${pd}.glb`
```

#### 839. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6252` → after: `L6884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6884) · [Before (L6252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6252)

```diff
-               Xp: ub
+               BO: Jd
```

#### 840. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6256-L6257` → after: `L6888-L6889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6888-L6889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6888-L6889) · [Before (L6256-L6257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6256-L6257)

```diff
-             } = Cb.c;
-             return (0, fb.b)({
+             } = xd.e;
+             return (0, Vd.e)({
```

#### 841. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6259` → after: `L6891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6891) · [Before (L6259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6259)

```diff
-               Xp: ub,
+               BO: Jd,
```

#### 842. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6266` → after: `L6898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6898) · [Before (L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6266)

```diff
-                   samplingMode: Uu.i.nearestNearestMipLinear,
+                   samplingMode: ZJ.h.nearestNearestMipLinear,
```

#### 843. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6268-L6269` → after: `L6900-L6901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6900-L6901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6900-L6901) · [Before (L6268-L6269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6268-L6269)

```diff
-                     wrapU: Uu.d.clamp,
-                     wrapV: Uu.d.clamp
+                     wrapU: ZJ.e.clamp,
+                     wrapV: ZJ.e.clamp
```

#### 844. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6277` → after: `L6909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6909) · [Before (L6277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6277)

```diff
-                 (0, Ou.q)(bb, Eb.e, {
+                 (0, WJ.s)(dd, hd.c, {
```

#### 845. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6284` → after: `L6916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6916) · [Before (L6284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6284)

```diff
-             super._registerSourceMeshBuffers(bb), bb.Ws("aArmourTint", 4), bb.Ws("aAtlasIdx1", 1), bb.Fs.aArmourTint = (0, Db.l)(...this._armourTint, 0), bb.Fs.aAtlasIdx1 = 0
+             super._registerSourceMeshBuffers(dd), dd.EX("aArmourTint", 4), dd.EX("aAtlasIdx1", 1), dd.fn.aArmourTint = (0, Md.o)(...this._armourTint, 0), dd.fn.aAtlasIdx1 = 0
```

#### 846. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6295` → after: `L6927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6927) · [Before (L6295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6295)

```diff
-             const Bb = (0, Yu.g)().xX.oN,
+             const pd = (0, CJ.e)().UL.Qm,
```

#### 847. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6316` → after: `L6948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6948) · [Before (L6316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6316)

```diff
-       if (bb in Bb.i) {
+       if (dd in pd.g) {
```

#### 848. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6318-L6319` → after: `L6950-L6951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6950-L6951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6950-L6951) · [Before (L6318-L6319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6318-L6319)

```diff
-         const Ob = null === (Ub = Bb.i[bb].model) || void 0 === Ub ? void 0 : Ub.split("|")[0];
-         Gb = Bb.i[bb].model || Bb.i[bb].twoDBlockItem ? Uh[Ob] ? new Uh[Ob](bb, hb) : new Ru(bb, hb) : new Tu(bb, hb), Oh[bb] = Gb, Oh[ub] = Gb
+         const Nd = null === (Pd = pd.g[dd].model) || void 0 === Pd ? void 0 : Pd.split("|")[0];
+         Wd = pd.g[dd].model || pd.g[dd].twoDBlockItem ? Zk[Nd] ? new Zk[Nd](dd, kd) : new dk(dd, kd) : new HJ(dd, kd), Wk[dd] = Wd, Wk[Jd] = Wd
```

#### 849. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6324` → after: `L6956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6956) · [Before (L6324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6324)

```diff
-   37752: (bb, ub, hb) => {
+   38327: (dd, Jd, kd) => {
```

#### 850. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6327-L6328` → after: `L6960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6960) · [Before (L6327-L6328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6327-L6328)

```diff
-       h: () => Yb,
-       k: () => Ab
+       g: () => Rd
```

#### 851. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6330-L6334` → after: `L6962-L6966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6962-L6966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6962-L6966) · [Before (L6330-L6334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6330-L6334)

```diff
-     var Bb = hb(36720),
-       Ob = hb(37077),
-       Gb = hb(37501),
-       Ub = hb(37217),
-       Lb = hb(36881);
+     var pd = kd(37245),
+       Nd = kd(37640),
+       Wd = kd(38097),
+       Pd = kd(37797),
+       Zd = kd(37422);
```

#### 852. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6337` → after: `L6969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6969) · [Before (L6337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6337)

```diff
-         this.modelUrl = bb, this.container = ub, this.adoptedNodes = hb, this.Xp = Bb
+         this.modelUrl = dd, this.container = Jd, this.adoptedNodes = kd, this.BO = pd
```

#### 853. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6342` → after: `L6974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6974) · [Before (L6342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6342)

```diff
-         if (!Ob) throw new Error(`Could not find root node in model: ${Bb}`);
+         if (!Nd) throw new Error(`Could not find root node in model: ${pd}`);
```

#### 854. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6344` → after: `L6976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6976) · [Before (L6344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6344)

```diff
-         Ob.pa.set(-Ob.pa.x, Ob.pa.y, Ob.pa.z), Hb(Ob, Gb);
+         Nd.fp.set(-Nd.fp.x, Nd.fp.y, Nd.fp.z), od(Nd, Wd);
```

#### 855. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6354` → after: `L6986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6986) · [Before (L6354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6354)

```diff
-         return Gb.pa.set(-Gb.pa.x, Gb.pa.y, Gb.pa.z), {
+         return Wd.fp.set(-Wd.fp.x, Wd.fp.y, Wd.fp.z), {
```

#### 856. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6365` → after: `L6997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6997) · [Before (L6365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6365)

```diff
-         if (0 === Bb.length) return void console.warn(`Mesh "${hb}" not found in model: ${this.modelUrl}`);
+         if (0 === pd.length) return void console.warn(`Mesh "${kd}" not found in model: ${this.modelUrl}`);
```

#### 857. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6367` → after: `L6999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R6999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L6999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L6999) · [Before (L6367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6367)

```diff
-         if (!Ob) throw new Error(`Could not merge the meshes named ${hb} in model: ${this.modelUrl}`);
+         if (!Nd) throw new Error(`Could not merge the meshes named ${kd} in model: ${this.modelUrl}`);
```

#### 858. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6381` → after: `L7013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7013) · [Before (L6381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6381)

```diff
-             const bb = wb(hb, Gb, this.Xp),
+             const dd = ld(kd, Wd, this.BO),
```

#### 859. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6386` → after: `L7018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7018) · [Before (L6386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6386)

```diff
-         else console.warn(`Node "${hb}" not found in model: ${this.modelUrl}`)
+         else console.warn(`Node "${kd}" not found in model: ${this.modelUrl}`)
```

#### 860. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6396` → after: `L7028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7028) · [Before (L6396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6396)

```diff
-             const bb = "string" === typeof Lb ? Lb : Lb.nodeName;
+             const dd = "string" === typeof Zd ? Zd : Zd.nodeName;
```

#### 861. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6402` → after: `L7034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7034) · [Before (L6402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6402)

```diff
-         if (0 === Sb.length) return void console.warn(`No descendant meshes under "${Bb}" to merge in model: ${this.modelUrl}`);
+         if (0 === Cd.length) return void console.warn(`No descendant meshes under "${pd}" to merge in model: ${this.modelUrl}`);
```

#### 862. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6416` → after: `L7048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7048) · [Before (L6416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6416)

```diff
-         if (!pb) return void console.warn(`Merge failed for "${Bb}" in model: ${this.modelUrl}`);
+         if (!Od) return void console.warn(`Merge failed for "${pd}" in model: ${this.modelUrl}`);
```

#### 863. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6422-L6423` → after: `L7054-L7055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7054-L7055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7054-L7055) · [Before (L6422-L6423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6422-L6423)

```diff
-           of wb) null === Zb || Zb.tC() || (Zb.computeWorldMatrix(!0), Xb(Lb, Zb), ab(Lb, ob.multiply(Zb.getWorldMatrix().clone().invert())));
-         pb.name = Ob, (0, Lb.r)(pb, (() => {
+           of ld) null === Qd || Qd.lq() || (Qd.computeWorldMatrix(!0), Ld(Zd, Qd), Kd(Zd, ed.multiply(Qd.getWorldMatrix().clone().invert())));
+         Od.name = Nd, (0, Zd.p)(Od, (() => {
```

#### 864. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6432` → after: `L7064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7064) · [Before (L6432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6432)

```diff
-         return null !== (ub = null !== (hb = this.container.transformNodes.find((ub => ub.name === bb))) && void 0 !== hb ? hb : this.container.meshes.find((ub => ub.name === bb))) && void 0 !== ub ? ub : null
+         return null !== (Jd = null !== (kd = this.container.transformNodes.find((Jd => Jd.name === dd))) && void 0 !== kd ? kd : this.container.meshes.find((Jd => Jd.name === dd))) && void 0 !== Jd ? Jd : null
```

#### 865. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6441` → after: `L7073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7073) · [Before (L6441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6441)

```diff
-         for (const ub of [...bb]) ub.tC() || this.adoptedNodes.has(ub) || ub.dispose()
+         for (const Jd of [...dd]) Jd.lq() || this.adoptedNodes.has(Jd) || Jd.dispose()
```

#### 866. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6450` → after: `L7082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7082) · [Before (L6450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6450)

```diff
-       const hb = new Bb.YX,
+       const kd = new pd.IL,
```

#### 867. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6452-L6453` → after: `L7084-L7085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7084-L7085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7084-L7085) · [Before (L6452-L6453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6452-L6453)

```diff
-         Gb = new Bb.YX;
-       ub.decompose(Gb, Ob, hb), bb.position = hb, bb.rotationQuaternion = Ob, bb.pa = Gb
+         Wd = new pd.IL;
+       Jd.decompose(Wd, Nd, kd), dd.position = kd, dd.rotationQuaternion = Nd, dd.fp = Wd
```

#### 868. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6458` → after: `L7090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7090) · [Before (L6458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6458)

```diff
-       ub.position = bb.position.clone(), hb ? ub.rotationQuaternion = new Bb.Quaternion(hb.x, hb.y, hb.z, hb.w) : ub.rotation = bb.rotation.clone(), ub.pa = bb.pa.clone()
+       Jd.position = dd.position.clone(), kd ? Jd.rotationQuaternion = new pd.Quaternion(kd.x, kd.y, kd.z, kd.w) : Jd.rotation = dd.rotation.clone(), Jd.fp = dd.fp.clone()
```

#### 869. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6462` → after: `L7094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7094) · [Before (L6462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6462)

```diff
-       return (0, Ob.g)(ub) ? (0, Gb.n)(ub.xX, bb) : new((0, Ub.e)().TransformNode)(bb, hb)
+       return (0, Nd.h)(Jd) ? (0, Wd.t)(Jd.UL, dd) : new((0, Pd.e)().TransformNode)(dd, kd)
```

#### 870. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6466` → after: `L7098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7098) · [Before (L6466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6466)

```diff
-       return (0, Ob.g)(bb[0]) ? (0, Gb.k)(bb, !1) : (0, Lb.u)(bb)
+       return (0, Nd.h)(dd[0]) ? (0, Wd.p)(dd, !1) : (0, Zd.s)(dd)
```

#### 871. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6474` → after: `L7106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7106) · [Before (L6474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6474)

```diff
-       return ["Mesh", "LiteMesh"].includes(bb.getClassName()) && bb.getTotalVertices() > 0 ? bb : null
+       return ["Mesh", "LiteMesh"].includes(dd.getClassName()) && dd.getTotalVertices() > 0 ? dd : null
```

#### 872. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6494` → after: `L7126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7126) · [Before (L6494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6494)

```diff
-   37517: (bb, ub, hb) => {
+   38115: (dd, Jd, kd) => {
```

#### 873. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6503-L6505` → after: `L7136-L7137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7136-L7137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7136-L7137) · [Before (L6503-L6505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6503-L6505)

```diff
-       s: () => Nb,
-       u: () => ib,
-       x: () => jb
+       t: () => bd,
+       u: () => sd
```

#### 874. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6507-L6513` → after: `L7139-L7145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7139-L7145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7139-L7145) · [Before (L6507-L6513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6507-L6513)

```diff
-     var Bb = hb(4013),
-       Ob = hb(9181),
-       Gb = hb(191),
-       Ub = hb(1133),
-       Lb = hb(1784),
-       Yb = hb(2941),
-       Sb = hb(324),
+     var pd = kd(4090),
+       Nd = kd(9331),
+       Wd = kd(193),
+       Pd = kd(1260),
+       Zd = kd(1901),
+       gd = kd(3011),
+       Cd = kd(325),
```

#### 875. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6515-L6520` → after: `L7147-L7152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7147-L7152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7147-L7152) · [Before (L6515-L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6515-L6520)

```diff
-       Hb = hb(2560),
-       wb = hb(37468),
-       Zb = hb(36855),
-       Xb = hb(36720),
-       pb = hb(588),
-       ob = hb(37521);
+       od = kd(2634),
+       ld = kd(38067),
+       Qd = kd(37386),
+       Ld = kd(37245),
+       Od = kd(610),
+       ed = kd(38121);
```

#### 876. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6524` → after: `L7156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7156) · [Before (L6524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6524)

```diff
-       Wb = (0, Yb.e)("square_particle"),
+       vd = (0, gd.h)("square_particle"),
```

#### 877. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6528-L6530` → after: `L7160-L7162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7160-L7162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7160-L7162) · [Before (L6528-L6530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6528-L6530)

```diff
-         this.pSystem = void 0, this.startedSystem = !1, this.PH = void 0, this.boxWidth = .8, this.currentRampColoursBlockId = void 0, this.PH = bb;
-         const ub = bb.xX.Hs("breakingParticles", 430);
-         this.pSystem = ub, ub.texture = (0, Zb.t)(bb.xX.ZN(), Wb), ub.blendMode = Bb.f.Standard, this.pSystem.addColorGradient(1, (0, wb.l)(255, 255, 255, Cb), (0, wb.l)(255, 255, 255, 1)), this.pSystem.useRampGradients = !0, this.pSystem.addColorRemapGradient(0, Cb, 1), this.pSy … [truncated]
+         this.pSystem = void 0, this.startedSystem = !1, this.Jl = void 0, this.boxWidth = .8, this.currentRampColoursBlockId = void 0, this.Jl = dd;
+         const Jd = dd.UL.FX("breakingParticles", 430);
+         this.pSystem = Jd, Jd.texture = (0, Qd.t)(dd.UL.Wm(), vd), Jd.blendMode = pd.d.Standard, this.pSystem.addColorGradient(1, (0, ld.o)(255, 255, 255, xd), (0, ld.o)(255, 255, 255, 1)), this.pSystem.useRampGradients = !0, this.pSystem.addColorRemapGradient(0, xd, 1), this.pSy … [truncated]
```

#### 878. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6533-L6534` → after: `L7165-L7166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7165-L7166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7165-L7166) · [Before (L6533-L6534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6533-L6534)

```diff
-         if (!bb || null === this.PH.zbb) return void(this.startedSystem && (this.pSystem.stop(), this.startedSystem = !1));
-         const ub = this.PH.zbb,
+         if (!dd || null === this.Jl.rdd) return void(this.startedSystem && (this.pSystem.stop(), this.startedSystem = !1));
+         const Jd = this.Jl.rdd,
```

#### 879. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6538-L6539` → after: `L7170-L7171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7170-L7171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7170-L7171) · [Before (L6538-L6539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6538-L6539)

```diff
-           } = (0, ob.b)(ub.position, Ob.i[ub.vR].ep, 0, this.boxWidth);
-         (0, wb.r)(this.pSystem, hb, Bb), this.updateParticleSystemColour();
+           } = (0, ed.d)(Jd.position, Nd.g[Jd.W9].DO, 0, this.boxWidth);
+         (0, ld.t)(this.pSystem, kd, pd), this.updateParticleSystemColour();
```

#### 880. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6542` → after: `L7174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7174) · [Before (L6542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6542)

```diff
-         Gb.x = this.PH.zbb.normal[0] + 1, Gb.y = this.PH.zbb.normal[1] + 1, Gb.z = this.PH.zbb.normal[2] + 1, Ub.x = this.PH.zbb.normal[0] - 1, Ub.y = this.PH.zbb.normal[1] - 1, Ub.z = this.PH.zbb.normal[2] - 1, 0 !== this.PH.zbb.normal[0] ? (Gb.x = this.PH.zbb.normal[0], Ub.x =  … [truncated]
+         Wd.x = this.Jl.rdd.normal[0] + 1, Wd.y = this.Jl.rdd.normal[1] + 1, Wd.z = this.Jl.rdd.normal[2] + 1, Pd.x = this.Jl.rdd.normal[0] - 1, Pd.y = this.Jl.rdd.normal[1] - 1, Pd.z = this.Jl.rdd.normal[2] - 1, 0 !== this.Jl.rdd.normal[0] ? (Wd.x = this.Jl.rdd.normal[0], Pd.x =  … [truncated]
```

#### 881. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6545` → after: `L7177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7177) · [Before (L6545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6545)

```diff
-         const bb = this.PH.rK(this.PH.zbb.position);
+         const dd = this.Jl.MI(this.Jl.rdd.position);
```

#### 882. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6547` → after: `L7179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7179) · [Before (L6547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6547)

```diff
-         const ub = db.getUniqueColoursForParticleSystem(this.PH.zbb.position);
+         const Jd = qd.getUniqueColoursForParticleSystem(this.Jl.rdd.position);
```

#### 883. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6557` → after: `L7189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7189) · [Before (L6557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6557)

```diff
-         bb.addRampGradient(0, (0, wb.f)(Bb));
+         dd.addRampGradient(0, (0, ld.g)(pd));
```

#### 884. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6561` → after: `L7193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7193) · [Before (L6561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6561)

```diff
-           bb.addRampGradient(Gb / ub.length - 1e-4, (0, wb.f)(hb)), bb.addRampGradient(Gb / ub.length, (0, wb.f)(Bb))
+           dd.addRampGradient(Wd / Jd.length - 1e-4, (0, ld.g)(kd)), dd.addRampGradient(Wd / Jd.length, (0, ld.g)(pd))
```

#### 885. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6564` → after: `L7196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7196) · [Before (L6564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6564)

```diff
-         bb.addRampGradient(1, (0, wb.f)(Ob))
+         dd.addRampGradient(1, (0, ld.g)(Nd))
```

#### 886. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6567-L6569` → after: `L7199-L7201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7199-L7201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7199-L7201) · [Before (L6567-L6569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6567-L6569)

```diff
-         const ub = (0, Hb.g)().rK(bb);
-         if (0 !== ub) return Yb.b.getAverageColours((0, Hb.e)().getMetaInfo(ub).rootName);
-         console.error(new Error(`getPosColourForParticleSystem called on air block ${JSON.stringify(bb)}`).stack)
+         const Jd = (0, od.e)().MI(dd);
+         if (0 !== Jd) return gd.d.getAverageColours((0, od.d)().getMetaInfo(Jd).rootName);
+         console.error(new Error(`getPosColourForParticleSystem called on air block ${JSON.stringify(dd)}`).stack)
```

#### 887. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6572` → after: `L7204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7204) · [Before (L6572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6572)

```diff
-     const rb = (0, Yb.e)("generic_2");
+     const Bd = (0, gd.h)("generic_2");
```

#### 888. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6574` → after: `L7206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7206) · [Before (L6574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6574)

```diff
-     const nb = (0, Yb.e)("critical_hit");
+     const ad = (0, gd.h)("critical_hit");
```

#### 889. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6578-L6583` → after: `L7210-L7215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7210-L7215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7210-L7215) · [Before (L6578-L6583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6578-L6583)

```diff
-       const ub = bb.xX.Hs("sprintParticles", 50);
-       ub.texture = (0, Zb.t)(bb.xX.ZN(), rb), ub.blendMode = Bb.f.Standard, ub.addColorGradient(0, (0, wb.l)(213, 237, 255, 1), (0, wb.l)(109, 170, 238, 1)), ub.addColorGradient(.2, (0, wb.l)(213, 237, 255, 1), (0, wb.l)(109, 170, 238, 1)), ub.addColorGradient(1, (0, wb.l)(213, 2 … [truncated]
-       ub.minLifeTime = .2, ub.maxLifeTime = .4, ub.minEmitPower = 30, ub.maxEmitPower = 50, ub.emitRate = 5, ub.gravity = new Xb.YX(0, -100, 0), ub.minSize = .15, ub.maxSize = .3, ub.addVelocityGradient(0, .075, .15), ub.addVelocityGradient(1, .075, .15), (0, wb.t)(bb, ub), ub.cr … [truncated]
-       const hb = bb.xX.Hs("Jb", 50);
-       hb.texture = (0, Zb.t)(bb.xX.ZN(), nb), hb.blendMode = Bb.f.Standard, hb.addColorGradient(0, (0, wb.l)(255, 167, 0, 1), (0, wb.l)(255, 103, 0, 1)), hb.addColorGradient(.2, (0, wb.l)(255, 167, 0, 1), (0, wb.l)(255, 103, 0, 1)), hb.addColorGradient(1, (0, wb.l)(255, 167, 0, 0 … [truncated]
-       hb.minLifeTime = .15, hb.maxLifeTime = .3, hb.minEmitPower = 30, hb.maxEmitPower = 50, hb.emitRate = 5, hb.gravity = new Xb.YX(0, -100, 0), hb.minSize = .15, hb.maxSize = .3, hb.addVelocityGradient(0, .075, .15), hb.addVelocityGradient(1, .075, .15), (0, wb.t)(bb, hb), hb.c … [truncated]
+       const Jd = dd.UL.FX("sprintParticles", 50);
+       Jd.texture = (0, Qd.t)(dd.UL.Wm(), Bd), Jd.blendMode = pd.d.Standard, Jd.addColorGradient(0, (0, ld.o)(213, 237, 255, 1), (0, ld.o)(109, 170, 238, 1)), Jd.addColorGradient(.2, (0, ld.o)(213, 237, 255, 1), (0, ld.o)(109, 170, 238, 1)), Jd.addColorGradient(1, (0, ld.o)(213, 2 … [truncated]
+       Jd.minLifeTime = .2, Jd.maxLifeTime = .4, Jd.minEmitPower = 30, Jd.maxEmitPower = 50, Jd.emitRate = 5, Jd.gravity = new Ld.IL(0, -100, 0), Jd.minSize = .15, Jd.maxSize = .3, Jd.addVelocityGradient(0, .075, .15), Jd.addVelocityGradient(1, .075, .15), (0, ld.y)(dd, Jd), Jd.cr … [truncated]
+       const kd = dd.UL.FX("fd", 50);
+       kd.texture = (0, Qd.t)(dd.UL.Wm(), ad), kd.blendMode = pd.d.Standard, kd.addColorGradient(0, (0, ld.o)(255, 167, 0, 1), (0, ld.o)(255, 103, 0, 1)), kd.addColorGradient(.2, (0, ld.o)(255, 167, 0, 1), (0, ld.o)(255, 103, 0, 1)), kd.addColorGradient(1, (0, ld.o)(255, 167, 0, 0 … [truncated]
+       kd.minLifeTime = .15, kd.maxLifeTime = .3, kd.minEmitPower = 30, kd.maxEmitPower = 50, kd.emitRate = 5, kd.gravity = new Ld.IL(0, -100, 0), kd.minSize = .15, kd.maxSize = .3, kd.addVelocityGradient(0, .075, .15), kd.addVelocityGradient(1, .075, .15), (0, ld.y)(dd, kd), kd.c … [truncated]
```

#### 890. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6605` → after: `L7237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7237) · [Before (L6605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6605)

```diff
-         blendMode: Bb.f.Standard
+         blendMode: pd.d.Standard
```

#### 891. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6642` → after: `L7274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7274) · [Before (L6642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6642)

```diff
-         blendMode: Bb.f.Standard
+         blendMode: pd.d.Standard
```

#### 892. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6679` → after: `L7311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7311) · [Before (L6679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6679)

```diff
-         blendMode: Bb.f.Standard
+         blendMode: pd.d.Standard
```

#### 893. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6684` → after: `L7316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7316) · [Before (L6684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6684)

```diff
-         this.pSystem = bb, this.maxLifetimeSecs = ub, this.stopTimeout = null, this.started = !1, this.stopAt = 0, this.FZ = !1, bb.manualEmitCount = 0
+         this.pSystem = dd, this.maxLifetimeSecs = Jd, this.stopTimeout = null, this.started = !1, this.stopAt = 0, this.pL = !1, dd.manualEmitCount = 0
```

#### 894. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6687` → after: `L7319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7319) · [Before (L6687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6687)

```diff
-         this.FZ || (this.pSystem.manualEmitCount = bb, this.started || (this.pSystem.start(), this.started = !0), this.stopAt = performance.now() + 1e3 * this.maxLifetimeSecs, null === this.stopTimeout && this.scheduleStop(1e3 * this.maxLifetimeSecs))
+         this.pL || (this.pSystem.manualEmitCount = dd, this.started || (this.pSystem.start(), this.started = !0), this.stopAt = performance.now() + 1e3 * this.maxLifetimeSecs, null === this.stopTimeout && this.scheduleStop(1e3 * this.maxLifetimeSecs))
```

#### 895. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6690` → after: `L7322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7322) · [Before (L6690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6690)

```diff
-         this.FZ = !0, null !== this.stopTimeout && (clearTimeout(this.stopTimeout), this.stopTimeout = null), this.pSystem.dispose()
+         this.pL = !0, null !== this.stopTimeout && (clearTimeout(this.stopTimeout), this.stopTimeout = null), this.pSystem.dispose()
```

#### 896. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6702` → after: `L7334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7334) · [Before (L6702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6702)

```diff
-       (0, wb.t)(bb, ub.pSystem), (0, wb.s)(ub.pSystem, hb), ub.emitAmount(Bb)
+       (0, ld.y)(dd, Jd.pSystem), (0, ld.u)(Jd.pSystem, kd), Jd.emitAmount(pd)
```

#### 897. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6704` → after: `L7336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7336) · [Before (L6704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6704)

```diff
-     const Jb = (0, Ob.k)("Fat Brown Mushroom");
+     const Xd = (0, Nd.j)("Fat Brown Mushroom");
```

#### 898. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6708` → after: `L7340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7340) · [Before (L6708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6708)

```diff
-       Nb(bb, ub === Jb ? Ub.i.BounceBrownMushroom : Ub.i.BounceRedMushroom, hb)
+       nd(dd, Jd === Xd ? Pd.d.BounceBrownMushroom : Pd.d.BounceRedMushroom, kd)
```

#### 899. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6712` → after: `L7344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7344) · [Before (L6712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6712)

```diff
-       const Bb = ub === Ub.i.Bunnyhop || ub === Ub.i.JumpPad;
+       const pd = Jd === Pd.d.Bunnyhop || Jd === Pd.d.JumpPad;
```

#### 900. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6714-L6715` → after: `L7346-L7347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7346-L7347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7346-L7347) · [Before (L6714-L6715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6714-L6715)

```diff
-       ub === Ub.i.Bunnyhop ? (Ob = [213, 237, 255], Lb = [109, 170, 238]) : ub === Ub.i.BounceRedMushroom ? (Ob = [196, 63, 63], Lb = [148, 53, 53]) : ub === Ub.i.BounceBrownMushroom ? (Ob = [186, 132, 91], Lb = [153, 107, 72]) : ub === Ub.i.BunnyhopBounce ? (Ob = [217, 170, 2],  … [truncated]
-       const Yb = bb.pW.iK(bb.bM);
+       Jd === Pd.d.Bunnyhop ? (Nd = [213, 237, 255], Zd = [109, 170, 238]) : Jd === Pd.d.BounceRedMushroom ? (Nd = [196, 63, 63], Zd = [148, 53, 53]) : Jd === Pd.d.BounceBrownMushroom ? (Nd = [186, 132, 91], Zd = [153, 107, 72]) : Jd === Pd.d.BunnyhopBounce ? (Nd = [217, 170, 2],  … [truncated]
+       const gd = dd.vG.yI(dd.kU);
```

#### 901. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6718` → after: `L7350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7350) · [Before (L6718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6718)

```diff
-         const bb = 1 === hb[1] ? Gb.e.Tl - .4 : 0;
+         const dd = 1 === kd[1] ? Wd.g.uR - .4 : 0;
```

#### 902. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6726` → after: `L7358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7358) · [Before (L6726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6726)

```diff
-       const Hb = Bb ? zb : gb;
+       const od = pd ? Yd : md;
```

#### 903. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6747` → after: `L7379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7379) · [Before (L6747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6747)

```diff
-         this.PH = bb, this.cfg = hb, this.pool = [], this.currentIndex = 0;
+         this.Jl = dd, this.cfg = kd, this.pool = [], this.currentIndex = 0;
```

#### 904. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6758` → after: `L7390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7390) · [Before (L6758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6758)

```diff
-         const Xb = this.PH.camera.iK();
+         const Ld = this.Jl.camera.yI();
```

#### 905. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6760` → after: `L7392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7392) · [Before (L6760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6760)

```diff
-         const pb = null !== (hb = ub.hideDist) && void 0 !== hb ? hb : this.cfg.hideDist;
+         const Od = null !== (kd = Jd.hideDist) && void 0 !== kd ? kd : this.cfg.hideDist;
```

#### 906. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6765` → after: `L7397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7397) · [Before (L6765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6765)

```diff
-         (0, wb.r)(Wb, lb, Kb), Wb.minEmitPower = null !== (Bb = ub.minEmitPower) && void 0 !== Bb ? Bb : Wb.minEmitPower, Wb.maxEmitPower = null !== (Ob = ub.maxEmitPower) && void 0 !== Ob ? Ob : Wb.maxEmitPower, Wb.minSize = null !== (Gb = ub.minSize) && void 0 !== Gb ? Gb : Wb. … [truncated]
+         (0, ld.t)(vd, Id, Gd), vd.minEmitPower = null !== (pd = Jd.minEmitPower) && void 0 !== pd ? pd : vd.minEmitPower, vd.maxEmitPower = null !== (Nd = Jd.maxEmitPower) && void 0 !== Nd ? Nd : vd.maxEmitPower, vd.minSize = null !== (Wd = Jd.minSize) && void 0 !== Wd ? Wd : vd. … [truncated]
```

#### 907. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6769-L6771` → after: `L7401-L7403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7401-L7403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7401-L7403) · [Before (L6769-L6771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6769-L6771)

```diff
-           hb = this.PH.xX.Hs(`particlePool_${bb}`, 50),
-           Bb = ub.texture.includes("/") ? ub.texture : (0, Yb.e)(ub.texture);
-         hb.texture = (0, Zb.t)(this.PH.xX.ZN(), Bb), hb.blendMode = ub.blendMode, hb.minLifeTime = ub.minLifeTime, hb.maxLifeTime = ub.maxLifeTime, hb.minEmitPower = ub.minEmitPower, hb.maxEmitPower = ub.maxEmitPower, hb.minSize = ub.minSize, hb.maxSize = ub.maxSize, hb.gravity = … [truncated]
+           kd = this.Jl.UL.FX(`particlePool_${dd}`, 50),
+           pd = Jd.texture.includes("/") ? Jd.texture : (0, gd.h)(Jd.texture);
+         kd.texture = (0, Qd.t)(this.Jl.UL.Wm(), pd), kd.blendMode = Jd.blendMode, kd.minLifeTime = Jd.minLifeTime, kd.maxLifeTime = Jd.maxLifeTime, kd.minEmitPower = Jd.minEmitPower, kd.maxEmitPower = Jd.maxEmitPower, kd.minSize = Jd.minSize, kd.maxSize = Jd.maxSize, kd.gravity = … [truncated]
```

#### 908. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6773` → after: `L7405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7405) · [Before (L6773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6773)

```diff
-         this.applyColorGradients(hb, ub.colorGradients), (0, wb.t)(this.PH, hb), hb.createBoxEmitter(new Xb.YX(Math.min(ub.dir1[0], ub.dir2[0]), Math.min(ub.dir1[1], ub.dir2[1]), Math.min(ub.dir1[2], ub.dir2[2])), new Xb.YX(Math.max(ub.dir1[0], ub.dir2[0]), Math.max(ub.dir1[1], u … [truncated]
+         this.applyColorGradients(kd, Jd.colorGradients), (0, ld.y)(this.Jl, kd), kd.createBoxEmitter(new Ld.IL(Math.min(Jd.dir1[0], Jd.dir2[0]), Math.min(Jd.dir1[1], Jd.dir2[1]), Math.min(Jd.dir1[2], Jd.dir2[2])), new Ld.IL(Math.max(Jd.dir1[0], Jd.dir2[0]), Math.max(Jd.dir1[1], J … [truncated]
```

#### 909. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6783` → after: `L7415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7415) · [Before (L6783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6783)

```diff
-             const ub = (0, wb.l)(Gb.color[0], Gb.color[1], Gb.color[2], 1);
+             const Jd = (0, ld.o)(Wd.color[0], Wd.color[1], Wd.color[2], 1);
```

#### 910. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6787-L6788` → after: `L7419-L7420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7419-L7420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7419-L7420) · [Before (L6787-L6788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6787-L6788)

```diff
-             const ub = (0, wb.l)(Gb.minColor[0], Gb.minColor[1], Gb.minColor[2], null !== (Bb = Gb.minColor[3]) && void 0 !== Bb ? Bb : 1),
-               hb = (0, wb.l)(Gb.maxColor[0], Gb.maxColor[1], Gb.maxColor[2], null !== (Ob = Gb.maxColor[3]) && void 0 !== Ob ? Ob : 1);
+             const Jd = (0, ld.o)(Wd.minColor[0], Wd.minColor[1], Wd.minColor[2], null !== (pd = Wd.minColor[3]) && void 0 !== pd ? pd : 1),
+               kd = (0, ld.o)(Wd.maxColor[0], Wd.maxColor[1], Wd.maxColor[2], null !== (Nd = Wd.maxColor[3]) && void 0 !== Nd ? Nd : 1);
```

#### 911. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6795` → after: `L7427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7427) · [Before (L6795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6795)

```diff
-       if (!(0, pb.J)(ub.hideDist)) {
+       if (!(0, Od.I)(Jd.hideDist)) {
```

#### 912. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6797-L6798` → after: `L7429-L7430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7429-L7430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7429-L7430) · [Before (L6797-L6798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6797-L6798)

```diff
-         for (let bb = 0; bb < 3; bb++) hb.push((0, Lb.t)(ub.pos1[bb], ub.pos2[bb], .5));
-         const Bb = bb.pW.iK(bb.bM),
+         for (let dd = 0; dd < 3; dd++) kd.push((0, Zd.A)(Jd.pos1[dd], Jd.pos2[dd], .5));
+         const pd = dd.vG.yI(dd.kU),
```

#### 913. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6805` → after: `L7437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7437) · [Before (L6805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6805)

```diff
-   37410: (bb, ub, hb) => {
+   37991: (dd, Jd, kd) => {
```

#### 914. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6807` → after: `L7439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7439) · [Before (L6807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6807)

```diff
-       b: () => Ab
+       d: () => Rd
```

#### 915. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6809-L6821` → after: `L7441-L7453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7441-L7453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7441-L7453) · [Before (L6809-L6821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6809-L6821)

```diff
-     var Bb = hb(36836),
-       Ob = hb(37423),
-       Gb = hb(37449),
-       Ub = hb(37050),
-       Lb = hb(37436),
-       Yb = hb(37452),
-       Sb = hb(2941),
-       ab = hb(37417),
-       Hb = hb(37413),
-       wb = hb(36800),
-       Zb = hb(36911),
-       Xb = hb(36928),
-       pb = hb(2560);
+     var pd = kd(37366),
+       Nd = kd(38010),
+       Wd = kd(38047),
+       Pd = kd(37610),
+       Zd = kd(38027),
+       gd = kd(38054),
+       Cd = kd(3011),
+       Kd = kd(38e3),
+       od = kd(37997),
+       ld = kd(37337),
+       Qd = kd(37456),
+       Ld = kd(37473),
+       Od = kd(2634);
```

#### 916. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6832-L6833` → after: `L7464-L7465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7464-L7465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7464-L7465) · [Before (L6832-L6833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6832-L6833)

```diff
-           ambientLevel: Hb.c.ambient,
-           diffuseLevel: Hb.c.diffuse
+           ambientLevel: od.e.ambient,
+           diffuseLevel: od.e.diffuse
```

#### 917. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6854` → after: `L7486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7486) · [Before (L6854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6854)

```diff
-           alpha: ab.g
+           alpha: Kd.k
```

#### 918. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6871-L6873` → after: `L7503-L7505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7503-L7505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7503-L7505) · [Before (L6871-L6873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6871-L6873)

```diff
-         } = (0, Zb.b)({
-           name: `${db}${Hb}`,
-           Xp: ub,
+         } = (0, Qd.e)({
+           name: `${qd}${od}`,
+           BO: Jd,
```

#### 919. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6876-L6878` → after: `L7508-L7510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7508-L7510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7508-L7510) · [Before (L6876-L6878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6876-L6878)

```diff
-         ob && (0, Bb.G)(rb);
-         const nb = Sb.b.getBlockAtlasArr().map((bb => (0, Ob.f)(bb, ub, hb)));
-         if ((0, Zb.f)(jb, {
+         ed && (0, pd.I)(Bd);
+         const ad = Cd.d.getBlockAtlasArr().map((dd => (0, Nd.i)(dd, Jd, kd)));
+         if ((0, Qd.i)(sd, {
```

#### 920. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6880` → after: `L7512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7512) · [Before (L6880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6880)

```diff
-               transparencyMode: Bb.p.alphaTest,
+               transparencyMode: pd.r.alphaTest,
```

#### 921. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6894` → after: `L7526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7526) · [Before (L6894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6894)

```diff
-               transparencyMode: Bb.p.alphaBlend
+               transparencyMode: pd.r.alphaBlend
```

#### 922. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6896` → after: `L7528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7528) · [Before (L6896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6896)

```diff
-           }), Ab && (0, Ub.e)(rb, (0, pb.g)().xX), lb && (0, wb.b)(rb, !0), nb.length > 0) {
+           }), Rd && (0, Pd.e)(Bd, (0, Od.e)().UL), Id && (0, ld.d)(Bd, !0), ad.length > 0) {
```

#### 923. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6898-L6900` → after: `L7530-L7532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7530-L7532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7530-L7532) · [Before (L6898-L6900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6898-L6900)

```diff
-             urls: Sb.b.getBlockAtlasArr(),
-             pixels: Sb.b.getBlockAtlasPixels(),
-             layerWidth: Sb.b.getBlockAtlasWidth()
+             urls: Cd.d.getBlockAtlasArr(),
+             pixels: Cd.d.getBlockAtlasPixels(),
+             layerWidth: Cd.d.getBlockAtlasWidth()
```

#### 924. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6902` → after: `L7534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7534) · [Before (L6902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6902)

```diff
-           (0, Bb.q)(rb, Lb.h, (0, Gb.e)(bb, nb, void 0, this.eX(), !1))
+           (0, pd.s)(Bd, Zd.i, (0, Wd.f)(dd, ad, void 0, this.rL(), !1))
```

#### 925. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6913` → after: `L7545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7545) · [Before (L6913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6913)

```diff
-     (0, Yb.k)(ob);
+     (0, gd.n)(ed);
```

#### 926. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6916` → after: `L7548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7548) · [Before (L6916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6916)

```diff
-   37683: (bb, ub, hb) => {
+   38264: (dd, Jd, kd) => {
```

#### 927. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6919` → after: `L7551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7551) · [Before (L6919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6919)

```diff
-       d: () => Eb
+       f: () => hd
```

#### 928. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6921` → after: `L7553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7553) · [Before (L6921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6921)

```diff
-     var Bb = hb(37001);
+     var pd = kd(37561);
```

#### 929. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6942` → after: `L7574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7574) · [Before (L6942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6942)

```diff
-     var Ub = hb(36764);
+     var Pd = kd(37312);
```

#### 930. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6970-L6971` → after: `L7602-L7603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7602-L7603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7602-L7603) · [Before (L6970-L6971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6970-L6971)

```diff
-             Bb = Number.isNaN(Bb) ? bb : Bb, ub += this.childWeights[Ob], hb += this.childWeights[Ob] * bb
-           } return ub > 0 ? hb / ub : Number.isNaN(Bb) ? 0 : Bb
+             pd = Number.isNaN(pd) ? dd : pd, Jd += this.childWeights[Nd], kd += this.childWeights[Nd] * dd
+           } return Jd > 0 ? kd / Jd : Number.isNaN(pd) ? 0 : pd
```

#### 931. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L6983` → after: `L7615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7615) · [Before (L6983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L6983)

```diff
-         Bb = hb > 0 ? Bb / hb : 1 / Ob;
+         pd = kd > 0 ? pd / kd : 1 / Nd;
```

#### 932. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7015` → after: `L7647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7647) · [Before (L7015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7015)

```diff
-         Ub !== (null !== (Bb = null === (Ob = this.current) || void 0 === Ob ? void 0 : Ob.state) && void 0 !== Bb ? Bb : null) && (this.current = null === Ub ? null : this.enter(Ub, Gb)), this.updateWeights(ub, hb)
+         Pd !== (null !== (pd = null === (Nd = this.current) || void 0 === Nd ? void 0 : Nd.state) && void 0 !== pd ? pd : null) && (this.current = null === Pd ? null : this.enter(Pd, Wd)), this.updateWeights(Jd, kd)
```

#### 933. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7030` → after: `L7662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7662) · [Before (L7030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7030)

```diff
-           const bb = this.instances.reduce(((bb, ub) => ub !== Bb && (bb === Bb || ub.weight < bb.weight) ? ub : bb));
+           const dd = this.instances.reduce(((dd, Jd) => Jd !== pd && (dd === pd || Jd.weight < dd.weight) ? Jd : dd));
```

#### 934. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7045` → after: `L7677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7677) · [Before (L7045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7045)

```diff
-         for (const Hb of this.instances) Hb.weight = Hb === Bb ? Ub : Hb.weight * Sb, (Hb === Bb || Hb.weight > Lb) && (this.instances[ab++] = Hb);
+         for (const od of this.instances) od.weight = od === pd ? Pd : od.weight * Cd, (od === pd || od.weight > Zd) && (this.instances[Kd++] = od);
```

#### 935. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7052` → after: `L7684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7684) · [Before (L7052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7052)

```diff
-         this.inputs = new Float64Array(Bb.j.Count), this.states = [], this.sleptSeconds = 0
+         this.inputs = new Float64Array(pd.f.Count), this.states = [], this.sleptSeconds = 0
```

#### 936. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7055` → after: `L7687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7687) · [Before (L7055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7055)

```diff
-         this.inputs.set(bb.subarray(0, Bb.j.Count)), this.states.length = 0, this.states.push(...ub), this.sleptSeconds = 0
+         this.inputs.set(dd.subarray(0, pd.f.Count)), this.states.length = 0, this.states.push(...Jd), this.sleptSeconds = 0
```

#### 937. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7098-L7099` → after: `L7730-L7731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7730-L7731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7730-L7731) · [Before (L7098-L7099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7098-L7099)

```diff
-     var ob = hb(36955),
-       Ab = hb(37005);
+     var ed = kd(37509),
+       Rd = kd(37564);
```

#### 938. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7117` → after: `L7749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7749) · [Before (L7117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7117)

```diff
-         return null !== (ub = this.indexByLowerName.get(bb.toLowerCase())) && void 0 !== ub ? ub : -1
+         return null !== (Jd = this.indexByLowerName.get(dd.toLowerCase())) && void 0 !== Jd ? Jd : -1
```

#### 939. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7120-L7121` → after: `L7752-L7753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7752-L7753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7752-L7753) · [Before (L7120-L7121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7120-L7121)

```diff
-     var Wb = hb(36969),
-       Cb = hb(36975);
+     var vd = kd(37518),
+       xd = kd(37531);
```

#### 940. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7134` → after: `L7766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7766) · [Before (L7134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7134)

```diff
-         return bb === Cb.i.Once && (hb > 0 ? this.elapsed >= Bb : this.elapsed > Bb)
+         return dd === xd.k.Once && (kd > 0 ? this.elapsed >= pd : this.elapsed > pd)
```

#### 941. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7165` → after: `L7797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7797) · [Before (L7165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7165)

```diff
-           hb.elapsed < ub.startDelaySeconds || (hb.weight = hb.fadeInSeconds > 0 ? Math.min(1, hb.weight + bb / hb.fadeInSeconds) : 1, ub.loop === Cb.i.Once && hb.weight >= 1 && hb.elapsed >= ub.startDelaySeconds + ub.lengthSeconds - hb.fadeOutSeconds * hb.speed && (hb.stopping = … [truncated]
+           kd.elapsed < Jd.startDelaySeconds || (kd.weight = kd.fadeInSeconds > 0 ? Math.min(1, kd.weight + dd / kd.fadeInSeconds) : 1, Jd.loop === xd.k.Once && kd.weight >= 1 && kd.elapsed >= Jd.startDelaySeconds + Jd.lengthSeconds - kd.fadeOutSeconds * kd.speed && (kd.stopping = … [truncated]
```

#### 942. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7177-L7178` → after: `L7809-L7810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7809-L7810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7809-L7810) · [Before (L7177-L7178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7177-L7178)

```diff
-     var jb = hb(36988),
-       nb = hb(37010);
+     var sd = kd(37549),
+       ad = kd(37570);
```

#### 943. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7219` → after: `L7851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7851) · [Before (L7219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7219)

```diff
-             const hb = Bb && Ub > 1 ? ub / Ub : ub;
+             const kd = pd && Pd > 1 ? Jd / Pd : Jd;
```

#### 944. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7237` → after: `L7869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7869) · [Before (L7237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7237)

```diff
-       return Number.isNaN(bb) ? hb : Math.min(ub, Math.max(-ub, bb))
+       return Number.isNaN(dd) ? kd : Math.min(Jd, Math.max(-Jd, dd))
```

#### 945. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7239` → after: `L7871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7871) · [Before (L7239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7239)

```diff
-     var vb = hb(36981);
+     var Sd = kd(37540);
```

#### 946. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7246-L7247` → after: `L7878-L7879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7878-L7879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7878-L7879) · [Before (L7246-L7247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7246-L7247)

```diff
-         this.pose = new zb(hb), this.accumulator = new gb(hb), this.inputs = new Float64Array(Bb.j.Count + ub.filters.length), this.layers = ub.layers.map(((ub, hb) => new Sb(ub, bb.layerMasks[hb]))), this.runtimes = ub.pools.map((bb => ({
-           queries: new Float64Array(vb.g.Count),
+         this.pose = new Yd(kd), this.accumulator = new md(kd), this.inputs = new Float64Array(pd.f.Count + Jd.filters.length), this.layers = Jd.layers.map(((Jd, kd) => new Cd(Jd, dd.layerMasks[kd]))), this.runtimes = Jd.pools.map((dd => ({
+           queries: new Float64Array(Sd.f.Count),
```

#### 947. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7251` → after: `L7883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7883) · [Before (L7251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7251)

```diff
-           return null !== (hb = bb.variables.slots.get(ub.name)) && void 0 !== hb ? hb : -1
+           return null !== (kd = dd.variables.slots.get(Jd.name)) && void 0 !== kd ? kd : -1
```

#### 948. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7267` → after: `L7899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7899) · [Before (L7267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7267)

```diff
-         this.inputs[bb] = Number.isFinite(ub) ? ub : 0
+         this.inputs[dd] = Number.isFinite(Jd) ? Jd : 0
```

#### 949. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7294` → after: `L7926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7926) · [Before (L7294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7294)

```diff
-           Lb = (0, jb.f)(this.rigged.binding.pools, bb);
+           Zd = (0, sd.g)(this.rigged.binding.pools, dd);
```

#### 950. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7299` → after: `L7931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7931) · [Before (L7299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7299)

```diff
-         } = Lb, ab = sb(hb, 0, 1), Hb = (ab > 0 || 0 === Ub ? Yb.startDelaySeconds + ab * Yb.lengthSeconds : 0) + sb(Ob, 0, Nb) * Ub, wb = new db(tb + Yb.id, Yb, Sb, Wb.k.Add, null, Gb, Gb, Ub, Hb);
+         } = Zd, Kd = Ud(kd, 0, 1), od = (Kd > 0 || 0 === Pd ? gd.startDelaySeconds + Kd * gd.lengthSeconds : 0) + Ud(Nd, 0, nd) * Pd, ld = new qd(jd + gd.id, gd, Cd, vd.f.Add, null, Wd, Wd, Pd, od);
```

#### 951. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7303` → after: `L7935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7935) · [Before (L7303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7303)

```diff
-         const ub = (0, jb.f)(this.rigged.binding.pools, bb);
+         const Jd = (0, sd.g)(this.rigged.binding.pools, dd);
```

#### 952. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7307` → after: `L7939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7939) · [Before (L7307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7307)

```diff
-         const ub = (0, jb.f)(this.rigged.binding.pools, bb);
+         const Jd = (0, sd.g)(this.rigged.binding.pools, dd);
```

#### 953. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7318` → after: `L7950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7950) · [Before (L7318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7318)

```diff
-         const hb = Math.max(0, Number.isFinite(bb) ? bb : 0);
+         const kd = Math.max(0, Number.isFinite(dd) ? dd : 0);
```

#### 954. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7333` → after: `L7965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7965) · [Before (L7333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7333)

```diff
-               for (let hb = 0; hb < bb.length; hb++) ub[Bb.j.Count + hb] = (0, Bb.n)(bb[hb], ub)
+               for (let kd = 0; kd < dd.length; kd++) Jd[pd.f.Count + kd] = (0, pd.i)(dd[kd], Jd)
```

#### 955. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7351-L7352` → after: `L7983-L7984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7983-L7984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7983-L7984) · [Before (L7351-L7352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7351-L7352)

```diff
-               const Ob = (0, Bb.n)(bb[hb], ub);
-               if (Math.abs(ub[Bb.j.Count + hb] - Ob) > 1e-6 * Math.max(1, Math.abs(Ob))) return !1
+               const Nd = (0, pd.i)(dd[kd], Jd);
+               if (Math.abs(Jd[pd.f.Count + kd] - Nd) > 1e-6 * Math.max(1, Math.abs(Nd))) return !1
```

#### 956. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7365-L7366` → after: `L7997-L7998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R7997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L7997-L7998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L7997-L7998) · [Before (L7365-L7366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7365-L7366)

```diff
-             Lb = (0, Bb.n)(Gb, this.inputs),
-             Yb = Bb.j.Count + Ob,
+             Zd = (0, pd.i)(Wd, this.inputs),
+             gd = pd.f.Count + Nd,
```

#### 957. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7369` → after: `L8001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L8001) · [Before (L7369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7369)

```diff
-           this.inputs[Yb] = ub ? Lb : Sb + (Lb - Sb) * (0, Ub.s)(ab, bb)
+           this.inputs[gd] = Jd ? Zd : Cd + (Zd - Cd) * (0, Pd.s)(Kd, dd)
```

#### 958. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7377` → after: `L8009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L8009) · [Before (L7377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7377)

```diff
-           (0, Bb.p)(Ob, this.inputs, this.ageSeconds, bb, this.travelled);
+           (0, pd.j)(Nd, this.inputs, this.ageSeconds, dd, this.travelled);
```

#### 959. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7406` → after: `L8038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L8038) · [Before (L7406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7406)

```diff
-         Yb && this.accumulator.applyTo(this.pose, bb.weight, Gb.mode === Wb.k.Override), this.accumulator.clear()
+         gd && this.accumulator.applyTo(this.pose, dd.weight, Wd.mode === vd.f.Override), this.accumulator.clear()
```

#### 960. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7419` → after: `L8051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L8051) · [Before (L7419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7419)

```diff
-           Bb.strideBlocks > 0 ? Zb = bb.gaitPhase * Gb.lengthSeconds : (bb.elapsed[Sb] = wb ? eb(Gb, bb.elapsed[Sb], hb * Yb, ab) : bb.elapsed[Sb] + hb * Yb, Zb = (0, nb.c)(Gb, bb.elapsed[Sb])), bb.childTimes[Sb] = Zb, wb && !Number.isNaN(Zb) && this.sampleClip(Gb, ab, Zb, Hb, ub … [truncated]
+           pd.strideBlocks > 0 ? Qd = dd.gaitPhase * Wd.lengthSeconds : (dd.elapsed[Cd] = ld ? fd(Wd, dd.elapsed[Cd], kd * gd, Kd) : dd.elapsed[Cd] + kd * gd, Qd = (0, ad.h)(Wd, dd.elapsed[Cd])), dd.childTimes[Cd] = Qd, ld && !Number.isNaN(Qd) && this.sampleClip(Wd, Kd, Qd, od, Jd … [truncated]
```

#### 961. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7431` → after: `L8063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L8063) · [Before (L7431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7431)

```diff
-               Ob = (0, nb.c)(Bb.clip, Bb.elapsed);
+               Nd = (0, ad.h)(pd.clip, pd.elapsed);
```

#### 962. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7439` → after: `L8071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L8071) · [Before (L7439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7439)

```diff
-           this.accumulator.applyTo(this.pose, 1, bb.mode === Wb.k.Override, !0), this.accumulator.clear()
+           this.accumulator.applyTo(this.pose, 1, dd.mode === vd.f.Override, !0), this.accumulator.clear()
```

#### 963. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7443-L7444` → after: `L8075-L8076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8075-L8076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L8075-L8076) · [Before (L7443-L7444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7443-L7444)

```diff
-         ub.queries[vb.g.AnimTime] = hb;
-         const Gb = Bb * Math.max(0, (0, nb.b)(bb.blendWeight, ub));
+         Jd.queries[Sd.f.AnimTime] = kd;
+         const Wd = pd * Math.max(0, (0, ad.d)(dd.blendWeight, Jd));
```

#### 964. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7447` → after: `L8079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L8079) · [Before (L7447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7447)

```diff
-           Yb = bb.loop === Cb.i.Loop,
+           gd = dd.loop === xd.k.Loop,
```

#### 965. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7456` → after: `L8088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L8088) · [Before (L7456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7456)

```diff
-             (0, nb.g)(Hb.rotation, hb, Yb, ub, ab);
+             (0, ad.j)(od.rotation, kd, gd, Jd, Kd);
```

#### 966. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7460` → after: `L8092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L8092) · [Before (L7460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7460)

```diff
-             (0, nb.g)(Hb.position, hb, Yb, ub, ab);
+             (0, ad.j)(od.position, kd, gd, Jd, Kd);
```

#### 967. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7464` → after: `L8096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L8096) · [Before (L7464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7464)

```diff
-             (0, nb.g)(Hb.scale, hb, Yb, ub, ab);
+             (0, ad.j)(od.scale, kd, gd, Jd, Kd);
```

#### 968. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7475` → after: `L8107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L8107) · [Before (L7475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7475)

```diff
-         return hb < 0 ? bb.constant : hb < Bb.j.Count ? ub[hb] : this.inputs[hb]
+         return kd < 0 ? dd.constant : kd < pd.f.Count ? Jd[kd] : this.inputs[kd]
```

#### 969. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7489` → after: `L8121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L8121) · [Before (L7489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7489)

```diff
-           inputs: [...[...Bb.f].map((bb => {
+           inputs: [...[...pd.e].map((dd => {
```

#### 970. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7498-L7499` → after: `L8130-L8131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8130-L8131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L8130-L8131) · [Before (L7498-L7499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7498-L7499)

```diff
-             raw: (0, Bb.n)(bb, this.inputs),
-             value: this.inputs[Bb.j.Count + ub]
+             raw: (0, pd.i)(dd, this.inputs),
+             value: this.inputs[pd.f.Count + Jd]
```

#### 971. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7529-L7530` → after: `L8161-L8162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8161-L8162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L8161-L8162) · [Before (L7529-L7530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7529-L7530)

```diff
-       const Ob = Bb.queries[vb.g.DeltaTime];
-       Bb.queries[vb.g.AnimTime] = ub, Bb.queries[vb.g.DeltaTime] = hb;
+       const Nd = pd.queries[Sd.f.DeltaTime];
+       pd.queries[Sd.f.AnimTime] = Jd, pd.queries[Sd.f.DeltaTime] = kd;
```

#### 972. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7532` → after: `L8164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L8164) · [Before (L7532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7532)

```diff
-       return Bb.queries[vb.g.DeltaTime] = Ob, Gb
+       return pd.queries[Sd.f.DeltaTime] = Nd, Wd
```

#### 973. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7538` → after: `L8170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L8170) · [Before (L7538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7538)

```diff
-       return Number.isNaN(bb) ? Bb : Math.min(hb, Math.max(ub, bb))
+       return Number.isNaN(dd) ? pd : Math.min(kd, Math.max(Jd, dd))
```

#### 974. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7540-L7541` → after: `L8172-L8173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8172-L8173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L8172-L8173) · [Before (L7540-L7541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7540-L7541)

```diff
-     var Mb = hb(36963),
-       mb = hb(3051);
+     var yd = kd(37516),
+       Dd = kd(3116);
```

#### 975. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7547` → after: `L8179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L8179) · [Before (L7547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7547)

```diff
-         (hb.severity === Cb.d.Error ? console.error : console.warn)(`Animation for ${bb}: ${hb.source}: ${hb.message}`)
+         (kd.severity === xd.e.Error ? console.error : console.warn)(`Animation for ${dd}: ${kd.source}: ${kd.message}`)
```

#### 976. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7552` → after: `L8184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L8184) · [Before (L7552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7552)

```diff
-           this.bindings = new Map, this.pack = null, this.drawnWithPlayerRig = () => !1, this.rigged = new WeakMap, this.zq = 0
+           this.bindings = new Map, this.pack = null, this.drawnWithPlayerRig = () => !1, this.rigged = new WeakMap, this.rD = 0
```

#### 977. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7555` → after: `L8187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L8187) · [Before (L7555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7555)

```diff
-           return this.zq
+           return this.rD
```

#### 978. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7558` → after: `L8190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L8190) · [Before (L7558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7558)

```diff
-           this.zq++
+           this.rD++
```

#### 979. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7581` → after: `L8213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L8213) · [Before (L7581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7581)

```diff
-           return [hb, Bb].some((hb => null !== hb && new Ab.b(hb, new Kb(bb, ub)).animatesAnyBone))
+           return [kd, pd].some((kd => null !== kd && new Rd.d(kd, new Gd(dd, Jd)).animatesAnyBone))
```

#### 980. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7591` → after: `L8223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L8223) · [Before (L7591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7591)

```diff
-             for (const bb of null === Ob ? [] : (0, Ab.f)(Ob)) Bb.add(bb);
+             for (const dd of null === Nd ? [] : (0, Rd.g)(Nd)) pd.add(dd);
```

#### 981. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7607` → after: `L8239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L8239) · [Before (L7607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7607)

```diff
-               Bb = Array.from(Ob, (bb => null !== bb && void 0 !== bb ? bb : "")), yb.set(hb, Bb)
+               pd = Array.from(Nd, (dd => null !== dd && void 0 !== dd ? dd : "")), rd.set(kd, pd)
```

#### 982. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7624` → after: `L8256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L8256) · [Before (L7624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7624)

```diff
-             Ob = new Ab.b(ub, new Kb(bb, hb));
+             Nd = new Rd.d(Jd, new Gd(dd, kd));
```

#### 983. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7626` → after: `L8258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L8258) · [Before (L7626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7626)

```diff
-             qb(Gb ? `${bb} (texture pack)` : bb, Ob.diagnostics), Gb && !Ob.animatesAnyBone && console.error(`Animation for ${bb} (texture pack): its clips move none of the model's bones (Root alone, the whole model, doesn't count), so it plays its own animation`), Bb.set(hb, Ob)
+             cd(Wd ? `${dd} (texture pack)` : dd, Nd.diagnostics), Wd && !Nd.animatesAnyBone && console.error(`Animation for ${dd} (texture pack): its clips move none of the model's bones (Root alone, the whole model, doesn't count), so it plays its own animation`), pd.set(kd, Nd)
```

#### 984. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7635-L7637` → after: `L8267-L8269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8267-L8269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L8267-L8269) · [Before (L7635-L7637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7635-L7637)

```diff
-           const ub = (0, ob.e)(),
-             hb = Mb.d.has(bb) || this.drawnWithPlayerRig(bb),
-             Bb = (0, Mb.h)(ub, hb ? Pb : bb, []);
+           const Jd = (0, ed.c)(),
+             kd = yd.g.has(dd) || this.drawnWithPlayerRig(dd),
+             pd = (0, yd.o)(Jd, kd ? Ed : dd, []);
```

#### 985. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L7641-L7642` → after: `L8273-L8274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R8273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L8273-L8274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L8273-L8274) · [Before (L7641-L7642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L7641-L7642)

```diff
-             const hb = (0, Mb.k)(this.getPack(), ub, bb);
-             qb(`${bb} (texture pack)`, hb.diagnostics), Ob = hb.binding
+             const kd = (0, yd.s)(this.getPack(), Jd, dd);
+             cd(`${dd} (texture pack)`, kd.diagnostics), Nd = kd.binding
```
