# Changed — Bundle Modifications Report (Part 084 / 141)

- **Updated at**: `2026-11-25T09:40 JST`
- **Part**: `84 / 141` (**401** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 083](part-083.md) · [Part 085 →](part-085.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/77.js` (c6gaap.4d6587ec → igzsf.a0b73a5f · continued)

- **File**: `bundles/bloxd.io/chunks/js/77.js` (4681 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45)

#### 2719. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19631` → after: `L19676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L19676) · [Before (L19631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L19631)

```diff
-         emissiveTexture: BB.emissionColorTexture ? (0, vB.A)(BB.emissionColorTexture) : null,
+         emissiveTexture: tt.emissionColorTexture ? (0, dt.C)(tt.emissionColorTexture) : null,
```

#### 2720. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19635` → after: `L19680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L19680) · [Before (L19635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L19635)

```diff
-         ...null !== IB && IB !== TB.o.opaque ? {
+         ...null !== et && et !== Ot.n.opaque ? {
```

#### 2721. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19650-L19651` → after: `L19695-L19696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19695-L19696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L19695-L19696) · [Before (L19650-L19651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L19650-L19651)

```diff
-           return TB && (BB.baseColor = JB.Color3.FromArray(TB), BB.geometryOpacity = TB[3]), IB.unlit ? BB.isUnlit = !0 : BB.emissionColor = IB.emissiveFactor ? JB.Color3.FromArray(IB.emissiveFactor) : new JB.Color3(0, 0, 0), IB.doubleSided && (BB.backFaceCulling = !1, BB.twoSide … [truncated]
-         }(cB, IB) : TB.o.opaque;
+           return Ot && (tt.baseColor = qt.Color3.FromArray(Ot), tt.geometryOpacity = Ot[3]), et.unlit ? tt.isUnlit = !0 : tt.emissionColor = et.emissiveFactor ? qt.Color3.FromArray(et.emissiveFactor) : new qt.Color3(0, 0, 0), et.doubleSided && (tt.backFaceCulling = !1, tt.twoSide … [truncated]
+         }(Ht, et) : Ot.n.opaque;
```

#### 2722. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19654` → after: `L19699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L19699) · [Before (L19654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L19654)

```diff
-         ...kB(cB, nB, ZB, vB, null !== IB && void 0 !== IB && IB.pbr && IB.baseColorTexture ? BB.textureDesc(IB.baseColorTexture, nB !== TB.o.opaque) : null)
+         ...jt(Ht, Xt, Vt, dt, null !== et && void 0 !== et && et.pbr && et.baseColorTexture ? tt.textureDesc(et.baseColorTexture, Xt !== Ot.n.opaque) : null)
```

#### 2723. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19672` → after: `L19717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L19717) · [Before (L19672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L19672)

```diff
-   38258: (BB, IB, ZB) => {
+   38437: (tt, et, Vt) => {
```

#### 2724. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19674` → after: `L19719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L19719) · [Before (L19674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L19674)

```diff
-       b: () => oB
+       d: () => Dt
```

#### 2725. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19676` → after: `L19721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L19721) · [Before (L19676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L19676)

```diff
-     var TB = ZB(665);
+     var Ot = Vt(710);
```

#### 2726. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19679` → after: `L19724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L19724) · [Before (L19679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L19679)

```diff
-       const TB = IB => BB.Nz.bloxd.getMetaInfo(IB).rootName,
+       const Ot = et => tt.ql.bloxd.getMetaInfo(et).rootName,
```

#### 2727. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19681` → after: `L19726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L19726) · [Before (L19681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L19681)

```diff
-       return JB && TB(JB.name) === TB(ZB) ? JB : null
+       return qt && Ot(qt.name) === Ot(Vt) ? qt : null
```

#### 2728. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19695` → after: `L19740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L19740) · [Before (L19695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L19695)

```diff
-         return !(!GB || (null !== (oB = GB.amount) && void 0 !== oB ? oB : 1) < IB) && TB.removeItem(BB, IB)
+         return !(!mt || (null !== (Dt = mt.amount) && void 0 !== Dt ? Dt : 1) < et) && Ot.removeItem(tt, et)
```

#### 2729. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19712` → after: `L19757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L19757) · [Before (L19712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L19712)

```diff
-       return oB => BB.craftItem(IB, oB.playerInventory, ZB, TB, JB).Hn === JB
+       return Dt => tt.craftItem(et, Dt.playerInventory, Vt, Ot, qt).cX === qt
```

#### 2730. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19717` → after: `L19762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L19762) · [Before (L19717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L19717)

```diff
-         return null !== oB && ZB <= (null !== (JB = oB.amount) && void 0 !== JB ? JB : 0) && BB.salvageItem(TB.playerInventory, IB, oB.name, ZB)
+         return null !== Dt && Vt <= (null !== (qt = Dt.amount) && void 0 !== qt ? qt : 0) && tt.salvageItem(Ot.playerInventory, et, Dt.name, Vt)
```

#### 2731. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19732` → after: `L19777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L19777) · [Before (L19732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L19732)

```diff
-         return !!GB && (oB.playerInventory.setItemSlot(BB, ZB, 1, null !== TB && void 0 !== TB ? TB : GB.attributes), !0)
+         return !!mt && (Dt.playerInventory.setItemSlot(tt, Vt, 1, null !== Ot && void 0 !== Ot ? Ot : mt.attributes), !0)
```

#### 2732. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19741` → after: `L19786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L19786) · [Before (L19741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L19741)

```diff
-       return TB => !!JB(TB, IB, ZB) && (TB.Nz.bloxd.removeEatenItem(BB, TB.playerInventory, IB), !0)
+       return Ot => !!qt(Ot, et, Vt) && (Ot.ql.bloxd.removeEatenItem(tt, Ot.playerInventory, et), !0)
```

#### 2733. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19750` → after: `L19795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L19795) · [Before (L19750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L19750)

```diff
-   37850: (BB, IB, ZB) => {
+   38051: (tt, et, Vt) => {
```

#### 2734. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19752` → after: `L19797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L19797) · [Before (L19752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L19752)

```diff
-       b: () => TB
+       d: () => Ot
```

#### 2735. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19759` → after: `L19804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L19804) · [Before (L19759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L19759)

```diff
-   37933: (BB, IB, ZB) => {
+   38133: (tt, et, Vt) => {
```

#### 2736. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19762-L19763` → after: `L19807-L19808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19807-L19808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L19807-L19808) · [Before (L19762-L19763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L19762-L19763)

```diff
-       f: () => cB,
-       j: () => wB
+       g: () => Ht,
+       i: () => ht
```

#### 2737. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19765-L19770` → after: `L19810-L19815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19810-L19815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L19810-L19815) · [Before (L19765-L19770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L19765-L19770)

```diff
-     var TB = ZB(212),
-       JB = ZB(9296),
-       oB = ZB(2029),
-       GB = ZB(3854),
-       vB = ZB(24),
-       kB = ZB(2912);
+     var Ot = Vt(241),
+       qt = Vt(9425),
+       Dt = Vt(2043),
+       mt = Vt(3751),
+       dt = Vt(31),
+       jt = Vt(2848);
```

#### 2738. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19784-L19785` → after: `L19829-L19830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19829-L19830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L19829-L19830) · [Before (L19784-L19785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L19784-L19785)

```diff
-       const ZB = (0, TB.e)(BB, IB);
-       return (null === ZB || void 0 === ZB ? void 0 : ZB.name) === IB ? ZB : void 0
+       const Vt = (0, Ot.c)(tt, et);
+       return (null === Vt || void 0 === Vt ? void 0 : Vt.name) === et ? Vt : void 0
```

#### 2739. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19793` → after: `L19838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L19838) · [Before (L19793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L19793)

```diff
-       UB(kB.l.blocksClient, BB)
+       Mt(jt.g.blocksClient, tt)
```

#### 2740. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19805` → after: `L19850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L19850) · [Before (L19805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L19805)

```diff
-       return JB.f[BB.name].ttb
+       return qt.h[tt.name].ttb
```

#### 2741. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19809` → after: `L19854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L19854) · [Before (L19809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L19809)

```diff
-       if ("droppedItemScale" === BB) zB = "number" === typeof IB && isFinite(IB) ? IB : 1;
+       if ("droppedItemScale" === tt) lt = "number" === typeof et && isFinite(et) ? et : 1;
```

#### 2742. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19813` → after: `L19858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L19858) · [Before (L19813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L19813)

```diff
-         const ZB = yB(kB.l.itemsClient, BB.slice(0, -nB.length));
+         const Vt = Nt(jt.g.itemsClient, tt.slice(0, -Xt.length));
```

#### 2743. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19816` → after: `L19861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L19861) · [Before (L19816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L19816)

```diff
-         const ZB = yB(kB.l.blocksClient, BB.slice(0, -hB.length));
+         const Vt = Nt(jt.g.blocksClient, tt.slice(0, -Qt.length));
```

#### 2744. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19822` → after: `L19867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L19867) · [Before (L19822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L19822)

```diff
-       oB.c.subscribeAll((BB => {
+       Dt.b.subscribeAll((tt => {
```

#### 2745. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19824` → after: `L19869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L19869) · [Before (L19824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L19824)

```diff
-       })), vB.l.subscribe("ttbEffectMultiplier", (BB => {
+       })), dt.j.subscribe("ttbEffectMultiplier", (tt => {
```

#### 2746. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19827` → after: `L19872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L19872) · [Before (L19827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L19827)

```diff
-         zB = 1, FB = !1, NB = 1, gB = 1, UB(kB.l.itemsClient, (BB => {
+         lt = 1, Et = !1, ft = 1, wt = 1, Mt(jt.g.itemsClient, (tt => {
```

#### 2747. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19835` → after: `L19880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L19880) · [Before (L19835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L19835)

```diff
-   37769: (BB, IB, ZB) => {
+   37962: (tt, et, Vt) => {
```

#### 2748. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19837` → after: `L19882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L19882) · [Before (L19837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L19837)

```diff
-       b: () => TB
+       c: () => Ot
```

#### 2749. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19937` → after: `L19982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R19982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L19982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L19982) · [Before (L19937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L19937)

```diff
-         const TB = Array.isArray(IB) ? IB : null !== (ZB = null === IB || void 0 === IB ? void 0 : IB.transfer) && void 0 !== ZB ? ZB : [];
+         const Ot = Array.isArray(et) ? et : null !== (Vt = null === et || void 0 === et ? void 0 : et.transfer) && void 0 !== Vt ? Vt : [];
```

#### 2750. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19976` → after: `L20021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20021) · [Before (L19976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L19976)

```diff
-   37687: (BB, IB, ZB) => {
+   37900: (tt, et, Vt) => {
```

#### 2751. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19978-L19979` → after: `L20023-L20024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20023-L20024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20023-L20024) · [Before (L19978-L19979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L19978-L19979)

```diff
-       let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BB.zW.YZB(IB);
-       return IB === BB.Jm || (null === ZB || void 0 === ZB ? void 0 : ZB.zN) === BB.Jm && ZB.iZB
+       let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tt.mJ.ZVt(et);
+       return et === tt.lL || (null === Vt || void 0 === Vt ? void 0 : Vt.nE) === tt.lL && Vt.LVt
```

#### 2752. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19982` → after: `L20027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20027) · [Before (L19982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L19982)

```diff
-       b: () => TB
+       e: () => Ot
```

#### 2753. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19985` → after: `L20030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20030) · [Before (L19985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L19985)

```diff
-   37996: (BB, IB, ZB) => {
+   38187: (tt, et, Vt) => {
```

#### 2754. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19987-L19988` → after: `L20032-L20033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20032-L20033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20032-L20033) · [Before (L19987-L19988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L19987-L19988)

```diff
-       if ("JBB" in BB && Array.isArray(BB.JBB))
-         for (const ZB of BB.JBB) ZB && IB(ZB);
+       if ("N9" in tt && Array.isArray(tt.N9))
+         for (const Vt of tt.N9) Vt && et(Vt);
```

#### 2755. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19992` → after: `L20037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20037) · [Before (L19992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L19992)

```diff
-       c: () => TB
+       b: () => Ot
```

#### 2756. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19995` → after: `L20040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20040) · [Before (L19995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L19995)

```diff
-   37291: (BB, IB, ZB) => {
+   37494: (tt, et, Vt) => {
```

#### 2757. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19997` → after: `L20042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20042) · [Before (L19997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L19997)

```diff
-       A: () => cB,
+       B: () => Qt,
```

#### 2758. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L19999-L20000` → after: `L20044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20044) · [Before (L19999-L20000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L19999-L20000)

```diff
-       F: () => yB,
-       e: () => GB,
+       c: () => mt,
```

#### 2759. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20003-L20007` → after: `L20048-L20052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20048-L20052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20048-L20052) · [Before (L20003-L20007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20003-L20007)

```diff
-       k: () => qB,
-       n: () => FB,
-       r: () => nB,
-       v: () => zB,
-       z: () => kB
+       l: () => Et,
+       p: () => Xt,
+       t: () => lt,
+       x: () => jt,
+       y: () => Ht
```

#### 2760. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20009-L20011` → after: `L20054-L20056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20054-L20056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20054-L20056) · [Before (L20009-L20011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20009-L20011)

```diff
-     var TB = ZB(37113),
-       JB = ZB(1956),
-       oB = ZB(37296);
+     var Ot = Vt(37331),
+       qt = Vt(1993),
+       Dt = Vt(37502);
```

#### 2761. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20037` → after: `L20082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20082) · [Before (L20037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20037)

```diff
-         TB = null !== ZB && void 0 !== ZB && ZB.model ? ZB : null;
+         Ot = null !== Vt && void 0 !== Vt && Vt.model ? Vt : null;
```

#### 2762. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20057` → after: `L20102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20102) · [Before (L20057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20057)

```diff
-         indices: null !== (ZB = null === (TB = IB.geometry.indexData) || void 0 === TB ? void 0 : TB.slice()) && void 0 !== ZB ? ZB : [],
+         indices: null !== (Vt = null === (Ot = et.geometry.indexData) || void 0 === Ot ? void 0 : Ot.slice()) && void 0 !== Vt ? Vt : [],
```

#### 2763. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20072` → after: `L20117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20117) · [Before (L20072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20072)

```diff
-         const ZB = oB.d.UVKind,
+         const Vt = Dt.e.UVKind,
```

#### 2764. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20074` → after: `L20119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20119) · [Before (L20074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20074)

```diff
-         vB(TB, BB.MTB(), IB), BB.setVerticesData(ZB, TB)
+         dt(Ot, tt.zOt(), et), tt.setVerticesData(Vt, Ot)
```

#### 2765. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20080` → after: `L20125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20125) · [Before (L20080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20080)

```diff
-       return !!(null !== (IB = BB.metadata) && void 0 !== IB && null !== (ZB = IB.uH) && void 0 !== ZB && null !== (TB = ZB.extras) && void 0 !== TB && TB.bloxdProcessed || null !== (JB = BB.parent) && void 0 !== JB && null !== (oB = JB.metadata) && void 0 !== oB && null !== (GB  … [truncated]
+       return !!(null !== (et = tt.metadata) && void 0 !== et && null !== (Vt = et.oR) && void 0 !== Vt && null !== (Ot = Vt.extras) && void 0 !== Ot && Ot.bloxdProcessed || null !== (qt = tt.parent) && void 0 !== qt && null !== (Dt = qt.metadata) && void 0 !== Dt && null !== (mt  … [truncated]
```

#### 2766. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20096` → after: `L20141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20141) · [Before (L20096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20096)

```diff
-         BB.ek.set(IB, IB, IB), BB.bakeCurrentTransformIntoVertices(!1)
+         tt.cj.set(et, et, et), tt.bakeCurrentTransformIntoVertices(!1)
```

#### 2767. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20102` → after: `L20147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20147) · [Before (L20102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20102)

```diff
-       return (0, JB.z)(`v${gB}|${JSON.stringify(BB)}|${IB}`)
+       return (0, qt.w)(`v${wt}|${JSON.stringify(tt)}|${et}`)
```

#### 2768. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20123` → after: `L20168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20168) · [Before (L20123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20123)

```diff
-         }(BB)) || void 0 === ZB || null === (TB = ZB.extras) || void 0 === TB ? void 0 : TB.bloxdBuildHash) && void 0 !== IB ? IB : null
+         }(tt)) || void 0 === Vt || null === (Ot = Vt.extras) || void 0 === Ot ? void 0 : Ot.bloxdBuildHash) && void 0 !== et ? et : null
```

#### 2769. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20136-L20137` → after: `L20181-L20182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20181-L20182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20181-L20182) · [Before (L20136-L20137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20136-L20137)

```diff
-         ZB = TB.rN.One(),
-         JB = new TB.rN;
+         Vt = Ot.uf.One(),
+         qt = new Ot.uf;
```

#### 2770. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20144` → after: `L20189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20189) · [Before (L20144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20144)

```diff
-         const BB = TB.Matrix.Compose(ZB, TB.Quaternion.RotationYawPitchRoll(zB, FB, 0), new TB.rN(cB, nB, hB)),
+         const tt = Ot.Matrix.Compose(Vt, Ot.Quaternion.RotationYawPitchRoll(lt, Et, 0), new Ot.uf(Ht, Xt, Qt)),
```

#### 2771. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20146` → after: `L20191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20191) · [Before (L20146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20146)

```diff
-         for (let ZB = 0; ZB < oB.length; ZB += 3) TB.rN.TransformCoordinatesFromFloatsToRef(oB[ZB], oB[ZB + 1], oB[ZB + 2], BB, JB), IB.positions.push(JB.x, JB.y, JB.z), TB.rN.TransformNormalFromFloatsToRef(GB[ZB], GB[ZB + 1], GB[ZB + 2], BB, JB), IB.normals.push(JB.x, JB.y, JB.z … [truncated]
+         for (let Vt = 0; Vt < Dt.length; Vt += 3) Ot.uf.TransformCoordinatesFromFloatsToRef(Dt[Vt], Dt[Vt + 1], Dt[Vt + 2], tt, qt), et.positions.push(qt.x, qt.y, qt.z), Ot.uf.TransformNormalFromFloatsToRef(mt[Vt], mt[Vt + 1], mt[Vt + 2], tt, qt), et.normals.push(qt.x, qt.y, qt.z … [truncated]
```

#### 2772. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20153` → after: `L20198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20198) · [Before (L20153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20153)

```diff
-   38107: (BB, IB, ZB) => {
+   38292: (tt, et, Vt) => {
```

#### 2773. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20156-L20158` → after: `L20203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20203) · [Before (L20156-L20158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20156-L20158)

```diff
-       g: () => uI,
-       h: () => mI,
-       i: () => VI
+       g: () => ne
```

#### 2774. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20160-L20163` → after: `L20205-L20208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20205-L20208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20205-L20208) · [Before (L20160-L20163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20160-L20163)

```diff
-     var TB = ZB(37060),
-       JB = ZB(3854),
-       oB = ZB(37840),
-       GB = ZB(38115),
+     var Ot = Vt(37273),
+       qt = Vt(3751),
+       Dt = Vt(38040),
+       mt = Vt(38295),
```

#### 2775. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20165-L20183` → after: `L20210-L20228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20210-L20228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20210-L20228) · [Before (L20165-L20183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20165-L20183)

```diff
-       kB = ZB(9296),
-       cB = ZB(38075),
-       nB = ZB(24),
-       hB = ZB(168),
-       zB = ZB(3316),
-       FB = ZB(37847),
-       NB = ZB(3324),
-       gB = ZB(20),
-       qB = ZB(2912),
-       yB = ZB(3911),
-       UB = ZB(37939),
-       WB = ZB(37328),
-       dB = ZB(37350),
-       CB = ZB(37113),
-       QB = ZB(37253),
-       sB = ZB(37296),
- ... (3 more removed lines; see GitHub link above)
+       jt = Vt(9425),
+       Ht = Vt(38268),
+       Xt = Vt(31),
+       Qt = Vt(184),
+       lt = Vt(3217),
+       Et = Vt(38049),
+       ft = Vt(3219),
+       wt = Vt(26),
+       yt = Vt(2848),
+       Nt = Vt(3820),
+       Mt = Vt(38142),
+       bt = Vt(37531),
+       Jt = Vt(37559),
+       Ct = Vt(37331),
+       ut = Vt(37467),
+       Kt = Vt(37502),
+ ... (3 more added lines; see GitHub link above)
```

#### 2776. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20187-L20188` → after: `L20232-L20233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20232-L20233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20232-L20233) · [Before (L20187-L20188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20187-L20188)

```diff
-       (0, YB.b)(BB);
-       const ZB = zB.e.getTexture(IB, NB.m.BLOCK).url,
+       (0, Wt.c)(tt);
+       const Vt = lt.e.getTexture(et, ft.k.BLOCK).url,
```

#### 2777. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20191` → after: `L20236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20236) · [Before (L20191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20191)

```diff
-       const JB = (0, QB.v)(BB, {
+       const qt = (0, ut.A)(tt, {
```

#### 2778. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20195` → after: `L20240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20240) · [Before (L20195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20195)

```diff
-           samplingMode: QB.j.nearestNearestMipLinear,
+           samplingMode: ut.k.nearestNearestMipLinear,
```

#### 2779. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20197-L20198` → after: `L20242-L20243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20242-L20243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20242-L20243) · [Before (L20197-L20198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20197-L20198)

```diff
-             wrapU: QB.c.clamp,
-             wrapV: QB.c.clamp,
+             wrapU: ut.e.clamp,
+             wrapV: ut.e.clamp,
```

#### 2780. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20205-L20206` → after: `L20250-L20251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20250-L20251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20250-L20251) · [Before (L20205-L20206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20205-L20206)

```diff
-           name: `${IB}BlockModelMeshMat`,
-           lg: BB,
+           name: `${et}BlockModelMeshMat`,
+           Fw: tt,
```

#### 2781. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20209` → after: `L20254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20254) · [Before (L20209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20209)

```diff
-             transparencyMode: sB.d.MATERIAL_ALPHATEST,
+             transparencyMode: Kt.e.MATERIAL_ALPHATEST,
```

#### 2782. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20229` → after: `L20274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20274) · [Before (L20229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20229)

```diff
-       return (0, wB.n)((0, qB.h)().Ig, BB, (0, OB.f)({
+       return (0, ht.q)((0, yt.e)().Bf, tt, (0, vt.j)({
```

#### 2783. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20244-L20245` → after: `L20289-L20290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20289-L20290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20289-L20290) · [Before (L20244-L20245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20244-L20245)

```diff
-         const ZB = HB(`${IB}CstmPlnMdl1`);
-         ZB.tg = !1, ZB.rotation.set(...vB.rotation), ZB.bakeCurrentTransformIntoVertices();
+         const Vt = It(`${et}CstmPlnMdl1`);
+         Vt.Gw = !1, Vt.rotation.set(...dt.rotation), Vt.bakeCurrentTransformIntoVertices();
```

#### 2784. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20249-L20250` → after: `L20294-L20295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20294-L20295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20294-L20295) · [Before (L20249-L20250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20249-L20250)

```diff
-       const GB = (0, wB.j)(JB, oB.size > 1, !1);
-       return GB.tg = !1, GB
+       const mt = (0, ht.o)(qt, Dt.size > 1, !1);
+       return mt.Gw = !1, mt
```

#### 2785. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20281` → after: `L20326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20326) · [Before (L20281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20281)

```diff
-     const RB = new CB.rN(.5, .5, .5);
+     const Ft = new Ct.uf(.5, .5, .5);
```

#### 2786. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20285` → after: `L20330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20330) · [Before (L20285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20285)

```diff
-           const ZB = CB.Matrix.Compose(CB.rN.One(), CB.Quaternion.RotationYawPitchRoll(BB.rotation[1], BB.rotation[0], BB.rotation[2]), CB.rN.FromArray(BB.position)),
+           const Vt = Ct.Matrix.Compose(Ct.uf.One(), Ct.Quaternion.RotationYawPitchRoll(tt.rotation[1], tt.rotation[0], tt.rotation[2]), Ct.uf.FromArray(tt.position)),
```

#### 2787. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20289` → after: `L20334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20334) · [Before (L20289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20289)

```diff
-               ek: oB
+               cj: Dt
```

#### 2788. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20294-L20296` → after: `L20339-L20341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20339-L20341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20339-L20341) · [Before (L20294-L20296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20294-L20296)

```diff
-         JB = CB.rN.TransformCoordinates(CB.rN.Zero(), TB),
-         oB = CB.rN.TransformNormal(new CB.rN(1, 0, 0), TB),
-         GB = CB.rN.TransformNormal(new CB.rN(0, 1, 0), TB),
+         qt = Ct.uf.TransformCoordinates(Ct.uf.Zero(), Ot),
+         Dt = Ct.uf.TransformNormal(new Ct.uf(1, 0, 0), Ot),
+         mt = Ct.uf.TransformNormal(new Ct.uf(0, 1, 0), Ot),
```

#### 2789. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20302` → after: `L20347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20347) · [Before (L20302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20302)

```diff
-         texture: zB.e.getTexture(IB, NB.m.BLOCK).url
+         texture: lt.e.getTexture(et, ft.k.BLOCK).url
```

#### 2790. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20312` → after: `L20357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20357) · [Before (L20312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20312)

```diff
-           return jB("CentreCross" === ZB ? aB : BB.customPlanesInfo).map((BB => {
+           return Zt("CentreCross" === Vt ? Rt : tt.customPlanesInfo).map((tt => {
```

#### 2791. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20344` → after: `L20389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20389) · [Before (L20344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20344)

```diff
-       (0, YB.b)(BB);
+       (0, Wt.c)(tt);
```

#### 2792. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20354` → after: `L20399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20399) · [Before (L20354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20354)

```diff
-       return fB(BB, IB, LB(BB, IB.name, oB.f), ZB)
+       return At(tt, et, ot(tt, et.name, Dt.g), Vt)
```

#### 2793. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20358` → after: `L20403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20403) · [Before (L20358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20358)

```diff
-       const JB = FB.e.getBlockAtlasMaterialForPlacement(BB, !!IB.transTex, !!IB.unlitStandaloneMesh),
+       const qt = Et.b.getBlockAtlasMaterialForPlacement(tt, !!et.transTex, !!et.unlitStandaloneMesh),
```

#### 2794. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20364` → after: `L20409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20409) · [Before (L20364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20364)

```diff
-       return oB.qY(!0), oB
+       return Dt.Av(!0), Dt
```

#### 2795. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20366-L20373` → after: `L20411-L20418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20411-L20418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20411-L20418) · [Before (L20366-L20373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20366-L20373)

```diff
-     var lB = ZB(9340),
-       AB = ZB(1281),
-       tB = ZB(38118),
-       bB = ZB(38006),
-       xB = ZB(9347),
-       EB = ZB(4643),
-       DB = ZB(37954),
-       KB = ZB(37291);
+     var it = Vt(9466),
+       Yt = Vt(1308),
+       Bt = Vt(38303),
+       pt = Vt(38208),
+       xt = Vt(9475),
+       Tt = Vt(4599),
+       gt = Vt(38151),
+       st = Vt(37494);
```

#### 2796. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20377` → after: `L20422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20422) · [Before (L20377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20377)

```diff
-         BT: ZB,
+         XO: Vt,
```

#### 2797. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20389` → after: `L20434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20434) · [Before (L20389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20389)

```diff
-           BT: ZB[1],
+           XO: Vt[1],
```

#### 2798. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20394-L20395` → after: `L20439-L20440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20439-L20440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20439-L20440) · [Before (L20394-L20395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20394-L20395)

```diff
-       }(IB((0, xB.o)(BB.postPiece, null))), GB = CB.Matrix.Translation(-JB, -ZB, -oB).multiply(CB.Matrix.Scaling(1 / TB, 1 / TB, 1 / TB)).multiply(CB.Matrix.Translation(0, -.5, 0)), vB = (BB, ZB) => {
-         const TB = TB => (0, DB.f)((0, DB.b)(IB((0, xB.o)(BB, TB))), ZB.m);
+       }(et((0, xt.p)(tt.postPiece, null))), mt = Ct.Matrix.Translation(-qt, -Vt, -Dt).multiply(Ct.Matrix.Scaling(1 / Ot, 1 / Ot, 1 / Ot)).multiply(Ct.Matrix.Translation(0, -.5, 0)), dt = (tt, Vt) => {
+         const Ot = Ot => (0, gt.i)((0, gt.c)(et((0, xt.p)(tt, Ot))), Vt.m);
```

#### 2799. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20398` → after: `L20443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20443) · [Before (L20398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20398)

```diff
-           arms: xB.v.map(((BB, IB) => TB(IB)))
+           arms: xt.w.map(((tt, et) => Ot(et)))
```

#### 2800. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20432-L20433` → after: `L20477-L20478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20477-L20478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20477-L20478) · [Before (L20432-L20433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20432-L20433)

```diff
-       if (!TB) throw new Error(`"${ZB}" has no node named "${IB}"`);
-       if (!TB.length) throw new Error(`"${ZB}" node "${IB}" has no mesh`);
+       if (!Ot) throw new Error(`"${Vt}" has no node named "${et}"`);
+       if (!Ot.length) throw new Error(`"${Vt}" node "${et}" has no mesh`);
```

#### 2801. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20435-L20436` → after: `L20480-L20481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20480-L20481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20480-L20481) · [Before (L20435-L20436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20435-L20436)

```diff
-         const ZB = (0, KB.r)(BB, IB);
-         return (0, DB.f)(ZB, BB.worldMatrix(IB, !1)),
+         const Vt = (0, st.p)(tt, et);
+         return (0, gt.i)(Vt, tt.worldMatrix(et, !1)),
```

#### 2802. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20452` → after: `L20497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20497) · [Before (L20452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20452)

```diff
-     var ZI = ZB(37908);
+     var Oe = Vt(38111);
```

#### 2803. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20454` → after: `L20499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20499) · [Before (L20454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20454)

```diff
-         fence: xB.w
+         fence: xt.x
```

#### 2804. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20460-L20461` → after: `L20505-L20506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20505-L20506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20505-L20506) · [Before (L20460-L20461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20460-L20461)

```diff
-       const TB = zB.e.getModel(IB, NB.i.BLOCK).url,
-         JB = await (0, dB.f)("", BB, TB, (() => zB.e.getModelOverride(IB) ? {
+       const Ot = lt.e.getModel(et, ft.h.BLOCK).url,
+         qt = await (0, Jt.g)("", tt, Ot, (() => lt.e.getModelOverride(et) ? {
```

#### 2805. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20464` → after: `L20509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20509) · [Before (L20464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20464)

```diff
-             rootUrl: zB.e.getModel(IB, NB.i.BLOCK, !0).url
+             rootUrl: lt.e.getModel(et, ft.h.BLOCK, !0).url
```

#### 2806. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20471` → after: `L20516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20516) · [Before (L20471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20471)

```diff
-       return IB ? ZB & xB.h ? BB.stackedPost : BB.post : BB.top
+       return et ? Vt & xt.j ? tt.stackedPost : tt.post : tt.top
```

#### 2807. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20476` → after: `L20521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20521) · [Before (L20476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20476)

```diff
-       const oB = kB.r[(0, EB.k)(IB.textureInfo)];
+       const Dt = jt.s[(0, Tt.k)(et.textureInfo)];
```

#### 2808. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20481-L20482` → after: `L20526-L20527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20526-L20527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20526-L20527) · [Before (L20481-L20482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20481-L20482)

```diff
-         const TB = (0, ZI.j)();
-         for (let JB = 1; JB < ZB.length; JB += 2) ZB[JB] = (0, ZI.h)(IB, ZB[JB], TB)
+         const Ot = (0, Oe.f)();
+         for (let qt = 1; qt < Vt.length; qt += 2) Vt[qt] = (0, Oe.e)(et, Vt[qt], Ot)
```

#### 2809. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20488` → after: `L20533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20533) · [Before (L20488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20488)

```diff
-         } = null !== (JB = TB.named) && void 0 !== JB ? JB : {},
+         } = null !== (qt = Ot.named) && void 0 !== qt ? qt : {},
```

#### 2810. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20490` → after: `L20535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20535) · [Before (L20490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20490)

```diff
-         hB = (0, wB.n)((0, qB.h)().Ig, ZB, {
+         Qt = (0, ht.q)((0, yt.e)().Bf, Vt, {
```

#### 2811. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20495` → after: `L20540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20540) · [Before (L20495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20495)

```diff
-             color: (0, KB.n)(GB, KB.e, vB)
+             color: (0, st.l)(mt, st.c, dt)
```

#### 2812. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20498` → after: `L20543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20543) · [Before (L20498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20498)

```diff
-       return hB.material = FB.e.getBlockAtlasMaterialForPlacement(BB, !!IB.transTex, !!IB.unlitStandaloneMesh), hB.tg = !1, hB
+       return Qt.material = Et.b.getBlockAtlasMaterialForPlacement(tt, !!et.transTex, !!et.unlitStandaloneMesh), Qt.Gw = !1, Qt
```

#### 2813. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20502` → after: `L20547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20547) · [Before (L20502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20502)

```diff
-       if (!ZB) throw new Error(`"${IB.name}" has no connecting model GLB for model "${IB.model}"`);
+       if (!Vt) throw new Error(`"${et.name}" has no connecting model GLB for model "${et.model}"`);
```

#### 2814. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20507-L20508` → after: `L20552-L20553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20552-L20553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20552-L20553) · [Before (L20507-L20508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20507-L20508)

```diff
-       }(BB, ZB), JB = void 0 !== IB.attachedTop, oB = JB ? [...xB.e, ...xB.e.map((BB => BB | xB.h))] : xB.e, GB = new Map;
-       for (const vB of oB) GB.set(vB, (() => cI(BB, IB, `${IB.name}|${vB}ConnectingModel`, SB(kI(TB, JB, vB), vB))));
+       }(tt, Vt), qt = void 0 !== et.attachedTop, Dt = qt ? [...xt.h, ...xt.h.map((tt => tt | xt.j))] : xt.h, mt = new Map;
+       for (const dt of Dt) mt.set(dt, (() => Xe(tt, et, `${et.name}|${dt}ConnectingModel`, te(He(Ot, qt, dt), dt))));
```

#### 2815. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20514-L20515` → after: `L20559-L20560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20559-L20560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20559-L20560) · [Before (L20514-L20515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20514-L20515)

```diff
-       if (!ZB) throw new Error(`"${BB}" variants registered before its connecting meshes were built`);
-       return ZB.get((0, xB.s)(IB))
+       if (!Vt) throw new Error(`"${tt}" variants registered before its connecting meshes were built`);
+       return Vt.get((0, xt.t)(et))
```

#### 2816. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20517` → after: `L20562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20562) · [Before (L20517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20517)

```diff
-     var zI = ZB(9355);
+     var Ee = Vt(9477);
```

#### 2817. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20535` → after: `L20580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20580) · [Before (L20535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20535)

```diff
-       const [IB, ZB] = zI.k.bottom.map(BB), {
+       const [et, Vt] = Ee.m.bottom.map(tt), {
```

#### 2818. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20541-L20542` → after: `L20586-L20587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20586-L20587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20586-L20587) · [Before (L20541-L20542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20541-L20542)

```diff
-           left: (0, DB.f)((0, DB.b)(ZB), IB.m),
-           right: (0, DB.f)((0, DB.b)(TB), IB.m)
+           left: (0, gt.i)((0, gt.c)(Vt), et.m),
+           right: (0, gt.i)((0, gt.c)(Ot), et.m)
```

#### 2819. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20544` → after: `L20589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20589) · [Before (L20544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20544)

```diff
-       }, [kB, cB] = zI.k.top.map(BB);
+       }, [jt, Ht] = Ee.m.top.map(tt);
```

#### 2820. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20556` → after: `L20601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20601) · [Before (L20556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20556)

```diff
-       return (0, DB.f)((0, DB.b)(BB), GB.m)
+       return (0, gt.i)((0, gt.c)(tt), mt.m)
```

#### 2821. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20569` → after: `L20614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20614) · [Before (L20569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20569)

```diff
-       return (0, DB.f)(GB, CB.Matrix.RotationY((IB - 1) * Math.PI / 2).m)
+       return (0, gt.i)(mt, Ct.Matrix.RotationY((et - 1) * Math.PI / 2).m)
```

#### 2822. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20576` → after: `L20621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20621) · [Before (L20576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20576)

```diff
-       return `${BB}|${IB}`
+       return `${tt}|${et}`
```

#### 2823. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20581` → after: `L20626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20626) · [Before (L20581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20581)

```diff
-       if (!TB) throw new Error(`"${BB}" variants registered before its fence gate meshes were built`);
+       if (!Ot) throw new Error(`"${tt}" variants registered before its fence gate meshes were built`);
```

#### 2824. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20584` → after: `L20629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20629) · [Before (L20584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20584)

```diff
-     var QI = ZB(38010);
+     var ue = Vt(38215);
```

#### 2825. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20598` → after: `L20643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20643) · [Before (L20598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20598)

```diff
-         return (IB.endsWith(" Leaves") || ZB) && (JB |= QI.d.vegetation), ("Dirt" === IB || IB.endsWith(" Dirt") || IB.endsWith(" Soil") || ZB) && (JB |= QI.d.dirt), (sI.has(IB) || TB) && (JB |= QI.d.sand), (wI.has(IB) || TB || IB.endsWith(" Ore") || OI.test(IB)) && (JB |= QI.d.r … [truncated]
+         return (et.endsWith(" Leaves") || Vt) && (qt |= ue.b.vegetation), ("Dirt" === et || et.endsWith(" Dirt") || et.endsWith(" Soil") || Vt) && (qt |= ue.b.dirt), (Ke.has(et) || Ot) && (qt |= ue.b.sand), (he.has(et) || Ot || et.endsWith(" Ore") || ve.test(et)) && (qt |= ue.b.r … [truncated]
```

#### 2826. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20604` → after: `L20649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20649) · [Before (L20604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20604)

```diff
-             return QI.d.slab;
+             return ue.b.slab;
```

#### 2827. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20606` → after: `L20651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20651) · [Before (L20606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20606)

```diff
-             return QI.d.stairs
+             return ue.b.stairs
```

#### 2828. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20608` → after: `L20653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20653) · [Before (L20608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20608)

```diff
-         return ZB && YI.has(ZB) ? QI.d.flat | (iI.has(TB) ? 0 : QI.d.vegetation) : ZB && pI.has(TB) ? QI.d.vegetation : 0
+         return Vt && We.has(Vt) ? ue.b.flat | (Se.has(Ot) ? 0 : ue.b.vegetation) : Vt && ce.has(Ot) ? ue.b.vegetation : 0
```

#### 2829. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20611-L20615` → after: `L20656-L20660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20656-L20660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20656-L20660) · [Before (L20611-L20615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20611-L20615)

```diff
-     var HI = ZB(37243),
-       MI = ZB(37336),
-       jI = ZB(38123),
-       PI = ZB(3461),
-       RI = ZB(4838);
+     var Ie = Vt(37454),
+       Pe = Vt(37545),
+       Ze = Vt(38309),
+       Le = Vt(3346),
+       Fe = Vt(4811);
```

#### 2830. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20619` → after: `L20664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20664) · [Before (L20619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20619)

```diff
-       return [BB.animTextures.length - 1, 1, null !== (IB = BB.animationInterval) && void 0 !== IB ? IB : 200]
+       return [tt.animTextures.length - 1, 1, null !== (et = tt.animationInterval) && void 0 !== et ? et : 200]
```

#### 2831. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20625` → after: `L20670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20670) · [Before (L20625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20625)

```diff
-         for (const IB of [kB.f, TB.q])
+         for (const et of [jt.h, Ot.s])
```

#### 2832. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20630-L20631` → after: `L20675-L20676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20675-L20676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20675-L20676) · [Before (L20630-L20631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20630-L20631)

```diff
-         return Array.from(BB, (BB => null !== BB && void 0 !== BB ? BB : ""))
-       }()), await (0, RI.r)("block textures");
+         return Array.from(tt, (tt => null !== tt && void 0 !== tt ? tt : ""))
+       }()), await (0, Fe.v)("block textures");
```

#### 2833. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20638-L20639` → after: `L20683-L20684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20683-L20684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20683-L20684) · [Before (L20638-L20639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20638-L20639)

```diff
-         UB = ZB(38132);
-       yB(new window.FontFace("Jetbrains Mono", `url(${UB})`).load().then((BB => {
+         Mt = Vt(38313);
+       Nt(new window.FontFace("Jetbrains Mono", `url(${Mt})`).load().then((tt => {
```

#### 2834. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20641` → after: `L20686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20686) · [Before (L20641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20641)

```diff
-       }))), BB.zW.nZB({
+       }))), tt.mJ.NVt({
```

#### 2835. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20646` → after: `L20691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20691) · [Before (L20646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20646)

```diff
-       await (0, RI.r)("items object"), (0, oB.u)(), await (0, RI.r)("pick helper"), qB.l.localPlayerPickActionHelper = new cB.b(BB, BB.Jm), await (0, RI.r)("block atlas");
+       await (0, Fe.v)("items object"), (0, Dt.s)(), await (0, Fe.v)("pick helper"), yt.g.localPlayerPickActionHelper = new Ht.d(tt, tt.lL), await (0, Fe.v)("block atlas");
```

#### 2836. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20650` → after: `L20695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20695) · [Before (L20650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20650)

```diff
-         pB = kB.n.flatMap((BB => {
+         ct = jt.r.flatMap((tt => {
```

#### 2837. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20659-L20660` → after: `L20704-L20705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20704-L20705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20704-L20705) · [Before (L20659-L20660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20659-L20660)

```diff
-       const aB = BB.Ig.kg();
-       FB.e.setUseWebGL2(aB);
+       const Rt = tt.Bf.ew();
+       Et.b.setUseWebGL2(Rt);
```

#### 2838. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20663` → after: `L20708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20708) · [Before (L20663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20663)

```diff
-       gB.d.get("clientEscMenuOptions").disableTexAtlas && !BB.oN && (HB = !1, MB = "options");
+       wt.b.get("clientEscMenuOptions").disableTexAtlas && !tt.YE && (It = !1, Pt = "options");
```

#### 2839. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20666` → after: `L20711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20711) · [Before (L20666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20666)

```diff
-         const BB = `imagesPerAtlas = ${jB}`;
+         const tt = `imagesPerAtlas = ${Zt}`;
```

#### 2840. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20669-L20671` → after: `L20714-L20716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20714-L20716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20714-L20716) · [Before (L20669-L20671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20669-L20671)

```diff
-       const PB = BB.Ig.engine.getCaps().texture2DArrayMaxLayerCount;
-       HB && aB && PB < jB[0] && (HB = !1, MB = `maxLayerCount = ${PB}, layerCount = ${jB[0]}`);
-       const RB = BB.Ig.engine.getCaps().maxTextureSize,
+       const Lt = tt.Bf.engine.getCaps().texture2DArrayMaxLayerCount;
+       It && Rt && Lt < Zt[0] && (It = !1, Pt = `maxLayerCount = ${Lt}, layerCount = ${Zt[0]}`);
+       const Ft = tt.Bf.engine.getCaps().maxTextureSize,
```

#### 2841. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20673-L20674` → after: `L20718-L20719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20718-L20719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20718-L20719) · [Before (L20673-L20674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20673-L20674)

```diff
-       HB && RB < rB && (HB = !1, MB = `maxTextureSize = ${RB}, textureSize = ${rB}`), console.log("Graphics backend", null !== (IB = null === (JB = BB.Ig.Zg) || void 0 === JB ? void 0 : JB.backendName) && void 0 !== IB ? IB : `webgl${BB.Ig.engine.cg}`, "useTexAtlas", HB, "reason" … [truncated]
-       const mB = Math.floor(Object.keys((0, AB.Q)(kB.f)).length / 50);
+       It && Ft < kt && (It = !1, Pt = `maxTextureSize = ${Ft}, textureSize = ${kt}`), console.log("Graphics backend", null !== (et = null === (qt = tt.Bf.pf) || void 0 === qt ? void 0 : qt.backendName) && void 0 !== et ? et : `webgl${tt.Bf.engine.Vw}`, "useTexAtlas", It, "reason" … [truncated]
+       const Gt = Math.floor(Object.keys((0, Yt._)(jt.h)).length / 50);
```

#### 2842. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20676-L20677` → after: `L20721-L20722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20721-L20722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20721-L20722) · [Before (L20676-L20677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20676-L20677)

```diff
-         LB += 1, LB % 50 === 0 && (nB.l.Gq("matchmakeAndPlayStepCompleted", {
-           step: hB.l.REGISTRATION,
+         ot += 1, ot % 50 === 0 && (Xt.j.sw("matchmakeAndPlayStepCompleted", {
+           step: Qt.n.REGISTRATION,
```

#### 2843. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20681` → after: `L20726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20726) · [Before (L20681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20681)

```diff
-         }))), await (0, RI.r)(`block ${BB}`)
+         }))), await (0, Fe.v)(`block ${tt}`)
```

#### 2844. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20684-L20685` → after: `L20729-L20730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20729-L20730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20729-L20730) · [Before (L20684-L20685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20684-L20685)

```diff
-       for (const ZB in (0, AB.Q)(kB.f)) {
-         const IB = kB.f[ZB],
+       for (const Vt in (0, Yt._)(jt.h)) {
+         const et = jt.h[Vt],
```

#### 2845. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20689` → after: `L20734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20734) · [Before (L20689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20689)

```diff
-           if (xI(kB.f[BB], IB)) {
+           if (xe(jt.h[tt], et)) {
```

#### 2846. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20695` → after: `L20740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20740) · [Before (L20695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20695)

```diff
-           await (0, RI.r)(`block ${ZB} model`);
+           await (0, Fe.v)(`block ${Vt} model`);
```

#### 2847. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20698` → after: `L20743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20743) · [Before (L20698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20698)

```diff
-               Q_: await tI(IB.model).getMesh(BB.Ig.JR(), IB),
+               U1: await Be(et.model).getMesh(tt.Bf.vI(), et),
```

#### 2848. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20701-L20707` → after: `L20746-L20752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20746-L20752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20746-L20752) · [Before (L20701-L20707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20701-L20707)

```diff
-               cq: IB.cq,
-               YC: EI(ZB),
-               iN: null !== (JB = IB.iN) && void 0 !== JB ? JB : null,
-               nq: null !== (oB = IB.nq) && void 0 !== oB ? oB : null,
-               pN: IB.pN,
-               RP: aI(ZB, IB.model),
-               h_: () => KI(IB, IB)
+               ey: et.ey,
+               mC: Te(Vt),
+               wf: null !== (qt = et.wf) && void 0 !== qt ? qt : null,
+               Vy: null !== (Dt = et.Vy) && void 0 !== Dt ? Dt : null,
+               yf: et.yf,
+               JI: Re(Vt, et.model),
+               U3: () => se(et, et)
```

#### 2849. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20709` → after: `L20754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20754) · [Before (L20709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20709)

```diff
-             BB.zF.ZE(IB.id, GB), null !== IB.meta.metaStr && await XI(BB, ZB, GB), await XB(ZB)
+             tt.tE.sG(et.id, mt), null !== et.meta.metaStr && await ze(tt, Vt, mt), await zt(Vt)
```

#### 2850. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20715-L20716` → after: `L20760-L20761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20760-L20761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20760-L20761) · [Before (L20715-L20716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20715-L20716)

```diff
-             if ("number" === typeof IB.textureInfo[0]) IB.textureInfo.length > 3 && (JB = !0), BB.zF.i_(ZB, {
-               F_: [],
+             if ("number" === typeof et.textureInfo[0]) et.textureInfo.length > 3 && (qt = !0), tt.tE.K8(Vt, {
+               B3: [],
```

#### 2851. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20718` → after: `L20763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20763) · [Before (L20718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20718)

```diff
-               N_: JB
+               N7: qt
```

#### 2852. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20725-L20732` → after: `L20770-L20777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20770-L20777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20770-L20777) · [Before (L20725-L20732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20725-L20732)

```diff
-                 const vB = `${ZB}${GB}`;
-                 if (HB && void 0 !== IB.atlasIdx[GB]) BB.zF.i_(vB, {
-                   F_: sB,
-                   y_: YB,
-                   U_: iB,
-                   q_: IB.atlasIdx[GB],
-                   N_: JB,
-                   hq: pB
+                 const dt = `${Vt}${mt}`;
+                 if (It && void 0 !== et.atlasIdx[mt]) tt.tE.K8(dt, {
+                   B3: Kt,
+                   R7: Wt,
+                   E1: St,
+                   J7: et.atlasIdx[mt],
+                   N7: qt,
+                   Oy: ct
```

#### 2853. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20737-L20738` → after: `L20782-L20783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20782-L20783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20782-L20783) · [Before (L20737-L20738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20737-L20738)

```diff
-                       F_: [zB.e.getTexture("string" === typeof IB ? IB : vB, NB.m.BLOCK).url],
-                       N_: JB
+                       B3: [lt.e.getTexture("string" === typeof et ? et : dt, ft.k.BLOCK).url],
+                       N7: qt
```

#### 2854. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20740` → after: `L20785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20785) · [Before (L20740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20740)

```diff
-                   ("string" === typeof IB ? 0 : IB.animTextures.length) > 0 && (ZB.hq = rI(IB)), BB.zF.i_(vB, ZB)
+                   ("string" === typeof et ? 0 : et.animTextures.length) > 0 && (Vt.Oy = ke(et)), tt.tE.K8(dt, Vt)
```

#### 2855. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20746` → after: `L20791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20791) · [Before (L20746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20746)

```diff
-                   const IB = `${ZB}${BB}`;
+                   const et = `${Vt}${tt}`;
```

#### 2856. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20752-L20755` → after: `L20797-L20800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20797-L20800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20797-L20800) · [Before (L20752-L20755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20752-L20755)

```diff
-             if (JB ||= IB.transTex, JB ||= (null === (lB = IB.textureInfo.colour) || void 0 === lB ? void 0 : lB.length) > 3, HB && void 0 !== IB.atlasIdx) BB.zF.i_(ZB, {
-               F_: sB,
-               y_: YB,
-               U_: iB,
+             if (qt ||= et.transTex, qt ||= (null === (it = et.textureInfo.colour) || void 0 === it ? void 0 : it.length) > 3, It && void 0 !== et.atlasIdx) tt.tE.K8(Vt, {
+               B3: Kt,
+               R7: Wt,
+               E1: St,
```

#### 2857. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20757-L20760` → after: `L20802-L20805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20802-L20805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20802-L20805) · [Before (L20757-L20760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20757-L20760)

```diff
-               p_: !1,
-               q_: IB.atlasIdx[0],
-               N_: JB,
-               hq: pB
+               W8: !1,
+               J7: et.atlasIdx[0],
+               N7: qt,
+               Oy: ct
```

#### 2858. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20763-L20765` → after: `L20808-L20810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20808-L20810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20808-L20810) · [Before (L20763-L20765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20763-L20765)

```diff
-               const TB = zB.e.getTexture(ZB, NB.m.BLOCK).url;
-               BB.zF.i_(ZB, {
-                 F_: [TB],
+               const Ot = lt.e.getTexture(Vt, ft.k.BLOCK).url;
+               tt.tE.K8(Vt, {
+                 B3: [Ot],
```

#### 2859. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20767-L20769` → after: `L20812-L20814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20812-L20814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20812-L20814) · [Before (L20767-L20769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20767-L20769)

```diff
-                 p_: !1,
-                 N_: JB,
-                 hq: rI(IB.textureInfo)
+                 W8: !1,
+                 N7: qt,
+                 Oy: ke(et.textureInfo)
```

#### 2860. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20774-L20780` → after: `L20819-L20825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20819-L20825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20819-L20825) · [Before (L20774-L20780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20774-L20780)

```diff
-             BB.zF.i_(ZB, {
-               F_: sB,
-               y_: YB,
-               U_: iB,
-               q_: TB,
-               N_: JB,
-               hq: pB
+             tt.tE.K8(Vt, {
+               B3: Kt,
+               R7: Wt,
+               E1: St,
+               J7: Ot,
+               N7: qt,
+               Oy: ct
```

#### 2861. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20783-L20786` → after: `L20828-L20831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20828-L20831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20828-L20831) · [Before (L20783-L20786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20783-L20786)

```diff
-             const TB = zB.e.getTexture(IB.textureInfo, NB.m.BLOCK).url;
-             BB.zF.i_(ZB, {
-               F_: [TB],
-               N_: JB
+             const Ot = lt.e.getTexture(et.textureInfo, ft.k.BLOCK).url;
+             tt.tE.K8(Vt, {
+               B3: [Ot],
+               N7: qt
```

#### 2862. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20789-L20793` → after: `L20834-L20838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20834-L20838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20834-L20838) · [Before (L20789-L20793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20789-L20793)

```diff
-           BB.zF.ZE(IB.id, {
-             material: void 0 === TB ? ZB : TB,
-             gF: IB.gF,
-             solid: null !== (eB = IB.solid) && void 0 !== eB ? eB : !IB.gF,
-             cq: IB.cq,
+           tt.tE.sG(et.id, {
+             material: void 0 === Ot ? Vt : Ot,
+             OE: et.OE,
+             solid: null !== (rt = et.solid) && void 0 !== rt ? rt : !et.OE,
+             ey: et.ey,
```

#### 2863. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20795-L20798` → after: `L20840-L20843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20840-L20843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20840-L20843) · [Before (L20795-L20798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20795-L20798)

```diff
-             iN: null !== (uB = IB.iN) && void 0 !== uB ? uB : null,
-             nq: null !== (fB = IB.nq) && void 0 !== fB ? fB : null,
-             pN: IB.pN,
-             RP: aI(ZB, IB.model)
+             wf: null !== (Ut = et.wf) && void 0 !== Ut ? Ut : null,
+             Vy: null !== (At = et.Vy) && void 0 !== At ? At : null,
+             yf: et.yf,
+             JI: Re(Vt, et.model)
```

#### 2864. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20800` → after: `L20845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20845) · [Before (L20800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20800)

```diff
-         }(0, oB.F)(ZB, IB.id, BB.Ig.JR(), void 0)
+         }(0, Dt.C)(Vt, et.id, tt.Bf.vI(), void 0)
```

#### 2865. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20802` → after: `L20847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20847) · [Before (L20802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20802)

```diff
-       for (const ZB in TB.q) {
+       for (const Vt in Ot.s) {
```

#### 2866. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20804-L20805` → after: `L20849-L20850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20849-L20850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20849-L20850) · [Before (L20804-L20805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20804-L20805)

```diff
-         const IB = TB.q[ZB];
-         await (0, RI.r)(`item ${ZB}`), (0, oB.F)(ZB, IB.id, BB.Ig.JR(), IB.type)
+         const et = Ot.s[Vt];
+         await (0, Fe.v)(`item ${Vt}`), (0, Dt.C)(Vt, et.id, tt.Bf.vI(), et.type)
```

#### 2867. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20807` → after: `L20852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20852) · [Before (L20807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20807)

```diff
-       return await (0, RI.r)("block overlays"),
+       return await (0, Fe.v)("block overlays"),
```

#### 2868. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20809` → after: `L20854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20854) · [Before (L20809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20809)

```diff
-           const IB = BB.Ig.JR();
+           const et = tt.Bf.vI();
```

#### 2869. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20812` → after: `L20857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20857) · [Before (L20812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20812)

```diff
-             const JB = zB.e.getTexture(`destroy_stage_${TB}`, NB.m.BLOCK).url,
+             const qt = lt.e.getTexture(`destroy_stage_${Ot}`, ft.k.BLOCK).url,
```

#### 2870. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20814-L20815` → after: `L20859-L20860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20859-L20860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20859-L20860) · [Before (L20814-L20815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20814-L20815)

```diff
-                 wrapU: QB.c.clamp,
-                 wrapV: QB.c.clamp,
+                 wrapU: ut.e.clamp,
+                 wrapV: ut.e.clamp,
```

#### 2871. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20818` → after: `L20863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20863) · [Before (L20818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20818)

```diff
-               GB = (0, QB.v)(IB, {
+               mt = (0, ut.A)(et, {
```

#### 2872. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20822` → after: `L20867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20867) · [Before (L20822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20822)

```diff
-                 samplingMode: QB.j.nearestNearestMipLinear,
+                 samplingMode: ut.k.nearestNearestMipLinear,
```

#### 2873. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20826` → after: `L20871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20871) · [Before (L20826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20826)

```diff
-                 transparencyMode: HI.o.alphaTest,
+                 transparencyMode: Ie.n.alphaTest,
```

#### 2874. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20832-L20833` → after: `L20877-L20878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20877-L20878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20877-L20878) · [Before (L20832-L20833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20832-L20833)

```diff
-                 name: `breakingBoxTexture${TB}`,
-                 lg: IB,
+                 name: `breakingBoxTexture${Ot}`,
+                 Fw: et,
```

#### 2875. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20837-L20838` → after: `L20882-L20883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20882-L20883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20882-L20883) · [Before (L20837-L20838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20837-L20838)

```diff
-             null === (ZB = BB.Ig.Zg) || void 0 === ZB || ZB.prepareTexture(GB);
-             const cB = (0, wB.n)(BB.Ig, `breakingBox${TB}`, (0, OB.b)({
+             null === (Vt = tt.Bf.pf) || void 0 === Vt || Vt.prepareTexture(mt);
+             const Ht = (0, ht.q)(tt.Bf, `breakingBox${Ot}`, (0, vt.c)({
```

#### 2876. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20843` → after: `L20888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20888) · [Before (L20843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20843)

```diff
-             cB.material = kB, BB.Ig.xg(cB), cB.qY(!1), BB.Ig.TkB.push(cB)
+             Ht.material = jt, tt.Bf.ow(Ht), Ht.Av(!1), tt.Bf.ajt.push(Ht)
```

#### 2877. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20848-L20852` → after: `L20893-L20897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20893-L20897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20893-L20897) · [Before (L20848-L20852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20848-L20852)

```diff
-             lg: IB
-           } = BB.Ig, ZB = (0, OB.b)({
-             width: jI.c,
-             height: jI.c,
-             depth: jI.c
+             Fw: et
+           } = tt.Bf, Vt = (0, vt.c)({
+             width: Ze.e,
+             height: Ze.e,
+             depth: Ze.e
```

#### 2878. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20854-L20855` → after: `L20899-L20900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20899-L20900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20899-L20900) · [Before (L20854-L20855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20854-L20855)

```diff
-           for (let zB = 0; zB < TB; zB++) JB[4 * zB + 3] = ZB.positions[3 * zB + 2] < 0 ? LI : jI.e;
-           const oB = (0, wB.n)(BB.Ig, "highlight", {
+           for (let lt = 0; lt < Ot; lt++) qt[4 * lt + 3] = Vt.positions[3 * lt + 2] < 0 ? oe : Ze.f;
+           const Dt = (0, ht.q)(tt.Bf, "highlight", {
```

#### 2879. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20862` → after: `L20907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20907) · [Before (L20862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20862)

```diff
-               ...MI.c,
+               ...Pe.b,
```

#### 2880. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20866` → after: `L20911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20911) · [Before (L20866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20866)

```diff
-               transparencyMode: HI.o.alphaBlend
+               transparencyMode: Ie.n.alphaBlend
```

#### 2881. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20870` → after: `L20915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20915) · [Before (L20870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20870)

```diff
-             lg: IB,
+             Fw: et,
```

#### 2882. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20876` → after: `L20921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20921) · [Before (L20876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20876)

```diff
-               lg: IB,
+               Fw: et,
```

#### 2883. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20879-L20880` → after: `L20924-L20925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20924-L20925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20924-L20925) · [Before (L20879-L20880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20879-L20880)

```diff
-             kB = jI.i,
-             cB = jI.m,
+             jt = Ze.j,
+             Ht = Ze.o,
```

#### 2884. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20882` → after: `L20927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20927) · [Before (L20882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20882)

```diff
-               const GB = (0, wB.n)(BB.Ig, IB, (0, OB.f)({
+               const mt = (0, ht.q)(tt.Bf, et, (0, vt.j)({
```

#### 2885. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20889-L20892` → after: `L20934-L20937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20934-L20937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20934-L20937) · [Before (L20889-L20892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20889-L20892)

```diff
-           for (const zB of hB) zB.material = vB, zB.parent = oB, zB.tg = !1, BB.Ig.xg(zB);
-           oB.tg = !1, oB.RN = !0, oB.XN = !0, BB.Ig.xg(oB), oB.metadata.gkB = () => {
-             (0, tB.d)(BB, hB, oB.ek.x, oB.ek.y, jI.i, jI.m)
-           }, oB.qY(!1), BB.Ig.ZkB = oB
+           for (const lt of Qt) lt.material = dt, lt.parent = Dt, lt.Gw = !1, tt.Bf.ow(lt);
+           Dt.Gw = !1, Dt.Cf = !0, Dt.hf = !0, tt.Bf.ow(Dt), Dt.metadata.Ijt = () => {
+             (0, Bt.e)(tt, Qt, Dt.cj.x, Dt.cj.y, Ze.j, Ze.o)
+           }, Dt.Av(!1), tt.Bf.Njt = Dt
```

#### 2886. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20896-L20897` → after: `L20941-L20942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20941-L20942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20941-L20942) · [Before (L20896-L20897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20896-L20897)

```diff
-             lg: IB
-           } = BB.Ig, ZB = (0, wB.n)(BB.Ig, "floating", (0, OB.f)({
+             Fw: et
+           } = tt.Bf, Vt = (0, ht.q)(tt.Bf, "floating", (0, vt.j)({
```

#### 2887. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20901` → after: `L20946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20946) · [Before (L20901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20901)

```diff
-             ...MI.c,
+             ...Pe.b,
```

#### 2888. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20908` → after: `L20953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20953) · [Before (L20908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20908)

```diff
-             lg: IB,
+             Fw: et,
```

#### 2889. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20911-L20912` → after: `L20956-L20957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20956-L20957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20956-L20957) · [Before (L20911-L20912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20911-L20912)

```diff
-           }).mirror, ZB.rotation.set(-Math.PI / 2, 0, 0), ZB.RN = !0, ZB.XN = !0, BB.Ig.xg(ZB), ZB.tg = !1, ZB.qY(!1), BB.Ig.VZB = ZB
-         }(BB), nB.l.Gq("loadingScreenState", "loadingPage:loadingAssets"), await Promise.all(GB), {
+           }).mirror, Vt.rotation.set(-Math.PI / 2, 0, 0), Vt.Cf = !0, Vt.hf = !0, tt.Bf.ow(Vt), Vt.Gw = !1, Vt.Av(!1), tt.Bf.qOt = Vt
+         }(tt), Xt.j.sw("loadingScreenState", "loadingPage:loadingAssets"), await Promise.all(mt), {
```

#### 2890. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20919` → after: `L20964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20964) · [Before (L20919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20919)

```diff
-       const JB = kB.m[IB];
+       const qt = jt.q[et];
```

#### 2891. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20921` → after: `L20966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20966) · [Before (L20921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20921)

```diff
-       const GB = kB.f[IB],
+       const mt = jt.h[et],
```

#### 2892. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20927` → after: `L20972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20972) · [Before (L20927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20927)

```diff
-         const TB = kB.f[WB];
+         const Ot = jt.h[bt];
```

#### 2893. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20930` → after: `L20975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20975) · [Before (L20930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20930)

```diff
-           await (0, RI.r)(`block ${WB}`);
+           await (0, Fe.v)(`block ${bt}`);
```

#### 2894. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20932` → after: `L20977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20977) · [Before (L20932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20932)

```diff
-           let kB = ZB.Q_;
+           let jt = Vt.U1;
```

#### 2895. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20938-L20939` → after: `L20983-L20984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20983-L20984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20983-L20984) · [Before (L20938-L20939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20938-L20939)

```diff
-             } = TB.meta, oB = (0, bB.i)(IB === lB.e.top, ZB, null !== JB && void 0 !== JB ? JB : 1);
-             oB !== bB.f && (vB.has(oB.key) || vB.set(oB.key, (() => uB(BB.Ig.JR(), GB, oB))), kB = vB.get(oB.key))
+             } = Ot.meta, Dt = (0, pt.j)(et === it.b.top, Vt, null !== qt && void 0 !== qt ? qt : 1);
+             Dt !== pt.e && (dt.has(Dt.key) || dt.set(Dt.key, (() => Ut(tt.Bf.vI(), mt, Dt))), jt = dt.get(Dt.key))
```

#### 2896. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20942-L20944` → after: `L20987-L20989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20987-L20989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20987-L20989) · [Before (L20942-L20944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20942-L20944)

```diff
-             IB !== hB && (cB.has(IB) || cB.set(IB, (() => eB(BB.Ig.JR(), TB))), kB = cB.get(IB))
-           } else(0, xB.D)(GB) ? kB = hI(IB, TB.meta.metaStr) : (0, zI.x)(GB) && (kB = CI(IB, TB.meta.rot, TB.meta.open));
-           BB.zF.ZE(TB.id, {
+             et !== Qt && (Ht.has(et) || Ht.set(et, (() => rt(tt.Bf.vI(), Ot))), jt = Ht.get(et))
+           } else(0, xt.I)(mt) ? jt = le(et, Ot.meta.metaStr) : (0, Ee.w)(mt) && (jt = Ce(et, Ot.meta.rot, Ot.meta.open));
+           tt.tE.sG(Ot.id, {
```

#### 2897. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20946-L20947` → after: `L20991-L20992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20991-L20992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20991-L20992) · [Before (L20946-L20947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20946-L20947)

```diff
-             Q_: kB,
-             YC: JB,
+             U1: jt,
+             mC: qt,
```

#### 2898. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20949-L20955` → after: `L20994-L21000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R20994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L20994-L21000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L20994-L21000) · [Before (L20949-L20955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20949-L20955)

```diff
-             cq: TB.cq,
-             iN: null !== (FB = null !== (NB = TB.iN) && void 0 !== NB ? NB : ZB.iN) && void 0 !== FB ? FB : null,
-             nq: null !== (gB = null !== (qB = TB.nq) && void 0 !== qB ? qB : ZB.nq) && void 0 !== gB ? gB : null,
-             pN: null !== (yB = TB.pN) && void 0 !== yB ? yB : ZB.pN,
-             RP: aI(WB, null !== (UB = TB.model) && void 0 !== UB ? UB : GB.model),
-             h_: () => KI(GB, TB)
-           }), (0, oB.F)(WB, TB.id, BB.Ig.JR(), void 0)
+             ey: Ot.ey,
+             wf: null !== (Et = null !== (ft = Ot.wf) && void 0 !== ft ? ft : Vt.wf) && void 0 !== Et ? Et : null,
+             Vy: null !== (wt = null !== (yt = Ot.Vy) && void 0 !== yt ? yt : Vt.Vy) && void 0 !== wt ? wt : null,
+             yf: null !== (Nt = Ot.yf) && void 0 !== Nt ? Nt : Vt.yf,
+             JI: Re(bt, null !== (Mt = Ot.model) && void 0 !== Mt ? Mt : mt.model),
+             U3: () => se(mt, Ot)
+           }), (0, Dt.C)(bt, Ot.id, tt.Bf.vI(), void 0)
```

#### 2899. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20963` → after: `L21008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21008) · [Before (L20963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20963)

```diff
-         alpha: jI.k
+         alpha: Ze.n
```

#### 2900. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20968` → after: `L21013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21013) · [Before (L20968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20968)

```diff
-         Ig: IB
+         Bf: et
```

#### 2901. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20970-L20974` → after: `L21015-L21019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21015-L21019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21015-L21019) · [Before (L20970-L20974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20970-L20974)

```diff
-         lg: ZB
-       } = IB, TB = (0, wB.n)(IB, "ezBridgeGhost", (0, OB.b)({
-         width: jI.c,
-         height: jI.c,
-         depth: jI.c
+         Fw: Vt
+       } = et, Ot = (0, ht.q)(et, "ezBridgeGhost", (0, vt.c)({
+         width: Ze.e,
+         height: Ze.e,
+         depth: Ze.e
```

#### 2902. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20976` → after: `L21021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21021) · [Before (L20976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20976)

```diff
-         ...MI.c,
+         ...Pe.b,
```

#### 2903. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20979-L20980` → after: `L21024-L21025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21024-L21025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21024-L21025) · [Before (L20979-L20980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20979-L20980)

```diff
-         transparencyMode: HI.o.alphaBlend,
-         alpha: jI.e,
+         transparencyMode: Ie.n.alphaBlend,
+         alpha: Ze.f,
```

#### 2904. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20986` → after: `L21031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21031) · [Before (L20986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20986)

```diff
-         lg: ZB,
+         Fw: Vt,
```

#### 2905. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20990` → after: `L21035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21035) · [Before (L20990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20990)

```diff
-       const oB = (0, wB.n)(IB, "ezBridgeGhostOutline", (0, KB.f)((0, jI.b)().map((BB => {
+       const Dt = (0, ht.q)(et, "ezBridgeGhostOutline", (0, st.f)((0, Ze.b)().map((tt => {
```

#### 2906. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20992` → after: `L21037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21037) · [Before (L20992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20992)

```diff
-         return [(0, OB.b)({
+         return [(0, vt.c)({
```

#### 2907. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L20998` → after: `L21043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21043) · [Before (L20998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L20998)

```diff
-       return oB.tg = !1, oB.RN = !0, oB.XN = !0, oB.material = (0, WB.d)({
+       return Dt.Gw = !1, Dt.Cf = !0, Dt.hf = !0, Dt.material = (0, bt.d)({
```

#### 2908. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21000` → after: `L21045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21045) · [Before (L21000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21000)

```diff
-         lg: ZB,
+         Fw: Vt,
```

#### 2909. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21002` → after: `L21047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21047) · [Before (L21002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21002)

```diff
-       }).mirror, oB.parent = TB, IB.xg(oB), TB.tg = !1, TB.RN = !0, TB.XN = !0, IB.xg(TB), TB.qY(!1), TB
+       }).mirror, Dt.parent = Ot, et.ow(Dt), Ot.Gw = !1, Ot.Cf = !0, Ot.hf = !0, et.ow(Ot), Ot.Av(!1), Ot
```

#### 2910. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21004` → after: `L21049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21049) · [Before (L21004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21004)

```diff
-     const fI = AI(UB.g),
+     const Ae = Ye(Mt.o),
```

#### 2911. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21020-L21021` → after: `L21065-L21066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21065-L21066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21065-L21066) · [Before (L21020-L21021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21020-L21021)

```diff
-                 const GB = HB(`${IB.name}BlkMdl${TB<2?1:2}`);
-                 return GB.tg = !1, GB.rotation.set(...JB), GB.position.set(...oB), GB.bakeCurrentTransformIntoVertices(), GB.material = ZB, GB
+                 const mt = It(`${et.name}BlkMdl${Ot<2?1:2}`);
+                 return mt.Gw = !1, mt.rotation.set(...qt), mt.position.set(...Dt), mt.bakeCurrentTransformIntoVertices(), mt.material = Vt, mt
```

#### 2912. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21023-L21024` → after: `L21068-L21069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21068-L21069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21068-L21069) · [Before (L21023-L21024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21023-L21024)

```diff
-               JB = (0, wB.j)(TB, !1, !1);
-             return JB.tg = !1, JB
+               qt = (0, ht.o)(Ot, !1, !1);
+             return qt.Gw = !1, qt
```

#### 2913. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21035` → after: `L21080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21080) · [Before (L21035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21035)

```diff
-             const ZB = (0, qB.d)().getMetaInfo(IB).metaStr;
+             const Vt = (0, yt.c)().getMetaInfo(et).metaStr;
```

#### 2914. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21042` → after: `L21087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21087) · [Before (L21042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21042)

```diff
-             const ZB = (0, qB.d)().getMetaInfo(IB);
+             const Vt = (0, yt.c)().getMetaInfo(et);
```

#### 2915. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21048` → after: `L21093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21093) · [Before (L21048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21048)

```diff
-             (0, YB.b)(BB);
+             (0, Wt.c)(tt);
```

#### 2916. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21056` → after: `L21101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21101) · [Before (L21056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21056)

```diff
-             (0, YB.b)(BB);
+             (0, Wt.c)(tt);
```

#### 2917. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21059` → after: `L21104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21104) · [Before (L21059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21059)

```diff
-               yI ??= vI(BB, zI.c, NI);
+               ae ??= je(tt, Ee.b, we);
```

#### 2918. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21061` → after: `L21106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21106) · [Before (L21061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21061)

```diff
-                 TB = (0, zI.t)(IB) ? ZB.gate : ZB.top,
+                 Ot = (0, Ee.u)(et) ? Vt.gate : Vt.top,
```

#### 2919. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21067` → after: `L21112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21112) · [Before (L21067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21067)

```diff
-                 of zI.i) {
+                 of Ee.g) {
```

#### 2920. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21069` → after: `L21114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21114) · [Before (L21069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21069)

```diff
-                 JB.set(ZB, (() => cI(BB, IB, `${IB.name}|${ZB}FenceGateModel`, qI(TB, oB, GB))))
+                 qt.set(Vt, (() => Xe(tt, et, `${et.name}|${Vt}FenceGateModel`, Ne(Ot, Dt, mt))))
```

#### 2921. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21079` → after: `L21124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21124) · [Before (L21079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21079)

```diff
-             (0, qB.d)().getMetaInfo(IB).halfblockPlacement === lB.e.top && (BB.rotation.x = Math.PI)
+             (0, yt.c)().getMetaInfo(et).halfblockPlacement === it.b.top && (tt.rotation.x = Math.PI)
```

#### 2922. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21087-L21090` → after: `L21132-L21135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21132-L21135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21132-L21135) · [Before (L21087-L21090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21087-L21090)

```diff
-               oB = kB.f[IB].name,
-               GB = null !== (ZB = oB.split("|")[2]) && void 0 !== ZB ? ZB : "rot1",
-               vB = "open" === (null !== (TB = oB.split("|")[3]) && void 0 !== TB ? TB : "closed");
-             "rot1" === GB && vB ? (BB.position.x += JB, BB.rotation.y += 3 * Math.PI / 2) : "rot1" !== GB || vB ? "rot2" === GB && vB ? BB.position.z -= JB : "rot2" !== GB || vB ? "rot3" === GB && vB ? (BB.position.x -= JB, BB.rotation.y += Math.PI / 2) : "rot3" !== GB || vB ? "r … [truncated]
+               Dt = jt.h[et].name,
+               mt = null !== (Vt = Dt.split("|")[2]) && void 0 !== Vt ? Vt : "rot1",
+               dt = "open" === (null !== (Ot = Dt.split("|")[3]) && void 0 !== Ot ? Ot : "closed");
+             "rot1" === mt && dt ? (tt.position.x += qt, tt.rotation.y += 3 * Math.PI / 2) : "rot1" !== mt || dt ? "rot2" === mt && dt ? tt.position.z -= qt : "rot2" !== mt || dt ? "rot3" === mt && dt ? (tt.position.x -= qt, tt.rotation.y += Math.PI / 2) : "rot3" !== mt || dt ? "r … [truncated]
```

#### 2923. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21097-L21098` → after: `L21142-L21143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21142-L21143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21142-L21143) · [Before (L21097-L21098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21097-L21098)

```diff
-             const TB = kB.f[IB].name,
-               JB = "open" === (null !== (ZB = TB.split("|")[3]) && void 0 !== ZB ? ZB : "closed"),
+             const Ot = jt.h[et].name,
+               qt = "open" === (null !== (Vt = Ot.split("|")[3]) && void 0 !== Vt ? Vt : "closed"),
```

#### 2924. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21102-L21103` → after: `L21147-L21148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21147-L21148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21147-L21148) · [Before (L21102-L21103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21102-L21103)

```diff
-               const IB = null !== (GB = TB.split("|")[2]) && void 0 !== GB ? GB : "rot1";
-               "rot4" === IB ? (BB.position.x += oB, BB.rotation.y += 3 * Math.PI / 2) : "rot1" === IB ? BB.position.z -= oB : "rot2" === IB ? (BB.position.x -= oB, BB.rotation.y += Math.PI / 2) : "rot3" === IB && (BB.position.z += oB, BB.rotation.y += Math.PI)
+               const et = null !== (mt = Ot.split("|")[2]) && void 0 !== mt ? mt : "rot1";
+               "rot4" === et ? (tt.position.x += Dt, tt.rotation.y += 3 * Math.PI / 2) : "rot1" === et ? tt.position.z -= Dt : "rot2" === et ? (tt.position.x -= Dt, tt.rotation.y += Math.PI / 2) : "rot3" === et && (tt.position.z += Dt, tt.rotation.y += Math.PI)
```

#### 2925. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21124` → after: `L21169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21169) · [Before (L21124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21124)

```diff
-       if (!ZB) throw new Error(`Unknown block mesh type: ${BB}`);
+       if (!Vt) throw new Error(`Unknown block mesh type: ${tt}`);
```

#### 2926. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21136` → after: `L21181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21181) · [Before (L21136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21136)

```diff
-       return void 0 !== BB.model && (0, UB.k)(IB) === BB
+       return void 0 !== tt.model && (0, Mt.r)(et) === tt
```

#### 2927. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21140` → after: `L21185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21185) · [Before (L21140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21140)

```diff
-       const IB = kB.f[BB],
+       const et = jt.h[tt],
```

#### 2928. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21142` → after: `L21187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21187) · [Before (L21142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21142)

```diff
-         JB = kB.f[ZB],
+         qt = jt.h[Vt],
```

#### 2929. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21151` → after: `L21196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21196) · [Before (L21151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21151)

```diff
-       } = kB.f[IB];
+       } = jt.h[et];
```

#### 2930. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21159-L21160` → after: `L21204-L21205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21204-L21205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21204-L21205) · [Before (L21159-L21160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21159-L21160)

```diff
-           rotation: CB.rN.Zero(),
-           ek: CB.rN.One()
+           rotation: Ct.uf.Zero(),
+           cj: Ct.uf.One()
```

#### 2931. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21169-L21171` → after: `L21214-L21216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21214-L21216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21214-L21216) · [Before (L21169-L21171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21169-L21171)

```diff
-       SI(BB, IB), void 0 !== kB.f[IB].rotatableOffsetAmt && (TB = kB.f[IB].rotatableOffsetAmt);
-       const JB = null !== (ZB = kB.f[IB].name.split("|")[2]) && void 0 !== ZB ? ZB : "rot1";
-       "rot1" === JB ? BB.position.z -= TB : "rot2" === JB ? BB.position.x -= TB : "rot3" === JB ? BB.position.z += TB : "rot4" === JB && (BB.position.x += TB)
+       tV(tt, et), void 0 !== jt.h[et].rotatableOffsetAmt && (Ot = jt.h[et].rotatableOffsetAmt);
+       const qt = null !== (Vt = jt.h[et].name.split("|")[2]) && void 0 !== Vt ? Vt : "rot1";
+       "rot1" === qt ? tt.position.z -= Ot : "rot2" === qt ? tt.position.x -= Ot : "rot3" === qt ? tt.position.z += Ot : "rot4" === qt && (tt.position.x += Ot)
```

#### 2932. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21176-L21177` → after: `L21221-L21222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21221-L21222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21221-L21222) · [Before (L21176-L21177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21176-L21177)

```diff
-       const JB = kB.f[IB],
-         oB = null !== (ZB = JB.name.split("|")[2]) && void 0 !== ZB ? ZB : "rot1",
+       const qt = jt.h[et],
+         Dt = null !== (Vt = qt.name.split("|")[2]) && void 0 !== Vt ? Vt : "rot1",
```

#### 2933. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21182-L21183` → after: `L21227-L21228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21227-L21228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21227-L21228) · [Before (L21182-L21183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21182-L21183)

```diff
-         } = null !== (TB = JB.customModelInfo) && void 0 !== TB ? TB : {},
-         nB = (0, UB.f)((0, UB.k)(JB));
+         } = null !== (Ot = qt.customModelInfo) && void 0 !== Ot ? Ot : {},
+         Xt = (0, Mt.l)((0, Mt.r)(qt));
```

#### 2934. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21197` → after: `L21242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21242) · [Before (L21197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21197)

```diff
-     const cZ = [2, 0, 1, 3, 9, "a", "i", 12, 27, 6, 46, 8, 255, "length", 21, 213, "e", "undefined", void 0, "c", 4, 196, 63, "fromCodePoint", 7, "push", 17, 26, 18, 239, 224, 91, 116, "f", 8191, 88, 13, 14, null, !1, "b", "h", 176, "g", 5, 90, "d", 167, 200, 127, 128, "js", !0,  … [truncated]
+     const XV = [1, 2, 0, 104, 247, 9, 7, 64, 197, 115, 8, 255, "length", "e", "b", 87, "undefined", void 0, "d", 4, "c", 160, "a", 63, 6, "fromCodePoint", 12, "push", 187, 3, 158, 185, 91, "f", 8191, 88, 13, 14, 65, "i", 117, 177, 214, 109, 16, "v", 512, 144, 229, 212, 15, "h", 3 … [truncated]
```

#### 2935. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21200-L21203` → after: `L21245-L21248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21245-L21248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21245-L21248) · [Before (L21200-L21203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21200-L21203)

```diff
-       return BB[cZ[13]] = cZ[2], typeof BZ[BB[cZ[1]]] === cZ[17] ? BZ[BB[cZ[1]]] = function(...BB) {
-         for (FZ(BB[cZ[13]] = cZ[2], BB[cZ[5]] = '!PkGiFDI9z*]>:ar%&pqo=hV`+x8_QH,TtCs5.(0SYBK@lwE?U/~fLnub<mNM3XA"R7v|{$^JO}yeWjZg)c2;14#[d6', BB[cZ[0]] = "" + (BB[cZ[1]] || ""), BB[-cZ[4]] = BB[cZ[0]].length, BB[-cZ[10]] = [], BB[-cZ[8]] = cZ[1], BB[cZ[9]] = cZ[1], BB[-cZ[7]] =  … [truncated]
-           if (BB[cZ[6]] = BB[cZ[5]].indexOf(BB[cZ[0]][BB[cZ[3]]]), BB[cZ[6]] !== -cZ[2])
-             if (BB[-cZ[7]] < cZ[1]) BB[-cZ[7]] = BB[cZ[6]];
+       return tt[XV[12]] = XV[0], typeof eV[tt[XV[2]]] === XV[16] ? eV[tt[XV[2]]] = function(...tt) {
+         for (wV(tt[XV[12]] = XV[0], tt[XV[0]] = 'I;riDseKQgVbTaohN/F_tZ]nCEPx:p9%~U0}wXW(Hc&vlBuj`=AL+<4y".),>Omz8|f316R*q@d$JY[2k^5SG7M!#?{', tt[XV[1]] = "" + (tt[XV[2]] || ""), tt[-XV[4]] = tt[XV[1]].length, tt[-XV[9]] = [], tt[-XV[7]] = XV[2], tt[XV[8]] = XV[2], tt[XV[6]] = -X … [truncated]
+           if (tt[XV[5]] = tt[XV[0]].indexOf(tt[XV[1]][tt[XV[3]]]), tt[XV[5]] !== -XV[0])
+             if (tt[XV[6]] < XV[2]) tt[XV[6]] = tt[XV[5]];
```

#### 2936. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21205` → after: `L21250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21250) · [Before (L21205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21205)

```diff
-               FZ(BB[-cZ[7]] += BB[cZ[6]] * cZ[31], BB[-cZ[8]] |= BB[-cZ[7]] << BB[cZ[9]], BB[cZ[9]] += (BB[-cZ[7]] & cZ[34]) > cZ[35] ? cZ[36] : cZ[37]);
+               wV(tt[XV[6]] += tt[XV[5]] * XV[32], tt[-XV[7]] |= tt[XV[6]] << tt[XV[8]], tt[XV[8]] += (tt[XV[6]] & XV[34]) > XV[35] ? XV[36] : XV[37]);
```

#### 2937. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21207-L21211` → after: `L21252-L21283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21252-L21283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21252-L21283) · [Before (L21207-L21211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21207-L21211)

```diff
-                 FZ(BB[-cZ[10]].push(BB[-cZ[8]] & cZ[12]), BB[-cZ[8]] >>= cZ[11], BB[cZ[9]] -= cZ[11])
-               } while (BB[cZ[9]] > cZ[24]);
-               BB[-cZ[7]] = -cZ[2]
-             } return BB[-cZ[7]] > -cZ[2] && BB[-cZ[10]].push((BB[-cZ[8]] | BB[-cZ[7]] << BB[cZ[9]]) & cZ[12]), hZ(BB[-cZ[10]])
-       }(IZ[BB[cZ[1]]]) : BZ[BB[cZ[1]]]
+                 wV(tt[-XV[9]].push(tt[-XV[7]] & XV[11]), tt[-XV[7]] >>= XV[10], tt[XV[8]] -= XV[10])
+               } while (tt[XV[8]] > XV[6]);
+               tt[XV[6]] = -XV[0]
+             } return tt[XV[6]] > -XV[0] && tt[-XV[9]].push((tt[-XV[7]] | tt[XV[6]] << tt[XV[8]]) & XV[11]), lV(tt[-XV[9]])
+       }(VV[tt[XV[2]]]) : eV[tt[XV[2]]]
+     }
+ 
+     function lV(...tt) {
+       return tt[XV[12]] = XV[0], typeof qV !== XV[16] && qV ? (new qV).decode(new DV(tt[XV[2]])) : typeof mV !== XV[16] && mV ? mV.from(tt[XV[2]]).toString("utf-8") : HV(tt[XV[2]])
+     }
+ 
+     function EV(...tt) {
+       if (tt[XV[12]] = XV[29], tt[XV[2]] === function(...tt) {
+           return tt[XV[12]] = XV[0], typeof eV[tt[XV[2]]] === XV[16] ? eV[tt[XV[2]]] = function(...tt) {
+             for (wV(tt[XV[12]] = XV[0], tt[-XV[30]] = 'H;+GgvhuE5"6>O!aY&`1_|^Dk*2@cN7CPz$L}(sf.b[?n=/9%3BV80qoI:<A4]x{),T~yw#dQJejpmFiKlMUXZSWrRt', tt[XV[14]] = "" + (tt[XV[2]] || ""), tt[XV[20]] = tt[XV[14]].length, tt[XV[18]] = [], tt[XV[13]] = XV[2], tt[XV[33]] = XV[2], tt[XV … [truncated]
+               if (tt[XV[5]] = tt[-XV[30]].indexOf(tt[XV[14]][tt[XV[10]]]), tt[XV[5]] !== -XV[0])
+ ... (16 more added lines; see GitHub link above)
```

#### 2938. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21214-L21216` → after: `L21346-L21354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21346-L21354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21346-L21354) · [Before (L21214-L21216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21214-L21216)

```diff
-     function hZ(...BB) {
-       return BB[cZ[13]] = cZ[2], typeof TZ !== cZ[17] && TZ ? (new TZ).decode(new JZ(BB[cZ[1]])) : typeof oZ !== cZ[17] && oZ ? oZ.from(BB[cZ[1]]).toString("utf-8") : kZ(BB[cZ[1]])
-     }
+           function Vt(...tt) {
+             return tt[XV[12]] = XV[0], typeof eV[tt[XV[2]]] === XV[16] ? eV[tt[XV[2]]] = et(VV[tt[XV[2]]]) : eV[tt[XV[2]]]
+           }
+           tt[XV[12]] = XV[1], tt[-XV[36]] = Qt(tt[XV[2]]), tt[-XV[36]].length > XV[44] && (tt[-XV[36]] = Ct(tt[-XV[36]], tt[XV[2]].length * XV[10]));
+           var Ot = Array(XV[44]),
+             qt = Array(XV[44]);
+           for (tt[XV[29]] = XV[2]; tt[XV[29]] < XV[44]; tt[XV[29]]++) wV(Ot[tt[XV[29]]] = tt[-XV[36]][tt[XV[29]]] ^ XV[102], qt[tt[XV[29]]] = tt[-XV[36]][tt[XV[29]]] ^ XV[103]);
+           return tt[XV[19]] = Ct(Ot.concat(Qt(tt[XV[0]])), XV[46] + tt[XV[0]].length * XV[10]), lt(Ct(qt.concat(tt[XV[19]]), EV(Vt(119) + XV[45], XV[46], XV[77])))
+         }
```

#### 2939. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21218` → after: `L21356-L21357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21356-L21357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21356-L21357) · [Before (L21218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21218)

```diff
-     function zZ() {}
+         function dt(et) {
+           var Vt, Ot, qt, Dt;
```

#### 2940. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21220-L21246` → after: `L21359-L21381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21359-L21381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21359-L21381) · [Before (L21220-L21246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21220-L21246)

```diff
-     function FZ() {
-       FZ = function() {}
-     }
-     FZ(BZ = {}, IZ = ["S|0D`N&+5:zJjUY,qw;,)))P", "@Dp8+jI:#o^O?M18%<xT9X7gY&{r7.?8;DfWEU,QgMMg=MNYT>`O4():I", 'l~hzR?;SD*x8F%,H6N[~IM*"t<^O]8AVuS*JFC#IWaAUbr:', "<^{i`/@glNnUP%_s;,$iFMH`F", "vz1xOe&sozs7Q%L_u~+DBUKPOXQeDx#C/C%nfb6`r78", "C|^D.sG{RzGz.iI", "hn@}fWR<Ym7b_E#s[]%H+" … [truncated]
-       FZ(BB[cZ[13]] = cZ[1], BB[cZ[15]] = [function() {
-         return globalThis
-       }, function() {
-         return global
-       }, function() {
-         return window
-       }, function() {
-         return new Function("return this")()
-       }], BB[cZ[2]] = cZ[18], BB[cZ[0]] = []);
-       try {
-         FZ(BB[cZ[2]] = Object, BB[cZ[0]][cZ[25]]("".__proto__.constructor.name))
-       } catch (IZ) {}
- ... (11 more removed lines; see GitHub link above)
+           function mt(...tt) {
+             for (wV(tt[XV[12]] = XV[0], tt[XV[0]] = ')7x&?09/;]+6e(Wg~AqZcba|}4TVKikz@"pyDEJsf{U*l%wvSGL!RHu.mBI`rQX>CFY3M,[2:oPdh5<j_1n$N8=O^#t', tt[XV[14]] = "" + (tt[XV[2]] || ""), tt[-XV[48]] = tt[XV[14]].length, tt[XV[19]] = [], tt[XV[13]] = XV[2], tt[XV[33]] = XV[2], tt[XV[ … [truncated]
+               if (tt[XV[5]] = tt[XV[0]].indexOf(tt[XV[14]][tt[-XV[47]]]), tt[XV[5]] !== -XV[0])
+                 if (tt[XV[6]] < XV[2]) tt[XV[6]] = tt[XV[5]];
+                 else {
+                   wV(tt[XV[6]] += tt[XV[5]] * XV[32], tt[XV[13]] |= tt[XV[6]] << tt[XV[33]], tt[XV[33]] += (tt[XV[6]] & XV[34]) > XV[35] ? XV[36] : XV[37]);
+                   do {
+                     wV(tt[XV[19]].push(tt[XV[13]] & XV[11]), tt[XV[13]] >>= XV[10], tt[XV[33]] -= XV[10])
+                   } while (tt[XV[33]] > XV[6]);
+                   tt[XV[6]] = -XV[0]
+                 } return tt[XV[6]] > -XV[0] && tt[XV[19]].push((tt[XV[13]] | tt[XV[6]] << tt[XV[33]]) & XV[11]), lV(tt[XV[19]])
+           }
+ 
+           function dt(tt) {
+             return typeof eV[tt] === XV[16] ? eV[tt] = mt(VV[tt]) : eV[tt]
+           }
+ ... (7 more added lines; see GitHub link above)
```

#### 2941. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21248-L21249` → after: `L21383-L21384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21383-L21384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21383-L21384) · [Before (L21248-L21249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21248-L21249)

```diff
-     }()), (() => {
-       if ([][cZ[13]] = cZ[1], nZ(122) + "I" in zZ && function(...BB) {
+ 
+         function jt(...et) {
```

#### 2942. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21251-L21253` → after: `L21386-L21388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21386-L21388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21386-L21388) · [Before (L21251-L21253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21251-L21253)

```diff
-             for (FZ(BB[cZ[13]] = cZ[2], BB[cZ[5]] = 'Af2p9}NPW@.v;RY5ZBG`k{8>+(uyCJrlShX|6/&%LV:x<=[m?QTs4MK7$]_"3Oej~0a1^wz!*,#IHE)dnFiqtbDUgco', BB[cZ[0]] = "" + (BB[cZ[1]] || ""), BB[cZ[3]] = BB[cZ[0]].length, BB[cZ[28]] = [], BB[cZ[32]] = cZ[1], BB[cZ[33]] = cZ[1], BB[-cZ[30] … [truncated]
-               if (BB[cZ[29]] = BB[cZ[5]].indexOf(BB[cZ[0]][BB[cZ[11]]]), BB[cZ[29]] !== -cZ[2])
-                 if (BB[-cZ[30]] < cZ[1]) BB[-cZ[30]] = BB[cZ[29]];
+             for (wV(tt[XV[12]] = XV[0], tt[XV[52]] = 'Ptw+N>Uo`V8p%=A5{#0u];^:?HRe4&Q,!"1d_YqBMcS9hv$/C@XlZ<y~|f(Tsx2IJDbEk}mnjWF.*zKL6a3Gr[Ogi)7', tt[XV[1]] = "" + (tt[XV[2]] || ""), tt[-XV[6]] = tt[XV[1]].length, tt[XV[19]] = [], tt[XV[54]] = XV[2], tt[XV[55]] = XV[2], tt[XV[53 … [truncated]
+               if (tt[XV[5]] = tt[XV[52]].indexOf(tt[XV[1]][tt[XV[51]]]), tt[XV[5]] !== -XV[0])
+                 if (tt[XV[53]] < XV[2]) tt[XV[53]] = tt[XV[5]];
```

#### 2943. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21255` → after: `L21390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21390) · [Before (L21255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21255)

```diff
-                   FZ(BB[-cZ[30]] += BB[cZ[29]] * cZ[31], BB[cZ[32]] |= BB[-cZ[30]] << BB[cZ[33]], BB[cZ[33]] += (BB[-cZ[30]] & cZ[34]) > cZ[35] ? cZ[36] : cZ[37]);
+                   wV(tt[XV[53]] += tt[XV[5]] * XV[32], tt[XV[54]] |= tt[XV[53]] << tt[XV[55]], tt[XV[55]] += (tt[XV[53]] & XV[34]) > XV[35] ? XV[36] : XV[37]);
```

#### 2944. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21257-L21260` → after: `L21392-L21395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21392-L21395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21392-L21395) · [Before (L21257-L21260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21257-L21260)

```diff
-                     FZ(BB[cZ[28]].push(BB[cZ[32]] & cZ[12]), BB[cZ[32]] >>= cZ[11], BB[cZ[33]] -= cZ[11])
-                   } while (BB[cZ[33]] > cZ[24]);
-                   BB[-cZ[30]] = -cZ[2]
-                 } return BB[-cZ[30]] > -cZ[2] && BB[cZ[28]].push((BB[cZ[32]] | BB[-cZ[30]] << BB[cZ[33]]) & cZ[12]), hZ(BB[cZ[28]])
+                     wV(tt[XV[19]].push(tt[XV[54]] & XV[11]), tt[XV[54]] >>= XV[10], tt[XV[55]] -= XV[10])
+                   } while (tt[XV[55]] > XV[6]);
+                   tt[XV[53]] = -XV[0]
+                 } return tt[XV[53]] > -XV[0] && tt[XV[19]].push((tt[XV[54]] | tt[XV[53]] << tt[XV[55]]) & XV[11]), lV(tt[XV[19]])
```

#### 2945. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21264` → after: `L21399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21399) · [Before (L21264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21264)

```diff
-             return BB[cZ[13]] = cZ[2], typeof BZ[BB[cZ[1]]] === cZ[17] ? BZ[BB[cZ[1]]] = IB(IZ[BB[cZ[1]]]) : BZ[BB[cZ[1]]]
+             return tt[XV[12]] = XV[0], typeof eV[tt[XV[2]]] === XV[16] ? eV[tt[XV[2]]] = Vt(VV[tt[XV[2]]]) : eV[tt[XV[2]]]
```

#### 2946. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21266-L21294` → after: `L21401-L21405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21401-L21405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21401-L21405) · [Before (L21266-L21294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21266-L21294)

```diff
-           BB[cZ[13]] = cZ[1];
-           const TB = require("path"),
-             {
-               version: JB
-             } = require("../../package"),
-             {
-               version: oB
-             } = require("@redacted/enterprise-plugin/package"),
-             {
-               version: GB
-             } = require("@redacted/components/package"),
-             {
-               sdkVersion: vB
-             } = require("@redacted/enterprise-plugin");
-           require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), TB.resolve(__dirname, ZB(123) + ZB(124) + cZ[51])
-         }(), cZ[52]) {
- ... (13 more removed lines; see GitHub link above)
+           et[XV[12]] = XV[0];
+           try {
+             tt[XV[18]]
+           } catch (qt) {
+             tt[XV[18]] = ""
```

#### 2947. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21296` → after: `L21407-L21409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21407-L21409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21407-L21409) · [Before (L21296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21296)

```diff
-           return GB > -cZ[2] && TB.push((JB | GB << oB) & cZ[12]), hZ(TB)
+           for (wV(et[XV[59]] = QV(126) + QV(XV[56]) + Ot(XV[57]) + "/", et[-XV[58]] = "", et[XV[20]] = et[XV[2]].length), et[XV[19]] = XV[2]; et[XV[19]] < et[XV[20]]; et[XV[19]] += XV[29])
+             for (et[-XV[60]] = et[XV[2]].charCodeAt(et[XV[19]]) << XV[44] | (et[XV[19]] + XV[0] < et[XV[20]] ? et[XV[2]].charCodeAt(et[XV[19]] + XV[0]) << XV[10] : XV[2]) | (et[XV[19]] + XV[1] < et[XV[20]] ? et[XV[2]].charCodeAt(et[XV[19]] + XV[1]) : XV[2]), et[XV[33]] = XV[2]; e … [truncated]
+           return et[-XV[58]]
```

#### 2948. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21299-L21300` → after: `L21412-L21421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21412-L21421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21412-L21421) · [Before (L21299-L21300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21299-L21300)

```diff
-         function IB(IB) {
-           return typeof BZ[IB] === cZ[17] ? BZ[IB] = BB(IZ[IB]) : BZ[IB]
+         function Ht(...tt) {
+           var et, Vt, Ot, qt;
+           for (wV(tt[XV[12]] = XV[1], tt[-XV[61]] = tt[XV[0]].length, tt[XV[29]] = Array()), tt[XV[20]] = Array(Math.ceil(tt[XV[2]].length / XV[1])), et = XV[2]; et < tt[XV[20]].length; et++) tt[XV[20]][et] = tt[XV[2]].charCodeAt(et * XV[1]) << XV[10] | tt[XV[2]].charCodeAt(et *  … [truncated]
+           for (; tt[XV[20]].length > XV[2];) {
+             for (wV(qt = Array(), Ot = XV[2]), et = XV[2]; et < tt[XV[20]].length; et++) wV(Ot = (Ot << XV[44]) + tt[XV[20]][et], Vt = Math.floor(Ot / tt[-XV[61]]), Ot -= Vt * tt[-XV[61]]), (qt.length > XV[2] || Vt > XV[2]) && (qt[qt.length] = Vt);
+             wV(tt[XV[29]][tt[XV[29]].length] = Ot, tt[XV[20]] = qt)
+           }
+           for (tt[XV[62]] = "", et = tt[XV[29]].length - XV[0]; et >= XV[2]; et--) tt[XV[62]] += tt[XV[0]].charAt(tt[XV[29]][et]);
+           for (tt[XV[13]] = Math.ceil(tt[XV[2]].length * XV[10] / (Math.log(tt[XV[0]].length) / Math.log(XV[1]))), et = tt[XV[62]].length; et < tt[XV[13]]; et++) tt[XV[62]] = tt[XV[0]][XV[2]] + tt[XV[62]];
+           return tt[XV[62]]
```

#### 2949. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21302-L21303` → after: `L21423-L21559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21423-L21559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21423-L21559) · [Before (L21302-L21303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21302-L21303)

```diff
-         IB(125);
-         let ZB = cZ[39];
+ 
+         function Xt(...tt) {
+           var et, Vt;
+           for (wV(tt[XV[12]] = XV[0], tt[XV[22]] = "", tt[XV[1]] = -XV[0]); ++tt[XV[1]] < tt[XV[2]].length;) wV(et = tt[XV[2]].charCodeAt(tt[XV[1]]), Vt = tt[XV[1]] + XV[0] < tt[XV[2]].length ? tt[XV[2]].charCodeAt(tt[XV[1]] + XV[0]) : XV[2]), XV[114] <= et && et <= XV[115] && XV … [truncated]
+           return tt[XV[22]]
+         }
+ 
+         function Qt(...tt) {
+           for (wV(tt[XV[12]] = XV[0], tt[XV[22]] = Array(tt[XV[2]].length >> XV[1])), tt[XV[67]] = XV[2]; tt[XV[67]] < tt[XV[22]].length; tt[XV[67]]++) tt[XV[22]][tt[XV[67]]] = XV[2];
+           for (tt[XV[67]] = XV[2]; tt[XV[67]] < tt[XV[2]].length * XV[10]; tt[XV[67]] += XV[10]) tt[XV[22]][tt[XV[67]] >> XV[54]] |= (tt[XV[2]].charCodeAt(tt[XV[67]] / XV[10]) & XV[11]) << XV[70] - tt[XV[67]] % XV[69];
+           return tt[XV[22]]
+         }
+ 
+         function lt(...tt) {
+           for (wV(tt[XV[12]] = XV[0], tt[XV[22]] = ""), tt[-XV[68]] = XV[2]; tt[-XV[68]] < tt[XV[2]].length * XV[69]; tt[-XV[68]] += XV[10]) tt[XV[22]] += String.fromCharCode(tt[XV[2]][tt[-XV[68]] >> XV[54]] >>> XV[70] - tt[-XV[68]] % XV[69] & XV[11]);
+           return tt[XV[22]]
+ ... (121 more added lines; see GitHub link above)
```

#### 2950. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21305-L21327` → after: `L21561-L21589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21561-L21589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21561-L21589) · [Before (L21305-L21327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21305-L21327)

```diff
-           if (BB[cZ[13]] = cZ[1], function(BB) {
-               return typeof BZ[BB] === cZ[17] ? BZ[BB] = function(...BB) {
-                 for (FZ(BB[cZ[13]] = cZ[2], BB[cZ[5]] = 'vDdhfKOAerYlUCVsZFN9uQ6RH8nL)@._mXtc+#W>$SiBa`p1|b,&q=2I~3Ez;[?7^w(J{yj:k%!5<G}*MTx]0/4Pg"o', BB[cZ[40]] = "" + (BB[cZ[1]] || ""), BB[cZ[42]] = BB[cZ[40]].length, BB[cZ[46]] = [], BB[cZ[44]] = cZ[1], BB[-cZ[45]] = cZ[1], BB … [truncated]
-                   if (BB[cZ[6]] = BB[cZ[5]].indexOf(BB[cZ[40]][BB[cZ[41]]]), BB[cZ[6]] !== -cZ[2])
-                     if (BB[cZ[43]] < cZ[1]) BB[cZ[43]] = BB[cZ[6]];
-                     else {
-                       FZ(BB[cZ[43]] += BB[cZ[6]] * cZ[31], BB[cZ[44]] |= BB[cZ[43]] << BB[-cZ[45]], BB[-cZ[45]] += (BB[cZ[43]] & cZ[34]) > cZ[35] ? cZ[36] : cZ[37]);
-                       do {
-                         FZ(BB[cZ[46]].push(BB[cZ[44]] & cZ[12]), BB[cZ[44]] >>= cZ[11], BB[-cZ[45]] -= cZ[11])
-                       } while (BB[-cZ[45]] > cZ[24]);
-                       BB[cZ[43]] = -cZ[2]
-                     } return BB[cZ[43]] > -cZ[2] && BB[cZ[46]].push((BB[cZ[44]] | BB[cZ[43]] << BB[-cZ[45]]) & cZ[12]), hZ(BB[cZ[46]])
-               }(IZ[BB]) : BZ[BB]
-             }(126) in zZ && function(...BB) {
-               FZ(BB[cZ[13]] = cZ[1], BB[cZ[47]] = function(...IB) {
-                 return FZ(IB[cZ[13]] = cZ[0], IB[cZ[0]] = [], IB[cZ[3]] = IB[cZ[1]].length, IB[cZ[1]].sort(((BB, IB) => BB - IB)), BB[cZ[40]](IB[cZ[0]], [], cZ[1], IB[cZ[3]], IB[cZ[1]], IB[cZ[2]])), IB[cZ[0]]
- ... (7 more removed lines; see GitHub link above)
+           function Vt(...tt) {
+             return tt[XV[12]] = XV[0], typeof eV[tt[XV[2]]] === XV[16] ? eV[tt[XV[2]]] = function(...tt) {
+               for (wV(tt[XV[12]] = XV[0], tt[XV[0]] = 'Pec,d1DOx^A0$)jaW!qJBI6QEhlYUpX>&(w@G3f+ktM/V{=<RZ]_mT7bsK;~%HL[oz*F9CSiNg|r}?y."5:8v#u`4n2', tt[-XV[50]] = "" + (tt[XV[2]] || ""), tt[XV[29]] = tt[-XV[50]].length, tt[XV[19]] = [], tt[XV[54]] = XV[2], tt[XV[24]] = XV[2], tt[ … [truncated]
+                 if (tt[XV[5]] = tt[XV[0]].indexOf(tt[-XV[50]][tt[XV[10]]]), tt[XV[5]] !== -XV[0])
+                   if (tt[XV[6]] < XV[2]) tt[XV[6]] = tt[XV[5]];
+                   else {
+                     wV(tt[XV[6]] += tt[XV[5]] * XV[32], tt[XV[54]] |= tt[XV[6]] << tt[XV[24]], tt[XV[24]] += (tt[XV[6]] & XV[34]) > XV[35] ? XV[36] : XV[37]);
+                     do {
+                       wV(tt[XV[19]].push(tt[XV[54]] & XV[11]), tt[XV[54]] >>= XV[10], tt[XV[24]] -= XV[10])
+                     } while (tt[XV[24]] > XV[6]);
+                     tt[XV[6]] = -XV[0]
+                   } return tt[XV[6]] > -XV[0] && tt[XV[19]].push((tt[XV[54]] | tt[XV[6]] << tt[XV[24]]) & XV[11]), lV(tt[XV[19]])
+             }(VV[tt[XV[2]]]) : eV[tt[XV[2]]]
+           }
+           if (tt[XV[12]] = XV[2], Vt(XV[58]) + "q" in fV && function() {
+               var tt, et = function(...et) {
+ ... (13 more added lines; see GitHub link above)
```

#### 2951. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21329-L21331` → after: `L21591-L21593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21591-L21593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21591-L21593) · [Before (L21329-L21331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21329-L21331)

```diff
-               for (FZ(BB[cZ[13]] = cZ[2], BB[cZ[48]] = '%UpGOZLQNXk/3CDuM1vFz[ns9~Yi:?6{bT.*";&I+4y!,oP^}7$cfWVH_B>ejr)wlA#SqR8a|hKg2dxJE`<]=@5(t0m', BB[cZ[0]] = "" + (BB[cZ[1]] || ""), BB[cZ[3]] = BB[cZ[0]].length, BB[cZ[46]] = [], BB[cZ[44]] = cZ[1], BB[cZ[9]] = cZ[1], BB[cZ[24 … [truncated]
-                 if (BB[cZ[4]] = BB[cZ[48]].indexOf(BB[cZ[0]][BB[cZ[11]]]), BB[cZ[4]] !== -cZ[2])
-                   if (BB[cZ[24]] < cZ[1]) BB[cZ[24]] = BB[cZ[4]];
+               for (wV(tt[XV[12]] = XV[0], tt[XV[0]] = '8GJaWMLVfOBtKTARsIrDkE#"@pbvh4w=^,+%1ez&:2|lZ$Q*i(H>!cjXSC3x/F;0<q_NgY65{y[~}7`])o9?mdnu.PU', tt[XV[81]] = "" + (tt[XV[2]] || ""), tt[XV[20]] = tt[XV[81]].length, tt[XV[83]] = [], tt[XV[54]] = XV[2], tt[XV[82]] = XV[2], tt[XV … [truncated]
+                 if (tt[XV[5]] = tt[XV[0]].indexOf(tt[XV[81]][tt[XV[10]]]), tt[XV[5]] !== -XV[0])
+                   if (tt[XV[6]] < XV[2]) tt[XV[6]] = tt[XV[5]];
```

#### 2952. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21333` → after: `L21595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21595) · [Before (L21333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21333)

```diff
-                     FZ(BB[cZ[24]] += BB[cZ[4]] * cZ[31], BB[cZ[44]] |= BB[cZ[24]] << BB[cZ[9]], BB[cZ[9]] += (BB[cZ[24]] & cZ[34]) > cZ[35] ? cZ[36] : cZ[37]);
+                     wV(tt[XV[6]] += tt[XV[5]] * XV[32], tt[XV[54]] |= tt[XV[6]] << tt[XV[82]], tt[XV[82]] += (tt[XV[6]] & XV[34]) > XV[35] ? XV[36] : XV[37]);
```

#### 2953. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21335-L21338` → after: `L21597-L21600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21597-L21600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21597-L21600) · [Before (L21335-L21338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21335-L21338)

```diff
-                       FZ(BB[cZ[46]].push(BB[cZ[44]] & cZ[12]), BB[cZ[44]] >>= cZ[11], BB[cZ[9]] -= cZ[11])
-                     } while (BB[cZ[9]] > cZ[24]);
-                     BB[cZ[24]] = -cZ[2]
-                   } return BB[cZ[24]] > -cZ[2] && BB[cZ[46]].push((BB[cZ[44]] | BB[cZ[24]] << BB[cZ[9]]) & cZ[12]), hZ(BB[cZ[46]])
+                       wV(tt[XV[83]].push(tt[XV[54]] & XV[11]), tt[XV[54]] >>= XV[10], tt[XV[82]] -= XV[10])
+                     } while (tt[XV[82]] > XV[6]);
+                     tt[XV[6]] = -XV[0]
+                   } return tt[XV[6]] > -XV[0] && tt[XV[83]].push((tt[XV[54]] | tt[XV[6]] << tt[XV[82]]) & XV[11]), lV(tt[XV[83]])
```

#### 2954. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21342` → after: `L21604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21604) · [Before (L21342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21342)

```diff
-               return BB[cZ[13]] = cZ[2], typeof BZ[BB[cZ[1]]] === cZ[17] ? BZ[BB[cZ[1]]] = IB(IZ[BB[cZ[1]]]) : BZ[BB[cZ[1]]]
+               return tt[XV[12]] = XV[0], typeof eV[tt[XV[2]]] === XV[16] ? eV[tt[XV[2]]] = Ot(VV[tt[XV[2]]]) : eV[tt[XV[2]]]
```

#### 2955. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21345-L21377` → after: `L21607-L21608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21607-L21608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21607-L21608) · [Before (L21345-L21377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21345-L21377)

```diff
-             function oB() {
-               function BB(...BB) {
-                 return BB[cZ[13]] = cZ[2], typeof BZ[BB[cZ[1]]] === cZ[17] ? BZ[BB[cZ[1]]] = function(BB) {
-                   var IB, ZB, TB, JB, oB, GB, vB;
-                   for (FZ(IB = "" + (BB || ""), ZB = IB.length, TB = [], JB = cZ[1], oB = cZ[1], GB = -cZ[2]), vB = cZ[1]; vB < ZB; vB++) {
-                     var kB = '$CtRVTdBnX7D8]v|{w>(G^Ppf5ENizj.*K+F~OL"<6Z)k[Hqa_#l@I;4e}M:&23UxW=ysS!A,o9gQYb1Jhc`m/u?r%0'.indexOf(IB[vB]);
-                     if (kB !== -cZ[2])
-                       if (GB < cZ[1]) GB = kB;
-                       else {
-                         FZ(GB += kB * cZ[31], JB |= GB << oB, oB += (GB & cZ[34]) > cZ[35] ? cZ[36] : cZ[37]);
-                         do {
-                           FZ(TB.push(JB & cZ[12]), JB >>= cZ[11], oB -= cZ[11])
-                         } while (oB > cZ[24]);
-                         GB = -cZ[2]
-                       }
-                   }
- ... (17 more removed lines; see GitHub link above)
+             function mt(...tt) {
+               tt[XV[12]] = XV[2]
```

#### 2956. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21379` → after: `L21610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21610) · [Before (L21379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21379)

```diff
-             TB(cZ[49]) in zZ && oB();
+             Vt(132) in fV && mt();
```

#### 2957. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21381` → after: `L21612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21612) · [Before (L21381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21381)

```diff
-               [TB(cZ[58]) + TB(131)]: TB(132)
+               [Vt(138) + Vt(139)]: Dt(XV[60])
```

#### 2958. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21383` → after: `L21614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21614) · [Before (L21383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21383)

```diff
-             FZ(ZB = cZ[52], (cZ[1], JB[TB(133)])(yB.vi, GB))
+             wV(et = XV[79], (XV[2], qt[Dt(XV[206])])(Nt.vi, dt))
```

#### 2959. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21385-L21386` → after: `L21616-L21633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21616-L21633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21616-L21633) · [Before (L21385-L21386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21385-L21386)

```diff
-         }), 11315), (cZ[1], JB[IB(134) + IB(135)])((() => {
-           ZB = cZ[39]
+         }), 4400), (XV[2], qt[tt(XV[68]) + tt(XV[84])])(((...tt) => {
+           tt[XV[12]] = XV[2],
+             function(...tt) {
+               return tt[XV[12]] = XV[0], typeof eV[tt[XV[2]]] === XV[16] ? eV[tt[XV[2]]] = function(...tt) {
+                 for (wV(tt[XV[12]] = XV[0], tt[-XV[89]] = 'quA#r"4LB9,S:<1&tU(EVpvj^xo>m/Pl06cwQs5ygWeh2HbkdziMY}*%3Cf7K[$anJ@F){;D_X8Z?!+G]O.|`=~RITN', tt[XV[14]] = "" + (tt[XV[2]] || ""), tt[XV[29]] = tt[XV[14]].length, tt[XV[19]] = [], tt[XV[13]] = XV[2], tt[XV[24]] = XV[2], t … [truncated]
+                   if (tt[XV[88]] = tt[-XV[89]].indexOf(tt[XV[14]][tt[XV[87]]]), tt[XV[88]] !== -XV[0])
+                     if (tt[XV[53]] < XV[2]) tt[XV[53]] = tt[XV[88]];
+                     else {
+                       wV(tt[XV[53]] += tt[XV[88]] * XV[32], tt[XV[13]] |= tt[XV[53]] << tt[XV[24]], tt[XV[24]] += (tt[XV[53]] & XV[34]) > XV[35] ? XV[36] : XV[37]);
+                       do {
+                         wV(tt[XV[19]].push(tt[XV[13]] & XV[11]), tt[XV[13]] >>= XV[10], tt[XV[24]] -= XV[10])
+                       } while (tt[XV[24]] > XV[6]);
+                       tt[XV[53]] = -XV[0]
+                     } return tt[XV[53]] > -XV[0] && tt[XV[19]].push((tt[XV[13]] | tt[XV[53]] << tt[XV[24]]) & XV[11]), lV(tt[XV[19]])
+               }(VV[tt[XV[2]]]) : eV[tt[XV[2]]]
+             }(XV[47]) + "w" in fV && function(...tt) {
+ ... (2 more added lines; see GitHub link above)
```

#### 2960. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21390-L21394` → after: `L21637-L21641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21637-L21641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21637-L21641) · [Before (L21390-L21394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21390-L21394)

```diff
-       function BB(...BB) {
-         return BB[cZ[13]] = cZ[2], typeof BZ[BB[cZ[1]]] === cZ[17] ? BZ[BB[cZ[1]]] = function(...BB) {
-           for (FZ(BB[cZ[13]] = cZ[2], BB[cZ[5]] = ':fLGgliu7oZ_X8zw>I)y`pPHa?#~*J,|=M4n+NDj0@".K/k2E9CB!x(%5vdsAtS{UY13b^&VFqWRT]}O6;$[<cQermh', BB[cZ[40]] = "" + (BB[cZ[1]] || ""), BB[-cZ[53]] = BB[cZ[40]].length, BB[cZ[46]] = [], BB[cZ[44]] = cZ[1], BB[cZ[54]] = cZ[1], BB[cZ[24 … [truncated]
-             if (BB[cZ[4]] = BB[cZ[5]].indexOf(BB[cZ[40]][BB[cZ[11]]]), BB[cZ[4]] !== -cZ[2])
-               if (BB[cZ[24]] < cZ[1]) BB[cZ[24]] = BB[cZ[4]];
+       if (XV[79]) {
+         function tt(...tt) {
+           for (wV(tt[XV[12]] = XV[0], tt[XV[0]] = '2bHBiOkLgAINUlYDSnf"~j1/%58,:^}&43r)#TptmE(>?K!G0Qae;7Xx6owWdv9[`s*JCMZ+F]uPy$_zV|hR{q<=.@c', tt[XV[14]] = "" + (tt[XV[2]] || ""), tt[XV[20]] = tt[XV[14]].length, tt[XV[21]] = [], tt[XV[93]] = XV[2], tt[XV[24]] = XV[2], tt[XV[53] … [truncated]
+             if (tt[XV[92]] = tt[XV[0]].indexOf(tt[XV[14]][tt[XV[10]]]), tt[XV[92]] !== -XV[0])
+               if (tt[XV[53]] < XV[2]) tt[XV[53]] = tt[XV[92]];
```

#### 2961. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21396` → after: `L21643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21643) · [Before (L21396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21396)

```diff
-                 FZ(BB[cZ[24]] += BB[cZ[4]] * cZ[31], BB[cZ[44]] |= BB[cZ[24]] << BB[cZ[54]], BB[cZ[54]] += (BB[cZ[24]] & cZ[34]) > cZ[35] ? cZ[36] : cZ[37]);
+                 wV(tt[XV[53]] += tt[XV[92]] * XV[32], tt[XV[93]] |= tt[XV[53]] << tt[XV[24]], tt[XV[24]] += (tt[XV[53]] & XV[34]) > XV[35] ? XV[36] : XV[37]);
```

#### 2962. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21398-L21432` → after: `L21645-L21649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21645-L21649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21645-L21649) · [Before (L21398-L21432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21398-L21432)

```diff
-                   FZ(BB[cZ[46]].push(BB[cZ[44]] & cZ[12]), BB[cZ[44]] >>= cZ[11], BB[cZ[54]] -= cZ[11])
-                 } while (BB[cZ[54]] > cZ[24]);
-                 BB[cZ[24]] = -cZ[2]
-               } return BB[cZ[24]] > -cZ[2] && BB[cZ[46]].push((BB[cZ[44]] | BB[cZ[24]] << BB[cZ[54]]) & cZ[12]), hZ(BB[cZ[46]])
-         }(IZ[BB[cZ[1]]]) : BZ[BB[cZ[1]]]
-       }
-       if ([][cZ[13]] = cZ[1], BB(cZ[56]) in zZ && function(...BB) {
-           FZ(BB[cZ[13]] = cZ[1], BB[cZ[5]] = function(...IB) {
-             return IB[cZ[13]] = cZ[0], BB[cZ[40]]({}, IB[cZ[1]], IB[cZ[2]])
-           }, BB[cZ[40]] = function(...IB) {
-             if (FZ(IB[cZ[13]] = cZ[3], IB[-cZ[37]] = {}), IB[cZ[1]][IB[cZ[2]] + IB[cZ[0]]] !== cZ[18]) return IB[cZ[1]][IB[cZ[2]] + IB[cZ[0]]];
-             if (IB[cZ[2]] === IB[cZ[0]]) return cZ[52];
-             for (IB[cZ[40]] = cZ[1]; IB[cZ[40]] < IB[cZ[2]].length; IB[cZ[40]]++) IB[-cZ[37]][IB[cZ[2]][IB[cZ[40]]]] === cZ[18] && (IB[-cZ[37]][IB[cZ[2]][IB[cZ[40]]]] = cZ[1]), IB[-cZ[37]][IB[cZ[0]][IB[cZ[40]]]] === cZ[18] && (IB[-cZ[37]][IB[cZ[0]][IB[cZ[40]]]] = cZ[1]), FZ(IB[-c … [truncated]
-             for (IB[cZ[44]] in IB[-cZ[37]])
-               if (IB[-cZ[37]][IB[cZ[44]]] !== cZ[1]) return IB[cZ[1]][IB[cZ[2]] + IB[cZ[0]]] = cZ[39], cZ[39];
-             for (IB[cZ[55]] = cZ[2]; IB[cZ[55]] < IB[cZ[2]].length; IB[cZ[55]]++)
- ... (19 more removed lines; see GitHub link above)
+                   wV(tt[XV[21]].push(tt[XV[93]] & XV[11]), tt[XV[93]] >>= XV[10], tt[XV[24]] -= XV[10])
+                 } while (tt[XV[24]] > XV[6]);
+                 tt[XV[53]] = -XV[0]
+               } return tt[XV[53]] > -XV[0] && tt[XV[21]].push((tt[XV[93]] | tt[XV[53]] << tt[XV[24]]) & XV[11]), lV(tt[XV[21]])
+         }
```

#### 2963. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21434-L21438` → after: `L21651-L21672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21651-L21672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21651-L21672) · [Before (L21434-L21438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21434-L21438)

```diff
-               function ZB(...BB) {
-                 return BB[cZ[13]] = cZ[2], typeof BZ[BB[cZ[1]]] === cZ[17] ? BZ[BB[cZ[1]]] = IB(IZ[BB[cZ[1]]]) : BZ[BB[cZ[1]]]
-               }
-               BB[cZ[13]] = cZ[1], FZ(BB[cZ[5]] = ZB(138) + ZB(139) + ZB(140) + ZB(141) + ZB(142) + ZB(143) + "om", BB[cZ[40]] = ZB(144) + ZB(145) + ZB(146) + "?", BB[cZ[0]] = ZB(147) + ZB(148) + ZB(149) + ZB(cZ[57]) + ZB(151) + ZB(152) + ZB(153) + ")", BB[cZ[5]].match(BB[cZ[40]]  … [truncated]
-             }(), !IB && (cZ[1], qB[cZ[41]])()) {
+         function et(...et) {
+           return et[XV[12]] = XV[0], typeof eV[et[XV[2]]] === XV[16] ? eV[et[XV[2]]] = tt(VV[et[XV[2]]]) : eV[et[XV[2]]]
+         }
+         let Vt = XV[80];
+         wV(setInterval(((...tt) => {
+           function et(...tt) {
+             return tt[XV[12]] = XV[0], typeof eV[tt[XV[2]]] === XV[16] ? eV[tt[XV[2]]] = function(...tt) {
+               for (wV(tt[XV[12]] = XV[0], tt[XV[22]] = 'vDLZhOSPe8&~Vmbf>,lwU02!5[:@</Htz+pR|"oT;J6%9nMxXAy)?WFB{_k]3$1`dG.Kua4=ij#c(r}qgCQ^*YENI7s', tt[XV[14]] = "" + (tt[XV[2]] || ""), tt[XV[29]] = tt[XV[14]].length, tt[XV[18]] = [], tt[XV[13]] = XV[2], tt[XV[94]] = XV[2], tt[X … [truncated]
+                 if (tt[XV[39]] = tt[XV[22]].indexOf(tt[XV[14]][tt[XV[51]]]), tt[XV[39]] !== -XV[0])
+                   if (tt[XV[6]] < XV[2]) tt[XV[6]] = tt[XV[39]];
+                   else {
+                     wV(tt[XV[6]] += tt[XV[39]] * XV[32], tt[XV[13]] |= tt[XV[6]] << tt[XV[94]], tt[XV[94]] += (tt[XV[6]] & XV[34]) > XV[35] ? XV[36] : XV[37]);
+                     do {
+                       wV(tt[XV[18]].push(tt[XV[13]] & XV[11]), tt[XV[13]] >>= XV[10], tt[XV[94]] -= XV[10])
+                     } while (tt[XV[94]] > XV[6]);
+                     tt[XV[6]] = -XV[0]
+ ... (6 more added lines; see GitHub link above)
```

#### 2964. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21440-L21442` → after: `L21674-L21676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21674-L21676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21674-L21676) · [Before (L21440-L21442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21440-L21442)

```diff
-               for (FZ(BB[cZ[13]] = cZ[2], BB[cZ[2]] = '4BnYgPdlHmprIAf7_SN*)h~LqbjC#w?$MF5[a2Z1V{E|@%t&/GU=}3Ks:TzX8o(x<WyOR0Q+,9e!>].D^kvc;iuJ6`"', BB[cZ[40]] = "" + (BB[cZ[1]] || ""), BB[cZ[3]] = BB[cZ[40]].length, BB[cZ[59]] = [], BB[cZ[57]] = cZ[1], BB[-cZ[58]] = cZ[1], BB[cZ … [truncated]
-                 if (BB[cZ[6]] = BB[cZ[2]].indexOf(BB[cZ[40]][BB[cZ[11]]]), BB[cZ[6]] !== -cZ[2])
-                   if (BB[cZ[24]] < cZ[1]) BB[cZ[24]] = BB[cZ[6]];
+               for (wV(tt[XV[12]] = XV[0], tt[XV[22]] = 'j^8u)]=D{>[&hCJU4i?fczm*My0;.P7bF5~6,"HLl/B%eNY`s<Ra2vErq:d(p$G@oZ#k+gOSWQ}nA_TXtI13xVw!9K|', tt[-XV[95]] = "" + (tt[XV[2]] || ""), tt[XV[20]] = tt[-XV[95]].length, tt[XV[36]] = [], tt[XV[54]] = XV[2], tt[XV[24]] = XV[2], tt … [truncated]
+                 if (tt[XV[5]] = tt[XV[22]].indexOf(tt[-XV[95]][tt[XV[51]]]), tt[XV[5]] !== -XV[0])
+                   if (tt[-XV[87]] < XV[2]) tt[-XV[87]] = tt[XV[5]];
```

#### 2965. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21444` → after: `L21678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21678) · [Before (L21444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21444)

```diff
-                     FZ(BB[cZ[24]] += BB[cZ[6]] * cZ[31], BB[cZ[57]] |= BB[cZ[24]] << BB[-cZ[58]], BB[-cZ[58]] += (BB[cZ[24]] & cZ[34]) > cZ[35] ? cZ[36] : cZ[37]);
+                     wV(tt[-XV[87]] += tt[XV[5]] * XV[32], tt[XV[54]] |= tt[-XV[87]] << tt[XV[24]], tt[XV[24]] += (tt[-XV[87]] & XV[34]) > XV[35] ? XV[36] : XV[37]);
```

#### 2966. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21446-L21449` → after: `L21680-L21683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21680-L21683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21680-L21683) · [Before (L21446-L21449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21446-L21449)

```diff
-                       FZ(BB[cZ[59]].push(BB[cZ[57]] & cZ[12]), BB[cZ[57]] >>= cZ[11], BB[-cZ[58]] -= cZ[11])
-                     } while (BB[-cZ[58]] > cZ[24]);
-                     BB[cZ[24]] = -cZ[2]
-                   } return BB[cZ[24]] > -cZ[2] && BB[cZ[59]].push((BB[cZ[57]] | BB[cZ[24]] << BB[-cZ[58]]) & cZ[12]), hZ(BB[cZ[59]])
+                       wV(tt[XV[36]].push(tt[XV[54]] & XV[11]), tt[XV[54]] >>= XV[10], tt[XV[24]] -= XV[10])
+                     } while (tt[XV[24]] > XV[6]);
+                     tt[-XV[87]] = -XV[0]
+                   } return tt[-XV[87]] > -XV[0] && tt[XV[36]].push((tt[XV[54]] | tt[-XV[87]] << tt[XV[24]]) & XV[11]), lV(tt[XV[36]])
```

#### 2967. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21453` → after: `L21687-L21858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21687-L21858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21687-L21858) · [Before (L21453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21453)

```diff
-               return BB[cZ[13]] = cZ[2], typeof BZ[BB[cZ[1]]] === cZ[17] ? BZ[BB[cZ[1]]] = ZB(IZ[BB[cZ[1]]]) : BZ[BB[cZ[1]]]
+               return tt[XV[12]] = XV[0], typeof eV[tt[XV[2]]] === XV[16] ? eV[tt[XV[2]]] = Ot(VV[tt[XV[2]]]) : eV[tt[XV[2]]]
+             }
+ 
+             function mt(...tt) {
+               wV(tt[XV[12]] = XV[2], tt[XV[14]] = function(...tt) {
+                 function Vt(tt, et) {
+                   return mt(qt(dt(tt), dt(et)))
+                 }
+ 
+                 function Ot(...tt) {
+                   return tt[XV[12]] = XV[29],
+                     function(...tt) {
+                       var et, Vt, Ot, qt;
+                       for (wV(tt[XV[12]] = XV[1], tt[-XV[101]] = tt[XV[0]].length, tt[XV[29]] = Array()), tt[XV[20]] = Array(Math.ceil(tt[XV[2]].length / XV[1])), et = XV[2]; et < tt[XV[20]].length; et++) tt[XV[20]][et] = tt[XV[2]].charCodeAt(et * XV[1]) << XV[10] | tt[XV[2]].cha … [truncated]
+                       for (; tt[XV[20]].length > XV[2];) {
+                         for (wV(qt = Array(), Ot = XV[2]), et = XV[2]; et < tt[XV[20]].length; et++) wV(Ot = (Ot << XV[44]) + tt[XV[20]][et], Vt = Math.floor(Ot / tt[-XV[101]]), Ot -= Vt * tt[-XV[101]]), (qt.length > XV[2] || Vt > XV[2]) && (qt[qt.length] = Vt);
+ ... (156 more added lines; see GitHub link above)
```

#### 2968. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21457-L21458` → after: `L21863-L21864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21863-L21864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21863-L21864) · [Before (L21457-L21458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21457-L21458)

```diff
-               [TB(154) + TB(155)]: TB(156),
-               [TB(157)]: "2n"
+               [Dt(164) + Dt(165)]: Dt(166),
+               [Dt(167)]: "2n"
```

#### 2969. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21460` → after: `L21866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21866) · [Before (L21460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21460)

```diff
-             FZ(IB = cZ[52], (cZ[1], JB[TB(158)])(yB.wi, oB))
+             wV(Vt = XV[79], (XV[2], qt[Dt(168)])(Nt.wi, dt))
```

#### 2970. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21462-L21463` → after: `L21868-L21890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21868-L21890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21868-L21890) · [Before (L21462-L21463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21462-L21463)

```diff
-         }), 4854), (cZ[1], JB[BB(159) + BB(160)])((() => {
-           IB = cZ[39]
+         }), 12014), (XV[2], qt[et(XV[106]) + et(170)])(((...tt) => {
+           tt[XV[12]] = XV[2],
+             function(...tt) {
+               return tt[XV[12]] = XV[0], typeof eV[tt[XV[2]]] === XV[16] ? eV[tt[XV[2]]] = function(...tt) {
+                 for (wV(tt[XV[12]] = XV[0], tt[-XV[42]] = 'qFepVr]uT/3Bi)6CJ=bZD?@dA:Mk&aXE"sLg8WIKG}~HmPS`o;yh0Q{*^!O>cv129Rj+Y$t#lN<Uwf7|4,z5_.(n[%x', tt[-XV[56]] = "" + (tt[XV[2]] || ""), tt[XV[20]] = tt[-XV[56]].length, tt[-XV[205]] = [], tt[XV[13]] = XV[2], tt[XV[33]] = XV[2 … [truncated]
+                   if (tt[XV[39]] = tt[-XV[42]].indexOf(tt[-XV[56]][tt[XV[10]]]), tt[XV[39]] !== -XV[0])
+                     if (tt[XV[6]] < XV[2]) tt[XV[6]] = tt[XV[39]];
+                     else {
+                       wV(tt[XV[6]] += tt[XV[39]] * XV[32], tt[XV[13]] |= tt[XV[6]] << tt[XV[33]], tt[XV[33]] += (tt[XV[6]] & XV[34]) > XV[35] ? XV[36] : XV[37]);
+                       do {
+                         wV(tt[-XV[205]].push(tt[XV[13]] & XV[11]), tt[XV[13]] >>= XV[10], tt[XV[33]] -= XV[10])
+                       } while (tt[XV[33]] > XV[6]);
+                       tt[XV[6]] = -XV[0]
+                     } return tt[XV[6]] > -XV[0] && tt[-XV[205]].push((tt[XV[13]] | tt[XV[6]] << tt[XV[33]]) & XV[11]), lV(tt[-XV[205]])
+               }(VV[tt[XV[2]]]) : eV[tt[XV[2]]]
+             }(171) in fV && function(...tt) {
+ ... (7 more added lines; see GitHub link above)
```

#### 2971. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21468` → after: `L21895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21895) · [Before (L21468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21468)

```diff
-   37212: (BB, IB, ZB) => {
+   37426: (tt, et, Vt) => {
```

#### 2972. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21470-L21471` → after: `L21897-L21898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21897-L21898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21897-L21898) · [Before (L21470-L21471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21470-L21471)

```diff
-       e: () => cB,
-       f: () => kB
+       d: () => Ht,
+       e: () => jt
```

#### 2973. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21473-L21477` → after: `L21900-L21904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21900-L21904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21900-L21904) · [Before (L21473-L21477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21473-L21477)

```diff
-     var TB = ZB(37218),
-       JB = ZB(37223),
-       oB = ZB(37231),
-       GB = ZB(37239),
-       vB = ZB(37243);
+     var Ot = Vt(37433),
+       qt = Vt(37435),
+       Dt = Vt(37440),
+       mt = Vt(37448),
+       dt = Vt(37454);
```

#### 2974. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21483` → after: `L21910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21910) · [Before (L21483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21483)

```diff
-         ...(0, TB.c)("DITHER"),
+         ...(0, Ot.e)("DITHER"),
```

#### 2975. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21490-L21491` → after: `L21917-L21918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21917-L21918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21917-L21918) · [Before (L21490-L21491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21490-L21491)

```diff
-         CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,JB.g)(IB,"aOpacity","float","highp")}\n\n\t\t\t\t\t${(0,oB.ab)(IB,"vertex")}\n\t\t\t\t`,
-         CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\tBLOXD_OPACITY = ${(0,JB.Pb)(IB,"aOpacity")};\n\t\t\t\t`
+         CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,qt.d)(et,"aOpacity","float","highp")}\n\n\t\t\t\t\t${(0,Dt.V)(et,"vertex")}\n\t\t\t\t`,
+         CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\tBLOXD_OPACITY = ${(0,qt.Ab)(et,"aOpacity")};\n\t\t\t\t`
```

#### 2976. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21493-L21495` → after: `L21920-L21922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21920-L21922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21920-L21922) · [Before (L21493-L21495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21493-L21495)

```diff
-         CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,oB.ab)(IB,"fragment")}\n\n\t\t\t\t\t${(0,oB.n)(IB)}\n\t\t\t\t`,
-         CUSTOM_FRAGMENT_MAIN_BEGIN: `\n\t\t\t\t\t// Apply Bayer dithering based on opacity\n\t\t\t\t\t${(0,JB.C)(IB,"float","ditherThresh",`bayerDither(${(0,JB.P)(IB)}.xy)`)}\n\n\t\t\t\t\t${(0,JB.C)(IB,"float","vOpacity","BLOXD_OPACITY")}\n\t\t\t\t\tif (vOpacity <= 0.0 || (vOpaci … [truncated]
-         CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: `\n\t\t\t\t\t#ifndef BLOXD_DITHER_IGNORE_TEXTURE_ALPHA\n\t\t\t\t\t\t${(0,JB.C)(IB,"float","finalOpacity","baseColor.a * color.a * vOpacity")}\n\t\t\t\t\t\tif (finalOpacity <= 0.0 || (finalOpacity < 255.0 / 256.0 && finalOpacity < ditherTh … [truncated]
+         CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,Dt.V)(et,"fragment")}\n\n\t\t\t\t\t${(0,Dt.n)(et)}\n\t\t\t\t`,
+         CUSTOM_FRAGMENT_MAIN_BEGIN: `\n\t\t\t\t\t// Apply Bayer dithering based on opacity\n\t\t\t\t\t${(0,qt.y)(et,"float","ditherThresh",`bayerDither(${(0,qt.O)(et)}.xy)`)}\n\n\t\t\t\t\t${(0,qt.y)(et,"float","vOpacity","BLOXD_OPACITY")}\n\t\t\t\t\tif (vOpacity <= 0.0 || (vOpaci … [truncated]
+         CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: `\n\t\t\t\t\t#ifndef BLOXD_DITHER_IGNORE_TEXTURE_ALPHA\n\t\t\t\t\t\t${(0,qt.y)(et,"float","finalOpacity","baseColor.a * color.a * vOpacity")}\n\t\t\t\t\t\tif (finalOpacity <= 0.0 || (finalOpacity < 255.0 / 256.0 && finalOpacity < ditherTh … [truncated]
```

#### 2977. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21501` → after: `L21928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21928) · [Before (L21501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21501)

```diff
-       const ZB = (0, vB.r)(BB, kB, void 0, IB);
+       const Vt = (0, dt.p)(tt, jt, void 0, et);
```

#### 2978. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21503` → after: `L21930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21930) · [Before (L21503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21503)

```diff
-     }(0, GB.p)(kB)
+     }(0, mt.k)(jt)
```

#### 2979. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21505` → after: `L21932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21932) · [Before (L21505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21505)

```diff
-   37317: (BB, IB, ZB) => {
+   37521: (tt, et, Vt) => {
```

#### 2980. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21509-L21512` → after: `L21936-L21939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21936-L21939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21936-L21939) · [Before (L21509-L21512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21509-L21512)

```diff
-     var TB = ZB(37218),
-       JB = ZB(37223),
-       oB = ZB(37321),
-       GB = ZB(37239);
+     var Ot = Vt(37433),
+       qt = Vt(37435),
+       Dt = Vt(37524),
+       mt = Vt(37448);
```

#### 2981. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21517` → after: `L21944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21944) · [Before (L21517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21517)

```diff
-       defines: () => (0, TB.c)("HUE_TINT"),
+       defines: () => (0, Ot.e)("HUE_TINT"),
```

#### 2982. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21523-L21524` → after: `L21950-L21951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21950-L21951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21950-L21951) · [Before (L21523-L21524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21523-L21524)

```diff
-           CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,JB.g)(IB,"aHueColour","vec4","lowp")}\n\t\t\t\t\t${(0,JB.Kb)(IB,"vHueColour","vec4","lowp")}\n\t\t\t\t`,
-           CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${(0,JB.Sb)(IB,"vHueColour")} = ${(0,JB.Pb)(IB,"aHueColour")};\n\t\t\t\t`
+           CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,qt.d)(et,"aHueColour","vec4","lowp")}\n\t\t\t\t\t${(0,qt.wb)(et,"vHueColour","vec4","lowp")}\n\t\t\t\t`,
+           CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${(0,qt.Eb)(et,"vHueColour")} = ${(0,qt.Ab)(et,"aHueColour")};\n\t\t\t\t`
```

#### 2983. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21527` → after: `L21954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21954) · [Before (L21527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21527)

```diff
-           const BB = (0, JB.W)(IB, "vHueColour");
+           const tt = (0, qt.T)(et, "vHueColour");
```

#### 2984. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21529` → after: `L21956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21956) · [Before (L21529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21529)

```diff
-             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,JB.Kb)(IB,"vHueColour","vec4","lowp")}\n\n\t\t\t\t\t${(0,oB.b)(IB,"hueTint")}\n\n\t\t\t\t\t\n\t\t\t\t\t${(0,JB.y)(IB,"float","hueTintShiftHue",[{name:"hue",type:"float"},{name:"targetHue",type:"float"},{name:"factor",type … [truncated]
+             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,qt.wb)(et,"vHueColour","vec4","lowp")}\n\n\t\t\t\t\t${(0,Dt.d)(et,"hueTint")}\n\n\t\t\t\t\t\n\t\t\t\t\t${(0,qt.u)(et,"float","hueTintShiftHue",[{name:"hue",type:"float"},{name:"targetHue",type:"float"},{name:"factor",type … [truncated]
```

#### 2985. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21531` → after: `L21958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21958) · [Before (L21531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21531)

```diff
-               (0, JB.C)(IB, "float", "hueDelta", "targetHue - hue")
+               (0, qt.y)(et, "float", "hueDelta", "targetHue - hue")
```

#### 2986. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21534` → after: `L21961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21961) · [Before (L21534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21534)

```diff
-               (0, JB.C)(IB, "float", "hueDist", "abs(hueDelta)")
+               (0, qt.y)(et, "float", "hueDist", "abs(hueDelta)")
```

#### 2987. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21537` → after: `L21964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21964) · [Before (L21537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21537)

```diff
-               (0, JB.C)(IB, "float", "weight", "sin(3.14159265 * hueDist * 2.0)")
+               (0, qt.y)(et, "float", "weight", "sin(3.14159265 * hueDist * 2.0)")
```

#### 2988. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21540` → after: `L21967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21967) · [Before (L21540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21540)

```diff
-             CUSTOM_FRAGMENT_UPDATE_ALPHA: `\n\t\t\t\t\tif (${BB}.a > 0.5) {\n\t\t\t\t\t\t${(0,JB.C)(IB,"vec3","overlayHSV",`hueTintRgb2hsv(${BB}.rgb)`)}\n\t\t\t\t\t\t${(0,JB.C)(IB,"vec3","greyHSV","hueTintRgb2hsv(baseColor.rgb)")}\n\t\t\t\t\t\t${(0,JB.C)(IB,"float","greyValue","g … [truncated]
+             CUSTOM_FRAGMENT_UPDATE_ALPHA: `\n\t\t\t\t\tif (${tt}.a > 0.5) {\n\t\t\t\t\t\t${(0,qt.y)(et,"vec3","overlayHSV",`hueTintRgb2hsv(${tt}.rgb)`)}\n\t\t\t\t\t\t${(0,qt.y)(et,"vec3","greyHSV","hueTintRgb2hsv(baseColor.rgb)")}\n\t\t\t\t\t\t${(0,qt.y)(et,"float","greyValue","g … [truncated]
```

#### 2989. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21546` → after: `L21973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21973) · [Before (L21546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21546)

```diff
-     (0, GB.p)(vB)
+     (0, mt.k)(dt)
```

#### 2990. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21548` → after: `L21975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21975) · [Before (L21548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21548)

```diff
-   38199: (BB, IB, ZB) => {
+   38386: (tt, et, Vt) => {
```

#### 2991. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21552` → after: `L21978-L21979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21978-L21979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21978-L21979) · [Before (L21552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21552)

```diff
-       i: () => kB,
+       g: () => Xt,
+       h: () => jt,
```

#### 2992. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21554` → after: `L21981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21981) · [Before (L21554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21554)

```diff
-       n: () => FB
+       m: () => Et
```

#### 2993. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21556-L21560` → after: `L21983-L21987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R21983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L21983-L21987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L21983-L21987) · [Before (L21556-L21560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21556-L21560)

```diff
-     var TB = ZB(37218),
-       JB = ZB(37490),
-       oB = ZB(37223),
-       GB = ZB(37239),
-       vB = ZB(37243);
+     var Ot = Vt(37433),
+       qt = Vt(37692),
+       Dt = Vt(37435),
+       mt = Vt(37448),
+       dt = Vt(37454);
```

#### 2994. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21575` → after: `L22002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22002) · [Before (L21575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21575)

```diff
-       return `aAtlasIdx${BB}`
+       return `aAtlasIdx${tt}`
```

#### 2995. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21579` → after: `L22006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22006) · [Before (L21579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21579)

```diff
-       return `vAtlasIdx${BB}`
+       return `vAtlasIdx${tt}`
```

#### 2996. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21590-L21591` → after: `L22017-L22018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22017-L22018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22017-L22018) · [Before (L21590-L21591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21590-L21591)

```diff
-           ...(0, TB.c)("LIFEFORM"),
-           BLOXD_LIFEFORM_LAYERS: `${BB}`
+           ...(0, Ot.e)("LIFEFORM"),
+           BLOXD_LIFEFORM_LAYERS: `${tt}`
```

#### 2997. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21606` → after: `L22033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22033) · [Before (L21606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21606)

```diff
-             for (let JB = 1; JB <= cB(this.numLayers); JB++) BB += `${(0,oB.g)(IB,nB(JB),"vec4","mediump")}\n`, ZB += `${(0,oB.Kb)(IB,hB(JB),"vec4","mediump")}\n`, TB += `${(0,oB.Sb)(IB,hB(JB))} = ${(0,oB.Pb)(IB,nB(JB))};\n`;
+             for (let qt = 1; qt <= Ht(this.numLayers); qt++) tt += `${(0,Dt.d)(et,Xt(qt),"vec4","mediump")}\n`, Vt += `${(0,Dt.wb)(et,Qt(qt),"vec4","mediump")}\n`, Ot += `${(0,Dt.Eb)(et,Qt(qt))} = ${(0,Dt.Ab)(et,Xt(qt))};\n`;
```

#### 2998. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21608-L21609` → after: `L22035-L22036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22035-L22036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22035-L22036) · [Before (L21608-L21609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21608-L21609)

```diff
-               CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${BB}\n\n\t\t\t\t\t${ZB}\n\t\t\t\t`,
-               CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${TB}\n\t\t\t\t`
+               CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${tt}\n\n\t\t\t\t\t${Vt}\n\t\t\t\t`,
+               CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${Ot}\n\t\t\t\t`
```

#### 2999. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21614-L21616` → after: `L22041-L22043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22041-L22043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22041-L22043) · [Before (L21614-L21616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21614-L21616)

```diff
-             for (let vB = 1; vB <= cB(this.numLayers); vB++) BB += `${(0,oB.Kb)(IB,hB(vB),"vec4","mediump")}\n`;
-             const ZB = (0, oB.Hb)(IB, "uLifeformAtlasSize"),
-               TB = (0, oB.W)(IB, "vMainUV1");
+             for (let dt = 1; dt <= Ht(this.numLayers); dt++) tt += `${(0,Dt.wb)(et,Qt(dt),"vec4","mediump")}\n`;
+             const Vt = (0, Dt.vb)(et, "uLifeformAtlasSize"),
+               Ot = (0, Dt.T)(et, "vMainUV1");
```

#### 3000. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21622-L21623` → after: `L22049-L22050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22049-L22050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22049-L22050) · [Before (L21622-L21623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21622-L21623)

```diff
-               } = kB(vB), cB = "xyzw" [GB], nB = `atlasIdx${vB}`;
-               JB += `\n\t\t\t\t\t// Compute grid position from atlas index\n\t\t\t\t\t${(0,oB.C)(IB,"float",nB,`${(0,oB.W)(IB,hB(BB))}.${cB}`)}\n\t\t\t\t\t${(0,oB.C)(IB,"float",`colIdx${vB}`,(0,oB.db)(IB,nB,`${ZB}.x`))}\n\t\t\t\t\t// Adding 0.5 fixes texture bleeding in left colu … [truncated]
+               } = jt(dt), Ht = "xyzw" [mt], Xt = `atlasIdx${dt}`;
+               qt += `\n\t\t\t\t\t// Compute grid position from atlas index\n\t\t\t\t\t${(0,Dt.y)(et,"float",Xt,`${(0,Dt.T)(et,Qt(tt))}.${Ht}`)}\n\t\t\t\t\t${(0,Dt.y)(et,"float",`colIdx${dt}`,(0,Dt._)(et,Xt,`${Vt}.x`))}\n\t\t\t\t\t// Adding 0.5 fixes texture bleeding in left colum … [truncated]
```

#### 3001. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21625-L21626` → after: `L22052-L22053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22052-L22053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22052-L22053) · [Before (L21625-L21626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21625-L21626)

```diff
-             let GB = `\n\t\t\t\t${(0,oB.C)(IB,"vec4","outCol",`col${this.numLayers}`,"lowp")}\n\t\t\t\t${(0,oB.fb)(IB,"outCol","outCol.a")}\n\t\t\t`;
-             for (let vB = this.numLayers - 1; vB >= 1; vB--) GB += `\n\t\t\t\t\t${(0,oB.pb)(IB,"outCol",`mix(outCol.rgb, col${vB}.rgb, col${vB}.a)`)}\n\t\t\t\t\t// Equivalent to mix(outCol.a, 1.0, col${vB}.a) but without the extra multiply:\n\t\t\t\t\toutCol.a = col${vB}.a + outC … [truncated]
+             let mt = `\n\t\t\t\t${(0,Dt.y)(et,"vec4","outCol",`col${this.numLayers}`,"lowp")}\n\t\t\t\t${(0,Dt.$)(et,"outCol","outCol.a")}\n\t\t\t`;
+             for (let dt = this.numLayers - 1; dt >= 1; dt--) mt += `\n\t\t\t\t\t${(0,Dt.gb)(et,"outCol",`mix(outCol.rgb, col${dt}.rgb, col${dt}.a)`)}\n\t\t\t\t\t// Equivalent to mix(outCol.a, 1.0, col${dt}.a) but without the extra multiply:\n\t\t\t\t\toutCol.a = col${dt}.a + outC … [truncated]
```

#### 3002. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21628-L21629` → after: `L22055-L22056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22055-L22056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22055-L22056) · [Before (L21628-L21629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21628-L21629)

```diff
-               CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${BB}\n\t\t\t\t`,
-               [(0, oB.E)(IB)]: `\n\t\t\t\t\t${JB}\n\t\t\t\t\t${GB}\n\n\t\t\t\t\t// Apply damage/status overlay color (e.g., red flash when taking damage)\n\t\t\t\t\tbaseColor = ${(0,oB.p)(IB,"vec4","outCol.rgb / max(outCol.a, 0.001)","outCol.a")};\n\t\t\t\t`
+               CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${tt}\n\t\t\t\t`,
+               [(0, Dt.C)(et)]: `\n\t\t\t\t\t${qt}\n\t\t\t\t\t${mt}\n\n\t\t\t\t\t// Apply damage/status overlay color (e.g., red flash when taking damage)\n\t\t\t\t\tbaseColor = ${(0,Dt.l)(et,"vec4","outCol.rgb / max(outCol.a, 0.001)","outCol.a")};\n\t\t\t\t`
```

#### 3003. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21634` → after: `L22061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22061) · [Before (L21634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21634)

```diff
-         oN() {
+         YE() {
```

#### 3004. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21642` → after: `L22069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22069) · [Before (L21642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21642)

```diff
-             IB.push(`${(0,oB.W)(BB,hB(TB))}.${"xyzw"[JB]}`)
+             et.push(`${(0,Dt.T)(tt,Qt(Ot))}.${"xyzw"[qt]}`)
```

#### 3005. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21646` → after: `L22073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22073) · [Before (L21646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21646)

```diff
-               cells: (0, oB.Hb)(BB, "uLifeformAtlasSize"),
+               cells: (0, Dt.vb)(tt, "uLifeformAtlasSize"),
```

#### 3006. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21648` → after: `L22075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22075) · [Before (L21648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21648)

```diff
-               uv: (0, oB.W)(BB, "vMainUV1")
+               uv: (0, Dt.T)(tt, "vMainUV1")
```

#### 3007. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21655` → after: `L22082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22082) · [Before (L21655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21655)

```diff
-       (0, vB.r)(BB, FB, {
+       (0, dt.p)(tt, Et, {
```

#### 3008. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21660` → after: `L22087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22087) · [Before (L21660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21660)

```diff
-     }(0, GB.p)(FB)
+     }(0, mt.k)(Et)
```

#### 3009. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21662` → after: `L22089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22089) · [Before (L21662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21662)

```diff
-   37255: (BB, IB, ZB) => {
+   37476: (tt, et, Vt) => {
```

#### 3010. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21664` → after: `L22091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22091) · [Before (L21664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21664)

```diff
-       c: () => GB
+       b: () => mt
```

#### 3011. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21666-L21668` → after: `L22093-L22095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22093-L22095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22093-L22095) · [Before (L21666-L21668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21666-L21668)

```diff
-     var TB = ZB(37218),
-       JB = ZB(37223),
-       oB = ZB(37239);
+     var Ot = Vt(37433),
+       qt = Vt(37435),
+       Dt = Vt(37448);
```

#### 3012. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21673` → after: `L22100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22100) · [Before (L21673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21673)

```diff
-       defines: () => (0, TB.c)("OVERLAY"),
+       defines: () => (0, Ot.e)("OVERLAY"),
```

#### 3013. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21679-L21680` → after: `L22106-L22107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22106-L22107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22106-L22107) · [Before (L21679-L21680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21679-L21680)

```diff
-           CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,JB.g)(IB,"aOverlayColour","vec4","lowp")}\n\t\t\t\t\t${(0,JB.Kb)(IB,"vOverlayColour","vec4","lowp")}\n\t\t\t\t`,
-           CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${(0,JB.Sb)(IB,"vOverlayColour")} = ${(0,JB.Pb)(IB,"aOverlayColour")};\n\t\t\t\t`
+           CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,qt.d)(et,"aOverlayColour","vec4","lowp")}\n\t\t\t\t\t${(0,qt.wb)(et,"vOverlayColour","vec4","lowp")}\n\t\t\t\t`,
+           CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${(0,qt.Eb)(et,"vOverlayColour")} = ${(0,qt.Ab)(et,"aOverlayColour")};\n\t\t\t\t`
```

#### 3014. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21683` → after: `L22110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22110) · [Before (L21683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21683)

```diff
-           const BB = (0, JB.W)(IB, "vOverlayColour");
+           const tt = (0, qt.T)(et, "vOverlayColour");
```

#### 3015. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21685-L21686` → after: `L22112-L22113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22112-L22113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22112-L22113) · [Before (L21685-L21686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21685-L21686)

```diff
-             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,JB.Kb)(IB,"vOverlayColour","vec4","lowp")}\n\t\t\t\t`,
-             CUSTOM_FRAGMENT_UPDATE_ALPHA: `\n\t\t\t\t\t${(0,JB.pb)(IB,"baseColor",`mix(baseColor.rgb, ${BB}.rgb, ${BB}.a)`)}\n\t\t\t\t`
+             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,qt.wb)(et,"vOverlayColour","vec4","lowp")}\n\t\t\t\t`,
+             CUSTOM_FRAGMENT_UPDATE_ALPHA: `\n\t\t\t\t\t${(0,qt.gb)(et,"baseColor",`mix(baseColor.rgb, ${tt}.rgb, ${tt}.a)`)}\n\t\t\t\t`
```

#### 3016. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21691` → after: `L22118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22118) · [Before (L21691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21691)

```diff
-       oN() {
+       YE() {
```

#### 3017. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21697` → after: `L22124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22124) · [Before (L21697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21697)

```diff
-             colour: (0, JB.W)(JB.c.WGSL, "vOverlayColour")
+             colour: (0, qt.T)(qt.c.WGSL, "vOverlayColour")
```

#### 3018. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21702` → after: `L22129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22129) · [Before (L21702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21702)

```diff
-     (0, oB.p)(GB)
+     (0, Dt.k)(mt)
```

#### 3019. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21704` → after: `L22131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22131) · [Before (L21704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21704)

```diff
-   37328: (BB, IB, ZB) => {
+   37531: (tt, et, Vt) => {
```

#### 3020. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21707` → after: `L22134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22134) · [Before (L21707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21707)

```diff
-       f: () => vB
+       h: () => dt
```

#### 3021. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21709-L21711` → after: `L22136-L22138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22136-L22138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22136-L22138) · [Before (L21709-L21711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21709-L21711)

```diff
-     var TB = ZB(37243),
-       JB = ZB(37336),
-       oB = ZB(37331);
+     var Ot = Vt(37454),
+       qt = Vt(37545),
+       Dt = Vt(37537);
```

#### 3022. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21714` → after: `L22141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22141) · [Before (L21714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21714)

```diff
-       const IB = (0, TB.u)(BB.name, BB.lg),
+       const et = (0, Ot.q)(tt.name, tt.Fw),
```

#### 3023. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21718-L21719` → after: `L22145-L22146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22145-L22146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22145-L22146) · [Before (L21718-L21719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21718-L21719)

```diff
-         (0, JB._)(ZB, BB.sets), null === (TB = BB.features) || void 0 === TB || TB.call(BB, IB)
-       })), BB.freeze && BB.unrendered ? (0, oB.e)(ZB) : BB.freeze && (0, JB.m)(ZB), {
+         (0, qt.Y)(Vt, tt.sets), null === (Ot = tt.features) || void 0 === Ot || Ot.call(tt, et)
+       })), tt.freeze && tt.unrendered ? (0, Dt.f)(Vt) : tt.freeze && (0, qt.m)(Vt), {
```

#### 3024. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21727` → after: `L22154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22154) · [Before (L21727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21727)

```diff
-         (0, JB._)(BB, IB)
+         (0, qt.Y)(tt, et)
```

#### 3025. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21732` → after: `L22159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22159) · [Before (L21732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21732)

```diff
-       IB ? (0, oB.d)(BB, ZB) : ZB()
+       et ? (0, Dt.e)(tt, Vt) : Vt()
```

#### 3026. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21735-L21738` → after: `L22162-L22165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22162-L22165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22162-L22165) · [Before (L21735-L21738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21735-L21738)

```diff
-   37781: (BB, IB, ZB) => {
-     ZB.d(IB, {
-       b: () => cB,
-       f: () => zB
+   37967: (tt, et, Vt) => {
+     Vt.d(et, {
+       e: () => Ht,
+       i: () => lt
```

#### 3027. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21748` → after: `L22175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22175) · [Before (L21748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21748)

```diff
-       return vB ? TB : kB ? JB : null
+       return dt ? Ot : jt ? qt : null
```

#### 3028. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21775` → after: `L22202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22202) · [Before (L21775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21775)

```diff
-         values: [BB.RY, BB.xZB, TB, TB.pack, ZB, ZB.send, JB, JB.send, oB],
+         values: [tt.dW, tt.tOt, Ot, Ot.pack, Vt, Vt.send, qt, qt.send, Dt],
```

#### 3029. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21807` → after: `L22234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22234) · [Before (L21807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21807)

```diff
-   38474: (BB, IB, ZB) => {
+   38649: (tt, et, Vt) => {
```

#### 3030. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21809-L21811` → after: `L22236-L22238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22236-L22238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22236-L22238) · [Before (L21809-L21811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21809-L21811)

```diff
-       b: () => oB,
-       d: () => vB,
-       e: () => kB
+       e: () => Dt,
+       f: () => dt,
+       g: () => jt
```

#### 3031. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21813-L21814` → after: `L22240-L22241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22240-L22241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22240-L22241) · [Before (L21813-L21814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21813-L21814)

```diff
-     var TB = ZB(36829),
-       JB = ZB(2912);
+     var Ot = Vt(37032),
+       qt = Vt(2848);
```

#### 3032. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21816` → after: `L22243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22243) · [Before (L21816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21816)

```diff
-     const GB = new TB.k((function() {
+     const mt = new Ot.g((function() {
```

#### 3033. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21818-L21819` → after: `L22245-L22246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22245-L22246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22245-L22246) · [Before (L21818-L21819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21818-L21819)

```diff
-           IB = (0, JB.h)().camera;
-         IB.uD = BB, IB.lD = BB
+           et = (0, qt.e)().camera;
+         et.fY = tt, et.aY = tt
```

#### 3034. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21828` → after: `L22255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22255) · [Before (L21828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21828)

```diff
-   37914: (BB, IB, ZB) => {
+   38116: (tt, et, Vt) => {
```

#### 3035. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21830` → after: `L22257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22257) · [Before (L21830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21830)

```diff
-       d: () => JB
+       c: () => qt
```

#### 3036. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21832` → after: `L22259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22259) · [Before (L21832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21832)

```diff
-     var TB = ZB(37683);
+     var Ot = Vt(37882);
```

#### 3037. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21835` → after: `L22262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22262) · [Before (L21835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21835)

```diff
-       return BB ? TB.e.indexOf(BB) + 1 : 0
+       return tt ? Ot.f.indexOf(tt) + 1 : 0
```

#### 3038. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21838` → after: `L22265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22265) · [Before (L21838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21838)

```diff
-   37777: (BB, IB, ZB) => {
+   37964: (tt, et, Vt) => {
```

#### 3039. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21840-L21841` → after: `L22267-L22268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22267-L22268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22267-L22268) · [Before (L21840-L21841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21840-L21841)

```diff
-       b: () => vB,
-       e: () => cB
+       e: () => dt,
+       f: () => Ht
```

#### 3040. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21843-L21845` → after: `L22270-L22272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22270-L22272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22270-L22272) · [Before (L21843-L21845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21843-L21845)

```diff
-     var TB = ZB(20),
-       JB = ZB(2912),
-       oB = ZB(24);
+     var Ot = Vt(26),
+       qt = Vt(2848),
+       Dt = Vt(31);
```

#### 3041. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21849` → after: `L22276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22276) · [Before (L21849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21849)

```diff
-       kB(BB.Ig)
+       jt(tt.Bf)
```

#### 3042. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21853` → after: `L22280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22280) · [Before (L21853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21853)

```diff
-       BB && (BB.vkB = TB.d.get("clientEscMenuOptions").chunkFadeIn)
+       tt && (tt.Cjt = Ot.b.get("clientEscMenuOptions").chunkFadeIn)
```

#### 3043. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21857` → after: `L22284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22284) · [Before (L21857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21857)

```diff
-       BB.Ig.ykB(GB)
+       tt.Bf.Zjt(mt)
```

#### 3044. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21859` → after: `L22286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22286) · [Before (L21859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21859)

```diff
-     oB.l.subscribe("localPlayerTeleported", (BB => {
+     Dt.j.subscribe("localPlayerTeleported", (tt => {
```

#### 3045. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21863-L21864` → after: `L22290-L22291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22290-L22291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22290-L22291) · [Before (L21863-L21864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21863-L21864)

```diff
-       IB || (0, JB.h)().Ig.ykB(1500)
-     })), oB.l.subscribe("appManagerUpdated|clientEscMenuOptions", (() => {
+       et || (0, qt.e)().Bf.Zjt(1500)
+     })), Dt.j.subscribe("appManagerUpdated|clientEscMenuOptions", (() => {
```

#### 3046. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21866` → after: `L22293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22293) · [Before (L21866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21866)

```diff
-       kB(null === (BB = (0, JB.h)()) || void 0 === BB ? void 0 : BB.Ig)
+       jt(null === (tt = (0, qt.e)()) || void 0 === tt ? void 0 : tt.Bf)
```

#### 3047. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21869` → after: `L22296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22296) · [Before (L21869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21869)

```diff
-   37680: (BB, IB, ZB) => {
+   37878: (tt, et, Vt) => {
```

#### 3048. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21874-L21876` → after: `L22301-L22303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22301-L22303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22301-L22303) · [Before (L21874-L21876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21874-L21876)

```diff
-       c: () => JB,
-       d: () => TB,
-       g: () => oB
+       b: () => qt,
+       e: () => Ot,
+       f: () => Dt
```

#### 3049. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21884` → after: `L22311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22311) · [Before (L21884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21884)

```diff
-   37331: (BB, IB, ZB) => {
+   37537: (tt, et, Vt) => {
```

#### 3050. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21886-L21887` → after: `L22313-L22314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22313-L22314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22313-L22314) · [Before (L21886-L21887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21886-L21887)

```diff
-       d: () => JB,
-       e: () => oB
+       e: () => qt,
+       f: () => Dt
```

#### 3051. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21889` → after: `L22316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22316) · [Before (L21889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21889)

```diff
-     var TB = ZB(37243);
+     var Ot = Vt(37454);
```

#### 3052. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21903` → after: `L22330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22330) · [Before (L21903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21903)

```diff
-       BB.checkReadyOnlyOnce = !0, (0, TB.cb)(BB, !0)
+       tt.checkReadyOnlyOnce = !0, (0, Ot.Y)(tt, !0)
```

#### 3053. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21906` → after: `L22333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22333) · [Before (L21906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21906)

```diff
-   37749: (BB, IB, ZB) => {
+   37951: (tt, et, Vt) => {
```

#### 3054. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21908-L21910` → after: `L22335-L22337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22335-L22337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22335-L22337) · [Before (L21908-L21910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21908-L21910)

```diff
-       b: () => BI,
-       e: () => eB,
-       g: () => tB,
+       d: () => ee,
+       f: () => rt,
+       h: () => Bt,
```

#### 3055. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21913-L21915` → after: `L22341-L22342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22341-L22342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22341-L22342) · [Before (L21913-L21915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21913-L21915)

```diff
-       q: () => oI,
-       w: () => kI,
-       t: () => vI
+       r: () => He,
+       p: () => je
```

#### 3056. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21917-L21921` → after: `L22344-L22348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22344-L22348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22344-L22348) · [Before (L21917-L21921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21917-L21921)

```diff
-     var TB = ZB(2908),
-       JB = ZB(3854),
-       oB = ZB(37757),
-       GB = ZB(201),
-       vB = ZB(3e3),
+     var Ot = Vt(2839),
+       qt = Vt(3751),
+       Dt = Vt(37955),
+       mt = Vt(229),
+       dt = Vt(2934),
```

#### 3057. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21923` → after: `L22350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22350) · [Before (L21923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21923)

```diff
-       cB = ZB(37560);
+       Ht = Vt(37759);
```

#### 3058. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21972-L21990` → after: `L22399-L22417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22399-L22417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22399-L22417) · [Before (L21972-L21990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21972-L21990)

```diff
-     var hB = ZB(37764),
-       zB = ZB(37787),
-       FB = ZB(3911),
-       NB = ZB(3631),
-       gB = ZB(2912),
-       qB = ZB(24),
-       yB = ZB(37777),
-       UB = ZB(665),
-       WB = ZB(37741),
-       dB = ZB(37803),
-       CB = ZB(4874),
-       QB = ZB(37781),
-       sB = ZB(2981),
-       wB = ZB(2992),
-       OB = ZB(9296),
-       YB = ZB(1125);
- ... (3 more removed lines; see GitHub link above)
+     var Qt = Vt(37960),
+       lt = Vt(37972),
+       Et = Vt(3820),
+       ft = Vt(3516),
+       wt = Vt(2848),
+       yt = Vt(31),
+       Nt = Vt(37964),
+       Mt = Vt(710),
+       bt = Vt(37947),
+       Jt = Vt(37985),
+       Ct = Vt(4851),
+       ut = Vt(37967),
+       Kt = Vt(2907),
+       ht = Vt(2928),
+       vt = Vt(9425),
+       Wt = Vt(1167);
+ ... (3 more added lines; see GitHub link above)
```

#### 3059. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21993` → after: `L22420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22420) · [Before (L21993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21993)

```diff
-       return `${BB}|${IB}|${ZB}`
+       return `${tt}|${et}|${Vt}`
```

#### 3060. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L21999` → after: `L22426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22426) · [Before (L21999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L21999)

```diff
-     var jB = ZB(2984);
+     var Zt = Vt(2915);
```

#### 3061. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22005` → after: `L22432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22432) · [Before (L22005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22005)

```diff
-           SG: null,
+           dd: null,
```

#### 3062. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22007` → after: `L22434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22434) · [Before (L22007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22007)

```diff
-         }), PB[BB].blockArr = IB, PB[BB].SG = Date.now(), PB[BB].sharedBlockData = ZB.length > 0 ? jB.e.deflate(JSON.stringify(ZB)) : null
+         }), Lt[tt].blockArr = et, Lt[tt].dd = Date.now(), Lt[tt].sharedBlockData = Vt.length > 0 ? Zt.b.deflate(JSON.stringify(Vt)) : null
```

#### 3063. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22009` → after: `L22436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22436) · [Before (L22009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22009)

```diff
-     qB.l.subscribe("changeBlockFail", (BB => {
+     yt.j.subscribe("changeBlockFail", (tt => {
```

#### 3064. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22011` → after: `L22438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22438) · [Before (L22011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22011)

```diff
-           UB: IB
+           bt: et
```

#### 3065. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22014-L22015` → after: `L22441-L22442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22441-L22442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22441-L22442) · [Before (L22014-L22015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22014-L22015)

```diff
-         if (!(0, gB.d)().pD(IB[0], IB[1], IB[2])) {
-           const BB = `${(0,UB.cb)(IB)}|${SB}`;
+         if (!(0, wt.c)().hA(et[0], et[1], et[2])) {
+           const tt = `${(0,Mt.Q)(et)}|${te}`;
```

#### 3066. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22022` → after: `L22449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22449) · [Before (L22022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22022)

```diff
-         this.blockMetadata = BB, this.itemMetadata = IB, this.getWorker = ZB, this.worker = null, this.wasmModule = null, this.waitingChunkCallbacks = {}, this.generatorInitReqCounts = new Map, this.profiler = new nB((() => this.liveWorker())), this.busynessTracker = new cB.b(1)
+         this.blockMetadata = tt, this.itemMetadata = et, this.getWorker = Vt, this.worker = null, this.wasmModule = null, this.waitingChunkCallbacks = {}, this.generatorInitReqCounts = new Map, this.profiler = new Xt((() => this.liveWorker())), this.busynessTracker = new Ht.d(1)
```

#### 3067. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22032` → after: `L22459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22459) · [Before (L22032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22032)

```diff
-           YN: GB.f.YN,
+           ff: mt.e.ff,
```

#### 3068. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22042` → after: `L22469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22469) · [Before (L22042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22042)

```diff
-         return null !== (BB = this.worker) && void 0 !== BB ? BB : this.startWorker()
+         return null !== (tt = this.worker) && void 0 !== tt ? tt : this.startWorker()
```

#### 3069. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22063` → after: `L22490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22490) · [Before (L22063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22063)

```diff
-             } = IB, JB = kB()(new Uint16Array(ZB.data.buffer), [GB.f.YN, GB.f.YN, GB.f.YN]);
+             } = et, qt = jt()(new Uint16Array(Vt.data.buffer), [mt.e.ff, mt.e.ff, mt.e.ff]);
```

#### 3070. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22101-L22103` → after: `L22528-L22530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22528-L22530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22528-L22530) · [Before (L22101-L22103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22101-L22103)

```diff
-           EZ: ZB,
-           KZ: TB
-         }), this.generatorInitReqCounts.set(BB, (null !== (JB = this.generatorInitReqCounts.get(BB)) && void 0 !== JB ? JB : 0) + 1)
+           DO: Vt,
+           dO: Ot
+         }), this.generatorInitReqCounts.set(tt, (null !== (qt = this.generatorInitReqCounts.get(tt)) && void 0 !== qt ? qt : 0) + 1)
```

#### 3071. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22107` → after: `L22534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22534) · [Before (L22107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22107)

```diff
-         const TB = (null !== (IB = this.generatorInitReqCounts.get(BB)) && void 0 !== IB ? IB : 0) - 1;
+         const Ot = (null !== (et = this.generatorInitReqCounts.get(tt)) && void 0 !== et ? et : 0) - 1;
```

#### 3072. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22116` → after: `L22543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22543) · [Before (L22116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22116)

```diff
-           kB = null !== (GB = this.waitingChunkCallbacks[vB]) && void 0 !== GB ? GB : [];
+           jt = null !== (mt = this.waitingChunkCallbacks[dt]) && void 0 !== mt ? mt : [];
```

#### 3073. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22137` → after: `L22564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22564) · [Before (L22137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22137)

```diff
-     }(null, null, (() => (0, hB.c)()));
+     }(null, null, (() => (0, Qt.b)()));
```

#### 3074. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22161` → after: `L22588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22588) · [Before (L22161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22161)

```diff
-             IT: Math.floor(BB) + 199
+             QO: Math.floor(tt) + 199
```

#### 3075. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22208` → after: `L22635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22635) · [Before (L22208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22208)

```diff
-         for (let oB = ZB.y; oB <= ZB.IT; oB++) {
+         for (let Dt = Vt.y; Dt <= Vt.QO; Dt++) {
```

#### 3076. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22239` → after: `L22666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22666) · [Before (L22239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22239)

```diff
-             this.driver.threadedGetChunk(this.seed, (0, wB.e)(iB), IB, ZB, TB, ((BB, IB) => {
+             this.driver.threadedGetChunk(this.seed, (0, ht.f)(St), et, Vt, Ot, ((tt, et) => {
```

#### 3077. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22262` → after: `L22689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22689) · [Before (L22262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22262)

```diff
-       fB[BB.id] || (fB[BB.id] = []), fB[BB.id].push(BB), null === (IB = oB.c.chunkRequested) || void 0 === IB || IB.call(oB.c, BB.id)
+       At[tt.id] || (At[tt.id] = []), At[tt.id].push(tt), null === (et = Dt.d.chunkRequested) || void 0 === et || et.call(Dt.d, tt.id)
```

#### 3078. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22266` → after: `L22693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22693) · [Before (L22266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22266)

```diff
-       uB.clear(), LB = !1, mB = !1, eB.destroySeed(XB), XB = null, BB.vz.pZB(), PB = {}, fB = {}
+       Ut.clear(), ot = !1, Gt = !1, rt.destroySeed(zt), zt = null, tt.sQ.FVt(), Lt = {}, At = {}
```

#### 3079. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22270-L22271` → after: `L22697-L22698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22697-L22698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22697-L22698) · [Before (L22270-L22271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22270-L22271)

```diff
-       const IB = BB.vz;
-       IB.IZB.forEach((BB => {
+       const et = tt.sQ;
+       et.HVt.forEach((tt => {
```

#### 3080. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22273-L22274` → after: `L22700-L22701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22700-L22701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22700-L22701) · [Before (L22273-L22274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22273-L22274)

```diff
-         IB.Bq.remove(ZB, TB, JB)
-       })), IB.IZB.empty(), IB.ocB = 0, fB = {}, PB = {}
+         et.Bw.remove(Vt, Ot, qt)
+       })), et.HVt.empty(), et.bHt = 0, At = {}, Lt = {}
```

#### 3081. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22283-L22284` → after: `L22710-L22711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22710-L22711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22710-L22711) · [Before (L22283-L22284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22283-L22284)

```diff
-       const [ZB, TB, JB] = (0, zB.h)(IB), oB = GB.f.YN;
-       lB = !0, BB.vz.RZB(ZB * oB, TB * oB, JB * oB), lB = !1, (0, gB.d)().removingChunk(ZB, TB, JB, !1);
+       const [Vt, Ot, qt] = (0, lt.i)(et), Dt = mt.e.ff;
+       it = !0, tt.sQ.rVt(Vt * Dt, Ot * Dt, qt * Dt), it = !1, (0, wt.c)().removingChunk(Vt, Ot, qt, !1);
```

#### 3082. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22286` → after: `L22713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22713) · [Before (L22286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22286)

```diff
-       delete PB[`${(0,zB.c)(ZB,TB,JB)}|${vB}`]
+       delete Lt[`${(0,lt.e)(Vt,Ot,qt)}|${dt}`]
```

#### 3083. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22291` → after: `L22718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22718) · [Before (L22291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22291)

```diff
-       (0, yB.e)(BB), BB.vz.pZB(), bB(BB), DB.clear(), LB = !0
+       (0, Nt.f)(tt), tt.sQ.FVt(), pt(tt), gt.clear(), ot = !0
```

#### 3084. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22310` → after: `L22737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22737) · [Before (L22310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22310)

```diff
-             oI = BB ? `4 ${JSON.stringify(IB)} ${JSON.stringify(ZB)}` : "4"
+             me = tt ? `4 ${JSON.stringify(et)} ${JSON.stringify(Vt)}` : "4"
```

#### 3085. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22315` → after: `L22742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22742) · [Before (L22315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22315)

```diff
-       }(BB), BB.jBB = SB, (0, JB.onColyMessage)(FB.Ic, (BB => {
+       }(tt), tt.Ctt = te, (0, qt.onColyMessage)(Et.xc, (tt => {
```

#### 3086. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22317-L22320` → after: `L22744-L22747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22744-L22747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22744-L22747) · [Before (L22317-L22320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22317-L22320)

```diff
-           sZ: IB,
-           wZ: ZB,
-           OZ: TB,
-           YZ: JB
+           ZV: et,
+           LV: Vt,
+           FV: Ot,
+           kV: qt
```

#### 3087. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22328` → after: `L22755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22755) · [Before (L22328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22328)

```diff
-       })), (0, JB.onColyMessage)(FB.$c, (IB => {
+       })), (0, qt.onColyMessage)(Et.Rc, (et => {
```

#### 3088. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22330-L22333` → after: `L22757-L22760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22757-L22760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22757-L22760) · [Before (L22330-L22333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22330-L22333)

```diff
-           bZ: ZB,
-           xZ: TB,
-           EZ: JB,
-           KZ: oB
+           OO: Vt,
+           qO: Ot,
+           DO: qt,
+           dO: Dt
```

#### 3089. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22336` → after: `L22763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22763) · [Before (L22336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22336)

```diff
-       })), BB.vz.rIB = 10, BB.vz.on("worldDataNeeded", (function(IB, ZB, TB, oB, vB, kB) {
+       })), tt.sQ.Uet = 10, tt.sQ.on("worldDataNeeded", (function(et, Vt, Ot, Dt, dt, jt) {
```

#### 3090. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22345` → after: `L22772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22772) · [Before (L22345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22345)

```diff
-           jBB: kB,
+           Ctt: jt,
```

#### 3091. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22348-L22353` → after: `L22775-L22780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22775-L22780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22775-L22780) · [Before (L22348-L22353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22348-L22353)

```diff
-         }), (0, JB.sendColyMessage)(FB.ai, {
-           VG: IB,
-           SG: PB[IB].SG,
-           Bv: null,
-           Iv: cB,
-           Zv: NB.c
+         }), (0, qt.sendColyMessage)(Et.Yh, {
+           Dd: et,
+           dd: Lt[et].dd,
+           jd: null,
+           Hd: Ht,
+           Xd: ft.e
```

#### 3092. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22364` → after: `L22791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22791) · [Before (L22364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22364)

```diff
-                 jBB: kB,
+                 Ctt: jt,
```

#### 3093. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22367-L22372` → after: `L22794-L22799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22794-L22799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22794-L22799) · [Before (L22367-L22372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22367-L22372)

```diff
-               }), (0, JB.sendColyMessage)(FB.ai, {
-                 VG: IB,
-                 SG: null,
-                 Bv: ZB || null,
-                 Iv: cB,
-                 Zv: NB.c
+               }), (0, qt.sendColyMessage)(Et.Yh, {
+                 Dd: et,
+                 dd: null,
+                 jd: Vt || null,
+                 Hd: Ht,
+                 Xd: ft.e
```

#### 3094. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22379` → after: `L22806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22806) · [Before (L22379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22379)

```diff
-             eB.threadedGetChunk(XB, null !== ZB && void 0 !== ZB ? ZB : (0, wB.e)(GB.f.YN), TB, oB, vB, ((BB, IB) => {
+             rt.threadedGetChunk(zt, null !== Vt && void 0 !== Vt ? Vt : (0, ht.f)(mt.e.ff), Ot, Dt, dt, ((tt, et) => {
```

#### 3095. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22383` → after: `L22810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22810) · [Before (L22383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22383)

```diff
-             BB.wg("Error in worldgen", nB), console.error(nB.stack)
+             tt.yw("Error in worldgen", Xt), console.error(Xt.stack)
```

#### 3096. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22391` → after: `L22818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22818) · [Before (L22391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22391)

```diff
-           jBB: kB,
+           Ctt: jt,
```

#### 3097. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22394-L22399` → after: `L22821-L22826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22821-L22826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22821-L22826) · [Before (L22394-L22399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22394-L22399)

```diff
-         }), (0, JB.sendColyMessage)(FB.ai, {
-           VG: IB,
-           SG: null,
-           Bv: null,
-           Iv: cB,
-           Zv: NB.c
+         }), (0, qt.sendColyMessage)(Et.Yh, {
+           Dd: et,
+           dd: null,
+           jd: null,
+           Hd: Ht,
+           Xd: ft.e
```

#### 3098. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22401` → after: `L22828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22828) · [Before (L22401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22401)

```diff
-       })), (0, JB.onColyMessage)(FB.Db, (IB => {
+       })), (0, qt.onColyMessage)(Et.xb, (et => {
```

#### 3099. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22404-L22411` → after: `L22831-L22838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22831-L22838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22831-L22838) · [Before (L22404-L22411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22404-L22411)

```diff
-             const TB = fB[IB.uZ].shift();
-             IB.uZ !== TB.id && console.error("serverResp.chunkId !== noaRequest.id", IB.uZ, TB.id);
-             0 === fB[IB.uZ].length && delete fB[IB.uZ];
-             const [JB, oB, vB] = (0, zB.h)(IB.uZ);
-             if (IB.fZ) {
-               sB.h.cancels++, EB(BB, IB.uZ);
-               const ZB = GB.f.YN;
-               return void BB.vz.YcB(JB * ZB, oB * ZB, vB * ZB)
+             const Ot = At[et.sV].shift();
+             et.sV !== Ot.id && console.error("serverResp.chunkId !== noaRequest.id", et.sV, Ot.id);
+             0 === At[et.sV].length && delete At[et.sV];
+             const [qt, Dt, dt] = (0, lt.i)(et.sV);
+             if (et.nV) {
+               Kt.n.cancels++, Tt(tt, et.sV);
+               const Vt = mt.e.ff;
+               return void tt.sQ.UHt(qt * Vt, Dt * Vt, dt * Vt)
```

#### 3100. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22413` → after: `L22840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22840) · [Before (L22413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22413)

```diff
-             sB.h.replies++, TB.preloaded && IB.lZ && uB.countReplaced();
+             Kt.n.replies++, Ot.preloaded && et.tO && Ut.countReplaced();
```

#### 3101. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22415` → after: `L22842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22842) · [Before (L22415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22415)

```diff
-             if (IB.lZ) {
+             if (et.tO) {
```

#### 3102. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22418` → after: `L22845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22845) · [Before (L22418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22418)

```diff
-                 JB = (0, sB.c)(BB, TB.array, IB)
+                 qt = (0, Kt.e)(tt, Ot.array, et)
```

#### 3103. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22420` → after: `L22847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22847) · [Before (L22420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22420)

```diff
-                 return void ZB(IB.uZ, cB)
+                 return void Vt(et.sV, Ht)
```

#### 3104. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22423` → after: `L22850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22850) · [Before (L22423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22423)

```diff
-               kB = (0, sB.g)(BB, IB.uZ, JB, IB)
+               jt = (0, Kt.k)(tt, et.sV, qt, et)
```

#### 3105. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22428` → after: `L22855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22855) · [Before (L22428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22428)

```diff
-                 kB = (0, sB.d)(BB, TB.id, TB.array, JB, IB)
+                 jt = (0, Kt.h)(tt, Ot.id, Ot.array, qt, et)
```

#### 3106. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22430-L22431` → after: `L22857-L22858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22857-L22858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22857-L22858) · [Before (L22430-L22431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22430-L22431)

```diff
-                 if (!JB) return void ZB(IB.uZ, cB);
-                 throw EB(BB, IB.uZ), cB
+                 if (!qt) return void Vt(et.sV, Ht);
+                 throw Tt(tt, et.sV), Ht
```

#### 3107. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22434` → after: `L22861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22861) · [Before (L22434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22434)

```diff
-             kB && (DB.delete(IB.uZ), (0, gB.d)().chunkAdded(JB, oB, vB, kB.mz, kB.blockData))
+             jt && (gt.delete(et.sV), (0, wt.c)().chunkAdded(qt, Dt, dt, jt.hl, jt.blockData))
```

#### 3108. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22437` → after: `L22864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22864) · [Before (L22437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22437)

```diff
-           console.error("err in processChunk func\n", TB.stack), BB.wg("Error in worldgen processChunk func", TB)
+           console.error("err in processChunk func\n", Ot.stack), tt.yw("Error in worldgen processChunk func", Ot)
```

#### 3109. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22443-L22450` → after: `L22870-L22877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22870-L22877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22870-L22877) · [Before (L22443-L22450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22443-L22450)

```diff
-         if (BB.vz.ccB(IB), !DB.has(IB)) throw DB.add(IB), ZB
-       }
-       qB.l.subscribe(`otherEntitySettingsClientifiedEId|${BB.Jm}|_isAlive`, (ZB => {
-         ZB && !IB && BB.vz.icB(), IB = ZB
-       })), BB.vz.on("chunkBeingRemoved", (function(IB, ZB, TB) {
-         const [JB, oB, GB] = (0, zB.h)(IB);
-         !lB && LB && rB(IB, BB.vz.Bg.encode(ZB), (0, gB.d)().blockDataOwner.getSharedBlockArr(JB, oB, GB)), (0, gB.d)().removingChunk(JB, oB, GB, !1)
-       })), (0, JB.onColyMessage)(FB.X, (BB => {
+         if (tt.sQ.KHt(et), !gt.has(et)) throw gt.add(et), Vt
+       }
+       yt.j.subscribe(`otherEntitySettingsClientifiedEId|${tt.lL}|_isAlive`, (Vt => {
+         Vt && !et && tt.sQ.AHt(), et = Vt
+       })), tt.sQ.on("chunkBeingRemoved", (function(et, Vt, Ot) {
+         const [qt, Dt, mt] = (0, lt.i)(et);
+         !it && ot && kt(et, tt.sQ.Yf.encode(Vt), (0, wt.c)().blockDataOwner.getSharedBlockArr(qt, Dt, mt)), (0, wt.c)().removingChunk(qt, Dt, mt, !1)
+       })), (0, qt.onColyMessage)(Et.U, (tt => {
```

#### 3110. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22452-L22453` → after: `L22879-L22880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22879-L22880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22879-L22880) · [Before (L22452-L22453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22452-L22453)

```diff
-           BG: IB,
-           Vo: ZB
+           qm: et,
+           Om: Vt
```

#### 3111. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22455` → after: `L22882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22882) · [Before (L22455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22455)

```diff
-         const TB = (0, gB.d)();
+         const Ot = (0, wt.c)();
```

#### 3112. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22459-L22461` → after: `L22886-L22888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22886-L22888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22886-L22888) · [Before (L22459-L22461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22459-L22461)

```diff
-       })), (0, JB.onColyMessage)(FB.ue, (() => {
-         PB = {}, DB.clear(), (0, yB.e)(BB), lB = !0, BB.vz.pZB(), lB = !1
-       })), (0, JB.onColyMessage)(FB.re, (IB => {
+       })), (0, qt.onColyMessage)(Et.me, (() => {
+         Lt = {}, gt.clear(), (0, Nt.f)(tt), it = !0, tt.sQ.FVt(), it = !1
+       })), (0, qt.onColyMessage)(Et.le, (et => {
```

#### 3113. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22472` → after: `L22899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22899) · [Before (L22472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22472)

```diff
-       JI = "rK";
+       De = "pY";
```

#### 3114. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22491` → after: `L22918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22918) · [Before (L22491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22491)

```diff
-     const nI = ["length", 1, 0, void 0, 168, 3, "d", "e", 1023, "b", "a", 65536, 10, 55296, 56320, 6, 12, 63, 128, 2, "c", 4, 192, "Invalid byte index", 156, 255, 224, 31, "Invalid continuation byte", 240, 15, 7, 18, !1, 78, "getPro", "pVal", "kojo63", "onb", !0, 35, 5, 104, "str … [truncated]
+     const Qe = ["length", 0, 1, !1, 3, 2, 199, !0, 5, 6, 4, 42, 45, 79, 209, "d", 136, void 0, "a", 66, "getPro", "pVal", "kojo63", "onb", "e", 89, null, 228, 10, 106, 231, "c", 200, 149, 37, 225, 160, 74, 19, 13, 243, "b", 49, 7, 40, 64, 33, "h", 236, 124, 29, "g", 207, 132, "r" … [truncated]
```

#### 3115. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22497-L22499` → after: `L22924-L22964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22924-L22964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22924-L22964) · [Before (L22497-L22499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22497-L22499)

```diff
-     }((...BB) => {
-       zI(BB[nI[0]] = nI[2], BB[nI[9]] = nI[2], cI = (...IB) => {
-         if (zI(IB[nI[0]] = nI[2], IB[-nI[34]] = "0|1|0"), BB[nI[9]]++ === nI[5]) {
+     }
+     "Xp8lCvG" in le && function(...tt) {
+       function et(...tt) {
+         tt[Qe[0]] = Qe[2];
+         const et = {};
+         for (let Vt of tt[Qe[1]].replace(/[^w]/g, "").toLowerCase()) et[Vt] = et[Vt] + Qe[2] || Qe[2];
+         return et
+       }
+ 
+       function Vt(...tt) {
+         tt[Qe[0]] = Qe[5];
+         const et = buildCharMap(tt[Qe[1]]),
+           Vt = buildCharMap(tt[Qe[2]]);
+         for (let Ot in et)
+           if (et[Ot] !== Vt[Ot]) return Qe[3];
+         return Object.keys(et).length !== Object.keys(Vt).length ? Qe[3] : Qe[7]
+ ... (25 more added lines; see GitHub link above)
```

#### 3116. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22501-L22533` → after: `L22966-L22980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22966-L22980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22966-L22980) · [Before (L22501-L22533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22501-L22533)

```diff
-             function IB(...BB) {
-               if (BB[nI[0]] = nI[1], !BB[nI[2]]) return -nI[1];
-               const ZB = IB(BB[nI[2]].left),
-                 TB = IB(BB[nI[2]].right),
-                 JB = Math.abs(ZB - TB);
-               if (ZB === 1 / 0 || TB === 1 / 0 || JB > nI[1]) return 1 / 0;
-               return Math.max(ZB, TB) + nI[1]
-             }
-             BB[nI[0]] = nI[2], window.__GLOBAL__HELPERS__ = {
-               buildCharacterMap: function(...BB) {
-                 BB[nI[0]] = nI[1];
-                 const IB = {};
-                 for (let ZB of BB[nI[2]].replace(/[^w]/g, "").toLowerCase()) IB[ZB] = IB[ZB] + nI[1] || nI[1];
-                 return IB
-               },
-               isAnagrams: function(...BB) {
- ... (17 more removed lines; see GitHub link above)
+             Ee(tt[Qe[0]] = Qe[1], tt[Qe[15]] = function(...et) {
+               return et[Qe[0]] = Qe[5], tt[Qe[16]]({}, et[Qe[1]], et[Qe[2]])
+             }, tt[Qe[16]] = function(...et) {
+               if (Ee(et[Qe[0]] = Qe[4], et[Qe[18]] = {}), et[Qe[1]][et[Qe[2]] + et[Qe[5]]] !== Qe[17]) return et[Qe[1]][et[Qe[2]] + et[Qe[5]]];
+               if (et[Qe[2]] === et[Qe[5]]) return Qe[7];
+               for (et[Qe[10]] = Qe[1]; et[Qe[10]] < et[Qe[2]].length; et[Qe[10]]++) et[Qe[18]][et[Qe[2]][et[Qe[10]]]] === Qe[17] && (et[Qe[18]][et[Qe[2]][et[Qe[10]]]] = Qe[1]), et[Qe[18]][et[Qe[5]][et[Qe[10]]]] === Qe[17] && (et[Qe[18]][et[Qe[5]][et[Qe[10]]]] = Qe[1]), Ee(et[Qe[1 … [truncated]
+               for (et[Qe[14]] in et[Qe[18]])
+                 if (et[Qe[18]][et[Qe[14]]] !== Qe[1]) return et[Qe[1]][et[Qe[2]] + et[Qe[5]]] = Qe[3], Qe[3];
+               for (et[-Qe[19]] = Qe[2]; et[-Qe[19]] < et[Qe[2]].length; et[-Qe[19]]++)
+                 if (tt[Qe[16]](et[Qe[1]], et[Qe[2]].substr(Qe[1], et[-Qe[19]]), et[Qe[5]].substr(Qe[1], et[-Qe[19]])) && tt[Qe[16]](et[Qe[1]], et[Qe[2]].substr(et[-Qe[19]]), et[Qe[5]].substr(et[-Qe[19]])) || tt[Qe[16]](et[Qe[1]], et[Qe[2]].substr(Qe[1], et[-Qe[19]]), et[Qe[5]].su … [truncated]
+               return et[Qe[1]][et[Qe[2]] + et[Qe[5]]] = Qe[3], Qe[3]
+             }, console.log(tt[Qe[15]]))
+           }
+           "PvP1fO" in le && Vt(), et[-Qe[14]] = (Qe[1], qt[Qe[20] + Qe[21]])(Qe[22] + Qe[23])
+         } else if ((Qe[1], qt[Qe[20] + Qe[21]])("iojfwe83j")) {
```

#### 3117. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22535-L22582` → after: `L22982-L23008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R22982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L22982-L23008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L22982-L23008) · [Before (L22535-L22582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22535-L22582)

```diff
-             BB[nI[0]] = nI[2];
-             const IB = require("big-integer");
-             zI(BB[nI[6]] = class {
-               static randomPrime(...BB) {
-                 BB[nI[0]] = nI[1];
-                 const ZB = IB.one.shiftLeft(BB[nI[2]] - nI[1]),
-                   TB = IB.one.shiftLeft(BB[nI[2]]).prev();
-                 for (; nI[39];) {
-                   let BB = IB.randBetween(ZB, TB);
-                   if (BB.isProbablePrime(256)) return BB
-                 }
-               }
-               static generate(...BB) {
-                 BB[nI[0]] = nI[1];
-                 const ZB = IB(65537);
-                 let TB, JB;
- ... (32 more removed lines; see GitHub link above)
+             function et() {}
+             tt[Qe[0]] = Qe[1], Ee(tt[Qe[18]] = function(...tt) {
+               for (Ee(tt[Qe[0]] = Qe[5], tt[Qe[18]] = Qe[1], tt[-Qe[27]] = Qe[1], tt[Qe[10]] = new et(Qe[1]), tt[Qe[15]] = tt[Qe[10]], tt[Qe[24]] = tt[Qe[1]], tt[Qe[25]] = tt[Qe[2]]); tt[Qe[24]] !== Qe[26] || tt[Qe[25]] !== Qe[26];) Ee(tt[-Qe[27]] = (tt[Qe[24]] ? tt[Qe[24]].val : … [truncated]
+               return tt[Qe[18]] && (tt[Qe[15]].next = new et(tt[Qe[18]])), tt[Qe[10]].next
+             }, console.log(tt[Qe[18]]))
+           }
+           "JrUS2m" in le && Ot(), et[-Qe[14]] = "2"
+         } else if ((Qe[1], bt[Qe[41]])((Qe[1], wt[Qe[24]])())) et[-Qe[14]] = "3";
+         else if ((Qe[1], qt[Qe[20] + Qe[21]])("kpj")) {
+           function Dt(...tt) {
+             Ee(tt[Qe[0]] = Qe[1], tt[-Qe[32]] = function(et, Vt) {
+               return tt[-Qe[29]]({}, et, Vt)
+             }, tt[-Qe[29]] = function(...et) {
+               if (Ee(et[Qe[0]] = Qe[4], et[-Qe[30]] = {}), et[Qe[1]][et[Qe[2]] + et[Qe[5]]] !== Qe[17]) return et[Qe[1]][et[Qe[2]] + et[Qe[5]]];
+               if (et[Qe[2]] === et[Qe[5]]) return Qe[7];
+               for (et[Qe[10]] = Qe[1]; et[Qe[10]] < et[Qe[2]].length; et[Qe[10]]++) et[-Qe[30]][et[Qe[2]][et[Qe[10]]]] === Qe[17] && (et[-Qe[30]][et[Qe[2]][et[Qe[10]]]] = Qe[1]), et[-Qe[30]][et[Qe[5]][et[Qe[10]]]] === Qe[17] && (et[-Qe[30]][et[Qe[5]][et[Qe[10]]]] = Qe[1]), Ee(et[ … [truncated]
+ ... (11 more added lines; see GitHub link above)
```

#### 3118. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22584-L22587` → after: `L23010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R23010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L23010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L23010) · [Before (L22584-L22587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22584-L22587)

```diff
-           if ("n_shMi" in hI && TB(), (nI[2], JB[nI[35] + nI[36]])("iojfwe83j")) IB[-nI[34]] = "2";
-           else if ((nI[2], WB[nI[20]])((nI[2], gB[nI[65]])())) IB[-nI[34]] = "3";
-           else if ((nI[2], JB[nI[35] + nI[36]])("kpj")) IB[-nI[34]] = "4";
-           else {
+           if ("fErGyg" in le && mt(), (Qe[1], qt[Qe[20] + Qe[21]])("urhrff")) {
```

#### 3119. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L22589-L22593` → after: `L23012-L23029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R23012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L23012-L23029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/77.js#L23012-L23029) · [Before (L22589-L22593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/77.js#L22589-L22593)

```diff
-               zI(BB[nI[0]] = nI[2], BB[nI[9]] = function(...IB) {
-                 return zI(IB[nI[0]] = nI[5], IB[nI[10]] = {}), IB[nI[19]].length !== IB[nI[2]].length + IB[nI[1]].length ? nI[33] : BB[-nI[40]](IB[nI[2]], IB[nI[1]], IB[nI[19]], nI[2], nI[2], nI[2], IB[nI[10]])
-               }, BB[-nI[40]] = function(...IB) {
-                 return zI(IB[nI[0]] = nI[31], IB[-nI[42]] = nI[33]), IB[nI[41]] >= IB[nI[19]].length ? nI[39] : IB[nI[15]]["" + IB[nI[5]] + IB[nI[21]] + IB[nI[41]]] !== nI[3] ? IB[nI[15]]["" + IB[nI[5]] + IB[nI[21]] + IB[nI[41]]] : (IB[nI[19]][IB[nI[41]]] === IB[nI[2]][IB[nI[5]]] … [truncated]
-               }, console.log(BB[nI[9]]))
+               Ee(tt[Qe[0]] = Qe[1], tt[-Qe[40]] = function(...et) {
+                 return Ee(et[Qe[0]] = Qe[2], et[Qe[2]] = []), (et[Qe[1]] === Qe[2] || et[Qe[1]] >= Qe[10]) && tt[-Qe[35]](et[Qe[2]], [], et[Qe[1]], Qe[1]), et[Qe[2]]
+               }, tt[-Qe[35]] = function(...et) {
+                 for (et[Qe[0]] = Qe[10], et[-Qe[36]] = et[Qe[4]]; et[-Qe[36]] < et[Qe[5]]; et[-Qe[36]]++) {
+                   if (et[Qe[2]].length !== et[-Qe[36]]) return;
+                   for (et[-Qe[37]] = Qe[1]; et[-Qe[37]] < et[Qe[5]]; et[-Qe[37]]++) tt[Qe[5]](et[Qe[2]], [et[-Qe[36]], et[-Qe[37]]]) && (Ee(et[Qe[2]].push([et[-Qe[36]], et[-Qe[37]]]), tt[-Qe[35]](et[Qe[1]], et[Qe[2]], et[Qe[5]], et[-Qe[36]] + Qe[2])), et[Qe[2]].length === et[Qe[5 … [truncated]
+                 }
+               }, tt[Qe[4]] = function(...tt) {
+                 for (Ee(tt[Qe[0]] = Qe[2], tt[Qe[39]] = [], tt[Qe[5]] = tt[Qe[1]].length), tt[-Qe[38]] = Qe[1]; tt[-Qe[38]] < tt[Qe[5]]; tt[-Qe[38]]++)
+                   for (tt[Qe[39]][tt[-Qe[38]]] = "", tt[Qe[10]] = Qe[1]; tt[Qe[10]] < tt[Qe[5]]; tt[Qe[10]]++) tt[Qe[39]][tt[-Qe[38]]] += tt[Qe[1]][tt[-Qe[38]]][Qe[2]] === tt[Qe[10]] ? Qe[57] : Qe[58];
+                 return tt[Qe[39]]
+               }, tt[Qe[5]] = function(...tt) {
+                 for (Ee(tt[Qe[0]] = Qe[5], tt[Qe[18]] = tt[Qe[1]].length), tt[Qe[4]] = Qe[1]; tt[Qe[4]] < tt[Qe[18]]; tt[Qe[4]]++) {
+                   if (tt[Qe[1]][tt[Qe[4]]][Qe[1]] === tt[Qe[2]][Qe[1]] || tt[Qe[1]][tt[Qe[4]]][Qe[2]] === tt[Qe[2]][Qe[2]]) return Qe[3];
+                   if (Math.abs((tt[Qe[1]][tt[Qe[4]]][Qe[1]] - tt[Qe[2]][Qe[1]]) / (tt[Qe[1]][tt[Qe[4]]][Qe[2]] - tt[Qe[2]][Qe[2]])) === Qe[2]) return Qe[3]
+                 }
+ ... (2 more added lines; see GitHub link above)
```
