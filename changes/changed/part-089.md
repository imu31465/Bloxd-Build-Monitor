# Changed — Bundle Modifications Report (Part 089 / 153)

- **Updated at**: `2026-11-27T18:53 JST`
- **Part**: `89 / 153` (**403** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 088](part-088.md) · [Part 090 →](part-090.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/88.js` (gw4e3a.937868ec → u88b9b.1969c480 · continued)

- **File**: `bundles/bloxd.io/chunks/js/88.js` (4689 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d)

#### 1285. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10410` → after: `L9735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L9735) · [Before (L10410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10410)

```diff
-         }), (0, jB.sendColyMessage)(bB.Gj)
+         }), (0, Ue.sendColyMessage)(se.Kj)
```

#### 1286. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10413` → after: `L9738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L9738) · [Before (L10413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10413)

```diff
-         if (this.firstPersonPosOffset.x = 0, this.firstPersonPosOffset.y = 0, this.firstPersonPosOffset.z = 0, this.kz.DW.getState(this.kz.EX, "playerCameraAdjustment").fovMultiplier.removeMultiplier("chargeableZoom"), this.updateItemToStage(1), this.kz.DW.qYB().canRunCombinator. … [truncated]
+         if (this.firstPersonPosOffset.x = 0, this.firstPersonPosOffset.y = 0, this.firstPersonPosOffset.z = 0, this.uk.sE.getState(this.uk.gC, "playerCameraAdjustment").fovMultiplier.removeMultiplier("chargeableZoom"), this.updateItemToStage(1), this.uk.sE.Cye().canRunCombinator. … [truncated]
```

#### 1287. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10417-L10420` → after: `L9742-L9745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9742-L9745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L9742-L9745) · [Before (L10417-L10420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10417-L10420)

```diff
-               YB = this.bloxd.getItemStat(this.kz.EX, this.getHeldName(), "chargeStages"),
-               DB = null !== (GB = this.bloxd.getItemStat(this.kz.EX, this.getHeldName(), "minChargeStateToUse")) && void 0 !== GB ? GB : 1,
-               QB = this.bloxd.hGB(this.kz.EX),
-               oB = this.typeObj.chargeTime * PB.f.getQuickChargeMultiplier(QB.getItemAtIdx(this.inInvenIdx)),
+               ye = this.bloxd.getItemStat(this.uk.gC, this.getHeldName(), "chargeStages"),
+               be = null !== (He = this.bloxd.getItemStat(this.uk.gC, this.getHeldName(), "minChargeStateToUse")) && void 0 !== He ? He : 1,
+               Me = this.bloxd.Jye(this.uk.gC),
+               Ke = this.typeObj.chargeTime * Re.e.getQuickChargeMultiplier(Me.getItemAtIdx(this.inInvenIdx)),
```

#### 1288. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10429-L10432` → after: `L9754-L9757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9754-L9757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L9754-L9757) · [Before (L10429-L10432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10429-L10432)

```diff
-         (0, jB.sendColyMessage)(bB.qh, {
-           eJ: BB,
-           TJ: OB,
-           Yo: YB
+         (0, Ue.sendColyMessage)(se.ch, {
+           xJ: ee,
+           LJ: ie,
+           kK: ye
```

#### 1289. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10436` → after: `L9761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L9761) · [Before (L10436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10436)

```diff
-         this.sendFinishCharging(!0, BB, MO.d.eat(this.kz.EX, this.inInvenIdx, this.typeObj.name)), lO.b.play("burp", 1).rate(.9 + .2 * Math.random())
+         this.sendFinishCharging(!0, ee, oi.c.eat(this.uk.gC, this.inInvenIdx, this.typeObj.name)), qi.d.play("burp", 1).rate(.9 + .2 * Math.random())
```

#### 1290. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10440` → after: `L9765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L9765) · [Before (L10440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10440)

```diff
-         const OB = this.bloxd.hGB(this.kz.EX);
+         const ie = this.bloxd.Jye(this.uk.gC);
```

#### 1291. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10446` → after: `L9771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L9771) · [Before (L10446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10446)

```diff
-         const OB = this.bloxd.hGB(this.kz.EX);
+         const ie = this.bloxd.Jye(this.uk.gC);
```

#### 1292. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10449` → after: `L9774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L9774) · [Before (L10449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10449)

```diff
-           const YB = 1 === BB ? this.typeObj.meta.rootName : `${this.typeObj.meta.rootName}|meta|charging${BB}`,
+           const ye = 1 === ee ? this.typeObj.meta.rootName : `${this.typeObj.meta.rootName}|meta|charging${ee}`,
```

#### 1293. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10457` → after: `L9782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L9782) · [Before (L10457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10457)

```diff
-         super(BB, OB, GB, YB, DB), this.inInvenIdx = void 0, this.inUse = void 0, this.dir = void 0, this.OJ = void 0, this.firstPersonPosOffset = new ZB.Xp(.1, 0, .15), this.firstPersonRotation = new ZB.Xp(0, -Math.PI / 2, Math.PI / 7)
+         super(ee, ie, He, ye, be), this.inInvenIdx = void 0, this.inUse = void 0, this.dir = void 0, this.sF = void 0, this.firstPersonPosOffset = new pe.rf(.1, 0, .15), this.firstPersonRotation = new pe.rf(0, -Math.PI / 2, Math.PI / 7)
```

#### 1294. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10460` → after: `L9785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L9785) · [Before (L10460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10460)

```diff
-         super.selected(BB), this.heldItemState.qL === this.kz.EX && (this.inInvenIdx = this.bloxd.hGB(this.kz.EX).getSelectedSlotIndex(), this.inUse = !0)
+         super.selected(ee), this.heldItemState.cL === this.uk.gC && (this.inInvenIdx = this.bloxd.Jye(this.uk.gC).getSelectedSlotIndex(), this.inUse = !0)
```

#### 1295. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10463` → after: `L9788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L9788) · [Before (L10463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10463)

```diff
-         if (super.kP(BB, OB), this.heldItemState.qL === this.kz.EX && (this.inInvenIdx = this.bloxd.hGB(this.kz.EX).getSelectedSlotIndex(), this.inUse)) {
+         if (super.YR(ee, ie), this.heldItemState.cL === this.uk.gC && (this.inInvenIdx = this.bloxd.Jye(this.uk.gC).getSelectedSlotIndex(), this.inUse)) {
```

#### 1296. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10465` → after: `L9790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L9790) · [Before (L10465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10465)

```diff
-           let BB = null !== (GB = this.kz.DW.hGB(this.kz.EX).getItemAtSelectedSlot().attributes.customAttributes.target) && void 0 !== GB ? GB : this.kz.xR.compassTarget;
+           let ee = null !== (He = this.uk.sE.Jye(this.uk.gC).getItemAtSelectedSlot().attributes.customAttributes.target) && void 0 !== He ? He : this.uk.uE.compassTarget;
```

#### 1297. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10467-L10468` → after: `L9792-L9793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9792-L9793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L9792-L9793) · [Before (L10467-L10468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10467-L10468)

```diff
-             if (!this.kz.DW.yYB(BB)) return;
-             BB = this.kz.DW.pR(BB)
+             if (!this.uk.sE.Aye(ee)) return;
+             ee = this.uk.sE.pE(ee)
```

#### 1298. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10470` → after: `L9795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L9795) · [Before (L10470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10470)

```diff
-           const OB = this.kz.DW.U1(this.heldItemState.qL),
+           const ie = this.uk.sE.L_(this.heldItemState.cL),
```

#### 1299. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10472-L10473` → after: `L9797-L9798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9797-L9798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L9797-L9798) · [Before (L10472-L10473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10472-L10473)

```diff
-             oB = null !== (YB = this.kz.jGB) && void 0 !== YB ? YB : this.kz.camera.B_();
-           this.kz.f6(OB, QB);
+             Ke = null !== (ye = this.uk.tHe) && void 0 !== ye ? ye : this.uk.camera.N_();
+           this.uk.S_(ie, Me);
```

#### 1300. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10476-L10477` → after: `L9801-L9802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9801-L9802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L9801-L9802) · [Before (L10476-L10477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10476-L10477)

```diff
-           let yB = ((0, PB.Kb)(jB) - (0, PB.Kb)(oB)) * (180 / Math.PI) - 15;
-           yB = yB < 0 ? 360 + yB : yB, this.dir = Math.abs(Math.round(yB / 30) + 6) % 12 + 1, this.updateItemToStage(this.dir)
+           let Fe = ((0, Re.Ib)(Ue) - (0, Re.Ib)(Ke)) * (180 / Math.PI) - 15;
+           Fe = Fe < 0 ? 360 + Fe : Fe, this.dir = Math.abs(Math.round(Fe / 30) + 6) % 12 + 1, this.updateItemToStage(this.dir)
```

#### 1301. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10481` → after: `L9806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L9806) · [Before (L10481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10481)

```diff
-         const OB = this.bloxd.hGB(this.kz.EX);
+         const ie = this.bloxd.Jye(this.uk.gC);
```

#### 1302. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10484` → after: `L9809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L9809) · [Before (L10484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10484)

```diff
-           const YB = 1 === BB ? this.typeObj.meta.rootName : `${this.typeObj.meta.rootName}|meta|dir${BB}`,
+           const ye = 1 === ee ? this.typeObj.meta.rootName : `${this.typeObj.meta.rootName}|meta|dir${ee}`,
```

#### 1303. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10490-L10491` → after: `L9815-L9816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9815-L9816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L9815-L9816) · [Before (L10490-L10491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10490-L10491)

```diff
-     var AO = GB(37928),
-       VO = GB(192);
+     var gi = He(38049),
+       Oi = He(186);
```

#### 1304. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10494` → after: `L9819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L9819) · [Before (L10494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10494)

```diff
-       return void 0 !== BB && null !== BB && BB > 0 ? BB : void 0
+       return void 0 !== ee && null !== ee && ee > 0 ? ee : void 0
```

#### 1305. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10500` → after: `L9825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L9825) · [Before (L10500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10500)

```diff
-     const UO = 1e3 / VO.f.clientTicksPerSecond / 2,
+     const ti = 1e3 / Oi.g.clientTicksPerSecond / 2,
```

#### 1306. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10518` → after: `L9843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L9843) · [Before (L10518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10518)

```diff
-         const YB = this.restart ? BB : function(BB, OB, GB, YB, DB) {
+         const ye = this.restart ? ee : function(ee, ie, He, ye, be) {
```

#### 1307. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10527-L10533` → after: `L9852-L9858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9852-L9858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L9852-L9858) · [Before (L10527-L10533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10527-L10533)

```diff
-     var dO = GB(4642),
-       KO = GB(38670),
-       uO = GB(38693),
-       mO = GB(37436),
-       IO = GB(104),
-       FO = GB(39093),
-       iO = GB(641);
+     var Di = He(4598),
+       Pi = He(38826),
+       Ai = He(38864),
+       Yi = He(37578),
+       Vi = He(107),
+       ai = He(39219),
+       ci = He(610);
```

#### 1308. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10536` → after: `L9861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L9861) · [Before (L10536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10536)

```diff
-         this.kz = void 0, this.gunTypeObj = void 0, this.MG = void 0, this.kz = BB, this.gunTypeObj = OB, this.MG = GB
+         this.uk = void 0, this.gunTypeObj = void 0, this.XH = void 0, this.uk = ee, this.gunTypeObj = ie, this.XH = He
```

#### 1309. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10540-L10541` → after: `L9865-L9866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9865-L9866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L9865-L9866) · [Before (L10540-L10541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10540-L10541)

```diff
-         if (this.MG !== this.kz.EX) return;
-         const GB = null === (OB = (0, lB.g)().DW.hGB(this.MG)) || void 0 === OB ? void 0 : OB.getItemAtSelectedSlot();
+         if (this.XH !== this.uk.gC) return;
+         const He = null === (ie = (0, qe.h)().sE.Jye(this.XH)) || void 0 === ie ? void 0 : ie.getItemAtSelectedSlot();
```

#### 1310. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10545` → after: `L9870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L9870) · [Before (L10545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10545)

```diff
-           if (!(0, iO.Q)(null === OB || void 0 === OB ? void 0 : OB[BB])) return OB[BB]
+           if (!(0, ci.P)(null === ie || void 0 === ie ? void 0 : ie[ee])) return ie[ee]
```

#### 1311. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10549` → after: `L9874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L9874) · [Before (L10549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10549)

```diff
-         } = (0, lB.d)().getMetaInfo(this.gunTypeObj.name), QB = (0, lB.d)().getItemStat(this.MG, DB, "gunStats");
+         } = (0, qe.e)().getMetaInfo(this.gunTypeObj.name), Me = (0, qe.e)().getItemStat(this.XH, be, "gunStats");
```

#### 1312. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10553` → after: `L9878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L9878) · [Before (L10553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10553)

```diff
-         if (this.MG === this.kz.EX) {
+         if (this.XH === this.uk.gC) {
```

#### 1313. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10555` → after: `L9880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L9880) · [Before (L10555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10555)

```diff
-           return null !== OB && void 0 !== OB ? OB : (0, lB.d)().getItemStat(this.MG, this.gunTypeObj.name, BB)
+           return null !== ie && void 0 !== ie ? ie : (0, qe.e)().getItemStat(this.XH, this.gunTypeObj.name, ee)
```

#### 1314. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10565` → after: `L9890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L9890) · [Before (L10565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10565)

```diff
-             jB = null !== oB && void 0 !== oB ? oB : DB,
+             Ue = null !== Ke && void 0 !== Ke ? Ke : be,
```

#### 1315. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10567` → after: `L9892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L9892) · [Before (L10567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10567)

```diff
-             JB = void 0 === yB ? jB : 60 / yB * 1e3,
+             Je = void 0 === Fe ? Ue : 60 / Fe * 1e3,
```

#### 1316. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10569-L10570` → after: `L9894-L9895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9894-L9895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L9894-L9895) · [Before (L10569-L10570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10569-L10570)

```diff
-             PB = null !== (GB = null !== (YB = null !== MB && void 0 !== MB ? MB : oB) && void 0 !== YB ? YB : BB.cadenceMs) && void 0 !== GB ? GB : DB,
-             zB = void 0 !== (lB = OB.equipDelay) && null !== lB && lB >= 0 ? lB : void 0;
+             Re = null !== (He = null !== (ye = null !== oe && void 0 !== oe ? oe : Ke) && void 0 !== ye ? ye : ee.cadenceMs) && void 0 !== He ? He : be,
+             ke = void 0 !== (qe = ie.equipDelay) && null !== qe && qe >= 0 ? qe : void 0;
```

#### 1317. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10572` → after: `L9897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L9897) · [Before (L10572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10572)

```diff
-           const pB = OB => null !== zB && void 0 !== zB ? zB : OB || void 0 !== MB ? void 0 : BB.equipDelay;
+           const fe = ie => null !== ke && void 0 !== ke ? ke : ie || void 0 !== oe ? void 0 : ee.equipDelay;
```

#### 1318. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10598` → after: `L9923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L9923) · [Before (L10598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10598)

```diff
-             firstShotDue: void 0 === DB ? YB + nO(BB, OB) + UO : GB + Math.max(DB, UO),
+             firstShotDue: void 0 === be ? ye + Wi(ee, ie) + ti : He + Math.max(be, ti),
```

#### 1319. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10605` → after: `L9930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L9930) · [Before (L10605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10605)

```diff
-         return (0, iO.Q)(BB) ? this.gunTypeObj.burstCount : BB
+         return (0, ci.P)(ee) ? this.gunTypeObj.burstCount : ee
```

#### 1320. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10610` → after: `L9935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L9935) · [Before (L10610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10610)

```diff
-         return (0, iO.Q)(OB) ? null !== (BB = this.gunTypeObj.burstDelay) && void 0 !== BB ? BB : 0 : OB
+         return (0, ci.P)(ie) ? null !== (ee = this.gunTypeObj.burstDelay) && void 0 !== ee ? ee : 0 : ie
```

#### 1321. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10614` → after: `L9939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L9939) · [Before (L10614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10614)

```diff
-         return (0, iO.Q)(BB) ? this.gunTypeObj.keepScopeOnShot : BB
+         return (0, ci.P)(ee) ? this.gunTypeObj.keepScopeOnShot : ee
```

#### 1322. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10643-L10644` → after: `L9968-L9969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9968-L9969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L9968-L9969) · [Before (L10643-L10644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10643-L10644)

```diff
-     var rO = GB(37279),
-       XO = GB(38282);
+     var Ci = He(37436),
+       vi = He(38439);
```

#### 1323. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10648` → after: `L9973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L9973) · [Before (L10648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10648)

```diff
-         this.kz = void 0, this.gunStats = void 0, this.hasVerticalInaccuracy = void 0, this.currInacc = void 0, this.nonMoveInacc = void 0, this.currMoveInacc = void 0, this.prevBroadcastedInacc = void 0, this.ticksSinceBroadcast = void 0, this.lastTick = void 0, this.isAiming =  … [truncated]
+         this.uk = void 0, this.gunStats = void 0, this.hasVerticalInaccuracy = void 0, this.currInacc = void 0, this.nonMoveInacc = void 0, this.currMoveInacc = void 0, this.prevBroadcastedInacc = void 0, this.ticksSinceBroadcast = void 0, this.lastTick = void 0, this.isAiming =  … [truncated]
```

#### 1324. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10673-L10677` → after: `L9998-L10002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR9998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L9998-L10002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L9998-L10002) · [Before (L10673-L10677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10673-L10677)

```diff
-         const DB = this.kz.DW.mC(this.kz.EX),
-           QB = (DB.lZ[0] ** 2 + DB.lZ[2] ** 2) ** .5,
-           oB = Math.max(this.kz.xR.runningSpeed, this.kz.xR.walkingSpeed) * this.kz.DW.EGB(this.kz.EX).speedMultiplier.getTotalMultipliedVal(),
-           jB = YB.inaccuracyStanding + QB / oB * YB.inaccuracyMovement + YB.yVelocityInaccuracy * Math.abs(DB.lZ[1]);
-         0 === oB || (jB >= this.currMoveInacc ? this.currMoveInacc = jB : this.currMoveInacc = this.decreaseInacc(this.currMoveInacc, jB, GB)), 0 !== this.nonMoveInacc && (this.nonMoveInacc = this.decreaseInacc(this.nonMoveInacc, 0, GB));
+         const be = this.uk.sE.XN(this.uk.gC),
+           Me = (be.Op[0] ** 2 + be.Op[2] ** 2) ** .5,
+           Ke = Math.max(this.uk.uE.runningSpeed, this.uk.uE.walkingSpeed) * this.uk.sE.Uye(this.uk.gC).speedMultiplier.getTotalMultipliedVal(),
+           Ue = ye.inaccuracyStanding + Me / Ke * ye.inaccuracyMovement + ye.yVelocityInaccuracy * Math.abs(be.Op[1]);
+         0 === Ke || (Ue >= this.currMoveInacc ? this.currMoveInacc = Ue : this.currMoveInacc = this.decreaseInacc(this.currMoveInacc, Ue, He)), 0 !== this.nonMoveInacc && (this.nonMoveInacc = this.decreaseInacc(this.nonMoveInacc, 0, He));
```

#### 1325. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10680` → after: `L10005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10005) · [Before (L10680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10680)

```diff
-         (++this.ticksSinceBroadcast >= 6 && JB > .5 || JB > 10) && ((0, rO.g)(yB), this.prevBroadcastedInacc = yB, this.ticksSinceBroadcast = 0), this.currInacc = yB, this.lastTick = OB, OB - this.lastShot > this.gunStats.getCadenceMs() + 100 && (this.bulletsShot = 0)
+         (++this.ticksSinceBroadcast >= 6 && Je > .5 || Je > 10) && ((0, Ci.d)(Fe), this.prevBroadcastedInacc = Fe, this.ticksSinceBroadcast = 0), this.currInacc = Fe, this.lastTick = ie, ie - this.lastShot > this.gunStats.getCadenceMs() + 100 && (this.bulletsShot = 0)
```

#### 1326. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10684` → after: `L10009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10009) · [Before (L10684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10684)

```diff
-         return YB < .05 ? OB : Math.max(BB - GB * this.gunStats.getStat("recoveryRate") * YB, OB)
+         return ye < .05 ? ie : Math.max(ee - He * this.gunStats.getStat("recoveryRate") * ye, ie)
```

#### 1327. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10687` → after: `L10012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10012) · [Before (L10687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10687)

```diff
-         const OB = this.currInacc * pO.i,
+         const ie = this.currInacc * fi.j,
```

#### 1328. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10689-L10691` → after: `L10014-L10016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10014-L10016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10014-L10016) · [Before (L10689-L10691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10689-L10691)

```diff
-             DP: GB,
-             WYB: YB
-           } = (0, XO.f)(BB),
+             FR: He,
+             lye: ye
+           } = (0, vi.i)(ee),
```

#### 1329. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10694` → after: `L10019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10019) · [Before (L10694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10694)

```diff
-         return (0, XO.c)(GB + DB, YB + QB)
+         return (0, vi.e)(He + be, ye + Me)
```

#### 1330. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10697-L10700` → after: `L10022-L10025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10022-L10025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10022-L10025) · [Before (L10697-L10700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10697-L10700)

```diff
-     var EO = GB(38289),
-       cO = GB(38583),
-       hO = GB(38199),
-       aO = GB(38049);
+     var mi = He(38447),
+       li = He(38743),
+       Si = He(38349),
+       ni = He(38171);
```

#### 1331. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10703-L10705` → after: `L10028-L10030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10028-L10030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10028-L10030) · [Before (L10703-L10705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10703-L10705)

```diff
-       bO = new ZB.Xp(0, .6, .5),
-       CO = new ZB.Xp(0, .5 * -Math.PI, Math.PI),
-       HO = new ZB.Xp(.12, .12, .12),
+       Ii = new pe.rf(0, .6, .5),
+       Ni = new pe.rf(0, .5 * -Math.PI, Math.PI),
+       Gi = new pe.rf(.12, .12, .12),
```

#### 1332. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10708` → after: `L10033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10033) · [Before (L10708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10708)

```diff
-     class xO extends pB.b {
+     class eH extends fe.e {
```

#### 1333. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10710-L10712` → after: `L10035-L10037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10035-L10037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10035-L10037) · [Before (L10710-L10712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10710-L10712)

```diff
-         super(BB, OB, GB, DB), this.breakingItem = void 0, this.firing = void 0, this.burstRemaining = void 0, this.burstSchedule = void 0, this.wasFiringLastTick = void 0, this.didShootLastTick = void 0, this.attemptAiming = void 0, this.aiming = void 0, this.fireSchedule = void … [truncated]
-         const QB = this.kz.UP.JF();
-         if (this.heldItemState.qL === this.kz.EX) {
+         super(ee, ie, He, be), this.breakingItem = void 0, this.firing = void 0, this.burstRemaining = void 0, this.burstSchedule = void 0, this.wasFiringLastTick = void 0, this.didShootLastTick = void 0, this.attemptAiming = void 0, this.aiming = void 0, this.fireSchedule = void … [truncated]
+         const Me = this.uk.PR.Xx();
+         if (this.heldItemState.cL === this.uk.gC) {
```

#### 1334. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10714` → after: `L10039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10039) · [Before (L10714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10714)

```diff
-           this.bulletBlockedBillboardMat = (0, AO.c)({
+           this.bulletBlockedBillboardMat = (0, gi.b)({
```

#### 1335. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10716` → after: `L10041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10041) · [Before (L10716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10716)

```diff
-             eq: QB,
+             yp: Me,
```

#### 1336. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10724` → after: `L10049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10049) · [Before (L10724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10724)

```diff
-           }).mirror, this.bulletBlockedBillboardPlane = (0, cO.q)(BB.UP, "bulletBlockedBillboardPlane", (0, hO.f)({
+           }).mirror, this.bulletBlockedBillboardPlane = (0, li.n)(ee.PR, "bulletBlockedBillboardPlane", (0, Si.g)({
```

#### 1337. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10727` → after: `L10052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10052) · [Before (L10727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10727)

```diff
-           })), this.bulletBlockedBillboardPlane.material = this.bulletBlockedBillboardMat, this.bulletBlockedBillboardPlane.Zk(!1), BB.UP.Hq(this.bulletBlockedBillboardPlane, !1), this.ticksSinceAttackBlockedBillboardUpdate = 0
+           })), this.bulletBlockedBillboardPlane.material = this.bulletBlockedBillboardMat, this.bulletBlockedBillboardPlane.JY(!1), ee.PR.Up(this.bulletBlockedBillboardPlane, !1), this.ticksSinceAttackBlockedBillboardUpdate = 0
```

#### 1338. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10733-L10734` → after: `L10058-L10059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10058-L10059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10058-L10059) · [Before (L10733-L10734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10733-L10734)

```diff
-         super.selected(BB), this.breakingItem.reset(), this.breakingItem.selected(BB), this.gunTypeObj = BB, this.gunStats = new LO(this.kz, BB, this.heldItemState.qL), this.heldItemState.qL === this.kz.EX && this.preloadSounds(), this.firing = !1, this.burstRemaining = 0, this.b … [truncated]
-         const GB = HB.c.get("isTouchScreen"),
+         super.selected(ee), this.breakingItem.reset(), this.breakingItem.selected(ee), this.gunTypeObj = ee, this.gunStats = new xi(this.uk, ee, this.heldItemState.cL), this.heldItemState.cL === this.uk.gC && this.preloadSounds(), this.firing = !1, this.burstRemaining = 0, this.b … [truncated]
+         const He = he.e.get("isTouchScreen"),
```

#### 1339. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10736` → after: `L10061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10061) · [Before (L10736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10736)

```diff
-           DB = (null !== (OB = this.lastShots.get(this.gunTypeObj.name)) && void 0 !== OB ? OB : -1 / 0) + this.gunStats.getIntervalMs(GB) / 1.2 + UO,
+           be = (null !== (ie = this.lastShots.get(this.gunTypeObj.name)) && void 0 !== ie ? ie : -1 / 0) + this.gunStats.getIntervalMs(He) / 1.2 + ti,
```

#### 1340. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10738` → after: `L10063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10063) · [Before (L10738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10738)

```diff
-         this.fireSchedule = new kO(fO), this.pressedAt = 0, this.wasDueLastTick = !1, this.fireSchedule.arm(QB), this.soundLastRoundFired = YB.soundLastRoundFired, this.aimChangeTime = 0, this.reloadStartTime = 0, this.firstPersonGunMeshScaling = .055, this.smallMuzzleFlashScale  … [truncated]
+         this.fireSchedule = new wi(Zi), this.pressedAt = 0, this.wasDueLastTick = !1, this.fireSchedule.arm(Me), this.soundLastRoundFired = ye.soundLastRoundFired, this.aimChangeTime = 0, this.reloadStartTime = 0, this.firstPersonGunMeshScaling = .055, this.smallMuzzleFlashScale  … [truncated]
```

#### 1341. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10743` → after: `L10068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10068) · [Before (L10743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10743)

```diff
-         })), this.cachedZoomLevel = this.kz.camera.K4, this.inaccuracyCalculator = null, this.heldItemState.qL === this.kz.EX && (this.inaccuracyCalculator = new wO(this.kz, BB, this.gunStats), this.kz.camera.K8.m_(this.gunStats.getStat("kickbackDecreaseRate"))), this.lastGunShot … [truncated]
+         })), this.cachedZoomLevel = this.uk.camera.U_, this.inaccuracyCalculator = null, this.heldItemState.cL === this.uk.gC && (this.inaccuracyCalculator = new ui(this.uk, ee, this.gunStats), this.uk.camera.o_.Y5(this.gunStats.getStat("kickbackDecreaseRate"))), this.lastGunShot … [truncated]
```

#### 1342. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10747` → after: `L10072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10072) · [Before (L10747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10747)

```diff
-         this.muzzleParticleEmitter && !this.muzzleParticleEmitter.lV() || (null === (BB = this.muzzleParticleSystem) || void 0 === BB || BB.dispose(), this.createMuzzleEmitter())
+         this.muzzleParticleEmitter && !this.muzzleParticleEmitter.RZ() || (null === (ee = this.muzzleParticleSystem) || void 0 === ee || ee.dispose(), this.createMuzzleEmitter())
```

#### 1343. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10787` → after: `L10112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10112) · [Before (L10787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10787)

```diff
-           blendMode: dO.f.Standard
+           blendMode: Di.e.Standard
```

#### 1344. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10793-L10794` → after: `L10118-L10119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10118-L10119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10118-L10119) · [Before (L10793-L10794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10793-L10794)

```diff
-         (super.reset(), this.aiming && this.bloxd.client.cameraController.setCameraZoomNoValidation(this.cachedZoomLevel), this.firing = !1, this.burstRemaining = 0, this.burstSchedule = new kO(fO), this.aiming = !1, this.attemptAiming = !1, this.fireSchedule = new kO(fO), this.p … [truncated]
-         zB.o.unsubscribe(this.networkedPlayerShotSub), null === (BB = this.bulletBlockedBillboardPlane) || void 0 === BB || BB.Zk(!1);
+         (super.reset(), this.aiming && this.bloxd.client.cameraController.setCameraZoomNoValidation(this.cachedZoomLevel), this.firing = !1, this.burstRemaining = 0, this.burstSchedule = new wi(Zi), this.aiming = !1, this.attemptAiming = !1, this.fireSchedule = new wi(Zi), this.p … [truncated]
+         ke.h.unsubscribe(this.networkedPlayerShotSub), null === (ee = this.bulletBlockedBillboardPlane) || void 0 === ee || ee.JY(!1);
```

#### 1345. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10803` → after: `L10128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10128) · [Before (L10803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10803)

```diff
-         null !== BB && this.muzzleParticleEmitter && this.kz.UP.kF.detachTransformNodeIfFound(this.muzzleParticleEmitter, BB, 0), super.releaseThirdPersonThinObject()
+         null !== ee && this.muzzleParticleEmitter && this.uk.PR.vx.detachTransformNodeIfFound(this.muzzleParticleEmitter, ee, 0), super.releaseThirdPersonThinObject()
```

#### 1346. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10809` → after: `L10134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10134) · [Before (L10809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10809)

```diff
-       QDB() {
+       wbe() {
```

#### 1347. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10815-L10816` → after: `L10140-L10141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10140-L10141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10140-L10141) · [Before (L10815-L10816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10815-L10816)

```diff
-       GDB() {
-         return this.breakingItem.GDB(), this.firing = !1, {
+       Wbe() {
+         return this.breakingItem.Wbe(), this.firing = !1, {
```

#### 1348. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10821` → after: `L10146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10146) · [Before (L10821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10821)

```diff
-       LMB() {
+       RRe() {
```

#### 1349. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10823` → after: `L10148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10148) · [Before (L10823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10823)

```diff
-         return BB.tookAction ? BB : (this.secondaryHeld = !0, this.updateAttemptAiming(), {
+         return ee.tookAction ? ee : (this.secondaryHeld = !0, this.updateAttemptAiming(), {
```

#### 1350. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10828` → after: `L10153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10153) · [Before (L10828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10828)

```diff
-       ODB() {
+       dbe() {
```

#### 1351. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10849-L10850` → after: `L10174-L10175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10174-L10175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10174-L10175) · [Before (L10849-L10850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10849-L10850)

```diff
-       YDB() {
-         return this.breakingItem.YDB(), !0
+       tbe() {
+         return this.breakingItem.tbe(), !0
```

#### 1352. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10856` → after: `L10181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10181) · [Before (L10856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10856)

```diff
-         const GB = HB.c.get("isTouchScreen");
+         const He = he.e.get("isTouchScreen");
```

#### 1353. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10875` → after: `L10200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10200) · [Before (L10875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10875)

```diff
-         YB && this.lastShots.set(this.gunTypeObj.name, OB), !this.firing || this.gunStats.getStat("autoFireWithMouse") || GB || (this.firing = !1), this.heldItemState.qL === this.kz.EX && (0 !== this.kz.camera.Z8 ? this.updateAttackBlockedBillboard() : this.bulletBlockedBillboard … [truncated]
+         ye && this.lastShots.set(this.gunTypeObj.name, ie), !this.firing || this.gunStats.getStat("autoFireWithMouse") || He || (this.firing = !1), this.heldItemState.cL === this.uk.gC && (0 !== this.uk.camera.F_ ? this.updateAttackBlockedBillboard() : this.bulletBlockedBillboard … [truncated]
```

#### 1354. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10883` → after: `L10208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10208) · [Before (L10883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10883)

```diff
-         YB > 0 ? "sniper" === DB && FO.h.setMultiplierType("sniperScope", 1 / (1 + 5 * YB)) : "sniper" === DB && FO.h.removeMultiplier("sniperScope");
+         ye > 0 ? "sniper" === be && ai.f.setMultiplierType("sniperScope", 1 / (1 + 5 * ye)) : "sniper" === be && ai.f.removeMultiplier("sniperScope");
```

#### 1355. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10887` → after: `L10212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10212) · [Before (L10887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10887)

```diff
-           this.kz.UP.NJB(this.mesh, !BB && this.heldItemState._visible)
+           this.uk.PR.lJe(this.mesh, !ee && this.heldItemState._visible)
```

#### 1356. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10892` → after: `L10217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10217) · [Before (L10892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10892)

```diff
-         this.aimChangeTime = performance.now(), zB.o.tM("aimingOverlay", this.gunStats.getStat("scopeType")), this.kz.DW.qYB().canRunCombinator.setBooleanType("canRunBecauseNotAiming", !1), this.cachedZoomLevel = this.bloxd.client.cameraController.getZoomDistance(), this.bloxd.cl … [truncated]
+         this.aimChangeTime = performance.now(), ke.h.yR("aimingOverlay", this.gunStats.getStat("scopeType")), this.uk.sE.Cye().canRunCombinator.setBooleanType("canRunBecauseNotAiming", !1), this.cachedZoomLevel = this.bloxd.client.cameraController.getZoomDistance(), this.bloxd.cl … [truncated]
```

#### 1357. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10895` → after: `L10220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10220) · [Before (L10895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10895)

```diff
-         this.aimChangeTime = performance.now(), zB.o.tM("aimingOverlay", "none"), this.kz.DW.qYB().canRunCombinator.setBooleanType("canRunBecauseNotAiming", !0), this.bloxd.client.cameraController.setCameraZoomNoValidation(this.cachedZoomLevel)
+         this.aimChangeTime = performance.now(), ke.h.yR("aimingOverlay", "none"), this.uk.sE.Cye().canRunCombinator.setBooleanType("canRunBecauseNotAiming", !0), this.bloxd.client.cameraController.setCameraZoomNoValidation(this.cachedZoomLevel)
```

#### 1358. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10904` → after: `L10229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10229) · [Before (L10904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10904)

```diff
-         if (this.updateMuzzleFlashFromRenderTick(), !this.kz.UP.wq) return;
+         if (this.updateMuzzleFlashFromRenderTick(), !this.uk.PR.GT) return;
```

#### 1359. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10906` → after: `L10231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10231) · [Before (L10906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10906)

```diff
-         null !== OB && this.kz.UP.kF.getActuallyVisible(OB) && this._updateHeldMeshLighting()
+         null !== ie && this.uk.PR.vx.getActuallyVisible(ie) && this._updateHeldMeshLighting()
```

#### 1360. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10912` → after: `L10237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10237) · [Before (L10912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10912)

```diff
-         this.muzzleParticleEmitter && !(0, aO.e)(this.muzzleParticleEmitter) && null !== this.liveThirdPersonThinObjectId() && (this.muzzleParticleEmitter.position._isDirty = !0)
+         this.muzzleParticleEmitter && !(0, ni.f)(this.muzzleParticleEmitter) && null !== this.liveThirdPersonThinObjectId() && (this.muzzleParticleEmitter.position._isDirty = !0)
```

#### 1361. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10917` → after: `L10242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10242) · [Before (L10917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10917)

```diff
-       FMB() {
+       JRe() {
```

#### 1362. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10921` → after: `L10246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10246) · [Before (L10921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10921)

```diff
-           return this.mesh.SP.set(BB, BB, BB), this.mesh.rotation.set(0, .5 * Math.PI, 0), this.mesh.parent = this.kz.UP.camera, (0, NB.s)(this.mesh, 0, 0, 0), this.ensureMuzzleEmitter(), this.muzzleParticleEmitter.parent = this.mesh, this.placeMuzzleEmitter(BB, BB, BB), void thi … [truncated]
+           return this.mesh.wR.set(ee, ee, ee), this.mesh.rotation.set(0, .5 * Math.PI, 0), this.mesh.parent = this.uk.PR.camera, (0, Xe.n)(this.mesh, 0, 0, 0), this.ensureMuzzleEmitter(), this.muzzleParticleEmitter.parent = this.mesh, this.placeMuzzleEmitter(ee, ee, ee), void thi … [truncated]
```

#### 1363. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10923` → after: `L10248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10248) · [Before (L10923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10923)

```diff
-         this.kz.UP.NJB(this.mesh, !1);
+         this.uk.PR.lJe(this.mesh, !1);
```

#### 1364. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10927` → after: `L10252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10252) · [Before (L10927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10927)

```diff
-           return void(null !== BB && this.kz.UP.kF.setVisibility(BB, !1))
+           return void(null !== ee && this.uk.PR.vx.setVisibility(ee, !1))
```

#### 1365. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10937` → after: `L10262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10262) · [Before (L10937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10937)

```diff
-         if ("arm" === BB) return void(0, RB.g)(this.typeObj, OB.itemOffset, this.thirdPersonPose);
+         if ("arm" === ee) return void(0, ze.f)(this.typeObj, ie.itemOffset, this.thirdPersonPose);
```

#### 1366. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10941` → after: `L10266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10266) · [Before (L10941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10941)

```diff
-           SP: jB
+           wR: Ue
```

#### 1367. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10943` → after: `L10268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10268) · [Before (L10943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10943)

```diff
-         this.thirdPersonPose.usesQuaternion = !1, jB.IU(HO);
+         this.thirdPersonPose.usesQuaternion = !1, Ue.jD(Gi);
```

#### 1368. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10945-L10947` → after: `L10270-L10272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10270-L10272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10270-L10272) · [Before (L10945-L10947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10945-L10947)

```diff
-           JB = bO.x + (null !== (GB = null === yB || void 0 === yB ? void 0 : yB[0]) && void 0 !== GB ? GB : 0),
-           MB = bO.y + (null !== (YB = null === yB || void 0 === yB ? void 0 : yB[1]) && void 0 !== YB ? YB : 0),
-           PB = bO.z + (null !== (DB = null === yB || void 0 === yB ? void 0 : yB[2]) && void 0 !== DB ? DB : 0),
+           Je = Ii.x + (null !== (He = null === Fe || void 0 === Fe ? void 0 : Fe[0]) && void 0 !== He ? He : 0),
+           oe = Ii.y + (null !== (ye = null === Fe || void 0 === Fe ? void 0 : Fe[1]) && void 0 !== ye ? ye : 0),
+           Re = Ii.z + (null !== (be = null === Fe || void 0 === Fe ? void 0 : Fe[2]) && void 0 !== be ? be : 0),
```

#### 1369. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10951-L10952` → after: `L10276-L10277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10276-L10277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10276-L10277) · [Before (L10951-L10952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10951-L10952)

```diff
-           ZB.Xp.TransformCoordinatesFromFloatsToRef(JB, MB, PB, BB, QB), oB.zOB(CO.x + zB[0], CO.y + zB[1], CO.z + zB[2])
-         } else QB.zOB(JB, MB, PB), oB.zOB(CO.x, CO.y, CO.z)
+           pe.rf.TransformCoordinatesFromFloatsToRef(Je, oe, Re, ee, Me), Ke.wie(Ni.x + ke[0], Ni.y + ke[1], Ni.z + ke[2])
+         } else Me.wie(Je, oe, Re), Ke.wie(Ni.x, Ni.y, Ni.z)
```

#### 1370. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10958` → after: `L10283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10283) · [Before (L10958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10958)

```diff
-         const OB = this.kz.UP.kF;
+         const ie = this.uk.PR.vx;
```

#### 1371. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10961` → after: `L10286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10286) · [Before (L10961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10961)

```diff
-           SP: GB
+           wR: He
```

#### 1372. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10972` → after: `L10297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10297) · [Before (L10972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10972)

```diff
-         DB.SP.set(oB / Math.abs(BB), oB / Math.abs(OB), oB / Math.abs(GB))
+         be.wR.set(Ke / Math.abs(ee), Ke / Math.abs(ie), Ke / Math.abs(He))
```

#### 1373. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10979` → after: `L10304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10304) · [Before (L10979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10979)

```diff
-         if (console.assert(this.heldItemState.qL === this.kz.EX, "fireBulletLocal should only be called for local player."), this.reloading) return !1;
+         if (console.assert(this.heldItemState.cL === this.uk.gC, "fireBulletLocal should only be called for local player."), this.reloading) return !1;
```

#### 1374. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10981` → after: `L10306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10306) · [Before (L10981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10981)

```diff
-         const GB = this.kz.DW.hGB(this.kz.EX),
+         const He = this.uk.sE.Jye(this.uk.gC),
```

#### 1375. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L10983-L10984` → after: `L10308-L10309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10308-L10309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10308-L10309) · [Before (L10983-L10984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L10983-L10984)

```diff
-           DB = (0, lB.d)().client.inventoryPrediction.predict(MO.d.shoot(GB.getSelectedSlotIndex(), YB.name)),
-           QB = null !== (OB = this.gunStats.getStat("shotPelletCount")) && void 0 !== OB ? OB : 1;
+           be = (0, qe.e)().client.inventoryPrediction.predict(oi.c.shoot(He.getSelectedSlotIndex(), ye.name)),
+           Me = null !== (ie = this.gunStats.getStat("shotPelletCount")) && void 0 !== ie ? ie : 1;
```

#### 1376. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11000` → after: `L10325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10325) · [Before (L11000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11000)

```diff
-               mM: PB,
+               wo: Re,
```

#### 1377. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11005` → after: `L10330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10330) · [Before (L11005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11005)

```diff
-             AB = null !== (RB = VO.f.lifeformMeshToBodyPart[lB]) && void 0 !== RB ? RB : zB;
+             Ee = null !== (ze = Oi.g.lifeformMeshToBodyPart[qe]) && void 0 !== ze ? ze : ke;
```

#### 1378. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11007` → after: `L10332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10332) · [Before (L11007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11007)

```diff
-           const VB = YB === uO.b.HIT_ENTITY && (null === (WB = this.kz.FX[this.kz.EX][DB]) || void 0 === WB ? void 0 : WB.canAttack) && !this.kz.FX[this.kz.EX][DB]._invincible;
+           const ge = ye === Ai.c.HIT_ENTITY && (null === (Be = this.uk.zC[this.uk.gC][be]) || void 0 === Be ? void 0 : Be.canAttack) && !this.uk.zC[this.uk.gC][be]._invincible;
```

#### 1379. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11009-L11010` → after: `L10334-L10335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10334-L10335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10334-L10335) · [Before (L11009-L11010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11009-L11010)

```diff
-             mM: PB,
-             IM: jB,
+             wo: Re,
+             Po: Ue,
```

#### 1380. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11012-L11013` → after: `L10337-L10338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10337-L10338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10337-L10338) · [Before (L11012-L11013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11012-L11013)

```diff
-               MG: DB,
-               FM: AB
+               XH: be,
+               Ao: Ee
```

#### 1381. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11015-L11016` → after: `L10340-L10341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10340-L10341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10340-L10341) · [Before (L11015-L11016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11015-L11016)

```diff
-               MG: null,
-               FM: null
+               XH: null,
+               Ao: null
```

#### 1382. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11019` → after: `L10344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10344) · [Before (L11019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11019)

```diff
-         }(0, lB.d)().client.gameRecorder.recordBulletShot(this.heldItemState.qL, yB);
+         }(0, qe.e)().client.gameRecorder.recordBulletShot(this.heldItemState.cL, Fe);
```

#### 1383. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11021-L11025` → after: `L10346-L10350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10346-L10350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10346-L10350) · [Before (L11021-L11025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11021-L11025)

```diff
-           fM: YB.name,
-           kM: (0, lB.d)().client.getMsgHandler().aYB.state.tickCounter,
-           dM: MB,
-           KM: oB,
-           Yo: DB
+           Bo: ye.name,
+           Eo: (0, qe.e)().client.getMsgHandler().kbe.state.tickCounter,
+           Oo: oe,
+           Wo: Ke,
+           kK: be
```

#### 1384. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11027` → after: `L10352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10352) · [Before (L11027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11027)

```diff
-         if ((0, jB.sendColyMessage)(bB.yj, AB), pB) {
+         if ((0, Ue.sendColyMessage)(se.Gj, Ee), fe) {
```

#### 1385. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11029-L11035` → after: `L10354-L10360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10354-L10360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10354-L10360) · [Before (L11029-L11035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11029-L11035)

```diff
-           const BB = this.kz.xR,
-             OB = (0, lB.d)().client,
-             GB = null !== (VB = null === (SB = YB.attributes.customAttributes) || void 0 === SB ? void 0 : SB.enchantments) && void 0 !== VB ? VB : {},
-             DB = OB.getEffectLevel(this.kz.EX, "Damage"),
-             QB = OB.getEffectLevel(this.kz.EX, "Rested Damage"),
-             jB = null !== (nB = GB.Damage) && void 0 !== nB ? nB : 0,
-             yB = null !== (UB = GB["Critical Damage"]) && void 0 !== UB ? UB : 0;
+           const ee = this.uk.uE,
+             ie = (0, qe.e)().client,
+             He = null !== (ge = null === (Oe = ye.attributes.customAttributes) || void 0 === Oe ? void 0 : Oe.enchantments) && void 0 !== ge ? ge : {},
+             be = ie.getEffectLevel(this.uk.gC, "Damage"),
+             Me = ie.getEffectLevel(this.uk.gC, "Rested Damage"),
+             Ue = null !== (de = He.Damage) && void 0 !== de ? de : 0,
+             Fe = null !== (We = He["Critical Damage"]) && void 0 !== We ? We : 0;
```

#### 1386. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11037-L11038` → after: `L10362-L10363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10362-L10363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10362-L10363) · [Before (L11037-L11038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11037-L11038)

```diff
-               MG: YB,
-               FM: MB
+               XH: ye,
+               Ao: oe
```

#### 1387. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11042` → after: `L10367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10367) · [Before (L11042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11042)

```diff
-             const GB = this.kz.FX[this.kz.EX][YB];
+             const He = this.uk.zC[this.uk.gC][ye];
```

#### 1388. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11047` → after: `L10372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10372) · [Before (L11047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11047)

```diff
-             lB = (0, PB.q)(lB, DB, QB, jB), "Head" === MB && yB > 0 && (lB *= 1 + .08 * yB);
+             qe = (0, Re.t)(qe, be, Me, Ue), "Head" === oe && Fe > 0 && (qe *= 1 + .08 * Fe);
```

#### 1389. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11051` → after: `L10376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10376) · [Before (L11051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11051)

```diff
-             zB.o.tM("shotPlayer", {
+             ke.h.yR("shotPlayer", {
```

#### 1390. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11058-L11059` → after: `L10383-L10384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10383-L10384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10383-L10384) · [Before (L11058-L11059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11058-L11059)

```diff
-           zB.o.tM("localGunHitmarker", {
-             GD: qB
+           ke.h.yR("localGunHitmarker", {
+             Tb: Te
```

#### 1391. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11062` → after: `L10387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10387) · [Before (L11062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11062)

```diff
-         zB.o.tM("localPlayerNewShotsLeft", YB.attributes.customAttributes.shotsLeft);
+         ke.h.yR("localPlayerNewShotsLeft", ye.attributes.customAttributes.shotsLeft);
```

#### 1392. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11068` → after: `L10393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10393) · [Before (L11068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11068)

```diff
-         return this.inaccuracyCalculator.shot(BB), this.kz.camera.K8.add(uB), 0 === this.getShotsLeftCount() && this.reload(BB), !0
+         return this.inaccuracyCalculator.shot(ee), this.uk.camera.o_.add(Pe), 0 === this.getShotsLeftCount() && this.reload(ee), !0
```

#### 1393. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11080-L11081` → after: `L10405-L10406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10405-L10406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10405-L10406) · [Before (L11080-L11081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11080-L11081)

```diff
-           DW: jB
-         } = this.kz, yB = this.bloxd.E1(this.heldItemState.qL), JB = this.pickActionHelper.pickWeaponRaycast(BB, OB, this.bulletReachDistance, {
+           sE: Ue
+         } = this.uk, Fe = this.bloxd.v_(this.heldItemState.cL), Je = this.pickActionHelper.pickWeaponRaycast(ee, ie, this.bulletReachDistance, {
```

#### 1394. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11087` → after: `L10412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10412) · [Before (L11087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11087)

```diff
-           pT: lB,
+           bS: qe,
```

#### 1395. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11089-L11090` → after: `L10414-L10415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10414-L10415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10414-L10415) · [Before (L11089-L11090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11089-L11090)

```diff
-         } = JB, qB = null !== (QB = JB.globalRayOrigin) && void 0 !== QB ? QB : DB().copy(eO, this.bloxd.getLifeformEyePos(this.heldItemState.qL, !1)), ZB = null !== (oB = JB.distanceTravelled) && void 0 !== oB ? oB : this.bulletReachDistance, NB = DB().fp(TO, qB, OB, 2.5 * yB),  … [truncated]
-         jB.RL(RB, "hidingMeshManager", {
+         } = Je, Te = null !== (Me = Je.globalRayOrigin) && void 0 !== Me ? Me : be().copy(ji, this.bloxd.getLifeformEyePos(this.heldItemState.cL, !1)), pe = null !== (Ke = Je.distanceTravelled) && void 0 !== Ke ? Ke : this.bulletReachDistance, Xe = be().ek(si, Te, ie, 2.5 * Fe),  … [truncated]
+         Ue.uL(ze, "hidingMeshManager", {
```

#### 1396. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11093` → after: `L10418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10418) · [Before (L11093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11093)

```diff
-             jB.RL(RB, jB.names.mesh, {
+             Ue.uL(ze, Ue.names.mesh, {
```

#### 1397. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11095` → after: `L10420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10420) · [Before (L11095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11095)

```diff
-               AyB: !0
+               SFe: !0
```

#### 1398. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11099` → after: `L10424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10424) · [Before (L11099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11099)

```diff
-             jB.dL(RB, jB.names.mesh)
+             Ue.lL(ze, Ue.names.mesh)
```

#### 1399. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11104-L11105` → after: `L10429-L10430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10429-L10430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10429-L10430) · [Before (L11104-L11105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11104-L11105)

```diff
-           RJ: "bullet"
-         }), jB.RL(RB, "bullet", {
+           oJ: "bullet"
+         }), Ue.uL(ze, "bullet", {
```

#### 1400. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11107` → after: `L10432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10432) · [Before (L11107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11107)

```diff
-             MB === uO.b.HIT_BLOCK && this.makeBulletHole(zB, lB, GB)
+             oe === Ai.c.HIT_BLOCK && this.makeBulletHole(ke, qe, He)
```

#### 1401. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11120` → after: `L10445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10445) · [Before (L11120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11120)

```diff
-           mM: AB,
+           wo: Ee,
```

#### 1402. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11125` → after: `L10450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10450) · [Before (L11125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11125)

```diff
-         return "head" === this.kz.xR.gunshotOrigin ? "head" : "default"
+         return "head" === this.uk.uE.gunshotOrigin ? "head" : "default"
```

#### 1403. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11128` → after: `L10453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10453) · [Before (L11128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11128)

```diff
-         return this.heldItemState.qL === this.kz.EX && !0 === HB.c.get("clientEscMenuOptions").showWeaponRaycasts
+         return this.heldItemState.cL === this.uk.gC && !0 === he.e.get("clientEscMenuOptions").showWeaponRaycasts
```

#### 1404. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11132` → after: `L10457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10457) · [Before (L11132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11132)

```diff
-         const GB = this.heldItemState.qL === this.kz.EX,
+         const He = this.heldItemState.cL === this.uk.gC,
```

#### 1405. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11136` → after: `L10461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10461) · [Before (L11136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11136)

```diff
-           if (YB && null === this.kz.DW.hGB(this.kz.EX).findItem("Ammo")) return
+           if (ye && null === this.uk.sE.Jye(this.uk.gC).findItem("Ammo")) return
```

#### 1406. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11140-L11142` → after: `L10465-L10467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10465-L10467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10465-L10467) · [Before (L11140-L11142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11140-L11142)

```diff
-           const BB = (0, lB.d)().client.inventoryPrediction.predict(YB ? MO.d.takeFirst("Ammo") : null);
-           (0, jB.sendColyMessage)(bB.fj, {
-             Yo: BB
+           const ee = (0, qe.e)().client.inventoryPrediction.predict(ye ? oi.c.takeFirst("Ammo") : null);
+           (0, Ue.sendColyMessage)(se.hj, {
+             kK: ee
```

#### 1407. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11146` → after: `L10471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10471) · [Before (L11146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11146)

```diff
-         this.heldItemState.qL === this.kz.EX && zB.o.tM("middleScreenBarInitiate", {
+         this.heldItemState.cL === this.uk.gC && ke.h.yR("middleScreenBarInitiate", {
```

#### 1408. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11148` → after: `L10473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10473) · [Before (L11148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11148)

```diff
-           BY: !0,
+           Uy: !0,
```

#### 1409. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11151` → after: `L10476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10476) · [Before (L11151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11151)

```diff
-           this.reloading = !1, this.numBulletsReloading = 0, this.reloadTimeouts = [], this.heldItemState.qL === this.kz.EX && (this.setShotsLeft(this.gunStats.getStat("clipSize")), zB.o.tM("localPlayerNewShotsLeft", this.getShotsLeftCount()))
+           this.reloading = !1, this.numBulletsReloading = 0, this.reloadTimeouts = [], this.heldItemState.cL === this.uk.gC && (this.setShotsLeft(this.gunStats.getStat("clipSize")), ke.h.yR("localPlayerNewShotsLeft", this.getShotsLeftCount()))
```

#### 1410. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11153` → after: `L10478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10478) · [Before (L11153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11153)

```diff
-         const QB = this.heldItemState.qL === this.kz.EX ? KO.h.firstPersonReload : KO.h.thirdPersonReload,
+         const Me = this.heldItemState.cL === this.uk.gC ? Pi.f.firstPersonReload : Pi.f.thirdPersonReload,
```

#### 1411. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11155-L11156` → after: `L10480-L10481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10480-L10481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10480-L10481) · [Before (L11155-L11156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11155-L11156)

```diff
-             const OB = (0, mO.f)(BB);
-             void 0 !== OB && lO.b.play(OB, QB, this.heldItemState.qL, void 0, void 0)
+             const ie = (0, Yi.g)(ee);
+             void 0 !== ie && qi.d.play(ie, Me, this.heldItemState.cL, void 0, void 0)
```

#### 1412. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11163` → after: `L10488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10488) · [Before (L11163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11163)

```diff
-           oB(`${yB}_load_bullet_`);
+           Ke(`${Fe}_load_bullet_`);
```

#### 1413. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11165` → after: `L10490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10490) · [Before (L11165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11165)

```diff
-             oB(`${yB}_load_bullet_`)
+             Ke(`${Fe}_load_bullet_`)
```

#### 1414. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11168` → after: `L10493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10493) · [Before (L11168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11168)

```diff
-             oB(`${yB}_cock_`)
+             Ke(`${Fe}_cock_`)
```

#### 1415. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11172-L11173` → after: `L10497-L10498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10497-L10498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10497-L10498) · [Before (L11172-L11173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11172-L11173)

```diff
-           oB(`${yB}_magazine_unload_`), this.reloadTimeouts.push(setTimeout((() => {
-             oB(`${yB}_magazine_load_`)
+           Ke(`${Fe}_magazine_unload_`), this.reloadTimeouts.push(setTimeout((() => {
+             Ke(`${Fe}_magazine_load_`)
```

#### 1416. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11175` → after: `L10500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10500) · [Before (L11175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11175)

```diff
-             oB(`${yB}_cock_`)
+             Ke(`${Fe}_cock_`)
```

#### 1417. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11193` → after: `L10518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10518) · [Before (L11193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11193)

```diff
-           return OB < GB ? OB / GB : OB > BB - GB ? 1 - (OB - (BB - GB)) / GB : 1
+           return ie < He ? ie / He : ie > ee - He ? 1 - (ie - (ee - He)) / He : 1
```

#### 1418. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11201-L11202` → after: `L10526-L10527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10526-L10527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10526-L10527) · [Before (L11201-L11202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11201-L11202)

```diff
-         const OB = this.kz.DW.hGB(this.heldItemState.qL).getItemAtSelectedSlot().attributes.customAttributes;
-         OB.shotsLeft = BB, this.kz.DW.hGB(this.heldItemState.qL).getItemAtSelectedSlot().attributes.customAttributes = OB
+         const ie = this.uk.sE.Jye(this.heldItemState.cL).getItemAtSelectedSlot().attributes.customAttributes;
+         ie.shotsLeft = ee, this.uk.sE.Jye(this.heldItemState.cL).getItemAtSelectedSlot().attributes.customAttributes = ie
```

#### 1419. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11206` → after: `L10531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10531) · [Before (L11206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11206)

```diff
-         return null === (BB = this.kz.DW.hGB(this.heldItemState.qL).getItemAtSelectedSlot().attributes.customAttributes) || void 0 === BB ? void 0 : BB.shotsLeft
+         return null === (ee = this.uk.sE.Jye(this.heldItemState.cL).getItemAtSelectedSlot().attributes.customAttributes) || void 0 === ee ? void 0 : ee.shotsLeft
```

#### 1420. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11217-L11218` → after: `L10542-L10543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10542-L10543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10542-L10543) · [Before (L11217-L11218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11217-L11218)

```diff
-         this.kz.f6([BB, OB, GB], YB);
-         const DB = this.kz.DW.add(YB, .1, .1, this.gunTypeObj.getBulletCasingMesh(), null, !0),
+         this.uk.S_([ee, ie, He], ye);
+         const be = this.uk.sE.add(ye, .1, .1, this.gunTypeObj.getBulletCasingMesh(), null, !0),
```

#### 1421. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11222-L11223` → after: `L10547-L10548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10547-L10548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10547-L10548) · [Before (L11222-L11223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11222-L11223)

```diff
-         jB = this.aimsAsLocalPlayer() ? TB.b.getAimHeading(this.kz) : this.kz.DW.EGB(this.heldItemState.qL).heading, this.kz.DW.mC(DB).applyImpulse([Math.cos(jB) * oB, QB, -Math.sin(jB) * oB]), setTimeout((() => {
-           this.kz.DW.deleteEntity(DB)
+         Ue = this.aimsAsLocalPlayer() ? je.d.getAimHeading(this.uk) : this.uk.sE.Uye(this.heldItemState.cL).heading, this.uk.sE.XN(be).applyImpulse([Math.cos(Ue) * Ke, Me, -Math.sin(Ue) * Ke]), setTimeout((() => {
+           this.uk.sE.deleteEntity(be)
```

#### 1422. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11229-L11234` → after: `L10554-L10559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10554-L10559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10554-L10559) · [Before (L11229-L11234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11229-L11234)

```diff
-           oB = this.kz.IGB(BB, null, eO),
-           jB = new ZB.Xp(oB[0] + OB[0] * QB, oB[1] + OB[1] * QB, oB[2] + OB[2] * QB),
-           yB = new ZB.Xp(oB[0] - OB[0], oB[1] - OB[1], oB[2] - OB[2]);
-         YB.position = jB, (0, NB.o)(YB, yB.x - jB.x, yB.y - jB.y, yB.z - jB.z), YB.bq = !1;
-         const JB = DB().fp(TO, BB, OB, QB);
-         this.kz.UP.Hq(YB, !1, JB), setTimeout((() => {
+           Ke = this.uk.NHe(ee, null, ji),
+           Ue = new pe.rf(Ke[0] + ie[0] * Me, Ke[1] + ie[1] * Me, Ke[2] + ie[2] * Me),
+           Fe = new pe.rf(Ke[0] - ie[0], Ke[1] - ie[1], Ke[2] - ie[2]);
+         ye.position = Ue, (0, Xe.l)(ye, Fe.x - Ue.x, Fe.y - Ue.y, Fe.z - Ue.z), ye.Mp = !1;
+         const Je = be().ek(si, ee, ie, Me);
+         this.uk.PR.Up(ye, !1, Je), setTimeout((() => {
```

#### 1423. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11243` → after: `L10568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10568) · [Before (L11243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11243)

```diff
-           (0, NB.s)(this.mesh, YB, DB + QB, .4)
+           (0, Xe.n)(this.mesh, ye, be + Me, .4)
```

#### 1424. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11248-L11249` → after: `L10573-L10574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10573-L10574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10573-L10574) · [Before (L11248-L11249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11248-L11249)

```diff
-         const GB = 1 - .25 * BB * (null !== (OB = this.gunStats.getStat("aimZoomFactor")) && void 0 !== OB ? OB : 1);
-         this.kz.DW.getState(this.kz.EX, "playerCameraAdjustment").fovMultiplier.setMultiplierType("aimingGunZoom", GB)
+         const He = 1 - .25 * ee * (null !== (ie = this.gunStats.getStat("aimZoomFactor")) && void 0 !== ie ? ie : 1);
+         this.uk.sE.getState(this.uk.gC, "playerCameraAdjustment").fovMultiplier.setMultiplierType("aimingGunZoom", He)
```

#### 1425. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11260` → after: `L10585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10585) · [Before (L11260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11260)

```diff
-           DB().fp(OB, OB, GB, .001);
+           be().ek(ie, ie, He, .001);
```

#### 1426. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11262` → after: `L10587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10587) · [Before (L11262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11262)

```diff
-           (0, NB.s)(this.bulletBlockedBillboardPlane, YB, QB, oB), DB().fp(OB, OB, GB, -1), (0, NB.o)(this.bulletBlockedBillboardPlane, OB[0] - YB, OB[1] - QB, OB[2] - oB)
+           (0, Xe.n)(this.bulletBlockedBillboardPlane, ye, Me, Ke), be().ek(ie, ie, He, -1), (0, Xe.l)(this.bulletBlockedBillboardPlane, ie[0] - ye, ie[1] - Me, ie[2] - Ke)
```

#### 1427. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11264` → after: `L10589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10589) · [Before (L11264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11264)

```diff
-         this.kz.UP.NJB(this.bulletBlockedBillboardPlane, null !== BB)
+         this.uk.PR.lJe(this.bulletBlockedBillboardPlane, null !== ee)
```

#### 1428. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11270` → after: `L10595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10595) · [Before (L11270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11270)

```diff
-         lO.b.preloadAtIdle([...(0, mO.o)(BB), vO, sO])
+         qi.d.preloadAtIdle([...(0, Yi.n)(ee), ri, Qi])
```

#### 1429. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11282` → after: `L10607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10607) · [Before (L11282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11282)

```diff
-         if (BB - this.soundLastRoundFired > 3 * OB && (0, mO.j)(GB, `${YB}_first_shot_01`)) this.lastGunShotTail = lO.b.play(`${YB}_first_shot_01`, KO.h.gunShot, this.heldItemState.qL, 75, 10);
+         if (ee - this.soundLastRoundFired > 3 * ie && (0, Yi.h)(He, `${ye}_first_shot_01`)) this.lastGunShotTail = qi.d.play(`${ye}_first_shot_01`, Pi.f.gunShot, this.heldItemState.cL, 75, 10);
```

#### 1430. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11284-L11286` → after: `L10609-L10611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10609-L10611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10609-L10611) · [Before (L11284-L11286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11284-L11286)

```diff
-           const BB = (0, mO.f)(`${YB}_shot_`);
-           this.lastGunShotTail = lO.b.play(BB, KO.h.gunShot, this.heldItemState.qL, 75, 10)
-         }(0, mO.j)(GB, `${YB}_tail_only_shot_01`) && (this.lastGunShotTail = lO.b.play(`${YB}_tail_only_shot_01`, KO.h.gunShot, this.heldItemState.qL, 75, 10))
+           const ee = (0, Yi.g)(`${ye}_shot_`);
+           this.lastGunShotTail = qi.d.play(ee, Pi.f.gunShot, this.heldItemState.cL, 75, 10)
+         }(0, Yi.h)(He, `${ye}_tail_only_shot_01`) && (this.lastGunShotTail = qi.d.play(`${ye}_tail_only_shot_01`, Pi.f.gunShot, this.heldItemState.cL, 75, 10))
```

#### 1431. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11289` → after: `L10614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10614) · [Before (L11289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11289)

```diff
-         lO.b.play((0, mO.f)(vO), KO.h.gunHeadshot)
+         qi.d.play((0, Yi.g)(ri), Pi.f.gunHeadshot)
```

#### 1432. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11294` → after: `L10619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10619) · [Before (L11294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11294)

```diff
-           lO.b.play((0, mO.f)(sO), KO.h.bulletShellBounce)
+           qi.d.play((0, Yi.g)(Qi), Pi.f.bulletShellBounce)
```

#### 1433. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11298-L11300` → after: `L10623-L10625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10623-L10625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10623-L10625) · [Before (L11298-L11300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11298-L11300)

```diff
-     var tO = GB(38894),
-       BG = GB(39099),
-       OG = GB(38272);
+     var iH = He(39037),
+       HH = He(39226),
+       yH = He(38419);
```

#### 1434. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11303` → after: `L10628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10628) · [Before (L11303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11303)

```diff
-         super(BB, OB, GB, YB, DB), this.inputs = void 0, this.schedule = void 0, this.readyOffset = void 0, this.firingOffset = void 0, this.fireInterval = void 0, this.inputs = 0, this.schedule = new kO(50), this.readyOffset = this.firstPersonPosOffset, this.firingOffset = new Z … [truncated]
+         super(ee, ie, He, ye, be), this.inputs = void 0, this.schedule = void 0, this.readyOffset = void 0, this.firingOffset = void 0, this.fireInterval = void 0, this.inputs = 0, this.schedule = new wi(50), this.readyOffset = this.firstPersonPosOffset, this.firingOffset = new p … [truncated]
```

#### 1435. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11312` → after: `L10637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10637) · [Before (L11312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11312)

```diff
-         OB ? this.schedule.fired(BB, YB, !0) : this.schedule.arm(BB + YB), zB.o.tM("middleScreenBarInitiate", {
+         ie ? this.schedule.fired(ee, ye, !0) : this.schedule.arm(ee + ye), ke.h.yR("middleScreenBarInitiate", {
```

#### 1436. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11314` → after: `L10639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10639) · [Before (L11314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11314)

```diff
-           BY: !0,
+           Uy: !0,
```

#### 1437. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11320` → after: `L10645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10645) · [Before (L11320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11320)

```diff
-         if (!tO.e.includes(DB)) return this._performAltAction();
+         if (!iH.c.includes(be)) return this._performAltAction();
```

#### 1438. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11322-L11324` → after: `L10647-L10649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10647-L10649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10647-L10649) · [Before (L11322-L11324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11322-L11324)

```diff
-           kz: QB
-         } = this, oB = null === (GB = QB.DW.cGB(QB.EX)) || void 0 === GB ? void 0 : GB.inventory, jB = null === oB || void 0 === oB ? void 0 : oB.getSelectedSlotIndex();
-         return (0, iO.Q)(jB) ? (console.error("Failed to get selected slot"), {
+           uk: Me
+         } = this, Ke = null === (He = Me.sE.Fye(Me.gC)) || void 0 === He ? void 0 : He.inventory, Ue = null === Ke || void 0 === Ke ? void 0 : Ke.getSelectedSlotIndex();
+         return (0, ci.P)(Ue) ? (console.error("Failed to get selected slot"), {
```

#### 1439. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11327` → after: `L10652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10652) · [Before (L11327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11327)

```diff
-         }) : (new BG.c(this.bloxd, "", DB).initClientPredicted(jB), {
+         }) : (new HH.d(this.bloxd, "", be).initClientPredicted(Ue), {
```

#### 1440. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11341` → after: `L10666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10666) · [Before (L11341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11341)

```diff
-         null === this.fireInterval && (this.fireInterval = null !== (BB = this.bloxd.getItemStat(this.kz.EX, this.typeObj.name, "fireInterval")) && void 0 !== BB ? BB : 0);
+         null === this.fireInterval && (this.fireInterval = null !== (ee = this.bloxd.getItemStat(this.uk.gC, this.typeObj.name, "fireInterval")) && void 0 !== ee ? ee : 0);
```

#### 1441. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11350` → after: `L10675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10675) · [Before (L11350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11350)

```diff
-       QDB() {
+       wbe() {
```

#### 1442. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11353` → after: `L10678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10678) · [Before (L11353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11353)

```diff
-       GDB() {
+       Wbe() {
```

#### 1443. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11359` → after: `L10684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10684) · [Before (L11359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11359)

```diff
-       LMB() {
+       RRe() {
```

#### 1444. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11362` → after: `L10687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10687) · [Before (L11362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11362)

```diff
-       ODB() {
+       dbe() {
```

#### 1445. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11365` → after: `L10690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10690) · [Before (L11365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11365)

```diff
-       iMB() {
+       oRe() {
```

#### 1446. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11383-L11384` → after: `L10708-L10709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10708-L10709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10708-L10709) · [Before (L11383-L11384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11383-L11384)

```diff
-       oDB() {
-         return null !== (0, OG.n)(this.pickActionHelper) ? this._performAltAction() : this.fire(Date.now(), !1)
+       Dbe() {
+         return null !== (0, yH.l)(this.pickActionHelper) ? this._performAltAction() : this.fire(Date.now(), !1)
```

#### 1447. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11387` → after: `L10712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10712) · [Before (L11387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11387)

```diff
-         super.kP(BB, OB), this.inputs > 0 && this.getFireInterval() && this.fire(OB, !0)
+         super.YR(ee, ie), this.inputs > 0 && this.getFireInterval() && this.fire(ie, !0)
```

#### 1448. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11391` → after: `L10716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10716) · [Before (L11391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11391)

```diff
-         this.firstPersonPosOffset = ZB.Xp.Lerp(this.firingOffset, this.readyOffset, GB), super.renderTickLocalPlayer(BB, OB)
+         this.firstPersonPosOffset = pe.rf.Lerp(this.firingOffset, this.readyOffset, He), super.renderTickLocalPlayer(ee, ie)
```

#### 1449. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11397` → after: `L10722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10722) · [Before (L11397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11397)

```diff
-     var YG = GB(39108);
+     var MH = He(39243);
```

#### 1450. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11400-L11402` → after: `L10725-L10727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10725-L10727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10725-L10727) · [Before (L11400-L11402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11400-L11402)

```diff
-       const BB = (0, lB.g)(),
-         OB = BB.DW.JYB(BB.EX);
-       (0, lB.d)().updateHeldVehicleStatus(), MG(BB, OB)
+       const ee = (0, qe.h)(),
+         ie = ee.sE.Yye(ee.gC);
+       (0, qe.e)().updateHeldVehicleStatus(), kH(ee, ie)
```

#### 1451. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11413` → after: `L10738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10738) · [Before (L11413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11413)

```diff
-       return zB.o.subscribe("updatedInventory", (() => {
+       return ke.h.subscribe("updatedInventory", (() => {
```

#### 1452. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11416` → after: `L10741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10741) · [Before (L11416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11416)

```diff
-         name: "cW",
+         name: "OW",
```

#### 1453. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11419` → after: `L10744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10744) · [Before (L11419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11419)

```diff
-           cW: null,
+           OW: null,
```

#### 1454. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11441` → after: `L10766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10766) · [Before (L11441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11441)

```diff
-         OW: function(OB, GB) {
+         lE: function(ie, He) {
```

#### 1455. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11444-L11446` → after: `L10769-L10771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10769-L10771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10769-L10771) · [Before (L11444-L11446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11444-L11446)

```diff
-             QB = new MB.c(BB, OB);
-           GB.fistItem = new qB.e(BB, GB, YB, QB), GB.cW = GB.fistItem, GB.heldType = "Fist", GB._standardItem = new IB(BB, GB, YB, GB.fistItem, QB), GB._blockItem = new zO(BB, GB, YB, GB.fistItem, QB), GB._chargeableItem = new RO(BB, GB, YB, GB.fistItem, QB), GB._gunItem = new xO … [truncated]
-             GB.cW.IMB()
+             Me = new oe.e(ee, ie);
+           He.fistItem = new Te.e(ee, He, ye, Me), He.OW = He.fistItem, He.heldType = "Fist", He._standardItem = new Ye(ee, He, ye, He.fistItem, Me), He._blockItem = new ki(ee, He, ye, He.fistItem, Me), He._chargeableItem = new Bi(ee, He, ye, He.fistItem, Me), He._gunItem = new eH … [truncated]
+             He.OW.FRe()
```

#### 1456. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11448-L11450` → after: `L10773-L10775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10773-L10775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10773-L10775) · [Before (L11448-L11450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11448-L11450)

```diff
-             GB.cW !== GB.fistItem && (GB.cW.reset(), GB.cW = GB.fistItem, GB.heldType = "Fist", GB.heldItemName = null, GB._heldLightTintFloor = null, GB.fistItem.selected(), zB.o.tM("newLocalPlayerHeldItem", GB.cW)), GB._gunItem.forgetLastShots()
-           }))), GB._playerInvisSub = zB.o.subscribe(`otherEntitySettingsClientifiedEId|${GB.qL}|_invisibleEffect`, (OB => {
-             GB.qL !== BB.EX && (GB._visible = !OB, GB.cW && GB.cW.IMB())
+             He.OW !== He.fistItem && (He.OW.reset(), He.OW = He.fistItem, He.heldType = "Fist", He.heldItemName = null, He._heldLightTintFloor = null, He.fistItem.selected(), ke.h.yR("newLocalPlayerHeldItem", He.OW)), He._gunItem.forgetLastShots()
+           }))), He._playerInvisSub = ke.h.subscribe(`otherEntitySettingsClientifiedEId|${He.cL}|_invisibleEffect`, (ie => {
+             He.cL !== ee.gC && (He._visible = !ie, He.OW && He.OW.FRe())
```

#### 1457. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11453-L11456` → after: `L10778-L10781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10778-L10781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10778-L10781) · [Before (L11453-L11456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11453-L11456)

```diff
-         Qm: function(BB, OB) {
-           for (const GB in OB) OB[GB] instanceof pB.b && OB[GB].reset();
-           for (const GB in OB) OB[GB] instanceof pB.b && OB[GB].destroy();
-           zB.o.unsubscribe(OB._playerVisSub), zB.o.unsubscribe(OB._playerInvisSub)
+         JV: function(ee, ie) {
+           for (const He in ie) ie[He] instanceof fe.e && ie[He].reset();
+           for (const He in ie) ie[He] instanceof fe.e && ie[He].destroy();
+           ke.h.unsubscribe(ie._playerVisSub), ke.h.unsubscribe(ie._playerInvisSub)
```

#### 1458. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11460` → after: `L10785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10785) · [Before (L11460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11460)

```diff
-           for (const DB of GB) MG(BB, DB), DB.cW ? DB.cW.kP(OB, YB) : console.error(new Error(`state.helditem for player ${DB.qL} is falsy - ${DB.cW}`))
+           for (const be of He) kH(ee, be), be.OW ? be.OW.YR(ie, ye) : console.error(new Error(`state.helditem for player ${be.cL} is falsy - ${be.OW}`))
```

#### 1459. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11462` → after: `L10787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10787) · [Before (L11462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11462)

```diff
-         oW: function(OB, GB) {
+         QE: function(ie, He) {
```

#### 1460. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11464-L11465` → after: `L10789-L10790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10789-L10790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10789-L10790) · [Before (L11464-L11465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11464-L11465)

```diff
-             DB = (0, YG.i)();
-           for (const QB of GB) QB.cW ? QB.qL === BB.EX || (0, YG.j)(QB.qL, DB) ? QB.cW.renderTickLocalPlayer(OB, YB) : QB.cW.renderTickNetworkedPlayer(OB, YB) : console.error(new Error(`state.helditem for player ${QB.qL} is falsy - ${QB.cW}`))
+             be = (0, MH.g)();
+           for (const Me of He) Me.OW ? Me.cL === ee.gC || (0, MH.j)(Me.cL, be) ? Me.OW.renderTickLocalPlayer(ie, ye) : Me.OW.renderTickNetworkedPlayer(ie, ye) : console.error(new Error(`state.helditem for player ${Me.cL} is falsy - ${Me.OW}`))
```

#### 1461. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11473-L11474` → after: `L10798-L10799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10798-L10799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10798-L10799) · [Before (L11473-L11474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11473-L11474)

```diff
-       const NB = BB.DW.yYB(OB.qL),
-         RB = BB.DW.eGB(OB.qL),
+       const Xe = ee.sE.Aye(ie.cL),
+         ze = ee.sE.Rye(ie.cL),
```

#### 1462. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11479-L11481` → after: `L10804-L10806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10804-L10806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10804-L10806) · [Before (L11479-L11481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11479-L11481)

```diff
-           const GB = BB.DW.cGB(OB.qL).selectedItem;
-           qB = null === GB || void 0 === GB ? void 0 : GB.typeObj, ZB = null !== (AB = null === GB || void 0 === GB || null === (VB = GB.attributes) || void 0 === VB || null === (SB = VB.customAttributes) || void 0 === SB ? void 0 : SB.enchantmentTier) && void 0 !== AB ? AB : nul … [truncated]
-         } else OB.networkedHeldItemName && (qB = QB.z[OB.networkedHeldItemName], ZB = OB.networkedHeldItemEnchantmentTier);
+           const He = ee.sE.Fye(ie.cL).selectedItem;
+           Te = null === He || void 0 === He ? void 0 : He.typeObj, pe = null !== (Ee = null === He || void 0 === He || null === (ge = He.attributes) || void 0 === ge || null === (Oe = ge.customAttributes) || void 0 === Oe ? void 0 : Oe.enchantmentTier) && void 0 !== Ee ? Ee : nul … [truncated]
+         } else ie.networkedHeldItemName && (Te = Me.A[ie.networkedHeldItemName], pe = ie.networkedHeldItemEnchantmentTier);
```

#### 1463. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11483` → after: `L10808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10808) · [Before (L11483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11483)

```diff
-       const nB = RB && BB.DW.hGB(OB.qL).getSelectedSlotIndex() !== OB._lastInvenIdx,
+       const de = ze && ee.sE.Jye(ie.cL).getSelectedSlotIndex() !== ie._lastInvenIdx,
```

#### 1464. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11486-L11491` → after: `L10811-L10816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10811-L10816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10811-L10816) · [Before (L11486-L11491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11486-L11491)

```diff
-       (((null === (GB = qB) || void 0 === GB ? void 0 : GB.name) || null) !== OB.heldItemName || nB || UB) && (OB.cW !== OB.fistItem && ((null === (fB = qB) || void 0 === fB ? void 0 : fB.meta.rootId) !== BB.bloxd.getMetaInfo(OB.heldItemName).rootId || nB || UB) && OB.cW.reset(), … [truncated]
-       RB && (OB._lastInvenIdx = BB.DW.hGB(OB.qL).getSelectedSlotIndex()), OB.heldItemName = null !== (YB = null === (jB = qB) || void 0 === jB ? void 0 : jB.name) && void 0 !== YB ? YB : null, OB.heldItemEnchantmentTier = ZB;
-       const LB = qB && !(0, QB.y)(qB.type) ? qB.dp : void 0,
-         gB = WB ? (0, iB.q)(OB.qL) : null,
-         rB = gB ? QB.z[gB].dp : void 0,
-         XB = WB && null !== (yB = null === (JB = BB.FX[BB.EX]) || void 0 === JB || null === (MB = JB[OB.qL]) || void 0 === MB ? void 0 : MB._glowingEffect) && void 0 !== yB && yB ? FB.GLOWING_EFFECT_EMISSION : void 0;
+       (((null === (He = Te) || void 0 === He ? void 0 : He.name) || null) !== ie.heldItemName || de || We) && (ie.OW !== ie.fistItem && ((null === (te = Te) || void 0 === te ? void 0 : te.meta.rootId) !== ee.bloxd.getMetaInfo(ie.heldItemName).rootId || de || We) && ie.OW.reset(), … [truncated]
+       ze && (ie._lastInvenIdx = ee.sE.Jye(ie.cL).getSelectedSlotIndex()), ie.heldItemName = null !== (ye = null === (Ue = Te) || void 0 === Ue ? void 0 : Ue.name) && void 0 !== ye ? ye : null, ie.heldItemEnchantmentTier = pe;
+       const ce = Te && !(0, Me.w)(Te.type) ? Te.mf : void 0,
+         xe = Be ? (0, ae.l)(ie.cL) : null,
+         Le = xe ? Me.A[xe].mf : void 0,
+         Ce = Be && null !== (Fe = null === (Je = ee.zC[ee.gC]) || void 0 === Je || null === (oe = Je[ie.cL]) || void 0 === oe ? void 0 : oe._glowingEffect) && void 0 !== Fe && Fe ? Ve.GLOWING_EFFECT_EMISSION : void 0;
```

#### 1465. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11493-L11494` → after: `L10818-L10819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10818-L10819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10818-L10819) · [Before (L11493-L11494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11493-L11494)

```diff
-       const wB = null !== (lB = null === (pB = BB.DW.YYB(OB.qL)) || void 0 === pB ? void 0 : pB.isReplayLocalPlayer) && void 0 !== lB && lB;
-       if (OB.qL === BB.EX || wB) {
+       const ve = null !== (qe = null === (fe = ee.sE.Wye(ie.cL)) || void 0 === fe ? void 0 : fe.isReplayLocalPlayer) && void 0 !== qe && qe;
+       if (ie.cL === ee.gC || ve) {
```

#### 1466. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11496-L11497` → after: `L10821-L10822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10821-L10822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10821-L10822) · [Before (L11496-L11497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11496-L11497)

```diff
-           qQB: GB
-         } = BB.UP, {
+           uMe: He
+         } = ee.PR, {
```

#### 1467. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11501-L11505` → after: `L10826-L10830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10826-L10830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10826-L10830) · [Before (L11501-L11505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11501-L11505)

```diff
-         } = BB.xR;
-         DB().copy(BB.UP.GJB, null !== XB && void 0 !== XB ? XB : DB().ZERO);
-         const yB = WB ? YB : null,
-           JB = WB && "number" === typeof oB ? oB : null,
-           MB = WB && "number" === typeof jB ? jB : null,
+         } = ee.uE;
+         be().copy(ee.PR.ZJe, null !== Ce && void 0 !== Ce ? Ce : be().ZERO);
+         const Fe = Be ? ye : null,
+           Je = Be && "number" === typeof Ke ? Ke : null,
+           oe = Be && "number" === typeof Ue ? Ue : null,
```

#### 1468. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11507-L11509` → after: `L10832-L10834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10832-L10834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10832-L10834) · [Before (L11507-L11509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11507-L11509)

```diff
-             const GB = OB && !(0, QB.y)(OB.type) ? zG(OB) : null,
-               YB = (0, iB.q)(BB),
-               oB = YB ? zG(QB.z[YB]) : null;
+             const He = ie && !(0, Me.w)(ie.type) ? fH(ie) : null,
+               ye = (0, ae.l)(ee),
+               Ke = ye ? fH(Me.A[ye]) : null;
```

#### 1469. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11517-L11518` → after: `L10842-L10843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10842-L10843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10842-L10843) · [Before (L11517-L11518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11517-L11518)

```diff
-           }(OB.qL, qB) : null;
-         if (zB ? (BB.UP.YJB = null !== JB && void 0 !== JB ? JB : zB.range, BB.UP.OJB = null !== MB ? yG(MB) : zB.coneCos) : (BB.UP.YJB = null !== JB && void 0 !== JB ? JB : 0, BB.UP.OJB = 0), yB) DB().scale(GB, (0, PB.U)(yB), 15);
+           }(ie.cL, Te) : null;
+         if (ke ? (ee.PR.wJe = null !== Je && void 0 !== Je ? Je : ke.range, ee.PR.tJe = null !== oe ? oH(oe) : ke.coneCos) : (ee.PR.wJe = null !== Je && void 0 !== Je ? Je : 0, ee.PR.tJe = 0), Fe) be().scale(He, (0, Re.U)(Fe), 15);
```

#### 1470. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11522-L11523` → after: `L10847-L10848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10847-L10848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10847-L10848) · [Before (L11522-L11523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11522-L11523)

```diff
-             GJB: OB
-           } = BB.UP;
+             ZJe: ie
+           } = ee.PR;
```

#### 1471. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11531` → after: `L10856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10856) · [Before (L11531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11531)

```diff
-       if (!BB || void 0 === BB.spotlightRange || !BB.dp) return null;
+       if (!ee || void 0 === ee.spotlightRange || !ee.mf) return null;
```

#### 1472. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11534` → after: `L10859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10859) · [Before (L11534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11534)

```diff
-         colour: BB.dp,
+         colour: ee.mf,
```

#### 1473. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11540` → after: `L10865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10865) · [Before (L11540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11540)

```diff
-   39045: (BB, OB, GB) => {
+   39177: (ee, ie, He) => {
```

#### 1474. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11543` → after: `L10868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10868) · [Before (L11543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11543)

```diff
-       f: () => kB
+       i: () => we
```

#### 1475. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11545-L11550` → after: `L10870-L10875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10870-L10875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10870-L10875) · [Before (L11545-L11550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11545-L11550)

```diff
-     var YB = GB(38730),
-       DB = GB(38466),
-       QB = GB(38556),
-       oB = GB(4111),
-       jB = GB(192),
-       yB = GB(363),
+     var ye = He(38888),
+       be = He(38621),
+       Me = He(38714),
+       Ke = He(4075),
+       Ue = He(186),
+       Fe = He(352),
```

#### 1476. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11552-L11563` → after: `L10877-L10888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10877-L10888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10877-L10888) · [Before (L11552-L11563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11552-L11563)

```diff
-       MB = GB(38693),
-       PB = GB(37436),
-       zB = GB(37434),
-       lB = GB(38597),
-       pB = GB(353),
-       qB = GB(25),
-       ZB = GB(3088),
-       NB = GB(38670),
-       RB = GB(38820),
-       WB = GB(38818),
-       AB = GB(4166),
-       VB = GB(1217);
+       oe = He(38864),
+       Re = He(37578),
+       ke = He(37574),
+       qe = He(38759),
+       fe = He(347),
+       Te = He(27),
+       pe = He(2969),
+       Xe = He(38826),
+       ze = He(38978),
+       Be = He(38969),
+       Ee = He(4142),
+       ge = He(1169);
```

#### 1477. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11565` → after: `L10890-L10892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10890-L10892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10890-L10892) · [Before (L11565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11565)

```diff
-     const nB = [void 0, "d", 0, 149, "f", 1, 116, null, 7, 3];
+     const de = ["length", 1, 0, 2, "d", 3, 5, void 0, 134, null, "c", 7, 65];
+ 
+     function We() {}
```

#### 1478. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11571-L11580` → after: `L10898-L10909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10898-L10909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10898-L10909) · [Before (L11571-L11580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11571-L11580)

```diff
-       UB(BB.length = 4, BB[-nB[3]] = nB[0], BB[nB[6]] = nB[0], BB[nB[1]] = nB[0], BB[nB[8]] = nB[0], BB[nB[4]] = nB[0]);
-       const OB = (0, ZB[nB[1]])().client.getMsgHandler().aYB.state.tickCounter;
-       (0, oB.sendColyMessage)(AB.Ah, {
-         JM: BB[nB[2]],
-         MM: (BB[-nB[3]] = jB[nB[4]].lifeformMeshToBodyPart[BB[nB[5]] === nB[7] || void 0 === BB[nB[5]] || (BB[nB[6]] = BB[nB[5]].split("|")) === nB[7] || void 0 === BB[nB[6]] ? void 0 : BB[nB[6]][nB[2]]]) !== nB[7] && void 0 !== BB[-nB[3]] ? BB[-nB[3]] : nB[7],
-         YJ: BB[2],
-         PM: (BB[nB[1]] = (BB[nB[8]] = BB[nB[9]].DW.cGB(BB[nB[9]].EX)) === nB[7] || void 0 === BB[nB[8]] || (BB[nB[4]] = BB[nB[8]].inventory.getItemAtSelectedSlot()) === nB[7] || void 0 === BB[nB[4]] ? void 0 : BB[nB[4]].name) !== nB[7] && void 0 !== BB[nB[1]] ? BB[nB[1]] : nB[7],
-         zM: VB.H,
-         lM: OB,
-         pM: dB
+       ee[de[0]] = 4, "Czh0Wn" in We && function(...ee) {
+         ee[de[0]] = de[2]
+       }(), te(ee[-de[8]] = de[7], ee[de[6]] = de[7], ee[de[10]] = de[7], ee[de[11]] = de[7], ee[de[12]] = de[7]);
+       const ie = (0, pe.e)().client.getMsgHandler().kbe.state.tickCounter;
+       (0, Ke.sendColyMessage)(Ee.ph, {
+         Ho: ee[de[2]],
+         yo: (ee[-de[8]] = Ue.g.lifeformMeshToBodyPart[ee[de[1]] === de[9] || void 0 === ee[de[1]] || (ee[de[6]] = ee[de[1]].split("|")) === de[9] || void 0 === ee[de[6]] ? void 0 : ee[de[6]][de[2]]]) !== de[9] && void 0 !== ee[-de[8]] ? ee[-de[8]] : de[9],
+         hF: ee[de[3]],
+         bo: (ee[de[10]] = (ee[de[11]] = ee[de[5]].sE.Fye(ee[de[5]].gC)) === de[9] || void 0 === ee[de[11]] || (ee[de[12]] = ee[de[11]].inventory.getItemAtSelectedSlot()) === de[9] || void 0 === ee[de[12]] ? void 0 : ee[de[12]].name) !== de[9] && void 0 !== ee[de[10]] ? ee[de[10]] … [truncated]
+         Mo: ge.F,
+         Ko: ie,
+         Uo: De
```

#### 1479. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11583` → after: `L10912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10912) · [Before (L11583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11583)

```diff
-     class fB extends WB.b {
+     class Ze extends Be.e {
```

#### 1480. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11585` → after: `L10914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10914) · [Before (L11585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11585)

```diff
-         super(BB, OB, GB, YB), this.toolType = null, this.toolHarvestLevel = null, this.toolMultiplier = 1, this.attemptingToBreak = !1, this.targetedPosition = null, this.currBreakingMesh = null, this.currBreakingStage = null, this.targetedStartTime = 0, this.anyBreakingStartTim … [truncated]
+         super(ee, ie, He, ye), this.toolType = null, this.toolHarvestLevel = null, this.toolMultiplier = 1, this.attemptingToBreak = !1, this.targetedPosition = null, this.currBreakingMesh = null, this.currBreakingStage = null, this.targetedStartTime = 0, this.anyBreakingStartTim … [truncated]
```

#### 1481. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11595` → after: `L10924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10924) · [Before (L11595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11595)

```diff
-         super.reset(), this.heldItemState.qL === this.kz.EX && this.breakingParticles.kP(!1), this.resetTargetedBlock(Date.now()), this.attemptingToBreak = !1, this.targetedPosition = null, this.currBreakingMesh = null, this.currBreakingStage = null, this.targetedStartTime = 0, t … [truncated]
+         super.reset(), this.heldItemState.cL === this.uk.gC && this.breakingParticles.YR(!1), this.resetTargetedBlock(Date.now()), this.attemptingToBreak = !1, this.targetedPosition = null, this.currBreakingMesh = null, this.currBreakingStage = null, this.targetedStartTime = 0, t … [truncated]
```

#### 1482. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11597` → after: `L10926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10926) · [Before (L11597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11597)

```diff
-       QDB() {
+       wbe() {
```

#### 1483. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11599` → after: `L10928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10928) · [Before (L11599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11599)

```diff
-         const DB = super.QDB(),
+         const be = super.wbe(),
```

#### 1484. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11604-L11606` → after: `L10933-L10935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10933-L10935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10933-L10935) · [Before (L11604-L11606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11604-L11606)

```diff
-             lT: yB
-           } = this.rMB();
-         if (oB && !DB.preventAttack) return this.bQB(QB, oB, jB, yB), this.XMB(QB, oB), {
+             Qm: Fe
+           } = this.kRe();
+         if (Ke && !be.preventAttack) return this.zKe(Me, Ke, Ue, Fe), this.qRe(Me, Ke), {
```

#### 1485. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11610-L11613` → after: `L10939-L10942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10939-L10942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10939-L10942) · [Before (L11610-L11613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11610-L11613)

```diff
-         const JB = null !== (BB = null === (OB = this.kz.hOB) || void 0 === OB ? void 0 : OB.position) && void 0 !== BB ? BB : null,
-           MB = null !== (GB = null === (YB = this.kz.hOB) || void 0 === YB ? void 0 : YB.r_) && void 0 !== GB ? GB : null,
-           PB = this.kz.DW.cGB(this.kz.EX);
-         if (!PB || !this.kz.xR.canAltAction) return {
+         const Je = null !== (ee = null === (ie = this.uk.FHe) || void 0 === ie ? void 0 : ie.position) && void 0 !== ee ? ee : null,
+           oe = null !== (He = null === (ye = this.uk.FHe) || void 0 === ye ? void 0 : ye.w6) && void 0 !== He ? He : null,
+           Re = this.uk.sE.Fye(this.uk.gC);
+         if (!Re || !this.uk.uE.canAltAction) return {
```

#### 1486. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11618` → after: `L10947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10947) · [Before (L11618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11618)

```diff
-           lB = new RB.e(this, null, null, JB, MB, zB).performPrimaryFire();
+           qe = new ze.b(this, null, null, Je, oe, ke).performPrimaryFire();
```

#### 1487. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11621` → after: `L10950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10950) · [Before (L11621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11621)

```diff
-       oDB() {
+       Dbe() {
```

#### 1488. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11626-L11628` → after: `L10955-L10957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10955-L10957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10955-L10957) · [Before (L11626-L11628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11626-L11628)

```diff
-           lT: YB
-         } = this.rMB(), DB = super.oDB();
-         return OB && !DB.preventAttack && (this.bQB(BB, OB, GB, YB), this.kz.DW.EGB(this.heldItemState.qL).setArmsAreSwinging()), DB
+           Qm: ye
+         } = this.kRe(), be = super.Dbe();
+         return ie && !be.preventAttack && (this.zKe(ee, ie, He, ye), this.uk.sE.Uye(this.heldItemState.cL).setArmsAreSwinging()), be
```

#### 1489. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11630` → after: `L10959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10959) · [Before (L11630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11630)

```diff
-       YDB() {
+       tbe() {
```

#### 1490. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11634-L11635` → after: `L10963-L10964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10963-L10964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10963-L10964) · [Before (L11634-L11635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11634-L11635)

```diff
-         } = this.rMB();
-         return OB ? this.XMB(BB, OB) : this.breakingStart(), !0
+         } = this.kRe();
+         return ie ? this.qRe(ee, ie) : this.breakingStart(), !0
```

#### 1491. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11642-L11644` → after: `L10971-L10973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10971-L10973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10971-L10973) · [Before (L11642-L11644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11642-L11644)

```diff
-           lT: YB
-         } = this.rMB();
-         return !(!OB || !this.canAttack(OB)) && (this.kz.DW.EGB(this.heldItemState.qL).setArmsAreSwinging(), this.bQB(BB, OB, GB, YB), !0)
+           Qm: ye
+         } = this.kRe();
+         return !(!ie || !this.canAttack(ie)) && (this.uk.sE.Uye(this.heldItemState.cL).setArmsAreSwinging(), this.zKe(ee, ie, He, ye), !0)
```

#### 1492. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11649` → after: `L10978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10978) · [Before (L11649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11649)

```diff
-           kz: YB
+           uk: ye
```

#### 1493. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11651` → after: `L10980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10980) · [Before (L11651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11651)

```diff
-         return null !== (OB = null === (GB = YB.FX[YB.EX][BB]) || void 0 === GB ? void 0 : GB.canAttack) && void 0 !== OB && OB
+         return null !== (ie = null === (He = ye.zC[ye.gC][ee]) || void 0 === He ? void 0 : He.canAttack) && void 0 !== ie && ie
```

#### 1494. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11653` → after: `L10982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10982) · [Before (L11653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11653)

```diff
-       bQB(BB, OB, GB, YB) {
+       zKe(ee, ie, He, ye) {
```

#### 1495. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11655` → after: `L10984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10984) · [Before (L11655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11655)

```diff
-           kz: DB
+           uk: be
```

#### 1496. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11657` → after: `L10986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10986) · [Before (L11657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11657)

```diff
-         this.canAttack(OB) && (SB(OB, GB, BB, DB), this.bloxd.client.triggerGameCallback("onPlayerAttackEntity", DB.EX, OB, [YB[0], YB[1], YB[2]]))
+         this.canAttack(ie) && (Oe(ie, He, ee, be), this.bloxd.client.triggerGameCallback("onPlayerAttackEntity", be.gC, ie, [ye[0], ye[1], ye[2]]))
```

#### 1497. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11659` → after: `L10988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10988) · [Before (L11659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11659)

```diff
-       rMB() {
+       kRe() {
```

#### 1498. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11661-L11663` → after: `L10990-L10992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10990-L10992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10990-L10992) · [Before (L11661-L11663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11661-L11663)

```diff
-         const YB = null !== (BB = this.kz.jGB) && void 0 !== BB ? BB : this.kz.camera.B_(),
-           DB = null !== (OB = null === (GB = this.kz.DW.cGB(this.kz.EX)) || void 0 === GB ? void 0 : GB.inventory.getItemAtSelectedSlot()) && void 0 !== OB ? OB : null,
-           QB = this.bloxd.getAttackRangeFromHeldItem(this.kz.EX, DB),
+         const ye = null !== (ee = this.uk.tHe) && void 0 !== ee ? ee : this.uk.camera.N_(),
+           be = null !== (ie = null === (He = this.uk.sE.Fye(this.uk.gC)) || void 0 === He ? void 0 : He.inventory.getItemAtSelectedSlot()) && void 0 !== ie ? ie : null,
+           Me = this.bloxd.getAttackRangeFromHeldItem(this.uk.gC, be),
```

#### 1499. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11670` → after: `L10999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR10999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L10999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L10999) · [Before (L11670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11670)

```diff
-         return oB === MB.b.HIT_ENTITY ? {
+         return Ke === oe.c.HIT_ENTITY ? {
```

#### 1500. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11674` → after: `L11003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11003) · [Before (L11674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11674)

```diff
-           lT: yB
+           Qm: Fe
```

#### 1501. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11679` → after: `L11008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11008) · [Before (L11679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11679)

```diff
-           lT: null
+           Qm: null
```

#### 1502. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11682` → after: `L11011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11011) · [Before (L11682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11682)

```diff
-       XMB(BB, OB) {
+       qRe(ee, ie) {
```

#### 1503. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11685` → after: `L11014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11014) · [Before (L11685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11685)

```diff
-           kz: QB
+           uk: Me
```

#### 1504. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11687-L11690` → after: `L11016-L11019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11016-L11019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11016-L11019) · [Before (L11687-L11690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11687-L11690)

```diff
-         (0, oB.sendColyMessage)(AB.qg, {
-           UM: OB,
-           YJ: BB,
-           PM: null !== (GB = null === (YB = QB.DW.cGB(QB.EX)) || void 0 === YB || null === (DB = YB.inventory.getItemAtSelectedSlot()) || void 0 === DB ? void 0 : DB.name) && void 0 !== GB ? GB : null
+         (0, Ke.sendColyMessage)(Ee.$f, {
+           zo: ie,
+           hF: ee,
+           bo: null !== (He = null === (ye = Me.sE.Fye(Me.gC)) || void 0 === ye || null === (be = ye.inventory.getItemAtSelectedSlot()) || void 0 === be ? void 0 : be.name) && void 0 !== He ? He : null
```

#### 1505. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11694-L11696` → after: `L11023-L11025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11023-L11025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11023-L11025) · [Before (L11694-L11696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11694-L11696)

```diff
-         const BB = this.kz.bOB;
-         BB && !(0, ZB.d)().posSatisfiesModifyConstraints(this.kz.EX, BB.position[0], BB.position[1], BB.position[2]) && (this.kz.xR.canChange || this.kz.xR.cantBreakError || "You cannot modify this block" !== this.kz.xR.cantChangeError) && qB.o.tM("showBottomMessage", {
-           message: this.kz.xR.cantBreakError || this.kz.xR.cantChangeError,
+         const ee = this.uk.kHe;
+         ee && !(0, pe.e)().posSatisfiesModifyConstraints(this.uk.gC, ee.position[0], ee.position[1], ee.position[2]) && (this.uk.uE.canChange || this.uk.uE.cantBreakError || "You cannot modify this block" !== this.uk.uE.cantChangeError) && Te.h.yR("showBottomMessage", {
+           message: this.uk.uE.cantBreakError || this.uk.uE.cantChangeError,
```

#### 1506. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11701` → after: `L11030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11030) · [Before (L11701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11701)

```diff
-         if (this.heldItemState.qL !== this.kz.EX) return !1;
+         if (this.heldItemState.cL !== this.uk.gC) return !1;
```

#### 1507. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11703` → after: `L11032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11032) · [Before (L11703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11703)

```diff
-         return this.attemptingToBreak && (GB = this.breakBlock(OB)), this.breakingParticles.kP(GB), this.successfullyBreakingBlockLastTick = GB, GB
+         return this.attemptingToBreak && (He = this.breakBlock(ie)), this.breakingParticles.YR(He), this.successfullyBreakingBlockLastTick = He, He
```

#### 1508. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11706` → after: `L11035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11035) · [Before (L11706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11706)

```diff
-         super.renderTickLocalPlayer(BB, OB), this.successfullyBreakingBlockLastTick ? this.momentumFrac = Math.min(this.momentumFrac + BB / pB.f.timeTillMaxMomentum, 1) : this.momentumFrac = Math.max(this.momentumFrac - BB / 1500, 0)
+         super.renderTickLocalPlayer(ee, ie), this.successfullyBreakingBlockLastTick ? this.momentumFrac = Math.min(this.momentumFrac + ee / fe.e.timeTillMaxMomentum, 1) : this.momentumFrac = Math.max(this.momentumFrac - ee / 1500, 0)
```

#### 1509. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11708-L11709` → after: `L11037-L11038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11037-L11038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11037-L11038) · [Before (L11708-L11709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11708-L11709)

```diff
-       GDB() {
-         super.GDB();
+       Wbe() {
+         super.Wbe();
```

#### 1510. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11717` → after: `L11046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11046) · [Before (L11717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11717)

```diff
-         this.targetedPosition = null, this.targetedStartTime = BB, this.lastBreakingSoundTime = Math.min(BB - 150, this.lastBreakingSoundTime), this.currBreakingStage = -1, this.currBreakingMesh && (this.currBreakingMesh.Zk(!1), this.currBreakingMesh = null)
+         this.targetedPosition = null, this.targetedStartTime = ee, this.lastBreakingSoundTime = Math.min(ee - 150, this.lastBreakingSoundTime), this.currBreakingStage = -1, this.currBreakingMesh && (this.currBreakingMesh.JY(!1), this.currBreakingMesh = null)
```

#### 1511. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11721` → after: `L11050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11050) · [Before (L11721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11721)

```diff
-         const GB = (0, ZB.d)().getInvenHeldItem(this.kz.EX);
+         const He = (0, pe.e)().getInvenHeldItem(this.uk.gC);
```

#### 1512. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11723-L11729` → after: `L11052-L11058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11052-L11058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11052-L11058) · [Before (L11723-L11729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11723-L11729)

```diff
-         const jB = null === (OB = this.kz.bOB) || void 0 === OB ? void 0 : OB.position;
-         if (!jB || !(0, ZB.d)().posSatisfiesModifyConstraints(this.kz.EX, jB[0], jB[1], jB[2])) return this.resetTargetedBlock(BB), !1;
-         if (this.kz.DW.EGB(this.heldItemState.qL).setArmsAreSwinging(), !this.targetedPosition !== !jB || !JB().exactEquals(this.targetedPosition, jB)) return this.resetTargetedBlock(BB), this.targetedPosition = JB().copy(this._targetedPosition, jB), (0, oB.sendColyMessage)(AB.Cj … [truncated]
-         const yB = (0, ZB.d)().getMetaInfo(this.kz.jR(this.targetedPosition)).rootId;
-         let MB = DB.z[yB].ttb;
-         if (this.kz.xR.creative) {
-           if (this.kz.xR.creative) {
+         const Ue = null === (ie = this.uk.kHe) || void 0 === ie ? void 0 : ie.position;
+         if (!Ue || !(0, pe.e)().posSatisfiesModifyConstraints(this.uk.gC, Ue[0], Ue[1], Ue[2])) return this.resetTargetedBlock(ee), !1;
+         if (this.uk.sE.Uye(this.heldItemState.cL).setArmsAreSwinging(), !this.targetedPosition !== !Ue || !Je().exactEquals(this.targetedPosition, Ue)) return this.resetTargetedBlock(ee), this.targetedPosition = Je().copy(this._targetedPosition, Ue), (0, Ke.sendColyMessage)(Ee.Jj … [truncated]
+         const Fe = (0, pe.e)().getMetaInfo(this.uk.kE(this.targetedPosition)).rootId;
+         let oe = be.A[Fe].ttb;
+         if (this.uk.uE.creative) {
+           if (this.uk.uE.creative) {
```

#### 1513. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11731` → after: `L11060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11060) · [Before (L11731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11731)

```diff
-             OB > 20 * QB.f ? MB *= 1 / 6 : OB > 6 * QB.f ? MB *= 1 / 3 : OB > 4 * QB.f ? MB *= .5 : OB > 2 * QB.f && (MB *= 2 / 3)
+             ie > 20 * Me.e ? oe *= 1 / 6 : ie > 6 * Me.e ? oe *= 1 / 3 : ie > 4 * Me.e ? oe *= .5 : ie > 2 * Me.e && (oe *= 2 / 3)
```

#### 1514. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11734-L11736` → after: `L11063-L11065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11063-L11065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11063-L11065) · [Before (L11734-L11736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11734-L11736)

```diff
-           const BB = (0, ZB.d)().getBlockTypeIsHarvestable(this.kz.EX, yB);
-           BB || (MB *= 2.5), this.toolType === this.bloxd.getItemStat(this.kz.EX, yB, "harvestType") && BB && (MB *= 1 / this.toolMultiplier);
-           MB *= pB.f.getBreakSpeedMultiplier(GB) * pB.f.getMomentumMultiplier(GB, this.momentumFrac)
+           const ee = (0, pe.e)().getBlockTypeIsHarvestable(this.uk.gC, Fe);
+           ee || (oe *= 2.5), this.toolType === this.bloxd.getItemStat(this.uk.gC, Fe, "harvestType") && ee && (oe *= 1 / this.toolMultiplier);
+           oe *= fe.e.getBreakSpeedMultiplier(He) * fe.e.getMomentumMultiplier(He, this.momentumFrac)
```

#### 1515. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11742-L11743` → after: `L11071-L11072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11071-L11072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11071-L11072) · [Before (L11742-L11743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11742-L11743)

```diff
-           const OB = (0, PB.f)(`step_${(0,NB.d)(yB,!1)}`);
-           zB.b.play(OB, .3).rate(.5)
+           const ie = (0, Re.g)(`step_${(0,Xe.d)(Fe,!1)}`);
+           ke.d.play(ie, .3).rate(.5)
```

#### 1516. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11745` → after: `L11074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11074) · [Before (L11745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11745)

```diff
-         return this.currBreakingMesh && qB === this.currBreakingStage || (this.currBreakingMesh && this.currBreakingMesh.Zk(!1), qB < 10 ? (this.currBreakingMesh = (0, YB.c)(this.kz, this.targetedPosition, qB), this.currBreakingStage = qB) : ((0, DB.i)(jB), this.resetTargetedBloc … [truncated]
+         return this.currBreakingMesh && Te === this.currBreakingStage || (this.currBreakingMesh && this.currBreakingMesh.JY(!1), Te < 10 ? (this.currBreakingMesh = (0, ye.b)(this.uk, this.targetedPosition, Te), this.currBreakingStage = Te) : ((0, be.j)(Ue), this.resetTargetedBloc … [truncated]
```

#### 1517. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11757` → after: `L11086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11086) · [Before (L11757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11757)

```diff
-   38818: (BB, OB, GB) => {
+   38969: (ee, ie, He) => {
```

#### 1518. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11759` → after: `L11088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11088) · [Before (L11759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11759)

```diff
-       b: () => SB
+       e: () => Oe
```

#### 1519. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11761-L11778` → after: `L11090-L11107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11090-L11107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11090-L11107) · [Before (L11761-L11778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11761-L11778)

```diff
-     var YB = GB(38870),
-       DB = GB(1217),
-       QB = GB(38884),
-       oB = GB(9965),
-       jB = GB(9927),
-       yB = GB(192),
-       JB = GB(38167),
-       MB = GB(38820),
-       PB = GB(38280),
-       zB = GB(25),
-       lB = GB(3088),
-       pB = GB(1350),
-       qB = GB(38854),
-       ZB = GB(38289),
-       NB = GB(38275),
-       RB = GB(39035),
- ... (2 more removed lines; see GitHub link above)
+     var ye = He(39013),
+       be = He(1169),
+       Me = He(39023),
+       Ke = He(1e4),
+       Ue = He(9961),
+       Fe = He(186),
+       Je = He(38307),
+       oe = He(38978),
+       Re = He(38433),
+       ke = He(27),
+       qe = He(2969),
+       fe = He(1305),
+       Te = He(39005),
+       pe = He(38447),
+       Xe = He(38425),
+       ze = He(39169),
+ ... (2 more added lines; see GitHub link above)
```

#### 1520. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11782` → after: `L11111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11111) · [Before (L11782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11782)

```diff
-         this.kz = void 0, this.heldItemState = void 0, this.itemZoomer = void 0, this.bloxd = (0, lB.d)(), this.pickActionHelper = void 0, this.typeObj = null, this.DGB = !0, this._doneFirstMeshSetup = !1, this._modelLoadedSub = null, this._newBloxdSub = null, this.thirdPersonThi … [truncated]
+         this.uk = void 0, this.heldItemState = void 0, this.itemZoomer = void 0, this.bloxd = (0, qe.e)(), this.pickActionHelper = void 0, this.typeObj = null, this.OHe = !0, this._doneFirstMeshSetup = !1, this._modelLoadedSub = null, this._newBloxdSub = null, this.thirdPersonThi … [truncated]
```

#### 1521. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11787` → after: `L11116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11116) · [Before (L11787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11787)

```diff
-         this.kz.TOB(!0), this.typeObj = BB, this.enchantmentTier = OB
+         this.uk.RHe(!0), this.typeObj = ee, this.enchantmentTier = ie
```

#### 1522. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11789` → after: `L11118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11118) · [Before (L11789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11789)

```diff
-       IMB() {
+       FRe() {
```

#### 1523. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11792` → after: `L11121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11121) · [Before (L11792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11792)

```diff
-       FMB() {}
+       JRe() {}
```

#### 1524. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11800` → after: `L11129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11129) · [Before (L11800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11800)

```diff
-         return void 0 !== this.heldItemState.replayUseFirstPersonMesh ? this.heldItemState.replayUseFirstPersonMesh : this.heldItemState.qL === this.kz.EX && this.kz.camera.K4 <= 1 && !PB.b.isCameraDetachedFromPlayer(this.kz)
+         return void 0 !== this.heldItemState.replayUseFirstPersonMesh ? this.heldItemState.replayUseFirstPersonMesh : this.heldItemState.cL === this.uk.gC && this.uk.camera.U_ <= 1 && !Re.d.isCameraDetachedFromPlayer(this.uk)
```

#### 1525. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11803` → after: `L11132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11132) · [Before (L11803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11803)

```diff
-         return this.isFirstPersonLocalPlayer() || this.heldItemState.qL === this.kz.EX && PB.b.isCameraDetachedFromPlayer(this.kz)
+         return this.isFirstPersonLocalPlayer() || this.heldItemState.cL === this.uk.gC && Re.d.isCameraDetachedFromPlayer(this.uk)
```

#### 1526. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11805-L11806` → after: `L11134-L11135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11134-L11135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11134-L11135) · [Before (L11805-L11806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11805-L11806)

```diff
-       QDB() {
-         return SB.clearSecondaryDownFireTimeout(), this.kz.DW.EGB(this.heldItemState.qL).setArmsAreSwinging(), {
+       wbe() {
+         return Oe.clearSecondaryDownFireTimeout(), this.uk.sE.Uye(this.heldItemState.cL).setArmsAreSwinging(), {
```

#### 1527. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11814` → after: `L11143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11143) · [Before (L11814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11814)

```diff
-       GDB() {
+       Wbe() {
```

#### 1528. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11820` → after: `L11149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11149) · [Before (L11820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11820)

```diff
-       LMB() {
+       RRe() {
```

#### 1529. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11826` → after: `L11155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11155) · [Before (L11826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11826)

```diff
-               this.iMB().once || OB()
+               this.oRe().once || ie()
```

#### 1530. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11830` → after: `L11159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11159) · [Before (L11830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11830)

```diff
-         const GB = this.iMB();
+         const He = this.oRe();
```

#### 1531. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11833` → after: `L11162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11162) · [Before (L11833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11833)

```diff
-       iMB() {
+       oRe() {
```

#### 1532. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11836` → after: `L11165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11165) · [Before (L11836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11836)

```diff
-       ODB() {
+       dbe() {
```

#### 1533. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11845-L11847` → after: `L11174-L11176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11174-L11176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11174-L11176) · [Before (L11845-L11847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11845-L11847)

```diff
-           kz: GB
-         } = this, QB = GB.xR.canUseDevCreativeItems, oB = null === (OB = this.bloxd.getItemStat(GB.EX, BB, "showInCreativeInven")) || void 0 === OB || OB;
-         return !(0, YB.g)(BB, (0, DB.Q)((0, pB.c)().lobbyName), oB, QB)
+           uk: He
+         } = this, Me = He.uE.canUseDevCreativeItems, Ke = null === (ie = this.bloxd.getItemStat(He.gC, ee, "showInCreativeInven")) || void 0 === ie || ie;
+         return !(0, ye.d)(ee, (0, be.K)((0, fe.e)().lobbyName), Ke, Me)
```

#### 1534. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11849` → after: `L11178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11178) · [Before (L11849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11849)

```diff
-       wMB() {
+       fRe() {
```

#### 1535. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11852` → after: `L11181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11181) · [Before (L11852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11852)

```diff
-           kz: BB
+           uk: ee
```

#### 1536. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11854-L11857` → after: `L11183-L11186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11183-L11186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11183-L11186) · [Before (L11854-L11857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11854-L11857)

```diff
-         if (BB.xR.creative && BB.xR.canPickBlocks && BB.DW.YGB(BB.EX, "inventory") && null !== BB.hOB) {
-           const GB = BB.hOB.r_,
-             DB = (0, QB.k)(GB) ? oB.s : this.bloxd.getMetaInfo(GB).rootName,
-             jB = YB.d.indexOf(DB);
+         if (ee.uE.creative && ee.uE.canPickBlocks && ee.sE.gHe(ee.gC, "inventory") && null !== ee.FHe) {
+           const He = ee.FHe.w6,
+             be = (0, Me.i)(He) ? Ke.n : this.bloxd.getMetaInfo(He).rootName,
+             Ue = ye.b.indexOf(be);
```

#### 1537. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11859` → after: `L11188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11188) · [Before (L11859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11859)

```diff
-             const GB = BB.DW.aGB(BB.EX),
+             const He = ee.sE.oye(ee.gC),
```

#### 1538. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11861` → after: `L11190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11190) · [Before (L11861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11861)

```diff
-               QB = this.kz.DW.cGB(this.kz.EX);
+               Me = this.uk.sE.Fye(this.uk.gC);
```

#### 1539. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11866` → after: `L11195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11195) · [Before (L11866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11866)

```diff
-               if ((null === (OB = oB[BB]) || void 0 === OB ? void 0 : OB.name) === DB) return zB.o.tM("setSelectedInventorySlotI", BB, !0), !0
+               if ((null === (ie = Ke[ee]) || void 0 === ie ? void 0 : ie.name) === be) return ke.h.yR("setSelectedInventorySlotI", ee, !0), !0
```

#### 1540. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11868` → after: `L11197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11197) · [Before (L11868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11868)

```diff
-             return qB.b.swapPosClient(GB, GB.playerInventory.getSelectedSlotIndex(), YB), !0
+             return Te.c.swapPosClient(He, He.playerInventory.getSelectedSlotIndex(), ye), !0
```

#### 1541. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11877` → after: `L11206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11206) · [Before (L11877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11877)

```diff
-       oDB() {
+       Dbe() {
```

#### 1542. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11879` → after: `L11208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11208) · [Before (L11879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11879)

```diff
-         return this.kz.DW.EGB(this.heldItemState.qL).setArmsAreSwinging(), BB
+         return this.uk.sE.Uye(this.heldItemState.cL).setArmsAreSwinging(), ee
```

#### 1543. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11882-L11883` → after: `L11211-L11212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11211-L11212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11211-L11212) · [Before (L11882-L11883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11882-L11883)

```diff
-         const BB = this.xYB();
-         return BB.tookAction && this.kz.DW.EGB(this.heldItemState.qL).setArmsAreSwinging(), BB
+         const ee = this.Ebe();
+         return ee.tookAction && this.uk.sE.Uye(this.heldItemState.cL).setArmsAreSwinging(), ee
```

#### 1544. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11886-L11887` → after: `L11215-L11216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11215-L11216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11215-L11216) · [Before (L11886-L11887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11886-L11887)

```diff
-         const BB = this.kz.DW.cGB(this.kz.EX);
-         if (!BB || !this.kz.xR.canAltAction) return {
+         const ee = this.uk.sE.Fye(this.uk.gC);
+         if (!ee || !this.uk.uE.canAltAction) return {
```

#### 1545. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11891-L11892` → after: `L11220-L11221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11220-L11221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11220-L11221) · [Before (L11891-L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11891-L11892)

```diff
-         const OB = this.kz.hOB;
-         if ("preventAction" === this.bloxd.client.triggerGameCallback("onPlayerAttemptAltAction", this.kz.EX, null === OB || void 0 === OB ? void 0 : OB.position[0], null === OB || void 0 === OB ? void 0 : OB.position[1], null === OB || void 0 === OB ? void 0 : OB.position[2], OB … [truncated]
+         const ie = this.uk.FHe;
+         if ("preventAction" === this.bloxd.client.triggerGameCallback("onPlayerAttemptAltAction", this.uk.gC, null === ie || void 0 === ie ? void 0 : ie.position[0], null === ie || void 0 === ie ? void 0 : ie.position[1], null === ie || void 0 === ie ? void 0 : ie.position[2], ie … [truncated]
```

#### 1546. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11896-L11897` → after: `L11225-L11226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11225-L11226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11225-L11226) · [Before (L11896-L11897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11896-L11897)

```diff
-         const GB = new MB.e(this, null, null, null, null, BB.selectedItem).performGliderBoost();
-         return GB.tookAction && this.kz.DW.EGB(this.heldItemState.qL).setArmsAreSwinging(), GB
+         const He = new oe.b(this, null, null, null, null, ee.selectedItem).performGliderBoost();
+         return He.tookAction && this.uk.sE.Uye(this.heldItemState.cL).setArmsAreSwinging(), He
```

#### 1547. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11901-L11903` → after: `L11230-L11232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11230-L11232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11230-L11232) · [Before (L11901-L11903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11901-L11903)

```diff
-         if (!this.kz.hOB) return !1;
-         const OB = this.kz.hOB.r_;
-         return null !== (BB = jB.h[OB].canBePlacedOver) && void 0 !== BB && BB
+         if (!this.uk.FHe) return !1;
+         const ie = this.uk.FHe.w6;
+         return null !== (ee = Ue.i[ie].canBePlacedOver) && void 0 !== ee && ee
```

#### 1548. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11905` → after: `L11234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11234) · [Before (L11905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11905)

```diff
-       xYB() {
+       Ebe() {
```

#### 1549. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11907-L11908` → after: `L11236-L11237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11236-L11237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11236-L11237) · [Before (L11907-L11908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11907-L11908)

```diff
-         const YB = this.kz.DW.cGB(this.kz.EX);
-         if (!YB || !this.kz.xR.canAltAction) return {
+         const ye = this.uk.sE.Fye(this.uk.gC);
+         if (!ye || !this.uk.uE.canAltAction) return {
```

#### 1550. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11912` → after: `L11241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11241) · [Before (L11912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11912)

```diff
-         if (YB.opWrapper.FG) return zB.o.tM("toggleMenu", "inventory"), {
+         if (ye.opWrapper.uH) return ke.h.yR("toggleMenu", "inventory"), {
```

#### 1551. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11918` → after: `L11247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11247) · [Before (L11918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11918)

```diff
-         if ((0, AB.h)(null === DB || void 0 === DB ? void 0 : DB.typeObj.type) && this.kz.DW.EGB(this.heldItemState.qL).crouching) return {
+         if ((0, Ee.e)(null === be || void 0 === be ? void 0 : be.typeObj.type) && this.uk.sE.Uye(this.heldItemState.cL).crouching) return {
```

#### 1552. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11922` → after: `L11251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11251) · [Before (L11922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11922)

```diff
-         const QB = null !== (BB = this.kz.jGB) && void 0 !== BB ? BB : this.kz.camera.B_(),
+         const Me = null !== (ee = this.uk.tHe) && void 0 !== ee ? ee : this.uk.camera.N_(),
```

#### 1553. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11927` → after: `L11256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11256) · [Before (L11927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11927)

```diff
-             pT: lB,
+             bS: qe,
```

#### 1554. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11929-L11933` → after: `L11258-L11262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11258-L11262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11258-L11262) · [Before (L11929-L11933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11929-L11933)

```diff
-           } = this.pickActionHelper.doPickAction(QB, yB.f.entityInteractReach),
-           qB = null === (OB = this.kz.hOB) || void 0 === OB ? void 0 : OB.r_,
-           ZB = null === (GB = this.kz.hOB) || void 0 === GB ? void 0 : GB.position,
-           NB = null !== oB && void 0 !== oB ? oB : null,
-           RB = this.bloxd.client.triggerGameCallback("onPlayerAttemptAltAction", this.kz.EX, null === ZB || void 0 === ZB ? void 0 : ZB[0], null === ZB || void 0 === ZB ? void 0 : ZB[1], null === ZB || void 0 === ZB ? void 0 : ZB[2], qB ? (0, jB.d)(qB) : "Air", NB);
+           } = this.pickActionHelper.doPickAction(Me, Fe.g.entityInteractReach),
+           Te = null === (ie = this.uk.FHe) || void 0 === ie ? void 0 : ie.w6,
+           pe = null === (He = this.uk.FHe) || void 0 === He ? void 0 : He.position,
+           Xe = null !== Ke && void 0 !== Ke ? Ke : null,
+           ze = this.bloxd.client.triggerGameCallback("onPlayerAttemptAltAction", this.uk.gC, null === pe || void 0 === pe ? void 0 : pe[0], null === pe || void 0 === pe ? void 0 : pe[1], null === pe || void 0 === pe ? void 0 : pe[2], Te ? (0, Ue.e)(Te) : "Air", Xe);
```

#### 1555. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11939` → after: `L11268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11268) · [Before (L11939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11939)

```diff
-           VB = new MB.e(this, NB, JB, ZB, qB, DB).performAltAction(!WB);
+           ge = new oe.b(this, Xe, Je, pe, Te, be).performAltAction(!Be);
```

#### 1556. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11945` → after: `L11274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11274) · [Before (L11945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11945)

```diff
-       YDB() {
+       tbe() {
```

#### 1557. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11954` → after: `L11283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11283) · [Before (L11954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11954)

```diff
-         OB <= 1.2 && BB > 1.2 ? (this.kz.camera.Z8 = 0, this.kz.camera.K4 = 0, this.itemZoomer.forceXyOffsetToZero(), this.IMB()) : 0 === OB && (this.itemZoomer.forceXyOffsetToZero(), this.IMB()), OB > .001 && BB < .001 && (this.kz.camera.Z8 = 1.2, this.IMB())
+         ie <= 1.2 && ee > 1.2 ? (this.uk.camera.F_ = 0, this.uk.camera.U_ = 0, this.itemZoomer.forceXyOffsetToZero(), this.FRe()) : 0 === ie && (this.itemZoomer.forceXyOffsetToZero(), this.FRe()), ie > .001 && ee < .001 && (this.uk.camera.F_ = 1.2, this.FRe())
```

#### 1558. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11970` → after: `L11299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11299) · [Before (L11970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11970)

```diff
-         zB.o.unsubscribe(this._modelLoadedSub), this.heldItemState.qL === this.kz.EX && SB.clearSecondaryDownFireTimeout(), this._doneFirstMeshSetup = void 0 !== this.kz.DW.iGB(this.heldItemState.qL)
+         ke.h.unsubscribe(this._modelLoadedSub), this.heldItemState.cL === this.uk.gC && Oe.clearSecondaryDownFireTimeout(), this._doneFirstMeshSetup = void 0 !== this.uk.sE.rHe(this.heldItemState.cL)
```

#### 1559. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11973` → after: `L11302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11302) · [Before (L11973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11973)

```diff
-         zB.o.unsubscribe(this._newBloxdSub)
+         ke.h.unsubscribe(this._newBloxdSub)
```

#### 1560. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11976` → after: `L11305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11305) · [Before (L11976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11976)

```diff
-         if (this.FMB(), this._doneFirstMeshSetup) return;
+         if (this.JRe(), this._doneFirstMeshSetup) return;
```

#### 1561. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11978-L11980` → after: `L11307-L11309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11307-L11309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11307-L11309) · [Before (L11978-L11980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11978-L11980)

```diff
-         const BB = this.heldItemState.qL;
-         this.kz.DW.iGB(BB) || (this._modelLoadedSub = zB.o.subscribe(`lifeformSetupFinished|${BB}`, (() => {
-           this.FMB()
+         const ee = this.heldItemState.cL;
+         this.uk.sE.rHe(ee) || (this._modelLoadedSub = ke.h.subscribe(`lifeformSetupFinished|${ee}`, (() => {
+           this.JRe()
```

#### 1562. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11991` → after: `L11320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11320) · [Before (L11991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11991)

```diff
-         return null === BB || this.kz.UP.kF.has(BB) ? BB : (this.thirdPersonThinObjectId = null, null)
+         return null === ee || this.uk.PR.vx.has(ee) ? ee : (this.thirdPersonThinObjectId = null, null)
```

#### 1563. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L11995-L11998` → after: `L11324-L11327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11324-L11327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11324-L11327) · [Before (L11995-L11998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L11995-L11998)

```diff
-           SP: OB
-         } = this.thirdPersonPose, GB = OB.x * this.heldPoseScaleY() * OB.z < 0, YB = BB.thinInstMgr.getNodeWorldMatrix(BB.uF, BB.nodeIndex).determinant() < 0, DB = (0, ZB.d)(GB, YB);
-         if (this.thirdPersonFlippedWinding === DB && this.thirdPersonAttachedToId === BB.uF && this.thirdPersonAttachedToNode === BB.nodeIndex && (null === this.thirdPersonThinObjectId || null !== this.liveThirdPersonThinObjectId())) return void this.applyThirdPersonPose();
-         this.releaseThirdPersonThinObject(), this.thirdPersonFlippedWinding = DB, this.thirdPersonAttachedToId = BB.uF, this.thirdPersonAttachedToNode = BB.nodeIndex;
+           wR: ie
+         } = this.thirdPersonPose, He = ie.x * this.heldPoseScaleY() * ie.z < 0, ye = ee.thinInstMgr.getNodeWorldMatrix(ee.Ix, ee.nodeIndex).determinant() < 0, be = (0, pe.c)(He, ye);
+         if (this.thirdPersonFlippedWinding === be && this.thirdPersonAttachedToId === ee.Ix && this.thirdPersonAttachedToNode === ee.nodeIndex && (null === this.thirdPersonThinObjectId || null !== this.liveThirdPersonThinObjectId())) return void this.applyThirdPersonPose();
+         this.releaseThirdPersonThinObject(), this.thirdPersonFlippedWinding = be, this.thirdPersonAttachedToId = ee.Ix, this.thirdPersonAttachedToNode = ee.nodeIndex;
```

#### 1564. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12001` → after: `L11330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11330) · [Before (L12001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12001)

```diff
-           sJ: !0,
+           lJ: !0,
```

#### 1565. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12004-L12005` → after: `L11333-L11334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11333-L11334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11333-L11334) · [Before (L12004-L12005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12004-L12005)

```diff
-           const GB = this.kz.UP.kF;
-           QB === this.thirdPersonRequestId && GB.has(BB.uF) ? (this.thirdPersonThinObjectId = OB, GB.attachThinObject(OB, BB.uF, BB.nodeIndex), GB.set(OB, "aOpacity", (0, NB.holderAttachmentOpacity)(this.kz, this.heldItemState.qL)), (0, NB.invalidateAttachmentProximityFade)(this. … [truncated]
+           const He = this.uk.PR.vx;
+           Me === this.thirdPersonRequestId && He.has(ee.Ix) ? (this.thirdPersonThinObjectId = ie, He.attachThinObject(ie, ee.Ix, ee.nodeIndex), He.set(ie, "aOpacity", (0, Xe.holderAttachmentOpacity)(this.uk, this.heldItemState.cL)), (0, Xe.invalidateAttachmentProximityFade)(this. … [truncated]
```

#### 1566. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12009` → after: `L11338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11338) · [Before (L12009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12009)

```diff
-         return ZB.b * this.thirdPersonPose.SP.y
+         return pe.b * this.thirdPersonPose.wR.y
```

#### 1567. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12015` → after: `L11344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11344) · [Before (L12015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12015)

```diff
-         const OB = this.kz.UP.kF,
+         const ie = this.uk.PR.vx,
```

#### 1568. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12019` → after: `L11348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11348) · [Before (L12019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12019)

```diff
-             SP: DB,
+             wR: be,
```

#### 1569. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12028` → after: `L11357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11357) · [Before (L12028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12028)

```diff
-           } = (0, RB.b)(GB, oB ? QB : YB, jB, this.typeObj.heldModelOffsetY());
+           } = (0, ze.e)(He, Ke ? Me : ye, Ue, this.typeObj.heldModelOffsetY());
```

#### 1570. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12034` → after: `L11363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11363) · [Before (L12034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12034)

```diff
-         null !== BB && (this.kz.UP.kF.delete(BB), this.thirdPersonThinObjectId = null)
+         null !== ee && (this.uk.PR.vx.delete(ee), this.thirdPersonThinObjectId = null)
```

#### 1571. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12038` → after: `L11367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11367) · [Before (L12038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12038)

```diff
-           kz: BB,
+           uk: ee,
```

#### 1572. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12041-L12043` → after: `L11370-L11372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11370-L11372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11370-L11372) · [Before (L12041-L12043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12041-L12043)

```diff
-         if (!BB.DW.YGB(OB.qL, "humanoidMesh")) return null;
-         const GB = BB.DW.zYB(OB.qL),
-           YB = BB.UP.kF,
+         if (!ee.sE.gHe(ie.cL, "humanoidMesh")) return null;
+         const He = ee.sE.cye(ie.cL),
+           ye = ee.PR.vx,
```

#### 1573. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12045` → after: `L11374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11374) · [Before (L12045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12045)

```diff
-             uF: DB
+             Ix: be
```

#### 1574. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12052` → after: `L11381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11381) · [Before (L12052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12052)

```diff
-           uF: DB,
+           Ix: be,
```

#### 1575. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12061` → after: `L11390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11390) · [Before (L12061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12061)

```diff
-           uF: BB.uF,
+           Ix: ee.Ix,
```

#### 1576. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12066` → after: `L11395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11395) · [Before (L12066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12066)

```diff
-           kz: OB,
+           uk: ie,
```

#### 1577. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12069-L12071` → after: `L11398-L11400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11398-L11400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11398-L11400) · [Before (L12069-L12071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12069-L12071)

```diff
-         if (!OB.DW.YGB(GB.qL, "fourLeggedMesh")) return null;
-         const YB = OB.DW.lYB(GB.qL),
-           DB = OB.UP.kF,
+         if (!ie.sE.gHe(He.cL, "fourLeggedMesh")) return null;
+         const ye = ie.sE.xye(He.cL),
+           be = ie.PR.vx,
```

#### 1578. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12073` → after: `L11402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11402) · [Before (L12073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12073)

```diff
-             uF: QB
+             Ix: Me
```

#### 1579. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12080` → after: `L11409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11409) · [Before (L12080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12080)

```diff
-           uF: QB,
+           Ix: Me,
```

#### 1580. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12086` → after: `L11415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11415) · [Before (L12086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12086)

```diff
-         if (!this.kz.UP.wq) return;
+         if (!this.uk.PR.GT) return;
```

#### 1581. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12088` → after: `L11417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11417) · [Before (L12088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12088)

```diff
-         if (null !== BB) return void this.kz.UP.kF.set(BB, "aLightLevels", this.heldItemLightLevels());
+         if (null !== ee) return void this.uk.PR.vx.set(ee, "aLightLevels", this.heldItemLightLevels());
```

#### 1582. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12091-L12093` → after: `L11420-L11422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11420-L11422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11420-L11422) · [Before (L12091-L12093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12091-L12093)

```diff
-         if (this.lightTargetsForMesh !== OB && (this.lightTargetsForMesh = OB, this.VyB = [], this.lightTargetsBuilt = !1), !this.lightTargetsBuilt) {
-           const BB = (0, JB.i)(OB);
-           for (const OB of BB) OB.yX && "aLightLevels" in OB.yX && this.VyB.push(OB);
+         if (this.lightTargetsForMesh !== ie && (this.lightTargetsForMesh = ie, this.nFe = [], this.lightTargetsBuilt = !1), !this.lightTargetsBuilt) {
+           const ee = (0, Je.m)(ie);
+           for (const ie of ee) ie.pC && "aLightLevels" in ie.pC && this.nFe.push(ie);
```

#### 1583. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12096` → after: `L11425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11425) · [Before (L12096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12096)

```diff
-         if (0 === this.VyB.length) return;
+         if (0 === this.nFe.length) return;
```

#### 1584. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12098` → after: `L11427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11427) · [Before (L12098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12098)

```diff
-         for (const YB of this.VyB)(0, JB.n)(YB, GB)
+         for (const ye of this.nFe)(0, Je.s)(ye, He)
```

#### 1585. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12101` → after: `L11430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11430) · [Before (L12101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12101)

```diff
-         return this.kz.DW.YYB(this.heldItemState.qL)._lightLevels
+         return this.uk.sE.Wye(this.heldItemState.cL)._lightLevels
```

#### 1586. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12105` → after: `L11434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11434) · [Before (L12105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12105)

```diff
-   39039: (BB, OB, GB) => {
+   39173: (ee, ie, He) => {
```

#### 1587. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12108-L12110` → after: `L11437-L11439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11437-L11439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11437-L11439) · [Before (L12108-L12110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12108-L12110)

```diff
-       g: () => qB,
-       j: () => lB,
-       n: () => oB
+       f: () => Te,
+       i: () => qe,
+       j: () => Ke
```

#### 1588. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12112-L12114` → after: `L11441-L11443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11441-L11443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11441-L11443) · [Before (L12112-L12114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12112-L12114)

```diff
-     var YB = GB(37771),
-       DB = GB(38176),
-       QB = GB(4896);
+     var ye = He(37913),
+       be = He(38321),
+       Me = He(4870);
```

#### 1589. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12118-L12120` → after: `L11447-L11449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11447-L11449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11447-L11449) · [Before (L12118-L12120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12118-L12120)

```diff
-         position: new YB.Xp,
-         rotation: new YB.Xp,
-         SP: new YB.Xp,
+         position: new ye.rf,
+         rotation: new ye.rf,
+         wR: new ye.rf,
```

#### 1590. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12125-L12127` → after: `L11454-L11456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11454-L11456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11454-L11456) · [Before (L12125-L12127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12125-L12127)

```diff
-     const jB = new YB.Xp(-.18, -.66, .48),
-       yB = new YB.Xp(.4, 1.25, Math.PI + .9),
-       JB = new YB.Xp(-.12, .12, .12),
+     const Ue = new ye.rf(-.18, -.66, .48),
+       Fe = new ye.rf(.4, 1.25, Math.PI + .9),
+       Je = new ye.rf(-.12, .12, .12),
```

#### 1591. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12133` → after: `L11462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11462) · [Before (L12133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12133)

```diff
-       return YB.Matrix.RotationYawPitchRollToRef(BB.y, BB.x, BB.z, MB), YB.Matrix.RotationYawPitchRollToRef(OB[1], OB[0], OB[2], PB), DB.d.matMulToRef(PB, MB, zB), YB.Quaternion.FromRotationMatrixToRef(zB, GB)
+       return ye.Matrix.RotationYawPitchRollToRef(ee.y, ee.x, ee.z, oe), ye.Matrix.RotationYawPitchRollToRef(ie[1], ie[0], ie[2], Re), be.b.matMulToRef(Re, oe, ke), ye.Quaternion.FromRotationMatrixToRef(ke, He)
```

#### 1592. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12145` → after: `L11474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11474) · [Before (L12145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12145)

```diff
-         SP: oB
+         wR: Ke
```

#### 1593. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12147-L12149` → after: `L11476-L11478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11476-L11478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11476-L11478) · [Before (L12147-L12149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12147-L12149)

```diff
-       if (GB.usesQuaternion = !1, "Gun" === BB.type) return YB.IU(jB), DB.IU(yB), void oB.IU(JB);
-       const [MB, PB, zB] = null !== OB && void 0 !== OB ? OB : [0, 0, 0], lB = (0, QB.e)(BB.type), qB = lB ? 2.25 : 1.35, ZB = lB ? 0 : .08;
-       if ("TwoDTool" === BB.type || BB.holdAsAiming) YB.zOB(MB, -.48 + PB, .24 + zB + ZB), oB.zOB(.19 * qB, -.19 * qB, .19 * qB), BB.holdAsAiming ? DB.zOB(.4 + Math.PI, 1.25, Math.PI / 2) : DB.zOB(Math.PI, Math.PI / 2, .35 * Math.PI);
+       if (He.usesQuaternion = !1, "Gun" === ee.type) return ye.jD(Ue), be.jD(Fe), void Ke.jD(Je);
+       const [oe, Re, ke] = null !== ie && void 0 !== ie ? ie : [0, 0, 0], qe = (0, Me.d)(ee.type), Te = qe ? 2.25 : 1.35, pe = qe ? 0 : .08;
+       if ("TwoDTool" === ee.type || ee.holdAsAiming) ye.wie(oe, -.48 + Re, .24 + ke + pe), Ke.wie(.19 * Te, -.19 * Te, .19 * Te), ee.holdAsAiming ? be.wie(.4 + Math.PI, 1.25, Math.PI / 2) : be.wie(Math.PI, Math.PI / 2, .35 * Math.PI);
```

#### 1594. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12151` → after: `L11480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11480) · [Before (L12151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12151)

```diff
-         YB.zOB(MB, -.72 + PB, .18 + zB + ZB);
+         ye.wie(oe, -.72 + Re, .18 + ke + pe);
```

#### 1595. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12153` → after: `L11482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11482) · [Before (L12153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12153)

```diff
-         oB.zOB(BB, BB, BB), DB.zOB(lB ? 0 : Math.PI, Math.PI / 2, -Math.PI / 2)
+         Ke.wie(ee, ee, ee), be.wie(qe ? 0 : Math.PI, Math.PI / 2, -Math.PI / 2)
```

#### 1596. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12158` → after: `L11487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11487) · [Before (L12158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12158)

```diff
-   39035: (BB, OB, GB) => {
+   39169: (ee, ie, He) => {
```

#### 1597. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12160` → after: `L11489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11489) · [Before (L12160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12160)

```diff
-       b: () => oB
+       e: () => Ke
```

#### 1598. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12162` → after: `L11491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11491) · [Before (L12162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12162)

```diff
-     var YB = GB(37771);
+     var ye = He(37913);
```

#### 1599. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12164` → after: `L11493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11493) · [Before (L12164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12164)

```diff
-       QB = new YB.Xp;
+       Me = new ye.rf;
```

#### 1600. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12168` → after: `L11497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11497) · [Before (L12168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12168)

```diff
-       const jB = OB instanceof YB.Quaternion ? OB : YB.Quaternion.RotationYawPitchRollToRef(OB.y, OB.x, OB.z, DB);
+       const Ue = ie instanceof ye.Quaternion ? ie : ye.Quaternion.RotationYawPitchRollToRef(ie.y, ie.x, ie.z, be);
```

#### 1601. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12172` → after: `L11501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11501) · [Before (L12172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12172)

```diff
-   37763: (BB, OB, GB) => {
+   37906: (ee, ie, He) => {
```

#### 1602. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12182-L12186` → after: `L11511-L11515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11511-L11515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11511-L11515) · [Before (L12182-L12186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12182-L12186)

```diff
-     var YB = GB(37769),
-       DB = GB(3088),
-       QB = GB(641),
-       oB = GB(1217),
-       jB = GB(25);
+     var ye = He(37908),
+       be = He(2969),
+       Me = He(610),
+       Ke = He(1169),
+       Ue = He(27);
```

#### 1603. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12201` → after: `L11530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11530) · [Before (L12201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12201)

```diff
-         if (null !== DB.uF)
+         if (null !== be.Ix)
```

#### 1604. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12210` → after: `L11539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11539) · [Before (L12210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12210)

```diff
-         if (null === DB.uF || null === (YB = DB.hideOnArmourPartsEquip) || void 0 === YB || !YB.length) continue;
+         if (null === be.Ix || null === (ye = be.hideOnArmourPartsEquip) || void 0 === ye || !ye.length) continue;
```

#### 1605. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12212` → after: `L11541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11541) · [Before (L12212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12212)

```diff
-         BB.setVisibility(DB.uF, !QB)
+         ee.setVisibility(be.Ix, !Me)
```

#### 1606. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12215-L12221` → after: `L11544-L11550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11544-L11550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11544-L11550) · [Before (L12215-L12221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12215-L12221)

```diff
-     var PB = GB(38167),
-       zB = GB(353),
-       lB = GB(37849),
-       pB = GB(37996),
-       qB = GB(38201),
-       ZB = GB(38272),
-       NB = GB(38275);
+     var Re = He(38307),
+       ke = He(347),
+       qe = He(37987),
+       fe = He(38118),
+       Te = He(38351),
+       pe = He(38419),
+       Xe = He(38425);
```

#### 1607. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12226` → after: `L11555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11555) · [Before (L12226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12226)

```diff
-         this.attachments = [], this.animatedAttachments = [], this.zIndexSub = void 0, this.personFullBody = !1, this.qL = void 0
+         this.attachments = [], this.animatedAttachments = [], this.zIndexSub = void 0, this.personFullBody = !1, this.cL = void 0
```

#### 1608. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12234` → after: `L11563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11563) · [Before (L12234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12234)

```diff
-       } = YB, jB = (0, pB.c)(QB, oB);
+       } = ye, Ue = (0, fe.e)(Me, Ke);
```

#### 1609. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12236-L12237` → after: `L11565-L11566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11565-L11566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11565-L11566) · [Before (L12236-L12237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12236-L12237)

```diff
-       const yB = (0, lB.k)(QB, oB);
-       RB.has(yB) || (RB.add(yB), (0, pB.b)(BB, QB, oB, {
+       const Fe = (0, qe.m)(Me, Ke);
+       ze.has(Fe) || (ze.add(Fe), (0, fe.c)(ee, Me, Ke, {
```

#### 1610. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12242-L12244` → after: `L11571-L11573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11571-L11573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11571-L11573) · [Before (L12242-L12244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12242-L12244)

```diff
-           const YB = (0, DB.g)(),
-             QB = YB.UP.kF,
-             oB = YB.DW.lL(YB.DW.names.meshAttachments);
+           const ye = (0, be.h)(),
+             Me = ye.PR.vx,
+             Ke = ye.sE.YL(ye.sE.names.meshAttachments);
```

#### 1611. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12247` → after: `L11576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11576) · [Before (L12247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12247)

```diff
-             const oB = null !== (jB = null === (yB = YB.DW.iGB(DB.qL)) || void 0 === yB ? void 0 : yB.uF) && void 0 !== jB ? jB : null;
+             const Ke = null !== (Ue = null === (Fe = ye.sE.rHe(be.cL)) || void 0 === Fe ? void 0 : Fe.Ix) && void 0 !== Ue ? Ue : null;
```

#### 1612. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12249` → after: `L11578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11578) · [Before (L12249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12249)

```diff
-               for (const YB of DB.attachments) YB.modelGlb === OB && YB.texture === GB && null === YB.uF && SB(DB, oB, BB, YB);
+               for (const ye of be.attachments) ye.modelGlb === ie && ye.texture === He && null === ye.Ix && Oe(be, Ke, ee, ye);
```

#### 1613. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12251` → after: `L11580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11580) · [Before (L12251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12251)

```diff
-             } else console.error(`Loaded ${(0,lB.k)(OB,GB)} but theres no thinObjectId ${oB} for parent entity ${DB.qL}`)
+             } else console.error(`Loaded ${(0,qe.m)(ie,He)} but theres no thinObjectId ${Ke} for parent entity ${be.cL}`)
```

#### 1614. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12255` → after: `L11584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11584) · [Before (L12255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12255)

```diff
-         console.error(`Failed to load ${QB}:`, BB.stack)
+         console.error(`Failed to load ${Me}:`, ee.stack)
```

#### 1615. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12261-L12263` → after: `L11590-L11592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11590-L11592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11590-L11592) · [Before (L12261-L12263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12261-L12263)

```diff
-       const jB = (0, DB.g)(),
-         yB = jB.UP.kF,
-         JB = `${(0,lB.k)(YB.modelGlb,YB.texture)}|${YB.modelNode}`;
+       const Ue = (0, be.h)(),
+         Fe = Ue.PR.vx,
+         Je = `${(0,qe.m)(ye.modelGlb,ye.texture)}|${ye.modelNode}`;
```

#### 1616. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12266` → after: `L11595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11595) · [Before (L12266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12266)

```diff
-         if (!BB) return void console.error(`Node ${YB.modelNode} not found in container ${YB.modelGlb}`);
+         if (!ee) return void console.error(`Node ${ye.modelNode} not found in container ${ye.modelGlb}`);
```

#### 1617. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12268` → after: `L11597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11597) · [Before (L12268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12268)

```diff
-           CP: 4,
+           bk: 4,
```

#### 1618. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12277-L12278` → after: `L11606-L11607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11606-L11607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11606-L11607) · [Before (L12277-L12278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12277-L12278)

```diff
-         }), void 0 !== YB.animation && (0, lB.v)(GB), yB.setPickableForType(JB, !0);
-         for (const OB of [BB, ...BB.getChildMeshes()]) OB.material && jB.UP.YL(OB)
+         }), void 0 !== ye.animation && (0, qe.t)(He), Fe.setPickableForType(Je, !0);
+         for (const ie of [ee, ...ee.getChildMeshes()]) ie.material && Ue.PR.dL(ie)
```

#### 1619. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12284-L12286` → after: `L11613-L11615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11613-L11615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11613-L11615) · [Before (L12284-L12286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12284-L12286)

```diff
-       yB.setEntityId(MB, RB), yB.setPickable(MB, BB.personFullBody && (0, ZB.l)(RB)), yB.set(MB, "aOpacity", (0, NB.holderAttachmentOpacity)(jB, RB));
-       const AB = jB.FX[jB.EX][RB];
-       if (yB.setRenderingGroupId(MB, null !== (QB = null === AB || void 0 === AB ? void 0 : AB.zIndex) && void 0 !== QB ? QB : 0), null !== AB && void 0 !== AB && AB.overlayColour) {
+       Fe.setEntityId(oe, ze), Fe.setPickable(oe, ee.personFullBody && (0, pe.h)(ze)), Fe.set(oe, "aOpacity", (0, Xe.holderAttachmentOpacity)(Ue, ze));
+       const Ee = Ue.zC[Ue.gC][ze];
+       if (Fe.setRenderingGroupId(oe, null !== (Me = null === Ee || void 0 === Ee ? void 0 : Ee.zIndex) && void 0 !== Me ? Me : 0), null !== Ee && void 0 !== Ee && Ee.overlayColour) {
```

#### 1620. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12290-L12291` → after: `L11619-L11620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11619-L11620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11619-L11620) · [Before (L12290-L12291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12290-L12291)

```diff
-       const VB = jB.DW.YYB(RB);
-       if (yB.set(MB, "aLightLevels", null !== (oB = null === VB || void 0 === VB ? void 0 : VB._lightLevels) && void 0 !== oB ? oB : PB.d), YB.overlayColour) {
+       const ge = Ue.sE.Wye(ze);
+       if (Fe.set(oe, "aLightLevels", null !== (Ke = null === ge || void 0 === ge ? void 0 : ge._lightLevels) && void 0 !== Ke ? Ke : Re.e), ye.overlayColour) {
```

#### 1621. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12295` → after: `L11624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11624) · [Before (L12295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12295)

```diff
-       if (YB.uF = MB, void 0 !== YB.animation) {
+       if (ye.Ix = oe, void 0 !== ye.animation) {
```

#### 1622. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12297` → after: `L11626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11626) · [Before (L12297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12297)

```diff
-         void 0 === OB && (OB = qB.c.fromRests(yB, JB, YB.animation, (0, qB.p)(yB, MB)), WB.set(JB, OB)), YB.clipPose = OB, null !== OB && BB.animatedAttachments.push(YB)
+         void 0 === ie && (ie = Te.c.fromRests(Fe, Je, ye.animation, (0, Te.m)(Fe, oe)), Be.set(Je, ie)), ye.clipPose = ie, null !== ie && ee.animatedAttachments.push(ye)
```

#### 1623. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12302` → after: `L11631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11631) · [Before (L12302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12302)

```diff
-       const YB = BB.DW.getState(OB, BB.DW.names.meshAttachments);
+       const ye = ee.sE.getState(ie, ee.sE.names.meshAttachments);
```

#### 1624. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12304` → after: `L11633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11633) · [Before (L12304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12304)

```diff
-         for (const DB of YB.attachments) null !== DB.uF && BB.UP.kF.setPickable(DB.uF, GB)
+         for (const be of ye.attachments) null !== be.Ix && ee.PR.vx.setPickable(be.Ix, He)
```

#### 1625. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12312-L12314` → after: `L11641-L11643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11641-L11643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11641-L11643) · [Before (L12312-L12314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12312-L12314)

```diff
-         OW: function(OB, GB) {
-           GB.zIndexSub = jB.o.subscribe(`otherEntitySettingsClientifiedEId|${OB}|zIndex`, (OB => {
-             for (const YB of GB.attachments) null !== YB.uF && BB.UP.kF.setRenderingGroupId(YB.uF, OB)
+         lE: function(ie, He) {
+           He.zIndexSub = Ue.h.subscribe(`otherEntitySettingsClientifiedEId|${ie}|zIndex`, (ie => {
+             for (const ye of He.attachments) null !== ye.Ix && ee.PR.vx.setRenderingGroupId(ye.Ix, ie)
```

#### 1626. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12317-L12319` → after: `L11646-L11648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11646-L11648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11646-L11648) · [Before (L12317-L12319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12317-L12319)

```diff
-         Qm: function(OB, GB) {
-           jB.o.unsubscribe(GB.zIndexSub);
-           const YB = BB.UP.kF;
+         JV: function(ie, He) {
+           Ue.h.unsubscribe(He.zIndexSub);
+           const ye = ee.PR.vx;
```

#### 1627. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12321-L12322` → after: `L11650-L11651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11650-L11651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11650-L11651) · [Before (L12321-L12322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12321-L12322)

```diff
-             if (null !== BB.uF && YB.has(BB.uF)) try {
-               YB.delete(BB.uF)
+             if (null !== ee.Ix && ye.has(ee.Ix)) try {
+               ye.delete(ee.Ix)
```

#### 1628. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12324` → after: `L11653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11653) · [Before (L12324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12324)

```diff
-               console.error(`Failed to cleanup attachment ${BB.uF} of entity ${OB}:`, DB.stack)
+               console.error(`Failed to cleanup attachment ${ee.Ix} of entity ${ie}:`, be.stack)
```

#### 1629. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12328` → after: `L11657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11657) · [Before (L12328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12328)

```diff
-         oW: function(OB, GB) {
+         QE: function(ie, He) {
```

#### 1630. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12332-L12333` → after: `L11661-L11662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11661-L11662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11661-L11662) · [Before (L12332-L12333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12332-L12333)

```diff
-             const OB = null !== (DB = null === (QB = BB.DW.iGB(oB.qL)) || void 0 === QB ? void 0 : QB.uF) && void 0 !== DB ? DB : null;
-             null === OB || (0, YB.pausesOutOfView)(BB, oB.qL, OB) || kB(BB, oB)
+             const ie = null !== (be = null === (Me = ee.sE.rHe(Ke.cL)) || void 0 === Me ? void 0 : Me.Ix) && void 0 !== be ? be : null;
+             null === ie || (0, ye.pausesOutOfView)(ee, Ke.cL, ie) || Ze(ee, Ke)
```

#### 1631. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12340` → after: `L11669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11669) · [Before (L12340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12340)

```diff
-       const GB = BB.DW.getState(OB, BB.DW.names.meshAttachments);
+       const He = ee.sE.getState(ie, ee.sE.names.meshAttachments);
```

#### 1632. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12345-L12347` → after: `L11674-L11676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11674-L11676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11674-L11676) · [Before (L12345-L12347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12345-L12347)

```diff
-       const GB = BB.UP.kF,
-         YB = BB.VK / 1e3;
-       for (const DB of OB.animatedAttachments) DB.clipPose.write(GB, DB.uF, YB)
+       const He = ee.PR.vx,
+         ye = ee.lY / 1e3;
+       for (const be of ie.animatedAttachments) be.clipPose.write(He, be.Ix, ye)
```

#### 1633. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12351` → after: `L11680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11680) · [Before (L12351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12351)

```diff
-       const YB = BB.DW.getState(OB, BB.DW.names.meshAttachments);
+       const ye = ee.sE.getState(ie, ee.sE.names.meshAttachments);
```

#### 1634. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12354` → after: `L11683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11683) · [Before (L12354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12354)

```diff
-           if (DB.uF === GB) return !0;
+           if (be.Ix === He) return !0;
```

#### 1635. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12360` → after: `L11689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11689) · [Before (L12360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12360)

```diff
-       return mB(BB, OB, null !== (YB = GB.attachments) && void 0 !== YB ? YB : [])
+       return Ae(ee, ie, null !== (ye = He.attachments) && void 0 !== ye ? ye : [])
```

#### 1636. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12369-L12372` → after: `L11698-L11701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11698-L11701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11698-L11701) · [Before (L12369-L12372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12369-L12372)

```diff
-       if ((0, QB.Q)(BB)) return console.error("Cannot update mesh attachments for invalid eId", BB), YB;
-       const jB = (0, DB.g)(),
-         yB = jB.DW.iGB(BB);
-       if (!yB) return console.error(`Cannot update mesh attachments for entity ${BB} as it has no mesh`), YB;
+       if ((0, Me.P)(ee)) return console.error("Cannot update mesh attachments for invalid eId", ee), ye;
+       const Ue = (0, be.h)(),
+         Fe = Ue.sE.rHe(ee);
+       if (!Fe) return console.error(`Cannot update mesh attachments for entity ${ee} as it has no mesh`), ye;
```

#### 1637. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12374` → after: `L11703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11703) · [Before (L12374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12374)

```diff
-         uF: JB
+         Ix: Je
```

#### 1638. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12376-L12379` → after: `L11705-L11708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11705-L11708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11705-L11708) · [Before (L12376-L12379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12376-L12379)

```diff
-       if (null === JB) return console.error(`Cannot update mesh attachments for entity ${BB} as it has no thinObjectId`), YB;
-       const PB = jB.DW.getState(BB, jB.DW.names.meshAttachments);
-       if (!PB) return console.error(`Cannot update mesh attachments for entity ${BB} as it has no meshAttachments component`), YB;
-       for (const DB of PB.attachments)(0, oB.ob)(DB.owners, OB);
+       if (null === Je) return console.error(`Cannot update mesh attachments for entity ${ee} as it has no thinObjectId`), ye;
+       const Re = Ue.sE.getState(ee, Ue.sE.names.meshAttachments);
+       if (!Re) return console.error(`Cannot update mesh attachments for entity ${ee} as it has no meshAttachments component`), ye;
+       for (const be of Re.attachments)(0, Ke.mb)(be.owners, ie);
```

#### 1639. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12386` → after: `L11715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11715) · [Before (L12386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12386)

```diff
-               YB.owners.push(GB), FB(BB, YB.uF, oB.overlayColour), DB = !0;
+               ye.owners.push(He), Ve(ee, ye.Ix, Ke.overlayColour), be = !0;
```

#### 1640. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12392` → after: `L11721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11721) · [Before (L12392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12392)

```diff
-             uF: null,
+             Ix: null,
```

#### 1641. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12397` → after: `L11726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11726) · [Before (L12397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12397)

```diff
-         return MB(BB.UP.kF, YB, OB.attachments), QB
+         return oe(ee.PR.vx, ye, ie.attachments), Me
```

#### 1642. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12399` → after: `L11728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11728) · [Before (L12399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12399)

```diff
-       const zB = jB.UP.kF;
+       const ke = Ue.PR.vx;
```

#### 1643. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12402` → after: `L11731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11731) · [Before (L12402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12402)

```diff
-         0 === BB.owners.length && (null !== BB.uF && zB.delete(BB.uF), (0, oB.ob)(PB.attachments, BB), null !== BB.clipPose && (0, oB.ob)(PB.animatedAttachments, BB), DB--)
+         0 === ee.owners.length && (null !== ee.Ix && ke.delete(ee.Ix), (0, Ke.mb)(Re.attachments, ee), null !== ee.clipPose && (0, Ke.mb)(Re.animatedAttachments, ee), be--)
```

#### 1644. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12409-L12410` → after: `L11738-L11739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11738-L11739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11738-L11739) · [Before (L12409-L12410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12409-L12410)

```diff
-       const GB = (0, DB.g)(),
-         YB = GB.DW.getState(BB, GB.DW.names.meshAttachments);
+       const He = (0, be.h)(),
+         ye = He.sE.getState(ee, He.sE.names.meshAttachments);
```

#### 1645. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12412-L12413` → after: `L11741-L11742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11741-L11742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11741-L11742) · [Before (L12412-L12413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12412-L12413)

```diff
-       const oB = null === (OB = GB.DW.iGB(BB)) || void 0 === OB ? void 0 : OB.uF;
-       (0, QB.Q)(oB) || MB(GB.UP.kF, oB, YB.attachments)
+       const Ke = null === (ie = He.sE.rHe(ee)) || void 0 === ie ? void 0 : ie.Ix;
+       (0, Me.P)(Ke) || oe(He.PR.vx, Ke, ye.attachments)
```

#### 1646. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12418` → after: `L11747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11747) · [Before (L12418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12418)

```diff
-       const YB = BB.UP.kF;
+       const ye = ee.PR.vx;
```

#### 1647. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12425` → after: `L11754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11754) · [Before (L12425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12425)

```diff
-   38296: (BB, OB, GB) => {
+   38457: (ee, ie, He) => {
```

#### 1648. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12433-L12438` → after: `L11762-L11767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11762-L11767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11762-L11767) · [Before (L12433-L12438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12433-L12438)

```diff
-     var YB = GB(3088),
-       DB = GB(1998),
-       QB = GB(353),
-       oB = GB(38306),
-       jB = GB(38303),
-       yB = GB(363),
+     var ye = He(2969),
+       be = He(1952),
+       Me = He(347),
+       Ke = He(38473),
+       Ue = He(38466),
+       Fe = He(352),
```

#### 1649. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12440-L12442` → after: `L11769-L11771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11769-L11771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11769-L11771) · [Before (L12440-L12442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12440-L12442)

```diff
-       MB = GB(38280),
-       PB = GB(37769),
-       zB = GB(38301);
+       oe = He(38433),
+       Re = He(37908),
+       ke = He(38460);
```

#### 1650. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12446` → after: `L11775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11775) · [Before (L12446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12446)

```diff
-         this.isServerControlled = !1, this.defaultRotationsPerSecond = 5, this.childrenNodeParams = [], this.playerControlledRotationSoftTolerance = null, this.playerControlledRotationHardTolerance = null, this.modelYRotationOffset = 0, this.renderRotation = null, this.serverSetR … [truncated]
+         this.isServerControlled = !1, this.defaultRotationsPerSecond = 5, this.childrenNodeParams = [], this.playerControlledRotationSoftTolerance = null, this.playerControlledRotationHardTolerance = null, this.modelYRotationOffset = 0, this.renderRotation = null, this.serverSetR … [truncated]
```

#### 1651. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12455` → after: `L11784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11784) · [Before (L12455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12455)

```diff
-         OW: function(BB, OB) {
+         lE: function(ee, ie) {
```

#### 1652. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12463-L12464` → after: `L11792-L11793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11792-L11793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11792-L11793) · [Before (L12463-L12464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12463-L12464)

```diff
-         Qm: null,
-         oW: function(OB, GB) {
+         JV: null,
+         QE: function(ie, He) {
```

#### 1653. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12468` → after: `L11797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11797) · [Before (L12468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12468)

```diff
-             const GB = BB.DW.iGB(QB.qL);
+             const He = ee.sE.rHe(Me.cL);
```

#### 1654. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12470` → after: `L11799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11799) · [Before (L12470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12470)

```diff
-               QB.fP = !1;
+               Me.AR = !1;
```

#### 1655. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12474` → after: `L11803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11803) · [Before (L12474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12474)

```diff
-               HYB: oB
+               Xbe: Ke
```

#### 1656. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12476-L12477` → after: `L11805-L11806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11805-L11806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11805-L11806) · [Before (L12476-L12477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12476-L12477)

```diff
-             if (!(null !== (YB = null === oB || void 0 === oB ? void 0 : oB.vYB) && void 0 !== YB ? YB : null === (DB = GB.mesh) || void 0 === DB ? void 0 : DB.isEnabled())) {
-               QB.fP = !1;
+             if (!(null !== (ye = null === Ke || void 0 === Ke ? void 0 : Ke.zbe) && void 0 !== ye ? ye : null === (be = He.mesh) || void 0 === be ? void 0 : be.isEnabled())) {
+               Me.AR = !1;
```

#### 1657. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12481` → after: `L11810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11810) · [Before (L12481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12481)

```diff
-               uF: jB
+               Ix: Ue
```

#### 1658. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12483` → after: `L11812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11812) · [Before (L12483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12483)

```diff
-             oB ? QB._thinObjectId !== jB && AB(QB, jB) : QB._rootMesh !== GB.mesh && VB(QB, GB.mesh), oB && (0, PB.pausesOutOfView)(BB, QB.qL, jB) ? QB.fP = !0 : WB(BB, QB)
+             Ke ? Me._thinObjectId !== Ue && Ee(Me, Ue) : Me._rootMesh !== He.mesh && ge(Me, He.mesh), Ke && (0, Re.pausesOutOfView)(ee, Me.cL, Ue) ? Me.AR = !0 : Be(ee, Me)
```

#### 1659. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12490` → after: `L11819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11819) · [Before (L12490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12490)

```diff
-       OB.fP && null !== OB._thinObjectId && BB.UP.kF.has(OB._thinObjectId) && WB(BB, OB)
+       ie.AR && null !== ie._thinObjectId && ee.PR.vx.has(ie._thinObjectId) && Be(ee, ie)
```

#### 1660. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12494` → after: `L11823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11823) · [Before (L12494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12494)

```diff
-       const GB = OB.isServerControlled ? OB.serverSetRotation[1] : BB.DW.EGB(OB.qL).heading;
+       const He = ie.isServerControlled ? ie.serverSetRotation[1] : ee.sE.Uye(ie.cL).heading;
```

#### 1661. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12499` → after: `L11828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11828) · [Before (L12499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12499)

```diff
-       const GB = BB.DW.getState(OB, "meshRotation");
+       const He = ee.sE.getState(ie, "meshRotation");
```

#### 1662. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12505-L12511` → after: `L11834-L11840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11834-L11840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11834-L11840) · [Before (L12505-L12511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12505-L12511)

```diff
-       OB.fP = !1;
-       const NB = BB.DW.AGB(BB.EX),
-         RB = BB.DW.nYB(OB.qL),
-         WB = OB.qL === BB.EX,
-         AB = (0, zB.c)(BB, OB.qL, RB),
-         VB = BB.DW.EGB(BB.EX),
-         SB = BB.DW.EGB(OB.qL),
+       ie.AR = !1;
+       const Xe = ee.sE.CHe(ee.gC),
+         ze = ee.sE.jye(ie.cL),
+         Be = ie.cL === ee.gC,
+         Ee = (0, ke.d)(ee, ie.cL, ze),
+         ge = ee.sE.Uye(ee.gC),
+         Oe = ee.sE.Uye(ie.cL),
```

#### 1663. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12514-L12515` → after: `L11843-L11844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11843-L11844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11843-L11844) · [Before (L12514-L12515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12514-L12515)

```diff
-         const GB = BB.bloxd.getResolvedPhysicsSettings(BB.EX, NB.physicsState);
-         null === GB.fixedHeading && GB.steering && NB._steeringActiveLastTick ? fB[1] = (0, jB.g)(BB, NB) : fB[1] = (0, oB.u)(GB, NB.steeringHeading, OB.baseRenderRotation[1] + MB.b.getPlayerFacingHeading(BB))
+         const He = ee.bloxd.getResolvedPhysicsSettings(ee.gC, Xe.physicsState);
+         null === He.fixedHeading && He.steering && Xe._steeringActiveLastTick ? te[1] = (0, Ue.k)(ee, Xe) : te[1] = (0, Ke.u)(He, Xe.steeringHeading, ie.baseRenderRotation[1] + oe.d.getPlayerFacingHeading(ee))
```

#### 1664. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12518-L12520` → after: `L11847-L11849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11847-L11849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11847-L11849) · [Before (L12518-L12520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12518-L12520)

```diff
-         if ((null === RB || void 0 === RB ? void 0 : RB.UYB) && BB.bloxd.getRiddenVehicleEId(RB.qp) === OB.qL && null === BB.bloxd.getLifeformType(OB.qL)) {
-           const BB = DB.c.lerpWeight(lB * OB._accumulatedDt);
-           fB[1] = OB.renderRotation[1] + QB.b.computeShortestRotation(OB.renderRotation[1], fB[1]) * BB
+         if ((null === ze || void 0 === ze ? void 0 : ze.sye) && ee.bloxd.getRiddenVehicleEId(ze.Df) === ie.cL && null === ee.bloxd.getLifeformType(ie.cL)) {
+           const ee = be.b.lerpWeight(qe * ie._accumulatedDt);
+           te[1] = ie.renderRotation[1] + Me.c.computeShortestRotation(ie.renderRotation[1], te[1]) * ee
```

#### 1665. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12523-L12524` → after: `L11852-L11853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11852-L11853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11852-L11853) · [Before (L12523-L12524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12523-L12524)

```diff
-       const kB = AB ? null !== (GB = null === VB || void 0 === VB ? void 0 : VB.speed) && void 0 !== GB ? GB : 0 : null !== (YB = null === SB || void 0 === SB ? void 0 : SB.speed) && void 0 !== YB ? YB : 0,
-         dB = null !== (yB = null === SB || void 0 === SB ? void 0 : SB.pose) && void 0 !== yB ? yB : "standing",
+       const Ze = Ee ? null !== (He = null === ge || void 0 === ge ? void 0 : ge.speed) && void 0 !== He ? He : 0 : null !== (ye = null === Oe || void 0 === Oe ? void 0 : Oe.speed) && void 0 !== ye ? ye : 0,
+         we = null !== (Fe = null === Oe || void 0 === Oe ? void 0 : Oe.pose) && void 0 !== Fe ? Fe : "standing",
```

#### 1666. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12529-L12530` → after: `L11858-L11859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11858-L11859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11858-L11859) · [Before (L12529-L12530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12529-L12530)

```diff
-         FB = !(AB && !WB) && !0 === (null === (PB = BB.FX) || void 0 === PB || null === (pB = PB[BB.EX]) || void 0 === pB || null === (qB = pB[OB.qL]) || void 0 === qB ? void 0 : qB.lockHeadToBody),
-         iB = null !== (ZB = BB.DW.getState(OB.qL, "animator")) && void 0 !== ZB ? ZB : null;
+         Ve = !(Ee && !Be) && !0 === (null === (Re = ee.zC) || void 0 === Re || null === (fe = Re[ee.gC]) || void 0 === fe || null === (Te = fe[ie.cL]) || void 0 === Te ? void 0 : Te.lockHeadToBody),
+         ae = null !== (pe = ee.sE.getState(ie.cL, "animator")) && void 0 !== pe ? pe : null;
```

#### 1667. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12539` → after: `L11868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11868) · [Before (L12539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12539)

```diff
-       const QB = (0, YB.g)().UP.kF.getNodeNames(OB),
+       const Me = (0, ye.h)().PR.vx.getNodeNames(ie),
```

#### 1668. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12583` → after: `L11912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11912) · [Before (L12583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12583)

```diff
-       let fB = zB ? 0 : null !== yB && void 0 !== yB ? yB : 0,
+       let te = ke ? 0 : null !== Fe && void 0 !== Fe ? Fe : 0,
```

#### 1669. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12591` → after: `L11920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11920) · [Before (L12591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12591)

```diff
-           uB = Math.max(uB, null !== (mB = qB[YB].rotationsPerSecond) && void 0 !== mB ? mB : ZB)
+           Pe = Math.max(Pe, null !== (Ae = Te[ye].rotationsPerSecond) && void 0 !== Ae ? Ae : pe)
```

#### 1670. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12597-L12598` → after: `L11926-L11927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11926-L11927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11926-L11927) · [Before (L12597-L12598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12597-L12598)

```diff
-           GB = zB ? 0 : null !== yB && void 0 !== yB ? yB : BB.softTolerance,
-           oB = zB ? null : null !== MB && void 0 !== MB ? MB : BB.hardTolerance,
+           He = ke ? 0 : null !== Fe && void 0 !== Fe ? Fe : ee.softTolerance,
+           Ke = ke ? null : null !== oe && void 0 !== oe ? oe : ee.hardTolerance,
```

#### 1671. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12602` → after: `L11931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11931) · [Before (L12602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12602)

```diff
-         const PB = zB ? uB : null !== (IB = BB.rotationsPerSecond) && void 0 !== IB ? IB : ZB,
+         const Re = ke ? Pe : null !== (Ye = ee.rotationsPerSecond) && void 0 !== Ye ? Ye : pe,
```

#### 1672. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12607-L12608` → after: `L11936-L11937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11936-L11937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11936-L11937) · [Before (L12607-L12608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12607-L12608)

```diff
-             GB = QB.b.computeShortestRotation(UB[YB], jB[YB]);
-           GB < -fB ? jB[YB] = UB[YB] - fB : GB > fB && (jB[YB] = UB[YB] + fB);
+             He = Me.c.computeShortestRotation(We[ye], Ue[ye]);
+           He < -te ? Ue[ye] = We[ye] - te : He > te && (Ue[ye] = We[ye] + te);
```

#### 1673. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12611` → after: `L11940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11940) · [Before (L12611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12611)

```diff
-             const BB = QB.b.computeShortestRotation(UB[YB], JB[YB]),
+             const ee = Me.c.computeShortestRotation(We[ye], Je[ye]),
```

#### 1674. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12615` → after: `L11944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11944) · [Before (L12615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12615)

```diff
-           DB || (JB[YB] = QB.b.applyRotation(JB[YB], jB[YB], lB)), jB[YB] === BB && JB[YB] === OB || (nB = !0)
+           be || (Je[ye] = Me.c.applyRotation(Je[ye], Ue[ye], qe)), Ue[ye] === ee && Je[ye] === ie || (de = !0)
```

#### 1675. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12620` → after: `L11949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11949) · [Before (L12620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12620)

```diff
-       const FB = (0, YB.g)().UP.kF,
+       const Ve = (0, ye.h)().PR.vx,
```

#### 1676. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12629` → after: `L11958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11958) · [Before (L12629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12629)

```diff
-         const DB = QB.b.computeShortestRotation(GB[1], UB[1]);
+         const be = Me.c.computeShortestRotation(He[1], We[1]);
```

#### 1677. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12641` → after: `L11970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11970) · [Before (L12641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12641)

```diff
-   38321: (BB, OB, GB) => {
+   38487: (ee, ie, He) => {
```

#### 1678. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12646-L12649` → after: `L11975-L11978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11975-L11978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11975-L11978) · [Before (L12646-L12649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12646-L12649)

```diff
-     var YB = GB(38346),
-       DB = GB(192),
-       QB = GB(6991),
-       oB = GB(363),
+     var ye = He(38511),
+       be = He(186),
+       Me = He(7083),
+       Ke = He(352),
```

#### 1679. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12651-L12657` → after: `L11980-L11986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11980-L11986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11980-L11986) · [Before (L12651-L12657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12651-L12657)

```diff
-       yB = GB(38325),
-       JB = GB(9927),
-       MB = GB(38306),
-       PB = GB(38313),
-       zB = GB(38319);
-     var lB = GB(1998),
-       pB = GB(353);
+       Fe = He(38495),
+       Je = He(9961),
+       oe = He(38473),
+       Re = He(38476),
+       ke = He(38478);
+     var qe = He(1952),
+       fe = He(347);
```

#### 1680. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12662` → after: `L11991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11991) · [Before (L12662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12662)

```diff
-     const AB = [2, 218, 0, 1, "h", 3, "i", 7, 197, 4, 8, 255, "length", "b", 28, 243, "e", "undefined", void 0, "c", 167, 92, "a", 63, 6, "fromCodePoint", 12, "push", 83, 118, 9, "g", 91, 8191, 88, 13, 14, "d", 5, 23, 238, 74, "f", null, 76, 119, 64, 222, 127, 33554432, 67108864, … [truncated]
+     const Ee = ["b", 0, 1, "h", 3, "a", 9, 7, "e", "f", "d", 8, 255, "length", 212, 94, "undefined", void 0, "c", 234, 63, 6, "fromCodePoint", 12, "push", 2, 97, 142, 21, 91, 8191, 88, 13, 14, 25, 222, null, 10, 35, 83, 5, 39, "i", 161, 59, "Op", 100, "g", 52, "Yb", 4, 102, 103,  … [truncated]
```

#### 1681. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12665` → after: `L11994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR11994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L11994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L11994) · [Before (L12665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12665)

```diff
-       return BB[AB[12]] = AB[3], typeof rB !== AB[17] && rB ? (new rB).decode(new XB(BB[AB[2]])) : typeof wB !== AB[17] && wB ? wB.from(BB[AB[2]]).toString("utf-8") : hB(BB[AB[2]])
+       return ee[Ee[13]] = Ee[2], typeof Le !== Ee[16] && Le ? (new Le).decode(new Ce(ee[Ee[1]])) : typeof ve !== Ee[16] && ve ? ve.from(ee[Ee[1]]).toString("utf-8") : le(ee[Ee[1]])
```

#### 1682. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12673-L12674` → after: `L12002-L12003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12002-L12003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L12002-L12003) · [Before (L12673-L12674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12673-L12674)

```diff
-     nB(RB = {}, WB = ["?yf,fecz+xGV3B!", "}0@u*(APK>WJ(0E*P|=:peIyZCCB^jqgDH8.ghmQ;;Lihj~H,txaM4c", "`)36(nr@r~ios#N=PdlaF#/LA", "?enud*FPs!<3zpc3@+w", "N^=|Gv21DgZ:[3x&Nr=eH", "5H?7kYv1:x,RSSs", 'Fyr7NK~@H^P)t(]%%|W(*)%i7I>KeP,%Le<"7bO@t9APCw', "?_[&xu:HA", 'Q=7R3ak@m5NBsxi$6~`: … [truncated]
-       nB(BB[AB[12]] = AB[2], BB[AB[15]] = [function() {
+     de(ze = {}, Be = ["Vf.mr^]sD}]9${ZC08+oRhj?WE2Ec###me*w`[COlAYJB1", ">ck=U#,Zfjsuor&*fc>e>.eO?}K3>zOp", "i*d(jyCj_OJRy&%L|ARkRQ0$Yji1UA?#9YY=%O]sNJv`[*e!S1x)y]04", "|>,o6|19>||];z3!fczw*", "<:J((2RML!s}d3S*Qky6>", "n]T?zleFLm+o<z^BsfOpw", "tNq(|Onp|x{{6v_TY&0c`TW9VQERTE=s", " … [truncated]
+       de(ee[Ee[13]] = Ee[1], ee[Ee[15]] = [function() {
```

#### 1683. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12682` → after: `L12011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L12011) · [Before (L12682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12682)

```diff
-       }], BB[AB[13]] = AB[18], BB[AB[0]] = []);
+       }], ee[Ee[2]] = Ee[17], ee[Ee[14]] = []);
```

#### 1684. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12684` → after: `L12013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L12013) · [Before (L12684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12684)

```diff
-         nB(BB[AB[13]] = Object, BB[AB[0]][AB[27]]("".__proto__.constructor.name))
+         de(ee[Ee[2]] = Object, ee[Ee[14]][Ee[24]]("".__proto__.constructor.name))
```

#### 1685. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12686-L12689` → after: `L12015-L12018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12015-L12018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L12015-L12018) · [Before (L12686-L12689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12686-L12689)

```diff
-       BB: for (BB[-AB[14]] = AB[2]; BB[-AB[14]] < BB[AB[15]][AB[12]]; BB[-AB[14]]++) try {
-         for (BB[AB[13]] = BB[AB[15]][BB[-AB[14]]](), BB[AB[16]] = AB[2]; BB[AB[16]] < BB[AB[0]][AB[12]]; BB[AB[16]]++)
-           if (typeof BB[AB[13]][BB[AB[0]][BB[AB[16]]]] === AB[17]) continue BB;
-         return BB[AB[13]]
+       ee: for (ee[Ee[8]] = Ee[1]; ee[Ee[8]] < ee[Ee[15]][Ee[13]]; ee[Ee[8]]++) try {
+         for (ee[Ee[2]] = ee[Ee[15]][ee[Ee[8]]](), ee[Ee[9]] = Ee[1]; ee[Ee[9]] < ee[Ee[14]][Ee[13]]; ee[Ee[9]]++)
+           if (typeof ee[Ee[2]][ee[Ee[14]][ee[Ee[9]]]] === Ee[16]) continue ee;
+         return ee[Ee[2]]
```

#### 1686. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12691-L12693` → after: `L12020-L12023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12020-L12023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L12020-L12023) · [Before (L12691-L12693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12691-L12693)

```diff
-       return BB[AB[13]] || this
-     }() || {}, rB = gB.TextDecoder, XB = gB.Uint8Array, wB = gB.BP, EB = gB.String || String, cB = gB.Array || Array, hB = function(...BB) {
-       return nB(BB[AB[12]] = AB[2], BB[AB[28]] = new cB(AB[53]), BB[AB[13]] = EB[AB[25]] || EB.fromCharCode, BB[AB[19]] = []),
+       return ee[Ee[2]] || this
+     }() || {}, Le = xe.TextDecoder, Ce = xe.Uint8Array, ve = xe.bR, ue = xe.String || String, me = xe.Array || Array, le = function() {
+       var ee, ie, He = new me(Ee[62]);
+       return de(ee = ue[Ee[22]] || ue.fromCharCode, ie = []),
```

#### 1687. `bundles/bloxd.io/chunks/js/88.js` (Changed code · before: `L12695-L12696` → after: `L12025-L12026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848dR12025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-425e4042cf4304a741ee0c5a1a27667bf7df518a2724f165954b6ea9417c848d) · [After (L12025-L12026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/88.js#L12025-L12026) · [Before (L12695-L12696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/88.js#L12695-L12696)

```diff
-           for (nB(OB[AB[12]] = AB[3], OB[AB[22]] = AB[18], OB[AB[0]] = AB[18], OB[-AB[21]] = OB[AB[2]][AB[12]], BB[AB[19]][AB[12]] = AB[2]), OB[-AB[20]] = AB[2]; OB[-AB[20]] < OB[-AB[21]];) nB(OB[AB[0]] = OB[AB[2]][OB[-AB[20]]++], OB[AB[0]] <= AB[48] ? OB[AB[22]] = OB[AB[0]] : OB … [truncated]
-           return BB[AB[19]].join("")
+           for (de(ye[Ee[13]] = Ee[2], ye[Ee[2]] = Ee[17], ye[Ee[19]] = Ee[17], ye[Ee[18]] = ye[Ee[1]][Ee[13]], ie[Ee[13]] = Ee[1]), ye[Ee[10]] = Ee[1]; ye[Ee[10]] < ye[Ee[18]];) de(ye[Ee[19]] = ye[Ee[1]][ye[Ee[10]]++], ye[Ee[19]] <= Ee[59] ? ye[Ee[2]] = ye[Ee[19]] : ye[Ee[19]] <= … [truncated]
+           return ie.join("")
```
