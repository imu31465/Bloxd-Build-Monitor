# Changed — Bundle Modifications Report (Part 111 / 132)

- **Updated at**: `2026-11-21T10:00 JST`
- **Part**: `111 / 132` (**430** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 110](part-110.md) · [Part 112 →](part-112.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/controller.js` (halsg.2bd74967 → x17cru.159bd7ce · continued)

- **File**: `bundles/bloxd.io/chunks/js/controller.js` (865 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2)

#### 615. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6708-L6710` → after: `L6708-L6710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6708-L6710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L6708-L6710) · [Before (L6708-L6710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L6708-L6710)

```diff
-         lookSensitivityX: lb(wb.gb),
-         lookSensitivityY: lb(wb.gb),
-         aimLookSensitivity: lb(wb.i),
+         lookSensitivityX: Id(ld.ob),
+         lookSensitivityY: Id(ld.ob),
+         aimLookSensitivity: Id(ld.l),
```

#### 616. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6713-L6715` → after: `L6713-L6715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6713-L6715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L6713-L6715) · [Before (L6713-L6715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L6713-L6715)

```diff
-         lookCurve: Wb(Yb.P),
-         lookDeadzone: lb(wb.y),
-         moveDeadzone: lb(wb.y),
+         lookCurve: vd(gd.N),
+         lookDeadzone: Id(ld.A),
+         moveDeadzone: Id(ld.A),
```

#### 617. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6724` → after: `L6724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L6724) · [Before (L6724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L6724)

```diff
-         cursorSpeed: lb(wb.w),
+         cursorSpeed: Id(ld.x),
```

#### 618. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6726` → after: `L6726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L6726) · [Before (L6726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L6726)

```diff
-         buttonRepeat: Wb(Yb.p),
+         buttonRepeat: vd(gd.q),
```

#### 619. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6735` → after: `L6735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L6735) · [Before (L6735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L6735)

```diff
-         gyroSensitivity: lb(wb.O),
+         gyroSensitivity: Id(ld.S),
```

#### 620. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6737` → after: `L6737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L6737) · [Before (L6737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L6737)

```diff
-         gyroButton: Wb(Yb.X),
+         gyroButton: vd(gd.W),
```

#### 621. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6762` → after: `L6762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L6762) · [Before (L6762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L6762)

```diff
-         for (const [hb, Bb] of Object.entries(bb)) Object.prototype.hasOwnProperty.call(Sb.c, hb) && Ab(Yb.X, Bb) && (ub[hb] = Bb);
+         for (const [kd, pd] of Object.entries(dd)) Object.prototype.hasOwnProperty.call(Cd.e, kd) && Rd(gd.W, pd) && (Jd[kd] = pd);
```

#### 622. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6768` → after: `L6768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L6768) · [Before (L6768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L6768)

```diff
-         0 !== Object.keys(ub).length ? Ub.j.setItem(Xb, ub) : Ub.j.removeItem(Xb)
+         0 !== Object.keys(Jd).length ? Pd.i.setItem(Ld, Jd) : Pd.i.removeItem(Ld)
```

#### 623. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6771` → after: `L6771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L6771) · [Before (L6771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L6771)

```diff
-         const bb = Ub.j.getItem(Xb),
+         const dd = Pd.i.getItem(Ld),
```

#### 624. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6773` → after: `L6773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L6773) · [Before (L6773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L6773)

```diff
-             const ub = "object" === typeof bb && null !== bb ? bb : {},
+             const Jd = "object" === typeof dd && null !== dd ? dd : {},
```

#### 625. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6783` → after: `L6783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L6783) · [Before (L6783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L6783)

```diff
-             return Bb.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${Bb.join(", ")}`), hb
+             return pd.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${pd.join(", ")}`), kd
```

#### 626. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6808` → after: `L6808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L6808) · [Before (L6808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L6808)

```diff
-         return "auto" !== hb ? hb : null !== (bb = null === (ub = ab.g.getActivePad()) || void 0 === ub ? void 0 : ub.family) && void 0 !== bb ? bb : "xbox"
+         return "auto" !== kd ? kd : null !== (dd = null === (Jd = Kd.c.getActivePad()) || void 0 === Jd ? void 0 : Jd.family) && void 0 !== dd ? dd : "xbox"
```

#### 627. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6819` → after: `L6819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L6819) · [Before (L6819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L6819)

```diff
-           Ob.i.vp(Hb.f, Db), pb.some((ub => bb[ub] !== Db[ub])) && Ob.i.vp(Hb.e, Db)
+           Nd.j.nO(od.h, Md), Od.some((Jd => dd[Jd] !== Md[Jd])) && Nd.j.nO(od.f, Md)
```

#### 628. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6824` → after: `L6824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L6824) · [Before (L6824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L6824)

```diff
-         return (0, Gb.h)(Hb.f, ub), bb
+         return (0, Wd.h)(od.h, Jd), dd
```

#### 629. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6827` → after: `L6827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L6827) · [Before (L6827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L6827)

```diff
-   8368: (bb, ub, hb) => {
+   8543: (dd, Jd, kd) => {
```

#### 630. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6829` → after: `L6829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L6829) · [Before (L6829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L6829)

```diff
-       d: () => Ob
+       b: () => Nd
```

#### 631. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6834` → after: `L6834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L6834) · [Before (L6834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L6834)

```diff
-   7830: (bb, ub, hb) => {
+   8016: (dd, Jd, kd) => {
```

#### 632. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6836-L6837` → after: `L6836-L6837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6836-L6837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L6836-L6837) · [Before (L6836-L6837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L6836-L6837)

```diff
-       c: () => pb.d,
-       g: () => Kb
+       b: () => Od.d,
+       c: () => Gd
```

#### 633. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6839-L6840` → after: `L6839-L6840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6839-L6840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L6839-L6840) · [Before (L6839-L6840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L6839-L6840)

```diff
-     var Bb = hb(7836),
-       Ob = hb(7841);
+     var pd = kd(8020),
+       Nd = kd(8026);
```

#### 634. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6874` → after: `L6874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L6874) · [Before (L6874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L6874)

```diff
-         return null !== (hb = bb && (null === (Bb = Object.getOwnPropertyDescriptor(bb, ub)) || void 0 === Bb ? void 0 : Bb.get)) && void 0 !== hb ? hb : null
+         return null !== (kd = dd && (null === (pd = Object.getOwnPropertyDescriptor(dd, Jd)) || void 0 === pd ? void 0 : pd.get)) && void 0 !== kd ? kd : null
```

#### 635. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6878` → after: `L6878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L6878) · [Before (L6878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L6878)

```diff
-         return "string" === typeof ub ? ub : void 0
+         return "string" === typeof Jd ? Jd : void 0
```

#### 636. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6910-L6911` → after: `L6910-L6911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6910-L6911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L6910-L6911) · [Before (L6910-L6911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L6910-L6911)

```diff
-     var wb = hb(1307),
-       Zb = hb(1313);
+     var ld = kd(1426),
+       Qd = kd(1429);
```

#### 637. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6916` → after: `L6916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L6916) · [Before (L6916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L6916)

```diff
-     var pb = hb(1895);
+     var Od = kd(1994);
```

#### 638. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6919-L6920` → after: `L6919-L6920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6919-L6920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L6919-L6920) · [Before (L6919-L6920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L6919-L6920)

```diff
-         const ub = new Array(Bb.U).fill(0);
-         for (let hb = 0; hb < Bb.U && hb < bb.buttons.length; hb++) {
+         const Jd = new Array(pd.V).fill(0);
+         for (let kd = 0; kd < pd.V && kd < dd.buttons.length; kd++) {
```

#### 639. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6922` → after: `L6922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L6922) · [Before (L6922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L6922)

```diff
-           ub[hb] = Ob.pressed && !(0, Bb.M)(hb) ? Math.max(Ob.value, Bb.x) : Ob.value
+           Jd[kd] = Nd.pressed && !(0, pd.L)(kd) ? Math.max(Nd.value, pd.z) : Nd.value
```

#### 640. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6929-L6930` → after: `L6929-L6930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6929-L6930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L6929-L6930) · [Before (L6929-L6930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L6929-L6930)

```diff
-           x: null !== (hb = bb.axes[ub]) && void 0 !== hb ? hb : 0,
-           y: null !== (Bb = bb.axes[ub + 1]) && void 0 !== Bb ? Bb : 0
+           x: null !== (kd = dd.axes[Jd]) && void 0 !== kd ? kd : 0,
+           y: null !== (pd = dd.axes[Jd + 1]) && void 0 !== pd ? pd : 0
```

#### 641. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6940` → after: `L6940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L6940) · [Before (L6940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L6940)

```diff
-         }, this.gH = bb => {
+         }, this.Do = dd => {
```

#### 642. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6947` → after: `L6947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L6947) · [Before (L6947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L6947)

```diff
-             this.anyPadConnected && (this.rafId = requestAnimationFrame(this.gH))
+             this.anyPadConnected && (this.rafId = requestAnimationFrame(this.Do))
```

#### 643. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L6985` → after: `L6985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R6985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L6985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L6985) · [Before (L6985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L6985)

```diff
-         return ub && ub.id === this.activeInfo.id ? bb : null
+         return Jd && Jd.id === this.activeInfo.id ? dd : null
```

#### 644. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7005` → after: `L7005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7005) · [Before (L7005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7005)

```diff
-             MS: [],
+             EC: [],
```

#### 645. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7015-L7016` → after: `L7015-L7016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7015-L7016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7015-L7016) · [Before (L7015-L7016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7015-L7016)

```diff
-             Xb = (0, Bb.s)(Zb, Ob.MS),
-             pb = Ob.MS,
+             Ld = (0, pd.u)(Qd, Nd.EC),
+             Od = Nd.EC,
```

#### 646. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7018` → after: `L7018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7018) · [Before (L7018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7018)

```diff
-           Ob.MS = Xb;
+           Nd.EC = Ld;
```

#### 647. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7034` → after: `L7034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7034) · [Before (L7034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7034)

```diff
-         const Zb = null !== (hb = null === (Ob = Ub) || void 0 === Ob ? void 0 : Ob.slot.MS) && void 0 !== hb ? hb : [],
+         const Qd = null !== (kd = null === (Nd = Pd) || void 0 === Nd ? void 0 : Nd.slot.EC) && void 0 !== kd ? kd : [],
```

#### 648. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7048` → after: `L7048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7048) · [Before (L7048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7048)

```diff
-           const Ub = (0, Bb.u)(ub);
+           const Pd = (0, pd.y)(Jd);
```

#### 649. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7055` → after: `L7055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7055) · [Before (L7055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7055)

```diff
-         return ub && (0, Zb.g)(ub) ? (bb => {
+         return Jd && (0, Qd.f)(Jd) ? (dd => {
```

#### 650. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7058` → after: `L7058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7058) · [Before (L7058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7058)

```diff
-               return null !== (hb = bb.buttons[ub]) && void 0 !== hb ? hb : Xb(!1)
+               return null !== (kd = dd.buttons[Jd]) && void 0 !== kd ? kd : Ld(!1)
```

#### 651. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7062` → after: `L7062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7062) · [Before (L7062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7062)

```diff
-               return null !== (hb = bb.axes[ub]) && void 0 !== hb ? hb : 0
+               return null !== (kd = dd.axes[Jd]) && void 0 !== kd ? kd : 0
```

#### 652. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7110` → after: `L7110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7110) · [Before (L7110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7110)

```diff
-         return !(0, wb.g)(bb.id) && ("standard" !== bb.mapping ? (this.warnedNonStandardIds.has(bb.id) || (this.warnedNonStandardIds.add(bb.id), console.warn(`Controller "${bb.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.truste … [truncated]
+         return !(0, ld.f)(dd.id) && ("standard" !== dd.mapping ? (this.warnedNonStandardIds.has(dd.id) || (this.warnedNonStandardIds.add(dd.id), console.warn(`Controller "${dd.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.truste … [truncated]
```

#### 653. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7116` → after: `L7116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7116) · [Before (L7116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7116)

```diff
-           family: (0, Ob.e)(bb.id, bb.vendorName)
+           family: (0, Nd.c)(dd.id, dd.vendorName)
```

#### 654. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7128` → after: `L7128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7128) · [Before (L7128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7128)

```diff
-         this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.gH))
+         this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.Do))
```

#### 655. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7133` → after: `L7133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7133) · [Before (L7133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7133)

```diff
-   8384: (bb, ub, hb) => {
+   8554: (dd, Jd, kd) => {
```

#### 656. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7135` → after: `L7135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7135) · [Before (L7135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7135)

```diff
-       c: () => Bb
+       d: () => pd
```

#### 657. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7152` → after: `L7152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7152) · [Before (L7152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7152)

```diff
-   8475: (bb, ub, hb) => {
+   8664: (dd, Jd, kd) => {
```

#### 658. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7154-L7155` → after: `L7154-L7155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7154-L7155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7154-L7155) · [Before (L7154-L7155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7154-L7155)

```diff
-       e: () => Ub,
-       h: () => Lb
+       b: () => Pd,
+       c: () => Zd
```

#### 659. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7157-L7158` → after: `L7157-L7158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7157-L7158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7157-L7158) · [Before (L7157-L7158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7157-L7158)

```diff
-     var Bb = hb(16),
-       Ob = hb(8467);
+     var pd = kd(29),
+       Nd = kd(8646);
```

#### 660. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7162` → after: `L7162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7162) · [Before (L7162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7162)

```diff
-         bb !== Gb && (Gb = bb, Bb.i.vp(Ob.l, Gb))
+         dd !== Wd && (Wd = dd, pd.j.nO(Nd.h, Wd))
```

#### 661. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7165` → after: `L7165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7165) · [Before (L7165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7165)

```diff
-   8470: (bb, ub, hb) => {
+   8655: (dd, Jd, kd) => {
```

#### 662. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7167-L7168` → after: `L7167-L7168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7167-L7168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7167-L7168) · [Before (L7167-L7168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7167-L7168)

```diff
-       b: () => Lb,
-       f: () => Yb
+       e: () => Zd,
+       i: () => gd
```

#### 663. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7170-L7171` → after: `L7170-L7171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7170-L7171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7170-L7171) · [Before (L7170-L7171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7170-L7171)

```diff
-     var Bb = hb(16),
-       Ob = hb(8467);
+     var pd = kd(29),
+       Nd = kd(8646);
```

#### 664. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7179` → after: `L7179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7179) · [Before (L7179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7179)

```diff
-         }, Bb.i.vp(Ob.p, Gb))
+         }, pd.j.nO(Nd.i, Wd))
```

#### 665. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7182` → after: `L7182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7182) · [Before (L7182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7182)

```diff
-   8480: (bb, ub, hb) => {
+   8666: (dd, Jd, kd) => {
```

#### 666. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7185` → after: `L7185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7185) · [Before (L7185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7185)

```diff
-       i: () => Lb
+       h: () => Zd
```

#### 667. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7187-L7188` → after: `L7187-L7188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7187-L7188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7187-L7188) · [Before (L7187-L7188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7187-L7188)

```diff
-     var Bb = hb(16),
-       Ob = hb(8467);
+     var pd = kd(29),
+       Nd = kd(8646);
```

#### 668. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7192` → after: `L7192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7192) · [Before (L7192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7192)

```diff
-         bb !== Gb && (Gb = bb, Bb.i.vp(Ob.q, Gb))
+         dd !== Wd && (Wd = dd, pd.j.nO(Nd.m, Wd))
```

#### 669. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7195` → after: `L7195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7195) · [Before (L7195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7195)

```diff
-   8558: (bb, ub, hb) => {
+   8740: (dd, Jd, kd) => {
```

#### 670. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7197-L7198` → after: `L7197-L7198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7197-L7198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7197-L7198) · [Before (L7197-L7198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7197-L7198)

```diff
-       e: () => Ub,
-       g: () => Lb
+       b: () => Pd,
+       e: () => Zd
```

#### 671. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7200-L7201` → after: `L7200-L7201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7200-L7201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7200-L7201) · [Before (L7200-L7201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7200-L7201)

```diff
-     var Bb = hb(16),
-       Ob = hb(8467);
+     var pd = kd(29),
+       Nd = kd(8646);
```

#### 672. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7205` → after: `L7205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7205) · [Before (L7205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7205)

```diff
-         bb !== Gb && (Gb = bb, Bb.i.vp(Ob.r, Gb))
+         dd !== Wd && (Wd = dd, pd.j.nO(Nd.o, Wd))
```

#### 673. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7208` → after: `L7208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7208) · [Before (L7208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7208)

```diff
-   8433: (bb, ub, hb) => {
+   8605: (dd, Jd, kd) => {
```

#### 674. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7210` → after: `L7210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7210) · [Before (L7210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7210)

```diff
-       e: () => Bb
+       b: () => pd
```

#### 675. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7227` → after: `L7227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7227) · [Before (L7227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7227)

```diff
-   7897: (bb, ub, hb) => {
+   8089: (dd, Jd, kd) => {
```

#### 676. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7232-L7233` → after: `L7232-L7233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7232-L7233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7232-L7233) · [Before (L7232-L7233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7232-L7233)

```diff
-       k: () => Kb,
-       m: () => lb
+       h: () => Gd,
+       i: () => Id
```

#### 677. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7235-L7237` → after: `L7235-L7237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7235-L7237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7235-L7237) · [Before (L7235-L7237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7235-L7237)

```diff
-     var Bb = hb(29),
-       Ob = hb(7859),
-       Gb = hb(7836);
+     var pd = kd(33),
+       Nd = kd(8052),
+       Wd = kd(8020);
```

#### 678. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7240` → after: `L7240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7240) · [Before (L7240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7240)

```diff
-           return hb(7906)
+           return kd(8096)
```

#### 679. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7245` → after: `L7245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7245) · [Before (L7245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7245)

```diff
-       Lb = [...Gb.X, "LeftStick", "RightStick"],
+       Zd = [...Wd.W, "LeftStick", "RightStick"],
```

#### 680. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7267` → after: `L7267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7267) · [Before (L7267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7267)

```diff
-         return null !== (hb = null === (Bb = ab[Sb[bb]]) || void 0 === Bb ? void 0 : Bb[ub]) && void 0 !== hb ? hb : 1
+         return null !== (kd = null === (pd = Kd[Cd[dd]]) || void 0 === pd ? void 0 : pd[Jd]) && void 0 !== kd ? kd : 1
```

#### 681. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7270` → after: `L7270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7270) · [Before (L7270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7270)

```diff
-         const hb = `./${Sb[bb]}/${ub}.svg`;
+         const kd = `./${Cd[dd]}/${Jd}.svg`;
```

#### 682. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7291` → after: `L7291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7291) · [Before (L7291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7291)

```diff
-         bb !== Ab && (Ab = bb, Bb.j.setItem(ob, bb), pb(bb))
+         dd !== Rd && (Rd = dd, pd.i.setItem(ed, dd), Od(dd))
```

#### 683. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7294-L7295` → after: `L7294-L7295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7294-L7295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7294-L7295) · [Before (L7294-L7295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7294-L7295)

```diff
-         const bb = Bb.j.getItem(ob);
-         (0, Ob.d)(bb) && bb !== Ab && (Ab = bb, pb(bb))
+         const dd = pd.i.getItem(ed);
+         (0, Nd.e)(dd) && dd !== Rd && (Rd = dd, Od(dd))
```

#### 684. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7298` → after: `L7298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7298) · [Before (L7298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7298)

```diff
-   8589: (bb, ub, hb) => {
+   8771: (dd, Jd, kd) => {
```

#### 685. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7300-L7301` → after: `L7300-L7301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7300-L7301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7300-L7301) · [Before (L7300-L7301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7300-L7301)

```diff
-       d: () => Mb,
-       g: () => mb
+       e: () => yd,
+       i: () => Dd
```

#### 686. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7303-L7309` → after: `L7303-L7309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7303-L7309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7303-L7309) · [Before (L7303-L7309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7303-L7309)

```diff
-     var Bb = hb(49),
-       Ob = hb(16),
-       Gb = hb(1348),
-       Ub = hb(7843),
-       Lb = hb(7830),
-       Yb = hb(7882),
-       Sb = hb(7857);
+     var pd = kd(56),
+       Nd = kd(29),
+       Wd = kd(1459),
+       Pd = kd(8031),
+       Zd = kd(8016),
+       gd = kd(8077),
+       Cd = kd(8043);
```

#### 687. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7334` → after: `L7334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7334) · [Before (L7334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7334)

```diff
-         return 0 === ub ? ab : Zb(bb, 1 / ub)
+         return 0 === Jd ? Kd : Qd(dd, 1 / Jd)
```

#### 688. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7489-L7490` → after: `L7489-L7490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7489-L7490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7489-L7490) · [Before (L7489-L7490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7489-L7490)

```diff
-         Ub = null !== (hb = bb.beta) && void 0 !== hb ? hb : 0,
-         Lb = null !== (Bb = bb.gamma) && void 0 !== Bb ? Bb : 0;
+         Pd = null !== (kd = dd.beta) && void 0 !== kd ? kd : 0,
+         Zd = null !== (pd = dd.gamma) && void 0 !== pd ? pd : 0;
```

#### 689. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7494` → after: `L7494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7494) · [Before (L7494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7494)

```diff
-         z: null !== (Ob = bb.alpha) && void 0 !== Ob ? Ob : 0
+         z: null !== (Nd = dd.alpha) && void 0 !== Nd ? Nd : 0
```

#### 690. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7497` → after: `L7497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7497) · [Before (L7497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7497)

```diff
-     var nb = hb(8591);
+     var ad = kd(8778);
```

#### 691. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7525` → after: `L7525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7525) · [Before (L7525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7525)

```diff
-           filters: nb.i
+           filters: ad.m
```

#### 692. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7534` → after: `L7534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7534) · [Before (L7534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7534)

```diff
-         return (await this.hid.getDevices()).some((bb => null !== (0, nb.d)(bb.vendorId, bb.productId)))
+         return (await this.hid.getDevices()).some((dd => null !== (0, ad.g)(dd.vendorId, dd.productId)))
```

#### 693. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7543` → after: `L7543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7543) · [Before (L7543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7543)

```diff
-         const ub = (0, nb.d)(bb.vendorId, bb.productId);
+         const Jd = (0, ad.g)(dd.vendorId, dd.productId);
```

#### 694. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7571` → after: `L7571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7571) · [Before (L7571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7571)

```diff
-           console.warn(`Could not turn on motion for ${ub}`, Ob), this.controllers.get(bb) === Bb && (this.forget(Bb), this.onControllersChanged())
+           console.warn(`Could not turn on motion for ${Jd}`, Nd), this.controllers.get(dd) === pd && (this.forget(pd), this.onControllersChanged())
```

#### 695. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7579-L7581` → after: `L7579-L7581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7579-L7581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7579-L7581) · [Before (L7579-L7581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7579-L7581)

```diff
-         if ((0, nb.f)(hb))
-           for (const Bb of nb.r[hb]) await ub.receiveFeatureReport(Bb).catch((bb => {
-             console.debug(`Motion controller feature report ${Bb} unavailable`, bb)
+         if ((0, ad.j)(kd))
+           for (const pd of ad.x[kd]) await Jd.receiveFeatureReport(pd).catch((dd => {
+             console.debug(`Motion controller feature report ${pd} unavailable`, dd)
```

#### 696. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7589` → after: `L7589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7589) · [Before (L7589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7589)

```diff
-               of nb.u) await ub.sendReport(nb.w, (0, nb.c)(this.switchPacketCounter++, bb, hb)), await new Promise((bb => {
+               of ad.A) await Jd.sendReport(ad.B, (0, ad.c)(this.switchPacketCounter++, dd, kd)), await new Promise((dd => {
```

#### 697. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7594` → after: `L7594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7594) · [Before (L7594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7594)

```diff
-         const hb = (0, nb.n)(bb.kind, ub.reportId, ub.data, bb.device.productId);
+         const kd = (0, ad.u)(dd.kind, Jd.reportId, Jd.data, dd.device.productId);
```

#### 698. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7599-L7600` → after: `L7599-L7600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7599-L7600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7599-L7600) · [Before (L7599-L7600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7599-L7600)

```diff
-         if (null !== Ob && Bb > 0 && (Ob = Math.max(.001, Math.min(.017, Bb / hb.readings.length))), null === Ob && null !== hb.sensorClock && (0, nb.f)(bb.kind)) {
-           const ub = (0, nb.p)(bb.kind, bb.lastClock, hb.sensorClock);
+         if (null !== Nd && pd > 0 && (Nd = Math.max(.001, Math.min(.017, pd / kd.readings.length))), null === Nd && null !== kd.sensorClock && (0, ad.j)(dd.kind)) {
+           const Jd = (0, ad.v)(dd.kind, dd.lastClock, kd.sensorClock);
```

#### 699. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7606` → after: `L7606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7606) · [Before (L7606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7606)

```diff
-             this.sink(Ub, null !== (Gb = Ob) && void 0 !== Gb ? Gb : Bb, `hid${bb.openedOrder}`)
+             this.sink(Pd, null !== (Wd = Nd) && void 0 !== Wd ? Wd : pd, `hid${dd.openedOrder}`)
```

#### 700. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7610` → after: `L7610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7610) · [Before (L7610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7610)

```diff
-         const hb = bb => 1e6 * nb.m[bb.kind] + bb.openedOrder;
+         const kd = dd => 1e6 * ad.q[dd.kind] + dd.openedOrder;
```

#### 701. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7616` → after: `L7616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7616) · [Before (L7616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7616)

```diff
-     var xb = hb(86);
+     var Fd = kd(95);
```

#### 702. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7622` → after: `L7622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7622) · [Before (L7622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7622)

```diff
-         return "number" === typeof ub ? ub : "number" === typeof window.orientation ? window.orientation : 0
+         return "number" === typeof Jd ? Jd : "number" === typeof window.orientation ? window.orientation : 0
```

#### 703. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7687-L7688` → after: `L7687-L7688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7687-L7688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7687-L7688) · [Before (L7687-L7688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7687-L7688)

```diff
-         MJ: 0,
-         mJ: 0
+         bY: 0,
+         fY: 0
```

#### 704. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7697` → after: `L7697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7697) · [Before (L7697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7697)

```diff
-           const ub = bb.gyroAiming && Lb.g.hasConnectedPad();
+           const Jd = dd.gyroAiming && Zd.c.hasConnectedPad();
```

#### 705. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7709` → after: `L7709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7709) · [Before (L7709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7709)

```diff
-           Ob.i.vp(tb, this.getStatus())
+           Nd.j.nO(jd, this.getStatus())
```

#### 706. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7713` → after: `L7713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7713) · [Before (L7713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7713)

```diff
-             return "undefined" !== typeof navigator && window.isSecureContext && null !== (bb = navigator.hid) && void 0 !== bb ? bb : null
+             return "undefined" !== typeof navigator && window.isSecureContext && null !== (dd = navigator.hid) && void 0 !== dd ? dd : null
```

#### 707. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7722-L7724` → after: `L7722-L7724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7722-L7724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7722-L7724) · [Before (L7722-L7724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7722-L7724)

```diff
-         }), this.publishStatus) : null, Ob.i.subscribe(Sb.d, this.syncWithSettings), Lb.g.onConnectedPadsChanged((() => {
-           this.syncWithSettings((0, Sb.e)()), this.publishStatus()
-         })), this.syncWithSettings((0, Sb.e)())
+         }), this.publishStatus) : null, Nd.j.subscribe(Cd.i, this.syncWithSettings), Zd.c.onConnectedPadsChanged((() => {
+           this.syncWithSettings((0, Cd.k)()), this.publishStatus()
+         })), this.syncWithSettings((0, Cd.k)())
```

#### 708. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7736-L7738` → after: `L7736-L7738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7736-L7738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7736-L7738) · [Before (L7736-L7738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7736-L7738)

```diff
-           controllers: null !== (bb = null === (ub = this.hid) || void 0 === ub ? void 0 : ub.getConnectedKinds()) && void 0 !== bb ? bb : [],
-           phoneMotion: null !== (hb = null === (Bb = this.phone) || void 0 === Bb ? void 0 : Bb.getState()) && void 0 !== hb ? hb : "off",
-           padConnected: Lb.g.hasConnectedPad()
+           controllers: null !== (dd = null === (Jd = this.hid) || void 0 === Jd ? void 0 : Jd.getConnectedKinds()) && void 0 !== dd ? dd : [],
+           phoneMotion: null !== (kd = null === (pd = this.phone) || void 0 === pd ? void 0 : pd.getState()) && void 0 !== kd ? kd : "off",
+           padConnected: Zd.c.hasConnectedPad()
```

#### 709. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7759` → after: `L7759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7759) · [Before (L7759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7759)

```diff
-         const hb = (0, Sb.e)();
+         const kd = (0, Cd.k)();
```

#### 710. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7767` → after: `L7767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7767) · [Before (L7767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7767)

```diff
-           return "always" === ub || hb("aiming" === ub ? Bb : Ob)
+           return "always" === Jd || kd("aiming" === Jd ? pd : Nd)
```

#### 711. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7770-L7771` → after: `L7770-L7771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7770-L7771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7770-L7771) · [Before (L7770-L7771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7770-L7771)

```diff
-           isHeld: bb => Yb.c.isButtonHeld(bb),
-           useButton: (0, Ub.f)("use"),
+           isHeld: dd => gd.e.isButtonHeld(dd),
+           useButton: (0, Pd.j)("use"),
```

#### 712. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7774-L7775` → after: `L7774-L7775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7774-L7775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7774-L7775) · [Before (L7774-L7775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7774-L7775)

```diff
-           MJ: -bb.yawDeg * ub * Hb,
-           mJ: -bb.pitchDeg * ub * Hb
+           bY: -dd.yawDeg * Jd * od,
+           fY: -dd.pitchDeg * Jd * od
```

#### 713. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7802` → after: `L7802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7802) · [Before (L7802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7802)

```diff
-   8591: (bb, ub, hb) => {
+   8778: (dd, Jd, kd) => {
```

#### 714. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7805-L7808` → after: `L7807-L7808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7807-L7808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7807-L7808) · [Before (L7805-L7808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7805-L7808)

```diff
-       d: () => Yb,
-       f: () => Bb,
-       i: () => Lb,
-       l: () => Sb,
+       g: () => gd,
+       j: () => pd,
```

#### 715. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7810-L7812` → after: `L7810-L7811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7810-L7811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7810-L7811) · [Before (L7810-L7812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7810-L7812)

```diff
-       n: () => lb,
-       p: () => ob,
-       r: () => rb,
+       o: () => Cd,
+       q: () => Kd,
```

#### 716. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7814` → after: `L7813-L7814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7813-L7814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7813-L7814) · [Before (L7814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7814)

```diff
-       w: () => Kb
+       v: () => ed,
+       x: () => Bd
```

#### 717. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7864` → after: `L7864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7864) · [Before (L7864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7864)

```diff
-         return null !== (hb = null === (Bb = Ub.find((hb => hb.vendorId === bb && hb.productId === ub))) || void 0 === Bb ? void 0 : Bb.kind) && void 0 !== hb ? hb : null
+         return null !== (kd = null === (pd = Pd.find((kd => kd.vendorId === dd && kd.productId === Jd))) || void 0 === pd ? void 0 : pd.kind) && void 0 !== kd ? kd : null
```

#### 718. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7947` → after: `L7947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7947) · [Before (L7947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7947)

```diff
-   7886: (bb, ub, hb) => {
+   8081: (dd, Jd, kd) => {
```

#### 719. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7949` → after: `L7949-L7950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7949-L7950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7949-L7950) · [Before (L7949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7949)

```diff
-       e: () => zb,
+       c: () => Yd,
+       f: () => nd,
```

#### 720. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7951-L7952` → after: `L7952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7952) · [Before (L7951-L7952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7951-L7952)

```diff
-       i: () => Ab,
-       k: () => Zb.f,
+       h: () => Qd.d,
```

#### 721. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7957-L7961` → after: `L7957-L7961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7957-L7961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7957-L7961) · [Before (L7957-L7961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7957-L7961)

```diff
-       q: () => Zb.n,
-       t: () => Zb.r,
-       u: () => sb,
-       x: () => Zb.t,
-       z: () => jb
+       s: () => Qd.i,
+       w: () => Qd.m,
+       z: () => Ud,
+       A: () => Qd.n,
+       E: () => sd
```

#### 722. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7963-L7977` → after: `L7963-L7977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7963-L7977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7963-L7977) · [Before (L7963-L7977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7963-L7977)

```diff
-     var Bb = hb(49),
-       Ob = hb(13),
-       Gb = hb(16),
-       Ub = hb(1348),
-       Lb = hb(1184),
-       Yb = hb(7857),
-       Sb = hb(7888),
-       ab = hb(7841),
-       Hb = hb(7830),
-       wb = hb(7897),
-       Zb = hb(1288),
-       Xb = hb(7836),
-       pb = hb(8368),
-       ob = hb(4134);
-     const Ab = bb => !bb.repeat && !(0, pb.d)(bb.key),
+     var pd = kd(56),
+       Nd = kd(22),
+       Wd = kd(29),
+       Pd = kd(1459),
+       Zd = kd(1307),
+       gd = kd(8043),
+       Cd = kd(8084),
+       Kd = kd(8026),
+       od = kd(8016),
+       ld = kd(8089),
+       Qd = kd(1404),
+       Ld = kd(8020),
+       Od = kd(8543),
+       ed = kd(4221);
+     const Rd = dd => !dd.repeat && !(0, Od.b)(dd.key),
```

#### 723. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7991` → after: `L7991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7991) · [Before (L7991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7991)

```diff
-             const Ob = bb >= (this.buttonsDown[Bb] ? Xb.T : Xb.S);
+             const Nd = dd >= (this.buttonsDown[pd] ? Ld.R : Ld.Q);
```

#### 724. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L7996` → after: `L7996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R7996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L7996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L7996) · [Before (L7996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L7996)

```diff
-             Math.hypot(bb.x, bb.y) < (Ob ? Xb.T : .3) ? this.stickAnchors[Bb] = null : (!Ob || Math.hypot(bb.x - Ob.x, bb.y - Ob.y) >= .3) && (this.stickAnchors[Bb] = {
+             Math.hypot(dd.x, dd.y) < (Nd ? Ld.R : .3) ? this.stickAnchors[pd] = null : (!Nd || Math.hypot(dd.x - Nd.x, dd.y - Nd.y) >= .3) && (this.stickAnchors[pd] = {
```

#### 725. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8025` → after: `L8025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8025) · [Before (L8025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8025)

```diff
-         if (gb && Cb.wasOnlyMoveOn() && !(0, Zb.f)()) return !1;
+         if (md && xd.wasOnlyMoveOn() && !(0, Qd.d)()) return !1;
```

#### 726. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8027` → after: `L8027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8027) · [Before (L8027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8027)

```diff
-         const ub = !(0, Zb.f)();
+         const Jd = !(0, Qd.d)();
```

#### 727. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8030` → after: `L8030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8030) · [Before (L8030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8030)

```diff
-         } : null), Db = !1, (0, Zb.n)("gamepad"), Wb(!0), (0, wb.m)((0, Yb.f)()), ub
+         } : null), Md = !1, (0, Qd.i)("gamepad"), vd(!0), (0, ld.i)((0, gd.m)()), Jd
```

#### 728. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8032` → after: `L8032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8032) · [Before (L8032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8032)

```diff
-       vb = bb => !(0, Zb.f)() || bb === db,
+       Sd = dd => !(0, Qd.d)() || dd === qd,
```

#### 729. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8038` → after: `L8038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8038) · [Before (L8038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8038)

```diff
-           ub = "gamepad" === bb ? Hb.g.getActivePad() : null;
+           Jd = "gamepad" === dd ? od.c.getActivePad() : null;
```

#### 730. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8041-L8042` → after: `L8041-L8042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8041-L8042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8041-L8042) · [Before (L8041-L8042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8041-L8042)

```diff
-           inGame: (0, Lb.m)(),
-           padMovesMouse: null !== ub && (0, ab.h)(ub.id)
+           inGame: (0, Zd.s)(),
+           padMovesMouse: null !== Jd && (0, Kd.g)(Jd.id)
```

#### 731. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8054` → after: `L8054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8054) · [Before (L8054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8054)

```diff
-             bb.reset(), gb = !1, (0, Zb.n)(ub)
+             dd.reset(), md = !1, (0, Qd.i)(Jd)
```

#### 732. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8059` → after: `L8059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8059) · [Before (L8059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8059)

```diff
-                 if ((0, Zb.k)(bb), !Ab(bb)) return;
+                 if ((0, Qd.h)(dd), !Rd(dd)) return;
```

#### 733. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8098` → after: `L8098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8098) · [Before (L8098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8098)

```diff
-                 inGame: Lb.inGame && (0, Sb.c)(),
+                 inGame: Zd.inGame && (0, Cd.d)(),
```

#### 734. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8111` → after: `L8111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8111) · [Before (L8111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8111)

```diff
-         const Hb = Gb.i.subscribe("appManagerUpdated|activeInputDevice", Yb);
+         const od = Wd.j.subscribe("appManagerUpdated|activeInputDevice", gd);
```

#### 735. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8113` → after: `L8113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8113) · [Before (L8113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8113)

```diff
-           window.removeEventListener("keydown", hb, ab), window.removeEventListener("pointerdown", hb, ab), window.removeEventListener("wheel", hb, ab), window.removeEventListener("touchstart", Bb, ab), window.removeEventListener("pointermove", Lb, ab), window.removeEventListener … [truncated]
+           window.removeEventListener("keydown", kd, Kd), window.removeEventListener("pointerdown", kd, Kd), window.removeEventListener("wheel", kd, Kd), window.removeEventListener("touchstart", pd, Kd), window.removeEventListener("pointermove", Zd, Kd), window.removeEventListener … [truncated]
```

#### 736. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8117-L8121` → after: `L8117-L8121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8117-L8121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8117-L8121) · [Before (L8117-L8121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8117-L8121)

```diff
-         const [bb, ub] = (0, Bb.useState)(Yb.f);
-         return (0, Ub.h)(Yb.c, (() => {
-           ub((0, Yb.f)())
-         })), (0, Ub.h)(Hb.c, (() => {
-           ub((0, Yb.f)())
+         const [dd, Jd] = (0, pd.useState)(gd.m);
+         return (0, Pd.h)(gd.e, (() => {
+           Jd((0, gd.m)())
+         })), (0, Pd.h)(od.b, (() => {
+           Jd((0, gd.m)())
```

#### 737. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8125` → after: `L8125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8125) · [Before (L8125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8125)

```diff
-   7859: (bb, ub, hb) => {
+   8052: (dd, Jd, kd) => {
```

#### 738. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8127-L8128` → after: `L8127-L8128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8127-L8128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8127-L8128) · [Before (L8127-L8128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8127-L8128)

```diff
-       b: () => Bb,
-       d: () => Ob
+       d: () => pd,
+       e: () => Nd
```

#### 739. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8133` → after: `L8133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8133) · [Before (L8133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8133)

```diff
-   7888: (bb, ub, hb) => {
+   8084: (dd, Jd, kd) => {
```

#### 740. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8137` → after: `L8136-L8137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8136-L8137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8136-L8137) · [Before (L8137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8137)

```diff
-       g: () => Yb,
+       d: () => Kd,
+       e: () => gd,
```

#### 741. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8140-L8142` → after: `L8140-L8142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8140-L8142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8140-L8142) · [Before (L8140-L8142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8140-L8142)

```diff
-     var Bb = hb(13),
-       Ob = hb(1537),
-       Gb = hb(1625);
+     var pd = kd(22),
+       Nd = kd(1670),
+       Wd = kd(1756);
```

#### 742. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8144` → after: `L8144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8144) · [Before (L8144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8144)

```diff
-       Lb = (bb, ub) => (Ub.has(bb) && console.warn(`Gameplay blocker "${bb}" registered twice; the newer one replaces it.`), Ub.set(bb, ub), () => {
+       Zd = (dd, Jd) => (Pd.has(dd) && console.warn(`Gameplay blocker "${dd}" registered twice; the newer one replaces it.`), Pd.set(dd, Jd), () => {
```

#### 743. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8147` → after: `L8147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8147) · [Before (L8147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8147)

```diff
-       Yb = () => (0, Gb.d)(document.activeElement),
+       gd = () => (0, Wd.e)(document.activeElement),
```

#### 744. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8156` → after: `L8156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8156) · [Before (L8156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8156)

```diff
-         return "inGame" === Bb.d.get("gameState") && (!(0, Ob.q)() && (!Yb() && null === Sb(bb)))
+         return "inGame" === pd.d.get("gameState") && (!(0, Nd.n)() && (!gd() && null === Cd(dd)))
```

#### 745. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8159` → after: `L8159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8159) · [Before (L8159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8159)

```diff
-   7836: (bb, ub, hb) => {
+   8020: (dd, Jd, kd) => {
```

#### 746. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8161-L8163` → after: `L8161-L8163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8161-L8163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8161-L8163) · [Before (L8161-L8163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8161-L8163)

```diff
-       $: () => db,
-       A: () => Kb,
-       D: () => gb,
+       C: () => Gd,
+       E: () => md,
+       G: () => vd,
```

#### 747. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8166-L8171` → after: `L8166-L8172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8166-L8172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8166-L8172) · [Before (L8166-L8171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8166-L8171)

```diff
-       M: () => ob,
-       P: () => Sb,
-       S: () => wb,
-       T: () => Zb,
-       U: () => Ob,
-       X: () => Bb,
+       N: () => Cd,
+       Q: () => ld,
+       R: () => Qd,
+       V: () => Nd,
+       W: () => pd,
+       Z: () => qd,
+       ab: () => Fd,
```

#### 748. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8173-L8174` → after: `L8174-L8176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8174-L8176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8174-L8176) · [Before (L8173-L8174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8173-L8174)

```diff
-       d: () => zb,
-       db: () => xb,
+       eb: () => bd,
+       f: () => Yd,
+       fb: () => xd,
```

#### 749. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8176-L8182` → after: `L8178-L8180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8178-L8180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8178-L8180) · [Before (L8176-L8182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8176-L8182)

```diff
-       hb: () => ib,
-       ib: () => Cb,
-       j: () => Yb,
-       l: () => Lb,
-       p: () => jb,
-       s: () => lb,
-       t: () => rb,
+       i: () => gd,
+       m: () => Zd,
+       q: () => sd,
```

#### 750. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8184` → after: `L8182-L8184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8182-L8184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8182-L8184) · [Before (L8184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8184)

```diff
-       x: () => Hb
+       x: () => Bd,
+       y: () => Wd,
+       z: () => od
```

#### 751. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8227` → after: `L8227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8227) · [Before (L8227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8227)

```diff
-           return "linear" === ub ? hb : hb * hb
+           return "linear" === Jd ? kd : kd * kd
```

#### 752. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8268` → after: `L8268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8268) · [Before (L8268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8268)

```diff
-         this.readTiming = bb, this.MS = !1, this.timing = null, this.nextFireMs = 0
+         this.readTiming = dd, this.EC = !1, this.timing = null, this.nextFireMs = 0
```

#### 753. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8271` → after: `L8271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8271) · [Before (L8271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8271)

```diff
-         return bb ? this.MS ? !!(this.timing && ub >= this.nextFireMs) && (this.nextFireMs = ub + this.timing.intervalMs, !0) : (this.MS = !0, this.timing = this.readTiming(), this.nextFireMs = ub + (null !== (hb = null === (Bb = this.timing) || void 0 === Bb ? void 0 : Bb.initia … [truncated]
+         return dd ? this.EC ? !!(this.timing && Jd >= this.nextFireMs) && (this.nextFireMs = Jd + this.timing.intervalMs, !0) : (this.EC = !0, this.timing = this.readTiming(), this.nextFireMs = Jd + (null !== (kd = null === (pd = this.timing) || void 0 === pd ? void 0 : pd.initia … [truncated]
```

#### 754. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8275` → after: `L8275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8275) · [Before (L8275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8275)

```diff
-         this.MS = !1
+         this.EC = !1
```

#### 755. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8291` → after: `L8291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8291) · [Before (L8291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8291)

```diff
-         return bb !== this.direction && (this.timer.reset(), this.direction = bb), this.timer.update(null !== bb, ub) ? bb : null
+         return dd !== this.direction && (this.timer.reset(), this.direction = dd), this.timer.update(null !== dd, Jd) ? dd : null
```

#### 756. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8298` → after: `L8298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8298) · [Before (L8298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8298)

```diff
-   8424: (bb, ub, hb) => {
+   8603: (dd, Jd, kd) => {
```

#### 757. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8300-L8301` → after: `L8300-L8301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8300-L8301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8300-L8301) · [Before (L8300-L8301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8300-L8301)

```diff
-       d: () => Ob,
-       f: () => Gb
+       b: () => Nd,
+       c: () => Wd
```

#### 758. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8309` → after: `L8309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8309) · [Before (L8309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8309)

```diff
-   8377: (bb, ub, hb) => {
+   8551: (dd, Jd, kd) => {
```

#### 759. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8312` → after: `L8312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8312) · [Before (L8312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8312)

```diff
-       f: () => Gb
+       g: () => Wd
```

#### 760. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8314-L8317` → after: `L8314-L8317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8314-L8317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8314-L8317) · [Before (L8314-L8317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8314-L8317)

```diff
-     var Bb = hb(7857),
-       Ob = hb(7836);
-     const Gb = bb => (0, Ob.db)(bb, (0, Bb.e)().buttonRepeat),
-       Ub = bb => new Ob.d((() => Gb(bb)))
+     var pd = kd(8043),
+       Nd = kd(8020);
+     const Wd = dd => (0, Nd.ab)(dd, (0, pd.k)().buttonRepeat),
+       Pd = dd => new Nd.f((() => Wd(dd)))
```

#### 761. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8319` → after: `L8319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8319) · [Before (L8319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8319)

```diff
-   7874: (bb, ub, hb) => {
+   8069: (dd, Jd, kd) => {
```

#### 762. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8321` → after: `L8321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8321) · [Before (L8321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8321)

```diff
-       c: () => Yb,
+       d: () => gd,
```

#### 763. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8325-L8327` → after: `L8325-L8327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8325-L8327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8325-L8327) · [Before (L8325-L8327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8325-L8327)

```diff
-     var Bb = hb(16),
-       Ob = hb(7857);
-     const Gb = (bb, ub) => "OpenShop" === bb ? "shop" === ub : "OpenLobbyLeaderboard" !== bb || "leaderboard" === ub;
+     var pd = kd(29),
+       Nd = kd(8043);
+     const Wd = (dd, Jd) => "OpenShop" === dd ? "shop" === Jd : "OpenLobbyLeaderboard" !== dd || "leaderboard" === Jd;
```

#### 764. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8330` → after: `L8330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8330) · [Before (L8330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8330)

```diff
-         bb !== Ub && (Ub = bb, Bb.i.vp(Ob.c, (0, Ob.e)()))
+         dd !== Pd && (Pd = dd, pd.j.nO(Nd.e, (0, Nd.k)()))
```

#### 765. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8332` → after: `L8332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8332) · [Before (L8332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8332)

```diff
-       Yb = () => ((bb, ub) => "shop" === bb && ub ? "shop" : "leaderboard")((0, Ob.e)().leaderboardButton, Ub)
+       gd = () => ((dd, Jd) => "shop" === dd && Jd ? "shop" : "leaderboard")((0, Nd.k)().leaderboardButton, Pd)
```

#### 766. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8334` → after: `L8334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8334) · [Before (L8334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8334)

```diff
-   7867: (bb, ub, hb) => {
+   8060: (dd, Jd, kd) => {
```

#### 767. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8336` → after: `L8336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8336) · [Before (L8336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8336)

```diff
-       $: () => ob,
+       A: () => Zd,
```

#### 768. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8341-L8344` → after: `L8340-L8343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8340-L8343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8340-L8343) · [Before (L8341-L8344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8341-L8344)

```diff
-       O: () => Sb,
-       Q: () => Ab,
-       T: () => Db,
-       X: () => Kb,
+       N: () => od,
+       R: () => vd,
+       S: () => Cd,
+       W: () => Rd,
```

#### 769. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8353` → after: `L8350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8350) · [Before (L8353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8353)

```diff
-       i: () => Ub,
+       h: () => Fd,
```

#### 770. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8359-L8361` → after: `L8354-L8362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8354-L8362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8354-L8362) · [Before (L8359-L8361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8359-L8361)

```diff
-       m: () => vb,
-       q: () => tb,
-       t: () => ab,
+       l: () => Pd,
+       ob: () => Wd,
+       p: () => ad,
+       r: () => Bd,
+       rb: () => qd,
+       s: () => Sd,
+       sb: () => fd,
+       u: () => jd,
+       ub: () => sd,
```

#### 771. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8363-L8364` → after: `L8364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8364) · [Before (L8363-L8364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8363-L8364)

```diff
-       y: () => Lb,
-       z: () => Cb
+       x: () => gd
```

#### 772. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8366-L8367` → after: `L8366-L8367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8366-L8367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8366-L8367) · [Before (L8366-L8367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8366-L8367)

```diff
-     var Bb = hb(7850),
-       Ob = hb(7836);
+     var pd = kd(8039),
+       Nd = kd(8020);
```

#### 773. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8399` → after: `L8399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8399) · [Before (L8399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8399)

```diff
-       Hb = bb => `${Math.round(bb)}%`,
+       od = dd => `${Math.round(dd)}%`,
```

#### 774. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8401` → after: `L8401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8401) · [Before (L8401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8401)

```diff
-       Zb = bb => `${bb.toFixed(1)}\xd7`,
+       Qd = dd => `${dd.toFixed(1)}\xd7`,
```

#### 775. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8580` → after: `L8580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8580) · [Before (L8580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8580)

```diff
-       ib = Bb.b.map((bb => {
+       bd = pd.d.map((dd => {
```

#### 776. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8594` → after: `L8594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8594) · [Before (L8594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8594)

```diff
-       vb = Ob.X.filter((bb => "Home" !== bb)),
+       Sd = Nd.W.filter((dd => "Home" !== dd)),
```

#### 777. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8605` → after: `L8605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8605) · [Before (L8605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8605)

```diff
-         const Bb = ub - (null !== (hb = this.startMs) && void 0 !== hb ? hb : ub) >= 250;
+         const pd = Jd - (null !== (kd = this.startMs) && void 0 !== kd ? kd : Jd) >= 250;
```

#### 778. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8648` → after: `L8648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8648) · [Before (L8648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8648)

```diff
-           MS: Bb
+           EC: pd
```

#### 779. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8658` → after: `L8658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8658) · [Before (L8658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8658)

```diff
-   4800: (bb, ub, hb) => {
+   4907: (dd, Jd, kd) => {
```

#### 780. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8660-L8661` → after: `L8660-L8661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8660-L8661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8660-L8661) · [Before (L8660-L8661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8660-L8661)

```diff
-       e: () => Gb,
-       h: () => Ub
+       b: () => Wd,
+       e: () => Pd
```

#### 781. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8663` → after: `L8663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8663) · [Before (L8663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8663)

```diff
-     var Bb = hb(49);
+     var pd = kd(56);
```

#### 782. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8668` → after: `L8668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8668) · [Before (L8668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8668)

```diff
-         return hb && null !== (ub = Ob.get(hb)) && void 0 !== ub ? ub : null
+         return kd && null !== (Jd = Nd.get(kd)) && void 0 !== Jd ? Jd : null
```

#### 783. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8689` → after: `L8689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8689) · [Before (L8689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8689)

```diff
-   8449: (bb, ub, hb) => {
+   8623: (dd, Jd, kd) => {
```

#### 784. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8691-L8692` → after: `L8691-L8692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8691-L8692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8691-L8692) · [Before (L8691-L8692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8691-L8692)

```diff
-       c: () => Gb,
-       d: () => Ob
+       e: () => Wd,
+       h: () => Nd
```

#### 785. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8694` → after: `L8694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8694) · [Before (L8694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8694)

```diff
-     var Bb = hb(16);
+     var pd = kd(29);
```

#### 786. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8700` → after: `L8700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8700) · [Before (L8700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8700)

```diff
-           "Air" === Lb && Bb.i.vp(Ob)
+           "Air" === Zd && pd.j.nO(Nd)
```

#### 787. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8705` → after: `L8705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8705) · [Before (L8705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8705)

```diff
-   7906: (bb, ub, hb) => {
+   8096: (dd, Jd, kd) => {
```

#### 788. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8707-L8782` → after: `L8707-L8782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8707-L8782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8707-L8782) · [Before (L8707-L8782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8707-L8782)

```diff
-       "./nintendo/A.svg": 7914,
-       "./nintendo/B.svg": 7922,
-       "./nintendo/Down.svg": 7931,
-       "./nintendo/Home.svg": 7940,
-       "./nintendo/LB.svg": 7946,
-       "./nintendo/LS.svg": 7952,
-       "./nintendo/LT.svg": 7961,
-       "./nintendo/Left.svg": 7968,
-       "./nintendo/LeftStick.svg": 7971,
-       "./nintendo/Menu.svg": 7974,
-       "./nintendo/RB.svg": 7980,
-       "./nintendo/RS.svg": 7989,
-       "./nintendo/RT.svg": 7996,
-       "./nintendo/Right.svg": 8004,
-       "./nintendo/RightStick.svg": 8013,
-       "./nintendo/Up.svg": 8020,
- ... (60 more removed lines; see GitHub link above)
+       "./nintendo/A.svg": 8104,
+       "./nintendo/B.svg": 8108,
+       "./nintendo/Down.svg": 8112,
+       "./nintendo/Home.svg": 8116,
+       "./nintendo/LB.svg": 8123,
+       "./nintendo/LS.svg": 8128,
+       "./nintendo/LT.svg": 8131,
+       "./nintendo/Left.svg": 8133,
+       "./nintendo/LeftStick.svg": 8136,
+       "./nintendo/Menu.svg": 8141,
+       "./nintendo/RB.svg": 8148,
+       "./nintendo/RS.svg": 8157,
+       "./nintendo/RT.svg": 8161,
+       "./nintendo/Right.svg": 8167,
+       "./nintendo/RightStick.svg": 8175,
+       "./nintendo/Up.svg": 8182,
+ ... (60 more added lines; see GitHub link above)
```

#### 789. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8799` → after: `L8799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8799) · [Before (L8799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8799)

```diff
-     }, Ob.resolve = Gb, bb.exports = Ob, Ob.id = 7906
+     }, Nd.resolve = Wd, dd.exports = Nd, Nd.id = 8096
```

#### 790. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8801` → after: `L8801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8801) · [Before (L8801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8801)

```diff
-   7914: (bb, ub, hb) => {
+   8104: (dd, Jd, kd) => {
```

#### 791. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8804` → after: `L8804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8804) · [Before (L8804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8804)

```diff
-   7922: (bb, ub, hb) => {
+   8108: (dd, Jd, kd) => {
```

#### 792. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8807` → after: `L8807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8807) · [Before (L8807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8807)

```diff
-   7931: (bb, ub, hb) => {
+   8112: (dd, Jd, kd) => {
```

#### 793. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8810` → after: `L8810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8810) · [Before (L8810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8810)

```diff
-   7940: (bb, ub, hb) => {
+   8116: (dd, Jd, kd) => {
```

#### 794. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8813` → after: `L8813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8813) · [Before (L8813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8813)

```diff
-   7946: (bb, ub, hb) => {
+   8123: (dd, Jd, kd) => {
```

#### 795. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8816` → after: `L8816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8816) · [Before (L8816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8816)

```diff
-   7952: (bb, ub, hb) => {
+   8128: (dd, Jd, kd) => {
```

#### 796. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8819` → after: `L8819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8819) · [Before (L8819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8819)

```diff
-   7961: (bb, ub, hb) => {
+   8131: (dd, Jd, kd) => {
```

#### 797. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8822` → after: `L8822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8822) · [Before (L8822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8822)

```diff
-   7968: (bb, ub, hb) => {
+   8133: (dd, Jd, kd) => {
```

#### 798. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8825` → after: `L8825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8825) · [Before (L8825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8825)

```diff
-   7971: (bb, ub, hb) => {
+   8136: (dd, Jd, kd) => {
```

#### 799. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8828` → after: `L8828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8828) · [Before (L8828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8828)

```diff
-   7974: (bb, ub, hb) => {
+   8141: (dd, Jd, kd) => {
```

#### 800. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8831` → after: `L8831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8831) · [Before (L8831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8831)

```diff
-   7980: (bb, ub, hb) => {
+   8148: (dd, Jd, kd) => {
```

#### 801. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8834` → after: `L8834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8834) · [Before (L8834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8834)

```diff
-   7989: (bb, ub, hb) => {
+   8157: (dd, Jd, kd) => {
```

#### 802. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8837` → after: `L8837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8837) · [Before (L8837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8837)

```diff
-   7996: (bb, ub, hb) => {
+   8161: (dd, Jd, kd) => {
```

#### 803. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8840` → after: `L8840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8840) · [Before (L8840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8840)

```diff
-   8004: (bb, ub, hb) => {
+   8167: (dd, Jd, kd) => {
```

#### 804. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8843` → after: `L8843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8843) · [Before (L8843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8843)

```diff
-   8013: (bb, ub, hb) => {
+   8175: (dd, Jd, kd) => {
```

#### 805. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8846` → after: `L8846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8846) · [Before (L8846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8846)

```diff
-   8020: (bb, ub, hb) => {
+   8182: (dd, Jd, kd) => {
```

#### 806. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8849` → after: `L8849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8849) · [Before (L8849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8849)

```diff
-   8024: (bb, ub, hb) => {
+   8189: (dd, Jd, kd) => {
```

#### 807. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8852` → after: `L8852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8852) · [Before (L8852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8852)

```diff
-   8030: (bb, ub, hb) => {
+   8196: (dd, Jd, kd) => {
```

#### 808. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8855` → after: `L8855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8855) · [Before (L8855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8855)

```diff
-   8036: (bb, ub, hb) => {
+   8199: (dd, Jd, kd) => {
```

#### 809. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8858` → after: `L8858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8858) · [Before (L8858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8858)

```diff
-   8042: (bb, ub, hb) => {
+   8203: (dd, Jd, kd) => {
```

#### 810. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8861` → after: `L8861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8861) · [Before (L8861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8861)

```diff
-   8046: (bb, ub, hb) => {
+   8208: (dd, Jd, kd) => {
```

#### 811. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8864` → after: `L8864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8864) · [Before (L8864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8864)

```diff
-   8048: (bb, ub, hb) => {
+   8213: (dd, Jd, kd) => {
```

#### 812. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8867` → after: `L8867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8867) · [Before (L8867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8867)

```diff
-   8053: (bb, ub, hb) => {
+   8219: (dd, Jd, kd) => {
```

#### 813. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8870` → after: `L8870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8870) · [Before (L8870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8870)

```diff
-   8055: (bb, ub, hb) => {
+   8222: (dd, Jd, kd) => {
```

#### 814. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8873` → after: `L8873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8873) · [Before (L8873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8873)

```diff
-   8060: (bb, ub, hb) => {
+   8224: (dd, Jd, kd) => {
```

#### 815. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8876` → after: `L8876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8876) · [Before (L8876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8876)

```diff
-   8068: (bb, ub, hb) => {
+   8230: (dd, Jd, kd) => {
```

#### 816. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8879` → after: `L8879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8879) · [Before (L8879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8879)

```diff
-   8075: (bb, ub, hb) => {
+   8235: (dd, Jd, kd) => {
```

#### 817. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8882` → after: `L8882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8882) · [Before (L8882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8882)

```diff
-   8082: (bb, ub, hb) => {
+   8237: (dd, Jd, kd) => {
```

#### 818. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8885` → after: `L8885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8885) · [Before (L8885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8885)

```diff
-   8091: (bb, ub, hb) => {
+   8242: (dd, Jd, kd) => {
```

#### 819. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8888` → after: `L8888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8888) · [Before (L8888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8888)

```diff
-   8099: (bb, ub, hb) => {
+   8250: (dd, Jd, kd) => {
```

#### 820. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8891` → after: `L8891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8891) · [Before (L8891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8891)

```diff
-   8108: (bb, ub, hb) => {
+   8258: (dd, Jd, kd) => {
```

#### 821. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8894` → after: `L8894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8894) · [Before (L8894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8894)

```diff
-   8111: (bb, ub, hb) => {
+   8263: (dd, Jd, kd) => {
```

#### 822. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8897` → after: `L8897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8897) · [Before (L8897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8897)

```diff
-   8117: (bb, ub, hb) => {
+   8269: (dd, Jd, kd) => {
```

#### 823. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8900` → after: `L8900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8900) · [Before (L8900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8900)

```diff
-   8122: (bb, ub, hb) => {
+   8277: (dd, Jd, kd) => {
```

#### 824. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8903` → after: `L8903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8903) · [Before (L8903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8903)

```diff
-   8124: (bb, ub, hb) => {
+   8283: (dd, Jd, kd) => {
```

#### 825. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8906` → after: `L8906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8906) · [Before (L8906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8906)

```diff
-   8133: (bb, ub, hb) => {
+   8289: (dd, Jd, kd) => {
```

#### 826. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8909` → after: `L8909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8909) · [Before (L8909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8909)

```diff
-   8135: (bb, ub, hb) => {
+   8296: (dd, Jd, kd) => {
```

#### 827. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8912` → after: `L8912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8912) · [Before (L8912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8912)

```diff
-   8142: (bb, ub, hb) => {
+   8299: (dd, Jd, kd) => {
```

#### 828. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8915` → after: `L8915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8915) · [Before (L8915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8915)

```diff
-   8147: (bb, ub, hb) => {
+   8308: (dd, Jd, kd) => {
```

#### 829. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8918` → after: `L8918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8918) · [Before (L8918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8918)

```diff
-   8151: (bb, ub, hb) => {
+   8314: (dd, Jd, kd) => {
```

#### 830. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8921` → after: `L8921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8921) · [Before (L8921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8921)

```diff
-   8159: (bb, ub, hb) => {
+   8320: (dd, Jd, kd) => {
```

#### 831. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8924` → after: `L8924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8924) · [Before (L8924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8924)

```diff
-   8166: (bb, ub, hb) => {
+   8324: (dd, Jd, kd) => {
```

#### 832. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8927` → after: `L8927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8927) · [Before (L8927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8927)

```diff
-   8174: (bb, ub, hb) => {
+   8332: (dd, Jd, kd) => {
```

#### 833. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8930` → after: `L8930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8930) · [Before (L8930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8930)

```diff
-   8183: (bb, ub, hb) => {
+   8340: (dd, Jd, kd) => {
```

#### 834. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8933` → after: `L8933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8933) · [Before (L8933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8933)

```diff
-   8189: (bb, ub, hb) => {
+   8349: (dd, Jd, kd) => {
```

#### 835. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8936` → after: `L8936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8936) · [Before (L8936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8936)

```diff
-   8197: (bb, ub, hb) => {
+   8353: (dd, Jd, kd) => {
```

#### 836. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8939` → after: `L8939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8939) · [Before (L8939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8939)

```diff
-   8199: (bb, ub, hb) => {
+   8359: (dd, Jd, kd) => {
```

#### 837. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8942` → after: `L8942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8942) · [Before (L8942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8942)

```diff
-   8205: (bb, ub, hb) => {
+   8363: (dd, Jd, kd) => {
```

#### 838. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8945` → after: `L8945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8945) · [Before (L8945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8945)

```diff
-   8213: (bb, ub, hb) => {
+   8372: (dd, Jd, kd) => {
```

#### 839. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8948` → after: `L8948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8948) · [Before (L8948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8948)

```diff
-   8221: (bb, ub, hb) => {
+   8377: (dd, Jd, kd) => {
```

#### 840. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8951` → after: `L8951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8951) · [Before (L8951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8951)

```diff
-   8229: (bb, ub, hb) => {
+   8384: (dd, Jd, kd) => {
```

#### 841. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8954` → after: `L8954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8954) · [Before (L8954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8954)

```diff
-   8237: (bb, ub, hb) => {
+   8389: (dd, Jd, kd) => {
```

#### 842. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8957` → after: `L8957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8957) · [Before (L8957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8957)

```diff
-   8245: (bb, ub, hb) => {
+   8392: (dd, Jd, kd) => {
```

#### 843. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8960` → after: `L8960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8960) · [Before (L8960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8960)

```diff
-   8252: (bb, ub, hb) => {
+   8399: (dd, Jd, kd) => {
```

#### 844. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8963` → after: `L8963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8963) · [Before (L8963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8963)

```diff
-   8256: (bb, ub, hb) => {
+   8402: (dd, Jd, kd) => {
```

#### 845. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8966` → after: `L8966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8966) · [Before (L8966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8966)

```diff
-   8258: (bb, ub, hb) => {
+   8407: (dd, Jd, kd) => {
```

#### 846. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8969` → after: `L8969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8969) · [Before (L8969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8969)

```diff
-   8260: (bb, ub, hb) => {
+   8414: (dd, Jd, kd) => {
```

#### 847. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8972` → after: `L8972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8972) · [Before (L8972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8972)

```diff
-   8267: (bb, ub, hb) => {
+   8422: (dd, Jd, kd) => {
```

#### 848. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8975` → after: `L8975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8975) · [Before (L8975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8975)

```diff
-   8273: (bb, ub, hb) => {
+   8425: (dd, Jd, kd) => {
```

#### 849. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8978` → after: `L8978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8978) · [Before (L8978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8978)

```diff
-   8278: (bb, ub, hb) => {
+   8432: (dd, Jd, kd) => {
```

#### 850. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8981` → after: `L8981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8981) · [Before (L8981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8981)

```diff
-   8284: (bb, ub, hb) => {
+   8440: (dd, Jd, kd) => {
```

#### 851. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8984` → after: `L8984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8984) · [Before (L8984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8984)

```diff
-   8290: (bb, ub, hb) => {
+   8442: (dd, Jd, kd) => {
```

#### 852. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8987` → after: `L8987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8987) · [Before (L8987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8987)

```diff
-   8292: (bb, ub, hb) => {
+   8449: (dd, Jd, kd) => {
```

#### 853. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8990` → after: `L8990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8990) · [Before (L8990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8990)

```diff
-   8297: (bb, ub, hb) => {
+   8458: (dd, Jd, kd) => {
```

#### 854. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8993` → after: `L8993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8993) · [Before (L8993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8993)

```diff
-   8301: (bb, ub, hb) => {
+   8463: (dd, Jd, kd) => {
```

#### 855. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8996` → after: `L8996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8996) · [Before (L8996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8996)

```diff
-   8308: (bb, ub, hb) => {
+   8467: (dd, Jd, kd) => {
```

#### 856. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L8999` → after: `L8999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R8999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L8999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L8999) · [Before (L8999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L8999)

```diff
-   8310: (bb, ub, hb) => {
+   8472: (dd, Jd, kd) => {
```

#### 857. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9002` → after: `L9002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L9002) · [Before (L9002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L9002)

```diff
-   8318: (bb, ub, hb) => {
+   8481: (dd, Jd, kd) => {
```

#### 858. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9005` → after: `L9005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L9005) · [Before (L9005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L9005)

```diff
-   8322: (bb, ub, hb) => {
+   8488: (dd, Jd, kd) => {
```

#### 859. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9008` → after: `L9008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L9008) · [Before (L9008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L9008)

```diff
-   8329: (bb, ub, hb) => {
+   8494: (dd, Jd, kd) => {
```

#### 860. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9011` → after: `L9011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L9011) · [Before (L9011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L9011)

```diff
-   8337: (bb, ub, hb) => {
+   8501: (dd, Jd, kd) => {
```

#### 861. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9014` → after: `L9014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L9014) · [Before (L9014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L9014)

```diff
-   8344: (bb, ub, hb) => {
+   8509: (dd, Jd, kd) => {
```

#### 862. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9017` → after: `L9017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L9017) · [Before (L9017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L9017)

```diff
-   8347: (bb, ub, hb) => {
+   8516: (dd, Jd, kd) => {
```

#### 863. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9020` → after: `L9020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L9020) · [Before (L9020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L9020)

```diff
-   8352: (bb, ub, hb) => {
+   8525: (dd, Jd, kd) => {
```

#### 864. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9023` → after: `L9023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L9023) · [Before (L9023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L9023)

```diff
-   8357: (bb, ub, hb) => {
+   8530: (dd, Jd, kd) => {
```

#### 865. `bundles/bloxd.io/chunks/js/controller.js` (Changed code · before: `L9026` → after: `L9026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2R9026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d9a30fbbd80bb96ac8789dacd5b26b9c2a48e362897f5730faa77a51efae3ae2) · [After (L9026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/controller.js#L9026) · [Before (L9026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/controller.js#L9026)

```diff
-   8362: (bb, ub, hb) => {
+   8537: (dd, Jd, kd) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (halsg.2bd74967 → x17cru.159bd7ce)

- **File**: `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00)

#### 1. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L4)

```diff
-   8955: (bb, ub, hb) => {
+   9103: (dd, Jd, kd) => {
```

#### 2. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L8-L12` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L8-L12) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L8-L12)

```diff
-     var Bb = hb(599),
-       Ob = hb(86),
-       Gb = hb(115),
-       Ub = hb(113),
-       Lb = hb(4137);
+     var pd = kd(626),
+       Nd = kd(95),
+       Wd = kd(126),
+       Pd = kd(119),
+       Zd = kd(4226);
```

#### 3. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L17)

```diff
-         if (null !== bb.appIosVersion) return `${bb.appIosVersion} (the iOS app's)`;
+         if (null !== dd.appIosVersion) return `${dd.appIosVersion} (the iOS app's)`;
```

#### 4. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L19)

```diff
-         if (ub) return `${ub[1].replaceAll("_",".")} (the in-app browser's iOS token)`;
+         if (Jd) return `${Jd[1].replaceAll("_",".")} (the in-app browser's iOS token)`;
```

#### 5. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L24)

```diff
-         if ("Safari" === hb.name && hb.version) return `${hb.version} (Safari's version, which follows iOS)`;
+         if ("Safari" === kd.name && kd.version) return `${kd.version} (Safari's version, which follows iOS)`;
```

#### 6. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L28` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L28) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L28)

```diff
-         return Gb < 18 || 18 === Gb && Ub < 6 ? `${Ob} (user agent)` : `? (the user agent says ${Ob}, frozen from iOS 26)`
+         return Wd < 18 || 18 === Wd && Pd < 6 ? `${Nd} (user agent)` : `? (the user agent says ${Nd}, frozen from iOS 26)`
```

#### 7. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L31` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L31) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L31)

```diff
-       if (ub) return "windows" === bb.os ? `${ub} (${function(bb){const ub=parseInt(bb,10);if(ub>=13)return"Windows 11";return ub>=1?"Windows 10":"Windows 8.1 or older"}(ub)}, client hints)` : `${ub} (client hints)`;
+       if (Jd) return "windows" === dd.os ? `${Jd} (${function(dd){const Jd=parseInt(dd,10);if(Jd>=13)return"Windows 11";return Jd>=1?"Windows 10":"Windows 8.1 or older"}(Jd)}, client hints)` : `${Jd} (client hints)`;
```

#### 8. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L33` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L33) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L33)

```diff
-       return hb ? Yb.has(hb) ? `${hb} (user agent, which may be frozen)` : `${hb} (user agent)` : "?"
+       return kd ? gd.has(kd) ? `${kd} (user agent, which may be frozen)` : `${kd} (user agent)` : "?"
```

#### 9. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L38` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L38) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L38)

```diff
-       const hb = (null !== (ub = bb.fullVersionList) && void 0 !== ub ? ub : []).filter((bb => {
+       const kd = (null !== (Jd = dd.fullVersionList) && void 0 !== Jd ? Jd : []).filter((dd => {
```

#### 10. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L48` → after: `L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L48) · [Before (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L48)

```diff
-         return `${ub} ${hb}`
+         return `${Jd} ${kd}`
```

#### 11. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L50` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L50) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L50)

```diff
-       return `${bb.platform} ${bb.platformVersion||"?"}, ${hb.join(", ")||"?"}, ${bb.architecture||"?"} ${bb.bitness||"?"}-bit, model ${bb.model||"?"}, mobile ${bb.mobile}`
+       return `${dd.platform} ${dd.platformVersion||"?"}, ${kd.join(", ")||"?"}, ${dd.architecture||"?"} ${dd.bitness||"?"}-bit, model ${dd.model||"?"}, mobile ${dd.mobile}`
```

#### 12. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L56-L57` → after: `L56-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L56-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L56-L57) · [Before (L56-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L56-L57)

```diff
-       const bb = (0, Ub.o)(),
-         ub = null !== bb && void 0 !== bb ? bb : (0, Ub.j)(),
+       const dd = (0, Pd.q)(),
+         Jd = null !== dd && void 0 !== dd ? dd : (0, Pd.i)(),
```

#### 13. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L59)

```diff
-       return [ub ? `webgl ${ub.vendor} / ${ub.renderer} (${bb?"the renderer's context":"a probe"})` : "webgl ?", hb ? `webgpu adapter ${hb.vendor||"?"}/${hb.architecture||"?"}` : "webgpu adapter ?"].join("; ")
+       return [Jd ? `webgl ${Jd.vendor} / ${Jd.renderer} (${dd?"the renderer's context":"a probe"})` : "webgl ?", kd ? `webgpu adapter ${kd.vendor||"?"}/${kd.architecture||"?"}` : "webgpu adapter ?"].join("; ")
```

#### 14. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L73-L74` → after: `L73-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L73-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L73-L74) · [Before (L73-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L73-L74)

```diff
-         Ab = (0, Bb.e)(navigator.platform, navigator.maxTouchPoints, Gb.s);
-       return [`os ${pb} ${ob}; user agent's ${null!==(bb=Xb.os.name)&&void 0!==bb?bb:"?"} ${null!==(ub=Xb.os.version)&&void 0!==ub?ub:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,Ob.getPlatformType)()}`, `browser ${null!==(hb=Xb.browser.nam … [truncated]
+         Rd = (0, pd.j)(navigator.platform, navigator.maxTouchPoints, Wd.t);
+       return [`os ${Od} ${ed}; user agent's ${null!==(dd=Ld.os.name)&&void 0!==dd?dd:"?"} ${null!==(Jd=Ld.os.version)&&void 0!==Jd?Jd:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,Nd.getPlatformType)()}`, `browser ${null!==(kd=Ld.browser.nam … [truncated]
```

#### 15. `bundles/bloxd.io/chunks/js/debugDeviceHeader.js` (Changed code · before: `L79` → after: `L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-be2e5ebdd1175a4133666d3be8f85cbc8926dd97f2c0780d5a18ee847301ec00) · [After (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L79) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/debugDeviceHeader.js#L79)

```diff
-       Hb = `failed (${String(bb)})`
+       od = `failed (${String(dd)})`
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/diagSink.js` (halsg.2bd74967 → x17cru.159bd7ce)

- **File**: `bundles/bloxd.io/chunks/js/diagSink.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8)

#### 1. `bundles/bloxd.io/chunks/js/diagSink.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/diagSink.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/diagSink.js#L4)

```diff
-   36035: (bb, ub, hb) => {
+   36588: (dd, Jd, kd) => {
```

#### 2. `bundles/bloxd.io/chunks/js/diagSink.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/diagSink.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/diagSink.js#L35)

```diff
-           this.gH()
+           this.Do()
```

#### 3. `bundles/bloxd.io/chunks/js/diagSink.js` (Changed code · before: `L46` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/diagSink.js#L46) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/diagSink.js#L46)

```diff
-           return Bb >= 55296 && Bb <= 56319 && hb--, `${ub.slice(0,hb)}...`
+           return pd >= 55296 && pd <= 56319 && kd--, `${Jd.slice(0,kd)}...`
```

#### 4. `bundles/bloxd.io/chunks/js/diagSink.js` (Changed code · before: `L80` → after: `L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8) · [After (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/diagSink.js#L80) · [Before (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/diagSink.js#L80)

```diff
-             for (const ub of hb) this.add(`[dump:${bb}] ${ub}`)
+             for (const Jd of kd) this.add(`[dump:${dd}] ${Jd}`)
```

#### 5. `bundles/bloxd.io/chunks/js/diagSink.js` (Changed code · before: `L101` → after: `L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8) · [After (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/diagSink.js#L101) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/diagSink.js#L101)

```diff
-         return null !== (bb = this.deps.storage.getItem(Bb)) && void 0 !== bb ? bb : {}
+         return null !== (dd = this.deps.storage.getItem(pd)) && void 0 !== dd ? dd : {}
```

#### 6. `bundles/bloxd.io/chunks/js/diagSink.js` (Changed code · before: `L106` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-4d0a3c380d299ec28ee3c35a2413b65e8370d412f565a21b3f2fdcbea76184a8) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/diagSink.js#L106) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/diagSink.js#L106)

```diff
-         return (null === ub || void 0 === ub ? void 0 : ub.day) === bb ? ub : {
+         return (null === Jd || void 0 === Jd ? void 0 : Jd.day) === dd ? Jd : {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/errorLogging.js` (halsg.2bd74967 → x17cru.159bd7ce)

- **File**: `bundles/bloxd.io/chunks/js/errorLogging.js` (106 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50)

#### 1. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L4)

```diff
-   6430: (bb, ub, hb) => {
+   6572: (dd, Jd, kd) => {
```

#### 2. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L71)

```diff
-       MZ: () => Fb,
+       VQ: () => td,
```

#### 3. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L178` → after: `L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L178) · [Before (L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L178)

```diff
-             if (bb.internalLogger.debug(`Registering public faro reference in the global scope using "${bb.config.globalObjectKey}" key`), bb.config.globalObjectKey in ab) return void bb.internalLogger.warn(`Skipping global registration due to key "${bb.config.globalObjectKey}" b … [truncated]
+             if (dd.internalLogger.debug(`Registering public faro reference in the global scope using "${dd.config.globalObjectKey}" key`), dd.config.globalObjectKey in Kd) return void dd.internalLogger.warn(`Skipping global registration due to key "${dd.config.globalObjectKey}" b … [truncated]
```

#### 4. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L193` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L193) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L193)

```diff
-       return Object.prototype.toString.call(bb) === `[object ${ub}]`
+       return Object.prototype.toString.call(dd) === `[object ${Jd}]`
```

#### 5. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L243` → after: `L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L243) · [Before (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L243)

```diff
-       return db(bb) ? bb : bb instanceof URL ? bb.href : !Fb(bb) && zb(null === bb || void 0 === bb ? void 0 : bb.toString) ? bb.toString() : void 0
+       return qd(dd) ? dd : dd instanceof URL ? dd.href : !td(dd) && Yd(null === dd || void 0 === dd ? void 0 : dd.toString) ? dd.toString() : void 0
```

#### 6. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L256` → after: `L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L256) · [Before (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L256)

```diff
-         return null === (ub = pb.internalLogger) || void 0 === ub || ub.info(`Web storage of type ${bb} is not available. Reason: ${hb}`), !1
+         return null === (Jd = Od.internalLogger) || void 0 === Jd || Jd.info(`Web storage of type ${dd} is not available. Reason: ${kd}`), !1
```

#### 7. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L277` → after: `L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L277) · [Before (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L277)

```diff
-       return bb === Qb ? Bu : bb === cb && Ou
+       return dd === Ad ? NJ : dd === wd && WJ
```

#### 8. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L299` → after: `L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L299) · [Before (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L299)

```diff
-       return "symbol" == Uu(ub) ? ub : ub + ""
+       return "symbol" == ZJ(Jd) ? Jd : Jd + ""
```

#### 9. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L340` → after: `L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L340) · [Before (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L340)

```diff
-         })) && void 0 !== hb ? hb : null === Ob || void 0 === Ob ? void 0 : Ob.samplingRate) && void 0 !== ub ? ub : 1,
+         })) && void 0 !== kd ? kd : null === Nd || void 0 === Nd ? void 0 : Nd.samplingRate) && void 0 !== Jd ? Jd : 1,
```

#### 10. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L434-L435` → after: `L434-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L434-L435) · [Before (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L434-L435)

```diff
-         lastActivity: null !== hb && void 0 !== hb ? hb : Ub,
-         started: null !== ub && void 0 !== ub ? ub : Ub,
+         lastActivity: null !== kd && void 0 !== kd ? kd : Pd,
+         started: null !== Jd && void 0 !== Jd ? Jd : Pd,
```

#### 11. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L466` → after: `L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L466) · [Before (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L466)

```diff
-         if (Yb = Math.min(wb + Ob, (null !== (ab = null === pb || void 0 === pb ? void 0 : pb.started) && void 0 !== ab ? ab : wb) + Gb, (null !== (Hb = null === pb || void 0 === pb ? void 0 : pb.lastActivity) && void 0 !== Hb ? Hb : wb) + Ub), !1 === bb && zu(pb)) {
+         if (gd = Math.min(ld + Nd, (null !== (Kd = null === Od || void 0 === Od ? void 0 : Od.started) && void 0 !== Kd ? Kd : ld) + Wd, (null !== (od = null === Od || void 0 === Od ? void 0 : Od.lastActivity) && void 0 !== od ? od : ld) + Pd), !1 === dd && YJ(Od)) {
```

#### 12. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L478` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L478) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L478)

```diff
-           Yb = wb + Ob, hb(bb), null === (Ab = Lb.api) || void 0 === Ab || Ab.setSession(bb.sessionMeta), null === Zb || void 0 === Zb || null === (lb = Zb.onSessionChange) || void 0 === lb || lb.call(Zb, null !== (Kb = null === pb || void 0 === pb ? void 0 : pb.sessionMeta) && v … [truncated]
+           gd = ld + Nd, kd(dd), null === (Rd = Zd.api) || void 0 === Rd || Rd.setSession(dd.sessionMeta), null === Qd || void 0 === Qd || null === (Id = Qd.onSessionChange) || void 0 === Id || Id.call(Qd, null !== (Gd = null === Od || void 0 === Od ? void 0 : Od.sessionMeta) && v … [truncated]
```

#### 13. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L507` → after: `L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L507) · [Before (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L507)

```diff
-             attributes: Ju(au(au(au({}, null === (Bb = hb.config.sessionTracking) || void 0 === Bb || null === (Bb = Bb.session) || void 0 === Bb ? void 0 : Bb.attributes), null !== (Ob = null === (Gb = hb.metas.value.session) || void 0 === Gb ? void 0 : Gb.attributes) && void 0  … [truncated]
+             attributes: XJ(oJ(oJ(oJ({}, null === (pd = kd.config.sessionTracking) || void 0 === pd || null === (pd = pd.session) || void 0 === pd ? void 0 : pd.attributes), null !== (Nd = null === (Wd = kd.metas.value.session) || void 0 === Wd ? void 0 : Wd.attributes) && void 0  … [truncated]
```

#### 14. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L512` → after: `L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L512) · [Before (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L512)

```diff
-         ab = null !== (Ub = null === (Lb = hb.metas.value.session) || void 0 === Lb ? void 0 : Lb.overrides) && void 0 !== Ub ? Ub : null === ub || void 0 === ub || null === (Yb = ub.sessionMeta) || void 0 === Yb ? void 0 : Yb.overrides;
+         Kd = null !== (Pd = null === (Zd = kd.metas.value.session) || void 0 === Zd ? void 0 : Zd.overrides) && void 0 !== Pd ? Pd : null === Jd || void 0 === Jd || null === (gd = Jd.sessionMeta) || void 0 === gd ? void 0 : gd.overrides;
```

#### 15. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L537` → after: `L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L537) · [Before (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L537)

```diff
-             ub = vu(bb ? Ub : xu({
+             Jd = SJ(dd ? Pd : FJ({
```

#### 16. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L549` → after: `L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L549) · [Before (L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L549)

```diff
-                 Yb = null !== (Ob = null !== (Gb = Bb.serviceName) && void 0 !== Gb ? Gb : null === (Ub = bb.metas.value.app) || void 0 === Ub ? void 0 : Ub.name) && void 0 !== Ob ? Ob : "";
+                 gd = null !== (Nd = null !== (Wd = pd.serviceName) && void 0 !== Wd ? Wd : null === (Pd = dd.metas.value.app) || void 0 === Pd ? void 0 : Pd.name) && void 0 !== Nd ? Nd : "";
```

#### 17. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L575` → after: `L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L575) · [Before (L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L575)

```diff
-       return JSON.stringify(null !== bb && void 0 !== bb ? bb : {}, function() {
+       return JSON.stringify(null !== dd && void 0 !== dd ? dd : {}, function() {
```

#### 18. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L741` → after: `L741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L741) · [Before (L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L741)

```diff
-             Sb = null !== (ub = null === Lb || void 0 === Lb ? void 0 : Lb.overrides) && void 0 !== ub ? ub : null === Ob || void 0 === Ob ? void 0 : Ob.session.overrides;
+             Cd = null !== (Jd = null === Zd || void 0 === Zd ? void 0 : Zd.overrides) && void 0 !== Jd ? Jd : null === Nd || void 0 === Nd ? void 0 : Nd.session.overrides;
```

#### 19. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L766` → after: `L766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L766) · [Before (L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L766)

```diff
-       return (null === bb || void 0 === bb ? void 0 : bb.persistent) ? su : Mu
+       return (null === dd || void 0 === dd ? void 0 : dd.persistent) ? UJ : yJ
```

#### 20. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L801` → after: `L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L801) · [Before (L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L801)

```diff
-       return "symbol" == fu(ub) ? ub : ub + ""
+       return "symbol" == VJ(Jd) ? Jd : Jd + ""
```

#### 21. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L892` → after: `L892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L892) · [Before (L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L892)

```diff
-             sessionId: (null === hb || void 0 === hb ? void 0 : hb.reset) ? void 0 : null !== (Yb = null === Bb || void 0 === Bb ? void 0 : Bb.id) && void 0 !== Yb ? Yb : null === (Sb = ub.session) || void 0 === Sb ? void 0 : Sb.id,
+             sessionId: (null === kd || void 0 === kd ? void 0 : kd.reset) ? void 0 : null !== (gd = null === pd || void 0 === pd ? void 0 : pd.id) && void 0 !== gd ? gd : null === (Cd = Jd.session) || void 0 === Cd ? void 0 : Cd.id,
```

#### 22. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L931` → after: `L931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L931) · [Before (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L931)

```diff
-           Object.keys(bb).length > 0 ? Gb.sessionMeta.overrides = bb : delete Gb.sessionMeta.overrides
+           Object.keys(dd).length > 0 ? Wd.sessionMeta.overrides = dd : delete Wd.sessionMeta.overrides
```

#### 23. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L950` → after: `L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L950) · [Before (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L950)

```diff
-             if (null === hb || void 0 === hb || delete hb.isSampled, 0 === Object.keys(null !== hb && void 0 !== hb ? hb : {}).length) null === (Lb = bb.meta.session) || void 0 === Lb || delete Lb.attributes;
+             if (null === kd || void 0 === kd || delete kd.isSampled, 0 === Object.keys(null !== kd && void 0 !== kd ? kd : {}).length) null === (Zd = dd.meta.session) || void 0 === Zd || delete Zd.attributes;
```

#### 24. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1016` → after: `L1016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L1016) · [Before (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L1016)

```diff
-       return hb || Bb ? [(null === bb || void 0 === bb ? void 0 : bb.includes("@")) ? bb.split("@")[0] : bb, hb ? `${Sh}:${ub}` : `${ah}:${ub}`] : [bb, ub]
+       return kd || pd ? [(null === dd || void 0 === dd ? void 0 : dd.includes("@")) ? dd.split("@")[0] : dd, kd ? `${Kk}:${Jd}` : `${lk}:${Jd}`] : [dd, Jd]
```

#### 25. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1135-L1136` → after: `L1135-L1136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1135-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L1135-L1136) · [Before (L1135-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L1135-L1136)

```diff
-         hb = null !== Ob && void 0 !== Ob ? Ob : Bb ? "DOMError" : "DOMException", ub = Gb ? `${hb}: ${Gb}` : hb
-       } else sb(bb) ? (hb = bb.name, ub = bb.message, Gb = Xh(bb)) : (xb(bb) || (Ob = eb(bb))) && (hb = Ob ? bb.constructor.name : void 0, ub = `Non-Error exception captured with keys: ${Object.keys(bb)}`);
+         kd = null !== Nd && void 0 !== Nd ? Nd : pd ? "DOMError" : "DOMException", Jd = Wd ? `${kd}: ${Wd}` : kd
+       } else Ud(dd) ? (kd = dd.name, Jd = dd.message, Wd = ek(dd)) : (Fd(dd) || (Nd = fd(dd))) && (kd = Nd ? dd.constructor.name : void 0, Jd = `Non-Error exception captured with keys: ${Object.keys(dd)}`);
```

#### 26. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1145` → after: `L1145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L1145) · [Before (L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L1145)

```diff
-       return Gb || !Sb ? ([Ub, Lb, Yb] = xh(null !== Gb && void 0 !== Gb ? Gb : ub), 0 === Yb.length && (Yb = [ab])) : Sb && ([Ub, Lb] = function(bb) {
+       return Wd || !Cd ? ([Pd, Zd, gd] = Yk(null !== Wd && void 0 !== Wd ? Wd : Jd), 0 === gd.length && (gd = [Kd])) : Cd && ([Pd, Zd] = function(dd) {
```

#### 27. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1148-L1149` → after: `L1148-L1149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1148-L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L1148-L1149) · [Before (L1148-L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L1148-L1149)

```diff
-           Ob = null !== (ub = null === Bb || void 0 === Bb ? void 0 : Bb[1]) && void 0 !== ub ? ub : nh;
-         return [null !== (hb = null === Bb || void 0 === Bb ? void 0 : Bb[2]) && void 0 !== hb ? hb : bb, Ob]
+           Nd = null !== (Jd = null === pd || void 0 === pd ? void 0 : pd[1]) && void 0 !== Jd ? Jd : Mk;
+         return [null !== (kd = null === pd || void 0 === pd ? void 0 : pd[2]) && void 0 !== kd ? kd : dd, Nd]
```

#### 28. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1177-L1178` → after: `L1177-L1178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1177-L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L1177-L1178) · [Before (L1177-L1178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L1177-L1178)

```diff
-         this.errorSerializer = Ob ? null !== (ub = null === Bb || void 0 === Bb ? void 0 : Bb.errorSerializer) && void 0 !== ub ? ub : Dh : ih;
-         const Gb = null !== (hb = null === Bb || void 0 === Bb ? void 0 : Bb.disabledLevels) && void 0 !== hb ? hb : bb.defaultDisabledLevels,
+         this.errorSerializer = Nd ? null !== (Jd = null === pd || void 0 === pd ? void 0 : pd.errorSerializer) && void 0 !== Jd ? Jd : Fk : Sk;
+         const Wd = null !== (kd = null === pd || void 0 === pd ? void 0 : pd.disabledLevels) && void 0 !== kd ? kd : dd.defaultDisabledLevels,
```

#### 29. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1181` → after: `L1181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L1181) · [Before (L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L1181)

```diff
-               const ub = null !== bb && void 0 !== bb ? bb : Ru;
+               const Jd = null !== dd && void 0 !== dd ? dd : dk;
```

#### 30. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1211-L1212` → after: `L1211-L1212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1211-L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L1211-L1212) · [Before (L1211-L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L1211-L1212)

```diff
-                     value: null !== ub && void 0 !== ub ? ub : "",
-                     type: null !== Bb && void 0 !== Bb ? Bb : "",
+                     value: null !== Jd && void 0 !== Jd ? Jd : "",
+                     type: null !== pd && void 0 !== pd ? pd : "",
```

#### 31. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1281` → after: `L1281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L1281) · [Before (L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L1281)

```diff
-               tb(Gb) ? (Bb = `Non-Error promise rejection captured with value: ${String(Gb)}`, Ob = "UnhandledRejection") : [Bb, Ob, Lb] = xh(Gb), Bb && bb.pushError(new Error(Bb), {
+               jd(Wd) ? (pd = `Non-Error promise rejection captured with value: ${String(Wd)}`, Nd = "UnhandledRejection") : [pd, Nd, Zd] = Yk(Wd), pd && dd.pushError(new Error(pd), {
```

#### 32. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1299` → after: `L1299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L1299) · [Before (L1299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L1299)

```diff
-             const bb = null !== (Bb = null === (Ob = this.notifiedView) || void 0 === Ob ? void 0 : Ob.name) && void 0 !== Bb ? Bb : eh;
+             const dd = null !== (pd = null === (Nd = this.notifiedView) || void 0 === Nd ? void 0 : Nd.name) && void 0 !== pd ? pd : nk;
```

#### 33. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1302` → after: `L1302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L1302) · [Before (L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L1302)

```diff
-               toView: null !== (Gb = hb.name) && void 0 !== Gb ? Gb : eh
+               toView: null !== (Wd = kd.name) && void 0 !== Wd ? Wd : nk
```

#### 34. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1358` → after: `L1358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L1358) · [Before (L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L1358)

```diff
-             if (ub = ub ? Bb + ">" + ub : Bb, hb.id) break;
+             if (Jd = Jd ? pd + ">" + Jd : pd, kd.id) break;
```

#### 35. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1426` → after: `L1426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L1426) · [Before (L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L1426)

```diff
-         return hb ? Sb = hb : Vh() >= 0 ? Sb = "back-forward-cache" : Lb && (document.prerendering || Th() > 0 ? Sb = "prerender" : document.wasDiscarded ? Sb = "restore" : Lb.type && (Sb = Lb.type.replace(/_/g, "-"))), {
+         return kd ? Cd = kd : tk() >= 0 ? Cd = "back-forward-cache" : Zd && (document.prerendering || wk() > 0 ? Cd = "prerender" : document.wasDiscarded ? Cd = "restore" : Zd.type && (Cd = Zd.type.replace(/_/g, "-"))), {
```

#### 36. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1512` → after: `L1512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L1512) · [Before (L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L1512)

```diff
-     const lB = () => AB ? ZB : performance.interactionCount ?? 0;
+     const vp = () => Gp ? Op : performance.interactionCount ?? 0;
```

#### 37. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1828` → after: `L1828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L1828) · [Before (L1828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L1828)

```diff
-                     const hb = bb.entries.reduce(((bb, ub) => bb.value > ub.value ? bb : ub));
+                     const kd = dd.entries.reduce(((dd, Jd) => dd.value > Jd.value ? dd : Jd));
```

#### 38. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L1954` → after: `L1954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R1954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L1954) · [Before (L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L1954)

```diff
-                 } else bb.id && Bb.set(bb, `#${bb.id}`)
+                 } else dd.id && pd.set(dd, `#${dd.id}`)
```

#### 39. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2043-L2044` → after: `L2043-L2044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2043-L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L2043-L2044) · [Before (L2043-L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L2043-L2044)

```diff
-                         Bb = Math.max(hb, Ub ? (Ub.requestStart || Ub.startTime) - Yb : 0),
-                         Ob = Math.min(bb.value, Math.max(Bb, Ub ? Ub.responseEnd - Yb : 0));
+                         pd = Math.max(kd, Pd ? (Pd.requestStart || Pd.startTime) - gd : 0),
+                         Nd = Math.min(dd.value, Math.max(pd, Pd ? Pd.responseEnd - gd : 0));
```

#### 40. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2153` → after: `L2153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L2153) · [Before (L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L2153)

```diff
-           const hb = null !== (ub = bu("com.grafana.faro.lastNavigationId", cb)) && void 0 !== ub ? ub : eh;
+           const kd = null !== (Jd = JJ("com.grafana.faro.lastNavigationId", wd)) && void 0 !== Jd ? Jd : nk;
```

#### 41. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2257` → after: `L2257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L2257) · [Before (L2257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L2257)

```diff
-         serviceWorkerTime: PB(Cb > 0 ? Yb - Cb : 0),
+         serviceWorkerTime: cp(xd > 0 ? gd - xd : 0),
```

#### 42. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2292` → after: `L2292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L2292) · [Before (L2292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L2292)

```diff
-         documentParsingTime: PB(Hb ? Gb - Hb : null),
+         documentParsingTime: cp(od ? Wd - od : null),
```

#### 43. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2296` → after: `L2296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L2296) · [Before (L2296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L2296)

```diff
-         ttfb: PB(Math.max(Sb - (null !== ub && void 0 !== ub ? ub : 0), 0)),
+         ttfb: cp(Math.max(Cd - (null !== Jd && void 0 !== Jd ? Jd : 0), 0)),
```

#### 44. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2310` → after: `L2310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L2310) · [Before (L2310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L2310)

```diff
-       return null == bb ? eh : "number" === typeof bb ? Math.round(bb > 0 ? bb : 0).toString() : bb.toString()
+       return null == dd ? nk : "number" === typeof dd ? Math.round(dd > 0 ? dd : 0).toString() : dd.toString()
```

#### 45. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2378` → after: `L2378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L2378) · [Before (L2378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L2378)

```diff
-                   const Lb = null !== (Bb = bu("com.grafana.faro.lastNavigationId", cb)) && void 0 !== Bb ? Bb : eh,
+                   const Zd = null !== (pd = JJ("com.grafana.faro.lastNavigationId", wd)) && void 0 !== pd ? pd : nk,
```

#### 46. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2438` → after: `L2438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L2438) · [Before (L2438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L2438)

```diff
-       return `data-${(bb.startsWith("data-")?bb.slice(5):bb).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
+       return `data-${(dd.startsWith("data-")?dd.slice(5):dd).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
```

#### 47. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2449` → after: `L2449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L2449) · [Before (L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L2449)

```diff
-       return !Number.isFinite(Bb) || Bb <= 0 ? (hb(`initialActivityTimeout must be a finite number greater than zero; using ${ub} ms`), ub) : Bb > 1e3 ? (hb(`initialActivityTimeout cannot exceed ${TB} ms; clamping to the maximum`), TB) : Bb
+       return !Number.isFinite(pd) || pd <= 0 ? (kd(`initialActivityTimeout must be a finite number greater than zero; using ${Jd} ms`), Jd) : pd > 1e3 ? (kd(`initialActivityTimeout cannot exceed ${Ap} ms; clamping to the maximum`), Ap) : pd
```

#### 48. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2503` → after: `L2503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L2503) · [Before (L2503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L2503)

```diff
-           const Ob = null !== (bb = Tb(arguments[0])) && void 0 !== bb ? bb : "",
+           const Nd = null !== (dd = Hd(arguments[0])) && void 0 !== dd ? dd : "",
```

#### 49. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2505` → after: `L2505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L2505) · [Before (L2505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L2505)

```diff
-             Ub = (null !== (Bb = arguments[1]) && void 0 !== Bb ? Bb : {}).method,
+             Pd = (null !== (pd = arguments[1]) && void 0 !== pd ? pd : {}).method,
```

#### 50. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2636` → after: `L2636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L2636) · [Before (L2636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L2636)

```diff
-           const Gb = null !== (ub = null === (hb = Ob.userActionsInstrumentation) || void 0 === hb ? void 0 : hb.dataAttributeName) && void 0 !== ub ? ub : fB,
+           const Wd = null !== (Jd = null === (kd = Nd.userActionsInstrumentation) || void 0 === kd ? void 0 : kd.dataAttributeName) && void 0 !== Jd ? Jd : Hp,
```

#### 51. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2660` → after: `L2660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L2660) · [Before (L2660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L2660)

```diff
-               return ub.endsWith("-name") ? `${ub.slice(0,-5)}-timeout` : `${ub}-timeout`
+               return Jd.endsWith("-name") ? `${Jd.slice(0,-5)}-timeout` : `${Jd}-timeout`
```

#### 52. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2709` → after: `L2709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L2709) · [Before (L2709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L2709)

```diff
-           super(), this.name = ub, this.attributes = Gb, this.id = Au(), this.trigger = Bb, this.parentId = null !== hb && void 0 !== hb ? hb : this.id, this.trackUserActionsExcludeItem = Ub, this.importance = Lb, this._pushEvent = Yb, this._itemBuffer = new KO, this._transports  … [truncated]
+           super(), this.name = Jd, this.attributes = Wd, this.id = IJ(), this.trigger = pd, this.parentId = null !== kd && void 0 !== kd ? kd : this.id, this.trackUserActionsExcludeItem = Pd, this.importance = Zd, this._pushEvent = gd, this._itemBuffer = new qN, this._transports  … [truncated]
```

#### 53. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2823-L2826` → after: `L2823-L2826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2823-L2826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L2823-L2826) · [Before (L2823-L2826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L2823-L2826)

```diff
-           inactivityMs: null !== (hb = null === ub || void 0 === ub ? void 0 : ub.inactivityMs) && void 0 !== hb ? hb : 100,
-           drainTimeoutMs: null !== (Bb = null === ub || void 0 === ub ? void 0 : ub.drainTimeoutMs) && void 0 !== Bb ? Bb : 1e4,
-           isOperationStart: null !== (Ob = null === ub || void 0 === ub ? void 0 : ub.isOperationStart) && void 0 !== Ob ? Ob : () => {},
-           isOperationEnd: null !== (Gb = null === ub || void 0 === ub ? void 0 : ub.isOperationEnd) && void 0 !== Gb ? Gb : () => {}
+           inactivityMs: null !== (kd = null === Jd || void 0 === Jd ? void 0 : Jd.inactivityMs) && void 0 !== kd ? kd : 100,
+           drainTimeoutMs: null !== (pd = null === Jd || void 0 === Jd ? void 0 : Jd.drainTimeoutMs) && void 0 !== pd ? pd : 1e4,
+           isOperationStart: null !== (Nd = null === Jd || void 0 === Jd ? void 0 : Jd.isOperationStart) && void 0 !== Nd ? Nd : () => {},
+           isOperationEnd: null !== (Wd = null === Jd || void 0 === Jd ? void 0 : Jd.isOperationEnd) && void 0 !== Wd ? Wd : () => {}
```

#### 54. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2891` → after: `L2891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L2891) · [Before (L2891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L2891)

```diff
-               const hb = null !== ub && void 0 !== ub ? ub : location.href;
+               const kd = null !== Jd && void 0 !== Jd ? Jd : location.href;
```

#### 55. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2972` → after: `L2972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L2972) · [Before (L2972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L2972)

```diff
-     var qO = hb(6433);
+     var rN = kd(6575);
```

#### 56. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L2996-L3000` → after: `L2996-L3000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R2996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L2996-L3000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L2996-L3000) · [Before (L2996-L3000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L2996-L3000)

```diff
-             name: null !== Bb && void 0 !== Bb ? Bb : eh,
-             version: null !== Ob && void 0 !== Ob ? Ob : eh,
-             os: `${null!==Gb&&void 0!==Gb?Gb:eh} ${null!==Ub&&void 0!==Ub?Ub:eh}`,
-             userAgent: null !== hb && void 0 !== hb ? hb : eh,
-             language: null !== Lb && void 0 !== Lb ? Lb : eh,
+             name: null !== pd && void 0 !== pd ? pd : nk,
+             version: null !== Nd && void 0 !== Nd ? Nd : nk,
+             os: `${null!==Wd&&void 0!==Wd?Wd:nk} ${null!==Pd&&void 0!==Pd?Pd:nk}`,
+             userAgent: null !== kd && void 0 !== kd ? kd : nk,
+             language: null !== Zd && void 0 !== Zd ? Zd : nk,
```

#### 57. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3002` → after: `L3002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L3002) · [Before (L3002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L3002)

```diff
-             brands: null !== Sb && void 0 !== Sb ? Sb : eh,
+             brands: null !== Cd && void 0 !== Cd ? Cd : nk,
```

#### 58. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3023` → after: `L3023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L3023) · [Before (L3023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L3023)

```diff
-         id: null !== (ub = null === (hb = pb.config) || void 0 === hb || null === (hb = hb.sessionTracking) || void 0 === hb || null === (Bb = hb.generateSessionId) || void 0 === Bb ? void 0 : Bb.call(hb)) && void 0 !== ub ? ub : Au(),
+         id: null !== (Jd = null === (kd = Od.config) || void 0 === kd || null === (kd = kd.sessionTracking) || void 0 === kd || null === (pd = kd.generateSessionId) || void 0 === pd ? void 0 : pd.call(kd)) && void 0 !== Jd ? Jd : IJ(),
```

#### 59. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3100` → after: `L3100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L3100) · [Before (L3100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L3100)

```diff
-         return this.unpatchedConsole[null !== (ub = this.options.level) && void 0 !== ub ? ub : Kh.DEBUG]("New event", uG([bb]))
+         return this.unpatchedConsole[null !== (Jd = this.options.level) && void 0 !== Jd ? Jd : xk.DEBUG]("New event", NW([dd]))
```

#### 60. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3169` → after: `L3169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L3169) · [Before (L3169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L3169)

```diff
-                 const Hb = Math.min(null !== (Ub = ab.retryAfterMs) && void 0 !== Ub ? Ub : bb.options.retry.initialBackoffMs * Math.pow(bb.options.retry.backoffMultiplier, Gb - 1), bb.options.retry.maxBackoffMs);
+                 const od = Math.min(null !== (Pd = Kd.retryAfterMs) && void 0 !== Pd ? Pd : dd.options.retry.initialBackoffMs * Math.pow(dd.options.retry.backoffMultiplier, Wd - 1), dd.options.retry.maxBackoffMs);
```

#### 61. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3319-L3321` → after: `L3319-L3321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3319-L3321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L3319-L3321) · [Before (L3319-L3321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L3319-L3321)

```diff
-         super(), this.options = bb, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = hh, this.pendingCustomSends = 0, this.getNow = null !== (ub = bb.getNow) && void 0 !== ub ? ub : Date.now, this.requestTimeoutMs = null !== (hb = bb.requestTimeoutMs) && void 0 … [truncated]
-           bufferSize: null !== (Ob = bb.bufferSize) && void 0 !== Ob ? Ob : 30,
-           concurrency: null !== (Gb = bb.concurrency) && void 0 !== Gb ? Gb : 5,
+         super(), this.options = dd, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = pk, this.pendingCustomSends = 0, this.getNow = null !== (Jd = dd.getNow) && void 0 !== Jd ? Jd : Date.now, this.requestTimeoutMs = null !== (kd = dd.requestTimeoutMs) && void 0 … [truncated]
+           bufferSize: null !== (Nd = dd.bufferSize) && void 0 !== Nd ? Nd : 30,
+           concurrency: null !== (Wd = dd.concurrency) && void 0 !== Wd ? Wd : 5,
```

#### 62. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3323-L3326` → after: `L3323-L3326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3323-L3326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L3323-L3326) · [Before (L3323-L3326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L3323-L3326)

```diff
-             maxAttempts: null !== (Ub = null === (Lb = bb.retry) || void 0 === Lb ? void 0 : Lb.maxAttempts) && void 0 !== Ub ? Ub : 3,
-             initialBackoffMs: null !== (Yb = null !== (Sb = null === (ab = bb.retry) || void 0 === ab ? void 0 : ab.initialBackoffMs) && void 0 !== Sb ? Sb : bb.defaultRateLimitBackoffMs) && void 0 !== Yb ? Yb : 1e3,
-             maxBackoffMs: null !== (Hb = null === (wb = bb.retry) || void 0 === wb ? void 0 : wb.maxBackoffMs) && void 0 !== Hb ? Hb : 3e4,
-             backoffMultiplier: null !== (Zb = null === (Xb = bb.retry) || void 0 === Xb ? void 0 : Xb.backoffMultiplier) && void 0 !== Zb ? Zb : 2
+             maxAttempts: null !== (Pd = null === (Zd = dd.retry) || void 0 === Zd ? void 0 : Zd.maxAttempts) && void 0 !== Pd ? Pd : 3,
+             initialBackoffMs: null !== (gd = null !== (Cd = null === (Kd = dd.retry) || void 0 === Kd ? void 0 : Kd.initialBackoffMs) && void 0 !== Cd ? Cd : dd.defaultRateLimitBackoffMs) && void 0 !== gd ? gd : 1e3,
+             maxBackoffMs: null !== (od = null === (ld = dd.retry) || void 0 === ld ? void 0 : ld.maxBackoffMs) && void 0 !== od ? od : 3e4,
+             backoffMultiplier: null !== (Qd = null === (Ld = dd.retry) || void 0 === Ld ? void 0 : Ld.backoffMultiplier) && void 0 !== Qd ? Qd : 2
```

#### 63. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3329` → after: `L3329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L3329) · [Before (L3329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L3329)

```diff
-           getRandom: null !== (pb = bb.getRandom) && void 0 !== pb ? pb : Math.random,
+           getRandom: null !== (Od = dd.getRandom) && void 0 !== Od ? Od : Math.random,
```

#### 64. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3331` → after: `L3331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L3331) · [Before (L3331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L3331)

```diff
-             this.logDebug(`Retrying failed request after ${bb}ms. Attempt ${ub}.`)
+             this.logDebug(`Retrying failed request after ${dd}ms. Attempt ${Jd}.`)
```

#### 65. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3334-L3335` → after: `L3334-L3335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3334-L3335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L3334-L3335) · [Before (L3334-L3335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L3334-L3335)

```diff
-           size: null !== (ob = bb.bufferSize) && void 0 !== ob ? ob : 30,
-           concurrency: null !== (Ab = bb.concurrency) && void 0 !== Ab ? Ab : 5
+           size: null !== (ed = dd.bufferSize) && void 0 !== ed ? ed : 30,
+           concurrency: null !== (Rd = dd.concurrency) && void 0 !== Rd ? Rd : 5
```

#### 66. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3410` → after: `L3410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L3410) · [Before (L3410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L3410)

```diff
-         return [this.options.url].concat(null !== (bb = this.config.ignoreUrls) && void 0 !== bb ? bb : [])
+         return [this.options.url].concat(null !== (dd = this.config.ignoreUrls) && void 0 !== dd ? dd : [])
```

#### 67. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3422` → after: `L3422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L3422) · [Before (L3422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L3422)

```diff
-             Lb = null !== (Bb = ub.options.requestOptions) && void 0 !== Bb ? Bb : {},
+             Zd = null !== (pd = Jd.options.requestOptions) && void 0 !== pd ? pd : {},
```

#### 68. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3566` → after: `L3566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L3566) · [Before (L3566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L3566)

```diff
-           return Number.isFinite(bb) ? bb : Number.POSITIVE_INFINITY
+           return Number.isFinite(dd) ? dd : Number.POSITIVE_INFINITY
```

#### 69. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3623` → after: `L3623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L3623) · [Before (L3623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L3623)

```diff
-               day: Number(null !== Sb && void 0 !== Sb ? Sb : ab),
+               day: Number(null !== Cd && void 0 !== Cd ? Cd : Kd),
```

#### 70. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3722` → after: `L3722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L3722) · [Before (L3722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L3722)

```diff
-         bb.error(`${hb.prefix}\n`, ...Bb)
+         dd.error(`${kd.prefix}\n`, ...pd)
```

#### 71. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3725` → after: `L3725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L3725) · [Before (L3725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L3725)

```diff
-         bb.warn(`${hb.prefix}\n`, ...Bb)
+         dd.warn(`${kd.prefix}\n`, ...pd)
```

#### 72. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3728` → after: `L3728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L3728) · [Before (L3728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L3728)

```diff
-         bb.info(`${hb.prefix}\n`, ...Bb)
+         dd.info(`${kd.prefix}\n`, ...pd)
```

#### 73. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3731` → after: `L3731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L3731) · [Before (L3731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L3731)

```diff
-         bb.debug(`${hb.prefix}\n`, ...Bb)
+         dd.debug(`${kd.prefix}\n`, ...pd)
```

#### 74. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3766` → after: `L3766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L3766) · [Before (L3766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L3766)

```diff
-         dataAttributeName: cB(null !== (hb = null === (Ob = bb.userActionsInstrumentation) || void 0 === Ob ? void 0 : Ob.dataAttributeName) && void 0 !== hb ? hb : fB),
+         dataAttributeName: dN(null !== (kd = null === (Nd = dd.userActionsInstrumentation) || void 0 === Nd ? void 0 : Nd.dataAttributeName) && void 0 !== kd ? kd : Hp),
```

#### 75. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3785` → after: `L3785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L3785) · [Before (L3785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L3785)

```diff
-         ignoreUrls: [...null !== (Lb = bb.ignoreUrls) && void 0 !== Lb ? Lb : [], ...db ? [db] : [], /\/collect(?:\/[\w]*)?$/],
+         ignoreUrls: [...null !== (Zd = dd.ignoreUrls) && void 0 !== Zd ? Zd : [], ...qd ? [qd] : [], /\/collect(?:\/[\w]*)?$/],
```

#### 76. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3811` → after: `L3811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L3811) · [Before (L3811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L3811)

```diff
-       } = null !== (ub = null === bb || void 0 === bb ? void 0 : bb.pageTracking) && void 0 !== ub ? ub : {}, Ub = [FO, fO, jG({
+       } = null !== (Jd = null === dd || void 0 === dd ? void 0 : dd.pageTracking) && void 0 !== Jd ? Jd : {}, Pd = [zN, HN, MW({
```

#### 77. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3814` → after: `L3814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L3814) · [Before (L3814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L3814)

```diff
-       }), ...null !== (hb = bb.metas) && void 0 !== hb ? hb : [], TO];
+       }), ...null !== (kd = dd.metas) && void 0 !== kd ? kd : [], AN];
```

#### 78. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3826` → after: `L3826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L3826) · [Before (L3826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L3826)

```diff
-         session: au(au({}, null !== (Bb = null === hb || void 0 === hb ? void 0 : hb.session) && void 0 !== Bb ? Bb : {}), {}, {
+         session: oJ(oJ({}, null !== (pd = null === kd || void 0 === kd ? void 0 : kd.session) && void 0 !== pd ? pd : {}), {}, {
```

#### 79. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3844` → after: `L3844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L3844) · [Before (L3844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L3844)

```diff
-       const ub = `__faroBundleId_${bb}`,
+       const Jd = `__faroBundleId_${dd}`,
```

#### 80. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3848` → after: `L3848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L3848) · [Before (L3848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L3848)

```diff
-       return "string" === typeof Bb && "" !== Bb ? Bb : void 0
+       return "string" === typeof pd && "" !== pd ? pd : void 0
```

#### 81. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3855` → after: `L3855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L3855) · [Before (L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L3855)

```diff
-           return null === ab || void 0 === ab ? void 0 : ab[`__faroGitHash_${bb}`]
+           return null === Kd || void 0 === Kd ? void 0 : Kd[`__faroGitHash_${dd}`]
```

#### 82. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3869` → after: `L3869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L3869) · [Before (L3869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L3869)

```diff
-       Ub && bb.api.setSession(Ub), bb.config.app && (Gb.app = Qu(Qu({}, bb.config.app), Gb.app)), bb.config.user && (Gb.user = bb.config.user), bb.config.view && (Gb.view = bb.config.view), bb.metas.add(Gb, ...null !== (hb = bb.config.metas) && void 0 !== hb ? hb : [])
+       Pd && dd.api.setSession(Pd), dd.config.app && (Wd.app = AJ(AJ({}, dd.config.app), Wd.app)), dd.config.user && (Wd.user = dd.config.user), dd.config.view && (Wd.view = dd.config.view), dd.metas.add(Wd, ...null !== (kd = dd.config.metas) && void 0 !== kd ? kd : [])
```

#### 83. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3874` → after: `L3874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L3874) · [Before (L3874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L3874)

```diff
-         this.signalBuffer = [], this.itemLimit = null !== (hb = null === ub || void 0 === ub ? void 0 : ub.itemLimit) && void 0 !== hb ? hb : 50, this.sendTimeout = null !== (Bb = null === ub || void 0 === ub ? void 0 : ub.sendTimeout) && void 0 !== Bb ? Bb : 250, this.paused = ( … [truncated]
+         this.signalBuffer = [], this.itemLimit = null !== (kd = null === Jd || void 0 === Jd ? void 0 : Jd.itemLimit) && void 0 !== kd ? kd : 50, this.sendTimeout = null !== (pd = null === Jd || void 0 === Jd ? void 0 : Jd.sendTimeout) && void 0 !== pd ? pd : 250, this.paused = ( … [truncated]
```

#### 84. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3928` → after: `L3928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L3928) · [Before (L3928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L3928)

```diff
-           for (const Bb of Gb) ub.debug(`Transporting item using ${Bb.name}\n`, hb), Bb.isBatched() && Bb.send(hb)
+           for (const pd of Wd) Jd.debug(`Transporting item using ${pd.name}\n`, kd), pd.isBatched() && pd.send(kd)
```

#### 85. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3939` → after: `L3939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L3939) · [Before (L3939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L3939)

```diff
-             ub.debug(`Adding "${Ob.name}" transport`), Gb.some((bb => bb === Ob)) ? ub.warn(`Transport ${Ob.name} is already added`) : (Ob.unpatchedConsole = bb, Ob.internalLogger = ub, Ob.config = hb, Ob.metas = Bb, Gb.push(Ob))
+             Jd.debug(`Adding "${Nd.name}" transport`), Wd.some((dd => dd === Nd)) ? Jd.warn(`Transport ${Nd.name} is already added`) : (Nd.unpatchedConsole = dd, Nd.internalLogger = Jd, Nd.config = kd, Nd.metas = pd, Wd.push(Nd))
```

#### 86. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3971` → after: `L3971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L3971) · [Before (L3971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L3971)

```diff
-                   ub.debug(`Transporting item using ${Lb.name}\n`, Ob), Lb.isBatched() ? (null === (Ub = hb.batching) || void 0 === Ub ? void 0 : Ub.enabled) || Lb.send([Ob]) : Lb.send(Ob)
+                   Jd.debug(`Transporting item using ${Zd.name}\n`, Nd), Zd.isBatched() ? (null === (Pd = kd.batching) || void 0 === Pd ? void 0 : Pd.enabled) || Zd.send([Nd]) : Zd.send(Nd)
```

#### 87. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L3984-L3985` → after: `L3984-L3985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R3984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L3984-L3985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L3984-L3985) · [Before (L3984-L3985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L3984-L3985)

```diff
-             ub.debug(`Removing "${bb.name}" transport`);
-             const hb = Gb.indexOf(bb); - 1 !== hb ? Gb.splice(hb, 1) : ub.warn(`Transport "${bb.name}" is not added`)
+             Jd.debug(`Removing "${dd.name}" transport`);
+             const kd = Wd.indexOf(dd); - 1 !== kd ? Wd.splice(kd, 1) : Jd.warn(`Transport "${dd.name}" is not added`)
```

#### 88. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4010` → after: `L4010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L4010) · [Before (L4010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L4010)

```diff
-       return qG = null !== (ub = bb.unpatchedConsole) && void 0 !== ub ? ub : qG, qG
+       return rW = null !== (Jd = dd.unpatchedConsole) && void 0 !== Jd ? Jd : rW, rW
```

#### 89. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4030` → after: `L4030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L4030) · [Before (L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L4030)

```diff
-       yG = null !== (Lb = hb.parseStacktrace) && void 0 !== Lb ? Lb : yG;
+       tW = null !== (Zd = kd.parseStacktrace) && void 0 !== Zd ? Zd : tW;
```

#### 90. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4032` → after: `L4032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L4032) · [Before (L4032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L4032)

```diff
-           ub.debug("Changing stacktrace parser"), yG = null !== bb && void 0 !== bb ? bb : yG
+           Jd.debug("Changing stacktrace parser"), tW = null !== dd && void 0 !== dd ? dd : tW
```

#### 91. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4061` → after: `L4061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L4061) · [Before (L4061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L4061)

```diff
-             }(ab, null !== ob && void 0 !== ob ? ob : bb)) try {
+             }(Kd, null !== ed && void 0 !== ed ? ed : dd)) try {
```

#### 92. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4070` → after: `L4070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L4070) · [Before (L4070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L4070)

```diff
-               }(null !== ob && void 0 !== ob ? ob : bb)), null !== Zb && void 0 !== Zb ? Zb : {})),
+               }(null !== ed && void 0 !== ed ? ed : dd)), null !== Qd && void 0 !== Qd ? Qd : {})),
```

#### 93. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4088` → after: `L4088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L4088) · [Before (L4088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L4088)

```diff
-             Sb = null !== (Kb = Sb) && void 0 !== Kb ? Kb : bb.stack ? null === yG || void 0 === yG ? void 0 : yG(bb).frames : void 0, (null === Sb || void 0 === Sb ? void 0 : Sb.length) && (db.stacktrace = {
+             Cd = null !== (Gd = Cd) && void 0 !== Gd ? Gd : dd.stack ? null === tW || void 0 === tW ? void 0 : tW(dd).frames : void 0, (null === Cd || void 0 === Cd ? void 0 : Cd.length) && (qd.stacktrace = {
```

#### 94. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4232` → after: `L4232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L4232) · [Before (L4232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L4232)

```diff
-                     domain: null !== Sb && void 0 !== Sb ? Sb : hb.eventDomain,
+                     domain: null !== Cd && void 0 !== Cd ? Cd : kd.eventDomain,
```

#### 95. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4314` → after: `L4314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L4314) · [Before (L4314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L4314)

```diff
-             const hb = db(bb) ? Qu(Qu({}, null !== (ub = null === Ob || void 0 === Ob ? void 0 : Ob.page) && void 0 !== ub ? ub : Hb()), {}, {
+             const kd = qd(dd) ? AJ(AJ({}, null !== (Jd = null === Nd || void 0 === Nd ? void 0 : Nd.page) && void 0 !== Jd ? Jd : od()), {}, {
```

#### 96. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4335` → after: `L4335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L4335) · [Before (L4335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L4335)

```diff
-         const Sb = null !== (Lb = hb.logArgsSerializer) && void 0 !== Lb ? Lb : ih;
+         const Cd = null !== (Zd = kd.logArgsSerializer) && void 0 !== Zd ? Zd : Sk;
```

#### 97. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4350` → after: `L4350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L4350) · [Before (L4350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L4350)

```diff
-                   level: null !== ab && void 0 !== ab ? ab : "log",
+                   level: null !== Kd && void 0 !== Kd ? Kd : "log",
```

#### 98. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4469` → after: `L4469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L4469) · [Before (L4469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L4469)

```diff
-                 Ob = null !== (ub = hb) && void 0 !== ub ? ub : Gb;
+                 Nd = null !== (Jd = kd) && void 0 !== Jd ? Jd : Wd;
```

#### 99. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4503` → after: `L4503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L4503) · [Before (L4503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L4503)

```diff
-                 ub.debug(`Adding "${Lb.name}" instrumentation`), Ub.some((bb => bb.name === Lb.name)) ? ub.warn(`Instrumentation ${Lb.name} is already added`) : (Lb.unpatchedConsole = bb, Lb.internalLogger = ub, Lb.config = hb, Lb.metas = Bb, Lb.transports = Ob, Lb.api = Gb, Ub.p … [truncated]
+                 Jd.debug(`Adding "${Zd.name}" instrumentation`), Pd.some((dd => dd.name === Zd.name)) ? Jd.warn(`Instrumentation ${Zd.name} is already added`) : (Zd.unpatchedConsole = dd, Zd.internalLogger = Jd, Zd.config = kd, Zd.metas = pd, Zd.transports = Nd, Zd.api = Wd, Pd.p … [truncated]
```

#### 100. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4514-L4516` → after: `L4514-L4516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4514-L4516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L4514-L4516) · [Before (L4514-L4516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L4514-L4516)

```diff
-                 ub.debug(`Removing "${bb.name}" instrumentation`);
-                 const Ob = Ub.reduce(((ub, hb, Bb) => null === ub && hb.name === bb.name ? Bb : null), null);
-                 null !== Ob ? (null === (hb = (Bb = Ub[Ob]).destroy) || void 0 === hb || hb.call(Bb), Ub.splice(Ob, 1)) : ub.warn(`Instrumentation "${bb.name}" is not added`)
+                 Jd.debug(`Removing "${dd.name}" instrumentation`);
+                 const Nd = Pd.reduce(((Jd, kd, pd) => null === Jd && kd.name === dd.name ? pd : null), null);
+                 null !== Nd ? (null === (kd = (pd = Pd[Nd]).destroy) || void 0 === kd || kd.call(pd), Pd.splice(Nd, 1)) : Jd.warn(`Instrumentation "${dd.name}" is not added`)
```

#### 101. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4536` → after: `L4536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L4536) · [Before (L4536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L4536)

```diff
-   6433: function(bb, ub, hb) {
+   6575: function(dd, Jd, kd) {
```

#### 102. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4593` → after: `L4593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L4593) · [Before (L4593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L4593)

```diff
-           if (typeof bb === Sb) return bb = bb.replace(/^\s\s*/, ""), typeof ub === Lb ? bb : bb.substring(0, 500)
+           if (typeof dd === Cd) return dd = dd.replace(/^\s\s*/, ""), typeof Jd === Zd ? dd : dd.substring(0, 500)
```

#### 103. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4601` → after: `L4601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L4601) · [Before (L4601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L4601)

```diff
-                 for (Ob = 0; Ob < Zb.length; Ob++) ab = Sb[++Bb], typeof(Lb = Zb[Ob]) === Yb && Lb.length > 0 ? 2 === Lb.length ? typeof Lb[1] == Ub ? this[Lb[0]] = Lb[1].call(this, ab) : this[Lb[0]] = Lb[1] : 3 === Lb.length ? typeof Lb[1] !== Ub || Lb[1].exec && Lb[1].test ? th … [truncated]
+                 for (Nd = 0; Nd < Qd.length; Nd++) Kd = Cd[++pd], typeof(Zd = Qd[Nd]) === gd && Zd.length > 0 ? 2 === Zd.length ? typeof Zd[1] == Pd ? this[Zd[0]] = Zd[1].call(this, Kd) : this[Zd[0]] = Zd[1] : 3 === Zd.length ? typeof Zd[1] !== Pd || Zd[1].exec && Zd[1].test ? th … [truncated]
```

#### 104. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L4609-L4610` → after: `L4609-L4610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R4609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L4609-L4610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L4609-L4610) · [Before (L4609-L4610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L4609-L4610)

```diff
-                 if (Qb(ub[hb][Bb], bb)) return "?" === hb ? Gb : hb
-             } else if (Qb(ub[hb], bb)) return "?" === hb ? Gb : hb;
+                 if (Ad(Jd[kd][pd], dd)) return "?" === kd ? Wd : kd
+             } else if (Ad(Jd[kd], dd)) return "?" === kd ? Wd : kd;
```

#### 105. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L5339` → after: `L5339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R5339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L5339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L5339) · [Before (L5339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L5339)

```diff
-           }, this.UX = function() {
+           }, this.eL = function() {
```

#### 106. `bundles/bloxd.io/chunks/js/errorLogging.js` (Changed code · before: `L5349` → after: `L5349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50R5349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-ecaa53b29d6d322ad2efd2bd0821b459970e3a17755aca047bd735a1cca24b50) · [After (L5349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/errorLogging.js#L5349) · [Before (L5349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/errorLogging.js#L5349)

```diff
-               engine: this.UX(),
+               engine: this.eL(),
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/fa-renderer.js` (halsg.2bd74967 → x17cru.159bd7ce)

- **File**: `bundles/bloxd.io/chunks/js/fa-renderer.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741)

#### 1. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/fa-renderer.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/fa-renderer.js#L1)

```diff
- /*! For license information please see halsg.fa-renderer.3e9f7f31.chunk.js.LICENSE.txt */
+ /*! For license information please see x17cru.fa-renderer.fcfbf671.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L5` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/fa-renderer.js#L5) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/fa-renderer.js#L5)

```diff
-   6419: (bb, ub, hb) => {
+   6560: (dd, Jd, kd) => {
```

#### 3. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L9-L10` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/fa-renderer.js#L9-L10) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/fa-renderer.js#L9-L10)

```diff
-     var Bb = hb(6412),
-       Ob = hb(4729),
+     var pd = kd(6551),
+       Nd = kd(4845),
```

#### 4. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L12` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/fa-renderer.js#L12) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/fa-renderer.js#L12)

```diff
-       Ub = hb(49);
+       Pd = kd(56);
```

#### 5. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/fa-renderer.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/fa-renderer.js#L32)

```diff
-         return "symbol" == typeof ub ? ub : ub + ""
+         return "symbol" == typeof Jd ? Jd : Jd + ""
```

#### 6. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L122` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/fa-renderer.js#L122) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/fa-renderer.js#L122)

```diff
-       var ob = hb(6426);
+       var ed = kd(6567);
```

#### 7. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L193` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/fa-renderer.js#L193) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/fa-renderer.js#L193)

```diff
-         return Db[bb] ? bb : null
+         return Md[dd] ? dd : null
```

#### 8. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L200` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/fa-renderer.js#L200) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/fa-renderer.js#L200)

```diff
-       return ub = bb, (ub -= 0) === ub ? bb : (bb = bb.replace(/[\-_\s]+(.)?/g, (function(bb, ub) {
+       return Jd = dd, (Jd -= 0) === Jd ? dd : (dd = dd.replace(/[\-_\s]+(.)?/g, (function(dd, Jd) {
```

#### 9. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L212` → after: `L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/fa-renderer.js#L212) · [Before (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/fa-renderer.js#L212)

```diff
-       return bb && "object" === Zb(bb) && bb.prefix && bb.iconName && bb.icon ? bb : Bb.parse.icon ? Bb.parse.icon(bb) : null === bb ? null : bb && "object" === Zb(bb) && bb.prefix && bb.iconName ? bb : Array.isArray(bb) && 2 === bb.length ? {
+       return dd && "object" === Qd(dd) && dd.prefix && dd.iconName && dd.icon ? dd : pd.parse.icon ? pd.parse.icon(dd) : null === dd ? null : dd && "object" === Qd(dd) && dd.prefix && dd.iconName ? dd : Array.isArray(dd) && 2 === dd.length ? {
```

#### 10. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L337` → after: `L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/fa-renderer.js#L337) · [Before (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/fa-renderer.js#L337)

```diff
-                 return Ob.startsWith("webkit") ? bb[(hb = Ob, hb.charAt(0).toUpperCase() + hb.slice(1))] = Gb : bb[Ob] = Gb, bb
+                 return Nd.startsWith("webkit") ? dd[(kd = Nd, kd.charAt(0).toUpperCase() + kd.slice(1))] = Wd : dd[Nd] = Wd, dd
```

#### 11. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L341` → after: `L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/fa-renderer.js#L341) · [Before (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/fa-renderer.js#L341)

```diff
-               0 === ub.indexOf("aria-") || 0 === ub.indexOf("data-") ? bb.attrs[ub.toLowerCase()] = Bb : bb.attrs[lb(ub)] = Bb
+               0 === Jd.indexOf("aria-") || 0 === Jd.indexOf("data-") ? dd.attrs[Jd.toLowerCase()] = pd : dd.attrs[Id(Jd)] = pd
```

#### 12. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L369-L370` → after: `L369-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/fa-renderer.js#L369-L370) · [Before (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/fa-renderer.js#L369-L370)

```diff
-   4733: (bb, ub, hb) => {
-     var Bb = hb(4740);
+   4854: (dd, Jd, kd) => {
+     var pd = kd(4856);
```

#### 13. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L413-L414` → after: `L413-L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/fa-renderer.js#L413-L414) · [Before (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/fa-renderer.js#L413-L414)

```diff
-   4729: (bb, ub, hb) => {
-     bb.exports = hb(4733)()
+   4845: (dd, Jd, kd) => {
+     dd.exports = kd(4854)()
```

#### 14. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L416` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/fa-renderer.js#L416) · [Before (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/fa-renderer.js#L416)

```diff
-   4740: bb => {
+   4856: dd => {
```

#### 15. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L419` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/fa-renderer.js#L419) · [Before (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/fa-renderer.js#L419)

```diff
-   6412: (bb, ub, hb) => {
+   6551: (dd, Jd, kd) => {
```

#### 16. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L565` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/fa-renderer.js#L565) · [Before (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/fa-renderer.js#L565)

```diff
-       return "symbol" == typeof ub ? ub : ub + ""
+       return "symbol" == typeof Jd ? Jd : Jd + ""
```

#### 17. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L1586` → after: `L1586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R1586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/fa-renderer.js#L1586) · [Before (L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/fa-renderer.js#L1586)

```diff
-         hb = void 0 === ub ? vb : ub,
+         kd = void 0 === Jd ? Sd : Jd,
```

#### 18. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L1590` → after: `L1590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R1590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/fa-renderer.js#L1590) · [Before (L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/fa-renderer.js#L1590)

```diff
-         Gb = bb in Oh.styles ? bb : null;
+         Wd = dd in Wk.styles ? dd : null;
```

#### 19. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L1631` → after: `L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R1631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/fa-renderer.js#L1631) · [Before (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/fa-renderer.js#L1631)

```diff
-             Bb ? hb = Bb : bb && ub.push(bb)
+             pd ? kd = pd : dd && Jd.push(dd)
```

#### 20. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L1834` → after: `L1834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R1834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/fa-renderer.js#L1834) · [Before (L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/fa-renderer.js#L1834)

```diff
-           ub = void 0 === bb ? jb : bb;
+           Jd = void 0 === dd ? sd : dd;
```

#### 21. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L1871` → after: `L1871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R1871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L1871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/fa-renderer.js#L1871) · [Before (L1871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/fa-renderer.js#L1871)

```diff
-         Zb = Bb.found ? Bb : hb,
+         Qd = pd.found ? pd : kd,
```

#### 22. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2056` → after: `L2056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/fa-renderer.js#L2056) · [Before (L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/fa-renderer.js#L2056)

```diff
-       UB = qu.measurePerformance && Db && Db.mark && Db.measure ? Db : {
+       gp = cJ.measurePerformance && Md && Md.mark && Md.measure ? Md : {
```

#### 23. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2086` → after: `L2086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/fa-renderer.js#L2086) · [Before (L2086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/fa-renderer.js#L2086)

```diff
-         hb = void 0 === ub ? "svg" === bb.tag ? wB : ZB : ub;
+         kd = void 0 === Jd ? "svg" === dd.tag ? Lp : Op : Jd;
```

#### 24. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2137` → after: `L2137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/fa-renderer.js#L2137) · [Before (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/fa-renderer.js#L2137)

```diff
-       var hb = "function" === typeof ub ? ub : aB;
+       var kd = "function" === typeof Jd ? Jd : lp;
```

#### 25. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2162` → after: `L2162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/fa-renderer.js#L2162) · [Before (L2162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/fa-renderer.js#L2162)

```diff
-           hb = void 0 === ub ? aB : ub,
+           kd = void 0 === Jd ? lp : Jd,
```

#### 26. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2164` → after: `L2164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/fa-renderer.js#L2164) · [Before (L2164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/fa-renderer.js#L2164)

```diff
-           Ob = void 0 === Bb ? aB : Bb,
+           Nd = void 0 === pd ? lp : pd,
```

#### 27. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2166` → after: `L2166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/fa-renderer.js#L2166) · [Before (L2166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/fa-renderer.js#L2166)

```diff
-           Ub = void 0 === Gb ? aB : Gb,
+           Pd = void 0 === Wd ? lp : Wd,
```

#### 28. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2168` → after: `L2168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/fa-renderer.js#L2168) · [Before (L2168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/fa-renderer.js#L2168)

```diff
-           Yb = void 0 === Lb ? jb : Lb;
+           gd = void 0 === Zd ? sd : Zd;
```

#### 29. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2307` → after: `L2307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/fa-renderer.js#L2307) · [Before (L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/fa-renderer.js#L2307)

```diff
-           Bb = void 0 === hb ? Vu : hb,
+           pd = void 0 === kd ? uJ : kd,
```

#### 30. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2359` → after: `L2359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/fa-renderer.js#L2359) · [Before (L2359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/fa-renderer.js#L2359)

```diff
-                 Bb = (ub || {}).icon ? ub : Fh(ub || {}),
+                 pd = (Jd || {}).icon ? Jd : Vk(Jd || {}),
```

#### 31. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2361` → after: `L2361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/fa-renderer.js#L2361) · [Before (L2361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/fa-renderer.js#L2361)

```diff
-               return Ob && (Ob = (Ob || {}).icon ? Ob : Fh(Ob || {})), bb(Bb, Yb(Yb({}, hb), {}, {
+               return Nd && (Nd = (Nd || {}).icon ? Nd : Vk(Nd || {})), dd(pd, gd(gd({}, kd), {}, {
```

#### 32. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2378` → after: `L2378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/fa-renderer.js#L2378) · [Before (L2378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/fa-renderer.js#L2378)

```diff
-               hb = void 0 === ub ? jb : ub,
+               kd = void 0 === Jd ? sd : Jd,
```

#### 33. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2518` → after: `L2518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/fa-renderer.js#L2518) · [Before (L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/fa-renderer.js#L2518)

```diff
-                 Bb = void 0 === hb ? Vu : hb,
+                 pd = void 0 === kd ? uJ : kd,
```

#### 34. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2821` → after: `L2821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/fa-renderer.js#L2821) · [Before (L2821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/fa-renderer.js#L2821)

```diff
-           return bb.includes("(") ? bb : bb.split(",").map((function(bb) {
+           return dd.includes("(") ? dd : dd.split(",").map((function(dd) {
```

#### 35. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L2914` → after: `L2914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R2914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L2914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/fa-renderer.js#L2914) · [Before (L2914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/fa-renderer.js#L2914)

```diff
-               hb = void 0 === ub ? jb : ub;
+               kd = void 0 === Jd ? sd : Jd;
```

#### 36. `bundles/bloxd.io/chunks/js/fa-renderer.js` (Changed code · before: `L3280` → after: `L3280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741R3280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-31be1cbb7d5065e95a5026c9c4e100ac8a5def5ae87f3b2342af927a1b3c6741) · [After (L3280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/fa-renderer.js#L3280) · [Before (L3280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/fa-renderer.js#L3280)

```diff
-   6426: bb => {
+   6567: dd => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/frameDebug.js` (halsg.2bd74967 → x17cru.159bd7ce)

- **File**: `bundles/bloxd.io/chunks/js/frameDebug.js` (52 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084)

#### 1. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L4)

```diff
-   8951: (bb, ub, hb) => {
+   9098: (dd, Jd, kd) => {
```

#### 2. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L14)

```diff
-       g: () => Bb
+       e: () => pd
```

#### 3. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L17)

```diff
-   8946: (bb, ub, hb) => {
+   9094: (dd, Jd, kd) => {
```

#### 4. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L28-L33` → after: `L28-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L28-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L28-L33) · [Before (L28-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L28-L33)

```diff
-     var Bb = hb(4564),
-       Ob = hb(4547),
-       Gb = hb(8951),
-       Ub = hb(2633),
-       Lb = hb(993),
-       Yb = hb(2767);
+     var pd = kd(4688),
+       Nd = kd(4673),
+       Wd = kd(9098),
+       Pd = kd(2704),
+       Zd = kd(1093),
+       gd = kd(2834);
```

#### 5. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L38` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L38) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L38)

```diff
-           this.add(ub.startTime, ub.duration, ub.blockingDuration, (0, Lb.l)(ub))
+           this.add(Jd.startTime, Jd.duration, Jd.blockingDuration, (0, Zd.p)(Jd))
```

#### 6. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L41` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L41) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L41)

```diff
-         }, null !== (0, Yb.d)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, Yb.d)("longtask", this.onLongTask) ? "longtask" : null
+         }, null !== (0, gd.e)("long-animation-frame", this.onLongFrame) ? this.kind = "loaf" : this.kind = null !== (0, gd.e)("longtask", this.onLongTask) ? "longtask" : null
```

#### 7. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L57-L58` → after: `L57-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L57-L58) · [Before (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L57-L58)

```diff
-         const Ub = "loaf" === this.kind && hb > 0 ? ` (blocking ${Ob.toFixed(0)}, script ${Gb.toFixed(0)})` : "";
-         return `${hb} ${this.kind} ${Bb.toFixed(0)} ms${Ub}`
+         const Pd = "loaf" === this.kind && kd > 0 ? ` (blocking ${Nd.toFixed(0)}, script ${Wd.toFixed(0)})` : "";
+         return `${kd} ${this.kind} ${pd.toFixed(0)} ms${Pd}`
```

#### 8. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L63)

```diff
-       return ub < 0 || bb < ub ? bb : bb - ub
+       return Jd < 0 || dd < Jd ? dd : dd - Jd
```

#### 9. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L103` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L103) · [Before (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L103)

```diff
-         this.visibilityChanges++, document.hidden ? this.hiddenSinceMs = bb : this.hiddenSinceMs >= 0 && (this.hiddenMs += bb - this.hiddenSinceMs, this.hiddenSinceMs = -1)
+         this.visibilityChanges++, document.hidden ? this.hiddenSinceMs = dd : this.hiddenSinceMs >= 0 && (this.hiddenMs += dd - this.hiddenSinceMs, this.hiddenSinceMs = -1)
```

#### 10. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L110-L113` → after: `L110-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L110-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L110-L113) · [Before (L110-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L110-L113)

```diff
-             const hb = [`chunks +${ab(bb.chunksReceived,ub.chunksReceived)} got`, `+${ab(bb.chunksCancelled,ub.chunksCancelled)} cancelled`];
-             bb.chunksStored >= 0 && hb.push(`${bb.chunksStored} stored`);
-             const Bb = `jobs +${ab(bb.jobsSent,ub.jobsSent)} sent, +${ab(bb.jobsDone,ub.jobsDone)} done, ${bb.jobsInFlight} in flight`;
-             return `${hb.join(", ")}; ${Bb}; workers ${bb.workersLive} live, ${bb.workersRetired} retired`
+             const kd = [`chunks +${Kd(dd.chunksReceived,Jd.chunksReceived)} got`, `+${Kd(dd.chunksCancelled,Jd.chunksCancelled)} cancelled`];
+             dd.chunksStored >= 0 && kd.push(`${dd.chunksStored} stored`);
+             const pd = `jobs +${Kd(dd.jobsSent,Jd.jobsSent)} sent, +${Kd(dd.jobsDone,Jd.jobsDone)} done, ${dd.jobsInFlight} in flight`;
+             return `${kd.join(", ")}; ${pd}; workers ${dd.workersLive} live, ${dd.workersRetired} retired`
```

#### 11. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L120` → after: `L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L120) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L120)

```diff
-         const Gb = `load ${Math.round((bb-this.lastMs)/1e3)}s: ${hb.join("; ")}`;
+         const Wd = `load ${Math.round((dd-this.lastMs)/1e3)}s: ${kd.join("; ")}`;
```

#### 12. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L137` → after: `L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L137) · [Before (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L137)

```diff
-         return `${this.count} undrawn: ${this.paced} paced, ${this.skipped} skipped, ${bb} other, longest ${this.longest} in ${(0,Gb.c)(this.longestMs)} ms at ${this.longestAhead} ahead`
+         return `${this.count} undrawn: ${this.paced} paced, ${this.skipped} skipped, ${dd} other, longest ${this.longest} in ${(0,Wd.c)(this.longestMs)} ms at ${this.longestAhead} ahead`
```

#### 13. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L175` → after: `L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L175) · [Before (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L175)

```diff
-           this.ahead = bb.headerWord(Bb.B.Pacing) & Bb.R.AheadMask, this.frame(ub, hb, Ob, Gb, bb.headerWord(Bb.B.RenderUs) / 1e3, bb.headerWord(Bb.B.TicksRun), Ub, bb.headerWord(Bb.B.RenderPending))
+           this.ahead = dd.headerWord(pd.B.Pacing) & pd.X.AheadMask, this.frame(Jd, kd, Nd, Wd, dd.headerWord(pd.B.RenderUs) / 1e3, dd.headerWord(pd.B.TicksRun), Pd, dd.headerWord(pd.B.RenderPending))
```

#### 14. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L192-L193` → after: `L192-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L192-L193) · [Before (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L192-L193)

```diff
-             const Bb = [`long frame ${(0,Gb.c)(hb.intervalMs)} ms ending at ${(0,Gb.c)(hb.endMs)} ms: main ${(0,Gb.c)(hb.mainMs)} (render ${(0,Gb.c)(hb.renderMs)}, ${hb.ticks} ticks ${(0,Gb.c)(hb.tickMs)}), outside ${(0,Gb.c)(hb.intervalMs-hb.mainMs)}`, `${hb.rafs} rafs`];
-             hb.pendingBefore >= 0 && Bb.push(`pending ${hb.pendingBefore} -> ${hb.pendingAfter} (max ${hb.pendingMax})`), Bb.push(this.longTasks.describe(hb.endMs - hb.intervalMs, hb.endMs)), (0, Ub.l)("frame", Bb.join("; "))
+             const pd = [`long frame ${(0,Wd.c)(kd.intervalMs)} ms ending at ${(0,Wd.c)(kd.endMs)} ms: main ${(0,Wd.c)(kd.mainMs)} (render ${(0,Wd.c)(kd.renderMs)}, ${kd.ticks} ticks ${(0,Wd.c)(kd.tickMs)}), outside ${(0,Wd.c)(kd.intervalMs-kd.mainMs)}`, `${kd.rafs} rafs`];
+             kd.pendingBefore >= 0 && pd.push(`pending ${kd.pendingBefore} -> ${kd.pendingAfter} (max ${kd.pendingMax})`), pd.push(this.longTasks.describe(kd.endMs - kd.intervalMs, kd.endMs)), (0, Pd.h)("frame", pd.join("; "))
```

#### 15. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L203` → after: `L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L203) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L203)

```diff
-             null !== ub && (0, Ub.l)("frame", ub)
+             null !== Jd && (0, Pd.h)("frame", Jd)
```

#### 16. `bundles/bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L210` → after: `L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6b7e99216f03da41b1104495ec5b1b49e4ddfd1739c5fee99f2a658a46d45084) · [After (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/frameDebug.js#L210) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/frameDebug.js#L210)

```diff
-         this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, Ub.l)("frame", `start: ${bb} client, ${ub}, dpr ${window.devicePixelRatio}, long tasks ${null!==(hb=this.longTasks.kind)&& … [truncated]
+         this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, Pd.h)("frame", `start: ${dd} client, ${Jd}, dpr ${window.devicePixelRatio}, long tasks ${null!==(kd=this.longTasks.kind)&& … [truncated]
```
