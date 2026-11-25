# Changed — Bundle Modifications Report (Part 039 / 141)

- **Updated at**: `2026-11-25T09:11 JST`
- **Part**: `39 / 141` (**425** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 038](part-038.md) · [Part 040 →](part-040.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/225.js` (igzsf.a0b73a5f → c6gaap.4d6587ec · continued)

- **File**: `bundles/bloxd.io/chunks/js/225.js` (1226 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789)

#### 1085. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16214-L16216` → after: `L16214-L16216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16214-L16216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16214-L16216) · [Before (L16214-L16216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16214-L16216)

```diff
-           const Dt = null !== (Vt = qt.harvestLevel) && void 0 !== Vt ? Vt : 0,
-             mt = et ? td.o[et] : void 0;
-           if ("rock" === (null === mt || void 0 === mt ? void 0 : mt.harvests) && (null !== (Ot = mt.level) && void 0 !== Ot ? Ot : 0) >= Dt) return null;
+           const oB = null !== (ZB = JB.harvestLevel) && void 0 !== ZB ? ZB : 0,
+             GB = IB ? Bv.k[IB] : void 0;
+           if ("rock" === (null === GB || void 0 === GB ? void 0 : GB.harvests) && (null !== (TB = GB.level) && void 0 !== TB ? TB : 0) >= oB) return null;
```

#### 1086. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16223-L16224` → after: `L16223-L16224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16223-L16224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16223-L16224) · [Before (L16223-L16224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16223-L16224)

```diff
-             key: `${NN}lookToolTooWeak${Xt}`,
-             Pd: OD(et),
+             key: `${qy}lookToolTooWeak${nB}`,
+             sv: Zo(IB),
```

#### 1087. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16228-L16229` → after: `L16228-L16229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16228-L16229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16228-L16229) · [Before (L16228-L16229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16228-L16229)

```diff
-             key: dt === vO[0] ? `${NN}lookNeedAnyPickaxe` : `${NN}lookNeedPickaxe${Xt}`,
-             Pd: null,
+             key: vB === OT[0] ? `${qy}lookNeedAnyPickaxe` : `${qy}lookNeedPickaxe${nB}`,
+             sv: null,
```

#### 1088. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16236` → after: `L16236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16236) · [Before (L16236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16236)

```diff
-         const bt = null === yt ? fN : function(tt, et, Vt) {
+         const WB = null === qB ? Fy : function(BB, IB, ZB) {
```

#### 1089. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16240` → after: `L16240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16240) · [Before (L16240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16240)

```diff
-               const qt = `${QN}lookPortMode_${Ot}`,
+               const JB = `${ny}lookPortMode_${TB}`,
```

#### 1090. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16245` → after: `L16245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16245) · [Before (L16245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16245)

```diff
-                 next: `${QN}lookWrenchPickUp`,
+                 next: `${ny}lookWrenchPickUp`,
```

#### 1091. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16258-L16259` → after: `L16258-L16259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16258-L16259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16258-L16259) · [Before (L16258-L16259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16258-L16259)

```diff
-                 next: Dt ? `${QN}lookWrenchNext` : `${QN}lookPortWrench`,
-                 nextState: `${QN}lookPortState_${dt}`
+                 next: oB ? `${ny}lookWrenchNext` : `${ny}lookPortWrench`,
+                 nextState: `${ny}lookPortState_${vB}`
```

#### 1092. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16264` → after: `L16264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16264) · [Before (L16264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16264)

```diff
-             return null === qt.mode && null === qt.next ? fN : qt
+             return null === JB.mode && null === JB.next ? Fy : JB
```

#### 1093. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16269` → after: `L16269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16269) · [Before (L16269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16269)

```diff
-         if (!(null === yt ? !ut.visible : ut.visible && yt === ut.info && (Kt = Nt, ht = ut.tool, Kt === ht || null !== Kt && null !== ht && Kt.key === ht.key && Kt.Pd === ht.Pd && Kt.needed === ht.needed) && function(tt, et) {
+         if (!(null === qB ? !QB.visible : QB.visible && qB === QB.info && (sB = yB, wB = QB.tool, sB === wB || null !== sB && null !== wB && sB.key === wB.key && sB.sv === wB.sv && sB.needed === wB.needed) && function(BB, IB) {
```

#### 1094. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16299` → after: `L16299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16299) · [Before (L16299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16299)

```diff
-         this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = yN, this.qd = 0, this.Pd = null, this.expr … [truncated]
+         this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = gy, this.KG = 0, this.sv = null, this.expr … [truncated]
```

#### 1095. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16303` → after: `L16303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16303) · [Before (L16303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16303)

```diff
-         const Ot = `${Vt[0]},${Vt[1]},${Vt[2]},${et}`,
+         const TB = `${ZB[0]},${ZB[1]},${ZB[2]},${IB}`,
```

#### 1096. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16343` → after: `L16343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16343) · [Before (L16343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16343)

```diff
-             detail: `${NN}${tt}`,
+             detail: `${qy}${BB}`,
```

#### 1097. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16358` → after: `L16358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16358) · [Before (L16358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16358)

```diff
-           detail: `${NN}lookOreAfloat`,
+           detail: `${qy}lookOreAfloat`,
```

#### 1098. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16364` → after: `L16364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16364) · [Before (L16364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16364)

```diff
-         const Vt = `${tt}|${et}`;
+         const ZB = `${BB}|${IB}`;
```

#### 1099. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16370` → after: `L16370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16370) · [Before (L16370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16370)

```diff
-             const Ot = null !== (Vt = Fe[tt]) && void 0 !== Vt ? Vt : [],
+             const TB = null !== (ZB = RI[BB]) && void 0 !== ZB ? ZB : [],
```

#### 1100. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16375` → after: `L16375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16375) · [Before (L16375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16375)

```diff
-                 const tt = null !== (Dt = qt.get(mt.output)) && void 0 !== Dt ? Dt : [];
+                 const BB = null !== (oB = JB.get(GB.output)) && void 0 !== oB ? oB : [];
```

#### 1101. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16388` → after: `L16388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16388) · [Before (L16388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16388)

```diff
-           Ot = qt.length > 0 ? qt : wN, this.rowsByKey.set(Vt, Ot)
+           TB = JB.length > 0 ? JB : Ny, this.rowsByKey.set(ZB, TB)
```

#### 1102. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16396` → after: `L16396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16396) · [Before (L16396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16396)

```diff
-         } = tt.getMetaInfo(et), qt = (0, wV.n)(Ot) ? et : Vt;
+         } = BB.getMetaInfo(IB), JB = (0, NZ.j)(TB) ? IB : ZB;
```

#### 1103. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16422` → after: `L16422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16422) · [Before (L16422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16422)

```diff
-       } = (0, Wq.H)(), [mt, dt] = (0, Ot.useState)((() => qt.get()));
+       } = (0, YJ.G)(), [GB, vB] = (0, TB.useState)((() => JB.get()));
```

#### 1104. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16430` → after: `L16430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16430) · [Before (L16430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16430)

```diff
-       } = (0, bq.k)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
+       } = (0, WJ.o)(["openInGameMenuName", "openEverythingMenuName", "isTouchScreen"]), {
```

#### 1105. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16468` → after: `L16468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16468) · [Before (L16468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16468)

```diff
-             Pd: null === lt.Pd ? "" : Dt(lt.Pd)
+             sv: null === zB.sv ? "" : oB(zB.sv)
```

#### 1106. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16484-L16485` → after: `L16484-L16485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16484-L16485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16484-L16485) · [Before (L16484-L16485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16484-L16485)

```diff
-               const Ot = Vt.length > 1 ? ` ${Dt("buildAFactory2Game:recipeMore",{count:String(Vt.length-1)})}` : "";
-               return `${Dt(OD(Vt[0]))}${Ot} \u2192 ${Dt(OD(et))}`
+               const TB = ZB.length > 1 ? ` ${oB("buildAFactory2Game:recipeMore",{count:String(ZB.length-1)})}` : "";
+               return `${oB(Zo(ZB[0]))}${TB} \u2192 ${oB(Zo(IB))}`
```

#### 1107. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16497` → after: `L16497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16497) · [Before (L16497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16497)

```diff
-     var uN = Vt(38741);
+     var Qy = ZB(38562);
```

#### 1108. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16505` → after: `L16505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16505) · [Before (L16505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16505)

```diff
-       for (let Vt = 1; Vt <= 4; Vt++) Vt > 1 && et.push(`${tt}|meta|rot${Vt}`), et.push(`${tt}|meta|rot${Vt}|Running`);
+       for (let ZB = 1; ZB <= 4; ZB++) ZB > 1 && IB.push(`${BB}|meta|rot${ZB}`), IB.push(`${BB}|meta|rot${ZB}|Running`);
```

#### 1109. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16514` → after: `L16514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16514) · [Before (L16514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16514)

```diff
-       return `${tt},${et},${Vt}`
+       return `${BB},${IB},${ZB}`
```

#### 1110. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16555` → after: `L16555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16555) · [Before (L16555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16555)

```diff
-         const Ot = yf.e.ff,
+         const TB = UN.f.YN,
```

#### 1111. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16613` → after: `L16613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16613) · [Before (L16613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16613)

```diff
-         const mt = yf.e.ff,
+         const GB = UN.f.YN,
```

#### 1112. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16660` → after: `L16660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16660) · [Before (L16660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16660)

```diff
-                   Xt = `${Dt},${jt},${Ht}`;
+                   nB = `${oB},${kB},${cB}`;
```

#### 1113. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16672` → after: `L16672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16672) · [Before (L16672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16672)

```diff
-         for (const [mt, dt, jt] of et)(0, uN.c)(qt, Dt, [mt - Ot[0] + .5, dt - Ot[1] + .5, jt - Ot[2] + .5], RN, Vt);
+         for (const [GB, vB, kB] of IB)(0, Qy.d)(JB, oB, [GB - TB[0] + .5, vB - TB[1] + .5, kB - TB[2] + .5], ay, ZB);
```

#### 1114. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16677` → after: `L16677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16677) · [Before (L16677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16677)

```diff
-           rgb: Vt ? PN : IN,
+           rgb: ZB ? My : Hy,
```

#### 1115. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16744` → after: `L16744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16744) · [Before (L16744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16744)

```diff
-         const jt = Dt > this.budget ? this.budget / Dt : 1;
+         const kB = oB > this.budget ? this.budget / oB : 1;
```

#### 1116. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16758` → after: `L16758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16758) · [Before (L16758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16758)

```diff
-             dt = 0 === et && mt > 0 ? Math.min(.5, .1 * mt) / mt : 0;
+             vB = 0 === IB && GB > 0 ? Math.min(.5, .1 * GB) / GB : 0;
```

#### 1117. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16773` → after: `L16773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16773) · [Before (L16773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16773)

```diff
-             uQ: 400,
+             ah: 400,
```

#### 1118. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16790` → after: `L16790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16790) · [Before (L16790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16790)

```diff
-             blendMode: kd.f.Add
+             blendMode: rv.g.Add
```

#### 1119. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16842` → after: `L16842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16842) · [Before (L16842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16842)

```diff
-         uQ: Math.ceil(48),
+         ah: Math.ceil(48),
```

#### 1120. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16862` → after: `L16862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16862) · [Before (L16862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16862)

```diff
-         blendMode: kd.f.OneOne
+         blendMode: rv.g.OneOne
```

#### 1121. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16874` → after: `L16874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16874) · [Before (L16874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16874)

```diff
-         for (const [qt, Dt] of this.flames)(qt === et ? Ot : this.lit.has(qt)) || this.setEmitting(Dt, !1), qt === et || tt.getPositionView(qt) ? !Dt.emitting && Vt - Dt.offAt >= 1300 && (Dt.particles.stop(), this.flames.delete(qt)) : (Dt.particles.dispose(), this.flames.delete(q … [truncated]
+         for (const [JB, oB] of this.flames)(JB === IB ? TB : this.lit.has(JB)) || this.setEmitting(oB, !1), JB === IB || BB.getPositionView(JB) ? !oB.emitting && ZB - oB.offAt >= 1300 && (oB.particles.stop(), this.flames.delete(JB)) : (oB.particles.dispose(), this.flames.delete(J … [truncated]
```

#### 1122. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16886` → after: `L16886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16886) · [Before (L16886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16886)

```diff
-           option: null !== (Vt = tt.getClientOption(et, "jumpHoldThrust")) && void 0 !== Vt ? Vt : null,
+           option: null !== (ZB = BB.getClientOption(IB, "jumpHoldThrust")) && void 0 !== ZB ? ZB : null,
```

#### 1123. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16902-L16903` → after: `L16902-L16903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16902-L16903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16902-L16903) · [Before (L16902-L16903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16902-L16903)

```diff
-         const dt = null !== (Ot = this.flames.get(Vt)) && void 0 !== Ot ? Ot : this.create(tt, Vt, Dt),
-           jt = null !== (qt = tt.getDrawnHeading(Vt)) && void 0 !== qt ? qt : 0,
+         const vB = null !== (TB = this.flames.get(ZB)) && void 0 !== TB ? TB : this.create(BB, ZB, oB),
+           kB = null !== (JB = BB.getDrawnHeading(ZB)) && void 0 !== JB ? JB : 0,
```

#### 1124. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16933` → after: `L16933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16933) · [Before (L16933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16933)

```diff
-         this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [Zq.j.subscribe("setDirectionArrow", (tt => {
+         this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [jJ.l.subscribe("setDirectionArrow", (BB => {
```

#### 1125. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16939` → after: `L16939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16939) · [Before (L16939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16939)

```diff
-         })), Zq.j.subscribe("clearDirectionArrow", (tt => {
+         })), jJ.l.subscribe("clearDirectionArrow", (BB => {
```

#### 1126. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16947` → after: `L16947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16947) · [Before (L16947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16947)

```diff
-         for (const tt of this.subs) Zq.j.unsubscribe(tt)
+         for (const BB of this.subs) jJ.l.unsubscribe(BB)
```

#### 1127. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16976` → after: `L16976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16976) · [Before (L16976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16976)

```diff
-         this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), th … [truncated]
+         this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), th … [truncated]
```

#### 1128. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16978` → after: `L16978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16978) · [Before (L16978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16978)

```diff
-         }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.iN = () => {
+         }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.kU = () => {
```

#### 1129. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16983-L16984` → after: `L16983-L16984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16983-L16984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16983-L16984) · [Before (L16983-L16984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16983-L16984)

```diff
-           this.queued = !1, this.df || this.clear()
-         }, window.addEventListener("resize", this.iN)
+           this.queued = !1, this.WN || this.clear()
+         }, window.addEventListener("resize", this.kU)
```

#### 1130. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16988` → after: `L16988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16988) · [Before (L16988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16988)

```diff
-         this.api = tt, this.project = null !== (Vt = null === et || void 0 === et ? void 0 : et.projectWorldPosToScreenPos) && void 0 !== Vt ? Vt : null, this.queued || this.df || (this.queued = !0, queueMicrotask(this.run))
+         this.api = BB, this.project = null !== (ZB = null === IB || void 0 === IB ? void 0 : IB.projectWorldPosToScreenPos) && void 0 !== ZB ? ZB : null, this.queued || this.WN || (this.queued = !0, queueMicrotask(this.run))
```

#### 1131. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16991` → after: `L16991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16991) · [Before (L16991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16991)

```diff
-         this.df = !0;
+         this.WN = !0;
```

#### 1132. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L16995` → after: `L16995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L16995) · [Before (L16995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L16995)

```diff
-         this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.iN)
+         this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.kU)
```

#### 1133. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17015` → after: `L17015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17015) · [Before (L17015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17015)

```diff
-             const tt = 0 === dt ? `translateX(${mt}px)` : `translate(${mt}px, ${dt}px)`;
+             const BB = 0 === vB ? `translateX(${GB}px)` : `translate(${GB}px, ${vB}px)`;
```

#### 1134. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17022` → after: `L17022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17022) · [Before (L17022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17022)

```diff
-         const Vt = null !== (tt = this.tracker) && void 0 !== tt && tt.isConnected ? this.tracker : null !== (et = this.trackers[0]) && void 0 !== et ? et : null;
+         const ZB = null !== (BB = this.tracker) && void 0 !== BB && BB.isConnected ? this.tracker : null !== (IB = this.trackers[0]) && void 0 !== IB ? IB : null;
```

#### 1135. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17028-L17029` → after: `L17028-L17029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17028-L17029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17028-L17029) · [Before (L17028-L17029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17028-L17029)

```diff
-             mt = tt && et ? Math.max(tt.top, et.top) : null !== (qt = null === tt || void 0 === tt ? void 0 : tt.top) && void 0 !== qt ? qt : 0,
-             dt = tt && et ? Math.min(tt.bottom, et.bottom) : null !== (Dt = null === tt || void 0 === tt ? void 0 : tt.bottom) && void 0 !== Dt ? Dt : 0;
+             GB = BB && IB ? Math.max(BB.top, IB.top) : null !== (JB = null === BB || void 0 === BB ? void 0 : BB.top) && void 0 !== JB ? JB : 0,
+             vB = BB && IB ? Math.min(BB.bottom, IB.bottom) : null !== (oB = null === BB || void 0 === BB ? void 0 : BB.bottom) && void 0 !== oB ? oB : 0;
```

#### 1136. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17055` → after: `L17055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17055) · [Before (L17055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17055)

```diff
-         const Vt = null !== (et = this.toasts[0]) && void 0 !== et ? et : null;
+         const ZB = null !== (IB = this.toasts[0]) && void 0 !== IB ? IB : null;
```

#### 1137. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17072` → after: `L17072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17072) · [Before (L17072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17072)

```diff
-         const Dt = qt.x + Vt + (null !== (Ot = this.labelOffsets.get(tt)) && void 0 !== Ot ? Ot : 0),
+         const oB = JB.x + ZB + (null !== (TB = this.labelOffsets.get(BB)) && void 0 !== TB ? TB : 0),
```

#### 1138. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17082` → after: `L17082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17082) · [Before (L17082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17082)

```diff
-         this.tracker && this.sizes.unobserve(this.tracker), null === (et = this.hud) || void 0 === et || et.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = tt, this.hud = null !== (Vt = null === tt || void 0 === tt ? void 0 : tt.closest(". … [truncated]
+         this.tracker && this.sizes.unobserve(this.tracker), null === (IB = this.hud) || void 0 === IB || IB.removeEventListener("scroll", this.onChange), this.hudStyle.disconnect(), this.tracker = BB, this.hud = null !== (ZB = null === BB || void 0 === BB ? void 0 : BB.closest(". … [truncated]
```

#### 1139. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17095` → after: `L17095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17095) · [Before (L17095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17095)

```diff
-         } = Ot, Dt = Ot.x + (null !== (Vt = this.labelOffsets.get(tt)) && void 0 !== Vt ? Vt : 0), mt = this.em, {
+         } = TB, oB = TB.x + (null !== (ZB = this.labelOffsets.get(BB)) && void 0 !== ZB ? ZB : 0), GB = this.em, {
```

#### 1140. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17107-L17108` → after: `L17107-L17108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17107-L17108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17107-L17108) · [Before (L17107-L17108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17107-L17108)

```diff
-         } = this.extentOf(tt), qt = Vt.x + (null !== (et = this.labelOffsets.get(tt)) && void 0 !== et ? et : 0), Dt = qt + Ot - (this.innerWidth - 6);
-         return Dt > 0 ? -Dt : Math.max(0, 6 - (qt - Ot))
+         } = this.extentOf(BB), JB = ZB.x + (null !== (IB = this.labelOffsets.get(BB)) && void 0 !== IB ? IB : 0), oB = JB + TB - (this.innerWidth - 6);
+         return oB > 0 ? -oB : Math.max(0, 6 - (JB - TB))
```

#### 1141. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17120` → after: `L17120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17120) · [Before (L17120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17120)

```diff
-         return Dt !== (null !== (Vt = this.sideLabels.get(Ot)) && void 0 !== Vt ? Vt : 0) && (Ot.style.transform = 0 === Dt ? "" : `translateX(-50%) translateX(${Dt}px)`, 0 === Dt ? this.sideLabels.delete(Ot) : this.sideLabels.set(Ot, Dt)), Dt
+         return oB !== (null !== (ZB = this.sideLabels.get(TB)) && void 0 !== ZB ? ZB : 0) && (TB.style.transform = 0 === oB ? "" : `translateX(-50%) translateX(${oB}px)`, 0 === oB ? this.sideLabels.delete(TB) : this.sideLabels.set(TB, oB)), oB
```

#### 1142. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17170` → after: `L17170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17170) · [Before (L17170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17170)

```diff
-         null !== Ot && this.il(tt, Ot, Vt)
+         null !== TB && this.TF(BB, TB, ZB)
```

#### 1143. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17179` → after: `L17179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17179) · [Before (L17179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17179)

```diff
-             Dt !== Ot && (null !== Dt && et(Ot) > qt ? this.il(Vt, Dt, et) : this.picks.delete(Vt))
+             oB !== TB && (null !== oB && IB(TB) > JB ? this.TF(ZB, oB, IB) : this.picks.delete(ZB))
```

#### 1144. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17191` → after: `L17191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17191) · [Before (L17191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17191)

```diff
-     }(Lq.n);
+     }(PJ.o);
```

#### 1145. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17202` → after: `L17202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17202) · [Before (L17202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17202)

```diff
-       tt.getClientOption(et, "canCraft") && "inventory" !== bq.b.get("openInGameMenuName") && (Oa.open(Vt, Ot.get(), qa(tt)), Zq.j.sw("toggleMenu", `inventory|${Vt}`))
+       BB.getClientOption(IB, "canCraft") && "inventory" !== WJ.d.get("openInGameMenuName") && (ZU.open(ZB, TB.get(), TU(BB)), jJ.l.Gq("toggleMenu", `inventory|${ZB}`))
```

#### 1146. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17226` → after: `L17226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17226) · [Before (L17226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17226)

```diff
-       }, (0, CD.j)(uD, tt);
+       }, (0, Qo.l)(so, BB);
```

#### 1147. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17231-L17232` → after: `L17231-L17232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17231-L17232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17231-L17232) · [Before (L17231-L17232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17231-L17232)

```diff
-       return (0, Lq.y)(iD(Object.keys(St), zD)), () => {
-         (0, Lq.y)([])
+       return (0, PJ.w)(to(Object.keys(iB), Lo)), () => {
+         (0, PJ.w)([])
```

#### 1148. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17245-L17247` → after: `L17245-L17247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17245-L17247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17245-L17247) · [Before (L17245-L17247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17245-L17247)

```diff
-         }(Vt, null === (Ot = tt.bVt(et)) || void 0 === Ot ? void 0 : Ot.name, Dt.normal)) return !1;
-       const [mt, dt, jt] = Dt.gw, Ht = tt.getBlockId(mt, dt, jt);
-       return 0 === Ht || !0 === (null === (qt = It.h[Ht]) || void 0 === qt ? void 0 : qt.canBePlacedOver)
+         }(ZB, null === (TB = BB.FZB(IB)) || void 0 === TB ? void 0 : TB.name, oB.normal)) return !1;
+       const [GB, vB, kB] = oB.oq, cB = BB.getBlockId(GB, vB, kB);
+       return 0 === cB || !0 === (null === (JB = HB.f[cB]) || void 0 === JB ? void 0 : JB.canBePlacedOver)
```

#### 1149. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17249` → after: `L17249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17249) · [Before (L17249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17249)

```diff
-     var la = Vt(36996);
+     var hU = ZB(36783);
```

#### 1150. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17261` → after: `L17261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17261) · [Before (L17261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17261)

```diff
-         const qt = tt.bVt(et);
+         const JB = BB.FZB(IB);
```

#### 1151. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17264` → after: `L17264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17264) · [Before (L17264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17264)

```diff
-           [mt, dt, jt] = Ot.gw,
+           [GB, vB, kB] = TB.oq,
```

#### 1152. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17266-L17268` → after: `L17266-L17268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17266-L17268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17266-L17268) · [Before (L17266-L17268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17266-L17268)

```diff
-           Xt = It.h[Ht];
-         (0 === Ht || null !== Xt && void 0 !== Xt && Xt.OE || null !== Xt && void 0 !== Xt && Xt.canBePlacedOver) && tt.isSolidToPlayerBlockId(Dt) && tt.canModifyBlockAt(mt, dt, jt) && tt.Zet(mt, dt, jt, Dt) && !tt.Zet(mt, dt, jt, Dt, et) && (this.lastAt = Date.now(), this.toasts … [truncated]
-           baf2ToastText: [(0, Lt.pe)({
+           nB = HB.f[cB];
+         (0 === cB || null !== nB && void 0 !== nB && nB.gF || null !== nB && void 0 !== nB && nB.canBePlacedOver) && BB.isSolidToPlayerBlockId(oB) && BB.canModifyBlockAt(GB, vB, kB) && BB.HIB(GB, vB, kB, oB) && !BB.HIB(GB, vB, kB, oB, IB) && (this.lastAt = Date.now(), this.toasts … [truncated]
+           baf2ToastText: [(0, PB.de)({
```

#### 1153. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17284` → after: `L17284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17284) · [Before (L17284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17284)

```diff
-         const qt = `${tt.x},${tt.y},${tt.z},${tt.Pd}`;
+         const JB = `${BB.x},${BB.y},${BB.z},${BB.sv}`;
```

#### 1154. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17287` → after: `L17287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17287) · [Before (L17287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17287)

```diff
-         const Dt = GO(tt.y) ? HN(tt.block, tt.Pd, tt.level) : null;
+         const oB = mT(BB.y) ? ky(BB.block, BB.sv, BB.level) : null;
```

#### 1155. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17291` → after: `L17291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17291) · [Before (L17291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17291)

```diff
-         Vt - (null !== (Ot = this.hintedAt.get(mt)) && void 0 !== Ot ? Ot : -1 / 0) < 5e3 || (this.hintedAt.set(mt, Vt), this.show({
+         ZB - (null !== (TB = this.hintedAt.get(GB)) && void 0 !== TB ? TB : -1 / 0) < 5e3 || (this.hintedAt.set(GB, ZB), this.show({
```

#### 1156. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17298` → after: `L17298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17298) · [Before (L17298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17298)

```diff
-     var ya = Vt(39);
+     var gU = ZB(36);
```

#### 1157. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17314` → after: `L17314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17314) · [Before (L17314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17314)

```diff
-           of null !== (Ot = null === (Dt = mt.charge) || void 0 === Dt ? void 0 : Dt.items) && void 0 !== Ot ? Ot : []) {
+           of null !== (TB = null === (oB = GB.charge) || void 0 === oB ? void 0 : oB.items) && void 0 !== TB ? TB : []) {
```

#### 1158. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17357` → after: `L17357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17357) · [Before (L17357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17357)

```diff
-         Ct = new pE((() => bq.b.get("loadingOverlayVisible"))),
+         CB = new DF((() => WJ.d.get("loadingOverlayVisible"))),
```

#### 1159. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17370` → after: `L17370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17370) · [Before (L17370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17370)

```diff
-           read: () => !1 !== ya.e.getItem(aa),
+           read: () => !1 !== gU.m.getItem(yU),
```

#### 1160. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17372` → after: `L17372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17372) · [Before (L17372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17372)

```diff
-             ya.e.setItem(aa, tt)
+             gU.m.setItem(yU, BB)
```

#### 1161. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17391` → after: `L17391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17391) · [Before (L17391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17391)

```diff
-             baf2ToastText: [(0, Lt.pe)({
+             baf2ToastText: [(0, PB.de)({
```

#### 1162. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17419` → after: `L17419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17419) · [Before (L17419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17419)

```diff
-               key: `${NN}lookFarmEmpty`
+               key: `${qy}lookFarmEmpty`
```

#### 1163. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17421` → after: `L17421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17421) · [Before (L17421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17421)

```diff
-               key: tt.blockIdToBlockName(tt.getBlockId(Vt[0], Vt[1], Vt[2])).endsWith("|Running") ? `${NN}lookFarmRunning` : `${NN}lookFarmWaiting`,
+               key: BB.blockIdToBlockName(BB.getBlockId(ZB[0], ZB[1], ZB[2])).endsWith("|Running") ? `${qy}lookFarmRunning` : `${qy}lookFarmWaiting`,
```

#### 1164. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17449` → after: `L17449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17449) · [Before (L17449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17449)

```diff
-         "core" === (null === (et = dt.get()) || void 0 === et ? void 0 : et.kind) && "core" !== (null === tt || void 0 === tt ? void 0 : tt.kind) && Nt.send("baf2coreclose"), "power" === (null === (Vt = dt.get()) || void 0 === Vt ? void 0 : Vt.kind) && "power" !== (null === tt || … [truncated]
+         "core" === (null === (IB = vB.get()) || void 0 === IB ? void 0 : IB.kind) && "core" !== (null === BB || void 0 === BB ? void 0 : BB.kind) && yB.send("baf2coreclose"), "power" === (null === (ZB = vB.get()) || void 0 === ZB ? void 0 : ZB.kind) && "power" !== (null === BB || … [truncated]
```

#### 1165. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17462` → after: `L17462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17462) · [Before (L17462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17462)

```diff
-         (0, Mq.c)(), Je(null)
+         (0, UJ.f)(), dI(null)
```

#### 1166. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17475` → after: `L17475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17475) · [Before (L17475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17475)

```diff
-             be.push((0, Nq.c)(et, tt))
+             WI.push((0, qJ.f)(IB, BB))
```

#### 1167. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17477` → after: `L17477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17477) · [Before (L17477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17477)

```diff
-           be.push((0, Mq.q)((0, Ot.createElement)(Ot.Fragment, null, (0, Ot.createElement)(ME, {
+           WI.push((0, UJ.x)((0, TB.createElement)(TB.Fragment, null, (0, TB.createElement)(CF, {
```

#### 1168. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17507` → after: `L17507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17507) · [Before (L17507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17507)

```diff
-               close: Mq.g,
+               close: UJ.i,
```

#### 1169. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17509` → after: `L17509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17509) · [Before (L17509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17509)

```diff
-                 Kt.dropHeld(), (0, Mq.c)()
+                 sB.dropHeld(), (0, UJ.f)()
```

#### 1170. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17515-L17516` → after: `L17515-L17516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17515-L17516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17515-L17516) · [Before (L17515-L17516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17515-L17516)

```diff
-                 (0, Mq.c)(), bq.b.set({
-                   openEverythingMenuName: lV.o.SOCIAL
+                 (0, UJ.f)(), WJ.d.set({
+                   openEverythingMenuName: hZ.q.SOCIAL
```

#### 1171. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17529` → after: `L17529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17529) · [Before (L17529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17529)

```diff
-           })), be.push((0, aq.y)({
+           })), WI.push((0, yJ.s)({
```

#### 1172. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17540` → after: `L17540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17540) · [Before (L17540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17540)

```diff
-               }), (0, Mq.m)()
+               }), (0, UJ.t)()
```

#### 1173. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17554` → after: `L17554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17554) · [Before (L17554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17554)

```diff
-               }, Ot = (0, aq.y)({
+               }, TB = (0, yJ.s)({
```

#### 1174. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17571` → after: `L17571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17571) · [Before (L17571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17571)

```diff
-             const Dt = Zq.j.subscribe(Fq, qt);
+             const oB = jJ.l.subscribe(RJ, JB);
```

#### 1175. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17573` → after: `L17573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17573) · [Before (L17573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17573)

```diff
-               Zq.j.unsubscribe(Dt), Ot()
+               jJ.l.unsubscribe(oB), TB()
```

#### 1176. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17576` → after: `L17576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17576) · [Before (L17576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17576)

```diff
-             const tt = Zq.j.subscribe(Fq, nq),
+             const BB = jJ.l.subscribe(RJ, VJ),
```

#### 1177. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17580` → after: `L17580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17580) · [Before (L17580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17580)

```diff
-                   sq = null, (0, Lq.v)(tt)
+                   KJ = null, (0, PJ.s)(BB)
```

#### 1178. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17583` → after: `L17583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17583) · [Before (L17583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17583)

```diff
-               Vt = Zq.j.subscribe("toggleMenu", (tt => {
+               ZB = jJ.l.subscribe("toggleMenu", (BB => {
```

#### 1179. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17586` → after: `L17586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17586) · [Before (L17586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17586)

```diff
-               Ot = Zq.j.subscribe("appManagerUpdated|openInGameMenuName", (tt => {
+               TB = jJ.l.subscribe("appManagerUpdated|openInGameMenuName", (BB => {
```

#### 1180. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17590` → after: `L17590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17590) · [Before (L17590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17590)

```diff
-               Zq.j.unsubscribe(tt), Zq.j.unsubscribe(Vt), Zq.j.unsubscribe(Ot)
+               jJ.l.unsubscribe(BB), jJ.l.unsubscribe(ZB), jJ.l.unsubscribe(TB)
```

#### 1181. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17594` → after: `L17594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17594) · [Before (L17594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17594)

```diff
-               Vt = Zq.j.subscribe(Fq, (tt => {
+               ZB = jJ.l.subscribe(RJ, (BB => {
```

#### 1182. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17598` → after: `L17598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17598) · [Before (L17598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17598)

```diff
-               Zq.j.unsubscribe(Vt), Oa.clear()
+               jJ.l.unsubscribe(ZB), ZU.clear()
```

#### 1183. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17602` → after: `L17602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17602) · [Before (L17602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17602)

```diff
-               et = (0, GE.d)(".InvenBodyRight", [], (() => {
+               IB = (0, eF.e)(".InvenBodyRight", [], (() => {
```

#### 1184. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17604` → after: `L17604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17604) · [Before (L17604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17604)

```diff
-                 et && tt.style.setProperty("--baf2-backpack-width", `${et.offsetWidth}px`)
+                 IB && BB.style.setProperty("--baf2-backpack-width", `${IB.offsetWidth}px`)
```

#### 1185. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17621` → after: `L17621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17621) · [Before (L17621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17621)

```diff
-           (0, Lq.v)([]), sq = null, gq = new Set, ma = null, (0, Lq.r)(new Map), Ma.clear();
+           (0, PJ.s)([]), KJ = null, DJ = new Set, oU = null, (0, PJ.r)(new Map), UU.clear();
```

#### 1186. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17641` → after: `L17641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17641) · [Before (L17641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17641)

```diff
-           qe.onAfterRender(yt, Dt, null !== (Vt = null === jt || void 0 === jt ? void 0 : jt.o3) && void 0 !== Vt ? Vt : 0, null !== (Ot = null === jt || void 0 === jt ? void 0 : jt.position) && void 0 !== Ot ? Ot : null), Qe.onAfterRender(yt, et), Wt.onMining(function(tt, et) {
+           TI.onAfterRender(qB, oB, null !== (ZB = null === kB || void 0 === kB ? void 0 : kB.n_) && void 0 !== ZB ? ZB : 0, null !== (TB = null === kB || void 0 === kB ? void 0 : kB.position) && void 0 !== TB ? TB : null), nI.onAfterRender(qB, IB), YB.onMining(function(BB, IB) {
```

#### 1187. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17645-L17646` → after: `L17645-L17646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17645-L17646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17645-L17646) · [Before (L17645-L17646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17645-L17646)

```diff
-             const Dt = (0, It.d)(tt.getBlockId(qt[0], qt[1], qt[2])),
-               mt = null !== (Vt = null === (Ot = tt.bVt(et)) || void 0 === Ot ? void 0 : Ot.name) && void 0 !== Vt ? Vt : null,
+             const oB = (0, HB.e)(BB.getBlockId(JB[0], JB[1], JB[2])),
+               GB = null !== (ZB = null === (TB = BB.FZB(IB)) || void 0 === TB ? void 0 : TB.name) && void 0 !== ZB ? ZB : null,
```

#### 1188. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17653` → after: `L17653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17653) · [Before (L17653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17653)

```diff
-               Pd: mt,
+               sv: GB,
```

#### 1189. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17662` → after: `L17662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17662) · [Before (L17662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17662)

```diff
-             if (tt.fR(Vt, Ot, qt, dt), !tt.getClientOption(et, "canPickUpItems")) return;
+             if (BB.UH(ZB, TB, JB, vB), !BB.getClientOption(IB, "canPickUpItems")) return;
```

#### 1190. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17665` → after: `L17665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17665) · [Before (L17665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17665)

```diff
-             void 0 !== jt && (Ht = tt.getInventoryItems(), Xt = jt, Qt = yf.e.maxItemStackSize, tt.getInventoryFreeSlotCount(et) > 0 || Ht.some((tt => null !== tt && tt.name === Xt && null !== tt.amount && tt.amount < Qt))) && tt.playSound(et, (0, la.g)("pickUp"), .5, 1)
+             void 0 !== kB && (cB = BB.getInventoryItems(), nB = kB, hB = UN.f.maxItemStackSize, BB.getInventoryFreeSlotCount(IB) > 0 || cB.some((BB => null !== BB && BB.name === nB && null !== BB.amount && BB.amount < hB))) && BB.playSound(IB, (0, hU.f)("pickUp"), .5, 1)
```

#### 1191. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17671` → after: `L17671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17671) · [Before (L17671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17671)

```diff
-           const jt = null !== (mt = null === (dt = yt.bVt(Dt)) || void 0 === dt ? void 0 : dt.name) && void 0 !== mt ? mt : null,
+           const kB = null !== (GB = null === (vB = qB.FZB(oB)) || void 0 === vB ? void 0 : vB.name) && void 0 !== GB ? GB : null,
```

#### 1192. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17674` → after: `L17674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17674) · [Before (L17674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17674)

```diff
-               return vt(Vt) && et !== jq && "Sky Pack" !== et ? Vt : null
+               return OB(ZB) && IB !== vJ && "Sky Pack" !== IB ? ZB : null
```

#### 1193. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17682` → after: `L17682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17682) · [Before (L17682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17682)

```diff
-           null !== Qt && Xt && yt.fR(et, Vt, Ot, Qt)
+           null !== hB && nB && qB.UH(IB, ZB, TB, hB)
```

#### 1194. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17697-L17698` → after: `L17697-L17698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17697-L17698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17697-L17698) · [Before (L17697-L17698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17697-L17698)

```diff
-               power: null !== (Vt = tt.baf2MachinePower) && void 0 !== Vt ? Vt : null,
-               opLeftMs: null !== (Ot = tt.baf2MachineOpLeftMs) && void 0 !== Ot ? Ot : null,
+               power: null !== (ZB = BB.baf2MachinePower) && void 0 !== ZB ? ZB : null,
+               opLeftMs: null !== (TB = BB.baf2MachineOpLeftMs) && void 0 !== TB ? TB : null,
```

#### 1195. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17703-L17704` → after: `L17703-L17704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17703-L17704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17703-L17704) · [Before (L17703-L17704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17703-L17704)

```diff
-               powerCap: null !== (qt = tt.baf2MachinePowerCap) && void 0 !== qt ? qt : null,
-               powerRates: null !== (Ht = tt.baf2MachinePowerRates) && void 0 !== Ht ? Ht : null,
+               powerCap: null !== (JB = BB.baf2MachinePowerCap) && void 0 !== JB ? JB : null,
+               powerRates: null !== (cB = BB.baf2MachinePowerRates) && void 0 !== cB ? cB : null,
```

#### 1196. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17706` → after: `L17706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17706) · [Before (L17706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17706)

```diff
-               couplerLevel: null !== (Xt = tt.baf2MachineCoupler) && void 0 !== Xt ? Xt : 1,
+               couplerLevel: null !== (nB = BB.baf2MachineCoupler) && void 0 !== nB ? nB : 1,
```

#### 1197. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17709-L17713` → after: `L17709-L17713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17709-L17713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17709-L17713) · [Before (L17709-L17713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17709-L17713)

```diff
-               tier: null !== (Qt = tt.baf2MachineTier) && void 0 !== Qt ? Qt : null,
-               input: null !== (lt = tt.baf2MachineInput) && void 0 !== lt ? lt : null,
-               inertCoupler: null !== (ft = tt.baf2MachineInertCoupler) && void 0 !== ft ? ft : null,
-               inputShort: null !== (Mt = tt.baf2MachineInputShort) && void 0 !== Mt ? Mt : null,
-               field: null !== (ut = tt.baf2MachineField) && void 0 !== ut ? ut : null,
+               tier: null !== (hB = BB.baf2MachineTier) && void 0 !== hB ? hB : null,
+               input: null !== (zB = BB.baf2MachineInput) && void 0 !== zB ? zB : null,
+               inertCoupler: null !== (NB = BB.baf2MachineInertCoupler) && void 0 !== NB ? NB : null,
+               inputShort: null !== (UB = BB.baf2MachineInputShort) && void 0 !== UB ? UB : null,
+               field: null !== (QB = BB.baf2MachineField) && void 0 !== QB ? QB : null,
```

#### 1198. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17722-L17727` → after: `L17722-L17727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17722-L17727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17722-L17727) · [Before (L17722-L17727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17722-L17727)

```diff
-               fuelLeftMs: null !== (ht = tt.baf2MachineFuelLeftMs) && void 0 !== ht ? ht : null,
-               burning: null !== (vt = tt.baf2MachineBurning) && void 0 !== vt ? vt : null,
-               fuelKeep: null !== (Wt = tt.baf2MachineFuelKeep) && void 0 !== Wt ? Wt : null,
-               water: null !== (ct = tt.baf2MachineWater) && void 0 !== ct ? ct : null,
-               farm: null !== (It = tt.baf2MachineFarm) && void 0 !== It ? It : null,
-               cryo: null !== (Lt = tt.baf2MachineCryo) && void 0 !== Lt ? Lt : null
+               fuelLeftMs: null !== (wB = BB.baf2MachineFuelLeftMs) && void 0 !== wB ? wB : null,
+               burning: null !== (OB = BB.baf2MachineBurning) && void 0 !== OB ? OB : null,
+               fuelKeep: null !== (YB = BB.baf2MachineFuelKeep) && void 0 !== YB ? YB : null,
+               water: null !== (pB = BB.baf2MachineWater) && void 0 !== pB ? pB : null,
+               farm: null !== (HB = BB.baf2MachineFarm) && void 0 !== HB ? HB : null,
+               cryo: null !== (PB = BB.baf2MachineCryo) && void 0 !== PB ? PB : null
```

#### 1199. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17736-L17737` → after: `L17736-L17737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17736-L17737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17736-L17737) · [Before (L17736-L17737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17736-L17737)

```diff
-             }), (0, Mq.m)())
-           } else if (tt === nt.w) {
+             }), (0, UJ.t)())
+           } else if (BB === VB.E) {
```

#### 1200. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17741` → after: `L17741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17741) · [Before (L17741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17741)

```diff
-             }), (0, Mq.m)())
+             }), (0, UJ.t)())
```

#### 1201. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17745` → after: `L17745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17745) · [Before (L17745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17745)

```diff
-             kt.gM(tt);
+             rB.rU(BB);
```

#### 1202. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17748` → after: `L17748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17748) · [Before (L17748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17748)

```diff
-               return `${et},${Vt},${Ot}`
+               return `${IB},${ZB},${TB}`
```

#### 1203. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17758` → after: `L17758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17758) · [Before (L17758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17758)

```diff
-             }), (0, Mq.m)())
+             }), (0, UJ.t)())
```

#### 1204. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17763-L17766` → after: `L17763-L17766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17763-L17766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17763-L17766) · [Before (L17763-L17766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17763-L17766)

```diff
-             }), (0, Mq.m)())
-           } else if ("baf2RxAlarm" === tt) Bt.gM(et);
-           else if ("baf2Bomb" === tt) Tt.gM(et, yt.getPositionView(Dt));
-           else if ("baf2Fallout" === tt) st.gM(et);
+             }), (0, UJ.t)())
+           } else if ("baf2RxAlarm" === BB) tB.rU(IB);
+           else if ("baf2Bomb" === BB) EB.rU(IB, qB.getPositionView(oB));
+           else if ("baf2Fallout" === BB) KB.rU(IB);
```

#### 1205. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17771` → after: `L17771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17771) · [Before (L17771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17771)

```diff
-             if (te.onStatus(tt), tt.baf2ColOpen) te.onOpen(null !== (At = null === (it = yt.bVt(Dt)) || void 0 === it ? void 0 : it.name) && void 0 !== At ? At : null), Je({
+             if (SB.onStatus(BB), BB.baf2ColOpen) SB.onOpen(null !== (fB = null === (lB = qB.FZB(oB)) || void 0 === lB ? void 0 : lB.name) && void 0 !== fB ? fB : null), dI({
```

#### 1206. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17773` → after: `L17773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17773) · [Before (L17773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17773)

```diff
-             }), (0, Mq.m)()
+             }), (0, UJ.t)()
```

#### 1207. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17779-L17780` → after: `L17779-L17780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17779-L17780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17779-L17780) · [Before (L17779-L17780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17779-L17780)

```diff
-             }), (0, Mq.m)());
-             else "terminal" === (null === (Yt = dt.get()) || void 0 === Yt ? void 0 : Yt.kind) && (dt.set(null), (0, Mq.c)())
+             }), (0, UJ.t)());
+             else "terminal" === (null === (AB = vB.get()) || void 0 === AB ? void 0 : AB.kind) && (vB.set(null), (0, UJ.f)())
```

#### 1208. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17786` → after: `L17786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17786) · [Before (L17786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17786)

```diff
-               }(dt.get(), tt)) return void(0, Mq.c)();
+               }(vB.get(), BB)) return void(0, UJ.f)();
```

#### 1209. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17791` → after: `L17791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17791) · [Before (L17791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17791)

```diff
-             }), tt.baf2CoreRefresh || (0, Mq.m)()
+             }), BB.baf2CoreRefresh || (0, UJ.t)()
```

#### 1210. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17797` → after: `L17797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17797) · [Before (L17797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17797)

```diff
-             yt.fR(tt[0], tt[1], tt[2], Vt)
+             qB.UH(BB[0], BB[1], BB[2], ZB)
```

#### 1211. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17807` → after: `L17807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17807) · [Before (L17807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17807)

```diff
-               for (const [, , Xt, , , , , , Qt, lt] of tt.baf2QuestSteps) null !== Xt && dt.push(Xt), dt.push(...null !== Qt && void 0 !== Qt ? Qt : [], ...null !== lt && void 0 !== lt ? lt : []);
+               for (const [, , nB, , , , , , hB, zB] of BB.baf2QuestSteps) null !== nB && vB.push(nB), vB.push(...null !== hB && void 0 !== hB ? hB : [], ...null !== zB && void 0 !== zB ? zB : []);
```

#### 1212. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17810-L17811` → after: `L17810-L17811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17810-L17811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17810-L17811) · [Before (L17810-L17811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17810-L17811)

```diff
-               jt && dt.push(jt), dt.push(...null !== (Ot = null === (qt = tt.baf2QuestSide) || void 0 === qt ? void 0 : qt[2][8]) && void 0 !== Ot ? Ot : [], ...null !== (Dt = null === (mt = tt.baf2QuestSide) || void 0 === mt ? void 0 : mt[2][9]) && void 0 !== Dt ? Dt : []);
-               for (const [Xt] of null !== (Ht = tt.baf2QuestAlso) && void 0 !== Ht ? Ht : []) {
+               kB && vB.push(kB), vB.push(...null !== (TB = null === (JB = BB.baf2QuestSide) || void 0 === JB ? void 0 : JB[2][8]) && void 0 !== TB ? TB : [], ...null !== (oB = null === (GB = BB.baf2QuestSide) || void 0 === GB ? void 0 : GB[2][9]) && void 0 !== oB ? oB : []);
+               for (const [nB] of null !== (cB = BB.baf2QuestAlso) && void 0 !== cB ? cB : []) {
```

#### 1213. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17841` → after: `L17841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17841) · [Before (L17841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17841)

```diff
-           else if ("baf2Labels" === tt) St.gM(et);
+           else if ("baf2Labels" === BB) iB.rU(IB);
```

#### 1214. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17845` → after: `L17845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17845) · [Before (L17845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17845)

```diff
-           }), (0, Mq.m)();
+           }), (0, UJ.t)();
```

#### 1215. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17852` → after: `L17852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17852) · [Before (L17852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17852)

```diff
-               const et = bq.b.get("openEverythingMenuName"),
+               const IB = WJ.d.get("openEverythingMenuName"),
```

#### 1216. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17859-L17861` → after: `L17859-L17861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17859-L17861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17859-L17861) · [Before (L17859-L17861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17859-L17861)

```diff
-                   panel: null !== (Ve = null === (Oe = dt.get()) || void 0 === Oe ? void 0 : Oe.kind) && void 0 !== Ve ? Ve : null,
-                   inGameMenu: bq.b.get("openInGameMenuName"),
-                   everythingMenu: null === et ? null : et === lV.o.SHOP ? "shop" : "other",
+                   panel: null !== (II = null === (ZI = vB.get()) || void 0 === ZI ? void 0 : ZI.kind) && void 0 !== II ? II : null,
+                   inGameMenu: WJ.d.get("openInGameMenuName"),
+                   everythingMenu: null === IB ? null : IB === hZ.q.SHOP ? "shop" : "other",
```

#### 1217. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17872` → after: `L17872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17872) · [Before (L17872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17872)

```diff
-             }), Vt && (ae = -1 / 0, Ne = Date.now(), Nt.send(xt)), tt.baf2IslandsOpen && ("clientGame" !== bq.b.get("openInGameMenuName") && (0, Jq.f)(), (0, Mq.m)())
+             }), ZB && (yI = -1 / 0, qI = Date.now(), yB.send(xB)), BB.baf2IslandsOpen && ("clientGame" !== WJ.d.get("openInGameMenuName") && (0, dJ.d)(), (0, UJ.t)())
```

#### 1218. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17880-L17881` → after: `L17880-L17881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17880-L17881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17880-L17881) · [Before (L17880-L17881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17880-L17881)

```diff
-             }), (0, Mq.m)()) : "transfer" === (null === (qe = dt.get()) || void 0 === qe ? void 0 : qe.kind) && (0, Mq.c)()
-           } else "baf2IslandLeft" === tt ? (Kt.dropHeld(), null !== dt.get() && Ce(), "inventory" === bq.b.get("openInGameMenuName") && (0, Jq.f)()) : "baf2Arc" === tt ? de.gM(yt, et) : "baf2Blade" === tt ? je.onBlade(yt, et) : "baf2JetFlame" === tt ? He.gM(yt, et) : "baf2GearPow … [truncated]
+             }), (0, UJ.t)()) : "transfer" === (null === (TI = vB.get()) || void 0 === TI ? void 0 : TI.kind) && (0, UJ.f)()
+           } else "baf2IslandLeft" === BB ? (sB.dropHeld(), null !== vB.get() && CI(), "inventory" === WJ.d.get("openInGameMenuName") && (0, dJ.d)()) : "baf2Arc" === BB ? GI.rU(qB, IB) : "baf2Blade" === BB ? vI.onBlade(qB, IB) : "baf2JetFlame" === BB ? kI.rU(qB, IB) : "baf2GearPow … [truncated]
```

#### 1219. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17888` → after: `L17888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17888) · [Before (L17888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17888)

```diff
-   38733: (tt, et, Vt) => {
+   38557: (BB, IB, ZB) => {
```

#### 1220. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17924` → after: `L17924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17924) · [Before (L17924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17924)

```diff
-       d: () => Ot
+       e: () => TB
```

#### 1221. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17927` → after: `L17927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17927) · [Before (L17927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17927)

```diff
-   38718: (tt, et, Vt) => {
+   38539: (BB, IB, ZB) => {
```

#### 1222. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17931` → after: `L17931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17931) · [Before (L17931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17931)

```diff
-     var Ot = Vt(38716);
+     var TB = ZB(38532);
```

#### 1223. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17946` → after: `L17946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17946) · [Before (L17946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17946)

```diff
-       return (0, Ot.g)(tt, !wt), wt ? (mt.x = ft.x, mt.y = ft.y, mt.distSq = Et, mt) : null
+       return (0, TB.f)(BB, !gB), gB ? (GB.x = NB.x, GB.y = NB.y, GB.distSq = FB, GB) : null
```

#### 1224. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17949` → after: `L17949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17949) · [Before (L17949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17949)

```diff
-   38716: (tt, et, Vt) => {
+   38532: (BB, IB, ZB) => {
```

#### 1225. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17951-L17952` → after: `L17951-L17952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17951-L17952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17951-L17952) · [Before (L17951-L17952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17951-L17952)

```diff
-       e: () => mt,
-       g: () => Dt
+       d: () => GB,
+       f: () => oB
```

#### 1226. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L17972` → after: `L17972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R17972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L17972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/225.js#L17972) · [Before (L17972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/225.js#L17972)

```diff
-       Ot.x === et && Ot.y === Vt || (Ot.x = et, Ot.y = Vt, tt.style.translate = `${et}vw ${Vt}vh`)
+       TB.x === IB && TB.y === ZB || (TB.x = IB, TB.y = ZB, BB.style.translate = `${IB}vw ${ZB}vh`)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/226.js` (igzsf.a0b73a5f → c6gaap.4d6587ec)

- **File**: `bundles/bloxd.io/chunks/js/226.js` (26 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65)

#### 1. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/226.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/226.js#L4)

```diff
-   36897: tt => {
+   36655: BB => {
```

#### 2. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L156-L158` → after: `L156-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L156-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/226.js#L156-L158) · [Before (L156-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/226.js#L156-L158)

```diff
-   36889: (tt, et, Vt) => {
-     var Ot = Vt(36897),
-       qt = Vt(36902),
+   36652: (BB, IB, ZB) => {
+     var TB = ZB(36655),
+       JB = ZB(36658),
```

#### 3. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L173` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/226.js#L173) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/226.js#L173)

```diff
-       return et.length < 2 ? "0" + et : et
+       return IB.length < 2 ? "0" + IB : IB
```

#### 4. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L252-L254` → after: `L252-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L252-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/226.js#L252-L254) · [Before (L252-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/226.js#L252-L254)

```diff
-   36885: (tt, et, Vt) => {
-     const Ot = Vt(36889),
-       qt = Vt(36913),
+   36649: (BB, IB, ZB) => {
+     const TB = ZB(36652),
+       JB = ZB(36676),
```

#### 5. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L304` → after: `L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/226.js#L304) · [Before (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/226.js#L304)

```diff
-         et = et.round("number" === typeof tt ? tt : 1);
+         IB = IB.round("number" === typeof BB ? BB : 1);
```

#### 6. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L309` → after: `L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/226.js#L309) · [Before (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/226.js#L309)

```diff
-         const et = this.rgb().round("number" === typeof tt ? tt : 1),
+         const IB = this.rgb().round("number" === typeof BB ? BB : 1),
```

#### 7. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L404` → after: `L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/226.js#L404) · [Before (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/226.js#L404)

```diff
-       gq() {
+       dv() {
```

#### 8. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L447` → after: `L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/226.js#L447) · [Before (L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/226.js#L447)

```diff
-         return Vt = (Vt + tt) % 360, Vt = Vt < 0 ? 360 + Vt : Vt, et.color[0] = Vt, et
+         return ZB = (ZB + BB) % 360, ZB = ZB < 0 ? 360 + ZB : ZB, IB.color[0] = ZB, IB
```

#### 9. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L456` → after: `L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/226.js#L456) · [Before (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/226.js#L456)

```diff
-           dt = ((Dt * mt === -1 ? Dt : (Dt + mt) / (1 + Dt * mt)) + 1) / 2,
+           vB = ((oB * GB === -1 ? oB : (oB + GB) / (1 + oB * GB)) + 1) / 2,
```

#### 10. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L469` → after: `L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/226.js#L469) · [Before (L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/226.js#L469)

```diff
-         return et.length > 0 ? new jt(et, Et) : new jt([...(Ot = qt[this.model][Et].raw(this.color), Array.isArray(Ot) ? Ot : [Ot]), this.valpha], Et);
+         return IB.length > 0 ? new kB(IB, FB) : new kB([...(TB = JB[this.model][FB].raw(this.color), Array.isArray(TB) ? TB : [TB]), this.valpha], FB);
```

#### 11. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L487` → after: `L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/226.js#L487) · [Before (L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/226.js#L487)

```diff
-       tt = Array.isArray(tt) ? tt : [tt];
+       BB = Array.isArray(BB) ? BB : [BB];
```

#### 12. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L508-L509` → after: `L508-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L508-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/226.js#L508-L509) · [Before (L508-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/226.js#L508-L509)

```diff
-   36918: (tt, et, Vt) => {
-     const Ot = Vt(36921),
+   36684: (BB, IB, ZB) => {
+     const TB = ZB(36689),
```

#### 13. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L597` → after: `L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/226.js#L597) · [Before (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/226.js#L597)

```diff
-       Dt === qt ? dt = 0 : et === Dt ? dt = (Vt - Ot) / mt : Vt === Dt ? dt = 2 + (Ot - et) / mt : Ot === Dt && (dt = 4 + (et - Vt) / mt), dt = Math.min(60 * dt, 360), dt < 0 && (dt += 360);
+       oB === JB ? vB = 0 : IB === oB ? vB = (ZB - TB) / GB : ZB === oB ? vB = 2 + (TB - IB) / GB : TB === oB && (vB = 4 + (IB - ZB) / GB), vB = Math.min(60 * vB, 360), vB < 0 && (vB += 360);
```

#### 14. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L610` → after: `L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/226.js#L610) · [Before (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/226.js#L610)

```diff
-       return 0 === Xt ? (qt = 0, Dt = 0) : (Dt = Xt / Ht, et = Qt(mt), Vt = Qt(dt), Ot = Qt(jt), mt === Ht ? qt = Ot - Vt : dt === Ht ? qt = 1 / 3 + et - Ot : jt === Ht && (qt = 2 / 3 + Vt - et), qt < 0 ? qt += 1 : qt > 1 && (qt -= 1)), [360 * qt, 100 * Dt, 100 * Ht]
+       return 0 === nB ? (JB = 0, oB = 0) : (oB = nB / cB, IB = hB(GB), ZB = hB(vB), TB = hB(kB), GB === cB ? JB = TB - ZB : vB === cB ? JB = 1 / 3 + IB - TB : kB === cB && (JB = 2 / 3 + ZB - IB), JB < 0 ? JB += 1 : JB > 1 && (JB -= 1)), [360 * JB, 100 * oB, 100 * cB]
```

#### 15. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L659` → after: `L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/226.js#L659) · [Before (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/226.js#L659)

```diff
-       for (let Ht = 0; Ht < 3; Ht++) Dt = et + 1 / 3 * -(Ht - 1), Dt < 0 && Dt++, Dt > 1 && Dt--, mt = 6 * Dt < 1 ? dt + 6 * (qt - dt) * Dt : 2 * Dt < 1 ? qt : 3 * Dt < 2 ? dt + (qt - dt) * (2 / 3 - Dt) * 6 : dt, jt[Ht] = 255 * mt;
+       for (let cB = 0; cB < 3; cB++) oB = IB + 1 / 3 * -(cB - 1), oB < 0 && oB++, oB > 1 && oB--, GB = 6 * oB < 1 ? vB + 6 * (JB - vB) * oB : 2 * oB < 1 ? JB : 3 * oB < 2 ? vB + (JB - vB) * (2 / 3 - oB) * 6 : vB, kB[cB] = 255 * GB;
```

#### 16. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L667` → after: `L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/226.js#L667) · [Before (L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/226.js#L667)

```diff
-       Ot *= 2, Vt *= Ot <= 1 ? Ot : 2 - Ot, qt *= Dt <= 1 ? Dt : 2 - Dt;
+       TB *= 2, ZB *= TB <= 1 ? TB : 2 - TB, JB *= oB <= 1 ? oB : 2 - oB;
```

#### 17. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L700` → after: `L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/226.js#L700) · [Before (L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/226.js#L700)

```diff
-       return Dt = Vt * qt, Dt /= dt <= 1 ? dt : 2 - dt, Dt = Dt || 0, mt /= 2, [et, 100 * Dt, 100 * mt]
+       return oB = ZB * JB, oB /= vB <= 1 ? vB : 2 - vB, oB = oB || 0, GB /= 2, [IB, 100 * oB, 100 * GB]
```

#### 18. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L759` → after: `L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/226.js#L759) · [Before (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/226.js#L759)

```diff
-       return Vt = qt > .008856 ? qt : (Vt - 16 / 116) / 7.787, et = Dt > .008856 ? Dt : (et - 16 / 116) / 7.787, Ot = mt > .008856 ? mt : (Ot - 16 / 116) / 7.787, et *= 95.047, Vt *= 100, Ot *= 108.883, [et, Vt, Ot]
+       return ZB = JB > .008856 ? JB : (ZB - 16 / 116) / 7.787, IB = oB > .008856 ? oB : (IB - 16 / 116) / 7.787, TB = GB > .008856 ? GB : (TB - 16 / 116) / 7.787, IB *= 95.047, ZB *= 100, TB *= 108.883, [IB, ZB, TB]
```

#### 19. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L818` → after: `L818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/226.js#L818) · [Before (L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/226.js#L818)

```diff
-       return dt = mt < 1 ? Dt / (1 - mt) : 0, jt = mt <= 0 ? 0 : qt === et ? (Vt - Ot) / mt % 6 : qt === Vt ? 2 + (Ot - et) / mt : 4 + (et - Vt) / mt, jt /= 6, jt %= 1, [360 * jt, 100 * mt, 100 * dt]
+       return vB = GB < 1 ? oB / (1 - GB) : 0, kB = GB <= 0 ? 0 : JB === IB ? (ZB - TB) / GB % 6 : JB === ZB ? 2 + (TB - IB) / GB : 4 + (IB - ZB) / GB, kB /= 6, kB %= 1, [360 * kB, 100 * GB, 100 * vB]
```

#### 20. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L822` → after: `L822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/226.js#L822) · [Before (L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/226.js#L822)

```diff
-         Ot = Vt < .5 ? 2 * et * Vt : 2 * et * (1 - Vt);
+         TB = ZB < .5 ? 2 * IB * ZB : 2 * IB * (1 - ZB);
```

#### 21. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L903-L905` → after: `L903-L905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L903-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/226.js#L903-L905) · [Before (L903-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/226.js#L903-L905)

```diff
-   36913: (tt, et, Vt) => {
-     const Ot = Vt(36918),
-       qt = Vt(36923),
+   36676: (BB, IB, ZB) => {
+     const TB = ZB(36684),
+       JB = ZB(36693),
```

#### 22. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L932` → after: `L932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/226.js#L932) · [Before (L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/226.js#L932)

```diff
-             return void 0 === qt || null === qt ? qt : (qt.length > 1 && (Vt = qt), tt(Vt))
+             return void 0 === JB || null === JB ? JB : (JB.length > 1 && (ZB = JB), BB(ZB))
```

#### 23. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L939-L940` → after: `L939-L940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L939-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/226.js#L939-L940) · [Before (L939-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/226.js#L939-L940)

```diff
-   36923: (tt, et, Vt) => {
-     const Ot = Vt(36918);
+   36693: (BB, IB, ZB) => {
+     const TB = ZB(36684);
```

#### 24. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L988` → after: `L988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/226.js#L988) · [Before (L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/226.js#L988)

```diff
-   36921: tt => {
+   36689: BB => {
```

#### 25. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1140-L1141` → after: `L1140-L1141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1140-L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/226.js#L1140-L1141) · [Before (L1140-L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/226.js#L1140-L1141)

```diff
-   36902: (tt, et, Vt) => {
-     var Ot = Vt(36905),
+   36658: (BB, IB, ZB) => {
+     var TB = ZB(36667),
```

#### 26. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L1157` → after: `L1157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R1157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/226.js#L1157) · [Before (L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/226.js#L1157)

```diff
-   36905: tt => {
+   36667: BB => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/227.js` (igzsf.a0b73a5f → c6gaap.4d6587ec)

- **File**: `bundles/bloxd.io/chunks/js/227.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c)

#### 1. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/227.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/227.js#L4)

```diff
-   36996: (tt, et, Vt) => {
+   36783: (BB, IB, ZB) => {
```

#### 2. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L8-L10` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/227.js#L9-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/227.js#L8-L10)

```diff
-       k: () => le,
-       o: () => Xe,
-       r: () => Qe
+       j: () => cI,
+       m: () => nI
```

#### 3. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L64` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/227.js#L64) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/227.js#L64)

```diff
-     var qe = Vt(1293);
+     var TI = ZB(1258);
```

#### 4. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L127` → after: `L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/227.js#L127) · [Before (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/227.js#L127)

```diff
-         if (de[et]) throw new Error(`duplicate sound name ${et} in ${de[et]} and ${fe}`);
+         if (GI[IB]) throw new Error(`duplicate sound name ${IB} in ${GI[IB]} and ${FI}`);
```

#### 5. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L149` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/227.js#L149) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/227.js#L149)

```diff
-       if (void 0 === et) throw new Error(`Invalid sound name ${tt} (not in any sprite sheet)`);
+       if (void 0 === IB) throw new Error(`Invalid sound name ${BB} (not in any sprite sheet)`);
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/228.js` (igzsf.a0b73a5f → c6gaap.4d6587ec)

- **File**: `bundles/bloxd.io/chunks/js/228.js` (74 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba)

#### 1. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L4)

```diff
-   39850: (tt, et, Vt) => {
+   39701: (BB, IB, ZB) => {
```

#### 2. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L6-L7)

```diff
-       e: () => Ot,
-       h: () => qt
+       d: () => TB,
+       g: () => JB
```

#### 3. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L12` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L12) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L12)

```diff
-   39316: (tt, et, Vt) => {
+   39175: (BB, IB, ZB) => {
```

#### 4. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L20)

```diff
-   37044: (tt, et, Vt) => {
+   36843: (BB, IB, ZB) => {
```

#### 5. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L22-L23` → after: `L22-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L22-L23) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L22-L23)

```diff
-       d: () => Dt,
-       h: () => qt
+       b: () => oB,
+       d: () => JB
```

#### 6. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L35)

```diff
-   40785: (tt, et, Vt) => {
+   40658: (BB, IB, ZB) => {
```

#### 7. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L38-L40` → after: `L38-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L38-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L38-L40) · [Before (L38-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L38-L40)

```diff
-       i: () => bt,
-       m: () => Mt,
-       p: () => yt
+       f: () => WB,
+       h: () => UB,
+       j: () => qB
```

#### 8. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L42-L48` → after: `L42-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L42-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L42-L48) · [Before (L42-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L42-L48)

```diff
-     var Ot = Vt(31),
-       qt = Vt(40792),
-       Dt = Vt(40769),
-       mt = Vt(40797),
-       dt = Vt(40777),
-       jt = Vt(40804),
-       Ht = Vt(40824);
+     var TB = ZB(24),
+       JB = ZB(40664),
+       oB = ZB(40643),
+       GB = ZB(40666),
+       vB = ZB(40649),
+       kB = ZB(40675),
+       cB = ZB(40692);
```

#### 9. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L52` → after: `L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L52) · [Before (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L52)

```diff
-       const Ot = (0, Dt.g)();
+       const TB = (0, oB.j)();
```

#### 10. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L57` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L57) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L57)

```diff
-       return `${tt[0]},${tt[1]},${tt[2]}`
+       return `${BB[0]},${BB[1]},${BB[2]}`
```

#### 11. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L77` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L77) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L77)

```diff
-           Rd: null !== et && void 0 !== et ? et : [0, 0, 0, 0],
+           Cv: null !== IB && void 0 !== IB ? IB : [0, 0, 0, 0],
```

#### 12. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L96` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L96) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L96)

```diff
-           return qt ? qt.lastOpened < (null !== (et = null === Vt || void 0 === Vt ? void 0 : Vt.passkeyLastUpdated) && void 0 !== et ? et : 0) ? (lt.delete(Ot), null) : [...qt.Rd] : null
+           return JB ? JB.lastOpened < (null !== (IB = null === ZB || void 0 === ZB ? void 0 : ZB.passkeyLastUpdated) && void 0 !== IB ? IB : 0) ? (zB.delete(TB), null) : [...JB.Cv] : null
```

#### 13. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L104-L108` → after: `L104-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L104-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L104-L108) · [Before (L104-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L104-L108)

```diff
-     }(0, Ht.j)(mt.d, (tt => {
-       const et = (0, jt.h)(mt.d, tt);
-       if (!(0, jt.d)(et) || et.tD) return;
-       if (ft++, !et.Bq || null === et.Tq) return void(Et = null);
-       const Vt = Qt(et.Tq);
+     }(0, cB.l)(GB.c, (BB => {
+       const IB = (0, kB.e)(GB.c, BB);
+       if (!(0, kB.d)(IB) || IB.eJ) return;
+       if (NB++, !IB.RJ || null === IB.XJ) return void(FB = null);
+       const ZB = hB(IB.XJ);
```

#### 14. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L111-L113` → after: `L111-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L111-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L111-L113) · [Before (L111-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L111-L113)

```diff
-         type: et.xq
-       }, null !== et.nq && lt.set(Vt, {
-         Rd: [...et.nq],
+         type: IB.mJ
+       }, null !== IB.LJ && zB.set(ZB, {
+         Cv: [...IB.LJ],
```

#### 15. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L119` → after: `L117-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L117-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L117-L119) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L119)

```diff
-       null !== Et && (Et = null, ft++, Ot.j.sw("chestToggleFromServer", !1, !0))
+       zB.clear(), FB = null, NB++
+     })), (0, cB.j)((() => {
+       null !== FB && (FB = null, NB++, TB.l.Gq("chestToggleFromServer", !1, !0))
```

#### 16. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L123` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L123) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L123)

```diff
-           watch: tt => (0, Ot.n)("EditBoard", (et => {
+           watch: BB => (0, TB.p)("EditBoard", (IB => {
```

#### 17. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L128` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L128) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L128)

```diff
-             const Ot = (0, Dt.g)(),
+             const TB = (0, oB.j)(),
```

#### 18. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L134` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L134) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L134)

```diff
-           watch: tt => (0, Ot.n)("OpenIronChest", (et => {
+           watch: BB => (0, TB.p)("OpenIronChest", (IB => {
```

#### 19. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L155-L158` → after: `L155-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L155-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L155-L158) · [Before (L155-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L155-L158)

```diff
-           null === (et = (0, Dt.g)()) || void 0 === et || et.send(dt.c.UpdateBoard, (0, dt.S)({
-             Rj: Vt,
-             Ij: Ot,
-             Pj: qt
+           null === (IB = (0, oB.j)()) || void 0 === IB || IB.send(vB.e.UpdateBoard, (0, vB.M)({
+             Wk: ZB,
+             Ck: TB,
+             Qk: JB
```

#### 20. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L168-L171` → after: `L168-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L168-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L168-L171) · [Before (L168-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L168-L171)

```diff
-           null === (et = (0, Dt.g)()) || void 0 === et || et.send(dt.c.UpdateBook, (0, dt.T)({
-             nm: Vt,
-             td: Ot,
-             Vd: qt
+           null === (IB = (0, oB.j)()) || void 0 === IB || IB.send(vB.e.UpdateBook, (0, vB.N)({
+             bG: ZB,
+             xG: TB,
+             EG: JB
```

#### 21. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L176` → after: `L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L176) · [Before (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L176)

```diff
-           null === (et = (0, Dt.g)()) || void 0 === et || et.send(dt.c.UpdateNameTag, tt)
+           null === (IB = (0, oB.j)()) || void 0 === IB || IB.send(vB.e.UpdateNameTag, BB)
```

#### 22. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L184-L187` → after: `L184-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L184-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L184-L187) · [Before (L184-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L184-L187)

```diff
-             qt = (0, Dt.g)();
-           Ot && qt && qt.send(dt.c.SetCustomLobbyBlock, (0, dt.I)({
-             qd: Ot.blockIdOf(Vt),
-             Od: et
+             JB = (0, oB.j)();
+           TB && JB && JB.send(vB.e.SetCustomLobbyBlock, (0, vB.D)({
+             KG: TB.blockIdOf(ZB),
+             DG: IB
```

#### 23. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L192` → after: `L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L192) · [Before (L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L192)

```diff
-   40845: (tt, et, Vt) => {
+   40710: (BB, IB, ZB) => {
```

#### 24. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L194-L196` → after: `L194-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L194-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L194-L196) · [Before (L194-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L194-L196)

```diff
-       b: () => jt,
-       c: () => mt,
-       d: () => dt
+       e: () => kB,
+       h: () => GB,
+       k: () => vB
```

#### 25. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L198-L200` → after: `L198-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L198-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L198-L200) · [Before (L198-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L198-L200)

```diff
-     var Ot = Vt(40761),
-       qt = Vt(4951),
-       Dt = Vt(40769);
+     var TB = ZB(40633),
+       JB = ZB(4958),
+       oB = ZB(40643);
```

#### 26. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L204-L205` → after: `L204-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L204-L205) · [Before (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L204-L205)

```diff
-       const et = null === (tt = (0, Dt.g)()) || void 0 === tt ? void 0 : tt.api.localId;
-       return void 0 === et || et === Ot.hd ? null : String(et)
+       const IB = null === (BB = (0, oB.j)()) || void 0 === BB ? void 0 : BB.api.localId;
+       return void 0 === IB || IB === TB.Rc ? null : String(IB)
```

#### 27. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L209` → after: `L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L209) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L209)

```diff
-       const et = (0, Dt.g)();
+       const IB = (0, oB.j)();
```

#### 28. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L212-L213` → after: `L212-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L212-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L212-L213) · [Before (L212-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L212-L213)

```diff
-       const Ot = (0, qt.o)((() => {
-         const et = (0, Dt.g)();
+       const TB = (0, JB.s)((() => {
+         const IB = (0, oB.j)();
```

#### 29. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L225-L226` → after: `L225-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L225-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L225-L226) · [Before (L225-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L225-L226)

```diff
-           const Vt = (0, Dt.g)();
-           return null === Vt ? et : tt(Vt)()
+           const ZB = (0, oB.j)();
+           return null === ZB ? IB : BB(ZB)()
```

#### 30. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L239` → after: `L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L239) · [Before (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L239)

```diff
-   40840: (tt, et, Vt) => {
+   40705: (BB, IB, ZB) => {
```

#### 31. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L243-L245` → after: `L243-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L243-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L243-L245) · [Before (L243-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L243-L245)

```diff
-     var Ot = Vt(40769),
-       qt = Vt(40845),
-       Dt = Vt(40853);
+     var TB = ZB(40643),
+       JB = ZB(40710),
+       oB = ZB(40715);
```

#### 32. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L249` → after: `L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L249) · [Before (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L249)

```diff
-       return null !== (tt = null === (et = (0, Ot.g)()) || void 0 === et ? void 0 : et.itemBridgeSources) && void 0 !== tt ? tt : Dt.e
+       return null !== (BB = null === (IB = (0, TB.j)()) || void 0 === IB ? void 0 : IB.itemBridgeSources) && void 0 !== BB ? BB : oB.b
```

#### 33. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L255` → after: `L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L255) · [Before (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L255)

```diff
-         watch: et => (0, qt.d)((Vt => {
+         watch: IB => (0, JB.k)((ZB => {
```

#### 34. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L264` → after: `L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L264) · [Before (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L264)

```diff
-         watch: et => (0, qt.d)((Vt => Vt.itemBridgeSources.events[tt].watch(et)))
+         watch: IB => (0, JB.k)((ZB => ZB.itemBridgeSources.events[BB].watch(IB)))
```

#### 35. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L301` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L301) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L301)

```diff
-   40853: (tt, et, Vt) => {
+   40715: (BB, IB, ZB) => {
```

#### 36. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L303` → after: `L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L303) · [Before (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L303)

```diff
-       e: () => dt
+       b: () => vB
```

#### 37. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L305` → after: `L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L305) · [Before (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L305)

```diff
-     var Ot = Vt(39850);
+     var TB = ZB(39701);
```

#### 38. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L464-L465` → after: `L464-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L464-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L464-L465) · [Before (L464-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L464-L465)

```diff
-             cX: 0,
-             jj: null,
+             Hn: 0,
+             Dv: null,
```

#### 39. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L526-L527` → after: `L526-L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L526-L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L526-L527) · [Before (L526-L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L526-L527)

```diff
-           worldCodeAiChunk: () => Ot.e,
-           worldCodeAiGameState: () => Ot.h
+           worldCodeAiChunk: () => TB.d,
+           worldCodeAiGameState: () => TB.g
```

#### 40. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L548` → after: `L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L548) · [Before (L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L548)

```diff
-   40767: (tt, et, Vt) => {
+   40640: (BB, IB, ZB) => {
```

#### 41. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L550-L554` → after: `L550-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L550-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L550-L554) · [Before (L550-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L550-L554)

```diff
-       e: () => vt,
-       f: () => ht,
-       h: () => Wt,
-       k: () => Kt,
-       n: () => Ct
+       d: () => OB,
+       g: () => wB,
+       j: () => YB,
+       n: () => sB,
+       p: () => CB
```

#### 42. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L556-L568` → after: `L556-L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L556-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L556-L568) · [Before (L556-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L556-L568)

```diff
-     var Ot = Vt(39441),
-       qt = Vt(1308),
-       Dt = Vt(2043),
-       mt = Vt(2054),
-       dt = Vt(3346),
-       jt = Vt(37044),
-       Ht = Vt(1423),
-       Xt = Vt(40769),
-       Qt = Vt(4980),
-       lt = Vt(2458),
-       Et = Vt(40777),
-       ft = Vt(40785),
-       wt = Vt(40840);
+     var TB = ZB(39308),
+       JB = ZB(1281),
+       oB = ZB(2029),
+       GB = ZB(2046),
+       vB = ZB(3461),
+       kB = ZB(36843),
+       cB = ZB(1382),
+       nB = ZB(40643),
+       hB = ZB(4990),
+       zB = ZB(2481),
+       FB = ZB(40649),
+       NB = ZB(40658),
+       gB = ZB(40705);
```

#### 43. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L585` → after: `L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L585) · [Before (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L585)

```diff
-       const et = (0, dt.b)(tt);
+       const IB = (0, vB.c)(BB);
```

#### 44. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L591` → after: `L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L591) · [Before (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L591)

```diff
-       const Vt = null === (et = (0, Xt.g)()) || void 0 === et ? void 0 : et.tables;
+       const ZB = null === (IB = (0, nB.j)()) || void 0 === IB ? void 0 : IB.tables;
```

#### 45. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L604` → after: `L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L604) · [Before (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L604)

```diff
-     }(0, Xt.r)((tt => {
+     }(0, nB.t)((BB => {
```

#### 46. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L607` → after: `L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L607) · [Before (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L607)

```diff
-     const Jt = (0, mt.g)("DisplayName", "Description");
+     const dB = (0, GB.d)("DisplayName", "Description");
```

#### 47. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L610` → after: `L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L610) · [Before (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L610)

```diff
-       return Boolean(Dt.b.get("useInventory") && Dt.b.get("useFullInventory"))
+       return Boolean(oB.c.get("useInventory") && oB.c.get("useFullInventory"))
```

#### 48. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L619` → after: `L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L619) · [Before (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L619)

```diff
-             return null === tt.chest ? tt : ((null === (Vt = et) || void 0 === Vt ? void 0 : Vt.from) === tt && et.chestVersion === (0, ft.e)() || (et = {
+             return null === BB.chest ? BB : ((null === (ZB = IB) || void 0 === ZB ? void 0 : ZB.from) === BB && IB.chestVersion === (0, NB.e)() || (IB = {
```

#### 49. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L624` → after: `L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L624) · [Before (L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L624)

```diff
-                 chest: (0, ft.p)(tt.chest)
+                 chest: (0, NB.j)(BB.chest)
```

#### 50. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L639-L640` → after: `L639-L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L639-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L639-L640) · [Before (L639-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L639-L640)

```diff
-             return (null === (tt = ut) || void 0 === tt ? void 0 : tt.namesVersion) !== (0, dt.h)() && (ut = {
-               namesVersion: (0, dt.h)(),
+             return (null === (BB = QB) || void 0 === BB ? void 0 : BB.namesVersion) !== (0, vB.g)() && (QB = {
+               namesVersion: (0, vB.g)(),
```

#### 51. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L643` → after: `L643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L643) · [Before (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L643)

```diff
-                   const et = (0, dt.b)(tt);
+                   const IB = (0, vB.c)(BB);
```

#### 52. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L646` → after: `L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L646) · [Before (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L646)

```diff
-                 salvageable: Nt((tt => !(!Mt(tt) || null === (0, jt.d)(tt)) || void 0))
+                 salvageable: yB((BB => !(!UB(BB) || null === (0, kB.b)(BB)) || void 0))
```

#### 53. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L656-L657` → after: `L656-L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L656-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L656-L657) · [Before (L656-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L656-L657)

```diff
-             return (null === (et = tt) || void 0 === et ? void 0 : et.namesVersion) !== (0, dt.h)() && (tt = {
-               namesVersion: (0, dt.h)(),
+             return (null === (IB = BB) || void 0 === IB ? void 0 : IB.namesVersion) !== (0, vB.g)() && (BB = {
+               namesVersion: (0, vB.g)(),
```

#### 54. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L663` → after: `L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L663) · [Before (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L663)

```diff
-             watch: Vt => (0, mt.q)((Ot => {
+             watch: ZB => (0, GB.o)((TB => {
```

#### 55. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L668` → after: `L668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L668) · [Before (L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L668)

```diff
-         creativeVisibility: (0, mt.l)((function() {
+         creativeVisibility: (0, GB.h)((function() {
```

#### 56. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L670` → after: `L670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L670) · [Before (L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L670)

```diff
-           for (const qt of null !== (et = null === (Vt = yt) || void 0 === Vt ? void 0 : Vt.creativeItemIds()) && void 0 !== et ? et : []) {
+           for (const JB of null !== (IB = null === (ZB = qB) || void 0 === ZB ? void 0 : ZB.creativeItemIds()) && void 0 !== IB ? IB : []) {
```

#### 57. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L674` → after: `L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L674) · [Before (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L674)

```diff
-             const Xt = null !== (mt = Dt.b.get((0, Ot.h)(Ht, "showInCreativeInven"))) && void 0 !== mt ? mt : null === (jt = yt) || void 0 === jt ? void 0 : jt.showInCreativeInvenOf(qt);
+             const nB = null !== (GB = oB.c.get((0, TB.g)(cB, "showInCreativeInven"))) && void 0 !== GB ? GB : null === (kB = qB) || void 0 === kB ? void 0 : kB.showInCreativeInvenOf(JB);
```

#### 58. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L678` → after: `L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L678) · [Before (L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L678)

```diff
-             publicLobby: (0, qt.P)((0, Ht.c)().lobbyName),
+             publicLobby: (0, JB.G)((0, cB.c)().lobbyName),
```

#### 59. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L681-L682` → after: `L681-L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L681-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L681-L682) · [Before (L681-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L681-L682)

```diff
-         }), ["connectedGameChanged"], (0, mt.g)("ShowInCreativeInven")),
-         fullInventory: (0, mt.l)(Ct, [], (0, mt.k)("useInventory", "useFullInventory"))
+         }), ["connectedGameChanged"], (0, GB.d)("ShowInCreativeInven")),
+         fullInventory: (0, GB.h)(CB, [], (0, GB.f)("useInventory", "useFullInventory"))
```

#### 60. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L698` → after: `L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L698) · [Before (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L698)

```diff
-           (0, Qt.g)(lt.u.InventoryOpen, tt ? lt.u.InventoryOpen : 0)
+           (0, hB.f)(zB.o.InventoryOpen, BB ? zB.o.InventoryOpen : 0)
```

#### 61. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L708` → after: `L708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L708) · [Before (L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L708)

```diff
-             Rd: Ot
+             Cv: TB
```

#### 62. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L710-L712` → after: `L710-L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L710-L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L710-L712) · [Before (L710-L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L710-L712)

```diff
-           null === (et = (0, Xt.g)()) || void 0 === et || et.send(Et.c.ChangeIronChestPasskey, (0, Et.j)({
-             Tq: Vt,
-             Rd: Ot
+           null === (IB = (0, nB.j)()) || void 0 === IB || IB.send(FB.e.ChangeIronChestPasskey, (0, FB.k)({
+             XJ: ZB,
+             Cv: TB
```

#### 63. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L719` → after: `L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L719) · [Before (L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L719)

```diff
-             Rd: Ot
+             Cv: TB
```

#### 64. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L721-L723` → after: `L721-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L721-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L721-L723) · [Before (L721-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L721-L723)

```diff
-           null === (et = (0, Xt.g)()) || void 0 === et || et.send(Et.c.OpenIronChest, (0, Et.z)({
-             Tq: Vt,
-             Rd: Ot
+           null === (IB = (0, nB.j)()) || void 0 === IB || IB.send(FB.e.OpenIronChest, (0, FB.y)({
+             XJ: ZB,
+             Cv: TB
```

#### 65. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L731` → after: `L731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L731) · [Before (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L731)

```diff
-   40831: (tt, et, Vt) => {
+   40701: (BB, IB, ZB) => {
```

#### 66. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L733-L735` → after: `L733-L734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L733-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L733-L734) · [Before (L733-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L733-L735)

```diff
-       d: () => Ot,
-       e: () => Xt,
-       h: () => mt,
+       c: () => TB,
+       g: () => nB,
```

#### 67. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L738` → after: `L737-L738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L737-L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L737-L738) · [Before (L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L738)

```diff
-       o: () => Ht
+       r: () => vB,
+       u: () => cB
```

#### 68. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L753` → after: `L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L753) · [Before (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L753)

```diff
-       return tt instanceof WebAssembly.RuntimeError || tt instanceof Ot || qt(tt) && Dt.test(null !== (et = tt.stack) && void 0 !== et ? et : "")
+       return BB instanceof WebAssembly.RuntimeError || BB instanceof TB || JB(BB) && oB.test(null !== (IB = BB.stack) && void 0 !== IB ? IB : "")
```

#### 69. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L762` → after: `L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L762) · [Before (L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L762)

```diff
-       if (et % qt !== 0 || et + Vt > tt.byteLength) throw new Ot(`${Dt}: ${Vt} bytes at ${et}, ${qt}-aligned, outside ${tt.byteLength} bytes of memory`)
+       if (IB % JB !== 0 || IB + ZB > BB.byteLength) throw new TB(`${oB}: ${ZB} bytes at ${IB}, ${JB}-aligned, outside ${BB.byteLength} bytes of memory`)
```

#### 70. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L773` → after: `L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L773) · [Before (L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L773)

```diff
-   40769: (tt, et, Vt) => {
+   40643: (BB, IB, ZB) => {
```

#### 71. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L776-L777` → after: `L776-L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L776-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L776-L777) · [Before (L776-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L776-L777)

```diff
-       e: () => Nt,
-       g: () => wt,
+       f: () => yB,
+       j: () => gB,
```

#### 72. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L782-L783` → after: `L782-L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L782-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L782-L783) · [Before (L782-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L782-L783)

```diff
-       r: () => Qt,
-       u: () => ft
+       t: () => hB,
+       v: () => NB
```

#### 73. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L787` → after: `L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L787) · [Before (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L787)

```diff
-         super(`the join's code did not load: ${tt instanceof Error?tt.message:String(tt)}`, {
+         super(`the join's code did not load: ${BB instanceof Error?BB.message:String(BB)}`, {
```

#### 74. `bundles/bloxd.io/chunks/js/228.js` (Changed code · before: `L815` → after: `L815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84baR815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-06bab55f92aa6c8fc97051758445809a0325dbc447db653b4048ba48846f84ba) · [After (L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/228.js#L815) · [Before (L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/228.js#L815)

```diff
-       return qt ??= Promise.all([Vt.e(73), Vt.e(98), Vt.e(226), Vt.e(78), Vt.e(227), Vt.e(201), Vt.e(97), Vt.e(246), Vt.e(273), Vt.e(199), Vt.e(214), Vt.e(191), Vt.e(198), Vt.e(193), Vt.e(144), Vt.e(88), Vt.e(122), Vt.e(252), Vt.e(57)]).then((() => Vt(42820))).then((et => {
+       return JB ??= Promise.all([ZB.e(73), ZB.e(98), ZB.e(226), ZB.e(78), ZB.e(227), ZB.e(201), ZB.e(97), ZB.e(246), ZB.e(273), ZB.e(199), ZB.e(214), ZB.e(191), ZB.e(198), ZB.e(193), ZB.e(144), ZB.e(88), ZB.e(122), ZB.e(252), ZB.e(57)]).then((() => ZB(42579))).then((IB => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/229.js` (igzsf.a0b73a5f → c6gaap.4d6587ec)

- **File**: `bundles/bloxd.io/chunks/js/229.js` (101 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0)

#### 1. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L4)

```diff
-   37155: (tt, et, Vt) => {
+   36953: (BB, IB, ZB) => {
```

#### 2. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L6-L7)

```diff
-       b: () => Ct,
-       f: () => Jt
+       c: () => CB,
+       d: () => dB
```

#### 3. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L9-L10` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L9-L10) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L9-L10)

```diff
-     var Ot = Vt(4354),
-       qt = Vt(1554),
+     var TB = ZB(4433),
+       JB = ZB(1507),
```

#### 4. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L12-L20` → after: `L12-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L12-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L12-L20) · [Before (L12-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L12-L20)

```diff
-       mt = Vt(6667),
-       dt = Vt(4345),
-       jt = Vt(1387),
-       Ht = Vt(2024),
-       Xt = Vt(2001),
-       Qt = Vt(1556),
-       lt = Vt(1286),
-       Et = Vt(37164),
-       ft = Vt(1140),
+       GB = ZB(6635),
+       vB = ZB(4419),
+       kB = ZB(1353),
+       cB = ZB(1995),
+       nB = ZB(1960),
+       hB = ZB(1516),
+       zB = ZB(1248),
+       FB = ZB(36958),
+       NB = ZB(1091),
```

#### 5. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L22-L25` → after: `L22-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L22-L25) · [Before (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L22-L25)

```diff
-       yt = Vt(1410),
-       Nt = Vt(1152),
-       Mt = Vt(1371),
-       bt = Vt(1188);
+       qB = ZB(1370),
+       yB = ZB(1102),
+       UB = ZB(1343),
+       WB = ZB(1153);
```

#### 6. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L31` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L31) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L31)

```diff
-       } = (0, lt.H)(), [et, Vt] = (0, Dt.useState)(!1), [ft, Ct] = (0, Dt.useState)(null), [Kt, ht] = (0, Dt.useState)(1), [vt, Wt] = (0, Dt.useState)(!1), [St, ct] = (0, Dt.useState)(!1), Rt = (0, Dt.useRef)(0), It = (0, Dt.useRef)(!1), Pt = (0, Dt.useRef)(!1), Zt = (0, Dt.useRe … [truncated]
+       } = (0, zB.G)(), [IB, ZB] = (0, oB.useState)(!1), [NB, CB] = (0, oB.useState)(null), [sB, wB] = (0, oB.useState)(1), [OB, YB] = (0, oB.useState)(!1), [iB, pB] = (0, oB.useState)(!1), aB = (0, oB.useRef)(0), HB = (0, oB.useRef)(!1), MB = (0, oB.useRef)(!1), jB = (0, oB.useRe … [truncated]
```

#### 7. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L34-L35` → after: `L34-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L34-L35) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L34-L35)

```diff
-         const tt = null !== ft && void 0 !== ft ? ft : "Rested Speed";
-         Ht.gameBridge.send("wakeUp", St ? tt : null), Lt.current = null, Vt(!1), Ct(null), ht(1), Wt(!1), ct(!1)
+         const BB = null !== NB && void 0 !== NB ? NB : "Rested Speed";
+         cB.gameBridge.send("wakeUp", iB ? BB : null), PB.current = null, ZB(!1), CB(null), wB(1), YB(!1), pB(!1)
```

#### 8. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L41-L42` → after: `L41-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L41-L42) · [Before (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L41-L42)

```diff
-       return (0, qt.f)("PlayerPhysicsTypeUpdate", (tt => {
-         tt !== Lt.current && (Lt.current = tt, tt === mt.n.SLEEPING ? (Pt.current || (Rt.current = Ht.gameBridge.lookup("cameraZoom", null), Pt.current = !0), It.current = !0, Ht.gameBridge.send("setCameraZoom", 3), Vt(!0), ht(function() {
+       return (0, JB.d)("PlayerPhysicsTypeUpdate", (BB => {
+         BB !== PB.current && (PB.current = BB, BB === GB.o.SLEEPING ? (MB.current || (aB.current = cB.gameBridge.lookup("cameraZoom", null), MB.current = !0), HB.current = !0, cB.gameBridge.send("setCameraZoom", 3), ZB(!0), wB(function() {
```

#### 9. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L44-L46` → after: `L44-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L44-L46) · [Before (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L44-L46)

```diff
-             if (Et.b.leafBeds.includes(tt)) return console.log(`Found leaf bed: ${tt}`), 1;
-             if (Et.b.woolBeds.includes(tt)) return console.log(`Found woold bed: ${tt}`), 2;
-             if (Et.b.strongBeds.includes(tt)) return console.log(`Found strong bed ${tt}`), 3
+             if (FB.c.leafBeds.includes(BB)) return console.log(`Found leaf bed: ${BB}`), 1;
+             if (FB.c.woolBeds.includes(BB)) return console.log(`Found woold bed: ${BB}`), 2;
+             if (FB.c.strongBeds.includes(BB)) return console.log(`Found strong bed ${BB}`), 3
```

#### 10. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L51` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L51) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L51)

```diff
-         (0, jt.m)(Jt)
+         (0, kB.p)(dB)
```

#### 11. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L53-L54` → after: `L53-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L53-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L53-L54) · [Before (L53-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L53-L54)

```diff
-         et ? (0, jt.p)(Jt) : ((0, jt.m)(Jt), It.current && (Ht.gameBridge.send("setCameraZoom", Rt.current), It.current = !1))
-       }), [et]), (0, Mt.w)("overlay", Zt, kt, et), (0, bt.jsx)(Ot.b, {
+         IB ? (0, kB.t)(dB) : ((0, kB.p)(dB), HB.current && (cB.gameBridge.send("setCameraZoom", aB.current), HB.current = !1))
+       }), [IB]), (0, UB.t)("overlay", jB, rB, IB), (0, WB.jsx)(TB.d, {
```

#### 12. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L70` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L70) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L70)

```diff
-               children: dt.h.map((et => (0, bt.jsxs)(ut, {
+               children: vB.i.map((IB => (0, WB.jsxs)(QB, {
```

#### 13. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L72` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L72) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L72)

```diff
-                 Zj: ft,
+                 sk: NB,
```

#### 14. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L92` → after: `L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L92) · [Before (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L92)

```diff
-               }), (0, bt.jsxs)(Qt.f, {
+               }), (0, WB.jsxs)(hB.g, {
```

#### 15. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L95` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L95) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L95)

```diff
-                   St ? Ft() : (Wt(!0), (0, yt.$)((() => {
+                   iB ? RB() : (YB(!0), (0, qB._)((() => {
```

#### 16. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L101` → after: `L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L101) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L101)

```diff
-                   children: [(0, bt.jsx)(Nt.b, {
+                   children: [(0, WB.jsx)(yB.d, {
```

#### 17. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L145` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L145) · [Before (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L145)

```diff
-         Zj: Ot,
+         sk: TB,
```

#### 18. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L148` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L148) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L148)

```diff
-       return Vt === Ot ? (0, bt.jsx)(Qt.m, {
+       return ZB === TB ? (0, WB.jsx)(hB.p, {
```

#### 19. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L153` → after: `L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L153) · [Before (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L153)

```diff
-       }) : (0, bt.jsx)(Qt.g, {
+       }) : (0, WB.jsx)(hB.k, {
```

#### 20. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L161` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L161) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L161)

```diff
-   40745: (tt, et, Vt) => {
+   40619: (BB, IB, ZB) => {
```

#### 21. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L163` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L163) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L163)

```diff
-       d: () => gt
+       b: () => DB
```

#### 22. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L165-L187` → after: `L165-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L165-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L165-L187) · [Before (L165-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L165-L187)

```diff
-     var Ot = Vt(26),
-       qt = Vt(31),
-       Dt = Vt(4376),
-       mt = Vt(377),
-       dt = Vt(1732),
-       jt = Vt(8390),
-       Ht = Vt(4392),
-       Xt = Vt(8919),
-       Qt = Vt(8414),
-       lt = Vt(8397),
-       Et = Vt(8420),
-       ft = Vt(1492),
-       wt = Vt(1779),
-       yt = Vt(8426),
-       Nt = Vt(8861),
-       Mt = Vt(9037),
- ... (7 more removed lines; see GitHub link above)
+     var TB = ZB(20),
+       JB = ZB(24),
+       oB = ZB(4459),
+       GB = ZB(342),
+       vB = ZB(1711),
+       kB = ZB(8291),
+       cB = ZB(4469),
+       nB = ZB(8824),
+       hB = ZB(8325),
+       zB = ZB(8303),
+       FB = ZB(8334),
+       NB = ZB(1454),
+       gB = ZB(1752),
+       qB = ZB(8341),
+       yB = ZB(8766),
+       UB = ZB(8917),
+ ... (7 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L227` → after: `L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L227) · [Before (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L227)

```diff
-         const Vt = new vt.b,
+         const ZB = new OB.e,
```

#### 24. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L270-L273` → after: `L270-L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L270-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L270-L273) · [Before (L270-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L270-L273)

```diff
-             const Et = (0, Kt.m)(tt.contextActionInputs()),
-               ft = null !== (lt = Et[0]) && void 0 !== lt ? lt : ct;
-             (0, ht.e)((0, Kt.g)(ft) ? ft : null);
-             const wt = (0, Kt.d)(Et);
+             const FB = (0, sB.g)(BB.contextActionInputs()),
+               NB = null !== (zB = FB[0]) && void 0 !== zB ? zB : pB;
+             (0, wB.d)((0, sB.c)(NB) ? NB : null);
+             const gB = (0, sB.b)(FB);
```

#### 25. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L275` → after: `L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L275) · [Before (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L275)

```diff
-             const yt = (0, jt.i)("actionButton");
+             const qB = (0, kB.g)("actionButton");
```

#### 26. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L278` → after: `L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L278) · [Before (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L278)

```diff
-               "tap" === tt ? Dt(mt, ft, [yt], Ht) : "hold" === tt && (Qt.c.consumeButton(yt), qt.j.sw(Jt.i, Et))
+               "tap" === BB ? oB(GB, NB, [qB], cB) : "hold" === BB && (hB.c.consumeButton(qB), JB.l.Gq(dB.i, FB))
```

#### 27. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L283` → after: `L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L283) · [Before (L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L283)

```diff
-             Dt(tt, et, [(0, jt.i)("menuConfirm"), (0, jt.i)("actionButton")], performance.now())
+             oB(BB, IB, [(0, kB.g)("menuConfirm"), (0, kB.g)("actionButton")], performance.now())
```

#### 28. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L286` → after: `L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L286) · [Before (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L286)

```diff
-             Vt.release(), Ot(), (0, ht.e)(null), (0, ht.h)(!1)
+             ZB.release(), TB(), (0, wB.d)(null), (0, wB.h)(!1)
```

#### 29. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L290-L305` → after: `L290-L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L290-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L290-L305) · [Before (L290-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L290-L305)

```diff
-     var It = Vt(8375);
-     var Pt = Vt(40741),
-       Zt = Vt(8980),
-       Lt = Vt(8411),
-       Ft = Vt(9065);
-     var kt = Vt(40735),
-       Gt = Vt(9068),
-       zt = Vt(40752),
-       ot = Vt(9052),
-       rt = Vt(8982),
-       Ut = Vt(8989),
-       At = Vt(8998),
-       it = Vt(8868),
-       Yt = Vt(8943);
-     const Bt = () => it.b[(0, lt.i)().tapHoldTime].wheelMs,
-       pt = () => ((0, Xt.c)(), (0, Yt.b)("controllerMenuKey")),
+     var HB = ZB(8277);
+     var MB = ZB(40613),
+       jB = ZB(8871),
+       PB = ZB(8316),
+       RB = ZB(8951);
+     var rB = ZB(40606),
+       mB = ZB(8956),
+       XB = ZB(40627),
+       LB = ZB(8937),
+       eB = ZB(8877),
+       uB = ZB(8881),
+       fB = ZB(8883),
+       lB = ZB(8771),
+       AB = ZB(8843);
+     const tB = () => lB.c[(0, zB.i)().tapHoldTime].wheelMs,
+       bB = () => ((0, nB.c)(), (0, AB.e)("controllerMenuKey")),
```

#### 30. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L336` → after: `L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L336) · [Before (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L336)

```diff
-           Ct = qt.j.subscribe("appManagerUpdated|activeInputDevice", (et => {
+           CB = JB.l.subscribe("appManagerUpdated|activeInputDevice", (IB => {
```

#### 31. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L342` → after: `L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L342) · [Before (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L342)

```diff
-           Kt = null, (0, rt.d)(null)
+           sB = null, (0, eB.e)(null)
```

#### 32. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L347-L348` → after: `L347-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L347-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L347-L348) · [Before (L347-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L347-L348)

```diff
-           st = new vt.b,
-           nt = new vt.b,
+           KB = new OB.e,
+           VB = new OB.e,
```

#### 33. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L350` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L350) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L350)

```diff
-           ee = qt.j.subscribe(Jt.l, (et => {
+           BI = JB.l.subscribe(dB.l, (IB => {
```

#### 34. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L362-L364` → after: `L362-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L362-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L362-L364) · [Before (L362-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L362-L364)

```diff
-         const de = (0, Nt.c)(ut._),
-           je = (0, Nt.c)(ut._),
-           He = new vt.b;
+         const GI = (0, yB.d)(QB.Y),
+           vI = (0, yB.d)(QB.Y),
+           kI = new OB.e;
```

#### 35. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L367` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L367) · [Before (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L367)

```diff
-             de.reset(), je.reset(), He.release(), (0, At.d)(!1), gt.release(), Ve.cancel(), (0, Ut.h)(!1), Oe.cancel(), te.release(), st.release(), nt.release(), St()
+             GI.reset(), vI.reset(), kI.release(), (0, fB.h)(!1), DB.release(), II.cancel(), (0, uB.c)(!1), ZI.cancel(), SB.release(), KB.release(), VB.release(), iB()
```

#### 36. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L385` → after: `L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L385) · [Before (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L385)

```diff
-             if (!(0, ft.f)()) return void(Ee || (Ee = !0, qe = !1, tt.stopMoving()));
+             if (!(0, NB.h)()) return void(zI || (zI = !0, TI = !1, BB.stopMoving()));
```

#### 37. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L389-L390` → after: `L389-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L389-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L389-L390) · [Before (L389-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L389-L390)

```diff
-               Qt = (0, jt.i)("sprint");
-             Vt = (0, kt.l)(Vt, {
+               hB = (0, kB.g)("sprint");
+             ZB = (0, rB.p)(ZB, {
```

#### 38. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L396` → after: `L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L396) · [Before (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L396)

```diff
-             const Et = (0, jt.i)("jump");
+             const FB = (0, kB.g)("jump");
```

#### 39. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L398` → after: `L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L398) · [Before (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L398)

```diff
-             const wt = (0, jt.i)("sneak"),
+             const gB = (0, kB.g)("sneak"),
```

#### 40. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L402` → after: `L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L402) · [Before (L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L402)

```diff
-                 sneakTogglePressed: Ot.wasPressed((0, jt.i)("sneakToggle"))
+                 sneakTogglePressed: TB.wasPressed((0, kB.g)("sneakToggle"))
```

#### 41. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L410-L411` → after: `L410-L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L410-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L410-L411) · [Before (L410-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L410-L411)

```diff
-             const Vt = (0, jt.i)("chat");
-             if ("off" === (0, lt.i)().quickChat) return void(tt.wasPressed(Vt) && (Qt.c.consumeButton(Vt), qt.j.sw(Zt.b)));
+             const ZB = (0, kB.g)("chat");
+             if ("off" === (0, zB.i)().quickChat) return void(BB.wasPressed(ZB) && (hB.c.consumeButton(ZB), JB.l.Gq(jB.e)));
```

#### 42. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L413` → after: `L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L413) · [Before (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L413)

```diff
-             "tap" === Ot || "hold" === Ot && null === (0, wt.d)() ? qt.j.sw(Zt.b) : "hold" === Ot && (Qt.c.consumeButton(Vt), qt.j.sw(bt.j))
+             "tap" === TB || "hold" === TB && null === (0, gB.d)() ? JB.l.Gq(jB.e) : "hold" === TB && (hB.c.consumeButton(ZB), JB.l.Gq(WB.l))
```

#### 43. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L418-L419` → after: `L418-L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L418-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L418-L419) · [Before (L418-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L418-L419)

```diff
-                 Ot = (0, jt.i)("emoteWheel");
-               if ("wheel" === (0, lt.i)().emoteButton) return tt.wasPressed(Ot) && (Qt.c.consumeButton(Ot), qt.j.sw("requestEmoteWheelPadOpen", !0)), (0, Mt.d)() !== Vt;
+                 TB = (0, kB.g)("emoteWheel");
+               if ("wheel" === (0, zB.i)().emoteButton) return BB.wasPressed(TB) && (hB.c.consumeButton(TB), JB.l.Gq("requestEmoteWheelPadOpen", !0)), (0, UB.d)() !== ZB;
```

#### 44. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L421-L424` → after: `L421-L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L421-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L421-L424) · [Before (L421-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L421-L424)

```diff
-               return "tap" === Dt ? qt.j.sw("requestEmoteRepeatLast") : "hold" === Dt && (Qt.c.consumeButton(Ot), qt.j.sw("requestEmoteWheelPadOpen", !1)), (0, Mt.d)() !== Vt
-             })(et, Vt) || we(et, Vt), et.wasPressed((0, jt.i)("inventory")) && (Qt.c.consumeButton((0, jt.i)("inventory")), (0, dt.C)(pt(), "inventory", tt.hasFullInventory())), et.wasPressed((0, jt.i)("pause")) && (Qt.c.consumeButton((0, jt.i)("pause")), (0, Ht.b)() === mt.o.SOC … [truncated]
-               if ("shop" === (0, Lt.b)()) return qt.j.sw(Ft.j), void(0, dt.y)(tt, mt.o.SHOP, !0);
-               (0, dt.y)(tt, mt.o.LOBBY_LEADERBOARD, et)
+               return "tap" === oB ? JB.l.Gq("requestEmoteRepeatLast") : "hold" === oB && (hB.c.consumeButton(TB), JB.l.Gq("requestEmoteWheelPadOpen", !1)), (0, UB.d)() !== ZB
+             })(IB, ZB) || NI(IB, ZB), IB.wasPressed((0, kB.g)("inventory")) && (hB.c.consumeButton((0, kB.g)("inventory")), (0, vB.A)(bB(), "inventory", BB.hasFullInventory())), IB.wasPressed((0, kB.g)("pause")) && (hB.c.consumeButton((0, kB.g)("pause")), (0, cB.d)() === GB.q.SOC … [truncated]
+               if ("shop" === (0, PB.b)()) return JB.l.Gq(RB.k), void(0, vB.x)(BB, GB.q.SHOP, !0);
+               (0, vB.x)(BB, GB.q.LOBBY_LEADERBOARD, IB)
```

#### 45. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L430` → after: `L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L430) · [Before (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L430)

```diff
-               const Ot = (0, jt.i)("attack"),
+               const TB = (0, kB.g)("attack"),
```

#### 46. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L432-L435` → after: `L432-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L432-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L432-L435) · [Before (L432-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L432-L435)

```diff
-               qt && !Ve.isLatched() && (ct = tt.targetsBlock()), Ve.update(qt, et.isHeld(Ot), Vt, "toggle" === (0, lt.i)().attackMode), Ve.isLatched() && ct ? Yt.update(tt.targetsBlock(), Vt) && Ve.unlatch() : Yt.reset(), (0, Ut.h)(Ve.isLatched())
-             })(et, Vt), Oe.update(et.wasPressed((0, jt.i)("use")), et.isHeld((0, jt.i)("use")), Vt, !1), de.update(et.isHeld((0, jt.i)("hotbarPrevious")), Vt) && tt.scrollHotbar(-1), je.update(et.isHeld((0, jt.i)("hotbarNext")), Vt) && tt.scrollHotbar(1), ((et, Vt, Ot) => {
-               const qt = (0, jt.i)("perspective"),
-                 Dt = (0, jt.i)("pickBlock"),
+               JB && !II.isLatched() && (pB = BB.targetsBlock()), II.update(JB, IB.isHeld(TB), ZB, "toggle" === (0, zB.i)().attackMode), II.isLatched() && pB ? AB.update(BB.targetsBlock(), ZB) && II.unlatch() : AB.reset(), (0, uB.c)(II.isLatched())
+             })(IB, ZB), ZI.update(IB.wasPressed((0, kB.g)("use")), IB.isHeld((0, kB.g)("use")), ZB, !1), GI.update(IB.isHeld((0, kB.g)("hotbarPrevious")), ZB) && BB.scrollHotbar(-1), vI.update(IB.isHeld((0, kB.g)("hotbarNext")), ZB) && BB.scrollHotbar(1), ((IB, ZB, TB) => {
+               const JB = (0, kB.g)("perspective"),
+                 oB = (0, kB.g)("pickBlock"),
```

#### 47. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L437` → after: `L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L437) · [Before (L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L437)

```diff
-               (0, At.d)(mt && !Xe && tt.targetsBlock());
+               (0, fB.h)(GB && !cI && BB.targetsBlock());
```

#### 48. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L439` → after: `L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L439) · [Before (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L439)

```diff
-                 Vt.pickBlock() && (Xe = !0, (0, At.d)(!1))
+                 ZB.pickBlock() && (cI = !0, (0, fB.h)(!1))
```

#### 49. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L445` → after: `L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L445) · [Before (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L445)

```diff
-               const qt = (0, jt.i)("drop");
+               const JB = (0, kB.g)("drop");
```

#### 50. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L449` → after: `L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L449) · [Before (L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L449)

```diff
-                 "off" !== tt.buttonRepeat && (Kt = Ot, ht = it.b[tt.tapHoldTime].dropStackMs, (0, rt.d)(ht))
+                 "off" !== BB.buttonRepeat && (sB = TB, wB = lB.c[BB.tapHoldTime].dropStackMs, (0, eB.e)(wB))
```

#### 51. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L457-L459` → after: `L457-L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L457-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L457-L459) · [Before (L457-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L457-L459)

```diff
-               const et = qe && "keyboardMouse" === Ot.b.get("activeInputDevice") && !(0, Et.H)(),
-                 Vt = (0, Et.k)() ? [Pt.c] : [];
-               return ((0, Et.k)() || et) && (0, yt.e)(Vt) && tt.hasPlayer()
+               const IB = TI && "keyboardMouse" === TB.d.get("activeInputDevice") && !(0, FB.H)(),
+                 ZB = (0, FB.i)() ? [MB.d] : [];
+               return ((0, FB.i)() || IB) && (0, qB.h)(ZB) && BB.hasPlayer()
```

#### 52. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L464-L466` → after: `L464-L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L464-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L464-L466) · [Before (L464-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L464-L466)

```diff
-                 Ot = (0, kt.o)(tt, (0, kt.h)(Vt, (0, jt.i)("pause"), (0, Gt.c)().isSupported())),
-                 qt = (0, kt.f)(Ot, Vt.swapSticks);
-               return (0, Et.k)() ? (De = !1, (0, yt.e)() ? (me = !1, gt.update(qt.look, Vt, Ot.isHeld((0, jt.i)("use"))), fe(Ot, qt.move, et), void Ne(Ot, et)) : (me || (me = !0, Xt.lostToPadScreen(), le()), void we(Ot, et))) : (De || (Qe(), De = !0), void fe(Ot, qt.move, et))
+                 TB = (0, rB.q)(BB, (0, rB.h)(ZB, (0, kB.g)("pause"), (0, mB.d)().isSupported())),
+                 JB = (0, rB.g)(TB, ZB.swapSticks);
+               return (0, FB.i)() ? (JI = !1, (0, qB.h)() ? (oI = !1, DB.update(JB.look, ZB, TB.isHeld((0, kB.g)("use"))), FI(TB, JB.move, IB), void qI(TB, IB)) : (oI || (oI = !0, nB.lostToPadScreen(), hI()), void NI(TB, IB))) : (JI || (nI(), JI = !0), void FI(TB, JB.move, IB))
```

#### 53. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L469` → after: `L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L469) · [Before (L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L469)

```diff
-               (0, Et.k)() && Xt.lostToPadScreen(), le(tt)
+               (0, FB.i)() && nB.lostToPadScreen(), hI(BB)
```

#### 54. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L472` → after: `L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L472) · [Before (L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L472)

```diff
-               (0, Et.k)() && (0, yt.e)(Pt.g) && tt.hasPlayer() ? fe(et, (0, kt.f)(et, (0, lt.i)().swapSticks).move, performance.now(), !0) : le()
+               (0, FB.i)() && (0, qB.h)(MB.i) && BB.hasPlayer() ? FI(IB, (0, rB.g)(IB, (0, zB.i)().swapSticks).move, performance.now(), !0) : hI()
```

#### 55. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L475` → after: `L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L475) · [Before (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L475)

```diff
-           Me = (0, Pt.d)(tt),
+           UI = (0, MB.f)(BB),
```

#### 56. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L477-L478` → after: `L477-L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L477-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L477-L478) · [Before (L477-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L477-L478)

```diff
-             const tt = qt.j.subscribe(It.d, (tt => {
-               !tt && (0, Et.k)() && "inGame" === Ot.b.get("gameState") && qt.j.sw("showBottomMessage", {
+             const BB = JB.l.subscribe(HB.e, (BB => {
+               !BB && (0, FB.i)() && "inGame" === TB.d.get("gameState") && JB.l.Gq("showBottomMessage", {
```

#### 57. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L487` → after: `L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L487) · [Before (L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L487)

```diff
-               qt.j.unsubscribe(tt)
+               JB.l.unsubscribe(BB)
```

#### 58. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L491` → after: `L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L491) · [Before (L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L491)

```diff
-           le(), tt.uninstall(), (0, ot.d)(!1), (0, At.d)(!1), qt.j.unsubscribe(Ct), qt.j.unsubscribe(ee), ae(), Me(), be(), gt.uninstall()
+           hI(), BB.uninstall(), (0, LB.f)(!1), (0, fB.h)(!1), JB.l.unsubscribe(CB), JB.l.unsubscribe(BI), yI(), UI(), WI(), DB.uninstall()
```

#### 59. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L495` → after: `L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L495) · [Before (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L495)

```diff
-   40741: (tt, et, Vt) => {
+   40613: (BB, IB, ZB) => {
```

#### 60. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L499` → after: `L498-L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L498-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L498-L499) · [Before (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L499)

```diff
-       g: () => Et
+       f: () => qB,
+       i: () => FB
```

#### 61. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L501-L509` → after: `L501-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L501-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L501-L509) · [Before (L501-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L501-L509)

```diff
-     var Ot = Vt(1387),
-       qt = Vt(4376),
-       Dt = Vt(9023),
-       mt = Vt(37155),
-       dt = Vt(1820),
-       jt = Vt(1277),
-       Ht = Vt(8426),
-       Xt = Vt(8929),
-       Qt = Vt(9039);
+     var TB = ZB(1353),
+       JB = ZB(4459),
+       oB = ZB(8895),
+       GB = ZB(36953),
+       vB = ZB(1787),
+       kB = ZB(1243),
+       cB = ZB(8341),
+       nB = ZB(8835),
+       hB = ZB(8920);
```

#### 62. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L512-L513` → after: `L512-L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L512-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L512-L513) · [Before (L512-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L512-L513)

```diff
-         quickChatWheel: Xt.b,
-         actionWheel: Qt.o
+         quickChatWheel: nB.c,
+         actionWheel: hB.p
```

#### 63. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L517` → after: `L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L517) · [Before (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L517)

```diff
-       wt = tt => (0, Ot.k)().includes(tt),
+       gB = BB => (0, TB.l)().includes(BB),
```

#### 64. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L519` → after: `L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L519) · [Before (L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L519)

```diff
-         const et = [(0, Ht.i)(ft, (() => tt.hasPlayer() && tt.isPlayerDead())), (0, Ht.i)("sleeping", (() => wt(mt.f))), (0, Ht.i)("turnstile", (() => wt(jt.h))), (0, Ht.i)("videoAd", dt.h), (0, Ht.i)("replay", (() => (0, qt.e)() || tt.isReplayMode())), (0, Ht.i)("freeCamera", (( … [truncated]
+         const IB = [(0, cB.k)(NB, (() => BB.hasPlayer() && BB.isPlayerDead())), (0, cB.k)("sleeping", (() => gB(GB.d))), (0, cB.k)("turnstile", (() => gB(kB.f))), (0, cB.k)("videoAd", vB.g), (0, cB.k)("replay", (() => (0, JB.f)() || BB.isReplayMode())), (0, cB.k)("freeCamera", (( … [truncated]
```

#### 65. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L521` → after: `L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L521) · [Before (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L521)

```diff
-           return (0, Ht.i)(et, Vt)
+           return (0, cB.k)(IB, ZB)
```

#### 66. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L528` → after: `L528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L528) · [Before (L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L528)

```diff
-   40735: (tt, et, Vt) => {
+   40606: (BB, IB, ZB) => {
```

#### 67. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L530` → after: `L530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L530) · [Before (L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L530)

```diff
-       b: () => qt,
+       c: () => JB,
```

#### 68. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L532` → after: `L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L532) · [Before (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L532)

```diff
-       f: () => dt,
+       g: () => vB,
```

#### 69. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L534-L535` → after: `L534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L534) · [Before (L534-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L534-L535)

```diff
-       j: () => mt,
-       k: () => Dt,
+       i: () => GB,
```

#### 70. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L537` → after: `L536-L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L536-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L536-L537) · [Before (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L537)

```diff
-       o: () => Qt
+       p: () => cB,
+       q: () => hB
```

#### 71. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L539` → after: `L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L539) · [Before (L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L539)

```diff
-     var Ot = Vt(8377);
+     var TB = ZB(8282);
```

#### 72. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L545` → after: `L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L545) · [Before (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L545)

```diff
-         const qt = (0, Ot.k)(tt, et.lookDeadzone);
+         const JB = (0, TB.i)(BB, IB.lookDeadzone);
```

#### 73. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L564` → after: `L564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L564) · [Before (L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L564)

```diff
-             const Dt = (0, Ot.i)((0, Ot.k)(tt, et.lookDeadzone), et.lookCurve),
+             const oB = (0, TB.h)((0, TB.i)(BB, IB.lookDeadzone), IB.lookCurve),
```

#### 74. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L581-L582` → after: `L581-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L581-L582) · [Before (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L581-L582)

```diff
-           JR: tt.yawRadPerSec * Vt,
-           uR: tt.pitchRadPerSec * Vt
+           YH: BB.yawRadPerSec * ZB,
+           iH: BB.pitchRadPerSec * ZB
```

#### 75. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L593` → after: `L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L593) · [Before (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L593)

```diff
-         const Vt = (0, Ot.k)(tt, et),
+         const ZB = (0, TB.i)(BB, IB),
```

#### 76. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L610` → after: `L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L610) · [Before (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L610)

```diff
-         const mt = Vt ? Dt : tt.latchedAtMs,
+         const GB = ZB ? oB : BB.latchedAtMs,
```

#### 77. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L639` → after: `L639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L639) · [Before (L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L639)

```diff
-   40752: (tt, et, Vt) => {
+   40627: (BB, IB, ZB) => {
```

#### 78. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L642` → after: `L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L642) · [Before (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L642)

```diff
-       h: () => Ot
+       g: () => TB
```

#### 79. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L659` → after: `L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L659) · [Before (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L659)

```diff
-         toggled: qt ? !dt : dt
+         toggled: JB ? !vB : vB
```

#### 80. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L662` → after: `L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L662) · [Before (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L662)

```diff
-         toggled: Ot || qt ? !dt : dt
+         toggled: TB || JB ? !vB : vB
```

#### 81. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L686-L687` → after: `L686-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L686-L687) · [Before (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L686-L687)

```diff
-   40724: (tt, et, Vt) => {
-     Vt(9068)
+   40595: (BB, IB, ZB) => {
+     ZB(8956)
```

#### 82. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L689` → after: `L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L689) · [Before (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L689)

```diff
-   40730: (tt, et, Vt) => {
+   40599: (BB, IB, ZB) => {
```

#### 83. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L691` → after: `L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L691) · [Before (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L691)

```diff
-       b: () => bt
+       e: () => WB
```

#### 84. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L693-L704` → after: `L693-L704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L693-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L693-L704) · [Before (L693-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L693-L704)

```diff
-     var Ot = Vt(31),
-       qt = Vt(9023),
-       Dt = Vt(9035),
-       mt = Vt(8390),
-       dt = Vt(8414),
-       jt = Vt(8397),
-       Ht = Vt(40735),
-       Xt = Vt(40741),
-       Qt = Vt(8426),
-       lt = Vt(8377),
-       Et = Vt(8929),
-       ft = Vt(9039);
+     var TB = ZB(24),
+       JB = ZB(8895),
+       oB = ZB(8913),
+       GB = ZB(8291),
+       vB = ZB(8325),
+       kB = ZB(8303),
+       cB = ZB(40606),
+       nB = ZB(40613),
+       hB = ZB(8341),
+       zB = ZB(8282),
+       FB = ZB(8835),
+       NB = ZB(8920);
```

#### 85. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L707` → after: `L707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L707) · [Before (L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L707)

```diff
-         openButton: () => (0, mt.i)("emoteWheel"),
+         openButton: () => (0, GB.g)("emoteWheel"),
```

#### 86. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L709` → after: `L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L709) · [Before (L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L709)

```diff
-           Ot.j.sw("emoteWheelPadAim", tt)
+           TB.l.Gq("emoteWheelPadAim", BB)
```

#### 87. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L712` → after: `L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L712) · [Before (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L712)

```diff
-           Ot.j.sw("requestEmoteWheelPadCommit", tt)
+           TB.l.Gq("requestEmoteWheelPadCommit", BB)
```

#### 88. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L715` → after: `L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L715) · [Before (L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L715)

```diff
-           Ot.j.sw("requestEmoteWheelClose")
+           TB.l.Gq("requestEmoteWheelClose")
```

#### 89. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L718-L719` → after: `L718-L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L718-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L718-L719) · [Before (L718-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L718-L719)

```diff
-         isOpen: Et.b,
-         openButton: () => (0, mt.i)("chat"),
+         isOpen: FB.c,
+         openButton: () => (0, GB.g)("chat"),
```

#### 90. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L721` → after: `L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L721) · [Before (L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L721)

```diff
-           Ot.j.sw(Et.d, tt)
+           TB.l.Gq(FB.d, BB)
```

#### 91. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L724` → after: `L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L724) · [Before (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L724)

```diff
-           Ot.j.sw(Et.g, tt)
+           TB.l.Gq(FB.j, BB)
```

#### 92. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L727` → after: `L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L727) · [Before (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L727)

```diff
-           Ot.j.sw(Et.e)
+           TB.l.Gq(FB.g)
```

#### 93. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L729` → after: `L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L729) · [Before (L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L729)

```diff
-         keptOpenBy: [Xt.c]
+         keptOpenBy: [nB.d]
```

#### 94. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L731-L732` → after: `L731-L732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L731-L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L731-L732) · [Before (L731-L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L731-L732)

```diff
-         isOpen: ft.o,
-         openButton: () => (0, mt.i)("actionButton"),
+         isOpen: NB.p,
+         openButton: () => (0, GB.g)("actionButton"),
```

#### 95. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L734` → after: `L734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L734) · [Before (L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L734)

```diff
-           Ot.j.sw(ft.d, tt)
+           TB.l.Gq(NB.c, BB)
```

#### 96. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L737` → after: `L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L737) · [Before (L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L737)

```diff
-           Ot.j.sw(ft.h, tt)
+           TB.l.Gq(NB.g, BB)
```

#### 97. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L740` → after: `L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L740) · [Before (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L740)

```diff
-           Ot.j.sw(ft.g)
+           TB.l.Gq(NB.e)
```

#### 98. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L745` → after: `L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L745) · [Before (L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L745)

```diff
-         return null !== (tt = wt.find((tt => tt.isOpen()))) && void 0 !== tt ? tt : null
+         return null !== (BB = gB.find((BB => BB.isOpen()))) && void 0 !== BB ? BB : null
```

#### 99. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L767` → after: `L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L767) · [Before (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L767)

```diff
-             if (null !== (0, Qt.d)([...Xt.g, ...null !== (qt = lt.keptOpenBy) && void 0 !== qt ? qt : []])) return void lt.close();
+             if (null !== (0, hB.d)([...nB.i, ...null !== (JB = zB.keptOpenBy) && void 0 !== JB ? JB : []])) return void zB.close();
```

#### 100. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L769` → after: `L769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L769) · [Before (L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L769)

```diff
-               ft = (0, Ht.f)(Ot.frame, (0, jt.i)().swapSticks),
+               NB = (0, cB.g)(TB.frame, (0, kB.i)().swapSticks),
```

#### 101. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L771-L773` → after: `L771-L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L771-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/229.js#L771-L773) · [Before (L771-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/229.js#L771-L773)

```diff
-             tt !== lt ? (tt = lt, et = !Mt(Ot, Et) || Math.hypot(wt.x, wt.y) >= Dt.B, Vt = !1) : Vt && (Vt = !1, Mt(Ot, Et) && (et = !1)), lt.aim(wt);
-             const bt = (0, mt.i)("menuConfirm"),
-               Jt = (0, mt.i)("menuBack");
+             BB !== zB ? (BB = zB, IB = !UB(TB, FB) || Math.hypot(gB.x, gB.y) >= oB.D, ZB = !1) : ZB && (ZB = !1, UB(TB, FB) && (IB = !1)), zB.aim(gB);
+             const WB = (0, GB.g)("menuConfirm"),
+               dB = (0, GB.g)("menuBack");
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/230.js` (igzsf.a0b73a5f → c6gaap.4d6587ec)

- **File**: `bundles/bloxd.io/chunks/js/230.js` (108 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26)

#### 1. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L4)

```diff
-   38690: (tt, et, Vt) => {
+   38504: (BB, IB, ZB) => {
```

#### 2. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L8-L9` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L8-L9) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L8-L9)

```diff
-     var Ot = Vt(229),
-       qt = Vt(37917);
+     var TB = ZB(201),
+       JB = ZB(37705);
```

#### 3. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L23-L24` → after: `L23-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L23-L24) · [Before (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L23-L24)

```diff
-         Sd: .5,
-         VVt: !1
+         Wv: .5,
+         bIB: !1
```

#### 4. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L37-L38` → after: `L37-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L37-L38) · [Before (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L37-L38)

```diff
-         Sd: .5,
-         VVt: !1
+         Wv: .5,
+         bIB: !1
```

#### 5. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L42-L43` → after: `L42-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L42-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L42-L43) · [Before (L42-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L42-L43)

```diff
-           width: Ot.e.iy,
-           height: Ot.e.Yy
+           width: TB.f.uq,
+           height: TB.f.fq
```

#### 6. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L46-L47` → after: `L46-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L46-L47) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L46-L47)

```diff
-           width: Ot.e.iy + .4,
-           height: Ot.e.Yy + .6
+           width: TB.f.uq + .4,
+           height: TB.f.fq + .6
```

#### 7. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L49-L52` → after: `L49-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L49-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L49-L52) · [Before (L49-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L49-L52)

```diff
-         eyeHeight: Ot.e.Yy * Ot.e.playerEyeToHeightRatio,
-         rideHeight: Ot.e.Yy - .3,
-         Sd: .5,
-         VVt: !1
+         eyeHeight: TB.f.fq * TB.f.playerEyeToHeightRatio,
+         rideHeight: TB.f.fq - .3,
+         Wv: .5,
+         bIB: !1
```

#### 8. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L65-L66` → after: `L65-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L65-L66) · [Before (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L65-L66)

```diff
-         Sd: .5,
-         VVt: !1
+         Wv: .5,
+         bIB: !1
```

#### 9. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L79-L80` → after: `L79-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L79-L80) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L79-L80)

```diff
-         Sd: .5,
-         VVt: !1
+         Wv: .5,
+         bIB: !1
```

#### 10. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L93-L94` → after: `L93-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L93-L94) · [Before (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L93-L94)

```diff
-         Sd: .5,
-         VVt: !1
+         Wv: .5,
+         bIB: !1
```

#### 11. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L107-L108` → after: `L107-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L107-L108) · [Before (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L107-L108)

```diff
-         Sd: .5,
-         VVt: !1
+         Wv: .5,
+         bIB: !1
```

#### 12. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L114-L115` → after: `L114-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L114-L115) · [Before (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L114-L115)

```diff
-             width: Ot.e.iy,
-             height: Ot.e.Yy
+             width: TB.f.uq,
+             height: TB.f.fq
```

#### 13. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L118-L119` → after: `L118-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L118-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L118-L119) · [Before (L118-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L118-L119)

```diff
-             width: Ot.e.iy + .4,
-             height: Ot.e.Yy + .6
+             width: TB.f.uq + .4,
+             height: TB.f.fq + .6
```

#### 14. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L121-L124` → after: `L121-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L121-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L121-L124) · [Before (L121-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L121-L124)

```diff
-           eyeHeight: Ot.e.Yy * Ot.e.playerEyeToHeightRatio,
-           rideHeight: Ot.e.Yy - .1,
-           Sd: qt.d.Sd,
-           VVt: !0
+           eyeHeight: TB.f.fq * TB.f.playerEyeToHeightRatio,
+           rideHeight: TB.f.fq - .1,
+           Wv: JB.d.Wv,
+           bIB: !0
```

#### 15. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L140-L141` → after: `L140-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L140-L141) · [Before (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L140-L141)

```diff
-           Sd: .5,
-           VVt: !1
+           Wv: .5,
+           bIB: !1
```

#### 16. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L154-L155` → after: `L154-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L154-L155) · [Before (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L154-L155)

```diff
-           Sd: .5,
-           VVt: !1
+           Wv: .5,
+           bIB: !1
```

#### 17. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L168-L169` → after: `L168-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L168-L169) · [Before (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L168-L169)

```diff
-           Sd: .5,
-           VVt: !1
+           Wv: .5,
+           bIB: !1
```

#### 18. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L182-L183` → after: `L182-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L182-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L182-L183) · [Before (L182-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L182-L183)

```diff
-           Sd: .5,
-           VVt: !1
+           Wv: .5,
+           bIB: !1
```

#### 19. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L197-L198` → after: `L197-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L197-L198) · [Before (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L197-L198)

```diff
-           Sd: .5,
-           VVt: !1
+           Wv: .5,
+           bIB: !1
```

#### 20. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L211-L212` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L211-L212) · [Before (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L211-L212)

```diff
-           Sd: .5,
-           VVt: !1
+           Wv: .5,
+           bIB: !1
```

#### 21. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L228-L229` → after: `L228-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L228-L229) · [Before (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L228-L229)

```diff
-             width: Ot.e.iy,
-             height: Ot.e.Yy
+             width: TB.f.uq,
+             height: TB.f.fq
```

#### 22. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L232` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L232) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L232)

```diff
-             width: Ot.e.iy + .4,
+             width: TB.f.uq + .4,
```

#### 23. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L237-L238` → after: `L237-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L237-L238) · [Before (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L237-L238)

```diff
-           Sd: .5,
-           VVt: !1
+           Wv: .5,
+           bIB: !1
```

#### 24. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L253-L254` → after: `L253-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L253-L254) · [Before (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L253-L254)

```diff
-           Sd: .5,
-           VVt: !1
+           Wv: .5,
+           bIB: !1
```

#### 25. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L268-L269` → after: `L268-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L268-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L268-L269) · [Before (L268-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L268-L269)

```diff
-           Sd: .5,
-           VVt: !1
+           Wv: .5,
+           bIB: !1
```

#### 26. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L283-L284` → after: `L283-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L283-L284) · [Before (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L283-L284)

```diff
-           Sd: .5,
-           VVt: !1
+           Wv: .5,
+           bIB: !1
```

#### 27. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L304-L305` → after: `L304-L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L304-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L304-L305) · [Before (L304-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L304-L305)

```diff
-           Sd: .5,
-           VVt: !1
+           Wv: .5,
+           bIB: !1
```

#### 28. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L319-L320` → after: `L319-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L319-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L319-L320) · [Before (L319-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L319-L320)

```diff
-           Sd: .5,
-           VVt: !1
+           Wv: .5,
+           bIB: !1
```

#### 29. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L333-L334` → after: `L333-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L333-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L333-L334) · [Before (L333-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L333-L334)

```diff
-           Sd: .5,
-           VVt: !1
+           Wv: .5,
+           bIB: !1
```

#### 30. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L338-L339` → after: `L338-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L338-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L338-L339) · [Before (L338-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L338-L339)

```diff
-             width: Ot.e.iy,
-             height: Ot.e.Yy
+             width: TB.f.uq,
+             height: TB.f.fq
```

#### 31. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L342-L343` → after: `L342-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L342-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L342-L343) · [Before (L342-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L342-L343)

```diff
-             width: Ot.e.iy + .4,
-             height: Ot.e.Yy + .6
+             width: TB.f.uq + .4,
+             height: TB.f.fq + .6
```

#### 32. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L345-L348` → after: `L345-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L345-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L345-L348) · [Before (L345-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L345-L348)

```diff
-           eyeHeight: Ot.e.Yy * Ot.e.playerEyeToHeightRatio,
-           rideHeight: Ot.e.Yy - .1,
-           Sd: .5,
-           VVt: !1
+           eyeHeight: TB.f.fq * TB.f.playerEyeToHeightRatio,
+           rideHeight: TB.f.fq - .1,
+           Wv: .5,
+           bIB: !1
```

#### 33. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L361-L362` → after: `L361-L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L361-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L361-L362) · [Before (L361-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L361-L362)

```diff
-           Sd: .5,
-           VVt: !1
+           Wv: .5,
+           bIB: !1
```

#### 34. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L366-L367` → after: `L366-L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L366-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L366-L367) · [Before (L366-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L366-L367)

```diff
-             width: Ot.e.iy,
-             height: Ot.e.Yy
+             width: TB.f.uq,
+             height: TB.f.fq
```

#### 35. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L370-L371` → after: `L370-L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L370-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L370-L371) · [Before (L370-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L370-L371)

```diff
-             width: Ot.e.iy + .4,
-             height: Ot.e.Yy + .6
+             width: TB.f.uq + .4,
+             height: TB.f.fq + .6
```

#### 36. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L373-L376` → after: `L373-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L373-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L373-L376) · [Before (L373-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L373-L376)

```diff
-           eyeHeight: Ot.e.Yy * Ot.e.playerEyeToHeightRatio,
-           rideHeight: Ot.e.Yy - .1,
-           Sd: .5,
-           VVt: !1
+           eyeHeight: TB.f.fq * TB.f.playerEyeToHeightRatio,
+           rideHeight: TB.f.fq - .1,
+           Wv: .5,
+           bIB: !1
```

#### 37. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L389-L390` → after: `L389-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L389-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L389-L390) · [Before (L389-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L389-L390)

```diff
-           Sd: .5,
-           VVt: !1
+           Wv: .5,
+           bIB: !1
```

#### 38. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L403-L404` → after: `L403-L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L403-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L403-L404) · [Before (L403-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L403-L404)

```diff
-           Sd: .5,
-           VVt: !1
+           Wv: .5,
+           bIB: !1
```

#### 39. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L417-L418` → after: `L417-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L417-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L417-L418) · [Before (L417-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L417-L418)

```diff
-           Sd: .5,
-           VVt: !1
+           Wv: .5,
+           bIB: !1
```

#### 40. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L431-L432` → after: `L431-L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L431-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L431-L432) · [Before (L431-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L431-L432)

```diff
-           Sd: .5,
-           VVt: !1
+           Wv: .5,
+           bIB: !1
```

#### 41. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L445-L446` → after: `L445-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L445-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L445-L446) · [Before (L445-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L445-L446)

```diff
-           Sd: .5,
-           VVt: !1
+           Wv: .5,
+           bIB: !1
```

#### 42. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L459-L460` → after: `L459-L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L459-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L459-L460) · [Before (L459-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L459-L460)

```diff
-           Sd: .5,
-           VVt: !1
+           Wv: .5,
+           bIB: !1
```

#### 43. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L473-L474` → after: `L473-L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L473-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L473-L474) · [Before (L473-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L473-L474)

```diff
-           Sd: .5,
-           VVt: !1
+           Wv: .5,
+           bIB: !1
```

#### 44. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L487-L488` → after: `L487-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L487-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L487-L488) · [Before (L487-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L487-L488)

```diff
-           Sd: .5,
-           VVt: !1
+           Wv: .5,
+           bIB: !1
```

#### 45. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L510-L511` → after: `L510-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L510-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L510-L511) · [Before (L510-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L510-L511)

```diff
-           Sd: .5,
-           VVt: !1
+           Wv: .5,
+           bIB: !1
```

#### 46. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L524-L525` → after: `L524-L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L524-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L524-L525) · [Before (L524-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L524-L525)

```diff
-           Sd: .5,
-           VVt: !1
+           Wv: .5,
+           bIB: !1
```

#### 47. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L538-L539` → after: `L538-L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L538-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L538-L539) · [Before (L538-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L538-L539)

```diff
-           Sd: .5,
-           VVt: !1
+           Wv: .5,
+           bIB: !1
```

#### 48. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L552-L553` → after: `L552-L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L552-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L552-L553) · [Before (L552-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L552-L553)

```diff
-           Sd: .5,
-           VVt: !1
+           Wv: .5,
+           bIB: !1
```

#### 49. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L566-L567` → after: `L566-L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L566-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L566-L567) · [Before (L566-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L566-L567)

```diff
-           Sd: .5,
-           VVt: !1
+           Wv: .5,
+           bIB: !1
```

#### 50. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L581-L582` → after: `L581-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L581-L582) · [Before (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L581-L582)

```diff
-           Sd: .5,
-           VVt: !1
+           Wv: .5,
+           bIB: !1
```

#### 51. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L604-L605` → after: `L604-L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L604-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L604-L605) · [Before (L604-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L604-L605)

```diff
-           Sd: .5,
-           VVt: !1
+           Wv: .5,
+           bIB: !1
```

#### 52. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L613` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L613) · [Before (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L613)

```diff
-   37306: (tt, et, Vt) => {
+   37093: (BB, IB, ZB) => {
```

#### 53. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L615` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L615) · [Before (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L615)

```diff
-       e: () => Ot
+       b: () => TB
```

#### 54. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L777` → after: `L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L777) · [Before (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L777)

```diff
-   37922: (tt, et, Vt) => {
+   37710: (BB, IB, ZB) => {
```

#### 55. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L779` → after: `L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L779) · [Before (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L779)

```diff
-       b: () => mt
+       c: () => GB
```

#### 56. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L781` → after: `L781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L781) · [Before (L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L781)

```diff
-     var Ot = Vt(404),
+     var TB = ZB(364),
```

#### 57. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L783` → after: `L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L783) · [Before (L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L783)

```diff
-       Dt = Vt(1993);
+       oB = ZB(1956);
```

#### 58. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L786` → after: `L786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L786) · [Before (L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L786)

```diff
-     const yt = [0, 1, 8, 255, "length", 46, 69, 3, 242, "e", "undefined", void 0, 177, "d", "c", 96, 63, 6, "fromCodePoint", 7, 12, "push", "a", 91, 8191, 88, 13, 14, 2, 9, "g", 5, "f", 82, 152, 93, 149, 16, 4, "6", 512, "b", 20, 90, 106, 162, 15, 232, 10, 187, 202, 28, 1023, 127 … [truncated]
+     const qB = [227, 0, 1, 8, 106, "a", "i", "g", "e", 151, 4, 255, "length", 178, 2, 3, "undefined", void 0, 65, 133, 54, 246, 63, 6, "fromCodePoint", 7, 12, "push", "b", 36, 189, 91, 212, 8191, 88, 13, 14, 70, 97, 164, 172, 5, "f", 131, 209, 76, 147, "d", 102, 114, 115, 116, nu … [truncated]
```

#### 59. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L789-L794` → after: `L789-L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L789-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L789-L792) · [Before (L789-L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L789-L794)

```diff
-       return tt[yt[4]] = yt[1], typeof dt[tt[yt[0]]] === yt[10] ? dt[tt[yt[0]]] = function(tt) {
-         var et, Vt, Ot, qt, Dt, mt, dt;
-         for (ct(et = "" + (tt || ""), Vt = et.length, Ot = [], qt = yt[0], Dt = yt[0], mt = -yt[1]), dt = yt[0]; dt < Vt; dt++) {
-           var jt = ':18u*p2ANcX3?(G0&x>Z~F@J[=]^Wz$IaDK<fjV#tBk.e`/qhvwi};54brOolELm%"U,HQC6RYn{|gPd+TsM!y)S79_'.indexOf(et[dt]);
-           if (jt !== -yt[1])
-             if (mt < yt[0]) mt = jt;
+       return BB[qB[12]] = qB[2], typeof vB[BB[qB[1]]] === qB[16] ? vB[BB[qB[1]]] = function(...BB) {
+         for (aB(BB[qB[12]] = qB[2], BB[qB[5]] = 'D9jAfsgXPLpFaoOQbiBNlMVcUKtJWrqhkSeC|YEm}=TuZ7,@H?G~n`/Rv^%5dI_:;<6#!+y2xw[>.{z183*"(0]$)4&', BB[-qB[0]] = "" + (BB[qB[1]] || ""), BB[-qB[4]] = BB[-qB[0]].length, BB[qB[10]] = [], BB[qB[8]] = qB[1], BB[-qB[9]] = qB[1], BB[qB[7]] =  … [truncated]
+           if (BB[qB[6]] = BB[qB[5]].indexOf(BB[-qB[0]][BB[qB[3]]]), BB[qB[6]] !== -qB[2])
+             if (BB[qB[7]] < qB[1]) BB[qB[7]] = BB[qB[6]];
```

#### 60. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L796` → after: `L794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L794) · [Before (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L796)

```diff
-               ct(mt += jt * yt[23], qt |= mt << Dt, Dt += (mt & yt[24]) > yt[25] ? yt[26] : yt[27]);
+               aB(BB[qB[7]] += BB[qB[6]] * qB[31], BB[qB[8]] |= BB[qB[7]] << BB[-qB[9]], BB[-qB[9]] += (BB[qB[7]] & qB[33]) > qB[34] ? qB[35] : qB[36]);
```

#### 61. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L798-L804` → after: `L796-L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L796-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L796-L804) · [Before (L798-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L798-L804)

```diff
-                 ct(Ot.push(qt & yt[3]), qt >>= yt[2], Dt -= yt[2])
-               } while (Dt > yt[19]);
-               mt = -yt[1]
-             }
-         }
-         return mt > -yt[1] && Ot.push((qt | mt << Dt) & yt[3]), Mt(Ot)
-       }(jt[tt[yt[0]]]) : dt[tt[yt[0]]]
+                 aB(BB[qB[10]].push(BB[qB[8]] & qB[11]), BB[qB[8]] >>= qB[3], BB[-qB[9]] -= qB[3])
+               } while (BB[-qB[9]] > qB[25]);
+               BB[qB[7]] = -qB[2]
+             } return BB[qB[7]] > -qB[2] && BB[qB[10]].push((BB[qB[8]] | BB[qB[7]] << BB[-qB[9]]) & qB[11]), UB(BB[qB[10]])
+       }(kB[BB[qB[1]]]) : vB[BB[qB[1]]]
+     }
+ 
+     function UB(BB) {
+       return typeof nB !== qB[16] && nB ? (new nB).decode(new hB(BB)) : typeof zB !== qB[16] && zB ? zB.from(BB).toString("utf-8") : gB(BB)
```

#### 62. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L808` → after: `L808-L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L808-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L808-L821) · [Before (L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L808)

```diff
-       return tt[yt[4]] = yt[1], typeof Xt !== yt[10] && Xt ? (new Xt).decode(new Qt(tt[yt[0]])) : typeof lt !== yt[10] && lt ? lt.from(tt[yt[0]]).toString("utf-8") : wt(tt[yt[0]])
+       if (BB[qB[12]] = qB[15], BB[qB[1]] === function(...BB) {
+           return BB[qB[12]] = qB[2], typeof vB[BB[qB[1]]] === qB[16] ? vB[BB[qB[1]]] = function(...BB) {
+             for (aB(BB[qB[12]] = qB[2], BB[qB[2]] = ']<8[);157$0.x3,d=gtWBonKFQmJAVrNq%^:}y4/MOU@`9{_#l*CTHh|~"YPXzfwD!>vi2bsuajI(+?ZScEp6LRkGe&', BB[qB[14]] = "" + (BB[qB[1]] || ""), BB[qB[29]] = BB[qB[14]].length, BB[-qB[37]] = [], BB[qB[32]] = qB[1], BB[qB[23]] = qB[1], BB[-qB … [truncated]
+               if (BB[qB[6]] = BB[qB[2]].indexOf(BB[qB[14]][BB[qB[3]]]), BB[qB[6]] !== -qB[2])
+                 if (BB[-qB[30]] < qB[1]) BB[-qB[30]] = BB[qB[6]];
+                 else {
+                   aB(BB[-qB[30]] += BB[qB[6]] * qB[31], BB[qB[32]] |= BB[-qB[30]] << BB[qB[23]], BB[qB[23]] += (BB[-qB[30]] & qB[33]) > qB[34] ? qB[35] : qB[36]);
+                   do {
+                     aB(BB[-qB[37]].push(BB[qB[32]] & qB[11]), BB[qB[32]] >>= qB[3], BB[qB[23]] -= qB[3])
+                   } while (BB[qB[23]] > qB[25]);
+                   BB[-qB[30]] = -qB[2]
+                 } return BB[-qB[30]] > -qB[2] && BB[-qB[37]].push((BB[qB[32]] | BB[-qB[30]] << BB[qB[23]]) & qB[11]), UB(BB[-qB[37]])
+           }(kB[BB[qB[1]]]) : vB[BB[qB[1]]]
+         }(96)) return BB[qB[2]] + BB[qB[14]]
```

#### 63. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L812-L813` → after: `L825-L826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L825-L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L825-L826) · [Before (L812-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L812-L813)

```diff
-     ct(dt = {}, jt = ["0vYaEg%>`3?RIsX", 'w`EA;i}OIm6<yljjwK/Iy6}no"DQKGoz', '{"fIRfk}J%]O_Tz<?>^a@V:', '[c)Wl!Yzo"|+*hE<26T5Vjx=D0^u=*7z`?ZaBE:kdmXRP]JB:502[}yzD?LW1', "ouA})PzqoNhIT+Tt_;(Iv#s?|3b=9+1IbcB{`ggQ3oR*XjbKLWB2/sCH|LV", "|Ksat+P>HZ", "h]Q4,dAZ+;*JA]V>>cRv*/i19G9,WR1.a … [truncated]
-       ct(tt[yt[4]] = yt[0], tt[yt[8]] = [function() {
+     aB(vB = {}, kB = ["T<^~G~o9AacRlA", 'c}Pq2``@=<"Psd3}lkVXJ}V]8BdM3|5cNkGk@>{9&<CAV3FKs!_R33rC"a/.9', "8WLJ!e1^w<6B}54Wj:6P9m3=DL,R9", '.Oek_%/,@a!Cobxh//gS,{r=VNOoyoJi2F7h$"~9', "lkXS4E01D6BxpE9U?/X/J", '"O=qK^6[xl[9H5,}^~9g"3?:;aZU.2Lh/eHLdmA:OBR?vQQJ]7/h~m`9@au', "Vk$LKw0XX … [truncated]
+       aB(BB[qB[12]] = qB[1], BB[qB[5]] = [function() {
```

#### 64. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L821` → after: `L834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L834) · [Before (L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L821)

```diff
-       }], tt[yt[5]] = yt[11], tt[yt[6]] = []);
+       }], BB[qB[13]] = qB[17], BB[qB[14]] = []);
```

#### 65. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L823` → after: `L836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L836) · [Before (L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L823)

```diff
-         ct(tt[yt[5]] = Object, tt[yt[6]][yt[21]]("".__proto__.constructor.name))
+         aB(BB[qB[13]] = Object, BB[qB[14]][qB[27]]("".__proto__.constructor.name))
```

#### 66. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L825-L828` → after: `L838-L841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L838-L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L838-L841) · [Before (L825-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L825-L828)

```diff
-       tt: for (tt[yt[7]] = yt[0]; tt[yt[7]] < tt[yt[8]][yt[4]]; tt[yt[7]]++) try {
-         for (tt[yt[5]] = tt[yt[8]][tt[yt[7]]](), tt[yt[9]] = yt[0]; tt[yt[9]] < tt[yt[6]][yt[4]]; tt[yt[9]]++)
-           if (typeof tt[yt[5]][tt[yt[6]][tt[yt[9]]]] === yt[10]) continue tt;
-         return tt[yt[5]]
+       BB: for (BB[qB[15]] = qB[1]; BB[qB[15]] < BB[qB[5]][qB[12]]; BB[qB[15]]++) try {
+         for (BB[qB[13]] = BB[qB[5]][BB[qB[15]]](), BB[qB[10]] = qB[1]; BB[qB[10]] < BB[qB[14]][qB[12]]; BB[qB[10]]++)
+           if (typeof BB[qB[13]][BB[qB[14]][BB[qB[10]]]] === qB[16]) continue BB;
+         return BB[qB[13]]
```

#### 67. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L830-L832` → after: `L843-L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L843-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L843-L845) · [Before (L830-L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L830-L832)

```diff
-       return tt[yt[5]] || this
-     }() || {}, Xt = Ht.TextDecoder, Qt = Ht.Uint8Array, lt = Ht.mf, Et = Ht.String || String, ft = Ht.Array || Array, wt = function(...tt) {
-       return ct(tt[yt[4]] = yt[0], tt[yt[22]] = new ft(yt[55]), tt[yt[1]] = Et[yt[18]] || Et.fromCharCode, tt[-yt[12]] = []),
+       return BB[qB[13]] || this
+     }() || {}, nB = cB.TextDecoder, hB = cB.Uint8Array, zB = cB.UN, FB = cB.String || String, NB = cB.Array || Array, gB = function(...BB) {
+       return aB(BB[qB[12]] = qB[1], BB[qB[28]] = new NB(qB[66]), BB[qB[2]] = FB[qB[24]] || FB.fromCharCode, BB[-qB[18]] = []),
```

#### 68. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L834-L835` → after: `L847-L848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L847-L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L847-L848) · [Before (L834-L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L834-L835)

```diff
-           for (ct(et[yt[4]] = yt[1], et[yt[1]] = yt[11], et[yt[15]] = yt[11], et[yt[14]] = et[yt[0]][yt[4]], tt[-yt[12]][yt[4]] = yt[0]), et[yt[13]] = yt[0]; et[yt[13]] < et[yt[14]];) ct(et[yt[15]] = et[yt[0]][et[yt[13]]++], et[yt[15]] <= yt[53] ? et[yt[1]] = et[yt[15]] : et[yt[1 … [truncated]
-           return tt[-yt[12]].join("")
+           for (aB(IB[qB[12]] = qB[2], IB[qB[5]] = qB[17], IB[qB[21]] = qB[17], IB[-qB[20]] = IB[qB[1]][qB[12]], BB[-qB[18]][qB[12]] = qB[1]), IB[qB[19]] = qB[1]; IB[qB[19]] < IB[-qB[20]];) aB(IB[qB[21]] = IB[qB[1]][IB[qB[19]]++], IB[qB[21]] <= qB[65] ? IB[qB[5]] = IB[qB[21]] : IB … [truncated]
+           return BB[-qB[18]].join("")
```

#### 69. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L838-L844` → after: `L851-L857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L851-L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L851-L857) · [Before (L838-L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L838-L844)

```diff
-     const Jt = qt()[Nt(yt[62])](),
-       Ct = qt()[Nt(yt[62])](),
-       ut = qt()[Nt(yt[62])](),
-       Kt = qt()[Nt(yt[62])](),
-       ht = qt()[Nt(yt[62])](),
-       vt = qt()[Nt(yt[62])](),
-       Wt = qt()[Nt(yt[62])](),
+     const CB = JB()[yB(qB[38])](),
+       QB = JB()[yB(qB[38])](),
+       sB = JB()[yB(qB[38])](),
+       wB = JB()[yB(qB[38])](),
+       OB = JB()[yB(qB[38])](),
+       YB = JB()[yB(qB[38])](),
+       iB = JB()[yB(qB[38])](),
```

#### 70. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L847-L850` → after: `L860-L863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L860-L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L860-L863) · [Before (L847-L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L847-L850)

```diff
-           return tt[yt[4]] = yt[1], typeof dt[tt[yt[0]]] === yt[10] ? dt[tt[yt[0]]] = function(...tt) {
-             for (ct(tt[yt[4]] = yt[1], tt[yt[1]] = 'r1NH?A7v#nX^%!)jKTB/9,@fW:cu+O$&wVC2}{.(*G[Zga>oRDM]YPLslxF_ebqUmiy"~58;=Q|d<`403h6zpSJkEtI', tt[yt[28]] = "" + (tt[yt[0]] || ""), tt[yt[7]] = tt[yt[28]].length, tt[yt[63]] = [], tt[yt[31]] = yt[0], tt[yt[17]] = yt[0], tt[yt[30] … [truncated]
-               if (tt[yt[65]] = tt[yt[1]].indexOf(tt[yt[28]][tt[yt[64]]]), tt[yt[65]] !== -yt[1])
-                 if (tt[yt[30]] < yt[0]) tt[yt[30]] = tt[yt[65]];
+           return BB[qB[12]] = qB[2], typeof vB[BB[qB[1]]] === qB[16] ? vB[BB[qB[1]]] = function(...BB) {
+             for (aB(BB[qB[12]] = qB[2], BB[qB[2]] = 'YsN=fx)HW7oDgKyG1LSPeAamJQIq,/`w5&2.94;@v06~3#?+!]$*}_u^{8<%:pd>"[FMBb(zhkETRZCjlUVXcrOtni|', BB[qB[14]] = "" + (BB[qB[1]] || ""), BB[-qB[39]] = BB[qB[14]].length, BB[qB[10]] = [], BB[qB[41]] = qB[1], BB[qB[42]] = qB[1], BB[qB[ … [truncated]
+               if (BB[qB[40]] = BB[qB[2]].indexOf(BB[qB[14]][BB[qB[3]]]), BB[qB[40]] !== -qB[2])
+                 if (BB[qB[22]] < qB[1]) BB[qB[22]] = BB[qB[40]];
```

#### 71. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L852` → after: `L865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L865) · [Before (L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L852)

```diff
-                   ct(tt[yt[30]] += tt[yt[65]] * yt[23], tt[yt[31]] |= tt[yt[30]] << tt[yt[17]], tt[yt[17]] += (tt[yt[30]] & yt[24]) > yt[25] ? yt[26] : yt[27]);
+                   aB(BB[qB[22]] += BB[qB[40]] * qB[31], BB[qB[41]] |= BB[qB[22]] << BB[qB[42]], BB[qB[42]] += (BB[qB[22]] & qB[33]) > qB[34] ? qB[35] : qB[36]);
```

#### 72. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L854-L858` → after: `L867-L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L867-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L867-L871) · [Before (L854-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L854-L858)

```diff
-                     ct(tt[yt[63]].push(tt[yt[31]] & yt[3]), tt[yt[31]] >>= yt[2], tt[yt[17]] -= yt[2])
-                   } while (tt[yt[17]] > yt[19]);
-                   tt[yt[30]] = -yt[1]
-                 } return tt[yt[30]] > -yt[1] && tt[yt[63]].push((tt[yt[31]] | tt[yt[30]] << tt[yt[17]]) & yt[3]), Mt(tt[yt[63]])
-           }(jt[tt[yt[0]]]) : dt[tt[yt[0]]]
+                     aB(BB[qB[10]].push(BB[qB[41]] & qB[11]), BB[qB[41]] >>= qB[3], BB[qB[42]] -= qB[3])
+                   } while (BB[qB[42]] > qB[25]);
+                   BB[qB[22]] = -qB[2]
+                 } return BB[qB[22]] > -qB[2] && BB[qB[10]].push((BB[qB[41]] | BB[qB[22]] << BB[qB[42]]) & qB[11]), UB(BB[qB[10]])
+           }(kB[BB[qB[1]]]) : vB[BB[qB[1]]]
```

#### 73. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L860` → after: `L873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L873) · [Before (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L860)

```diff
-         tt[yt[4]] = yt[7];
+         BB[qB[12]] = qB[15];
```

#### 74. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L862` → after: `L875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L875) · [Before (L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L862)

```diff
-         return qt()[et(101) + et(102)](Vt, tt[yt[28]]), qt()[et(103)](tt[yt[0]], Vt, qt()[et(104)](Vt, tt[yt[1]]))
+         return JB()[IB(98) + IB(99)](ZB, BB[qB[14]]), JB()[IB(100)](BB[qB[1]], ZB, JB()[IB(qB[94])](ZB, BB[qB[2]]))
```

#### 75. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L868-L873` → after: `L881-L886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L881-L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L881-L886) · [Before (L868-L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L868-L873)

```diff
-     mt = (...tt) => {
-       function et(...tt) {
-         return tt[yt[4]] = yt[1], typeof dt[tt[yt[0]]] === yt[10] ? dt[tt[yt[0]]] = function(...tt) {
-           for (ct(tt[yt[4]] = yt[1], tt[yt[33]] = 'Gu")@A1`,p=92vyr4KQ!d&Si^D{(okxX<+}a|sOjW0]Yn.#NPTJ;*%36>g_:Z?b5Vzm8lLFq/weM~U$7[hIHEtfBRcC', tt[-yt[66]] = "" + (tt[yt[0]] || ""), tt[yt[14]] = tt[-yt[66]].length, tt[yt[38]] = [], tt[-yt[69]] = yt[0], tt[yt[32]] = yt[0], tt[yt[ … [truncated]
-             if (tt[yt[67]] = tt[yt[33]].indexOf(tt[-yt[66]][tt[yt[2]]]), tt[yt[67]] !== -yt[1])
-               if (tt[yt[68]] < yt[0]) tt[yt[68]] = tt[yt[67]];
+     GB = (BB, IB, ZB, TB, GB, cB, nB, hB) => {
+       function zB(BB) {
+         return typeof vB[BB] === qB[16] ? vB[BB] = function(...BB) {
+           for (aB(BB[qB[12]] = qB[2], BB[qB[2]] = '=bOpehVTrPWGsAIqB2F*1m_HX")75?%u>49]8~<v!S@+^jCwxN}K`gi:/E&tLyf,kl#Q|D3JR;a[0o$(cZ6{MYdz.nU', BB[-qB[43]] = "" + (BB[qB[1]] || ""), BB[qB[15]] = BB[-qB[43]].length, BB[qB[47]] = [], BB[-qB[45]] = qB[1], BB[qB[46]] = qB[1], BB[qB[ … [truncated]
+             if (BB[qB[6]] = BB[qB[2]].indexOf(BB[-qB[43]][BB[qB[3]]]), BB[qB[6]] !== -qB[2])
+               if (BB[qB[44]] < qB[1]) BB[qB[44]] = BB[qB[6]];
```

#### 76. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L875` → after: `L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L888) · [Before (L875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L875)

```diff
-                 ct(tt[yt[68]] += tt[yt[67]] * yt[23], tt[-yt[69]] |= tt[yt[68]] << tt[yt[32]], tt[yt[32]] += (tt[yt[68]] & yt[24]) > yt[25] ? yt[26] : yt[27]);
+                 aB(BB[qB[44]] += BB[qB[6]] * qB[31], BB[-qB[45]] |= BB[qB[44]] << BB[qB[46]], BB[qB[46]] += (BB[qB[44]] & qB[33]) > qB[34] ? qB[35] : qB[36]);
```

#### 77. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L877-L881` → after: `L890-L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L890-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/230.js#L890-L894) · [Before (L877-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/230.js#L877-L881)

```diff
-                   ct(tt[yt[38]].push(tt[-yt[69]] & yt[3]), tt[-yt[69]] >>= yt[2], tt[yt[32]] -= yt[2])
-                 } while (tt[yt[32]] > yt[19]);
-                 tt[yt[68]] = -yt[1]
-               } return tt[yt[68]] > -yt[1] && tt[yt[38]].push((tt[-yt[69]] | tt[yt[68]] << tt[yt[32]]) & yt[3]), Mt(tt[yt[38]])
-         }(jt[tt[yt[0]]]) : dt[tt[yt[0]]]
+                   aB(BB[qB[47]].push(BB[-qB[45]] & qB[11]), BB[-qB[45]] >>= qB[3], BB[qB[46]] -= qB[3])
+                 } while (BB[qB[46]] > qB[25]);
+                 BB[qB[44]] = -qB[2]
+               } return BB[qB[44]] > -qB[2] && BB[qB[47]].push((BB[-qB[45]] | BB[qB[44]] << BB[qB[46]]) & qB[11]), UB(BB[qB[47]])
+         }(kB[BB]) : vB[BB]
```
