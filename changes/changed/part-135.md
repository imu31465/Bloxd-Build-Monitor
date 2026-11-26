# Changed — Bundle Modifications Report (Part 135 / 146)

- **Updated at**: `2026-11-26T17:59 JST`
- **Part**: `135 / 146` (**422** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 134](part-134.md) · [Part 136 →](part-136.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmClientGame.js` (fo1voe.f743fbcf → pxmq3aq.c63b303d · continued)

- **File**: `bundles/bloxd.io/chunks/js/wasmClientGame.js` (890 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b)

#### 462. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4543` → after: `L4505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4505) · [Before (L4543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4543)

```diff
-         MM === hM.lc.ChestOpened ? this.items.chestOpened(iM, OM, SM) : MM !== hM.lc.Synced && MM !== hM.lc.ChestClosed && MM !== hM.lc.ChestRefreshed || this.items.touch(), this.guard((() => {
+         VV === kV.xc.ChestOpened ? this.items.chestOpened(xV, JV, YV) : VV !== kV.xc.Synced && VV !== kV.xc.ChestClosed && VV !== kV.xc.ChestRefreshed || this.items.touch(), this.guard((() => {
```

#### 463. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4546-L4547` → after: `L4508-L4509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4508-L4509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4508-L4509) · [Before (L4546-L4547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4546-L4547)

```diff
-               case hM.lc.Synced:
-                 aM.i.Tz("syncedInvenFromServer");
+               case kV.xc.Synced:
+                 yV.h.QZ("syncedInvenFromServer");
```

#### 464. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4549-L4551` → after: `L4511-L4513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4511-L4513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4511-L4513) · [Before (L4549-L4551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4549-L4551)

```diff
-               case hM.lc.ChestOpened:
-               case hM.lc.ChestClosed:
-                 aM.i.Tz("chestToggleFromServer", MM === hM.lc.ChestOpened, !0);
+               case kV.xc.ChestOpened:
+               case kV.xc.ChestClosed:
+                 yV.h.QZ("chestToggleFromServer", VV === kV.xc.ChestOpened, !0);
```

#### 465. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4553-L4554` → after: `L4515-L4516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4515-L4516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4515-L4516) · [Before (L4553-L4554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4553-L4554)

```diff
-               case hM.lc.ChestRefreshed:
-                 aM.i.Tz("chestRefreshedFromServer");
+               case kV.xc.ChestRefreshed:
+                 yV.h.QZ("chestRefreshedFromServer");
```

#### 466. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4556-L4558` → after: `L4518-L4520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4518-L4520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4518-L4520) · [Before (L4556-L4558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4556-L4558)

```diff
-               case hM.lc.EnchantingTable:
-                 aM.i.Tz("enchantingTable", {
-                   jP: OM,
+               case kV.xc.EnchantingTable:
+                 yV.h.QZ("enchantingTable", {
+                   vp: JV,
```

#### 467. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4562-L4563` → after: `L4524-L4525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4524-L4525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4524-L4525) · [Before (L4562-L4563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4562-L4563)

```diff
-               case hM.lc.HotbarRequest:
-                 aM.i.Tz("setSelectedInventorySlotI", rM, !0);
+               case kV.xc.HotbarRequest:
+                 yV.h.QZ("setSelectedInventorySlotI", eV, !0);
```

#### 468. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4565-L4566` → after: `L4527-L4528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4527-L4528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4527-L4528) · [Before (L4565-L4566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4565-L4566)

```diff
-               case hM.lc.Scrolled:
-                 aM.i.Tz("ScrollInventorySlot", rM);
+               case kV.xc.Scrolled:
+                 yV.h.QZ("ScrollInventorySlot", eV);
```

#### 469. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4568-L4569` → after: `L4530-L4531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4530-L4531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4530-L4531) · [Before (L4568-L4569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4568-L4569)

```diff
-               case hM.lc.NumberKey:
-                 aM.i.Tz("numkeyPressed", rM + 1);
+               case kV.xc.NumberKey:
+                 yV.h.QZ("numkeyPressed", eV + 1);
```

#### 470. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4571-L4572` → after: `L4533-L4534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4533-L4534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4533-L4534) · [Before (L4571-L4572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4571-L4572)

```diff
-               case hM.lc.DropRequested:
-                 aM.i.Tz("DropInvenItem", 0 !== rM);
+               case kV.xc.DropRequested:
+                 yV.h.QZ("DropInvenItem", 0 !== eV);
```

#### 471. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4575` → after: `L4537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4537) · [Before (L4575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4575)

```diff
-                 throw new HM.d(`InventoryEvent of no kind: what ${MM}`)
+                 throw new rV.d(`InventoryEvent of no kind: what ${VV}`)
```

#### 472. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4584` → after: `L4546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4546) · [Before (L4584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4584)

```diff
-         this.Tz("shotPlayer", {
+         this.QZ("shotPlayer", {
```

#### 473. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4592-L4594` → after: `L4554-L4556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4554-L4556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4554-L4556) · [Before (L4592-L4594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4592-L4594)

```diff
-         this.Tz("closeShopOnDamaged", null), this.guard((() => {
-           aM.i.Tz("damagedByOtherPlayer", {
-             xj: null,
+         this.QZ("closeShopOnDamaged", null), this.guard((() => {
+           yV.h.QZ("damagedByOtherPlayer", {
+             fU: null,
```

#### 474. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4596` → after: `L4558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4558) · [Before (L4596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4596)

```diff
-             Zj: MM
+             aU: VV
```

#### 475. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4602-L4603` → after: `L4564-L4565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4564-L4565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4564-L4565) · [Before (L4602-L4603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4602-L4603)

```diff
-           aM.i.Tz("yourAttackHit", {
-             mO: OM,
+           yV.h.QZ("yourAttackHit", {
+             TJ: JV,
```

#### 476. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4610` → after: `L4572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4572) · [Before (L4610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4610)

```diff
-         this.localPhysicsType = MM, this.Tz("PlayerPhysicsTypeUpdate", MM)
+         this.localPhysicsType = VV, this.QZ("PlayerPhysicsTypeUpdate", VV)
```

#### 477. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4614` → after: `L4576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4576) · [Before (L4614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4614)

```diff
-           MM === mM.Cd.UPDATE ? (0, sM.f)(rM, {
+           VV === vV.Id.UPDATE ? (0, gV.i)(eV, {
```

#### 478. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4626` → after: `L4588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4588) · [Before (L4626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4626)

```diff
-         this.Tz("showBottomMessage", {
+         this.QZ("showBottomMessage", {
```

#### 479. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4633` → after: `L4595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4595) · [Before (L4633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4633)

```diff
-         this.Tz("showBottomMessage", XO.c)
+         this.QZ("showBottomMessage", mJ.b)
```

#### 480. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4637` → after: `L4599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4599) · [Before (L4637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4637)

```diff
-         !this.zoomUnshown || MM && this.zoomHeld || (this.zoomUnshown = !1, this.Tz("cameraZoomSet", this.zoom)), this.zoomHeld = MM
+         !this.zoomUnshown || VV && this.zoomHeld || (this.zoomUnshown = !1, this.QZ("cameraZoomSet", this.zoom)), this.zoomHeld = VV
```

#### 481. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4642-L4646` → after: `L4604-L4608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4604-L4608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4604-L4608) · [Before (L4642-L4646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4642-L4646)

```diff
-             xj: rM,
-             vj: iM
-           } = (0, sO.d)(DO.u, MM);
-           aM.i.Tz("damagedByOtherPlayer", {
-             xj: rM,
+             fU: eV,
+             mU: xV
+           } = (0, WJ.b)(RJ.v, VV);
+           yV.h.QZ("damagedByOtherPlayer", {
+             fU: eV,
```

#### 482. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4667` → after: `L4629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4629) · [Before (L4667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4667)

```diff
-                   mode: hM.$d.All,
+                   mode: kV.le.All,
```

#### 483. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4671-L4672` → after: `L4633-L4634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4633-L4634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4633-L4634) · [Before (L4671-L4672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4671-L4672)

```diff
-               } return OM ? iM.size > hM.yc ? {
-               mode: hM.$d.All,
+               } return JV ? xV.size > kV.Dc ? {
+               mode: kV.le.All,
```

#### 484. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4675` → after: `L4637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4637) · [Before (L4675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4675)

```diff
-               mode: hM.$d.Filter,
+               mode: kV.le.Filter,
```

#### 485. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4678` → after: `L4640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4640) · [Before (L4678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4678)

```diff
-               mode: hM.$d.Off,
+               mode: kV.le.Off,
```

#### 486. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4684` → after: `L4646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4646) · [Before (L4684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4684)

```diff
-             mode: hM.$d.All,
+             mode: kV.le.All,
```

#### 487. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4688` → after: `L4650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4650) · [Before (L4688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4688)

```diff
-         if (iM.mode === hM.$d.Off && !this.vetoSet) return;
+         if (xV.mode === kV.le.Off && !this.vetoSet) return;
```

#### 488. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4690` → after: `L4652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4652) · [Before (L4690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4690)

```diff
-         (0, hM.Mf)(rM, 0, iM.mode, iM.roots.length, OM) ? this.vetoSet = iM.mode !== hM.$d.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
+         (0, kV.Pf)(eV, 0, xV.mode, xV.roots.length, JV) ? this.vetoSet = xV.mode !== kV.le.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
```

#### 489. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4703` → after: `L4665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4665) · [Before (L4703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4703)

```diff
-           for (const iM of MM) iM.onPlayerAltAction && (rM |= 1 << hM._b.AltAction), (iM.onPlayerClick || iM.onPlayerClickUp || iM.onPlayerAttackEntity) && (rM |= 1 << hM._b.Click), iM.onPlayerChangeBlock && (rM |= 1 << hM._b.ChangeBlock), iM.onPlayerDropItem && (rM |= 1 << hM._b … [truncated]
+           for (const xV of VV) xV.onPlayerAltAction && (eV |= 1 << kV.jc.AltAction), (xV.onPlayerClick || xV.onPlayerClickUp || xV.onPlayerAttackEntity) && (eV |= 1 << kV.jc.Click), xV.onPlayerChangeBlock && (eV |= 1 << kV.jc.ChangeBlock), xV.onPlayerDropItem && (eV |= 1 << kV.jc … [truncated]
```

#### 490. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4706` → after: `L4668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4668) · [Before (L4706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4706)

```diff
-         (0 !== iM || this.hooksSet) && ((0, hM.Zf)(rM, 0, iM) ? this.hooksSet = 0 !== iM : this.onError(new Error("SetHooks didn't fit the command ring")))
+         (0 !== xV || this.hooksSet) && ((0, kV.Xf)(eV, 0, xV) ? this.hooksSet = 0 !== xV : this.onError(new Error("SetHooks didn't fit the command ring")))
```

#### 491. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4715` → after: `L4677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4677) · [Before (L4715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4715)

```diff
-         rM !== this.promptWatchSent && MM && !this.stopped() && (0, hM.xg)(MM, 0, VO[rM]) && (this.promptWatchSent = rM)
+         eV !== this.promptWatchSent && VV && !this.stopped() && (0, kV.ng)(VV, 0, SJ[eV]) && (this.promptWatchSent = eV)
```

#### 492. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4719` → after: `L4681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4681) · [Before (L4719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4719)

```diff
-         rM && MM !== this.writtenPublicLobby && ((0, hM.ig)(rM, 0, MM ? 1 : 0) ? this.writtenPublicLobby = MM : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
+         eV && VV !== this.writtenPublicLobby && ((0, kV.cg)(eV, 0, VV ? 1 : 0) ? this.writtenPublicLobby = VV : this.onError(new Error("SetPublicLobby didn't fit the command ring")))
```

#### 493. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4723` → after: `L4685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4685) · [Before (L4723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4723)

```diff
-         rM && ((0, hM.$f)(rM, 0, null === MM ? 0 : 1, null === MM ? qO : KO.encode(MM)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
+         eV && ((0, kV.Zf)(eV, 0, null === VV ? 0 : 1, null === VV ? uJ : HJ.encode(VV)) || this.onError(new Error("SetLocalDbId didn't fit the command ring")))
```

#### 494. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4733` → after: `L4695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4695) · [Before (L4733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4733)

```diff
-             this.aL(iM)
+             this.EZ(xV)
```

#### 495. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4739` → after: `L4701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4701) · [Before (L4739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4739)

```diff
-           aM.i.Tz(MM, rM)
+           yV.h.QZ(VV, eV)
```

#### 496. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4746` → after: `L4708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4708) · [Before (L4746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4746)

```diff
-           this.aL(MM)
+           this.EZ(VV)
```

#### 497. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4753` → after: `L4715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4715) · [Before (L4753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4753)

```diff
-           this.aL(MM)
+           this.EZ(VV)
```

#### 498. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4758` → after: `L4720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4720) · [Before (L4758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4758)

```diff
-         this.sessionLive = !1, this.localPhysicsType = tM.n.DEFAULT;
+         this.sessionLive = !1, this.localPhysicsType = XV.q.DEFAULT;
```

#### 499. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4788` → after: `L4750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4750) · [Before (L4788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4788)

```diff
-         void 0 !== rM && this.aL(rM)
+         void 0 !== eV && this.EZ(eV)
```

#### 500. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4798` → after: `L4760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4760) · [Before (L4798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4798)

```diff
-             iM ? this.onError(SM) : this.aL(SM)
+             xV ? this.onError(YV) : this.EZ(YV)
```

#### 501. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4806` → after: `L4768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4768) · [Before (L4806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4806)

```diff
-           this.aL(rM)
+           this.EZ(eV)
```

#### 502. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4812` → after: `L4774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4774) · [Before (L4812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4812)

```diff
-       return MM === hM.Lc ? null : String(MM)
+       return VV === kV.Sc ? null : String(VV)
```

#### 503. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4816` → after: `L4778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4778) · [Before (L4816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4816)

```diff
-       MM.bL(mM.td)
+       VV.iZ(vV.Bd)
```

#### 504. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4840-L4843` → after: `L4802-L4805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4802-L4805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4802-L4805) · [Before (L4840-L4843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4840-L4843)

```diff
-     var SS = iM(37390),
-       jS = iM(5265),
-       aS = iM(37705),
-       PS = iM(37744);
+     var xY = xV(37593),
+       JY = xV(5353),
+       YY = xV(37930),
+       UY = xV(37964);
```

#### 505. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4847` → after: `L4809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4809) · [Before (L4847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4847)

```diff
-           src: [...(0, aS.r)(MM).src],
+           src: [...(0, YY.w)(VV).src],
```

#### 506. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4852` → after: `L4814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4814) · [Before (L4852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4852)

```diff
-       return rM.load = () => (rM._preload = !0, (0, PS.c)(MM), iM()), rM
+       return eV.load = () => (eV._preload = !0, (0, UY.d)(VV), xV()), eV
```

#### 507. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4880-L4881` → after: `L4842-L4843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4842-L4843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4842-L4843) · [Before (L4880-L4881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4880-L4881)

```diff
-     var mS = iM(37501),
-       HS = iM(40291);
+     var wY = xV(37720),
+       ZY = xV(40434);
```

#### 508. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4890` → after: `L4852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4852) · [Before (L4890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4890)

```diff
-       return JS ??= new HS.e(new mS.f(dS)), JS
+       return rY ??= new ZY.c(new wY.d(kY)), rY
```

#### 509. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4899` → after: `L4861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4861) · [Before (L4899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4899)

```diff
-       OM.d.get("scriptedCameraFacing") !== MM && OM.d.set({
+       JV.b.get("scriptedCameraFacing") !== VV && JV.b.set({
```

#### 510. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4903-L4908` → after: `L4865-L4870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4865-L4870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4865-L4870) · [Before (L4903-L4908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4903-L4908)

```diff
-     var US = iM(9918),
-       GS = iM(9863),
-       CS = iM(40325),
-       eS = iM(42144),
-       bS = iM(3693);
-     const wS = Object.entries(hM.Wb).reduce(((MM, rM) => {
+     var jY = xV(9922),
+       qY = xV(9861),
+       tY = xV(40472),
+       FY = xV(42344),
+       TY = xV(3719);
+     const PY = Object.entries(kV.fc).reduce(((VV, eV) => {
```

#### 511. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4915` → after: `L4877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4877) · [Before (L4915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4915)

```diff
-       return 0 !== ((null !== (iM = MM.itemFlags[rM]) && void 0 !== iM ? iM : 0) & hM.pc.Stackable)
+       return 0 !== ((null !== (xV = VV.itemFlags[eV]) && void 0 !== xV ? xV : 0) & kV.yc.Stackable)
```

#### 512. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4929` → after: `L4891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4891) · [Before (L4929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4929)

```diff
-           return iM === hM.tc ? void 0 : iM
+           return xV === kV.Ac ? void 0 : xV
```

#### 513. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4933` → after: `L4895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4895) · [Before (L4933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4933)

```diff
-           const OM = null !== (iM = MM.itemHarvests[rM]) && void 0 !== iM ? iM : 0;
+           const JV = null !== (xV = VV.itemHarvests[eV]) && void 0 !== xV ? xV : 0;
```

#### 514. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4938-L4939` → after: `L4900-L4901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4900-L4901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4900-L4901) · [Before (L4938-L4939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4938-L4939)

```diff
-           const SM = null !== (iM = MM.itemLevels[rM]) && void 0 !== iM ? iM : hM.tc;
-           return SM !== hM.tc ? SM : null !== (OM = (0, yO.harvestsNullLevelOf)(rM)) && void 0 !== OM ? OM : void 0
+           const YV = null !== (xV = VV.itemLevels[eV]) && void 0 !== xV ? xV : kV.Ac;
+           return YV !== kV.Ac ? YV : null !== (JV = (0, bJ.harvestsNullLevelOf)(eV)) && void 0 !== JV ? JV : void 0
```

#### 515. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4960` → after: `L4922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4922) · [Before (L4960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4960)

```diff
-           if (void 0 === rM) throw new Error(`No item is named ${MM}, an item's root`);
+           if (void 0 === eV) throw new Error(`No item is named ${VV}, an item's root`);
```

#### 516. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4971-L4978` → after: `L4933-L4940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4933-L4940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4933-L4940) · [Before (L4971-L4978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4971-L4978)

```diff
-           blockFlags: RS(SM, hM.z.BYTES, hM.z.flags),
-           blockHarvestTypes: RS(SM, hM.z.BYTES, hM.z.harvestType),
-           blockHarvestLevels: RS(SM, hM.z.BYTES, hM.z.harvestLevel),
-           blockAttachedTops: pS(SM, hM.z.BYTES, hM.z.attachedTop),
-           itemFlags: RS(jM, hM.qc.BYTES, hM.qc.flags),
-           itemHarvests: RS(jM, hM.qc.BYTES, hM.qc.harvests),
-           itemLevels: RS(jM, hM.qc.BYTES, hM.qc.level)
-         }, (0, bS.j)(Object.freeze(OM)), (0, eS.h)()
+           blockFlags: MY(YV, kV.w.BYTES, kV.w.flags),
+           blockHarvestTypes: MY(YV, kV.w.BYTES, kV.w.harvestType),
+           blockHarvestLevels: MY(YV, kV.w.BYTES, kV.w.harvestLevel),
+           blockAttachedTops: zY(YV, kV.w.BYTES, kV.w.attachedTop),
+           itemFlags: MY(UV, kV.zc.BYTES, kV.zc.flags),
+           itemHarvests: MY(UV, kV.zc.BYTES, kV.zc.harvests),
+           itemLevels: MY(UV, kV.zc.BYTES, kV.zc.level)
+         }, (0, TY.l)(Object.freeze(JV)), (0, FY.f)()
```

#### 517. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4983` → after: `L4945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4945) · [Before (L4983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4983)

```diff
-         return void 0 === rM && gS.test(MM) ? void 0 === (0, bS.g)(+MM) ? void 0 : +MM : rM
+         return void 0 === eV && NY.test(VV) ? void 0 === (0, TY.g)(+VV) ? void 0 : +VV : eV
```

#### 518. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4986` → after: `L4948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4948) · [Before (L4986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4986)

```diff
-         if (!MM || MM === US.c) return US.e;
+         if (!VV || VV === jY.d) return jY.f;
```

#### 519. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4988` → after: `L4950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4950) · [Before (L4988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4988)

```diff
-         if (void 0 === rM) throw new Error(`Item ${MM} not found in registry`);
+         if (void 0 === eV) throw new Error(`Item ${VV} not found in registry`);
```

#### 520. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4995` → after: `L4957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4957) · [Before (L4995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4995)

```diff
-         return this.metas[MM] ??= (0, GS.i)((0, bS.g)(MM), MM, this.rootIdOf, (0, yO.rootMetaDescOf)(MM))
+         return this.metas[VV] ??= (0, qY.k)((0, TY.g)(VV), VV, this.rootIdOf, (0, bJ.rootMetaDescOf)(VV))
```

#### 521. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4998` → after: `L4960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4960) · [Before (L4998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4998)

```diff
-         if (!MM || MM === US.c) return 0;
+         if (!VV || VV === jY.d) return 0;
```

#### 522. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5000` → after: `L4962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4962) · [Before (L5000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5000)

```diff
-         if (void 0 === rM) throw new Error(`Invalid block name. You sent ${MM}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
+         if (void 0 === eV) throw new Error(`Invalid block name. You sent ${VV}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files`);
```

#### 523. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5004` → after: `L4966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4966) · [Before (L5004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5004)

```diff
-         if (!MM || MM === US.c) return US.c;
+         if (!VV || VV === jY.d) return jY.d;
```

#### 524. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5006` → after: `L4968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4968) · [Before (L5006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5006)

```diff
-         if (void 0 === rM) throw new Error(`Item ${MM} not found in registry`);
+         if (void 0 === eV) throw new Error(`Item ${VV} not found in registry`);
```

#### 525. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5011` → after: `L4973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4973) · [Before (L5011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5011)

```diff
-         if (MM === US.c) return 0;
+         if (VV === jY.d) return 0;
```

#### 526. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5016` → after: `L4978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4978) · [Before (L5016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5016)

```diff
-           iM = void 0 !== OM && this.isBlockId(OM) && (0, yO.rootMetaDescOf)(OM) === MM ? OM : void 0
+           xV = void 0 !== JV && this.isBlockId(JV) && (0, bJ.rootMetaDescOf)(JV) === VV ? JV : void 0
```

#### 527. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5019` → after: `L4981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4981) · [Before (L5019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5019)

```diff
-         if (!rM) throw new Error(`Invalid block name. You sent ${MM}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
+         if (!eV) throw new Error(`Invalid block name. You sent ${VV}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`);
```

#### 528. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5026` → after: `L4988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4988) · [Before (L5026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5026)

```diff
-         return 0 !== MM && (0, bS.g)(MM) || US.c
+         return 0 !== VV && (0, TY.g)(VV) || jY.d
```

#### 529. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5046` → after: `L5008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5008) · [Before (L5046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5046)

```diff
-             OM = this.options.get((0, CS.g)(iM, rM));
+             JV = this.options.get((0, tY.h)(xV, eV));
```

#### 530. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5060-L5061` → after: `L5022-L5023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5022-L5023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5022-L5023) · [Before (L5060-L5061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5060-L5061)

```diff
-           throw new Error(`ClientApi.${MM} is not available yet in the wasm client (${rM})`)
-         }(`getItemStat("${MM}")`, `a table of the stat: the wasm client answers ${Object.keys(uS).join(", ")}`), rM
+           throw new Error(`ClientApi.${VV} is not available yet in the wasm client (${eV})`)
+         }(`getItemStat("${VV}")`, `a table of the stat: the wasm client answers ${Object.keys(XY).join(", ")}`), eV
```

#### 531. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5066` → after: `L5028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5028) · [Before (L5066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5066)

```diff
-         return null !== SM && void 0 !== SM || "displayName" !== rM ? SM : this.getItemName(MM)
+         return null !== YV && void 0 !== YV || "displayName" !== eV ? YV : this.getItemName(VV)
```

#### 532. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5072` → after: `L5034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5034) · [Before (L5072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5072)

```diff
-         return this.getClientOption(`${MM}GunStats`)
+         return this.getClientOption(`${VV}GunStats`)
```

#### 533. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5079` → after: `L5041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5041) · [Before (L5079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5079)

```diff
-         return 0 !== ((null !== (rM = this.props.blockFlags[MM]) && void 0 !== rM ? rM : 0) & hM.x.Solid)
+         return 0 !== ((null !== (eV = this.props.blockFlags[VV]) && void 0 !== eV ? eV : 0) & kV.v.Solid)
```

#### 534. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5086` → after: `L5048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5048) · [Before (L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5086)

```diff
-         return 0 !== ((null !== (rM = this.props.blockFlags[MM]) && void 0 !== rM ? rM : 0) & hM.x.Fluid)
+         return 0 !== ((null !== (eV = this.props.blockFlags[VV]) && void 0 !== eV ? eV : 0) & kV.v.Fluid)
```

#### 535. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5090` → after: `L5052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5052) · [Before (L5090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5090)

```diff
-         return 0 !== ((null !== (rM = this.props.blockFlags[MM]) && void 0 !== rM ? rM : 0) & hM.x.PlaceOver)
+         return 0 !== ((null !== (eV = this.props.blockFlags[VV]) && void 0 !== eV ? eV : 0) & kV.v.PlaceOver)
```

#### 536. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5094` → after: `L5056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5056) · [Before (L5094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5094)

```diff
-         return null !== (rM = this.props.blockAttachedTops[MM]) && void 0 !== rM ? rM : 0
+         return null !== (eV = this.props.blockAttachedTops[VV]) && void 0 !== eV ? eV : 0
```

#### 537. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5111-L5113` → after: `L5073-L5075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5073-L5075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5073-L5075) · [Before (L5111-L5113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5111-L5113)

```diff
-               for (let MM = 0; MM + hM.Pd.BYTES <= jM; MM += hM.Pd.BYTES) PM.push(Object.freeze({
-                 item: rM.nameOfId(hM.Pd.item(aM, MM)),
-                 amt: hM.Pd.amount(aM, MM)
+               for (let VV = 0; VV + kV.ae.BYTES <= UV; VV += kV.ae.BYTES) pV.push(Object.freeze({
+                 item: eV.nameOfId(kV.ae.item(yV, VV)),
+                 amt: kV.ae.amount(yV, VV)
```

#### 538. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5133-L5139` → after: `L5095-L5101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5095-L5101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5095-L5101) · [Before (L5133-L5139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5133-L5139)

```diff
-     var kS = iM(41858),
-       ZS = iM(37885),
-       oS = iM(37864),
-       fS = iM(37872),
-       YS = iM(34822),
-       NS = iM(41761),
-       AS = iM(53658);
+     var gY = xV(42057),
+       DY = xV(38134),
+       iY = xV(38119),
+       CY = xV(38125),
+       aY = xV(35093),
+       oY = xV(41955),
+       cY = xV(53866);
```

#### 539. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5147` → after: `L5109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5109) · [Before (L5147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5147)

```diff
-       return rM.byteLength < mM.Fc ? rM : rM.subarray(0, mM.Fc - 1)
+       return eV.byteLength < vV.Mc ? eV : eV.subarray(0, vV.Mc - 1)
```

#### 540. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5155` → after: `L5117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5117) · [Before (L5155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5155)

```diff
-         this.keyframesVersion = xS, this.reloadFrom = null !== (MM = null === (rM = this.view()) || void 0 === rM ? void 0 : rM.version) && void 0 !== MM ? MM : xS
+         this.keyframesVersion = hY, this.reloadFrom = null !== (VV = null === (eV = this.view()) || void 0 === eV ? void 0 : eV.version) && void 0 !== VV ? VV : hY
```

#### 541. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5158` → after: `L5120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5120) · [Before (L5158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5158)

```diff
-         const rM = 1 === this.deps.core.YSM(MM);
+         const eV = 1 === this.deps.core.YyV(VV);
```

#### 542. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5179` → after: `L5141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5141) · [Before (L5179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5179)

```diff
-         this.deps.replay.setCameraMode(AS.c.indexOf(MM))
+         this.deps.replay.setCameraMode(cY.e.indexOf(VV))
```

#### 543. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5183` → after: `L5145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5145) · [Before (L5183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5183)

```diff
-         const rM = hM.v.replayViewPtr(this.deps.apiView(), 0);
+         const eV = kV.s.replayViewPtr(this.deps.apiView(), 0);
```

#### 544. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5185-L5186` → after: `L5147-L5148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5147-L5148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5147-L5148) · [Before (L5185-L5186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5185-L5186)

```diff
-         const iM = new DataView(this.deps.buffer(), rM, hM.Id.BYTES),
-           OM = hM.Id.version(iM, 0),
+         const xV = new DataView(this.deps.buffer(), eV, kV.Td.BYTES),
+           JV = kV.Td.version(xV, 0),
```

#### 545. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5189` → after: `L5151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5151) · [Before (L5189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5189)

```diff
-         const jM = hM.Id.markIn(iM, 0),
+         const UV = kV.Td.markIn(xV, 0),
```

#### 546. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5192-L5197` → after: `L5154-L5159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5154-L5159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5154-L5159) · [Before (L5192-L5197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5192-L5197)

```diff
-             state: hM.Id.state(iM, 0),
-             cameraMode: null !== (MM = AS.c[hM.Id.cameraMode(iM, 0)]) && void 0 !== MM ? MM : "recording",
-             bL: hM.Id.bL(iM, 0),
-             totalTicks: hM.Id.totalTicks(iM, 0),
-             speed: hM.Id.speed(iM, 0),
-             mark: jM === hM.Ed ? null : {
+             state: kV.Td.state(xV, 0),
+             cameraMode: null !== (VV = cY.e[kV.Td.cameraMode(xV, 0)]) && void 0 !== VV ? VV : "recording",
+             iZ: kV.Td.iZ(xV, 0),
+             totalTicks: kV.Td.totalTicks(xV, 0),
+             speed: kV.Td.speed(xV, 0),
+             mark: UV === kV.Qd ? null : {
```

#### 547. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5199` → after: `L5161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5161) · [Before (L5199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5199)

```diff
-               outTick: hM.Id.markOut(iM, 0)
+               outTick: kV.Td.markOut(xV, 0)
```

#### 548. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5201` → after: `L5163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5163) · [Before (L5201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5201)

```diff
-             editVersion: hM.Id.editVersion(iM, 0)
+             editVersion: kV.Td.editVersion(xV, 0)
```

#### 549. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5209` → after: `L5171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5171) · [Before (L5209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5209)

```diff
-         const rM = this.reloadFrom === xS && MM.state !== mM.hd.Cropping && MM.state !== mM.hd.None,
+         const eV = this.reloadFrom === hY && VV.state !== vV.qd.Cropping && VV.state !== vV.qd.None,
```

#### 550. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5214` → after: `L5176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5176) · [Before (L5214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5214)

```diff
-         } = this.deps, SM = OM.ASM(), jM = OM.qd(), aM = [];
+         } = this.deps, YV = JV.UyV(), UV = JV.xB(), yV = [];
```

#### 551. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5216` → after: `L5178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5178) · [Before (L5216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5216)

```diff
-           const MM = new DataView(this.deps.buffer(), jM, SM * mM.uc);
+           const VV = new DataView(this.deps.buffer(), UV, YV * vV.Bc);
```

#### 552. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5218` → after: `L5180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5180) · [Before (L5218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5218)

```diff
-             const iM = rM * mM.uc,
+             const xV = eV * vV.Bc,
```

#### 553. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5221-L5224` → after: `L5183-L5186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5183-L5186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5183-L5186) · [Before (L5221-L5224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5221-L5224)

```diff
-               bL: MM.getUint32(iM + mM.Ec, !0),
-               position: [OM(mM.Cc), OM(mM.Cc + 8), OM(mM.Cc + 16)],
-               direction: [OM(mM.vc), OM(mM.vc + 8), OM(mM.vc + 16)],
-               easing: [OM(mM.zc), OM(mM.zc + 8), OM(mM.zc + 16), OM(mM.zc + 24)]
+               iZ: VV.getUint32(xV + vV.Lc, !0),
+               position: [JV(vV.Kc), JV(vV.Kc + 8), JV(vV.Kc + 16)],
+               direction: [JV(vV.Fc), JV(vV.Fc + 8), JV(vV.Fc + 16)],
+               easing: [JV(vV.Gc), JV(vV.Gc + 8), JV(vV.Gc + 16), JV(vV.Gc + 24)]
```

#### 554. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5232` → after: `L5194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5194) · [Before (L5232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5232)

```diff
-           rM = [hM.v.eye(MM, 0, 0), hM.v.eye(MM, 0, 1), hM.v.eye(MM, 0, 2)];
+           eV = [kV.s.eye(VV, 0, 0), kV.s.eye(VV, 0, 1), kV.s.eye(VV, 0, 2)];
```

#### 555. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5236` → after: `L5198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5198) · [Before (L5236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5236)

```diff
-         }(hM.v.heading(MM, 0), hM.v.pitch(MM, 0)))
+         }(kV.s.heading(VV, 0), kV.s.pitch(VV, 0)))
```

#### 556. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5239` → after: `L5201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5201) · [Before (L5239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5239)

```diff
-         return this.deps.replay.setKeyframe(MM.bL, Float64Array.from([...MM.position, ...MM.direction, ...MM.easing]))
+         return this.deps.replay.setKeyframe(VV.iZ, Float64Array.from([...VV.position, ...VV.direction, ...VV.easing]))
```

#### 557. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5249` → after: `L5211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5211) · [Before (L5249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5249)

```diff
-         return this.deps.replay.setMark(null !== (rM = null === MM || void 0 === MM ? void 0 : MM.inTick) && void 0 !== rM ? rM : -1, null !== (iM = null === MM || void 0 === MM ? void 0 : MM.outTick) && void 0 !== iM ? iM : -1)
+         return this.deps.replay.setMark(null !== (eV = null === VV || void 0 === VV ? void 0 : VV.inTick) && void 0 !== eV ? eV : -1, null !== (xV = null === VV || void 0 === VV ? void 0 : VV.outTick) && void 0 !== xV ? xV : -1)
```

#### 558. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5266` → after: `L5228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5228) · [Before (L5266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5266)

```diff
-         return null !== iM && (0, hM.Ef)(iM, 0, MM, null === rM ? vS : FS.encode(rM))
+         return null !== xV && (0, kV.Cf)(xV, 0, VV, null === eV ? lY : LY.encode(eV))
```

#### 559. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5271` → after: `L5233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5233) · [Before (L5271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5271)

```diff
-         return null !== SM && (0, hM.wf)(SM, 0, rM, iM, jM, FS.encode(MM))
+         return null !== YV && (0, kV.yf)(YV, 0, eV, xV, UV, LY.encode(VV))
```

#### 560. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5275` → after: `L5237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5237) · [Before (L5275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5275)

```diff
-         return null !== SM && (0, hM.Gf)(SM, 0, MM, rM, Math.max(0, iM), FS.encode(OM))
+         return null !== YV && (0, kV.Ff)(YV, 0, VV, eV, Math.max(0, xV), LY.encode(JV))
```

#### 561. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5283` → after: `L5245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5245) · [Before (L5283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5283)

```diff
-                 return MM + nO.tb + (null !== (iM = null === rM || void 0 === rM ? void 0 : rM.byteLength) && void 0 !== iM ? iM : 0)
+                 return VV + yJ.Db + (null !== (xV = null === eV || void 0 === eV ? void 0 : eV.byteLength) && void 0 !== xV ? xV : 0)
```

#### 562. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5290` → after: `L5252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5252) · [Before (L5290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5290)

```diff
-               OM.setUint16(SM, null !== (jM = null === aM || void 0 === aM ? void 0 : aM.byteLength) && void 0 !== jM ? jM : mM.Fc, !0), SM += nO.tb, null !== aM && (iM.set(aM, SM), SM += aM.byteLength)
+               JV.setUint16(YV, null !== (UV = null === yV || void 0 === yV ? void 0 : yV.byteLength) && void 0 !== UV ? UV : vV.Mc, !0), YV += yJ.Db, null !== yV && (xV.set(yV, YV), YV += yV.byteLength)
```

#### 563. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5294` → after: `L5256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5256) · [Before (L5294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5294)

```diff
-         return null !== jM && (0, hM.Af)(jM, 0, null !== (OM = MM.id) && void 0 !== OM ? OM : hM.Nc, null !== (SM = rM.id) && void 0 !== SM ? SM : hM.Nc, aM)
+         return null !== UV && (0, kV.Bf)(UV, 0, null !== (JV = VV.id) && void 0 !== JV ? JV : kV.Uc, null !== (YV = eV.id) && void 0 !== YV ? YV : kV.Uc, yV)
```

#### 564. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5305` → after: `L5267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5267) · [Before (L5305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5305)

```diff
-         this.deps.core.xSM()
+         this.deps.core.yyV()
```

#### 565. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5323` → after: `L5285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5285) · [Before (L5323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5323)

```diff
-         }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (rM = MM.now) && void 0 !== rM ? rM : () => performance.now()
+         }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (eV = VV.now) && void 0 !== eV ? eV : () => performance.now()
```

#### 566. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5334` → after: `L5296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5296) · [Before (L5334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5334)

```diff
-         this.live && (this.viewerShown(!0 === (null === (rM = (iM = this.deps).viewerOpen) || void 0 === rM ? void 0 : rM.call(iM))), this.deps.client.recorderSession(MM, (0, AS.e)()))
+         this.live && (this.viewerShown(!0 === (null === (eV = (xV = this.deps).viewerOpen) || void 0 === eV ? void 0 : eV.call(xV))), this.deps.client.recorderSession(VV, (0, cY.g)()))
```

#### 567. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5341` → after: `L5303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5303) · [Before (L5341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5341)

```diff
-         this.live && (this.state.recording || !0 !== (null === (MM = (rM = this.deps).viewerOpen) || void 0 === MM ? void 0 : MM.call(rM))) ? this.deps.client.recorderControl(mM.Sc.ToggleRecording) : this.deps.notify(fS.c.closeViewerFirst)
+         this.live && (this.state.recording || !0 !== (null === (VV = (eV = this.deps).viewerOpen) || void 0 === VV ? void 0 : VV.call(eV))) ? this.deps.client.recorderControl(vV.$c.ToggleRecording) : this.deps.notify(CY.b.closeViewerFirst)
```

#### 568. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5344` → after: `L5306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5306) · [Before (L5344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5344)

```diff
-         this.live ? this.deps.client.recorderControl(mM.Sc.SaveClip) : this.deps.notify(fS.c.clippingNotOn)
+         this.live ? this.deps.client.recorderControl(vV.$c.SaveClip) : this.deps.notify(CY.b.clippingNotOn)
```

#### 569. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5347` → after: `L5309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5309) · [Before (L5347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5347)

```diff
-         this.live && this.deps.client.recorderControl(MM ? mM.Sc.ViewerOpened : mM.Sc.ViewerClosed)
+         this.live && this.deps.client.recorderControl(VV ? vV.$c.ViewerOpened : vV.$c.ViewerClosed)
```

#### 570. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5382` → after: `L5344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5344) · [Before (L5382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5382)

```diff
-         } = this.deps, SM = fS.c;
+         } = this.deps, YV = CY.b;
```

#### 571. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5384` → after: `L5346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5346) · [Before (L5384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5384)

```diff
-           case mM.Qc.RecordingStarted:
+           case vV._c.RecordingStarted:
```

#### 572. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5391-L5392` → after: `L5353-L5354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5353-L5354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5353-L5354) · [Before (L5391-L5392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5391-L5392)

```diff
-           case mM.Qc.RecordingStopped:
-             this.stopRecording(), OM(SM.recordingStopped), this.saveState(mM._c.Recording, "saving");
+           case vV._c.RecordingStopped:
+             this.stopRecording(), JV(YV.recordingStopped), this.saveState(vV.hd.Recording, "saving");
```

#### 573. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5394` → after: `L5356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5356) · [Before (L5394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5394)

```diff
-           case mM.Qc.RecordingDiscarded:
+           case vV._c.RecordingDiscarded:
```

#### 574. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5397` → after: `L5359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5359) · [Before (L5397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5397)

```diff
-           case mM.Qc.RecordingTurnedOff:
+           case vV._c.RecordingTurnedOff:
```

#### 575. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5400` → after: `L5362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5362) · [Before (L5400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5400)

```diff
-           case mM.Qc.LimitReached:
+           case vV._c.LimitReached:
```

#### 576. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5403-L5404` → after: `L5365-L5366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5365-L5366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5365-L5366) · [Before (L5403-L5404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5403-L5404)

```diff
-           case mM.Qc.ClipSaved:
-             this.saveState(mM._c.Clip, "saving");
+           case vV._c.ClipSaved:
+             this.saveState(vV.hd.Clip, "saving");
```

#### 577. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5406` → after: `L5368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5368) · [Before (L5406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5406)

```diff
-           case mM.Qc.ClipEmpty:
+           case vV._c.ClipEmpty:
```

#### 578. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5409` → after: `L5371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5371) · [Before (L5409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5409)

```diff
-           case mM.Qc.ClippingNotOn:
+           case vV._c.ClippingNotOn:
```

#### 579. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5412` → after: `L5374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5374) · [Before (L5412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5412)

```diff
-           case mM.Qc.Disallowed:
+           case vV._c.Disallowed:
```

#### 580. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5415` → after: `L5377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5377) · [Before (L5415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5415)

```diff
-           case mM.Qc.ClippingOn:
+           case vV._c.ClippingOn:
```

#### 581. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5422` → after: `L5384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5384) · [Before (L5422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5422)

```diff
-           case mM.Qc.ClippingOff:
+           case vV._c.ClippingOff:
```

#### 582. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5429` → after: `L5391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5391) · [Before (L5429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5429)

```diff
-           case mM.Qc.ClipSettingsChanged:
+           case vV._c.ClipSettingsChanged:
```

#### 583. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5435` → after: `L5397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5397) · [Before (L5435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5435)

```diff
-           case mM.Qc.SaveBusy:
+           case vV._c.SaveBusy:
```

#### 584. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5438` → after: `L5400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5400) · [Before (L5438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5438)

```diff
-           case mM.Qc.CloseViewerFirst:
+           case vV._c.CloseViewerFirst:
```

#### 585. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5443` → after: `L5405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5405) · [Before (L5443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5443)

```diff
-         this.deps.download(rM), this.saveState(MM, "done"), this.deps.notify(MM === mM._c.Clip ? fS.c.clipSaved : fS.c.recordingSaved)
+         this.deps.download(eV), this.saveState(VV, "done"), this.deps.notify(VV === vV.hd.Clip ? CY.b.clipSaved : CY.b.recordingSaved)
```

#### 586. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5446` → after: `L5408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5408) · [Before (L5446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5446)

```diff
-         this.saveState(MM, "failed"), this.deps.notify(MM === mM._c.Clip ? fS.c.clipFailed : fS.c.recordingFailed)
+         this.saveState(VV, "failed"), this.deps.notify(VV === vV.hd.Clip ? CY.b.clipFailed : CY.b.recordingFailed)
```

#### 587. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5468` → after: `L5430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5430) · [Before (L5468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5468)

```diff
-         if (rM + nO.tb > iM) return null;
+         if (eV + yJ.Db > xV) return null;
```

#### 588. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5470` → after: `L5432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5432) · [Before (L5470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5470)

```diff
-         if (rM += nO.tb, OM !== mM.Fc) {
+         if (eV += yJ.Db, JV !== vV.Mc) {
```

#### 589. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5475` → after: `L5437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5437) · [Before (L5475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5475)

```diff
-       return rM === iM ? SM : null
+       return eV === xV ? YV : null
```

#### 590. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5492` → after: `L5454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5454) · [Before (L5492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5492)

```diff
-               case mM.cd.Cleared:
+               case vV.ld.Cleared:
```

#### 591. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5494` → after: `L5456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5456) · [Before (L5494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5494)

```diff
-               case mM.cd.Text:
+               case vV.ld.Text:
```

#### 592. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5496` → after: `L5458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5458) · [Before (L5496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5496)

```diff
-               case mM.cd.Int:
+               case vV.ld.Int:
```

#### 593. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5498` → after: `L5460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5460) · [Before (L5498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5498)

```diff
-               case mM.cd.Double:
+               case vV.ld.Double:
```

#### 594. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5513` → after: `L5475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5475) · [Before (L5513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5513)

```diff
-               case mM.fd.FlyingText: {
+               case vV.od.FlyingText: {
```

#### 595. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5517-L5518` → after: `L5479-L5480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5479-L5480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5479-L5480) · [Before (L5517-L5518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5517-L5518)

```diff
-                   Yi: iM,
-                   oi: OM,
+                   Sx: xV,
+                   ux: JV,
```

#### 596. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5523` → after: `L5485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5485) · [Before (L5523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5523)

```diff
-               case mM.fd.PlayerKilled: {
+               case vV.od.PlayerKilled: {
```

#### 597. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5533` → after: `L5495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5495) · [Before (L5533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5533)

```diff
-               case mM.fd.Killfeed: {
+               case vV.od.Killfeed: {
```

#### 598. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5575` → after: `L5537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5537) · [Before (L5575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5575)

```diff
-       return (MM, rM, jM, aM) => !(MM < mM.Y.ReplayFailed || MM > mM.Y.RecorderEvent) && (iM = rM, OM = !0, (0, hM.ge)(MM, rM, jM, aM, SM) && OM)
+       return (VV, eV, UV, yV) => !(VV < vV.hb.ReplayFailed || VV > vV.hb.RecorderEvent) && (xV = eV, JV = !0, (0, kV.se)(VV, eV, UV, yV, YV) && JV)
```

#### 599. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5591` → after: `L5553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5553) · [Before (L5591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5591)

```diff
-               if (SM + mM.U > iM.byteLength) throw new Error(`the recorder module's events end mid-head at ${SM}`);
+               if (YV + vV.db > xV.byteLength) throw new Error(`the recorder module's events end mid-head at ${YV}`);
```

#### 600. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5595-L5597` → after: `L5557-L5559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5557-L5559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5557-L5559) · [Before (L5595-L5597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5595-L5597)

```diff
-                 PM = SM + mM.U;
-               if (PM + aM > iM.byteLength || !rM(jM, OM, PM, aM)) throw new Error(`the recorder module wrote a malformed event ${jM} (${aM} bytes) at ${SM}`);
-               SM = PM + (0, mM.oe)(aM)
+                 pV = YV + vV.db;
+               if (pV + yV > xV.byteLength || !eV(UV, JV, pV, yV)) throw new Error(`the recorder module wrote a malformed event ${UV} (${yV} bytes) at ${YV}`);
+               YV = pV + (0, vV.ze)(yV)
```

#### 601. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5615` → after: `L5577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5577) · [Before (L5615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5615)

```diff
-         const iM = null !== (rM = this.parts.get(MM.save)) && void 0 !== rM ? rM : [];
+         const xV = null !== (eV = this.parts.get(VV.save)) && void 0 !== eV ? eV : [];
```

#### 602. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5639` → after: `L5601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5601) · [Before (L5639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5639)

```diff
-       return iM.e(72).then((() => iM(63239)))
+       return xV.e(72).then((() => xV(63638)))
```

#### 603. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5664` → after: `L5626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5626) · [Before (L5664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5664)

```diff
-             rM === mM._c.Edited ? null === (OM = this.viewer) || void 0 === OM || OM.saveDone(iM) : this.recorder.fileReady(rM, iM)
+             eV === vV.hd.Edited ? null === (JV = this.viewer) || void 0 === JV || JV.saveDone(xV) : this.recorder.fileReady(eV, xV)
```

#### 604. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5696` → after: `L5658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5658) · [Before (L5696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5696)

```diff
-               case mM.Qc.FileDiscarded:
+               case vV._c.FileDiscarded:
```

#### 605. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5699` → after: `L5661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5661) · [Before (L5699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5699)

```diff
-               case mM.Qc.SaveFailed:
+               case vV._c.SaveFailed:
```

#### 606. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5702` → after: `L5664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5664) · [Before (L5702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5702)

```diff
-               case mM.Qc.SaveBusy:
+               case vV._c.SaveBusy:
```

#### 607. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5725` → after: `L5687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5687) · [Before (L5725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5725)

```diff
-         return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (MM = this.deps.loadViewer) && void 0 !== MM ? MM : rj)().catch((MM => {
+         return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (VV = this.deps.loadViewer) && void 0 !== VV ? VV : OY)().catch((VV => {
```

#### 608. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5743` → after: `L5705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5705) · [Before (L5743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5743)

```diff
-           MM > 0 && this.recorder.bL()
+           VV > 0 && this.recorder.iZ()
```

#### 609. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5755` → after: `L5717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5717) · [Before (L5755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5755)

```diff
-         MM === mM._c.Edited ? null === (rM = this.viewer) || void 0 === rM || rM.saveFailed(!1) : this.recorder.failed(MM)
+         VV === vV.hd.Edited ? null === (eV = this.viewer) || void 0 === eV || eV.saveFailed(!1) : this.recorder.failed(VV)
```

#### 610. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5758-L5761` → after: `L5720-L5723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5720-L5723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5720-L5723) · [Before (L5758-L5761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5758-L5761)

```diff
-     var Oj = iM(41704),
-       Sj = iM(41712),
-       jj = iM(5204),
-       aj = iM(42022);
+     var eU = xV(41885),
+       xU = xV(41909),
+       JU = xV(5307),
+       YU = xV(42210);
```

#### 611. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5768` → after: `L5730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5730) · [Before (L5768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5768)

```diff
-         const iM = (0, YM.u)(0, performance.now()),
+         const xV = (0, cV.s)(0, performance.now()),
```

#### 612. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5770-L5771` → after: `L5732-L5733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5732-L5733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5732-L5733) · [Before (L5770-L5771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5770-L5771)

```diff
-         (0, aj.j)((() => {
-           (0, YM.z)(mM.tb.MouseDown, 0, 0, 0, iM), (0, YM.z)(mM.tb.MouseMove, 0, MM * OM, rM * OM, 0), (0, YM.z)(mM.tb.MouseUp, 0, 0, 0, iM)
+         (0, YU.f)((() => {
+           (0, cV.x)(vV.Gb.MouseDown, 0, 0, 0, xV), (0, cV.x)(vV.Gb.MouseMove, 0, VV * JV, eV * JV, 0), (0, cV.x)(vV.Gb.MouseUp, 0, 0, 0, xV)
```

#### 613. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5776` → after: `L5738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5738) · [Before (L5776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5776)

```diff
-         this.analogue[0] = null !== (rM = null === MM || void 0 === MM ? void 0 : MM.x) && void 0 !== rM ? rM : 0, this.analogue[1] = null !== (iM = null === MM || void 0 === MM ? void 0 : MM.y) && void 0 !== iM ? iM : 0, this.send()
+         this.analogue[0] = null !== (eV = null === VV || void 0 === VV ? void 0 : VV.x) && void 0 !== eV ? eV : 0, this.analogue[1] = null !== (xV = null === VV || void 0 === VV ? void 0 : VV.y) && void 0 !== xV ? xV : 0, this.send()
```

#### 614. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5779-L5780` → after: `L5741-L5742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5741-L5742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5741-L5742) · [Before (L5779-L5780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5779-L5780)

```diff
-         const iM = "freeCamUp" === MM ? hM.Nb.Up : hM.Nb.Down;
-         this.keys = rM ? this.keys | iM : this.keys & ~iM, this.send()
+         const xV = "freeCamUp" === VV ? kV.Zb.Up : kV.Zb.Down;
+         this.keys = eV ? this.keys | xV : this.keys & ~xV, this.send()
```

#### 615. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5787` → after: `L5749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5749) · [Before (L5787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5787)

```diff
-         this.unsent = null !== MM && !(0, hM.Ae)(MM, 0, this.analogue, this.keys)
+         this.unsent = null !== VV && !(0, kV.Ge)(VV, 0, this.analogue, this.keys)
```

#### 616. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5790-L5796` → after: `L5752-L5758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5752-L5758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5752-L5758) · [Before (L5790-L5796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5790-L5796)

```diff
-     var nj = iM(3961),
-       Qj = iM(766),
-       zj = iM(255),
-       Lj = iM(83),
-       mj = iM(34956),
-       Hj = iM(746),
-       hj = iM(37529);
+     var yU = xV(3992),
+       pU = xV(767),
+       QU = xV(313),
+       nU = xV(99),
+       wU = xV(35240),
+       ZU = xV(752),
+       vU = xV(37749);
```

#### 617. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5799-L5800` → after: `L5761-L5762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5761-L5762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5761-L5762) · [Before (L5799-L5800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5799-L5800)

```diff
-       const MM = OM.d.get("clientEscMenuOptions"),
-         rM = (0, Qj.t)(MM);
+       const VV = JV.b.get("clientEscMenuOptions"),
+         eV = (0, pU.r)(VV);
```

#### 618. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5802` → after: `L5764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5764) · [Before (L5802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5802)

```diff
-         mouse: (0, Lj.isMobile)() ? rM : MM.mouseSensitivity,
+         mouse: (0, nU.isMobile)() ? eV : VV.mouseSensitivity,
```

#### 619. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5809-L5810` → after: `L5771-L5772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5771-L5772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5771-L5772) · [Before (L5809-L5810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5809-L5810)

```diff
-       const MM = OM.d.get("clientEscMenuOptions"),
-         rM = OM.d.get("isTouchScreen") ? (0, Qj.t)(MM) : MM.mouseSensitivity,
+       const VV = JV.b.get("clientEscMenuOptions"),
+         eV = JV.b.get("isTouchScreen") ? (0, pU.r)(VV) : VV.mouseSensitivity,
```

#### 620. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5812` → after: `L5774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5774) · [Before (L5812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5812)

```diff
-       return iM > 0 ? rM / iM : 1
+       return xV > 0 ? eV / xV : 1
```

#### 621. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5817` → after: `L5779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5779) · [Before (L5817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5817)

```diff
-         MM.setSoundPrefs(OM.d.get("soundVolume"), OM.d.get("soundOnFromAd"))
+         VV.setSoundPrefs(JV.b.get("soundVolume"), JV.b.get("soundOnFromAd"))
```

#### 622. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5826` → after: `L5788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5788) · [Before (L5826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5826)

```diff
-         } = OM.d.get("clientEscMenuOptions"), PM = {
+         } = JV.b.get("clientEscMenuOptions"), pV = {
```

#### 623. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5833` → after: `L5795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5795) · [Before (L5833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5833)

```diff
-         iM && (0, mM.ae)(iM) === (0, mM.ae)(PM) && iM.fogChunks === jM || (iM = PM, MM.setEnvPrefs(iM))
+         xV && (0, vV.fe)(xV) === (0, vV.fe)(pV) && xV.fogChunks === UV || (xV = pV, VV.setEnvPrefs(xV))
```

#### 624. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5838` → after: `L5800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5800) · [Before (L5838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5838)

```diff
-           const MM = OM.d.get("clientEscMenuOptions");
+           const VV = JV.b.get("clientEscMenuOptions");
```

#### 625. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5840` → after: `L5802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5802) · [Before (L5840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5840)

```diff
-             nametagsHidden: OM.d.get("areNametagsHidden"),
+             nametagsHidden: JV.b.get("areNametagsHidden"),
```

#### 626. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5844` → after: `L5806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5806) · [Before (L5844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5844)

```diff
-             ezTowering: MM.ezTowering ? (0, zj.f)() : null,
+             ezTowering: VV.ezTowering ? (0, QU.d)() : null,
```

#### 627. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5847` → after: `L5809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5809) · [Before (L5847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5847)

```diff
-             touchWalk: !(0, hj.e)(),
+             touchWalk: !(0, vU.g)(),
```

#### 628. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5849` → after: `L5811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5811) · [Before (L5849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5849)

```diff
-             edgeGuardLong: (0, Hj.b)(),
+             edgeGuardLong: (0, ZU.d)(),
```

#### 629. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5853` → after: `L5815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5815) · [Before (L5853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5853)

```diff
-         (0, gM.Td)(jM, rM) || (jM = rM, MM.setUiPrefs(rM))
+         (0, MV.Xd)(UV, eV) || (UV = eV, VV.setUiPrefs(eV))
```

#### 630. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5858` → after: `L5820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5820) · [Before (L5858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5858)

```diff
-         (0, gM.Td)(nM, rM) || (nM = rM, MM.setLookPrefs(rM))
+         (0, MV.Xd)(QV, eV) || (QV = eV, VV.setLookPrefs(eV))
```

#### 631. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5861` → after: `L5823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5823) · [Before (L5861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5861)

```diff
-       const zM = [(0, aM.j)("appManagerUpdated|soundVolume", rM), (0, aM.j)("appManagerUpdated|soundOnFromAd", rM), (0, aM.j)("appManagerUpdated|clientEscMenuOptions", (() => {
+       const wV = [(0, yV.i)("appManagerUpdated|soundVolume", eV), (0, yV.i)("appManagerUpdated|soundOnFromAd", eV), (0, yV.i)("appManagerUpdated|clientEscMenuOptions", (() => {
```

#### 632. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5863` → after: `L5825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5825) · [Before (L5863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5863)

```diff
-       })), (0, aM.j)(hj.c, PM), (0, aM.j)("appManagerUpdated|enabledDebugFeatures", SM), (0, aM.j)("appManagerUpdated|areNametagsHidden", PM), (0, aM.j)("appManagerUpdated|showDistantNametags", PM)];
+       })), (0, yV.i)(vU.d, pV), (0, yV.i)("appManagerUpdated|enabledDebugFeatures", YV), (0, yV.i)("appManagerUpdated|areNametagsHidden", pV), (0, yV.i)("appManagerUpdated|showDistantNametags", pV)];
```

#### 633. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5868-L5869` → after: `L5830-L5831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5830-L5831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5830-L5831) · [Before (L5868-L5869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5868-L5869)

```diff
-     var lj = iM(41998),
-       Ej = iM(42006);
+     var EU = xV(42184),
+       BU = xV(42192);
```

#### 634. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5910` → after: `L5872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5872) · [Before (L5910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5910)

```diff
-           0 !== PM ? (new Uint8Array(rM.buffer, PM, aM.length).set(aM), MM.vSM(iM.headLen, OM, SM) && (jM = "sealing")) : jM = "tooLarge"
+           0 !== pV ? (new Uint8Array(eV.buffer, pV, yV.length).set(yV), VV.QyV(xV.headLen, JV, YV) && (UV = "sealing")) : UV = "tooLarge"
```

#### 635. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5919` → after: `L5881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5881) · [Before (L5919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5919)

```diff
-             rM = MM.FSM(), rM > 0 && (iM = MM.BSM())
+             eV = VV.nyV(), eV > 0 && (xV = VV.wyV())
```

#### 636. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5931` → after: `L5893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5893) · [Before (L5931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5931)

```diff
-           MM.XSM()
+           VV.ZyV()
```

#### 637. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5940` → after: `L5902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5902) · [Before (L5940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5940)

```diff
-           MM.XSM()
+           VV.ZyV()
```

#### 638. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5967` → after: `L5929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5929) · [Before (L5967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5967)

```diff
-         if (MM.busy() || !gj(MM.memoryBytes(), MM.clipSeconds())) return "ML";
+         if (VV.busy() || !NU(VV.memoryBytes(), VV.clipSeconds())) return "ZZ";
```

#### 639. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5975` → after: `L5937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5937) · [Before (L5975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5975)

```diff
-         if (!iM) return MM.trapped() ? "trapped" : MM.dh() ? "dh" : "failed";
+         if (!xV) return VV.trapped() ? "trapped" : VV.ik() ? "ik" : "failed";
```

#### 640. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5982` → after: `L5944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5944) · [Before (L5982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5982)

```diff
-       Wj = new Set([mM.Sc.ToggleRecording, mM.Sc.SaveClip]);
+       GU = new Set([vV.$c.ToggleRecording, vV.$c.SaveClip]);
```

#### 641. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5987` → after: `L5949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5949) · [Before (L5987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5987)

```diff
-       oj = (0, Ej.e)("dh"),
+       iU = (0, BU.e)("ik"),
```

#### 642. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6152` → after: `L6114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6114) · [Before (L6152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6152)

```diff
-         }, (0, lj.d)(this, za)[za](mM.Oc.Prefs, tj(MM, rM)), MM && (0, lj.d)(this, Aj)[Aj] && (0, lj.d)(this, ra)[ra]()
+         }, (0, EU.d)(this, Qy)[Qy](vV.Yc.Prefs, AU(VV, eV)), VV && (0, EU.d)(this, cU)[cU] && (0, EU.d)(this, OU)[OU]()
```

#### 643. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6158-L6159` → after: `L6120-L6121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6120-L6121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6120-L6121) · [Before (L6158-L6159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6158-L6159)

```diff
-         if (Wj.has(MM)) return (0, lj.d)(this, Dj)[Dj] ? void(0, lj.d)(this, za)[za](mM.Oc.Control, rM) : ((0, lj.d)(this, Fj)[Fj] = rM, void(0, lj.d)(this, ra)[ra]());
-         (0, lj.d)(this, oj)[oj] || this.deps.coreCommand(mM.Oc.Control, rM)
+         if (GU.has(VV)) return (0, EU.d)(this, RU)[RU] ? void(0, EU.d)(this, Qy)[Qy](vV.Yc.Control, eV) : ((0, EU.d)(this, LU)[LU] = eV, void(0, EU.d)(this, OU)[OU]());
+         (0, EU.d)(this, iU)[iU] || this.deps.coreCommand(vV.Yc.Control, eV)
```

#### 644. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6165` → after: `L6127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6127) · [Before (L6165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6165)

```diff
-         (0, lj.d)(this, za)[za](mM.Oc.FilePartDone, function(MM, rM) {
+         (0, EU.d)(this, Qy)[Qy](vV.Yc.FilePartDone, function(VV, eV) {
```

#### 645. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6172` → after: `L6134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6134) · [Before (L6172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6172)

```diff
-         return (0, lj.d)(this, za)[za](mM.Oc.FileDone, function(MM) {
+         return (0, EU.d)(this, Qy)[Qy](vV.Yc.FileDone, function(VV) {
```

#### 646. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6187` → after: `L6149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6149) · [Before (L6187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6187)

```diff
-         if (!rM || !iM) return void(null === MM || void 0 === MM || MM.resolve((0, lj.d)(this, Zj)[Zj] ? "trapped" : "ML"));
+         if (!eV || !xV) return void(null === VV || void 0 === VV || VV.resolve((0, EU.d)(this, DU)[DU] ? "trapped" : "ZZ"));
```

#### 647. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6190` → after: `L6152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6152) · [Before (L6190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6190)

```diff
-         } = this.deps, SM = OM.qSM(2);
+         } = this.deps, YV = JV.kyV(2);
```

#### 648. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6196` → after: `L6158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6158) · [Before (L6196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6196)

```diff
-           QM = null !== (LM = MM[SM >>> 2]) && void 0 !== LM ? LM : 0, zM = null !== (mM = MM[1 + (SM >>> 2)]) && void 0 !== mM ? mM : 0
+           nV = null !== (ZV = VV[YV >>> 2]) && void 0 !== ZV ? ZV : 0, wV = null !== (vV = VV[1 + (YV >>> 2)]) && void 0 !== vV ? vV : 0
```

#### 649. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6203` → after: `L6165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6165) · [Before (L6203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6203)

```diff
-           jM = rM.step(), aM = rM.TSM(), PM = rM.VSM(), nM = rM.cSM()
+           UV = eV.step(), yV = eV.byV(), pV = eV.EyV(), QV = eV.ByV()
```

#### 650. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6205` → after: `L6167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6167) · [Before (L6205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6205)

```diff
-           if (!(0, lj.d)(this, Ea)[Ea](HM)) throw null === MM || void 0 === MM || MM.resolve("ML"), HM;
+           if (!(0, EU.d)(this, By)[By](rV)) throw null === VV || void 0 === VV || VV.resolve("ZZ"), rV;
```

#### 651. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6209` → after: `L6171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6171) · [Before (L6209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6209)

```diff
-           const MM = OM.MjM(2, jM);
+           const VV = JV.jyV(2, UV);
```

#### 652. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6217` → after: `L6179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6179) · [Before (L6217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6217)

```diff
-             throw null === MM || void 0 === MM || MM.resolve("ML"), HM
+             throw null === VV || void 0 === VV || VV.resolve("ZZ"), rV
```

#### 653. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6224` → after: `L6186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6186) · [Before (L6224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6224)

```diff
-         if (!(0, lj.d)(this, cj)[cj]() && !(0, lj.d)(this, Ma)[Ma]()) return (0, lj.d)(this, La)[La](), void(null === MM || void 0 === MM || MM.resolve("ML"));
+         if (!(0, EU.d)(this, IU)[IU]() && !(0, EU.d)(this, dU)[dU]()) return (0, EU.d)(this, ny)[ny](), void(null === VV || void 0 === VV || VV.resolve("ZZ"));
```

#### 654. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6233` → after: `L6195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6195) · [Before (L6233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6233)

```diff
-       (0, lj.d)(this, za)[za](mM.Oc.Session, function(MM) {
+       (0, EU.d)(this, Qy)[Qy](vV.Yc.Session, function(VV) {
```

#### 655. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6285` → after: `L6247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6247) · [Before (L6285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6285)

```diff
-       if (!(0, lj.d)(this, Dj)[Dj]) return Promise.resolve((0, lj.d)(this, Zj)[Zj] ? "trapped" : "ML");
+       if (!(0, EU.d)(this, RU)[RU]) return Promise.resolve((0, EU.d)(this, DU)[DU] ? "trapped" : "ZZ");
```

#### 656. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6314` → after: `L6276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6276) · [Before (L6314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6314)

```diff
-           SM = (0, lj.d)(this, la)[la]((() => OM.rjM()));
+           YV = (0, EU.d)(this, Ey)[Ey]((() => JV.qyV()));
```

#### 657. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6316-L6317` → after: `L6278-L6279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6278-L6279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6278-L6279) · [Before (L6316-L6317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6316-L6317)

```diff
-         const jM = this.deps.core.ijM();
-         if (SM !== jM) return await (0, lj.d)(this, da)[da](new Error(`recorder port version ${SM}, the core's ${jM}`)), !1;
+         const UV = this.deps.core.tyV();
+         if (YV !== UV) return await (0, EU.d)(this, ky)[ky](new Error(`recorder port version ${YV}, the core's ${UV}`)), !1;
```

#### 658. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6322` → after: `L6284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6284) · [Before (L6322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6322)

```diff
-         if (!(0, lj.d)(this, la)[la]((() => ((0, lj.d)(this, Dj)[Dj] = new rM.OjM, (0, lj.d)(this, kj)[kj] = rM.ISM(), !0)))) return !1;
+         if (!(0, EU.d)(this, Ey)[Ey]((() => ((0, EU.d)(this, RU)[RU] = new eV.FyV, (0, EU.d)(this, gU)[gU] = eV.vyV(), !0)))) return !1;
```

#### 659. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6325` → after: `L6287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6287) · [Before (L6325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6325)

```diff
-         return (0, lj.d)(this, Fj)[Fj] = null, MM && (0, lj.d)(this, za)[za](mM.Oc.Control, MM), (0, lj.d)(this, Pa)[Pa]()
+         return (0, EU.d)(this, LU)[LU] = null, VV && (0, EU.d)(this, Qy)[Qy](vV.Yc.Control, VV), (0, EU.d)(this, Uy)[Uy]()
```

#### 660. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6332` → after: `L6294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6294) · [Before (L6332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6332)

```diff
-       return this.deps.core.SjM(0), 1 === this.deps.core.SjM(1) || ((0, lj.d)(this, La)[La](), this.deps.failed(pj), !1)
+       return this.deps.core.TyV(0), 1 === this.deps.core.TyV(1) || ((0, EU.d)(this, ny)[ny](), this.deps.failed(zU), !1)
```

#### 661. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6336` → after: `L6298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6298) · [Before (L6336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6336)

```diff
-       (0, lj.d)(this, xj)[xj] && (0, lj.d)(this, za)[za](mM.Oc.Prefs, tj((0, lj.d)(this, xj)[xj].on, (0, lj.d)(this, xj)[xj].seconds)), (0, lj.d)(this, vj)[vj] && (0, lj.d)(this, Tj)[Tj]((0, lj.d)(this, vj)[vj])
+       (0, EU.d)(this, hU)[hU] && (0, EU.d)(this, Qy)[Qy](vV.Yc.Prefs, AU((0, EU.d)(this, hU)[hU].on, (0, EU.d)(this, hU)[hU].seconds)), (0, EU.d)(this, lU)[lU] && (0, EU.d)(this, sU)[sU]((0, EU.d)(this, lU)[lU])
```

#### 662. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6344` → after: `L6306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6306) · [Before (L6344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6344)

```diff
-           return null !== (MM = null === (rM = (0, lj.d)(this, xj)[xj]) || void 0 === rM ? void 0 : rM.seconds) && void 0 !== MM ? MM : 0
+           return null !== (VV = null === (eV = (0, EU.d)(this, hU)[hU]) || void 0 === eV ? void 0 : eV.seconds) && void 0 !== VV ? VV : 0
```

#### 663. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6349` → after: `L6311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6311) · [Before (L6349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6349)

```diff
-         dh: () => (0, lj.d)(this, oj)[oj],
+         ik: () => (0, EU.d)(this, iU)[iU],
```

#### 664. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6359` → after: `L6321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6321) · [Before (L6359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6359)

```diff
-         const SM = iM.KSM(rM.length);
+         const YV = xV.ryV(eV.length);
```

#### 665. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6365` → after: `L6327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6327) · [Before (L6365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6365)

```diff
-       (0, lj.d)(this, Nj)[Nj]++, (0, lj.d)(this, ja)[ja]("ML"), (0, lj.d)(this, qj)[qj].stop(), this.deps.core.SjM(0), (0, lj.d)(this, ma)[ma](), (0, lj.d)(this, Zj)[Zj] || ((0, lj.d)(this, sj)[sj] = null, this.deps.unload())
+       (0, EU.d)(this, oU)[oU]++, (0, EU.d)(this, Jy)[Jy]("ZZ"), (0, EU.d)(this, uU)[uU].stop(), this.deps.core.TyV(0), (0, EU.d)(this, wy)[wy](), (0, EU.d)(this, DU)[DU] || ((0, EU.d)(this, WU)[WU] = null, this.deps.unload())
```

#### 666. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6413` → after: `L6375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6375) · [Before (L6413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6413)

```diff
-       return MM instanceof WebAssembly.RuntimeError && ((0, lj.d)(this, Zj)[Zj] = !0, (0, lj.d)(this, Dj)[Dj] = null, (0, lj.d)(this, kj)[kj] = null, (0, lj.d)(this, Kj)[Kj] = null, (0, lj.d)(this, sj)[sj] = null, (0, lj.d)(this, Fj)[Fj] = null, (0, lj.d)(this, ja)[ja]("trapped") … [truncated]
+       return VV instanceof WebAssembly.RuntimeError && ((0, EU.d)(this, DU)[DU] = !0, (0, EU.d)(this, RU)[RU] = null, (0, EU.d)(this, gU)[gU] = null, (0, EU.d)(this, HU)[HU] = null, (0, EU.d)(this, WU)[WU] = null, (0, EU.d)(this, LU)[LU] = null, (0, EU.d)(this, Jy)[Jy]("trapped") … [truncated]
```

#### 667. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6415` → after: `L6377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6377) · [Before (L6415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6415)

```diff
-     var Ba = iM(39678);
+     var fy = xV(39842);
```

#### 668. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6417` → after: `L6379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6379) · [Before (L6417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6417)

```diff
-       ["skyblock", () => iM.e(58).then((() => iM(39676)))]
+       ["skyblock", () => xV.e(58).then((() => xV(39833)))]
```

#### 669. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6423-L6424` → after: `L6385-L6386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6385-L6386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6385-L6386) · [Before (L6423-L6424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6423-L6424)

```diff
-         const rM = (0, Ba.c)(MM);
-         if (!rM) throw new Error(`${MM}'s replay hook module registered no hook`);
+         const eV = (0, fy.b)(VV);
+         if (!eV) throw new Error(`${VV}'s replay hook module registered no hook`);
```

#### 670. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6581` → after: `L6543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6543) · [Before (L6581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6581)

```diff
-         if ((0, lj.d)(this, ca)[ca]) return mM.Zc.ModuleTrap;
+         if ((0, EU.d)(this, Iy)[Iy]) return vV.fd.ModuleTrap;
```

#### 671. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6592-L6595` → after: `L6554-L6557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6554-L6557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6554-L6557) · [Before (L6592-L6595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6592-L6595)

```diff
-           if ((0, lj.d)(this, ca)[ca]) return mM.Zc.ModuleTrap;
-           const OM = iM.rjM(),
-             jM = this.deps.core.ijM();
-           if (OM !== jM) return (0, lj.d)(this, QP)[QP](new Error(`replay port version ${OM}, the core's ${jM}`), rM);
+           if ((0, EU.d)(this, Iy)[Iy]) return vV.fd.ModuleTrap;
+           const JV = xV.qyV(),
+             UV = this.deps.core.tyV();
+           if (JV !== UV) return (0, EU.d)(this, pp)[pp](new Error(`replay port version ${JV}, the core's ${UV}`), eV);
```

#### 672. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6601-L6602` → after: `L6563-L6564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6563-L6564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6563-L6564) · [Before (L6601-L6602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6601-L6602)

```diff
-               (0, lj.d)(this, Ta)[Ta] = new MM.jjM, (0, lj.d)(this, Va)[Va] = MM.ajM()
-             }))) return mM.Zc.ModuleTrap
+               (0, EU.d)(this, sy)[sy] = new VV.PyV, (0, EU.d)(this, Sy)[Sy] = VV.AyV()
+             }))) return vV.fd.ModuleTrap
```

#### 673. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6609` → after: `L6571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6571) · [Before (L6609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6609)

```diff
-         })) ? OM ? "opening" : mM.Zc.TooLarge : mM.Zc.ModuleTrap
+         })) ? JV ? "opening" : vV.fd.TooLarge : vV.fd.ModuleTrap
```

#### 674. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6617` → after: `L6579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6579) · [Before (L6617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6617)

```diff
-         } = this.deps, SM = OM.PjM(MM);
+         } = this.deps, YV = JV.NyV(VV);
```

#### 675. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6622` → after: `L6584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6584) · [Before (L6622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6622)

```diff
-           aM = rM.step(jM, SM - jM), PM = rM.TSM()
+           yV = eV.step(UV, YV - UV), pV = eV.byV()
```

#### 676. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6626` → after: `L6588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6588) · [Before (L6626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6626)

```diff
-         const nM = OM.MjM(1, aM);
+         const QV = JV.jyV(1, yV);
```

#### 677. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6632` → after: `L6594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6594) · [Before (L6632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6632)

```diff
-           return (0, lj.d)(this, zP)[zP] ? (0, lj.d)(this, SP)[SP] = "drop" : (0, lj.d)(this, nP)[nP](), void OM.njM(mM.Zc.Port)
+           return (0, EU.d)(this, Qp)[Qp] ? (0, EU.d)(this, xp)[xp] = "drop" : (0, EU.d)(this, yp)[yp](), void JV.XyV(vV.fd.Port)
```

#### 678. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6654` → after: `L6616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6616) · [Before (L6654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6654)

```diff
-           iM.QjM(MM, rM)
+           xV.MyV(VV, eV)
```

#### 679. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6659` → after: `L6621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6621) · [Before (L6659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6659)

```diff
-           iM.zjM(MM[0], MM[1], MM[2], rM[0], rM[1], rM[2])
+           xV.zyV(VV[0], VV[1], VV[2], eV[0], eV[1], eV[2])
```

#### 680. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6664` → after: `L6626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6626) · [Before (L6664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6664)

```diff
-           iM.LjM(MM, rM)
+           xV.GyV(VV, eV)
```

#### 681. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6669` → after: `L6631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6631) · [Before (L6669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6669)

```diff
-           iM.mjM(MM, rM)
+           xV.WyV(VV, eV)
```

#### 682. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6674` → after: `L6636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6636) · [Before (L6674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6674)

```diff
-           iM.HjM(MM, rM)
+           xV.RyV(VV, eV)
```

#### 683. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6688` → after: `L6650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6650) · [Before (L6688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6688)

```diff
-             rM = MM.save(), 0 !== rM && (iM = new Uint8Array(OM.buffer, MM.hjM(), MM.JjM()).slice())
+             eV = VV.save(), 0 !== eV && (xV = new Uint8Array(JV.buffer, VV.gyV(), VV.DyV()).slice())
```

#### 684. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6698-L6699` → after: `L6660-L6661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6660-L6661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6660-L6661) · [Before (L6698-L6699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6698-L6699)

```diff
-               const jM = OM.djM();
-               0 !== jM && MM >= 0 && rM >= 0 && MM + rM <= jM && (iM = new Uint8Array(SM.buffer, OM.yjM() + MM, rM))
+               const UV = JV.iyV();
+               0 !== UV && VV >= 0 && eV >= 0 && VV + eV <= UV && (xV = new Uint8Array(YV.buffer, JV.CyV() + VV, eV))
```

#### 685. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6705` → after: `L6667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6667) · [Before (L6705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6705)

```diff
-               MM.ljM()
+               VV.ayV()
```

#### 686. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6718` → after: `L6680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6680) · [Before (L6718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6718)

```diff
-           rM.EjM(MM)
+           eV.oyV(VV)
```

#### 687. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6723` → after: `L6685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6685) · [Before (L6723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6723)

```diff
-           rM.UjM(MM)
+           eV.cyV(VV)
```

#### 688. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6750` → after: `L6712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6712) · [Before (L6750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6750)

```diff
-       }) ? "reloading" : mM.Zc.ModuleLoad
+       }) ? "reloading" : vV.fd.ModuleLoad
```

#### 689. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6780` → after: `L6742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6742) · [Before (L6780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6780)

```diff
-       (0, lj.d)(this, ca)[ca] = !0, (0, lj.d)(this, Ta)[Ta] = null, (0, lj.d)(this, Va)[Va] = null, (0, lj.d)(this, qa)[qa] = null, this.deps.crash(this.deps.markTrapped(MM)), this.deps.core.njM(mM.Zc.ModuleTrap)
+       (0, EU.d)(this, Iy)[Iy] = !0, (0, EU.d)(this, sy)[sy] = null, (0, EU.d)(this, Sy)[Sy] = null, (0, EU.d)(this, uy)[uy] = null, this.deps.crash(this.deps.markTrapped(VV)), this.deps.core.XyV(vV.fd.ModuleTrap)
```

#### 690. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6782-L6783` → after: `L6744-L6745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6744-L6745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6744-L6745) · [Before (L6782-L6783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6782-L6783)

```diff
-     var bP = iM(6950),
-       wP = iM(42126);
+     var Tp = xV(7033),
+       Pp = xV(42334);
```

#### 691. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6794` → after: `L6756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6756) · [Before (L6794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6794)

```diff
-         case mM.fd.FlyingText: {
+         case vV.od.FlyingText: {
```

#### 692. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6799` → after: `L6761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6761) · [Before (L6799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6799)

```diff
-             return void console.warn(`${tP} a replay's flying text isn't JSON`, QM)
+             return void console.warn(`${Ap} a replay's flying text isn't JSON`, nV)
```

#### 693. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6801` → after: `L6763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6763) · [Before (L6801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6801)

```diff
-           aM.i.Tz("forceFlyingMiddleMessage", {
+           yV.h.QZ("forceFlyingMiddleMessage", {
```

#### 694. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6803` → after: `L6765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6765) · [Before (L6803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6803)

```diff
-             oi: MM.oi,
+             ux: VV.ux,
```

#### 695. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6805` → after: `L6767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6767) · [Before (L6805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6805)

```diff
-             Yi: MM.Yi
+             Sx: VV.Sx
```

#### 696. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6809-L6810` → after: `L6771-L6772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6771-L6772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6771-L6772) · [Before (L6809-L6810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6809-L6810)

```diff
-         case mM.fd.PlayerKilled:
-           (0, wP.d)({
+         case vV.od.PlayerKilled:
+           (0, Pp.h)({
```

#### 697. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6813` → after: `L6775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6775) · [Before (L6813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6813)

```diff
-               deadEId: null !== (rM = uP(MM.dead)) && void 0 !== rM ? rM : "",
+               deadEId: null !== (eV = Xp(VV.dead)) && void 0 !== eV ? eV : "",
```

#### 698. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6815` → after: `L6777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6777) · [Before (L6815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6815)

```diff
-               withItem: null !== (iM = MM.withItem) && void 0 !== iM ? iM : "",
+               withItem: null !== (xV = VV.withItem) && void 0 !== xV ? xV : "",
```

#### 699. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6820-L6821` → after: `L6782-L6783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6782-L6783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6782-L6783) · [Before (L6820-L6821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6820-L6821)

```diff
-         case mM.fd.Killfeed:
-           (0, wP.d)({
+         case vV.od.Killfeed:
+           (0, Pp.h)({
```

#### 700. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6826-L6827` → after: `L6788-L6789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6788-L6789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6788-L6789) · [Before (L6826-L6827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6826-L6827)

```diff
-                 name: null !== (OM = MM.killerName) && void 0 !== OM ? OM : void 0,
-                 colour: null !== (SM = MM.killerColour) && void 0 !== SM ? SM : void 0
+                 name: null !== (JV = VV.killerName) && void 0 !== JV ? JV : void 0,
+                 colour: null !== (YV = VV.killerColour) && void 0 !== YV ? YV : void 0
```

#### 701. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6831-L6832` → after: `L6793-L6794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6793-L6794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6793-L6794) · [Before (L6831-L6832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6831-L6832)

```diff
-                 name: null !== (jM = MM.victimName) && void 0 !== jM ? jM : void 0,
-                 colour: null !== (PM = MM.victimColour) && void 0 !== PM ? PM : void 0
+                 name: null !== (UV = VV.victimName) && void 0 !== UV ? UV : void 0,
+                 colour: null !== (pV = VV.victimColour) && void 0 !== pV ? pV : void 0
```

#### 702. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6834` → after: `L6796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6796) · [Before (L6834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6834)

```diff
-               withItem: null !== (nM = MM.withItem) && void 0 !== nM ? nM : ""
+               withItem: null !== (QV = VV.withItem) && void 0 !== QV ? QV : ""
```

#### 703. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6844` → after: `L6806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6806) · [Before (L6844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6844)

```diff
-       return Number.isInteger(rM) && rM > IS && rM <= 2147483647 ? rM : null
+       return Number.isInteger(eV) && eV > KY && eV <= 2147483647 ? eV : null
```

#### 704. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6856` → after: `L6818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6818) · [Before (L6856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6856)

```diff
-       const rM = (0, Sj.h)(nO.hc.PlayerKilled, (rM => {
+       const eV = (0, xU.l)(yJ.mc.PlayerKilled, (eV => {
```

#### 705. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6858-L6859` → after: `L6820-L6821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6820-L6821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6820-L6821) · [Before (L6858-L6859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6858-L6859)

```diff
-           const SM = (0, Oj.f)(rM);
-           if (!(0, Oj.c)(SM)) return;
+           const YV = (0, eU.j)(eV);
+           if (!(0, eU.e)(YV)) return;
```

#### 706. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6866` → after: `L6828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6828) · [Before (L6866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6866)

```diff
-           MM.recordPlayerKilled(null !== (iM = WP(jM)) && void 0 !== iM ? iM : IS, null !== (OM = WP(aM)) && void 0 !== OM ? OM : IS, "number" === typeof nM ? nM : 0, "string" === typeof PM ? PM : "")
+           VV.recordPlayerKilled(null !== (xV = Gp(UV)) && void 0 !== xV ? xV : KY, null !== (JV = Gp(yV)) && void 0 !== JV ? JV : KY, "number" === typeof QV ? QV : 0, "string" === typeof pV ? pV : "")
```

#### 707. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6868-L6870` → after: `L6830-L6832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6830-L6832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6830-L6832) · [Before (L6868-L6870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6868-L6870)

```diff
-         iM = (0, Sj.h)(nO.hc.CustomKillfeed, (rM => {
-           const iM = (0, Oj.f)(rM);
-           if (!(0, Oj.c)(iM) || !(0, Oj.c)(iM.killer) || !(0, Oj.c)(iM.victim)) return;
+         xV = (0, xU.l)(yJ.mc.CustomKillfeed, (eV => {
+           const xV = (0, eU.j)(eV);
+           if (!(0, eU.e)(xV) || !(0, eU.e)(xV.killer) || !(0, eU.e)(xV.victim)) return;
```

#### 708. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6876` → after: `L6838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6838) · [Before (L6876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6876)

```diff
-           MM.recordKillfeed(sP(OM), sP(SM), "string" === typeof jM ? jM : null)
+           VV.recordKillfeed(Wp(JV), Wp(YV), "string" === typeof UV ? UV : null)
```

#### 709. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6885` → after: `L6847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6847) · [Before (L6885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6885)

```diff
-       return void 0 === MM || null === MM ? null : null !== (rM = JSON.stringify(MM)) && void 0 !== rM ? rM : null
+       return void 0 === VV || null === VV ? null : null !== (eV = JSON.stringify(VV)) && void 0 !== eV ? eV : null
```

#### 710. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6894` → after: `L6856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6856) · [Before (L6894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6894)

```diff
-         } = OM.d.get("clientEscMenuOptions"), jM = `${iM}:${SM}`;
+         } = JV.b.get("clientEscMenuOptions"), UV = `${xV}:${YV}`;
```

#### 711. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6897` → after: `L6859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6859) · [Before (L6897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6897)

```diff
-       return iM(), (0, aM.j)("appManagerUpdated|clientEscMenuOptions", iM)
+       return xV(), (0, yV.i)("appManagerUpdated|clientEscMenuOptions", xV)
```

#### 712. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6904` → after: `L6866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6866) · [Before (L6904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6904)

```diff
-         return MM.isStopped ? iM : rM(...arguments)
+         return VV.isStopped ? xV : eV(...arguments)
```

#### 713. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6908` → after: `L6870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6870) · [Before (L6908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6908)

```diff
-       open: () => Promise.reject(new Error(fS.c.coreStopped.text)),
+       open: () => Promise.reject(new Error(CY.b.coreStopped.text)),
```

#### 714. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6916` → after: `L6878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6878) · [Before (L6916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6916)

```diff
-       return iM.e(76).then((() => iM(64109)))
+       return xV.e(76).then((() => xV(64492)))
```

#### 715. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6920` → after: `L6882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6882) · [Before (L6920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6920)

```diff
-       (0, fS.d)({
+       (0, CY.f)({
```

#### 716. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6932` → after: `L6894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6894) · [Before (L6932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6932)

```diff
-         } = MM, jM = () => MM.memory().buffer, aM = () => rM.isStopped ? null : rM.rings.cmd, PM = YP(rM, ((MM, rM) => SM.MjM(MM, rM)), 0), nM = () => SM.ijM();
+         } = VV, UV = () => VV.memory().buffer, yV = () => eV.isStopped ? null : eV.rings.cmd, pV = ap(eV, ((VV, eV) => YV.jyV(VV, eV)), 0), QV = () => YV.tyV();
```

#### 717. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6936-L6940` → after: `L6898-L6902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6898-L6902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6898-L6902) · [Before (L6936-L6940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6936-L6940)

```diff
-             PjM: YP(rM, (MM => SM.PjM(MM)), -1),
-             MjM: PM,
-             ijM: nM,
-             njM: YP(rM, (MM => {
-               SM.njM(MM)
+             NyV: ap(eV, (VV => YV.NyV(VV)), -1),
+             jyV: pV,
+             tyV: QV,
+             XyV: ap(eV, (VV => {
+               YV.XyV(VV)
```

#### 718. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6944` → after: `L6906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6906) · [Before (L6944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6944)

```diff
-           load: async () => (QM = await iM.e(77).then((() => iM(64121))), QM.loadReplayModule()),
+           load: async () => (nV = await xV.e(77).then((() => xV(64509))), nV.loadReplayModule()),
```

#### 719. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6958-L6961` → after: `L6920-L6923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6920-L6923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6920-L6923) · [Before (L6958-L6961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6958-L6961)

```diff
-             SjM: YP(rM, (MM => SM.SjM(MM)), 0),
-             qSM: YP(rM, (MM => SM.qSM(MM)), 0),
-             MjM: PM,
-             ijM: nM
+             TyV: ap(eV, (VV => YV.TyV(VV)), 0),
+             kyV: ap(eV, (VV => YV.kyV(VV)), 0),
+             jyV: pV,
+             tyV: QV
```

#### 720. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6971` → after: `L6933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6933) · [Before (L6971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6971)

```diff
-               console.warn(`${pP} the recorder module didn't prefetch, so a save loads it:`, MM)
+               console.warn(`${zp} the recorder module didn't prefetch, so a save loads it:`, VV)
```

#### 721. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6981` → after: `L6943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6943) · [Before (L6981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6981)

```diff
-             return null !== (MM = null === (rM = zM) || void 0 === rM ? void 0 : rM.recorderMemoryBytes()) && void 0 !== MM ? MM : 0
+             return null !== (VV = null === (eV = wV) || void 0 === eV ? void 0 : eV.recorderMemoryBytes()) && void 0 !== VV ? VV : 0
```

#### 722. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6998-L7000` → after: `L6960-L6962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6960-L6962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6960-L6962) · [Before (L6998-L7000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6998-L7000)

```diff
-             YSM: YP(rM, (MM => SM.YSM(MM)), 0),
-             xSM: YP(rM, (() => {
-               SM.xSM()
+             YyV: ap(eV, (VV => YV.YyV(VV)), 0),
+             yyV: ap(eV, (() => {
+               YV.yyV()
```

#### 723. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7002-L7003` → after: `L6964-L6965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6964-L6965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6964-L6965) · [Before (L7002-L7003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7002-L7003)

```diff
-             qd: YP(rM, (() => SM.qd()), 0),
-             ASM: YP(rM, (() => SM.ASM()), 0)
+             xB: ap(eV, (() => YV.xB()), 0),
+             UyV: ap(eV, (() => YV.UyV()), 0)
```

#### 724. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7016` → after: `L6978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6978) · [Before (L7016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7016)

```diff
-             console.warn(`${pP} the recorded game's replay hooks:`, MM)
+             console.warn(`${zp} the recorded game's replay hooks:`, VV)
```

#### 725. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7025` → after: `L6987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6987) · [Before (L7025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7025)

```diff
-           notify: fS.d,
+           notify: CY.f,
```

#### 726. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7037` → after: `L6999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6999) · [Before (L7037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7037)

```diff
-               const SM = nO.pb[rM.key];
+               const YV = yJ.Bb[eV.key];
```

#### 727. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7039-L7040` → after: `L7001-L7002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7001-L7002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7001-L7002) · [Before (L7039-L7040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7039-L7040)

```diff
-               let jM = null !== (iM = rM.value) && void 0 !== iM ? iM : JSON.parse(JSON.stringify(null !== (OM = bP.e[SM]) && void 0 !== OM ? OM : null));
-               if (null !== rM.value && rM.key < nO.Qb.Environment && "string" === typeof jM) try {
+               let UV = null !== (xV = eV.value) && void 0 !== xV ? xV : JSON.parse(JSON.stringify(null !== (JV = Tp.c[YV]) && void 0 !== JV ? JV : null));
+               if (null !== eV.value && eV.key < yJ.$b.Environment && "string" === typeof UV) try {
```

#### 728. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7043` → after: `L7005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7005) · [Before (L7043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7043)

```diff
-                 return void console.warn(`${tP} a replay's ${SM} isn't JSON`, aM)
+                 return void console.warn(`${Ap} a replay's ${YV} isn't JSON`, yV)
```

#### 729. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7052` → after: `L7014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7014) · [Before (L7052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7052)

```diff
-             this.entityHooks.opened((0, gM.Mb)(rM)), MM.replayShaderPack(rM)
+             this.entityHooks.opened((0, MV.Pb)(eV)), VV.replayShaderPack(eV)
```

#### 730. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7056` → after: `L7018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7018) · [Before (L7056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7056)

```diff
-             return null !== (MM = null === (iM = rM.lastHeader) || void 0 === iM ? void 0 : iM.renderPending) && void 0 !== MM ? MM : 0
+             return null !== (VV = null === (xV = eV.lastHeader) || void 0 === xV ? void 0 : xV.renderPending) && void 0 !== VV ? VV : 0
```

#### 731. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7058` → after: `L7020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7020) · [Before (L7058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7058)

```diff
-           viewerOpen: YS.b,
+           viewerOpen: aY.e,
```

#### 732. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7060` → after: `L7022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7022) · [Before (L7060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7060)

```diff
-             (0, ZS.j)(MM)
+             (0, DY.g)(VV)
```

#### 733. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7063` → after: `L7025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7025) · [Before (L7063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7063)

```diff
-         this.runtime = mM, OM.replay = mM.sink, (0, NS.v)(mM);
+         this.runtime = vV, JV.replay = vV.sink, (0, oY.s)(vV);
```

#### 734. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7072-L7073` → after: `L7034-L7035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7034-L7035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7034-L7035) · [Before (L7072-L7073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7072-L7073)

```diff
-         this.freecam = HM, (0, NS.s)(HM), this.recordedOptions = function(MM, rM) {
-           const iM = nO.pb,
+         this.freecam = rV, (0, oY.q)(rV), this.recordedOptions = function(VV, eV) {
+           const xV = yJ.Bb,
```

#### 735. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7087` → after: `L7049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7049) · [Before (L7087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7087)

```diff
-         }(mM.recorder, MM.options), this.stops = [(0, lO.n)((MM => {
+         }(vV.recorder, VV.options), this.stops = [(0, EJ.l)((VV => {
```

#### 736. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7094` → after: `L7056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7056) · [Before (L7094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7094)

```diff
-         })), (0, lO.A)(((MM, rM) => {
+         })), (0, EJ.w)(((VV, eV) => {
```

#### 737. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7107` → after: `L7069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7069) · [Before (L7107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7107)

```diff
-         }, DP(mM.recorder), (0, jj.f)((MM => {
+         }, Rp(vV.recorder), (0, JU.e)((VV => {
```

#### 738. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7117` → after: `L7079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7079) · [Before (L7117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7117)

```diff
-           return !0 === (null === MM || void 0 === MM ? void 0 : MM.isOpen) ? MM : null
+           return !0 === (null === VV || void 0 === VV ? void 0 : VV.isOpen) ? VV : null
```

#### 739. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7119` → after: `L7081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7081) · [Before (L7119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7119)

```diff
-         (0, oS.i)({
+         (0, iY.g)({
```

#### 740. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7123` → after: `L7085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7085) · [Before (L7123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7123)

```diff
-             return null !== (MM = null === (rM = hM()) || void 0 === rM ? void 0 : rM.id) && void 0 !== MM ? MM : null
+             return null !== (VV = null === (eV = kV()) || void 0 === eV ? void 0 : eV.id) && void 0 !== VV ? VV : null
```

#### 741. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7127` → after: `L7089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7089) · [Before (L7127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7127)

```diff
-             return null !== (MM = null === (rM = hM()) || void 0 === rM ? void 0 : rM.saveRefusal) && void 0 !== MM ? MM : null
+             return null !== (VV = null === (eV = kV()) || void 0 === eV ? void 0 : eV.saveRefusal) && void 0 !== VV ? VV : null
```

#### 742. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7131` → after: `L7093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7093) · [Before (L7131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7131)

```diff
-             return null !== (MM = null === (rM = hM()) || void 0 === rM ? void 0 : rM.save()) && void 0 !== MM ? MM : Promise.resolve(null)
+             return null !== (VV = null === (eV = kV()) || void 0 === eV ? void 0 : eV.save()) && void 0 !== VV ? VV : Promise.resolve(null)
```

#### 743. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7135` → after: `L7097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7097) · [Before (L7135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7135)

```diff
-             return null !== (MM = null === (rM = mM.currentViewer) || void 0 === rM ? void 0 : rM.fileHandle) && void 0 !== MM ? MM : null
+             return null !== (VV = null === (eV = vV.currentViewer) || void 0 === eV ? void 0 : eV.fileHandle) && void 0 !== VV ? VV : null
```

#### 744. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7145` → after: `L7107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7107) · [Before (L7145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7145)

```diff
-           if (MM.phase === mM.F.Activated) {
+           if (VV.phase === vV.H.Activated) {
```

#### 745. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7149` → after: `L7111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7111) · [Before (L7149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7149)

```diff
-               lobbyType: (0, uM.w)(rM.lobbyName),
+               lobbyType: (0, zV.r)(eV.lobbyName),
```

#### 746. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7153` → after: `L7115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7115) · [Before (L7153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7153)

```diff
-           } else MM.phase !== mM.F.Left && MM.phase !== mM.F.Closed || MM.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
+           } else VV.phase !== vV.H.Left && VV.phase !== vV.H.Closed || VV.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
```

#### 747. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7159` → after: `L7121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7121) · [Before (L7159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7159)

```diff
-           this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, NS.n)() === this.runtime && (0, NS.v)(null), (0, NS.j)() === this.freecam && (0, NS.s)(null), (0, oS.i)(NP), null !== this.bench && window.wasmReplayBench === this.bench && (w … [truncated]
+           this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, oY.l)() === this.runtime && (0, oY.s)(null), (0, oY.h)() === this.freecam && (0, oY.q)(null), (0, iY.g)(op), null !== this.bench && window.wasmReplayBench === this.bench && (w … [truncated]
```

#### 748. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7166-L7167` → after: `L7128-L7129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7128-L7129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7128-L7129) · [Before (L7166-L7167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7166-L7167)

```diff
-         if (iM.isStopped) throw new Error(fS.c.coreStopped.text);
-         if (MM.byteLength > 67108864) throw new Error(fS.c.cantOpen.text);
+         if (xV.isStopped) throw new Error(CY.b.coreStopped.text);
+         if (VV.byteLength > 67108864) throw new Error(CY.b.cantOpen.text);
```

#### 749. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7172` → after: `L7134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7134) · [Before (L7172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7172)

```diff
-             return rM.inPlayback || (0, lO.I)().leaveGame(null), rM
+             return eV.inPlayback || (0, EJ.G)().leaveGame(null), eV
```

#### 750. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7175` → after: `L7137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7137) · [Before (L7175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7175)

```diff
-           throw console.warn(`${pP} the replay viewer didn't load`, SM), new Error(fS.c.viewerLoadFailed.text)
+           throw console.warn(`${zp} the replay viewer didn't load`, YV), new Error(CY.b.viewerLoadFailed.text)
```

#### 751. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7177` → after: `L7139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7139) · [Before (L7177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7177)

```diff
-         if (iM.isStopped) throw new Error(fS.c.coreStopped.text);
+         if (xV.isStopped) throw new Error(CY.b.coreStopped.text);
```

#### 752. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7181` → after: `L7143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7143) · [Before (L7181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7181)

```diff
-     var FP = iM(2067);
+     var Lp = xV(2080);
```

#### 753. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7189` → after: `L7151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7151) · [Before (L7189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7189)

```diff
-           aux: MM.reset ? mM.$b.ResetFirst : 0,
+           aux: VV.reset ? vV.jc.ResetFirst : 0,
```

#### 754. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7193` → after: `L7155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7155) · [Before (L7193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7193)

```diff
-       MM.queueOptions(iM, OM) && (rM.reset && FP.d.reset(), FP.d.apply(rM.changes))
+       VV.queueOptions(xV, JV) && (eV.reset && Lp.c.reset(), Lp.c.apply(eV.changes))
```

#### 755. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7266-L7270` → after: `L7228-L7232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7228-L7232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7228-L7232) · [Before (L7266-L7270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7266-L7270)

```diff
-     var cP = iM(53661),
-       Mn = iM(53668),
-       rn = iM(42045),
-       On = iM(42090),
-       Sn = iM(3188);
+     var dp = xV(53872),
+       Op = xV(53874),
+       VQ = xV(42252),
+       eQ = xV(42303),
+       xQ = xV(3196);
```

#### 756. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7274` → after: `L7236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7236) · [Before (L7274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7274)

```diff
-         this.host = MM, this.sets = new Map, this.table = [], this.generation = 0, this.dh = !1
+         this.host = VV, this.sets = new Map, this.table = [], this.generation = 0, this.ik = !1
```

#### 757. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7278` → after: `L7240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7240) · [Before (L7278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7278)

```diff
-           if (MM.byteLength !== mM.nd) return null;
+           if (VV.byteLength !== vV.wd) return null;
```

#### 758. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7285` → after: `L7247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7247) · [Before (L7285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7285)

```diff
-         rM && !this.dh && (rM.release !== mM.pd && this.release(rM.release), rM.want !== mM.pd && this.want(rM.want))
+         eV && !this.ik && (eV.release !== vV.xd && this.release(eV.release), eV.want !== vV.xd && this.want(eV.want))
```

#### 759. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7288` → after: `L7250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7250) · [Before (L7288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7288)

```diff
-         if (!this.dh) {
+         if (!this.ik) {
```

#### 760. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7294-L7295` → after: `L7256-L7257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7256-L7257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7256-L7257) · [Before (L7294-L7295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7294-L7295)

```diff
-         if (this.dh) return;
-         this.dh = !0, this.generation++, this.table = [];
+         if (this.ik) return;
+         this.ik = !0, this.generation++, this.table = [];
```

#### 761. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7301` → after: `L7263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7263) · [Before (L7301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7301)

```diff
-             this.host.SOM(MM)
+             this.host.FYV(VV)
```

#### 762. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7318` → after: `L7280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7280) · [Before (L7318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7318)

```diff
-         if (!iM || 1 !== iM.urls.length && iM.urls.length !== nO.dc.CubeFaces) return this.host.sendReady(Qn(MM)), void this.host.onLoadFailed(MM, "", new Error(`no image set ${MM}`));
+         if (!xV || 1 !== xV.urls.length && xV.urls.length !== yJ.ic.CubeFaces) return this.host.sendReady(pQ(VV)), void this.host.onLoadFailed(VV, "", new Error(`no image set ${VV}`));
```

#### 763. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7336` → after: `L7298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7298) · [Before (L7336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7336)

```diff
-           if (!nM || !iM.wanted) return this.dh ? void this.releaseAfterDispose(PM.map(Pn)) : (this.releaseAll(PM.map(Pn)), void(nM && this.sets.delete(MM)));
+           if (!QV || !xV.wanted) return this.ik ? void this.releaseAfterDispose(pV.map(UQ)) : (this.releaseAll(pV.map(UQ)), void(QV && this.sets.delete(VV)));
```

#### 764. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7343` → after: `L7305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7305) · [Before (L7343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7343)

```diff
-         const [SM] = OM, jM = [SM.width, SM.height], aM = OM.every((MM => MM.width === jM[0] && MM.height === jM[1])), PM = rM.urls.length === nO.dc.CubeFaces;
+         const [YV] = JV, UV = [YV.width, YV.height], yV = JV.every((VV => VV.width === UV[0] && VV.height === UV[1])), pV = eV.urls.length === yJ.ic.CubeFaces;
```

#### 765. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7346-L7347` → after: `L7308-L7309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7308-L7309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7308-L7309) · [Before (L7346-L7347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7346-L7347)

```diff
-           const iM = OM.map((MM => `${MM.width}x${MM.height}`));
-           return void this.host.onLoadFailed(MM, rM.urls[0], new Error(`set ${MM}'s images can't make its texture: ${iM.join(", ")}`))
+           const xV = JV.map((VV => `${VV.width}x${VV.height}`));
+           return void this.host.onLoadFailed(VV, eV.urls[0], new Error(`set ${VV}'s images can't make its texture: ${xV.join(", ")}`))
```

#### 766. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7363` → after: `L7325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7325) · [Before (L7363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7363)

```diff
-         for (const rM of MM) this.host.SOM(rM)
+         for (const eV of VV) this.host.FYV(eV)
```

#### 767. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7367` → after: `L7329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7329) · [Before (L7367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7367)

```diff
-           this.host.SOM(rM)
+           this.host.FYV(eV)
```

#### 768. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7377` → after: `L7339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7339) · [Before (L7377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7377)

```diff
-       const OM = new Uint8Array(nO.dc.SkyImagesReadyBytes),
+       const JV = new Uint8Array(yJ.ic.SkyImagesReadyBytes),
```

#### 769. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7379` → after: `L7341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7341) · [Before (L7379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7379)

```diff
-       return SM.setUint16(0, MM, !0), SM.setUint16(2, rM.length, !0), SM.setUint16(4, iM[0], !0), SM.setUint16(6, iM[1], !0), rM.slice(0, nO.dc.CubeFaces).forEach(((MM, rM) => {
+       return YV.setUint16(0, VV, !0), YV.setUint16(2, eV.length, !0), YV.setUint16(4, xV[0], !0), YV.setUint16(6, xV[1], !0), eV.slice(0, yJ.ic.CubeFaces).forEach(((VV, eV) => {
```

#### 770. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7385` → after: `L7347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7347) · [Before (L7385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7385)

```diff
-       const rM = new Uint8Array(nO.dc.SkyImagesReadyBytes),
+       const eV = new Uint8Array(yJ.ic.SkyImagesReadyBytes),
```

#### 771. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7387` → after: `L7349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7349) · [Before (L7387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7387)

```diff
-       return iM.setUint16(0, MM, !0), iM.setUint16(2, nO.dc.Failed, !0), rM
+       return xV.setUint16(0, VV, !0), xV.setUint16(2, yJ.ic.Failed, !0), eV
```

#### 772. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7393` → after: `L7355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7355) · [Before (L7393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7393)

```diff
-         iM = await (0, Sn.F)(MM)
+         xV = await (0, xQ.H)(VV)
```

#### 773. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7433` → after: `L7395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7395) · [Before (L7433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7433)

```diff
-         id: (0, rn.n)(SM),
+         id: (0, VQ.m)(YV),
```

#### 774. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7438-L7442` → after: `L7400-L7404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7400-L7404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7400-L7404) · [Before (L7438-L7442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7438-L7442)

```diff
-     var mn = iM(2263),
-       Hn = iM(34611),
-       hn = iM(40305);
-     const Jn = mn.e.length,
-       dn = new Set([...mn.e, "earth"]);
+     var wQ = xV(2277),
+       ZQ = xV(34874),
+       vQ = xV(40446);
+     const rQ = wQ.h.length,
+       kQ = new Set([...wQ.h, "earth"]);
```

#### 775. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7451` → after: `L7413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7413) · [Before (L7451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7451)

```diff
-               kind: nO.dc.KindCustom,
+               kind: yJ.ic.KindCustom,
```

#### 776. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7457` → after: `L7419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7419) · [Before (L7457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7457)

```diff
-               urls: (0, hn.g)(SM),
+               urls: (0, vQ.d)(YV),
```

#### 777. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7462` → after: `L7424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7424) · [Before (L7462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7462)

```diff
-             kind: nO.dc.KindEarth,
+             kind: yJ.ic.KindEarth,
```

#### 778. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7467` → after: `L7429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7429) · [Before (L7467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7467)

```diff
-       mn.e.forEach(((rM, iM) => {
+       wQ.h.forEach(((eV, xV) => {
```

#### 779. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7469` → after: `L7431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7431) · [Before (L7469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7469)

```diff
-         OM(iM, null !== (SM = En(MM[rM])) && void 0 !== SM ? SM : Hn.j[rM])
+         JV(xV, null !== (YV = EQ(VV[eV])) && void 0 !== YV ? YV : ZQ.m[eV])
```

#### 780. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7480` → after: `L7442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7442) · [Before (L7480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7480)

```diff
-         rM.length > 255 ? PM.push(`Ignoring texture pack skybox ${HM}, whose name is over 255 bytes`) : aM.length === nO.dc.MaxAdded ? PM.push(`Ignoring texture pack skybox ${HM}, past the ${nO.dc.MaxAdded} skies a pack can add`) : (aM.push(rM), OM(nO.dc.AddedId, MM))
+         eV.length > 255 ? pV.push(`Ignoring texture pack skybox ${rV}, whose name is over 255 bytes`) : yV.length === yJ.ic.MaxAdded ? pV.push(`Ignoring texture pack skybox ${rV}, past the ${yJ.ic.MaxAdded} skies a pack can add`) : (yV.push(eV), JV(yJ.ic.AddedId, VV))
```

#### 781. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7484` → after: `L7446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7446) · [Before (L7484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7484)

```diff
-         urls: Hn.d.map((MM => Hn.g + MM)),
+         urls: ZQ.g.map((VV => ZQ.i + VV)),
```

#### 782. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7487` → after: `L7449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7449) · [Before (L7487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7487)

```diff
-         urls: [Hn.h],
+         urls: [ZQ.k],
```

#### 783. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7490` → after: `L7452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7452) · [Before (L7490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7490)

```diff
-         urls: [Hn.c],
+         urls: [ZQ.d],
```

#### 784. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7493` → after: `L7455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7455) · [Before (L7493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7493)

```diff
-       const QM = nO.dc.SkyTableHeaderBytes + iM.length * nO.dc.SkyTableEntryBytes,
+       const nV = yJ.ic.SkyTableHeaderBytes + xV.length * yJ.ic.SkyTableEntryBytes,
```

#### 785. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7497` → after: `L7459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7459) · [Before (L7497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7497)

```diff
-         const iM = nO.dc.SkyTableHeaderBytes + rM * nO.dc.SkyTableEntryBytes;
+         const xV = yJ.ic.SkyTableHeaderBytes + eV * yJ.ic.SkyTableEntryBytes;
```

#### 786. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7517` → after: `L7479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7479) · [Before (L7517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7517)

```diff
-             "number" === typeof nM && Number.isFinite(nM) && (rM.setFloat32(iM + nO.t.CameraOffsetAt + 4 * jM, nM, !0), SM |= PM)
+             "number" === typeof QV && Number.isFinite(QV) && (eV.setFloat32(xV + yJ.B.CameraOffsetAt + 4 * UV, QV, !0), YV |= pV)
```

#### 787. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7523` → after: `L7485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7485) · [Before (L7523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7523)

```diff
-           rM.setUint32(iM + nO.t.PresentAt, SM, !0), rM.setUint8(iM + nO.t.FlagsAt, jM)
+           eV.setUint32(xV + yJ.B.PresentAt, YV, !0), eV.setUint8(xV + yJ.B.FlagsAt, UV)
```

#### 788. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7542` → after: `L7504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7504) · [Before (L7542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7542)

```diff
-       })) ? MM : null
+       })) ? VV : null
```

#### 789. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7545-L7552` → after: `L7507-L7514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7507-L7514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7507-L7514) · [Before (L7545-L7552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7545-L7552)

```diff
-         ["inclination", nO.t.Inclination],
-         ["turbidity", nO.t.Turbidity],
-         ["luminance", nO.t.Luminance],
-         ["rayleigh", nO.t.Rayleigh],
-         ["mieCoefficient", nO.t.MieCoefficient],
-         ["mieDirectionalG", nO.t.MieDirectionalG],
-         ["distance", nO.t.Distance],
-         ["azimuth", nO.t.Azimuth]
+         ["inclination", yJ.B.Inclination],
+         ["turbidity", yJ.B.Turbidity],
+         ["luminance", yJ.B.Luminance],
+         ["rayleigh", yJ.B.Rayleigh],
+         ["mieCoefficient", yJ.B.MieCoefficient],
+         ["mieDirectionalG", yJ.B.MieDirectionalG],
+         ["distance", yJ.B.Distance],
+         ["azimuth", yJ.B.Azimuth]
```

#### 790. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7555-L7557` → after: `L7517-L7519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7517-L7519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7517-L7519) · [Before (L7555-L7557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7555-L7557)

```diff
-         ["sunPosition", nO.t.SunPosition, nO.t.SunPositionAt],
-         ["up", nO.t.Up, nO.t.UpAt],
-         ["vertexTint", nO.t.VertexTint, nO.t.VertexTintAt]
+         ["sunPosition", yJ.B.SunPosition, yJ.B.SunPositionAt],
+         ["up", yJ.B.Up, yJ.B.UpAt],
+         ["vertexTint", yJ.B.VertexTint, yJ.B.VertexTintAt]
```

#### 791. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7560-L7562` → after: `L7522-L7524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7522-L7524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7522-L7524) · [Before (L7560-L7562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7560-L7562)

```diff
-         ["xCameraOffset", nO.t.CameraOffsetX],
-         ["yCameraOffset", nO.t.CameraOffsetY],
-         ["zCameraOffset", nO.t.CameraOffsetZ]
+         ["xCameraOffset", yJ.B.CameraOffsetX],
+         ["yCameraOffset", yJ.B.CameraOffsetY],
+         ["zCameraOffset", yJ.B.CameraOffsetZ]
```

#### 792. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7565-L7567` → after: `L7527-L7529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7527-L7529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7527-L7529) · [Before (L7565-L7567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7565-L7567)

```diff
-         ["useSunPosition", nO.t.UseSunPosition],
-         ["dithering", nO.t.Dithering],
-         ["infiniteDistance", nO.t.InfiniteDistance]
+         ["useSunPosition", yJ.B.UseSunPosition],
+         ["dithering", yJ.B.Dithering],
+         ["infiniteDistance", yJ.B.InfiniteDistance]
```

#### 793. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7597` → after: `L7559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7559) · [Before (L7597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7597)

```diff
-                       return "string" !== typeof MM ? null : null !== (rM = null === (iM = gn.exec(MM)) || void 0 === iM || null === (OM = iM.groups) || void 0 === OM ? void 0 : OM.base64) && void 0 !== rM ? rM : null
+                       return "string" !== typeof VV ? null : null !== (eV = null === (xV = AQ.exec(VV)) || void 0 === xV || null === (JV = xV.groups) || void 0 === JV ? void 0 : JV.base64) && void 0 !== eV ? eV : null
```

#### 794. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7601` → after: `L7563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7563) · [Before (L7601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7601)

```diff
-                 }(OM) || (iM(`Ignoring texture pack skybox ${rM}, whose faces are not all data URLs`, null), !1)
+                 }(JV) || (xV(`Ignoring texture pack skybox ${eV}, whose faces are not all data URLs`, null), !1)
```

#### 795. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7614` → after: `L7576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7576) · [Before (L7614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7614)

```diff
-         this.host = MM, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.dh = !1, this.wait = null !== (rM = MM.wait) && void 0 !== rM ? rM : (MM, rM) => {
+         this.host = VV, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.ik = !1, this.wait = null !== (eV = VV.wait) && void 0 !== eV ? eV : (VV, eV) => {
```

#### 796. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7617-L7618` → after: `L7579-L7580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7579-L7580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7579-L7580) · [Before (L7617-L7618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7617-L7618)

```diff
-           loadImage: null !== (iM = MM.loadImage) && void 0 !== iM ? iM : Ln,
-           SOM: null !== (OM = MM.SOM) && void 0 !== OM ? OM : rn.o,
+           loadImage: null !== (xV = VV.loadImage) && void 0 !== xV ? xV : nQ,
+           FYV: null !== (JV = VV.FYV) && void 0 !== JV ? JV : VQ.q,
```

#### 797. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7621` → after: `L7583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7583) · [Before (L7621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7621)

```diff
-               kind: nO.dc.SkyImagesReady,
+               kind: yJ.ic.SkyImagesReady,
```

#### 798. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7626` → after: `L7588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7588) · [Before (L7626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7626)

```diff
-             MM.warn(`sky image set ${rM} (${iM}) didn't load: the last sky stays`, OM)
+             VV.warn(`sky image set ${eV} (${xV}) didn't load: the last sky stays`, JV)
```

#### 799. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7632` → after: `L7594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7594) · [Before (L7632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7632)

```diff
-         this.wait(On.d, (() => {
+         this.wait(eQ.c, (() => {
```

#### 800. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7635` → after: `L7597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7597) · [Before (L7635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7635)

```diff
-           this.write(null !== MM && void 0 !== MM ? MM : {})
+           this.write(null !== VV && void 0 !== VV ? VV : {})
```

#### 801. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7648` → after: `L7610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7610) · [Before (L7648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7648)

```diff
-         this.dh = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
+         this.ik = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
```

#### 802. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7651` → after: `L7613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7613) · [Before (L7651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7651)

```diff
-         if (this.dh) return;
+         if (this.ik) return;
```

#### 803. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7659-L7660` → after: `L7621-L7622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7621-L7622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7621-L7622) · [Before (L7659-L7660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7659-L7660)

```diff
-           this.written = rM, this.loader.reset(rM.sets), this.queue = this.queue.filter((MM => MM.kind !== nO.dc.SkyImagesReady)), this.queue.push({
-             kind: nO.dc.SkyTable,
+           this.written = eV, this.loader.reset(eV.sets), this.queue = this.queue.filter((VV => VV.kind !== yJ.ic.SkyImagesReady)), this.queue.push({
+             kind: yJ.ic.SkyTable,
```

#### 804. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7667-L7682` → after: `L7629-L7644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7629-L7644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7629-L7644) · [Before (L7667-L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7667-L7682)

```diff
-     var un = iM(3096),
-       Rn = iM(3349),
-       pn = iM(267),
-       Wn = iM(166),
-       sn = iM(3100),
-       Dn = iM(3109),
-       kn = iM(236),
-       Zn = iM(243),
-       fn = iM(3227),
-       Yn = iM(3245),
-       Nn = iM(3251),
-       An = iM(103),
-       xn = iM(3317),
-       vn = iM(2602),
-       Fn = iM(308),
-       Bn = iM(41922);
+     var NQ = xV(3119),
+       XQ = xV(3348),
+       MQ = xV(323),
+       zQ = xV(188),
+       GQ = xV(3125),
+       WQ = xV(3131),
+       RQ = xV(291),
+       gQ = xV(296),
+       DQ = xV(3233),
+       iQ = xV(3252),
+       CQ = xV(3264),
+       aQ = xV(115),
+       oQ = xV(3321),
+       cQ = xV(2649),
+       hQ = xV(348),
+       lQ = xV(42125);
```

#### 805. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7685-L7686` → after: `L7647-L7648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7647-L7648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7647-L7648) · [Before (L7685-L7686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7685-L7686)

```diff
-         this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, Sj.h)(DO.M, (MM => {
-           this.onReply((0, Oj.d)(DO.M, MM), performance.now())
+         this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, xU.l)(RJ.M, (VV => {
+           this.onReply((0, eU.i)(RJ.M, VV), performance.now())
```

#### 806. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7690` → after: `L7652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7652) · [Before (L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7690)

```diff
-         null === this.id ? this.id = MM : MM !== this.id && (this.id = MM, this.sentMs = document.hidden ? null : rM)
+         null === this.id ? this.id = VV : VV !== this.id && (this.id = VV, this.sentMs = document.hidden ? null : eV)
```

#### 807. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7757-L7759` → after: `L7719-L7721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7719-L7721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7719-L7721) · [Before (L7757-L7759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7757-L7759)

```diff
-         const iM = MM.headerWord(nO.K.Pacing),
-           OM = MM.headerWord(nO.K.PacingLagUs),
-           SM = (iM >>> nO._.LagsShift) - (this.word >>> nO._.LagsShift) & nO._.CountMask,
+         const xV = VV.headerWord(yJ.Q.Pacing),
+           JV = VV.headerWord(yJ.Q.PacingLagUs),
+           YV = (xV >>> yJ.gb.LagsShift) - (this.word >>> yJ.gb.LagsShift) & yJ.gb.CountMask,
```

#### 808. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7762` → after: `L7724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7724) · [Before (L7762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7762)

```diff
-         this.word = iM, this.lagUs = OM, this.primed = !0, aM && rM && SM > 0 && 0 !== (iM & nO._.Defaulted) && this.lags.add(jM, SM)
+         this.word = xV, this.lagUs = JV, this.primed = !0, yV && eV && YV > 0 && 0 !== (xV & yJ.gb.Defaulted) && this.lags.add(UV, YV)
```

#### 809. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7771-L7777` → after: `L7733-L7739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7733-L7739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7733-L7739) · [Before (L7771-L7777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7771-L7777)

```diff
-     var Vn = iM(3219),
-       cn = iM(34962),
-       MQ = iM(3230),
-       rQ = iM(41984),
-       iQ = iM(34959),
-       OQ = iM(3118),
-       SQ = iM(3235);
+     var uQ = xV(3224),
+       sQ = xV(35249),
+       SQ = xV(3239),
+       IQ = xV(42177),
+       dQ = xV(35247),
+       OQ = xV(3139),
+       Vn = xV(3242);
```

#### 810. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7806` → after: `L7768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7768) · [Before (L7806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7806)

```diff
-         this.shell = MM, this.tracker = new Dn.e, this.gpu = new In, this.pacing = new Tn, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpan … [truncated]
+         this.shell = VV, this.tracker = new WQ.e, this.gpu = new fQ, this.pacing = new HQ, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpan … [truncated]
```

#### 811. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7812` → after: `L7774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7774) · [Before (L7812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7812)

```diff
-         }, (0, cn.c)(MM.backend, MM.canvas, MM.adapterVendor), this.tracker.start((() => !MM.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, OQ.c)("wasm", (() => {
+         }, (0, sQ.c)(VV.backend, VV.canvas, VV.adapterVendor), this.tracker.start((() => !VV.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, OQ.b)("wasm", (() => {
```

#### 812. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7816-L7817` → after: `L7778-L7779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7778-L7779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7778-L7779) · [Before (L7816-L7817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7816-L7817)

```diff
-           } = (0, rQ.g)();
-           return `${MM.backend}, quality steps aim at up to ${SQ.c.target.maxFps} fps, pixel n ${rM}, msaa ${iM}`
+           } = (0, IQ.d)();
+           return `${VV.backend}, quality steps aim at up to ${Vn.d.target.maxFps} fps, pixel n ${eV}, msaa ${xV}`
```

#### 813. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7831` → after: `L7793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7793) · [Before (L7831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7831)

```diff
-         this.ping.onFrame(MM.headerWord(nO.K.PingSent), rM), this.sendsStartMs = rM, this.sendsEndMs = iM
+         this.ping.onFrame(VV.headerWord(yJ.Q.PingSent), eV), this.sendsStartMs = eV, this.sendsEndMs = xV
```

#### 814. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7835` → after: `L7797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7797) · [Before (L7835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7835)

```diff
-         this.ping.onFrame(MM.headerWord(nO.K.PingSent), iM);
+         this.ping.onFrame(VV.headerWord(yJ.Q.PingSent), xV);
```

#### 815. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7838` → after: `L7800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7800) · [Before (L7838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7838)

```diff
-         const aM = MM.headerWord(nO.K.TickUs) / 1e3 + (0, lO.K)();
+         const yV = VV.headerWord(yJ.Q.TickUs) / 1e3 + (0, EJ.J)();
```

#### 816. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7840` → after: `L7802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7802) · [Before (L7840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7840)

```diff
-         (jM.kE(aM), null === (SM = this.frameDebug) || void 0 === SM || SM.wasmFrame(MM, rM, iM, OM, jM.isSampling(), aM), null !== this.game) && (null === (PM = this.frameDebug) || void 0 === PM || PM.inGame());
+         (UV.Iq(yV), null === (YV = this.frameDebug) || void 0 === YV || YV.wasmFrame(VV, eV, xV, JV, UV.isSampling(), yV), null !== this.game) && (null === (pV = this.frameDebug) || void 0 === pV || pV.inGame());
```

#### 817. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7845` → after: `L7807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7807) · [Before (L7845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7845)

```diff
-         this.gpu.onFrame(MM.headerWord(nO.K.GpuSampled), MM.headerWord(nO.K.GpuTimed), MM.headerWord(nO.K.GpuFrameUs), jM.isSampling()) && jM.onGpuSampleStarted(), jM.onFrameCpu(QM + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(rM)
+         this.gpu.onFrame(VV.headerWord(yJ.Q.GpuSampled), VV.headerWord(yJ.Q.GpuTimed), VV.headerWord(yJ.Q.GpuFrameUs), UV.isSampling()) && UV.onGpuSampleStarted(), UV.onFrameCpu(nV + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(eV)
```

#### 818. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7871` → after: `L7833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7833) · [Before (L7871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7871)

```diff
-         if (!(rM < Nn.b)) {
+         if (!(eV < CQ.e)) {
```

#### 819. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7890` → after: `L7852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7852) · [Before (L7890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7890)

```diff
-           QM = nM ? aM : (0, sn.h)(aM),
+           nV = QV ? yV : (0, GQ.g)(yV),
```

#### 820. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7894` → after: `L7856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7856) · [Before (L7894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7894)

```diff
-           HM = (0, Yn.x)((0, Yn.v)(LM), this.unsentPage),
+           rV = (0, iQ.A)((0, iQ.w)(ZV), this.unsentPage),
```

#### 821. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7901` → after: `L7863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7863) · [Before (L7901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7901)

```diff
-               dM = (0, fn.g)({
+               EV = (0, DQ.f)({
```

#### 822. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7904` → after: `L7866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7866) · [Before (L7904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7904)

```diff
-                 autoMsaaOff: (0, iQ.e)()
+                 autoMsaaOff: (0, dQ.b)()
```

#### 823. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7906` → after: `L7868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7868) · [Before (L7906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7906)

```diff
-             for (const yM of (0, Rn.f)()) {
+             for (const BV of (0, XQ.c)()) {
```

#### 824. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7909-L7911` → after: `L7871-L7873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7871-L7873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7871-L7873) · [Before (L7909-L7911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7909-L7911)

```diff
-               if ((0, pn.u)(lM)) EM = (0, Yn.d)(lM);
-               else if ((0, Yn.j)(lM)) EM = nM[lM];
-               else if ((0, fn.j)(lM)) EM = dM[lM];
+               if ((0, MQ.A)(jV)) qV = (0, iQ.e)(jV);
+               else if ((0, iQ.k)(jV)) qV = QV[jV];
+               else if ((0, DQ.i)(jV)) qV = EV[jV];
```

#### 825. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7916` → after: `L7878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7878) · [Before (L7916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7916)

```diff
-                 case "aP":
+                 case "rp":
```

#### 826. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7919-L7920` → after: `L7881-L7882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7881-L7882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7881-L7882) · [Before (L7919-L7920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7919-L7920)

```diff
-                 case "LP":
-                   EM = (0, MQ.F)((0, rQ.g)().n);
+                 case "jp":
+                   qV = (0, SQ.B)((0, IQ.d)().n);
```

#### 827. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7922` → after: `L7884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7884) · [Before (L7922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7922)

```diff
-                 case "mP":
+                 case "qp":
```

#### 828. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7925` → after: `L7887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7887) · [Before (L7925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7925)

```diff
-                 case "HP":
+                 case "tp":
```

#### 829. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7928` → after: `L7890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7890) · [Before (L7928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7928)

```diff
-                 case "hP":
+                 case "Fp":
```

#### 830. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7931` → after: `L7893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7893) · [Before (L7931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7931)

```diff
-                 case "JP":
+                 case "Tp":
```

#### 831. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7934` → after: `L7896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7896) · [Before (L7934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7934)

```diff
-                 case "dP":
+                 case "Pp":
```

#### 832. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7937` → after: `L7899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7899) · [Before (L7937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7937)

```diff
-                 case "yP":
+                 case "Ap":
```

#### 833. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7940` → after: `L7902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7902) · [Before (L7940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7940)

```diff
-                 case "lP":
+                 case "Np":
```

#### 834. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7943` → after: `L7905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7905) · [Before (L7943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7943)

```diff
-                 case "EP":
+                 case "Xp":
```

#### 835. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7946` → after: `L7908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7908) · [Before (L7946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7946)

```diff
-                 case "UP":
+                 case "Mp":
```

#### 836. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7949` → after: `L7911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7911) · [Before (L7949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7949)

```diff
-                 case "GP":
+                 case "zp":
```

#### 837. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7952` → after: `L7914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7914) · [Before (L7952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7952)

```diff
-                 case "CP":
+                 case "Gp":
```

#### 838. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7955` → after: `L7917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7917) · [Before (L7955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7955)

```diff
-                 case "tP":
+                 case "Dp":
```

#### 839. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7958` → after: `L7920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7920) · [Before (L7958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7958)

```diff
-                 case "gP":
+                 case "Cp":
```

#### 840. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7961` → after: `L7923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7923) · [Before (L7961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7961)

```diff
-                 case "eP":
+                 case "Wp":
```

#### 841. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7964` → after: `L7926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7926) · [Before (L7964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7964)

```diff
-                 case "bP":
+                 case "Rp":
```

#### 842. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7967` → after: `L7929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7929) · [Before (L7967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7967)

```diff
-                 case "wP":
+                 case "gp":
```

#### 843. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7970` → after: `L7932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7932) · [Before (L7970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7970)

```diff
-                 case "uP":
+                 case "ap":
```

#### 844. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7973` → after: `L7935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7935) · [Before (L7973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7973)

```diff
-                 case "RP":
+                 case "cp":
```

#### 845. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7976` → after: `L7938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7938) · [Before (L7976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7976)

```diff
-                 case "pP":
+                 case "hp":
```

#### 846. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7979` → after: `L7941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7941) · [Before (L7979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7979)

```diff
-                 case "WP":
+                 case "lp":
```

#### 847. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7982-L7983` → after: `L7944-L7945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7944-L7945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7944-L7945) · [Before (L7982-L7983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7982-L7983)

```diff
-                 case "FP":
-                   EM = (0, un.j)(aM);
+                 case "eQ":
+                   qV = (0, NQ.h)(yV);
```

#### 848. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7985` → after: `L7947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7947) · [Before (L7985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7985)

```diff
-                 case "zP":
+                 case "Bp":
```

#### 849. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7988-L8002` → after: `L7950-L7964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7950-L7964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7950-L7964) · [Before (L7988-L8002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7988-L8002)

```diff
-                 case "sP":
-                 case "DP":
-                 case "kP":
-                 case "ZP":
-                 case "oP":
-                 case "fP":
-                 case "YP":
-                 case "NP":
-                 case "AP":
-                 case "xP":
-                 case "vP":
-                 case "BP":
-                 case "XP":
-                 case "IP":
-                 case "KP":
+                 case "Lp":
+                 case "fp":
+                 case "mp":
+                 case "Kp":
+                 case "Hp":
+                 case "sp":
+                 case "Sp":
+                 case "Ip":
+                 case "dp":
+                 case "Op":
+                 case "VQ":
+                 case "xQ":
+                 case "JQ":
+                 case "YQ":
+                 case "UQ":
```

#### 850. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8005` → after: `L7967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7967) · [Before (L8005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8005)

```diff
-                 case "Hn":
+                 case "qQ":
```

#### 851. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8008` → after: `L7970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7970) · [Before (L8008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8008)

```diff
-                 case "hn":
+                 case "tQ":
```

#### 852. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8011` → after: `L7973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7973) · [Before (L8011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8011)

```diff
-                 case "Jn":
+                 case "FQ":
```

#### 853. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8014` → after: `L7976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7976) · [Before (L8014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8014)

```diff
-                 case "dn":
+                 case "TQ":
```

#### 854. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8017` → after: `L7979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7979) · [Before (L8017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8017)

```diff
-                 case "yn":
+                 case "AQ":
```

#### 855. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8020` → after: `L7982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7982) · [Before (L8020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8020)

```diff
-                 case "En":
+                 case "NQ":
```

#### 856. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8023-L8024` → after: `L7985-L7986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7985-L7986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7985-L7986) · [Before (L8023-L8024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8023-L8024)

```diff
-                 case "Un":
-                   EM = null !== (QM = OM.d.get("gameEntrySource")) && void 0 !== QM ? QM : Wn.e;
+                 case "MQ":
+                   qV = null !== (nV = JV.b.get("gameEntrySource")) && void 0 !== nV ? nV : zQ.g;
```

#### 857. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8026-L8027` → after: `L7988-L7989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7988-L7989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7988-L7989) · [Before (L8026-L8027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8026-L8027)

```diff
-                 case "Gn":
-                   EM = null !== (zM = rM.frameLimiter) && void 0 !== zM ? zM : Wn.e;
+                 case "zQ":
+                   qV = null !== (wV = eV.frameLimiter) && void 0 !== wV ? wV : zQ.g;
```

#### 858. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8029-L8030` → after: `L7991-L7992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7991-L7992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7991-L7992) · [Before (L8029-L8030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8029-L8030)

```diff
-                 case "Cn":
-                   EM = (0, kn.j)();
+                 case "GQ":
+                   qV = (0, RQ.i)();
```

#### 859. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8032-L8033` → after: `L7994-L7995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7994-L7995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7994-L7995) · [Before (L8032-L8033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8032-L8033)

```diff
-                 case "bn":
-                   EM = null !== (LM = (0, Zn.e)()) && void 0 !== LM ? LM : Wn.e;
+                 case "WQ":
+                   qV = null !== (ZV = (0, gQ.d)()) && void 0 !== ZV ? ZV : zQ.g;
```

#### 860. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8035` → after: `L7997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7997) · [Before (L8035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8035)

```diff
-                 case "wn":
+                 case "RQ":
```

#### 861. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8038-L8039` → after: `L8000-L8001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8000-L8001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8000-L8001) · [Before (L8038-L8039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8038-L8039)

```diff
-                 case "tn":
-                   EM = (0, Rn.j)(-(new Date).getTimezoneOffset());
+                 case "gQ":
+                   qV = (0, XQ.d)(-(new Date).getTimezoneOffset());
```

#### 862. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8041-L8042` → after: `L8003-L8004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8003-L8004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8003-L8004) · [Before (L8041-L8042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8041-L8042)

```diff
-                 case "sn":
-                   EM = null !== (mM = MM.fallbackReason) && void 0 !== mM ? mM : Wn.e;
+                 case "cQ":
+                   qV = null !== (vV = VV.fallbackReason) && void 0 !== vV ? vV : zQ.g;
```

#### 863. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8044` → after: `L8006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8006) · [Before (L8044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8044)

```diff
-                 case "Zn":
+                 case "LQ":
```

#### 864. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8047` → after: `L8009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8009) · [Before (L8047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8047)

```diff
-                 case "fn":
+                 case "fQ":
```

#### 865. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8050` → after: `L8012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8012) · [Before (L8050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8050)

```diff
-                 case "un":
+                 case "iQ":
```

#### 866. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8053-L8054` → after: `L8015-L8016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8015-L8016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8015-L8016) · [Before (L8053-L8054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8053-L8054)

```diff
-                 case "Rn":
-                   EM = (0, vn.d)().replayState;
+                 case "CQ":
+                   qV = (0, cQ.g)().replayState;
```

#### 867. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8056-L8057` → after: `L8018-L8019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8018-L8019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8018-L8019) · [Before (L8056-L8057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8056-L8057)

```diff
-                 case "pn":
-                   EM = (0, vn.d)().replaySelection;
+                 case "aQ":
+                   qV = (0, cQ.g)().replaySelection;
```

#### 868. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8059` → after: `L8021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8021) · [Before (L8059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8059)

```diff
-                 case "Wn":
+                 case "oQ":
```

#### 869. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8062` → after: `L8024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8024) · [Before (L8062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8062)

```diff
-                 case "Yn":
+                 case "mQ":
```

#### 870. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8065` → after: `L8027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8027) · [Before (L8065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8065)

```diff
-                 case "Nn": {
+                 case "KQ": {
```

#### 871. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8070-L8071` → after: `L8032-L8033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8032-L8033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8032-L8033) · [Before (L8070-L8071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8070-L8071)

```diff
-                 case "xn":
-                   EM = Fn.A;
+                 case "uQ":
+                   qV = hQ.C;
```

#### 872. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8073-L8074` → after: `L8035-L8036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8035-L8036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8035-L8036) · [Before (L8073-L8074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8073-L8074)

```diff
-                 case "Tn":
-                   EM = (0, Yn.m)();
+                 case "xn":
+                   qV = (0, iQ.o)();
```

#### 873. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8076-L8078` → after: `L8038-L8040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8038-L8040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8038-L8040) · [Before (L8076-L8078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8076-L8078)

```diff
-                 case "gn": {
-                   const rM = MM.DJ();
-                   EM = null === rM ? Wn.e : String(rM);
+                 case "DQ": {
+                   const eV = VV.eE();
+                   qV = null === eV ? zQ.g : String(eV);
```

#### 874. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8081-L8083` → after: `L8043-L8045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8043-L8045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8043-L8045) · [Before (L8081-L8083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8081-L8083)

```diff
-                 case "Dn":
-                 case "kn":
-                   EM = Wn.e;
+                 case "hQ":
+                 case "lQ":
+                   qV = zQ.g;
```

#### 875. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8086` → after: `L8048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8048) · [Before (L8086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8086)

```diff
-                   throw new Error(`Unhandled field name: ${lM}`)
+                   throw new Error(`Unhandled field name: ${jV}`)
```

#### 876. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8088` → after: `L8050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8050) · [Before (L8088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8088)

```diff
-               if (void 0 === EM) throw new Error(`Metric ${lM} has no value`);
+               if (void 0 === qV) throw new Error(`Metric ${jV} has no value`);
```

#### 877. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8100-L8104` → after: `L8062-L8066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8062-L8066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8062-L8066) · [Before (L8100-L8104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8100-L8104)

```diff
-             return (0, Oi.e)(), MM(hM.n.Send, rM, iM)
-           }(this.shell.writeCmd, mM.ld, function(MM) {
-             const rM = (0, fM.f)((0, ai.h)(MM)),
-               iM = new Uint8Array(hM.Qd.BYTES + rM.length);
-             return new DataView(iM.buffer).setUint16(0, ai.d.AnalyticsUpdate, !0), iM.set(rM, hM.Qd.BYTES), iM
+             return (0, Jx.e)(), VV(kV.k.Send, eV, xV)
+           }(this.shell.writeCmd, vV.td, function(VV) {
+             const eV = (0, oV.g)((0, yx.h)(VV)),
+               xV = new Uint8Array(kV.ce.BYTES + eV.length);
+             return new DataView(xV.buffer).setUint16(0, yx.d.AnalyticsUpdate, !0), xV.set(eV, kV.ce.BYTES), xV
```

#### 878. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8106` → after: `L8068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8068) · [Before (L8106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8106)

```diff
-         this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, un.g), (0, Yn.s)(JM, "wasm", LM)
+         this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, NQ.g), (0, iQ.v)(bV, "wasm", ZV)
```

#### 879. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8109` → after: `L8071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8071) · [Before (L8109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8109)

```diff
-     var nQ = iM(40731);
+     var Yn = xV(40889);
```

#### 880. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8113-L8115` → after: `L8075-L8077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8075-L8077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8075-L8077) · [Before (L8113-L8115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8113-L8115)

```diff
-       return (0, nQ.e)(((MM, iM, OM) => rM.jP(MM, iM, OM)), ((rM, iM, SM) => {
-         const jM = `${rM},${iM},${SM}`;
-         return OM.has(jM) || OM.set(jM, (0, Xr.e)(MM, rM, iM, SM)), OM.get(jM)
+       return (0, Yn.c)(((VV, xV, JV) => eV.vp(VV, xV, JV)), ((eV, xV, YV) => {
+         const UV = `${eV},${xV},${YV}`;
+         return JV.has(UV) || JV.set(UV, (0, He.c)(VV, eV, xV, YV)), JV.get(UV)
```

#### 881. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8118-L8119` → after: `L8080-L8081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8080-L8081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8080-L8081) · [Before (L8118-L8119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8118-L8119)

```diff
-     var zQ = iM(40739),
-       LQ = iM(41975);
+     var yn = xV(40894),
+       pn = xV(42171);
```

#### 882. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8122-L8123` → after: `L8084-L8085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8084-L8085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8084-L8085) · [Before (L8122-L8123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8122-L8123)

```diff
-       const rM = null !== MM && 0 !== (hM.v.playerFlags(MM.api.apiView, 0) & hM.yd.CursorAim);
-       rM !== (0, LQ.n)() && (0, LQ.F)(rM, null !== MM)
+       const eV = null !== VV && 0 !== (kV.s.playerFlags(VV.api.apiView, 0) & kV.Ld.CursorAim);
+       eV !== (0, pn.l)() && (0, pn.D)(eV, null !== VV)
```

#### 883. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8127` → after: `L8089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR8089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L8089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8089) · [Before (L8127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/wasmClientGame.js#L8127)

```diff
-       return (0, sO.d)(DO.D, MM)
+       return (0, WJ.b)(RJ.F, VV)
```
