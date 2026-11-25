# Changed — Bundle Modifications Report (Part 129 / 141)

- **Updated at**: `2026-11-25T09:40 JST`
- **Part**: `129 / 141` (**414** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 128](part-128.md) · [Part 130 →](part-130.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/procGenWorker.js` (c6gaap.4d6587ec → igzsf.a0b73a5f · continued)

- **File**: `bundles/bloxd.io/chunks/js/procGenWorker.js` (1817 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2)

#### 1721. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35847-L35848` → after: `L35847-L35848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R35847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L35847-L35848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L35847-L35848) · [Before (L35847-L35848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L35847-L35848)

```diff
-         textureInfo: BB => `${bT(BB)}_balloon`,
-         heldItemGlb: BB => `${BB} Balloon Item`,
+         textureInfo: tt => `${pO(tt)}_balloon`,
+         heldItemGlb: tt => `${tt} Balloon Item`,
```

#### 1722. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35857-L35859` → after: `L35857-L35859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R35857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L35857-L35859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L35857-L35859) · [Before (L35857-L35859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L35857-L35859)

```diff
-       ...Io((BB => `INTERNAL_MESH_${BB} Balloon`), {
-         textureInfo: BB => `${bT(BB)}_balloon`,
-         heldItemGlb: BB => `${BB} Balloon`,
+       ...VD((tt => `INTERNAL_MESH_${tt} Balloon`), {
+         textureInfo: tt => `${pO(tt)}_balloon`,
+         heldItemGlb: tt => `${tt} Balloon`,
```

#### 1723. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35865` → after: `L35865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R35865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L35865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L35865) · [Before (L35865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L35865)

```diff
-       ...Io((BB => `${BB} Popup Tower`), {
+       ...VD((tt => `${tt} Popup Tower`), {
```

#### 1724. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35867` → after: `L35867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R35867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L35867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L35867) · [Before (L35867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L35867)

```diff
-           translationKey: `item:${tT(BB)}PopupTower`
+           translationKey: `item:${BO(tt)}PopupTower`
```

#### 1725. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35869` → after: `L35869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R35869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L35869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L35869) · [Before (L35869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L35869)

```diff
-         textureInfo: BB => `${bT(BB)}_popup_tower`,
+         textureInfo: tt => `${pO(tt)}_popup_tower`,
```

#### 1726. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35878` → after: `L35878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R35878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L35878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L35878) · [Before (L35878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L35878)

```diff
-       ...Io((BB => `${BB} Paintball Gun`), {
+       ...VD((tt => `${tt} Paintball Gun`), {
```

#### 1727. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35880` → after: `L35880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R35880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L35880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L35880) · [Before (L35880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L35880)

```diff
-           translationKey: `item:${tT(BB)}PaintballGun`
+           translationKey: `item:${BO(tt)}PaintballGun`
```

#### 1728. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35882` → after: `L35882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R35882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L35882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L35882) · [Before (L35882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L35882)

```diff
-         textureInfo: BB => `${bT(BB)}_paintball_gun`,
+         textureInfo: tt => `${pO(tt)}_paintball_gun`,
```

#### 1729. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35895` → after: `L35895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R35895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L35895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L35895) · [Before (L35895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L35895)

```diff
-       ...Io((BB => `${BB} Paintball`), {
+       ...VD((tt => `${tt} Paintball`), {
```

#### 1730. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35897` → after: `L35897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R35897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L35897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L35897) · [Before (L35897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L35897)

```diff
-           translationKey: `item:${tT(BB)}Paintball`
+           translationKey: `item:${BO(tt)}Paintball`
```

#### 1731. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35899` → after: `L35899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R35899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L35899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L35899) · [Before (L35899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L35899)

```diff
-         textureInfo: BB => `${bT(BB)}_paintball`,
+         textureInfo: tt => `${pO(tt)}_paintball`,
```

#### 1732. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35908` → after: `L35908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R35908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L35908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L35908) · [Before (L35908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L35908)

```diff
-       ...Io((BB => `${BB} Heavy Paintball Gun`), {
+       ...VD((tt => `${tt} Heavy Paintball Gun`), {
```

#### 1733. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35910` → after: `L35910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R35910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L35910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L35910) · [Before (L35910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L35910)

```diff
-           translationKey: `item:${tT(BB)}HeavyPaintballGun`
+           translationKey: `item:${BO(tt)}HeavyPaintballGun`
```

#### 1734. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35912` → after: `L35912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R35912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L35912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L35912) · [Before (L35912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L35912)

```diff
-         textureInfo: BB => `${bT(BB)}_heavy_paintball_gun`,
+         textureInfo: tt => `${pO(tt)}_heavy_paintball_gun`,
```

#### 1735. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35925` → after: `L35925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R35925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L35925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L35925) · [Before (L35925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L35925)

```diff
-       ...Io((BB => `${BB} Paintball Explosive Item`), {
+       ...VD((tt => `${tt} Paintball Explosive Item`), {
```

#### 1736. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35927` → after: `L35927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R35927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L35927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L35927) · [Before (L35927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L35927)

```diff
-           translationKey: `item:${tT(BB)}PaintballExplosive`
+           translationKey: `item:${BO(tt)}PaintballExplosive`
```

#### 1737. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35929` → after: `L35929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R35929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L35929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L35929) · [Before (L35929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L35929)

```diff
-         textureInfo: BB => `explosive_paint_${bT(BB)}`,
+         textureInfo: tt => `explosive_paint_${pO(tt)}`,
```

#### 1738. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35938` → after: `L35938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R35938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L35938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L35938) · [Before (L35938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L35938)

```diff
-       ...Io((BB => `${BB} Sticky Paintball Explosive Item`), {
+       ...VD((tt => `${tt} Sticky Paintball Explosive Item`), {
```

#### 1739. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35940` → after: `L35940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R35940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L35940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L35940) · [Before (L35940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L35940)

```diff
-           translationKey: `item:${tT(BB)}StickyPaintballExplosive`
+           translationKey: `item:${BO(tt)}StickyPaintballExplosive`
```

#### 1740. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35942` → after: `L35942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R35942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L35942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L35942) · [Before (L35942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L35942)

```diff
-         textureInfo: BB => `explosive_paint_sticky_${bT(BB)}`,
+         textureInfo: tt => `explosive_paint_sticky_${pO(tt)}`,
```

#### 1741. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35951` → after: `L35951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R35951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L35951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L35951) · [Before (L35951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L35951)

```diff
-       ...Io((BB => `${BB} Seeking Paintball Explosive Item`), {
+       ...VD((tt => `${tt} Seeking Paintball Explosive Item`), {
```

#### 1742. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35953` → after: `L35953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R35953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L35953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L35953) · [Before (L35953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L35953)

```diff
-           translationKey: `item:${tT(BB)}SeekingPaintballExplosive`
+           translationKey: `item:${BO(tt)}SeekingPaintballExplosive`
```

#### 1743. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35955` → after: `L35955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R35955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L35955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L35955) · [Before (L35955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L35955)

```diff
-         textureInfo: BB => `explosive_paint_seeking_${bT(BB)}`,
+         textureInfo: tt => `explosive_paint_seeking_${pO(tt)}`,
```

#### 1744. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35964` → after: `L35964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R35964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L35964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L35964) · [Before (L35964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L35964)

```diff
-       ...Io((BB => `${BB} Quick Paintball Explosive Item`), {
+       ...VD((tt => `${tt} Quick Paintball Explosive Item`), {
```

#### 1745. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35966` → after: `L35966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R35966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L35966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L35966) · [Before (L35966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L35966)

```diff
-           translationKey: `item:${tT(BB)}QuickPaintballExplosive`
+           translationKey: `item:${BO(tt)}QuickPaintballExplosive`
```

#### 1746. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35968` → after: `L35968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R35968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L35968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L35968) · [Before (L35968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L35968)

```diff
-         textureInfo: BB => `explosive_paint_quick_${bT(BB)}`,
+         textureInfo: tt => `explosive_paint_quick_${pO(tt)}`,
```

#### 1747. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35982` → after: `L35982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R35982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L35982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L35982) · [Before (L35982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L35982)

```diff
-       }((BB => `${BB} Paint Bow`), {
+       }((tt => `${tt} Paint Bow`), {
```

#### 1748. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35984` → after: `L35984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R35984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L35984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L35984) · [Before (L35984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L35984)

```diff
-           translationKey: `item:${tT(BB)}PaintBow`
+           translationKey: `item:${BO(tt)}PaintBow`
```

#### 1749. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35986-L35987` → after: `L35986-L35987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R35986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L35986-L35987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L35986-L35987) · [Before (L35986-L35987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L35986-L35987)

```diff
-         textureName: BB => `${bT(BB)}_paint_bow`,
-         rootMetaDesc: BB => `${BB} Paint Bow|meta|charging1`,
+         textureName: tt => `${pO(tt)}_paint_bow`,
+         rootMetaDesc: tt => `${tt} Paint Bow|meta|charging1`,
```

#### 1750. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L36005` → after: `L36005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L36005) · [Before (L36005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L36005)

```diff
-             translationKey: `item:${IB}SpawnOrb`
+             translationKey: `item:${et}SpawnOrb`
```

#### 1751. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L36008` → after: `L36008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L36008) · [Before (L36008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L36008)

```diff
-           textureInfo: `${ZB}_spawn_orb`,
+           textureInfo: `${Vt}_spawn_orb`,
```

#### 1752. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L36013` → after: `L36013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L36013) · [Before (L36013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L36013)

```diff
-             translationKey: `item:${IB}SpawnOrbDescription`,
+             translationKey: `item:${et}SpawnOrbDescription`,
```

#### 1753. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L36043` → after: `L36043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L36043) · [Before (L36043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L36043)

```diff
-             textureInfo: `caught_${IB}_${JB?"default":ZB}`,
+             textureInfo: `caught_${et}_${qt?"default":Vt}`,
```

#### 1754. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L36221` → after: `L36221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L36221) · [Before (L36221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L36221)

```diff
-       ...Io((BB => `${BB} Firecracker`), {
+       ...VD((tt => `${tt} Firecracker`), {
```

#### 1755. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L36223` → after: `L36223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L36223) · [Before (L36223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L36223)

```diff
-           translationKey: `item:${tT(BB)}Firecracker`
+           translationKey: `item:${BO(tt)}Firecracker`
```

#### 1756. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L36225` → after: `L36225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L36225) · [Before (L36225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L36225)

```diff
-         textureInfo: BB => `firecracker_${bT(BB)}`,
+         textureInfo: tt => `firecracker_${pO(tt)}`,
```

#### 1757. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L36263` → after: `L36263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L36263) · [Before (L36263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L36263)

```diff
-       ...Io((BB => `${BB} Firecracker Pebble`), {
+       ...VD((tt => `${tt} Firecracker Pebble`), {
```

#### 1758. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L36265` → after: `L36265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L36265) · [Before (L36265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L36265)

```diff
-           translationKey: `item:${tT(BB)}FirecrackerPebble`
+           translationKey: `item:${BO(tt)}FirecrackerPebble`
```

#### 1759. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L36267` → after: `L36267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L36267) · [Before (L36267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L36267)

```diff
-         textureInfo: BB => `firecracker_pebble_${bT(BB)}`,
+         textureInfo: tt => `firecracker_pebble_${pO(tt)}`,
```

#### 1760. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39130` → after: `L39130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39130) · [Before (L39130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39130)

```diff
-         if (lv[TB]) throw new Error(`Item family "${Ik.name}" would overwrite the existing item "${TB}"`);
+         if (id[Ot]) throw new Error(`Item family "${Vj.name}" would overwrite the existing item "${Ot}"`);
```

#### 1761. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39132` → after: `L39132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39132) · [Before (L39132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39132)

```diff
-             displayName: null !== (tv = null === (bv = Ik.displayName) || void 0 === bv ? void 0 : bv.call(Ik, TB)) && void 0 !== tv ? tv : TB
+             displayName: null !== (Bd = null === (pd = Vj.displayName) || void 0 === pd ? void 0 : pd.call(Vj, Ot)) && void 0 !== Bd ? Bd : Ot
```

#### 1762. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39136` → after: `L39136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39136) · [Before (L39136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39136)

```diff
-           if (!Ik.metadata) throw new Error(`Item family "${Ik.name}" declares neither inheritsFrom nor metadata`);
+           if (!Vj.metadata) throw new Error(`Item family "${Vj.name}" declares neither inheritsFrom nor metadata`);
```

#### 1763. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39147` → after: `L39147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39147) · [Before (L39147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39147)

```diff
-         if (!lv[GB]) throw new Error(`Item family "${Ik.name}" inherits "${TB}" from "${GB}", which is not registered`);
+         if (!id[mt]) throw new Error(`Item family "${Vj.name}" inherits "${Ot}" from "${mt}", which is not registered`);
```

#### 1764. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39149` → after: `L39149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39149) · [Before (L39149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39149)

```diff
-           const oB = lv[`${GB}${vB}`];
+           const Dt = id[`${mt}${dt}`];
```

#### 1765. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39158` → after: `L39158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39158) · [Before (L39158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39158)

```diff
-           oB.rootMetaDesc && (cB.rootMetaDesc = oB.rootMetaDesc.replace(GB, TB)), lv[`${TB}${vB}`] = cB
+           Dt.rootMetaDesc && (Ht.rootMetaDesc = Dt.rootMetaDesc.replace(mt, Ot)), id[`${Ot}${dt}`] = Ht
```

#### 1766. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39176` → after: `L39176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39176) · [Before (L39176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39176)

```diff
-       translationKey: `item:${Zk}`
+       translationKey: `item:${Oj}`
```

#### 1767. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39179` → after: `L39179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39179) · [Before (L39179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39179)

```diff
-       translationKey: `item:${Zk}Description`
+       translationKey: `item:${Oj}Description`
```

#### 1768. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39192` → after: `L39192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39192) · [Before (L39192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39192)

```diff
-       translationKey: `item:${Zk}`
+       translationKey: `item:${Oj}`
```

#### 1769. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39195` → after: `L39195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39195) · [Before (L39195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39195)

```diff
-       translationKey: `item:${Zk}Description`
+       translationKey: `item:${Oj}Description`
```

#### 1770. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39213` → after: `L39213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39213) · [Before (L39213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39213)

```diff
-       translationKey: `item:${Zk}`
+       translationKey: `item:${Oj}`
```

#### 1771. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39216` → after: `L39216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39216) · [Before (L39216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39216)

```diff
-       translationKey: `item:${Zk}Description`
+       translationKey: `item:${Oj}Description`
```

#### 1772. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39262` → after: `L39262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39262) · [Before (L39262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39262)

```diff
-       translationKey: `item:${Zk}`
+       translationKey: `item:${Oj}`
```

#### 1773. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39265` → after: `L39265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39265) · [Before (L39265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39265)

```diff
-       translationKey: `item:${Zk}Description`
+       translationKey: `item:${Oj}Description`
```

#### 1774. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39285` → after: `L39285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39285) · [Before (L39285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39285)

```diff
-       translationKey: `item:${Zk}`
+       translationKey: `item:${Oj}`
```

#### 1775. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39288` → after: `L39288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39288) · [Before (L39288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39288)

```diff
-       translationKey: `item:${Zk}Description`
+       translationKey: `item:${Oj}Description`
```

#### 1776. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39309` → after: `L39309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39309) · [Before (L39309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39309)

```diff
-       translationKey: `item:${Zk}`
+       translationKey: `item:${Oj}`
```

#### 1777. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39312` → after: `L39312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39312) · [Before (L39312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39312)

```diff
-       translationKey: `item:${Zk}Description`
+       translationKey: `item:${Oj}Description`
```

#### 1778. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39346` → after: `L39346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39346) · [Before (L39346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39346)

```diff
-       translationKey: `item:${Zk}`
+       translationKey: `item:${Oj}`
```

#### 1779. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39349` → after: `L39349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39349) · [Before (L39349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39349)

```diff
-       translationKey: `item:${Zk}Description`
+       translationKey: `item:${Oj}Description`
```

#### 1780. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39365` → after: `L39365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39365) · [Before (L39365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39365)

```diff
-       translationKey: `item:${Zk}`
+       translationKey: `item:${Oj}`
```

#### 1781. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39368` → after: `L39368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39368) · [Before (L39368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39368)

```diff
-       translationKey: `item:${Zk}Description`
+       translationKey: `item:${Oj}Description`
```

#### 1782. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39395` → after: `L39395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39395) · [Before (L39395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39395)

```diff
-   for (const Ik of [2, 3, 4, 5, 6, 7, 8, 9, 10]) lv[`Core Tier ${Ik}`] = {
+   for (const Vj of [2, 3, 4, 5, 6, 7, 8, 9, 10]) id[`Core Tier ${Vj}`] = {
```

#### 1783. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39397` → after: `L39397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39397) · [Before (L39397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39397)

```diff
-       translationKey: `item:coreTier${Ik}`
+       translationKey: `item:coreTier${Vj}`
```

#### 1784. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39400` → after: `L39400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39400) · [Before (L39400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39400)

```diff
-       translationKey: `item:coreTier${Ik}Description`
+       translationKey: `item:coreTier${Vj}Description`
```

#### 1785. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39403` → after: `L39403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39403) · [Before (L39403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39403)

```diff
-     textureInfo: `core_tier_${Math.min(Ik,5)}`,
+     textureInfo: `core_tier_${Math.min(Vj,5)}`,
```

#### 1786. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39429` → after: `L39429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39429) · [Before (L39429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39429)

```diff
-     ]) lv[`Voltplate ${Ik}`] = {
+     ]) id[`Voltplate ${Vj}`] = {
```

#### 1787. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39431` → after: `L39431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39431) · [Before (L39431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39431)

```diff
-       translationKey: `item:voltplate${Ik}`
+       translationKey: `item:voltplate${Vj}`
```

#### 1788. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39434` → after: `L39434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39434) · [Before (L39434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39434)

```diff
-       translationKey: `item:voltplate${Ik}Description`
+       translationKey: `item:voltplate${Vj}Description`
```

#### 1789. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39437` → after: `L39437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39437) · [Before (L39437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39437)

```diff
-     textureInfo: `voltplate_${Ik.toLowerCase()}`,
+     textureInfo: `voltplate_${Vj.toLowerCase()}`,
```

#### 1790. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39449` → after: `L39449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39449) · [Before (L39449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39449)

```diff
-           translationKey: `item:${tT(IB)}`
+           translationKey: `item:${BO(et)}`
```

#### 1791. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39452` → after: `L39452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39452) · [Before (L39452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39452)

```diff
-           translationKey: `item:sword${BB}Description`
+           translationKey: `item:sword${tt}Description`
```

#### 1792. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39499` → after: `L39499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39499) · [Before (L39499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39499)

```diff
-       translationKey: `item:${Zk}`
+       translationKey: `item:${Oj}`
```

#### 1793. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39502` → after: `L39502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39502) · [Before (L39502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39502)

```diff
-       translationKey: `item:${Zk}Description`
+       translationKey: `item:${Oj}Description`
```

#### 1794. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39518` → after: `L39518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39518) · [Before (L39518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39518)

```diff
-       translationKey: `item:${Zk}`
+       translationKey: `item:${Oj}`
```

#### 1795. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39521` → after: `L39521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39521) · [Before (L39521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39521)

```diff
-       translationKey: `item:${Zk}Description`
+       translationKey: `item:${Oj}Description`
```

#### 1796. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39531` → after: `L39531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39531) · [Before (L39531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39531)

```diff
-   for (const Ik of [11, 12, 13, 14, 15]) lv[`Core Tier ${Ik}`] = {
+   for (const Vj of [11, 12, 13, 14, 15]) id[`Core Tier ${Vj}`] = {
```

#### 1797. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39533` → after: `L39533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39533) · [Before (L39533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39533)

```diff
-       translationKey: `item:coreTier${Ik}`
+       translationKey: `item:coreTier${Vj}`
```

#### 1798. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39536` → after: `L39536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39536) · [Before (L39536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39536)

```diff
-       translationKey: `item:coreTier${Ik}Description`
+       translationKey: `item:coreTier${Vj}Description`
```

#### 1799. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39550` → after: `L39550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39550) · [Before (L39550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39550)

```diff
-       translationKey: `item:${Zk}`
+       translationKey: `item:${Oj}`
```

#### 1800. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39553` → after: `L39553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39553) · [Before (L39553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39553)

```diff
-       translationKey: `item:${Zk}Description`
+       translationKey: `item:${Oj}Description`
```

#### 1801. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39569` → after: `L39569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39569) · [Before (L39569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39569)

```diff
-     ]) lv[`Nova ${Ik}`] = {
+     ]) id[`Nova ${Vj}`] = {
```

#### 1802. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39571` → after: `L39571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39571) · [Before (L39571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39571)

```diff
-       translationKey: `item:nova${Ik}`
+       translationKey: `item:nova${Vj}`
```

#### 1803. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39574` → after: `L39574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39574) · [Before (L39574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39574)

```diff
-       translationKey: `item:nova${Ik}Description`
+       translationKey: `item:nova${Vj}Description`
```

#### 1804. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39577` → after: `L39577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39577) · [Before (L39577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39577)

```diff
-     textureInfo: `nova_${Ik.toLowerCase()}`,
+     textureInfo: `nova_${Vj.toLowerCase()}`,
```

#### 1805. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39615` → after: `L39615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39615) · [Before (L39615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39615)

```diff
-   for (const Ik of ["Pig", "Cow", "Sheep", "Deer", "Stag"]) lv[`Caged ${Ik}`] = {
+   for (const Vj of ["Pig", "Cow", "Sheep", "Deer", "Stag"]) id[`Caged ${Vj}`] = {
```

#### 1806. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39617` → after: `L39617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39617) · [Before (L39617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39617)

```diff
-       translationKey: `item:caged${Ik}`
+       translationKey: `item:caged${Vj}`
```

#### 1807. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39667` → after: `L39667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39667) · [Before (L39667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39667)

```diff
-       translationKey: `item:${Zk}`
+       translationKey: `item:${Oj}`
```

#### 1808. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39670` → after: `L39670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39670) · [Before (L39670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39670)

```diff
-       translationKey: `item:${Zk}Description`
+       translationKey: `item:${Oj}Description`
```

#### 1809. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39685` → after: `L39685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39685) · [Before (L39685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39685)

```diff
-     Dv[Ik] = null !== (Kv = Dv[BB.id]) && void 0 !== Kv ? Kv : new WZ(BB)
+     gd[Vj] = null !== (sd = gd[tt.id]) && void 0 !== sd ? sd : new bV(tt)
```

#### 1810. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39692` → after: `L39692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39692) · [Before (L39692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39692)

```diff
-     if (!Vv[BB]) throw new Error(`Missing "${BB}" item for vehicle type "${Ik}"`)
+     if (!nd[tt]) throw new Error(`Missing "${tt}" item for vehicle type "${Vj}"`)
```

#### 1811. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39719` → after: `L39719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39719) · [Before (L39719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39719)

```diff
-       vB[BB] = new oZ(kB, cB, nB, IB.seed, zB, IB.EZ, null !== (TB = IB.KZ) && void 0 !== TB ? TB : null, ZB, oB)
+       dt[tt] = new mV(jt, Ht, Xt, et.seed, lt, et.DO, null !== (Ot = et.dO) && void 0 !== Ot ? Ot : null, Vt, Dt)
```

#### 1812. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39748` → after: `L39748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39748) · [Before (L39748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39748)

```diff
-               const IB = `port${FB++}|`,
+               const et = `port${Et++}|`,
```

#### 1813. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39756` → after: `L39756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39756) · [Before (L39756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39756)

```diff
-                       NB(GB, TB), ZB.set(GB, (null !== (JB = ZB.get(GB)) && void 0 !== JB ? JB : 0) + 1);
+                       ft(mt, Ot), Vt.set(mt, (null !== (qt = Vt.get(mt)) && void 0 !== qt ? qt : 0) + 1);
```

#### 1814. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39760` → after: `L39760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39760) · [Before (L39760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39760)

```diff
-                       const BB = (null !== (oB = ZB.get(GB)) && void 0 !== oB ? oB : 0) - 1;
+                       const tt = (null !== (Dt = Vt.get(mt)) && void 0 !== Dt ? Dt : 0) - 1;
```

#### 1815. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39784` → after: `L39784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39784) · [Before (L39784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39784)

```diff
-             if (kB = ZB.YN, cB = null !== (JB = ZB.blockMetadata) && void 0 !== JB ? JB : null === TB || void 0 === TB ? void 0 : TB.blockMetadata, nB = null !== (oB = ZB.itemMetadata) && void 0 !== oB ? oB : null === TB || void 0 === TB ? void 0 : TB.itemMetadata, !cB || !nB) th … [truncated]
+             if (jt = Vt.ff, Ht = null !== (qt = Vt.blockMetadata) && void 0 !== qt ? qt : null === Ot || void 0 === Ot ? void 0 : Ot.blockMetadata, Xt = null !== (Dt = Vt.itemMetadata) && void 0 !== Dt ? Dt : null === Ot || void 0 === Ot ? void 0 : Ot.itemMetadata, !Ht || !Xt) th … [truncated]
```

#### 1816. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39824` → after: `L39824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39824) · [Before (L39824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39824)

```diff
-         return EI().Gh(BB, IB)
+         return Te().OQ(tt, et)
```

#### 1817. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39834` → after: `L39834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/procGenWorker.js#L39834) · [Before (L39834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/procGenWorker.js#L39834)

```diff
-       })(BB) || console.warn(`Wasm did not start (${xI()}), so the world-gen worker sends no chunk hashes`)
+       })(tt) || console.warn(`Wasm did not start (${xe()}), so the world-gen worker sends no chunk hashes`)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/renderDebug.js` (c6gaap.4d6587ec → igzsf.a0b73a5f)

- **File**: `bundles/bloxd.io/chunks/js/renderDebug.js` (121 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9)

#### 1. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L4)

```diff
-   4866: (BB, IB, ZB) => {
+   4842: (tt, et, Vt) => {
```

#### 2. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L6)

```diff
-       e: () => nB
+       c: () => Xt
```

#### 3. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L8-L11)

```diff
-     var TB = ZB(20),
-       JB = ZB(24),
-       oB = ZB(1353),
-       GB = ZB(2973);
+     var Ot = Vt(26),
+       qt = Vt(31),
+       Dt = Vt(1387),
+       mt = Vt(2902);
```

#### 4. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L16` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L16) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L16)

```diff
-       return "visible" === document.visibilityState && "inGame" === TB.d.get("gameState") && (0, oB.w)()
+       return "visible" === document.visibilityState && "inGame" === Ot.b.get("gameState") && (0, Dt.r)()
```

#### 5. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L20)

```diff
-       (0, GB.u)() || function(BB, IB, ZB) {
+       (0, mt.x)() || function(tt, et, Vt) {
```

#### 6. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L27` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L27) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L27)

```diff
-           BB(`saved for the player after ${vB/1e3} s of play`), (0, GB.I)(), JB.l.Gq("chat", {
+           tt(`saved for the player after ${dt/1e3} s of play`), (0, mt.J)(), qt.j.sw("chat", {
```

#### 7. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L39` → after: `L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L39) · [Before (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L39)

```diff
-   4862: (BB, IB, ZB) => {
+   4833: (tt, et, Vt) => {
```

#### 8. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L46-L48` → after: `L46-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L46-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L46-L48) · [Before (L46-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L46-L48)

```diff
-     var TB = ZB(1878),
-       JB = ZB(4866),
-       oB = ZB(2973);
+     var Ot = Vt(1908),
+       qt = Vt(4842),
+       Dt = Vt(2902);
```

#### 9. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L65-L66` → after: `L65-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L65-L66) · [Before (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L65-L66)

```diff
-         return IB + (1 === (22 >>> BB & 1) ? 4 - ZB : ZB) & 3
-       }(JB, kB(TB), IB), GB = JB >>> 1, [nB, hB] = cB(ZB), zB = 1 === oB || 2 === oB ? nB : 0, FB = oB >= 2 ? hB : 0, NB = [63 & ZB, ZB >>> 6 & 63, ZB >>> 12 & 63];
+         return et + (1 === (22 >>> tt & 1) ? 4 - Vt : Vt) & 3
+       }(qt, jt(Ot), et), mt = qt >>> 1, [Xt, Qt] = Ht(Vt), lt = 1 === Dt || 2 === Dt ? Xt : 0, Et = Dt >= 2 ? Qt : 0, ft = [63 & Vt, Vt >>> 6 & 63, Vt >>> 12 & 63];
```

#### 10. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L89` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L89) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L89)

```diff
-         oB.push(GB === IB ? `[${ZB}]` : ZB)
+         Dt.push(mt === et ? `[${Vt}]` : Vt)
```

#### 11. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L185` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L185) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L185)

```diff
-       return null === BB.name ? `#${BB.id}` : `#${BB.id} ${BB.name}`
+       return null === tt.name ? `#${tt.id}` : `#${tt.id} ${tt.name}`
```

#### 12. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L207` → after: `L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L207) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L207)

```diff
-         this.print = BB, this.now = IB, this.shown = 0, this.sv = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.XF = [], this.dropped = 0
+         this.print = tt, this.now = et, this.shown = 0, this.Pd = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.hE = [], this.dropped = 0
```

#### 13. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L211-L212` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L211-L212) · [Before (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L211-L212)

```diff
-         if (IB - this.second >= 1e3 && (this.second = IB, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.sv++, void this.store(BB);
-         this.shown++, this.inSecond++, this.print(400 === this.shown ? `${BB} (the last line here: the rest go to bloxdDebug.save())` : BB)
+         if (et - this.second >= 1e3 && (this.second = et, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.Pd++, void this.store(tt);
+         this.shown++, this.inSecond++, this.print(400 === this.shown ? `${tt} (the last line here: the rest go to bloxdDebug.save())` : tt)
```

#### 14. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L218` → after: `L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L218) · [Before (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L218)

```diff
-         this.XF.push(`${new Date(Date.now()).toISOString()} ${BB}`), this.XF.length > 2e4 && (this.XF.shift(), this.dropped++)
+         this.hE.push(`${new Date(Date.now()).toISOString()} ${tt}`), this.hE.length > 2e4 && (this.hE.shift(), this.dropped++)
```

#### 15. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L221` → after: `L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L221) · [Before (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L221)

```diff
-         return [`${this.shown} lines logged (above); kept here: ${this.sv} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.XF].join("\n")
+         return [`${this.shown} lines logged (above); kept here: ${this.Pd} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.hE].join("\n")
```

#### 16. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L229` → after: `L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L229) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L229)

```diff
-           (0, oB.o)("render", BB)
+           (0, Dt.n)("render", tt)
```

#### 17. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L231` → after: `L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L231) · [Before (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L231)

```diff
-         (0, oB.l)("render", (() => BB.dump())), XB = BB
+         (0, Dt.j)("render", (() => tt.dump())), zt = tt
```

#### 18. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L246` → after: `L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L246) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L246)

```diff
-       return BB.length <= IB ? BB : `${BB.slice(0,IB)}... (${BB.length-IB} more characters)`
+       return tt.length <= et ? tt : `${tt.slice(0,et)}... (${tt.length-et} more characters)`
```

#### 19. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L257` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L257) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L257)

```diff
-           vq: JB,
+           nw: qt,
```

#### 20. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L282` → after: `L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L282) · [Before (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L282)

```diff
-             }), IB.push(`@${JB} buf#${rB(TB)} +${oB} stride ${GB} ${vB}x0x${kB.toString(16)}${cB?" int":""} div ${nB}`)
+             }), et.push(`@${qt} buf#${kt(Ot)} +${Dt} stride ${mt} ${dt}x0x${jt.toString(16)}${Ht?" int":""} div ${Xt}`)
```

#### 21. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L296` → after: `L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L296) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L296)

```diff
-               oB = TB ? `+${TB.offset}` : JB ? Array.from(JB).slice(0, 3).join(",") : "?";
+               Dt = Ot ? `+${Ot.offset}` : qt ? Array.from(qt).slice(0, 3).join(",") : "?";
```

#### 22. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L315` → after: `L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L315) · [Before (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L315)

```diff
-             const cB = Math.min(JB, wB, sB - (null !== kB && void 0 !== kB ? kB : 0));
+             const Ht = Math.min(qt, ht, Kt - (null !== jt && void 0 !== jt ? jt : 0));
```

#### 23. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L345` → after: `L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L345) · [Before (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L345)

```diff
-             GB.parts.set(oB, (null !== kB && void 0 !== kB ? kB : 0) + cB);
+             mt.parts.set(Dt, (null !== jt && void 0 !== jt ? jt : 0) + Ht);
```

#### 24. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L350` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L350) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L350)

```diff
-               NB && (GB.fed.records++, ZB.some(((BB, ZB) => BB !== IB[ZB])) && (GB.fed.differing++, GB.fed.first.length < 8 && GB.fed.first.push(`part ${oB} instance ${gB}: fed ${ZB.map(JI).join(" ")} buffer ${IB.map(JI).join(" ")}`)));
+               ft && (mt.fed.records++, Vt.some(((tt, Vt) => tt !== et[Vt])) && (mt.fed.differing++, mt.fed.first.length < 8 && mt.fed.first.push(`part ${Dt} instance ${wt}: fed ${Vt.map(De).join(" ")} buffer ${et.map(De).join(" ")}`)));
```

#### 25. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L396` → after: `L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L396) · [Before (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L396)

```diff
-                 oB.parts.set(JB[ZB + 3], (null !== (zB = oB.parts.get(JB[ZB + 3])) && void 0 !== zB ? zB : 0) + (BB % 6 === 0 ? 1 : 0)), oB.vertices.push({
+                 Dt.parts.set(qt[Vt + 3], (null !== (lt = Dt.parts.get(qt[Vt + 3])) && void 0 !== lt ? lt : 0) + (tt % 6 === 0 ? 1 : 0)), Dt.vertices.push({
```

#### 26. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L407` → after: `L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L407) · [Before (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L407)

```diff
-         eB(`decode probe failed on program ${pB(ZB)}: ${String(nB)}`)
+         rt(`decode probe failed on program ${ct(Vt)}: ${String(Xt)}`)
```

#### 27. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L416` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L416) · [Before (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L416)

```diff
-           return tB(BB, (ZB = IB.vertex, ZB.replace(`\nvec3 ${qB} = vec3(0);\n`, `\nout vec3 ${qB};\n`)), IB.fragment, qB, `program ${pB(IB)}'s twin`);
+           return Bt(tt, (Vt = et.vertex, Vt.replace(`\nvec3 ${yt} = vec3(0);\n`, `\nout vec3 ${yt};\n`)), et.fragment, yt, `program ${ct(et)}'s twin`);
```

#### 28. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L434` → after: `L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L434) · [Before (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L434)

```diff
-       return BB.getProgramParameter(GB, gB.LINK_STATUS) ? GB : (eB(`decode probe: ${JB} failed to link: ${fB(null!==(vB=BB.getProgramInfoLog(GB))&&void 0!==vB?vB:"",300)}`), BB.deleteProgram(GB), null)
+       return tt.getProgramParameter(mt, wt.LINK_STATUS) ? mt : (rt(`decode probe: ${qt} failed to link: ${At(null!==(dt=tt.getProgramInfoLog(mt))&&void 0!==dt?dt:"",300)}`), tt.deleteProgram(mt), null)
```

#### 29. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L453` → after: `L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L453) · [Before (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L453)

```diff
-           const GB = TB.size > 1 ? `${JB}[${oB}]` : TB.name,
+           const mt = Ot.size > 1 ? `${qt}[${Dt}]` : Ot.name,
```

#### 30. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L508` → after: `L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L508) · [Before (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L508)

```diff
-         oB !== gB.NO_ERROR && eB(`GL error 0x${oB.toString(16)} pending before the decode probe (the renderer's)`), BB.useProgram(IB), BB.bindTransformFeedback(gB.TRANSFORM_FEEDBACK, nB), BB.bindBuffer(gB.TRANSFORM_FEEDBACK_BUFFER, hB), BB.bufferData(gB.TRANSFORM_FEEDBACK_BUFFER, … [truncated]
+         Dt !== wt.NO_ERROR && rt(`GL error 0x${Dt.toString(16)} pending before the decode probe (the renderer's)`), tt.useProgram(et), tt.bindTransformFeedback(wt.TRANSFORM_FEEDBACK, Xt), tt.bindBuffer(wt.TRANSFORM_FEEDBACK_BUFFER, Qt), tt.bufferData(wt.TRANSFORM_FEEDBACK_BUFFER, … [truncated]
```

#### 31. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L510` → after: `L510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L510) · [Before (L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L510)

```diff
-         if (GB !== gB.NO_ERROR) return eB(`${JB}: GL error 0x${GB.toString(16)} on the feedback draw`), null;
+         if (mt !== wt.NO_ERROR) return rt(`${qt}: GL error 0x${mt.toString(16)} on the feedback draw`), null;
```

#### 32. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L523` → after: `L523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L523) · [Before (L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L523)

```diff
-     const KB = `#version 300 es\nlayout(location = ${yB}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
+     const st = `#version 300 es\nlayout(location = ${Nt}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
```

#### 33. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L574` → after: `L574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L574) · [Before (L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L574)

```diff
-       const oB = `${BB} ${IB.bytes.length} B cpu ${FB(IB.bytes).toString(16)} gpu ${FB(ZB).toString(16)}, ${JB}/${TB} blocks differ${IB.missed?`, ${IB.missed} GPU-side writes uncopied`:""}`;
+       const Dt = `${tt} ${et.bytes.length} B cpu ${Et(et.bytes).toString(16)} gpu ${Et(Vt).toString(16)}, ${qt}/${Ot} blocks differ${et.missed?`, ${et.missed} GPU-side writes uncopied`:""}`;
```

#### 34. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L590` → after: `L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L590) · [Before (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L590)

```diff
-       return uB([`${oB}: ${GB} bytes differ`, ...vB.map((BB => `  +${BB}: cpu ${NB(IB.bytes,BB)} | gpu ${NB(ZB,BB)}`))].join("\n")), `${oB}: ${GB} bytes differ, first at ${vB.join(", ")} (context in the saved file)`
+       return Ut([`${Dt}: ${mt} bytes differ`, ...dt.map((tt => `  +${tt}: cpu ${ft(et.bytes,tt)} | gpu ${ft(Vt,tt)}`))].join("\n")), `${Dt}: ${mt} bytes differ, first at ${dt.join(", ")} (context in the saved file)`
```

#### 35. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L594` → after: `L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L594) · [Before (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L594)

```diff
-       if (0 === BB.vertices.length) return void eB(`decode probe (${BB.reason}): no terrain draw probed (${BB.draws.length} seen)`);
+       if (0 === tt.vertices.length) return void rt(`decode probe (${tt.reason}): no terrain draw probed (${tt.draws.length} seen)`);
```

#### 36. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L634` → after: `L634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L634) · [Before (L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L634)

```diff
-               ZB.byBand[cB] = (null !== (JB = ZB.byBand[cB]) && void 0 !== JB ? JB : 0) + 1, ZB.first.length < zB && ZB.first.push({
+               Vt.byBand[Ht] = (null !== (qt = Vt.byBand[Ht]) && void 0 !== qt ? qt : 0) + 1, Vt.first.length < lt && Vt.first.push({
```

#### 37. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L642` → after: `L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L642) · [Before (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L642)

```diff
-         ZB = IB.byDirection.map(((BB, IB) => BB ? `${GB[IB]} ${BB}` : "")).filter(Boolean).join(" "),
+         Vt = et.byDirection.map(((tt, et) => tt ? `${mt[et]} ${tt}` : "")).filter(Boolean).join(" "),
```

#### 38. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L645` → after: `L645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L645) · [Before (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L645)

```diff
-           return `${IB}: ${ZB}`
+           return `${et}: ${Vt}`
```

#### 39. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L647-L649` → after: `L647-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L647-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L647-L649) · [Before (L647-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L647-L649)

```diff
-       if (eB(`decode probe (${BB.reason}): ${IB.mismatches}/${IB.vertices} vertices differ from the CPU decode over ${BB.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (IB.mismatches ? ` by direction [${ZB}] diagonal [0: ${IB … [truncated]
-         eB(`decode probe input: ${BB.fed.differing}/${BB.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (BB.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (BB.fed.fa … [truncated]
-         for (const IB of BB.fed.first) eB(`  ${IB}`)
+       if (rt(`decode probe (${tt.reason}): ${et.mismatches}/${et.vertices} vertices differ from the CPU decode over ${tt.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (et.mismatches ? ` by direction [${Vt}] diagonal [0: ${et … [truncated]
+         rt(`decode probe input: ${tt.fed.differing}/${tt.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (tt.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (tt.fed.fa … [truncated]
+         for (const et of tt.fed.first) rt(`  ${et}`)
```

#### 40. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L653` → after: `L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L653) · [Before (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L653)

```diff
-         eB(`  mismatch part ${JB.group} r0 ${BB.toString(16)} r1 ${IB.toString(16)} r2 ${ZB.toString(16)} slot ${JB.slot} (${GB[vB(ZB)]}): expected ${JB.expected.map(oI).join(",")} gpu ${JB.gpu.map(oI).join(",")}`)
+         rt(`  mismatch part ${qt.group} r0 ${tt.toString(16)} r1 ${et.toString(16)} r2 ${Vt.toString(16)} slot ${qt.slot} (${mt[dt(Vt)]}): expected ${qt.expected.map(me).join(",")} gpu ${qt.gpu.map(me).join(",")}`)
```

#### 41. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L655` → after: `L655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L655) · [Before (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L655)

```diff
-       uB(`decode probe translations: ${[...IB.translations].map((BB=>{let[IB,ZB]=BB;return`${IB}: ${ZB.map(oI).join(",")}`})).join("; ")}`)
+       Ut(`decode probe translations: ${[...et.translations].map((tt=>{let[et,Vt]=tt;return`${et}: ${Vt.map(me).join(",")}`})).join("; ")}`)
```

#### 42. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L688` → after: `L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L688) · [Before (L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L688)

```diff
-                 eB(`draw ranges (${BB.reason}): ${BB.terrainDraws} terrain draws in the frame, the first ${BB.draws.length} here`);
+                 rt(`draw ranges (${tt.reason}): ${tt.terrainDraws} terrain draws in the frame, the first ${tt.draws.length} here`);
```

#### 43. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L690` → after: `L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L690) · [Before (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L690)

```diff
-                   const BB = IB.vq.slice(0, 8).map((BB => {
+                   const tt = et.nw.slice(0, 8).map((tt => {
```

#### 44. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L692` → after: `L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L692) · [Before (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L692)

```diff
-                       return `${IB}+${ZB}`
+                       return `${et}+${Vt}`
```

#### 45. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L694-L695` → after: `L694-L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L694-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L694-L695) · [Before (L694-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L694-L695)

```diff
-                     ZB = IB.vq.length > 8 ? ` (+${IB.vq.length-8} ranges)` : "";
-                   eB(`  ${pB(IB.program)} ${IB.program.terrain} ${IB.call} ${BB}${ZB} x${IB.instances}${IB.group>=0?` part ${IB.group} chunk ${IB.chunk}`:""} | ${IB.attributes.join(" | ")}`)
+                     Vt = et.nw.length > 8 ? ` (+${et.nw.length-8} ranges)` : "";
+                   rt(`  ${ct(et.program)} ${et.program.terrain} ${et.call} ${tt}${Vt} x${et.instances}${et.group>=0?` part ${et.group} chunk ${et.chunk}`:""} | ${et.attributes.join(" | ")}`)
```

#### 46. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L713` → after: `L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L713) · [Before (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L713)

```diff
-                     IB.push(`${JB.kind}#${rB(TB)}: no CPU copy (${jB.uncopied} pages over the copy budget)`);
+                     et.push(`${qt.kind}#${kt(Ot)}: no CPU copy (${Zt.uncopied} pages over the copy budget)`);
```

#### 47. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L717` → after: `L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L717) · [Before (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L717)

```diff
-                     IB.push(ZI(`buf#${BB.id}`, BB, DB(oB, JB.buffer, 0, BB.bytes.length)));
+                     et.push(Oe(`buf#${tt.id}`, tt, gt(Dt, qt.buffer, 0, tt.bytes.length)));
```

#### 48. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L722` → after: `L722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L722) · [Before (L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L722)

```diff
-                   IB.push(ZI(`tex#${BB.id} (${16===BB.texelBytes?"records":"light"})`, BB, GB))
+                   et.push(Oe(`tex#${tt.id} (${16===tt.texelBytes?"records":"light"})`, tt, mt))
```

#### 49. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L724` → after: `L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L724) · [Before (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L724)

```diff
-                 for (const TB of IB) eB(`page readback ${TB}`)
+                 for (const Ot of et) rt(`page readback ${Ot}`)
```

#### 50. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L727` → after: `L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L727) · [Before (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L727)

```diff
-               eB(`check failed: ${String(BB)}`)
+               rt(`check failed: ${String(tt)}`)
```

#### 51. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L740` → after: `L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L740) · [Before (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L740)

```diff
-     var vI = ZB(4874);
+     var je = Vt(4851);
```

#### 52. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L750` → after: `L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L750) · [Before (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L750)

```diff
-         BB[IB] = JB, (0, vI.A)(JB, TB)
+         tt[et] = qt, (0, je.v)(qt, Ot)
```

#### 53. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L788` → after: `L788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L788) · [Before (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L788)

```diff
-         oB = ZB ? ZB * TB : BB.byteLength - IB * TB;
+         Dt = Vt ? Vt * Ot : tt.byteLength - et * Ot;
```

#### 54. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L846` → after: `L846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L846) · [Before (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L846)

```diff
-           GB = null !== (IB = NI.get(oB)) && void 0 !== IB ? IB : [];
+           mt = null !== (et = we.get(Dt)) && void 0 !== et ? et : [];
```

#### 55. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L857` → after: `L857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L857) · [Before (L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L857)

```diff
-               qI.lost < kI && (qI.lost++, eB(`${IB}${"statusMessage"in BB?`: ${String(BB.statusMessage)}`:""}`))
+               Ne.lost < He && (Ne.lost++, rt(`${et}${"statusMessage"in tt?`: ${String(tt.statusMessage)}`:""}`))
```

#### 56. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L861` → after: `L861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L861) · [Before (L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L861)

```diff
-           const oB = null !== (ZB = NI.get(IB)) && void 0 !== ZB ? ZB : [];
+           const Dt = null !== (Vt = we.get(et)) && void 0 !== Vt ? Vt : [];
```

#### 57. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L866-L867` → after: `L866-L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L866-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L866-L867) · [Before (L866-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L866-L867)

```diff
-             const BB = null !== (kB = FI.get(nB)) && void 0 !== kB ? kB : "";
-             /\bgl_Position\b/.test(BB) ? GB = BB : vB = BB
+             const tt = null !== (jt = fe.get(Xt)) && void 0 !== jt ? jt : "";
+             /\bgl_Position\b/.test(tt) ? mt = tt : dt = tt
```

#### 58. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L871` → after: `L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L871) · [Before (L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L871)

```diff
-             name: null !== (TB = null === (JB = iB.exec(GB)) || void 0 === JB ? void 0 : JB[1]) && void 0 !== TB ? TB : null,
+             name: null !== (Ot = null === (qt = St.exec(mt)) || void 0 === qt ? void 0 : qt[1]) && void 0 !== Ot ? Ot : null,
```

#### 59. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L882` → after: `L882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L882) · [Before (L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L882)

```diff
-               return null !== (ZB = BB.getShaderInfoLog(IB)) && void 0 !== ZB ? ZB : ""
+               return null !== (Vt = tt.getShaderInfoLog(et)) && void 0 !== Vt ? Vt : ""
```

#### 60. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L884` → after: `L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L884) · [Before (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L884)

```diff
-             IB.length > 0 && uB(`program ${pB(cB)} (${cB.terrain}) shader logs:\n${fB(IB.join("\n"))}`)
+             et.length > 0 && Ut(`program ${ct(Ht)} (${Ht.terrain}) shader logs:\n${At(et.join("\n"))}`)
```

#### 61. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L894` → after: `L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L894) · [Before (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L894)

```diff
-             const IB = "number" === typeof ZB[1] ? null : dI(ZB[1], null !== (oB = ZB[3]) && void 0 !== oB ? oB : 0, null !== (GB = ZB[4]) && void 0 !== GB ? GB : 0);
+             const et = "number" === typeof Vt[1] ? null : Je(Vt[1], null !== (Dt = Vt[3]) && void 0 !== Dt ? Dt : 0, null !== (mt = Vt[4]) && void 0 !== mt ? mt : 0);
```

#### 62. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L896` → after: `L896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L896) · [Before (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L896)

```diff
-             if (sI(BB, "number" === typeof ZB[1] ? ZB[1] : null !== (vB = null === IB || void 0 === IB ? void 0 : IB.length) && void 0 !== vB ? vB : 0), IB) null === (kB = HB.get(BB)) || void 0 === kB || kB.bytes.set(IB)
+             if (Ke(tt, "number" === typeof Vt[1] ? Vt[1] : null !== (dt = null === et || void 0 === et ? void 0 : et.length) && void 0 !== dt ? dt : 0), et) null === (jt = It.get(tt)) || void 0 === jt || jt.bytes.set(et)
```

#### 63. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L907` → after: `L907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L907) · [Before (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L907)

```diff
-             TB = dI(ZB[2], null !== (oB = ZB[3]) && void 0 !== oB ? oB : 0, null !== (GB = ZB[4]) && void 0 !== GB ? GB : 0);
+             Ot = Je(Vt[2], null !== (Dt = Vt[3]) && void 0 !== Dt ? Dt : 0, null !== (mt = Vt[4]) && void 0 !== mt ? mt : 0);
```

#### 64. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L941` → after: `L941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L941) · [Before (L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L941)

```diff
-           let cB = dI(IB[8], null !== (ZB = IB[9]) && void 0 !== ZB ? ZB : 0);
+           let Ht = Je(et[8], null !== (Vt = et[9]) && void 0 !== Vt ? Vt : 0);
```

#### 65. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L993` → after: `L993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L993) · [Before (L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L993)

```diff
-       UI[BB] += TB, WI < 32 && IB.bytes.length >= 1 << 20 && (WI++, uB(`upload ${BB} #${IB.id} +${ZB} ${TB} B`))
+       Me[tt] += Ot, be < 32 && et.bytes.length >= 1 << 20 && (be++, Ut(`upload ${tt} #${et.id} +${Vt} ${Ot} B`))
```

#### 66. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1006` → after: `L1006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1006) · [Before (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1006)

```diff
-         oB = (null !== (TB = BB.getProgramInfoLog(IB)) && void 0 !== TB ? TB : "").trim();
+         Dt = (null !== (Ot = tt.getProgramInfoLog(et)) && void 0 !== Ot ? Ot : "").trim();
```

#### 67. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1008` → after: `L1008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1008) · [Before (L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1008)

```diff
-       null === ZB.terrain && JB || (eB(`program ${pB(ZB)} ${null!==(GB=ZB.terrain)&&void 0!==GB?GB:"other"} link ${JB?"ok":"FAILED"}${oB?`: ${fB(oB,300)}`:""}`), oB && uB(`program ${pB(ZB)} link log:\n${fB(oB)}`))
+       null === Vt.terrain && qt || (rt(`program ${ct(Vt)} ${null!==(mt=Vt.terrain)&&void 0!==mt?mt:"other"} link ${qt?"ok":"FAILED"}${Dt?`: ${At(Dt,300)}`:""}`), Dt && Ut(`program ${ct(Vt)} link log:\n${At(Dt)}`))
```

#### 68. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1016` → after: `L1016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1016) · [Before (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1016)

```diff
-       const GB = null !== (TB = oB.terrain) && void 0 !== TB ? TB : "other",
+       const mt = null !== (Ot = Dt.terrain) && void 0 !== Ot ? Ot : "other",
```

#### 69. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1018` → after: `L1018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1018) · [Before (L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1018)

```diff
-           vq: vB,
+           nw: dt,
```

#### 70. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1024` → after: `L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1024) · [Before (L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1024)

```diff
-                 vq: [
+                 nw: [
```

#### 71. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1031` → after: `L1031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1031) · [Before (L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1031)

```diff
-                 vq: [
+                 nw: [
```

#### 72. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1037` → after: `L1037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1037) · [Before (L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1037)

```diff
-                 vq: [
+                 nw: [
```

#### 73. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1044` → after: `L1044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1044) · [Before (L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1044)

```diff
-                 vq: [
+                 nw: [
```

#### 74. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1056` → after: `L1056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1056) · [Before (L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1056)

```diff
-                 vq: oB,
+                 nw: Dt,
```

#### 75. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1062` → after: `L1062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1062) · [Before (L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1062)

```diff
-                 vq: [], instances: 0
+                 nw: [], instances: 0
```

#### 76. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1066` → after: `L1066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1066) · [Before (L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1066)

```diff
-         cB = "inst" === oB.terrain ? kB : vB.reduce(((BB, IB) => {
+         Ht = "inst" === Dt.terrain ? jt : dt.reduce(((tt, et) => {
```

#### 77. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1086` → after: `L1086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1086) · [Before (L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1086)

```diff
-             JB = IB.getFramebufferAttachmentParameter(gB.DRAW_FRAMEBUFFER, gB.DEPTH_ATTACHMENT, gB.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(IB.getFramebufferAttachmentParameter(gB.DRAW_FRAMEBUFFER,gB.DEPTH_ATTACHMENT,gB.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type  … [truncated]
+             qt = et.getFramebufferAttachmentParameter(wt.DRAW_FRAMEBUFFER, wt.DEPTH_ATTACHMENT, wt.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(et.getFramebufferAttachmentParameter(wt.DRAW_FRAMEBUFFER,wt.DEPTH_ATTACHMENT,wt.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type  … [truncated]
```

#### 78. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1089` → after: `L1089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1089) · [Before (L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1089)

```diff
-           return `depth ${null!==(IB=TB[ZB])&&void 0!==IB?IB:`0x${ZB.toString(16)}`} clear ${oB}${516===ZB||518===ZB?" (reverse-Z)":""}, samples ${String(BB.getParameter(gB.SAMPLES))}, ${JB}`
+           return `depth ${null!==(et=Ot[Vt])&&void 0!==et?et:`0x${Vt.toString(16)}`} clear ${Dt}${516===Vt||518===Vt?" (reverse-Z)":""}, samples ${String(tt.getParameter(wt.SAMPLES))}, ${qt}`
```

#### 79. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1092` → after: `L1092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1092) · [Before (L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1092)

```diff
-         ZB !== gB.NO_ERROR && qI.gl < kI && (qI.gl++, eB(`GL error 0x${ZB.toString(16)} after program ${pB(oB)}'s first terrain draw (${IB})`))
+         Vt !== wt.NO_ERROR && Ne.gl < He && (Ne.gl++, rt(`GL error 0x${Vt.toString(16)} after program ${ct(Dt)}'s first terrain draw (${et})`))
```

#### 80. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1099-L1100` → after: `L1099-L1100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1099-L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1099-L1100) · [Before (L1099-L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1099-L1100)

```diff
-     var MI = ZB(4698),
-       jI = ZB(4879);
+     var Pe = Vt(4646),
+       Ze = Vt(4859);
```

#### 81. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1129-L1131` → after: `L1129-L1131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1129-L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1129-L1131) · [Before (L1129-L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1129-L1131)

```diff
-       const ZB = null !== BB && void 0 !== BB ? BB : {},
-         TB = null !== IB && void 0 !== IB ? IB : Object.keys(Object.getPrototypeOf(ZB)).concat(Object.keys(ZB));
-       return [...new Set(TB)].filter((BB => "number" === typeof ZB[BB])).map((BB => `${BB} ${String(ZB[BB])}`)).join(", ")
+       const Vt = null !== tt && void 0 !== tt ? tt : {},
+         Ot = null !== et && void 0 !== et ? et : Object.keys(Object.getPrototypeOf(Vt)).concat(Object.keys(Vt));
+       return [...new Set(Ot)].filter((tt => "number" === typeof Vt[tt])).map((tt => `${tt} ${String(Vt[tt])}`)).join(", ")
```

#### 82. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1136` → after: `L1136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1136) · [Before (L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1136)

```diff
-       const TB = null !== (ZB = IB.vertex) && void 0 !== ZB ? ZB : {};
+       const Ot = null !== (Vt = et.vertex) && void 0 !== Vt ? Vt : {};
```

#### 83. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1139` → after: `L1139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1139) · [Before (L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1139)

```diff
-         const ZB = String(null !== (JB = TB.entryPoint) && void 0 !== JB ? JB : "");
+         const Vt = String(null !== (qt = Ot.entryPoint) && void 0 !== qt ? qt : "");
```

#### 84. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1143-L1146` → after: `L1143-L1146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1143-L1146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1143-L1146) · [Before (L1143-L1146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1143-L1146)

```diff
-           const BB = null !== (oB = IB.depthStencil) && void 0 !== oB ? oB : {},
-             TB = null !== (GB = IB.multisample) && void 0 !== GB ? GB : {},
-             JB = String(null !== (vB = BB.depthCompare) && void 0 !== vB ? vB : "");
-           eB(`WebGPU terrain pipeline ${ZB}: depth ${String(null!==(kB=BB.format)&&void 0!==kB?kB:"none")} ${JB}${JB.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(cB=TB.count)&&void 0!==cB?cB:1)}`)
+           const tt = null !== (Dt = et.depthStencil) && void 0 !== Dt ? Dt : {},
+             Ot = null !== (mt = et.multisample) && void 0 !== mt ? mt : {},
+             qt = String(null !== (dt = tt.depthCompare) && void 0 !== dt ? dt : "");
+           rt(`WebGPU terrain pipeline ${Vt}: depth ${String(null!==(jt=tt.format)&&void 0!==jt?jt:"none")} ${qt}${qt.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(Ht=Ot.count)&&void 0!==Ht?Ht:1)}`)
```

#### 85. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1166` → after: `L1166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1166) · [Before (L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1166)

```diff
-       (lI.draws++, "draw" === BB || "drawIndexed" === BB) && (lI.faces += ZB[0] * (null !== (TB = ZB[1]) && void 0 !== TB ? TB : 1) / 6);
+       (ie.draws++, "draw" === tt || "drawIndexed" === tt) && (ie.faces += Vt[0] * (null !== (Ot = Vt[1]) && void 0 !== Ot ? Ot : 1) / 6);
```

#### 86. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1170` → after: `L1170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1170) · [Before (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1170)

```diff
-           return `${IB} ${String(null!==JB&&void 0!==JB?JB:"instances"===IB?1:0)}`
+           return `${et} ${String(null!==qt&&void 0!==qt?qt:"instances"===et?1:0)}`
```

#### 87. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1172` → after: `L1172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1172) · [Before (L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1172)

```diff
-         fI.push(`  ${IB} ${BB} ${TB.join(" ")}`)
+         Ae.push(`  ${et} ${tt} ${Ot.join(" ")}`)
```

#### 88. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1184-L1186` → after: `L1184-L1186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1184-L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1184-L1186) · [Before (L1184-L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1184-L1186)

```diff
-             const ZB = null !== (IB = BB.info) && void 0 !== IB ? IB : {};
-             eB(`WebGPU adapter ${["vendor","architecture","device","description"].map((BB=>{var IB;return`${BB} "${String(null!==(IB=ZB[BB])&&void 0!==IB?IB:"")}"`})).join(" ")}${BB.isFallbackAdapter?" (fallback)":""}`), eB(`WebGPU adapter features ${tI(BB.features)}`), eB(`WebGP … [truncated]
-           }(BB) : eB(`WebGPU requestAdapter(${JSON.stringify(null!==(IB=ZB[0])&&void 0!==IB?IB:{})}) gave none`);
+             const Vt = null !== (et = tt.info) && void 0 !== et ? et : {};
+             rt(`WebGPU adapter ${["vendor","architecture","device","description"].map((tt=>{var et;return`${tt} "${String(null!==(et=Vt[tt])&&void 0!==et?et:"")}"`})).join(" ")}${tt.isFallbackAdapter?" (fallback)":""}`), rt(`WebGPU adapter features ${Be(tt.features)}`), rt(`WebGP … [truncated]
+           }(tt) : rt(`WebGPU requestAdapter(${JSON.stringify(null!==(et=Vt[0])&&void 0!==et?et:{})}) gave none`);
```

#### 89. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1192` → after: `L1192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1192) · [Before (L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1192)

```diff
-           eB(`WebGPU device features ${tI(BB.features)}`), eB(`WebGPU device limits ${bI(BB.limits,PI)}`), BB.addEventListener("uncapturederror", (BB => {
+           rt(`WebGPU device features ${Be(tt.features)}`), rt(`WebGPU device limits ${pe(tt.limits,Le)}`), tt.addEventListener("uncapturederror", (tt => {
```

#### 90. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1197` → after: `L1197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1197) · [Before (L1197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1197)

```diff
-               eB(`WebGPU uncaptured ${null!==(IB=null===JB||void 0===JB||null===(ZB=JB.constructor)||void 0===ZB?void 0:ZB.name)&&void 0!==IB?IB:"error"}: ${fB(String(null!==(TB=null===JB||void 0===JB?void 0:JB.message)&&void 0!==TB?TB:""),600)}`)
+               rt(`WebGPU uncaptured ${null!==(et=null===qt||void 0===qt||null===(Vt=qt.constructor)||void 0===Vt?void 0:Vt.name)&&void 0!==et?et:"error"}: ${At(String(null!==(Ot=null===qt||void 0===qt?void 0:qt.message)&&void 0!==Ot?Ot:""),600)}`)
```

#### 91. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1203` → after: `L1203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1203) · [Before (L1203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1203)

```diff
-             eB(`WebGPU device lost (${String(BB.reason)}): ${fB(String(null!==(IB=BB.message)&&void 0!==IB?IB:""),600)}`)
+             rt(`WebGPU device lost (${String(tt.reason)}): ${At(String(null!==(et=tt.message)&&void 0!==et?et:""),600)}`)
```

#### 92. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1206` → after: `L1206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1206) · [Before (L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1206)

```diff
-           throw eB(`WebGPU requestDevice failed: ${String(BB)}`), BB
+           throw rt(`WebGPU requestDevice failed: ${String(tt)}`), tt
```

#### 93. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1222` → after: `L1222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1222) · [Before (L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1222)

```diff
-               IB[String(ZB.type)] = (null !== (TB = IB[String(ZB.type)]) && void 0 !== TB ? TB : 0) + 1
+               et[String(Vt.type)] = (null !== (Ot = et[String(Vt.type)]) && void 0 !== Ot ? Ot : 0) + 1
```

#### 94. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1224-L1225` → after: `L1224-L1225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1224-L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1224-L1225) · [Before (L1224-L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1224-L1225)

```diff
-             const JB = BB.messages.map((BB => `${String(BB.type)} ${String(BB.lineNum)}:${String(BB.linePos)} ${String(BB.message)}`)).join("\n");
-             LI.compile < kI && (LI.compile++, eB(`WebGPU ${ZB?"terrain ":""}shader module compiled: ${JSON.stringify(IB)}${JB?` first: ${fB(JB.split("\n")[0],300)}`:""}`)), JB && uB(`WebGPU shader module messages:\n${fB(JB)}`)
+             const qt = tt.messages.map((tt => `${String(tt.type)} ${String(tt.lineNum)}:${String(tt.linePos)} ${String(tt.message)}`)).join("\n");
+             oe.compile < He && (oe.compile++, rt(`WebGPU ${Vt?"terrain ":""}shader module compiled: ${JSON.stringify(et)}${qt?` first: ${At(qt.split("\n")[0],300)}`:""}`)), qt && Ut(`WebGPU shader module messages:\n${At(qt)}`)
```

#### 95. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1227` → after: `L1227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1227) · [Before (L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1227)

```diff
-         }(GB, String(null !== (IB = (null !== (ZB = JB[0]) && void 0 !== ZB ? ZB : {}).code) && void 0 !== IB ? IB : "")), GB
+         }(mt, String(null !== (et = (null !== (Vt = qt[0]) && void 0 !== Vt ? Vt : {}).code) && void 0 !== et ? et : "")), mt
```

#### 96. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1231` → after: `L1231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1231) · [Before (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1231)

```diff
-         return xI(oB, null !== (IB = TB[0]) && void 0 !== IB ? IB : {}), oB
+         return xe(Dt, null !== (et = Ot[0]) && void 0 !== et ? et : {}), Dt
```

#### 97. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1236` → after: `L1236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1236) · [Before (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1236)

```diff
-           return xI(BB, null !== (IB = ZB[0]) && void 0 !== IB ? IB : {}), BB
+           return xe(tt, null !== (et = Vt[0]) && void 0 !== et ? et : {}), tt
```

#### 98. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1246-L1248` → after: `L1246-L1248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1246-L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1246-L1248) · [Before (L1246-L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1246-L1248)

```diff
-             } = null !== IB && void 0 !== IB ? IB : {}, vB = String(null !== (ZB = (null !== (TB = BB.vertex) && void 0 !== TB ? TB : {}).entryPoint) && void 0 !== ZB ? ZB : "");
-             eB(`WebGPU pipeline "${String(null!==(JB=BB.label)&&void 0!==JB?JB:"")}" ${vB} rejected (${String(null!==oB&&void 0!==oB?oB:"no reason")}): ${fB(String(null!==GB&&void 0!==GB?GB:IB),600)}`)
-           }(null !== (IB = ZB[0]) && void 0 !== IB ? IB : {}, BB), BB
+             } = null !== et && void 0 !== et ? et : {}, dt = String(null !== (Vt = (null !== (Ot = tt.vertex) && void 0 !== Ot ? Ot : {}).entryPoint) && void 0 !== Vt ? Vt : "");
+             rt(`WebGPU pipeline "${String(null!==(qt=tt.label)&&void 0!==qt?qt:"")}" ${dt} rejected (${String(null!==Dt&&void 0!==Dt?Dt:"no reason")}): ${At(String(null!==mt&&void 0!==mt?mt:et),600)}`)
+           }(null !== (et = Vt[0]) && void 0 !== et ? et : {}, tt), tt
```

#### 99. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1252` → after: `L1252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1252) · [Before (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1252)

```diff
-         const oB = null !== (IB = TB[0]) && void 0 !== IB ? IB : {};
+         const Dt = null !== (et = Ot[0]) && void 0 !== et ? et : {};
```

#### 100. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1254` → after: `L1254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1254) · [Before (L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1254)

```diff
-         eI++ < 3 && eB(`WebGPU canvas ${String(oB.format)} ${String(null!==(GB=oB.colorSpace)&&void 0!==GB?GB:"srgb")} alpha ${String(null!==(vB=oB.alphaMode)&&void 0!==vB?vB:"opaque")}`);
+         re++ < 3 && rt(`WebGPU canvas ${String(Dt.format)} ${String(null!==(mt=Dt.colorSpace)&&void 0!==mt?mt:"srgb")} alpha ${String(null!==(dt=Dt.alphaMode)&&void 0!==dt?dt:"opaque")}`);
```

#### 101. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1266` → after: `L1266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1266) · [Before (L1266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1266)

```diff
-         ...MI.c
+         ...Pe.b
```

#### 102. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1279` → after: `L1279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1279) · [Before (L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1279)

```diff
-         ...MI.c
+         ...Pe.b
```

#### 103. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1282-L1283` → after: `L1282-L1283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1282-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1282-L1283) · [Before (L1282-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1282-L1283)

```diff
-         adrenoProbe: null !== (BB = (0, oB.r)("adrenoProbe")) && void 0 !== BB ? BB : ""
-       }), eB("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), zI || "undefined" === typeof window || (zI = !0, "undefined" !== typeof WebGL2RenderingContext && wI(WebGL2RenderingContext.prototype, !0), "undefined" !== typeo … [truncated]
+         adrenoProbe: null !== (tt = (0, Dt.r)("adrenoProbe")) && void 0 !== tt ? tt : ""
+       }), rt("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), Ee || "undefined" === typeof window || (Ee = !0, "undefined" !== typeof WebGL2RenderingContext && he(WebGL2RenderingContext.prototype, !0), "undefined" !== typeo … [truncated]
```

#### 104. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1290-L1292` → after: `L1290-L1292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1290-L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1290-L1292) · [Before (L1290-L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1290-L1292)

```diff
-       hZ(), TZ = null !== (IB = null === BB || void 0 === BB ? void 0 : BB.backend) && void 0 !== IB ? IB : null;
-       const TB = `, renderer param ${null!==(ZB=(0,oB.r)("renderer"))&&void 0!==ZB?ZB:"none"}, faceCull ${"0"===oZ.faceCull?"off (whole parts)":"on"}, adrenoProbe ${oZ.adrenoProbe||"none"}`;
-       eB(`${(0,jI.b)(BB)}${null===BB?"":TB}`)
+       lV(), qV = null !== (et = null === tt || void 0 === tt ? void 0 : tt.backend) && void 0 !== et ? et : null;
+       const Ot = `, renderer param ${null!==(Vt=(0,Dt.r)("renderer"))&&void 0!==Vt?Vt:"none"}, faceCull ${"0"===mV.faceCull?"off (whole parts)":"on"}, adrenoProbe ${mV.adrenoProbe||"none"}`;
+       rt(`${(0,Ze.d)(tt)}${null===tt?"":Ot}`)
```

#### 105. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1297-L1298` → after: `L1297-L1298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1297-L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1297-L1298) · [Before (L1297-L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1297-L1298)

```diff
-         IB = NZ(nZ, VI, SI).then((IB => yZ(`${Math.round((performance.now()-BB)/1e3)} s after playable${IB?"":", no terrain drawn yet"}`)));
-       (0, JB.e)(eB, (async () => {
+         et = wV(QV, ne, tV).then((et => aV(`${Math.round((performance.now()-tt)/1e3)} s after playable${et?"":", no terrain drawn yet"}`)));
+       (0, qt.c)(rt, (async () => {
```

#### 106. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1303-L1304` → after: `L1303-L1304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1303-L1304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1303-L1304) · [Before (L1303-L1304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1303-L1304)

```diff
-       const JB = (0, TB.b)(ZB).then((() => !1));
-       return await (0, TB.b)(IB), Promise.race([BB.then((() => !0)), JB])
+       const qt = (0, Ot.d)(Vt).then((() => !1));
+       return await (0, Ot.d)(et), Promise.race([tt.then((() => !0)), qt])
```

#### 107. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1316` → after: `L1316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1316) · [Before (L1316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1316)

```diff
-       (GZ = !0, eB(`renderer caps ${null!==(BB=oZ.caps)&&void 0!==BB?BB:"(not noted)"}; terrain fetch ${null!==(IB=oZ.fetch)&&void 0!==IB?IB:"(not noted)"}`), oZ.adrenoProbe) && eB(`adrenoProbe ${oZ.adrenoProbe} asked; in force (storage fetch only): ${null!==(ZB=oZ.probe)&&void 0 … [truncated]
+       (dV = !0, rt(`renderer caps ${null!==(tt=mV.caps)&&void 0!==tt?tt:"(not noted)"}; terrain fetch ${null!==(et=mV.fetch)&&void 0!==et?et:"(not noted)"}`), mV.adrenoProbe) && rt(`adrenoProbe ${mV.adrenoProbe} asked; in force (storage fetch only): ${null!==(Vt=mV.probe)&&void 0 … [truncated]
```

#### 108. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1325` → after: `L1325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1325) · [Before (L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1325)

```diff
-             ZB.push(`GL ${String(BB.getParameter(BB.VERSION))} | ${String(BB.getParameter(BB.SHADING_LANGUAGE_VERSION))} | ${String(BB.getParameter(BB.VENDOR))} / ${String(BB.getParameter(BB.RENDERER))}`), ZB.push(`GL unmasked ${JB} / ${oB}`);
+             Vt.push(`GL ${String(tt.getParameter(tt.VERSION))} | ${String(tt.getParameter(tt.SHADING_LANGUAGE_VERSION))} | ${String(tt.getParameter(tt.VENDOR))} / ${String(tt.getParameter(tt.RENDERER))}`), Vt.push(`GL unmasked ${qt} / ${Dt}`);
```

#### 109. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1335` → after: `L1335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1335) · [Before (L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1335)

```diff
-             "MAX_UNIFORM_BLOCK_SIZE" in BB && GB.push(["MAX_UNIFORM_BLOCK_SIZE", BB.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", BB.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", BB.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", BB.MAX_TRANSFORM_FEEDBACK_I … [truncated]
+             "MAX_UNIFORM_BLOCK_SIZE" in tt && mt.push(["MAX_UNIFORM_BLOCK_SIZE", tt.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", tt.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", tt.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", tt.MAX_TRANSFORM_FEEDBACK_I … [truncated]
```

#### 110. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1339` → after: `L1339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1339) · [Before (L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1339)

```diff
-               return `${ZB} highp float ${TB?`${TB.rangeMin}/${TB.rangeMax}/${TB.precision}`:"?"} int ${JB?`${JB.rangeMin}/${JB.rangeMax}/${JB.precision}`:"?"}`
+               return `${Vt} highp float ${Ot?`${Ot.rangeMin}/${Ot.rangeMax}/${Ot.precision}`:"?"} int ${qt?`${qt.rangeMin}/${qt.rangeMax}/${qt.precision}`:"?"}`
```

#### 111. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1341` → after: `L1341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1341) · [Before (L1341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1341)

```diff
-             ZB.push(`GL precision ${vB(BB.VERTEX_SHADER,"VS")}, ${vB(BB.FRAGMENT_SHADER,"FS")}`);
+             Vt.push(`GL precision ${dt(tt.VERTEX_SHADER,"VS")}, ${dt(tt.FRAGMENT_SHADER,"FS")}`);
```

#### 112. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1343` → after: `L1343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1343) · [Before (L1343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1343)

```diff
-             return ZB.push(`GL context ${JSON.stringify(kB)} drawingBuffer ${BB.drawingBufferWidth}x${BB.drawingBufferHeight}${"drawingBufferFormat"in BB?` format 0x${Number(BB.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in BB?` ${String(BB.drawingBufferColo … [truncated]
+             return Vt.push(`GL context ${JSON.stringify(jt)} drawingBuffer ${tt.drawingBufferWidth}x${tt.drawingBufferHeight}${"drawingBufferFormat"in tt?` format 0x${Number(tt.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in tt?` ${String(tt.drawingBufferColo … [truncated]
```

#### 113. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1350` → after: `L1350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1350) · [Before (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1350)

```diff
-           eB(`programs: ${IB} live of ${aB.length} linked, ${BB} packed terrain; CPU page copies ${Math.round(jB.shadowBytes/1048576)} MiB (${jB.uncopied} over budget)`)
+           rt(`programs: ${et} live of ${Rt.length} linked, ${tt} packed terrain; CPU page copies ${Math.round(Zt.shadowBytes/1048576)} MiB (${Zt.uncopied} over budget)`)
```

#### 114. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1363` → after: `L1363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1363) · [Before (L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1363)

```diff
-                 fI = null, eB(`WebGPU draw ranges (${BB}): ${IB.length} terrain draws recorded in a second (first ${cI}; bundles replay without new ones)`);
+                 Ae = null, rt(`WebGPU draw ranges (${tt}): ${et.length} terrain draws recorded in a second (first ${Xe}; bundles replay without new ones)`);
```

#### 115. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1369` → after: `L1369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1369) · [Before (L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1369)

```diff
-             if (await (0, MI.j)(oZ, "slotCheck", ["1"], IZ, ZZ), "1" === oZ.slotCheck) return void eB(`slot check: no answer in ${IZ} ms (only the storage fetch has one; a later answer logs on its own)`);
+             if (await (0, Pe.i)(mV, "slotCheck", ["1"], VV, OV), "1" === mV.slotCheck) return void rt(`slot check: no answer in ${VV} ms (only the storage fetch has one; a later answer logs on its own)`);
```

#### 116. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1372` → after: `L1372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1372) · [Before (L1372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1372)

```diff
-         eB(`check (${BB}) done: bloxdDebug.save() downloads it all`)
+         rt(`check (${tt}) done: bloxdDebug.save() downloads it all`)
```

#### 117. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1374` → after: `L1374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1374) · [Before (L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1374)

```diff
-         eB(`check (${BB}) failed: ${String(IB)}`)
+         rt(`check (${tt}) failed: ${String(et)}`)
```

#### 118. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1418-L1419` → after: `L1418-L1419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1418-L1419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1418-L1419) · [Before (L1418-L1419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1418-L1419)

```diff
-       const JB = "webgpu" === TZ ? [`terrain ${BB(IB.draws)} draws ${BB(IB.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((BB => ZB[BB].draws > 0)).map((IB => `${IB} ${BB(ZB[IB].draws)} draws ${BB(ZB[IB].faces)} faces a frame`));
-       eB(`${kZ} frames: ${JB.join(", ")||"no draws"}; uploaded ${Math.round(TB.buffer/1024)} KiB to buffers, ${Math.round(TB.texture/1024)} KiB to data textures`), kZ = 0
+       const qt = "webgpu" === qV ? [`terrain ${tt(et.draws)} draws ${tt(et.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((tt => Vt[tt].draws > 0)).map((et => `${et} ${tt(Vt[et].draws)} draws ${tt(Vt[et].faces)} faces a frame`));
+       rt(`${HV} frames: ${qt.join(", ")||"no draws"}; uploaded ${Math.round(Ot.buffer/1024)} KiB to buffers, ${Math.round(Ot.texture/1024)} KiB to data textures`), HV = 0
```

#### 119. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1422` → after: `L1422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1422) · [Before (L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1422)

```diff
-   4879: (BB, IB, ZB) => {
+   4859: (tt, et, Vt) => {
```

#### 120. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1425-L1426` → after: `L1425-L1426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1425-L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1425-L1426) · [Before (L1425-L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1425-L1426)

```diff
-       const IB = BB.adapter ? `${BB.adapter.vendor}/${BB.adapter.architecture}` : "none";
-       return `backend ${BB.backend}: reason ${BB.reason}, source ${BB.source}, adapter ${IB}`
+       const et = tt.adapter ? `${tt.adapter.vendor}/${tt.adapter.architecture}` : "none";
+       return `backend ${tt.backend}: reason ${tt.reason}, source ${tt.source}, adapter ${et}`
```

#### 121. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1429` → after: `L1429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderDebug.js#L1429) · [Before (L1429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderDebug.js#L1429)

```diff
-       b: () => TB
+       d: () => Ot
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/renderLite.js` (c6gaap.4d6587ec → igzsf.a0b73a5f)

- **File**: `bundles/bloxd.io/chunks/js/renderLite.js` (39 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070)

#### 1. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderLite.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderLite.js#L4)

```diff
-   51069: (BB, IB, ZB) => {
+   51287: (tt, et, Vt) => {
```

#### 2. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L8-L19` → after: `L8-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L8-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderLite.js#L8-L19) · [Before (L8-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderLite.js#L8-L19)

```diff
-     var TB = ZB(3036),
-       JB = ZB(684),
-       oB = ZB(138),
-       GB = ZB(4975),
-       vB = ZB(41052),
-       kB = ZB(4969),
-       cB = ZB(40759),
-       nB = ZB(40643),
-       hB = ZB(40792),
-       zB = ZB(2973),
-       FB = ZB(4698),
-       NB = ZB(34046);
+     var Ot = Vt(2961),
+       qt = Vt(725),
+       Dt = Vt(146),
+       mt = Vt(4963),
+       dt = Vt(41222),
+       jt = Vt(4960),
+       Ht = Vt(40905),
+       Xt = Vt(40769),
+       Qt = Vt(40940),
+       lt = Vt(2902),
+       Et = Vt(4646),
+       ft = Vt(34235);
```

#### 3. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderLite.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderLite.js#L30)

```diff
-         return void 0 === BB || BB === this.noted || IB - this.atMs < ZB ? null : (this.noted = BB, this.lines++, this.atMs = IB, `${this.label}: ${BB}`)
+         return void 0 === tt || tt === this.noted || et - this.atMs < Vt ? null : (this.noted = tt, this.lines++, this.atMs = et, `${this.label}: ${tt}`)
```

#### 4. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L41-L42` → after: `L41-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderLite.js#L41-L42) · [Before (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderLite.js#L41-L42)

```diff
-             const [ZB, TB] = BB.split(":"), JB = null !== (IB = gB.get(ZB.slice(-1))) && void 0 !== IB ? IB : "";
-             return `gl link failed: program row ${parseInt(ZB)}${JB}, read ${TB} ms after issue`
+             const [Vt, Ot] = tt.split(":"), qt = null !== (et = wt.get(Vt.slice(-1))) && void 0 !== et ? et : "";
+             return `gl link failed: program row ${parseInt(Vt)}${qt}, read ${Ot} ms after issue`
```

#### 5. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderLite.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderLite.js#L47)

```diff
-         return this.heldLogged || void 0 === BB ? null : (this.heldLogged = !0, `first view by the backstop, draws held for programs ${BB}`)
+         return this.heldLogged || void 0 === tt ? null : (this.heldLogged = !0, `first view by the backstop, draws held for programs ${tt}`)
```

#### 6. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L51-L54` → after: `L51-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L51-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderLite.js#L51-L54) · [Before (L51-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderLite.js#L51-L54)

```diff
-         return [JB && `${JB}; tab ${(0,NB.f)(TB)}`, this.programUse.line(IB, ZB)].filter((BB => null !== BB))
-       }
-     }
-     var UB = ZB(4879);
+         return [qt && `${qt}; tab ${(0,ft.f)(Ot)}`, this.programUse.line(et, Vt)].filter((tt => null !== tt))
+       }
+     }
+     var Mt = Vt(4859);
```

#### 7. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L93` → after: `L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderLite.js#L93) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderLite.js#L93)

```diff
-         return this.logged >= 20 || this.seen.has(BB) ? (this.unlogged++, null) : (this.seen.add(BB), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${BB}` : BB)
+         return this.logged >= 20 || this.seen.has(tt) ? (this.unlogged++, null) : (this.seen.add(tt), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${tt}` : tt)
```

#### 8. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L102` → after: `L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderLite.js#L102) · [Before (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderLite.js#L102)

```diff
-       (0, zB.o)("renderlite", BB)
+       (0, lt.n)("renderlite", tt)
```

#### 9. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L106` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderLite.js#L106) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderLite.js#L106)

```diff
-         this.frames = new WB, this.events = new CB, this.programLines = new yB, this.compileSummary = new qB("webgpu compiles"), this.hidden = new NB.b, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performan … [truncated]
+         this.frames = new bt, this.events = new Ct, this.programLines = new Nt, this.compileSummary = new yt("webgpu compiles"), this.hidden = new ft.d, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performan … [truncated]
```

#### 10. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L109` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderLite.js#L109) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderLite.js#L109)

```diff
-         }, this.Iz = () => {
+         }, this.BQ = () => {
```

#### 11. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L112` → after: `L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderLite.js#L112) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderLite.js#L112)

```diff
-             JB = (0, nB.j)(),
+             qt = (0, Xt.g)(),
```

#### 12. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L128` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderLite.js#L128) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderLite.js#L128)

```diff
-           const FB = null !== (BB = null === (IB = (0, cB.Q)((0, TB.x)())) || void 0 === IB ? void 0 : IB.YTB()) && void 0 !== BB ? BB : 0;
+           const Et = null !== (tt = null === (et = (0, Ht.P)((0, Ot.F)())) || void 0 === et ? void 0 : et.ZOt()) && void 0 !== tt ? tt : 0;
```

#### 13. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L131-L132` → after: `L131-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderLite.js#L131-L132) · [Before (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderLite.js#L131-L132)

```diff
-               TB = [`${Math.round(ZB)}s: ${BB.drawn} drawn (${(BB.drawn/ZB).toFixed(1)}/s), ${BB.paced} paced, ${BB.frames-BB.drawn-BB.paced} skipped`, `gap max ${Math.round(BB.gapMaxMs)} ms, ${BB.longGaps} over 50 ms`, `render cpu ${BB.drawn?(BB.renderUs/BB.drawn/1e3).toFixed(2) … [truncated]
-             null !== IB.gpu && TB.push(`gpu ${IB.gpu.timed?(IB.gpu.us/IB.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${IB.gpu.timed} timed`);
+               Ot = [`${Math.round(Vt)}s: ${tt.drawn} drawn (${(tt.drawn/Vt).toFixed(1)}/s), ${tt.paced} paced, ${tt.frames-tt.drawn-tt.paced} skipped`, `gap max ${Math.round(tt.gapMaxMs)} ms, ${tt.longGaps} over 50 ms`, `render cpu ${tt.drawn?(tt.renderUs/tt.drawn/1e3).toFixed(2) … [truncated]
+             null !== et.gpu && Ot.push(`gpu ${et.gpu.timed?(et.gpu.us/et.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${et.gpu.timed} timed`);
```

#### 14. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L134-L136` → after: `L134-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L134-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderLite.js#L134-L136) · [Before (L134-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderLite.js#L134-L136)

```diff
-             TB.push(null === JB ? "draws none yet" : `draws ${(0,vB.d)(JB)} (terrain ${JB.terrainOpaque}+${JB.terrainTransparent}, pack ${JB.terrainPack}, meshes ${JB.regular+JB.thin+JB.line+JB.text}, sky ${JB.earthSky+JB.skyMeshes}, particles ${JB.particles})`), null !== JB && J … [truncated]
-             const oB = null === IB.gpuBytesBefore ? "" : ` (${IB.gpuBytes>=IB.gpuBytesBefore?"+":"-"}${dB(Math.abs(IB.gpuBytes-IB.gpuBytesBefore))})`;
-             return TB.push(`gpu mem ${dB(IB.gpuBytes)} MiB${oB}`), TB.push(`pending ${IB.pending}`, "terrain " + (IB.terrainDrawn ? "drawn" : "not drawn yet")), IB.eventsUnlogged > 0 && TB.push(`${IB.eventsUnlogged} events unlogged`), TB.join("; ")
+             Ot.push(null === qt ? "draws none yet" : `draws ${(0,dt.d)(qt)} (terrain ${qt.terrainOpaque}+${qt.terrainTransparent}, pack ${qt.terrainPack}, meshes ${qt.regular+qt.thin+qt.line+qt.text}, sky ${qt.earthSky+qt.skyMeshes}, particles ${qt.particles})`), null !== qt && q … [truncated]
+             const Dt = null === et.gpuBytesBefore ? "" : ` (${et.gpuBytes>=et.gpuBytesBefore?"+":"-"}${Jt(Math.abs(et.gpuBytes-et.gpuBytesBefore))})`;
+             return Ot.push(`gpu mem ${Jt(et.gpuBytes)} MiB${Dt}`), Ot.push(`pending ${et.pending}`, "terrain " + (et.terrainDrawn ? "drawn" : "not drawn yet")), et.eventsUnlogged > 0 && Ot.push(`${et.eventsUnlogged} events unlogged`), Ot.join("; ")
```

#### 15. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L140` → after: `L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderLite.js#L140) · [Before (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderLite.js#L140)

```diff
-             census: (0, vB.e)(JB.api),
+             census: (0, dt.h)(qt.api),
```

#### 16. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L144` → after: `L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderLite.js#L144) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderLite.js#L144)

```diff
-             terrainDrawn: 0 !== (ZB.headerWord(GB.J.LoadSteps) & GB.W.TerrainDrawn),
+             terrainDrawn: 0 !== (Vt.headerWord(mt.J.LoadSteps) & mt.X.TerrainDrawn),
```

#### 17. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L147` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderLite.js#L147) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderLite.js#L147)

```diff
-         }, QB(`${(0,UB.b)(BB)}; client ${JB.p.client} (${JB.p.reason})`), setInterval(this.Iz, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
+         }, ut(`${(0,Mt.d)(tt)}; client ${qt.u.client} (${qt.u.reason})`), setInterval(this.BQ, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
```

#### 18. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L159` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderLite.js#L159) · [Before (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderLite.js#L159)

```diff
-           if (TB >= GB.n.RenderDeviceLost && TB <= GB.n.RenderSerialLinks) this.event(`render error ${(0,kB.fe)(TB)}${null!==(IB=null===(ZB=(0,hB.b)(TB,JB))||void 0===ZB?void 0:ZB.words)&&void 0!==IB?IB:""} (detail ${JB})`)
+           if (Ot >= mt.l.RenderDeviceLost && Ot <= mt.l.RenderSerialLinks) this.event(`render error ${(0,jt.qe)(Ot)}${null!==(et=null===(Vt=(0,Qt.b)(Ot,qt))||void 0===Vt?void 0:Vt.words)&&void 0!==et?et:""} (detail ${qt})`)
```

#### 19. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L163` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderLite.js#L163) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderLite.js#L163)

```diff
-         this.event(`render reload: ${BB?"webgpu":"gl"} ${ZB}, losses ${IB}${void 0===TB?"":`: ${TB}`}`)
+         this.event(`render reload: ${tt?"webgpu":"gl"} ${Vt}, losses ${et}${void 0===Ot?"":`: ${Ot}`}`)
```

#### 20. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L171-L173` → after: `L171-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L171-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderLite.js#L171-L173) · [Before (L171-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderLite.js#L171-L173)

```diff
-         const JB = null !== TB && 0 !== TB.lastError ? `, last error ${(0,kB.fe)(TB.lastError)} (detail ${TB.lastErrorDetail})` : "",
-           oB = ZB instanceof Error ? `${ZB.name}: ${ZB.message}` : null === ZB || void 0 === ZB ? "" : String(ZB);
-         this.event(`core stopped at ${IB}${JB}${oB&&`: ${oB}`}`)
+         const qt = null !== Ot && 0 !== Ot.lastError ? `, last error ${(0,jt.qe)(Ot.lastError)} (detail ${Ot.lastErrorDetail})` : "",
+           Dt = Vt instanceof Error ? `${Vt.name}: ${Vt.message}` : null === Vt || void 0 === Vt ? "" : String(Vt);
+         this.event(`core stopped at ${et}${qt}${Dt&&`: ${Dt}`}`)
```

#### 21. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L196` → after: `L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderLite.js#L196) · [Before (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderLite.js#L196)

```diff
-         this.gridLogged || void 0 === IB || (this.gridLogged = !0, QB(`gl1 grid ${IB}`))
+         this.gridLogged || void 0 === et || (this.gridLogged = !0, ut(`gl1 grid ${et}`))
```

#### 22. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L203-L205` → after: `L203-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L203-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderLite.js#L203-L205) · [Before (L203-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderLite.js#L203-L205)

```diff
-           TB = (0, oB.p)(),
-           JB = void 0 === (null === ZB || void 0 === ZB ? void 0 : ZB.parallelCompile) ? "" : `; parallel compile ${ZB.parallelCompile}`;
-         QB(`renderer gl ${TB?`${TB.vendor} / ${TB.renderer}`:"(not read)"}; terrain fetch ${null!==(BB=null===ZB||void 0===ZB?void 0:ZB.fetch)&&void 0!==BB?BB:"(not noted)"}${JB}`), QB(`renderer caps ${null!==(IB=null===ZB||void 0===ZB?void 0:ZB.caps)&&void 0!==IB?IB:"(not noted) … [truncated]
+           Ot = (0, Dt.y)(),
+           qt = void 0 === (null === Vt || void 0 === Vt ? void 0 : Vt.parallelCompile) ? "" : `; parallel compile ${Vt.parallelCompile}`;
+         ut(`renderer gl ${Ot?`${Ot.vendor} / ${Ot.renderer}`:"(not read)"}; terrain fetch ${null!==(tt=null===Vt||void 0===Vt?void 0:Vt.fetch)&&void 0!==tt?tt:"(not noted)"}${qt}`), ut(`renderer caps ${null!==(et=null===Vt||void 0===Vt?void 0:Vt.caps)&&void 0!==et?et:"(not noted) … [truncated]
```

#### 23. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L211` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderLite.js#L211) · [Before (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderLite.js#L211)

```diff
-       return (0, FB.g)(), wB ??= new sB(BB), wB
+       return (0, Et.f)(), ht ??= new Kt(tt), ht
```

#### 24. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L214` → after: `L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderLite.js#L214) · [Before (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderLite.js#L214)

```diff
-   4879: (BB, IB, ZB) => {
+   4859: (tt, et, Vt) => {
```

#### 25. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L217-L218` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderLite.js#L217-L218) · [Before (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderLite.js#L217-L218)

```diff
-       const IB = BB.adapter ? `${BB.adapter.vendor}/${BB.adapter.architecture}` : "none";
-       return `backend ${BB.backend}: reason ${BB.reason}, source ${BB.source}, adapter ${IB}`
+       const et = tt.adapter ? `${tt.adapter.vendor}/${tt.adapter.architecture}` : "none";
+       return `backend ${tt.backend}: reason ${tt.reason}, source ${tt.source}, adapter ${et}`
```

#### 26. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L221` → after: `L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderLite.js#L221) · [Before (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderLite.js#L221)

```diff
-       b: () => TB
+       d: () => Ot
```

#### 27. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L224-L226` → after: `L224-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L224-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderLite.js#L224-L226) · [Before (L224-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderLite.js#L224-L226)

```diff
-   34046: (BB, IB, ZB) => {
-     function TB(BB) {
-       return `hidden ${BB.changes} changes, ${Math.round(BB.hiddenMs)} ms`
+   34235: (tt, et, Vt) => {
+     function Ot(tt) {
+       return `hidden ${tt.changes} changes, ${Math.round(tt.hiddenMs)} ms`
```

#### 28. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L229` → after: `L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderLite.js#L229) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderLite.js#L229)

```diff
-       b: () => JB,
+       d: () => qt,
```

#### 29. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L237` → after: `L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderLite.js#L237) · [Before (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderLite.js#L237)

```diff
-         this.changes++, document.hidden ? this.hiddenSinceMs = BB : this.hiddenSinceMs >= 0 && (this.hiddenMs += BB - this.hiddenSinceMs, this.hiddenSinceMs = -1)
+         this.changes++, document.hidden ? this.hiddenSinceMs = tt : this.hiddenSinceMs >= 0 && (this.hiddenMs += tt - this.hiddenSinceMs, this.hiddenSinceMs = -1)
```

#### 30. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L247` → after: `L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderLite.js#L247) · [Before (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderLite.js#L247)

```diff
-   41052: (BB, IB, ZB) => {
+   41222: (tt, et, Vt) => {
```

#### 31. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L250-L251` → after: `L250-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderLite.js#L250-L251) · [Before (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderLite.js#L250-L251)

```diff
-       e: () => oB,
-       h: () => vB
+       h: () => Dt,
+       k: () => dt
```

#### 32. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L253-L258` → after: `L253-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L253-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderLite.js#L253-L258) · [Before (L253-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderLite.js#L253-L258)

```diff
-     var TB = ZB(40633),
-       JB = ZB(40643);
- 
-     function oB(BB) {
-       if (BB.queries.drawCensus() < TB.qb.BYTES) return null;
-       const IB = BB.memoryData(BB.scratch(), TB.qb.BYTES, 4, "the draw census");
+     var Ot = Vt(40761),
+       qt = Vt(40769);
+ 
+     function Dt(tt) {
+       if (tt.queries.drawCensus() < Ot.Cb.BYTES) return null;
+       const et = tt.memoryData(tt.scratch(), Ot.Cb.BYTES, 4, "the draw census");
```

#### 33. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L260-L273` → after: `L260-L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L260-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderLite.js#L260-L273) · [Before (L260-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderLite.js#L260-L273)

```diff
-         terrainOpaque: TB.qb.terrainOpaque(IB, 0),
-         terrainTransparent: TB.qb.terrainTransparent(IB, 0),
-         terrainPack: TB.qb.terrainPack(IB, 0),
-         earthSky: TB.qb.earthSky(IB, 0),
-         skyMeshes: TB.qb.skyMeshes(IB, 0),
-         regular: TB.qb.regular(IB, 0),
-         thin: TB.qb.thin(IB, 0),
-         line: TB.qb.line(IB, 0),
-         text: TB.qb.text(IB, 0),
-         particles: TB.qb.particles(IB, 0),
-         terrainParts: TB.qb.terrainParts(IB, 0),
-         terrainCompiling: TB.qb.terrainCompiling(IB, 0),
-         ringCopiesMax: TB.qb.ringCopiesMax(IB, 0),
-         ringBusyWrites: TB.qb.ringBusyWrites(IB, 0)
+         terrainOpaque: Ot.Cb.terrainOpaque(et, 0),
+         terrainTransparent: Ot.Cb.terrainTransparent(et, 0),
+         terrainPack: Ot.Cb.terrainPack(et, 0),
+         earthSky: Ot.Cb.earthSky(et, 0),
+         skyMeshes: Ot.Cb.skyMeshes(et, 0),
+         regular: Ot.Cb.regular(et, 0),
+         thin: Ot.Cb.thin(et, 0),
+         line: Ot.Cb.line(et, 0),
+         text: Ot.Cb.text(et, 0),
+         particles: Ot.Cb.particles(et, 0),
+         terrainParts: Ot.Cb.terrainParts(et, 0),
+         terrainCompiling: Ot.Cb.terrainCompiling(et, 0),
+         ringCopiesMax: Ot.Cb.ringCopiesMax(et, 0),
+         ringBusyWrites: Ot.Cb.ringBusyWrites(et, 0)
```

#### 34. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L293` → after: `L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderLite.js#L293) · [Before (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderLite.js#L293)

```diff
-       const BB = (0, JB.j)();
+       const tt = (0, qt.g)();
```

#### 35. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L311` → after: `L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderLite.js#L311) · [Before (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderLite.js#L311)

```diff
-           value: `${GB(IB)}`
+           value: `${mt(et)}`
```

#### 36. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L314` → after: `L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderLite.js#L314) · [Before (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderLite.js#L314)

```diff
-           value: `${ZB} opaque / ${TB} transparent (${JB} shader pack)`
+           value: `${Vt} opaque / ${Ot} transparent (${qt} shader pack)`
```

#### 37. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L317` → after: `L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderLite.js#L317) · [Before (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderLite.js#L317)

```diff
-           value: `${cB} / ${nB}`
+           value: `${Ht} / ${Xt}`
```

#### 38. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L320` → after: `L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderLite.js#L320) · [Before (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderLite.js#L320)

```diff
-           value: `${zB} / ${hB}`
+           value: `${lt} / ${Qt}`
```

#### 39. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L323` → after: `L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderLite.js#L323) · [Before (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderLite.js#L323)

```diff
-           value: `${vB+kB} / ${FB}`
+           value: `${dt+jt} / ${Et}`
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/renderProbe.js` (c6gaap.4d6587ec → igzsf.a0b73a5f)

- **File**: `bundles/bloxd.io/chunks/js/renderProbe.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff)

#### 1. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderProbe.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderProbe.js#L4)

```diff
-   51071: (BB, IB, ZB) => {
+   51293: (tt, et, Vt) => {
```

#### 2. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderProbe.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderProbe.js#L8-L11)

```diff
-     var TB = ZB(671),
-       JB = ZB(4572),
-       oB = ZB(2973),
-       GB = ZB(4698);
+     var Ot = Vt(712),
+       qt = Vt(4503),
+       Dt = Vt(2902),
+       mt = Vt(4646);
```

#### 3. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderProbe.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderProbe.js#L24)

```diff
-       return `${BB}; ${ZB?`os ${ZB.os}, gpu ${null!==(JB=ZB.gpuFamily)&&void 0!==JB?JB:"unknown"} ${null!==(oB=ZB.gpuModel)&&void 0!==oB?oB:"unknown"}`:"device unknown"}, version ${TB.b}; ${IB}`
+       return `${tt}; ${Vt?`os ${Vt.os}, gpu ${null!==(qt=Vt.gpuFamily)&&void 0!==qt?qt:"unknown"} ${null!==(Dt=Vt.gpuModel)&&void 0!==Dt?Dt:"unknown"}`:"device unknown"}, version ${Ot.d}; ${et}`
```

#### 4. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L29` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderProbe.js#L29) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderProbe.js#L29)

```diff
-       const ZB = null !== (IB = null === BB || void 0 === BB ? void 0 : BB.backend) && void 0 !== IB ? IB : "none";
+       const Vt = null !== (et = null === tt || void 0 === tt ? void 0 : tt.backend) && void 0 !== et ? et : "none";
```

#### 5. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L31` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderProbe.js#L31) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderProbe.js#L31)

```diff
-         const BB = (0, GB.g)();
+         const tt = (0, mt.f)();
```

#### 6. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L36` → after: `L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderProbe.js#L36) · [Before (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderProbe.js#L36)

```diff
-         return void(0, oB.o)("renderprobe", `decode and particle probes not run: the renderer is ${ZB}, and they read WebGL2's draws`)
+         return void(0, Dt.n)("renderprobe", `decode and particle probes not run: the renderer is ${Vt}, and they read WebGL2's draws`)
```

#### 7. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L38` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderProbe.js#L38) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderProbe.js#L38)

```diff
-       const TB = (0, GB.g)();
+       const Ot = (0, mt.f)();
```

#### 8. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L43-L44` → after: `L43-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/renderProbe.js#L43-L44) · [Before (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/renderProbe.js#L43-L44)

```diff
-         of cB)(0, GB.j)(TB, hB, ["1", "pending"], kB, vB).then((BB => {
-         void 0 !== BB && (0, oB.o)("renderprobe", nB(zB, BB, (0, JB.c)(!1)))
+         of Ht)(0, mt.i)(Ot, Qt, ["1", "pending"], jt, dt).then((tt => {
+         void 0 !== tt && (0, Dt.n)("renderprobe", Xt(lt, tt, (0, qt.e)(!1)))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (c6gaap.4d6587ec → igzsf.a0b73a5f)

- **File**: `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9)

#### 1. `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L4)

```diff
-   38681: (BB, IB, ZB) => {
+   38860: (tt, et, Vt) => {
```

#### 2. `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (Changed code · before: `L9-L11` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L9-L11) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L9-L11)

```diff
-     var TB = ZB(663),
-       JB = ZB(4416),
-       oB = ZB(38685);
+     var Ot = Vt(707),
+       qt = Vt(4339),
+       Dt = Vt(38869);
```

#### 3. `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L24)

```diff
-     }(0, oB.g)("skyblock", ((BB, IB) => {
+     }(0, Dt.e)("skyblock", ((tt, et) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/scrollDebug.js` (c6gaap.4d6587ec → igzsf.a0b73a5f)

- **File**: `bundles/bloxd.io/chunks/js/scrollDebug.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d)

#### 1. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/scrollDebug.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/scrollDebug.js#L4)

```diff
-   4881: (BB, IB, ZB) => {
+   4861: (tt, et, Vt) => {
```

#### 2. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L16-L17` → after: `L16-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/scrollDebug.js#L16-L17) · [Before (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/scrollDebug.js#L16-L17)

```diff
-     var TB = ZB(20),
-       JB = ZB(2973);
+     var Ot = Vt(26),
+       qt = Vt(2902);
```

#### 3. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/scrollDebug.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/scrollDebug.js#L59)

```diff
-       return `${cB[BB]} ${IB}`
+       return `${Ht[tt]} ${et}`
```

#### 4. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/scrollDebug.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/scrollDebug.js#L71)

```diff
-         return [NB(JB, `${oB?`${BB[JB]} -> ${IB[JB]}`:String(IB[JB])}${GB?` (via ${ZB[JB]}..${TB[JB]})`:""}`)]
+         return [ft(qt, `${Dt?`${tt[qt]} -> ${et[qt]}`:String(et[qt])}${mt?` (via ${Vt[qt]}..${Ot[qt]})`:""}`)]
```

#### 5. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L81-L82` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/scrollDebug.js#L81-L82) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/scrollDebug.js#L81-L82)

```diff
-       const ZB = (null !== (IB = BB.getAttribute("class")) && void 0 !== IB ? IB : "").trim().replace(/\s+/g, ".").slice(0, 40);
-       return `${BB.tagName.toLowerCase()}${ZB?`.${ZB}`:""}`
+       const Vt = (null !== (et = tt.getAttribute("class")) && void 0 !== et ? et : "").trim().replace(/\s+/g, ".").slice(0, 40);
+       return `${tt.tagName.toLowerCase()}${Vt?`.${Vt}`:""}`
```

#### 6. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L89` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/scrollDebug.js#L89) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/scrollDebug.js#L89)

```diff
-         "auto" !== BB && ZB.push(`${BB} on ${UB(TB)}`)
+         "auto" !== tt && Vt.push(`${tt} on ${Mt(Ot)}`)
```

#### 7. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L91` → after: `L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/scrollDebug.js#L91) · [Before (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/scrollDebug.js#L91)

```diff
-       return `${UB(BB)} touch-action ${IB(BB)}${ZB.length>0?` (${ZB.join(", ")})`:""}`
+       return `${Mt(tt)} touch-action ${et(tt)}${Vt.length>0?` (${Vt.join(", ")})`:""}`
```

#### 8. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L110` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/scrollDebug.js#L110) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/scrollDebug.js#L110)

```diff
-           if (this.lines === vB) return this.capped = !0, void this.deps.log(`further changes unlogged: ${vB} lines logged`);
+           if (this.lines === dt) return this.capped = !0, void this.deps.log(`further changes unlogged: ${dt} lines logged`);
```

#### 9. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L112-L115` → after: `L112-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/scrollDebug.js#L112-L115) · [Before (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/scrollDebug.js#L112-L115)

```diff
-           const gB = null === kB ? "no touch yet" : `touch on ${kB.text}, ${Math.round(this.burstStartMs-kB.atMs)} ms before`,
-             WB = null === JB ? "" : `; inner scroll ${UB(JB)} scrollTop ${zB(JB.scrollTop,1)}`;
-           this.deps.log(`moved over ${Math.round(BB-this.burstStartMs)} ms; ${gB}${WB}: ${qB(TB,ZB,cB,hB)}`)
-         }, this.last = BB.read(), this.low = this.last, this.high = this.last, BB.log(`start: ${gB(this.last)}`)
+           const wt = null === jt ? "no touch yet" : `touch on ${jt.text}, ${Math.round(this.burstStartMs-jt.atMs)} ms before`,
+             bt = null === qt ? "" : `; inner scroll ${Mt(qt)} scrollTop ${lt(qt.scrollTop,1)}`;
+           this.deps.log(`moved over ${Math.round(tt-this.burstStartMs)} ms; ${wt}${bt}: ${yt(Ot,Vt,Ht,Qt)}`)
+         }, this.last = tt.read(), this.low = this.last, this.high = this.last, tt.log(`start: ${wt(this.last)}`)
```

#### 10. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L125` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/scrollDebug.js#L125) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/scrollDebug.js#L125)

```diff
-         this.low = yB(this.low, TB, Math.min), this.high = yB(this.high, TB, Math.max), this.innerScrolled = null !== BB && void 0 !== BB ? BB : this.innerScrolled
+         this.low = Nt(this.low, Ot, Math.min), this.high = Nt(this.high, Ot, Math.max), this.innerScrolled = null !== tt && void 0 !== tt ? tt : this.innerScrolled
```

#### 11. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L133` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/scrollDebug.js#L133) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/scrollDebug.js#L133)

```diff
-         inGame: () => "inGame" === TB.d.get("gameState"),
+         inGame: () => "inGame" === Ot.b.get("gameState"),
```

#### 12. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L136` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/scrollDebug.js#L136) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/scrollDebug.js#L136)

```diff
-           (0, JB.o)("scroll", BB)
+           (0, qt.n)("scroll", tt)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/textureNameTable.js` (c6gaap.4d6587ec → igzsf.a0b73a5f)

- **File**: `bundles/bloxd.io/chunks/js/textureNameTable.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-d38a57138b5a2a0d33a7525a47df22137ae3ffec9b04af4648a7cd7a7c0c9310)

#### 1. `bundles/bloxd.io/chunks/js/textureNameTable.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-d38a57138b5a2a0d33a7525a47df22137ae3ffec9b04af4648a7cd7a7c0c9310R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-d38a57138b5a2a0d33a7525a47df22137ae3ffec9b04af4648a7cd7a7c0c9310) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/textureNameTable.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/textureNameTable.js#L4)

```diff
-   51120: (BB, IB, ZB) => {
+   51334: (tt, et, Vt) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/texturePackFeed.js` (c6gaap.4d6587ec → igzsf.a0b73a5f)

- **File**: `bundles/bloxd.io/chunks/js/texturePackFeed.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879)

#### 1. `bundles/bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/texturePackFeed.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/texturePackFeed.js#L4)

```diff
-   51100: (BB, IB, ZB) => {
+   51319: (tt, et, Vt) => {
```

#### 2. `bundles/bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/texturePackFeed.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/texturePackFeed.js#L8-L10)

```diff
-     var TB = ZB(1258),
-       JB = ZB(36),
-       oB = ZB(51091);
+     var Ot = Vt(1293),
+       qt = Vt(39),
+       Dt = Vt(51307);
```

#### 3. `bundles/bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/texturePackFeed.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/texturePackFeed.js#L14)

```diff
-         store: JB.i,
+         store: qt.c,
```

#### 4. `bundles/bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L18` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/texturePackFeed.js#L18) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/texturePackFeed.js#L18)

```diff
-           const IB = await fetch(`${TB.clientSideServerUrls.texturePackUrl}/${BB}.json`, {
+           const et = await fetch(`${Ot.clientSideServerUrls.texturePackUrl}/${tt}.json`, {
```

#### 5. `bundles/bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/texturePackFeed.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/texturePackFeed.js#L21)

```diff
-           if (!IB.ok) throw new Error(`fetching texture pack ${BB} answered HTTP ${IB.status}`);
+           if (!et.ok) throw new Error(`fetching texture pack ${tt} answered HTTP ${et.status}`);
```

#### 6. `bundles/bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L25` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/texturePackFeed.js#L25) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/texturePackFeed.js#L25)

```diff
-       return (0, oB.f)(ZB), ZB
+       return (0, Dt.i)(Vt), Vt
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/texturePackStorage.js` (c6gaap.4d6587ec → igzsf.a0b73a5f)

- **File**: `bundles/bloxd.io/chunks/js/texturePackStorage.js` (16 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383)

#### 1. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/texturePackStorage.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/texturePackStorage.js#L4)

```diff
-   34247: (BB, IB, ZB) => {
+   34432: (tt, et, Vt) => {
```

#### 2. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/texturePackStorage.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/texturePackStorage.js#L7)

```diff
-       takeOneShotTexturePack: () => TB.f
+       takeOneShotTexturePack: () => Ot.e
```

#### 3. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L9-L10` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/texturePackStorage.js#L9-L10) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/texturePackStorage.js#L9-L10)

```diff
-     var TB = ZB(34251),
-       JB = ZB(34253)
+     var Ot = Vt(34436),
+       qt = Vt(34444)
```

#### 4. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L12` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/texturePackStorage.js#L12) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/texturePackStorage.js#L12)

```diff
-   34253: (BB, IB, ZB) => {
+   34444: (tt, et, Vt) => {
```

#### 5. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/texturePackStorage.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/texturePackStorage.js#L17)

```diff
-     var TB = ZB(3418);
+     var Ot = Vt(3314);
```

#### 6. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L23` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/texturePackStorage.js#L23) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/texturePackStorage.js#L23)

```diff
-         const IB = new BroadcastChannel(TB.n);
+         const et = new BroadcastChannel(Ot.l);
```

#### 7. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/texturePackStorage.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/texturePackStorage.js#L35)

```diff
-       return "string" === typeof IB ? IB : null
+       return "string" === typeof et ? et : null
```

#### 8. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L38` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/texturePackStorage.js#L38) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/texturePackStorage.js#L38)

```diff
-   34251: (BB, IB, ZB) => {
+   34436: (tt, et, Vt) => {
```

#### 9. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L41-L42` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/texturePackStorage.js#L42) · [Before (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/texturePackStorage.js#L41-L42)

```diff
-       e: () => JB,
-       f: () => oB
+       e: () => Dt
```

#### 10. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/texturePackStorage.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/texturePackStorage.js#L44)

```diff
-     var TB = ZB(3418);
+     var Ot = Vt(3314);
```

#### 11. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/texturePackStorage.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/texturePackStorage.js#L47)

```diff
-       const oB = GB(await BB.getItem(TB.i, IB));
+       const Dt = mt(await tt.getItem(Ot.e, et));
```

#### 12. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L49` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/texturePackStorage.js#L49) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/texturePackStorage.js#L49)

```diff
-       const vB = await BB.getItem(TB.k, IB);
+       const dt = await tt.getItem(Ot.h, et);
```

#### 13. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L51` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/texturePackStorage.js#L51) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/texturePackStorage.js#L51)

```diff
-         await Promise.all([BB.removeItem(TB.i), BB.removeItem(TB.k)])
+         await Promise.all([tt.removeItem(Ot.e), tt.removeItem(Ot.h)])
```

#### 14. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L54` → after: `L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/texturePackStorage.js#L54) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/texturePackStorage.js#L54)

```diff
-         source: "string" === typeof vB ? vB : null
+         source: "string" === typeof dt ? dt : null
```

#### 15. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/texturePackStorage.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/texturePackStorage.js#L59)

```diff
-       return (0, TB.t)() ? Promise.resolve(null) : JB(BB, !1, (BB => {
+       return (0, Ot.q)() ? Promise.resolve(null) : qt(tt, !1, (tt => {
```

#### 16. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L61` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/texturePackStorage.js#L61) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/texturePackStorage.js#L61)

```diff
-       }), TB.t)
+       }), Ot.q)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmClientGame.js` (c6gaap.4d6587ec → igzsf.a0b73a5f)

- **File**: `bundles/bloxd.io/chunks/js/wasmClientGame.js` (965 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b)

#### 1. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4)

```diff
-   36398: (BB, IB, ZB) => {
+   36616: (tt, et, Vt) => {
```

#### 2. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6-L7)

```diff
-       d: () => nB,
-       h: () => vB,
+       e: () => Xt,
+       g: () => dt,
```

#### 3. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L12-L14` → after: `L12-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L12-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L12-L14) · [Before (L12-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L12-L14)

```diff
-     var TB = ZB(671),
-       JB = ZB(1821),
-       oB = ZB(4975);
+     var Ot = Vt(712),
+       qt = Vt(1842),
+       Dt = Vt(4963);
```

#### 4. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L17)

```diff
-         this.width = BB, this.ah = IB, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(BB * IB)
+         this.width = tt, this.uQ = et, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(tt * et)
```

#### 5. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L24)

```diff
-         this.next = (this.next + 1) % this.ah, this.size = Math.min(this.size + 1, this.ah)
+         this.next = (this.next + 1) % this.uQ, this.size = Math.min(this.size + 1, this.uQ)
```

#### 6. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L30)

```diff
-           TB = (this.next - this.size + this.ah) % this.ah;
+           Ot = (this.next - this.size + this.uQ) % this.uQ;
```

#### 7. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L32)

```diff
-           const oB = (TB + JB) % this.ah * this.width;
+           const Dt = (Ot + qt) % this.uQ * this.width;
```

#### 8. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L44-L47` → after: `L44-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L44-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L44-L47) · [Before (L44-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L44-L47)

```diff
-         XF: 1,
-         gM: 2,
-         YM: 3,
-         Fq: 4
+         hE: 1,
+         qI: 2,
+         mI: 3,
+         my: 4
```

#### 9. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L81` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L81) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L81)

```diff
-         this.steps = new GB(vB, hB), this.events = new GB(FB.length, hB), this.frames = new GB(NB.length, hB), this.cameraSets = new GB(oB.f, 256), this.changes = new GB(qB.length, 256)
+         this.steps = new mt(dt, Qt), this.events = new mt(Et.length, Qt), this.frames = new mt(ft.length, Qt), this.cameraSets = new mt(Dt.e, 256), this.changes = new mt(yt.length, 256)
```

#### 10. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L102` → after: `L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L102) · [Before (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L102)

```diff
-         BB[IB + 6] !== kB.Fq && (null === (ZB = this.rings) || void 0 === ZB || ZB.steps.push(BB, IB))
+         tt[et + 6] !== jt.my && (null === (Vt = this.rings) || void 0 === Vt || Vt.steps.push(tt, et))
```

#### 11. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L133` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L133) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L133)

```diff
-         return [`look records (${this.startedClient}): ${zB.join(",")}`, ...null !== (BB = null === ZB || void 0 === ZB ? void 0 : ZB.steps.lines()) && void 0 !== BB ? BB : [], `mousemove events: ${FB.join(",")}`, ...null !== (IB = null === ZB || void 0 === ZB ? void 0 : ZB.event … [truncated]
+         return [`look records (${this.startedClient}): ${lt.join(",")}`, ...null !== (tt = null === Vt || void 0 === Vt ? void 0 : Vt.steps.lines()) && void 0 !== tt ? tt : [], `mousemove events: ${Et.join(",")}`, ...null !== (et = null === Vt || void 0 === Vt ? void 0 : Vt.event … [truncated]
```

#### 12. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L142` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L142) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L142)

```diff
-             const oB = null !== (ZB = null === BB || void 0 === BB ? void 0 : BB.rows(TB, JB)) && void 0 !== ZB ? ZB : [];
+             const Dt = null !== (Vt = null === tt || void 0 === tt ? void 0 : tt.rows(Ot, qt)) && void 0 !== Vt ? Vt : [];
```

#### 13. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L150-L151` → after: `L150-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L150-L151) · [Before (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L150-L151)

```diff
-           version: TB.b,
-           client: null !== (ZB = this.startedClient) && void 0 !== ZB ? ZB : "not started",
+           version: Ot.d,
+           client: null !== (Vt = this.startedClient) && void 0 !== Vt ? Vt : "not started",
```

#### 14. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L162` → after: `L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L162) · [Before (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L162)

```diff
-           mq: null !== document.pointerLockElement,
+           zy: null !== document.pointerLockElement,
```

#### 15. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L177` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L177) · [Before (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L177)

```diff
-         (0, JB.d)(new Blob([IB], {
+         (0, qt.c)(new Blob([et], {
```

#### 16. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L183` → after: `L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L183) · [Before (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L183)

```diff
-   39090: (BB, IB, ZB) => {
+   39224: (tt, et, Vt) => {
```

#### 17. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L185` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L185) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L185)

```diff
-       c: () => oB,
+       b: () => Dt,
```

#### 18. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L188` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L188) · [Before (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L188)

```diff
-     var TB = ZB(24);
+     var Ot = Vt(31);
```

#### 19. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L195` → after: `L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L195) · [Before (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L195)

```diff
-       "refetchCode" !== BB ? "Plugin|MobAiPlugin|ShowPetUi" !== BB ? Promise.all([ZB.e(109), ZB.e(110), ZB.e(105), ZB.e(107), ZB.e(218)]).then((() => ZB(41761))).then((ZB => {
+       "refetchCode" !== tt ? "Plugin|MobAiPlugin|ShowPetUi" !== tt ? Promise.all([Vt.e(109), Vt.e(110), Vt.e(105), Vt.e(107), Vt.e(218)]).then((() => Vt(41997))).then((Vt => {
```

#### 20. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L201-L202` → after: `L201-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L201-L202) · [Before (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L201-L202)

```diff
-         console.error(`Game message ${BB} failed`, IB)
-       })) : TB.l.Gq("showPetUi", IB) : TB.l.Gq("refetchCode")
+         console.error(`Game message ${tt} failed`, et)
+       })) : Ot.j.sw("showPetUi", et) : Ot.j.sw("refetchCode")
```

#### 21. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L205` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L205) · [Before (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L205)

```diff
-   42581: (BB, IB, ZB) => {
+   42829: (tt, et, Vt) => {
```

#### 22. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L207-L208` → after: `L207-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L207-L208) · [Before (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L207-L208)

```diff
-       d: () => TB,
-       g: () => JB
+       b: () => Ot,
+       c: () => qt
```

#### 23. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L217` → after: `L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L217) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L217)

```diff
-   34103: (BB, IB, ZB) => {
+   34308: (tt, et, Vt) => {
```

#### 24. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L220` → after: `L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L220) · [Before (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L220)

```diff
-       d: () => kB
+       c: () => jt
```

#### 25. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L222` → after: `L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L222) · [Before (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L222)

```diff
-     var TB = ZB(20);
+     var Ot = Vt(26);
```

#### 26. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L229` → after: `L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L229) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L229)

```diff
-       return null === (BB = TB.d.get("showDistantNametags")) || void 0 === BB || BB
+       return null === (tt = Ot.b.get("showDistantNametags")) || void 0 === tt || tt
```

#### 27. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L238` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L238) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L238)

```diff
-       }()) && void 0 !== BB ? BB : vB() ? 0 : JB
+       }()) && void 0 !== tt ? tt : dt() ? 0 : qt
```

#### 28. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L241` → after: `L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L241) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L241)

```diff
-   42579: (BB, IB, ZB) => {
+   42820: (tt, et, Vt) => {
```

#### 29. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L243` → after: `L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L243) · [Before (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L243)

```diff
-       blockIdOf: () => xk.e,
+       blockIdOf: () => xj.c,
```

#### 30. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L247` → after: `L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L247) · [Before (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L247)

```diff
-       drainTextRerasters: () => Lv.e,
+       drainTextRerasters: () => od.c,
```

#### 31. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L254-L255` → after: `L254-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L254-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L254-L255) · [Before (L254-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L254-L255)

```diff
-       loadTextIcons: () => Lv.h,
-       rasterText: () => Xv.c,
+       loadTextIcons: () => od.f,
+       rasterText: () => zd.b,
```

#### 32. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L257` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L257) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L257)

```diff
-       readDrawCensus: () => Vk.e,
+       readDrawCensus: () => nj.h,
```

#### 33. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L264-L265` → after: `L264-L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L264-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L264-L265) · [Before (L264-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L264-L265)

```diff
-       textChanged: () => Lv.s,
-       warmText: () => Xv.g,
+       textChanged: () => od.q,
+       warmText: () => zd.e,
```

#### 34. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L268-L285` → after: `L268-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L268-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L268-L285) · [Before (L268-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L268-L285)

```diff
-     ZB(36540);
-     var TB = ZB(20),
-       JB = ZB(36846),
-       oB = ZB(39225),
-       GB = ZB(24),
-       vB = ZB(3586),
-       kB = ZB(36843),
-       cB = ZB(1353),
-       nB = ZB(655),
-       hB = ZB(38287),
-       zB = ZB(4969),
-       FB = ZB(40701),
-       NB = ZB(40633);
-     const gB = NB.yb / 4,
-       qB = NB.k.PlaySound,
-       yB = NB.k.SoundReset,
- ... (2 more removed lines; see GitHub link above)
+     Vt(36757);
+     var Ot = Vt(26),
+       qt = Vt(37053),
+       Dt = Vt(39367),
+       mt = Vt(31),
+       dt = Vt(3470),
+       jt = Vt(37044),
+       Ht = Vt(1387),
+       Xt = Vt(705),
+       Qt = Vt(38473),
+       lt = Vt(4960),
+       Et = Vt(40831),
+       ft = Vt(40761);
+     const wt = ft.Lb / 4,
+       yt = ft.r.PlaySound,
+       Nt = ft.r.SoundReset,
+ ... (2 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L289` → after: `L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L289) · [Before (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L289)

```diff
-         this.core = BB, this.memory = IB, this.audio = ZB, this.serverIds = new Int32Array(256).fill(NB.Rc), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.vie … [truncated]
+         this.core = tt, this.memory = et, this.audio = Vt, this.serverIds = new Int32Array(256).fill(ft.hd), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.vie … [truncated]
```

#### 36. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L294` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L294) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L294)

```diff
-         return this.scratchPtr < 0 && (this.scratchPtr = this.core.mJB(), this.ensureViews()), this.scratchPtr
+         return this.scratchPtr < 0 && (this.scratchPtr = this.core.iqt(), this.ensureViews()), this.scratchPtr
```

#### 37. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L307` → after: `L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L307) · [Before (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L307)

```diff
-         return NB.p.localId(this.apiView, 0)
+         return ft.x.localId(this.apiView, 0)
```

#### 38. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L310` → after: `L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L310) · [Before (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L310)

```diff
-         return NB.p.localDeaths(this.apiView, 0)
+         return ft.x.localDeaths(this.apiView, 0)
```

#### 39. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L314-L318` → after: `L314-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L314-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L314-L318) · [Before (L314-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L314-L318)

```diff
-           IB = NB.p.entRenderPtr(BB, 0),
-           ZB = NB.p.entVisPtr(BB, 0),
-           TB = NB.p.entCapacity(BB, 0);
-         if (IB !== this.renderPtr || ZB !== this.visPtr || TB !== this.ah || this.renderBuffer !== this.buffer) {
-           this.renderPtr = IB, this.visPtr = ZB, this.ah = TB, this.renderBuffer = this.buffer;
+           et = ft.x.entRenderPtr(tt, 0),
+           Vt = ft.x.entVisPtr(tt, 0),
+           Ot = ft.x.entCapacity(tt, 0);
+         if (et !== this.renderPtr || Vt !== this.visPtr || Ot !== this.uQ || this.renderBuffer !== this.buffer) {
+           this.renderPtr = et, this.visPtr = Vt, this.uQ = Ot, this.renderBuffer = this.buffer;
```

#### 40. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L321` → after: `L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L321) · [Before (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L321)

```diff
-           this.renderCapacity = BB && JB ? TB : 0, this.render = BB && JB ? BB : new Float32Array(0), this.vis = BB && JB ? JB : new Uint8Array(0)
+           this.renderCapacity = tt && qt ? Ot : 0, this.render = tt && qt ? tt : new Float32Array(0), this.vis = tt && qt ? qt : new Uint8Array(0)
```

#### 41. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L326` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L326) · [Before (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L326)

```diff
-           return (0, FB.u)(BB, this.memory().buffer, IB, ZB, TB)
+           return (0, Et.o)(tt, this.memory().buffer, et, Vt, Ot)
```

#### 42. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L333` → after: `L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L333) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L333)

```diff
-           return (0, FB.g)(this.memory().buffer, BB, IB, ZB, TB)
+           return (0, Et.e)(this.memory().buffer, tt, et, Vt, Ot)
```

#### 43. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L339` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L339) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L339)

```diff
-         this.keepCorruption(new FB.c(BB))
+         this.keepCorruption(new Et.d(tt))
```

#### 44. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L342` → after: `L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L342) · [Before (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L342)

```diff
-         if (!(BB instanceof FB.c)) throw BB;
+         if (!(tt instanceof Et.d)) throw tt;
```

#### 45. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L360-L361` → after: `L360-L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L360-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L360-L361) · [Before (L360-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L360-L361)

```diff
-             JB = cB + zB.U;
-           if (ZB === NB.k.EntitySpawned) {
+             qt = Ht + lt.bb;
+           if (Vt === ft.r.EntitySpawned) {
```

#### 46. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L363-L367` → after: `L363-L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L363-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L363-L367) · [Before (L363-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L363-L367)

```diff
-             if (TB !== NB.Ab.BYTES) throw OB(ZB, cB, TB);
-             const BB = NB.Ab.serverId(oB, JB);
-             this.spawned(BB, NB.Ab.index(oB, JB), NB.Ab.kind(oB, JB)), null === (GB = IB.entityAdded) || void 0 === GB || GB.call(IB, BB)
-           } else if ((ZB === NB.k.ChunkSlot || ZB === NB.k.EntityInfoChanged) && !(0, NB.me)(ZB, oB, JB, TB, IB)) throw OB(ZB, cB, TB);
-           cB = JB + (0, zB.xe)(TB)
+             if (Ot !== ft.Nb.BYTES) throw vt(Vt, Ht, Ot);
+             const tt = ft.Nb.serverId(Dt, qt);
+             this.spawned(tt, ft.Nb.index(Dt, qt), ft.Nb.kind(Dt, qt)), null === (mt = et.entityAdded) || void 0 === mt || mt.call(et, tt)
+           } else if ((Vt === ft.r.ChunkSlot || Vt === ft.r.EntityInfoChanged) && !(0, ft.xe)(Vt, Dt, qt, Ot, et)) throw vt(Vt, Ht, Ot);
+           Ht = qt + (0, lt.Fe)(Ot)
```

#### 47. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L373` → after: `L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L373) · [Before (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L373)

```diff
-           throw kB instanceof FB.c && (this.corruption ??= kB), kB
+           throw jt instanceof Et.d && (this.corruption ??= jt), jt
```

#### 48. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L382-L384` → after: `L382-L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L382-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L382-L384) · [Before (L382-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L382-L384)

```diff
-             oB = JB + zB.U;
-           if ((65535 & BB) === NB.k.EntityDespawned && BB >>> 16 === NB.Ab.BYTES) {
-             const BB = NB.Ab.serverId(ZB, oB);
+             Dt = qt + lt.bb;
+           if ((65535 & tt) === ft.r.EntityDespawned && tt >>> 16 === ft.Nb.BYTES) {
+             const tt = ft.Nb.serverId(Vt, Dt);
```

#### 49. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L386` → after: `L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L386) · [Before (L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L386)

```diff
-             if (this.despawned(BB, NB.Ab.index(ZB, oB))) null === (TB = IB.entityRemoved) || void 0 === TB || TB.call(IB, BB)
+             if (this.despawned(tt, ft.Nb.index(Vt, Dt))) null === (Ot = et.entityRemoved) || void 0 === Ot || Ot.call(et, tt)
```

#### 50. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L388` → after: `L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L388) · [Before (L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L388)

```diff
-           JB = oB + (0, zB.xe)(BB >>> 16)
+           qt = Dt + (0, lt.Fe)(tt >>> 16)
```

#### 51. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L404` → after: `L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L404) · [Before (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L404)

```diff
-             YB = QB + zB.U;
+             Wt = ut + lt.bb;
```

#### 52. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L407` → after: `L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L407) · [Before (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L407)

```diff
-           else if (TB === zB.X.LocalPlayerBound) {
+           else if (Ot === lt.db.LocalPlayerBound) {
```

#### 53. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L409` → after: `L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L409) · [Before (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L409)

```diff
-             if (sB !== zB.Gb) throw OB(TB, QB, sB);
+             if (Kt !== lt.Rb) throw vt(Ot, ut, Kt);
```

#### 54. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L411` → after: `L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L411) · [Before (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L411)

```diff
-           } else if (TB === zB.X.LocalHurt) {
+           } else if (Ot === lt.db.LocalHurt) {
```

#### 55. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L413` → after: `L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L413) · [Before (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L413)

```diff
-             if (sB !== zB.Fb) throw OB(TB, QB, sB);
+             if (Kt !== lt.Qb) throw vt(Ot, ut, Kt);
```

#### 56. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L415` → after: `L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L415) · [Before (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L415)

```diff
-           } else if (TB === zB.X.AttackHit) {
+           } else if (Ot === lt.db.AttackHit) {
```

#### 57. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L417` → after: `L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L417) · [Before (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L417)

```diff
-             if (sB !== zB.b) throw OB(TB, QB, sB);
+             if (Kt !== lt.d) throw vt(Ot, ut, Kt);
```

#### 58. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L422-L423` → after: `L422-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L422-L423) · [Before (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L422-L423)

```diff
-             null === (nB = IB.attackHit) || void 0 === nB || nB.call(IB, BB, ZB, JB, 0 !== (oB & zB.j.Crit), 0 !== (oB & zB.j.HitSelf))
-           } else if (TB === zB.X.PhysicsType) {
+             null === (Xt = et.attackHit) || void 0 === Xt || Xt.call(et, tt, Vt, qt, 0 !== (Dt & lt.i.Crit), 0 !== (Dt & lt.i.HitSelf))
+           } else if (Ot === lt.db.PhysicsType) {
```

#### 59. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L425` → after: `L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L425) · [Before (L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L425)

```diff
-             if (sB !== zB.hc) throw OB(TB, QB, sB);
+             if (Kt !== lt.qc) throw vt(Ot, ut, Kt);
```

#### 60. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L427` → after: `L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L427) · [Before (L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L427)

```diff
-           } else if (TB === zB.X.VehicleEffect) {
+           } else if (Ot === lt.db.VehicleEffect) {
```

#### 61. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L432` → after: `L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L432) · [Before (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L432)

```diff
-           } else if (TB === zB.X.ZoomChanged) {
+           } else if (Ot === lt.db.ZoomChanged) {
```

#### 62. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L434` → after: `L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L434) · [Before (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L434)

```diff
-             if (sB !== zB.ce) throw OB(TB, QB, sB);
+             if (Kt !== lt.me) throw vt(Ot, ut, Kt);
```

#### 63. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L436` → after: `L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L436) · [Before (L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L436)

```diff
-           } else if (TB === zB.X.ZoomDisabled) {
+           } else if (Ot === lt.db.ZoomDisabled) {
```

#### 64. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L440` → after: `L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L440) · [Before (L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L440)

```diff
-           } else if (TB === zB.X.GameCamera) {
+           } else if (Ot === lt.db.GameCamera) {
```

#### 65. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L443` → after: `L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L443) · [Before (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L443)

```diff
-           } else if (TB === NB.k.ChunkSlot || TB === NB.k.EntityInfoChanged);
+           } else if (Ot === ft.r.ChunkSlot || Ot === ft.r.EntityInfoChanged);
```

#### 66. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L451-L452` → after: `L451-L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L451-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L451-L452) · [Before (L451-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L451-L452)

```diff
-           } else if (TB >= NB.fd && TB <= NB.jd && TB !== zB.X.EnvLighting) {
-             if (!(0, NB.me)(TB, GB, YB, sB, IB)) throw OB(TB, QB, sB);
+           } else if (Ot >= ft.wd && Ot <= ft.xd && Ot !== lt.db.EnvLighting) {
+             if (!(0, ft.xe)(Ot, mt, Wt, Kt, et)) throw vt(Ot, ut, Kt);
```

#### 67. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L459` → after: `L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L459) · [Before (L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L459)

```diff
-           QB = YB + (0, zB.xe)(sB)
+           ut = Wt + (0, lt.Fe)(Kt)
```

#### 68. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L466` → after: `L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L466) · [Before (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L466)

```diff
-         const IB = NB.p.audioViewPtr(this.apiView, 0),
+         const et = ft.x.audioViewPtr(this.apiView, 0),
```

#### 69. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L469` → after: `L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L469) · [Before (L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L469)

```diff
-         (null === (BB = TB) || void 0 === BB ? void 0 : BB.buffer) === ZB && TB.byteOffset === IB || (TB = (0, FB.g)(ZB, IB, NB.q.BYTES, 8, "the audio view"), this.audioView = TB), TB && this.audio.applyListener(TB)
+         (null === (tt = Ot) || void 0 === tt ? void 0 : tt.buffer) === Vt && Ot.byteOffset === et || (Ot = (0, Et.e)(Vt, et, ft.A.BYTES, 8, "the audio view"), this.audioView = Ot), Ot && this.audio.applyListener(Ot)
```

#### 70. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L472` → after: `L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L472) · [Before (L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L472)

```diff
-         return this.indexById.get("number" === typeof BB ? BB : +BB)
+         return this.indexById.get("number" === typeof tt ? tt : +tt)
```

#### 71. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L475` → after: `L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L475) · [Before (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L475)

```diff
-         return BB !== NB.Rc && BB === NB.p.localId(this.apiView, 0)
+         return tt !== ft.hd && tt === ft.x.localId(this.apiView, 0)
```

#### 72. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L479` → after: `L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L479) · [Before (L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L479)

```diff
-         return this.readPosition("number" === typeof BB ? BB : +BB, IB) ? IB : null
+         return this.readPosition("number" === typeof tt ? tt : +tt, et) ? et : null
```

#### 73. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L484` → after: `L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L484) · [Before (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L484)

```diff
-           for (let BB = 0; BB < 3; BB++) IB[BB] = NB.p.localPos(ZB, 0, BB);
+           for (let tt = 0; tt < 3; tt++) et[tt] = ft.x.localPos(Vt, 0, tt);
```

#### 74. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L494` → after: `L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L494) · [Before (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L494)

```diff
-         for (let oB = 0; oB < 3; oB++) IB[oB] = this.render[JB + oB] + NB.p.origin(ZB, 0, oB);
+         for (let Dt = 0; Dt < 3; Dt++) et[Dt] = this.render[qt + Dt] + ft.x.origin(Vt, 0, Dt);
```

#### 75. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L505` → after: `L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L505) · [Before (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L505)

```diff
-         return 0 === ZB ? null : 0 !== (ZB & NB.ke.Alive)
+         return 0 === Vt ? null : 0 !== (Vt & ft.ue.Alive)
```

#### 76. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L509` → after: `L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L509) · [Before (L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L509)

```diff
-         return void 0 === IB ? this.isLocal("number" === typeof BB ? BB : +BB) ? "Player" : null : QB(this.kinds[IB])
+         return void 0 === et ? this.isLocal("number" === typeof tt ? tt : +tt) ? "Player" : null : ut(this.kinds[et])
```

#### 77. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L512` → after: `L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L512) · [Before (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L512)

```diff
-         if (IB >= 1048576) throw new FB.c(`entity ${BB} spawned at index ${IB}`);
+         if (et >= 1048576) throw new Et.d(`entity ${tt} spawned at index ${et}`);
```

#### 78. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L517` → after: `L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L517) · [Before (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L517)

```diff
-         return this.indexById.get(BB) === IB && (this.indexById.delete(BB), ZB = !0), IB < this.serverIds.length && this.serverIds[IB] === BB && (this.serverIds[IB] = NB.Rc, this.kinds[IB] = 0, this.idStr[IB] = null), ZB
+         return this.indexById.get(tt) === et && (this.indexById.delete(tt), Vt = !0), et < this.serverIds.length && this.serverIds[et] === tt && (this.serverIds[et] = ft.hd, this.kinds[et] = 0, this.idStr[et] = null), Vt
```

#### 79. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L524` → after: `L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L524) · [Before (L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L524)

```diff
-         const TB = new Int32Array(ZB).fill(NB.Rc);
+         const Ot = new Int32Array(Vt).fill(ft.hd);
```

#### 80. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L536` → after: `L536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L536) · [Before (L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L536)

```diff
-         this.buffer = BB, this.viewPtr < 0 && (this.viewPtr = this.core.XJB()), this.view = new DataView(BB, this.viewPtr, NB.p.BYTES), this.rereadDirectory()
+         this.buffer = tt, this.viewPtr < 0 && (this.viewPtr = this.core.Yqt()), this.view = new DataView(tt, this.viewPtr, ft.x.BYTES), this.rereadDirectory()
```

#### 81. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L541` → after: `L541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L541) · [Before (L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L541)

```diff
-       return BB >>> NB.c === NB.o.Item
+       return tt >>> ft.c === ft.u.Item
```

#### 82. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L546` → after: `L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L546) · [Before (L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L546)

```diff
-       const TB = BB & NB.d;
+       const Ot = tt & ft.g;
```

#### 83. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L548-L552` → after: `L548-L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L548-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L548-L552) · [Before (L548-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L548-L552)

```diff
-         case NB.o.Lifeform:
-           return null !== (IB = nB.i[TB]) && void 0 !== IB ? IB : null;
-         case NB.o.Throwable:
-           return null !== (ZB = hB.k[TB]) && void 0 !== ZB ? ZB : null;
-         case NB.o.Mesh:
+         case ft.u.Lifeform:
+           return null !== (et = Xt.f[Ot]) && void 0 !== et ? et : null;
+         case ft.u.Throwable:
+           return null !== (Vt = Qt.m[Ot]) && void 0 !== Vt ? Vt : null;
+         case ft.u.Mesh:
```

#### 84. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L554` → after: `L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L554) · [Before (L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L554)

```diff
-         case NB.o.Audio:
+         case ft.u.Audio:
```

#### 85. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L556` → after: `L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L556) · [Before (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L556)

```diff
-         case NB.o.Item:
+         case ft.u.Item:
```

#### 86. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L565` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L565) · [Before (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L565)

```diff
-       if (ZB < zB.Jd.HEAD_BYTES) return null;
+       if (Vt < lt.Pd.HEAD_BYTES) return null;
```

#### 87. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L569-L570` → after: `L569-L570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L569-L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L569-L570) · [Before (L569-L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L569-L570)

```diff
-         GB = zB.Jd.HEAD_BYTES + (0, zB.xe)(JB);
-       if (TB !== zB.Jd.UPDATE && TB !== zB.Jd.REMOVE || JB > ZB || GB + oB > ZB) return null;
+         mt = lt.Pd.HEAD_BYTES + (0, lt.Fe)(qt);
+       if (Ot !== lt.Pd.UPDATE && Ot !== lt.Pd.REMOVE || qt > Vt || mt + Dt > Vt) return null;
```

#### 88. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L577` → after: `L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L577) · [Before (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L577)

```diff
-         name: vB(zB.Jd.HEAD_BYTES, JB),
+         name: dt(lt.Pd.HEAD_BYTES, qt),
```

#### 89. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L583-L598` → after: `L583-L598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L583-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L583-L598) · [Before (L583-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L583-L598)

```diff
-       return new FB.c(`event ${BB} at ${IB} of ${ZB} bytes`)
-     }
-     var YB = ZB(360),
-       iB = ZB(1281),
-       pB = ZB(39090),
-       aB = ZB(2020),
-       HB = ZB(41045),
-       MB = ZB(1956),
-       jB = ZB(39245),
-       PB = ZB(39270),
-       RB = ZB(39251),
-       rB = ZB(40682),
-       mB = ZB(2489),
-       XB = ZB(39242),
-       LB = ZB(39262);
-     const eB = Math.max(NB.ob.BYTES, NB.fb.BYTES, NB.gb.BYTES);
+       return new Et.d(`event ${tt} at ${et} of ${Vt} bytes`)
+     }
+     var Wt = Vt(391),
+       St = Vt(1308),
+       ct = Vt(39224),
+       Rt = Vt(2037),
+       It = Vt(41206),
+       Pt = Vt(1993),
+       Zt = Vt(39378),
+       Lt = Vt(39410),
+       Ft = Vt(39392),
+       kt = Vt(40812),
+       Gt = Vt(2465),
+       zt = Vt(39375),
+       ot = Vt(39406);
+     const rt = Math.max(ft.Ab.BYTES, ft.tb.BYTES, ft.vb.BYTES);
```

#### 90. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L601` → after: `L601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L601) · [Before (L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L601)

```diff
-       if (!(0, LB.g)(BB)) return null;
+       if (!(0, ot.e)(tt)) return null;
```

#### 91. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L603` → after: `L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L603) · [Before (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L603)

```diff
-       return (0 | IB) === IB ? IB : null
+       return (0 | et) === et ? et : null
```

#### 92. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L607` → after: `L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L607) · [Before (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L607)

```diff
-         this.api = BB, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, XB.l)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.rT = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], thi … [truncated]
+         this.api = tt, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, zt.k)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.pO = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], thi … [truncated]
```

#### 93. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L610-L612` → after: `L610-L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L610-L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L610-L612) · [Before (L610-L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L610-L612)

```diff
-         this.defaultPoseRead = !1, this.rT = null;
-         const BB = this.api.queries.directorView() >= NB.ob.BYTES ? this.scratchView() : null;
-         null !== BB && (this.defaultFov = (0, MB.K)(NB.ob.fov(BB, 0)), this.baseFov = (0, MB.K)(NB.ob.baseFov(BB, 0)), this.aspect = NB.ob.aspect(BB, 0), this.bodyHeading = NB.ob.bodyHeading(BB, 0))
+         this.defaultPoseRead = !1, this.pO = null;
+         const tt = this.api.queries.directorView() >= ft.Ab.BYTES ? this.scratchView() : null;
+         null !== tt && (this.defaultFov = (0, Pt.G)(ft.Ab.fov(tt, 0)), this.baseFov = (0, Pt.G)(ft.Ab.baseFov(tt, 0)), this.aspect = ft.Ab.aspect(tt, 0), this.bodyHeading = ft.Ab.bodyHeading(tt, 0))
```

#### 94. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L621` → after: `L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L621) · [Before (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L621)

```diff
-         const BB = NB.p.localId(this.api.apiView, 0);
+         const tt = ft.x.localId(this.api.apiView, 0);
```

#### 95. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L633-L634` → after: `L633-L634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L633-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L633-L634) · [Before (L633-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L633-L634)

```diff
-         const ZB = NB.p.localId(this.api.apiView, 0);
-         return IB === ZB && ZB !== NB.Rc ? this.viewHeading : this.readEntity(BB) ? this.entityHeading : null
+         const Vt = ft.x.localId(this.api.apiView, 0);
+         return et === Vt && Vt !== ft.hd ? this.viewHeading : this.readEntity(tt) ? this.entityHeading : null
```

#### 96. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L638` → after: `L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L638) · [Before (L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L638)

```diff
-         return TB < ZB - 1e-6 ? TB : null
+         return Ot < Vt - 1e-6 ? Ot : null
```

#### 97. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L645` → after: `L645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L645) · [Before (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L645)

```diff
-         const IB = this.api.queries.directorDefaultPose() >= NB.fb.BYTES ? this.scratchView() : null;
+         const et = this.api.queries.directorDefaultPose() >= ft.tb.BYTES ? this.scratchView() : null;
```

#### 98. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L647-L648` → after: `L647-L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L647-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L647-L648) · [Before (L647-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L647-L648)

```diff
-         for (let ZB = 0; ZB < 3; ZB++) BB.position[ZB] = NB.fb.eye(IB, 0, ZB);
-         return BB.heading = NB.fb.heading(IB, 0), BB.pitch = NB.fb.pitch(IB, 0), BB
+         for (let Vt = 0; Vt < 3; Vt++) tt.position[Vt] = ft.tb.eye(et, 0, Vt);
+         return tt.heading = ft.tb.heading(et, 0), tt.pitch = ft.tb.pitch(et, 0), tt
```

#### 99. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L662-L664` → after: `L662-L664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L662-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L662-L664) · [Before (L662-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L662-L664)

```diff
-         if (IB === this.rT) return this.entityLive;
-         this.rT = IB;
-         const ZB = this.api.queries.directorEntity(IB) >= NB.gb.BYTES ? this.scratchView() : null;
+         if (et === this.pO) return this.entityLive;
+         this.pO = et;
+         const Vt = this.api.queries.directorEntity(et) >= ft.vb.BYTES ? this.scratchView() : null;
```

#### 100. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L666-L667` → after: `L666-L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L666-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L666-L667) · [Before (L666-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L666-L667)

```diff
-         for (let TB = 0; TB < 3; TB++) this.entityFeet[TB] = NB.gb.feet(ZB, 0, TB), this.entityAim[TB] = this.entityFeet[TB];
-         return this.entityAim[1] += NB.gb.eyeHeight(ZB, 0), this.entityHeading = NB.gb.heading(ZB, 0), !0
+         for (let Ot = 0; Ot < 3; Ot++) this.entityFeet[Ot] = ft.vb.feet(Vt, 0, Ot), this.entityAim[Ot] = this.entityFeet[Ot];
+         return this.entityAim[1] += ft.vb.eyeHeight(Vt, 0), this.entityHeading = ft.vb.heading(Vt, 0), !0
```

#### 101. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L673` → after: `L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L673) · [Before (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L673)

```diff
-         return null !== ZB && ZB.buffer === IB && ZB.byteOffset === BB ? ZB : (this.scratch = this.api.memoryData(BB, eB, 8, "the director's record"), this.scratch)
+         return null !== Vt && Vt.buffer === et && Vt.byteOffset === tt ? Vt : (this.scratch = this.api.memoryData(tt, rt, 8, "the director's record"), this.scratch)
```

#### 102. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L689-L691` → after: `L689-L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L689-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L689-L691) · [Before (L689-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L689-L691)

```diff
-         this.options = BB, this.vz = void 0, this.director = void 0, this.latest = lB, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
-           YH: 0,
-           iH: 0
+         this.options = tt, this.sQ = void 0, this.director = void 0, this.latest = it, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
+           JR: 0,
+           uR: 0
```

#### 103. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L695` → after: `L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L695) · [Before (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L695)

```diff
-         }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.pg = new Int32Array(3 * NB.Md), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * NB.Md), this.vz = new fB(BB.api), this.direct … [truncated]
+         }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.Of = new Int32Array(3 * ft.$d), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * ft.$d), this.sQ = new At(tt.api), this.direct … [truncated]
```

#### 104. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L700` → after: `L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L700) · [Before (L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L700)

```diff
-           IB = (0, rB.e)(BB)
+           et = (0, kt.c)(tt)
```

#### 105. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L714-L715` → after: `L714-L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L714-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L714-L715) · [Before (L714-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L714-L715)

```diff
-         const hB = this.answeredPose && 0 === (TB & NB.kb.Held);
-         return this.answeredPose = kB !== NB.db.None, this.holding = this.answeredPose && !hB, null === (GB = (vB = this.options).showFacing) || void 0 === GB || GB.call(vB, this.holding ? this.facing : null), kB
+         const Qt = this.answeredPose && 0 === (Ot & ft.xb.Held);
+         return this.answeredPose = jt !== ft.rb.None, this.holding = this.answeredPose && !Qt, null === (mt = (dt = this.options).showFacing) || void 0 === mt || mt.call(dt, this.holding ? this.facing : null), jt
```

#### 106. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L723` → after: `L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L723) · [Before (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L723)

```diff
-           vz: GB
+           sQ: mt
```

#### 107. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L726` → after: `L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L726) · [Before (L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L726)

```diff
-         if (0 !== (TB & NB.kb.Held) || GB.setViewHeading((0, jB.v)(GB.bodyHeading)), void 0 !== this.pending) {
+         if (0 !== (Ot & ft.xb.Held) || mt.setViewHeading((0, Zt.r)(mt.bodyHeading)), void 0 !== this.pending) {
```

#### 108. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L730` → after: `L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L730) · [Before (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L730)

```diff
-         this.readLook((0, mB.f)(IB), (0, mB.f)(ZB), TB, (0, mB.f)(JB), (0, mB.f)(oB));
+         this.readLook((0, Gt.d)(et), (0, Gt.d)(Vt), Ot, (0, Gt.d)(qt), (0, Gt.d)(Dt));
```

#### 109. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L732` → after: `L732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L732) · [Before (L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L732)

```diff
-         if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !vB) return NB.db.None;
+         if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !dt) return ft.rb.None;
```

#### 110. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L734-L735` → after: `L734-L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L734-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L734-L735) · [Before (L734-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L734-L735)

```diff
-         if (0 === this.options.api.queries.directorPose(kB, cB, nB, (0, jB.v)(vB.heading), (0, jB.h)(vB.pitch), (0, MB.l)(vB.fov))) return NB.db.None;
-         if ("default" === this.director.getSettings().mode) return NB.db.Pose;
+         if (0 === this.options.api.queries.directorPose(jt, Ht, Xt, (0, Zt.r)(dt.heading), (0, Zt.g)(dt.pitch), (0, Pt.l)(dt.fov))) return ft.rb.None;
+         if ("default" === this.director.getSettings().mode) return ft.rb.Pose;
```

#### 111. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L738` → after: `L738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L738) · [Before (L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L738)

```diff
-             return NB.db.FaceCamera;
+             return ft.rb.FaceCamera;
```
