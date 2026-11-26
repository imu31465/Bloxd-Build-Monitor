# Changed — Bundle Modifications Report (Part 046 / 099)

- **Updated at**: `2026-11-26T22:08 JST`
- **Part**: `46 / 99` (**398** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 045](part-045.md) · [Part 047 →](part-047.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/88.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/88.js` (4593 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46)

#### 2637. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19746` → after: `L19844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L19844) · [Before (L19746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L19746)

```diff
-               PM = eM(iM.UL, aM),
+               FU = PU(zU.RY, AU),
```

#### 2638. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19748-L19750` → after: `L19846-L19848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19846-L19848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L19846-L19848) · [Before (L19748-L19750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L19748-L19750)

```diff
-                 const SM = iM.xZ.aShaderPackItem,
-                   aM = (0, LM.l)(OM),
-                   PM = `nodeAttachment|${iM.name}|${iM.uniqueId}|${aM}`;
+                 const yU = zU.XM.aShaderPackItem,
+                   AU = (0, YU.f)(cU),
+                   FU = `nodeAttachment|${zU.name}|${zU.uniqueId}|${AU}`;
```

#### 2639. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19752-L19754` → after: `L19850-L19852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19850-L19852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L19850-L19852) · [Before (L19752-L19754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L19752-L19754)

```diff
-                   const nM = iM.clone(`thinNodeAttachment_${iM.name}|${aM}`, null);
-                   nM.makeGeometryUnique(), OM && (nM.sideOrientation = jM.c.ClockWiseSideOrientation), rM.newObjectType(PM, nM, {
-                     vL: 4,
+                   const oU = zU.clone(`thinNodeAttachment_${zU.name}|${AU}`, null);
+                   oU.makeGeometryUnique(), cU && (oU.sideOrientation = QU.d.ClockWiseSideOrientation), XU.newObjectType(FU, oU, {
+                     xY: 4,
```

#### 2640. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19756-L19757` → after: `L19854-L19855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19854-L19855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L19854-L19855) · [Before (L19756-L19757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L19756-L19757)

```diff
-                     strides: SM ? uM : gM
-                   }), rM.setPickableForType(PM, !1), MM.CL.Vk(nM)
+                     strides: yU ? CU : eU
+                   }), XU.setPickableForType(FU, !1), UU.WY.WH(oU)
```

#### 2641. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19762` → after: `L19860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L19860) · [Before (L19762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L19762)

```diff
-               }(MM, rM, iM.QSM, bM(PM, aM));
+               }(UU, XU, zU.KyU, WU(FU, AU));
```

#### 2642. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19769` → after: `L19867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L19867) · [Before (L19769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L19769)

```diff
-           Zk: oM
+           YH: iU
```

#### 2643. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19772-L19774` → after: `L19870-L19872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19870-L19872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L19870-L19872) · [Before (L19772-L19774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L19772-L19774)

```diff
-         ZM && !ZM.xG() && (! function(MM, rM, iM, OM) {
-           (0, SM.p)(rM, iM[0], iM[1], iM[2]), rM.rotation.set(OM[0], OM[1], OM[2])
-         }(MM.CL, ZM, QM, zM), mM.attachTransformNode(ZM, yM, lM))
+         fU && !fU.oR() && (! function(UU, XU, zU, cU) {
+           (0, yU.q)(XU, zU[0], zU[1], zU[2]), XU.rotation.set(cU[0], cU[1], cU[2])
+         }(UU.WY, fU, DU, EU), NU.attachTransformNode(fU, gU, kU))
```

#### 2644. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19779` → after: `L19877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L19877) · [Before (L19779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L19779)

```diff
-       return !rM.has(iM.parentThinObjectId) || (0, JM.b)(MM).getAttachmentGeneration(iM.clientifiedAttachToEId, iM.Kr) !== iM.generation
+       return !XU.has(zU.parentThinObjectId) || (0, aU.b)(UU).getAttachmentGeneration(zU.clientifiedAttachToEId, zU.Ac) !== zU.generation
```

#### 2645. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19787` → after: `L19885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L19885) · [Before (L19787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L19787)

```diff
-       return new mM.sh(rM ? -MM.x : MM.x, MM.y, MM.z)
+       return new NU.Sp(XU ? -UU.x : UU.x, UU.y, UU.z)
```

#### 2646. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19791` → after: `L19889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L19889) · [Before (L19791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L19791)

```diff
-       return (0, LM.i)(MM.x * MM.y * MM.z < 0, rM)
+       return (0, YU.d)(UU.x * UU.y * UU.z < 0, XU)
```

#### 2647. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19799-L19800` → after: `L19897-L19898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19897-L19898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L19897-L19898) · [Before (L19799-L19800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L19799-L19800)

```diff
-         Tr: LM,
-         Vr: mM,
+         oc: YU,
+         Dc: NU,
```

#### 2648. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19803` → after: `L19901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L19901) · [Before (L19803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L19803)

```diff
-       tM(rM, iM, LM, mM), rM.setScale(iM, SM.x, SM.y, SM.z), rM.attachThinObject(iM, nM, QM), rM.set(iM, "aOpacity", (0, zM.holderAttachmentOpacity)(MM, HM)), rM.set(iM, "aLightLevels", null !== (aM = null === (PM = MM.hU.vrM(HM)) || void 0 === PM ? void 0 : PM._lightLevels) && v … [truncated]
+       LU(XU, zU, YU, NU), XU.setScale(zU, yU.x, yU.y, yU.z), XU.attachThinObject(zU, oU, DU), XU.set(zU, "aOpacity", (0, EU.holderAttachmentOpacity)(UU, IU)), XU.set(zU, "aLightLevels", null !== (AU = null === (FU = UU.xG.qzU(IU)) || void 0 === FU ? void 0 : FU._lightLevels) && v … [truncated]
```

#### 2649. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19809` → after: `L19907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L19907) · [Before (L19809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L19809)

```diff
-       const MM = (0, aM.f)();
+       const UU = (0, AU.e)();
```

#### 2650. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19811` → after: `L19909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L19909) · [Before (L19811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L19811)

```diff
-           Kr: iM
+           Ac: zU
```

#### 2651. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19813-L19817` → after: `L19911-L19915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19911-L19915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L19911-L19915) · [Before (L19813-L19817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L19813-L19817)

```diff
-         Ir: rM,
-         Kr: iM,
-         qr: null,
-         Tr: [0, 0, 0],
-         Vr: [0, 0, 0]
+         Qc: XU,
+         Ac: zU,
+         Fc: null,
+         oc: [0, 0, 0],
+         Dc: [0, 0, 0]
```

#### 2652. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19830` → after: `L19928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L19928) · [Before (L19830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L19830)

```diff
-   38917: (MM, rM, iM) => {
+   38680: (UU, XU, zU) => {
```

#### 2653. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19832-L19833` → after: `L19930-L19931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19930-L19931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L19930-L19931) · [Before (L19832-L19833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L19832-L19833)

```diff
-       b: () => aM,
-       f: () => PM
+       d: () => AU,
+       h: () => FU
```

#### 2654. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19835-L19837` → after: `L19933-L19935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19933-L19935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L19933-L19935) · [Before (L19835-L19837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L19835-L19837)

```diff
-     var OM = iM(38909),
-       SM = iM(38275),
-       jM = iM(38217);
+     var cU = zU(38675),
+       yU = zU(38034),
+       QU = zU(37977);
```

#### 2655. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19841-L19843` → after: `L19939-L19941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19939-L19941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L19939-L19941) · [Before (L19841-L19843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L19841-L19843)

```diff
-       MM.sZ("aOpacity", 1), MM.xZ.aOpacity = 1, MM.material && (rM = MM.material, (0, OM.d)(rM, (MM => {
-         const rM = (0, jM.Y)(MM);
-         rM && (0, SM.b)(rM, !0)
+       UU.jH("aOpacity", 1), UU.XM.aOpacity = 1, UU.material && (XU = UU.material, (0, cU.c)(XU, (UU => {
+         const XU = (0, QU.V)(UU);
+         XU && (0, yU.c)(XU, !0)
```

#### 2656. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19856` → after: `L19954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L19954) · [Before (L19856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L19856)

```diff
-         xZ: iM
+         XM: zU
```

#### 2657. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19861` → after: `L19959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L19959) · [Before (L19861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L19861)

```diff
-   39455: (MM, rM, iM) => {
+   39235: (UU, XU, zU) => {
```

#### 2658. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19868` → after: `L19966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L19966) · [Before (L19868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L19868)

```diff
-     var OM = iM(3063);
+     var cU = zU(3043);
```

#### 2659. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19886` → after: `L19984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L19984) · [Before (L19886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L19886)

```diff
-       (aM = !1, null !== MM && void 0 !== MM && MM.isChargeable()) ? MM.clearChargingPose(): null === (iM = rM.hU.getState(rM.eD, "playerCameraAdjustment")) || void 0 === iM || iM.fovMultiplier.removeMultiplier("chargeableZoom")
+       (AU = !1, null !== UU && void 0 !== UU && UU.isChargeable()) ? UU.clearChargingPose(): null === (zU = XU.xG.getState(XU.pM, "playerCameraAdjustment")) || void 0 === zU || zU.fovMultiplier.removeMultiplier("chargeableZoom")
```

#### 2660. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19899` → after: `L19997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L19997) · [Before (L19899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L19899)

```diff
-       } = iM, LM = MM.hU.riM(rM);
+       } = zU, YU = UU.xG.szU(XU);
```

#### 2661. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19901-L19902` → after: `L19999-L20000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R19999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L19999-L20000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L19999-L20000) · [Before (L19901-L19902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L19901-L19902)

```diff
-       const mM = MM.hU.qrM(rM),
-         HM = MM.hU.TrM(rM);
+       const NU = UU.xG.izU(XU),
+         IU = UU.xG.HzU(XU);
```

#### 2662. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19906` → after: `L20004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20004) · [Before (L19906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L19906)

```diff
-         mM.replayUseFirstPersonMesh = OM, MM !== OM && (null === HM || void 0 === HM || HM.wQM())
+         NU.replayUseFirstPersonMesh = cU, UU !== cU && (null === IU || void 0 === IU || IU.FEU())
```

#### 2663. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19908` → after: `L20006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20006) · [Before (L19908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L19908)

```diff
-       const JM = MM.hU.vrM(rM);
+       const aU = UU.xG.qzU(XU);
```

#### 2664. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19918` → after: `L20016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20016) · [Before (L19918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L19918)

```diff
-       const iM = MM.hU.riM(rM);
+       const zU = UU.xG.szU(XU);
```

#### 2665. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19920-L19923` → after: `L20018-L20021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20018-L20021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20018-L20021) · [Before (L19920-L19923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L19920-L19923)

```diff
-       const OM = MM.hU.qrM(rM),
-         SM = MM.hU.TrM(rM);
-       void 0 !== (null === OM || void 0 === OM ? void 0 : OM.replayUseFirstPersonMesh) && (OM.replayUseFirstPersonMesh = void 0, null === SM || void 0 === SM || SM.wQM());
-       const jM = MM.hU.vrM(rM);
+       const cU = UU.xG.izU(XU),
+         yU = UU.xG.HzU(XU);
+       void 0 !== (null === cU || void 0 === cU ? void 0 : cU.replayUseFirstPersonMesh) && (cU.replayUseFirstPersonMesh = void 0, null === yU || void 0 === yU || yU.FEU());
+       const QU = UU.xG.qzU(XU);
```

#### 2666. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19927` → after: `L20025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20025) · [Before (L19927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L19927)

```diff
-   38261: (MM, rM, iM) => {
+   38026: (UU, XU, zU) => {
```

#### 2667. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19930` → after: `L20028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20028) · [Before (L19930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L19930)

```diff
-       h: () => OM
+       g: () => cU
```

#### 2668. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19947` → after: `L20045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20045) · [Before (L19947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L19947)

```diff
-   38253: (MM, rM, iM) => {
+   38019: (UU, XU, zU) => {
```

#### 2669. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19950` → after: `L20048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20048) · [Before (L19950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L19950)

```diff
-       g: () => QM,
+       f: () => DU,
```

#### 2670. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19952` → after: `L20050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20050) · [Before (L19952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L19952)

```diff
-       k: () => aM
+       m: () => AU
```

#### 2671. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19954` → after: `L20052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20052) · [Before (L19954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L19954)

```diff
-     var OM = iM(38261);
+     var cU = zU(38026);
```

#### 2672. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19958` → after: `L20056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20056) · [Before (L19958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L19958)

```diff
-       return SM ??= Promise.all([iM.e(230), iM.e(210)]).then((() => iM(44153))).then((MM => MM), (MM => {
+       return yU ??= Promise.all([zU.e(221), zU.e(224)]).then((() => zU(44182))).then((UU => UU), (UU => {
```

#### 2673. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19973` → after: `L20071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20071) · [Before (L19973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L19973)

```diff
-         OM.h.failed++;
+         cU.g.failed++;
```

#### 2674. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19983` → after: `L20081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20081) · [Before (L19983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L19983)

```diff
-         return MM.loadGlbTree(iM, rM, null !== (SM = OM.rootUrl) && void 0 !== SM ? SM : "", !1, OM.materials)
+         return UU.loadGlbTree(zU, XU, null !== (yU = cU.rootUrl) && void 0 !== yU ? yU : "", !1, cU.materials)
```

#### 2675. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19990` → after: `L20088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20088) · [Before (L19990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L19990)

```diff
-         return MM.loadGlbTree(iM, rM, null !== (SM = OM.rootUrl) && void 0 !== SM ? SM : "", !0, OM.materials)
+         return UU.loadGlbTree(zU, XU, null !== (yU = cU.rootUrl) && void 0 !== yU ? yU : "", !0, cU.materials)
```

#### 2676. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L19999` → after: `L20097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20097) · [Before (L19999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L19999)

```diff
-         return MM.loadGlbAsset(iM, rM, null !== (SM = OM.rootUrl) && void 0 !== SM ? SM : "", jM)
+         return UU.loadGlbAsset(zU, XU, null !== (yU = cU.rootUrl) && void 0 !== yU ? yU : "", QU)
```

#### 2677. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20003` → after: `L20101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20101) · [Before (L20003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20003)

```diff
-   38864: (MM, rM, iM) => {
+   38634: (UU, XU, zU) => {
```

#### 2678. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20005-L20006` → after: `L20103-L20104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20103-L20104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20103-L20104) · [Before (L20005-L20006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20005-L20006)

```diff
-       d: () => QM,
-       g: () => zM
+       b: () => DU,
+       e: () => EU
```

#### 2679. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20008-L20009` → after: `L20106-L20107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20106-L20107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20106-L20107) · [Before (L20008-L20009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20008-L20009)

```diff
-     var OM = iM(38217),
-       SM = iM(38167);
+     var cU = zU(37977),
+       yU = zU(37919);
```

#### 2680. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20020` → after: `L20118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20118) · [Before (L20020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20020)

```diff
-     var PM = iM(38235);
+     var FU = zU(38007);
```

#### 2681. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20037` → after: `L20135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20135) · [Before (L20037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20037)

```diff
-         emissiveTexture: MM.emissionColorTexture ? (0, PM.C)(MM.emissionColorTexture) : null,
+         emissiveTexture: UU.emissionColorTexture ? (0, FU.v)(UU.emissionColorTexture) : null,
```

#### 2682. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20056` → after: `L20154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20154) · [Before (L20056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20056)

```diff
-           return OM && (MM.baseColor = SM.Color3.FromArray(OM), MM.geometryOpacity = OM[3]), rM.unlit ? MM.isUnlit = !0 : MM.emissionColor = rM.emissiveFactor ? SM.Color3.FromArray(rM.emissiveFactor) : new SM.Color3(0, 0, 0), rM.doubleSided && (MM.backFaceCulling = !1, MM.twoSide … [truncated]
+           return cU && (UU.baseColor = yU.Color3.FromArray(cU), UU.geometryOpacity = cU[3]), XU.unlit ? UU.isUnlit = !0 : UU.emissionColor = XU.emissiveFactor ? yU.Color3.FromArray(XU.emissiveFactor) : new yU.Color3(0, 0, 0), XU.doubleSided && (UU.backFaceCulling = !1, UU.twoSide … [truncated]
```

#### 2683. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20078` → after: `L20176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20176) · [Before (L20078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20078)

```diff
-   39184: (MM, rM, iM) => {
+   38952: (UU, XU, zU) => {
```

#### 2684. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20082` → after: `L20180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20180) · [Before (L20082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20082)

```diff
-     var OM = iM(625);
+     var cU = zU(646);
```

#### 2685. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20085` → after: `L20183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20183) · [Before (L20085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20085)

```diff
-       const OM = rM => MM.Cm.bloxd.getMetaInfo(rM).rootName,
+       const cU = XU => UU.WN.bloxd.getMetaInfo(XU).rootName,
```

#### 2686. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20087` → after: `L20185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20185) · [Before (L20087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20087)

```diff
-       return SM && OM(SM.name) === OM(iM) ? SM : null
+       return yU && cU(yU.name) === cU(zU) ? yU : null
```

#### 2687. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20101` → after: `L20199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20199) · [Before (L20101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20101)

```diff
-         return !(!aM || (null !== (jM = aM.amount) && void 0 !== jM ? jM : 1) < rM) && OM.removeItem(MM, rM)
+         return !(!AU || (null !== (QU = AU.amount) && void 0 !== QU ? QU : 1) < XU) && cU.removeItem(UU, XU)
```

#### 2688. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20118` → after: `L20216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20216) · [Before (L20118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20118)

```diff
-       return jM => MM.craftItem(rM, jM.playerInventory, iM, OM, SM).Ha === SM
+       return QU => UU.craftItem(XU, QU.playerInventory, zU, cU, yU).NA === yU
```

#### 2689. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20123` → after: `L20221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20221) · [Before (L20123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20123)

```diff
-         return null !== jM && iM <= (null !== (SM = jM.amount) && void 0 !== SM ? SM : 0) && MM.salvageItem(OM.playerInventory, rM, jM.name, iM)
+         return null !== QU && zU <= (null !== (yU = QU.amount) && void 0 !== yU ? yU : 0) && UU.salvageItem(cU.playerInventory, XU, QU.name, zU)
```

#### 2690. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20138` → after: `L20236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20236) · [Before (L20138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20138)

```diff
-         return !!aM && (jM.playerInventory.setItemSlot(MM, iM, 1, null !== OM && void 0 !== OM ? OM : aM.attributes), !0)
+         return !!AU && (QU.playerInventory.setItemSlot(UU, zU, 1, null !== cU && void 0 !== cU ? cU : AU.attributes), !0)
```

#### 2691. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20144` → after: `L20242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20242) · [Before (L20144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20144)

```diff
-         return (null === PM || void 0 === PM ? void 0 : PM.name) === rM && (1 === PM.amount || null === PM.amount ? (aM.setItemSlot(MM, iM, 1, {}), !0) : !(null === SM || SM < 0 || SM >= OM.r || null !== aM.getItemAtIdx(SM)) && (aM.setItemSlot(MM, rM, PM.amount - 1, {}), aM.setIt … [truncated]
+         return (null === FU || void 0 === FU ? void 0 : FU.name) === XU && (1 === FU.amount || null === FU.amount ? (AU.setItemSlot(UU, zU, 1, {}), !0) : !(null === yU || yU < 0 || yU >= cU.s || null !== AU.getItemAtIdx(yU)) && (AU.setItemSlot(UU, XU, FU.amount - 1, {}), AU.setIt … [truncated]
```

#### 2692. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20147` → after: `L20245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20245) · [Before (L20147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20147)

```diff
-       return OM => !!SM(OM, rM, iM) && (OM.Cm.bloxd.removeEatenItem(MM, OM.playerInventory, rM), !0)
+       return cU => !!yU(cU, XU, zU) && (cU.WN.bloxd.removeEatenItem(UU, cU.playerInventory, XU), !0)
```

#### 2693. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20156` → after: `L20254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20254) · [Before (L20156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20156)

```diff
-   38776: (MM, rM, iM) => {
+   38543: (UU, XU, zU) => {
```

#### 2694. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20158` → after: `L20256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20256) · [Before (L20158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20158)

```diff
-       e: () => OM
+       b: () => cU
```

#### 2695. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20165` → after: `L20263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20263) · [Before (L20165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20165)

```diff
-   38848: (MM, rM, iM) => {
+   38620: (UU, XU, zU) => {
```

#### 2696. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20167-L20168` → after: `L20265-L20266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20265-L20266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20265-L20266) · [Before (L20167-L20168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20167-L20168)

```diff
-       c: () => dM,
-       f: () => QM,
+       d: () => tU,
+       h: () => DU,
```

#### 2697. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20171-L20176` → after: `L20269-L20274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20269-L20274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20269-L20274) · [Before (L20171-L20176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20171-L20176)

```diff
-     var OM = iM(187),
-       SM = iM(9816),
-       jM = iM(2067),
-       aM = iM(4069),
-       PM = iM(22),
-       nM = iM(3063);
+     var cU = zU(220),
+       yU = zU(9782),
+       QU = zU(2032),
+       AU = zU(4063),
+       FU = zU(31),
+       oU = zU(3043);
```

#### 2698. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20190-L20191` → after: `L20288-L20289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20288-L20289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20288-L20289) · [Before (L20190-L20191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20190-L20191)

```diff
-       const iM = (0, OM.d)(MM, rM);
-       return (null === iM || void 0 === iM ? void 0 : iM.name) === rM ? iM : void 0
+       const zU = (0, cU.b)(UU, XU);
+       return (null === zU || void 0 === zU ? void 0 : zU.name) === XU ? zU : void 0
```

#### 2699. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20199` → after: `L20297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20297) · [Before (L20199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20199)

```diff
-       lM(nM.j.blocksClient, MM)
+       kU(oU.f.blocksClient, UU)
```

#### 2700. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20211` → after: `L20309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20309) · [Before (L20211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20211)

```diff
-       return SM.k[MM.name].ttb
+       return yU.h[UU.name].ttb
```

#### 2701. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20215` → after: `L20313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20313) · [Before (L20215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20215)

```diff
-       if ("droppedItemScale" === MM) mM = "number" === typeof rM && isFinite(rM) ? rM : 1;
+       if ("droppedItemScale" === UU) NU = "number" === typeof XU && isFinite(XU) ? XU : 1;
```

#### 2702. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20219` → after: `L20317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20317) · [Before (L20219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20219)

```diff
-         const iM = yM(nM.j.itemsClient, MM.slice(0, -zM.length));
+         const zU = gU(oU.f.itemsClient, UU.slice(0, -EU.length));
```

#### 2703. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20222` → after: `L20320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20320) · [Before (L20222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20222)

```diff
-         const iM = yM(nM.j.blocksClient, MM.slice(0, -LM.length));
+         const zU = gU(oU.f.blocksClient, UU.slice(0, -YU.length));
```

#### 2704. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20230` → after: `L20328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20328) · [Before (L20230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20230)

```diff
-       })), PM.i.subscribe("ttbEffectMultiplier", (MM => {
+       })), FU.k.subscribe("ttbEffectMultiplier", (UU => {
```

#### 2705. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20233` → after: `L20331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20331) · [Before (L20233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20233)

```diff
-         mM = 1, HM = !1, hM = 1, JM = 1, lM(nM.j.itemsClient, (MM => {
+         NU = 1, IU = !1, pU = 1, aU = 1, kU(oU.f.itemsClient, (UU => {
```

#### 2706. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20241` → after: `L20339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20339) · [Before (L20241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20241)

```diff
-   38682: (MM, rM, iM) => {
+   38447: (UU, XU, zU) => {
```

#### 2707. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20243` → after: `L20341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20341) · [Before (L20243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20243)

```diff
-       b: () => OM
+       e: () => cU
```

#### 2708. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20343` → after: `L20441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20441) · [Before (L20343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20343)

```diff
-         const OM = Array.isArray(rM) ? rM : null !== (iM = null === rM || void 0 === rM ? void 0 : rM.transfer) && void 0 !== iM ? iM : [];
+         const cU = Array.isArray(XU) ? XU : null !== (zU = null === XU || void 0 === XU ? void 0 : XU.transfer) && void 0 !== zU ? zU : [];
```

#### 2709. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20382` → after: `L20480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20480) · [Before (L20382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20382)

```diff
-   38601: (MM, rM, iM) => {
+   38373: (UU, XU, zU) => {
```

#### 2710. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20384-L20385` → after: `L20482-L20483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20482-L20483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20482-L20483) · [Before (L20384-L20385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20384-L20385)

```diff
-       let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : MM.hU.ziM(rM);
-       return rM === MM.eD || (null === iM || void 0 === iM ? void 0 : iM.zh) === MM.eD && iM.LiM
+       let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : UU.xG.bzU(XU);
+       return XU === UU.pM || (null === zU || void 0 === zU ? void 0 : zU.Ep) === UU.pM && zU.TzU
```

#### 2711. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20388` → after: `L20486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20486) · [Before (L20388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20388)

```diff
-       c: () => OM
+       b: () => cU
```

#### 2712. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20391` → after: `L20489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20489) · [Before (L20391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20391)

```diff
-   38909: (MM, rM, iM) => {
+   38675: (UU, XU, zU) => {
```

#### 2713. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20393-L20394` → after: `L20491-L20492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20491-L20492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20491-L20492) · [Before (L20393-L20394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20393-L20394)

```diff
-       if ("B_" in MM && Array.isArray(MM.B_))
-         for (const iM of MM.B_) iM && rM(iM);
+       if ("HUU" in UU && Array.isArray(UU.HUU))
+         for (const zU of UU.HUU) zU && XU(zU);
```

#### 2714. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20398` → after: `L20496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20496) · [Before (L20398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20398)

```diff
-       d: () => OM
+       c: () => cU
```

#### 2715. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20401` → after: `L20499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20499) · [Before (L20401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20401)

```diff
-   38149: (MM, rM, iM) => {
+   37908: (UU, XU, zU) => {
```

#### 2716. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20403` → after: `L20501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20501) · [Before (L20403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20403)

```diff
-       C: () => QM,
+       B: () => DU,
```

#### 2717. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20405-L20407` → after: `L20503-L20504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20503-L20504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20503-L20504) · [Before (L20405-L20407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20405-L20407)

```diff
-       H: () => yM,
-       b: () => aM,
-       f: () => lM,
+       F: () => gU,
+       e: () => AU,
```

#### 2718. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20410-L20413` → after: `L20507-L20511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20507-L20511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20507-L20511) · [Before (L20410-L20413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20410-L20413)

```diff
-       n: () => HM,
-       r: () => zM,
-       v: () => mM,
-       z: () => nM
+       o: () => tU,
+       q: () => IU,
+       s: () => EU,
+       t: () => NU,
+       x: () => oU
```

#### 2719. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20415-L20417` → after: `L20513-L20515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20513-L20515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20513-L20515) · [Before (L20415-L20417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20415-L20417)

```diff
-     var OM = iM(38034),
-       SM = iM(2e3),
-       jM = iM(38158);
+     var cU = zU(37814),
+       yU = zU(1974),
+       QU = zU(37915);
```

#### 2720. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20443` → after: `L20541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20541) · [Before (L20443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20443)

```diff
-         OM = null !== iM && void 0 !== iM && iM.model ? iM : null;
+         cU = null !== zU && void 0 !== zU && zU.model ? zU : null;
```

#### 2721. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20463` → after: `L20561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20561) · [Before (L20463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20463)

```diff
-         indices: null !== (iM = null === (OM = rM.geometry.indexData) || void 0 === OM ? void 0 : OM.slice()) && void 0 !== iM ? iM : [],
+         indices: null !== (zU = null === (cU = XU.geometry.indexData) || void 0 === cU ? void 0 : cU.slice()) && void 0 !== zU ? zU : [],
```

#### 2722. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20478` → after: `L20576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20576) · [Before (L20478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20478)

```diff
-         const iM = jM.c.UVKind,
+         const zU = QU.d.UVKind,
```

#### 2723. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20480` → after: `L20578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20578) · [Before (L20480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20480)

```diff
-         PM(OM, MM.hOM(), rM), MM.setVerticesData(iM, OM)
+         FU(cU, UU.yyU(), XU), UU.setVerticesData(zU, cU)
```

#### 2724. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20486` → after: `L20584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20584) · [Before (L20486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20486)

```diff
-       return !!(null !== (rM = MM.metadata) && void 0 !== rM && null !== (iM = rM.dD) && void 0 !== iM && null !== (OM = iM.extras) && void 0 !== OM && OM.bloxdProcessed || null !== (SM = MM.parent) && void 0 !== SM && null !== (jM = SM.metadata) && void 0 !== jM && null !== (aM  … [truncated]
+       return !!(null !== (XU = UU.metadata) && void 0 !== XU && null !== (zU = XU.oq) && void 0 !== zU && null !== (cU = zU.extras) && void 0 !== cU && cU.bloxdProcessed || null !== (yU = UU.parent) && void 0 !== yU && null !== (QU = yU.metadata) && void 0 !== QU && null !== (AU  … [truncated]
```

#### 2725. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20502` → after: `L20600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20600) · [Before (L20502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20502)

```diff
-         MM.UL.set(rM, rM, rM), MM.bakeCurrentTransformIntoVertices(!1)
+         UU.RY.set(XU, XU, XU), UU.bakeCurrentTransformIntoVertices(!1)
```

#### 2726. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20508` → after: `L20606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20606) · [Before (L20508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20508)

```diff
-       return (0, SM.x)(`v${JM}|${JSON.stringify(MM)}|${rM}`)
+       return (0, yU.v)(`v${aU}|${JSON.stringify(UU)}|${XU}`)
```

#### 2727. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20529` → after: `L20627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20627) · [Before (L20529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20529)

```diff
-         }(MM)) || void 0 === iM || null === (OM = iM.extras) || void 0 === OM ? void 0 : OM.bloxdBuildHash) && void 0 !== rM ? rM : null
+         }(UU)) || void 0 === zU || null === (cU = zU.extras) || void 0 === cU ? void 0 : cU.bloxdBuildHash) && void 0 !== XU ? XU : null
```

#### 2728. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20542-L20543` → after: `L20640-L20641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20640-L20641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20640-L20641) · [Before (L20542-L20543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20542-L20543)

```diff
-         iM = OM.sh.One(),
-         SM = new OM.sh;
+         zU = cU.Sp.One(),
+         yU = new cU.Sp;
```

#### 2729. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20550` → after: `L20648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20648) · [Before (L20550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20550)

```diff
-         const MM = OM.Matrix.Compose(iM, OM.Quaternion.RotationYawPitchRoll(mM, HM, 0), new OM.sh(QM, zM, LM)),
+         const UU = cU.Matrix.Compose(zU, cU.Quaternion.RotationYawPitchRoll(NU, IU, 0), new cU.Sp(DU, EU, YU)),
```

#### 2730. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20552` → after: `L20650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20650) · [Before (L20552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20552)

```diff
-         for (let iM = 0; iM < jM.length; iM += 3) OM.sh.TransformCoordinatesFromFloatsToRef(jM[iM], jM[iM + 1], jM[iM + 2], MM, SM), rM.positions.push(SM.x, SM.y, SM.z), OM.sh.TransformNormalFromFloatsToRef(aM[iM], aM[iM + 1], aM[iM + 2], MM, SM), rM.normals.push(SM.x, SM.y, SM.z … [truncated]
+         for (let zU = 0; zU < QU.length; zU += 3) cU.Sp.TransformCoordinatesFromFloatsToRef(QU[zU], QU[zU + 1], QU[zU + 2], UU, yU), XU.positions.push(yU.x, yU.y, yU.z), cU.Sp.TransformNormalFromFloatsToRef(AU[zU], AU[zU + 1], AU[zU + 2], UU, yU), XU.normals.push(yU.x, yU.y, yU.z … [truncated]
```

#### 2731. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20559` → after: `L20657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20657) · [Before (L20559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20559)

```diff
-   39020: (MM, rM, iM) => {
+   38795: (UU, XU, zU) => {
```

#### 2732. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20563-L20564` → after: `L20662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20662) · [Before (L20563-L20564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20563-L20564)

```diff
-       j: () => or,
-       l: () => Vr
+       k: () => TX
```

#### 2733. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20566-L20569` → after: `L20664-L20667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20664-L20667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20664-L20667) · [Before (L20566-L20569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20566-L20569)

```diff
-     var OM = iM(37975),
-       SM = iM(4069),
-       jM = iM(38764),
-       aM = iM(39027),
+     var cU = zU(37756),
+       yU = zU(4063),
+       QU = zU(38534),
+       AU = zU(38801),
```

#### 2734. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20571-L20589` → after: `L20669-L20687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20669-L20687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20669-L20687) · [Before (L20571-L20589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20571-L20589)

```diff
-       nM = iM(9816),
-       QM = iM(38991),
-       zM = iM(22),
-       LM = iM(143),
-       mM = iM(3563),
-       HM = iM(38771),
-       hM = iM(3571),
-       JM = iM(19),
-       dM = iM(3063),
-       yM = iM(4129),
-       lM = iM(38852),
-       EM = iM(38205),
-       UM = iM(38253),
-       GM = iM(38034),
-       CM = iM(38233),
-       eM = iM(38158),
- ... (3 more removed lines; see GitHub link above)
+       oU = zU(9782),
+       DU = zU(38760),
+       EU = zU(31),
+       YU = zU(173),
+       NU = zU(3519),
+       IU = zU(38537),
+       pU = zU(3526),
+       aU = zU(27),
+       tU = zU(3043),
+       gU = zU(4139),
+       kU = zU(38624),
+       GU = zU(37968),
+       BU = zU(38019),
+       ZU = zU(37814),
+       RU = zU(38004),
+       PU = zU(37915),
+ ... (3 more added lines; see GitHub link above)
```

#### 2735. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20593-L20594` → after: `L20691-L20692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20691-L20692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20691-L20692) · [Before (L20593-L20594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20593-L20594)

```diff
-       (0, tM.d)(MM);
-       const iM = mM.e.getTexture(rM, hM.f.BLOCK).url,
+       (0, LU.c)(UU);
+       const zU = NU.c.getTexture(XU, pU.j.BLOCK).url,
```

#### 2736. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20597` → after: `L20695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20695) · [Before (L20597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20597)

```diff
-       const SM = (0, CM.u)(MM, {
+       const yU = (0, RU.s)(UU, {
```

#### 2737. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20601` → after: `L20699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20699) · [Before (L20601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20601)

```diff
-           samplingMode: CM.i.nearestNearestMipLinear,
+           samplingMode: RU.f.nearestNearestMipLinear,
```

#### 2738. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20603-L20604` → after: `L20701-L20702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20701-L20702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20701-L20702) · [Before (L20603-L20604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20603-L20604)

```diff
-             wrapU: CM.b.clamp,
-             wrapV: CM.b.clamp,
+             wrapU: RU.c.clamp,
+             wrapV: RU.c.clamp,
```

#### 2739. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20610-L20612` → after: `L20708-L20710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20708-L20710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20708-L20710) · [Before (L20610-L20612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20610-L20612)

```diff
-         } = (0, EM.d)({
-           name: `${rM}BlockModelMeshMat`,
-           YJ: MM,
+         } = (0, GU.b)({
+           name: `${XU}BlockModelMeshMat`,
+           sa: UU,
```

#### 2740. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20615` → after: `L20713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20713) · [Before (L20615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20615)

```diff
-             transparencyMode: eM.c.MATERIAL_ALPHATEST,
+             transparencyMode: PU.d.MATERIAL_ALPHATEST,
```

#### 2741. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20635` → after: `L20733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20733) · [Before (L20635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20635)

```diff
-       return (0, bM.l)((0, dM.f)().CL, MM, (0, wM.g)({
+       return (0, WU.m)((0, tU.e)().WY, UU, (0, dU.g)({
```

#### 2742. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20650-L20651` → after: `L20748-L20749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20748-L20749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20748-L20749) · [Before (L20650-L20651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20650-L20651)

```diff
-         const iM = pM(`${rM}CstmPlnMdl1`);
-         iM.AJ = !1, iM.rotation.set(...PM.rotation), iM.bakeCurrentTransformIntoVertices();
+         const zU = qU(`${XU}CstmPlnMdl1`);
+         zU.ma = !1, zU.rotation.set(...FU.rotation), zU.bakeCurrentTransformIntoVertices();
```

#### 2743. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20655-L20656` → after: `L20753-L20754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20753-L20754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20753-L20754) · [Before (L20655-L20656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20655-L20656)

```diff
-       const aM = (0, bM.i)(SM, jM.size > 1, !1);
-       return aM.AJ = !1, aM
+       const AU = (0, WU.k)(yU, QU.size > 1, !1);
+       return AU.ma = !1, AU
```

#### 2744. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20687` → after: `L20785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20785) · [Before (L20687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20687)

```diff
-     const kM = new GM.sh(.5, .5, .5);
+     const uU = new ZU.Sp(.5, .5, .5);
```

#### 2745. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20691` → after: `L20789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20789) · [Before (L20691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20691)

```diff
-           const iM = GM.Matrix.Compose(GM.sh.One(), GM.Quaternion.RotationYawPitchRoll(MM.rotation[1], MM.rotation[0], MM.rotation[2]), GM.sh.FromArray(MM.position)),
+           const zU = ZU.Matrix.Compose(ZU.Sp.One(), ZU.Quaternion.RotationYawPitchRoll(UU.rotation[1], UU.rotation[0], UU.rotation[2]), ZU.Sp.FromArray(UU.position)),
```

#### 2746. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20695` → after: `L20793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20793) · [Before (L20695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20695)

```diff
-               UL: jM
+               RY: QU
```

#### 2747. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20700-L20702` → after: `L20798-L20800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20798-L20800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20798-L20800) · [Before (L20700-L20702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20700-L20702)

```diff
-         SM = GM.sh.TransformCoordinates(GM.sh.Zero(), OM),
-         jM = GM.sh.TransformNormal(new GM.sh(1, 0, 0), OM),
-         aM = GM.sh.TransformNormal(new GM.sh(0, 1, 0), OM),
+         yU = ZU.Sp.TransformCoordinates(ZU.Sp.Zero(), cU),
+         QU = ZU.Sp.TransformNormal(new ZU.Sp(1, 0, 0), cU),
+         AU = ZU.Sp.TransformNormal(new ZU.Sp(0, 1, 0), cU),
```

#### 2748. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20708` → after: `L20806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20806) · [Before (L20708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20708)

```diff
-         texture: mM.e.getTexture(rM, hM.f.BLOCK).url
+         texture: NU.c.getTexture(XU, pU.j.BLOCK).url
```

#### 2749. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20718` → after: `L20816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20816) · [Before (L20718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20718)

```diff
-           return sM("CentreCross" === iM ? RM : MM.customPlanesInfo).map((MM => {
+           return SU("CentreCross" === zU ? wU : UU.customPlanesInfo).map((UU => {
```

#### 2750. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20750` → after: `L20848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20848) · [Before (L20750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20750)

```diff
-       (0, tM.d)(MM);
+       (0, LU.c)(UU);
```

#### 2751. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20760` → after: `L20858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20858) · [Before (L20760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20760)

```diff
-       return xM(MM, rM, YM(MM, rM.name, jM.e), iM)
+       return sU(UU, XU, MU(UU, XU.name, QU.d), zU)
```

#### 2752. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20764` → after: `L20862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20862) · [Before (L20764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20764)

```diff
-       const SM = HM.d.getBlockAtlasMaterialForPlacement(MM, !!rM.transTex, !!rM.unlitStandaloneMesh),
+       const yU = IU.b.getBlockAtlasMaterialForPlacement(UU, !!XU.transTex, !!XU.unlitStandaloneMesh),
```

#### 2753. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20770-L20779` → after: `L20868-L20877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20868-L20877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20868-L20877) · [Before (L20770-L20779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20770-L20779)

```diff
-       return jM.kR(!0), jM
-     }
-     var vM = iM(9863),
-       FM = iM(1229),
-       BM = iM(39033),
-       XM = iM(38925),
-       IM = iM(9866),
-       KM = iM(4843),
-       qM = iM(38869),
-       TM = iM(38149);
+       return QU.YC(!0), QU
+     }
+     var nU = zU(9834),
+       mU = zU(1236),
+       lU = zU(38803),
+       xU = zU(38691),
+       JU = zU(9836),
+       jU = zU(4895),
+       KU = zU(38642),
+       bU = zU(37908);
```

#### 2754. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20783` → after: `L20881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20881) · [Before (L20783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20783)

```diff
-         XS: iM,
+         my: zU,
```

#### 2755. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20795` → after: `L20893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20893) · [Before (L20795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20795)

```diff
-           XS: iM[1],
+           my: zU[1],
```

#### 2756. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20800-L20801` → after: `L20898-L20899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20898-L20899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20898-L20899) · [Before (L20800-L20801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20800-L20801)

```diff
-       }(rM((0, IM.n)(MM.postPiece, null))), aM = GM.Matrix.Translation(-SM, -iM, -jM).multiply(GM.Matrix.Scaling(1 / OM, 1 / OM, 1 / OM)).multiply(GM.Matrix.Translation(0, -.5, 0)), PM = (MM, iM) => {
-         const OM = OM => (0, qM.l)((0, qM.d)(rM((0, IM.n)(MM, OM))), iM.m);
+       }(XU((0, JU.m)(UU.postPiece, null))), AU = ZU.Matrix.Translation(-yU, -zU, -QU).multiply(ZU.Matrix.Scaling(1 / cU, 1 / cU, 1 / cU)).multiply(ZU.Matrix.Translation(0, -.5, 0)), FU = (UU, zU) => {
+         const cU = cU => (0, KU.i)((0, KU.c)(XU((0, JU.m)(UU, cU))), zU.m);
```

#### 2757. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20804` → after: `L20902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20902) · [Before (L20804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20804)

```diff
-           arms: IM.q.map(((MM, rM) => OM(rM)))
+           arms: JU.s.map(((UU, XU) => cU(XU)))
```

#### 2758. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20812` → after: `L20910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20910) · [Before (L20812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20812)

```diff
-           arms: nM.arms.map(((MM, rM) => (0, qM.h)([
+           arms: oU.arms.map(((UU, XU) => (0, KU.f)([
```

#### 2759. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20826` → after: `L20924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20924) · [Before (L20826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20826)

```diff
-       return (0, qM.h)([iM, ...SM].map((MM => [MM, null])))
+       return (0, KU.f)([zU, ...yU].map((UU => [UU, null])))
```

#### 2760. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20838-L20839` → after: `L20936-L20937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20936-L20937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20936-L20937) · [Before (L20838-L20839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20838-L20839)

```diff
-       if (!OM) throw new Error(`"${iM}" has no node named "${rM}"`);
-       if (!OM.length) throw new Error(`"${iM}" node "${rM}" has no mesh`);
+       if (!cU) throw new Error(`"${zU}" has no node named "${XU}"`);
+       if (!cU.length) throw new Error(`"${zU}" node "${XU}" has no mesh`);
```

#### 2761. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20841-L20842` → after: `L20939-L20940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20939-L20940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20939-L20940) · [Before (L20841-L20842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20841-L20842)

```diff
-         const iM = (0, TM.r)(MM, rM);
-         return (0, qM.l)(iM, MM.worldMatrix(rM, !1)),
+         const zU = (0, bU.s)(UU, XU);
+         return (0, KU.i)(zU, UU.worldMatrix(XU, !1)),
```

#### 2762. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20856` → after: `L20954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20954) · [Before (L20856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20856)

```diff
-       return (0, qM.h)(SM)
+       return (0, KU.f)(yU)
```

#### 2763. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20858` → after: `L20956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20956) · [Before (L20858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20858)

```diff
-     var ir = iM(38834);
+     var zX = zU(38601);
```

#### 2764. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20860` → after: `L20958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20958) · [Before (L20860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20860)

```diff
-         fence: IM.r
+         fence: JU.t
```

#### 2765. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20866-L20867` → after: `L20964-L20965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20964-L20965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20964-L20965) · [Before (L20866-L20867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20866-L20867)

```diff
-       const OM = mM.e.getModel(rM, hM.d.BLOCK).url,
-         SM = await (0, UM.j)("", MM, OM, (() => mM.e.getModelOverride(rM) ? {
+       const cU = NU.c.getModel(XU, pU.f.BLOCK).url,
+         yU = await (0, BU.j)("", UU, cU, (() => NU.c.getModelOverride(XU) ? {
```

#### 2766. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20870` → after: `L20968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20968) · [Before (L20870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20870)

```diff
-             rootUrl: mM.e.getModel(rM, hM.d.BLOCK, !0).url
+             rootUrl: NU.c.getModel(XU, pU.f.BLOCK, !0).url
```

#### 2767. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20877` → after: `L20975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20975) · [Before (L20877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20877)

```diff
-       return rM ? iM & IM.g ? MM.stackedPost : MM.post : MM.top
+       return XU ? zU & JU.j ? UU.stackedPost : UU.post : UU.top
```

#### 2768. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20882` → after: `L20980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20980) · [Before (L20882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20882)

```diff
-       const jM = nM.D[(0, KM.j)(rM.textureInfo)];
+       const QU = oU.x[(0, jU.i)(XU.textureInfo)];
```

#### 2769. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20888` → after: `L20986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20986) · [Before (L20888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20888)

```diff
-         for (let SM = 1; SM < iM.length; SM += 2) iM[SM] = (0, ir.c)(rM, iM[SM], OM)
+         for (let yU = 1; yU < zU.length; yU += 2) zU[yU] = (0, zX.e)(XU, zU[yU], cU)
```

#### 2770. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20894` → after: `L20992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20992) · [Before (L20894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20894)

```diff
-         } = null !== (SM = OM.named) && void 0 !== SM ? SM : {},
+         } = null !== (yU = cU.named) && void 0 !== yU ? yU : {},
```

#### 2771. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20896` → after: `L20994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20994) · [Before (L20896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20896)

```diff
-         LM = (0, bM.l)((0, dM.f)().CL, iM, {
+         YU = (0, WU.m)((0, tU.e)().WY, zU, {
```

#### 2772. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20901` → after: `L20999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R20999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L20999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L20999) · [Before (L20901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20901)

```diff
-             color: (0, TM.n)(aM, TM.b, PM)
+             color: (0, bU.q)(AU, bU.e, FU)
```

#### 2773. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20904` → after: `L21002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21002) · [Before (L20904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20904)

```diff
-       return LM.material = HM.d.getBlockAtlasMaterialForPlacement(MM, !!rM.transTex, !!rM.unlitStandaloneMesh), LM.AJ = !1, LM
+       return YU.material = IU.b.getBlockAtlasMaterialForPlacement(UU, !!XU.transTex, !!XU.unlitStandaloneMesh), YU.ma = !1, YU
```

#### 2774. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20908` → after: `L21006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21006) · [Before (L20908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20908)

```diff
-       if (!iM) throw new Error(`"${rM.name}" has no connecting model GLB for model "${rM.model}"`);
+       if (!zU) throw new Error(`"${XU.name}" has no connecting model GLB for model "${XU.model}"`);
```

#### 2775. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20913-L20914` → after: `L21011-L21012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21011-L21012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21011-L21012) · [Before (L20913-L20914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20913-L20914)

```diff
-       }(MM, iM), SM = void 0 !== rM.attachedTop, jM = SM ? [...IM.f, ...IM.f.map((MM => MM | IM.g))] : IM.f, aM = new Map;
-       for (const PM of jM) aM.set(PM, (() => Qr(MM, rM, `${rM.name}|${PM}ConnectingModel`, cM(nr(OM, SM, PM), PM))));
+       }(UU, zU), yU = void 0 !== XU.attachedTop, QU = yU ? [...JU.h, ...JU.h.map((UU => UU | JU.j))] : JU.h, AU = new Map;
+       for (const FU of QU) AU.set(FU, (() => DX(UU, XU, `${XU.name}|${FU}ConnectingModel`, hU(oX(cU, yU, FU), FU))));
```

#### 2776. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20920` → after: `L21018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21018) · [Before (L20920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20920)

```diff
-       if (!iM) throw new Error(`"${MM}" variants registered before its connecting meshes were built`);
+       if (!zU) throw new Error(`"${UU}" variants registered before its connecting meshes were built`);
```

#### 2777. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20923` → after: `L21021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21021) · [Before (L20923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20923)

```diff
-     var mr = iM(9868);
+     var NX = zU(9845);
```

#### 2778. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20941` → after: `L21039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21039) · [Before (L20941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20941)

```diff
-       const [rM, iM] = mr.o.bottom.map(MM), {
+       const [XU, zU] = NX.l.bottom.map(UU), {
```

#### 2779. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20947-L20948` → after: `L21045-L21046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21045-L21046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21045-L21046) · [Before (L20947-L20948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20947-L20948)

```diff
-           left: (0, qM.l)((0, qM.d)(iM), rM.m),
-           right: (0, qM.l)((0, qM.d)(OM), rM.m)
+           left: (0, KU.i)((0, KU.c)(zU), XU.m),
+           right: (0, KU.i)((0, KU.c)(cU), XU.m)
```

#### 2780. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20950` → after: `L21048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21048) · [Before (L20950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20950)

```diff
-       }, [nM, QM] = mr.o.top.map(MM);
+       }, [oU, DU] = NX.l.top.map(UU);
```

#### 2781. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20962` → after: `L21060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21060) · [Before (L20962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20962)

```diff
-       return (0, qM.l)((0, qM.d)(MM), aM.m)
+       return (0, KU.i)((0, KU.c)(UU), AU.m)
```

#### 2782. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20971` → after: `L21069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21069) · [Before (L20971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20971)

```diff
-         aM = (0, qM.h)([
+         AU = (0, KU.f)([
```

#### 2783. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20975` → after: `L21073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21073) · [Before (L20975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20975)

```diff
-       return (0, qM.l)(aM, GM.Matrix.RotationY((rM - 1) * Math.PI / 2).m)
+       return (0, KU.i)(AU, ZU.Matrix.RotationY((XU - 1) * Math.PI / 2).m)
```

#### 2784. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20982` → after: `L21080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21080) · [Before (L20982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20982)

```diff
-       return `${MM}|${rM}`
+       return `${UU}|${XU}`
```

#### 2785. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20987` → after: `L21085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21085) · [Before (L20987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20987)

```diff
-       if (!OM) throw new Error(`"${MM}" variants registered before its fence gate meshes were built`);
+       if (!cU) throw new Error(`"${UU}" variants registered before its fence gate meshes were built`);
```

#### 2786. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L20990` → after: `L21088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21088) · [Before (L20990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L20990)

```diff
-     var Cr = iM(38930);
+     var RX = zU(38700);
```

#### 2787. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21017-L21021` → after: `L21115-L21119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21115-L21119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21115-L21119) · [Before (L21017-L21021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21017-L21021)

```diff
-     var pr = iM(38217),
-       Wr = iM(38235),
-       sr = iM(39040),
-       Dr = iM(3693),
-       kr = iM(5041);
+     var qX = zU(37977),
+       OX = zU(38007),
+       SX = zU(38809),
+       rX = zU(3660),
+       uX = zU(5108);
```

#### 2788. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21025` → after: `L21123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21123) · [Before (L21025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21025)

```diff
-       return [MM.animTextures.length - 1, 1, null !== (rM = MM.animationInterval) && void 0 !== rM ? rM : 200]
+       return [UU.animTextures.length - 1, 1, null !== (XU = UU.animationInterval) && void 0 !== XU ? XU : 200]
```

#### 2789. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21029` → after: `L21127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21127) · [Before (L21029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21029)

```diff
-       (0, Dr.j)(function() {
+       (0, rX.k)(function() {
```

#### 2790. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21031` → after: `L21129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21129) · [Before (L21031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21031)

```diff
-         for (const rM of [nM.k, OM.p])
+         for (const XU of [oU.h, cU.t])
```

#### 2791. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21036-L21037` → after: `L21134-L21135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21134-L21135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21134-L21135) · [Before (L21036-L21037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21036-L21037)

```diff
-         return Array.from(MM, (MM => null !== MM && void 0 !== MM ? MM : ""))
-       }()), await (0, kr.t)("block textures");
+         return Array.from(UU, (UU => null !== UU && void 0 !== UU ? UU : ""))
+       }()), await (0, uX.n)("block textures");
```

#### 2792. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21044-L21045` → after: `L21142-L21143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21142-L21143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21142-L21143) · [Before (L21044-L21045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21044-L21045)

```diff
-         lM = iM(39046);
-       yM(new window.FontFace("Jetbrains Mono", `url(${lM})`).load().then((MM => {
+         kU = zU(38813);
+       gU(new window.FontFace("Jetbrains Mono", `url(${kU})`).load().then((UU => {
```

#### 2793. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21047` → after: `L21145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21145) · [Before (L21047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21047)

```diff
-       }))), MM.hU.IrM({
+       }))), UU.xG.uzU({
```

#### 2794. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21049-L21050` → after: `L21147-L21148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21147-L21148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21147-L21148) · [Before (L21049-L21050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21049-L21050)

```diff
-       }), (0, UM.k)(), await mM.e.requiredAssetsAreGenerated();
-       const GM = mM.e.getGenerationFailure();
+       }), (0, BU.m)(), await NU.c.requiredAssetsAreGenerated();
+       const ZU = NU.c.getGenerationFailure();
```

#### 2795. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21052-L21056` → after: `L21150-L21154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21150-L21154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21150-L21154) · [Before (L21052-L21056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21052-L21056)

```diff
-       await (0, kr.t)("items object"), (0, jM.u)(), await (0, kr.t)("pick helper"), dM.j.localPlayerPickActionHelper = new QM.b(MM, MM.eD), await (0, kr.t)("block atlas");
-       const eM = mM.e.getBlockAtlasArr(),
-         tM = mM.e.getBlockAtlasPixels(),
-         gM = mM.e.getBlockAtlasWidth(),
-         uM = nM.z.flatMap((MM => {
+       await (0, uX.n)("items object"), (0, QU.p)(), await (0, uX.n)("pick helper"), tU.f.localPlayerPickActionHelper = new DU.b(UU, UU.pM), await (0, uX.n)("block atlas");
+       const PU = NU.c.getBlockAtlasArr(),
+         LU = NU.c.getBlockAtlasPixels(),
+         eU = NU.c.getBlockAtlasWidth(),
+         CU = oU.u.flatMap((UU => {
```

#### 2796. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21065-L21066` → after: `L21163-L21164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21163-L21164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21163-L21164) · [Before (L21065-L21066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21065-L21066)

```diff
-       const RM = MM.CL.aJ();
-       HM.d.setUseWebGL2(RM);
+       const wU = UU.WY.Aa();
+       IU.b.setUseWebGL2(wU);
```

#### 2797. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21069-L21070` → after: `L21167-L21168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21167-L21168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21167-L21168) · [Before (L21069-L21070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21069-L21070)

```diff
-       JM.d.get("clientEscMenuOptions").disableTexAtlas && !MM.nh && (pM = !1, WM = "options");
-       let sM = mM.e.getImagesPerAtlas();
+       aU.e.get("clientEscMenuOptions").disableTexAtlas && !UU.Fp && (qU = !1, OU = "options");
+       let SU = NU.c.getImagesPerAtlas();
```

#### 2798. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21072` → after: `L21170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21170) · [Before (L21072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21072)

```diff
-         const MM = `imagesPerAtlas = ${sM}`;
+         const UU = `imagesPerAtlas = ${SU}`;
```

#### 2799. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21075-L21077` → after: `L21173-L21175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21173-L21175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21173-L21175) · [Before (L21075-L21077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21075-L21077)

```diff
-       const DM = MM.CL.engine.getCaps().texture2DArrayMaxLayerCount;
-       pM && RM && DM < sM[0] && (pM = !1, WM = `maxLayerCount = ${DM}, layerCount = ${sM[0]}`);
-       const kM = MM.CL.engine.getCaps().maxTextureSize,
+       const rU = UU.WY.engine.getCaps().texture2DArrayMaxLayerCount;
+       qU && wU && rU < SU[0] && (qU = !1, OU = `maxLayerCount = ${rU}, layerCount = ${SU[0]}`);
+       const uU = UU.WY.engine.getCaps().maxTextureSize,
```

#### 2800. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21079-L21080` → after: `L21177-L21178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21177-L21178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21177-L21178) · [Before (L21079-L21080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21079-L21080)

```diff
-       pM && kM < ZM && (pM = !1, WM = `maxTextureSize = ${kM}, textureSize = ${ZM}`), console.log("Graphics backend", null !== (rM = null === (SM = MM.CL.MJ) || void 0 === SM ? void 0 : SM.backendName) && void 0 !== rM ? rM : `webgl${MM.CL.engine.PJ}`, "useTexAtlas", pM, "reason" … [truncated]
-       const oM = Math.floor(Object.keys((0, FM.Z)(nM.k)).length / 50);
+       qU && uU < fU && (qU = !1, OU = `maxTextureSize = ${uU}, textureSize = ${fU}`), console.log("Graphics backend", null !== (XU = null === (yU = UU.WY.Ua) || void 0 === yU ? void 0 : yU.backendName) && void 0 !== XU ? XU : `webgl${UU.WY.engine.Fa}`, "useTexAtlas", qU, "reason" … [truncated]
+       const iU = Math.floor(Object.keys((0, mU.P)(oU.h)).length / 50);
```

#### 2801. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21082-L21083` → after: `L21180-L21181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21180-L21181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21180-L21181) · [Before (L21082-L21083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21082-L21083)

```diff
-         YM += 1, YM % 50 === 0 && (zM.i.Tz("matchmakeAndPlayStepCompleted", {
-           step: LM.n.REGISTRATION,
+         MU += 1, MU % 50 === 0 && (EU.k.UY("matchmakeAndPlayStepCompleted", {
+           step: YU.m.REGISTRATION,
```

#### 2802. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21087` → after: `L21185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21185) · [Before (L21087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21087)

```diff
-         }))), await (0, kr.t)(`block ${MM}`)
+         }))), await (0, uX.n)(`block ${UU}`)
```

#### 2803. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21090-L21091` → after: `L21188-L21189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21188-L21189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21188-L21189) · [Before (L21090-L21091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21090-L21091)

```diff
-       for (const iM in (0, FM.Z)(nM.k)) {
-         const rM = nM.k[iM],
+       for (const zU in (0, mU.P)(oU.h)) {
+         const XU = oU.h[zU],
```

#### 2804. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21095` → after: `L21193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21193) · [Before (L21095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21095)

```diff
-           if (Ir(nM.k[MM], rM)) {
+           if (JX(oU.h[UU], XU)) {
```

#### 2805. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21101` → after: `L21199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21199) · [Before (L21101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21101)

```diff
-           await (0, kr.t)(`block ${iM} model`);
+           await (0, uX.n)(`block ${zU} model`);
```

#### 2806. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21104` → after: `L21202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21202) · [Before (L21104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21104)

```diff
-               B3: await Br(rM.model).getMesh(MM.CL.Hk(), rM),
+               B5: await lX(XU.model).getMesh(UU.WY.nS(), XU),
```

#### 2807. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21107-L21113` → after: `L21205-L21211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21205-L21211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21205-L21211) · [Before (L21107-L21113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21107-L21113)

```diff
-               Hd: rM.Hd,
-               pG: Kr(iM),
-               Ch: null !== (SM = rM.Ch) && void 0 !== SM ? SM : null,
-               hd: null !== (jM = rM.hd) && void 0 !== jM ? jM : null,
-               eh: rM.eh,
-               Lk: Rr(iM, rM.model),
-               cV: () => Tr(rM, rM)
+               Ft: XU.Ft,
+               sZ: jX(zU),
+               Pp: null !== (yU = XU.Pp) && void 0 !== yU ? yU : null,
+               ot: null !== (QU = XU.ot) && void 0 !== QU ? QU : null,
+               Wp: XU.Wp,
+               qS: wX(zU, XU.model),
+               f4: () => bX(XU, XU)
```

#### 2808. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21115` → after: `L21213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21213) · [Before (L21115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21115)

```diff
-             MM.nL.jF(rM.id, aM), null !== rM.meta.metaStr && await fr(MM, iM, aM), await fM(iM)
+             UU.EY.vx(XU.id, AU), null !== XU.meta.metaStr && await HX(UU, zU, AU), await HU(zU)
```

#### 2809. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21121-L21122` → after: `L21219-L21220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21219-L21220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21219-L21220) · [Before (L21121-L21122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21121-L21122)

```diff
-             if ("number" === typeof rM.textureInfo[0]) rM.textureInfo.length > 3 && (SM = !0), MM.nL.I3(iM, {
-               E1: [],
+             if ("number" === typeof XU.textureInfo[0]) XU.textureInfo.length > 3 && (yU = !0), UU.EY.i5(zU, {
+               K4: [],
```

#### 2810. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21124` → after: `L21222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21222) · [Before (L21124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21124)

```diff
-               U1: SM
+               R7: yU
```

#### 2811. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21131-L21138` → after: `L21229-L21236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21229-L21236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21229-L21236) · [Before (L21131-L21138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21131-L21138)

```diff
-                 const PM = `${iM}${aM}`;
-                 if (pM && void 0 !== rM.atlasIdx[aM]) MM.nL.I3(PM, {
-                   E1: eM,
-                   Z2: tM,
-                   U3: gM,
-                   Q0: rM.atlasIdx[aM],
-                   U1: SM,
-                   Jd: uM
+                 const FU = `${zU}${AU}`;
+                 if (qU && void 0 !== XU.atlasIdx[AU]) UU.EY.i5(FU, {
+                   K4: PU,
+                   o5: LU,
+                   Y5: eU,
+                   y5: XU.atlasIdx[AU],
+                   R7: yU,
+                   Dt: CU
```

#### 2812. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21143-L21144` → after: `L21241-L21242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21241-L21242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21241-L21242) · [Before (L21143-L21144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21143-L21144)

```diff
-                       E1: [mM.e.getTexture("string" === typeof rM ? rM : PM, hM.f.BLOCK).url],
-                       U1: SM
+                       K4: [NU.c.getTexture("string" === typeof XU ? XU : FU, pU.j.BLOCK).url],
+                       R7: yU
```

#### 2813. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21146` → after: `L21244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21244) · [Before (L21146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21146)

```diff
-                   ("string" === typeof rM ? 0 : rM.animTextures.length) > 0 && (iM.Jd = Zr(rM)), MM.nL.I3(PM, iM)
+                   ("string" === typeof XU ? 0 : XU.animTextures.length) > 0 && (zU.Dt = fX(XU)), UU.EY.i5(FU, zU)
```

#### 2814. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21152` → after: `L21250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21250) · [Before (L21152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21152)

```diff
-                   const rM = `${iM}${MM}`;
+                   const XU = `${zU}${UU}`;
```

#### 2815. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21158-L21161` → after: `L21256-L21259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21256-L21259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21256-L21259) · [Before (L21158-L21161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21158-L21161)

```diff
-             if (SM ||= rM.transTex, SM ||= (null === (vM = rM.textureInfo.colour) || void 0 === vM ? void 0 : vM.length) > 3, pM && void 0 !== rM.atlasIdx) MM.nL.I3(iM, {
-               E1: eM,
-               Z2: tM,
-               U3: gM,
+             if (yU ||= XU.transTex, yU ||= (null === (nU = XU.textureInfo.colour) || void 0 === nU ? void 0 : nU.length) > 3, qU && void 0 !== XU.atlasIdx) UU.EY.i5(zU, {
+               K4: PU,
+               o5: LU,
+               Y5: eU,
```

#### 2816. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21163-L21166` → after: `L21261-L21264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21261-L21264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21261-L21264) · [Before (L21163-L21166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21163-L21166)

```diff
-               K3: !1,
-               Q0: rM.atlasIdx[0],
-               U1: SM,
-               Jd: uM
+               Z8: !1,
+               y5: XU.atlasIdx[0],
+               R7: yU,
+               Dt: CU
```

#### 2817. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21169-L21171` → after: `L21267-L21269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21267-L21269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21267-L21269) · [Before (L21169-L21171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21169-L21171)

```diff
-               const OM = mM.e.getTexture(iM, hM.f.BLOCK).url;
-               MM.nL.I3(iM, {
-                 E1: [OM],
+               const cU = NU.c.getTexture(zU, pU.j.BLOCK).url;
+               UU.EY.i5(zU, {
+                 K4: [cU],
```

#### 2818. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21173-L21175` → after: `L21271-L21273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21271-L21273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21271-L21273) · [Before (L21173-L21175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21173-L21175)

```diff
-                 K3: !1,
-                 U1: SM,
-                 Jd: Zr(rM.textureInfo)
+                 Z8: !1,
+                 R7: yU,
+                 Dt: fX(XU.textureInfo)
```

#### 2819. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21180-L21186` → after: `L21278-L21284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21278-L21284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21278-L21284) · [Before (L21180-L21186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21180-L21186)

```diff
-             MM.nL.I3(iM, {
-               E1: eM,
-               Z2: tM,
-               U3: gM,
-               Q0: OM,
-               U1: SM,
-               Jd: uM
+             UU.EY.i5(zU, {
+               K4: PU,
+               o5: LU,
+               Y5: eU,
+               y5: cU,
+               R7: yU,
+               Dt: CU
```

#### 2820. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21189-L21192` → after: `L21287-L21290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21287-L21290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21287-L21290) · [Before (L21189-L21192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21189-L21192)

```diff
-             const OM = mM.e.getTexture(rM.textureInfo, hM.f.BLOCK).url;
-             MM.nL.I3(iM, {
-               E1: [OM],
-               U1: SM
+             const cU = NU.c.getTexture(XU.textureInfo, pU.j.BLOCK).url;
+             UU.EY.i5(zU, {
+               K4: [cU],
+               R7: yU
```

#### 2821. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21195-L21199` → after: `L21293-L21297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21293-L21297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21293-L21297) · [Before (L21195-L21199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21195-L21199)

```diff
-           MM.nL.jF(rM.id, {
-             material: void 0 === OM ? iM : OM,
-             CH: rM.CH,
-             solid: null !== (NM = rM.solid) && void 0 !== NM ? NM : !rM.CH,
-             Hd: rM.Hd,
+           UU.EY.vx(XU.id, {
+             material: void 0 === cU ? zU : cU,
+             BI: XU.BI,
+             solid: null !== (vU = XU.solid) && void 0 !== vU ? vU : !XU.BI,
+             Ft: XU.Ft,
```

#### 2822. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21201-L21204` → after: `L21299-L21302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21299-L21302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21299-L21302) · [Before (L21201-L21204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21201-L21204)

```diff
-             Ch: null !== (AM = rM.Ch) && void 0 !== AM ? AM : null,
-             hd: null !== (xM = rM.hd) && void 0 !== xM ? xM : null,
-             eh: rM.eh,
-             Lk: Rr(iM, rM.model)
+             Pp: null !== (VU = XU.Pp) && void 0 !== VU ? VU : null,
+             ot: null !== (sU = XU.ot) && void 0 !== sU ? sU : null,
+             Wp: XU.Wp,
+             qS: wX(zU, XU.model)
```

#### 2823. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21206` → after: `L21304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21304) · [Before (L21206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21206)

```diff
-         }(0, jM.G)(iM, rM.id, MM.CL.Hk(), void 0)
+         }(0, QU.t)(zU, XU.id, UU.WY.nS(), void 0)
```

#### 2824. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21208` → after: `L21306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21306) · [Before (L21208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21208)

```diff
-       for (const iM in OM.p) {
+       for (const zU in cU.t) {
```

#### 2825. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21210-L21211` → after: `L21308-L21309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21308-L21309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21308-L21309) · [Before (L21210-L21211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21210-L21211)

```diff
-         const rM = OM.p[iM];
-         await (0, kr.t)(`item ${iM}`), (0, jM.G)(iM, rM.id, MM.CL.Hk(), rM.type)
+         const XU = cU.t[zU];
+         await (0, uX.n)(`item ${zU}`), (0, QU.t)(zU, XU.id, UU.WY.nS(), XU.type)
```

#### 2826. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21213` → after: `L21311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21311) · [Before (L21213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21213)

```diff
-       return await (0, kr.t)("block overlays"),
+       return await (0, uX.n)("block overlays"),
```

#### 2827. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21215` → after: `L21313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21313) · [Before (L21215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21215)

```diff
-           const rM = MM.CL.Hk();
+           const XU = UU.WY.nS();
```

#### 2828. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21218` → after: `L21316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21316) · [Before (L21218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21218)

```diff
-             const SM = mM.e.getTexture(`destroy_stage_${OM}`, hM.f.BLOCK).url,
+             const yU = NU.c.getTexture(`destroy_stage_${cU}`, pU.j.BLOCK).url,
```

#### 2829. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21220-L21221` → after: `L21318-L21319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21318-L21319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21318-L21319) · [Before (L21220-L21221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21220-L21221)

```diff
-                 wrapU: CM.b.clamp,
-                 wrapV: CM.b.clamp,
+                 wrapU: RU.c.clamp,
+                 wrapV: RU.c.clamp,
```

#### 2830. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21224` → after: `L21322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21322) · [Before (L21224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21224)

```diff
-               aM = (0, CM.u)(rM, {
+               AU = (0, RU.s)(XU, {
```

#### 2831. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21228` → after: `L21326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21326) · [Before (L21228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21228)

```diff
-                 samplingMode: CM.i.nearestNearestMipLinear,
+                 samplingMode: RU.f.nearestNearestMipLinear,
```

#### 2832. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21237-L21239` → after: `L21335-L21337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21335-L21337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21335-L21337) · [Before (L21237-L21239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21237-L21239)

```diff
-               nM = (0, EM.d)({
-                 name: `breakingBoxTexture${OM}`,
-                 YJ: rM,
+               oU = (0, GU.b)({
+                 name: `breakingBoxTexture${cU}`,
+                 sa: XU,
```

#### 2833. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21243-L21244` → after: `L21341-L21342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21341-L21342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21341-L21342) · [Before (L21243-L21244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21243-L21244)

```diff
-             null === (iM = MM.CL.MJ) || void 0 === iM || iM.prepareTexture(aM);
-             const QM = (0, bM.l)(MM.CL, `breakingBox${OM}`, (0, wM.c)({
+             null === (zU = UU.WY.Ua) || void 0 === zU || zU.prepareTexture(AU);
+             const DU = (0, WU.m)(UU.WY, `breakingBox${cU}`, (0, dU.b)({
```

#### 2834. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21249` → after: `L21347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21347) · [Before (L21249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21249)

```diff
-             QM.material = nM, MM.CL.vJ(QM), QM.kR(!1), MM.CL.XPM.push(QM)
+             DU.material = oU, UU.WY.xa(DU), DU.YC(!1), UU.WY.CoU.push(DU)
```

#### 2835. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21254-L21258` → after: `L21352-L21356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21352-L21356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21352-L21356) · [Before (L21254-L21258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21254-L21258)

```diff
-             YJ: rM
-           } = MM.CL, iM = (0, wM.c)({
-             width: sr.g,
-             height: sr.g,
-             depth: sr.g
+             sa: XU
+           } = UU.WY, zU = (0, dU.b)({
+             width: SX.f,
+             height: SX.f,
+             depth: SX.f
```

#### 2836. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21260-L21261` → after: `L21358-L21359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21358-L21359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21358-L21359) · [Before (L21260-L21261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21260-L21261)

```diff
-           for (let mM = 0; mM < OM; mM++) SM[4 * mM + 3] = iM.positions[3 * mM + 2] < 0 ? Yr : sr.i;
-           const jM = (0, bM.l)(MM.CL, "highlight", {
+           for (let NU = 0; NU < cU; NU++) yU[4 * NU + 3] = zU.positions[3 * NU + 2] < 0 ? MX : SX.j;
+           const QU = (0, WU.m)(UU.WY, "highlight", {
```

#### 2837. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21268` → after: `L21366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21366) · [Before (L21268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21268)

```diff
-               ...Wr.e,
+               ...OX.b,
```

#### 2838. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21274` → after: `L21372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21372) · [Before (L21274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21274)

```diff
-           jM.material = (0, EM.d)({
+           QU.material = (0, GU.b)({
```

#### 2839. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21276` → after: `L21374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21374) · [Before (L21276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21276)

```diff
-             YJ: rM,
+             sa: XU,
```

#### 2840. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21280` → after: `L21378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21378) · [Before (L21280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21280)

```diff
-           const PM = (0, EM.d)({
+           const FU = (0, GU.b)({
```

#### 2841. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21282` → after: `L21380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21380) · [Before (L21282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21282)

```diff
-               YJ: rM,
+               sa: XU,
```

#### 2842. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21288` → after: `L21386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21386) · [Before (L21288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21288)

```diff
-               const aM = (0, bM.l)(MM.CL, rM, (0, wM.g)({
+               const AU = (0, WU.m)(UU.WY, XU, (0, dU.g)({
```

#### 2843. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21295-L21298` → after: `L21393-L21396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21393-L21396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21393-L21396) · [Before (L21295-L21298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21295-L21298)

```diff
-           for (const mM of LM) mM.material = PM, mM.parent = jM, mM.AJ = !1, MM.CL.vJ(mM);
-           jM.AJ = !1, jM.Wh = !0, jM.kh = !0, MM.CL.vJ(jM), jM.metadata.jnM = () => {
-             (0, BM.f)(MM, LM, jM.UL.x, jM.UL.y, sr.k, sr.m)
-           }, jM.kR(!1), MM.CL.FPM = jM
+           for (const NU of YU) NU.material = FU, NU.parent = QU, NU.ma = !1, UU.WY.xa(NU);
+           QU.ma = !1, QU.Op = !0, QU.ip = !0, UU.WY.xa(QU), QU.metadata.VoU = () => {
+             (0, lU.i)(UU, YU, QU.RY.x, QU.RY.y, SX.m, SX.r)
+           }, QU.YC(!1), UU.WY.eoU = QU
```

#### 2844. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21302-L21303` → after: `L21400-L21401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21400-L21401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21400-L21401) · [Before (L21302-L21303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21302-L21303)

```diff
-             YJ: rM
-           } = MM.CL, iM = (0, bM.l)(MM.CL, "floating", (0, wM.g)({
+             sa: XU
+           } = UU.WY, zU = (0, WU.m)(UU.WY, "floating", (0, dU.g)({
```

#### 2845. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21307` → after: `L21405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21405) · [Before (L21307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21307)

```diff
-             ...Wr.e,
+             ...OX.b,
```

#### 2846. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21312` → after: `L21410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21410) · [Before (L21312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21312)

```diff
-           iM.material = (0, EM.d)({
+           zU.material = (0, GU.b)({
```

#### 2847. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21314` → after: `L21412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21412) · [Before (L21314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21314)

```diff
-             YJ: rM,
+             sa: XU,
```

#### 2848. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21317-L21318` → after: `L21415-L21416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21415-L21416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21415-L21416) · [Before (L21317-L21318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21317-L21318)

```diff
-           }).mirror, iM.rotation.set(-Math.PI / 2, 0, 0), iM.Wh = !0, iM.kh = !0, MM.CL.vJ(iM), iM.AJ = !1, iM.kR(!1), MM.CL.DiM = iM
-         }(MM), zM.i.Tz("loadingScreenState", "loadingPage:loadingAssets"), await Promise.all(aM), {
+           }).mirror, zU.rotation.set(-Math.PI / 2, 0, 0), zU.Op = !0, zU.ip = !0, UU.WY.xa(zU), zU.ma = !1, zU.YC(!1), UU.WY.ZcU = zU
+         }(UU), EU.k.UY("loadingScreenState", "loadingPage:loadingAssets"), await Promise.all(AU), {
```

#### 2849. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21325` → after: `L21423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21423) · [Before (L21325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21325)

```diff
-       const SM = nM.w[rM];
+       const yU = oU.r[XU];
```

#### 2850. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21327` → after: `L21425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21425) · [Before (L21327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21327)

```diff
-       const aM = nM.k[rM],
+       const AU = oU.h[XU],
```

#### 2851. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21333` → after: `L21431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21431) · [Before (L21333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21333)

```diff
-         const OM = nM.k[EM];
+         const cU = oU.h[GU];
```

#### 2852. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21336` → after: `L21434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21434) · [Before (L21336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21336)

```diff
-           await (0, kr.t)(`block ${EM}`);
+           await (0, uX.n)(`block ${GU}`);
```

#### 2853. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21338` → after: `L21436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21436) · [Before (L21338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21338)

```diff
-           let nM = iM.B3;
+           let oU = zU.B5;
```

#### 2854. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21344-L21345` → after: `L21442-L21443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21442-L21443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21442-L21443) · [Before (L21344-L21345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21344-L21345)

```diff
-             } = OM.meta, jM = (0, XM.q)(rM === vM.b.top, iM, null !== SM && void 0 !== SM ? SM : 1);
-             jM !== XM.j && (PM.has(jM.key) || PM.set(jM.key, (() => AM(MM.CL.Hk(), aM, jM))), nM = PM.get(jM.key))
+             } = cU.meta, QU = (0, xU.m)(XU === nU.e.top, zU, null !== yU && void 0 !== yU ? yU : 1);
+             QU !== xU.h && (FU.has(QU.key) || FU.set(QU.key, (() => VU(UU.WY.nS(), AU, QU))), oU = FU.get(QU.key))
```

#### 2855. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21348-L21350` → after: `L21446-L21448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21446-L21448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21446-L21448) · [Before (L21348-L21350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21348-L21350)

```diff
-             rM !== LM && (QM.has(rM) || QM.set(rM, (() => NM(MM.CL.Hk(), OM))), nM = QM.get(rM))
-           } else(0, IM.B)(aM) ? nM = Lr(rM, OM.meta.metaStr) : (0, mr.B)(aM) && (nM = Gr(rM, OM.meta.rot, OM.meta.open));
-           MM.nL.jF(OM.id, {
+             XU !== YU && (DU.has(XU) || DU.set(XU, (() => vU(UU.WY.nS(), cU))), oU = DU.get(XU))
+           } else(0, JU.A)(AU) ? oU = YX(XU, cU.meta.metaStr) : (0, NX.x)(AU) && (oU = ZX(XU, cU.meta.rot, cU.meta.open));
+           UU.EY.vx(cU.id, {
```

#### 2856. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21352-L21353` → after: `L21450-L21451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21450-L21451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21450-L21451) · [Before (L21352-L21353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21352-L21353)

```diff
-             B3: nM,
-             pG: SM,
+             B5: oU,
+             sZ: yU,
```

#### 2857. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21355-L21361` → after: `L21453-L21459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21453-L21459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21453-L21459) · [Before (L21355-L21361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21355-L21361)

```diff
-             Hd: OM.Hd,
-             Ch: null !== (HM = null !== (hM = OM.Ch) && void 0 !== hM ? hM : iM.Ch) && void 0 !== HM ? HM : null,
-             hd: null !== (JM = null !== (dM = OM.hd) && void 0 !== dM ? dM : iM.hd) && void 0 !== JM ? JM : null,
-             eh: null !== (yM = OM.eh) && void 0 !== yM ? yM : iM.eh,
-             Lk: Rr(EM, null !== (lM = OM.model) && void 0 !== lM ? lM : aM.model),
-             cV: () => Tr(aM, OM)
-           }), (0, jM.G)(EM, OM.id, MM.CL.Hk(), void 0)
+             Ft: cU.Ft,
+             Pp: null !== (IU = null !== (pU = cU.Pp) && void 0 !== pU ? pU : zU.Pp) && void 0 !== IU ? IU : null,
+             ot: null !== (aU = null !== (tU = cU.ot) && void 0 !== tU ? tU : zU.ot) && void 0 !== aU ? aU : null,
+             Wp: null !== (gU = cU.Wp) && void 0 !== gU ? gU : zU.Wp,
+             qS: wX(GU, null !== (kU = cU.model) && void 0 !== kU ? kU : AU.model),
+             f4: () => bX(AU, cU)
+           }), (0, QU.t)(GU, cU.id, UU.WY.nS(), void 0)
```

#### 2858. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21369` → after: `L21467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21467) · [Before (L21369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21369)

```diff
-         alpha: sr.l
+         alpha: SX.o
```

#### 2859. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21374` → after: `L21472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21472) · [Before (L21374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21374)

```diff
-         CL: rM
+         WY: XU
```

#### 2860. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21376-L21380` → after: `L21474-L21478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21474-L21478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21474-L21478) · [Before (L21376-L21380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21376-L21380)

```diff
-         YJ: iM
-       } = rM, OM = (0, bM.l)(rM, "ezBridgeGhost", (0, wM.c)({
-         width: sr.g,
-         height: sr.g,
-         depth: sr.g
+         sa: zU
+       } = XU, cU = (0, WU.m)(XU, "ezBridgeGhost", (0, dU.b)({
+         width: SX.f,
+         height: SX.f,
+         depth: SX.f
```

#### 2861. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21382` → after: `L21480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21480) · [Before (L21382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21382)

```diff
-         ...Wr.e,
+         ...OX.b,
```

#### 2862. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21386` → after: `L21484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21484) · [Before (L21386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21386)

```diff
-         alpha: sr.i,
+         alpha: SX.j,
```

#### 2863. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21390` → after: `L21488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21488) · [Before (L21390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21390)

```diff
-       OM.material = (0, EM.d)({
+       cU.material = (0, GU.b)({
```

#### 2864. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21392` → after: `L21490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21490) · [Before (L21392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21392)

```diff
-         YJ: iM,
+         sa: zU,
```

#### 2865. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21396` → after: `L21494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21494) · [Before (L21396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21396)

```diff
-       const jM = (0, bM.l)(rM, "ezBridgeGhostOutline", (0, TM.f)((0, sr.d)().map((MM => {
+       const QU = (0, WU.m)(XU, "ezBridgeGhostOutline", (0, bU.h)((0, SX.c)().map((UU => {
```

#### 2866. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21398` → after: `L21496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21496) · [Before (L21398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21398)

```diff
-         return [(0, wM.c)({
+         return [(0, dU.b)({
```

#### 2867. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21404` → after: `L21502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21502) · [Before (L21404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21404)

```diff
-       return jM.AJ = !1, jM.Wh = !0, jM.kh = !0, jM.material = (0, EM.d)({
+       return QU.ma = !1, QU.Op = !0, QU.ip = !0, QU.material = (0, GU.b)({
```

#### 2868. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21406` → after: `L21504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21504) · [Before (L21406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21406)

```diff
-         YJ: iM,
+         sa: zU,
```

#### 2869. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21408` → after: `L21506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21506) · [Before (L21408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21408)

```diff
-       }).mirror, jM.parent = OM, rM.vJ(jM), OM.AJ = !1, OM.Wh = !0, OM.kh = !0, rM.vJ(OM), OM.kR(!1), OM
+       }).mirror, QU.parent = cU, XU.xa(QU), cU.ma = !1, cU.Op = !0, cU.ip = !0, XU.xa(cU), cU.YC(!1), cU
```

#### 2870. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21426-L21427` → after: `L21524-L21525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21524-L21525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21524-L21525) · [Before (L21426-L21427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21426-L21427)

```diff
-                 const aM = pM(`${rM.name}BlkMdl${OM<2?1:2}`);
-                 return aM.AJ = !1, aM.rotation.set(...SM), aM.position.set(...jM), aM.bakeCurrentTransformIntoVertices(), aM.material = iM, aM
+                 const AU = qU(`${XU.name}BlkMdl${cU<2?1:2}`);
+                 return AU.ma = !1, AU.rotation.set(...yU), AU.position.set(...QU), AU.bakeCurrentTransformIntoVertices(), AU.material = zU, AU
```

#### 2871. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21429-L21430` → after: `L21527-L21528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21527-L21528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21527-L21528) · [Before (L21429-L21430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21429-L21430)

```diff
-               SM = (0, bM.i)(OM, !1, !1);
-             return SM.AJ = !1, SM
+               yU = (0, WU.k)(cU, !1, !1);
+             return yU.ma = !1, yU
```

#### 2872. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21449` → after: `L21547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21547) · [Before (L21449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21449)

```diff
-             MM.rotation.y = (0, XM.r)(iM.rot, iM.stairsCorner)
+             UU.rotation.y = (0, xU.p)(zU.rot, zU.stairsCorner)
```

#### 2873. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21454` → after: `L21552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21552) · [Before (L21454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21454)

```diff
-             (0, tM.d)(MM);
+             (0, LU.c)(UU);
```

#### 2874. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21462` → after: `L21560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21560) · [Before (L21462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21462)

```diff
-             (0, tM.d)(MM);
+             (0, LU.c)(UU);
```

#### 2875. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21465` → after: `L21563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21563) · [Before (L21465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21465)

```diff
-               yr ??= Pr(MM, mr.b, hr);
+               gX ??= FX(UU, NX.d, pX);
```

#### 2876. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21467` → after: `L21565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21565) · [Before (L21467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21467)

```diff
-                 OM = (0, mr.z)(rM) ? iM.gate : iM.top,
+                 cU = (0, NX.u)(XU) ? zU.gate : zU.top,
```

#### 2877. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21475` → after: `L21573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21573) · [Before (L21475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21475)

```diff
-                 SM.set(iM, (() => Qr(MM, rM, `${rM.name}|${iM}FenceGateModel`, dr(OM, jM, aM))))
+                 yU.set(zU, (() => DX(UU, XU, `${XU.name}|${zU}FenceGateModel`, tX(cU, QU, AU))))
```

#### 2878. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21485` → after: `L21583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21583) · [Before (L21485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21485)

```diff
-             (0, dM.b)().getMetaInfo(rM).halfblockPlacement === vM.b.top && (MM.rotation.x = Math.PI)
+             (0, tU.b)().getMetaInfo(XU).halfblockPlacement === nU.e.top && (UU.rotation.x = Math.PI)
```

#### 2879. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21493-L21496` → after: `L21591-L21594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21591-L21594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21591-L21594) · [Before (L21493-L21496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21493-L21496)

```diff
-               jM = nM.k[rM].name,
-               aM = null !== (iM = jM.split("|")[2]) && void 0 !== iM ? iM : "rot1",
-               PM = "open" === (null !== (OM = jM.split("|")[3]) && void 0 !== OM ? OM : "closed");
-             "rot1" === aM && PM ? (MM.position.x += SM, MM.rotation.y += 3 * Math.PI / 2) : "rot1" !== aM || PM ? "rot2" === aM && PM ? MM.position.z -= SM : "rot2" !== aM || PM ? "rot3" === aM && PM ? (MM.position.x -= SM, MM.rotation.y += Math.PI / 2) : "rot3" !== aM || PM ? "r … [truncated]
+               QU = oU.h[XU].name,
+               AU = null !== (zU = QU.split("|")[2]) && void 0 !== zU ? zU : "rot1",
+               FU = "open" === (null !== (cU = QU.split("|")[3]) && void 0 !== cU ? cU : "closed");
+             "rot1" === AU && FU ? (UU.position.x += yU, UU.rotation.y += 3 * Math.PI / 2) : "rot1" !== AU || FU ? "rot2" === AU && FU ? UU.position.z -= yU : "rot2" !== AU || FU ? "rot3" === AU && FU ? (UU.position.x -= yU, UU.rotation.y += Math.PI / 2) : "rot3" !== AU || FU ? "r … [truncated]
```

#### 2880. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21503-L21504` → after: `L21601-L21602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21601-L21602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21601-L21602) · [Before (L21503-L21504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21503-L21504)

```diff
-             const OM = nM.k[rM].name,
-               SM = "open" === (null !== (iM = OM.split("|")[3]) && void 0 !== iM ? iM : "closed"),
+             const cU = oU.h[XU].name,
+               yU = "open" === (null !== (zU = cU.split("|")[3]) && void 0 !== zU ? zU : "closed"),
```

#### 2881. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21508-L21509` → after: `L21606-L21607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21606-L21607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21606-L21607) · [Before (L21508-L21509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21508-L21509)

```diff
-               const rM = null !== (aM = OM.split("|")[2]) && void 0 !== aM ? aM : "rot1";
-               "rot4" === rM ? (MM.position.x += jM, MM.rotation.y += 3 * Math.PI / 2) : "rot1" === rM ? MM.position.z -= jM : "rot2" === rM ? (MM.position.x -= jM, MM.rotation.y += Math.PI / 2) : "rot3" === rM && (MM.position.z += jM, MM.rotation.y += Math.PI)
+               const XU = null !== (AU = cU.split("|")[2]) && void 0 !== AU ? AU : "rot1";
+               "rot4" === XU ? (UU.position.x += QU, UU.rotation.y += 3 * Math.PI / 2) : "rot1" === XU ? UU.position.z -= QU : "rot2" === XU ? (UU.position.x -= QU, UU.rotation.y += Math.PI / 2) : "rot3" === XU && (UU.position.z += QU, UU.rotation.y += Math.PI)
```

#### 2882. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21530` → after: `L21628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21628) · [Before (L21530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21530)

```diff
-       if (!iM) throw new Error(`Unknown block mesh type: ${MM}`);
+       if (!zU) throw new Error(`Unknown block mesh type: ${UU}`);
```

#### 2883. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21542` → after: `L21640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21640) · [Before (L21542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21542)

```diff
-       return void 0 !== MM.model && (0, lM.n)(rM) === MM
+       return void 0 !== UU.model && (0, kU.p)(XU) === UU
```

#### 2884. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21546` → after: `L21644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21644) · [Before (L21546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21546)

```diff
-       const rM = nM.k[MM],
+       const XU = oU.h[UU],
```

#### 2885. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21548` → after: `L21646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21646) · [Before (L21548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21548)

```diff
-         SM = nM.k[iM],
+         yU = oU.h[zU],
```

#### 2886. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21557` → after: `L21655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21655) · [Before (L21557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21557)

```diff
-       } = nM.k[rM];
+       } = oU.h[XU];
```

#### 2887. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21565-L21566` → after: `L21663-L21664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21663-L21664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21663-L21664) · [Before (L21565-L21566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21565-L21566)

```diff
-           rotation: GM.sh.Zero(),
-           UL: GM.sh.One()
+           rotation: ZU.Sp.Zero(),
+           RY: ZU.Sp.One()
```

#### 2888. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21575-L21577` → after: `L21673-L21675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21673-L21675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21673-L21675) · [Before (L21575-L21577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21575-L21577)

```diff
-       cr(MM, rM), void 0 !== nM.k[rM].rotatableOffsetAmt && (OM = nM.k[rM].rotatableOffsetAmt);
-       const SM = null !== (iM = nM.k[rM].name.split("|")[2]) && void 0 !== iM ? iM : "rot1";
-       "rot1" === SM ? MM.position.z -= OM : "rot2" === SM ? MM.position.x -= OM : "rot3" === SM ? MM.position.z += OM : "rot4" === SM && (MM.position.x += OM)
+       hX(UU, XU), void 0 !== oU.h[XU].rotatableOffsetAmt && (cU = oU.h[XU].rotatableOffsetAmt);
+       const yU = null !== (zU = oU.h[XU].name.split("|")[2]) && void 0 !== zU ? zU : "rot1";
+       "rot1" === yU ? UU.position.z -= cU : "rot2" === yU ? UU.position.x -= cU : "rot3" === yU ? UU.position.z += cU : "rot4" === yU && (UU.position.x += cU)
```

#### 2889. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21582-L21583` → after: `L21680-L21681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21680-L21681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21680-L21681) · [Before (L21582-L21583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21582-L21583)

```diff
-       const SM = nM.k[rM],
-         jM = null !== (iM = SM.name.split("|")[2]) && void 0 !== iM ? iM : "rot1",
+       const yU = oU.h[XU],
+         QU = null !== (zU = yU.name.split("|")[2]) && void 0 !== zU ? zU : "rot1",
```

#### 2890. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21588-L21589` → after: `L21686-L21687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21686-L21687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21686-L21687) · [Before (L21588-L21589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21588-L21589)

```diff
-         } = null !== (OM = SM.customModelInfo) && void 0 !== OM ? OM : {},
-         zM = (0, lM.i)((0, lM.n)(SM));
+         } = null !== (cU = yU.customModelInfo) && void 0 !== cU ? cU : {},
+         EU = (0, kU.k)((0, kU.p)(yU));
```

#### 2891. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21603` → after: `L21701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21701) · [Before (L21603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21603)

```diff
-     const Qi = [1, "b", 0, "h", 234, "i", 207, 107, 6, 4, 8, 255, "length", "g", 235, 41, "f", "j", "undefined", void 0, "c", 188, 3, 77, 174, 63, "fromCodePoint", 7, 12, "push", "a", 65, 5, 213, 115, 9, 91, 200, 161, 8191, 88, 13, 14, 33554432, 67108864, 2, 165, 103, 32, 164, 10 … [truncated]
+     const Dz = [1, "b", 0, "h", 7, 45, 214, "e", 6, 4, 8, 255, "length", "undefined", 2, void 0, "c", "a", 63, "fromCodePoint", 12, "push", 216, 3, 118, 181, "i", 91, 192, 178, 8191, 88, 13, 14, 219, !0, 83, 50, "g", 34, 23, 9, 226, 5, "d", 33554432, 67108864, 158, 234, 247, 33,  … [truncated]
```

#### 2892. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21605-L21609` → after: `L21703-L21707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21703-L21707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21703-L21707) · [Before (L21605-L21609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21605-L21609)

```diff
-     function zi(MM) {
-       return typeof Mi[MM] === Qi[18] ? Mi[MM] = function(...MM) {
-         for (Hi(MM[Qi[12]] = Qi[0], MM[Qi[0]] = '^8}"(<{,*?u:VM$LPN%0]a1EtTqvY4F/i[K+)2DoSC=w5.bl;RfcexB7X_Qn|shrpgkAG~W9J!Udy&H@Izm36#ZO>j`', MM[Qi[1]] = "" + (MM[Qi[2]] || ""), MM[Qi[4]] = MM[Qi[1]].length, MM[Qi[9]] = [], MM[Qi[7]] = Qi[2], MM[Qi[8]] = Qi[2], MM[Qi[6]] = -Qi[0 … [truncated]
-           if (MM[Qi[5]] = MM[Qi[0]].indexOf(MM[Qi[1]][MM[Qi[3]]]), MM[Qi[5]] !== -Qi[0])
-             if (MM[Qi[6]] < Qi[2]) MM[Qi[6]] = MM[Qi[5]];
+     function Ez(...UU) {
+       return UU[Dz[12]] = Dz[0], typeof Uz[UU[Dz[2]]] === Dz[13] ? Uz[UU[Dz[2]]] = function(...UU) {
+         for (Iz(UU[Dz[12]] = Dz[0], UU[Dz[0]] = '6cZMkHmGjpgIDECYOBSJ1F"Kfnt!<~awrP$&;=X)/8ANyi.vlz](,h90[oLQ_U*>@ed4R2}5V?W%b7^{+T:u|3`#sqx', UU[Dz[1]] = "" + (UU[Dz[2]] || ""), UU[-Dz[4]] = UU[Dz[1]].length, UU[Dz[9]] = [], UU[Dz[7]] = Dz[2], UU[Dz[8]] = Dz[2], UU[Dz[6]] = -Dz[ … [truncated]
+           if (UU[-Dz[5]] = UU[Dz[0]].indexOf(UU[Dz[1]][UU[Dz[3]]]), UU[-Dz[5]] !== -Dz[0])
+             if (UU[Dz[6]] < Dz[2]) UU[Dz[6]] = UU[-Dz[5]];
```

#### 2893. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21611` → after: `L21709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21709) · [Before (L21611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21611)

```diff
-               Hi(MM[Qi[6]] += MM[Qi[5]] * Qi[36], MM[Qi[7]] |= MM[Qi[6]] << MM[Qi[8]], MM[Qi[8]] += (MM[Qi[6]] & Qi[39]) > Qi[40] ? Qi[41] : Qi[42]);
+               Iz(UU[Dz[6]] += UU[-Dz[5]] * Dz[27], UU[Dz[7]] |= UU[Dz[6]] << UU[Dz[8]], UU[Dz[8]] += (UU[Dz[6]] & Dz[30]) > Dz[31] ? Dz[32] : Dz[33]);
```

#### 2894. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21614` → after: `L21712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21712) · [Before (L21614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21614)

```diff
-               } while (MM[Qi[8]] > Qi[27]);
+               } while (UU[Dz[8]] > Dz[4]);
```

#### 2895. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21617` → after: `L21715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21715) · [Before (L21617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21617)

```diff
-       }(ri[MM]) : Mi[MM]
+       }(Xz[UU[Dz[2]]]) : Uz[UU[Dz[2]]]
```

#### 2896. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21621` → after: `L21719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21719) · [Before (L21621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21621)

```diff
-       return MM[Qi[12]] = Qi[0], typeof Oi !== Qi[18] && Oi ? (new Oi).decode(new Si(MM[Qi[2]])) : typeof ji !== Qi[18] && ji ? ji.from(MM[Qi[2]]).toString("utf-8") : ni(MM[Qi[2]])
+       return UU[Dz[12]] = Dz[0], typeof cz !== Dz[13] && cz ? (new cz).decode(new yz(UU[Dz[2]])) : typeof Qz !== Dz[13] && Qz ? Qz.from(UU[Dz[2]]).toString("utf-8") : oz(UU[Dz[2]])
```

#### 2897. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21629-L21630` → after: `L21727-L21728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21727-L21728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21727-L21728) · [Before (L21629-L21630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21629-L21630)

```diff
-     Hi(Mi = {}, ri = ['k{uv$yO+XQ}HV"%o@XiB~|jEb:v;hz})!NZ9#_rl(0lY8', 'wS2/`.MlPk>*@qY)K|V,FS6QH:E@/mCT>NXR<x|}*MXI`z:DD"I!Y', 'j*=izz,,EQ&z]nPo`.Af"UGVU$iNNPp)*8', 'tGyfsKc0EQLmJ"}E', 'Hn]/W7T,fV$hmRh=84"&<;Mz4nPvVvw0WcX{wW(QLL', "5hQcNe00lrzrNJ_Y]]E?", "I.Ni};%Qlawu~;SDic%dvD0 … [truncated]
-       Hi(MM[Qi[12]] = Qi[2], MM[Qi[16]] = [function() {
+     Iz(Uz = {}, Xz = ["x$EGB,taP>Nl0XdSQ*nrRW!hk9;<E|;SdA1gT;3olSIeU_<Ke?RWfo>K{S", "2m&rt?6", 'R*/!c._L]>Xb"C2n5eA%N>*Dd9IUxnj', "m5ur6$JJgCE{]Cx~JoXb+;b`YY3}c", "M~6PUh/Lm@J:FV%)XM`b.zR.uJOR.UOt_5F,h%HJ51Z%(urfmNZ", '{n4r"o;,A*^c`zK&Bo"0Lh1.%*IMFl2J1c', "(o3].>zGk9JECUbXQBg!!9= … [truncated]
+       var UU, XU, zU, cU = [function() {
```

#### 2898. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21638` → after: `L21736-L21737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21736-L21737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21736-L21737) · [Before (L21638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21638)

```diff
-       }], MM[Qi[13]] = Qi[19], MM[-Qi[14]] = []);
+       }];
+       Iz(UU = void 0, XU = []);
```

#### 2899. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21640` → after: `L21739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21739) · [Before (L21640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21640)

```diff
-         Hi(MM[Qi[13]] = Object, MM[-Qi[14]][Qi[29]]("".__proto__.constructor.name))
+         Iz(UU = Object, XU[Dz[21]]("".__proto__.constructor.name))
```

#### 2900. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21642-L21645` → after: `L21741-L21745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21741-L21745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21741-L21745) · [Before (L21642-L21645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21642-L21645)

```diff
-       MM: for (MM[-Qi[15]] = Qi[2]; MM[-Qi[15]] < MM[Qi[16]][Qi[12]]; MM[-Qi[15]]++) try {
-         for (MM[Qi[13]] = MM[Qi[16]][MM[-Qi[15]]](), MM[Qi[17]] = Qi[2]; MM[Qi[17]] < MM[-Qi[14]][Qi[12]]; MM[Qi[17]]++)
-           if (typeof MM[Qi[13]][MM[-Qi[14]][MM[Qi[17]]]] === Qi[18]) continue MM;
-         return MM[Qi[13]]
+       UU: for (zU = Dz[2]; zU < cU[Dz[12]]; zU++) try {
+         var yU;
+         for (UU = cU[zU](), yU = Dz[2]; yU < XU[Dz[12]]; yU++)
+           if (typeof UU[XU[yU]] === Dz[13]) continue UU;
+         return UU
```

#### 2901. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21647-L21649` → after: `L21747-L21749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21747-L21749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21747-L21749) · [Before (L21647-L21649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21647-L21649)

```diff
-       return MM[Qi[13]] || this
-     }() || {}, Oi = ii.TextDecoder, Si = ii.Uint8Array, ji = ii.Vz, ai = ii.String || String, Pi = ii.Array || Array, ni = function(...MM) {
-       return Hi(MM[Qi[12]] = Qi[2], MM[Qi[30]] = new Pi(Qi[76]), MM[Qi[1]] = ai[Qi[26]] || ai.fromCharCode, MM[Qi[20]] = []),
+       return UU || this
+     }() || {}, cz = zz.TextDecoder, yz = zz.Uint8Array, Qz = zz.XY, Az = zz.String || String, Fz = zz.Array || Array, oz = function(...UU) {
+       return Iz(UU[Dz[12]] = Dz[2], UU[-Dz[22]] = new Fz(Dz[55]), UU[Dz[1]] = Az[Dz[19]] || Az.fromCharCode, UU[Dz[14]] = []),
```

#### 2902. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21651-L21652` → after: `L21751-L21752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21751-L21752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21751-L21752) · [Before (L21651-L21652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21651-L21652)

```diff
-           for (Hi(rM[Qi[12]] = Qi[0], rM[-Qi[24]] = Qi[19], rM[-Qi[23]] = Qi[19], rM[Qi[22]] = rM[Qi[2]][Qi[12]], MM[Qi[20]][Qi[12]] = Qi[2]), rM[-Qi[21]] = Qi[2]; rM[-Qi[21]] < rM[Qi[22]];) Hi(rM[-Qi[23]] = rM[Qi[2]][rM[-Qi[21]]++], rM[-Qi[23]] <= Qi[75] ? rM[-Qi[24]] = rM[-Qi[2 … [truncated]
-           return MM[Qi[20]].join("")
+           for (Iz(XU[Dz[12]] = Dz[0], XU[Dz[17]] = Dz[15], XU[Dz[14]] = Dz[15], XU[Dz[16]] = XU[Dz[2]][Dz[12]], UU[Dz[14]][Dz[12]] = Dz[2]), XU[Dz[9]] = Dz[2]; XU[Dz[9]] < XU[Dz[16]];) Iz(XU[Dz[14]] = XU[Dz[2]][XU[Dz[9]]++], XU[Dz[14]] <= Dz[54] ? XU[Dz[17]] = XU[Dz[14]] : XU[Dz[ … [truncated]
+           return UU[Dz[14]].join("")
```

#### 2903. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21654-L21673` → after: `L21754-L21755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21754-L21755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21754-L21755) · [Before (L21654-L21673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21654-L21673)

```diff
-     }()), zi(118) in mi && function(...MM) {
-       MM[Qi[12]] = Qi[2]
-     }(), (() => {
-       function MM(...MM) {
-         return MM[Qi[12]] = Qi[0], typeof Mi[MM[Qi[2]]] === Qi[18] ? Mi[MM[Qi[2]]] = function(...MM) {
-           for (Hi(MM[Qi[12]] = Qi[0], MM[-Qi[50]] = 'G8%4}#u$v0&y2@76_!)=59X"WP.Ss^DVx3[;FTm>R/~*ItfHZjL]b<UwOr:{dq|cQYMe+ChpzBoai1gn?Al,JkNK`E(', MM[Qi[47]] = "" + (MM[Qi[2]] || ""), MM[Qi[49]] = MM[Qi[47]].length, MM[Qi[9]] = [], MM[Qi[51]] = Qi[2], MM[Qi[16]] = Qi[2], MM[Qi[13 … [truncated]
-             if (MM[Qi[35]] = MM[-Qi[50]].indexOf(MM[Qi[47]][MM[-Qi[48]]]), MM[Qi[35]] !== -Qi[0])
-               if (MM[Qi[13]] < Qi[2]) MM[Qi[13]] = MM[Qi[35]];
-               else {
-                 Hi(MM[Qi[13]] += MM[Qi[35]] * Qi[36], MM[Qi[51]] |= MM[Qi[13]] << MM[Qi[16]], MM[Qi[16]] += (MM[Qi[13]] & Qi[39]) > Qi[40] ? Qi[41] : Qi[42]);
-                 do {
-                   Hi(MM[Qi[9]].push(MM[Qi[51]] & Qi[11]), MM[Qi[51]] >>= Qi[10], MM[Qi[16]] -= Qi[10])
-                 } while (MM[Qi[16]] > Qi[27]);
-                 MM[Qi[13]] = -Qi[0]
-               } return MM[Qi[13]] > -Qi[0] && MM[Qi[9]].push((MM[Qi[51]] | MM[Qi[13]] << MM[Qi[16]]) & Qi[11]), Li(MM[Qi[9]])
-         }(ri[MM[Qi[2]]]) : Mi[MM[Qi[2]]]
- ... (4 more removed lines; see GitHub link above)
+     }()), (() => {
+       if (Dz[35]) {
```

#### 2904. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21675-L21677` → after: `L21757-L21759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21757-L21759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21757-L21759) · [Before (L21675-L21677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21675-L21677)

```diff
-           for (Hi(MM[Qi[12]] = Qi[0], MM[Qi[0]] = 'u1tT6.cU4[$JDi2aV`nz^~Ko5QC8,=j39meXx+%@0W({}&<Ng!G*)lkLB]y|O:FMpvRhEw?;r"dAS7fbIsZ>Pq/H#_Y', MM[Qi[45]] = "" + (MM[Qi[2]] || ""), MM[Qi[52]] = MM[Qi[45]].length, MM[-Qi[54]] = [], MM[Qi[32]] = Qi[2], MM[Qi[16]] = Qi[2], MM[-Qi[5 … [truncated]
-             if (MM[Qi[35]] = MM[Qi[0]].indexOf(MM[Qi[45]][MM[Qi[10]]]), MM[Qi[35]] !== -Qi[0])
-               if (MM[-Qi[53]] < Qi[2]) MM[-Qi[53]] = MM[Qi[35]];
+           for (Iz(UU[Dz[12]] = Dz[0], UU[Dz[0]] = 'U=y<]`Y}5D9HLi8wZg|bP(oN@62RudABhFTjIsa*#v,C^?e%/;GxJ14cV&k0:pz~W"3r7$lQfK[tOXnME{)!S+.m>q_', UU[-Dz[36]] = "" + (UU[Dz[2]] || ""), UU[Dz[23]] = UU[-Dz[36]].length, UU[Dz[39]] = [], UU[Dz[7]] = Dz[2], UU[Dz[8]] = Dz[2], UU[Dz[38] … [truncated]
+             if (UU[Dz[37]] = UU[Dz[0]].indexOf(UU[-Dz[36]][UU[Dz[3]]]), UU[Dz[37]] !== -Dz[0])
+               if (UU[Dz[38]] < Dz[2]) UU[Dz[38]] = UU[Dz[37]];
```

#### 2905. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21679` → after: `L21761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21761) · [Before (L21679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21679)

```diff
-                 Hi(MM[-Qi[53]] += MM[Qi[35]] * Qi[36], MM[Qi[32]] |= MM[-Qi[53]] << MM[Qi[16]], MM[Qi[16]] += (MM[-Qi[53]] & Qi[39]) > Qi[40] ? Qi[41] : Qi[42]);
+                 Iz(UU[Dz[38]] += UU[Dz[37]] * Dz[27], UU[Dz[7]] |= UU[Dz[38]] << UU[Dz[8]], UU[Dz[8]] += (UU[Dz[38]] & Dz[30]) > Dz[31] ? Dz[32] : Dz[33]);
```

#### 2906. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21681-L21684` → after: `L21763-L21766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21763-L21766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21763-L21766) · [Before (L21681-L21684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21681-L21684)

```diff
-                   Hi(MM[-Qi[54]].push(MM[Qi[32]] & Qi[11]), MM[Qi[32]] >>= Qi[10], MM[Qi[16]] -= Qi[10])
-                 } while (MM[Qi[16]] > Qi[27]);
-                 MM[-Qi[53]] = -Qi[0]
-               } return MM[-Qi[53]] > -Qi[0] && MM[-Qi[54]].push((MM[Qi[32]] | MM[-Qi[53]] << MM[Qi[16]]) & Qi[11]), Li(MM[-Qi[54]])
+                   Iz(UU[Dz[39]].push(UU[Dz[7]] & Dz[11]), UU[Dz[7]] >>= Dz[10], UU[Dz[8]] -= Dz[10])
+                 } while (UU[Dz[8]] > Dz[4]);
+                 UU[Dz[38]] = -Dz[0]
+               } return UU[Dz[38]] > -Dz[0] && UU[Dz[39]].push((UU[Dz[7]] | UU[Dz[38]] << UU[Dz[8]]) & Dz[11]), Yz(UU[Dz[39]])
```

#### 2907. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21688` → after: `L21770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21770) · [Before (L21688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21688)

```diff
-           return MM[Qi[12]] = Qi[0], typeof Mi[MM[Qi[2]]] === Qi[18] ? Mi[MM[Qi[2]]] = rM(ri[MM[Qi[2]]]) : Mi[MM[Qi[2]]]
+           return XU[Dz[12]] = Dz[0], typeof Uz[XU[Dz[2]]] === Dz[13] ? Uz[XU[Dz[2]]] = UU(Xz[XU[Dz[2]]]) : Uz[XU[Dz[2]]]
```

#### 2908. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21690` → after: `L21772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21772) · [Before (L21690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21690)

```diff
-         let OM = Qi[91];
+         let zU = Dz[61];
```

#### 2909. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21692-L21696` → after: `L21774-L21778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21774-L21778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21774-L21778) · [Before (L21692-L21696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21692-L21696)

```diff
-           function rM(...MM) {
-             return MM[Qi[12]] = Qi[0], typeof Mi[MM[Qi[2]]] === Qi[18] ? Mi[MM[Qi[2]]] = function(...MM) {
-               for (Hi(MM[Qi[12]] = Qi[0], MM[Qi[30]] = ':TzHVryl<d=%"mKSQE|pDIxLj19q{YJn,g`C2k8tB)Nb_i.?cRPo5GW>@/6}s$4wv^f*Ma#&7UFAuO[e(Z+!Xh;03]~', MM[Qi[1]] = "" + (MM[Qi[2]] || ""), MM[Qi[22]] = MM[Qi[1]].length, MM[Qi[9]] = [], MM[-Qi[55]] = Qi[2], MM[-Qi[56]] = Qi[2], MM[Qi … [truncated]
-                 if (MM[Qi[35]] = MM[Qi[30]].indexOf(MM[Qi[1]][MM[Qi[3]]]), MM[Qi[35]] !== -Qi[0])
-                   if (MM[Qi[13]] < Qi[2]) MM[Qi[13]] = MM[Qi[35]];
+           function XU(UU) {
+             return typeof Uz[UU] === Dz[13] ? Uz[UU] = function(...UU) {
+               for (Iz(UU[Dz[12]] = Dz[0], UU[Dz[17]] = 'gfwo4k|&]vO!{B~}rVu.#1"/Uh?CeHA@pqt>$dL_(;b8<Gc3=DR^E+2*yPx%6I,JnY`KFW[msjil9zM0QX:ZST)a57N', UU[-Dz[40]] = "" + (UU[Dz[2]] || ""), UU[Dz[16]] = UU[-Dz[40]].length, UU[Dz[44]] = [], UU[Dz[43]] = Dz[2], UU[Dz[8]] = Dz[2], UU[ … [truncated]
+                 if (UU[Dz[41]] = UU[Dz[17]].indexOf(UU[-Dz[40]][UU[Dz[3]]]), UU[Dz[41]] !== -Dz[0])
+                   if (UU[-Dz[42]] < Dz[2]) UU[-Dz[42]] = UU[Dz[41]];
```

#### 2910. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21698` → after: `L21780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21780) · [Before (L21698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21698)

```diff
-                     Hi(MM[Qi[13]] += MM[Qi[35]] * Qi[36], MM[-Qi[55]] |= MM[Qi[13]] << MM[-Qi[56]], MM[-Qi[56]] += (MM[Qi[13]] & Qi[39]) > Qi[40] ? Qi[41] : Qi[42]);
+                     Iz(UU[-Dz[42]] += UU[Dz[41]] * Dz[27], UU[Dz[43]] |= UU[-Dz[42]] << UU[Dz[8]], UU[Dz[8]] += (UU[-Dz[42]] & Dz[30]) > Dz[31] ? Dz[32] : Dz[33]);
```

#### 2911. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21700-L21704` → after: `L21782-L21786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21782-L21786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21782-L21786) · [Before (L21700-L21704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21700-L21704)

```diff
-                       Hi(MM[Qi[9]].push(MM[-Qi[55]] & Qi[11]), MM[-Qi[55]] >>= Qi[10], MM[-Qi[56]] -= Qi[10])
-                     } while (MM[-Qi[56]] > Qi[27]);
-                     MM[Qi[13]] = -Qi[0]
-                   } return MM[Qi[13]] > -Qi[0] && MM[Qi[9]].push((MM[-Qi[55]] | MM[Qi[13]] << MM[-Qi[56]]) & Qi[11]), Li(MM[Qi[9]])
-             }(ri[MM[Qi[2]]]) : Mi[MM[Qi[2]]]
+                       Iz(UU[Dz[44]].push(UU[Dz[43]] & Dz[11]), UU[Dz[43]] >>= Dz[10], UU[Dz[8]] -= Dz[10])
+                     } while (UU[Dz[8]] > Dz[4]);
+                     UU[-Dz[42]] = -Dz[0]
+                   } return UU[-Dz[42]] > -Dz[0] && UU[Dz[44]].push((UU[Dz[43]] | UU[-Dz[42]] << UU[Dz[8]]) & Dz[11]), Yz(UU[Dz[44]])
+             }(Xz[UU]) : Uz[UU]
```

#### 2912. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21706` → after: `L21788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21788) · [Before (L21706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21706)

```diff
-           if (MM[Qi[12]] = Qi[2], rM(121) + "W" in mi && function(...MM) {
+           if (UU[Dz[12]] = Dz[2], XU(114) in Nz && function(...UU) {
```

#### 2913. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21708-L21717` → after: `L21790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21790) · [Before (L21708-L21717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21708-L21717)

```diff
-                 for (Hi(MM[Qi[12]] = Qi[0], MM[Qi[58]] = '<5@uvMkcAn*:VlhB8e}ZS&{b|%z`7[w4~q]O(a!,K+y9"CPmDE2opFG?TU/_;HI#dxt$^0N31J6>gQYfXi=j.)WRrsL', MM[Qi[57]] = "" + (MM[Qi[2]] || ""), MM[Qi[22]] = MM[Qi[57]].length, MM[Qi[62]] = [], MM[Qi[60]] = Qi[2], MM[Qi[61]] = Qi[2], MM … [truncated]
-                   if (MM[Qi[0]] = MM[Qi[58]].indexOf(MM[Qi[57]][MM[Qi[3]]]), MM[Qi[0]] !== -Qi[0])
-                     if (MM[Qi[59]] < Qi[2]) MM[Qi[59]] = MM[Qi[0]];
-                     else {
-                       Hi(MM[Qi[59]] += MM[Qi[0]] * Qi[36], MM[Qi[60]] |= MM[Qi[59]] << MM[Qi[61]], MM[Qi[61]] += (MM[Qi[59]] & Qi[39]) > Qi[40] ? Qi[41] : Qi[42]);
-                       do {
-                         Hi(MM[Qi[62]].push(MM[Qi[60]] & Qi[11]), MM[Qi[60]] >>= Qi[10], MM[Qi[61]] -= Qi[10])
-                       } while (MM[Qi[61]] > Qi[27]);
-                       MM[Qi[59]] = -Qi[0]
-                     } return MM[Qi[59]] > -Qi[0] && MM[Qi[62]].push((MM[Qi[60]] | MM[Qi[59]] << MM[Qi[61]]) & Qi[11]), Li(MM[Qi[62]])
+                 return UU[Dz[12]] = Dz[0], UU[Dz[2]][Dz[0]] * Dz[46] + (UU[Dz[2]][Dz[2]] < Dz[2] ? Dz[45] | UU[Dz[2]][Dz[2]] : UU[Dz[2]][Dz[2]])
```

#### 2914. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21721` → after: `L21794-L21803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21794-L21803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21794-L21803) · [Before (L21721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21721)

```diff
-                 return MM[Qi[12]] = Qi[0], typeof Mi[MM[Qi[2]]] === Qi[18] ? Mi[MM[Qi[2]]] = iM(ri[MM[Qi[2]]]) : Mi[MM[Qi[2]]]
+                 switch (UU[Dz[12]] = Dz[0], ((UU[Dz[2]] & Dz[45]) !== Dz[2]) * Dz[0] + (UU[Dz[2]] < Dz[2]) * Dz[14]) {
+                   case Dz[2]:
+                     return [UU[Dz[2]] % Dz[45], Math.trunc(UU[Dz[2]] / Dz[46])];
+                   case Dz[0]:
+                     return [UU[Dz[2]] % Dz[45] - Dz[45], Math.trunc(UU[Dz[2]] / Dz[46]) + Dz[0]];
+                   case Dz[14]:
+                     return [((UU[Dz[2]] + Dz[45]) % Dz[45] + Dz[45]) % Dz[45], Math.round(UU[Dz[2]] / Dz[46])];
+                   case Dz[23]:
+                     return [UU[Dz[2]] % Dz[45], Math.trunc(UU[Dz[2]] / Dz[46])]
+                 }
```

#### 2915. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21723-L21896` → after: `L21805-L21818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21805-L21818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21805-L21818) · [Before (L21723-L21896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21723-L21896)

```diff
-               MM[Qi[12]] = Qi[2],
-                 function(...MM) {
-                   function iM(...MM) {
-                     for (Hi(MM[Qi[12]] = Qi[0], MM[Qi[30]] = [], MM[Qi[1]] = Qi[2], MM[Qi[63]] = MM[Qi[2]].length, MM[-Qi[64]] = Qi[19], MM[Qi[65]] = Qi[19]); MM[Qi[1]] < MM[Qi[63]];) Hi(MM[-Qi[64]] = MM[Qi[2]].charCodeAt(MM[Qi[1]]++), MM[-Qi[64]] >= Qi[69] && MM[-Qi[64]] <= 5631 … [truncated]
-                     return MM[Qi[30]]
-                   }
- 
-                   function OM(...rM) {
-                     for (Hi(rM[Qi[12]] = Qi[0], rM[Qi[0]] = rM[Qi[2]].length, rM[Qi[45]] = -Qi[0], rM[Qi[20]] = Qi[19], rM[Qi[9]] = ""); ++rM[Qi[45]] < rM[Qi[0]];) rM[Qi[20]] = rM[Qi[2]][rM[Qi[45]]], rM[Qi[20]] > 65535 && Hi(rM[Qi[20]] -= Qi[67], rM[Qi[9]] += MM[Qi[68]](rM[Qi[20] … [truncated]
-                     return rM[Qi[9]]
-                   }
- 
-                   function SM(...MM) {
-                     if (MM[Qi[12]] = Qi[0], MM[Qi[2]] >= Qi[69] && MM[Qi[2]] <= 57343) {
-                       function iM(...MM) {
-                         for (Hi(MM[Qi[12]] = Qi[0], MM[-Qi[73]] = '&y:Z*kExBUrV2{n^tsO0>7}N8X1edF#"qLa<[$wMgS)bAH9viY;Pj?._KIl5c~3DpQ64!oTu`G@+fCm=hJ(%|RzW,/]', MM[-Qi[71]] = "" + (MM[Qi[2]] || ""), MM[Qi[72]] = MM[-Qi[71]].length, MM[Qi[62]] = [], MM[Qi[32]] = Qi[2], MM[Qi[8]] = … [truncated]
- ... (158 more removed lines; see GitHub link above)
+               UU[Dz[12]] = Dz[2], Iz(UU[Dz[17]] = XU([Dz[14], Dz[9]]), UU[Dz[0]] = XU([Dz[0], Dz[14]]), UU[Dz[16]] = UU[Dz[17]] + UU[Dz[0]], UU[-Dz[47]] = UU[Dz[16]] - UU[Dz[0]], UU[Dz[48]] = UU[-Dz[47]] * Dz[14], UU[Dz[49]] = UU[Dz[48]] / Dz[14], console.log(zU(UU[Dz[16]])), con … [truncated]
+             }(), !zU && (0, tU[Dz[7]])()) {
+             function cU(...UU) {
+               for (Iz(UU[Dz[12]] = Dz[0], UU[Dz[17]] = 'x,2"<}zD.|su~+n9;He)@{Q^E/R3v!LOd`tX&yjfgkmiI0NVlGFPcwM%ZBrK7#58CYW6JpAoU$[1>T:S(4?b=q*_]ah', UU[-Dz[50]] = "" + (UU[Dz[2]] || ""), UU[Dz[23]] = UU[-Dz[50]].length, UU[Dz[9]] = [], UU[Dz[43]] = Dz[2], UU[Dz[53]] = Dz[2], UU[ … [truncated]
+                 if (UU[Dz[26]] = UU[Dz[17]].indexOf(UU[-Dz[50]][UU[-Dz[51]]]), UU[Dz[26]] !== -Dz[0])
+                   if (UU[-Dz[52]] < Dz[2]) UU[-Dz[52]] = UU[Dz[26]];
+                   else {
+                     Iz(UU[-Dz[52]] += UU[Dz[26]] * Dz[27], UU[Dz[43]] |= UU[-Dz[52]] << UU[Dz[53]], UU[Dz[53]] += (UU[-Dz[52]] & Dz[30]) > Dz[31] ? Dz[32] : Dz[33]);
+                     do {
+                       Iz(UU[Dz[9]].push(UU[Dz[43]] & Dz[11]), UU[Dz[43]] >>= Dz[10], UU[Dz[53]] -= Dz[10])
+                     } while (UU[Dz[53]] > Dz[4]);
+                     UU[-Dz[52]] = -Dz[0]
+                   } return UU[-Dz[52]] > -Dz[0] && UU[Dz[9]].push((UU[Dz[43]] | UU[-Dz[52]] << UU[Dz[53]]) & Dz[11]), Yz(UU[Dz[9]])
+             }
```

#### 2916. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21898-L21906` → after: `L21820-L21870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21820-L21870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21820-L21870) · [Before (L21898-L21906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21898-L21906)

```diff
-                         function JM(...MM) {
-                           return MM[Qi[12]] = Qi[0], typeof Mi[MM[Qi[2]]] === Qi[18] ? Mi[MM[Qi[2]]] = hM(ri[MM[Qi[2]]]) : Mi[MM[Qi[2]]]
-                         }
-                         throw Error(JM(133))
-                       }
-                     }
-                     if ((248 & rM) == Qi[93] && (Hi(iM = nM(), OM = nM(), jM = nM(), aM = (rM & Qi[27]) << Qi[79] | iM << Qi[28] | OM << Qi[8] | jM), aM >= Qi[67] && aM <= 1114111)) return aM;
-                     throw Error(QM(134))
-                   }
+             function QU(...UU) {
+               return UU[Dz[12]] = Dz[0], typeof Uz[UU[Dz[2]]] === Dz[13] ? Uz[UU[Dz[2]]] = cU(Xz[UU[Dz[2]]]) : Uz[UU[Dz[2]]]
+             }
+             let AU = {
+               10: XU(115) + QU(116) + "k",
+               [QU(117)]: QU(Dz[24]) + QU(119),
+               [QU(120) + "1j"]: QU(121) + QU(122) + "wx",
+               [QU(Dz[72]) + QU(124)]: QU(125) + QU(126)
+             };
+             Iz(zU = Dz[35], (0, yU[QU(Dz[54])])(gU.Ih, AU))
+           }
+         }), 4706), (0, yU[XU(Dz[55]) + XU(129)])(((...UU) => {
+           UU[Dz[12]] = Dz[2],
+             function(...UU) {
+               return UU[Dz[12]] = Dz[0], typeof Uz[UU[Dz[2]]] === Dz[13] ? Uz[UU[Dz[2]]] = function(...UU) {
+                 for (Iz(UU[Dz[12]] = Dz[0], UU[Dz[17]] = 'AZyPRni3sNc([b.D)5~XJ6M7h|;w8QVKld<LIr?,g0CBEf#ta*@_:`o>Y]}juqmkUFp41=+SeHOG$T&/%^"zv29!{xW', UU[Dz[14]] = "" + (UU[Dz[2]] || ""), UU[Dz[23]] = UU[Dz[14]].length, UU[Dz[9]] = [], UU[Dz[7]] = Dz[2], UU[Dz[57]] = Dz[2], UU[D … [truncated]
+ ... (35 more added lines; see GitHub link above)
```

#### 2917. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21908-L21915` → after: `L21872-L21910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21872-L21910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21872-L21910) · [Before (L21908-L21915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21908-L21915)

```diff
-                   function zM(...rM) {
-                     for (Hi(rM[Qi[12]] = Qi[0], MM[Qi[62]] = iM(rM[Qi[2]]), MM[Qi[87]] = MM[Qi[62]].length, MM[Qi[1]] = Qi[2], rM[Qi[0]] = [], rM[Qi[45]] = Qi[19]);
-                       (rM[Qi[45]] = QM()) !== Qi[91];) rM[Qi[0]].push(rM[Qi[45]]);
-                     return OM(rM[Qi[0]])
-                   }
-                   Hi(MM[Qi[12]] = Qi[0], MM[Qi[68]] = String.fromCharCode), Hi(MM[Qi[62]] = Qi[19], MM[Qi[87]] = Qi[19], MM[Qi[1]] = Qi[19]), Hi(MM[Qi[2]].version = rM(135), MM[Qi[2]].encode = PM, MM[Qi[2]].decode = zM)
-                 }(typeof exports === OM(136) + OM(137) ? this.utf8 = {} : exports)
-             }(), !OM && (0, dM[Qi[16]])()) {
+         function XU(...XU) {
+           return XU[Dz[12]] = Dz[0], typeof Uz[XU[Dz[2]]] === Dz[13] ? Uz[XU[Dz[2]]] = UU(Xz[XU[Dz[2]]]) : Uz[XU[Dz[2]]]
+         }
+ 
+         function zU(...UU) {
+           function XU(...UU) {
+             return UU[Dz[12]] = Dz[0], typeof Uz[UU[Dz[2]]] === Dz[13] ? Uz[UU[Dz[2]]] = function(...UU) {
+               for (Iz(UU[Dz[12]] = Dz[0], UU[Dz[0]] = '5APmaSJZHrkdCUOTbGL6M_X]#qfwt*/v?~N$K,:F[<3=2gEcj{(1}i%Be.)p9"sy>`!uQz70|4Il+Rn8Yh;&D^x@VWo', UU[Dz[14]] = "" + (UU[Dz[2]] || ""), UU[Dz[23]] = UU[Dz[14]].length, UU[Dz[9]] = [], UU[Dz[7]] = Dz[2], UU[Dz[8]] = Dz[2], UU[-Dz[6 … [truncated]
+                 if (UU[Dz[41]] = UU[Dz[0]].indexOf(UU[Dz[14]][UU[Dz[10]]]), UU[Dz[41]] !== -Dz[0])
+                   if (UU[-Dz[64]] < Dz[2]) UU[-Dz[64]] = UU[Dz[41]];
+                   else {
+                     Iz(UU[-Dz[64]] += UU[Dz[41]] * Dz[27], UU[Dz[7]] |= UU[-Dz[64]] << UU[Dz[8]], UU[Dz[8]] += (UU[-Dz[64]] & Dz[30]) > Dz[31] ? Dz[32] : Dz[33]);
+                     do {
+                       Iz(UU[Dz[9]].push(UU[Dz[7]] & Dz[11]), UU[Dz[7]] >>= Dz[10], UU[Dz[8]] -= Dz[10])
+                     } while (UU[Dz[8]] > Dz[4]);
+                     UU[-Dz[64]] = -Dz[0]
+ ... (23 more added lines; see GitHub link above)
```

#### 2918. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21919` → after: `L21914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21914) · [Before (L21919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21919)

```diff
-                 var nM = ';kQx}ch/,J.<9>oXPU{&#WSe:Tbt~*gly6%$)dz0+1[@^A3BVDwfHnLq7mC?_85aOp2K]E4jZ|rNG`=(sFYMu"RI!iv'.indexOf(rM[PM]);
+                 var oU = '[DeCOKSUPBmNiZabp.v;E=uYg/{%XMz>I:A4^Jt0LdWR8)]|wH!7lhF62("cy<xj@$+93f5s1r~&`Q?n}Tkq,_G#*Vo'.indexOf(XU[FU]);
```

#### 2919. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21923` → after: `L21918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21918) · [Before (L21923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21923)

```diff
-                     Hi(aM += nM * Qi[36], SM |= aM << jM, jM += (aM & Qi[39]) > Qi[40] ? Qi[41] : Qi[42]);
+                     Iz(AU += oU * Dz[27], yU |= AU << QU, QU += (AU & Dz[30]) > Dz[31] ? Dz[32] : Dz[33]);
```

#### 2920. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21926` → after: `L21921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21921) · [Before (L21926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21926)

```diff
-                     } while (jM > Qi[27]);
+                     } while (QU > Dz[4]);
```

#### 2921. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21934-L21976` → after: `L21929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21929) · [Before (L21934-L21976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21934-L21976)

```diff
-               return MM[Qi[12]] = Qi[0], typeof Mi[MM[Qi[2]]] === Qi[18] ? Mi[MM[Qi[2]]] = iM(ri[MM[Qi[2]]]) : Mi[MM[Qi[2]]]
-             }
- 
-             function aM(...MM) {
-               function rM() {}
-               MM[Qi[12]] = Qi[2], Hi(MM[Qi[95]] = function(...MM) {
-                 for (Hi(MM[Qi[12]] = Qi[45], MM[-Qi[0]] = Qi[2], MM[Qi[1]] = Qi[2], MM[Qi[20]] = new rM(Qi[2]), MM[Qi[62]] = MM[Qi[20]], MM[Qi[65]] = MM[Qi[2]], MM[Qi[27]] = MM[Qi[0]]); MM[Qi[65]] !== Qi[94] || MM[Qi[27]] !== Qi[94];) Hi(MM[Qi[1]] = (MM[Qi[65]] ? MM[Qi[65]].val : … [truncated]
-                 return MM[-Qi[0]] && (MM[Qi[62]].next = new rM(MM[-Qi[0]])), MM[Qi[20]].next
-               }, console.log(MM[Qi[95]]))
-             }
-             jM(138) + "8" in mi && aM();
-             let PM = {
-               10: jM(139) + jM(140) + "k",
-               [jM(141)]: jM(142) + jM(Qi[95]),
-               [jM(144) + "1j"]: jM(145) + jM(146) + "wx",
-               [jM(Qi[71]) + jM(148)]: jM(149) + jM(150)
- ... (27 more removed lines; see GitHub link above)
+               return UU[Dz[12]] = Dz[0], typeof Uz[UU[Dz[2]]] === Dz[13] ? Uz[UU[Dz[2]]] = zU(Xz[UU[Dz[2]]]) : Uz[UU[Dz[2]]]
```

#### 2922. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21982-L21987` → after: `L21935-L21942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21935-L21942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21935-L21942) · [Before (L21982-L21987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21982-L21987)

```diff
-             zi(Qi[63]) in mi && OM();
-             let jM = Qi[94];
-             Hi(MM = Qi[96], (0, SM[iM(Qi[59])])(yM.Bi, jM))
-           }
-         }), 18024), (0, SM[zi(156) + zi(157)])((() => {
-           MM = Qi[91]
+             XU(154) in Nz && AU();
+             let FU = Dz[73];
+             Iz(cU = Dz[35], (0, yU[QU(157)])(gU.Jh, FU))
+           }
+         }), 4601), (0, yU[XU(Dz[47]) + XU(159)])(((...UU) => {
+           UU[Dz[12]] = Dz[2], XU(160) + "E" in Nz && function(...UU) {
+             UU[Dz[12]] = Dz[2]
+           }(), cU = Dz[61]
```

#### 2923. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21992` → after: `L21947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21947) · [Before (L21992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21992)

```diff
-   38275: (MM, rM, iM) => {
+   38034: (UU, XU, zU) => {
```

#### 2924. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21994-L21995` → after: `L21949-L21950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21949-L21950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21949-L21950) · [Before (L21994-L21995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21994-L21995)

```diff
-       b: () => QM,
-       c: () => nM
+       c: () => DU,
+       d: () => oU
```

#### 2925. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L21997-L22001` → after: `L21952-L21956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21952-L21956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21952-L21956) · [Before (L21997-L22001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L21997-L22001)

```diff
-     var OM = iM(38181),
-       SM = iM(38188),
-       jM = iM(38278),
-       aM = iM(38198),
-       PM = iM(38217);
+     var cU = zU(37940),
+       yU = zU(37946),
+       QU = zU(38037),
+       AU = zU(37961),
+       FU = zU(37977);
```

#### 2926. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22007` → after: `L21962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21962) · [Before (L22007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22007)

```diff
-         ...(0, OM.b)("DITHER"),
+         ...(0, cU.d)("DITHER"),
```

#### 2927. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22014-L22015` → after: `L21969-L21970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21969-L21970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21969-L21970) · [Before (L22014-L22015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22014-L22015)

```diff
-         CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,SM.e)(rM,"aOpacity","float","highp")}\n\n\t\t\t\t\t${(0,jM.gb)(rM,"vertex")}\n\t\t\t\t`,
-         CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\tBLOXD_OPACITY = ${(0,SM.Hb)(rM,"aOpacity")};\n\t\t\t\t`
+         CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,yU.c)(XU,"aOpacity","float","highp")}\n\n\t\t\t\t\t${(0,QU.mb)(XU,"vertex")}\n\t\t\t\t`,
+         CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\tBLOXD_OPACITY = ${(0,yU.Ib)(XU,"aOpacity")};\n\t\t\t\t`
```

#### 2928. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22017-L22019` → after: `L21972-L21974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21972-L21974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21972-L21974) · [Before (L22017-L22019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22017-L22019)

```diff
-         CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,jM.gb)(rM,"fragment")}\n\n\t\t\t\t\t${(0,jM.s)(rM)}\n\t\t\t\t`,
-         CUSTOM_FRAGMENT_MAIN_BEGIN: `\n\t\t\t\t\t// Apply Bayer dithering based on opacity\n\t\t\t\t\t${(0,SM.B)(rM,"float","ditherThresh",`bayerDither(${(0,SM.Q)(rM)}.xy)`)}\n\n\t\t\t\t\t${(0,SM.B)(rM,"float","vOpacity","BLOXD_OPACITY")}\n\t\t\t\t\tif (vOpacity <= 0.0 || (vOpaci … [truncated]
-         CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: `\n\t\t\t\t\t#ifndef BLOXD_DITHER_IGNORE_TEXTURE_ALPHA\n\t\t\t\t\t\t${(0,SM.B)(rM,"float","finalOpacity","baseColor.a * color.a * vOpacity")}\n\t\t\t\t\t\tif (finalOpacity <= 0.0 || (finalOpacity < 255.0 / 256.0 && finalOpacity < ditherTh … [truncated]
+         CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,QU.mb)(XU,"fragment")}\n\n\t\t\t\t\t${(0,QU.u)(XU)}\n\t\t\t\t`,
+         CUSTOM_FRAGMENT_MAIN_BEGIN: `\n\t\t\t\t\t// Apply Bayer dithering based on opacity\n\t\t\t\t\t${(0,yU.C)(XU,"float","ditherThresh",`bayerDither(${(0,yU.P)(XU)}.xy)`)}\n\n\t\t\t\t\t${(0,yU.C)(XU,"float","vOpacity","BLOXD_OPACITY")}\n\t\t\t\t\tif (vOpacity <= 0.0 || (vOpaci … [truncated]
+         CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: `\n\t\t\t\t\t#ifndef BLOXD_DITHER_IGNORE_TEXTURE_ALPHA\n\t\t\t\t\t\t${(0,yU.C)(XU,"float","finalOpacity","baseColor.a * color.a * vOpacity")}\n\t\t\t\t\t\tif (finalOpacity <= 0.0 || (finalOpacity < 255.0 / 256.0 && finalOpacity < ditherTh … [truncated]
```

#### 2929. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22027` → after: `L21982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21982) · [Before (L22027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22027)

```diff
-     }(0, aM.l)(nM)
+     }(0, AU.n)(oU)
```

#### 2930. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22029` → after: `L21984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21984) · [Before (L22029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22029)

```diff
-   38178: (MM, rM, iM) => {
+   37932: (UU, XU, zU) => {
```

#### 2931. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22033-L22036` → after: `L21988-L21991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21988-L21991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21988-L21991) · [Before (L22033-L22036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22033-L22036)

```diff
-     var OM = iM(38181),
-       SM = iM(38188),
-       jM = iM(38191),
-       aM = iM(38198);
+     var cU = zU(37940),
+       yU = zU(37946),
+       QU = zU(37954),
+       AU = zU(37961);
```

#### 2932. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22041` → after: `L21996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R21996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L21996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L21996) · [Before (L22041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22041)

```diff
-       defines: () => (0, OM.b)("HUE_TINT"),
+       defines: () => (0, cU.d)("HUE_TINT"),
```

#### 2933. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22047-L22048` → after: `L22002-L22003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22002-L22003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22002-L22003) · [Before (L22047-L22048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22047-L22048)

```diff
-           CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,SM.e)(rM,"aHueColour","vec4","lowp")}\n\t\t\t\t\t${(0,SM.Fb)(rM,"vHueColour","vec4","lowp")}\n\t\t\t\t`,
-           CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${(0,SM.Kb)(rM,"vHueColour")} = ${(0,SM.Hb)(rM,"aHueColour")};\n\t\t\t\t`
+           CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,yU.c)(XU,"aHueColour","vec4","lowp")}\n\t\t\t\t\t${(0,yU.Bb)(XU,"vHueColour","vec4","lowp")}\n\t\t\t\t`,
+           CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${(0,yU.Lb)(XU,"vHueColour")} = ${(0,yU.Ib)(XU,"aHueColour")};\n\t\t\t\t`
```

#### 2934. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22051` → after: `L22006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22006) · [Before (L22051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22051)

```diff
-           const MM = (0, SM.U)(rM, "vHueColour");
+           const UU = (0, yU.R)(XU, "vHueColour");
```

#### 2935. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22053` → after: `L22008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22008) · [Before (L22053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22053)

```diff
-             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,SM.Fb)(rM,"vHueColour","vec4","lowp")}\n\n\t\t\t\t\t${(0,jM.d)(rM,"hueTint")}\n\n\t\t\t\t\t\n\t\t\t\t\t${(0,SM.w)(rM,"float","hueTintShiftHue",[{name:"hue",type:"float"},{name:"targetHue",type:"float"},{name:"factor",type … [truncated]
+             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,yU.Bb)(XU,"vHueColour","vec4","lowp")}\n\n\t\t\t\t\t${(0,QU.d)(XU,"hueTint")}\n\n\t\t\t\t\t\n\t\t\t\t\t${(0,yU.x)(XU,"float","hueTintShiftHue",[{name:"hue",type:"float"},{name:"targetHue",type:"float"},{name:"factor",type … [truncated]
```

#### 2936. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22055` → after: `L22010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22010) · [Before (L22055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22055)

```diff
-               (0, SM.B)(rM, "float", "hueDelta", "targetHue - hue")
+               (0, yU.C)(XU, "float", "hueDelta", "targetHue - hue")
```

#### 2937. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22058` → after: `L22013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22013) · [Before (L22058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22058)

```diff
-               (0, SM.B)(rM, "float", "hueDist", "abs(hueDelta)")
+               (0, yU.C)(XU, "float", "hueDist", "abs(hueDelta)")
```

#### 2938. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22061` → after: `L22016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22016) · [Before (L22061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22061)

```diff
-               (0, SM.B)(rM, "float", "weight", "sin(3.14159265 * hueDist * 2.0)")
+               (0, yU.C)(XU, "float", "weight", "sin(3.14159265 * hueDist * 2.0)")
```

#### 2939. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22064` → after: `L22019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22019) · [Before (L22064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22064)

```diff
-             CUSTOM_FRAGMENT_UPDATE_ALPHA: `\n\t\t\t\t\tif (${MM}.a > 0.5) {\n\t\t\t\t\t\t${(0,SM.B)(rM,"vec3","overlayHSV",`hueTintRgb2hsv(${MM}.rgb)`)}\n\t\t\t\t\t\t${(0,SM.B)(rM,"vec3","greyHSV","hueTintRgb2hsv(baseColor.rgb)")}\n\t\t\t\t\t\t${(0,SM.B)(rM,"float","greyValue","g … [truncated]
+             CUSTOM_FRAGMENT_UPDATE_ALPHA: `\n\t\t\t\t\tif (${UU}.a > 0.5) {\n\t\t\t\t\t\t${(0,yU.C)(XU,"vec3","overlayHSV",`hueTintRgb2hsv(${UU}.rgb)`)}\n\t\t\t\t\t\t${(0,yU.C)(XU,"vec3","greyHSV","hueTintRgb2hsv(baseColor.rgb)")}\n\t\t\t\t\t\t${(0,yU.C)(XU,"float","greyValue","g … [truncated]
```

#### 2940. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22070` → after: `L22025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22025) · [Before (L22070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22070)

```diff
-     (0, aM.l)(PM)
+     (0, AU.n)(FU)
```

#### 2941. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22072` → after: `L22027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22027) · [Before (L22072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22072)

```diff
-   39126: (MM, rM, iM) => {
+   38891: (UU, XU, zU) => {
```

#### 2942. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22074-L22076` → after: `L22029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22029) · [Before (L22074-L22076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22074-L22076)

```diff
-       b: () => hM,
-       c: () => zM,
-       g: () => nM,
+       d: () => pU,
```

#### 2943. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22078` → after: `L22031-L22033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22031-L22033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22031-L22033) · [Before (L22078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22078)

```diff
-       i: () => HM
+       k: () => oU,
+       o: () => DU,
+       p: () => IU
```

#### 2944. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22080-L22084` → after: `L22035-L22039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22035-L22039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22035-L22039) · [Before (L22080-L22084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22080-L22084)

```diff
-     var OM = iM(38181),
-       SM = iM(38310),
-       jM = iM(38188),
-       aM = iM(38198),
-       PM = iM(38217);
+     var cU = zU(37940),
+       yU = zU(38077),
+       QU = zU(37946),
+       AU = zU(37961),
+       FU = zU(37977);
```

#### 2945. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22099` → after: `L22054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22054) · [Before (L22099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22099)

```diff
-       return `aAtlasIdx${MM}`
+       return `aAtlasIdx${UU}`
```

#### 2946. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22103` → after: `L22058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22058) · [Before (L22103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22103)

```diff
-       return `vAtlasIdx${MM}`
+       return `vAtlasIdx${UU}`
```

#### 2947. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22114-L22115` → after: `L22069-L22070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22069-L22070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22069-L22070) · [Before (L22114-L22115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22114-L22115)

```diff
-           ...(0, OM.b)("LIFEFORM"),
-           BLOXD_LIFEFORM_LAYERS: `${MM}`
+           ...(0, cU.d)("LIFEFORM"),
+           BLOXD_LIFEFORM_LAYERS: `${UU}`
```

#### 2948. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22130` → after: `L22085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22085) · [Before (L22130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22130)

```diff
-             for (let SM = 1; SM <= QM(this.numLayers); SM++) MM += `${(0,jM.e)(rM,zM(SM),"vec4","mediump")}\n`, iM += `${(0,jM.Fb)(rM,LM(SM),"vec4","mediump")}\n`, OM += `${(0,jM.Kb)(rM,LM(SM))} = ${(0,jM.Hb)(rM,zM(SM))};\n`;
+             for (let yU = 1; yU <= DU(this.numLayers); yU++) UU += `${(0,QU.c)(XU,EU(yU),"vec4","mediump")}\n`, zU += `${(0,QU.Bb)(XU,YU(yU),"vec4","mediump")}\n`, cU += `${(0,QU.Lb)(XU,YU(yU))} = ${(0,QU.Ib)(XU,EU(yU))};\n`;
```

#### 2949. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22132-L22133` → after: `L22087-L22088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22087-L22088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22087-L22088) · [Before (L22132-L22133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22132-L22133)

```diff
-               CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${MM}\n\n\t\t\t\t\t${iM}\n\t\t\t\t`,
-               CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${OM}\n\t\t\t\t`
+               CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${UU}\n\n\t\t\t\t\t${zU}\n\t\t\t\t`,
+               CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${cU}\n\t\t\t\t`
```

#### 2950. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22138-L22140` → after: `L22093-L22095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22093-L22095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22093-L22095) · [Before (L22138-L22140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22138-L22140)

```diff
-             for (let PM = 1; PM <= QM(this.numLayers); PM++) MM += `${(0,jM.Fb)(rM,LM(PM),"vec4","mediump")}\n`;
-             const iM = (0, jM.Db)(rM, "uLifeformAtlasSize"),
-               OM = (0, jM.U)(rM, "vMainUV1");
+             for (let FU = 1; FU <= DU(this.numLayers); FU++) UU += `${(0,QU.Bb)(XU,YU(FU),"vec4","mediump")}\n`;
+             const zU = (0, QU.xb)(XU, "uLifeformAtlasSize"),
+               cU = (0, QU.R)(XU, "vMainUV1");
```

#### 2951. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22146-L22147` → after: `L22101-L22102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22101-L22102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22101-L22102) · [Before (L22146-L22147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22146-L22147)

```diff
-               } = nM(PM), QM = "xyzw" [aM], zM = `atlasIdx${PM}`;
-               SM += `\n\t\t\t\t\t// Compute grid position from atlas index\n\t\t\t\t\t${(0,jM.B)(rM,"float",zM,`${(0,jM.U)(rM,LM(MM))}.${QM}`)}\n\t\t\t\t\t${(0,jM.B)(rM,"float",`colIdx${PM}`,(0,jM.bb)(rM,zM,`${iM}.x`))}\n\t\t\t\t\t// Adding 0.5 fixes texture bleeding in left colu … [truncated]
+               } = oU(FU), DU = "xyzw" [AU], EU = `atlasIdx${FU}`;
+               yU += `\n\t\t\t\t\t// Compute grid position from atlas index\n\t\t\t\t\t${(0,QU.C)(XU,"float",EU,`${(0,QU.R)(XU,YU(UU))}.${DU}`)}\n\t\t\t\t\t${(0,QU.C)(XU,"float",`colIdx${FU}`,(0,QU.Y)(XU,EU,`${zU}.x`))}\n\t\t\t\t\t// Adding 0.5 fixes texture bleeding in left colum … [truncated]
```

#### 2952. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22149-L22150` → after: `L22104-L22105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22104-L22105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22104-L22105) · [Before (L22149-L22150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22149-L22150)

```diff
-             let aM = `\n\t\t\t\t${(0,jM.B)(rM,"vec4","outCol",`col${this.numLayers}`,"lowp")}\n\t\t\t\t${(0,jM.cb)(rM,"outCol","outCol.a")}\n\t\t\t`;
-             for (let PM = this.numLayers - 1; PM >= 1; PM--) aM += `\n\t\t\t\t\t${(0,jM.kb)(rM,"outCol",`mix(outCol.rgb, col${PM}.rgb, col${PM}.a)`)}\n\t\t\t\t\t// Equivalent to mix(outCol.a, 1.0, col${PM}.a) but without the extra multiply:\n\t\t\t\t\toutCol.a = col${PM}.a + outC … [truncated]
+             let AU = `\n\t\t\t\t${(0,QU.C)(XU,"vec4","outCol",`col${this.numLayers}`,"lowp")}\n\t\t\t\t${(0,QU._)(XU,"outCol","outCol.a")}\n\t\t\t`;
+             for (let FU = this.numLayers - 1; FU >= 1; FU--) AU += `\n\t\t\t\t\t${(0,QU.eb)(XU,"outCol",`mix(outCol.rgb, col${FU}.rgb, col${FU}.a)`)}\n\t\t\t\t\t// Equivalent to mix(outCol.a, 1.0, col${FU}.a) but without the extra multiply:\n\t\t\t\t\toutCol.a = col${FU}.a + outC … [truncated]
```

#### 2953. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22152-L22153` → after: `L22107-L22108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22107-L22108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22107-L22108) · [Before (L22152-L22153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22152-L22153)

```diff
-               CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${MM}\n\t\t\t\t`,
-               [(0, jM.E)(rM)]: `\n\t\t\t\t\t${SM}\n\t\t\t\t\t${aM}\n\n\t\t\t\t\t// Apply damage/status overlay color (e.g., red flash when taking damage)\n\t\t\t\t\tbaseColor = ${(0,jM.n)(rM,"vec4","outCol.rgb / max(outCol.a, 0.001)","outCol.a")};\n\t\t\t\t`
+               CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${UU}\n\t\t\t\t`,
+               [(0, QU.F)(XU)]: `\n\t\t\t\t\t${yU}\n\t\t\t\t\t${AU}\n\n\t\t\t\t\t// Apply damage/status overlay color (e.g., red flash when taking damage)\n\t\t\t\t\tbaseColor = ${(0,QU.k)(XU,"vec4","outCol.rgb / max(outCol.a, 0.001)","outCol.a")};\n\t\t\t\t`
```

#### 2954. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22158` → after: `L22113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22113) · [Before (L22158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22158)

```diff
-         nh() {
+         Fp() {
```

#### 2955. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22166` → after: `L22121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22121) · [Before (L22166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22166)

```diff
-             rM.push(`${(0,jM.U)(MM,LM(OM))}.${"xyzw"[SM]}`)
+             XU.push(`${(0,QU.R)(UU,YU(cU))}.${"xyzw"[yU]}`)
```

#### 2956. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22170` → after: `L22125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22125) · [Before (L22170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22170)

```diff
-               cells: (0, jM.Db)(MM, "uLifeformAtlasSize"),
+               cells: (0, QU.xb)(UU, "uLifeformAtlasSize"),
```

#### 2957. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22172` → after: `L22127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22127) · [Before (L22172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22172)

```diff
-               uv: (0, jM.U)(MM, "vMainUV1")
+               uv: (0, QU.R)(UU, "vMainUV1")
```

#### 2958. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22184` → after: `L22139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22139) · [Before (L22184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22184)

```diff
-     }(0, aM.l)(HM)
+     }(0, AU.n)(IU)
```

#### 2959. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22186` → after: `L22141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22141) · [Before (L22186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22186)

```diff
-   38287: (MM, rM, iM) => {
+   38046: (UU, XU, zU) => {
```

#### 2960. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22188` → after: `L22143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22143) · [Before (L22188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22188)

```diff
-       c: () => aM
+       d: () => AU
```

#### 2961. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22190-L22192` → after: `L22145-L22147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22145-L22147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22145-L22147) · [Before (L22190-L22192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22190-L22192)

```diff
-     var OM = iM(38181),
-       SM = iM(38188),
-       jM = iM(38198);
+     var cU = zU(37940),
+       yU = zU(37946),
+       QU = zU(37961);
```

#### 2962. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22197` → after: `L22152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22152) · [Before (L22197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22197)

```diff
-       defines: () => (0, OM.b)("OVERLAY"),
+       defines: () => (0, cU.d)("OVERLAY"),
```

#### 2963. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22203-L22204` → after: `L22158-L22159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22158-L22159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22158-L22159) · [Before (L22203-L22204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22203-L22204)

```diff
-           CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,SM.e)(rM,"aOverlayColour","vec4","lowp")}\n\t\t\t\t\t${(0,SM.Fb)(rM,"vOverlayColour","vec4","lowp")}\n\t\t\t\t`,
-           CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${(0,SM.Kb)(rM,"vOverlayColour")} = ${(0,SM.Hb)(rM,"aOverlayColour")};\n\t\t\t\t`
+           CUSTOM_VERTEX_DEFINITIONS: `\n\t\t\t\t\t${(0,yU.c)(XU,"aOverlayColour","vec4","lowp")}\n\t\t\t\t\t${(0,yU.Bb)(XU,"vOverlayColour","vec4","lowp")}\n\t\t\t\t`,
+           CUSTOM_VERTEX_MAIN_END: `\n\t\t\t\t\t${(0,yU.Lb)(XU,"vOverlayColour")} = ${(0,yU.Ib)(XU,"aOverlayColour")};\n\t\t\t\t`
```

#### 2964. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22207` → after: `L22162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22162) · [Before (L22207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22207)

```diff
-           const MM = (0, SM.U)(rM, "vOverlayColour");
+           const UU = (0, yU.R)(XU, "vOverlayColour");
```

#### 2965. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22209-L22210` → after: `L22164-L22165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22164-L22165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22164-L22165) · [Before (L22209-L22210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22209-L22210)

```diff
-             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,SM.Fb)(rM,"vOverlayColour","vec4","lowp")}\n\t\t\t\t`,
-             CUSTOM_FRAGMENT_UPDATE_ALPHA: `\n\t\t\t\t\t${(0,SM.kb)(rM,"baseColor",`mix(baseColor.rgb, ${MM}.rgb, ${MM}.a)`)}\n\t\t\t\t`
+             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t\t${(0,yU.Bb)(XU,"vOverlayColour","vec4","lowp")}\n\t\t\t\t`,
+             CUSTOM_FRAGMENT_UPDATE_ALPHA: `\n\t\t\t\t\t${(0,yU.eb)(XU,"baseColor",`mix(baseColor.rgb, ${UU}.rgb, ${UU}.a)`)}\n\t\t\t\t`
```

#### 2966. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22215` → after: `L22170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22170) · [Before (L22215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22215)

```diff
-       nh() {
+       Fp() {
```

#### 2967. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22221` → after: `L22176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22176) · [Before (L22221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22221)

```diff
-             colour: (0, SM.U)(SM.b.WGSL, "vOverlayColour")
+             colour: (0, yU.R)(yU.b.WGSL, "vOverlayColour")
```

#### 2968. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22226` → after: `L22181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22181) · [Before (L22226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22226)

```diff
-     (0, jM.l)(aM)
+     (0, QU.n)(AU)
```

#### 2969. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22228` → after: `L22183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22183) · [Before (L22228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22228)

```diff
-   38205: (MM, rM, iM) => {
+   37968: (UU, XU, zU) => {
```

#### 2970. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22230-L22231` → after: `L22185-L22186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22185-L22186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22185-L22186) · [Before (L22230-L22231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22230-L22231)

```diff
-       d: () => aM,
-       f: () => PM
+       b: () => AU,
+       d: () => FU
```

#### 2971. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22233-L22235` → after: `L22188-L22190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22188-L22190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22188-L22190) · [Before (L22233-L22235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22233-L22235)

```diff
-     var OM = iM(38217),
-       SM = iM(38235),
-       jM = iM(38211);
+     var cU = zU(37977),
+       yU = zU(38007),
+       QU = zU(37970);
```

#### 2972. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22238` → after: `L22193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22193) · [Before (L22238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22238)

```diff
-       const rM = (0, OM.u)(MM.name, MM.YJ),
+       const XU = (0, cU.u)(UU.name, UU.sa),
```

#### 2973. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22242-L22243` → after: `L22197-L22198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22197-L22198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22197-L22198) · [Before (L22242-L22243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22242-L22243)

```diff
-         (0, SM.V)(iM, MM.sets), null === (OM = MM.features) || void 0 === OM || OM.call(MM, rM)
-       })), MM.freeze && MM.unrendered ? (0, jM.f)(iM) : MM.freeze && (0, SM.q)(iM), {
+         (0, yU.U)(zU, UU.sets), null === (cU = UU.features) || void 0 === cU || cU.call(UU, XU)
+       })), UU.freeze && UU.unrendered ? (0, QU.g)(zU) : UU.freeze && (0, yU.k)(zU), {
```

#### 2974. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22251` → after: `L22206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22206) · [Before (L22251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22251)

```diff
-         (0, SM.V)(MM, rM)
+         (0, yU.U)(UU, XU)
```

#### 2975. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22256` → after: `L22211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22211) · [Before (L22256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22256)

```diff
-       rM ? (0, jM.e)(MM, iM) : iM()
+       XU ? (0, QU.d)(UU, zU) : zU()
```

#### 2976. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22259` → after: `L22214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22214) · [Before (L22259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22259)

```diff
-   38692: (MM, rM, iM) => {
+   38462: (UU, XU, zU) => {
```

#### 2977. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22261` → after: `L22216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22216) · [Before (L22261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22261)

```diff
-       c: () => QM,
+       b: () => DU,
```

#### 2978. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22272` → after: `L22227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22227) · [Before (L22272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22272)

```diff
-       return PM ? OM : nM ? SM : null
+       return FU ? cU : oU ? yU : null
```

#### 2979. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22299` → after: `L22254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22254) · [Before (L22299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22299)

```diff
-         values: [MM.xR, MM.RiM, OM, OM.pack, iM, iM.send, SM, SM.send, jM],
+         values: [UU.gC, UU.gcU, cU, cU.pack, zU, zU.send, yU, yU.send, QU],
```

#### 2980. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22331` → after: `L22286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22286) · [Before (L22331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22331)

```diff
-   39433: (MM, rM, iM) => {
+   39206: (UU, XU, zU) => {
```

#### 2981. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22334` → after: `L22289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22289) · [Before (L22334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22334)

```diff
-       i: () => PM,
+       g: () => FU,
```

#### 2982. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22337-L22338` → after: `L22292-L22293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22292-L22293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22292-L22293) · [Before (L22337-L22338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22337-L22338)

```diff
-     var OM = iM(37761),
-       SM = iM(3063);
+     var cU = zU(37532),
+       yU = zU(3043);
```

#### 2983. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22340` → after: `L22295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22295) · [Before (L22340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22340)

```diff
-     const aM = new OM.h((function() {
+     const AU = new cU.i((function() {
```

#### 2984. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22342-L22343` → after: `L22297-L22298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22297-L22298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22297-L22298) · [Before (L22342-L22343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22342-L22343)

```diff
-           rM = (0, SM.f)().camera;
-         rM.yI = MM, rM.pI = MM
+           XU = (0, yU.e)().camera;
+         XU.iK = UU, XU.VK = UU
```

#### 2985. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22352` → after: `L22307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22307) · [Before (L22352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22352)

```diff
-   38837: (MM, rM, iM) => {
+   38603: (UU, XU, zU) => {
```

#### 2986. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22354` → after: `L22309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22309) · [Before (L22354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22354)

```diff
-       b: () => SM
+       d: () => yU
```

#### 2987. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22356` → after: `L22311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22311) · [Before (L22356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22356)

```diff
-     var OM = iM(38590);
+     var cU = zU(38361);
```

#### 2988. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22359` → after: `L22314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22314) · [Before (L22359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22359)

```diff
-       return MM ? OM.i.indexOf(MM) + 1 : 0
+       return UU ? cU.d.indexOf(UU) + 1 : 0
```

#### 2989. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22362` → after: `L22317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22317) · [Before (L22362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22362)

```diff
-   38684: (MM, rM, iM) => {
+   38455: (UU, XU, zU) => {
```

#### 2990. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22364-L22365` → after: `L22319-L22320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22319-L22320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22319-L22320) · [Before (L22364-L22365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22364-L22365)

```diff
-       d: () => PM,
-       e: () => QM
+       e: () => FU,
+       h: () => DU
```

#### 2991. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22367-L22369` → after: `L22322-L22324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22322-L22324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22322-L22324) · [Before (L22367-L22369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22367-L22369)

```diff
-     var OM = iM(19),
-       SM = iM(3063),
-       jM = iM(22);
+     var cU = zU(27),
+       yU = zU(3043),
+       QU = zU(31);
```

#### 2992. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22373` → after: `L22328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22328) · [Before (L22373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22373)

```diff
-       nM(MM.CL)
+       oU(UU.WY)
```

#### 2993. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22377` → after: `L22332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22332) · [Before (L22377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22377)

```diff
-       MM && (MM.TPM = OM.d.get("clientEscMenuOptions").chunkFadeIn)
+       UU && (UU.SoU = cU.e.get("clientEscMenuOptions").chunkFadeIn)
```

#### 2994. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22381` → after: `L22336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22336) · [Before (L22381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22381)

```diff
-       MM.CL.PnM(aM)
+       UU.WY.noU(AU)
```

#### 2995. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22383` → after: `L22338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22338) · [Before (L22383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22383)

```diff
-     jM.i.subscribe("localPlayerTeleported", (MM => {
+     QU.k.subscribe("localPlayerTeleported", (UU => {
```

#### 2996. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22387-L22388` → after: `L22342-L22343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22342-L22343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22342-L22343) · [Before (L22387-L22388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22387-L22388)

```diff
-       rM || (0, SM.f)().CL.PnM(1500)
-     })), jM.i.subscribe("appManagerUpdated|clientEscMenuOptions", (() => {
+       XU || (0, yU.e)().WY.noU(1500)
+     })), QU.k.subscribe("appManagerUpdated|clientEscMenuOptions", (() => {
```

#### 2997. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22390` → after: `L22345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22345) · [Before (L22390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22390)

```diff
-       nM(null === (MM = (0, SM.f)()) || void 0 === MM ? void 0 : MM.CL)
+       oU(null === (UU = (0, yU.e)()) || void 0 === UU ? void 0 : UU.WY)
```

#### 2998. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22393` → after: `L22348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22348) · [Before (L22393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22393)

```diff
-   38585: (MM, rM, iM) => {
+   38356: (UU, XU, zU) => {
```

#### 2999. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22398-L22400` → after: `L22353-L22355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22353-L22355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22353-L22355) · [Before (L22398-L22400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22398-L22400)

```diff
-       e: () => SM,
-       i: () => OM,
-       l: () => jM
+       b: () => yU,
+       d: () => cU,
+       f: () => QU
```

#### 3000. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22408` → after: `L22363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22363) · [Before (L22408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22408)

```diff
-   38211: (MM, rM, iM) => {
+   37970: (UU, XU, zU) => {
```

#### 3001. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22410-L22411` → after: `L22365-L22366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22365-L22366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22365-L22366) · [Before (L22410-L22411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22410-L22411)

```diff
-       e: () => SM,
-       f: () => jM
+       d: () => yU,
+       g: () => QU
```

#### 3002. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22413` → after: `L22368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22368) · [Before (L22413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22413)

```diff
-     var OM = iM(38217);
+     var cU = zU(37977);
```

#### 3003. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22427` → after: `L22382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22382) · [Before (L22427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22427)

```diff
-       MM.checkReadyOnlyOnce = !0, (0, OM.$)(MM, !0)
+       UU.checkReadyOnlyOnce = !0, (0, cU.X)(UU, !0)
```

#### 3004. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22430` → after: `L22385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22385) · [Before (L22430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22430)

```diff
-   38670: (MM, rM, iM) => {
+   38431: (UU, XU, zU) => {
```

#### 3005. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22432` → after: `L22387-L22388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22387-L22388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22387-L22388) · [Before (L22432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22432)

```diff
-       d: () => Mr,
+       c: () => UX,
+       e: () => vU,
```

#### 3006. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22434` → after: `L22390-L22391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22390-L22391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22390-L22391) · [Before (L22434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22434)

```diff
-       k: () => BM,
+       l: () => JU,
+       m: () => TU,
```

#### 3007. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22436-L22439` → after: `L22393-L22394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22393-L22394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22393-L22394) · [Before (L22436-L22439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22436-L22439)

```diff
-       q: () => VM,
-       r: () => jr,
-       w: () => nr,
-       t: () => Pr
+       s: () => oX,
+       r: () => FX
```

#### 3008. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22441-L22445` → after: `L22396-L22400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22396-L22400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22396-L22400) · [Before (L22441-L22445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22441-L22445)

```diff
-     var OM = iM(3057),
-       SM = iM(4069),
-       jM = iM(38675),
-       aM = iM(181),
-       PM = iM(3160),
+     var cU = zU(3036),
+       yU = zU(4063),
+       QU = zU(38437),
+       AU = zU(212),
+       FU = zU(3134),
```

#### 3009. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22447` → after: `L22402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22402) · [Before (L22447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22447)

```diff
-       QM = iM(38379);
+       DU = zU(38152);
```

#### 3010. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22496-L22514` → after: `L22451-L22469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22451-L22469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22451-L22469) · [Before (L22496-L22514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22496-L22514)

```diff
-     var LM = iM(38680),
-       mM = iM(38701),
-       HM = iM(4129),
-       hM = iM(3846),
-       JM = iM(3063),
-       dM = iM(22),
-       yM = iM(38684),
-       lM = iM(625),
-       EM = iM(38662),
-       UM = iM(38721),
-       GM = iM(5069),
-       CM = iM(38692),
-       eM = iM(3130),
-       bM = iM(3155),
-       wM = iM(9816),
-       tM = iM(1329);
- ... (3 more removed lines; see GitHub link above)
+     var YU = zU(38443),
+       NU = zU(38469),
+       IU = zU(4139),
+       pU = zU(3840),
+       aU = zU(3043),
+       tU = zU(31),
+       gU = zU(38455),
+       kU = zU(646),
+       GU = zU(38422),
+       BU = zU(38479),
+       ZU = zU(5179),
+       RU = zU(38462),
+       PU = zU(3107),
+       WU = zU(3128),
+       dU = zU(9782),
+       LU = zU(1325);
+ ... (3 more added lines; see GitHub link above)
```

#### 3011. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22517` → after: `L22472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22472) · [Before (L22517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22517)

```diff
-       return `${MM}|${rM}|${iM}`
+       return `${UU}|${XU}|${zU}`
```

#### 3012. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22523` → after: `L22478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22478) · [Before (L22523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22523)

```diff
-     var sM = iM(3139);
+     var SU = zU(3116);
```

#### 3013. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22529` → after: `L22484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22484) · [Before (L22529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22529)

```diff
-           Va: null,
+           bA: null,
```

#### 3014. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22531` → after: `L22486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22486) · [Before (L22531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22531)

```diff
-         }), DM[MM].blockArr = rM, DM[MM].Va = Date.now(), DM[MM].sharedBlockData = iM.length > 0 ? sM.d.deflate(JSON.stringify(iM)) : null
+         }), rU[UU].blockArr = XU, rU[UU].bA = Date.now(), rU[UU].sharedBlockData = zU.length > 0 ? SU.d.deflate(JSON.stringify(zU)) : null
```

#### 3015. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22533` → after: `L22488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22488) · [Before (L22533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22533)

```diff
-     dM.i.subscribe("changeBlockFail", (MM => {
+     tU.k.subscribe("changeBlockFail", (UU => {
```

#### 3016. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22535` → after: `L22490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22490) · [Before (L22535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22535)

```diff
-           GO: rM
+           wc: XU
```

#### 3017. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22538-L22539` → after: `L22493-L22494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22493-L22494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22493-L22494) · [Before (L22538-L22539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22538-L22539)

```diff
-         if (!(0, JM.b)().EX(rM[0], rM[1], rM[2])) {
-           const MM = `${(0,lM.Y)(rM)}|${cM}`;
+         if (!(0, aU.b)().KJ(XU[0], XU[1], XU[2])) {
+           const UU = `${(0,kU.cb)(XU)}|${hU}`;
```

#### 3018. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22546` → after: `L22501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22501) · [Before (L22546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22546)

```diff
-         this.blockMetadata = MM, this.itemMetadata = rM, this.getWorker = iM, this.worker = null, this.wasmModule = null, this.waitingChunkCallbacks = {}, this.generatorInitReqCounts = new Map, this.profiler = new zM((() => this.liveWorker())), this.busynessTracker = new QM.d(1)
+         this.blockMetadata = UU, this.itemMetadata = XU, this.getWorker = zU, this.worker = null, this.wasmModule = null, this.waitingChunkCallbacks = {}, this.generatorInitReqCounts = new Map, this.profiler = new EU((() => this.liveWorker())), this.busynessTracker = new DU.b(1)
```

#### 3019. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22556` → after: `L22511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22511) · [Before (L22556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22556)

```diff
-           HL: aM.f.HL,
+           aY: AU.f.aY,
```

#### 3020. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22566` → after: `L22521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22521) · [Before (L22566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22566)

```diff
-         return null !== (MM = this.worker) && void 0 !== MM ? MM : this.startWorker()
+         return null !== (UU = this.worker) && void 0 !== UU ? UU : this.startWorker()
```

#### 3021. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22587` → after: `L22542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22542) · [Before (L22587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22587)

```diff
-             } = rM, SM = nM()(new Uint16Array(iM.data.buffer), [aM.f.HL, aM.f.HL, aM.f.HL]);
+             } = XU, yU = oU()(new Uint16Array(zU.data.buffer), [AU.f.aY, AU.f.aY, AU.f.aY]);
```

#### 3022. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22625-L22627` → after: `L22580-L22582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22580-L22582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22580-L22582) · [Before (L22625-L22627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22625-L22627)

```diff
-           NS: iM,
-           vS: OM
-         }), this.generatorInitReqCounts.set(MM, (null !== (SM = this.generatorInitReqCounts.get(MM)) && void 0 !== SM ? SM : 0) + 1)
+           Hy: zU,
+           vy: cU
+         }), this.generatorInitReqCounts.set(UU, (null !== (yU = this.generatorInitReqCounts.get(UU)) && void 0 !== yU ? yU : 0) + 1)
```

#### 3023. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22631` → after: `L22586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22586) · [Before (L22631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22631)

```diff
-         const OM = (null !== (rM = this.generatorInitReqCounts.get(MM)) && void 0 !== rM ? rM : 0) - 1;
+         const cU = (null !== (XU = this.generatorInitReqCounts.get(UU)) && void 0 !== XU ? XU : 0) - 1;
```

#### 3024. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22640` → after: `L22595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22595) · [Before (L22640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22640)

```diff
-           nM = null !== (aM = this.waitingChunkCallbacks[PM]) && void 0 !== aM ? aM : [];
+           oU = null !== (AU = this.waitingChunkCallbacks[FU]) && void 0 !== AU ? AU : [];
```

#### 3025. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22661-L22662` → after: `L22616-L22617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22616-L22617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22616-L22617) · [Before (L22661-L22662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22661-L22662)

```diff
-     }(null, null, (() => (0, LM.d)()));
-     OM.b.setWorldgenStatsProvider((() => NM.getAndResetWorkerThroughputStats()));
+     }(null, null, (() => (0, YU.c)()));
+     cU.d.setWorldgenStatsProvider((() => vU.getAndResetWorkerThroughputStats()));
```

#### 3026. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22685` → after: `L22640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22640) · [Before (L22685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22685)

```diff
-             KS: Math.floor(MM) + 199
+             ly: Math.floor(UU) + 199
```

#### 3027. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22732` → after: `L22687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22687) · [Before (L22732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22732)

```diff
-         for (let jM = iM.y; jM <= iM.KS; jM++) {
+         for (let QU = zU.y; QU <= zU.ly; QU++) {
```

#### 3028. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22763` → after: `L22718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22718) · [Before (L22763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22763)

```diff
-             this.driver.threadedGetChunk(this.seed, (0, bM.j)(gM), rM, iM, OM, ((MM, rM) => {
+             this.driver.threadedGetChunk(this.seed, (0, WU.i)(eU), XU, zU, cU, ((UU, XU) => {
```

#### 3029. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22786` → after: `L22741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22741) · [Before (L22786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22786)

```diff
-       xM[MM.id] || (xM[MM.id] = []), xM[MM.id].push(MM), null === (rM = jM.e.chunkRequested) || void 0 === rM || rM.call(jM.e, MM.id)
+       sU[UU.id] || (sU[UU.id] = []), sU[UU.id].push(UU), null === (XU = QU.d.chunkRequested) || void 0 === XU || XU.call(QU.d, UU.id)
```

#### 3030. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22790` → after: `L22745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22745) · [Before (L22790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22790)

```diff
-       AM.clear(), YM = !1, oM = !1, NM.destroySeed(fM), fM = null, MM.uL.miM(), DM = {}, xM = {}
+       VU.clear(), MU = !1, iU = !1, vU.destroySeed(HU), HU = null, UU.qY.hzU(), rU = {}, sU = {}
```

#### 3031. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22794-L22795` → after: `L22749-L22750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22749-L22750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22749-L22750) · [Before (L22794-L22795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22794-L22795)

```diff
-       const rM = MM.uL;
-       rM.YrM.forEach((MM => {
+       const XU = UU.qY;
+       XU.LzU.forEach((UU => {
```

#### 3032. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22797-L22798` → after: `L22752-L22753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22752-L22753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22752-L22753) · [Before (L22797-L22798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22797-L22798)

```diff
-         rM.qJ.remove(iM, OM, SM)
-       })), rM.YrM.empty(), rM.KnM = 0, xM = {}, DM = {}
+         XU.ha.remove(zU, cU, yU)
+       })), XU.LzU.empty(), XU.CDU = 0, sU = {}, rU = {}
```

#### 3033. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22807-L22808` → after: `L22762-L22763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22762-L22763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22762-L22763) · [Before (L22807-L22808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22807-L22808)

```diff
-       const [iM, OM, SM] = (0, mM.j)(rM), jM = aM.f.HL;
-       vM = !0, MM.uL.yiM(iM * jM, OM * jM, SM * jM), vM = !1, (0, JM.b)().removingChunk(iM, OM, SM, !1);
+       const [zU, cU, yU] = (0, NU.h)(XU), QU = AU.f.aY;
+       nU = !0, UU.qY.QcU(zU * QU, cU * QU, yU * QU), nU = !1, (0, aU.b)().removingChunk(zU, cU, yU, !1);
```

#### 3034. `bundles/preprod.bloxd.io/chunks/js/88.js` (Changed code · before: `L22810` → after: `L22765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46R22765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d4f3a0dc58aa09520c3c4a5417ecba875c87036971bd8cb366a3c3376cf3e46) · [After (L22765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/88.js#L22765) · [Before (L22810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/88.js#L22810)

```diff
-       delete DM[`${(0,mM.d)(iM,OM,SM)}|${PM}`]
+       delete rU[`${(0,NU.b)(zU,cU,yU)}|${FU}`]
```
