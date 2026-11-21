# Changed — Bundle Modifications Report (Part 015 / 132)

- **Updated at**: `2026-11-21T10:00 JST`
- **Part**: `15 / 132` (**347** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 014](part-014.md) · [Part 016 →](part-016.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/113.js` (halsg.2bd74967 → x17cru.159bd7ce · continued)

- **File**: `bundles/bloxd.io/chunks/js/113.js` (4571 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787)

#### 1393. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10457-L10459` → after: `L11089-L11091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11089-L11091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11089-L11091) · [Before (L10457-L10459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10457-L10459)

```diff
-           PH: Gb
-         } = this, Ub = null === (hb = Gb.pW.Dub(Gb.bM)) || void 0 === hb ? void 0 : hb.inventory, Lb = null === Ub || void 0 === Ub ? void 0 : Ub.getSelectedSlotIndex();
-         return (0, iu.J)(Lb) ? (console.error("Failed to get selected slot"), {
+           Jl: Wd
+         } = this, Pd = null === (kd = Wd.vG.UJd(Wd.kU)) || void 0 === kd ? void 0 : kd.inventory, Zd = null === Pd || void 0 === Pd ? void 0 : Pd.getSelectedSlotIndex();
+         return (0, bJ.I)(Zd) ? (console.error("Failed to get selected slot"), {
```

#### 1394. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10476` → after: `L11108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11108) · [Before (L10476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10476)

```diff
-         null === this.fireInterval && (this.fireInterval = null !== (bb = this.bloxd.getItemStat(this.PH.bM, this.typeObj.name, "fireInterval")) && void 0 !== bb ? bb : 0);
+         null === this.fireInterval && (this.fireInterval = null !== (dd = this.bloxd.getItemStat(this.Jl.kU, this.typeObj.name, "fireInterval")) && void 0 !== dd ? dd : 0);
```

#### 1395. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10485` → after: `L11117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11117) · [Before (L10485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10485)

```diff
-       Fhb() {
+       kpd() {
```

#### 1396. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10488` → after: `L11120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11120) · [Before (L10488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10488)

```diff
-       Ehb() {
+       Akd() {
```

#### 1397. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10494` → after: `L11126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11126) · [Before (L10494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10494)

```diff
-       aSb() {
+       qCd() {
```

#### 1398. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10497` → after: `L11129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11129) · [Before (L10497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10497)

```diff
-       qhb() {
+       wkd() {
```

#### 1399. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10500` → after: `L11132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11132) · [Before (L10500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10500)

```diff
-       SSb() {
+       xCd() {
```

#### 1400. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10518-L10519` → after: `L11150-L11151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11150-L11151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11150-L11151) · [Before (L10518-L10519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10518-L10519)

```diff
-       fhb() {
-         return null !== (0, Tu.p)(this.pickActionHelper) ? this._performAltAction() : this.fire(Date.now(), !1)
+       ppd() {
+         return null !== (0, HJ.l)(this.pickActionHelper) ? this._performAltAction() : this.fire(Date.now(), !1)
```

#### 1401. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10522` → after: `L11154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11154) · [Before (L10522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10522)

```diff
-         super.gH(bb, ub), this.inputs > 0 && this.getFireInterval() && this.fire(ub, !0)
+         super.Do(dd, Jd), this.inputs > 0 && this.getFireInterval() && this.fire(Jd, !0)
```

#### 1402. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10526` → after: `L11158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11158) · [Before (L10526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10526)

```diff
-         this.firstPersonPosOffset = ob.YX.Lerp(this.firingOffset, this.readyOffset, hb), super.renderTickLocalPlayer(bb, ub)
+         this.firstPersonPosOffset = ed.IL.Lerp(this.firingOffset, this.readyOffset, kd), super.renderTickLocalPlayer(dd, Jd)
```

#### 1403. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10532` → after: `L11164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11164) · [Before (L10532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10532)

```diff
-     var Qu = hb(38081);
+     var AJ = kd(38599);
```

#### 1404. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10535-L10537` → after: `L11167-L11169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11167-L11169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11167-L11169) · [Before (L10535-L10537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10535-L10537)

```diff
-       const bb = (0, Zb.g)(),
-         ub = bb.pW.Tub(bb.bM);
-       (0, Zb.e)().updateHeldVehicleStatus(), Gh(bb, ub)
+       const dd = (0, Qd.e)(),
+         Jd = dd.vG.Wkd(dd.kU);
+       (0, Qd.d)().updateHeldVehicleStatus(), Pk(dd, Jd)
```

#### 1405. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10548` → after: `L11180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11180) · [Before (L10548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10548)

```diff
-       return wb.i.subscribe("updatedInventory", (() => {
+       return ld.j.subscribe("updatedInventory", (() => {
```

#### 1406. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10551` → after: `L11183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11183) · [Before (L10551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10551)

```diff
-         name: "bC",
+         name: "Dv",
```

#### 1407. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10554` → after: `L11186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11186) · [Before (L10554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10554)

```diff
-           bC: null,
+           Dv: null,
```

#### 1408. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10576` → after: `L11208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11208) · [Before (L10576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10576)

```diff
-         UW: function(ub, hb) {
+         QG: function(Jd, kd) {
```

#### 1409. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10579-L10581` → after: `L11211-L11213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11211-L11213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11211-L11213) · [Before (L10579-L10581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10579-L10581)

```diff
-             Gb = new ab.c(bb, ub);
-           hb.fistItem = new pb.b(bb, hb, Bb, Gb), hb.bC = hb.fistItem, hb.heldType = "Fist", hb._standardItem = new vb(bb, hb, Bb, hb.fistItem, Gb), hb._blockItem = new Su(bb, hb, Bb, hb.fistItem, Gb), hb._chargeableItem = new pu(bb, hb, Bb, hb.fistItem, Gb), hb._gunItem = new Fu … [truncated]
-             hb.bC.LSb()
+             Wd = new Kd.d(dd, Jd);
+           kd.fistItem = new Od.c(dd, kd, pd, Wd), kd.Dv = kd.fistItem, kd.heldType = "Fist", kd._standardItem = new Sd(dd, kd, pd, kd.fistItem, Wd), kd._blockItem = new KJ(dd, kd, pd, kd.fistItem, Wd), kd._chargeableItem = new eJ(dd, kd, pd, kd.fistItem, Wd), kd._gunItem = new tJ … [truncated]
+             kd.Dv.GCd()
```

#### 1410. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10583-L10585` → after: `L11215-L11217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11215-L11217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11215-L11217) · [Before (L10583-L10585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10583-L10585)

```diff
-             hb.bC !== hb.fistItem && (hb.bC.reset(), hb.bC = hb.fistItem, hb.heldType = "Fist", hb.heldItemName = null, hb._heldLightTintFloor = null, hb.fistItem.selected(), wb.i.vp("newLocalPlayerHeldItem", hb.bC))
-           }))), hb._playerInvisSub = wb.i.subscribe(`otherEntitySettingsClientifiedEId|${hb.yN}|_invisibleEffect`, (ub => {
-             hb.yN !== bb.bM && (hb._visible = !ub, hb.bC && hb.bC.LSb())
+             kd.Dv !== kd.fistItem && (kd.Dv.reset(), kd.Dv = kd.fistItem, kd.heldType = "Fist", kd.heldItemName = null, kd._heldLightTintFloor = null, kd.fistItem.selected(), ld.j.nO("newLocalPlayerHeldItem", kd.Dv))
+           }))), kd._playerInvisSub = ld.j.subscribe(`otherEntitySettingsClientifiedEId|${kd.qS}|_invisibleEffect`, (Jd => {
+             kd.qS !== dd.kU && (kd._visible = !Jd, kd.Dv && kd.Dv.GCd())
```

#### 1411. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10588-L10591` → after: `L11220-L11223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11220-L11223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11220-L11223) · [Before (L10588-L10591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10588-L10591)

```diff
-         gJ: function(bb, ub) {
-           for (const hb in ub) ub[hb] instanceof Xb.e && ub[hb].reset();
-           for (const hb in ub) ub[hb] instanceof Xb.e && ub[hb].destroy();
-           wb.i.unsubscribe(ub._playerVisSub), wb.i.unsubscribe(ub._playerInvisSub)
+         RY: function(dd, Jd) {
+           for (const kd in Jd) Jd[kd] instanceof Ld.b && Jd[kd].reset();
+           for (const kd in Jd) Jd[kd] instanceof Ld.b && Jd[kd].destroy();
+           ld.j.unsubscribe(Jd._playerVisSub), ld.j.unsubscribe(Jd._playerInvisSub)
```

#### 1412. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10595` → after: `L11227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11227) · [Before (L10595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10595)

```diff
-           for (const Ob of hb) Gh(bb, Ob), Ob.bC ? Ob.bC.gH(ub, Bb) : console.error(new Error(`state.helditem for player ${Ob.yN} is falsy - ${Ob.bC}`))
+           for (const Nd of kd) Pk(dd, Nd), Nd.Dv ? Nd.Dv.Do(Jd, pd) : console.error(new Error(`state.helditem for player ${Nd.qS} is falsy - ${Nd.Dv}`))
```

#### 1413. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10597` → after: `L11229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11229) · [Before (L10597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10597)

```diff
-         oW: function(ub, hb) {
+         xG: function(Jd, kd) {
```

#### 1414. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10599-L10600` → after: `L11231-L11232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11231-L11232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11231-L11232) · [Before (L10599-L10600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10599-L10600)

```diff
-             Ob = (0, Qu.i)();
-           for (const Gb of hb) Gb.bC ? Gb.yN === bb.bM || (0, Qu.l)(Gb.yN, Ob) ? Gb.bC.renderTickLocalPlayer(ub, Bb) : Gb.bC.renderTickNetworkedPlayer(ub, Bb) : console.error(new Error(`state.helditem for player ${Gb.yN} is falsy - ${Gb.bC}`))
+             Nd = (0, AJ.h)();
+           for (const Wd of kd) Wd.Dv ? Wd.qS === dd.kU || (0, AJ.l)(Wd.qS, Nd) ? Wd.Dv.renderTickLocalPlayer(Jd, pd) : Wd.Dv.renderTickNetworkedPlayer(Jd, pd) : console.error(new Error(`state.helditem for player ${Wd.qS} is falsy - ${Wd.Dv}`))
```

#### 1415. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10608-L10609` → after: `L11240-L11241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11240-L11241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11240-L11241) · [Before (L10608-L10609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10608-L10609)

```diff
-       const Ab = bb.pW.kub(ub.yN),
-         lb = bb.pW.gub(ub.yN),
+       const Rd = dd.vG.Nkd(Jd.qS),
+         Id = dd.vG.TJd(Jd.qS),
```

#### 1416. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10614-L10616` → after: `L11246-L11248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11246-L11248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11246-L11248) · [Before (L10614-L10616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10614-L10616)

```diff
-           const hb = bb.pW.Dub(ub.yN).selectedItem;
-           pb = null === hb || void 0 === hb ? void 0 : hb.typeObj, ob = null !== (Wb = null === hb || void 0 === hb || null === (Cb = hb.attributes) || void 0 === Cb || null === (db = Cb.customAttributes) || void 0 === db ? void 0 : db.enchantmentTier) && void 0 !== Wb ? Wb : nul … [truncated]
-         } else ub.networkedHeldItemName && (pb = Gb.z[ub.networkedHeldItemName], ob = ub.networkedHeldItemEnchantmentTier);
+           const kd = dd.vG.UJd(Jd.qS).selectedItem;
+           Od = null === kd || void 0 === kd ? void 0 : kd.typeObj, ed = null !== (vd = null === kd || void 0 === kd || null === (xd = kd.attributes) || void 0 === xd || null === (qd = xd.customAttributes) || void 0 === qd ? void 0 : qd.enchantmentTier) && void 0 !== vd ? vd : nul … [truncated]
+         } else Jd.networkedHeldItemName && (Od = Wd.D[Jd.networkedHeldItemName], ed = Jd.networkedHeldItemEnchantmentTier);
```

#### 1417. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10618` → after: `L11250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11250) · [Before (L10618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10618)

```diff
-       const rb = lb && bb.pW.xub(ub.yN).getSelectedSlotIndex() !== ub._lastInvenIdx,
+       const Bd = Id && dd.vG.yJd(Jd.qS).getSelectedSlotIndex() !== Jd._lastInvenIdx,
```

#### 1418. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10621-L10626` → after: `L11253-L11258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11253-L11258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11253-L11258) · [Before (L10621-L10626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10621-L10626)

```diff
-       (((null === (hb = pb) || void 0 === hb ? void 0 : hb.name) || null) !== ub.heldItemName || rb || jb) && (ub.bC !== ub.fistItem && ((null === (nb = pb) || void 0 === nb ? void 0 : nb.meta.rootId) !== bb.bloxd.getMetaInfo(ub.heldItemName).rootId || rb || jb) && ub.bC.reset(), … [truncated]
-       lb && (ub._lastInvenIdx = bb.pW.xub(ub.yN).getSelectedSlotIndex()), ub.heldItemName = null !== (Bb = null === (Lb = pb) || void 0 === Lb ? void 0 : Lb.name) && void 0 !== Bb ? Bb : null, ub.heldItemEnchantmentTier = ob;
-       const eb = pb && !(0, Gb.x)(pb.type) ? pb.uX : void 0,
-         Nb = Kb ? (0, Jb.n)(ub.yN) : null,
-         sb = Nb ? Gb.z[Nb].uX : void 0,
-         Mb = Kb && null !== (Yb = null === (Sb = bb.Qs[bb.bM]) || void 0 === Sb || null === (ab = Sb[ub.yN]) || void 0 === ab ? void 0 : ab._glowingEffect) && void 0 !== Yb && Yb ? tb.GLOWING_EFFECT_EMISSION : void 0;
+       (((null === (kd = Od) || void 0 === kd ? void 0 : kd.name) || null) !== Jd.heldItemName || Bd || sd) && (Jd.Dv !== Jd.fistItem && ((null === (ad = Od) || void 0 === ad ? void 0 : ad.meta.rootId) !== dd.bloxd.getMetaInfo(Jd.heldItemName).rootId || Bd || sd) && Jd.Dv.reset(), … [truncated]
+       Id && (Jd._lastInvenIdx = dd.vG.yJd(Jd.qS).getSelectedSlotIndex()), Jd.heldItemName = null !== (pd = null === (Zd = Od) || void 0 === Zd ? void 0 : Zd.name) && void 0 !== pd ? pd : null, Jd.heldItemEnchantmentTier = ed;
+       const fd = Od && !(0, Wd.C)(Od.type) ? Od.oL : void 0,
+         nd = Gd ? (0, Xd.q)(Jd.qS) : null,
+         Ud = nd ? Wd.D[nd].oL : void 0,
+         yd = Gd && null !== (gd = null === (Cd = dd.dU[dd.kU]) || void 0 === Cd || null === (Kd = Cd[Jd.qS]) || void 0 === Kd ? void 0 : Kd._glowingEffect) && void 0 !== gd && gd ? jd.GLOWING_EFFECT_EMISSION : void 0;
```

#### 1419. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10628-L10629` → after: `L11260-L11261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11260-L11261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11260-L11261) · [Before (L10628-L10629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10628-L10629)

```diff
-       const mb = null !== (Zb = null === (Xb = bb.pW.Eub(ub.yN)) || void 0 === Xb ? void 0 : Xb.isReplayLocalPlayer) && void 0 !== Zb && Zb;
-       if (ub.yN === bb.bM || mb) {
+       const Dd = null !== (Qd = null === (Ld = dd.vG.AJd(Jd.qS)) || void 0 === Ld ? void 0 : Ld.isReplayLocalPlayer) && void 0 !== Qd && Qd;
+       if (Jd.qS === dd.kU || Dd) {
```

#### 1420. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10631-L10632` → after: `L11263-L11264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11263-L11264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11263-L11264) · [Before (L10631-L10632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10631-L10632)

```diff
-           hOb: hb
-         } = bb.xX, {
+           lNd: kd
+         } = dd.UL, {
```

#### 1421. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10636-L10640` → after: `L11268-L11272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11268-L11272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11268-L11272) · [Before (L10636-L10640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10636-L10640)

```diff
-         } = bb.OW;
-         Ob().copy(bb.xX.eLb, null !== Mb && void 0 !== Mb ? Mb : Ob().ZERO);
-         const Yb = Kb ? Bb : null,
-           Sb = Kb && "number" === typeof Ub ? Ub : null,
-           ab = Kb && "number" === typeof Lb ? Lb : null,
+         } = dd.lG;
+         Nd().copy(dd.UL.uZd, null !== yd && void 0 !== yd ? yd : Nd().ZERO);
+         const gd = Gd ? pd : null,
+           Cd = Gd && "number" === typeof Pd ? Pd : null,
+           Kd = Gd && "number" === typeof Zd ? Zd : null,
```

#### 1422. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10642-L10644` → after: `L11274-L11276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11274-L11276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11274-L11276) · [Before (L10642-L10644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10642-L10644)

```diff
-             const hb = ub && !(0, Gb.x)(ub.type) ? Lh(ub) : null,
-               Bb = (0, Jb.n)(bb),
-               Ub = Bb ? Lh(Gb.z[Bb]) : null;
+             const kd = Jd && !(0, Wd.C)(Jd.type) ? gk(Jd) : null,
+               pd = (0, Xd.q)(dd),
+               Pd = pd ? gk(Wd.D[pd]) : null;
```

#### 1423. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10652-L10653` → after: `L11284-L11285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11284-L11285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11284-L11285) · [Before (L10652-L10653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10652-L10653)

```diff
-           }(ub.yN, pb) : null;
-         if (wb ? (bb.xX.NLb = null !== Sb && void 0 !== Sb ? Sb : wb.range, bb.xX.JLb = null !== ab ? Bh(ab) : wb.coneCos) : (bb.xX.NLb = null !== Sb && void 0 !== Sb ? Sb : 0, bb.xX.JLb = 0), Yb) Ob().scale(hb, (0, Hb.T)(Yb), 15);
+           }(Jd.qS, Od) : null;
+         if (ld ? (dd.UL.tZd = null !== Cd && void 0 !== Cd ? Cd : ld.range, dd.UL.rZd = null !== Kd ? Nk(Kd) : ld.coneCos) : (dd.UL.tZd = null !== Cd && void 0 !== Cd ? Cd : 0, dd.UL.rZd = 0), gd) Nd().scale(kd, (0, od.Z)(gd), 15);
```

#### 1424. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10657-L10658` → after: `L11289-L11290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11289-L11290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11289-L11290) · [Before (L10657-L10658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10657-L10658)

```diff
-             eLb: ub
-           } = bb.xX;
+             uZd: Jd
+           } = dd.UL;
```

#### 1425. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10666` → after: `L11298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11298) · [Before (L10666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10666)

```diff
-       if (!bb || void 0 === bb.spotlightRange || !bb.uX) return null;
+       if (!dd || void 0 === dd.spotlightRange || !dd.oL) return null;
```

#### 1426. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10669` → after: `L11301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11301) · [Before (L10669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10669)

```diff
-         colour: bb.uX,
+         colour: dd.oL,
```

#### 1427. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10675` → after: `L11307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11307) · [Before (L10675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10675)

```diff
-   38008: (bb, ub, hb) => {
+   38529: (dd, Jd, kd) => {
```

#### 1428. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10677-L10678` → after: `L11309-L11310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11309-L11310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11309-L11310) · [Before (L10677-L10678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10677-L10678)

```diff
-       b: () => nb,
-       c: () => Db
+       c: () => ad,
+       f: () => Md
```

#### 1429. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10680-L10684` → after: `L11312-L11316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11312-L11316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11312-L11316) · [Before (L10680-L10684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10680-L10684)

```diff
-     var Bb = hb(37655),
-       Ob = hb(37406),
-       Gb = hb(3463),
-       Ub = hb(191),
-       Lb = hb(324),
+     var pd = kd(38247),
+       Nd = kd(37987),
+       Wd = kd(3566),
+       Pd = kd(193),
+       Zd = kd(325),
```

#### 1430. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10686-L10697` → after: `L11318-L11329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11318-L11329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11318-L11329) · [Before (L10686-L10697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10686-L10697)

```diff
-       Sb = hb(37619),
-       ab = hb(36393),
-       Hb = hb(36386),
-       wb = hb(37517),
-       Zb = hb(314),
-       Xb = hb(16),
-       pb = hb(2560),
-       ob = hb(37584),
-       Ab = hb(37773),
-       lb = hb(37770),
-       Kb = hb(3516),
-       Wb = hb(1124);
+       Cd = kd(38215),
+       Kd = kd(36933),
+       od = kd(36926),
+       ld = kd(38115),
+       Qd = kd(313),
+       Ld = kd(29),
+       Od = kd(2634),
+       ed = kd(38174),
+       Rd = kd(38355),
+       Id = kd(38347),
+       Gd = kd(3624),
+       vd = kd(1245);
```

#### 1431. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10699` → after: `L11331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11331) · [Before (L10699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10699)

```diff
-     const db = ["length", 1, 0, 2, 222, 3, 121, 170, "a", 50, "b", 65, void 0, "e", 5, null, 16, 172];
+     const qd = [!1, "length", "No redacted path provided", 2, "--version", 1, "-v", " (stan", "dalone", ")", " (loca", "l)", !0, void 0, 0, "d", "a", 5, null, 6, 3, 220];
```

#### 1432. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10706-L10763` → after: `L11338-L11357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11338-L11357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11338-L11357) · [Before (L10706-L10763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10706-L10763)

```diff
-     "XcU67b_" in rb && function(...bb) {
-       bb[db[0]] = db[2];
-       const ub = require("big-integer");
-       jb(bb[-db[7]] = class {
-         static randomPrime(bb) {
-           const hb = ub.one.shiftLeft(bb - db[1]),
-             Bb = ub.one.shiftLeft(bb).prev();
-           for (;;) {
-             let bb = ub.randBetween(hb, Bb);
-             if (bb.isProbablePrime(256)) return bb
-           }
-         }
-         static generate(...bb) {
-           bb[db[0]] = db[1];
-           const hb = ub(65537);
-           let Bb, Ob;
- ... (42 more removed lines; see GitHub link above)
+     xd = (...dd) => {
+       dd[qd[1]] = 4, "x4a5wA" in Bd && (module.exports = async (dd = () => {
+         throw new Error(qd[2])
+       }) => {
+         const Jd = new Set(process.argv.slice(qd[3]));
+         if (!Jd.has(qd[4])) {
+           if (Jd.size !== qd[5]) return qd[0];
+           if (!Jd.has(qd[6])) return qd[0]
+         }
+         return await (async () => void 0 === await dd() ? qd[10] + qd[11] : "")(), qd[12]
+       }), sd(dd[qd[16]] = qd[13], dd[qd[17]] = qd[13], dd[qd[19]] = qd[13], dd[qd[15]] = qd[13], dd[-qd[21]] = qd[13]);
+       const Jd = (0, Od[qd[15]])().client.getMsgHandler().ykd.state.tickCounter;
+       (0, Wd.sendColyMessage)(Gd.xh, {
+         bP: dd[qd[14]],
+         SP: (dd[qd[16]] = Pd.g.lifeformMeshToBodyPart[dd[qd[5]] === qd[18] || void 0 === dd[qd[5]] || (dd[qd[17]] = dd[qd[5]].split("|")) === qd[18] || void 0 === dd[qd[17]] ? void 0 : dd[qd[17]][qd[14]]]) !== qd[18] && void 0 !== dd[qd[16]] ? dd[qd[16]] : qd[18],
+         jP: dd[qd[3]],
+ ... (4 more added lines; see GitHub link above)
```

#### 1433. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10766` → after: `L11360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11360) · [Before (L10766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10766)

```diff
-     class nb extends lb.e {
+     class ad extends Id.b {
```

#### 1434. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10768` → after: `L11362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11362) · [Before (L10768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10768)

```diff
-         super(bb, ub, hb, Bb), this.toolType = null, this.toolHarvestLevel = null, this.toolMultiplier = 1, this.attemptingToBreak = !1, this.targetedPosition = null, this.currBreakingMesh = null, this.currBreakingStage = null, this.targetedStartTime = 0, this.anyBreakingStartTim … [truncated]
+         super(dd, Jd, kd, pd), this.toolType = null, this.toolHarvestLevel = null, this.toolMultiplier = 1, this.attemptingToBreak = !1, this.targetedPosition = null, this.currBreakingMesh = null, this.currBreakingStage = null, this.targetedStartTime = 0, this.anyBreakingStartTim … [truncated]
```

#### 1435. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10778` → after: `L11372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11372) · [Before (L10778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10778)

```diff
-         super.reset(), this.heldItemState.yN === this.PH.bM && this.breakingParticles.gH(!1), this.resetTargetedBlock(Date.now()), this.attemptingToBreak = !1, this.targetedPosition = null, this.currBreakingMesh = null, this.currBreakingStage = null, this.targetedStartTime = 0, t … [truncated]
+         super.reset(), this.heldItemState.qS === this.Jl.kU && this.breakingParticles.Do(!1), this.resetTargetedBlock(Date.now()), this.attemptingToBreak = !1, this.targetedPosition = null, this.currBreakingMesh = null, this.currBreakingStage = null, this.targetedStartTime = 0, t … [truncated]
```

#### 1436. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10780` → after: `L11374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11374) · [Before (L10780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10780)

```diff
-       Fhb() {
+       kpd() {
```

#### 1437. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10782` → after: `L11376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11376) · [Before (L10782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10782)

```diff
-         const Ob = super.Fhb(),
+         const Nd = super.kpd(),
```

#### 1438. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10787-L10789` → after: `L11381-L11383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11381-L11383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11381-L11383) · [Before (L10787-L10789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10787-L10789)

```diff
-             mI: Yb
-           } = this.HSb();
-         if (Ub && !Ob.preventAttack) return this.vOb(Gb, Ub, Lb, Yb), this.ZSb(Gb, Ub), {
+             ND: gd
+           } = this.BCd();
+         if (Pd && !Nd.preventAttack) return this.cNd(Wd, Pd, Zd, gd), this.sCd(Wd, Pd), {
```

#### 1439. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10793-L10796` → after: `L11387-L11390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11387-L11390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11387-L11390) · [Before (L10793-L10796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10793-L10796)

```diff
-         const Sb = null !== (bb = null === (ub = this.PH.rbb) || void 0 === ub ? void 0 : ub.position) && void 0 !== bb ? bb : null,
-           ab = null !== (hb = null === (Bb = this.PH.rbb) || void 0 === Bb ? void 0 : Bb.vR) && void 0 !== hb ? hb : null,
-           Hb = this.PH.pW.Dub(this.PH.bM);
-         if (!Hb || !this.PH.OW.canAltAction) return {
+         const Cd = null !== (dd = null === (Jd = this.Jl.Ddd) || void 0 === Jd ? void 0 : Jd.position) && void 0 !== dd ? dd : null,
+           Kd = null !== (kd = null === (pd = this.Jl.Ddd) || void 0 === pd ? void 0 : pd.W9) && void 0 !== kd ? kd : null,
+           od = this.Jl.vG.UJd(this.Jl.kU);
+         if (!od || !this.Jl.lG.canAltAction) return {
```

#### 1440. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10801` → after: `L11395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11395) · [Before (L10801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10801)

```diff
-           Zb = new Ab.e(this, null, null, Sb, ab, wb).performPrimaryFire();
+           Qd = new Rd.b(this, null, null, Cd, Kd, ld).performPrimaryFire();
```

#### 1441. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10804` → after: `L11398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11398) · [Before (L10804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10804)

```diff
-       fhb() {
+       ppd() {
```

#### 1442. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10809-L10811` → after: `L11403-L11405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11403-L11405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11403-L11405) · [Before (L10809-L10811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10809-L10811)

```diff
-           mI: Bb
-         } = this.HSb(), Ob = super.fhb();
-         return ub && !Ob.preventAttack && (this.vOb(bb, ub, hb, Bb), this.PH.pW.nub(this.heldItemState.yN).setArmsAreSwinging()), Ob
+           ND: pd
+         } = this.BCd(), Nd = super.ppd();
+         return Jd && !Nd.preventAttack && (this.cNd(dd, Jd, kd, pd), this.Jl.vG.nJd(this.heldItemState.qS).setArmsAreSwinging()), Nd
```

#### 1443. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10813` → after: `L11407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11407) · [Before (L10813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10813)

```diff
-       Vhb() {
+       Jpd() {
```

#### 1444. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10817-L10818` → after: `L11411-L11412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11411-L11412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11411-L11412) · [Before (L10817-L10818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10817-L10818)

```diff
-         } = this.HSb();
-         return ub ? this.ZSb(bb, ub) : this.breakingStart(), !0
+         } = this.BCd();
+         return Jd ? this.sCd(dd, Jd) : this.breakingStart(), !0
```

#### 1445. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10825-L10827` → after: `L11419-L11421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11419-L11421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11419-L11421) · [Before (L10825-L10827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10825-L10827)

```diff
-           mI: Bb
-         } = this.HSb();
-         return !(!ub || !this.canAttack(ub)) && (this.PH.pW.nub(this.heldItemState.yN).setArmsAreSwinging(), this.vOb(bb, ub, hb, Bb), !0)
+           ND: pd
+         } = this.BCd();
+         return !(!Jd || !this.canAttack(Jd)) && (this.Jl.vG.nJd(this.heldItemState.qS).setArmsAreSwinging(), this.cNd(dd, Jd, kd, pd), !0)
```

#### 1446. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10832` → after: `L11426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11426) · [Before (L10832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10832)

```diff
-           PH: Bb
+           Jl: pd
```

#### 1447. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10834` → after: `L11428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11428) · [Before (L10834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10834)

```diff
-         return null !== (ub = null === (hb = Bb.Qs[Bb.bM][bb]) || void 0 === hb ? void 0 : hb.canAttack) && void 0 !== ub && ub
+         return null !== (Jd = null === (kd = pd.dU[pd.kU][dd]) || void 0 === kd ? void 0 : kd.canAttack) && void 0 !== Jd && Jd
```

#### 1448. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10836` → after: `L11430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11430) · [Before (L10836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10836)

```diff
-       vOb(bb, ub, hb, Bb) {
+       cNd(dd, Jd, kd, pd) {
```

#### 1449. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10838` → after: `L11432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11432) · [Before (L10838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10838)

```diff
-           PH: Ob
+           Jl: Nd
```

#### 1450. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10840` → after: `L11434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11434) · [Before (L10840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10840)

```diff
-         this.canAttack(ub) && (Cb(ub, hb, bb, Ob), this.bloxd.client.triggerGameCallback("onPlayerAttackEntity", Ob.bM, ub, [Bb[0], Bb[1], Bb[2]]))
+         this.canAttack(Jd) && (xd(Jd, kd, dd, Nd), this.bloxd.client.triggerGameCallback("onPlayerAttackEntity", Nd.kU, Jd, [pd[0], pd[1], pd[2]]))
```

#### 1451. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10842` → after: `L11436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11436) · [Before (L10842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10842)

```diff
-       HSb() {
+       BCd() {
```

#### 1452. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10844-L10846` → after: `L11438-L11440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11438-L11440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11438-L11440) · [Before (L10844-L10846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10844-L10846)

```diff
-         const Bb = null !== (bb = this.PH.Pbb) && void 0 !== bb ? bb : this.PH.camera.Zk(),
-           Ob = null !== (ub = null === (hb = this.PH.pW.Dub(this.PH.bM)) || void 0 === hb ? void 0 : hb.inventory.getItemAtSelectedSlot()) && void 0 !== ub ? ub : null,
-           Gb = this.bloxd.getAttackRangeFromHeldItem(this.PH.bM, Ob),
+         const pd = null !== (dd = this.Jl.WJd) && void 0 !== dd ? dd : this.Jl.camera.UH(),
+           Nd = null !== (Jd = null === (kd = this.Jl.vG.UJd(this.Jl.kU)) || void 0 === kd ? void 0 : kd.inventory.getItemAtSelectedSlot()) && void 0 !== Jd ? Jd : null,
+           Wd = this.bloxd.getAttackRangeFromHeldItem(this.Jl.kU, Nd),
```

#### 1453. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10857` → after: `L11451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11451) · [Before (L10857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10857)

```diff
-           mI: Yb
+           ND: gd
```

#### 1454. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10862` → after: `L11456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11456) · [Before (L10862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10862)

```diff
-           mI: null
+           ND: null
```

#### 1455. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10865` → after: `L11459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11459) · [Before (L10865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10865)

```diff
-       ZSb(bb, ub) {
+       sCd(dd, Jd) {
```

#### 1456. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10868` → after: `L11462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11462) · [Before (L10868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10868)

```diff
-           PH: Ub
+           Jl: Pd
```

#### 1457. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10870-L10873` → after: `L11464-L11467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11464-L11467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11464-L11467) · [Before (L10870-L10873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10870-L10873)

```diff
-         (0, Gb.sendColyMessage)(Kb.cg, {
-           Ua: ub,
-           iU: bb,
-           vU: null !== (hb = null === (Bb = Ub.pW.Dub(Ub.bM)) || void 0 === Bb || null === (Ob = Bb.inventory.getItemAtSelectedSlot()) || void 0 === Ob ? void 0 : Ob.name) && void 0 !== hb ? hb : null
+         (0, Wd.sendColyMessage)(Gd.eg, {
+           CK: Jd,
+           jP: dd,
+           XP: null !== (kd = null === (pd = Pd.vG.UJd(Pd.kU)) || void 0 === pd || null === (Nd = pd.inventory.getItemAtSelectedSlot()) || void 0 === Nd ? void 0 : Nd.name) && void 0 !== kd ? kd : null
```

#### 1458. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10877-L10879` → after: `L11471-L11473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11471-L11473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11471-L11473) · [Before (L10877-L10879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10877-L10879)

```diff
-         const bb = this.PH.zbb;
-         bb && !(0, pb.e)().posSatisfiesModifyConstraints(this.PH.bM, bb.position[0], bb.position[1], bb.position[2]) && (this.PH.OW.canChange || this.PH.OW.cantBreakError || "You cannot modify this block" !== this.PH.OW.cantChangeError) && Xb.i.vp("showBottomMessage", {
-           message: this.PH.OW.cantBreakError || this.PH.OW.cantChangeError,
+         const dd = this.Jl.rdd;
+         dd && !(0, Od.d)().posSatisfiesModifyConstraints(this.Jl.kU, dd.position[0], dd.position[1], dd.position[2]) && (this.Jl.lG.canChange || this.Jl.lG.cantBreakError || "You cannot modify this block" !== this.Jl.lG.cantChangeError) && Ld.j.nO("showBottomMessage", {
+           message: this.Jl.lG.cantBreakError || this.Jl.lG.cantChangeError,
```

#### 1459. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10884` → after: `L11478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11478) · [Before (L10884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10884)

```diff
-         if (this.heldItemState.yN !== this.PH.bM) return !1;
+         if (this.heldItemState.qS !== this.Jl.kU) return !1;
```

#### 1460. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10886` → after: `L11480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11480) · [Before (L10886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10886)

```diff
-         return this.attemptingToBreak && (hb = this.breakBlock(ub)), this.breakingParticles.gH(hb), this.successfullyBreakingBlockLastTick = hb, hb
+         return this.attemptingToBreak && (kd = this.breakBlock(Jd)), this.breakingParticles.Do(kd), this.successfullyBreakingBlockLastTick = kd, kd
```

#### 1461. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10889` → after: `L11483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11483) · [Before (L10889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10889)

```diff
-         super.renderTickLocalPlayer(bb, ub), this.successfullyBreakingBlockLastTick ? this.momentumFrac = Math.min(this.momentumFrac + bb / Zb.f.timeTillMaxMomentum, 1) : this.momentumFrac = Math.max(this.momentumFrac - bb / 1500, 0)
+         super.renderTickLocalPlayer(dd, Jd), this.successfullyBreakingBlockLastTick ? this.momentumFrac = Math.min(this.momentumFrac + dd / Qd.e.timeTillMaxMomentum, 1) : this.momentumFrac = Math.max(this.momentumFrac - dd / 1500, 0)
```

#### 1462. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10891-L10892` → after: `L11485-L11486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11485-L11486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11485-L11486) · [Before (L10891-L10892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10891-L10892)

```diff
-       Ehb() {
-         super.Ehb();
+       Akd() {
+         super.Akd();
```

#### 1463. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10900` → after: `L11494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11494) · [Before (L10900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10900)

```diff
-         this.targetedPosition = null, this.targetedStartTime = bb, this.lastBreakingSoundTime = Math.min(bb - 150, this.lastBreakingSoundTime), this.currBreakingStage = -1, this.currBreakingMesh && (this.currBreakingMesh.Zx(!1), this.currBreakingMesh = null)
+         this.targetedPosition = null, this.targetedStartTime = dd, this.lastBreakingSoundTime = Math.min(dd - 150, this.lastBreakingSoundTime), this.currBreakingStage = -1, this.currBreakingMesh && (this.currBreakingMesh.XM(!1), this.currBreakingMesh = null)
```

#### 1464. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10904` → after: `L11498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11498) · [Before (L10904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10904)

```diff
-         const hb = (0, pb.e)().getInvenHeldItem(this.PH.bM);
+         const kd = (0, Od.d)().getInvenHeldItem(this.Jl.kU);
```

#### 1465. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10906-L10912` → after: `L11500-L11506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11500-L11506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11500-L11506) · [Before (L10906-L10912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10906-L10912)

```diff
-         const Ub = null === (ub = this.PH.zbb) || void 0 === ub ? void 0 : ub.position;
-         if (!Ub || !(0, pb.e)().posSatisfiesModifyConstraints(this.PH.bM, Ub[0], Ub[1], Ub[2])) return this.resetTargetedBlock(bb), !1;
-         if (this.PH.pW.nub(this.heldItemState.yN).setArmsAreSwinging(), !this.targetedPosition !== !Ub || !Yb().exactEquals(this.targetedPosition, Ub)) return this.resetTargetedBlock(bb), this.targetedPosition = Yb().copy(this._targetedPosition, Ub), (0, Gb.sendColyMessage)(Kb.aj … [truncated]
-         const Lb = (0, pb.e)().getMetaInfo(this.PH.rK(this.targetedPosition)).rootId;
-         let Sb = Ob.z[Lb].ttb;
-         if (this.PH.OW.creative) {
-           if (this.PH.OW.creative) {
+         const Pd = null === (Jd = this.Jl.rdd) || void 0 === Jd ? void 0 : Jd.position;
+         if (!Pd || !(0, Od.d)().posSatisfiesModifyConstraints(this.Jl.kU, Pd[0], Pd[1], Pd[2])) return this.resetTargetedBlock(dd), !1;
+         if (this.Jl.vG.nJd(this.heldItemState.qS).setArmsAreSwinging(), !this.targetedPosition !== !Pd || !gd().exactEquals(this.targetedPosition, Pd)) return this.resetTargetedBlock(dd), this.targetedPosition = gd().copy(this._targetedPosition, Pd), (0, Wd.sendColyMessage)(Gd.Ij … [truncated]
+         const Zd = (0, Od.d)().getMetaInfo(this.Jl.MI(this.targetedPosition)).rootId;
+         let Cd = Nd.D[Zd].ttb;
+         if (this.Jl.lG.creative) {
+           if (this.Jl.lG.creative) {
```

#### 1466. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10914` → after: `L11508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11508) · [Before (L10914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10914)

```diff
-             ub > 20 * Ob.w ? Sb *= 1 / 6 : ub > 6 * Ob.w ? Sb *= 1 / 3 : ub > 4 * Ob.w ? Sb *= .5 : ub > 2 * Ob.w && (Sb *= 2 / 3)
+             Jd > 20 * Nd.y ? Cd *= 1 / 6 : Jd > 6 * Nd.y ? Cd *= 1 / 3 : Jd > 4 * Nd.y ? Cd *= .5 : Jd > 2 * Nd.y && (Cd *= 2 / 3)
```

#### 1467. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10917-L10919` → after: `L11511-L11513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11511-L11513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11511-L11513) · [Before (L10917-L10919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10917-L10919)

```diff
-           const bb = (0, pb.e)().getBlockTypeIsHarvestable(this.PH.bM, Lb);
-           bb || (Sb *= 2.5), this.toolType === this.bloxd.getItemStat(this.PH.bM, Lb, "harvestType") && bb && (Sb *= 1 / this.toolMultiplier);
-           Sb *= Zb.f.getBreakSpeedMultiplier(hb) * Zb.f.getMomentumMultiplier(hb, this.momentumFrac)
+           const dd = (0, Od.d)().getBlockTypeIsHarvestable(this.Jl.kU, Zd);
+           dd || (Cd *= 2.5), this.toolType === this.bloxd.getItemStat(this.Jl.kU, Zd, "harvestType") && dd && (Cd *= 1 / this.toolMultiplier);
+           Cd *= Qd.e.getBreakSpeedMultiplier(kd) * Qd.e.getMomentumMultiplier(kd, this.momentumFrac)
```

#### 1468. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10925-L10926` → after: `L11519-L11520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11519-L11520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11519-L11520) · [Before (L10925-L10926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10925-L10926)

```diff
-           const ub = (0, ab.i)(`step_${(0,ob.e)(Lb,!1)}`);
-           Hb.e.play(ub, .3).rate(.5)
+           const Jd = (0, Kd.g)(`step_${(0,ed.d)(Zd,!1)}`);
+           od.b.play(Jd, .3).rate(.5)
```

#### 1469. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10928` → after: `L11522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11522) · [Before (L10928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10928)

```diff
-         return this.currBreakingMesh && Xb === this.currBreakingStage || (this.currBreakingMesh && this.currBreakingMesh.Zx(!1), Xb < 10 ? (this.currBreakingMesh = (0, Bb.e)(this.PH, this.targetedPosition, Xb), this.currBreakingStage = Xb) : ((0, Ob.e)(Ub), this.resetTargetedBloc … [truncated]
+         return this.currBreakingMesh && Ld === this.currBreakingStage || (this.currBreakingMesh && this.currBreakingMesh.XM(!1), Ld < 10 ? (this.currBreakingMesh = (0, pd.b)(this.Jl, this.targetedPosition, Ld), this.currBreakingStage = Ld) : ((0, Nd.l)(Pd), this.resetTargetedBloc … [truncated]
```

#### 1470. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10940` → after: `L11534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11534) · [Before (L10940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10940)

```diff
-   37770: (bb, ub, hb) => {
+   38347: (dd, Jd, kd) => {
```

#### 1471. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10942` → after: `L11536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11536) · [Before (L10942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10942)

```diff
-       e: () => db
+       b: () => qd
```

#### 1472. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10944-L10961` → after: `L11538-L11555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11538-L11555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11538-L11555) · [Before (L10944-L10961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10944-L10961)

```diff
-     var Bb = hb(37813),
-       Ob = hb(1124),
-       Gb = hb(37824),
-       Ub = hb(9221),
-       Lb = hb(9181),
-       Yb = hb(191),
-       Sb = hb(37044),
-       ab = hb(37773),
-       Hb = hb(37027),
-       wb = hb(16),
-       Zb = hb(2560),
-       Xb = hb(1218),
-       pb = hb(37802),
-       ob = hb(37252),
-       Ab = hb(37020),
-       lb = hb(37993),
- ... (2 more removed lines; see GitHub link above)
+     var pd = kd(38387),
+       Nd = kd(1245),
+       Wd = kd(38392),
+       Pd = kd(9374),
+       Zd = kd(9331),
+       gd = kd(193),
+       Cd = kd(37602),
+       Kd = kd(38355),
+       od = kd(37588),
+       ld = kd(29),
+       Qd = kd(2634),
+       Ld = kd(1348),
+       Od = kd(38382),
+       ed = kd(37821),
+       Rd = kd(37579),
+       Id = kd(38520),
+ ... (2 more added lines; see GitHub link above)
```

#### 1473. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10965` → after: `L11559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11559) · [Before (L10965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10965)

```diff
-         this.PH = void 0, this.heldItemState = void 0, this.itemZoomer = void 0, this.bloxd = (0, Zb.e)(), this.pickActionHelper = void 0, this.typeObj = null, this.sbb = !0, this._doneFirstMeshSetup = !1, this._modelLoadedSub = null, this._newBloxdSub = null, this.thirdPersonThi … [truncated]
+         this.Jl = void 0, this.heldItemState = void 0, this.itemZoomer = void 0, this.bloxd = (0, Qd.d)(), this.pickActionHelper = void 0, this.typeObj = null, this.kJd = !0, this._doneFirstMeshSetup = !1, this._modelLoadedSub = null, this._newBloxdSub = null, this.thirdPersonThi … [truncated]
```

#### 1474. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10970` → after: `L11564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11564) · [Before (L10970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10970)

```diff
-         this.PH.Dbb(!0), this.typeObj = bb, this.enchantmentTier = ub
+         this.Jl.cdd(!0), this.typeObj = dd, this.enchantmentTier = Jd
```

#### 1475. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10972` → after: `L11566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11566) · [Before (L10972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10972)

```diff
-       LSb() {
+       GCd() {
```

#### 1476. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10975` → after: `L11569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11569) · [Before (L10975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10975)

```diff
-       YSb() {}
+       vCd() {}
```

#### 1477. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10983` → after: `L11577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11577) · [Before (L10983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10983)

```diff
-         return void 0 !== this.heldItemState.replayUseFirstPersonMesh ? this.heldItemState.replayUseFirstPersonMesh : this.heldItemState.yN === this.PH.bM && this.PH.camera.sV <= 1 && !Hb.c.isCameraDetachedFromPlayer(this.PH)
+         return void 0 !== this.heldItemState.replayUseFirstPersonMesh ? this.heldItemState.replayUseFirstPersonMesh : this.heldItemState.qS === this.Jl.kU && this.Jl.camera.XV <= 1 && !od.c.isCameraDetachedFromPlayer(this.Jl)
```

#### 1478. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10986` → after: `L11580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11580) · [Before (L10986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10986)

```diff
-         return this.isFirstPersonLocalPlayer() || this.heldItemState.yN === this.PH.bM && Hb.c.isCameraDetachedFromPlayer(this.PH)
+         return this.isFirstPersonLocalPlayer() || this.heldItemState.qS === this.Jl.kU && od.c.isCameraDetachedFromPlayer(this.Jl)
```

#### 1479. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10988-L10989` → after: `L11582-L11583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11582-L11583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11582-L11583) · [Before (L10988-L10989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10988-L10989)

```diff
-       Fhb() {
-         return db.clearSecondaryDownFireTimeout(), this.PH.pW.nub(this.heldItemState.yN).setArmsAreSwinging(), {
+       kpd() {
+         return qd.clearSecondaryDownFireTimeout(), this.Jl.vG.nJd(this.heldItemState.qS).setArmsAreSwinging(), {
```

#### 1480. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L10997` → after: `L11591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11591) · [Before (L10997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L10997)

```diff
-       Ehb() {
+       Akd() {
```

#### 1481. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11003` → after: `L11597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11597) · [Before (L11003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11003)

```diff
-       aSb() {
+       qCd() {
```

#### 1482. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11009` → after: `L11603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11603) · [Before (L11009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11009)

```diff
-               this.SSb().once || ub()
+               this.xCd().once || Jd()
```

#### 1483. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11013` → after: `L11607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11607) · [Before (L11013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11013)

```diff
-         const hb = this.SSb();
+         const kd = this.xCd();
```

#### 1484. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11016` → after: `L11610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11610) · [Before (L11016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11016)

```diff
-       SSb() {
+       xCd() {
```

#### 1485. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11019` → after: `L11613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11613) · [Before (L11019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11019)

```diff
-       qhb() {
+       wkd() {
```

#### 1486. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11028-L11030` → after: `L11622-L11624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11622-L11624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11622-L11624) · [Before (L11028-L11030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11028-L11030)

```diff
-           PH: hb
-         } = this, Gb = hb.OW.canUseDevCreativeItems, Ub = null === (ub = this.bloxd.getItemStat(hb.bM, bb, "showInCreativeInven")) || void 0 === ub || ub;
-         return !(0, Bb.e)(bb, (0, Ob.X)((0, Xb.b)().lobbyName), Ub, Gb)
+           Jl: kd
+         } = this, Wd = kd.lG.canUseDevCreativeItems, Pd = null === (Jd = this.bloxd.getItemStat(kd.kU, dd, "showInCreativeInven")) || void 0 === Jd || Jd;
+         return !(0, pd.f)(dd, (0, Nd.M)((0, Ld.d)().lobbyName), Pd, Wd)
```

#### 1487. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11032` → after: `L11626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11626) · [Before (L11032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11032)

```diff
-       XSb() {
+       iCd() {
```

#### 1488. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11035` → after: `L11629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11629) · [Before (L11035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11035)

```diff
-           PH: bb
+           Jl: dd
```

#### 1489. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11037-L11040` → after: `L11631-L11634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11631-L11634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11631-L11634) · [Before (L11037-L11040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11037-L11040)

```diff
-         if (bb.OW.creative && bb.OW.canPickBlocks && bb.pW.Nbb(bb.bM, "inventory") && null !== bb.rbb) {
-           const hb = bb.rbb.vR,
-             Ob = (0, Gb.l)(hb) ? Ub.n : this.bloxd.getMetaInfo(hb).rootName,
-             Lb = Bb.d.indexOf(Ob);
+         if (dd.lG.creative && dd.lG.canPickBlocks && dd.vG.JJd(dd.kU, "inventory") && null !== dd.Ddd) {
+           const kd = dd.Ddd.W9,
+             Nd = (0, Wd.i)(kd) ? Pd.m : this.bloxd.getMetaInfo(kd).rootName,
+             Zd = pd.b.indexOf(Nd);
```

#### 1490. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11042` → after: `L11636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11636) · [Before (L11042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11042)

```diff
-             const hb = bb.pW.zub(bb.bM),
+             const kd = dd.vG.DJd(dd.kU),
```

#### 1491. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11044` → after: `L11638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11638) · [Before (L11044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11044)

```diff
-               Gb = this.PH.pW.Dub(this.PH.bM);
+               Wd = this.Jl.vG.UJd(this.Jl.kU);
```

#### 1492. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11049` → after: `L11643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11643) · [Before (L11049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11049)

```diff
-               if ((null === (ub = Ub[bb]) || void 0 === ub ? void 0 : ub.name) === Ob) return wb.i.vp("setSelectedInventorySlotI", bb, !0), !0
+               if ((null === (Jd = Pd[dd]) || void 0 === Jd ? void 0 : Jd.name) === Nd) return ld.j.nO("setSelectedInventorySlotI", dd, !0), !0
```

#### 1493. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11051` → after: `L11645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11645) · [Before (L11051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11051)

```diff
-             return pb.e.swapPosClient(hb, hb.playerInventory.getSelectedSlotIndex(), Bb), !0
+             return Od.b.swapPosClient(kd, kd.playerInventory.getSelectedSlotIndex(), pd), !0
```

#### 1494. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11060` → after: `L11654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11654) · [Before (L11060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11060)

```diff
-       fhb() {
+       ppd() {
```

#### 1495. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11062` → after: `L11656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11656) · [Before (L11062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11062)

```diff
-         return this.PH.pW.nub(this.heldItemState.yN).setArmsAreSwinging(), bb
+         return this.Jl.vG.nJd(this.heldItemState.qS).setArmsAreSwinging(), dd
```

#### 1496. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11065-L11066` → after: `L11659-L11660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11659-L11660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11659-L11660) · [Before (L11065-L11066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11065-L11066)

```diff
-         const bb = this.mhb();
-         return bb.tookAction && this.PH.pW.nub(this.heldItemState.yN).setArmsAreSwinging(), bb
+         const dd = this.Vkd();
+         return dd.tookAction && this.Jl.vG.nJd(this.heldItemState.qS).setArmsAreSwinging(), dd
```

#### 1497. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11069-L11070` → after: `L11663-L11664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11663-L11664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11663-L11664) · [Before (L11069-L11070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11069-L11070)

```diff
-         const bb = this.PH.pW.Dub(this.PH.bM);
-         if (!bb || !this.PH.OW.canAltAction) return {
+         const dd = this.Jl.vG.UJd(this.Jl.kU);
+         if (!dd || !this.Jl.lG.canAltAction) return {
```

#### 1498. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11074-L11075` → after: `L11668-L11669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11668-L11669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11668-L11669) · [Before (L11074-L11075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11074-L11075)

```diff
-         const ub = this.PH.rbb;
-         if ("preventAction" === this.bloxd.client.triggerGameCallback("onPlayerAttemptAltAction", this.PH.bM, null === ub || void 0 === ub ? void 0 : ub.position[0], null === ub || void 0 === ub ? void 0 : ub.position[1], null === ub || void 0 === ub ? void 0 : ub.position[2], ub … [truncated]
+         const Jd = this.Jl.Ddd;
+         if ("preventAction" === this.bloxd.client.triggerGameCallback("onPlayerAttemptAltAction", this.Jl.kU, null === Jd || void 0 === Jd ? void 0 : Jd.position[0], null === Jd || void 0 === Jd ? void 0 : Jd.position[1], null === Jd || void 0 === Jd ? void 0 : Jd.position[2], Jd … [truncated]
```

#### 1499. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11079-L11080` → after: `L11673-L11674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11673-L11674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11673-L11674) · [Before (L11079-L11080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11079-L11080)

```diff
-         const hb = new ab.e(this, null, null, null, null, bb.selectedItem).performGliderBoost();
-         return hb.tookAction && this.PH.pW.nub(this.heldItemState.yN).setArmsAreSwinging(), hb
+         const kd = new Kd.b(this, null, null, null, null, dd.selectedItem).performGliderBoost();
+         return kd.tookAction && this.Jl.vG.nJd(this.heldItemState.qS).setArmsAreSwinging(), kd
```

#### 1500. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11084-L11086` → after: `L11678-L11680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11678-L11680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11678-L11680) · [Before (L11084-L11086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11084-L11086)

```diff
-         if (!this.PH.rbb) return !1;
-         const ub = this.PH.rbb.vR;
-         return null !== (bb = Lb.i[ub].canBePlacedOver) && void 0 !== bb && bb
+         if (!this.Jl.Ddd) return !1;
+         const Jd = this.Jl.Ddd.W9;
+         return null !== (dd = Zd.g[Jd].canBePlacedOver) && void 0 !== dd && dd
```

#### 1501. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11088` → after: `L11682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11682) · [Before (L11088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11088)

```diff
-       mhb() {
+       Vkd() {
```

#### 1502. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11090-L11091` → after: `L11684-L11685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11684-L11685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11684-L11685) · [Before (L11090-L11091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11090-L11091)

```diff
-         const Bb = this.PH.pW.Dub(this.PH.bM);
-         if (!Bb || !this.PH.OW.canAltAction) return {
+         const pd = this.Jl.vG.UJd(this.Jl.kU);
+         if (!pd || !this.Jl.lG.canAltAction) return {
```

#### 1503. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11095` → after: `L11689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11689) · [Before (L11095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11095)

```diff
-         if (Bb.opWrapper.qh) return wb.i.vp("toggleMenu", "inventory"), {
+         if (pd.opWrapper.Ek) return ld.j.nO("toggleMenu", "inventory"), {
```

#### 1504. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11101` → after: `L11695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11695) · [Before (L11101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11101)

```diff
-         if ((0, Wb.f)(null === Ob || void 0 === Ob ? void 0 : Ob.typeObj.type) && this.PH.pW.nub(this.heldItemState.yN).crouching) return {
+         if ((0, vd.d)(null === Nd || void 0 === Nd ? void 0 : Nd.typeObj.type) && this.Jl.vG.nJd(this.heldItemState.qS).crouching) return {
```

#### 1505. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11105` → after: `L11699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11699) · [Before (L11105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11105)

```diff
-         const Gb = null !== (bb = this.PH.Pbb) && void 0 !== bb ? bb : this.PH.camera.Zk(),
+         const Wd = null !== (dd = this.Jl.WJd) && void 0 !== dd ? dd : this.Jl.camera.UH(),
```

#### 1506. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11110` → after: `L11704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11704) · [Before (L11110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11110)

```diff
-             qI: Zb,
+             PD: Qd,
```

#### 1507. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11112-L11116` → after: `L11706-L11710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11706-L11710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11706-L11710) · [Before (L11112-L11116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11112-L11116)

```diff
-           } = this.pickActionHelper.doPickAction(Gb, Yb.e.entityInteractReach),
-           pb = null === (ub = this.PH.rbb) || void 0 === ub ? void 0 : ub.vR,
-           ob = null === (hb = this.PH.rbb) || void 0 === hb ? void 0 : hb.position,
-           Ab = null !== Ub && void 0 !== Ub ? Ub : null,
-           lb = this.bloxd.client.triggerGameCallback("onPlayerAttemptAltAction", this.PH.bM, null === ob || void 0 === ob ? void 0 : ob[0], null === ob || void 0 === ob ? void 0 : ob[1], null === ob || void 0 === ob ? void 0 : ob[2], pb ? (0, Lb.g)(pb) : "Air", Ab);
+           } = this.pickActionHelper.doPickAction(Wd, gd.g.entityInteractReach),
+           Od = null === (Jd = this.Jl.Ddd) || void 0 === Jd ? void 0 : Jd.W9,
+           ed = null === (kd = this.Jl.Ddd) || void 0 === kd ? void 0 : kd.position,
+           Rd = null !== Pd && void 0 !== Pd ? Pd : null,
+           Id = this.bloxd.client.triggerGameCallback("onPlayerAttemptAltAction", this.Jl.kU, null === ed || void 0 === ed ? void 0 : ed[0], null === ed || void 0 === ed ? void 0 : ed[1], null === ed || void 0 === ed ? void 0 : ed[2], Od ? (0, Zd.e)(Od) : "Air", Rd);
```

#### 1508. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11122` → after: `L11716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11716) · [Before (L11122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11122)

```diff
-           Cb = new ab.e(this, Ab, Sb, ob, pb, Ob).performAltAction(!Kb);
+           xd = new Kd.b(this, Rd, Cd, ed, Od, Nd).performAltAction(!Gd);
```

#### 1509. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11128` → after: `L11722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11722) · [Before (L11128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11128)

```diff
-       Vhb() {
+       Jpd() {
```

#### 1510. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11137` → after: `L11731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11731) · [Before (L11137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11137)

```diff
-         ub <= 1.2 && bb > 1.2 ? (this.PH.camera.mV = 0, this.PH.camera.sV = 0, this.itemZoomer.forceXyOffsetToZero(), this.LSb()) : 0 === ub && (this.itemZoomer.forceXyOffsetToZero(), this.LSb()), ub > .001 && bb < .001 && (this.PH.camera.mV = 1.2, this.LSb())
+         Jd <= 1.2 && dd > 1.2 ? (this.Jl.camera.fV = 0, this.Jl.camera.XV = 0, this.itemZoomer.forceXyOffsetToZero(), this.GCd()) : 0 === Jd && (this.itemZoomer.forceXyOffsetToZero(), this.GCd()), Jd > .001 && dd < .001 && (this.Jl.camera.fV = 1.2, this.GCd())
```

#### 1511. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11153` → after: `L11747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11747) · [Before (L11153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11153)

```diff
-         wb.i.unsubscribe(this._modelLoadedSub), this.heldItemState.yN === this.PH.bM && db.clearSecondaryDownFireTimeout(), this._doneFirstMeshSetup = void 0 !== this.PH.pW.lub(this.heldItemState.yN)
+         ld.j.unsubscribe(this._modelLoadedSub), this.heldItemState.qS === this.Jl.kU && qd.clearSecondaryDownFireTimeout(), this._doneFirstMeshSetup = void 0 !== this.Jl.vG.mJd(this.heldItemState.qS)
```

#### 1512. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11156` → after: `L11750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11750) · [Before (L11156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11156)

```diff
-         wb.i.unsubscribe(this._newBloxdSub)
+         ld.j.unsubscribe(this._newBloxdSub)
```

#### 1513. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11159` → after: `L11753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11753) · [Before (L11159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11159)

```diff
-         if (this.YSb(), this._doneFirstMeshSetup) return;
+         if (this.vCd(), this._doneFirstMeshSetup) return;
```

#### 1514. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11161-L11163` → after: `L11755-L11757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11755-L11757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11755-L11757) · [Before (L11161-L11163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11161-L11163)

```diff
-         const bb = this.heldItemState.yN;
-         this.PH.pW.lub(bb) || (this._modelLoadedSub = wb.i.subscribe(`lifeformSetupFinished|${bb}`, (() => {
-           this.YSb()
+         const dd = this.heldItemState.qS;
+         this.Jl.vG.mJd(dd) || (this._modelLoadedSub = ld.j.subscribe(`lifeformSetupFinished|${dd}`, (() => {
+           this.vCd()
```

#### 1515. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11174` → after: `L11768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11768) · [Before (L11174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11174)

```diff
-         return null === bb || this.PH.xX.oN.has(bb) ? bb : (this.thirdPersonThinObjectId = null, null)
+         return null === dd || this.Jl.UL.Qm.has(dd) ? dd : (this.thirdPersonThinObjectId = null, null)
```

#### 1516. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11178-L11181` → after: `L11772-L11775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11772-L11775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11772-L11775) · [Before (L11178-L11181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11178-L11181)

```diff
-           pa: ub
-         } = this.thirdPersonPose, hb = ub.x * this.heldPoseScaleY() * ub.z < 0, Bb = bb.thinInstMgr.getNodeWorldMatrix(bb.lN, bb.nodeIndex).determinant() < 0, Ob = (0, ob.f)(hb, Bb);
-         if (this.thirdPersonFlippedWinding === Ob && this.thirdPersonAttachedToId === bb.lN && this.thirdPersonAttachedToNode === bb.nodeIndex && (null === this.thirdPersonThinObjectId || null !== this.liveThirdPersonThinObjectId())) return void this.applyThirdPersonPose();
-         this.releaseThirdPersonThinObject(), this.thirdPersonFlippedWinding = Ob, this.thirdPersonAttachedToId = bb.lN, this.thirdPersonAttachedToNode = bb.nodeIndex;
+           fp: Jd
+         } = this.thirdPersonPose, kd = Jd.x * this.heldPoseScaleY() * Jd.z < 0, pd = dd.thinInstMgr.getNodeWorldMatrix(dd.Rm, dd.nodeIndex).determinant() < 0, Nd = (0, ed.d)(kd, pd);
+         if (this.thirdPersonFlippedWinding === Nd && this.thirdPersonAttachedToId === dd.Rm && this.thirdPersonAttachedToNode === dd.nodeIndex && (null === this.thirdPersonThinObjectId || null !== this.liveThirdPersonThinObjectId())) return void this.applyThirdPersonPose();
+         this.releaseThirdPersonThinObject(), this.thirdPersonFlippedWinding = Nd, this.thirdPersonAttachedToId = dd.Rm, this.thirdPersonAttachedToNode = dd.nodeIndex;
```

#### 1517. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11184` → after: `L11778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11778) · [Before (L11184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11184)

```diff
-           MS: !0,
+           EC: !0,
```

#### 1518. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11187-L11188` → after: `L11781-L11782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11781-L11782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11781-L11782) · [Before (L11187-L11188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11187-L11188)

```diff
-           const hb = this.PH.xX.oN;
-           Gb === this.thirdPersonRequestId && hb.has(bb.lN) ? (this.thirdPersonThinObjectId = ub, hb.attachThinObject(ub, bb.lN, bb.nodeIndex), hb.set(ub, "aOpacity", (0, Ab.holderAttachmentOpacity)(this.PH, this.heldItemState.yN)), (0, Ab.invalidateAttachmentProximityFade)(this. … [truncated]
+           const kd = this.Jl.UL.Qm;
+           Wd === this.thirdPersonRequestId && kd.has(dd.Rm) ? (this.thirdPersonThinObjectId = Jd, kd.attachThinObject(Jd, dd.Rm, dd.nodeIndex), kd.set(Jd, "aOpacity", (0, Rd.holderAttachmentOpacity)(this.Jl, this.heldItemState.qS)), (0, Rd.invalidateAttachmentProximityFade)(this. … [truncated]
```

#### 1519. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11192` → after: `L11786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11786) · [Before (L11192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11192)

```diff
-         return ob.e * this.thirdPersonPose.pa.y
+         return ed.c * this.thirdPersonPose.fp.y
```

#### 1520. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11198` → after: `L11792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11792) · [Before (L11198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11198)

```diff
-         const ub = this.PH.xX.oN,
+         const Jd = this.Jl.UL.Qm,
```

#### 1521. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11202` → after: `L11796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11796) · [Before (L11202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11202)

```diff
-             pa: Ob,
+             fp: Nd,
```

#### 1522. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11211` → after: `L11805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11805) · [Before (L11211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11211)

```diff
-           } = (0, lb.c)(hb, Ub ? Gb : Bb, Lb, this.typeObj.heldModelOffsetY());
+           } = (0, Id.d)(kd, Pd ? Wd : pd, Zd, this.typeObj.heldModelOffsetY());
```

#### 1523. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11217` → after: `L11811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11811) · [Before (L11217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11217)

```diff
-         null !== bb && (this.PH.xX.oN.delete(bb), this.thirdPersonThinObjectId = null)
+         null !== dd && (this.Jl.UL.Qm.delete(dd), this.thirdPersonThinObjectId = null)
```

#### 1524. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11221` → after: `L11815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11815) · [Before (L11221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11221)

```diff
-           PH: bb,
+           Jl: dd,
```

#### 1525. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11224-L11226` → after: `L11818-L11820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11818-L11820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11818-L11820) · [Before (L11224-L11226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11224-L11226)

```diff
-         if (!bb.pW.Nbb(ub.yN, "humanoidMesh")) return null;
-         const hb = bb.pW.bhb(ub.yN),
-           Bb = bb.xX.oN,
+         if (!dd.vG.JJd(Jd.qS, "humanoidMesh")) return null;
+         const kd = dd.vG.gkd(Jd.qS),
+           pd = dd.UL.Qm,
```

#### 1526. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11228` → after: `L11822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11822) · [Before (L11228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11228)

```diff
-             lN: Ob
+             Rm: Nd
```

#### 1527. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11235` → after: `L11829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11829) · [Before (L11235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11235)

```diff
-           lN: Ob,
+           Rm: Nd,
```

#### 1528. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11244` → after: `L11838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11838) · [Before (L11244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11244)

```diff
-           lN: bb.lN,
+           Rm: dd.Rm,
```

#### 1529. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11249` → after: `L11843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11843) · [Before (L11249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11249)

```diff
-           PH: ub,
+           Jl: Jd,
```

#### 1530. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11252-L11254` → after: `L11846-L11848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11846-L11848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11846-L11848) · [Before (L11252-L11254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11252-L11254)

```diff
-         if (!ub.pW.Nbb(hb.yN, "fourLeggedMesh")) return null;
-         const Bb = ub.pW.uhb(hb.yN),
-           Ob = ub.xX.oN,
+         if (!Jd.vG.JJd(kd.qS, "fourLeggedMesh")) return null;
+         const pd = Jd.vG.Ckd(kd.qS),
+           Nd = Jd.UL.Qm,
```

#### 1531. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11256` → after: `L11850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11850) · [Before (L11256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11256)

```diff
-             lN: Gb
+             Rm: Wd
```

#### 1532. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11263` → after: `L11857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11857) · [Before (L11263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11263)

```diff
-           lN: Gb,
+           Rm: Wd,
```

#### 1533. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11269` → after: `L11863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11863) · [Before (L11269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11269)

```diff
-         if (!this.PH.xX.Sp) return;
+         if (!this.Jl.UL.IO) return;
```

#### 1534. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11271` → after: `L11865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11865) · [Before (L11271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11271)

```diff
-         if (null !== bb) return void this.PH.xX.oN.set(bb, "aLightLevels", this.heldItemLightLevels());
+         if (null !== dd) return void this.Jl.UL.Qm.set(dd, "aLightLevels", this.heldItemLightLevels());
```

#### 1535. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11274-L11276` → after: `L11868-L11870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11868-L11870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11868-L11870) · [Before (L11274-L11276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11274-L11276)

```diff
-         if (this.lightTargetsForMesh !== ub && (this.lightTargetsForMesh = ub, this.bLb = [], this.lightTargetsBuilt = !1), !this.lightTargetsBuilt) {
-           const bb = (0, Sb.n)(ub);
-           for (const ub of bb) ub.Fs && "aLightLevels" in ub.Fs && this.bLb.push(ub);
+         if (this.lightTargetsForMesh !== Jd && (this.lightTargetsForMesh = Jd, this.lZd = [], this.lightTargetsBuilt = !1), !this.lightTargetsBuilt) {
+           const dd = (0, Cd.m)(Jd);
+           for (const Jd of dd) Jd.fn && "aLightLevels" in Jd.fn && this.lZd.push(Jd);
```

#### 1536. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11279` → after: `L11873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11873) · [Before (L11279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11279)

```diff
-         if (0 === this.bLb.length) return;
+         if (0 === this.lZd.length) return;
```

#### 1537. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11281` → after: `L11875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11875) · [Before (L11281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11281)

```diff
-         for (const Bb of this.bLb)(0, Sb.s)(Bb, hb)
+         for (const pd of this.lZd)(0, Cd.s)(pd, kd)
```

#### 1538. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11284` → after: `L11878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11878) · [Before (L11284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11284)

```diff
-         return this.PH.pW.Eub(this.heldItemState.yN)._lightLevels
+         return this.Jl.vG.AJd(this.heldItemState.qS)._lightLevels
```

#### 1539. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11288` → after: `L11882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11882) · [Before (L11288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11288)

```diff
-   38e3: (bb, ub, hb) => {
+   38527: (dd, Jd, kd) => {
```

#### 1540. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11290-L11293` → after: `L11884-L11887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11884-L11887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11884-L11887) · [Before (L11290-L11293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11290-L11293)

```diff
-       d: () => Xb,
-       f: () => pb,
-       i: () => Zb,
-       l: () => Ub
+       c: () => Ld,
+       e: () => Od,
+       g: () => Qd,
+       i: () => Pd
```

#### 1541. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11295-L11297` → after: `L11889-L11891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11889-L11891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11889-L11891) · [Before (L11295-L11297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11295-L11297)

```diff
-     var Bb = hb(36720),
-       Ob = hb(37226),
-       Gb = hb(4246);
+     var pd = kd(37245),
+       Nd = kd(37804),
+       Wd = kd(4329);
```

#### 1542. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11301-L11303` → after: `L11895-L11897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11895-L11897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11895-L11897) · [Before (L11301-L11303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11301-L11303)

```diff
-         position: new Bb.YX,
-         rotation: new Bb.YX,
-         pa: new Bb.YX,
+         position: new pd.IL,
+         rotation: new pd.IL,
+         fp: new pd.IL,
```

#### 1543. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11308-L11310` → after: `L11902-L11904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11902-L11904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11902-L11904) · [Before (L11308-L11310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11308-L11310)

```diff
-     const Lb = new Bb.YX(-.18, -.66, .48),
-       Yb = new Bb.YX(.4, 1.25, Math.PI + .9),
-       Sb = new Bb.YX(-.12, .12, .12),
+     const Zd = new pd.IL(-.18, -.66, .48),
+       gd = new pd.IL(.4, 1.25, Math.PI + .9),
+       Cd = new pd.IL(-.12, .12, .12),
```

#### 1544. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11316` → after: `L11910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11910) · [Before (L11316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11316)

```diff
-       return Bb.Matrix.RotationYawPitchRollToRef(bb.y, bb.x, bb.z, ab), Bb.Matrix.RotationYawPitchRollToRef(ub[1], ub[0], ub[2], Hb), Ob.b.matMulToRef(Hb, ab, wb), Bb.Quaternion.FromRotationMatrixToRef(wb, hb)
+       return pd.Matrix.RotationYawPitchRollToRef(dd.y, dd.x, dd.z, Kd), pd.Matrix.RotationYawPitchRollToRef(Jd[1], Jd[0], Jd[2], od), Nd.c.matMulToRef(od, Kd, ld), pd.Quaternion.FromRotationMatrixToRef(ld, kd)
```

#### 1545. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11328` → after: `L11922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11922) · [Before (L11328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11328)

```diff
-         pa: Ub
+         fp: Pd
```

#### 1546. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11330-L11332` → after: `L11924-L11926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11924-L11926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11924-L11926) · [Before (L11330-L11332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11330-L11332)

```diff
-       if (hb.usesQuaternion = !1, "Gun" === bb.type) return Bb.mD(Lb), Ob.mD(Yb), void Ub.mD(Sb);
-       const [ab, Hb, wb] = null !== ub && void 0 !== ub ? ub : [0, 0, 0], Zb = (0, Gb.d)(bb.type), pb = Zb ? 2.25 : 1.35, ob = Zb ? 0 : .08;
-       if ("TwoDTool" === bb.type || bb.holdAsAiming) Bb.M_(ab, -.48 + Hb, .24 + wb + ob), Ub.M_(.19 * pb, -.19 * pb, .19 * pb), bb.holdAsAiming ? Ob.M_(.4 + Math.PI, 1.25, Math.PI / 2) : Ob.M_(Math.PI, Math.PI / 2, .35 * Math.PI);
+       if (kd.usesQuaternion = !1, "Gun" === dd.type) return pd.Fs(Zd), Nd.Fs(gd), void Pd.Fs(Cd);
+       const [Kd, od, ld] = null !== Jd && void 0 !== Jd ? Jd : [0, 0, 0], Qd = (0, Wd.b)(dd.type), Od = Qd ? 2.25 : 1.35, ed = Qd ? 0 : .08;
+       if ("TwoDTool" === dd.type || dd.holdAsAiming) pd.kdd(Kd, -.48 + od, .24 + ld + ed), Pd.kdd(.19 * Od, -.19 * Od, .19 * Od), dd.holdAsAiming ? Nd.kdd(.4 + Math.PI, 1.25, Math.PI / 2) : Nd.kdd(Math.PI, Math.PI / 2, .35 * Math.PI);
```

#### 1547. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11334` → after: `L11928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11928) · [Before (L11334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11334)

```diff
-         Bb.M_(ab, -.72 + Hb, .18 + wb + ob);
+         pd.kdd(Kd, -.72 + od, .18 + ld + ed);
```

#### 1548. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11336` → after: `L11930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11930) · [Before (L11336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11336)

```diff
-         Ub.M_(bb, bb, bb), Ob.M_(Zb ? 0 : Math.PI, Math.PI / 2, -Math.PI / 2)
+         Pd.kdd(dd, dd, dd), Nd.kdd(Qd ? 0 : Math.PI, Math.PI / 2, -Math.PI / 2)
```

#### 1549. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11341` → after: `L11935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11935) · [Before (L11341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11341)

```diff
-   37993: (bb, ub, hb) => {
+   38520: (dd, Jd, kd) => {
```

#### 1550. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11343` → after: `L11937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11937) · [Before (L11343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11343)

```diff
-       c: () => Ub
+       d: () => Pd
```

#### 1551. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11345` → after: `L11939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11939) · [Before (L11345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11345)

```diff
-     var Bb = hb(36720);
+     var pd = kd(37245);
```

#### 1552. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11347` → after: `L11941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11941) · [Before (L11347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11347)

```diff
-       Gb = new Bb.YX;
+       Wd = new pd.IL;
```

#### 1553. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11351` → after: `L11945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11945) · [Before (L11351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11351)

```diff
-       const Lb = ub instanceof Bb.Quaternion ? ub : Bb.Quaternion.RotationYawPitchRollToRef(ub.y, ub.x, ub.z, Ob);
+       const Zd = Jd instanceof pd.Quaternion ? Jd : pd.Quaternion.RotationYawPitchRollToRef(Jd.y, Jd.x, Jd.z, Nd);
```

#### 1554. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11355` → after: `L11949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11949) · [Before (L11355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11355)

```diff
-   36711: (bb, ub, hb) => {
+   37228: (dd, Jd, kd) => {
```

#### 1555. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11365-L11369` → after: `L11959-L11963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11959-L11963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11959-L11963) · [Before (L11365-L11369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11365-L11369)

```diff
-     var Bb = hb(36713),
-       Ob = hb(2560),
-       Gb = hb(588),
-       Ub = hb(1124),
-       Lb = hb(16);
+     var pd = kd(37236),
+       Nd = kd(2634),
+       Wd = kd(610),
+       Pd = kd(1245),
+       Zd = kd(29);
```

#### 1556. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11384` → after: `L11978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11978) · [Before (L11384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11384)

```diff
-         if (null !== Ob.lN)
+         if (null !== Nd.Rm)
```

#### 1557. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11393` → after: `L11987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11987) · [Before (L11393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11393)

```diff
-         if (null === Ob.lN || null === (Bb = Ob.hideOnArmourPartsEquip) || void 0 === Bb || !Bb.length) continue;
+         if (null === Nd.Rm || null === (pd = Nd.hideOnArmourPartsEquip) || void 0 === pd || !pd.length) continue;
```

#### 1558. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11395-L11408` → after: `L11989-L12002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R11989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L11989-L12002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L11989-L12002) · [Before (L11395-L11408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11395-L11408)

```diff
-         bb.setVisibility(Ob.lN, !Gb)
-       }
-     }
-     var Hb = hb(37044),
-       wb = hb(36836),
-       Zb = hb(37077),
-       Xb = hb(37050),
-       pb = hb(314),
-       ob = hb(36800),
-       Ab = hb(36864),
-       lb = hb(36868),
-       Kb = hb(36947),
-       Wb = hb(37016),
-       Cb = hb(37020);
+         dd.setVisibility(Nd.Rm, !Wd)
+       }
+     }
+     var od = kd(37602),
+       ld = kd(37366),
+       Qd = kd(37640),
+       Ld = kd(37610),
+       Od = kd(313),
+       ed = kd(37337),
+       Rd = kd(37389),
+       Id = kd(37395),
+       Gd = kd(37501),
+       vd = kd(37573),
+       xd = kd(37579);
```

#### 1559. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11413` → after: `L12007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12007) · [Before (L11413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11413)

```diff
-         this.attachments = [], this.animatedAttachments = [], this.zIndexSub = void 0, this.personFullBody = !1, this.yN = void 0
+         this.attachments = [], this.animatedAttachments = [], this.zIndexSub = void 0, this.personFullBody = !1, this.qS = void 0
```

#### 1560. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11421` → after: `L12015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12015) · [Before (L11421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11421)

```diff
-       } = Bb, Lb = (0, lb.d)(Gb, Ub);
+       } = pd, Zd = (0, Id.h)(Wd, Pd);
```

#### 1561. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11425` → after: `L12019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12019) · [Before (L11425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11425)

```diff
-       } else db[Lb] = null, (0, lb.h)(Gb, bb.xX.Xp).then((bb => {
+       } else qd[Zd] = null, (0, Id.i)(Wd, dd.UL.BO).then((dd => {
```

#### 1562. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11427` → after: `L12021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12021) · [Before (L11427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11427)

```diff
-           const Gb = (0, Ob.g)(),
+           const Wd = (0, Nd.e)(),
```

#### 1563. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11429-L11433` → after: `L12023-L12027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12023-L12027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12023-L12027) · [Before (L11429-L11433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11429-L11433)

```diff
-               Xp: Ub
-             } = Gb.xX,
-             Lb = (0, lb.d)(ub, hb),
-             Yb = (0, lb.c)(null !== hb && void 0 !== hb ? hb : ub, Ub, (bb => {
-               (0, wb.q)(bb, Ab.d), (0, Xb.e)(bb, Gb.xX), (0, ob.b)(bb), (0, wb.J)(bb)
+               BO: Pd
+             } = Wd.UL,
+             Zd = (0, Id.h)(Jd, kd),
+             gd = (0, Id.d)(null !== kd && void 0 !== kd ? kd : Jd, Pd, (dd => {
+               (0, ld.s)(dd, Rd.d), (0, Ld.e)(dd, Wd.UL), (0, ed.d)(dd), (0, ld.M)(dd)
```

#### 1564. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11436` → after: `L12030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12030) · [Before (L11436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11436)

```diff
-           (0, lb.i)(bb, Yb, {
+           (0, Id.l)(dd, gd, {
```

#### 1565. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11439` → after: `L12033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12033) · [Before (L11439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11439)

```diff
-               (0, Zb.g)(bb) || bb.ZN().vN(bb)
+               (0, Qd.h)(dd) || dd.Wm().Tm(dd)
```

#### 1566. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11446` → after: `L12040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12040) · [Before (L11446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11446)

```diff
-           for (const Ob of Sb)(0, lb.k)(Ob);
+           for (const Nd of Cd)(0, Id.o)(Nd);
```

#### 1567. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11448-L11449` → after: `L12042-L12043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12042-L12043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12042-L12043) · [Before (L11448-L11449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11448-L11449)

```diff
-           const pb = Gb.xX.oN,
-             Kb = Gb.pW.qN(Gb.pW.names.meshAttachments);
+           const Od = Wd.UL.Qm,
+             Gd = Wd.vG.kS(Wd.vG.names.meshAttachments);
```

#### 1568. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11452` → after: `L12046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12046) · [Before (L11452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11452)

```diff
-             const bb = null !== (Wb = null === (Cb = Gb.pW.lub(Ob.yN)) || void 0 === Cb ? void 0 : Cb.lN) && void 0 !== Wb ? Wb : null;
+             const dd = null !== (vd = null === (xd = Wd.vG.mJd(Nd.qS)) || void 0 === xd ? void 0 : xd.Rm) && void 0 !== vd ? vd : null;
```

#### 1569. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11454` → after: `L12048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12048) · [Before (L11454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11454)

```diff
-               for (const Bb of Ob.attachments) Bb.modelGlb === ub && Bb.texture === hb && null === Bb.lN && Db(Ob, bb, Hb, Bb);
+               for (const pd of Nd.attachments) pd.modelGlb === Jd && pd.texture === kd && null === pd.Rm && Md(Nd, dd, od, pd);
```

#### 1570. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11456` → after: `L12050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12050) · [Before (L11456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11456)

```diff
-             } else console.error(`Loaded ${Lb} but theres no thinObjectId ${bb} for parent entity ${Ob.yN}`)
+             } else console.error(`Loaded ${Zd} but theres no thinObjectId ${dd} for parent entity ${Nd.qS}`)
```

#### 1571. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11460` → after: `L12054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12054) · [Before (L11460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11460)

```diff
-         console.error(`Failed to load ${Gb}:`, bb.stack)
+         console.error(`Failed to load ${Wd}:`, dd.stack)
```

#### 1572. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11466-L11468` → after: `L12060-L12062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12060-L12062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12060-L12062) · [Before (L11466-L11468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11466-L11468)

```diff
-       const Lb = (0, Ob.g)(),
-         Yb = Lb.xX.oN,
-         Sb = `${(0,lb.d)(Bb.modelGlb,Bb.texture)}|${Bb.modelNode}`;
+       const Zd = (0, Nd.e)(),
+         gd = Zd.UL.Qm,
+         Cd = `${(0,Id.h)(pd.modelGlb,pd.texture)}|${pd.modelNode}`;
```

#### 1573. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11471` → after: `L12065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12065) · [Before (L11471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11471)

```diff
-         if (!bb) return void console.error(`Node ${Bb.modelNode} not found in container ${Bb.modelGlb}`);
+         if (!dd) return void console.error(`Node ${pd.modelNode} not found in container ${pd.modelGlb}`);
```

#### 1574. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11473` → after: `L12067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12067) · [Before (L11473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11473)

```diff
-           LH: 4,
+           oo: 4,
```

#### 1575. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11482-L11483` → after: `L12076-L12077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12076-L12077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12076-L12077) · [Before (L11482-L11483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11482-L11483)

```diff
-         }), void 0 !== Bb.animation && (0, lb.l)(hb), Yb.setPickableForType(Sb, !0);
-         for (const ub of [bb, ...bb.getChildMeshes()]) ub.material && Lb.xX.mN(ub)
+         }), void 0 !== pd.animation && (0, Id.q)(kd), gd.setPickableForType(Cd, !0);
+         for (const Jd of [dd, ...dd.getChildMeshes()]) Jd.material && Zd.UL.Am(Jd)
```

#### 1576. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11489-L11492` → after: `L12083-L12086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12083-L12086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12083-L12086) · [Before (L11489-L11492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11489-L11492)

```diff
-       Yb.setEntityId(ab, Zb), Yb.setPickable(ab, bb.personFullBody && (0, Wb.l)(Zb)), Yb.set(ab, "aOpacity", (0, Cb.holderAttachmentOpacity)(Lb, Zb));
-       const Xb = Lb.Qs[Lb.bM][Zb];
-       if (Yb.setRenderingGroupId(ab, null !== (Gb = null === Xb || void 0 === Xb ? void 0 : Xb.zIndex) && void 0 !== Gb ? Gb : 0), null !== Xb && void 0 !== Xb && Xb.overlayColour) {
-         const [bb, ub, hb] = (0, pb.X)(Xb.overlayColour);
+       gd.setEntityId(Kd, Qd), gd.setPickable(Kd, dd.personFullBody && (0, vd.j)(Qd)), gd.set(Kd, "aOpacity", (0, xd.holderAttachmentOpacity)(Zd, Qd));
+       const Ld = Zd.dU[Zd.kU][Qd];
+       if (gd.setRenderingGroupId(Kd, null !== (Wd = null === Ld || void 0 === Ld ? void 0 : Ld.zIndex) && void 0 !== Wd ? Wd : 0), null !== Ld && void 0 !== Ld && Ld.overlayColour) {
+         const [dd, Jd, kd] = (0, Od.$)(Ld.overlayColour);
```

#### 1577. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11495-L11496` → after: `L12089-L12090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12089-L12090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12089-L12090) · [Before (L11495-L11496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11495-L11496)

```diff
-       const ob = Lb.pW.Eub(Zb);
-       if (Yb.set(ab, "aLightLevels", null !== (Ub = null === ob || void 0 === ob ? void 0 : ob._lightLevels) && void 0 !== Ub ? Ub : Hb.c), Bb.overlayColour) {
+       const ed = Zd.vG.AJd(Qd);
+       if (gd.set(Kd, "aLightLevels", null !== (Pd = null === ed || void 0 === ed ? void 0 : ed._lightLevels) && void 0 !== Pd ? Pd : od.e), pd.overlayColour) {
```

#### 1578. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11500` → after: `L12094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12094) · [Before (L11500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11500)

```diff
-       if (Bb.lN = ab, void 0 !== Bb.animation) {
+       if (pd.Rm = Kd, void 0 !== pd.animation) {
```

#### 1579. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11502` → after: `L12096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12096) · [Before (L11502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11502)

```diff
-         void 0 === ub && (ub = Kb.e.fromRestInstance(Yb, ab, Bb.animation), rb.set(Sb, ub)), Bb.clipPose = ub, null !== ub && bb.animatedAttachments.push(Bb)
+         void 0 === Jd && (Jd = Gd.c.fromRestInstance(gd, Kd, pd.animation), Bd.set(Cd, Jd)), pd.clipPose = Jd, null !== Jd && dd.animatedAttachments.push(pd)
```

#### 1580. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11507` → after: `L12101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12101) · [Before (L11507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11507)

```diff
-       const Bb = bb.pW.getState(ub, bb.pW.names.meshAttachments);
+       const pd = dd.vG.getState(Jd, dd.vG.names.meshAttachments);
```

#### 1581. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11509` → after: `L12103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12103) · [Before (L11509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11509)

```diff
-         for (const Ob of Bb.attachments) null !== Ob.lN && bb.xX.oN.setPickable(Ob.lN, hb)
+         for (const Nd of pd.attachments) null !== Nd.Rm && dd.UL.Qm.setPickable(Nd.Rm, kd)
```

#### 1582. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11517-L11519` → after: `L12111-L12113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12111-L12113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12111-L12113) · [Before (L11517-L11519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11517-L11519)

```diff
-         UW: function(ub, hb) {
-           hb.zIndexSub = Lb.i.subscribe(`otherEntitySettingsClientifiedEId|${ub}|zIndex`, (ub => {
-             for (const Bb of hb.attachments) null !== Bb.lN && bb.xX.oN.setRenderingGroupId(Bb.lN, ub)
+         QG: function(Jd, kd) {
+           kd.zIndexSub = Zd.j.subscribe(`otherEntitySettingsClientifiedEId|${Jd}|zIndex`, (Jd => {
+             for (const pd of kd.attachments) null !== pd.Rm && dd.UL.Qm.setRenderingGroupId(pd.Rm, Jd)
```

#### 1583. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11522-L11524` → after: `L12116-L12118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12116-L12118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12116-L12118) · [Before (L11522-L11524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11522-L11524)

```diff
-         gJ: function(ub, hb) {
-           Lb.i.unsubscribe(hb.zIndexSub);
-           const Bb = bb.xX.oN;
+         RY: function(Jd, kd) {
+           Zd.j.unsubscribe(kd.zIndexSub);
+           const pd = dd.UL.Qm;
```

#### 1584. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11526-L11527` → after: `L12120-L12121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12120-L12121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12120-L12121) · [Before (L11526-L11527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11526-L11527)

```diff
-             if (null !== bb.lN && Bb.has(bb.lN)) try {
-               Bb.delete(bb.lN)
+             if (null !== dd.Rm && pd.has(dd.Rm)) try {
+               pd.delete(dd.Rm)
```

#### 1585. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11529` → after: `L12123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12123) · [Before (L11529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11529)

```diff
-               console.error(`Failed to cleanup attachment ${bb.lN} of entity ${ub}:`, Ob.stack)
+               console.error(`Failed to cleanup attachment ${dd.Rm} of entity ${Jd}:`, Nd.stack)
```

#### 1586. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11533` → after: `L12127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12127) · [Before (L11533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11533)

```diff
-         oW: function(ub, hb) {
+         xG: function(Jd, kd) {
```

#### 1587. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11537-L11538` → after: `L12131-L12132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12131-L12132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12131-L12132) · [Before (L11537-L11538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11537-L11538)

```diff
-             const ub = null !== (Ob = null === (Gb = bb.pW.lub(Ub.yN)) || void 0 === Gb ? void 0 : Gb.lN) && void 0 !== Ob ? Ob : null;
-             null === ub || (0, Bb.pausesOutOfView)(bb, Ub.yN, ub) || ib(bb, Ub)
+             const Jd = null !== (Nd = null === (Wd = dd.vG.mJd(Pd.qS)) || void 0 === Wd ? void 0 : Wd.Rm) && void 0 !== Nd ? Nd : null;
+             null === Jd || (0, pd.pausesOutOfView)(dd, Pd.qS, Jd) || bd(dd, Pd)
```

#### 1588. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11545` → after: `L12139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12139) · [Before (L11545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11545)

```diff
-       const hb = bb.pW.getState(ub, bb.pW.names.meshAttachments);
+       const kd = dd.vG.getState(Jd, dd.vG.names.meshAttachments);
```

#### 1589. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11550-L11552` → after: `L12144-L12146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12144-L12146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12144-L12146) · [Before (L11550-L11552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11550-L11552)

```diff
-       const hb = bb.xX.oN,
-         Bb = bb.wbb / 1e3;
-       for (const Ob of ub.animatedAttachments) Ob.clipPose.write(hb, Ob.lN, Bb)
+       const kd = dd.UL.Qm,
+         pd = dd.Ydd / 1e3;
+       for (const Nd of Jd.animatedAttachments) Nd.clipPose.write(kd, Nd.Rm, pd)
```

#### 1590. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11556` → after: `L12150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12150) · [Before (L11556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11556)

```diff
-       const Bb = bb.pW.getState(ub, bb.pW.names.meshAttachments);
+       const pd = dd.vG.getState(Jd, dd.vG.names.meshAttachments);
```

#### 1591. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11559` → after: `L12153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12153) · [Before (L11559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11559)

```diff
-           if (Ob.lN === hb) return !0;
+           if (Nd.Rm === kd) return !0;
```

#### 1592. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11565` → after: `L12159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12159) · [Before (L11565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11565)

```diff
-       return eb(bb, ub, null !== (Bb = hb.attachments) && void 0 !== Bb ? Bb : [])
+       return fd(dd, Jd, null !== (pd = kd.attachments) && void 0 !== pd ? pd : [])
```

#### 1593. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11574-L11577` → after: `L12168-L12171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12168-L12171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12168-L12171) · [Before (L11574-L11577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11574-L11577)

```diff
-       if ((0, Gb.J)(bb)) return console.error("Cannot update mesh attachments for invalid eId", bb), Bb;
-       const Lb = (0, Ob.g)(),
-         Yb = Lb.pW.lub(bb);
-       if (!Yb) return console.error(`Cannot update mesh attachments for entity ${bb} as it has no mesh`), Bb;
+       if ((0, Wd.I)(dd)) return console.error("Cannot update mesh attachments for invalid eId", dd), pd;
+       const Zd = (0, Nd.e)(),
+         gd = Zd.vG.mJd(dd);
+       if (!gd) return console.error(`Cannot update mesh attachments for entity ${dd} as it has no mesh`), pd;
```

#### 1594. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11579` → after: `L12173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12173) · [Before (L11579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11579)

```diff
-         lN: Sb
+         Rm: Cd
```

#### 1595. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11581-L11584` → after: `L12175-L12178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12175-L12178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12175-L12178) · [Before (L11581-L11584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11581-L11584)

```diff
-       if (null === Sb) return console.error(`Cannot update mesh attachments for entity ${bb} as it has no thinObjectId`), Bb;
-       const Hb = Lb.pW.getState(bb, Lb.pW.names.meshAttachments);
-       if (!Hb) return console.error(`Cannot update mesh attachments for entity ${bb} as it has no meshAttachments component`), Bb;
-       for (const Ob of Hb.attachments)(0, Ub.yb)(Ob.owners, ub);
+       if (null === Cd) return console.error(`Cannot update mesh attachments for entity ${dd} as it has no thinObjectId`), pd;
+       const od = Zd.vG.getState(dd, Zd.vG.names.meshAttachments);
+       if (!od) return console.error(`Cannot update mesh attachments for entity ${dd} as it has no meshAttachments component`), pd;
+       for (const Nd of od.attachments)(0, Pd.jb)(Nd.owners, Jd);
```

#### 1596. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11591` → after: `L12185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12185) · [Before (L11591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11591)

```diff
-               Bb.owners.push(hb), sb(bb, Bb.lN, Ub.overlayColour), Ob = !0;
+               pd.owners.push(kd), Ud(dd, pd.Rm, Pd.overlayColour), Nd = !0;
```

#### 1597. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11597` → after: `L12191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12191) · [Before (L11597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11597)

```diff
-             lN: null,
+             Rm: null,
```

#### 1598. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11602` → after: `L12196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12196) · [Before (L11602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11602)

```diff
-         return ab(bb.xX.oN, Bb, ub.attachments), Gb
+         return Kd(dd.UL.Qm, pd, Jd.attachments), Wd
```

#### 1599. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11604` → after: `L12198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12198) · [Before (L11604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11604)

```diff
-       const wb = Lb.xX.oN;
+       const ld = Zd.UL.Qm;
```

#### 1600. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11607` → after: `L12201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12201) · [Before (L11607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11607)

```diff
-         0 === bb.owners.length && (null !== bb.lN && wb.delete(bb.lN), (0, Ub.yb)(Hb.attachments, bb), null !== bb.clipPose && (0, Ub.yb)(Hb.animatedAttachments, bb), Ob--)
+         0 === dd.owners.length && (null !== dd.Rm && ld.delete(dd.Rm), (0, Pd.jb)(od.attachments, dd), null !== dd.clipPose && (0, Pd.jb)(od.animatedAttachments, dd), Nd--)
```

#### 1601. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11614-L11615` → after: `L12208-L12209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12208-L12209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12208-L12209) · [Before (L11614-L11615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11614-L11615)

```diff
-       const hb = (0, Ob.g)(),
-         Bb = hb.pW.getState(bb, hb.pW.names.meshAttachments);
+       const kd = (0, Nd.e)(),
+         pd = kd.vG.getState(dd, kd.vG.names.meshAttachments);
```

#### 1602. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11617-L11618` → after: `L12211-L12212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12211-L12212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12211-L12212) · [Before (L11617-L11618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11617-L11618)

```diff
-       const Ub = null === (ub = hb.pW.lub(bb)) || void 0 === ub ? void 0 : ub.lN;
-       (0, Gb.J)(Ub) || ab(hb.xX.oN, Ub, Bb.attachments)
+       const Pd = null === (Jd = kd.vG.mJd(dd)) || void 0 === Jd ? void 0 : Jd.Rm;
+       (0, Wd.I)(Pd) || Kd(kd.UL.Qm, Pd, pd.attachments)
```

#### 1603. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11623` → after: `L12217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12217) · [Before (L11623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11623)

```diff
-       const Bb = bb.xX.oN;
+       const pd = dd.UL.Qm;
```

#### 1604. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11630` → after: `L12224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12224) · [Before (L11630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11630)

```diff
-   37266: (bb, ub, hb) => {
+   37835: (dd, Jd, kd) => {
```

#### 1605. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11638-L11643` → after: `L12232-L12237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12232-L12237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12232-L12237) · [Before (L11638-L11643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11638-L11643)

```diff
-     var Bb = hb(2560),
-       Ob = hb(1784),
-       Gb = hb(314),
-       Ub = hb(37276),
-       Lb = hb(37274),
-       Yb = hb(324),
+     var pd = kd(2634),
+       Nd = kd(1901),
+       Wd = kd(313),
+       Pd = kd(37848),
+       Zd = kd(37845),
+       gd = kd(325),
```

#### 1606. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11645-L11647` → after: `L12239-L12241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12239-L12241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12239-L12241) · [Before (L11645-L11647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11645-L11647)

```diff
-       ab = hb(37027),
-       Hb = hb(36713),
-       wb = hb(37269);
+       Kd = kd(37588),
+       od = kd(37236),
+       ld = kd(37842);
```

#### 1607. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11651` → after: `L12245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12245) · [Before (L11651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11651)

```diff
-         this.isServerControlled = !1, this.defaultRotationsPerSecond = 5, this.childrenNodeParams = [], this.playerControlledRotationSoftTolerance = null, this.playerControlledRotationHardTolerance = null, this.modelYRotationOffset = 0, this.renderRotation = null, this.serverSetR … [truncated]
+         this.isServerControlled = !1, this.defaultRotationsPerSecond = 5, this.childrenNodeParams = [], this.playerControlledRotationSoftTolerance = null, this.playerControlledRotationHardTolerance = null, this.modelYRotationOffset = 0, this.renderRotation = null, this.serverSetR … [truncated]
```

#### 1608. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11660` → after: `L12254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12254) · [Before (L11660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11660)

```diff
-         UW: function(bb, ub) {
+         QG: function(dd, Jd) {
```

#### 1609. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11668-L11669` → after: `L12262-L12263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12262-L12263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12262-L12263) · [Before (L11668-L11669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11668-L11669)

```diff
-         gJ: null,
-         oW: function(ub, hb) {
+         RY: null,
+         xG: function(Jd, kd) {
```

#### 1610. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11673` → after: `L12267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12267) · [Before (L11673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11673)

```diff
-             const hb = bb.pW.lub(Gb.yN);
+             const kd = dd.vG.mJd(Wd.qS);
```

#### 1611. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11675` → after: `L12269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12269) · [Before (L11675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11675)

```diff
-               Gb.DW = !1;
+               Wd.YG = !1;
```

#### 1612. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11679` → after: `L12273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12273) · [Before (L11679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11679)

```diff
-               Nhb: Ub
+               rkd: Pd
```

#### 1613. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11681-L11682` → after: `L12275-L12276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12275-L12276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12275-L12276) · [Before (L11681-L11682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11681-L11682)

```diff
-             if (!(null !== (Bb = null === Ub || void 0 === Ub ? void 0 : Ub.shb) && void 0 !== Bb ? Bb : null === (Ob = hb.mesh) || void 0 === Ob ? void 0 : Ob.isEnabled())) {
-               Gb.DW = !1;
+             if (!(null !== (pd = null === Pd || void 0 === Pd ? void 0 : Pd.ukd) && void 0 !== pd ? pd : null === (Nd = kd.mesh) || void 0 === Nd ? void 0 : Nd.isEnabled())) {
+               Wd.YG = !1;
```

#### 1614. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11686` → after: `L12280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12280) · [Before (L11686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11686)

```diff
-               lN: Lb
+               Rm: Zd
```

#### 1615. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11688` → after: `L12282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12282) · [Before (L11688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11688)

```diff
-             Ub ? Gb._thinObjectId !== Lb && Wb(Gb, Lb) : Gb._rootMesh !== hb.mesh && Cb(Gb, hb.mesh), Ub && (0, Hb.pausesOutOfView)(bb, Gb.yN, Lb) ? Gb.DW = !0 : Kb(bb, Gb)
+             Pd ? Wd._thinObjectId !== Zd && vd(Wd, Zd) : Wd._rootMesh !== kd.mesh && xd(Wd, kd.mesh), Pd && (0, od.pausesOutOfView)(dd, Wd.qS, Zd) ? Wd.YG = !0 : Gd(dd, Wd)
```

#### 1616. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11695` → after: `L12289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12289) · [Before (L11695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11695)

```diff
-       ub.DW && null !== ub._thinObjectId && bb.xX.oN.has(ub._thinObjectId) && Kb(bb, ub)
+       Jd.YG && null !== Jd._thinObjectId && dd.UL.Qm.has(Jd._thinObjectId) && Gd(dd, Jd)
```

#### 1617. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11699` → after: `L12293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12293) · [Before (L11699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11699)

```diff
-       const hb = ub.isServerControlled ? ub.serverSetRotation[1] : bb.pW.nub(ub.yN).heading;
+       const kd = Jd.isServerControlled ? Jd.serverSetRotation[1] : dd.vG.nJd(Jd.qS).heading;
```

#### 1618. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11704` → after: `L12298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12298) · [Before (L11704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11704)

```diff
-       const hb = bb.pW.getState(ub, "meshRotation");
+       const kd = dd.vG.getState(Jd, "meshRotation");
```

#### 1619. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11710-L11716` → after: `L12304-L12310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12304-L12310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12304-L12310) · [Before (L11710-L11716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11710-L11716)

```diff
-       ub.DW = !1;
-       const Ab = bb.pW.uub(bb.bM),
-         lb = bb.pW.Hhb(ub.yN),
-         Kb = ub.yN === bb.bM,
-         Wb = (0, wb.b)(bb, ub.yN, lb),
-         Cb = bb.pW.nub(bb.bM),
-         db = bb.pW.nub(ub.yN),
+       Jd.YG = !1;
+       const Rd = dd.vG.RJd(dd.kU),
+         Id = dd.vG.Gkd(Jd.qS),
+         Gd = Jd.qS === dd.kU,
+         vd = (0, ld.c)(dd, Jd.qS, Id),
+         xd = dd.vG.nJd(dd.kU),
+         qd = dd.vG.nJd(Jd.qS),
```

#### 1620. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11719-L11720` → after: `L12313-L12314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12313-L12314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12313-L12314) · [Before (L11719-L11720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11719-L11720)

```diff
-         const hb = bb.bloxd.getResolvedPhysicsSettings(bb.bM, Ab.physicsState);
-         null === hb.fixedHeading && hb.steering && Ab._steeringActiveLastTick ? nb[1] = (0, Lb.l)(bb, Ab) : nb[1] = (0, Ub.t)(hb, Ab.steeringHeading, ub.baseRenderRotation[1] + ab.c.getPlayerFacingHeading(bb))
+         const kd = dd.bloxd.getResolvedPhysicsSettings(dd.kU, Rd.physicsState);
+         null === kd.fixedHeading && kd.steering && Rd._steeringActiveLastTick ? ad[1] = (0, Zd.i)(dd, Rd) : ad[1] = (0, Pd.q)(kd, Rd.steeringHeading, Jd.baseRenderRotation[1] + Kd.c.getPlayerFacingHeading(dd))
```

#### 1621. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11723-L11725` → after: `L12317-L12319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12317-L12319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12317-L12319) · [Before (L11723-L11725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11723-L11725)

```diff
-         if ((null === lb || void 0 === lb ? void 0 : lb.whb) && bb.bloxd.getRiddenVehicleEId(lb.mZ) === ub.yN && null === bb.bloxd.getLifeformType(ub.yN)) {
-           const bb = Ob.c.lerpWeight(Zb * ub._accumulatedDt);
-           nb[1] = ub.renderRotation[1] + Gb.d.computeShortestRotation(ub.renderRotation[1], nb[1]) * bb
+         if ((null === Id || void 0 === Id ? void 0 : Id.vkd) && dd.bloxd.getRiddenVehicleEId(Id.zQ) === Jd.qS && null === dd.bloxd.getLifeformType(Jd.qS)) {
+           const dd = Nd.d.lerpWeight(Qd * Jd._accumulatedDt);
+           ad[1] = Jd.renderRotation[1] + Wd.b.computeShortestRotation(Jd.renderRotation[1], ad[1]) * dd
```

#### 1622. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11728-L11729` → after: `L12322-L12323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12322-L12323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12322-L12323) · [Before (L11728-L11729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11728-L11729)

```diff
-       const Db = Wb ? null !== (hb = null === Cb || void 0 === Cb ? void 0 : Cb.speed) && void 0 !== hb ? hb : 0 : null !== (Bb = null === db || void 0 === db ? void 0 : db.speed) && void 0 !== Bb ? Bb : 0,
-         xb = null !== (Yb = null === db || void 0 === db ? void 0 : db.pose) && void 0 !== Yb ? Yb : "standing",
+       const Md = vd ? null !== (kd = null === xd || void 0 === xd ? void 0 : xd.speed) && void 0 !== kd ? kd : 0 : null !== (pd = null === qd || void 0 === qd ? void 0 : qd.speed) && void 0 !== pd ? pd : 0,
+         Fd = null !== (gd = null === qd || void 0 === qd ? void 0 : qd.pose) && void 0 !== gd ? gd : "standing",
```

#### 1623. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11734-L11735` → after: `L12328-L12329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12328-L12329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12328-L12329) · [Before (L11734-L11735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11734-L11735)

```diff
-         tb = !(Wb && !Kb) && !0 === (null === (Hb = bb.Qs) || void 0 === Hb || null === (Xb = Hb[bb.bM]) || void 0 === Xb || null === (pb = Xb[ub.yN]) || void 0 === pb ? void 0 : pb.lockHeadToBody),
-         Jb = null !== (ob = bb.pW.getState(ub.yN, "animator")) && void 0 !== ob ? ob : null;
+         jd = !(vd && !Gd) && !0 === (null === (od = dd.dU) || void 0 === od || null === (Ld = od[dd.kU]) || void 0 === Ld || null === (Od = Ld[Jd.qS]) || void 0 === Od ? void 0 : Od.lockHeadToBody),
+         Xd = null !== (ed = dd.vG.getState(Jd.qS, "animator")) && void 0 !== ed ? ed : null;
```

#### 1624. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11744` → after: `L12338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12338) · [Before (L11744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11744)

```diff
-       const Gb = (0, Bb.g)().xX.oN.getNodeNames(ub),
+       const Wd = (0, pd.e)().UL.Qm.getNodeNames(Jd),
```

#### 1625. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11788` → after: `L12382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12382) · [Before (L11788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11788)

```diff
-       let nb = wb ? 0 : null !== Yb && void 0 !== Yb ? Yb : 0,
+       let ad = ld ? 0 : null !== gd && void 0 !== gd ? gd : 0,
```

#### 1626. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11796` → after: `L12390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12390) · [Before (L11796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11796)

```diff
-           gb = Math.max(gb, null !== (ib = pb[Bb].rotationsPerSecond) && void 0 !== ib ? ib : ob)
+           md = Math.max(md, null !== (bd = Od[pd].rotationsPerSecond) && void 0 !== bd ? bd : ed)
```

#### 1627. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11802-L11803` → after: `L12396-L12397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12396-L12397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12396-L12397) · [Before (L11802-L11803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11802-L11803)

```diff
-           hb = wb ? 0 : null !== Yb && void 0 !== Yb ? Yb : bb.softTolerance,
-           Ub = wb ? null : null !== ab && void 0 !== ab ? ab : bb.hardTolerance,
+           kd = ld ? 0 : null !== gd && void 0 !== gd ? gd : dd.softTolerance,
+           Pd = ld ? null : null !== Kd && void 0 !== Kd ? Kd : dd.hardTolerance,
```

#### 1628. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11807` → after: `L12401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12401) · [Before (L11807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11807)

```diff
-         const Hb = wb ? gb : null !== (vb = bb.rotationsPerSecond) && void 0 !== vb ? vb : ob,
+         const od = ld ? md : null !== (Sd = dd.rotationsPerSecond) && void 0 !== Sd ? Sd : ed,
```

#### 1629. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11812-L11813` → after: `L12406-L12407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12406-L12407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12406-L12407) · [Before (L11812-L11813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11812-L11813)

```diff
-             hb = Gb.d.computeShortestRotation(jb[Bb], Lb[Bb]);
-           hb < -nb ? Lb[Bb] = jb[Bb] - nb : hb > nb && (Lb[Bb] = jb[Bb] + nb);
+             kd = Wd.b.computeShortestRotation(sd[pd], Zd[pd]);
+           kd < -ad ? Zd[pd] = sd[pd] - ad : kd > ad && (Zd[pd] = sd[pd] + ad);
```

#### 1630. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11816` → after: `L12410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12410) · [Before (L11816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11816)

```diff
-             const bb = Gb.d.computeShortestRotation(jb[Bb], Sb[Bb]),
+             const dd = Wd.b.computeShortestRotation(sd[pd], Cd[pd]),
```

#### 1631. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11820` → after: `L12414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12414) · [Before (L11820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11820)

```diff
-           Ob || (Sb[Bb] = Gb.d.applyRotation(Sb[Bb], Lb[Bb], Zb)), Lb[Bb] === bb && Sb[Bb] === ub || (rb = !0)
+           Nd || (Cd[pd] = Wd.b.applyRotation(Cd[pd], Zd[pd], Qd)), Zd[pd] === dd && Cd[pd] === Jd || (Bd = !0)
```

#### 1632. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11825` → after: `L12419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12419) · [Before (L11825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11825)

```diff
-       const tb = (0, Bb.g)().xX.oN,
+       const jd = (0, pd.e)().UL.Qm,
```

#### 1633. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11834` → after: `L12428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12428) · [Before (L11834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11834)

```diff
-         const Ob = Gb.d.computeShortestRotation(hb[1], jb[1]);
+         const Nd = Wd.b.computeShortestRotation(kd[1], sd[1]);
```

#### 1634. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11846` → after: `L12440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12440) · [Before (L11846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11846)

```diff
-   37292: (bb, ub, hb) => {
+   37862: (dd, Jd, kd) => {
```

#### 1635. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11851-L11854` → after: `L12445-L12448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12445-L12448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12445-L12448) · [Before (L11851-L11854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11851-L11854)

```diff
-     var Bb = hb(37308),
-       Ob = hb(191),
-       Gb = hb(6213),
-       Ub = hb(324),
+     var pd = kd(37880),
+       Nd = kd(193),
+       Wd = kd(6347),
+       Pd = kd(325),
```

#### 1636. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11856-L11862` → after: `L12450-L12456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12450-L12456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12450-L12456) · [Before (L11856-L11862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11856-L11862)

```diff
-       Yb = hb(37298),
-       Sb = hb(9181),
-       ab = hb(37276),
-       Hb = hb(37279),
-       wb = hb(37286);
-     var Zb = hb(1784),
-       Xb = hb(314);
+       gd = kd(37869),
+       Cd = kd(9331),
+       Kd = kd(37848),
+       od = kd(37856),
+       ld = kd(37858);
+     var Qd = kd(1901),
+       Ld = kd(313);
```

#### 1637. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11867` → after: `L12461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12461) · [Before (L11867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11867)

```diff
-     const Wb = [1, 2, 0, 6, "c", "i", 49, "e", "f", 4, 8, 255, "length", "b", 219, 145, 129, "undefined", void 0, 32, 33, 63, "fromCodePoint", 7, 12, "push", 95, 101, 3, 31, "h", 52, 91, 8191, 88, 13, 14, "d", null, 228, 105, 197, 60, 79, 166, 243, 169, 103, "g", 208, 133, 115, 9 … [truncated]
+     const vd = ["b", 0, 1, 8, "c", 44, "i", "g", 201, "f", 214, 255, "length", "h", "e", 4, "undefined", void 0, 2, 225, 94, "a", 63, 6, "fromCodePoint", 7, 12, "push", 19, 146, 90, 230, 226, 91, 224, 202, 8191, 88, 13, 14, "d", 102, 194, 148, 3, 5, 53, 215, 9, 241, 127, "hO", 52 … [truncated]
```

#### 1638. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11870` → after: `L12464-L12475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12464-L12475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12464-L12475) · [Before (L11870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11870)

```diff
-       return bb[Wb[12]] = Wb[0], typeof mb !== Wb[17] && mb ? (new mb).decode(new Ib(bb[Wb[2]])) : typeof Pb !== Wb[17] && Pb ? Pb.from(bb[Wb[2]]).toString("utf-8") : yb(bb[Wb[2]])
+       return dd[vd[12]] = vd[2], typeof Id[dd[vd[1]]] === vd[16] ? Id[dd[vd[1]]] = function(...dd) {
+         for (sd(dd[vd[12]] = vd[2], dd[-vd[5]] = 'DbCaRqovrnZc3@tp*Ph|8W+Uf!ONJ/^s{GHg`u>YzBMy;j]d)LiSEV4e&.[Q6I=2,lk}m7~1xw%KX?A9<#:$F50_"(T', dd[vd[0]] = "" + (dd[vd[1]] || ""), dd[vd[4]] = dd[vd[0]].length, dd[vd[10]] = [], dd[vd[8]] = vd[1], dd[vd[9]] = vd[1], dd[vd[7]] = -vd … [truncated]
+           if (dd[vd[6]] = dd[-vd[5]].indexOf(dd[vd[0]][dd[vd[3]]]), dd[vd[6]] !== -vd[2])
+             if (dd[vd[7]] < vd[1]) dd[vd[7]] = dd[vd[6]];
+             else {
+               sd(dd[vd[7]] += dd[vd[6]] * vd[33], dd[vd[8]] |= dd[vd[7]] << dd[vd[9]], dd[vd[9]] += (dd[vd[7]] & vd[36]) > vd[37] ? vd[38] : vd[39]);
+               do {
+                 sd(dd[vd[10]].push(dd[vd[8]] & vd[11]), dd[vd[8]] >>= vd[3], dd[vd[9]] -= vd[3])
+               } while (dd[vd[9]] > vd[25]);
+               dd[vd[7]] = -vd[2]
+             } return dd[vd[7]] > -vd[2] && dd[vd[10]].push((dd[vd[8]] | dd[vd[7]] << dd[vd[9]]) & vd[11]), qd(dd[vd[10]])
+       }(Gd[dd[vd[1]]]) : Id[dd[vd[1]]]
```

#### 1639. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11874-L11887` → after: `L12479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12479) · [Before (L11874-L11887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11874-L11887)

```diff
-       if (bb[Wb[12]] = Wb[28], bb[Wb[2]] === function(...bb) {
-           return bb[Wb[12]] = Wb[0], typeof lb[bb[Wb[2]]] === Wb[17] ? lb[bb[Wb[2]]] = function(...bb) {
-             for (jb(bb[Wb[12]] = Wb[0], bb[Wb[0]] = '&lHAiBRcbSTetXFpIoVsGCDv{q9:=wn%@MKY/h2z[~,.>5#uZrO_W(61g4*j$+"Qd0a<xJm!P3f`7)L^yEN|?U}]8;k', bb[Wb[13]] = "" + (bb[Wb[2]] || ""), bb[Wb[29]] = bb[Wb[13]].length, bb[Wb[37]] = [], bb[-Wb[6]] = Wb[2], bb[Wb[3]] = Wb[2], bb[Wb[23 … [truncated]
-               if (bb[Wb[31]] = bb[Wb[0]].indexOf(bb[Wb[13]][bb[Wb[30]]]), bb[Wb[31]] !== -Wb[0])
-                 if (bb[Wb[23]] < Wb[2]) bb[Wb[23]] = bb[Wb[31]];
-                 else {
-                   jb(bb[Wb[23]] += bb[Wb[31]] * Wb[32], bb[-Wb[6]] |= bb[Wb[23]] << bb[Wb[3]], bb[Wb[3]] += (bb[Wb[23]] & Wb[33]) > Wb[34] ? Wb[35] : Wb[36]);
-                   do {
-                     jb(bb[Wb[37]].push(bb[-Wb[6]] & Wb[11]), bb[-Wb[6]] >>= Wb[10], bb[Wb[3]] -= Wb[10])
-                   } while (bb[Wb[3]] > Wb[23]);
-                   bb[Wb[23]] = -Wb[0]
-                 } return bb[Wb[23]] > -Wb[0] && bb[Wb[37]].push((bb[-Wb[6]] | bb[Wb[23]] << bb[Wb[3]]) & Wb[11]), Cb(bb[Wb[37]])
-           }(Kb[bb[Wb[2]]]) : lb[bb[Wb[2]]]
-         }(87) + Wb[101]) return bb[Wb[0]] + bb[Wb[1]]
+       return dd[vd[12]] = vd[2], typeof Dd !== vd[16] && Dd ? (new Dd).decode(new Td(dd[vd[1]])) : typeof Ed !== vd[16] && Ed ? Ed.from(dd[vd[1]]).toString("utf-8") : rd(dd[vd[1]])
```

#### 1640. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11895-L11925` → after: `L12487-L12517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12487-L12517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12487-L12517) · [Before (L11895-L11925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11895-L11925)

```diff
-     jb(lb = {}, Kb = ["@q(fh|SAvT5Gv)*q~l<]rtF+3pp>#ra0IZ:J83Zw3pgvvVoBnM1J=PVB?l4", "f0Cj8/uLz}z@1", "Xu6u=ov[z]3Xk*!.b4$cmOA99", '6TeniZ+.J~d5u"JtgGJ96P_Ko}!sU', "ku!9#Z2[a}As8E", "f.AJ7eD9,plX[N)7m}UH_ef6h!M7jt<APre%.b7`&?|G]NCBOo46.=3F", "sSW%u^m.Ru:(:dUKtn,J3Zw2}SGrXVtt5ER#U … [truncated]
-         jb(bb[Wb[12]] = Wb[2], bb[Wb[15]] = [function() {
-           return globalThis
-         }, function() {
-           return global
-         }, function() {
-           return window
-         }, function() {
-           return new Function("return this")()
-         }], bb[Wb[13]] = Wb[18], bb[Wb[1]] = []);
-         try {
-           jb(bb[Wb[13]] = Object, bb[Wb[1]][Wb[25]]("".__proto__.constructor.name))
-         } catch (Kb) {}
-         bb: for (bb[-Wb[14]] = Wb[2]; bb[-Wb[14]] < bb[Wb[15]][Wb[12]]; bb[-Wb[14]]++) try {
-           for (bb[Wb[13]] = bb[Wb[15]][bb[-Wb[14]]](), bb[-Wb[16]] = Wb[2]; bb[-Wb[16]] < bb[Wb[1]][Wb[12]]; bb[-Wb[16]]++)
-             if (typeof bb[Wb[13]][bb[Wb[1]][bb[-Wb[16]]]] === Wb[17]) continue bb;
- ... (15 more removed lines; see GitHub link above)
+     sd(Id = {}, Gd = ["g)oXc$k]nt>wIxiHp6We/I}UMt%wrxT`*b", "o4c{VV8r1@NfhI*82mC", "/6FOtXeUhn{E*N?|XHDGLS+]Ph`f2>R>B/Ri:GKb]QzwNi!/9&{LPEh]!8Qgb", "!m5v{gh`[t5~ZtDuU.]ELK?SRnno*$5J$~,omVD", "duD4w=$90[>9Ou,M*O5vo`A32&T~:t%!QP.o,`Sd$.wc<NRyNb", "=mmq*e<H8n[WIx.gyudJ:A_BcPfN<pz|Ho … [truncated]
+       sd(dd[vd[12]] = vd[1], dd[vd[14]] = [function() {
+         return globalThis
+       }, function() {
+         return global
+       }, function() {
+         return window
+       }, function() {
+         return new Function("return this")()
+       }], dd[vd[2]] = vd[17], dd[vd[7]] = []);
+       try {
+         sd(dd[vd[2]] = Object, dd[vd[7]][vd[27]]("".__proto__.constructor.name))
+       } catch (Gd) {}
+       dd: for (dd[vd[13]] = vd[1]; dd[vd[13]] < dd[vd[14]][vd[12]]; dd[vd[13]]++) try {
+         for (dd[vd[2]] = dd[vd[14]][dd[vd[13]]](), dd[vd[15]] = vd[1]; dd[vd[15]] < dd[vd[7]][vd[12]]; dd[vd[15]]++)
+           if (typeof dd[vd[2]][dd[vd[7]][dd[vd[15]]]] === vd[16]) continue dd;
+ ... (15 more added lines; see GitHub link above)
```

#### 1641. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11927` → after: `L12519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12519) · [Before (L11927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11927)

```diff
-                 jb(bb[Wb[6]] += bb[Wb[5]] * Wb[32], bb[Wb[7]] |= bb[Wb[6]] << bb[Wb[8]], bb[Wb[8]] += (bb[Wb[6]] & Wb[33]) > Wb[34] ? Wb[35] : Wb[36]);
+                 sd(dd[-vd[32]] += dd[-vd[31]] * vd[33], dd[vd[34]] |= dd[-vd[32]] << dd[-vd[35]], dd[-vd[35]] += (dd[-vd[32]] & vd[36]) > vd[37] ? vd[38] : vd[39]);
```

#### 1642. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11929-L11948` → after: `L12521-L12530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12521-L12530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12521-L12530) · [Before (L11929-L11948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11929-L11948)

```diff
-                   jb(bb[Wb[9]].push(bb[Wb[7]] & Wb[11]), bb[Wb[7]] >>= Wb[10], bb[Wb[8]] -= Wb[10])
-                 } while (bb[Wb[8]] > Wb[23]);
-                 bb[Wb[6]] = -Wb[0]
-               } return bb[Wb[6]] > -Wb[0] && bb[Wb[9]].push((bb[Wb[7]] | bb[Wb[6]] << bb[Wb[8]]) & Wb[11]), Cb(bb[Wb[9]])
-         }(Kb[bb[Wb[2]]]) : lb[bb[Wb[2]]]
-       }(Wb[34]) in rb && function(...bb) {
-         var ub;
-         jb(bb[Wb[12]] = Wb[2], ub = function(...bb) {
-           jb(bb[Wb[12]] = Wb[0], this.LH = bb[Wb[2]], this.length = Wb[2], this.map = {}, this.head = Wb[38], this.tail = Wb[38])
-         }, ub.prototype.get = function(...bb) {
-           var ub;
-           return jb(bb[Wb[12]] = Wb[0], ub = this.map[bb[Wb[2]]]), ub ? (this.remove(ub), this.insert(ub.key, ub.val), ub.val) : -Wb[0]
-         }, ub.prototype.put = function(...bb) {
-           jb(bb[Wb[12]] = Wb[1], this.map[bb[Wb[2]]] ? (this.remove(this.map[bb[Wb[2]]]), this.insert(bb[Wb[2]], bb[Wb[0]])) : this.length === this.LH ? (this.remove(this.head), this.insert(bb[Wb[2]], bb[Wb[0]])) : (this.insert(bb[Wb[2]], bb[Wb[0]]), this.length++))
-         }, ub.prototype.remove = function(...bb) {
-           jb(bb[Wb[12]] = Wb[0], bb[-Wb[40]] = bb[Wb[2]].prev, bb[-Wb[39]] = bb[Wb[2]].next), bb[-Wb[39]] && (bb[-Wb[39]].prev = bb[-Wb[40]]), bb[-Wb[40]] && (bb[-Wb[40]].next = bb[-Wb[39]]), this.head === bb[Wb[2]] && (this.head = bb[-Wb[39]]), this.tail === bb[Wb[2]] && (this.t … [truncated]
- ... (4 more removed lines; see GitHub link above)
+                   sd(dd[vd[40]].push(dd[vd[34]] & vd[11]), dd[vd[34]] >>= vd[3], dd[-vd[35]] -= vd[3])
+                 } while (dd[-vd[35]] > vd[25]);
+                 dd[-vd[32]] = -vd[2]
+               } return dd[-vd[32]] > -vd[2] && dd[vd[40]].push((dd[vd[34]] | dd[-vd[32]] << dd[-vd[35]]) & vd[11]), qd(dd[vd[40]])
+         }(Gd[dd]) : Id[dd]
+       }
+       dd[vd[12]] = vd[48];
+       const kd = dd[vd[1]][xd(119) + Jd(120) + Jd(121)];
+       if (null === kd) return;
+       if ("heading" === kd[Jd(122)]) {
```

#### 1643. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L11950-L11996` → after: `L12532-L12541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12532-L12541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12532-L12541) · [Before (L11950-L11996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L11950-L11996)

```diff
-           return bb[Wb[12]] = Wb[0], typeof lb[bb[Wb[2]]] === Wb[17] ? lb[bb[Wb[2]]] = function(...bb) {
-             for (jb(bb[Wb[12]] = Wb[0], bb[Wb[0]] = 'zs6ymFHOlpoRxqNf%bB=_)9/+{0,J7aj[ghIAPVG$:&#*Lr<`w|!C"23Z]8EYteDT15(n>X~^cQ;.4vu@iSMUdk}?WK', bb[Wb[13]] = "" + (bb[Wb[2]] || ""), bb[Wb[28]] = bb[Wb[13]].length, bb[Wb[37]] = [], bb[Wb[7]] = Wb[2], bb[Wb[8]] = Wb[2], bb[Wb[34] … [truncated]
-               if (bb[Wb[52]] = bb[Wb[0]].indexOf(bb[Wb[13]][bb[Wb[10]]]), bb[Wb[52]] !== -Wb[0])
-                 if (bb[Wb[34]] < Wb[2]) bb[Wb[34]] = bb[Wb[52]];
-                 else {
-                   jb(bb[Wb[34]] += bb[Wb[52]] * Wb[32], bb[Wb[7]] |= bb[Wb[34]] << bb[Wb[8]], bb[Wb[8]] += (bb[Wb[34]] & Wb[33]) > Wb[34] ? Wb[35] : Wb[36]);
-                   do {
-                     jb(bb[Wb[37]].push(bb[Wb[7]] & Wb[11]), bb[Wb[7]] >>= Wb[10], bb[Wb[8]] -= Wb[10])
-                   } while (bb[Wb[8]] > Wb[23]);
-                   bb[Wb[34]] = -Wb[0]
-                 } return bb[Wb[34]] > -Wb[0] && bb[Wb[37]].push((bb[Wb[7]] | bb[Wb[34]] << bb[Wb[8]]) & Wb[11]), Cb(bb[Wb[37]])
-           }(Kb[bb[Wb[2]]]) : lb[bb[Wb[2]]]
-         }
-         bb[Wb[12]] = Wb[52], ub(92) + "3" in rb && function(...bb) {
-           jb(bb[Wb[12]] = Wb[2], bb[Wb[55]] = function(...bb) {
-             for (jb(bb[Wb[12]] = Wb[0], bb[Wb[0]] = bb[Wb[2]].length, bb[-Wb[53]] = [], bb[Wb[28]] = Wb[2]), bb[Wb[37]] = Wb[2]; bb[Wb[37]] < bb[Wb[0]]; bb[Wb[37]]++) bb[-Wb[53]].push(bb[Wb[37]] !== Wb[2] && bb[Wb[2]][bb[Wb[37]]] > bb[Wb[2]][bb[Wb[37]] - Wb[0]] ? bb[-Wb[53]][bb[W … [truncated]
- ... (31 more removed lines; see GitHub link above)
+           for (sd(dd[vd[12]] = vd[2], dd[vd[2]] = 'KRGrcOdw*~bvTH_SgE[)ki;Q,`VJ(zF/05%Ie^pCL1.x:=>@2q{78jUB6Ds"f|3]hXy+o?n9Wa}<l!Z$t#&A4MPmNYu', dd[-vd[41]] = "" + (dd[vd[1]] || ""), dd[vd[4]] = dd[-vd[41]].length, dd[vd[15]] = [], dd[-vd[43]] = vd[1], dd[vd[9]] = vd[1], dd[vd[7] … [truncated]
+             if (dd[-vd[42]] = dd[vd[2]].indexOf(dd[-vd[41]][dd[vd[3]]]), dd[-vd[42]] !== -vd[2])
+               if (dd[vd[7]] < vd[1]) dd[vd[7]] = dd[-vd[42]];
+               else {
+                 sd(dd[vd[7]] += dd[-vd[42]] * vd[33], dd[-vd[43]] |= dd[vd[7]] << dd[vd[9]], dd[vd[9]] += (dd[vd[7]] & vd[36]) > vd[37] ? vd[38] : vd[39]);
+                 do {
+                   sd(dd[vd[15]].push(dd[-vd[43]] & vd[11]), dd[-vd[43]] >>= vd[3], dd[vd[9]] -= vd[3])
+                 } while (dd[vd[9]] > vd[25]);
+                 dd[vd[7]] = -vd[2]
+               } return dd[vd[7]] > -vd[2] && dd[vd[15]].push((dd[-vd[43]] | dd[vd[7]] << dd[vd[9]]) & vd[11]), qd(dd[vd[15]])
```

#### 1644. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12060-L12129` → after: `L12544-L12545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12544-L12545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12544-L12545) · [Before (L12060-L12129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12060-L12129)

```diff
-             function vb(...bb) {
-               return bb[Wb[12]] = Wb[0], typeof lb[bb[Wb[2]]] === Wb[17] ? lb[bb[Wb[2]]] = ib(Kb[bb[Wb[2]]]) : lb[bb[Wb[2]]]
-             }
-             const tb = Lb()[vb(107) + "t"](bb[Wb[54]][Wb[65]], bb[Wb[28]][Wb[75]]);
-             if (tb > Wb[9] * hb[vb(Wb[76]) + vb(Wb[77]) + Wb[7]] * hb[vb(Wb[76]) + vb(Wb[77]) + Wb[7]]) {
-               function Jb(...bb) {
-                 for (jb(bb[Wb[12]] = Wb[0], bb[Wb[55]] = 'dAyG1)BCT(l#Ne5>7O?J&u+gp6=nb;fqDYvrR*ZowX0mW/S"K<t3:V9x$]`8!iQ4~zks,}.%H2I[^@M{|_EPFUhLjac', bb[Wb[13]] = "" + (bb[Wb[2]] || ""), bb[Wb[4]] = bb[Wb[13]].length, bb[-Wb[80]] = [], bb[Wb[78]] = Wb[2], bb[Wb[79]] = Wb[2], bb … [truncated]
-                   if (bb[Wb[5]] = bb[Wb[55]].indexOf(bb[Wb[13]][bb[Wb[10]]]), bb[Wb[5]] !== -Wb[0])
-                     if (bb[Wb[23]] < Wb[2]) bb[Wb[23]] = bb[Wb[5]];
-                     else {
-                       jb(bb[Wb[23]] += bb[Wb[5]] * Wb[32], bb[Wb[78]] |= bb[Wb[23]] << bb[Wb[79]], bb[Wb[79]] += (bb[Wb[23]] & Wb[33]) > Wb[34] ? Wb[35] : Wb[36]);
-                       do {
-                         jb(bb[-Wb[80]].push(bb[Wb[78]] & Wb[11]), bb[Wb[78]] >>= Wb[10], bb[Wb[79]] -= Wb[10])
-                       } while (bb[Wb[79]] > Wb[23]);
-                       bb[Wb[23]] = -Wb[0]
-                     } return bb[Wb[23]] > -Wb[0] && bb[-Wb[80]].push((bb[Wb[78]] | bb[Wb[23]] << bb[Wb[79]]) & Wb[11]), Cb(bb[-Wb[80]])
- ... (54 more removed lines; see GitHub link above)
+         function od(...dd) {
+           return dd[vd[12]] = vd[2], typeof Id[dd[vd[1]]] === vd[16] ? Id[dd[vd[1]]] = Kd(Gd[dd[vd[1]]]) : Id[dd[vd[1]]]
```

#### 1645. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12131-L12142` → after: `L12547-L12552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12547-L12552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12547-L12552) · [Before (L12131-L12142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12131-L12142)

```diff
-         if (bb[-Wb[87]] = Wb[0], bb[Wb[28]][Wb[84]] > Wb[2]) {
-           function sb(...bb) {
-             for (jb(bb[Wb[12]] = Wb[0], bb[Wb[85]] = 'iA5Rx6B{M+mN)#4`Cr1Y7o?Od%DkIv&Lt@~>bU}yHaS8<f;z|c2"/.GVQ,sTp:P*F_h=WX^0EKeg!Zq3]9[nJj$u(lw', bb[Wb[1]] = "" + (bb[Wb[2]] || ""), bb[Wb[4]] = bb[Wb[1]].length, bb[-Wb[86]] = [], bb[Wb[54]] = Wb[2], bb[Wb[8]] = Wb[2], bb[-Wb[78 … [truncated]
-               if (bb[Wb[52]] = bb[Wb[85]].indexOf(bb[Wb[1]][bb[Wb[10]]]), bb[Wb[52]] !== -Wb[0])
-                 if (bb[-Wb[78]] < Wb[2]) bb[-Wb[78]] = bb[Wb[52]];
-                 else {
-                   jb(bb[-Wb[78]] += bb[Wb[52]] * Wb[32], bb[Wb[54]] |= bb[-Wb[78]] << bb[Wb[8]], bb[Wb[8]] += (bb[-Wb[78]] & Wb[33]) > Wb[34] ? Wb[35] : Wb[36]);
-                   do {
-                     jb(bb[-Wb[86]].push(bb[Wb[54]] & Wb[11]), bb[Wb[54]] >>= Wb[10], bb[Wb[8]] -= Wb[10])
-                   } while (bb[Wb[8]] > Wb[23]);
-                   bb[-Wb[78]] = -Wb[0]
-                 } return bb[-Wb[78]] > -Wb[0] && bb[-Wb[86]].push((bb[Wb[54]] | bb[-Wb[78]] << bb[Wb[8]]) & Wb[11]), Cb(bb[-Wb[86]])
+         return void sd((vd[1], ld[vd[40]])(dd[vd[2]], dd[vd[18]], dd[vd[44]], dd[vd[15]], dd[vd[45]], dd[vd[23]], dd[vd[1]]), function(dd, Jd, kd, pd) {
+           if (null === dd) return;
+           if (kd.hO[1] < -dd.maxFallSpeed) {
+             const Nd = pd / 1e3,
+               Wd = (Qd.d.lerpWeight(Nd / dd.slowDownSeconds) * (-dd.maxFallSpeed - kd.hO[1]) - (dd.compensateGravity ? Jd.physics.gravity[1] * kd.gravityMultiplier * Nd : 0)) * kd.vP / Nd;
+             Zd().set(Od, 0, Wd, 0), kd.applyForce(Od)
```

#### 1646. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12145-L12147` → after: `L12570-L12586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12570-L12586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12570-L12586) · [Before (L12145-L12147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12145-L12147)

```diff
-           function Mb(...bb) {
-             return bb[Wb[12]] = Wb[0], typeof lb[bb[Wb[2]]] === Wb[17] ? lb[bb[Wb[2]]] = sb(Kb[bb[Wb[2]]]) : lb[bb[Wb[2]]]
-           }
+         function ad(...dd) {
+           return dd[vd[12]] = vd[2], typeof Id[dd[vd[1]]] === vd[16] ? Id[dd[vd[1]]] = Rd(Gd[dd[vd[1]]]) : Id[dd[vd[1]]]
+         }
+         sd(dd[vd[44]][vd[69]] = Zd()[ad(126)](dd[vd[45]][vd[51]]), Zd()[ad(vd[50])](dd[vd[44]][vd[64]], dd[vd[45]][vd[51]]))
+       } else {
+         function Md(...dd) {
+           for (sd(dd[vd[12]] = vd[2], dd[vd[23]] = '5*OYTi<luDas0Q,(ntgZ)No+Av%zLx{&6;X48W$wHJb!rkEB[p]G9.eK~@Sh:dV=yc"#q>CPfRI31UmF|`/2}7j?^M_', dd[vd[18]] = "" + (dd[vd[1]] || ""), dd[vd[4]] = dd[vd[18]].length, dd[vd[54]] = [], dd[vd[14]] = vd[1], dd[vd[9]] = vd[1], dd[-vd[53] … [truncated]
+             if (dd[vd[52]] = dd[vd[23]].indexOf(dd[vd[18]][dd[vd[3]]]), dd[vd[52]] !== -vd[2])
+               if (dd[-vd[53]] < vd[1]) dd[-vd[53]] = dd[vd[52]];
+               else {
+                 sd(dd[-vd[53]] += dd[vd[52]] * vd[33], dd[vd[14]] |= dd[-vd[53]] << dd[vd[9]], dd[vd[9]] += (dd[-vd[53]] & vd[36]) > vd[37] ? vd[38] : vd[39]);
+                 do {
+                   sd(dd[vd[54]].push(dd[vd[14]] & vd[11]), dd[vd[14]] >>= vd[3], dd[vd[9]] -= vd[3])
+                 } while (dd[vd[9]] > vd[25]);
+                 dd[-vd[53]] = -vd[2]
+               } return dd[-vd[53]] > -vd[2] && dd[vd[54]].push((dd[vd[14]] | dd[-vd[53]] << dd[vd[9]]) & vd[11]), qd(dd[vd[54]])
+ ... (1 more added lines; see GitHub link above)
```

#### 1647. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12149-L12164` → after: `L12588-L12589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12588-L12589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12588-L12589) · [Before (L12149-L12164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12149-L12164)

```diff
-           function mb(...bb) {
-             var ub;
-             jb(bb[Wb[12]] = Wb[2], ub = function(...bb) {
-               jb(bb[Wb[12]] = Wb[0], this.LH = bb[Wb[2]], this.length = Wb[2], this.map = {}, this.head = Wb[38], this.tail = Wb[38])
-             }, ub.prototype.get = function(...bb) {
-               var ub;
-               return jb(bb[Wb[12]] = Wb[0], ub = this.map[bb[Wb[2]]]), ub ? (this.remove(ub), this.insert(ub.key, ub.val), ub.val) : -Wb[0]
-             }, ub.prototype.put = function(...bb) {
-               jb(bb[Wb[12]] = Wb[1], this.map[bb[Wb[2]]] ? (this.remove(this.map[bb[Wb[2]]]), this.insert(bb[Wb[2]], bb[Wb[0]])) : this.length === this.LH ? (this.remove(this.head), this.insert(bb[Wb[2]], bb[Wb[0]])) : (this.insert(bb[Wb[2]], bb[Wb[0]]), this.length++))
-             }, ub.prototype.remove = function(...bb) {
-               jb(bb[Wb[12]] = Wb[0], bb[Wb[55]] = bb[Wb[2]].prev, bb[Wb[13]] = bb[Wb[2]].next), bb[Wb[13]] && (bb[Wb[13]].prev = bb[Wb[55]]), bb[Wb[55]] && (bb[Wb[55]].next = bb[Wb[13]]), this.head === bb[Wb[2]] && (this.head = bb[Wb[13]]), this.tail === bb[Wb[2]] && (this.tail = … [truncated]
-             }, ub.prototype.insert = function(...bb) {
-               jb(bb[Wb[12]] = Wb[1], bb[Wb[1]] = new List(bb[Wb[2]], bb[Wb[0]]), this.tail ? (this.tail.next = bb[Wb[1]], bb[Wb[1]].prev = this.tail, this.tail = bb[Wb[1]]) : (this.tail = bb[Wb[1]], this.head = bb[Wb[1]]), this.map[bb[Wb[2]]] = bb[Wb[1]])
-             }, console.log(ub))
-           }
-           ub(116) + "M" in rb && mb(), bb[Wb[9]][Mb(117)] < Wb[2] && (bb[-Wb[87]] = Wb[28]), bb[Wb[28]][Wb[84]] -= hb[Mb(118) + Mb(119) + Mb(120) + Mb(121) + "ck"]
+         function Fd(dd) {
+           return typeof Id[dd] === vd[16] ? Id[dd] = Md(Gd[dd]) : Id[dd]
```

#### 1648. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12166-L12170` → after: `L12591-L12607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12591-L12607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12591-L12607) · [Before (L12166-L12170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12166-L12170)

```diff
-         const Bb = hb[ub(122) + Wb[90]] + bb[Wb[28]][ub(123)];
-         jb(bb[Wb[13]] = Lb()[ub(Wb[78])](bb[Wb[28]][Wb[75]]) + bb[Wb[9]][ub(Wb[74])] * Bb * hb[ub(126)] * bb[-Wb[87]], bb[Wb[13]] = Xb[Wb[37]][ub(Wb[88])](bb[Wb[13]], hb[ub(Wb[89]) + Wb[90]], Bb), bb[Wb[28]][ub(Wb[16])]++);
-         const Gb = bb[Wb[23]] / Wb[91],
-           Ub = pb;
-         if (jb(Lb()[ub(130)](Ub, bb[Wb[9]][ub(131)]), Lb()[ub(Wb[122]) + ub(Wb[50])](Ub, Ub), Lb()[ub(Wb[107])](Ub, Ub, bb[Wb[13]]), bb[Wb[94]] = Wb[0]), bb[Wb[28]][ub(Wb[16])] < hb[ub(Wb[123]) + ub(Wb[124]) + ub(Wb[125])]) {
+ 
+         function Yd(...dd) {
+           sd(dd[vd[12]] = vd[1], dd[vd[21]] = function(...Jd) {
+             return Jd[vd[12]] = vd[18], dd[-vd[56]]({}, Jd[vd[1]], Jd[vd[2]])
+           }, dd[-vd[56]] = function(...Jd) {
+             if (sd(Jd[vd[12]] = vd[44], Jd[vd[44]] = {}), Jd[vd[1]][Jd[vd[2]] + Jd[vd[18]]] !== vd[17]) return Jd[vd[1]][Jd[vd[2]] + Jd[vd[18]]];
+             if (Jd[vd[2]] === Jd[vd[18]]) return vd[59];
+             for (Jd[vd[57]] = vd[1]; Jd[vd[57]] < Jd[vd[2]].length; Jd[vd[57]]++) Jd[vd[44]][Jd[vd[2]][Jd[vd[57]]]] === vd[17] && (Jd[vd[44]][Jd[vd[2]][Jd[vd[57]]]] = vd[1]), Jd[vd[44]][Jd[vd[18]][Jd[vd[57]]]] === vd[17] && (Jd[vd[44]][Jd[vd[18]][Jd[vd[57]]]] = vd[1]), sd(Jd[vd[4 … [truncated]
+             for (Jd[vd[45]] in Jd[vd[44]])
+               if (Jd[vd[44]][Jd[vd[45]]] !== vd[1]) return Jd[vd[1]][Jd[vd[2]] + Jd[vd[18]]] = vd[58], vd[58];
+             for (Jd[vd[40]] = vd[2]; Jd[vd[40]] < Jd[vd[2]].length; Jd[vd[40]]++)
+               if (dd[-vd[56]](Jd[vd[1]], Jd[vd[2]].substr(vd[1], Jd[vd[40]]), Jd[vd[18]].substr(vd[1], Jd[vd[40]])) && dd[-vd[56]](Jd[vd[1]], Jd[vd[2]].substr(Jd[vd[40]]), Jd[vd[18]].substr(Jd[vd[40]])) || dd[-vd[56]](Jd[vd[1]], Jd[vd[2]].substr(vd[1], Jd[vd[40]]), Jd[vd[18]].sub … [truncated]
+             return Jd[vd[1]][Jd[vd[2]] + Jd[vd[18]]] = vd[58], vd[58]
+           }, console.log(dd[vd[21]]))
+         }
+         Fd(vd[55]) in Bd && Yd();
+ ... (1 more added lines; see GitHub link above)
```

#### 1649. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12172-L12174` → after: `L12609-L12611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12609-L12611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12609-L12611) · [Before (L12172-L12174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12172-L12174)

```diff
-             for (jb(bb[Wb[12]] = Wb[0], bb[-Wb[92]] = '2z{uxv./^&+<A(V:SBCe3gXZ8OQhLD17=~4ws!f*j_"RPdT@p>nE5yK0cFk;i[MHGbm?$U#l]oq`Yrt9,)Wa|JI}6N%', bb[Wb[14]] = "" + (bb[Wb[2]] || ""), bb[Wb[28]] = bb[Wb[14]].length, bb[Wb[9]] = [], bb[Wb[7]] = Wb[2], bb[Wb[8]] = Wb[2], bb[Wb[23 … [truncated]
-               if (bb[Wb[93]] = bb[-Wb[92]].indexOf(bb[Wb[14]][bb[Wb[30]]]), bb[Wb[93]] !== -Wb[0])
-                 if (bb[Wb[23]] < Wb[2]) bb[Wb[23]] = bb[Wb[93]];
+             for (sd(dd[vd[12]] = vd[2], dd[vd[2]] = 'yBbNJLat.[O]Am;uT+YIDZqe5%$zp?Kih!k=^{/nwHUP8`>VQ~:@XSM("34C*}l1xs97fo6_,&Edv)Fgc#W0j|G<R2r', dd[vd[18]] = "" + (dd[vd[1]] || ""), dd[vd[44]] = dd[vd[18]].length, dd[-vd[62]] = [], dd[-vd[61]] = vd[1], dd[vd[9]] = vd[1], dd[vd[ … [truncated]
+               if (dd[vd[57]] = dd[vd[2]].indexOf(dd[vd[18]][dd[vd[13]]]), dd[vd[57]] !== -vd[2])
+                 if (dd[vd[7]] < vd[1]) dd[vd[7]] = dd[vd[57]];
```

#### 1650. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12176` → after: `L12613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12613) · [Before (L12176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12176)

```diff
-                   jb(bb[Wb[23]] += bb[Wb[93]] * Wb[32], bb[Wb[7]] |= bb[Wb[23]] << bb[Wb[8]], bb[Wb[8]] += (bb[Wb[23]] & Wb[33]) > Wb[34] ? Wb[35] : Wb[36]);
+                   sd(dd[vd[7]] += dd[vd[57]] * vd[33], dd[-vd[61]] |= dd[vd[7]] << dd[vd[9]], dd[vd[9]] += (dd[vd[7]] & vd[36]) > vd[37] ? vd[38] : vd[39]);
```

#### 1651. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12178-L12181` → after: `L12615-L12618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12615-L12618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12615-L12618) · [Before (L12178-L12181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12178-L12181)

```diff
-                     jb(bb[Wb[9]].push(bb[Wb[7]] & Wb[11]), bb[Wb[7]] >>= Wb[10], bb[Wb[8]] -= Wb[10])
-                   } while (bb[Wb[8]] > Wb[23]);
-                   bb[Wb[23]] = -Wb[0]
-                 } return bb[Wb[23]] > -Wb[0] && bb[Wb[9]].push((bb[Wb[7]] | bb[Wb[23]] << bb[Wb[8]]) & Wb[11]), Cb(bb[Wb[9]])
+                     sd(dd[-vd[62]].push(dd[-vd[61]] & vd[11]), dd[-vd[61]] >>= vd[3], dd[vd[9]] -= vd[3])
+                   } while (dd[vd[9]] > vd[25]);
+                   dd[vd[7]] = -vd[2]
+                 } return dd[vd[7]] > -vd[2] && dd[-vd[62]].push((dd[-vd[61]] | dd[vd[7]] << dd[vd[9]]) & vd[11]), qd(dd[-vd[62]])
```

#### 1652. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12185-L12328` → after: `L12622-L12637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12622-L12637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12622-L12637) · [Before (L12185-L12328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12185-L12328)

```diff
-             return bb[Wb[12]] = Wb[0], typeof lb[bb[Wb[2]]] === Wb[17] ? lb[bb[Wb[2]]] = Ib(Kb[bb[Wb[2]]]) : lb[bb[Wb[2]]]
-           }
-           if (bb[Wb[94]] = Zb[Wb[4]][Pb(138) + Pb(139)](bb[Wb[28]][Pb(140)] / Ob[Wb[7]][Pb(Wb[81]) + Pb(142) + Pb(143) + "nd"]), bb[Wb[94]] > .8) {
-             function qb(...bb) {
-               for (jb(bb[Wb[12]] = Wb[0], bb[Wb[0]] = '>5$;x1#A(B]`|sK^uYizd6r}y"Mc:IF[!{fv.=nWN4e2*CD_0V+wO)Xl&9UZq7QoHp%PRLkj?mg@ET~<8t3,ab/JGhS', bb[-Wb[95]] = "" + (bb[Wb[2]] || ""), bb[Wb[95]] = bb[-Wb[95]].length, bb[-Wb[97]] = [], bb[Wb[7]] = Wb[2], bb[-Wb[19]] = Wb[2], bb … [truncated]
-                 if (bb[Wb[52]] = bb[Wb[0]].indexOf(bb[-Wb[95]][bb[Wb[96]]]), bb[Wb[52]] !== -Wb[0])
-                   if (bb[Wb[48]] < Wb[2]) bb[Wb[48]] = bb[Wb[52]];
-                   else {
-                     jb(bb[Wb[48]] += bb[Wb[52]] * Wb[32], bb[Wb[7]] |= bb[Wb[48]] << bb[-Wb[19]], bb[-Wb[19]] += (bb[Wb[48]] & Wb[33]) > Wb[34] ? Wb[35] : Wb[36]);
-                     do {
-                       jb(bb[-Wb[97]].push(bb[Wb[7]] & Wb[11]), bb[Wb[7]] >>= Wb[10], bb[-Wb[19]] -= Wb[10])
-                     } while (bb[-Wb[19]] > Wb[23]);
-                     bb[Wb[48]] = -Wb[0]
-                   } return bb[Wb[48]] > -Wb[0] && bb[-Wb[97]].push((bb[Wb[7]] | bb[Wb[48]] << bb[-Wb[19]]) & Wb[11]), Cb(bb[-Wb[97]])
-             }
- 
- ... (128 more removed lines; see GitHub link above)
+             return dd[vd[12]] = vd[2], typeof Id[dd[vd[1]]] === vd[16] ? Id[dd[vd[1]]] = md(Gd[dd[vd[1]]]) : Id[dd[vd[1]]]
+           }
+           const Sd = Zd()[bd(130) + vd[63]](dd[vd[45]][vd[51]], dd[vd[44]][vd[64]]);
+           if (Sd > vd[15] * kd[bd(vd[65]) + bd(vd[66]) + vd[14]] * kd[bd(vd[65]) + bd(vd[66]) + vd[14]]) {
+             function jd(...dd) {
+               for (sd(dd[vd[12]] = vd[2], dd[vd[2]] = ')y[JNxlBZ&OFp2ug|_t$QK7*>L,15?d6sI83Aw;jVh^iR<9H"0P!/C`4f:MES#vbm}@nqT~okWcYDr({]Uaze=+G%X.', dd[vd[18]] = "" + (dd[vd[1]] || ""), dd[vd[4]] = dd[vd[18]].length, dd[vd[68]] = [], dd[vd[14]] = vd[1], dd[vd[67]] = vd[1], dd[vd[ … [truncated]
+                 if (dd[vd[6]] = dd[vd[2]].indexOf(dd[vd[18]][dd[vd[13]]]), dd[vd[6]] !== -vd[2])
+                   if (dd[vd[46]] < vd[1]) dd[vd[46]] = dd[vd[6]];
+                   else {
+                     sd(dd[vd[46]] += dd[vd[6]] * vd[33], dd[vd[14]] |= dd[vd[46]] << dd[vd[67]], dd[vd[67]] += (dd[vd[46]] & vd[36]) > vd[37] ? vd[38] : vd[39]);
+                     do {
+                       sd(dd[vd[68]].push(dd[vd[14]] & vd[11]), dd[vd[14]] >>= vd[3], dd[vd[67]] -= vd[3])
+                     } while (dd[vd[67]] > vd[25]);
+                     dd[vd[46]] = -vd[2]
+                   } return dd[vd[46]] > -vd[2] && dd[vd[68]].push((dd[vd[14]] | dd[vd[46]] << dd[vd[67]]) & vd[11]), qd(dd[vd[68]])
+             }
```

#### 1653. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12330-L12332` → after: `L12639-L12658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12639-L12658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12639-L12658) · [Before (L12330-L12332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12330-L12332)

```diff
-                 function pb(...bb) {
-                   return bb[Wb[12]] = Wb[0], Sb(bb[Wb[2]], Wb[23]) ^ Sb(bb[Wb[2]], Wb[115]) ^ ab(bb[Wb[2]], Wb[28])
-                 }
+             function Xd(...dd) {
+               return dd[vd[12]] = vd[2], typeof Id[dd[vd[1]]] === vd[16] ? Id[dd[vd[1]]] = jd(Gd[dd[vd[1]]]) : Id[dd[vd[1]]]
+             }
+             sd(dd[vd[44]][Xd(133)] = vd[1], dd[vd[44]][vd[69]] = Math[Xd(134)](Sd))
+           }
+         }
+       }
+       if (dd[-vd[73]] = vd[2], dd[vd[44]][vd[69]] > vd[1]) {
+         function fd(...dd) {
+           for (sd(dd[vd[12]] = vd[2], dd[vd[2]] = 'H6AEm)o`J0Fc[N2qR.L_d$|O^Weh{YlT"}p7X>na%&5#w~k!C3QIjBvUKSb8ufDZryx4(gz*V?1:9t=]iP;M@G+s/<,', dd[vd[0]] = "" + (dd[vd[1]] || ""), dd[vd[70]] = dd[vd[0]].length, dd[vd[15]] = [], dd[vd[45]] = vd[1], dd[vd[23]] = vd[1], dd[-vd[72]] … [truncated]
+             if (dd[-vd[71]] = dd[vd[2]].indexOf(dd[vd[0]][dd[vd[13]]]), dd[-vd[71]] !== -vd[2])
+               if (dd[-vd[72]] < vd[1]) dd[-vd[72]] = dd[-vd[71]];
+               else {
+                 sd(dd[-vd[72]] += dd[-vd[71]] * vd[33], dd[vd[45]] |= dd[-vd[72]] << dd[vd[23]], dd[vd[23]] += (dd[-vd[72]] & vd[36]) > vd[37] ? vd[38] : vd[39]);
+                 do {
+                   sd(dd[vd[15]].push(dd[vd[45]] & vd[11]), dd[vd[45]] >>= vd[3], dd[vd[23]] -= vd[3])
+ ... (4 more added lines; see GitHub link above)
```

#### 1654. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12334-L12336` → after: `L12660-L12681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12660-L12681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12660-L12681) · [Before (L12334-L12336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12334-L12336)

```diff
-                 function ob(...bb) {
-                   return bb[Wb[12]] = Wb[0], Sb(bb[Wb[2]], 17) ^ Sb(bb[Wb[2]], Wb[117]) ^ ab(bb[Wb[2]], Wb[112])
-                 }
+         function nd(...dd) {
+           return dd[vd[12]] = vd[2], typeof Id[dd[vd[1]]] === vd[16] ? Id[dd[vd[1]]] = fd(Gd[dd[vd[1]]]) : Id[dd[vd[1]]]
+         }
+         dd[vd[15]][nd(vd[72])] < vd[1] && (dd[-vd[73]] = vd[44]), dd[vd[44]][vd[69]] -= kd[nd(136) + nd(137) + nd(138) + nd(139)]
+       }
+       const pd = kd[Jd(140) + vd[74]] + dd[vd[44]][Jd(141)];
+       sd(dd[vd[0]] = Zd()[Jd(142)](dd[vd[44]][vd[64]]) + dd[vd[15]][Jd(143)] * pd * kd[Jd(144)] * dd[-vd[73]], dd[vd[0]] = Ld[vd[0]][Jd(145)](dd[vd[0]], kd[Jd(vd[29]) + vd[74]], pd), dd[vd[44]][Jd(vd[75])]++);
+       const Wd = dd[vd[25]] / 1e3,
+         Pd = Od;
+       if (sd(Zd()[Jd(vd[43])](Pd, dd[vd[15]][Jd(149)]), Zd()[Jd(vd[83]) + Jd(vd[84])](Pd, Pd), Zd()[Jd(vd[82])](Pd, Pd, dd[vd[0]]), dd[vd[4]] = vd[2]), dd[vd[44]][Jd(vd[75])] < kd[Jd(vd[61]) + Jd(vd[76]) + Jd(vd[78])]) {
+         function Ud(...dd) {
+           for (sd(dd[vd[12]] = vd[2], dd[vd[29]] = 'Sx;y&)~lRE/L@%,j"dn>IYr$=Bg2W{mkT|O[UKD4!9:V]N_815^e#3z(foZw}7pHAt*+Gva.0Mq`<iu?b6sJFXQChPc', dd[vd[77]] = "" + (dd[vd[1]] || ""), dd[vd[76]] = dd[vd[77]].length, dd[vd[5]] = [], dd[vd[14]] = vd[1], dd[vd[23]] = vd[1], dd[vd[7]] … [truncated]
+             if (dd[vd[6]] = dd[vd[29]].indexOf(dd[vd[77]][dd[vd[13]]]), dd[vd[6]] !== -vd[2])
+               if (dd[vd[7]] < vd[1]) dd[vd[7]] = dd[vd[6]];
+               else {
+                 sd(dd[vd[7]] += dd[vd[6]] * vd[33], dd[vd[14]] |= dd[vd[7]] << dd[vd[23]], dd[vd[23]] += (dd[vd[7]] & vd[36]) > vd[37] ? vd[38] : vd[39]);
+ ... (6 more added lines; see GitHub link above)
```

#### 1655. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12338-L12345` → after: `L12683-L12685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12683-L12685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12683-L12685) · [Before (L12338-L12345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12338-L12345)

```diff
-                 function Ab(...ub) {
-                   var hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb, ab, Ab, lb, Kb;
-                   for (jb(ub[Wb[12]] = Wb[1], ub[Wb[55]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), ub[Wb[28]] = new Array(Wb[118])), jb(ub[Wb[2]][ub[Wb[0]] >> Wb[54]] |= Wb[89] << Wb[116] - ub[Wb[0]] % Wb[19], u … [truncated]
-                     for (jb(hb = ub[Wb[55]][Wb[2]], Bb = ub[Wb[55]][Wb[0]], Ob = ub[Wb[55]][Wb[1]], Gb = ub[Wb[55]][Wb[28]], Ub = ub[Wb[55]][Wb[9]], Lb = ub[Wb[55]][Wb[54]], Yb = ub[Wb[55]][Wb[3]], Sb = ub[Wb[55]][Wb[23]]), Ab = Wb[2]; Ab < Wb[118]; Ab++) jb(ub[Wb[28]][Ab] = Ab < … [truncated]
-                     jb(ub[Wb[55]][Wb[2]] = rb(hb, ub[Wb[55]][Wb[2]]), ub[Wb[55]][Wb[0]] = rb(Bb, ub[Wb[55]][Wb[0]]), ub[Wb[55]][Wb[1]] = rb(Ob, ub[Wb[55]][Wb[1]]), ub[Wb[55]][Wb[28]] = rb(Gb, ub[Wb[55]][Wb[28]]), ub[Wb[55]][Wb[9]] = rb(Ub, ub[Wb[55]][Wb[9]]), ub[Wb[55]][Wb[54]] = … [truncated]
-                   }
-                   return ub[Wb[55]]
-                 }
+         function yd(...dd) {
+           return dd[vd[12]] = vd[2], typeof Id[dd[vd[1]]] === vd[16] ? Id[dd[vd[1]]] = Ud(Gd[dd[vd[1]]]) : Id[dd[vd[1]]]
+         }
```

#### 1656. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12347-L12364` → after: `L12687-L12698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12687-L12698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12687-L12698) · [Before (L12347-L12364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12347-L12364)

```diff
-                 function rb(...bb) {
-                   return jb(bb[Wb[12]] = Wb[1], bb[-Wb[45]] = (bb[Wb[2]] & Wb[120]) + (bb[Wb[0]] & Wb[120]), bb[Wb[13]] = (bb[Wb[2]] >> Wb[100]) + (bb[Wb[0]] >> Wb[100]) + (bb[-Wb[45]] >> Wb[100])), bb[Wb[13]] << Wb[100] | bb[-Wb[45]] & Wb[120]
-                 }
-                 return jb(bb[Wb[12]] = Wb[2], bb[Wb[55]] = Wb[2], bb[-Wb[106]] = ""), bb[Wb[119]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, - … [truncated]
-                   hex: function(...bb) {
-                     return bb[Wb[12]] = Wb[0], Ob(function(...bb) {
-                       return bb[Wb[12]] = Wb[0], Yb(Ab(Lb(bb[Wb[2]]), bb[Wb[2]].length * Wb[10]))
-                     }(Ub(bb[Wb[2]])))
-                   },
-                   b64: ub,
-                   any: hb,
-                   hex_hmac: function(bb, ub) {
-                     return Ob(Bb(Ub(bb), Ub(ub)))
-                   },
-                   b64_hmac: ub,
-                   any_hmac: hb
- ... (2 more removed lines; see GitHub link above)
+         function Dd(...dd) {
+           dd[vd[12]] = vd[1];
+           const Jd = require("big-integer");
+           sd(dd[vd[79]] = class {
+             static randomPrime(...dd) {
+               dd[vd[12]] = vd[2];
+               const kd = Jd.one.shiftLeft(dd[vd[1]] - vd[2]),
+                 pd = Jd.one.shiftLeft(dd[vd[1]]).prev();
+               for (; vd[59];) {
+                 let dd = Jd.randBetween(kd, pd);
+                 if (dd.isProbablePrime(256)) return dd
+               }
```

#### 1657. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12366-L12367` → after: `L12700-L12735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12700-L12735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12700-L12735) · [Before (L12366-L12367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12366-L12367)

```diff
-             Eb(144) + "4" in rb && yb(), jb(bb[Wb[94]] = Wb[0], bb[Wb[28]][Eb(164)] = 1e5)
-           }
+             static generate(...dd) {
+               dd[vd[12]] = vd[2];
+               const kd = Jd(65537);
+               let pd, Nd;
+               dd[vd[21]] = vd[17];
+               do {
+                 sd(pd = this.randomPrime(dd[vd[1]] / vd[18]), Nd = this.randomPrime(dd[vd[1]] / vd[18]), dd[vd[21]] = Jd.lcm(pd.prev(), Nd.prev()))
+               } while (Jd.gcd(kd, dd[vd[21]]).notEquals(vd[2]) || pd.minus(Nd).abs().shiftRight(dd[vd[1]] / vd[18] - 100).isZero());
+               return {
+                 e: kd,
+                 n: pd.multiply(Nd),
+                 d: kd.modInv(dd[vd[21]])
+               }
+             }
+             static encrypt(...dd) {
+               return dd[vd[12]] = vd[44], Jd(dd[vd[1]]).modPow(dd[vd[18]], dd[vd[2]])
+ ... (20 more added lines; see GitHub link above)
```

#### 1658. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12369-L12372` → after: `L12737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12737) · [Before (L12369-L12372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12369-L12372)

```diff
-         const Yb = ob;
-         jb(Lb()[ub(Wb[99])](Yb, Ub, bb[Wb[54]][Wb[65]]), Lb()[ub(Wb[107])](Yb, Yb, bb[Wb[54]][Wb[130]] * bb[Wb[94]] / Gb), bb[Wb[54]][ub(Wb[44]) + ub(Wb[131])](Yb), Lb()[ub(168)](bb[Wb[28]][Wb[75]], bb[Wb[54]][Wb[65]], Ub, bb[Wb[94]]));
-         const Sb = pb;
-         if (jb(Lb()[ub(Wb[122]) + ub(Wb[50])](Sb, bb[Wb[28]][Wb[75]]), Lb()[ub(Wb[107])](Sb, Sb, hb[ub(Wb[46]) + ub(Wb[62]) + Wb[7]])), bb[Wb[28]][ub(Wb[16])] > hb[ub(Wb[123]) + ub(Wb[124]) + ub(Wb[125])]) {
+         if (yd(156) + vd[13] in Bd && Dd(), dd[vd[4]] = Qd[vd[40]][yd(157) + yd(158)](dd[vd[44]][yd(159)] / Nd[vd[7]][yd(160) + yd(161) + yd(162) + "nd"]), dd[vd[4]] > .8) {
```

#### 1659. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12374-L12376` → after: `L12739-L12741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12739-L12741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12739-L12741) · [Before (L12374-L12376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12374-L12376)

```diff
-             for (jb(bb[Wb[12]] = Wb[0], bb[Wb[0]] = 'axoUDlsiHemv~kC&9z[$fKcL!@X|<uBAy5#Z%_*n"S2qtG:VrMEjw)7b>4{;p38=I1W(F6Tg]hQ.0P+Y`,^J?RNd/O}', bb[Wb[1]] = "" + (bb[Wb[2]] || ""), bb[Wb[28]] = bb[Wb[1]].length, bb[Wb[9]] = [], bb[Wb[7]] = Wb[2], bb[-Wb[127]] = Wb[2], bb[Wb[48] … [truncated]
-               if (bb[-Wb[126]] = bb[Wb[0]].indexOf(bb[Wb[1]][bb[Wb[30]]]), bb[-Wb[126]] !== -Wb[0])
-                 if (bb[Wb[48]] < Wb[2]) bb[Wb[48]] = bb[-Wb[126]];
+             for (sd(dd[vd[12]] = vd[2], dd[-vd[81]] = 'uv5|wf+T6a/^2~}_CGpKdb.X=gP!IxW,h(9mjD;Z$7Y4JyNOMt1RHlBUcSEAsQk&e*?q@<z3#>V0r%F]{[)i:`o8"Ln', dd[vd[0]] = "" + (dd[vd[1]] || ""), dd[vd[4]] = dd[vd[0]].length, dd[vd[15]] = [], dd[-vd[80]] = vd[1], dd[-vd[73]] = vd[1], dd[-vd … [truncated]
+               if (dd[vd[6]] = dd[-vd[81]].indexOf(dd[vd[0]][dd[vd[3]]]), dd[vd[6]] !== -vd[2])
+                 if (dd[-vd[23]] < vd[1]) dd[-vd[23]] = dd[vd[6]];
```

#### 1660. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12378` → after: `L12743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12743) · [Before (L12378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12378)

```diff
-                   jb(bb[Wb[48]] += bb[-Wb[126]] * Wb[32], bb[Wb[7]] |= bb[Wb[48]] << bb[-Wb[127]], bb[-Wb[127]] += (bb[Wb[48]] & Wb[33]) > Wb[34] ? Wb[35] : Wb[36]);
+                   sd(dd[-vd[23]] += dd[vd[6]] * vd[33], dd[-vd[80]] |= dd[-vd[23]] << dd[-vd[73]], dd[-vd[73]] += (dd[-vd[23]] & vd[36]) > vd[37] ? vd[38] : vd[39]);
```

#### 1661. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12380-L12383` → after: `L12745-L12748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12745-L12748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12745-L12748) · [Before (L12380-L12383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12380-L12383)

```diff
-                     jb(bb[Wb[9]].push(bb[Wb[7]] & Wb[11]), bb[Wb[7]] >>= Wb[10], bb[-Wb[127]] -= Wb[10])
-                   } while (bb[-Wb[127]] > Wb[23]);
-                   bb[Wb[48]] = -Wb[0]
-                 } return bb[Wb[48]] > -Wb[0] && bb[Wb[9]].push((bb[Wb[7]] | bb[Wb[48]] << bb[-Wb[127]]) & Wb[11]), Cb(bb[Wb[9]])
+                     sd(dd[vd[15]].push(dd[-vd[80]] & vd[11]), dd[-vd[80]] >>= vd[3], dd[-vd[73]] -= vd[3])
+                   } while (dd[-vd[73]] > vd[25]);
+                   dd[-vd[23]] = -vd[2]
+                 } return dd[-vd[23]] > -vd[2] && dd[vd[15]].push((dd[-vd[80]] | dd[-vd[23]] << dd[-vd[73]]) & vd[11]), qd(dd[vd[15]])
```

#### 1662. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12387` → after: `L12752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12752) · [Before (L12387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12387)

```diff
-             return bb[Wb[12]] = Wb[0], typeof lb[bb[Wb[2]]] === Wb[17] ? lb[bb[Wb[2]]] = Vb(Kb[bb[Wb[2]]]) : lb[bb[Wb[2]]]
+             return dd[vd[12]] = vd[2], typeof Id[dd[vd[1]]] === vd[16] ? Id[dd[vd[1]]] = Td(Gd[dd[vd[1]]]) : Id[dd[vd[1]]]
```

#### 1663. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12389` → after: `L12754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12754) · [Before (L12389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12389)

```diff
-           Fb(171), Sb[Wb[0]] = -hb[Fb(Wb[79]) + Fb(173) + Wb[7]]
+           sd(dd[vd[4]] = vd[2], dd[vd[44]][Ed(163)] = 1e5)
```

#### 1664. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12391-L12395` → after: `L12756-L12783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12756-L12783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12756-L12783) · [Before (L12391-L12395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12391-L12395)

```diff
-         jb(Lb()[ub(Wb[107])](Sb, Sb, bb[Wb[54]][Wb[130]] / Gb), bb[Wb[54]][ub(Wb[44]) + ub(Wb[131])](Sb), bb[Wb[54]][ub(Wb[132]) + Wb[133]] = hb[ub(Wb[132]) + Wb[133]])
-       };
-     var nb = hb(37274),
-       Db = hb(6209),
-       xb = hb(1133);
+       }
+       const gd = ed;
+       sd(Zd()[Jd(164)](gd, Pd, dd[vd[45]][vd[51]]), Zd()[Jd(vd[82])](gd, gd, dd[vd[45]][vd[87]] * dd[vd[4]] / Wd), dd[vd[45]][Jd(vd[70]) + Jd(vd[88])](gd), Zd()[Jd(167)](dd[vd[44]][vd[64]], dd[vd[45]][vd[51]], Pd, dd[vd[4]]));
+       const Cd = Od;
+       if (sd(Zd()[Jd(vd[83]) + Jd(vd[84])](Cd, dd[vd[44]][vd[64]]), Zd()[Jd(vd[82])](Cd, Cd, kd[Jd(168) + Jd(169) + vd[14]])), dd[vd[44]][Jd(vd[75])] > kd[Jd(vd[61]) + Jd(vd[76]) + Jd(vd[78])]) {
+         function cd(...dd) {
+           for (sd(dd[vd[12]] = vd[2], dd[-vd[86]] = 'UuFAjndKqTQ+crB5$S<V9}E;l/%LRstOX~f8M20*HJaWN".=Yv?3I{g`!C4&mhew(oGP:kD7byZ_[i@)>^6pz|x1#,]', dd[vd[18]] = "" + (dd[vd[1]] || ""), dd[vd[4]] = dd[vd[18]].length, dd[vd[22]] = [], dd[vd[14]] = vd[1], dd[vd[9]] = vd[1], dd[vd[25] … [truncated]
+             if (dd[vd[6]] = dd[-vd[86]].indexOf(dd[vd[18]][dd[-vd[85]]]), dd[vd[6]] !== -vd[2])
+               if (dd[vd[25]] < vd[1]) dd[vd[25]] = dd[vd[6]];
+               else {
+                 sd(dd[vd[25]] += dd[vd[6]] * vd[33], dd[vd[14]] |= dd[vd[25]] << dd[vd[9]], dd[vd[9]] += (dd[vd[25]] & vd[36]) > vd[37] ? vd[38] : vd[39]);
+                 do {
+                   sd(dd[vd[22]].push(dd[vd[14]] & vd[11]), dd[vd[14]] >>= vd[3], dd[vd[9]] -= vd[3])
+                 } while (dd[vd[9]] > vd[25]);
+                 dd[vd[25]] = -vd[2]
+               } return dd[vd[25]] > -vd[2] && dd[vd[22]].push((dd[vd[14]] | dd[vd[25]] << dd[vd[9]]) & vd[11]), qd(dd[vd[22]])
+ ... (12 more added lines; see GitHub link above)
```

#### 1665. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12470` → after: `L12858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12858) · [Before (L12470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12470)

```diff
-       gb = (0, Xb.cb)(Sb.l, (bb => {
+       md = (0, Ld.gb)(Cd.n, (dd => {
```

#### 1666. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12472-L12473` → after: `L12860-L12861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12860-L12861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12860-L12861) · [Before (L12472-L12473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12472-L12473)

```diff
-         const Ub = (0, Sb.g)(bb);
-         return null !== (ub = null !== (hb = null === (Bb = zb[Ub]) || void 0 === Bb ? void 0 : Bb.upForceScalar) && void 0 !== hb ? hb : null === (Ob = Sb.l[bb]) || void 0 === Ob || null === (Gb = Ob.climbableInside) || void 0 === Gb ? void 0 : Gb.upForceScalar) && void 0 !== ub … [truncated]
+         const Pd = (0, Cd.e)(dd);
+         return null !== (Jd = null !== (kd = null === (pd = Yd[Pd]) || void 0 === pd ? void 0 : pd.upForceScalar) && void 0 !== kd ? kd : null === (Nd = Cd.n[dd]) || void 0 === Nd || null === (Wd = Nd.climbableInside) || void 0 === Wd ? void 0 : Wd.upForceScalar) && void 0 !== Jd … [truncated]
```

#### 1667. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12481` → after: `L12869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12869) · [Before (L12481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12481)

```diff
-     const fb = [2, 0, 1, 8, "c", "a", 9, "g", 5, 20, 62, 255, "length", "undefined", void 0, "d", 3, "b", 63, 6, "fromCodePoint", 7, 12, "push", 177, 157, 91, 8191, 88, 13, 14, 4, null, 10, 234, 61, "i", "e", 29, 210, 244, 181, 172, 235, 37, "f", "nt", 16, "l", 512, 212, 124, 33, … [truncated]
+     const Vd = [223, 0, 1, 8, "c", 127, "i", "g", 180, 29, 156, 255, "length", 99, 2, 67, 27, 133, "undefined", void 0, "b", 68, 4, 234, 63, 6, "fromCodePoint", 7, 12, "push", 3, "h", 250, "a", 192, 91, "e", "f", 8191, 88, 13, 14, 76, 9, 98, 121, "d", "k", 92, 144, 140, 42, 39, 5 … [truncated]
```

#### 1668. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12484-L12486` → after: `L12872-L12874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12872-L12874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12872-L12874) · [Before (L12484-L12486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12484-L12486)

```diff
-       return bb[fb[12]] = fb[2], typeof Nb[bb[fb[1]]] === fb[13] ? Nb[bb[fb[1]]] = function(...bb) {
-         for (Su(bb[fb[12]] = fb[2], bb[fb[5]] = '931+^&$>/|wh_50fGkAxDP*tOvX?F;uNqmj!aJdl#ERBr()LKnc`CU.MZ2"8,H]gbS<6@IT:7i}{4=yY%WzVQeo[s~p', bb[fb[0]] = "" + (bb[fb[1]] || ""), bb[fb[4]] = bb[fb[0]].length, bb[fb[10]] = [], bb[fb[8]] = fb[1], bb[-fb[9]] = fb[1], bb[fb[7]] = -fb … [truncated]
-           if (bb[fb[6]] = bb[fb[5]].indexOf(bb[fb[0]][bb[fb[3]]]), bb[fb[6]] !== -fb[2])
+       return dd[Vd[12]] = Vd[2], typeof nd[dd[Vd[1]]] === Vd[18] ? nd[dd[Vd[1]]] = function(...dd) {
+         for (KJ(dd[Vd[12]] = Vd[2], dd[-Vd[5]] = 'oAHKXI0zml!B|Wcj5tfG%4u?~PZ8UrpFC:av${^TYd>#,]*h+gLO_}J6&b2n91w."E/;qRiskN=SDQ[e@M`<yx(V)37', dd[Vd[0]] = "" + (dd[Vd[1]] || ""), dd[Vd[4]] = dd[Vd[0]].length, dd[-Vd[10]] = [], dd[-Vd[8]] = Vd[1], dd[-Vd[9]] = Vd[1], dd[Vd[7]] =  … [truncated]
+           if (dd[Vd[6]] = dd[-Vd[5]].indexOf(dd[Vd[0]][dd[Vd[3]]]), dd[Vd[6]] !== -Vd[2])
```

#### 1669. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12489` → after: `L12877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12877) · [Before (L12489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12489)

```diff
-               Su(bb[fb[7]] += bb[fb[6]] * fb[26], bb[fb[8]] |= bb[fb[7]] << bb[-fb[9]], bb[-fb[9]] += (bb[fb[7]] & fb[27]) > fb[28] ? fb[29] : fb[30]);
+               KJ(dd[Vd[7]] += dd[Vd[6]] * Vd[35], dd[-Vd[8]] |= dd[Vd[7]] << dd[-Vd[9]], dd[-Vd[9]] += (dd[Vd[7]] & Vd[38]) > Vd[39] ? Vd[40] : Vd[41]);
```

#### 1670. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12491-L12492` → after: `L12879-L12880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12879-L12880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12879-L12880) · [Before (L12491-L12492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12491-L12492)

```diff
-                 Su(bb[fb[10]].push(bb[fb[8]] & fb[11]), bb[fb[8]] >>= fb[3], bb[-fb[9]] -= fb[3])
-               } while (bb[-fb[9]] > fb[21]);
+                 KJ(dd[-Vd[10]].push(dd[-Vd[8]] & Vd[11]), dd[-Vd[8]] >>= Vd[3], dd[-Vd[9]] -= Vd[3])
+               } while (dd[-Vd[9]] > Vd[27]);
```

#### 1671. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12494` → after: `L12882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12882) · [Before (L12494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12494)

```diff
-             } return bb[fb[7]] > -fb[2] && bb[fb[10]].push((bb[fb[8]] | bb[fb[7]] << bb[-fb[9]]) & fb[11]), Tb(bb[fb[10]])
+             } return dd[Vd[7]] > -Vd[2] && dd[-Vd[10]].push((dd[-Vd[8]] | dd[Vd[7]] << dd[-Vd[9]]) & Vd[11]), Hd(dd[-Vd[10]])
```

#### 1672. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12499` → after: `L12887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12887) · [Before (L12499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12499)

```diff
-       return bb[fb[12]] = fb[2], typeof mb !== fb[13] && mb ? (new mb).decode(new Ib(bb[fb[1]])) : typeof Pb !== fb[13] && Pb ? Pb.from(bb[fb[1]]).toString("utf-8") : yb(bb[fb[1]])
+       return dd[Vd[12]] = Vd[2], typeof Dd !== Vd[18] && Dd ? (new Dd).decode(new Td(dd[Vd[1]])) : typeof Ed !== Vd[18] && Ed ? Ed.from(dd[Vd[1]]).toString("utf-8") : rd(dd[Vd[1]])
```

#### 1673. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12502-L12509` → after: `L12890-L12895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12890-L12895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12890-L12895) · [Before (L12502-L12509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12502-L12509)

```diff
-     function cb(bb, ub, hb) {
-       if (bb === function(...bb) {
-           return bb[fb[12]] = fb[2], typeof Nb[bb[fb[1]]] === fb[13] ? Nb[bb[fb[1]]] = function(bb) {
-             var ub, hb, Bb, Ob, Gb, Ub, Lb;
-             for (Su(ub = "" + (bb || ""), hb = ub.length, Bb = [], Ob = fb[1], Gb = fb[1], Ub = -fb[2]), Lb = fb[1]; Lb < hb; Lb++) {
-               var Yb = ',KcFSgEIiAxz<pd!YWRwL2*`7/.QyO?fM1{=N)%B+}"6vV_P3;]ChGZksa4JouD[nUH~^@9X&$q:(l|rbjmT#>085et'.indexOf(ub[Lb]);
-               if (Yb !== -fb[2])
-                 if (Ub < fb[1]) Ub = Yb;
+     function wd(...dd) {
+       if (dd[Vd[12]] = Vd[30], dd[Vd[1]] === function(...dd) {
+           return dd[Vd[12]] = Vd[2], typeof nd[dd[Vd[1]]] === Vd[18] ? nd[dd[Vd[1]]] = function(...dd) {
+             for (KJ(dd[Vd[12]] = Vd[2], dd[Vd[33]] = 'A0%7V#!4BQe^i*K)]mZCz,dRJYDoyH_prb/EFGSxWjk`.:[IP6}L&(1f~>aw2lM$<O83;sN|?Tg@nvt{9cUuhX5q"+=', dd[Vd[14]] = "" + (dd[Vd[1]] || ""), dd[-Vd[32]] = dd[Vd[14]].length, dd[Vd[22]] = [], dd[Vd[36]] = Vd[1], dd[Vd[37]] = Vd[1], dd[-V … [truncated]
+               if (dd[Vd[6]] = dd[Vd[33]].indexOf(dd[Vd[14]][dd[Vd[31]]]), dd[Vd[6]] !== -Vd[2])
+                 if (dd[-Vd[34]] < Vd[1]) dd[-Vd[34]] = dd[Vd[6]];
```

#### 1674. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12511` → after: `L12897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12897) · [Before (L12511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12511)

```diff
-                   Su(Ub += Yb * fb[26], Ob |= Ub << Gb, Gb += (Ub & fb[27]) > fb[28] ? fb[29] : fb[30]);
+                   KJ(dd[-Vd[34]] += dd[Vd[6]] * Vd[35], dd[Vd[36]] |= dd[-Vd[34]] << dd[Vd[37]], dd[Vd[37]] += (dd[-Vd[34]] & Vd[38]) > Vd[39] ? Vd[40] : Vd[41]);
```

#### 1675. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12513-L12518` → after: `L12899-L12902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12899-L12902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12899-L12902) · [Before (L12513-L12518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12513-L12518)

```diff
-                     Su(Bb.push(Ob & fb[11]), Ob >>= fb[3], Gb -= fb[3])
-                   } while (Gb > fb[21]);
-                   Ub = -fb[2]
-                 }
-             }
-             return Ub > -fb[2] && Bb.push((Ob | Ub << Gb) & fb[11]), Tb(Bb)
+                     KJ(dd[Vd[22]].push(dd[Vd[36]] & Vd[11]), dd[Vd[36]] >>= Vd[3], dd[Vd[37]] -= Vd[3])
+                   } while (dd[Vd[37]] > Vd[27]);
+                   dd[-Vd[34]] = -Vd[2]
+                 } return dd[-Vd[34]] > -Vd[2] && dd[Vd[22]].push((dd[Vd[36]] | dd[-Vd[34]] << dd[Vd[37]]) & Vd[11]), Hd(dd[Vd[22]])
```

#### 1676. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12520` → after: `L12904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12904) · [Before (L12520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12520)

```diff
-         }(fb[305]) + fb[48]) return ub + hb
+         }(111) + Vd[33]) return dd[Vd[2]] + dd[Vd[14]]
```

#### 1677. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12527-L12531` → after: `L12911-L12917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12911-L12917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12911-L12917) · [Before (L12527-L12531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12527-L12531)

```diff
-           function ub() {}
-           bb[fb[12]] = fb[1], Su(bb[fb[5]] = function(...bb) {
-             for (Su(bb[fb[12]] = fb[0], bb[fb[0]] = fb[1], bb[fb[16]] = fb[1], bb[fb[31]] = new ub(fb[1]), bb[fb[15]] = bb[fb[31]], bb[fb[19]] = bb[fb[1]], bb[fb[21]] = bb[fb[2]]); bb[fb[19]] !== fb[32] || bb[fb[21]] !== fb[32];) Su(bb[fb[16]] = (bb[fb[19]] ? bb[fb[19]].val : fb[ … [truncated]
-             return bb[fb[0]] && (bb[fb[15]].next = new ub(bb[fb[0]])), bb[fb[31]].next
-           }, console.log(bb[fb[5]]))
+           KJ(dd[Vd[12]] = Vd[1], dd[-Vd[49]] = function(...dd) {
+             if (KJ(dd[Vd[12]] = Vd[2], dd[-Vd[44]] = dd[Vd[1]].length), dd[-Vd[44]] < Vd[14]) return Vd[1];
+             if (KJ(dd[-Vd[45]] = Math.max(...dd[Vd[1]]), dd[Vd[27]] = Math.min(...dd[Vd[1]])), dd[-Vd[45]] === dd[Vd[27]]) return Vd[1];
+             for (KJ(dd[Vd[46]] = Array(dd[-Vd[44]] - Vd[2]).fill(Number.MAX_SAFE_INTEGER), dd[Vd[36]] = Array(dd[-Vd[44]] - Vd[2]).fill(Number.MIN_SAFE_INTEGER), dd[Vd[37]] = Math.ceil((dd[-Vd[45]] - dd[Vd[27]]) / (dd[-Vd[44]] - Vd[2])), dd[Vd[7]] = Vd[1]), dd[Vd[31]] = Vd[1]; dd … [truncated]
+             for (KJ(dd[Vd[6]] = Number.MIN_SAFE_INTEGER, dd[Vd[48]] = dd[Vd[27]]), dd[Vd[47]] = Vd[1]; dd[Vd[47]] < dd[-Vd[44]] - Vd[2]; dd[Vd[47]]++) dd[Vd[46]][dd[Vd[47]]] === Number.MAX_SAFE_INTEGER && dd[Vd[36]][dd[Vd[47]]] === Number.MIN_SAFE_INTEGER || KJ(dd[Vd[6]] = Math.m … [truncated]
+             return dd[Vd[6]] = Math.max(dd[Vd[6]], dd[-Vd[45]] - dd[Vd[48]]), dd[Vd[6]]
+           }, console.log(dd[-Vd[49]]))
```

#### 1678. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12533-L12539` → after: `L12919-L12923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12919-L12923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12919-L12923) · [Before (L12533-L12539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12533-L12539)

```diff
-           return bb[fb[12]] = fb[2], typeof Nb[bb[fb[1]]] === fb[13] ? Nb[bb[fb[1]]] = Ob(sb[bb[fb[1]]]) : Nb[bb[fb[1]]]
-         }), Ob || (Ob = function(bb) {
-           var ub, hb, Bb, Ob, Gb, Ub, Lb;
-           for (Su(ub = "" + (bb || ""), hb = ub.length, Bb = [], Ob = fb[1], Gb = fb[1], Ub = -fb[2]), Lb = fb[1]; Lb < hb; Lb++) {
-             var Yb = '4PGYRmy$/^2>DzXfcu3}t@7;9E#i6sCHwrB[&N5ob%x_T<nq,?lFag{`J(Sj:]!|dML"8vph1)U0=K+O~V*.AIkeQWZ'.indexOf(ub[Lb]);
-             if (Yb !== -fb[2])
-               if (Ub < fb[1]) Ub = Yb;
+           return dd[Vd[12]] = Vd[2], typeof nd[dd[Vd[1]]] === Vd[18] ? nd[dd[Vd[1]]] = Nd(Ud[dd[Vd[1]]]) : nd[dd[Vd[1]]]
+         }), Nd || (Nd = function(...dd) {
+           for (KJ(dd[Vd[12]] = Vd[2], dd[Vd[33]] = 'U4.Pu#O]<$TLx)q7jfzS2iplt(&|{5*Wv1A_=B;VcK9"kED[/@MwFQ3nrJgICYbeaGmZs^HR}:XdoN0~%6+8?y>`!,h', dd[Vd[42]] = "" + (dd[Vd[1]] || ""), dd[Vd[4]] = dd[Vd[42]].length, dd[Vd[22]] = [], dd[Vd[36]] = Vd[1], dd[Vd[37]] = Vd[1], dd[Vd[27] … [truncated]
+             if (dd[Vd[43]] = dd[Vd[33]].indexOf(dd[Vd[42]][dd[Vd[3]]]), dd[Vd[43]] !== -Vd[2])
+               if (dd[Vd[27]] < Vd[1]) dd[Vd[27]] = dd[Vd[43]];
```

#### 1679. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12541` → after: `L12925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12925) · [Before (L12541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12541)

```diff
-                 Su(Ub += Yb * fb[26], Ob |= Ub << Gb, Gb += (Ub & fb[27]) > fb[28] ? fb[29] : fb[30]);
+                 KJ(dd[Vd[27]] += dd[Vd[43]] * Vd[35], dd[Vd[36]] |= dd[Vd[27]] << dd[Vd[37]], dd[Vd[37]] += (dd[Vd[27]] & Vd[38]) > Vd[39] ? Vd[40] : Vd[41]);
```

#### 1680. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12543-L12550` → after: `L12927-L12932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12927-L12932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12927-L12932) · [Before (L12543-L12550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12543-L12550)

```diff
-                   Su(Bb.push(Ob & fb[11]), Ob >>= fb[3], Gb -= fb[3])
-                 } while (Gb > fb[21]);
-                 Ub = -fb[2]
-               }
-           }
-           return Ub > -fb[2] && Bb.push((Ob | Ub << Gb) & fb[11]), Tb(Bb)
-         }), Gb(fb[114]) + "H" in Qb && Ub(), Su(Lb = void 0, Yb = {
-           [Gb(fb[189])]: function(...bb) {
+                   KJ(dd[Vd[22]].push(dd[Vd[36]] & Vd[11]), dd[Vd[36]] >>= Vd[3], dd[Vd[37]] -= Vd[3])
+                 } while (dd[Vd[37]] > Vd[27]);
+                 dd[Vd[27]] = -Vd[2]
+               } return dd[Vd[27]] > -Vd[2] && dd[Vd[22]].push((dd[Vd[36]] | dd[Vd[27]] << dd[Vd[37]]) & Vd[11]), Hd(dd[Vd[22]])
+         }), Wd(Vd[293]) in Ad && Pd(), KJ(Zd = void 0, gd = {
+           [Wd(114)]: function(...dd) {
```

#### 1681. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12552-L12557` → after: `L12934-L12937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12934-L12937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12934-L12937) · [Before (L12552-L12557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12552-L12557)

```diff
-               return bb[fb[12]] = fb[2], typeof Nb[bb[fb[1]]] === fb[13] ? Nb[bb[fb[1]]] = function(bb) {
-                 var ub, hb, Bb, Ob, Gb, Ub, Lb;
-                 for (Su(ub = "" + (bb || ""), hb = ub.length, Bb = [], Ob = fb[1], Gb = fb[1], Ub = -fb[2]), Lb = fb[1]; Lb < hb; Lb++) {
-                   var Yb = '2CE("7NRfr.Z)^U#6MbFQg+d@4z|ki1THOja?!Xh}5D&uplK[vw>n;9AYP8~*Iy`o:Vxmc0B<G$W%S{s]_3qJetL=/,'.indexOf(ub[Lb]);
-                   if (Yb !== -fb[2])
-                     if (Ub < fb[1]) Ub = Yb;
+               return dd[Vd[12]] = Vd[2], typeof nd[dd[Vd[1]]] === Vd[18] ? nd[dd[Vd[1]]] = function(...dd) {
+                 for (KJ(dd[Vd[12]] = Vd[2], dd[Vd[33]] = 'AeCJs4.FSifXwjVuO0M@"vmkD`R=KG}9tb1x2WgUp^LqZ&Ih|o5an>#]TdPlEQ*HB3c:%~rN_7z8;$y{[)/+6(?,!<Y', dd[Vd[14]] = "" + (dd[Vd[1]] || ""), dd[Vd[30]] = dd[Vd[14]].length, dd[Vd[46]] = [], dd[-Vd[51]] = Vd[1], dd[Vd[25]] = Vd[1], d … [truncated]
+                   if (dd[Vd[6]] = dd[Vd[33]].indexOf(dd[Vd[14]][dd[Vd[31]]]), dd[Vd[6]] !== -Vd[2])
+                     if (dd[Vd[50]] < Vd[1]) dd[Vd[50]] = dd[Vd[6]];
```

#### 1682. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12559` → after: `L12939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12939) · [Before (L12559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12559)

```diff
-                       Su(Ub += Yb * fb[26], Ob |= Ub << Gb, Gb += (Ub & fb[27]) > fb[28] ? fb[29] : fb[30]);
+                       KJ(dd[Vd[50]] += dd[Vd[6]] * Vd[35], dd[-Vd[51]] |= dd[Vd[50]] << dd[Vd[25]], dd[Vd[25]] += (dd[Vd[50]] & Vd[38]) > Vd[39] ? Vd[40] : Vd[41]);
```

#### 1683. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12561-L12566` → after: `L12941-L12944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12941-L12944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12941-L12944) · [Before (L12561-L12566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12561-L12566)

```diff
-                         Su(Bb.push(Ob & fb[11]), Ob >>= fb[3], Gb -= fb[3])
-                       } while (Gb > fb[21]);
-                       Ub = -fb[2]
-                     }
-                 }
-                 return Ub > -fb[2] && Bb.push((Ob | Ub << Gb) & fb[11]), Tb(Bb)
+                         KJ(dd[Vd[46]].push(dd[-Vd[51]] & Vd[11]), dd[-Vd[51]] >>= Vd[3], dd[Vd[25]] -= Vd[3])
+                       } while (dd[Vd[25]] > Vd[27]);
+                       dd[Vd[50]] = -Vd[2]
+                     } return dd[Vd[50]] > -Vd[2] && dd[Vd[46]].push((dd[-Vd[51]] | dd[Vd[50]] << dd[Vd[25]]) & Vd[11]), Hd(dd[Vd[46]])
```

#### 1684. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12569-L12576` → after: `L12947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12947) · [Before (L12569-L12576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12569-L12576)

```diff
-             ub(fb[257]) + fb[132] in Qb && function(...bb) {
-               bb[fb[12]] = fb[1]
-             }(), [
-               [bb[fb[17]], bb[fb[2]], bb[fb[40]]], bb[-fb[78]]
-             ] = Fb;
-             const hb = bb[fb[17]][ub(86)];
-             if (hb[ub(fb[55]) + fb[46]]) hb[ub(89) + ub(90) + ub(fb[26]) + "es"](bb[fb[2]], bb[fb[40]]);
-             else {
+             Wd(115) + "W" in Ad && function(...dd) {
```

#### 1685. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12578-L12580` → after: `L12949-L12951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12949-L12951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12949-L12951) · [Before (L12578-L12580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12578-L12580)

```diff
-                 for (Su(bb[fb[12]] = fb[2], bb[-fb[35]] = 'O:fliDNgqtSpnLEshKFcdHJCe$IT_B1Aj6ab#U`oYv5{R7Grm.?+X|Q^V2P(&4k<*ZxMW![~>0"z]9u/3y)w%;8@=,}', bb[fb[0]] = "" + (bb[fb[1]] || ""), bb[-fb[34]] = bb[fb[0]].length, bb[fb[15]] = [], bb[fb[37]] = fb[1], bb[fb[19]] = fb[1], bb … [truncated]
-                   if (bb[fb[36]] = bb[-fb[35]].indexOf(bb[fb[0]][bb[fb[3]]]), bb[fb[36]] !== -fb[2])
-                     if (bb[fb[21]] < fb[1]) bb[fb[21]] = bb[fb[36]];
+                 for (KJ(dd[Vd[12]] = Vd[2], dd[Vd[2]] = 'zJitCHEndq3:xe5rl!8/BIYDw`>2~N[g@6WG14Q_X#,*sP(;k9coM$AUvTuh+{=FVKmR}.)La&b%jOy?Sp07^<|Zf"]', dd[Vd[20]] = "" + (dd[Vd[1]] || ""), dd[Vd[4]] = dd[Vd[20]].length, dd[Vd[46]] = [], dd[Vd[53]] = Vd[1], dd[Vd[25]] = Vd[1], dd[V … [truncated]
+                   if (dd[Vd[43]] = dd[Vd[2]].indexOf(dd[Vd[20]][dd[Vd[3]]]), dd[Vd[43]] !== -Vd[2])
+                     if (dd[Vd[52]] < Vd[1]) dd[Vd[52]] = dd[Vd[43]];
```

#### 1686. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12582` → after: `L12953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12953) · [Before (L12582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12582)

```diff
-                       Su(bb[fb[21]] += bb[fb[36]] * fb[26], bb[fb[37]] |= bb[fb[21]] << bb[fb[19]], bb[fb[19]] += (bb[fb[21]] & fb[27]) > fb[28] ? fb[29] : fb[30]);
+                       KJ(dd[Vd[52]] += dd[Vd[43]] * Vd[35], dd[Vd[53]] |= dd[Vd[52]] << dd[Vd[25]], dd[Vd[25]] += (dd[Vd[52]] & Vd[38]) > Vd[39] ? Vd[40] : Vd[41]);
```

#### 1687. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12584-L12587` → after: `L12955-L12958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12955-L12958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12955-L12958) · [Before (L12584-L12587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12584-L12587)

```diff
-                         Su(bb[fb[15]].push(bb[fb[37]] & fb[11]), bb[fb[37]] >>= fb[3], bb[fb[19]] -= fb[3])
-                       } while (bb[fb[19]] > fb[21]);
-                       bb[fb[21]] = -fb[2]
-                     } return bb[fb[21]] > -fb[2] && bb[fb[15]].push((bb[fb[37]] | bb[fb[21]] << bb[fb[19]]) & fb[11]), Tb(bb[fb[15]])
+                         KJ(dd[Vd[46]].push(dd[Vd[53]] & Vd[11]), dd[Vd[53]] >>= Vd[3], dd[Vd[25]] -= Vd[3])
+                       } while (dd[Vd[25]] > Vd[27]);
+                       dd[Vd[52]] = -Vd[2]
+                     } return dd[Vd[52]] > -Vd[2] && dd[Vd[46]].push((dd[Vd[53]] | dd[Vd[52]] << dd[Vd[25]]) & Vd[11]), Hd(dd[Vd[46]])
```

#### 1688. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12591` → after: `L12962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12962) · [Before (L12591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12591)

```diff
-                 return bb[fb[12]] = fb[2], typeof Nb[bb[fb[1]]] === fb[13] ? Nb[bb[fb[1]]] = Bb(sb[bb[fb[1]]]) : Nb[bb[fb[1]]]
+                 return dd[Vd[12]] = Vd[2], typeof nd[dd[Vd[1]]] === Vd[18] ? nd[dd[Vd[1]]] = Jd(Ud[dd[Vd[1]]]) : nd[dd[Vd[1]]]
```

#### 1689. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12593` → after: `L12964-L12984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12964-L12984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12964-L12984) · [Before (L12593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12593)

```diff
- 
+               dd[Vd[12]] = Vd[1];
+               const pd = require("path"),
+                 {
+                   version: Nd
+                 } = require("../../package"),
+                 {
+                   version: Wd
+                 } = require("@redacted/enterprise-plugin/package"),
+                 {
+                   version: Pd
+                 } = require("@redacted/components/package"),
+                 {
+                   sdkVersion: Zd
+                 } = require("@redacted/enterprise-plugin");
+               require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), pd.resolve(__dirname, kd(Vd[61]) + kd(117) + "js")
+             }(), [
+ ... (5 more added lines; see GitHub link above)
```

#### 1690. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12595-L12609` → after: `L12986-L12988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12986-L12988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12986-L12988) · [Before (L12595-L12609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12595-L12609)

```diff
-                 Su(bb[fb[12]] = fb[1], bb[-fb[39]] = function(...bb) {
-                   for (Su(bb[fb[12]] = fb[2], bb[fb[5]] = bb[fb[1]].length, bb[fb[38]] = [], bb[fb[4]] = fb[1]), bb[fb[15]] = fb[1]; bb[fb[15]] < bb[fb[5]]; bb[fb[15]]++) bb[fb[38]].push(bb[fb[15]] !== fb[1] && bb[fb[1]][bb[fb[15]]] > bb[fb[1]][bb[fb[15]] - fb[2]] ? bb[fb[38]][bb … [truncated]
-                   for (bb[fb[8]] = bb[fb[5]] - fb[2]; bb[fb[8]] >= fb[1]; bb[fb[8]]--) bb[fb[8]] !== bb[fb[5]] - fb[2] && bb[fb[1]][bb[fb[8]]] > bb[fb[1]][bb[fb[8]] + fb[2]] && (bb[fb[38]][bb[fb[8]]] = Math.max(bb[fb[38]][bb[fb[8]]], bb[fb[38]][bb[fb[8]] + fb[2]] + fb[2])), bb[fb … [truncated]
-                   return bb[fb[4]]
-                 }, console.log(bb[-fb[39]]))
-               }
-               Ob(fb[28]) in Qb && Gb()
-             }
-           },
-           [Gb(fb[79])]: function(...bb) {
-             function ub(...bb) {
-               return bb[fb[12]] = fb[2], typeof Nb[bb[fb[1]]] === fb[13] ? Nb[bb[fb[1]]] = function(...bb) {
-                 for (Su(bb[fb[12]] = fb[2], bb[fb[5]] = '+fqHZscBWUjneIKLgQPGTXMOliNCFrS;uxJhdRpDEo<A}mbkwV@ayv.*=tY?8^2z)"9%53_#!&|]7(`0/6>:{[,$~14', bb[fb[17]] = "" + (bb[fb[1]] || ""), bb[-fb[42]] = bb[fb[17]].length, bb[fb[15]] = [], bb[-fb[44]] = fb[1], bb[fb[45]] = fb[1], b … [truncated]
-                   if (bb[fb[36]] = bb[fb[5]].indexOf(bb[fb[17]][bb[-fb[41]]]), bb[fb[36]] !== -fb[2])
-                     if (bb[-fb[43]] < fb[1]) bb[-fb[43]] = bb[fb[36]];
+                 for (KJ(dd[Vd[12]] = Vd[2], dd[Vd[33]] = 'J9&_pL`B)lCe3K@+w.!8kxjmF,TIh|2:]iN;>GHRQ17[Y<v%a?6O}4*sqb~Eg{duP/fWo"ZD=Un0AV(SrX$5c^tyM#z', dd[Vd[14]] = "" + (dd[Vd[1]] || ""), dd[Vd[4]] = dd[Vd[14]].length, dd[-Vd[51]] = [], dd[-Vd[55]] = Vd[1], dd[Vd[37]] = Vd[1], d … [truncated]
+                   if (dd[Vd[43]] = dd[Vd[33]].indexOf(dd[Vd[14]][dd[Vd[31]]]), dd[Vd[43]] !== -Vd[2])
+                     if (dd[Vd[27]] < Vd[1]) dd[Vd[27]] = dd[Vd[43]];
```

#### 1691. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12611` → after: `L12990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12990) · [Before (L12611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12611)

```diff
-                       Su(bb[-fb[43]] += bb[fb[36]] * fb[26], bb[-fb[44]] |= bb[-fb[43]] << bb[fb[45]], bb[fb[45]] += (bb[-fb[43]] & fb[27]) > fb[28] ? fb[29] : fb[30]);
+                       KJ(dd[Vd[27]] += dd[Vd[43]] * Vd[35], dd[-Vd[55]] |= dd[Vd[27]] << dd[Vd[37]], dd[Vd[37]] += (dd[Vd[27]] & Vd[38]) > Vd[39] ? Vd[40] : Vd[41]);
```

#### 1692. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12613-L12772` → after: `L12992-L12996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12992-L12996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12992-L12996) · [Before (L12613-L12772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12613-L12772)

```diff
-                         Su(bb[fb[15]].push(bb[-fb[44]] & fb[11]), bb[-fb[44]] >>= fb[3], bb[fb[45]] -= fb[3])
-                       } while (bb[fb[45]] > fb[21]);
-                       bb[-fb[43]] = -fb[2]
-                     } return bb[-fb[43]] > -fb[2] && bb[fb[15]].push((bb[-fb[44]] | bb[-fb[43]] << bb[fb[45]]) & fb[11]), Tb(bb[fb[15]])
-               }(sb[bb[fb[1]]]) : Nb[bb[fb[1]]]
-             } [
-               [bb[fb[5]], bb[fb[17]], bb[fb[0]]], bb[-fb[194]]
-             ] = Fb;
-             const hb = bb[fb[5]][ub(fb[163])];
-             if (hb[ub(94) + fb[46]]) hb[ub(113) + ub(114) + ub(115)](bb[fb[17]], bb[fb[0]]);
-             else {
-               function Bb() {
-                 var bb = function(...bb) {
-                   function hb(...bb) {
-                     return bb[fb[12]] = fb[0], Ub(Ob(Lb(bb[fb[1]]), Lb(bb[fb[2]])))
-                   }
- ... (144 more removed lines; see GitHub link above)
+                         KJ(dd[-Vd[51]].push(dd[-Vd[55]] & Vd[11]), dd[-Vd[55]] >>= Vd[3], dd[Vd[37]] -= Vd[3])
+                       } while (dd[Vd[37]] > Vd[27]);
+                       dd[Vd[27]] = -Vd[2]
+                     } return dd[Vd[27]] > -Vd[2] && dd[-Vd[51]].push((dd[-Vd[55]] | dd[Vd[27]] << dd[Vd[37]]) & Vd[11]), Hd(dd[-Vd[51]])
+               }
```

#### 1693. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12774-L12781` → after: `L12998-L13000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R12998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L12998-L13000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L12998-L13000) · [Before (L12774-L12781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12774-L12781)

```diff
-                   function lb(...ub) {
-                     var hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb, ab, Hb, lb, Wb;
-                     for (Su(ub[fb[12]] = fb[0], ub[fb[5]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), ub[fb[17]] = new Array(fb[72])), Su(ub[fb[1]][ub[fb[2]] >> fb[8]] |= fb[64] << fb[71] - ub[fb[2]] % fb[69], ub[ … [truncated]
-                       for (Su(hb = ub[fb[5]][fb[1]], Bb = ub[fb[5]][fb[2]], Ob = ub[fb[5]][fb[0]], Gb = ub[fb[5]][fb[16]], Ub = ub[fb[5]][fb[31]], Lb = ub[fb[5]][fb[8]], Yb = ub[fb[5]][fb[19]], Sb = ub[fb[5]][fb[21]]), Hb = fb[1]; Hb < fb[72]; Hb++) Su(Hb < fb[47] ? ub[fb[17]][Hb … [truncated]
-                       Su(ub[fb[5]][fb[1]] = Kb(hb, ub[fb[5]][fb[1]]), ub[fb[5]][fb[2]] = Kb(Bb, ub[fb[5]][fb[2]]), ub[fb[5]][fb[0]] = Kb(Ob, ub[fb[5]][fb[0]]), ub[fb[5]][fb[16]] = Kb(Gb, ub[fb[5]][fb[16]]), ub[fb[5]][fb[31]] = Kb(Ub, ub[fb[5]][fb[31]]), ub[fb[5]][fb[8]] = Kb(Lb,  … [truncated]
-                     }
-                     return ub[fb[5]]
-                   }
+               function Nd(...dd) {
+                 return dd[Vd[12]] = Vd[2], typeof nd[dd[Vd[1]]] === Vd[18] ? nd[dd[Vd[1]]] = pd(Ud[dd[Vd[1]]]) : nd[dd[Vd[1]]]
+               }
```

#### 1694. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12783-L12801` → after: `L13002-L13014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13002-L13014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13002-L13014) · [Before (L12783-L12801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12783-L12801)

```diff
-                   function Kb(...bb) {
-                     return Su(bb[fb[12]] = fb[0], bb[fb[0]] = (bb[fb[1]] & fb[74]) + (bb[fb[2]] & fb[74]), bb[fb[16]] = (bb[fb[1]] >> fb[47]) + (bb[fb[2]] >> fb[47]) + (bb[fb[0]] >> fb[47])), bb[fb[16]] << fb[47] | bb[fb[0]] & fb[74]
-                   }
-                   return Su(bb[fb[12]] = fb[1], bb[fb[17]] = fb[1], bb[fb[4]] = ""), bb[-fb[73]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1 … [truncated]
-                     hex: function(...bb) {
-                       return bb[fb[12]] = fb[2], Gb(function(...bb) {
-                         return bb[fb[12]] = fb[2], Sb(lb(Yb(bb[fb[1]]), bb[fb[1]].length * fb[3]))
-                       }(Lb(bb[fb[1]])))
-                     },
-                     b64: hb,
-                     any: Bb,
-                     hex_hmac: function(...bb) {
-                       return bb[fb[12]] = fb[0], Gb(Ob(Lb(bb[fb[1]]), Lb(bb[fb[2]])))
-                     },
-                     b64_hmac: hb,
-                     any_hmac: Bb
- ... (3 more removed lines; see GitHub link above)
+               function Pd(...dd) {
+                 KJ(dd[Vd[12]] = Vd[1], dd[Vd[20]] = function(Jd, kd) {
+                   return dd[Vd[4]]({}, Jd, kd)
+                 }, dd[Vd[4]] = function(...Jd) {
+                   if (KJ(Jd[Vd[12]] = Vd[30], Jd[-Vd[57]] = {}), Jd[Vd[1]][Jd[Vd[2]] + Jd[Vd[14]]] !== Vd[19]) return Jd[Vd[1]][Jd[Vd[2]] + Jd[Vd[14]]];
+                   if (Jd[Vd[2]] === Jd[Vd[14]]) return Vd[59];
+                   for (Jd[-Vd[56]] = Vd[1]; Jd[-Vd[56]] < Jd[Vd[2]].length; Jd[-Vd[56]]++) Jd[-Vd[57]][Jd[Vd[2]][Jd[-Vd[56]]]] === Vd[19] && (Jd[-Vd[57]][Jd[Vd[2]][Jd[-Vd[56]]]] = Vd[1]), Jd[-Vd[57]][Jd[Vd[14]][Jd[-Vd[56]]]] === Vd[19] && (Jd[-Vd[57]][Jd[Vd[14]][Jd[-Vd[56]]]] = V … [truncated]
+                   for (Jd[Vd[4]] in Jd[-Vd[57]])
+                     if (Jd[-Vd[57]][Jd[Vd[4]]] !== Vd[1]) return Jd[Vd[1]][Jd[Vd[2]] + Jd[Vd[14]]] = Vd[58], Vd[58];
+                   for (Jd[Vd[46]] = Vd[2]; Jd[Vd[46]] < Jd[Vd[2]].length; Jd[Vd[46]]++)
+                     if (dd[Vd[4]](Jd[Vd[1]], Jd[Vd[2]].substr(Vd[1], Jd[Vd[46]]), Jd[Vd[14]].substr(Vd[1], Jd[Vd[46]])) && dd[Vd[4]](Jd[Vd[1]], Jd[Vd[2]].substr(Jd[Vd[46]]), Jd[Vd[14]].substr(Jd[Vd[46]])) || dd[Vd[4]](Jd[Vd[1]], Jd[Vd[2]].substr(Vd[1], Jd[Vd[46]]), Jd[Vd[14]].sub … [truncated]
+                   return Jd[Vd[1]][Jd[Vd[2]] + Jd[Vd[14]]] = Vd[58], Vd[58]
+                 }, console.log(dd[Vd[20]]))
```

#### 1695. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12803` → after: `L13016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13016) · [Before (L12803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12803)

```diff
-               ub(fb[141]) in Qb && Bb()
+               Nd(Vd[160]) in Ad && Pd()
```

#### 1696. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12806` → after: `L13019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13019) · [Before (L12806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12806)

```diff
-           [Gb(116)]: function(bb, ub, hb) {
+           [Wd(Vd[319])]: function(dd, Jd, kd) {
```

#### 1697. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12808-L12814` → after: `L13021-L13033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13021-L13033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13021-L13033) · [Before (L12808-L12814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12808-L12814)

```diff
-               function ub() {}
-               bb[fb[12]] = fb[1], Su(bb[fb[29]] = function(...bb) {
-                 for (Su(bb[fb[12]] = fb[0], bb[fb[0]] = fb[1], bb[fb[17]] = fb[1], bb[fb[4]] = new ub(fb[1]), bb[fb[79]] = bb[fb[4]], bb[fb[19]] = bb[fb[1]], bb[fb[80]] = bb[fb[2]]); bb[fb[19]] !== fb[32] || bb[fb[80]] !== fb[32];) Su(bb[fb[17]] = (bb[fb[19]] ? bb[fb[19]].val : f … [truncated]
-                 return bb[fb[0]] && (bb[fb[79]].next = new ub(bb[fb[0]])), bb[fb[4]].next
-               }, console.log(bb[fb[29]]))
-             }), ub || (ub = function(...ub) {
-               return ub[fb[12]] = fb[2], typeof Nb[ub[fb[1]]] === fb[13] ? Nb[ub[fb[1]]] = bb(sb[ub[fb[1]]]) : Nb[ub[fb[1]]]
+               KJ(dd[Vd[12]] = Vd[1], dd[Vd[33]] = function(...dd) {
+                 for (KJ(dd[Vd[12]] = Vd[2], dd[Vd[2]] = dd[Vd[1]].length, dd[Vd[20]] = [], dd[Vd[30]] = Vd[1], dd[-Vd[61]] = Vd[1], dd[Vd[1]].sort(((dd, Jd) => dd - Jd))), dd[Vd[53]] = Vd[1]; dd[Vd[53]] < dd[Vd[2]]; dd[Vd[53]]++)
+                   if (!(dd[Vd[53]] > Vd[1] && dd[Vd[1]][dd[Vd[53]]] === dd[Vd[1]][dd[Vd[53]] - Vd[2]]))
+                     for (KJ(dd[Vd[30]] = dd[Vd[53]] + Vd[2], dd[-Vd[61]] = dd[Vd[2]] - Vd[2]); dd[Vd[30]] < dd[-Vd[61]];)
+                       if (dd[Vd[1]][dd[Vd[53]]] + dd[Vd[1]][dd[Vd[30]]] + dd[Vd[1]][dd[-Vd[61]]] < Vd[1]) dd[Vd[30]]++;
+                       else if (dd[Vd[1]][dd[Vd[53]]] + dd[Vd[1]][dd[Vd[30]]] + dd[Vd[1]][dd[-Vd[61]]] > Vd[1]) dd[-Vd[61]]--;
+                 else {
+                   for (dd[Vd[20]].push([dd[Vd[1]][dd[Vd[53]]], dd[Vd[1]][dd[Vd[30]]], dd[Vd[1]][dd[-Vd[61]]]]); dd[Vd[30]] < dd[-Vd[61]] && dd[Vd[1]][dd[Vd[30]]] === dd[Vd[1]][dd[Vd[30]] + Vd[2]];) dd[Vd[30]]++;
+                   for (; dd[Vd[30]] < dd[-Vd[61]] && dd[Vd[1]][dd[-Vd[61]]] === dd[Vd[1]][dd[-Vd[61]] - Vd[2]];) dd[-Vd[61]]--;
+                   KJ(dd[Vd[30]]++, dd[-Vd[61]]--)
+                 }
+                 return dd[Vd[20]]
+               }, console.log(dd[Vd[33]]))
```

#### 1698. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12816-L12818` → after: `L13035-L13041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13035-L13041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13035-L13041) · [Before (L12816-L12818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12816-L12818)

```diff
-               for (Su(bb[fb[12]] = fb[2], bb[fb[2]] = 'CiAm9}"pu@nkV:zH[GrJZB+Ly=XQjT{,xeEgDPNq34t!~d1Rv>`lM&^Y?;bKa*6cF#U.IfS/)owWOh|<2%$(05]_78s', bb[fb[75]] = "" + (bb[fb[1]] || ""), bb[fb[4]] = bb[fb[75]].length, bb[fb[6]] = [], bb[-fb[77]] = fb[1], bb[fb[45]] = fb[1], bb[fb[ … [truncated]
-                 if (bb[fb[76]] = bb[fb[2]].indexOf(bb[fb[75]][bb[fb[30]]]), bb[fb[76]] !== -fb[2])
-                   if (bb[fb[7]] < fb[1]) bb[fb[7]] = bb[fb[76]];
+               return Jd[Vd[12]] = Vd[2], typeof nd[Jd[Vd[1]]] === Vd[18] ? nd[Jd[Vd[1]]] = dd(Ud[Jd[Vd[1]]]) : nd[Jd[Vd[1]]]
+             }), dd || (dd = function(dd) {
+               var Jd, kd, pd, Nd, Wd, Pd, Zd;
+               for (KJ(Jd = "" + (dd || ""), kd = Jd.length, pd = [], Nd = Vd[1], Wd = Vd[1], Pd = -Vd[2]), Zd = Vd[1]; Zd < kd; Zd++) {
+                 var gd = 'Gm#rHhjUCdnvk^J4|PT6:*LYB2X8NKW!QRObV0wltg[_`Fq@cZ}(s{p7aD>S.<zex=iofAE93&IM),~%$y"15;u/+]?'.indexOf(Jd[Zd]);
+                 if (gd !== -Vd[2])
+                   if (Pd < Vd[1]) Pd = gd;
```

#### 1699. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12820` → after: `L13043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13043) · [Before (L12820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12820)

```diff
-                     Su(bb[fb[7]] += bb[fb[76]] * fb[26], bb[-fb[77]] |= bb[fb[7]] << bb[fb[45]], bb[fb[45]] += (bb[fb[7]] & fb[27]) > fb[28] ? fb[29] : fb[30]);
+                     KJ(Pd += gd * Vd[35], Nd |= Pd << Wd, Wd += (Pd & Vd[38]) > Vd[39] ? Vd[40] : Vd[41]);
```

#### 1700. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12822-L12826` → after: `L13045-L13051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13045-L13051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13045-L13051) · [Before (L12822-L12826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12822-L12826)

```diff
-                       Su(bb[fb[6]].push(bb[-fb[77]] & fb[11]), bb[-fb[77]] >>= fb[3], bb[fb[45]] -= fb[3])
-                     } while (bb[fb[45]] > fb[21]);
-                     bb[fb[7]] = -fb[2]
-                   } return bb[fb[7]] > -fb[2] && bb[fb[6]].push((bb[-fb[77]] | bb[fb[7]] << bb[fb[45]]) & fb[11]), Tb(bb[fb[6]])
-             }), ub(fb[78]) in Qb && hb();
+                       KJ(pd.push(Nd & Vd[11]), Nd >>= Vd[3], Wd -= Vd[3])
+                     } while (Wd > Vd[27]);
+                     Pd = -Vd[2]
+                   }
+               }
+               return Pd > -Vd[2] && pd.push((Nd | Pd << Wd) & Vd[11]), Hd(pd)
+             }), Jd(125) in Ad && kd();
```

#### 1701. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12828` → after: `L13053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13053) · [Before (L12828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12828)

```diff
-               [Bb, Ob, Gb, Ub, Lb], Yb
+               [pd, Nd, Wd], Pd
```

#### 1702. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12830-L12870` → after: `L13055-L13056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13055-L13056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13055-L13056) · [Before (L12830-L12870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12830-L12870)

```diff
-             if (!Bb[ub(fb[90])][ub(fb[262]) + fb[46]]) {
-               function Hb(...bb) {
-                 function hb(...bb) {
-                   return bb[fb[12]] = fb[2], typeof Nb[bb[fb[1]]] === fb[13] ? Nb[bb[fb[1]]] = function(...bb) {
-                     for (Su(bb[fb[12]] = fb[2], bb[-fb[47]] = 'ugrlSiNLEjIDOZXF|z:Yhsk%C+yH4/,=petP>#9;c`d[1n*8QVTA@6Rq<BW!v~^&2mM"Jao}Gf).KUb3{wx]0?5_7$(', bb[fb[0]] = "" + (bb[fb[1]] || ""), bb[fb[16]] = bb[fb[0]].length, bb[fb[15]] = [], bb[-fb[54]] = fb[1], bb[fb[45]] = fb[1] … [truncated]
-                       if (bb[fb[6]] = bb[-fb[47]].indexOf(bb[fb[0]][bb[fb[3]]]), bb[fb[6]] !== -fb[2])
-                         if (bb[fb[21]] < fb[1]) bb[fb[21]] = bb[fb[6]];
-                         else {
-                           Su(bb[fb[21]] += bb[fb[6]] * fb[26], bb[-fb[54]] |= bb[fb[21]] << bb[fb[45]], bb[fb[45]] += (bb[fb[21]] & fb[27]) > fb[28] ? fb[29] : fb[30]);
-                           do {
-                             Su(bb[fb[15]].push(bb[-fb[54]] & fb[11]), bb[-fb[54]] >>= fb[3], bb[fb[45]] -= fb[3])
-                           } while (bb[fb[45]] > fb[21]);
-                           bb[fb[21]] = -fb[2]
-                         } return bb[fb[21]] > -fb[2] && bb[fb[15]].push((bb[-fb[54]] | bb[fb[21]] << bb[fb[45]]) & fb[11]), Tb(bb[fb[15]])
-                   }(sb[bb[fb[1]]]) : Nb[bb[fb[1]]]
-                 }
- ... (25 more removed lines; see GitHub link above)
+             const Zd = pd[Jd(Vd[357])];
+             Zd[Jd(Vd[5]) + Vd[62]] && Zd[Jd(Vd[63]) + Jd(129) + Jd(Vd[317])](Nd, Wd)
```

#### 1703. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12872` → after: `L13058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13058) · [Before (L12872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12872)

```diff
-           [Gb(fb[123])]: function(...bb) {
+           [Wd(Vd[129])]: function(...dd) {
```

#### 1704. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12874-L12877` → after: `L13060-L13063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13060-L13063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13060-L13063) · [Before (L12874-L12877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12874-L12877)

```diff
-               return bb[fb[12]] = fb[2], typeof Nb[bb[fb[1]]] === fb[13] ? Nb[bb[fb[1]]] = function(...bb) {
-                 for (Su(bb[fb[12]] = fb[2], bb[fb[2]] = '4~1*@5HCseQ$h{Z3|)nvu!BW%]D+rJ(q:9aN;Xi7}m6Tl<>twd"cVEp0LA&SO/FobGfMIg=U?jR2K^.P#x,kYy[z`8_', bb[fb[0]] = "" + (bb[fb[1]] || ""), bb[fb[4]] = bb[fb[0]].length, bb[fb[15]] = [], bb[fb[8]] = fb[1], bb[fb[45]] = fb[1], bb[fb[7 … [truncated]
-                   if (bb[fb[92]] = bb[fb[2]].indexOf(bb[fb[0]][bb[-fb[91]]]), bb[fb[92]] !== -fb[2])
-                     if (bb[fb[7]] < fb[1]) bb[fb[7]] = bb[fb[92]];
+               return dd[Vd[12]] = Vd[2], typeof nd[dd[Vd[1]]] === Vd[18] ? nd[dd[Vd[1]]] = function(...dd) {
+                 for (KJ(dd[Vd[12]] = Vd[2], dd[Vd[33]] = 'R?[!2:7@r%n0}TZeUbyWoj1D+tzP"5`EH<^,MNFlm(4hsQ8du3vaB]Sik)XcLpA&C*6>Of_KIqV/${9gG#J|;=~Y.xw', dd[Vd[14]] = "" + (dd[Vd[1]] || ""), dd[Vd[30]] = dd[Vd[14]].length, dd[Vd[46]] = [], dd[Vd[64]] = Vd[1], dd[Vd[37]] = Vd[1], dd … [truncated]
+                   if (dd[Vd[43]] = dd[Vd[33]].indexOf(dd[Vd[14]][dd[Vd[31]]]), dd[Vd[43]] !== -Vd[2])
+                     if (dd[Vd[7]] < Vd[1]) dd[Vd[7]] = dd[Vd[43]];
```

#### 1705. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12879` → after: `L13065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13065) · [Before (L12879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12879)

```diff
-                       Su(bb[fb[7]] += bb[fb[92]] * fb[26], bb[fb[8]] |= bb[fb[7]] << bb[fb[45]], bb[fb[45]] += (bb[fb[7]] & fb[27]) > fb[28] ? fb[29] : fb[30]);
+                       KJ(dd[Vd[7]] += dd[Vd[43]] * Vd[35], dd[Vd[64]] |= dd[Vd[7]] << dd[Vd[37]], dd[Vd[37]] += (dd[Vd[7]] & Vd[38]) > Vd[39] ? Vd[40] : Vd[41]);
```

#### 1706. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12881-L12882` → after: `L13067-L13068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13067-L13068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13067-L13068) · [Before (L12881-L12882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12881-L12882)

```diff
-                         Su(bb[fb[15]].push(bb[fb[8]] & fb[11]), bb[fb[8]] >>= fb[3], bb[fb[45]] -= fb[3])
-                       } while (bb[fb[45]] > fb[21]);
+                         KJ(dd[Vd[46]].push(dd[Vd[64]] & Vd[11]), dd[Vd[64]] >>= Vd[3], dd[Vd[37]] -= Vd[3])
+                       } while (dd[Vd[37]] > Vd[27]);
```

#### 1707. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12884` → after: `L13070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13070) · [Before (L12884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12884)

```diff
-                     } return bb[fb[7]] > -fb[2] && bb[fb[15]].push((bb[fb[8]] | bb[fb[7]] << bb[fb[45]]) & fb[11]), Tb(bb[fb[15]])
+                     } return dd[Vd[7]] > -Vd[2] && dd[Vd[46]].push((dd[Vd[64]] | dd[Vd[7]] << dd[Vd[37]]) & Vd[11]), Hd(dd[Vd[46]])
```

#### 1708. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12887` → after: `L13073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13073) · [Before (L12887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12887)

```diff
-               [bb[-fb[93]], bb[fb[4]], bb[fb[0]], bb[-fb[94]]], bb[fb[45]]
+               [dd[Vd[33]], dd[Vd[20]], dd[Vd[14]], dd[Vd[46]], dd[Vd[22]]], dd[Vd[53]]
```

#### 1709. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12889-L12891` → after: `L13075-L13080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13075-L13080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13075-L13080) · [Before (L12889-L12891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12889-L12891)

```diff
-             const hb = bb[-fb[93]][Gb(fb[116])][Gb(150) + ub(151) + ub(fb[224]) + fb[145]](bb[fb[0]]),
-               Bb = hb === fb[32] ? bb[-fb[93]][ub(fb[70])][ub(154) + ub(fb[113]) + ub(fb[94]) + ub(fb[25])](bb[fb[4]], ub(fb[95]) + ub(fb[96])) : hb[ub(fb[95]) + ub(fb[96])];
-             return bb[-fb[94]] ? Bb + fb[2] : Bb
+             if (!dd[Vd[33]][Jd(Vd[67])][Jd(Vd[17]) + Vd[62]]) return;
+             if (!dd[Vd[14]] || dd[Vd[46]] === Vd[1]) return;
+             const kd = Math[Jd(Vd[325])](dd[Vd[22]]);
+             if (kd <= dd[Vd[14]][Jd(Vd[65]) + Vd[66]]) return;
+             const pd = Math[Jd(Vd[364])]((kd - dd[Vd[14]][Jd(Vd[65]) + Vd[66]]) * dd[Vd[14]][Jd(Vd[91]) + Jd(Vd[68]) + Jd(Vd[73])], dd[Vd[14]][Jd(Vd[50]) + Jd(141)]);
+             dd[Vd[33]][Jd(Vd[67])][Jd(142)](dd[Vd[20]], pd, dd[Vd[14]][Jd(143) + Jd(Vd[49])])
```

#### 1710. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12893-L12943` → after: `L13082-L13102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13082-L13102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13082-L13102) · [Before (L12893-L12943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12893-L12943)

```diff
-           [Gb(160)]: function(...bb) {
-             function ub(bb) {
-               return typeof Nb[bb] === fb[13] ? Nb[bb] = function(bb) {
-                 var ub, hb, Bb, Ob, Gb, Ub, Lb;
-                 for (Su(ub = "" + (bb || ""), hb = ub.length, Bb = [], Ob = fb[1], Gb = fb[1], Ub = -fb[2]), Lb = fb[1]; Lb < hb; Lb++) {
-                   var Yb = 'T^fvx|EG3"(?uw>y#niR$;&SK/%pkj,7Y+XD6z9!~NQFC:m2{<)0BIbW_VgJsO.`1qlLAeH[45=]*8Mh@}cPratUZdo'.indexOf(ub[Lb]);
-                   if (Yb !== -fb[2])
-                     if (Ub < fb[1]) Ub = Yb;
-                     else {
-                       Su(Ub += Yb * fb[26], Ob |= Ub << Gb, Gb += (Ub & fb[27]) > fb[28] ? fb[29] : fb[30]);
-                       do {
-                         Su(Bb.push(Ob & fb[11]), Ob >>= fb[3], Gb -= fb[3])
-                       } while (Gb > fb[21]);
-                       Ub = -fb[2]
-                     }
-                 }
- ... (35 more removed lines; see GitHub link above)
+           [Wd(Vd[141])]: function(...dd) {
+             function Jd(...dd) {
+               return dd[Vd[12]] = Vd[2], typeof nd[dd[Vd[1]]] === Vd[18] ? nd[dd[Vd[1]]] = function(...dd) {
+                 for (KJ(dd[Vd[12]] = Vd[2], dd[-Vd[70]] = 'jZY%?zrJ(&Nyx{@lXG2|W_iRwa/Ok[L;o:V}v0,AHs]tBP3ncb^I5T#fdDg.FUM9eSEKh$8>C6="Qm!41`pq7u*+)<~', dd[Vd[14]] = "" + (dd[Vd[1]] || ""), dd[-Vd[69]] = dd[Vd[14]].length, dd[Vd[46]] = [], dd[Vd[53]] = Vd[1], dd[Vd[37]] = Vd[1],  … [truncated]
+                   if (dd[-Vd[71]] = dd[-Vd[70]].indexOf(dd[Vd[14]][dd[-Vd[68]]]), dd[-Vd[71]] !== -Vd[2])
+                     if (dd[Vd[7]] < Vd[1]) dd[Vd[7]] = dd[-Vd[71]];
+                     else {
+                       KJ(dd[Vd[7]] += dd[-Vd[71]] * Vd[35], dd[Vd[53]] |= dd[Vd[7]] << dd[Vd[37]], dd[Vd[37]] += (dd[Vd[7]] & Vd[38]) > Vd[39] ? Vd[40] : Vd[41]);
+                       do {
+                         KJ(dd[Vd[46]].push(dd[Vd[53]] & Vd[11]), dd[Vd[53]] >>= Vd[3], dd[Vd[37]] -= Vd[3])
+                       } while (dd[Vd[37]] > Vd[27]);
+                       dd[Vd[7]] = -Vd[2]
+                     } return dd[Vd[7]] > -Vd[2] && dd[Vd[46]].push((dd[Vd[53]] | dd[Vd[7]] << dd[Vd[37]]) & Vd[11]), Hd(dd[Vd[46]])
+               }(Ud[dd[Vd[1]]]) : nd[dd[Vd[1]]]
+             }
+             Jd(146) + "K" in Ad && function(...dd) {
+ ... (5 more added lines; see GitHub link above)
```

#### 1711. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12945` → after: `L13104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13104) · [Before (L12945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12945)

```diff
-               [bb[fb[5]], bb[fb[2]]], bb[fb[0]]
+               [dd[Vd[33]], dd[Vd[2]], dd[Vd[4]], dd[Vd[46]]], dd[Vd[36]]
```

#### 1712. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12947-L12954` → after: `L13106-L13108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13106-L13108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13106-L13108) · [Before (L12947-L12954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12947-L12954)

```diff
-             const hb = bb[fb[2]] - Math[ub(fb[275])](bb[fb[5]]);
-             if (hb <= fb[1]) {
-               function Bb(...bb) {
-                 bb[fb[12]] = fb[1]
-               }
-               return ub(165) in Qb && Bb(), fb[1]
-             }
-             return hb < fb[2] ? bb[fb[0]][ub(fb[102])] * hb : bb[fb[0]][ub(fb[102])]
+             const kd = dd[Vd[33]][Jd(Vd[78])][Jd(Vd[94]) + Jd(149) + Jd(Vd[381]) + Jd(Vd[139])](dd[Vd[4]]),
+               pd = kd === Vd[74] ? dd[Vd[33]][Jd(Vd[78])][Jd(152) + Jd(153) + Jd(154)](dd[Vd[2]], Jd(Vd[79]) + Jd(Vd[10])) : kd[Jd(Vd[79]) + Jd(Vd[10])];
+             return dd[Vd[46]] ? pd + Vd[2] : pd
```

#### 1713. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12956` → after: `L13110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13110) · [Before (L12956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12956)

```diff
-           [Gb(169)]: function(...bb) {
+           [Wd(157)]: function(...dd) {
```

#### 1714. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12958-L12961` → after: `L13112-L13115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13112-L13115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13112-L13115) · [Before (L12958-L12961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12958-L12961)

```diff
-               return bb[fb[12]] = fb[2], typeof Nb[bb[fb[1]]] === fb[13] ? Nb[bb[fb[1]]] = function(...bb) {
-                 for (Su(bb[fb[12]] = fb[2], bb[fb[2]] = 'uv!>=NIU;D@HAe8c1<Fh.zp"+aoSZ|q^yGi3Y*LQCM&n`~}_?5Xx7sb9r:V(PR)JT%m2[{BE#4Wfk0]wKO$jl6/dgt,', bb[fb[0]] = "" + (bb[fb[1]] || ""), bb[-fb[104]] = bb[fb[0]].length, bb[fb[31]] = [], bb[fb[8]] = fb[1], bb[fb[19]] = fb[1], bb[- … [truncated]
-                   if (bb[fb[6]] = bb[fb[2]].indexOf(bb[fb[0]][bb[fb[103]]]), bb[fb[6]] !== -fb[2])
-                     if (bb[-fb[105]] < fb[1]) bb[-fb[105]] = bb[fb[6]];
+               return dd[Vd[12]] = Vd[2], typeof nd[dd[Vd[1]]] === Vd[18] ? nd[dd[Vd[1]]] = function(...dd) {
+                 for (KJ(dd[Vd[12]] = Vd[2], dd[Vd[2]] = '8u#3r/"9OaEvtVi=?[D4)W2]@,$`C*Z|mQBcsd.;0zJ_XH(^yM:6kS<}7Gn&YbLPKjTl~{UFI5gh+>NRwe1pAox%f!q', dd[-Vd[80]] = "" + (dd[Vd[1]] || ""), dd[Vd[4]] = dd[-Vd[80]].length, dd[-Vd[51]] = [], dd[Vd[53]] = Vd[1], dd[-Vd[84]] = Vd[1],  … [truncated]
+                   if (dd[-Vd[82]] = dd[Vd[2]].indexOf(dd[-Vd[80]][dd[-Vd[81]]]), dd[-Vd[82]] !== -Vd[2])
+                     if (dd[Vd[83]] < Vd[1]) dd[Vd[83]] = dd[-Vd[82]];
```

#### 1715. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12963` → after: `L13117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13117) · [Before (L12963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12963)

```diff
-                       Su(bb[-fb[105]] += bb[fb[6]] * fb[26], bb[fb[8]] |= bb[-fb[105]] << bb[fb[19]], bb[fb[19]] += (bb[-fb[105]] & fb[27]) > fb[28] ? fb[29] : fb[30]);
+                       KJ(dd[Vd[83]] += dd[-Vd[82]] * Vd[35], dd[Vd[53]] |= dd[Vd[83]] << dd[-Vd[84]], dd[-Vd[84]] += (dd[Vd[83]] & Vd[38]) > Vd[39] ? Vd[40] : Vd[41]);
```

#### 1716. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12965-L12968` → after: `L13119-L13122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13119-L13122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13119-L13122) · [Before (L12965-L12968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12965-L12968)

```diff
-                         Su(bb[fb[31]].push(bb[fb[8]] & fb[11]), bb[fb[8]] >>= fb[3], bb[fb[19]] -= fb[3])
-                       } while (bb[fb[19]] > fb[21]);
-                       bb[-fb[105]] = -fb[2]
-                     } return bb[-fb[105]] > -fb[2] && bb[fb[31]].push((bb[fb[8]] | bb[-fb[105]] << bb[fb[19]]) & fb[11]), Tb(bb[fb[31]])
+                         KJ(dd[-Vd[51]].push(dd[Vd[53]] & Vd[11]), dd[Vd[53]] >>= Vd[3], dd[-Vd[84]] -= Vd[3])
+                       } while (dd[-Vd[84]] > Vd[27]);
+                       dd[Vd[83]] = -Vd[2]
+                     } return dd[Vd[83]] > -Vd[2] && dd[-Vd[51]].push((dd[Vd[53]] | dd[Vd[83]] << dd[-Vd[84]]) & Vd[11]), Hd(dd[-Vd[51]])
```

#### 1717. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12970-L12977` → after: `L13124-L13133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13124-L13133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13124-L13133) · [Before (L12970-L12977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12970-L12977)

```diff
-             }
-             ub(170) + fb[45] in Qb && (module.exports = async (bb = (...bb) => {
-               function ub(bb) {
-                 var ub, hb, Bb, Ob, Gb, Ub, Lb, Yb = '^+./KtEg~?:[DuI"`ec7L{NX;FQ(>TBk_!l25Ah8<J)|q3v4@rb,Cw]ROnU0dSWy9fi*GY&j#sHZp6zmM$x}Vo%P1=a';
-                 for (Su(ub = "" + (bb || ""), hb = ub.length, Bb = [], Ob = fb[1], Gb = fb[1], Ub = -fb[2]), Lb = fb[1]; Lb < hb; Lb++) {
-                   var Sb = Yb.indexOf(ub[Lb]);
-                   if (Sb !== -fb[2])
-                     if (Ub < fb[1]) Ub = Sb;
+             } [
+               [dd[Vd[85]], dd[Vd[20]]], dd[Vd[4]]
+             ] = td;
+             const kd = dd[Vd[20]] - Math[Jd(Vd[82])](dd[Vd[85]]);
+             if (kd <= Vd[1]) return Vd[1];
+             if (kd < Vd[2]) {
+               function pd(...dd) {
+                 for (KJ(dd[Vd[12]] = Vd[2], dd[Vd[2]] = 'Q9,]^}+a?3sr(EH=A$>l7LU5jicG_w#{b4MTWBKJv)IoYCX1*u.nmVeZ`!d~|NO[/x8:y2qPfDgpRtk<Sh"0z@&6%;F', dd[Vd[86]] = "" + (dd[Vd[1]] || ""), dd[Vd[88]] = dd[Vd[86]].length, dd[Vd[22]] = [], dd[-Vd[87]] = Vd[1], dd[Vd[25]] = Vd[1], dd … [truncated]
+                   if (dd[Vd[6]] = dd[Vd[2]].indexOf(dd[Vd[86]][dd[-Vd[10]]]), dd[Vd[6]] !== -Vd[2])
+                     if (dd[Vd[89]] < Vd[1]) dd[Vd[89]] = dd[Vd[6]];
```

#### 1718. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12979` → after: `L13135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13135) · [Before (L12979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12979)

```diff
-                       Su(Ub += Sb * fb[26], Ob |= Ub << Gb, Gb += (Ub & fb[27]) > fb[28] ? fb[29] : fb[30]);
+                       KJ(dd[Vd[89]] += dd[Vd[6]] * Vd[35], dd[-Vd[87]] |= dd[Vd[89]] << dd[Vd[25]], dd[Vd[25]] += (dd[Vd[89]] & Vd[38]) > Vd[39] ? Vd[40] : Vd[41]);
```

#### 1719. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12981-L12986` → after: `L13137-L13140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13137-L13140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13137-L13140) · [Before (L12981-L12986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12981-L12986)

```diff
-                         Su(Bb.push(Ob & fb[11]), Ob >>= fb[3], Gb -= fb[3])
-                       } while (Gb > fb[21]);
-                       Ub = -fb[2]
-                     }
-                 }
-                 return Ub > -fb[2] && Bb.push((Ob | Ub << Gb) & fb[11]), Tb(Bb)
+                         KJ(dd[Vd[22]].push(dd[-Vd[87]] & Vd[11]), dd[-Vd[87]] >>= Vd[3], dd[Vd[25]] -= Vd[3])
+                       } while (dd[Vd[25]] > Vd[27]);
+                       dd[Vd[89]] = -Vd[2]
+                     } return dd[Vd[89]] > -Vd[2] && dd[Vd[22]].push((dd[-Vd[87]] | dd[Vd[89]] << dd[Vd[25]]) & Vd[11]), Hd(dd[Vd[22]])
```

#### 1720. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12990` → after: `L13144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13144) · [Before (L12990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12990)

```diff
-                 return bb[fb[12]] = fb[2], typeof Nb[bb[fb[1]]] === fb[13] ? Nb[bb[fb[1]]] = ub(sb[bb[fb[1]]]) : Nb[bb[fb[1]]]
+                 return dd[Vd[12]] = Vd[2], typeof nd[dd[Vd[1]]] === Vd[18] ? nd[dd[Vd[1]]] = pd(Ud[dd[Vd[1]]]) : nd[dd[Vd[1]]]
```

#### 1721. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12992-L12997` → after: `L13146-L13155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13146-L13155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13146-L13155) · [Before (L12992-L12997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12992-L12997)

```diff
-               throw bb[fb[12]] = fb[1], new Error(hb(171))
-             }) => {
-               function ub(...bb) {
-                 for (Su(bb[fb[12]] = fb[2], bb[fb[5]] = '<HrDCfQ4i7j_yTA1Eo=cz>kp(FRuJ3UP#?+6LMv]Z05,9K|B^:n`bsq@*g!XWIhS/%GYa)2d;{.emwl8[~Nt$&OV}"x', bb[fb[17]] = "" + (bb[fb[1]] || ""), bb[fb[16]] = bb[fb[17]].length, bb[fb[15]] = [], bb[fb[37]] = fb[1], bb[fb[45]] = fb[1], bb[ … [truncated]
-                   if (bb[fb[106]] = bb[fb[5]].indexOf(bb[fb[17]][bb[fb[56]]]), bb[fb[106]] !== -fb[2])
-                     if (bb[fb[7]] < fb[1]) bb[fb[7]] = bb[fb[106]];
+               return dd[Vd[4]][Nd(159)] * kd
+             }
+             return dd[Vd[4]][Jd(Vd[97])]
+           },
+           [Wd(Vd[327])]: function(...dd) {
+             function Jd(dd) {
+               return typeof nd[dd] === Vd[18] ? nd[dd] = function(...dd) {
+                 for (KJ(dd[Vd[12]] = Vd[2], dd[Vd[2]] = 'xipOgdK=Nq]M`2~5|#7&,{Lwmv3"Jb0AB}@^(h6CrYfWu!ok1D4EQ$c;GtjXR[>ISe9+%V*:sa)P/nH?lyT<z8_ZU.F', dd[Vd[14]] = "" + (dd[Vd[1]] || ""), dd[Vd[4]] = dd[Vd[14]].length, dd[Vd[46]] = [], dd[Vd[90]] = Vd[1], dd[Vd[25]] = Vd[1], dd[V … [truncated]
+                   if (dd[Vd[6]] = dd[Vd[2]].indexOf(dd[Vd[14]][dd[Vd[31]]]), dd[Vd[6]] !== -Vd[2])
+                     if (dd[Vd[7]] < Vd[1]) dd[Vd[7]] = dd[Vd[6]];
```

#### 1722. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L12999` → after: `L13157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13157) · [Before (L12999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L12999)

```diff
-                       Su(bb[fb[7]] += bb[fb[106]] * fb[26], bb[fb[37]] |= bb[fb[7]] << bb[fb[45]], bb[fb[45]] += (bb[fb[7]] & fb[27]) > fb[28] ? fb[29] : fb[30]);
+                       KJ(dd[Vd[7]] += dd[Vd[6]] * Vd[35], dd[Vd[90]] |= dd[Vd[7]] << dd[Vd[25]], dd[Vd[25]] += (dd[Vd[7]] & Vd[38]) > Vd[39] ? Vd[40] : Vd[41]);
```

#### 1723. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L13001-L13002` → after: `L13159-L13160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13159-L13160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13159-L13160) · [Before (L13001-L13002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L13001-L13002)

```diff
-                         Su(bb[fb[15]].push(bb[fb[37]] & fb[11]), bb[fb[37]] >>= fb[3], bb[fb[45]] -= fb[3])
-                       } while (bb[fb[45]] > fb[21]);
+                         KJ(dd[Vd[46]].push(dd[Vd[90]] & Vd[11]), dd[Vd[90]] >>= Vd[3], dd[Vd[25]] -= Vd[3])
+                       } while (dd[Vd[25]] > Vd[27]);
```

#### 1724. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L13004-L13005` → after: `L13162-L13169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13162-L13169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13162-L13169) · [Before (L13004-L13005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L13004-L13005)

```diff
-                     } return bb[fb[7]] > -fb[2] && bb[fb[15]].push((bb[fb[37]] | bb[fb[7]] << bb[fb[45]]) & fb[11]), Tb(bb[fb[15]])
-               }
+                     } return dd[Vd[7]] > -Vd[2] && dd[Vd[46]].push((dd[Vd[90]] | dd[Vd[7]] << dd[Vd[25]]) & Vd[11]), Hd(dd[Vd[46]])
+               }(Ud[dd]) : nd[dd]
+             }
+             Jd(162) + "F" in Ad && function() {
+               var dd = function(...dd) {
+                 function kd(dd) {
+                   return gd(Pd(od(dd)))
+                 }
```

#### 1725. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L13017-L13026` → after: `L13172-L13328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13172-L13328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13172-L13328) · [Before (L13017-L13026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L13017-L13026)

```diff
-                   for (Su(bb[fb[12]] = fb[2], bb[fb[5]] = ';ZAstmHlCO]S~G[pL+xwzqT!^R5?>NP7J_8kgiK$#y2W*(<=cXD:Mv/UYVF&`4rab|f"h}%Bo6{.)ed3n@Q190IjuE,', bb[fb[17]] = "" + (bb[fb[1]] || ""), bb[fb[16]] = bb[fb[17]].length, bb[fb[31]] = [], bb[fb[107]] = fb[1], bb[fb[45]] = fb[1],  … [truncated]
-                     if (bb[fb[36]] = bb[fb[5]].indexOf(bb[fb[17]][bb[fb[56]]]), bb[fb[36]] !== -fb[2])
-                       if (bb[fb[7]] < fb[1]) bb[fb[7]] = bb[fb[36]];
-                       else {
-                         Su(bb[fb[7]] += bb[fb[36]] * fb[26], bb[fb[107]] |= bb[fb[7]] << bb[fb[45]], bb[fb[45]] += (bb[fb[7]] & fb[27]) > fb[28] ? fb[29] : fb[30]);
-                         do {
-                           Su(bb[fb[31]].push(bb[fb[107]] & fb[11]), bb[fb[107]] >>= fb[3], bb[fb[45]] -= fb[3])
-                         } while (bb[fb[45]] > fb[21]);
-                         bb[fb[7]] = -fb[2]
-                       } return bb[fb[7]] > -fb[2] && bb[fb[31]].push((bb[fb[107]] | bb[fb[7]] << bb[fb[45]]) & fb[11]), Tb(bb[fb[31]])
+                   return dd[Vd[12]] = Vd[14], gd(Zd(od(dd[Vd[1]]), od(dd[Vd[2]])))
+                 }
+ 
+                 function Nd(dd, Jd) {
+                   return Cd(Zd(od(dd), od(Jd)))
+                 }
+ 
+                 function Wd(...dd) {
+                   return dd[Vd[12]] = Vd[30], Kd(Zd(od(dd[Vd[1]]), od(dd[Vd[2]])), dd[Vd[14]])
+                 }
+ 
+                 function Pd(...dd) {
+                   return dd[Vd[12]] = Vd[2], Qd(qd(ld(dd[Vd[1]]), dd[Vd[1]].length * Vd[3]))
+                 }
+ 
+                 function Zd(dd, Jd) {
+ ... (141 more added lines; see GitHub link above)
```

#### 1726. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L13030` → after: `L13332-L13349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13332-L13349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13332-L13349) · [Before (L13030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L13030)

```diff
-                   return bb[fb[12]] = fb[2], typeof Nb[bb[fb[1]]] === fb[13] ? Nb[bb[fb[1]]] = Bb(sb[bb[fb[1]]]) : Nb[bb[fb[1]]]
+                   var kd, pd, Nd, Wd, Pd, Zd, gd, Cd, Kd, od, ld, Qd;
+                   for (KJ(Jd[Vd[12]] = Vd[14], Jd[Vd[14]] = new Array(Vd[285], -Vd[286], Vd[287], -Vd[288], Vd[289], -Vd[290], Vd[291], Vd[292]), Jd[Vd[30]] = new Array(Vd[108])), KJ(Jd[Vd[1]][Jd[Vd[2]] >> Vd[53]] |= Vd[63] << Vd[107] - Jd[Vd[2]] % Vd[93], Jd[Vd[1]][(Jd[Vd[2]] +  … [truncated]
+                     for (KJ(kd = Jd[Vd[14]][Vd[1]], pd = Jd[Vd[14]][Vd[2]], Nd = Jd[Vd[14]][Vd[14]], Wd = Jd[Vd[14]][Vd[30]], Pd = Jd[Vd[14]][Vd[22]], Zd = Jd[Vd[14]][Vd[53]], gd = Jd[Vd[14]][Vd[25]], Cd = Jd[Vd[14]][Vd[27]]), od = Vd[1]; od < Vd[108]; od++) KJ(od < Vd[95] ? Jd[V … [truncated]
+                     KJ(Jd[Vd[14]][Vd[1]] = Bd(kd, Jd[Vd[14]][Vd[1]]), Jd[Vd[14]][Vd[2]] = Bd(pd, Jd[Vd[14]][Vd[2]]), Jd[Vd[14]][Vd[14]] = Bd(Nd, Jd[Vd[14]][Vd[14]]), Jd[Vd[14]][Vd[30]] = Bd(Wd, Jd[Vd[14]][Vd[30]]), Jd[Vd[14]][Vd[22]] = Bd(Pd, Jd[Vd[14]][Vd[22]]), Jd[Vd[14]][Vd[53 … [truncated]
+                   }
+                   return Jd[Vd[14]]
+                 }
+ 
+                 function Bd(...dd) {
+                   return KJ(dd[Vd[12]] = Vd[14], dd[-Vd[110]] = (dd[Vd[1]] & Vd[109]) + (dd[Vd[2]] & Vd[109]), dd[Vd[30]] = (dd[Vd[1]] >> Vd[95]) + (dd[Vd[2]] >> Vd[95]) + (dd[-Vd[110]] >> Vd[95])), dd[Vd[30]] << Vd[95] | dd[-Vd[110]] & Vd[109]
+                 }
+                 return KJ(dd[Vd[12]] = Vd[1], dd[Vd[65]] = Vd[1], dd[-Vd[102]] = ""), dd[Vd[4]] = new Array(Vd[221], Vd[222], -Vd[223], -Vd[224], Vd[225], Vd[226], -Vd[227], -Vd[228], -Vd[229], Vd[230], Vd[231], Vd[232], Vd[233], -Vd[234], -Vd[235], -Vd[236], -Vd[237], -Vd[238],  … [truncated]
+                   hex: kd,
+                   b64: Nd,
+                   any: Wd,
+                   hex_hmac: pd,
+ ... (2 more added lines; see GitHub link above)
```

#### 1727. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L13032-L13035` → after: `L13351-L13354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13351-L13354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13351-L13354) · [Before (L13032-L13035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L13032-L13035)

```diff
-                 return hb === await bb() ? Ob(fb[139]) + fb[168] : ""
-               })(), fb[87]
-             }), [
-               [bb[fb[17]], bb[fb[4]], bb[fb[0]]], bb[-fb[115]]
+               }();
+               console.log(dd)
+             }(), [
+               [dd[Vd[33]], dd[Vd[2]], dd[Vd[14]]], dd[Vd[299]]
```

#### 1728. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L13037-L13038` → after: `L13356-L13357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13356-L13357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13356-L13357) · [Before (L13037-L13038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L13037-L13038)

```diff
-             const hb = bb[fb[17]][ub(fb[109])][ub(fb[24]) + ub(178) + ub(fb[212]) + ub(180)](bb[fb[0]]);
-             return hb === fb[32] ? bb[fb[17]][ub(fb[109])][ub(fb[41]) + ub(182) + ub(fb[311]) + ub(184)](bb[fb[4]], ub(fb[110]) + ub(fb[111]) + ub(fb[112])) : hb[ub(fb[110]) + ub(fb[111]) + ub(fb[112])]
+             const kd = dd[Vd[33]][Jd(Vd[111])][Jd(179) + Jd(Vd[8]) + Jd(181) + Vd[116]](dd[Vd[14]]);
+             return kd === Vd[74] ? dd[Vd[33]][Jd(Vd[111])][Jd(Vd[130]) + Jd(183) + Jd(184)](dd[Vd[2]], Jd(Vd[112]) + Jd(Vd[113]) + Jd(Vd[114])) : kd[Jd(Vd[112]) + Jd(Vd[113]) + Jd(Vd[114])]
```

#### 1729. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L13042-L13045` → after: `L13361-L13364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13361-L13364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13361-L13364) · [Before (L13042-L13045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L13042-L13045)

```diff
-               return typeof Nb[bb] === fb[13] ? Nb[bb] = function(...bb) {
-                 for (Su(bb[fb[12]] = fb[2], bb[-fb[67]] = 'b5x:#DOFGz;Zw!`^VkS$N]PB1rUEn6oe(ly}?/3&p~29jX+t>AgIf."Wisv4uh{=Q@R0%*[qYT_,c8J)mHMK|CaLd<7', bb[-fb[113]] = "" + (bb[fb[1]] || ""), bb[fb[114]] = bb[-fb[113]].length, bb[fb[15]] = [], bb[-fb[115]] = fb[1], bb[fb[22]] = f … [truncated]
-                   if (bb[fb[36]] = bb[-fb[67]].indexOf(bb[-fb[113]][bb[fb[56]]]), bb[fb[36]] !== -fb[2])
-                     if (bb[fb[21]] < fb[1]) bb[fb[21]] = bb[fb[36]];
+               return typeof nd[dd] === Vd[18] ? nd[dd] = function(...dd) {
+                 for (KJ(dd[Vd[12]] = Vd[2], dd[Vd[33]] = '[N|"byxl51=3AV`qz#LQwd(W;&@7XM>28GjDeOP_^+0C*pa$6c4B<g9KRH{i/tsFkr}E]JSZUIvo?!~T:f)u%h,.Ynm', dd[Vd[20]] = "" + (dd[Vd[1]] || ""), dd[Vd[4]] = dd[Vd[20]].length, dd[Vd[22]] = [], dd[-Vd[115]] = Vd[1], dd[Vd[25]] = Vd[1], d … [truncated]
+                   if (dd[Vd[43]] = dd[Vd[33]].indexOf(dd[Vd[20]][dd[Vd[3]]]), dd[Vd[43]] !== -Vd[2])
+                     if (dd[Vd[27]] < Vd[1]) dd[Vd[27]] = dd[Vd[43]];
```

#### 1730. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L13047` → after: `L13366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13366) · [Before (L13047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L13047)

```diff
-                       Su(bb[fb[21]] += bb[fb[36]] * fb[26], bb[-fb[115]] |= bb[fb[21]] << bb[fb[22]], bb[fb[22]] += (bb[fb[21]] & fb[27]) > fb[28] ? fb[29] : fb[30]);
+                       KJ(dd[Vd[27]] += dd[Vd[43]] * Vd[35], dd[-Vd[115]] |= dd[Vd[27]] << dd[Vd[25]], dd[Vd[25]] += (dd[Vd[27]] & Vd[38]) > Vd[39] ? Vd[40] : Vd[41]);
```

#### 1731. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L13049-L13052` → after: `L13368-L13371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13368-L13371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13368-L13371) · [Before (L13049-L13052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L13049-L13052)

```diff
-                         Su(bb[fb[15]].push(bb[-fb[115]] & fb[11]), bb[-fb[115]] >>= fb[3], bb[fb[22]] -= fb[3])
-                       } while (bb[fb[22]] > fb[21]);
-                       bb[fb[21]] = -fb[2]
-                     } return bb[fb[21]] > -fb[2] && bb[fb[15]].push((bb[-fb[115]] | bb[fb[21]] << bb[fb[22]]) & fb[11]), Tb(bb[fb[15]])
+                         KJ(dd[Vd[22]].push(dd[-Vd[115]] & Vd[11]), dd[-Vd[115]] >>= Vd[3], dd[Vd[25]] -= Vd[3])
+                       } while (dd[Vd[25]] > Vd[27]);
+                       dd[Vd[27]] = -Vd[2]
+                     } return dd[Vd[27]] > -Vd[2] && dd[Vd[22]].push((dd[-Vd[115]] | dd[Vd[27]] << dd[Vd[25]]) & Vd[11]), Hd(dd[Vd[22]])
```

#### 1732. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L13054-L13056` → after: `L13373-L13377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13373-L13377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13373-L13377) · [Before (L13054-L13056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L13054-L13056)

```diff
-             } [bb[fb[5]], bb[fb[17]], bb[fb[4]]] = Fb;
-             const hb = bb[fb[5]][Gb(fb[116])][ub(fb[210]) + ub(190) + ub(191) + ub(fb[117])](bb[fb[4]]);
-             return hb === fb[32] ? bb[fb[5]][ub(193)][ub(fb[211]) + ub(195) + ub(196) + ub(197)](bb[fb[17]], ub(fb[118]) + ub(fb[119])) : hb[ub(fb[118]) + ub(fb[119])]
+             } [
+               [dd[Vd[33]], dd[Vd[2]], dd[Vd[14]]], dd[Vd[46]]
+             ] = td;
+             const kd = dd[Vd[33]][Jd(Vd[117])][Jd(Vd[382]) + Jd(Vd[415]) + Jd(Vd[34]) + Vd[116]](dd[Vd[14]]);
+             return kd === Vd[74] ? dd[Vd[33]][Jd(Vd[117])][Jd(Vd[72]) + Jd(Vd[125]) + Jd(195) + Jd(Vd[155])](dd[Vd[2]], Jd(Vd[118]) + Jd(Vd[119])) : kd[Jd(Vd[118]) + Jd(Vd[119])]
```

#### 1733. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L13058` → after: `L13379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13379) · [Before (L13058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L13058)

```diff
-         }), ub === Gb(200) + Gb(201)) {
+         }), Jd === Wd(Vd[322]) + Wd(200)) {
```

#### 1734. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L13060-L13062` → after: `L13381-L13383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13381-L13383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13381-L13383) · [Before (L13060-L13062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L13060-L13062)

```diff
-           for (Su(bb[fb[12]] = fb[2], bb[-fb[120]] = 't"BC$:3W(F/)?_frPkzd>uAbS,oUGD*{+~EJ%@Yisl;806vN`wg&pK9<4#2enj|]X=xQLhq1Omy5I^c.}THZ7!aM[VR', bb[fb[17]] = "" + (bb[fb[1]] || ""), bb[fb[4]] = bb[fb[17]].length, bb[fb[31]] = [], bb[-fb[121]] = fb[1], bb[fb[19]] = fb[1], bb[fb … [truncated]
-             if (bb[fb[36]] = bb[-fb[120]].indexOf(bb[fb[17]][bb[fb[58]]]), bb[fb[36]] !== -fb[2])
-               if (bb[fb[7]] < fb[1]) bb[fb[7]] = bb[fb[36]];
+           for (KJ(dd[Vd[12]] = Vd[2], dd[Vd[33]] = 'ABb:RGfEneoK7H9wJut~U$k(ySr[v%{Fz=@X?*;Y4jP|Z&pCIcmQ.iqlh^x8g1T`!sL+ONMWa}05>D2Vd6",#)/<]3_', dd[Vd[104]] = "" + (dd[Vd[1]] || ""), dd[Vd[4]] = dd[Vd[104]].length, dd[Vd[46]] = [], dd[Vd[53]] = Vd[1], dd[Vd[37]] = Vd[1], dd[Vd[2 … [truncated]
+             if (dd[Vd[43]] = dd[Vd[33]].indexOf(dd[Vd[104]][dd[Vd[31]]]), dd[Vd[43]] !== -Vd[2])
+               if (dd[Vd[27]] < Vd[1]) dd[Vd[27]] = dd[Vd[43]];
```

#### 1735. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L13064` → after: `L13385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13385) · [Before (L13064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L13064)

```diff
-                 Su(bb[fb[7]] += bb[fb[36]] * fb[26], bb[-fb[121]] |= bb[fb[7]] << bb[fb[19]], bb[fb[19]] += (bb[fb[7]] & fb[27]) > fb[28] ? fb[29] : fb[30]);
+                 KJ(dd[Vd[27]] += dd[Vd[43]] * Vd[35], dd[Vd[53]] |= dd[Vd[27]] << dd[Vd[37]], dd[Vd[37]] += (dd[Vd[27]] & Vd[38]) > Vd[39] ? Vd[40] : Vd[41]);
```

#### 1736. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L13066-L13069` → after: `L13387-L13390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13387-L13390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13387-L13390) · [Before (L13066-L13069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L13066-L13069)

```diff
-                   Su(bb[fb[31]].push(bb[-fb[121]] & fb[11]), bb[-fb[121]] >>= fb[3], bb[fb[19]] -= fb[3])
-                 } while (bb[fb[19]] > fb[21]);
-                 bb[fb[7]] = -fb[2]
-               } return bb[fb[7]] > -fb[2] && bb[fb[31]].push((bb[-fb[121]] | bb[fb[7]] << bb[fb[19]]) & fb[11]), Tb(bb[fb[31]])
+                   KJ(dd[Vd[46]].push(dd[Vd[53]] & Vd[11]), dd[Vd[53]] >>= Vd[3], dd[Vd[37]] -= Vd[3])
+                 } while (dd[Vd[37]] > Vd[27]);
+                 dd[Vd[27]] = -Vd[2]
+               } return dd[Vd[27]] > -Vd[2] && dd[Vd[46]].push((dd[Vd[53]] | dd[Vd[27]] << dd[Vd[37]]) & Vd[11]), Hd(dd[Vd[46]])
```

#### 1737. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L13073` → after: `L13394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13394) · [Before (L13073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L13073)

```diff
-           return bb[fb[12]] = fb[2], typeof Nb[bb[fb[1]]] === fb[13] ? Nb[bb[fb[1]]] = Sb(sb[bb[fb[1]]]) : Nb[bb[fb[1]]]
+           return dd[Vd[12]] = Vd[2], typeof nd[dd[Vd[1]]] === Vd[18] ? nd[dd[Vd[1]]] = Cd(Ud[dd[Vd[1]]]) : nd[dd[Vd[1]]]
```

#### 1738. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L13076-L13091` → after: `L13397-L13413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13397-L13413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13397-L13413) · [Before (L13076-L13091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L13076-L13091)

```diff
-         function Hb(...bb) {
-           bb[fb[12]] = fb[1]
-         }
-         ab(fb[140]) + fb[48] in Qb && Hb(), Fb = []
-       }
-       if (ub === Gb(fb[137]) + Gb(204)) {
-         function wb(...ub) {
-           var hb;
-           if (ub[fb[12]] = fb[1], Gb(206) + "9" in Qb && function(...bb) {
-               bb[fb[12]] = fb[1]
-             }(), Su(hb = function(...ub) {
-               return function(...bb) {
-                 return bb[fb[12]] = fb[2], typeof Nb[bb[fb[1]]] === fb[13] ? Nb[bb[fb[1]]] = function(...bb) {
-                   for (Su(bb[fb[12]] = fb[2], bb[fb[2]] = 'AN#<`v%z!w+@ai2).MXj4Pc,_8YdxlrI(o;"Q?5/*=J~p}1yDU>:tOmbhnZH&K$Bg76Ts[uW9CSVF0kf3|q{]R^GELe', bb[fb[127]] = "" + (bb[fb[1]] || ""), bb[fb[128]] = bb[fb[127]].length, bb[-fb[34]] = [], bb[fb[37]] = fb[1], bb[fb[129]] = fb[ … [truncated]
-                     if (bb[fb[6]] = bb[fb[2]].indexOf(bb[fb[127]][bb[fb[3]]]), bb[fb[6]] !== -fb[2])
-                       if (bb[fb[7]] < fb[1]) bb[fb[7]] = bb[fb[6]];
+         function od() {
+           ! function(dd) {
+             var Jd, kd, pd, Nd = String.fromCharCode;
+ 
+             function Wd(...dd) {
+               for (KJ(dd[Vd[12]] = Vd[2], dd[Vd[33]] = [], dd[-Vd[22]] = Vd[1], dd[-Vd[89]] = dd[Vd[1]].length, dd[-Vd[120]] = Vd[19], dd[Vd[53]] = Vd[19]); dd[-Vd[22]] < dd[-Vd[89]];) KJ(dd[-Vd[120]] = dd[Vd[1]].charCodeAt(dd[-Vd[22]]++), dd[-Vd[120]] >= Vd[121] && dd[-Vd[120]]  … [truncated]
+               return dd[Vd[33]]
+             }
+ 
+             function Pd(...dd) {
+               if (dd[Vd[12]] = Vd[2], dd[Vd[1]] >= Vd[121] && dd[Vd[1]] <= Vd[126]) {
+                 function Jd(dd) {
+                   var Jd, kd, pd, Nd, Wd, Pd, Zd;
+                   for (KJ(Jd = "" + (dd || ""), kd = Jd.length, pd = [], Nd = Vd[1], Wd = Vd[1], Pd = -Vd[2]), Zd = Vd[1]; Zd < kd; Zd++) {
+                     var gd = 'Aa,lw@VmUM#F<W&qv/4*;1_h:X0P$37ec.tTp=fgybIr^`H">N[+Z~RE2({|uG%nBODzKi}xCQj5d6]8Ys!kJ?9)oLS'.indexOf(Jd[Zd]);
+                     if (gd !== -Vd[2])
+ ... (1 more added lines; see GitHub link above)
```

#### 1739. `bundles/bloxd.io/chunks/js/113.js` (Changed code · before: `L13093` → after: `L13415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787R13415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-475979b6c4836872a745b376c7ba5c2391e5db3cb95c64f0b9c38878f2f95787) · [After (L13415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/113.js#L13415) · [Before (L13093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/113.js#L13093)

```diff
-                         Su(bb[fb[7]] += bb[fb[6]] * fb[26], bb[fb[37]] |= bb[fb[7]] << bb[fb[129]], bb[fb[129]] += (bb[fb[7]] & fb[27]) > fb[28] ? fb[29] : fb[30]);
+                         KJ(Pd += gd * Vd[35], Nd |= Pd << Wd, Wd += (Pd & Vd[38]) > Vd[39] ? Vd[40] : Vd[41]);
```
