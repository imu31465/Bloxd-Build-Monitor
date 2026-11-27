# Changed — Bundle Modifications Report (Part 064 / 082)

- **Updated at**: `2026-11-28T02:07 JST`
- **Part**: `64 / 82` (**414** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 063](part-063.md) · [Part 065 →](part-065.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/procGenWorker.js` (u88b9b.1969c480 → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/bloxd.io/chunks/js/procGenWorker.js` (1904 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2)

#### 1739. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29453-L29454` → after: `L29507-L29508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29507-L29508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L29507-L29508) · [Before (L29453-L29454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29453-L29454)

```diff
-     if (ee.id = UU, HU[UU] = ee, ee.name = UF, ee.stackable = !0, wH(HU, ee), "door" === HU[ee.meta.rootName].model) ee.Bp = (TU = ee.meta.rot, pU = ee.meta.open, Zb[(TU - 1 + Number(pU)) % 4]);
-     else if ("trapdoor" === HU[ee.meta.rootName].model) ee.Bp = Db(ee.meta.rot, ee.meta.open);
+     if (WW.id = cL, mL[cL] = WW, WW.name = cc, WW.stackable = !0, hO(mL, WW), "door" === mL[WW.meta.rootName].model) WW.sj = (jL = WW.meta.rot, UL = WW.meta.open, hE[(jL - 1 + Number(UL)) % 4]);
+     else if ("trapdoor" === mL[WW.meta.rootName].model) WW.sj = nE(WW.meta.rot, WW.meta.open);
```

#### 1740. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29457` → after: `L29511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L29511) · [Before (L29457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29457)

```diff
-       ie && (ee.Bp = ie)
+       iW && (WW.sj = iW)
```

#### 1741. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29466` → after: `L29520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L29520) · [Before (L29466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29466)

```diff
-         animationInterval: null !== (qU = ee.textureInfo.animationInterval) && void 0 !== qU ? qU : 200
+         animationInterval: null !== (AL = WW.textureInfo.animationInterval) && void 0 !== AL ? AL : 200
```

#### 1742. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29477` → after: `L29531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L29531) · [Before (L29477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29477)

```diff
-           animationInterval: null !== (fU = ie.animationInterval) && void 0 !== fU ? fU : 200
+           animationInterval: null !== (bL = iW.animationInterval) && void 0 !== bL ? bL : 200
```

#### 1743. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29492` → after: `L29546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L29546) · [Before (L29492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29492)

```diff
-     if (Math.log(ee) / Math.log(2) % 1 !== 0) throw new Error(`${UF} has ${ee} animation states, which is not a power of 2`);
+     if (Math.log(WW) / Math.log(2) % 1 !== 0) throw new Error(`${cc} has ${WW} animation states, which is not a power of 2`);
```

#### 1744. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29509` → after: `L29563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L29563) · [Before (L29509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29509)

```diff
-         He = null !== (XU = RU[ie]) && void 0 !== XU ? XU : FU++;
+         OW = null !== (kL = xL[iW]) && void 0 !== kL ? kL : wL++;
```

#### 1745. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29529` → after: `L29583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L29583) · [Before (L29529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29529)

```diff
-           be = "string" === typeof ye ? ye : ye.animTextures[0];
+           EW = "string" === typeof mW ? mW : mW.animTextures[0];
```

#### 1746. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29539` → after: `L29593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L29593) · [Before (L29539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29539)

```diff
-     BU[UF] = null !== (EU = BU[ee.id]) && void 0 !== EU ? EU : new gH(ee)
+     ML[cc] = null !== (KL = ML[WW.id]) && void 0 !== KL ? KL : new KO(WW)
```

#### 1747. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29546` → after: `L29600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L29600) · [Before (L29546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29546)

```diff
-       const ie = null !== (OU = gU[ee[0]]) && void 0 !== OU ? OU : [];
+       const iW = null !== (YL = SL[WW[0]]) && void 0 !== YL ? YL : [];
```

#### 1748. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29786` → after: `L29840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L29840) · [Before (L29786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29786)

```diff
-   if (WU !== Object.keys(dU).at(-1)) throw new Error(`You have added new blocks. Please add the following to knownMetadataIds:\n"${WU}": ${tU.id},\nRemember that new blocks must come after existing blocks in blockInitInfo.`);
+   if (TL !== Object.keys(yL).at(-1)) throw new Error(`You have added new blocks. Please add the following to knownMetadataIds:\n"${TL}": ${JL.id},\nRemember that new blocks must come after existing blocks in blockInitInfo.`);
```

#### 1749. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29789` → after: `L29843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L29843) · [Before (L29789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29789)

```diff
-     if (BU[ie].id !== He) throw new Error(`${ie} id is not ${He}. This means you added a block _before_ other blocks. Blocks can only be added at the end of blockMetadata.ts`)
+     if (ML[iW].id !== OW) throw new Error(`${iW} id is not ${OW}. This means you added a block _before_ other blocks. Blocks can only be added at the end of blockMetadata.ts`)
```

#### 1750. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29793` → after: `L29847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L29847) · [Before (L29793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29793)

```diff
-     if (!BU[ee]) throw new Error(`Missing Mob Spawner Block for mob type ${UF}: please add '...getMobSpawnerBlock("${UF}"),' to the end of blockInitInfo.ts`)
+     if (!ML[WW]) throw new Error(`Missing Mob Spawner Block for mob type ${cc}: please add '...getMobSpawnerBlock("${cc}"),' to the end of blockInitInfo.ts`)
```

#### 1751. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L29799` → after: `L29853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R29853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L29853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L29853) · [Before (L29799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L29799)

```diff
-     if (!BU[ee]) throw new Error(`Missing Mob Painting Block for mob type ${UF}: please add '...getMobPaintingBlock("${UF}"),' to the end of blockInitInfo`)
+     if (!ML[WW]) throw new Error(`Missing Mob Painting Block for mob type ${cc}: please add '...getMobPaintingBlock("${cc}"),' to the end of blockInitInfo`)
```

#### 1752. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30332` → after: `L30386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R30386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L30386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L30386) · [Before (L30332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L30332)

```diff
-       [`${ee}|meta|charging2`]: {
+       [`${WW}|meta|charging2`]: {
```

#### 1753. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30334` → after: `L30388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R30388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L30388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L30388) · [Before (L30334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L30334)

```diff
-         textureInfo: `${ie.textureName}_charging_2`
+         textureInfo: `${iW.textureName}_charging_2`
```

#### 1754. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30336` → after: `L30390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R30390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L30390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L30390) · [Before (L30336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L30336)

```diff
-       [`${ee}|meta|charging3`]: {
+       [`${WW}|meta|charging3`]: {
```

#### 1755. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30338` → after: `L30392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R30392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L30392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L30392) · [Before (L30338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L30338)

```diff
-         textureInfo: `${ie.textureName}_charging_3`
+         textureInfo: `${iW.textureName}_charging_3`
```

#### 1756. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30340` → after: `L30394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R30394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L30394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L30394) · [Before (L30340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L30340)

```diff
-       [`${ee}|meta|charging4`]: {
+       [`${WW}|meta|charging4`]: {
```

#### 1757. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30342` → after: `L30396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R30396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L30396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L30396) · [Before (L30342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L30342)

```diff
-         textureInfo: `${ie.textureName}_charging_4`
+         textureInfo: `${iW.textureName}_charging_4`
```

#### 1758. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30353-L30354` → after: `L30407-L30408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R30407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L30407-L30408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L30407-L30408) · [Before (L30353-L30354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L30353-L30354)

```diff
-         heldItemGlb: `${ie}_${PU}`,
-         textureInfo: `${ie}_${PU}`
+         heldItemGlb: `${iW}_${uL}`,
+         textureInfo: `${iW}_${uL}`
```

#### 1759. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30357` → after: `L30411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R30411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L30411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L30411) · [Before (L30357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L30357)

```diff
-     for (const be of AU) ye[`${ee}|meta|${be}`] = {
+     for (const EW of oL) mW[`${WW}|meta|${EW}`] = {
```

#### 1760. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30359-L30360` → after: `L30413-L30414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R30413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L30413-L30414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L30413-L30414) · [Before (L30359-L30360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L30359-L30360)

```diff
-       heldItemGlb: `${ie}_${be}`,
-       textureInfo: `${ie}_${be}`
+       heldItemGlb: `${iW}_${EW}`,
+       textureInfo: `${iW}_${EW}`
```

#### 1761. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30385` → after: `L30439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R30439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L30439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L30439) · [Before (L30385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L30385)

```diff
-       [`${ee}|RequiresAmmo`]: {
+       [`${WW}|RequiresAmmo`]: {
```

#### 1762. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30388` → after: `L30442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R30442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L30442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L30442) · [Before (L30388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L30388)

```diff
-         heldItemGlb: null !== (He = ye.heldItemGlb) && void 0 !== He ? He : ee
+         heldItemGlb: null !== (OW = mW.heldItemGlb) && void 0 !== OW ? OW : WW
```

#### 1763. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30397` → after: `L30451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R30451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L30451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L30451) · [Before (L30397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L30397)

```diff
-     return "" === ie ? ee : `${ee} ${ie}`
+     return "" === iW ? WW : `${WW} ${iW}`
```

#### 1764. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30404` → after: `L30458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R30458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L30458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L30458) · [Before (L30404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L30404)

```diff
-     if (!be.includes(Me)) throw new Error(`Cannot name assets for "${LU(He,ye)}": "${be}" has no "${Me}" to replace`);
+     if (!EW.includes(NW)) throw new Error(`Cannot name assets for "${VL(OW,mW)}": "${EW}" has no "${NW}" to replace`);
```

#### 1765. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30426` → after: `L30480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R30480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L30480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L30480) · [Before (L30426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L30426)

```diff
-       translationKey: `item:${hy(ee)}`
+       translationKey: `item:${rm(WW)}`
```

#### 1766. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30462` → after: `L30516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R30516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L30516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L30516) · [Before (L30462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L30462)

```diff
-           kind: null !== (ie = lU[ee]) && void 0 !== ie ? ie : ee
+           kind: null !== (iW = BL[WW]) && void 0 !== iW ? iW : WW
```

#### 1767. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L30478` → after: `L30532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R30532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L30532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L30532) · [Before (L30478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L30478)

```diff
-     return `${ee} ${ie}`
+     return `${WW} ${iW}`
```

#### 1768. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L31010` → after: `L31064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R31064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L31064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L31064) · [Before (L31010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L31010)

```diff
-         mf: [15, 15, 15],
+         oA: [15, 15, 15],
```

#### 1769. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L31029` → after: `L31083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R31083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L31083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L31083) · [Before (L31029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L31029)

```diff
-         mf: [15, 14, 11],
+         oA: [15, 14, 11],
```

#### 1770. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L32417-L32419` → after: `L32471-L32473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R32471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L32471-L32473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L32471-L32473) · [Before (L32417-L32419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L32417-L32419)

```diff
-         const be = `Partially Full ${ee}`,
-           Me = `Half Full ${ee}`,
-           Ke = `Nearly Full ${ee}`,
+         const EW = `Partially Full ${WW}`,
+           NW = `Half Full ${WW}`,
+           PW = `Nearly Full ${WW}`,
```

#### 1771. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L32426` → after: `L32480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R32480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L32480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L32480) · [Before (L32426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L32426)

```diff
-             rootMetaDesc: `${be}|meta|charging1`
+             rootMetaDesc: `${EW}|meta|charging1`
```

#### 1772. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L32432` → after: `L32486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R32486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L32486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L32486) · [Before (L32432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L32432)

```diff
-             rootMetaDesc: `${Me}|meta|charging1`
+             rootMetaDesc: `${NW}|meta|charging1`
```

#### 1773. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L32438` → after: `L32492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R32492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L32492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L32492) · [Before (L32438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L32438)

```diff
-             rootMetaDesc: `${Ke}|meta|charging1`
+             rootMetaDesc: `${PW}|meta|charging1`
```

#### 1774. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L32444` → after: `L32498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R32498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L32498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L32498) · [Before (L32444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L32444)

```diff
-             rootMetaDesc: `${Ue}|meta|charging1`
+             rootMetaDesc: `${LW}|meta|charging1`
```

#### 1775. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L32499` → after: `L32553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R32553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L32553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L32553) · [Before (L32499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L32499)

```diff
-         mf: [4, 11, 11],
+         oA: [4, 11, 11],
```

#### 1776. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L32574` → after: `L32628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R32628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L32628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L32628) · [Before (L32574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L32574)

```diff
-         mf: [12, 7, 2]
+         oA: [12, 7, 2]
```

#### 1777. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L32731` → after: `L32785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R32785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L32785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L32785) · [Before (L32731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L32731)

```diff
-       ...bM((ee => `${ee} Kart`), {
+       ...NN((WW => `${WW} Kart`), {
```

#### 1778. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L32733` → after: `L32787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R32787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L32787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L32787) · [Before (L32733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L32733)

```diff
-           translationKey: `item:${hy(ee)}Kart`
+           translationKey: `item:${rm(WW)}Kart`
```

#### 1779. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L32735-L32736` → after: `L32789-L32790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R32789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L32789-L32790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L32789-L32790) · [Before (L32735-L32736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L32735-L32736)

```diff
-         textureInfo: ee => `${Ny(ee)}_kart`,
-         heldItemGlb: ee => `${ee} Kart Item`,
+         textureInfo: WW => `${zm(WW)}_kart`,
+         heldItemGlb: WW => `${WW} Kart Item`,
```

#### 1780. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L32742-L32744` → after: `L32796-L32798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R32796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L32796-L32798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L32796-L32798) · [Before (L32742-L32744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L32742-L32744)

```diff
-       ...bM((ee => `INTERNAL_MESH_${ee} Kart`), {
-         textureInfo: ee => `${Ny(ee)}_kart`,
-         heldItemGlb: ee => `${ee} Kart`,
+       ...NN((WW => `INTERNAL_MESH_${WW} Kart`), {
+         textureInfo: WW => `${zm(WW)}_kart`,
+         heldItemGlb: WW => `${WW} Kart`,
```

#### 1781. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L33453` → after: `L33507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R33507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L33507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L33507) · [Before (L33453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L33453)

```diff
-           [`${ee}|meta|dir2`]: {
+           [`${WW}|meta|dir2`]: {
```

#### 1782. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L33456` → after: `L33510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R33510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L33510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L33510) · [Before (L33456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L33456)

```diff
-             textureInfo: `${ie.textureName}_dir_2`
+             textureInfo: `${iW.textureName}_dir_2`
```

#### 1783. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L33458` → after: `L33512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R33512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L33512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L33512) · [Before (L33458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L33458)

```diff
-           [`${ee}|meta|dir3`]: {
+           [`${WW}|meta|dir3`]: {
```

#### 1784. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L33461` → after: `L33515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R33515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L33515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L33515) · [Before (L33461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L33461)

```diff
-             textureInfo: `${ie.textureName}_dir_3`
+             textureInfo: `${iW.textureName}_dir_3`
```

#### 1785. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L33463` → after: `L33517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R33517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L33517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L33517) · [Before (L33463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L33463)

```diff
-           [`${ee}|meta|dir4`]: {
+           [`${WW}|meta|dir4`]: {
```

#### 1786. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L33466` → after: `L33520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R33520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L33520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L33520) · [Before (L33466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L33466)

```diff
-             textureInfo: `${ie.textureName}_dir_4`
+             textureInfo: `${iW.textureName}_dir_4`
```

#### 1787. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L33468` → after: `L33522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R33522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L33522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L33522) · [Before (L33468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L33468)

```diff
-           [`${ee}|meta|dir5`]: {
+           [`${WW}|meta|dir5`]: {
```

#### 1788. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L33471` → after: `L33525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R33525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L33525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L33525) · [Before (L33471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L33471)

```diff
-             textureInfo: `${ie.textureName}_dir_5`
+             textureInfo: `${iW.textureName}_dir_5`
```

#### 1789. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L33473` → after: `L33527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R33527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L33527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L33527) · [Before (L33473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L33473)

```diff
-           [`${ee}|meta|dir6`]: {
+           [`${WW}|meta|dir6`]: {
```

#### 1790. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L33476` → after: `L33530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R33530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L33530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L33530) · [Before (L33476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L33476)

```diff
-             textureInfo: `${ie.textureName}_dir_6`
+             textureInfo: `${iW.textureName}_dir_6`
```

#### 1791. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L33478` → after: `L33532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R33532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L33532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L33532) · [Before (L33478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L33478)

```diff
-           [`${ee}|meta|dir7`]: {
+           [`${WW}|meta|dir7`]: {
```

#### 1792. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L33481` → after: `L33535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R33535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L33535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L33535) · [Before (L33481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L33481)

```diff
-             textureInfo: `${ie.textureName}_dir_7`
+             textureInfo: `${iW.textureName}_dir_7`
```

#### 1793. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L33483` → after: `L33537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R33537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L33537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L33537) · [Before (L33483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L33483)

```diff
-           [`${ee}|meta|dir8`]: {
+           [`${WW}|meta|dir8`]: {
```

#### 1794. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L33486` → after: `L33540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R33540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L33540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L33540) · [Before (L33486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L33486)

```diff
-             textureInfo: `${ie.textureName}_dir_8`
+             textureInfo: `${iW.textureName}_dir_8`
```

#### 1795. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L33488` → after: `L33542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R33542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L33542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L33542) · [Before (L33488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L33488)

```diff
-           [`${ee}|meta|dir9`]: {
+           [`${WW}|meta|dir9`]: {
```

#### 1796. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L33491` → after: `L33545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R33545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L33545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L33545) · [Before (L33491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L33491)

```diff
-             textureInfo: `${ie.textureName}_dir_9`
+             textureInfo: `${iW.textureName}_dir_9`
```

#### 1797. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L33493` → after: `L33547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R33547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L33547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L33547) · [Before (L33493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L33493)

```diff
-           [`${ee}|meta|dir10`]: {
+           [`${WW}|meta|dir10`]: {
```

#### 1798. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L33496` → after: `L33550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R33550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L33550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L33550) · [Before (L33496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L33496)

```diff
-             textureInfo: `${ie.textureName}_dir_10`
+             textureInfo: `${iW.textureName}_dir_10`
```

#### 1799. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L33498` → after: `L33552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R33552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L33552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L33552) · [Before (L33498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L33498)

```diff
-           [`${ee}|meta|dir11`]: {
+           [`${WW}|meta|dir11`]: {
```

#### 1800. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L33501` → after: `L33555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R33555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L33555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L33555) · [Before (L33501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L33501)

```diff
-             textureInfo: `${ie.textureName}_dir_11`
+             textureInfo: `${iW.textureName}_dir_11`
```

#### 1801. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L33503` → after: `L33557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R33557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L33557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L33557) · [Before (L33503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L33503)

```diff
-           [`${ee}|meta|dir12`]: {
+           [`${WW}|meta|dir12`]: {
```

#### 1802. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L33506` → after: `L33560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R33560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L33560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L33560) · [Before (L33506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L33506)

```diff
-             textureInfo: `${ie.textureName}_dir_12`
+             textureInfo: `${iW.textureName}_dir_12`
```

#### 1803. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35916` → after: `L35970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R35970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L35970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L35970) · [Before (L35916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L35916)

```diff
-       ...bM((ee => `${ee} Balloon`), {
+       ...NN((WW => `${WW} Balloon`), {
```

#### 1804. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35918` → after: `L35972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R35972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L35972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L35972) · [Before (L35918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L35918)

```diff
-           translationKey: `item:${hy(ee)}Balloon`
+           translationKey: `item:${rm(WW)}Balloon`
```

#### 1805. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35920-L35921` → after: `L35974-L35975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R35974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L35974-L35975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L35974-L35975) · [Before (L35920-L35921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L35920-L35921)

```diff
-         textureInfo: ee => `${Ny(ee)}_balloon`,
-         heldItemGlb: ee => `${ee} Balloon Item`,
+         textureInfo: WW => `${zm(WW)}_balloon`,
+         heldItemGlb: WW => `${WW} Balloon Item`,
```

#### 1806. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35930-L35932` → after: `L35984-L35986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R35984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L35984-L35986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L35984-L35986) · [Before (L35930-L35932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L35930-L35932)

```diff
-       ...bM((ee => `INTERNAL_MESH_${ee} Balloon`), {
-         textureInfo: ee => `${Ny(ee)}_balloon`,
-         heldItemGlb: ee => `${ee} Balloon`,
+       ...NN((WW => `INTERNAL_MESH_${WW} Balloon`), {
+         textureInfo: WW => `${zm(WW)}_balloon`,
+         heldItemGlb: WW => `${WW} Balloon`,
```

#### 1807. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35938` → after: `L35992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R35992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L35992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L35992) · [Before (L35938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L35938)

```diff
-       ...bM((ee => `${ee} Popup Tower`), {
+       ...NN((WW => `${WW} Popup Tower`), {
```

#### 1808. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35940` → after: `L35994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R35994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L35994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L35994) · [Before (L35940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L35940)

```diff
-           translationKey: `item:${hy(ee)}PopupTower`
+           translationKey: `item:${rm(WW)}PopupTower`
```

#### 1809. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35942` → after: `L35996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R35996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L35996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L35996) · [Before (L35942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L35942)

```diff
-         textureInfo: ee => `${Ny(ee)}_popup_tower`,
+         textureInfo: WW => `${zm(WW)}_popup_tower`,
```

#### 1810. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35951` → after: `L36005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L36005) · [Before (L35951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L35951)

```diff
-       ...bM((ee => `${ee} Paintball Gun`), {
+       ...NN((WW => `${WW} Paintball Gun`), {
```

#### 1811. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35953` → after: `L36007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L36007) · [Before (L35953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L35953)

```diff
-           translationKey: `item:${hy(ee)}PaintballGun`
+           translationKey: `item:${rm(WW)}PaintballGun`
```

#### 1812. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35955` → after: `L36009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L36009) · [Before (L35955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L35955)

```diff
-         textureInfo: ee => `${Ny(ee)}_paintball_gun`,
+         textureInfo: WW => `${zm(WW)}_paintball_gun`,
```

#### 1813. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35968` → after: `L36022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L36022) · [Before (L35968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L35968)

```diff
-       ...bM((ee => `${ee} Paintball`), {
+       ...NN((WW => `${WW} Paintball`), {
```

#### 1814. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35970` → after: `L36024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L36024) · [Before (L35970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L35970)

```diff
-           translationKey: `item:${hy(ee)}Paintball`
+           translationKey: `item:${rm(WW)}Paintball`
```

#### 1815. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35972` → after: `L36026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L36026) · [Before (L35972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L35972)

```diff
-         textureInfo: ee => `${Ny(ee)}_paintball`,
+         textureInfo: WW => `${zm(WW)}_paintball`,
```

#### 1816. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35981` → after: `L36035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L36035) · [Before (L35981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L35981)

```diff
-       ...bM((ee => `${ee} Heavy Paintball Gun`), {
+       ...NN((WW => `${WW} Heavy Paintball Gun`), {
```

#### 1817. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35983` → after: `L36037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L36037) · [Before (L35983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L35983)

```diff
-           translationKey: `item:${hy(ee)}HeavyPaintballGun`
+           translationKey: `item:${rm(WW)}HeavyPaintballGun`
```

#### 1818. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35985` → after: `L36039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L36039) · [Before (L35985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L35985)

```diff
-         textureInfo: ee => `${Ny(ee)}_heavy_paintball_gun`,
+         textureInfo: WW => `${zm(WW)}_heavy_paintball_gun`,
```

#### 1819. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L35998` → after: `L36052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L36052) · [Before (L35998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L35998)

```diff
-       ...bM((ee => `${ee} Paintball Explosive Item`), {
+       ...NN((WW => `${WW} Paintball Explosive Item`), {
```

#### 1820. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L36000` → after: `L36054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L36054) · [Before (L36000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L36000)

```diff
-           translationKey: `item:${hy(ee)}PaintballExplosive`
+           translationKey: `item:${rm(WW)}PaintballExplosive`
```

#### 1821. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L36002` → after: `L36056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L36056) · [Before (L36002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L36002)

```diff
-         textureInfo: ee => `explosive_paint_${Ny(ee)}`,
+         textureInfo: WW => `explosive_paint_${zm(WW)}`,
```

#### 1822. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L36011` → after: `L36065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L36065) · [Before (L36011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L36011)

```diff
-       ...bM((ee => `${ee} Sticky Paintball Explosive Item`), {
+       ...NN((WW => `${WW} Sticky Paintball Explosive Item`), {
```

#### 1823. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L36013` → after: `L36067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L36067) · [Before (L36013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L36013)

```diff
-           translationKey: `item:${hy(ee)}StickyPaintballExplosive`
+           translationKey: `item:${rm(WW)}StickyPaintballExplosive`
```

#### 1824. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L36015` → after: `L36069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L36069) · [Before (L36015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L36015)

```diff
-         textureInfo: ee => `explosive_paint_sticky_${Ny(ee)}`,
+         textureInfo: WW => `explosive_paint_sticky_${zm(WW)}`,
```

#### 1825. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L36024` → after: `L36078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L36078) · [Before (L36024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L36024)

```diff
-       ...bM((ee => `${ee} Seeking Paintball Explosive Item`), {
+       ...NN((WW => `${WW} Seeking Paintball Explosive Item`), {
```

#### 1826. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L36026` → after: `L36080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L36080) · [Before (L36026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L36026)

```diff
-           translationKey: `item:${hy(ee)}SeekingPaintballExplosive`
+           translationKey: `item:${rm(WW)}SeekingPaintballExplosive`
```

#### 1827. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L36028` → after: `L36082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L36082) · [Before (L36028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L36028)

```diff
-         textureInfo: ee => `explosive_paint_seeking_${Ny(ee)}`,
+         textureInfo: WW => `explosive_paint_seeking_${zm(WW)}`,
```

#### 1828. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L36037` → after: `L36091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L36091) · [Before (L36037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L36037)

```diff
-       ...bM((ee => `${ee} Quick Paintball Explosive Item`), {
+       ...NN((WW => `${WW} Quick Paintball Explosive Item`), {
```

#### 1829. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L36039` → after: `L36093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L36093) · [Before (L36039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L36039)

```diff
-           translationKey: `item:${hy(ee)}QuickPaintballExplosive`
+           translationKey: `item:${rm(WW)}QuickPaintballExplosive`
```

#### 1830. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L36041` → after: `L36095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L36095) · [Before (L36041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L36041)

```diff
-         textureInfo: ee => `explosive_paint_quick_${Ny(ee)}`,
+         textureInfo: WW => `explosive_paint_quick_${zm(WW)}`,
```

#### 1831. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L36055` → after: `L36109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L36109) · [Before (L36055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L36055)

```diff
-       }((ee => `${ee} Paint Bow`), {
+       }((WW => `${WW} Paint Bow`), {
```

#### 1832. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L36057` → after: `L36111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L36111) · [Before (L36057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L36057)

```diff
-           translationKey: `item:${hy(ee)}PaintBow`
+           translationKey: `item:${rm(WW)}PaintBow`
```

#### 1833. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L36059-L36060` → after: `L36113-L36114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36113-L36114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L36113-L36114) · [Before (L36059-L36060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L36059-L36060)

```diff
-         textureName: ee => `${Ny(ee)}_paint_bow`,
-         rootMetaDesc: ee => `${ee} Paint Bow|meta|charging1`,
+         textureName: WW => `${zm(WW)}_paint_bow`,
+         rootMetaDesc: WW => `${WW} Paint Bow|meta|charging1`,
```

#### 1834. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L36078` → after: `L36132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L36132) · [Before (L36078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L36078)

```diff
-             translationKey: `item:${ie}SpawnOrb`
+             translationKey: `item:${iW}SpawnOrb`
```

#### 1835. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L36081` → after: `L36135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L36135) · [Before (L36081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L36081)

```diff
-           textureInfo: `${He}_spawn_orb`,
+           textureInfo: `${OW}_spawn_orb`,
```

#### 1836. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L36086` → after: `L36140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L36140) · [Before (L36086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L36086)

```diff
-             translationKey: `item:${ie}SpawnOrbDescription`,
+             translationKey: `item:${iW}SpawnOrbDescription`,
```

#### 1837. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L36116` → after: `L36170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L36170) · [Before (L36116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L36116)

```diff
-             textureInfo: `caught_${ie}_${be?"default":He}`,
+             textureInfo: `caught_${iW}_${EW?"default":OW}`,
```

#### 1838. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L36294` → after: `L36348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L36348) · [Before (L36294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L36294)

```diff
-       ...bM((ee => `${ee} Firecracker`), {
+       ...NN((WW => `${WW} Firecracker`), {
```

#### 1839. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L36296` → after: `L36350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L36350) · [Before (L36296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L36296)

```diff
-           translationKey: `item:${hy(ee)}Firecracker`
+           translationKey: `item:${rm(WW)}Firecracker`
```

#### 1840. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L36298` → after: `L36352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L36352) · [Before (L36298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L36298)

```diff
-         textureInfo: ee => `firecracker_${Ny(ee)}`,
+         textureInfo: WW => `firecracker_${zm(WW)}`,
```

#### 1841. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L36336` → after: `L36390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L36390) · [Before (L36336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L36336)

```diff
-       ...bM((ee => `${ee} Firecracker Pebble`), {
+       ...NN((WW => `${WW} Firecracker Pebble`), {
```

#### 1842. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L36338` → after: `L36392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L36392) · [Before (L36338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L36338)

```diff
-           translationKey: `item:${hy(ee)}FirecrackerPebble`
+           translationKey: `item:${rm(WW)}FirecrackerPebble`
```

#### 1843. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L36340` → after: `L36394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R36394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L36394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L36394) · [Before (L36340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L36340)

```diff
-         textureInfo: ee => `firecracker_pebble_${Ny(ee)}`,
+         textureInfo: WW => `firecracker_pebble_${zm(WW)}`,
```

#### 1844. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39255` → after: `L39309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39309) · [Before (L39255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39255)

```diff
-         textureInfo: "water_bucket",
+         textureInfo: "still_water_bucket",
```

#### 1845. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39270` → after: `L39324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39324) · [Before (L39270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39270)

```diff
-         textureInfo: "lava_bucket",
+         textureInfo: "still_lava_bucket",
```

#### 1846. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39275` → after: `L39329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39329) · [Before (L39275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39275)

```diff
-         mf: [12, 7, 2]
+         oA: [12, 7, 2]
```

#### 1847. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39284` → after: `L39338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39338) · [Before (L39284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39284)

```diff
-         if (NU[ye]) throw new Error(`Item family "${UF.name}" would overwrite the existing item "${ye}"`);
+         if (zL[mW]) throw new Error(`Item family "${cc.name}" would overwrite the existing item "${mW}"`);
```

#### 1848. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39286` → after: `L39340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39340) · [Before (L39286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39286)

```diff
-             displayName: null !== (rU = null === (QU = UF.displayName) || void 0 === QU ? void 0 : QU.call(UF, ye)) && void 0 !== rU ? rU : ye
+             displayName: null !== (QL = null === (Wc = cc.displayName) || void 0 === Wc ? void 0 : Wc.call(cc, mW)) && void 0 !== QL ? QL : mW
```

#### 1849. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39290` → after: `L39344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39344) · [Before (L39290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39290)

```diff
-           if (!UF.metadata) throw new Error(`Item family "${UF.name}" declares neither inheritsFrom nor metadata`);
+           if (!cc.metadata) throw new Error(`Item family "${cc.name}" declares neither inheritsFrom nor metadata`);
```

#### 1850. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39301` → after: `L39355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39355) · [Before (L39301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39301)

```diff
-         if (!NU[Ke]) throw new Error(`Item family "${UF.name}" inherits "${ye}" from "${Ke}", which is not registered`);
+         if (!zL[PW]) throw new Error(`Item family "${cc.name}" inherits "${mW}" from "${PW}", which is not registered`);
```

#### 1851. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39303` → after: `L39357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39357) · [Before (L39303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39303)

```diff
-           const Me = NU[`${Ke}${Ue}`];
+           const NW = zL[`${PW}${LW}`];
```

#### 1852. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39312` → after: `L39366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39366) · [Before (L39312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39312)

```diff
-           Me.rootMetaDesc && (Je.rootMetaDesc = Me.rootMetaDesc.replace(Ke, ye)), NU[`${ye}${Ue}`] = Je
+           NW.rootMetaDesc && (wW.rootMetaDesc = NW.rootMetaDesc.replace(PW, mW)), zL[`${mW}${LW}`] = wW
```

#### 1853. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39330` → after: `L39384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39384) · [Before (L39330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39330)

```diff
-       translationKey: `item:${FF}`
+       translationKey: `item:${wc}`
```

#### 1854. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39333` → after: `L39387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39387) · [Before (L39333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39333)

```diff
-       translationKey: `item:${FF}Description`
+       translationKey: `item:${wc}Description`
```

#### 1855. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39346` → after: `L39400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39400) · [Before (L39346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39346)

```diff
-       translationKey: `item:${FF}`
+       translationKey: `item:${wc}`
```

#### 1856. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39349` → after: `L39403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39403) · [Before (L39349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39349)

```diff
-       translationKey: `item:${FF}Description`
+       translationKey: `item:${wc}Description`
```

#### 1857. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39367` → after: `L39421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39421) · [Before (L39367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39367)

```diff
-       translationKey: `item:${FF}`
+       translationKey: `item:${wc}`
```

#### 1858. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39370` → after: `L39424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39424) · [Before (L39370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39370)

```diff
-       translationKey: `item:${FF}Description`
+       translationKey: `item:${wc}Description`
```

#### 1859. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39416` → after: `L39470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39470) · [Before (L39416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39416)

```diff
-       translationKey: `item:${FF}`
+       translationKey: `item:${wc}`
```

#### 1860. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39419` → after: `L39473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39473) · [Before (L39419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39419)

```diff
-       translationKey: `item:${FF}Description`
+       translationKey: `item:${wc}Description`
```

#### 1861. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39439` → after: `L39493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39493) · [Before (L39439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39439)

```diff
-       translationKey: `item:${FF}`
+       translationKey: `item:${wc}`
```

#### 1862. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39442` → after: `L39496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39496) · [Before (L39442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39442)

```diff
-       translationKey: `item:${FF}Description`
+       translationKey: `item:${wc}Description`
```

#### 1863. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39463` → after: `L39517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39517) · [Before (L39463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39463)

```diff
-       translationKey: `item:${FF}`
+       translationKey: `item:${wc}`
```

#### 1864. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39466` → after: `L39520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39520) · [Before (L39466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39466)

```diff
-       translationKey: `item:${FF}Description`
+       translationKey: `item:${wc}Description`
```

#### 1865. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39500` → after: `L39554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39554) · [Before (L39500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39500)

```diff
-       translationKey: `item:${FF}`
+       translationKey: `item:${wc}`
```

#### 1866. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39503` → after: `L39557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39557) · [Before (L39503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39503)

```diff
-       translationKey: `item:${FF}Description`
+       translationKey: `item:${wc}Description`
```

#### 1867. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39519` → after: `L39573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39573) · [Before (L39519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39519)

```diff
-       translationKey: `item:${FF}`
+       translationKey: `item:${wc}`
```

#### 1868. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39522` → after: `L39576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39576) · [Before (L39522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39522)

```diff
-       translationKey: `item:${FF}Description`
+       translationKey: `item:${wc}Description`
```

#### 1869. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39549` → after: `L39603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39603) · [Before (L39549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39549)

```diff
-   for (const UF of [2, 3, 4, 5, 6, 7, 8, 9, 10]) NU[`Core Tier ${UF}`] = {
+   for (const cc of [2, 3, 4, 5, 6, 7, 8, 9, 10]) zL[`Core Tier ${cc}`] = {
```

#### 1870. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39551` → after: `L39605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39605) · [Before (L39551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39551)

```diff
-       translationKey: `item:coreTier${UF}`
+       translationKey: `item:coreTier${cc}`
```

#### 1871. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39554` → after: `L39608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39608) · [Before (L39554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39554)

```diff
-       translationKey: `item:coreTier${UF}Description`
+       translationKey: `item:coreTier${cc}Description`
```

#### 1872. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39557` → after: `L39611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39611) · [Before (L39557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39557)

```diff
-     textureInfo: `core_tier_${Math.min(UF,5)}`,
+     textureInfo: `core_tier_${Math.min(cc,5)}`,
```

#### 1873. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39583` → after: `L39637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39637) · [Before (L39583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39583)

```diff
-     ]) NU[`Voltplate ${UF}`] = {
+     ]) zL[`Voltplate ${cc}`] = {
```

#### 1874. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39585` → after: `L39639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39639) · [Before (L39585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39585)

```diff
-       translationKey: `item:voltplate${UF}`
+       translationKey: `item:voltplate${cc}`
```

#### 1875. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39588` → after: `L39642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39642) · [Before (L39588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39588)

```diff
-       translationKey: `item:voltplate${UF}Description`
+       translationKey: `item:voltplate${cc}Description`
```

#### 1876. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39591` → after: `L39645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39645) · [Before (L39591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39591)

```diff
-     textureInfo: `voltplate_${UF.toLowerCase()}`,
+     textureInfo: `voltplate_${cc.toLowerCase()}`,
```

#### 1877. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39603` → after: `L39657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39657) · [Before (L39603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39603)

```diff
-           translationKey: `item:${hy(ie)}`
+           translationKey: `item:${rm(iW)}`
```

#### 1878. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39606` → after: `L39660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39660) · [Before (L39606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39606)

```diff
-           translationKey: `item:sword${ee}Description`
+           translationKey: `item:sword${WW}Description`
```

#### 1879. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39653` → after: `L39707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39707) · [Before (L39653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39653)

```diff
-       translationKey: `item:${FF}`
+       translationKey: `item:${wc}`
```

#### 1880. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39656` → after: `L39710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39710) · [Before (L39656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39656)

```diff
-       translationKey: `item:${FF}Description`
+       translationKey: `item:${wc}Description`
```

#### 1881. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39672` → after: `L39726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39726) · [Before (L39672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39672)

```diff
-       translationKey: `item:${FF}`
+       translationKey: `item:${wc}`
```

#### 1882. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39675` → after: `L39729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39729) · [Before (L39675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39675)

```diff
-       translationKey: `item:${FF}Description`
+       translationKey: `item:${wc}Description`
```

#### 1883. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39685` → after: `L39739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39739) · [Before (L39685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39685)

```diff
-   for (const UF of [11, 12, 13, 14, 15]) NU[`Core Tier ${UF}`] = {
+   for (const cc of [11, 12, 13, 14, 15]) zL[`Core Tier ${cc}`] = {
```

#### 1884. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39687` → after: `L39741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39741) · [Before (L39687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39687)

```diff
-       translationKey: `item:coreTier${UF}`
+       translationKey: `item:coreTier${cc}`
```

#### 1885. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39690` → after: `L39744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39744) · [Before (L39690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39690)

```diff
-       translationKey: `item:coreTier${UF}Description`
+       translationKey: `item:coreTier${cc}Description`
```

#### 1886. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39704` → after: `L39758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39758) · [Before (L39704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39704)

```diff
-       translationKey: `item:${FF}`
+       translationKey: `item:${wc}`
```

#### 1887. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39707` → after: `L39761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39761) · [Before (L39707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39707)

```diff
-       translationKey: `item:${FF}Description`
+       translationKey: `item:${wc}Description`
```

#### 1888. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39723` → after: `L39777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39777) · [Before (L39723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39723)

```diff
-     ]) NU[`Nova ${UF}`] = {
+     ]) zL[`Nova ${cc}`] = {
```

#### 1889. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39725` → after: `L39779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39779) · [Before (L39725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39725)

```diff
-       translationKey: `item:nova${UF}`
+       translationKey: `item:nova${cc}`
```

#### 1890. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39728` → after: `L39782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39782) · [Before (L39728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39728)

```diff
-       translationKey: `item:nova${UF}Description`
+       translationKey: `item:nova${cc}Description`
```

#### 1891. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39731` → after: `L39785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39785) · [Before (L39731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39731)

```diff
-     textureInfo: `nova_${UF.toLowerCase()}`,
+     textureInfo: `nova_${cc.toLowerCase()}`,
```

#### 1892. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39769` → after: `L39823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39823) · [Before (L39769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39769)

```diff
-   for (const UF of ["Pig", "Cow", "Sheep", "Deer", "Stag"]) NU[`Caged ${UF}`] = {
+   for (const cc of ["Pig", "Cow", "Sheep", "Deer", "Stag"]) zL[`Caged ${cc}`] = {
```

#### 1893. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39771` → after: `L39825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39825) · [Before (L39771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39771)

```diff
-       translationKey: `item:caged${UF}`
+       translationKey: `item:caged${cc}`
```

#### 1894. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39821` → after: `L39875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39875) · [Before (L39821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39821)

```diff
-       translationKey: `item:${FF}`
+       translationKey: `item:${wc}`
```

#### 1895. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39824` → after: `L39878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39878) · [Before (L39824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39824)

```diff
-       translationKey: `item:${FF}Description`
+       translationKey: `item:${wc}Description`
```

#### 1896. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39839` → after: `L39893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39893) · [Before (L39839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39839)

```diff
-     HF[UF] = null !== (yF = HF[ee.id]) && void 0 !== yF ? yF : new OH(ee)
+     mc[cc] = null !== (Ec = mc[WW.id]) && void 0 !== Ec ? Ec : new SO(WW)
```

#### 1897. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39846` → after: `L39900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39900) · [Before (L39846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39846)

```diff
-     if (!bF[ee]) throw new Error(`Missing "${ee}" item for vehicle type "${UF}"`)
+     if (!Nc[WW]) throw new Error(`Missing "${WW}" item for vehicle type "${cc}"`)
```

#### 1898. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39873` → after: `L39927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39927) · [Before (L39873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39873)

```diff
-       Ue[ee] = new FH(Fe, Je, oe, ie.seed, ke, ie.sb, null !== (ye = ie.hb) && void 0 !== ye ? ye : null, He, Me)
+       LW[WW] = new cO(cW, wW, tW, iW.seed, xW, iW.wm, null !== (mW = iW.Zm) && void 0 !== mW ? mW : null, OW, NW)
```

#### 1899. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39902` → after: `L39956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39956) · [Before (L39902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39902)

```diff
-               const ie = `port${qe++}|`,
+               const iW = `port${lW++}|`,
```

#### 1900. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39910` → after: `L39964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39964) · [Before (L39910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39910)

```diff
-                       fe(Ke, ye), He.set(Ke, (null !== (be = He.get(Ke)) && void 0 !== be ? be : 0) + 1);
+                       AW(PW, mW), OW.set(PW, (null !== (EW = OW.get(PW)) && void 0 !== EW ? EW : 0) + 1);
```

#### 1901. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39914` → after: `L39968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39968) · [Before (L39914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39914)

```diff
-                       const ee = (null !== (Me = He.get(Ke)) && void 0 !== Me ? Me : 0) - 1;
+                       const WW = (null !== (NW = OW.get(PW)) && void 0 !== NW ? NW : 0) - 1;
```

#### 1902. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39938` → after: `L39992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R39992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L39992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L39992) · [Before (L39938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39938)

```diff
-             if (Fe = He.BR, Je = null !== (be = He.blockMetadata) && void 0 !== be ? be : null === ye || void 0 === ye ? void 0 : ye.blockMetadata, oe = null !== (Me = He.itemMetadata) && void 0 !== Me ? Me : null === ye || void 0 === ye ? void 0 : ye.itemMetadata, !Je || !oe) th … [truncated]
+             if (cW = OW.jZ, wW = null !== (EW = OW.blockMetadata) && void 0 !== EW ? EW : null === mW || void 0 === mW ? void 0 : mW.blockMetadata, tW = null !== (NW = OW.itemMetadata) && void 0 !== NW ? NW : null === mW || void 0 === mW ? void 0 : mW.itemMetadata, !wW || !tW) th … [truncated]
```

#### 1903. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39978` → after: `L40032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R40032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L40032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L40032) · [Before (L39978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39978)

```diff
-         return ri().TR(ee, ie)
+         return Fi().cc(WW, iW)
```

#### 1904. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L39988` → after: `L40042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R40042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L40042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/procGenWorker.js#L40042) · [Before (L39988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/procGenWorker.js#L39988)

```diff
-       })(ee) || console.warn(`Wasm did not start (${Gi()}), so the world-gen worker sends no chunk hashes`)
+       })(WW) || console.warn(`Wasm did not start (${zi()}), so the world-gen worker sends no chunk hashes`)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/renderDebug.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/renderDebug.js` (119 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9)

#### 1. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1-L2)

```diff
- export const id = 56;
- export const ids = [56];
+ export const id = 57;
+ export const ids = [57];
```

#### 2. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L4)

```diff
-   5144: (ee, ie, He) => {
+   5424: (WW, iW, OW) => {
```

#### 3. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L6)

```diff
-       e: () => oe
+       c: () => tW
```

#### 4. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L8)

```diff
-     var ye = He(18),
+     var mW = OW(25),
```

#### 5. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L10-L11` → after: `L10-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L10-L11) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L10-L11)

```diff
-       Me = He(1246),
-       Ke = He(3037);
+       NW = OW(1294),
+       PW = OW(3866);
```

#### 6. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L16` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L16) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L16)

```diff
-       return "visible" === document.visibilityState && "inGame" === ye.e.get("gameState") && (0, Me.x)()
+       return "visible" === document.visibilityState && "inGame" === mW.d.get("gameState") && (0, NW.z)()
```

#### 7. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L20)

```diff
-       (0, Ke.r)() || function(ee, ie, He) {
+       (0, PW.x)() || function(WW, iW, OW) {
```

#### 8. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L27` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L27) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L27)

```diff
-           ee(`saved for the player after ${Ue/1e3} s of play`), (0, Ke.B)(), be.h.yR("chat", {
+           WW(`saved for the player after ${LW/1e3} s of play`), (0, PW.J)(), EW.l.iZ("chat", {
```

#### 9. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L39` → after: `L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L39) · [Before (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L39)

```diff
-   5138: (ee, ie, He) => {
+   5419: (WW, iW, OW) => {
```

#### 10. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L46-L48` → after: `L46-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L46-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L46-L48) · [Before (L46-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L46-L48)

```diff
-     var ye = He(1862),
-       be = He(5144),
-       Me = He(3037);
+     var mW = OW(1943),
+       EW = OW(5424),
+       NW = OW(3866);
```

#### 11. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L65-L66` → after: `L65-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L65-L66) · [Before (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L65-L66)

```diff
-         return ie + (1 === (22 >>> ee & 1) ? 4 - He : He) & 3
-       }(be, Fe(ye), ie), Ke = be >>> 1, [oe, Re] = Je(He), ke = 1 === Me || 2 === Me ? oe : 0, qe = Me >= 2 ? Re : 0, fe = [63 & He, He >>> 6 & 63, He >>> 12 & 63];
+         return iW + (1 === (22 >>> WW & 1) ? 4 - OW : OW) & 3
+       }(EW, cW(mW), iW), PW = EW >>> 1, [tW, ZW] = wW(OW), xW = 1 === NW || 2 === NW ? tW : 0, lW = NW >= 2 ? ZW : 0, AW = [63 & OW, OW >>> 6 & 63, OW >>> 12 & 63];
```

#### 12. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L89` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L89) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L89)

```diff
-         Me.push(Ke === ie ? `[${He}]` : He)
+         NW.push(PW === iW ? `[${OW}]` : OW)
```

#### 13. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L185` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L185) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L185)

```diff
-       return null === ee.name ? `#${ee.id}` : `#${ee.id} ${ee.name}`
+       return null === WW.name ? `#${WW.id}` : `#${WW.id} ${WW.name}`
```

#### 14. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L207` → after: `L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L207) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L207)

```diff
-         this.print = ee, this.now = ie, this.shown = 0, this.lJ = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.KR = [], this.dropped = 0
+         this.print = WW, this.now = iW, this.shown = 0, this.BL = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.EZ = [], this.dropped = 0
```

#### 15. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L211-L212` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L211-L212) · [Before (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L211-L212)

```diff
-         if (ie - this.second >= 1e3 && (this.second = ie, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.lJ++, void this.store(ee);
-         this.shown++, this.inSecond++, this.print(400 === this.shown ? `${ee} (the last line here: the rest go to bloxdDebug.save())` : ee)
+         if (iW - this.second >= 1e3 && (this.second = iW, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.BL++, void this.store(WW);
+         this.shown++, this.inSecond++, this.print(400 === this.shown ? `${WW} (the last line here: the rest go to bloxdDebug.save())` : WW)
```

#### 16. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L218` → after: `L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L218) · [Before (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L218)

```diff
-         this.KR.push(`${new Date(Date.now()).toISOString()} ${ee}`), this.KR.length > 2e4 && (this.KR.shift(), this.dropped++)
+         this.EZ.push(`${new Date(Date.now()).toISOString()} ${WW}`), this.EZ.length > 2e4 && (this.EZ.shift(), this.dropped++)
```

#### 17. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L221` → after: `L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L221) · [Before (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L221)

```diff
-         return [`${this.shown} lines logged (above); kept here: ${this.lJ} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.KR].join("\n")
+         return [`${this.shown} lines logged (above); kept here: ${this.BL} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.EZ].join("\n")
```

#### 18. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L231` → after: `L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L231) · [Before (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L231)

```diff
-         (0, Me.i)("render", (() => ee.dump())), Ce = ee
+         (0, NW.l)("render", (() => WW.dump())), VW = WW
```

#### 19. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L246` → after: `L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L246) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L246)

```diff
-       return ee.length <= ie ? ee : `${ee.slice(0,ie)}... (${ee.length-ie} more characters)`
+       return WW.length <= iW ? WW : `${WW.slice(0,iW)}... (${WW.length-iW} more characters)`
```

#### 20. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L257` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L257) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L257)

```diff
-           zp: be,
+           kj: EW,
```

#### 21. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L282` → after: `L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L282) · [Before (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L282)

```diff
-             }), ie.push(`@${be} buf#${xe(ye)} +${Me} stride ${Ke} ${Ue}x0x${Fe.toString(16)}${Je?" int":""} div ${oe}`)
+             }), iW.push(`@${EW} buf#${gW(mW)} +${NW} stride ${PW} ${LW}x0x${cW.toString(16)}${wW?" int":""} div ${tW}`)
```

#### 22. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L296` → after: `L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L296) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L296)

```diff
-               Me = ye ? `+${ye.offset}` : be ? Array.from(be).slice(0, 3).join(",") : "?";
+               NW = mW ? `+${mW.offset}` : EW ? Array.from(EW).slice(0, 3).join(",") : "?";
```

#### 23. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L315` → after: `L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L315) · [Before (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L315)

```diff
-             const Je = Math.min(be, We, de - (null !== Fe && void 0 !== Fe ? Fe : 0));
+             const wW = Math.min(EW, yW, YW - (null !== cW && void 0 !== cW ? cW : 0));
```

#### 24. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L345` → after: `L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L345) · [Before (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L345)

```diff
-             Ke.parts.set(Me, (null !== Fe && void 0 !== Fe ? Fe : 0) + Je);
+             PW.parts.set(NW, (null !== cW && void 0 !== cW ? cW : 0) + wW);
```

#### 25. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L350` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L350) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L350)

```diff
-               fe && (Ke.fed.records++, He.some(((ee, He) => ee !== ie[He])) && (Ke.fed.differing++, Ke.fed.first.length < 8 && Ke.fed.first.push(`part ${Me} instance ${Te}: fed ${He.map(bi).join(" ")} buffer ${ie.map(bi).join(" ")}`)));
+               AW && (PW.fed.records++, OW.some(((WW, OW) => WW !== iW[OW])) && (PW.fed.differing++, PW.fed.first.length < 8 && PW.fed.first.push(`part ${NW} instance ${bW}: fed ${OW.map(Ei).join(" ")} buffer ${iW.map(Ei).join(" ")}`)));
```

#### 26. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L396` → after: `L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L396) · [Before (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L396)

```diff
-                 Me.parts.set(be[He + 3], (null !== (ke = Me.parts.get(be[He + 3])) && void 0 !== ke ? ke : 0) + (ee % 6 === 0 ? 1 : 0)), Me.vertices.push({
+                 NW.parts.set(EW[OW + 3], (null !== (xW = NW.parts.get(EW[OW + 3])) && void 0 !== xW ? xW : 0) + (WW % 6 === 0 ? 1 : 0)), NW.vertices.push({
```

#### 27. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L407` → after: `L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L407) · [Before (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L407)

```diff
-         ue(`decode probe failed on program ${De(He)}: ${String(oe)}`)
+         fW(`decode probe failed on program ${HW(OW)}: ${String(tW)}`)
```

#### 28. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L416` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L416) · [Before (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L416)

```diff
-           return je(ee, (He = ie.vertex, He.replace(`\nvec3 ${pe} = vec3(0);\n`, `\nout vec3 ${pe};\n`)), ie.fragment, pe, `program ${De(ie)}'s twin`);
+           return RW(WW, (OW = iW.vertex, OW.replace(`\nvec3 ${jW} = vec3(0);\n`, `\nout vec3 ${jW};\n`)), iW.fragment, jW, `program ${HW(iW)}'s twin`);
```

#### 29. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L434` → after: `L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L434) · [Before (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L434)

```diff
-       return ee.getProgramParameter(Ke, Te.LINK_STATUS) ? Ke : (ue(`decode probe: ${be} failed to link: ${le(null!==(Ue=ee.getProgramInfoLog(Ke))&&void 0!==Ue?Ue:"",300)}`), ee.deleteProgram(Ke), null)
+       return WW.getProgramParameter(PW, bW.LINK_STATUS) ? PW : (fW(`decode probe: ${EW} failed to link: ${XW(null!==(LW=WW.getProgramInfoLog(PW))&&void 0!==LW?LW:"",300)}`), WW.deleteProgram(PW), null)
```

#### 30. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L453` → after: `L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L453) · [Before (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L453)

```diff
-           const Ke = ye.size > 1 ? `${be}[${Me}]` : ye.name,
+           const PW = mW.size > 1 ? `${EW}[${NW}]` : mW.name,
```

#### 31. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L508` → after: `L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L508) · [Before (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L508)

```diff
-         Me !== Te.NO_ERROR && ue(`GL error 0x${Me.toString(16)} pending before the decode probe (the renderer's)`), ee.useProgram(ie), ee.bindTransformFeedback(Te.TRANSFORM_FEEDBACK, oe), ee.bindBuffer(Te.TRANSFORM_FEEDBACK_BUFFER, Re), ee.bufferData(Te.TRANSFORM_FEEDBACK_BUFFER, … [truncated]
+         NW !== bW.NO_ERROR && fW(`GL error 0x${NW.toString(16)} pending before the decode probe (the renderer's)`), WW.useProgram(iW), WW.bindTransformFeedback(bW.TRANSFORM_FEEDBACK, tW), WW.bindBuffer(bW.TRANSFORM_FEEDBACK_BUFFER, ZW), WW.bufferData(bW.TRANSFORM_FEEDBACK_BUFFER, … [truncated]
```

#### 32. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L510` → after: `L510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L510) · [Before (L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L510)

```diff
-         if (Ke !== Te.NO_ERROR) return ue(`${be}: GL error 0x${Ke.toString(16)} on the feedback draw`), null;
+         if (PW !== bW.NO_ERROR) return fW(`${EW}: GL error 0x${PW.toString(16)} on the feedback draw`), null;
```

#### 33. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L523` → after: `L523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L523) · [Before (L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L523)

```diff
-     const Ge = `#version 300 es\nlayout(location = ${Xe}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
+     const zW = `#version 300 es\nlayout(location = ${UW}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
```

#### 34. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L574` → after: `L574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L574) · [Before (L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L574)

```diff
-       const Me = `${ee} ${ie.bytes.length} B cpu ${qe(ie.bytes).toString(16)} gpu ${qe(He).toString(16)}, ${be}/${ye} blocks differ${ie.missed?`, ${ie.missed} GPU-side writes uncopied`:""}`;
+       const NW = `${WW} ${iW.bytes.length} B cpu ${lW(iW.bytes).toString(16)} gpu ${lW(OW).toString(16)}, ${EW}/${mW} blocks differ${iW.missed?`, ${iW.missed} GPU-side writes uncopied`:""}`;
```

#### 35. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L590` → after: `L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L590) · [Before (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L590)

```diff
-       return me([`${Me}: ${Ke} bytes differ`, ...Ue.map((ee => `  +${ee}: cpu ${fe(ie.bytes,ee)} | gpu ${fe(He,ee)}`))].join("\n")), `${Me}: ${Ke} bytes differ, first at ${Ue.join(", ")} (context in the saved file)`
+       return CW([`${NW}: ${PW} bytes differ`, ...LW.map((WW => `  +${WW}: cpu ${AW(iW.bytes,WW)} | gpu ${AW(OW,WW)}`))].join("\n")), `${NW}: ${PW} bytes differ, first at ${LW.join(", ")} (context in the saved file)`
```

#### 36. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L594` → after: `L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L594) · [Before (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L594)

```diff
-       if (0 === ee.vertices.length) return void ue(`decode probe (${ee.reason}): no terrain draw probed (${ee.draws.length} seen)`);
+       if (0 === WW.vertices.length) return void fW(`decode probe (${WW.reason}): no terrain draw probed (${WW.draws.length} seen)`);
```

#### 37. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L634` → after: `L634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L634) · [Before (L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L634)

```diff
-               He.byBand[Je] = (null !== (be = He.byBand[Je]) && void 0 !== be ? be : 0) + 1, He.first.length < ke && He.first.push({
+               OW.byBand[wW] = (null !== (EW = OW.byBand[wW]) && void 0 !== EW ? EW : 0) + 1, OW.first.length < xW && OW.first.push({
```

#### 38. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L642` → after: `L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L642) · [Before (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L642)

```diff
-         He = ie.byDirection.map(((ee, ie) => ee ? `${Ke[ie]} ${ee}` : "")).filter(Boolean).join(" "),
+         OW = iW.byDirection.map(((WW, iW) => WW ? `${PW[iW]} ${WW}` : "")).filter(Boolean).join(" "),
```

#### 39. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L645` → after: `L645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L645) · [Before (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L645)

```diff
-           return `${ie}: ${He}`
+           return `${iW}: ${OW}`
```

#### 40. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L647-L649` → after: `L647-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L647-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L647-L649) · [Before (L647-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L647-L649)

```diff
-       if (ue(`decode probe (${ee.reason}): ${ie.mismatches}/${ie.vertices} vertices differ from the CPU decode over ${ee.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (ie.mismatches ? ` by direction [${He}] diagonal [0: ${ie … [truncated]
-         ue(`decode probe input: ${ee.fed.differing}/${ee.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (ee.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (ee.fed.fa … [truncated]
-         for (const ie of ee.fed.first) ue(`  ${ie}`)
+       if (fW(`decode probe (${WW.reason}): ${iW.mismatches}/${iW.vertices} vertices differ from the CPU decode over ${WW.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (iW.mismatches ? ` by direction [${OW}] diagonal [0: ${iW … [truncated]
+         fW(`decode probe input: ${WW.fed.differing}/${WW.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (WW.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (WW.fed.fa … [truncated]
+         for (const iW of WW.fed.first) fW(`  ${iW}`)
```

#### 41. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L653` → after: `L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L653) · [Before (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L653)

```diff
-         ue(`  mismatch part ${be.group} r0 ${ee.toString(16)} r1 ${ie.toString(16)} r2 ${He.toString(16)} slot ${be.slot} (${Ke[Ue(He)]}): expected ${be.expected.map(Mi).join(",")} gpu ${be.gpu.map(Mi).join(",")}`)
+         fW(`  mismatch part ${EW.group} r0 ${WW.toString(16)} r1 ${iW.toString(16)} r2 ${OW.toString(16)} slot ${EW.slot} (${PW[LW(OW)]}): expected ${EW.expected.map(Ni).join(",")} gpu ${EW.gpu.map(Ni).join(",")}`)
```

#### 42. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L655` → after: `L655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L655) · [Before (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L655)

```diff
-       me(`decode probe translations: ${[...ie.translations].map((ee=>{let[ie,He]=ee;return`${ie}: ${He.map(Mi).join(",")}`})).join("; ")}`)
+       CW(`decode probe translations: ${[...iW.translations].map((WW=>{let[iW,OW]=WW;return`${iW}: ${OW.map(Ni).join(",")}`})).join("; ")}`)
```

#### 43. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L688` → after: `L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L688) · [Before (L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L688)

```diff
-                 ue(`draw ranges (${ee.reason}): ${ee.terrainDraws} terrain draws in the frame, the first ${ee.draws.length} here`);
+                 fW(`draw ranges (${WW.reason}): ${WW.terrainDraws} terrain draws in the frame, the first ${WW.draws.length} here`);
```

#### 44. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L690` → after: `L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L690) · [Before (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L690)

```diff
-                   const ee = ie.zp.slice(0, 8).map((ee => {
+                   const WW = iW.kj.slice(0, 8).map((WW => {
```

#### 45. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L692` → after: `L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L692) · [Before (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L692)

```diff
-                       return `${ie}+${He}`
+                       return `${iW}+${OW}`
```

#### 46. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L694-L695` → after: `L694-L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L694-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L694-L695) · [Before (L694-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L694-L695)

```diff
-                     He = ie.zp.length > 8 ? ` (+${ie.zp.length-8} ranges)` : "";
-                   ue(`  ${De(ie.program)} ${ie.program.terrain} ${ie.call} ${ee}${He} x${ie.instances}${ie.group>=0?` part ${ie.group} chunk ${ie.chunk}`:""} | ${ie.attributes.join(" | ")}`)
+                     OW = iW.kj.length > 8 ? ` (+${iW.kj.length-8} ranges)` : "";
+                   fW(`  ${HW(iW.program)} ${iW.program.terrain} ${iW.call} ${WW}${OW} x${iW.instances}${iW.group>=0?` part ${iW.group} chunk ${iW.chunk}`:""} | ${iW.attributes.join(" | ")}`)
```

#### 47. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L713` → after: `L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L713) · [Before (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L713)

```diff
-                     ie.push(`${be.kind}#${xe(ye)}: no CPU copy (${Ve.uncopied} pages over the copy budget)`);
+                     iW.push(`${EW.kind}#${gW(mW)}: no CPU copy (${dW.uncopied} pages over the copy budget)`);
```

#### 48. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L717` → after: `L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L717) · [Before (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L717)

```diff
-                     ie.push(Hi(`buf#${ee.id}`, ee, Ne(Me, be.buffer, 0, ee.bytes.length)));
+                     iW.push(Oi(`buf#${WW.id}`, WW, rW(NW, EW.buffer, 0, WW.bytes.length)));
```

#### 49. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L722` → after: `L722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L722) · [Before (L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L722)

```diff
-                   ie.push(Hi(`tex#${ee.id} (${16===ee.texelBytes?"records":"light"})`, ee, Ke))
+                   iW.push(Oi(`tex#${WW.id} (${16===WW.texelBytes?"records":"light"})`, WW, PW))
```

#### 50. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L724` → after: `L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L724) · [Before (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L724)

```diff
-                 for (const ye of ie) ue(`page readback ${ye}`)
+                 for (const mW of iW) fW(`page readback ${mW}`)
```

#### 51. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L727` → after: `L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L727) · [Before (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L727)

```diff
-               ue(`check failed: ${String(ee)}`)
+               fW(`check failed: ${String(WW)}`)
```

#### 52. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L740` → after: `L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L740) · [Before (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L740)

```diff
-     var Ui = He(5153);
+     var Li = OW(5427);
```

#### 53. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L750` → after: `L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L750) · [Before (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L750)

```diff
-         ee[ie] = be, (0, Ui.z)(be, ye)
+         WW[iW] = EW, (0, Li.v)(EW, mW)
```

#### 54. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L788` → after: `L788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L788) · [Before (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L788)

```diff
-         Me = He ? He * ye : ee.byteLength - ie * ye;
+         NW = OW ? OW * mW : WW.byteLength - iW * mW;
```

#### 55. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L846` → after: `L846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L846) · [Before (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L846)

```diff
-           Ke = null !== (ie = fi.get(Me)) && void 0 !== ie ? ie : [];
+           PW = null !== (iW = Ai.get(NW)) && void 0 !== iW ? iW : [];
```

#### 56. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L857` → after: `L857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L857) · [Before (L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L857)

```diff
-               Xi.lost < Fi && (Xi.lost++, ue(`${ie}${"statusMessage"in ee?`: ${String(ee.statusMessage)}`:""}`))
+               ji.lost < ci && (ji.lost++, fW(`${iW}${"statusMessage"in WW?`: ${String(WW.statusMessage)}`:""}`))
```

#### 57. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L861` → after: `L861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L861) · [Before (L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L861)

```diff
-           const Me = null !== (He = fi.get(ie)) && void 0 !== He ? He : [];
+           const NW = null !== (OW = Ai.get(iW)) && void 0 !== OW ? OW : [];
```

#### 58. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L866-L867` → after: `L866-L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L866-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L866-L867) · [Before (L866-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L866-L867)

```diff
-             const ee = null !== (Fe = qi.get(oe)) && void 0 !== Fe ? Fe : "";
-             /\bgl_Position\b/.test(ee) ? Ke = ee : Ue = ee
+             const WW = null !== (cW = li.get(tW)) && void 0 !== cW ? cW : "";
+             /\bgl_Position\b/.test(WW) ? PW = WW : LW = WW
```

#### 59. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L871` → after: `L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L871) · [Before (L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L871)

```diff
-             name: null !== (ye = null === (be = we.exec(Ke)) || void 0 === be ? void 0 : be[1]) && void 0 !== ye ? ye : null,
+             name: null !== (mW = null === (EW = hW.exec(PW)) || void 0 === EW ? void 0 : EW[1]) && void 0 !== mW ? mW : null,
```

#### 60. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L882` → after: `L882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L882) · [Before (L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L882)

```diff
-               return null !== (He = ee.getShaderInfoLog(ie)) && void 0 !== He ? He : ""
+               return null !== (OW = WW.getShaderInfoLog(iW)) && void 0 !== OW ? OW : ""
```

#### 61. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L884` → after: `L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L884) · [Before (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L884)

```diff
-             ie.length > 0 && me(`program ${De(Je)} (${Je.terrain}) shader logs:\n${le(ie.join("\n"))}`)
+             iW.length > 0 && CW(`program ${HW(wW)} (${wW.terrain}) shader logs:\n${XW(iW.join("\n"))}`)
```

#### 62. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L894` → after: `L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L894) · [Before (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L894)

```diff
-             const ie = "number" === typeof He[1] ? null : gi(He[1], null !== (Me = He[3]) && void 0 !== Me ? Me : 0, null !== (Ke = He[4]) && void 0 !== Ke ? Ke : 0);
+             const iW = "number" === typeof OW[1] ? null : Mi(OW[1], null !== (NW = OW[3]) && void 0 !== NW ? NW : 0, null !== (PW = OW[4]) && void 0 !== PW ? PW : 0);
```

#### 63. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L896` → after: `L896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L896) · [Before (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L896)

```diff
-             if (Wi(ee, "number" === typeof He[1] ? He[1] : null !== (Ue = null === ie || void 0 === ie ? void 0 : ie.length) && void 0 !== Ue ? Ue : 0), ie) null === (Fe = Ae.get(ee)) || void 0 === Fe || Fe.bytes.set(ie)
+             if (Yi(WW, "number" === typeof OW[1] ? OW[1] : null !== (LW = null === iW || void 0 === iW ? void 0 : iW.length) && void 0 !== LW ? LW : 0), iW) null === (cW = uW.get(WW)) || void 0 === cW || cW.bytes.set(iW)
```

#### 64. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L907` → after: `L907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L907) · [Before (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L907)

```diff
-             ye = gi(He[2], null !== (Me = He[3]) && void 0 !== Me ? Me : 0, null !== (Ke = He[4]) && void 0 !== Ke ? Ke : 0);
+             mW = Mi(OW[2], null !== (NW = OW[3]) && void 0 !== NW ? NW : 0, null !== (PW = OW[4]) && void 0 !== PW ? PW : 0);
```

#### 65. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L941` → after: `L941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L941) · [Before (L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L941)

```diff
-           let Je = gi(ie[8], null !== (He = ie[9]) && void 0 !== He ? He : 0);
+           let wW = Mi(iW[8], null !== (OW = iW[9]) && void 0 !== OW ? OW : 0);
```

#### 66. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L993` → after: `L993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L993) · [Before (L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L993)

```diff
-       Bi[ee] += ye, Ei < 32 && ie.bytes.length >= 1 << 20 && (Ei++, me(`upload ${ee} #${ie.id} +${He} ${ye} B`))
+       ki[WW] += mW, si < 32 && iW.bytes.length >= 1 << 20 && (si++, CW(`upload ${WW} #${iW.id} +${OW} ${mW} B`))
```

#### 67. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1006` → after: `L1006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1006) · [Before (L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1006)

```diff
-         Me = (null !== (ye = ee.getProgramInfoLog(ie)) && void 0 !== ye ? ye : "").trim();
+         NW = (null !== (mW = WW.getProgramInfoLog(iW)) && void 0 !== mW ? mW : "").trim();
```

#### 68. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1008` → after: `L1008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1008) · [Before (L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1008)

```diff
-       null === He.terrain && be || (ue(`program ${De(He)} ${null!==(Ke=He.terrain)&&void 0!==Ke?Ke:"other"} link ${be?"ok":"FAILED"}${Me?`: ${le(Me,300)}`:""}`), Me && me(`program ${De(He)} link log:\n${le(Me)}`))
+       null === OW.terrain && EW || (fW(`program ${HW(OW)} ${null!==(PW=OW.terrain)&&void 0!==PW?PW:"other"} link ${EW?"ok":"FAILED"}${NW?`: ${XW(NW,300)}`:""}`), NW && CW(`program ${HW(OW)} link log:\n${XW(NW)}`))
```

#### 69. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1016` → after: `L1016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1016) · [Before (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1016)

```diff
-       const Ke = null !== (ye = Me.terrain) && void 0 !== ye ? ye : "other",
+       const PW = null !== (mW = NW.terrain) && void 0 !== mW ? mW : "other",
```

#### 70. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1018` → after: `L1018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1018) · [Before (L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1018)

```diff
-           zp: Ue,
+           kj: LW,
```

#### 71. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1024` → after: `L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1024) · [Before (L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1024)

```diff
-                 zp: [
+                 kj: [
```

#### 72. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1031` → after: `L1031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1031) · [Before (L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1031)

```diff
-                 zp: [
+                 kj: [
```

#### 73. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1037` → after: `L1037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1037) · [Before (L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1037)

```diff
-                 zp: [
+                 kj: [
```

#### 74. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1044` → after: `L1044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1044) · [Before (L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1044)

```diff
-                 zp: [
+                 kj: [
```

#### 75. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1056` → after: `L1056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1056) · [Before (L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1056)

```diff
-                 zp: Me,
+                 kj: NW,
```

#### 76. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1062` → after: `L1062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1062) · [Before (L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1062)

```diff
-                 zp: [], instances: 0
+                 kj: [], instances: 0
```

#### 77. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1066` → after: `L1066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1066) · [Before (L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1066)

```diff
-         Je = "inst" === Me.terrain ? Fe : Ue.reduce(((ee, ie) => {
+         wW = "inst" === NW.terrain ? cW : LW.reduce(((WW, iW) => {
```

#### 78. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1086` → after: `L1086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1086) · [Before (L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1086)

```diff
-             be = ie.getFramebufferAttachmentParameter(Te.DRAW_FRAMEBUFFER, Te.DEPTH_ATTACHMENT, Te.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(ie.getFramebufferAttachmentParameter(Te.DRAW_FRAMEBUFFER,Te.DEPTH_ATTACHMENT,Te.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type  … [truncated]
+             EW = iW.getFramebufferAttachmentParameter(bW.DRAW_FRAMEBUFFER, bW.DEPTH_ATTACHMENT, bW.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(iW.getFramebufferAttachmentParameter(bW.DRAW_FRAMEBUFFER,bW.DEPTH_ATTACHMENT,bW.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type  … [truncated]
```

#### 79. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1089` → after: `L1089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1089) · [Before (L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1089)

```diff
-           return `depth ${null!==(ie=ye[He])&&void 0!==ie?ie:`0x${He.toString(16)}`} clear ${Me}${516===He||518===He?" (reverse-Z)":""}, samples ${String(ee.getParameter(Te.SAMPLES))}, ${be}`
+           return `depth ${null!==(iW=mW[OW])&&void 0!==iW?iW:`0x${OW.toString(16)}`} clear ${NW}${516===OW||518===OW?" (reverse-Z)":""}, samples ${String(WW.getParameter(bW.SAMPLES))}, ${EW}`
```

#### 80. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1092` → after: `L1092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1092) · [Before (L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1092)

```diff
-         He !== Te.NO_ERROR && Xi.gl < Fi && (Xi.gl++, ue(`GL error 0x${He.toString(16)} after program ${De(Me)}'s first terrain draw (${ie})`))
+         OW !== bW.NO_ERROR && ji.gl < ci && (ji.gl++, fW(`GL error 0x${OW.toString(16)} after program ${HW(NW)}'s first terrain draw (${iW})`))
```

#### 81. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1099-L1100` → after: `L1099-L1100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1099-L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1099-L1100) · [Before (L1099-L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1099-L1100)

```diff
-     var Vi = He(4896),
-       ai = He(5160);
+     var di = OW(5217),
+       ei = OW(5431);
```

#### 82. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1129-L1131` → after: `L1129-L1131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1129-L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1129-L1131) · [Before (L1129-L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1129-L1131)

```diff
-       const He = null !== ee && void 0 !== ee ? ee : {},
-         ye = null !== ie && void 0 !== ie ? ie : Object.keys(Object.getPrototypeOf(He)).concat(Object.keys(He));
-       return [...new Set(ye)].filter((ee => "number" === typeof He[ee])).map((ee => `${ee} ${String(He[ee])}`)).join(", ")
+       const OW = null !== WW && void 0 !== WW ? WW : {},
+         mW = null !== iW && void 0 !== iW ? iW : Object.keys(Object.getPrototypeOf(OW)).concat(Object.keys(OW));
+       return [...new Set(mW)].filter((WW => "number" === typeof OW[WW])).map((WW => `${WW} ${String(OW[WW])}`)).join(", ")
```

#### 83. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1136` → after: `L1136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1136) · [Before (L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1136)

```diff
-       const ye = null !== (He = ie.vertex) && void 0 !== He ? He : {};
+       const mW = null !== (OW = iW.vertex) && void 0 !== OW ? OW : {};
```

#### 84. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1139` → after: `L1139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1139) · [Before (L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1139)

```diff
-         const He = String(null !== (be = ye.entryPoint) && void 0 !== be ? be : "");
+         const OW = String(null !== (EW = mW.entryPoint) && void 0 !== EW ? EW : "");
```

#### 85. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1143-L1146` → after: `L1143-L1146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1143-L1146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1143-L1146) · [Before (L1143-L1146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1143-L1146)

```diff
-           const ee = null !== (Me = ie.depthStencil) && void 0 !== Me ? Me : {},
-             ye = null !== (Ke = ie.multisample) && void 0 !== Ke ? Ke : {},
-             be = String(null !== (Ue = ee.depthCompare) && void 0 !== Ue ? Ue : "");
-           ue(`WebGPU terrain pipeline ${He}: depth ${String(null!==(Fe=ee.format)&&void 0!==Fe?Fe:"none")} ${be}${be.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(Je=ye.count)&&void 0!==Je?Je:1)}`)
+           const WW = null !== (NW = iW.depthStencil) && void 0 !== NW ? NW : {},
+             mW = null !== (PW = iW.multisample) && void 0 !== PW ? PW : {},
+             EW = String(null !== (LW = WW.depthCompare) && void 0 !== LW ? LW : "");
+           fW(`WebGPU terrain pipeline ${OW}: depth ${String(null!==(cW=WW.format)&&void 0!==cW?cW:"none")} ${EW}${EW.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(wW=mW.count)&&void 0!==wW?wW:1)}`)
```

#### 86. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1166` → after: `L1166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1166) · [Before (L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1166)

```diff
-       (ni.draws++, "draw" === ee || "drawIndexed" === ee) && (ni.faces += He[0] * (null !== (ye = He[1]) && void 0 !== ye ? ye : 1) / 6);
+       (Ri.draws++, "draw" === WW || "drawIndexed" === WW) && (Ri.faces += OW[0] * (null !== (mW = OW[1]) && void 0 !== mW ? mW : 1) / 6);
```

#### 87. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1170` → after: `L1170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1170) · [Before (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1170)

```diff
-           return `${ie} ${String(null!==be&&void 0!==be?be:"instances"===ie?1:0)}`
+           return `${iW} ${String(null!==EW&&void 0!==EW?EW:"instances"===iW?1:0)}`
```

#### 88. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1172` → after: `L1172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1172) · [Before (L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1172)

```diff
-         Si.push(`  ${ie} ${ee} ${ye.join(" ")}`)
+         qi.push(`  ${iW} ${WW} ${mW.join(" ")}`)
```

#### 89. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1184-L1186` → after: `L1184-L1186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1184-L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1184-L1186) · [Before (L1184-L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1184-L1186)

```diff
-             const He = null !== (ie = ee.info) && void 0 !== ie ? ie : {};
-             ue(`WebGPU adapter ${["vendor","architecture","device","description"].map((ee=>{var ie;return`${ee} "${String(null!==(ie=He[ee])&&void 0!==ie?ie:"")}"`})).join(" ")}${ee.isFallbackAdapter?" (fallback)":""}`), ue(`WebGPU adapter features ${si(ee.features)}`), ue(`WebGP … [truncated]
-           }(ee) : ue(`WebGPU requestAdapter(${JSON.stringify(null!==(ie=He[0])&&void 0!==ie?ie:{})}) gave none`);
+             const OW = null !== (iW = WW.info) && void 0 !== iW ? iW : {};
+             fW(`WebGPU adapter ${["vendor","architecture","device","description"].map((WW=>{var iW;return`${WW} "${String(null!==(iW=OW[WW])&&void 0!==iW?iW:"")}"`})).join(" ")}${WW.isFallbackAdapter?" (fallback)":""}`), fW(`WebGPU adapter features ${Ii(WW.features)}`), fW(`WebGP … [truncated]
+           }(WW) : fW(`WebGPU requestAdapter(${JSON.stringify(null!==(iW=OW[0])&&void 0!==iW?iW:{})}) gave none`);
```

#### 90. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1192` → after: `L1192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1192) · [Before (L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1192)

```diff
-           ue(`WebGPU device features ${si(ee.features)}`), ue(`WebGPU device limits ${Ii(ee.limits,ci)}`), ee.addEventListener("uncapturederror", (ee => {
+           fW(`WebGPU device features ${Ii(WW.features)}`), fW(`WebGPU device limits ${ai(WW.limits,vi)}`), WW.addEventListener("uncapturederror", (WW => {
```

#### 91. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1197` → after: `L1197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1197) · [Before (L1197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1197)

```diff
-               ue(`WebGPU uncaptured ${null!==(ie=null===be||void 0===be||null===(He=be.constructor)||void 0===He?void 0:He.name)&&void 0!==ie?ie:"error"}: ${le(String(null!==(ye=null===be||void 0===be?void 0:be.message)&&void 0!==ye?ye:""),600)}`)
+               fW(`WebGPU uncaptured ${null!==(iW=null===EW||void 0===EW||null===(OW=EW.constructor)||void 0===OW?void 0:OW.name)&&void 0!==iW?iW:"error"}: ${XW(String(null!==(mW=null===EW||void 0===EW?void 0:EW.message)&&void 0!==mW?mW:""),600)}`)
```

#### 92. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1203` → after: `L1203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1203) · [Before (L1203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1203)

```diff
-             ue(`WebGPU device lost (${String(ee.reason)}): ${le(String(null!==(ie=ee.message)&&void 0!==ie?ie:""),600)}`)
+             fW(`WebGPU device lost (${String(WW.reason)}): ${XW(String(null!==(iW=WW.message)&&void 0!==iW?iW:""),600)}`)
```

#### 93. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1206` → after: `L1206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1206) · [Before (L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1206)

```diff
-           throw ue(`WebGPU requestDevice failed: ${String(ee)}`), ee
+           throw fW(`WebGPU requestDevice failed: ${String(WW)}`), WW
```

#### 94. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1222` → after: `L1222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1222) · [Before (L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1222)

```diff
-               ie[String(He.type)] = (null !== (ye = ie[String(He.type)]) && void 0 !== ye ? ye : 0) + 1
+               iW[String(OW.type)] = (null !== (mW = iW[String(OW.type)]) && void 0 !== mW ? mW : 0) + 1
```

#### 95. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1224-L1225` → after: `L1224-L1225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1224-L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1224-L1225) · [Before (L1224-L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1224-L1225)

```diff
-             const be = ee.messages.map((ee => `${String(ee.type)} ${String(ee.lineNum)}:${String(ee.linePos)} ${String(ee.message)}`)).join("\n");
-             ui.compile < Fi && (ui.compile++, ue(`WebGPU ${He?"terrain ":""}shader module compiled: ${JSON.stringify(ie)}${be?` first: ${le(be.split("\n")[0],300)}`:""}`)), be && me(`WebGPU shader module messages:\n${le(be)}`)
+             const EW = WW.messages.map((WW => `${String(WW.type)} ${String(WW.lineNum)}:${String(WW.linePos)} ${String(WW.message)}`)).join("\n");
+             Ci.compile < ci && (Ci.compile++, fW(`WebGPU ${OW?"terrain ":""}shader module compiled: ${JSON.stringify(iW)}${EW?` first: ${XW(EW.split("\n")[0],300)}`:""}`)), EW && CW(`WebGPU shader module messages:\n${XW(EW)}`)
```

#### 96. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1227` → after: `L1227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1227) · [Before (L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1227)

```diff
-         }(Ke, String(null !== (ie = (null !== (He = be[0]) && void 0 !== He ? He : {}).code) && void 0 !== ie ? ie : "")), Ke
+         }(PW, String(null !== (iW = (null !== (OW = EW[0]) && void 0 !== OW ? OW : {}).code) && void 0 !== iW ? iW : "")), PW
```

#### 97. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1231` → after: `L1231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1231) · [Before (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1231)

```diff
-         return Ni(Me, null !== (ie = ye[0]) && void 0 !== ie ? ie : {}), Me
+         return ri(NW, null !== (iW = mW[0]) && void 0 !== iW ? iW : {}), NW
```

#### 98. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1236` → after: `L1236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1236) · [Before (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1236)

```diff
-           return Ni(ee, null !== (ie = He[0]) && void 0 !== ie ? ie : {}), ee
+           return ri(WW, null !== (iW = OW[0]) && void 0 !== iW ? iW : {}), WW
```

#### 99. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1246-L1248` → after: `L1246-L1248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1246-L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1246-L1248) · [Before (L1246-L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1246-L1248)

```diff
-             } = null !== ie && void 0 !== ie ? ie : {}, Ue = String(null !== (He = (null !== (ye = ee.vertex) && void 0 !== ye ? ye : {}).entryPoint) && void 0 !== He ? He : "");
-             ue(`WebGPU pipeline "${String(null!==(be=ee.label)&&void 0!==be?be:"")}" ${Ue} rejected (${String(null!==Me&&void 0!==Me?Me:"no reason")}): ${le(String(null!==Ke&&void 0!==Ke?Ke:ie),600)}`)
-           }(null !== (ie = He[0]) && void 0 !== ie ? ie : {}, ee), ee
+             } = null !== iW && void 0 !== iW ? iW : {}, LW = String(null !== (OW = (null !== (mW = WW.vertex) && void 0 !== mW ? mW : {}).entryPoint) && void 0 !== OW ? OW : "");
+             fW(`WebGPU pipeline "${String(null!==(EW=WW.label)&&void 0!==EW?EW:"")}" ${LW} rejected (${String(null!==NW&&void 0!==NW?NW:"no reason")}): ${XW(String(null!==PW&&void 0!==PW?PW:iW),600)}`)
+           }(null !== (iW = OW[0]) && void 0 !== iW ? iW : {}, WW), WW
```

#### 100. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1252` → after: `L1252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1252) · [Before (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1252)

```diff
-         const Me = null !== (ie = ye[0]) && void 0 !== ie ? ie : {};
+         const NW = null !== (iW = mW[0]) && void 0 !== iW ? iW : {};
```

#### 101. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1254` → after: `L1254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1254) · [Before (L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1254)

```diff
-         mi++ < 3 && ue(`WebGPU canvas ${String(Me.format)} ${String(null!==(Ke=Me.colorSpace)&&void 0!==Ke?Ke:"srgb")} alpha ${String(null!==(Ue=Me.alphaMode)&&void 0!==Ue?Ue:"opaque")}`);
+         Xi++ < 3 && fW(`WebGPU canvas ${String(NW.format)} ${String(null!==(PW=NW.colorSpace)&&void 0!==PW?PW:"srgb")} alpha ${String(null!==(LW=NW.alphaMode)&&void 0!==LW?LW:"opaque")}`);
```

#### 102. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1281-L1283` → after: `L1281-L1283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1281-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1281-L1283) · [Before (L1281-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1281-L1283)

```diff
-         faceCull: "0" === (0, Me.n)("faceCull") ? "0" : "1",
-         adrenoProbe: null !== (ee = (0, Me.n)("adrenoProbe")) && void 0 !== ee ? ee : ""
-       }), ue("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), ki || "undefined" === typeof window || (ki = !0, "undefined" !== typeof WebGL2RenderingContext && ti(WebGL2RenderingContext.prototype, !0), "undefined" !== typeo … [truncated]
+         faceCull: "0" === (0, NW.p)("faceCull") ? "0" : "1",
+         adrenoProbe: null !== (WW = (0, NW.p)("adrenoProbe")) && void 0 !== WW ? WW : ""
+       }), fW("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), xi || "undefined" === typeof window || (xi = !0, "undefined" !== typeof WebGL2RenderingContext && yi(WebGL2RenderingContext.prototype, !0), "undefined" !== typeo … [truncated]
```

#### 103. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1290-L1292` → after: `L1290-L1292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1290-L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1290-L1292) · [Before (L1290-L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1290-L1292)

```diff
-       qH(), MH = null !== (ie = null === ee || void 0 === ee ? void 0 : ee.backend) && void 0 !== ie ? ie : null;
-       const ye = `, renderer param ${null!==(He=(0,Me.n)("renderer"))&&void 0!==He?He:"none"}, faceCull ${"0"===UH.faceCull?"off (whole parts)":"on"}, adrenoProbe ${UH.adrenoProbe||"none"}`;
-       ue(`${(0,ai.e)(ee)}${null===ee?"":ye}`)
+       lO(), NO = null !== (iW = null === WW || void 0 === WW ? void 0 : WW.backend) && void 0 !== iW ? iW : null;
+       const mW = `, renderer param ${null!==(OW=(0,NW.p)("renderer"))&&void 0!==OW?OW:"none"}, faceCull ${"0"===LO.faceCull?"off (whole parts)":"on"}, adrenoProbe ${LO.adrenoProbe||"none"}`;
+       fW(`${(0,ei.e)(WW)}${null===WW?"":mW}`)
```

#### 104. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1297-L1298` → after: `L1297-L1298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1297-L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1297-L1298) · [Before (L1297-L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1297-L1298)

```diff
-         ie = pH(kH, eH, iH).then((ie => BH(`${Math.round((performance.now()-ee)/1e3)} s after playable${ie?"":", no terrain drawn yet"}`)));
-       (0, be.e)(ue, (async () => {
+         iW = jO(xO, WO, iO).then((iW => sO(`${Math.round((performance.now()-WW)/1e3)} s after playable${iW?"":", no terrain drawn yet"}`)));
+       (0, EW.c)(fW, (async () => {
```

#### 105. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1303-L1304` → after: `L1303-L1304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1303-L1304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1303-L1304) · [Before (L1303-L1304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1303-L1304)

```diff
-       const be = (0, ye.e)(He).then((() => !1));
-       return await (0, ye.e)(ie), Promise.race([ee.then((() => !0)), be])
+       const EW = (0, mW.b)(OW).then((() => !1));
+       return await (0, mW.b)(iW), Promise.race([WW.then((() => !0)), EW])
```

#### 106. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1316` → after: `L1316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1316) · [Before (L1316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1316)

```diff
-       (FH = !0, ue(`renderer caps ${null!==(ee=UH.caps)&&void 0!==ee?ee:"(not noted)"}; terrain fetch ${null!==(ie=UH.fetch)&&void 0!==ie?ie:"(not noted)"}`), UH.adrenoProbe) && ue(`adrenoProbe ${UH.adrenoProbe} asked; in force (storage fetch only): ${null!==(He=UH.probe)&&void 0 … [truncated]
+       (cO = !0, fW(`renderer caps ${null!==(WW=LO.caps)&&void 0!==WW?WW:"(not noted)"}; terrain fetch ${null!==(iW=LO.fetch)&&void 0!==iW?iW:"(not noted)"}`), LO.adrenoProbe) && fW(`adrenoProbe ${LO.adrenoProbe} asked; in force (storage fetch only): ${null!==(OW=LO.probe)&&void 0 … [truncated]
```

#### 107. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1325` → after: `L1325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1325) · [Before (L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1325)

```diff
-             He.push(`GL ${String(ee.getParameter(ee.VERSION))} | ${String(ee.getParameter(ee.SHADING_LANGUAGE_VERSION))} | ${String(ee.getParameter(ee.VENDOR))} / ${String(ee.getParameter(ee.RENDERER))}`), He.push(`GL unmasked ${be} / ${Me}`);
+             OW.push(`GL ${String(WW.getParameter(WW.VERSION))} | ${String(WW.getParameter(WW.SHADING_LANGUAGE_VERSION))} | ${String(WW.getParameter(WW.VENDOR))} / ${String(WW.getParameter(WW.RENDERER))}`), OW.push(`GL unmasked ${EW} / ${NW}`);
```

#### 108. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1335` → after: `L1335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1335) · [Before (L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1335)

```diff
-             "MAX_UNIFORM_BLOCK_SIZE" in ee && Ke.push(["MAX_UNIFORM_BLOCK_SIZE", ee.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", ee.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", ee.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", ee.MAX_TRANSFORM_FEEDBACK_I … [truncated]
+             "MAX_UNIFORM_BLOCK_SIZE" in WW && PW.push(["MAX_UNIFORM_BLOCK_SIZE", WW.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", WW.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", WW.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", WW.MAX_TRANSFORM_FEEDBACK_I … [truncated]
```

#### 109. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1339` → after: `L1339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1339) · [Before (L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1339)

```diff
-               return `${He} highp float ${ye?`${ye.rangeMin}/${ye.rangeMax}/${ye.precision}`:"?"} int ${be?`${be.rangeMin}/${be.rangeMax}/${be.precision}`:"?"}`
+               return `${OW} highp float ${mW?`${mW.rangeMin}/${mW.rangeMax}/${mW.precision}`:"?"} int ${EW?`${EW.rangeMin}/${EW.rangeMax}/${EW.precision}`:"?"}`
```

#### 110. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1341` → after: `L1341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1341) · [Before (L1341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1341)

```diff
-             He.push(`GL precision ${Ue(ee.VERTEX_SHADER,"VS")}, ${Ue(ee.FRAGMENT_SHADER,"FS")}`);
+             OW.push(`GL precision ${LW(WW.VERTEX_SHADER,"VS")}, ${LW(WW.FRAGMENT_SHADER,"FS")}`);
```

#### 111. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1343` → after: `L1343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1343) · [Before (L1343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1343)

```diff
-             return He.push(`GL context ${JSON.stringify(Fe)} drawingBuffer ${ee.drawingBufferWidth}x${ee.drawingBufferHeight}${"drawingBufferFormat"in ee?` format 0x${Number(ee.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in ee?` ${String(ee.drawingBufferColo … [truncated]
+             return OW.push(`GL context ${JSON.stringify(cW)} drawingBuffer ${WW.drawingBufferWidth}x${WW.drawingBufferHeight}${"drawingBufferFormat"in WW?` format 0x${Number(WW.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in WW?` ${String(WW.drawingBufferColo … [truncated]
```

#### 112. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1350` → after: `L1350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1350) · [Before (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1350)

```diff
-           ue(`programs: ${ie} live of ${Pe.length} linked, ${ee} packed terrain; CPU page copies ${Math.round(Ve.shadowBytes/1048576)} MiB (${Ve.uncopied} over budget)`)
+           fW(`programs: ${iW} live of ${nW.length} linked, ${WW} packed terrain; CPU page copies ${Math.round(dW.shadowBytes/1048576)} MiB (${dW.uncopied} over budget)`)
```

#### 113. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1363` → after: `L1363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1363) · [Before (L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1363)

```diff
-                 Si = null, ue(`WebGPU draw ranges (${ee}): ${ie.length} terrain draws recorded in a second (first ${Ji}; bundles replay without new ones)`);
+                 qi = null, fW(`WebGPU draw ranges (${WW}): ${iW.length} terrain draws recorded in a second (first ${wi}; bundles replay without new ones)`);
```

#### 114. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1369` → after: `L1369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1369) · [Before (L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1369)

```diff
-             if (await (0, Vi.f)(UH, "slotCheck", ["1"], yH, bH), "1" === UH.slotCheck) return void ue(`slot check: no answer in ${yH} ms (only the storage fetch has one; a later answer logs on its own)`);
+             if (await (0, di.e)(LO, "slotCheck", ["1"], mO, EO), "1" === LO.slotCheck) return void fW(`slot check: no answer in ${mO} ms (only the storage fetch has one; a later answer logs on its own)`);
```

#### 115. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1372` → after: `L1372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1372) · [Before (L1372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1372)

```diff
-         ue(`check (${ee}) done: bloxdDebug.save() downloads it all`)
+         fW(`check (${WW}) done: bloxdDebug.save() downloads it all`)
```

#### 116. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1374` → after: `L1374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1374) · [Before (L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1374)

```diff
-         ue(`check (${ee}) failed: ${String(ie)}`)
+         fW(`check (${WW}) failed: ${String(iW)}`)
```

#### 117. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1418-L1419` → after: `L1418-L1419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1418-L1419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1418-L1419) · [Before (L1418-L1419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1418-L1419)

```diff
-       const be = "webgpu" === MH ? [`terrain ${ee(ie.draws)} draws ${ee(ie.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((ee => He[ee].draws > 0)).map((ie => `${ie} ${ee(He[ie].draws)} draws ${ee(He[ie].faces)} faces a frame`));
-       ue(`${oH} frames: ${be.join(", ")||"no draws"}; uploaded ${Math.round(ye.buffer/1024)} KiB to buffers, ${Math.round(ye.texture/1024)} KiB to data textures`), oH = 0
+       const EW = "webgpu" === NO ? [`terrain ${WW(iW.draws)} draws ${WW(iW.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((WW => OW[WW].draws > 0)).map((iW => `${iW} ${WW(OW[iW].draws)} draws ${WW(OW[iW].faces)} faces a frame`));
+       fW(`${tO} frames: ${EW.join(", ")||"no draws"}; uploaded ${Math.round(mW.buffer/1024)} KiB to buffers, ${Math.round(mW.texture/1024)} KiB to data textures`), tO = 0
```

#### 118. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1422` → after: `L1422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1422) · [Before (L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1422)

```diff
-   5160: (ee, ie, He) => {
+   5431: (WW, iW, OW) => {
```

#### 119. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1425-L1426` → after: `L1425-L1426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1425-L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderDebug.js#L1425-L1426) · [Before (L1425-L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderDebug.js#L1425-L1426)

```diff
-       const ie = ee.adapter ? `${ee.adapter.vendor}/${ee.adapter.architecture}` : "none";
-       return `backend ${ee.backend}: reason ${ee.reason}, source ${ee.source}, adapter ${ie}`
+       const iW = WW.adapter ? `${WW.adapter.vendor}/${WW.adapter.architecture}` : "none";
+       return `backend ${WW.backend}: reason ${WW.reason}, source ${WW.source}, adapter ${iW}`
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/renderLite.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/renderLite.js` (44 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070)

#### 1. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L1-L2)

```diff
- export const id = 57;
- export const ids = [57];
+ export const id = 58;
+ export const ids = [58];
```

#### 2. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L4)

```diff
-   54272: (ee, ie, He) => {
+   54811: (WW, iW, OW) => {
```

#### 3. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L8-L19` → after: `L8-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L8-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L8-L19) · [Before (L8-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L8-L19)

```diff
-     var ye = He(3094),
-       be = He(645),
-       Me = He(123),
-       Ke = He(5279),
-       Ue = He(42116),
-       Fe = He(5271),
-       Je = He(41827),
-       oe = He(41704),
-       Re = He(41878),
-       ke = He(3037),
-       qe = He(4896),
-       fe = He(34736);
+     var mW = OW(2381),
+       EW = OW(671),
+       NW = OW(131),
+       PW = OW(5551),
+       LW = OW(42528),
+       cW = OW(5546),
+       wW = OW(42216),
+       tW = OW(42109),
+       ZW = OW(42272),
+       xW = OW(3866),
+       lW = OW(5217),
+       AW = OW(35100);
```

#### 4. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L30)

```diff
-         return void 0 === ee || ee === this.noted || ie - this.atMs < He ? null : (this.noted = ee, this.lines++, this.atMs = ie, `${this.label}: ${ee}`)
+         return void 0 === WW || WW === this.noted || iW - this.atMs < OW ? null : (this.noted = WW, this.lines++, this.atMs = iW, `${this.label}: ${WW}`)
```

#### 5. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L41-L42` → after: `L41-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L41-L42) · [Before (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L41-L42)

```diff
-             const [He, ye] = ee.split(":"), be = null !== (ie = Te.get(He.slice(-1))) && void 0 !== ie ? ie : "";
-             return `gl link failed: program row ${parseInt(He)}${be}, read ${ye} ms after issue`
+             const [OW, mW] = WW.split(":"), EW = null !== (iW = bW.get(OW.slice(-1))) && void 0 !== iW ? iW : "";
+             return `gl link failed: program row ${parseInt(OW)}${EW}, read ${mW} ms after issue`
```

#### 6. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L47)

```diff
-         return this.heldLogged || void 0 === ee ? null : (this.heldLogged = !0, `first view by the backstop, draws held for programs ${ee}`)
+         return this.heldLogged || void 0 === WW ? null : (this.heldLogged = !0, `first view by the backstop, draws held for programs ${WW}`)
```

#### 7. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L51-L54` → after: `L51-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L51-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L51-L54) · [Before (L51-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L51-L54)

```diff
-         return [be && `${be}; tab ${(0,fe.e)(ye)}`, this.programUse.line(ie, He)].filter((ee => null !== ee))
-       }
-     }
-     var ze = He(5160);
+         return [EW && `${EW}; tab ${(0,AW.e)(mW)}`, this.programUse.line(iW, OW)].filter((WW => null !== WW))
+       }
+     }
+     var kW = OW(5431);
```

#### 8. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L93` → after: `L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L93) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L93)

```diff
-         return this.logged >= 20 || this.seen.has(ee) ? (this.unlogged++, null) : (this.seen.add(ee), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${ee}` : ee)
+         return this.logged >= 20 || this.seen.has(WW) ? (this.unlogged++, null) : (this.seen.add(WW), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${WW}` : WW)
```

#### 9. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L106` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L106) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L106)

```diff
-         this.frames = new Be, this.events = new ge, this.programLines = new Xe, this.compileSummary = new pe("webgpu compiles"), this.hidden = new fe.c, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performan … [truncated]
+         this.frames = new sW, this.events = new KW, this.programLines = new UW, this.compileSummary = new jW("webgpu compiles"), this.hidden = new AW.d, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performan … [truncated]
```

#### 10. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L109` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L109) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L109)

```diff
-         }, this.YR = () => {
+         }, this.hZ = () => {
```

#### 11. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L112` → after: `L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L112) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L112)

```diff
-             be = (0, oe.h)(),
+             EW = (0, tW.f)(),
```

#### 12. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L114` → after: `L114-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L114-L115) · [Before (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L114)

```diff
-           if (this.logLinks(Me), this.logGrid(), null === He || He.isStopped || !0 !== (null === be || void 0 === be ? void 0 : be.isCoreRunning)) return void this.restartWindow(Me);
+           var cW;
+           if (this.logLinks(NW), this.logGrid(), null === OW || OW.isStopped || !0 !== (null === EW || void 0 === EW ? void 0 : EW.isCoreRunning)) return null === (cW = window.bloxdRenderDebug) || void 0 === cW || delete cW.meshMaterials, void this.restartWindow(NW);
```

#### 13. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L121-L122` → after: `L122-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L122-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L122-L123) · [Before (L121-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L121-L122)

```diff
-           const Fe = He.headerWord(Ke.F.GpuTimed),
-             Re = He.headerWord(Ke.F.GpuFrameUs),
+           const ZW = OW.headerWord(PW.M.GpuTimed),
+             xW = OW.headerWord(PW.M.GpuFrameUs),
```

#### 14. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L128` → after: `L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L129) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L128)

```diff
-           const qe = null !== (ee = null === (ie = (0, Je.Q)((0, ye.F)())) || void 0 === ie ? void 0 : ie.hbe()) && void 0 !== ee ? ee : 0;
+           const AW = null !== (WW = null === (iW = (0, wW.M)((0, mW.G)())) || void 0 === iW ? void 0 : iW.HmW()) && void 0 !== WW ? WW : 0;
```

#### 15. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L131-L132` → after: `L132-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L132-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L132-L133) · [Before (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L131-L132)

```diff
-               ye = [`${Math.round(He)}s: ${ee.drawn} drawn (${(ee.drawn/He).toFixed(1)}/s), ${ee.paced} paced, ${ee.frames-ee.drawn-ee.paced} skipped`, `gap max ${Math.round(ee.gapMaxMs)} ms, ${ee.longGaps} over 50 ms`, `render cpu ${ee.drawn?(ee.renderUs/ee.drawn/1e3).toFixed(2) … [truncated]
-             null !== ie.gpu && ye.push(`gpu ${ie.gpu.timed?(ie.gpu.us/ie.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${ie.gpu.timed} timed`);
+               mW = [`${Math.round(OW)}s: ${WW.drawn} drawn (${(WW.drawn/OW).toFixed(1)}/s), ${WW.paced} paced, ${WW.frames-WW.drawn-WW.paced} skipped`, `gap max ${Math.round(WW.gapMaxMs)} ms, ${WW.longGaps} over 50 ms`, `render cpu ${WW.drawn?(WW.renderUs/WW.drawn/1e3).toFixed(2) … [truncated]
+             null !== iW.gpu && mW.push(`gpu ${iW.gpu.timed?(iW.gpu.us/iW.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${iW.gpu.timed} timed`);
```

#### 16. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L134-L136` → after: `L135-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L135-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L135-L137) · [Before (L134-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L134-L136)

```diff
-             ye.push(null === be ? "draws none yet" : `draws ${(0,Ue.c)(be)} (terrain ${be.terrainOpaque}+${be.terrainTransparent}, pack ${be.terrainPack}, meshes ${be.regular+be.thin+be.line+be.text}, sky ${be.earthSky+be.skyMeshes}, particles ${be.particles})`), null !== be && b … [truncated]
-             const Me = null === ie.gpuBytesBefore ? "" : ` (${ie.gpuBytes>=ie.gpuBytesBefore?"+":"-"}${Ee(Math.abs(ie.gpuBytes-ie.gpuBytesBefore))})`;
-             return ye.push(`gpu mem ${Ee(ie.gpuBytes)} MiB${Me}`), ye.push(`pending ${ie.pending}`, "terrain " + (ie.terrainDrawn ? "drawn" : "not drawn yet")), ie.eventsUnlogged > 0 && ye.push(`${ie.eventsUnlogged} events unlogged`), ye.join("; ")
+             mW.push(null === EW ? "draws none yet" : `draws ${(0,LW.b)(EW)} (terrain ${EW.terrainOpaque}+${EW.terrainTransparent}, pack ${EW.terrainPack}, meshes ${EW.regular+EW.thin+EW.line+EW.text} (${EW.text} text, ${EW.thin} thin, ${EW.line} line), sky ${EW.earthSky+EW.skyMes … [truncated]
+             const NW = null === iW.gpuBytesBefore ? "" : ` (${iW.gpuBytes>=iW.gpuBytesBefore?"+":"-"}${MW(Math.abs(iW.gpuBytes-iW.gpuBytesBefore))})`;
+             return mW.push(`gpu mem ${MW(iW.gpuBytes)} MiB${NW}`), mW.push(`pending ${iW.pending}`, "terrain " + (iW.terrainDrawn ? "drawn" : "not drawn yet")), iW.eventsUnlogged > 0 && mW.push(`${iW.eventsUnlogged} events unlogged`), mW.join("; ")
```

#### 17. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L140` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L141) · [Before (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L140)

```diff
-             census: (0, Ue.d)(be.api),
+             census: (0, LW.c)(EW.api),
```

#### 18. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L143-L144` → after: `L144-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L144-L145) · [Before (L143-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L143-L144)

```diff
-             pending: He.headerWord(Ke.F.RenderPending),
-             terrainDrawn: 0 !== (He.headerWord(Ke.F.LoadSteps) & Ke.U.TerrainDrawn),
+             pending: OW.headerWord(PW.M.RenderPending),
+             terrainDrawn: 0 !== (OW.headerWord(PW.M.LoadSteps) & PW.Y.TerrainDrawn),
```

#### 19. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L146-L147` → after: `L147-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L147-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L147-L150) · [Before (L146-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L146-L147)

```diff
-           })), this.gpuBytes = qe, this.windowStart = Me
-         }, Oe(`${(0,ze.e)(ee)}; client ${be.y.client} (${be.y.reason})`), setInterval(this.YR, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
+           }));
+           const bW = window.bloxdRenderDebug;
+           void 0 !== (null === bW || void 0 === bW ? void 0 : bW.meshMaterials) && (SW(`mesh materials ${bW.meshMaterials}`), delete bW.meshMaterials), this.gpuBytes = AW, this.windowStart = NW
+         }, SW(`${(0,kW.e)(WW)}; client ${EW.B.client} (${EW.B.reason})`), setInterval(this.hZ, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
```

#### 20. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L150` → after: `L153-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L153-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L153-L155) · [Before (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L150)

```diff
-         this.session = ee, this.frames.frame(ie, He, "drawn" === He ? ee.headerWord(Ke.F.RenderUs) : 0)
+         var mW;
+         this.session !== WW && (null === (mW = window.bloxdRenderDebug) || void 0 === mW || delete mW.meshMaterials);
+         this.session = WW, this.frames.frame(iW, OW, "drawn" === OW ? WW.headerWord(PW.M.RenderUs) : 0)
```

#### 21. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L159` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L164) · [Before (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L159)

```diff
-           if (ye >= Ke.o.RenderDeviceLost && ye <= Ke.o.RenderSerialLinks) this.event(`render error ${(0,Fe.Xd)(ye)}${null!==(ie=null===(He=(0,Re.d)(ye,be))||void 0===He?void 0:He.words)&&void 0!==ie?ie:""} (detail ${be})`)
+           if (mW >= PW.o.RenderDeviceLost && mW <= PW.o.RenderSerialLinks) this.event(`render error ${(0,cW.de)(mW)}${null!==(iW=null===(OW=(0,ZW.b)(mW,EW))||void 0===OW?void 0:OW.words)&&void 0!==iW?iW:""} (detail ${EW})`)
```

#### 22. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L163` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L168) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L163)

```diff
-         this.event(`render reload: ${ee?"webgpu":"gl"} ${He}, losses ${ie}${void 0===ye?"":`: ${ye}`}`)
+         this.event(`render reload: ${WW?"webgpu":"gl"} ${OW}, losses ${iW}${void 0===mW?"":`: ${mW}`}`)
```

#### 23. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L167-L168` → after: `L172-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L172-L173) · [Before (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L167-L168)

```diff
-           be = 3 === (null === ye || void 0 === ye ? void 0 : ye.length) ? `vertex arrays ${ye[0]}, keyed draws peak ${ye[1]} (sweep floor ${ye[2]})` : "vertex arrays unnoted";
-         this.event(`gl context lost ${ee?"in game":"at home"}: ${be}, render distance ${null!==He&&void 0!==He?He:"none"}`)
+           EW = 3 === (null === mW || void 0 === mW ? void 0 : mW.length) ? `vertex arrays ${mW[0]}, keyed draws peak ${mW[1]} (sweep floor ${mW[2]})` : "vertex arrays unnoted";
+         this.event(`gl context lost ${WW?"in game":"at home"}: ${EW}, render distance ${null!==OW&&void 0!==OW?OW:"none"}`)
```

#### 24. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L176-L178` → after: `L181-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L181-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L181-L183) · [Before (L176-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L176-L178)

```diff
-         const be = null !== ye && 0 !== ye.lastError ? `, last error ${(0,Fe.Xd)(ye.lastError)} (detail ${ye.lastErrorDetail})` : "",
-           Me = He instanceof Error ? `${He.name}: ${He.message}` : null === He || void 0 === He ? "" : String(He);
-         this.event(`core stopped at ${ie}${be}${Me&&`: ${Me}`}`)
+         const EW = null !== mW && 0 !== mW.lastError ? `, last error ${(0,cW.de)(mW.lastError)} (detail ${mW.lastErrorDetail})` : "",
+           NW = OW instanceof Error ? `${OW.name}: ${OW.message}` : null === OW || void 0 === OW ? "" : String(OW);
+         this.event(`core stopped at ${iW}${EW}${NW&&`: ${NW}`}`)
```

#### 25. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L187` → after: `L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L192) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L187)

```diff
-         null === ie || ie.isStopped ? this.sampled = null : (this.sampled = ie, this.gpuTimed = ie.headerWord(Ke.F.GpuTimed), this.gpuUs = ie.headerWord(Ke.F.GpuFrameUs))
+         null === iW || iW.isStopped ? this.sampled = null : (this.sampled = iW, this.gpuTimed = iW.headerWord(PW.M.GpuTimed), this.gpuUs = iW.headerWord(PW.M.GpuFrameUs))
```

#### 26. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L196` → after: `L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L201) · [Before (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L196)

```diff
-         null !== ye && Oe(ye)
+         null !== mW && SW(mW), void 0 !== (null === iW || void 0 === iW ? void 0 : iW.prejoin) && iW.prejoin !== this.prejoinLogged && (this.prejoinLogged = iW.prejoin, SW(`prejoin ${iW.prejoin}`))
```

#### 27. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L201` → after: `L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L206) · [Before (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L201)

```diff
-         this.gridLogged || void 0 === ie || (this.gridLogged = !0, Oe(`gl1 grid ${ie}`))
+         this.gridLogged || void 0 === iW || (this.gridLogged = !0, SW(`gl1 grid ${iW}`))
```

#### 28. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L208-L210` → after: `L213-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L213-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L213-L215) · [Before (L208-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L208-L210)

```diff
-           ye = (0, Me.D)(),
-           be = void 0 === (null === He || void 0 === He ? void 0 : He.parallelCompile) ? "" : `; parallel compile ${He.parallelCompile}`;
-         Oe(`renderer gl ${ye?`${ye.vendor} / ${ye.renderer}`:"(not read)"}; terrain fetch ${null!==(ee=null===He||void 0===He?void 0:He.fetch)&&void 0!==ee?ee:"(not noted)"}${be}`), Oe(`renderer caps ${null!==(ie=null===He||void 0===He?void 0:He.caps)&&void 0!==ie?ie:"(not noted) … [truncated]
+           mW = (0, NW.t)(),
+           EW = void 0 === (null === OW || void 0 === OW ? void 0 : OW.parallelCompile) ? "" : `; parallel compile ${OW.parallelCompile}`;
+         SW(`renderer gl ${mW?`${mW.vendor} / ${mW.renderer}`:"(not read)"}; terrain fetch ${null!==(WW=null===OW||void 0===OW?void 0:OW.fetch)&&void 0!==WW?WW:"(not noted)"}${EW}`), SW(`renderer caps ${null!==(iW=null===OW||void 0===OW?void 0:OW.caps)&&void 0!==iW?iW:"(not noted) … [truncated]
```

#### 29. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L216` → after: `L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L221) · [Before (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L216)

```diff
-       return (0, qe.e)(), We ??= new de(ee), We
+       return (0, lW.d)(), yW ??= new YW(WW), yW
```

#### 30. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L219` → after: `L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L224) · [Before (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L219)

```diff
-   5160: (ee, ie, He) => {
+   5431: (WW, iW, OW) => {
```

#### 31. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L222-L223` → after: `L227-L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L227-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L227-L228) · [Before (L222-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L222-L223)

```diff
-       const ie = ee.adapter ? `${ee.adapter.vendor}/${ee.adapter.architecture}` : "none";
-       return `backend ${ee.backend}: reason ${ee.reason}, source ${ee.source}, adapter ${ie}`
+       const iW = WW.adapter ? `${WW.adapter.vendor}/${WW.adapter.architecture}` : "none";
+       return `backend ${WW.backend}: reason ${WW.reason}, source ${WW.source}, adapter ${iW}`
```

#### 32. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L229-L231` → after: `L234-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L234-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L234-L236) · [Before (L229-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L229-L231)

```diff
-   34736: (ee, ie, He) => {
-     function ye(ee) {
-       return `hidden ${ee.changes} changes, ${Math.round(ee.hiddenMs)} ms`
+   35100: (WW, iW, OW) => {
+     function mW(WW) {
+       return `hidden ${WW.changes} changes, ${Math.round(WW.hiddenMs)} ms`
```

#### 33. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L234` → after: `L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L239) · [Before (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L234)

```diff
-       c: () => be,
+       d: () => EW,
```

#### 34. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L242` → after: `L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L247) · [Before (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L242)

```diff
-         this.changes++, document.hidden ? this.hiddenSinceMs = ee : this.hiddenSinceMs >= 0 && (this.hiddenMs += ee - this.hiddenSinceMs, this.hiddenSinceMs = -1)
+         this.changes++, document.hidden ? this.hiddenSinceMs = WW : this.hiddenSinceMs >= 0 && (this.hiddenMs += WW - this.hiddenSinceMs, this.hiddenSinceMs = -1)
```

#### 35. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L252` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L257) · [Before (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L252)

```diff
-   42116: (ee, ie, He) => {
+   42528: (WW, iW, OW) => {
```

#### 36. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L255-L256` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L261) · [Before (L255-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L255-L256)

```diff
-       d: () => Me,
-       g: () => Ue
+       f: () => LW
```

#### 37. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L258-L263` → after: `L263-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L263-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L263-L268) · [Before (L258-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L258-L263)

```diff
-     var ye = He(41694),
-       be = He(41704);
- 
-     function Me(ee) {
-       if (ee.queries.drawCensus() < ye.vb.BYTES) return null;
-       const ie = ee.memoryData(ee.scratch(), ye.vb.BYTES, 4, "the draw census");
+     var mW = OW(42094),
+       EW = OW(42109);
+ 
+     function NW(WW) {
+       if (WW.queries.drawCensus() < mW.Ib.BYTES) return null;
+       const iW = WW.memoryData(WW.scratch(), mW.Ib.BYTES, 4, "the draw census");
```

#### 38. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L265-L278` → after: `L270-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L270-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L270-L283) · [Before (L265-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L265-L278)

```diff
-         terrainOpaque: ye.vb.terrainOpaque(ie, 0),
-         terrainTransparent: ye.vb.terrainTransparent(ie, 0),
-         terrainPack: ye.vb.terrainPack(ie, 0),
-         earthSky: ye.vb.earthSky(ie, 0),
-         skyMeshes: ye.vb.skyMeshes(ie, 0),
-         regular: ye.vb.regular(ie, 0),
-         thin: ye.vb.thin(ie, 0),
-         line: ye.vb.line(ie, 0),
-         text: ye.vb.text(ie, 0),
-         particles: ye.vb.particles(ie, 0),
-         terrainParts: ye.vb.terrainParts(ie, 0),
-         terrainCompiling: ye.vb.terrainCompiling(ie, 0),
-         ringCopiesMax: ye.vb.ringCopiesMax(ie, 0),
-         ringBusyWrites: ye.vb.ringBusyWrites(ie, 0)
+         terrainOpaque: mW.Ib.terrainOpaque(iW, 0),
+         terrainTransparent: mW.Ib.terrainTransparent(iW, 0),
+         terrainPack: mW.Ib.terrainPack(iW, 0),
+         earthSky: mW.Ib.earthSky(iW, 0),
+         skyMeshes: mW.Ib.skyMeshes(iW, 0),
+         regular: mW.Ib.regular(iW, 0),
+         thin: mW.Ib.thin(iW, 0),
+         line: mW.Ib.line(iW, 0),
+         text: mW.Ib.text(iW, 0),
+         particles: mW.Ib.particles(iW, 0),
+         terrainParts: mW.Ib.terrainParts(iW, 0),
+         terrainCompiling: mW.Ib.terrainCompiling(iW, 0),
+         ringCopiesMax: mW.Ib.ringCopiesMax(iW, 0),
+         ringBusyWrites: mW.Ib.ringBusyWrites(iW, 0)
```

#### 39. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L298` → after: `L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L303) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L298)

```diff
-       const ee = (0, be.h)();
+       const WW = (0, EW.f)();
```

#### 40. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L316` → after: `L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L321) · [Before (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L316)

```diff
-           value: `${Ke(ie)}`
+           value: `${PW(iW)}`
```

#### 41. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L319` → after: `L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L324) · [Before (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L319)

```diff
-           value: `${He} opaque / ${ye} transparent (${be} shader pack)`
+           value: `${OW} opaque / ${mW} transparent (${EW} shader pack)`
```

#### 42. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L322` → after: `L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L327) · [Before (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L322)

```diff
-           value: `${Je} / ${oe}`
+           value: `${wW} / ${tW}`
```

#### 43. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L325` → after: `L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L330) · [Before (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L325)

```diff
-           value: `${ke} / ${Re}`
+           value: `${xW} / ${ZW}`
```

#### 44. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L328` → after: `L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderLite.js#L333) · [Before (L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderLite.js#L328)

```diff
-           value: `${Ue+Fe} / ${qe}`
+           value: `${LW+cW} / ${lW}`
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/renderProbe.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/renderProbe.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff)

#### 1. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderProbe.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderProbe.js#L1-L2)

```diff
- export const id = 58;
- export const ids = [58];
+ export const id = 59;
+ export const ids = [59];
```

#### 2. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderProbe.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderProbe.js#L4)

```diff
-   54277: (ee, ie, He) => {
+   54813: (WW, iW, OW) => {
```

#### 3. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderProbe.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderProbe.js#L8-L11)

```diff
-     var ye = He(618),
-       be = He(4756),
-       Me = He(3037),
-       Ke = He(4896);
+     var mW = OW(649),
+       EW = OW(5058),
+       NW = OW(3866),
+       PW = OW(5217);
```

#### 4. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderProbe.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderProbe.js#L24)

```diff
-       return `${ee}; ${He?`os ${He.os}, gpu ${null!==(be=He.gpuFamily)&&void 0!==be?be:"unknown"} ${null!==(Me=He.gpuModel)&&void 0!==Me?Me:"unknown"}`:"device unknown"}, version ${ye.b}; ${ie}`
+       return `${WW}; ${OW?`os ${OW.os}, gpu ${null!==(EW=OW.gpuFamily)&&void 0!==EW?EW:"unknown"} ${null!==(NW=OW.gpuModel)&&void 0!==NW?NW:"unknown"}`:"device unknown"}, version ${mW.d}; ${iW}`
```

#### 5. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L29` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderProbe.js#L29) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderProbe.js#L29)

```diff
-       const He = null !== (ie = null === ee || void 0 === ee ? void 0 : ee.backend) && void 0 !== ie ? ie : "none";
+       const OW = null !== (iW = null === WW || void 0 === WW ? void 0 : WW.backend) && void 0 !== iW ? iW : "none";
```

#### 6. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L31` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderProbe.js#L31) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderProbe.js#L31)

```diff
-         const ee = (0, Ke.e)();
+         const WW = (0, PW.d)();
```

#### 7. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L36` → after: `L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderProbe.js#L36) · [Before (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderProbe.js#L36)

```diff
-         return void(0, Me.m)("renderprobe", `decode and particle probes not run: the renderer is ${He}, and they read WebGL2's draws`)
+         return void(0, NW.m)("renderprobe", `decode and particle probes not run: the renderer is ${OW}, and they read WebGL2's draws`)
```

#### 8. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L38` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderProbe.js#L38) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderProbe.js#L38)

```diff
-       const ye = (0, Ke.e)();
+       const mW = (0, PW.d)();
```

#### 9. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L43-L44` → after: `L43-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/renderProbe.js#L43-L44) · [Before (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/renderProbe.js#L43-L44)

```diff
-         of Je)(0, Ke.f)(ye, Re, ["1", "pending"], Fe, Ue).then((ee => {
-         void 0 !== ee && (0, Me.m)("renderprobe", oe(ke, ee, (0, be.b)(!1)))
+         of wW)(0, PW.e)(mW, ZW, ["1", "pending"], cW, LW).then((WW => {
+         void 0 !== WW && (0, NW.m)("renderprobe", tW(xW, WW, (0, EW.d)(!1)))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9)

#### 1. `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L1-L2)

```diff
- export const id = 59;
- export const ids = [59];
+ export const id = 60;
+ export const ids = [60];
```

#### 2. `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L4)

```diff
-   39446: (ee, ie, He) => {
+   39894: (WW, iW, OW) => {
```

#### 3. `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (Changed code · before: `L9-L11` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L9-L11) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L9-L11)

```diff
-     var ye = He(608),
-       be = He(4598),
-       Me = He(39452);
+     var mW = OW(639),
+       EW = OW(2937),
+       NW = OW(39897);
```

#### 4. `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L14)

```diff
-       if (ee.metaInfo === ye.c || "Iron Guardian" === ee.type || "Gold Guardian" === ee.type) return !0;
+       if (WW.metaInfo === mW.d || "Iron Guardian" === WW.type || "Gold Guardian" === WW.type) return !0;
```

#### 5. `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L20)

```diff
-         const ye = (0, be.i)(ee);
+         const mW = (0, EW.h)(WW);
```

#### 6. `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L24)

```diff
-     }(0, Me.d)("skyblock", ((ee, ie) => {
+     }(0, NW.e)("skyblock", ((WW, iW) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/scrollDebug.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/scrollDebug.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d)

#### 1. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/scrollDebug.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/scrollDebug.js#L1-L2)

```diff
- export const id = 60;
- export const ids = [60];
+ export const id = 61;
+ export const ids = [61];
```

#### 2. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/scrollDebug.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/scrollDebug.js#L4)

```diff
-   5164: (ee, ie, He) => {
+   5433: (WW, iW, OW) => {
```

#### 3. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L16-L17` → after: `L16-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/scrollDebug.js#L16-L17) · [Before (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/scrollDebug.js#L16-L17)

```diff
-     var ye = He(18),
-       be = He(3037);
+     var mW = OW(25),
+       EW = OW(3866);
```

#### 4. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/scrollDebug.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/scrollDebug.js#L59)

```diff
-       return `${Je[ee]} ${ie}`
+       return `${wW[WW]} ${iW}`
```

#### 5. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/scrollDebug.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/scrollDebug.js#L71)

```diff
-         return [fe(be, `${Me?`${ee[be]} -> ${ie[be]}`:String(ie[be])}${Ke?` (via ${He[be]}..${ye[be]})`:""}`)]
+         return [AW(EW, `${NW?`${WW[EW]} -> ${iW[EW]}`:String(iW[EW])}${PW?` (via ${OW[EW]}..${mW[EW]})`:""}`)]
```

#### 6. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L81-L82` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/scrollDebug.js#L81-L82) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/scrollDebug.js#L81-L82)

```diff
-       const He = (null !== (ie = ee.getAttribute("class")) && void 0 !== ie ? ie : "").trim().replace(/\s+/g, ".").slice(0, 40);
-       return `${ee.tagName.toLowerCase()}${He?`.${He}`:""}`
+       const OW = (null !== (iW = WW.getAttribute("class")) && void 0 !== iW ? iW : "").trim().replace(/\s+/g, ".").slice(0, 40);
+       return `${WW.tagName.toLowerCase()}${OW?`.${OW}`:""}`
```

#### 7. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L89` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/scrollDebug.js#L89) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/scrollDebug.js#L89)

```diff
-         "auto" !== ee && He.push(`${ee} on ${ze(ye)}`)
+         "auto" !== WW && OW.push(`${WW} on ${kW(mW)}`)
```

#### 8. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L91` → after: `L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/scrollDebug.js#L91) · [Before (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/scrollDebug.js#L91)

```diff
-       return `${ze(ee)} touch-action ${ie(ee)}${He.length>0?` (${He.join(", ")})`:""}`
+       return `${kW(WW)} touch-action ${iW(WW)}${OW.length>0?` (${OW.join(", ")})`:""}`
```

#### 9. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L110` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/scrollDebug.js#L110) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/scrollDebug.js#L110)

```diff
-           if (this.lines === Ue) return this.capped = !0, void this.deps.log(`further changes unlogged: ${Ue} lines logged`);
+           if (this.lines === LW) return this.capped = !0, void this.deps.log(`further changes unlogged: ${LW} lines logged`);
```

#### 10. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L112-L115` → after: `L112-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/scrollDebug.js#L112-L115) · [Before (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/scrollDebug.js#L112-L115)

```diff
-           const Te = null === Fe ? "no touch yet" : `touch on ${Fe.text}, ${Math.round(this.burstStartMs-Fe.atMs)} ms before`,
-             Be = null === be ? "" : `; inner scroll ${ze(be)} scrollTop ${ke(be.scrollTop,1)}`;
-           this.deps.log(`moved over ${Math.round(ee-this.burstStartMs)} ms; ${Te}${Be}: ${pe(ye,He,Je,Re)}`)
-         }, this.last = ee.read(), this.low = this.last, this.high = this.last, ee.log(`start: ${Te(this.last)}`)
+           const bW = null === cW ? "no touch yet" : `touch on ${cW.text}, ${Math.round(this.burstStartMs-cW.atMs)} ms before`,
+             sW = null === EW ? "" : `; inner scroll ${kW(EW)} scrollTop ${xW(EW.scrollTop,1)}`;
+           this.deps.log(`moved over ${Math.round(WW-this.burstStartMs)} ms; ${bW}${sW}: ${jW(mW,OW,wW,ZW)}`)
+         }, this.last = WW.read(), this.low = this.last, this.high = this.last, WW.log(`start: ${bW(this.last)}`)
```

#### 11. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L125` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/scrollDebug.js#L125) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/scrollDebug.js#L125)

```diff
-         this.low = Xe(this.low, ye, Math.min), this.high = Xe(this.high, ye, Math.max), this.innerScrolled = null !== ee && void 0 !== ee ? ee : this.innerScrolled
+         this.low = UW(this.low, mW, Math.min), this.high = UW(this.high, mW, Math.max), this.innerScrolled = null !== WW && void 0 !== WW ? WW : this.innerScrolled
```

#### 12. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L133` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/scrollDebug.js#L133) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/scrollDebug.js#L133)

```diff
-         inGame: () => "inGame" === ye.e.get("gameState"),
+         inGame: () => "inGame" === mW.d.get("gameState"),
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (156 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab)

#### 1. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1-L2)

```diff
- export const id = 61;
- export const ids = [61];
+ export const id = 62;
+ export const ids = [62];
```

#### 2. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L4)

```diff
-   40649: (ee, ie, He) => {
+   41104: (WW, iW, OW) => {
```

#### 3. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L8-L10)

```diff
-     var ye = He(3748),
-       be = He(40653),
-       Me = He(40638);
+     var mW = OW(4605),
+       EW = OW(41109),
+       NW = OW(41091);
```

#### 4. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L30-L31)

```diff
-       let He = Te(`?${ie}`).slice(1);
-       return He === ie && (He = fe(ie)), He === ie ? ee : encodeURIComponent(He)
+       let OW = bW(`?${iW}`).slice(1);
+       return OW === iW && (OW = AW(iW)), OW === iW ? WW : encodeURIComponent(OW)
```

#### 5. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L37-L39` → after: `L37-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L37-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L37-L39) · [Before (L37-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L37-L39)

```diff
-         const Me = (null !== (be = qe(He)) && void 0 !== be ? be : He).toLowerCase();
-         if (Ke.has(Me)) return `${ie}${He}=${Fe}`;
-         if (Ue.has(Me) && "" !== ye) return `${ie}${He}=<masked>`;
+         const NW = (null !== (EW = lW(OW)) && void 0 !== EW ? EW : OW).toLowerCase();
+         if (PW.has(NW)) return `${iW}${OW}=${cW}`;
+         if (LW.has(NW) && "" !== mW) return `${iW}${OW}=<masked>`;
```

#### 6. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L41-L42` → after: `L41-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L41-L42) · [Before (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L41-L42)

```diff
-         return Je === ye ? ee : `${ie}${He}=${Je}`
-       })).replace(oe, `$1${Fe}`) : ee
+         return wW === mW ? WW : `${iW}${OW}=${wW}`
+       })).replace(tW, `$1${cW}`) : WW
```

#### 7. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L51` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L51) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L51)

```diff
-       return ke.test(ee) ? Fe : Te(ee)
+       return xW.test(WW) ? cW : bW(WW)
```

#### 8. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L75` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L75) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L75)

```diff
-               He && "object" === typeof He && (ie.type === ye.b.Plugin && "string" === typeof ee.plugin && ee.plugin.includes("console") ? Ee(He) : Be(He))
+               OW && "object" === typeof OW && (iW.type === mW.c.Plugin && "string" === typeof WW.plugin && WW.plugin.includes("console") ? MW(OW) : sW(OW))
```

#### 9. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L88` → after: `L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L88) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L88)

```diff
-       return "style" === ye ? ie.replace(/url\((?:"[^"]*"|'[^']*'|[^)]*)\)/gi, "none") : te.has(ye) && "A" !== He.tagName ? Xe(ee, ie) : Oe.has(ye) || de.has(ye) || ye.startsWith("data-pad-") && !We.has(ye) ? ie : ie.replace(/\S/g, "*")
+       return "style" === mW ? iW.replace(/url\((?:"[^"]*"|'[^']*'|[^)]*)\)/gi, "none") : TW.has(mW) && "A" !== OW.tagName ? UW(WW, iW) : SW.has(mW) || YW.has(mW) || mW.startsWith("data-pad-") && !yW.has(mW) ? iW : iW.replace(/\S/g, "*")
```

#### 10. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L99-L100` → after: `L99-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L99-L100) · [Before (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L99-L100)

```diff
-       const [He = "", ...ye] = ie.pathname.split("/").slice(1), be = `/${He}${ye.some((ee=>""!==ee))?"/*":""}`;
-       return ee.startsWith("/") ? be : `${ie.origin}${be}`
+       const [OW = "", ...mW] = iW.pathname.split("/").slice(1), EW = `/${OW}${mW.some((WW=>""!==WW))?"/*":""}`;
+       return WW.startsWith("/") ? EW : `${iW.origin}${EW}`
```

#### 11. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L115` → after: `L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L115) · [Before (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L115)

```diff
-       }(ee.properties.$snapshot_data), Ae(ee.properties), "$screen" === ee.event && String(ee.properties.$screen_name).startsWith("custom: ") && (ee.properties.$screen_name = `custom: ${String(ee.properties.game_analytics_id)}`), Ae(ee.properties.$set), Ae(ee.properties.$set_once … [truncated]
+       }(WW.properties.$snapshot_data), uW(WW.properties), "$screen" === WW.event && String(WW.properties.$screen_name).startsWith("custom: ") && (WW.properties.$screen_name = `custom: ${String(WW.properties.game_analytics_id)}`), uW(WW.properties.$set), uW(WW.properties.$set_once … [truncated]
```

#### 12. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L117` → after: `L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L117) · [Before (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L117)

```diff
-     const Ve = ye.d.map((ee => `.${ee}`)).join(", "),
+     const dW = mW.i.map((WW => `.${WW}`)).join(", "),
```

#### 13. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L122` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L122) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L122)

```diff
-       return null !== ie && void 0 !== ie && ie.closest(Ve) ? ee : ee.replace(/\S/g, "*")
+       return null !== iW && void 0 !== iW && iW.closest(dW) ? WW : WW.replace(/\S/g, "*")
```

#### 14. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L132` → after: `L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L132) · [Before (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L132)

```diff
-             maskTextFn: ee.showsChat ? xe : null,
+             maskTextFn: WW.showsChat ? gW : null,
```

#### 15. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L138-L139` → after: `L138-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L138-L139) · [Before (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L138-L139)

```diff
-             blockSelector: [...ae, (ie = ee.ownOrigins, `img[src^="http"]${ie.map((ee=>`:not([src^="${ee}/"])`)).join("")}`)].join(", "),
-             maskTextSelector: ee.showsChat ? ce : `${ce}, ${Ve}`,
+             blockSelector: [...eW, (iW = WW.ownOrigins, `img[src^="http"]${iW.map((WW=>`:not([src^="${WW}/"])`)).join("")}`)].join(", "),
+             maskTextSelector: WW.showsChat ? vW : `${vW}, ${dW}`,
```

#### 16. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L215-L216` → after: `L215-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L215-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L215-L216) · [Before (L215-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L215-L216)

```diff
-     var ve = He(618),
-       ue = He(125);
+     var pW = OW(649),
+       fW = OW(136);
```

#### 17. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L241` → after: `L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L241) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L241)

```diff
-         panel_entry_reason: null !== (ie = He.recording_reason) && void 0 !== ie ? ie : "unknown",
+         panel_entry_reason: null !== (iW = OW.recording_reason) && void 0 !== iW ? iW : "unknown",
```

#### 18. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L259` → after: `L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L259) · [Before (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L259)

```diff
-       for (const [ye, be] of Object.entries(ie)) He[`${ee}${ye}`] = be;
+       for (const [mW, EW] of Object.entries(iW)) OW[`${WW}${mW}`] = EW;
```

#### 19. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L273` → after: `L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L273) · [Before (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L273)

```diff
-           suppressed: null !== (ye = null === (be = He) || void 0 === be ? void 0 : be.suppressed) && void 0 !== ye ? ye : 0
+           suppressed: null !== (mW = null === (EW = OW) || void 0 === EW ? void 0 : EW.suppressed) && void 0 !== mW ? mW : 0
```

#### 20. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L293` → after: `L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L293) · [Before (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L293)

```diff
-       return ye.pathname = `${ye.pathname.replace(/\/+$/,"")}/replay/${encodeURIComponent(ie)}`, ye.searchParams.set("timestamp", String(Math.round(He - 5e3))), ye.toString()
+       return mW.pathname = `${mW.pathname.replace(/\/+$/,"")}/replay/${encodeURIComponent(iW)}`, mW.searchParams.set("timestamp", String(Math.round(OW - 5e3))), mW.toString()
```

#### 21. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L308` → after: `L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L308) · [Before (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L308)

```diff
-           error_fingerprint: null !== (be = ie.fingerprint) && void 0 !== be ? be : null,
+           error_fingerprint: null !== (EW = iW.fingerprint) && void 0 !== EW ? EW : null,
```

#### 22. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L354` → after: `L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L354) · [Before (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L354)

```diff
-           this.unboundKeyPresses.set(He, (null !== (ie = this.unboundKeyPresses.get(He)) && void 0 !== ie ? ie : 0) + ye)
+           this.unboundKeyPresses.set(OW, (null !== (iW = this.unboundKeyPresses.get(OW)) && void 0 !== iW ? iW : 0) + mW)
```

#### 23. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L362` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L362) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L362)

```diff
-             first_game: null !== (ee = this.gamesJoined[0]) && void 0 !== ee ? ee : "",
+             first_game: null !== (WW = this.gamesJoined[0]) && void 0 !== WW ? WW : "",
```

#### 24. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L396-L397` → after: `L396-L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L396-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L396-L397) · [Before (L396-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L396-L397)

```diff
-         const He = null !== (ie = this.firstGame.leftAtMs) && void 0 !== ie ? ie : ee;
-         return null !== He && He - this.firstGame.joinedAtMs < ye.j
+         const OW = null !== (iW = this.firstGame.leftAtMs) && void 0 !== iW ? iW : WW;
+         return null !== OW && OW - this.firstGame.joinedAtMs < mW.n
```

#### 25. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L400-L407` → after: `L400-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L400-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L400-L407) · [Before (L400-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L400-L407)

```diff
-     var Ge = He(1169),
-       re = He(1036),
-       Qe = He(347),
-       ei = He(1040),
-       ii = He(1033),
-       Hi = He(2966),
-       yi = He(18),
-       bi = He(1983),
+     var zW = OW(1217),
+       FW = OW(1061),
+       QW = OW(344),
+       Wi = OW(1065),
+       ii = OW(1052),
+       Oi = OW(3822),
+       mi = OW(25),
+       Ei = OW(2037),
```

#### 26. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L409-L417` → after: `L409-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L409-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L409-L417) · [Before (L409-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L409-L417)

```diff
-       Ki = He(1305),
-       Ui = He(1260),
-       Fi = He(1493),
-       Ji = He(2189),
-       oi = He(1620),
-       Ri = He(40627),
-       ki = He(97),
-       qi = He(40619),
-       fi = He(1281);
+       Pi = OW(1351),
+       Li = OW(1301),
+       ci = OW(1593),
+       wi = OW(2306),
+       ti = OW(1729),
+       Zi = OW(41082),
+       xi = OW(100),
+       li = OW(41073),
+       Ai = OW(1319);
```

#### 27. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L431` → after: `L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L431) · [Before (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L431)

```diff
-             this.captureError("error", ee.message, ee.filename ? `${ee.filename}:${ee.lineno}:${ee.colno}` : null, ie instanceof Error ? ie.name : null, (0, qi.c)(ee))
+             this.captureError("error", WW.message, WW.filename ? `${WW.filename}:${WW.lineno}:${WW.colno}` : null, iW instanceof Error ? iW.name : null, (0, li.c)(WW))
```

#### 28. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L435` → after: `L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L435) · [Before (L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L435)

```diff
-           })), Mi.h.subscribe("unrecoverableError", (ee => {
+           })), Ni.l.subscribe("unrecoverableError", (WW => {
```

#### 29. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L446` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L446) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L446)

```diff
-                   Ke = !(null !== ye && ie.startTime - ye.endMs < 50) || ie.duration >= 3 * (null !== (He = null === (be = ye) || void 0 === be ? void 0 : be.durationMs) && void 0 !== He ? He : 0);
+                   PW = !(null !== mW && iW.startTime - mW.endMs < 50) || iW.duration >= 3 * (null !== (OW = null === (EW = mW) || void 0 === EW ? void 0 : EW.durationMs) && void 0 !== OW ? OW : 0);
```

#### 30. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L452` → after: `L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L452) · [Before (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L452)

```diff
-                   mainThreadMs: (0, fi.o)(ie)
+                   mainThreadMs: (0, Ai.l)(iW)
```

#### 31. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L464` → after: `L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L464) · [Before (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L464)

```diff
-         const ee = (0, Ui.A)().gameRender();
+         const WW = (0, Li.y)().gameRender();
```

#### 32. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L477` → after: `L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L477) · [Before (L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L477)

```diff
-         const Ue = this.errorThrottle.allow(`${ee}:${Ke}`, Date.now());
+         const LW = this.errorThrottle.allow(`${WW}:${PW}`, Date.now());
```

#### 33. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L482` → after: `L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L482) · [Before (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L482)

```diff
-         }), this.replay.addReplayMarker(ye.h.error, {
+         }), this.replay.addReplayMarker(mW.l.error, {
```

#### 34. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L494` → after: `L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L494) · [Before (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L494)

```diff
-         (0, oi.o)() || this.quitContext.noteHitch(performance.now()), this.replay.addHitch(Math.round(ie));
+         (0, ti.l)() || this.quitContext.noteHitch(performance.now()), this.replay.addHitch(Math.round(iW));
```

#### 35. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L497` → after: `L497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L497) · [Before (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L497)

```diff
-           YK: Math.round(ie),
+           Mc: Math.round(iW),
```

#### 36. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L504-L505` → after: `L504-L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L504-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L504-L505) · [Before (L504-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L504-L505)

```diff
-     var Xi = He(7132),
-       zi = He(335);
+     var ji = OW(7493),
+       Ui = OW(327);
```

#### 37. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L578` → after: `L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L578) · [Before (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L578)

```diff
-         ie - (null !== He && void 0 !== He ? He : 0) < 3e4 ? this.idleCounted = !1 : !this.idleCounted && ye && be && Me && (this.idleCounted = !0, this.signal("idle_pointer_locked", 1, 3e4))
+         iW - (null !== OW && void 0 !== OW ? OW : 0) < 3e4 ? this.idleCounted = !1 : !this.idleCounted && mW && EW && NW && (this.idleCounted = !0, this.signal("idle_pointer_locked", 1, 3e4))
```

#### 38. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L592-L593` → after: `L592-L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L592-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L592-L593) · [Before (L592-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L592-L593)

```diff
-     const di = Xi.f.indexOf("first_input"),
-       Wi = Xi.f.indexOf("first_move"),
+     const Si = ji.j.indexOf("first_input"),
+       Yi = ji.j.indexOf("first_move"),
```

#### 39. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L601` → after: `L601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L601) · [Before (L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L601)

```diff
-         this.replay = ee, this.quitContext = ie, this.deps = He, this.ladder = new Bi(Xi.c, "first_move"), this.frustration = void 0, this.frustrationThrottle = new je({
+         this.replay = WW, this.quitContext = iW, this.deps = OW, this.ladder = new ki(ji.e, "first_move"), this.frustration = void 0, this.frustrationThrottle = new RW({
```

#### 40. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L613` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L613) · [Before (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L613)

```diff
-         this.reachStep("page_loaded"), Mi.h.subscribe("sessionReplayStayOpened", (ee => {
+         this.reachStep("page_loaded"), Ni.l.subscribe("sessionReplayStayOpened", (WW => {
```

#### 41. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L615` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L615) · [Before (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L615)

```diff
-         })), Mi.h.subscribe("pointerLockUpdate", (ee => {
+         })), Ni.l.subscribe("pointerLockUpdate", (WW => {
```

#### 42. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L617` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L617) · [Before (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L617)

```diff
-         })), Mi.h.subscribe("localBlockMined", (() => {
+         })), Ni.l.subscribe("localBlockMined", (() => {
```

#### 43. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L619` → after: `L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L619) · [Before (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L619)

```diff
-         })), Mi.h.subscribe("blockChangeRefused", (() => {
+         })), Ni.l.subscribe("blockChangeRefused", (() => {
```

#### 44. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L621` → after: `L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L621) · [Before (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L621)

```diff
-         })), Mi.h.subscribe("controlsTutorialShown", (ee => {
+         })), Ni.l.subscribe("controlsTutorialShown", (WW => {
```

#### 45. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L623` → after: `L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L623) · [Before (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L623)

```diff
-         })), Mi.h.subscribe("showShopTouchTutorial", (ee => {
+         })), Ni.l.subscribe("showShopTouchTutorial", (WW => {
```

#### 46. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L625` → after: `L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L625) · [Before (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L625)

```diff
-         })), Mi.h.subscribe("appManagerUpdated|openInGameMenuName", (ee => {
+         })), Ni.l.subscribe("appManagerUpdated|openInGameMenuName", (WW => {
```

#### 47. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L627` → after: `L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L627) · [Before (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L627)

```diff
-         })), Mi.h.subscribe("appManagerUpdated|openEverythingMenuName", (ee => {
+         })), Ni.l.subscribe("appManagerUpdated|openEverythingMenuName", (WW => {
```

#### 48. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L631` → after: `L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L631) · [Before (L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L631)

```diff
-         })), null === (ee = (0, Ri.c)()) || void 0 === ee || ee.onUnboundKey((() => {
+         })), null === (WW = (0, Zi.e)()) || void 0 === WW || WW.onUnboundKey((() => {
```

#### 49. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L647` → after: `L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L647) · [Before (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L647)

```diff
-           ladder: new Bi(Xi.f, "first_move"),
+           ladder: new ki(ji.j, "first_move"),
```

#### 50. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L670` → after: `L670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L670) · [Before (L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L670)

```diff
-           lastInputAtMs: Math.max(null !== (ee = this.quitContext.getLastInputAtMs()) && void 0 !== ee ? ee : 0, null !== (ie = null === (He = this.currentStay) || void 0 === He ? void 0 : He.playableAtMs) && void 0 !== ie ? ie : 0),
+           lastInputAtMs: Math.max(null !== (WW = this.quitContext.getLastInputAtMs()) && void 0 !== WW ? WW : 0, null !== (iW = null === (OW = this.currentStay) || void 0 === OW ? void 0 : OW.playableAtMs) && void 0 !== iW ? iW : 0),
```

#### 51. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L695` → after: `L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L695) · [Before (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L695)

```diff
-         this.everythingMenu = ee, null !== ee && (this.menuOpened(ee, ee === zi.r.SETTINGS ? "first_settings_open" : null), ee === zi.r.SETTINGS && ie && null !== this.currentStay && this.noteFrustration("menu_toggling"))
+         this.everythingMenu = WW, null !== WW && (this.menuOpened(WW, WW === Ui.m.SETTINGS ? "first_settings_open" : null), WW === Ui.m.SETTINGS && iW && null !== this.currentStay && this.noteFrustration("menu_toggling"))
```

#### 52. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L701` → after: `L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L701) · [Before (L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L701)

```diff
-         const ie = `controls_tutorial_${ee}`;
+         const iW = `controls_tutorial_${WW}`;
```

#### 53. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L710` → after: `L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L710) · [Before (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L710)

```diff
-         null !== ee && ee.unboundKeyPresses < Xi.g && (ee.unboundKeyPresses++, this.deps.publishStayProgress({
+         null !== WW && WW.unboundKeyPresses < ji.n && (WW.unboundKeyPresses++, this.deps.publishStayProgress({
```

#### 54. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L730` → after: `L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L730) · [Before (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L730)

```diff
-           furthest_step: null !== (ee = this.ladder.furthest) && void 0 !== ee ? ee : "",
+           furthest_step: null !== (WW = this.ladder.furthest) && void 0 !== WW ? WW : "",
```

#### 55. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L735` → after: `L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L735) · [Before (L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L735)

```diff
-         null !== this.ladder.reach(ee) && (this.replay.setSessionProperties(this.ladderTags(), !1), this.unsentStepMarkers.push(Xi.c.indexOf(ee)), this.sendStepMarkers())
+         null !== this.ladder.reach(WW) && (this.replay.setSessionProperties(this.ladderTags(), !1), this.unsentStepMarkers.push(ji.e.indexOf(WW)), this.sendStepMarkers())
```

#### 56. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L738` → after: `L738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L738) · [Before (L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L738)

```diff
-         for (; this.unsentStepMarkers.length > 0 && this.replay.addReplayMarker(ye.h.step, {
+         for (; this.unsentStepMarkers.length > 0 && this.replay.addReplayMarker(mW.l.step, {
```

#### 57. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L746` → after: `L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L746) · [Before (L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L746)

```diff
-           furthestStep: null !== (He = ie.ladder.furthest) && void 0 !== He ? He : void 0,
+           furthestStep: null !== (OW = iW.ladder.furthest) && void 0 !== OW ? OW : void 0,
```

#### 58. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L772` → after: `L772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L772) · [Before (L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L772)

```diff
-           ye = null !== (ee = null === (ie = this.currentStay) || void 0 === ie ? void 0 : ie.playableAtMs) && void 0 !== ee ? ee : null;
+           mW = null !== (WW = null === (iW = this.currentStay) || void 0 === iW ? void 0 : iW.playableAtMs) && void 0 !== WW ? WW : null;
```
